import { create } from 'zustand';
import type { Question, QuizConfig } from '@/types/question';

export interface AnswerRecord {
  questionId: string;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  category: string;
  timeSpentMs: number;
}

export interface QuizResult {
  totalQuestions: number;
  correctCount: number;
  scorePercent: number;
  passed: boolean;
  passingScore: number;
  answers: AnswerRecord[];
  weakCategories: string[];
  totalTimeMs: number;
}

type Phase = 'idle' | 'active' | 'complete';

interface QuizStore {
  // Config
  config: QuizConfig | null;

  // Runtime state
  phase: Phase;
  currentIndex: number;
  answers: AnswerRecord[];
  sessionStartTime: number | null;
  questionStartTime: number | null;
  timeRemaining: number | null;  // seconds, null = no timer

  // Computed result (set on complete)
  result: QuizResult | null;

  // Actions
  startQuiz: (config: QuizConfig) => void;
  submitAnswer: (selectedIndex: number) => void;
  nextQuestion: () => void;
  skipQuestion: () => void;
  tickTimer: () => void;
  resetQuiz: () => void;

  // Helpers
  currentQuestion: () => Question | null;
  currentAnswer: () => AnswerRecord | undefined;
  isAnswered: () => boolean;
  progress: () => { answered: number; total: number; percent: number };
}

function computeResult(config: QuizConfig, answers: AnswerRecord[], totalTimeMs: number): QuizResult {
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const scorePercent = answers.length > 0 ? correctCount / answers.length : 0;

  // Category accuracy
  const categoryMap: Record<string, { correct: number; total: number }> = {};
  for (const a of answers) {
    if (!categoryMap[a.category]) categoryMap[a.category] = { correct: 0, total: 0 };
    categoryMap[a.category].total++;
    if (a.isCorrect) categoryMap[a.category].correct++;
  }
  const weakCategories = Object.entries(categoryMap)
    .filter(([, v]) => v.total >= 2 && v.correct / v.total < 0.6)
    .map(([k]) => k);

  return {
    totalQuestions: config.questions.length,
    correctCount,
    scorePercent,
    passed: scorePercent >= config.passingScore,
    passingScore: config.passingScore,
    answers,
    weakCategories,
    totalTimeMs,
  };
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  config: null,
  phase: 'idle',
  currentIndex: 0,
  answers: [],
  sessionStartTime: null,
  questionStartTime: null,
  timeRemaining: null,
  result: null,

  startQuiz: (config) => {
    set({
      config,
      phase: 'active',
      currentIndex: 0,
      answers: [],
      sessionStartTime: Date.now(),
      questionStartTime: Date.now(),
      timeRemaining: config.timeLimitSecs ?? null,
      result: null,
    });
  },

  submitAnswer: (selectedIndex) => {
    const { config, currentIndex, answers, questionStartTime } = get();
    if (!config) return;
    const q = config.questions[currentIndex];
    if (!q) return;

    // Prevent double-submit
    if (answers.find((a) => a.questionId === q.id)) return;

    const timeSpentMs = questionStartTime ? Date.now() - questionStartTime : 0;
    const record: AnswerRecord = {
      questionId: q.id,
      selectedIndex,
      correctIndex: q.correctIndex,
      isCorrect: selectedIndex === q.correctIndex,
      category: q.category,
      timeSpentMs,
    };

    set((s) => ({ answers: [...s.answers, record] }));
  },

  nextQuestion: () => {
    const { config, currentIndex, answers, sessionStartTime } = get();
    if (!config) return;

    const nextIndex = currentIndex + 1;

    if (nextIndex >= config.questions.length) {
      // Quiz complete
      const totalTimeMs = sessionStartTime ? Date.now() - sessionStartTime : 0;
      const result = computeResult(config, answers, totalTimeMs);
      set({ phase: 'complete', result, currentIndex: nextIndex });
    } else {
      set({ currentIndex: nextIndex, questionStartTime: Date.now() });
    }
  },

  skipQuestion: () => {
    // Treat skip as wrong answer with selectedIndex -1
    const { config, currentIndex } = get();
    if (!config) return;
    const q = config.questions[currentIndex];
    if (!q) return;

    const record: AnswerRecord = {
      questionId: q.id,
      selectedIndex: -1,
      correctIndex: q.correctIndex,
      isCorrect: false,
      category: q.category,
      timeSpentMs: 0,
    };
    set((s) => ({ answers: [...s.answers, record] }));
    get().nextQuestion();
  },

  tickTimer: () => {
    set((s) => {
      if (s.timeRemaining === null || s.timeRemaining <= 0) return s;
      const next = s.timeRemaining - 1;
      if (next <= 0) {
        // Time's up — auto-submit remaining as skipped and complete
        const remaining = s.config!.questions.slice(s.currentIndex).map((q) => ({
          questionId: q.id,
          selectedIndex: -1,
          correctIndex: q.correctIndex,
          isCorrect: false,
          category: q.category,
          timeSpentMs: 0,
        }));
        const allAnswers = [...s.answers, ...remaining];
        const totalTimeMs = s.sessionStartTime ? Date.now() - s.sessionStartTime : 0;
        const result = computeResult(s.config!, allAnswers, totalTimeMs);
        return { timeRemaining: 0, phase: 'complete', result, answers: allAnswers };
      }
      return { timeRemaining: next };
    });
  },

  resetQuiz: () =>
    set({
      config: null,
      phase: 'idle',
      currentIndex: 0,
      answers: [],
      sessionStartTime: null,
      questionStartTime: null,
      timeRemaining: null,
      result: null,
    }),

  currentQuestion: () => {
    const { config, currentIndex } = get();
    return config?.questions[currentIndex] ?? null;
  },

  currentAnswer: () => {
    const { config, currentIndex, answers } = get();
    const q = config?.questions[currentIndex];
    return q ? answers.find((a) => a.questionId === q.id) : undefined;
  },

  isAnswered: () => !!get().currentAnswer(),

  progress: () => {
    const { config, answers } = get();
    const total = config?.questions.length ?? 0;
    const answered = answers.length;
    return { answered, total, percent: total > 0 ? Math.round((answered / total) * 100) : 0 };
  },
}));
