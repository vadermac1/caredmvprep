"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useQuizStore } from "@/store/quiz";
import { createClient } from "@/lib/supabase/client";
import WeakTopics from "@/components/dashboard/WeakTopics";


export default function QuizResults() {
  const result = useQuizStore((s) => s.result);
  const config = useQuizStore((s) => s.config);
  const resetQuiz = useQuizStore((s) => s.resetQuiz);

  // Persist to Supabase on mount.
  // 3-step flow required by DB trigger design:
  //   Step 1: INSERT session (completed_at = NULL, started_at = actual start)
  //   Step 2: INSERT user_answers (with user_id for fast RLS)
  //   Step 3: UPDATE session SET completed_at → triggers refresh_weak_topics + update_streak
  useEffect(() => {
    if (!result || !config) return;
    async function persist() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !result || !config) return;

      // Step 1 — create the session row (not yet marked complete)
      const startedAt = new Date(Date.now() - result.totalTimeMs).toISOString();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data: session } = await (supabase as any)
        .from("quiz_sessions")
        .insert({
          user_id:         user.id,
          test_id:         config.testId,
          state:           config.state,
          license_type:    config.licenseType,
          total_questions: result.totalQuestions,
          time_limit_secs: config.timeLimitSecs ?? null,
          started_at:      startedAt,
          // score and passed are NULL until Step 3
        })
        .select("id")
        .single() as { data: { id: string } | null };

      if (!session?.id) return;

      // Step 2 — insert all answers (user_id enables fast RLS without a join)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase as any).from("user_answers").insert(
        result.answers.map((a) => ({
          session_id:     session.id,
          user_id:        user.id,
          question_id:    a.questionId,
          selected_index: a.selectedIndex,
          correct_index:  a.correctIndex,
          is_correct:     a.isCorrect,
          category:       a.category,
          time_spent_ms:  a.timeSpentMs,
        }))
      );

      // Step 3 — mark session complete; DB trigger refresh_weak_topics + update_streak fire here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase as any)
        .from("quiz_sessions")
        .update({
          completed_at: new Date().toISOString(),
          score:        result.correctCount,
          passed:       result.passed,
        })
        .eq("id", session.id);
    }
    persist();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!result || !config) return null;

  const pct = Math.round(result.scorePercent * 100);
  const passingPct = Math.round(result.passingScore * 100);

  // Build weak topics for component
  const categoryMap: Record<string, { correct: number; total: number }> = {};
  for (const a of result.answers) {
    if (!categoryMap[a.category]) categoryMap[a.category] = { correct: 0, total: 0 };
    categoryMap[a.category].total++;
    if (a.isCorrect) categoryMap[a.category].correct++;
  }
  const topicData = Object.entries(categoryMap)
    .map(([category, v]) => ({ category, ...v }))
    .sort((a, b) => (a.correct / a.total) - (b.correct / b.total));

  const mins = Math.floor(result.totalTimeMs / 60000);
  const secs = Math.floor((result.totalTimeMs % 60000) / 1000);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result hero */}
      <div
        className="rounded-2xl px-6 py-8 text-center mb-6 text-white"
        style={{ backgroundColor: result.passed ? '#1a7f3c' : '#0f1e3c' }}
      >
        <div className="text-5xl font-extrabold mb-2">{pct}%</div>
        <div className="text-xl font-bold mb-1">
          {result.passed ? "🎉 You Passed!" : "Not Quite — Keep Studying"}
        </div>
        <p className="text-sm opacity-80">
          {result.correctCount} of {result.totalQuestions} correct · Passing score: {passingPct}%
          {result.totalTimeMs > 0 && ` · Time: ${mins}m ${String(secs).padStart(2,'0')}s`}
        </p>
      </div>

      {/* Weak topics */}
      {topicData.length > 0 && (
        <div className="mb-6">
          <WeakTopics topics={topicData} />
        </div>
      )}

      {/* Per-question review */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Question Review</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {config.questions.map((q, i) => {
            const ans = result.answers.find((a) => a.questionId === q.id);
            if (!ans) return null;
            return (
              <div key={q.id} className="px-5 py-4">
                <div className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: ans.isCorrect ? '#16a34a' : '#ef4444' }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 leading-snug mb-1">{q.question}</p>
                    <p className="text-xs text-gray-500">
                      {ans.isCorrect
                        ? `✓ ${q.options[q.correctIndex]}`
                        : `✗ You chose: ${ans.selectedIndex >= 0 ? q.options[ans.selectedIndex] : 'Skipped'} · Correct: ${q.options[q.correctIndex]}`}
                    </p>
                    {!ans.isCorrect && (
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{q.explanation}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => {
            resetQuiz();
            window.location.reload();
          }}
          className="flex-1 py-3 rounded-xl font-bold text-white text-sm transition hover:opacity-90"
          style={{ backgroundColor: '#1a7f3c' }}
        >
          Retake Test
        </button>
        <Link
          href="/dashboard"
          className="flex-1 py-3 rounded-xl font-bold text-center text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
