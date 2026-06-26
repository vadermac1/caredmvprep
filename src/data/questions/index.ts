import type { QuizConfig } from "@/types/question";
import { californiaPermitQuestions } from "./california-permit";

// Registry of all available quiz configs.
// Add new question banks here as they are created.
export const quizRegistry: Record<string, QuizConfig> = {
  "california-permit": {
    testId: "california-permit",
    label: "California Permit Practice Test",
    state: "california",
    licenseType: "permit",
    questions: californiaPermitQuestions,
    passingScore: 0.80,
  },
};

export function getQuizConfig(testId: string): QuizConfig | null {
  return quizRegistry[testId] ?? null;
}

export function getAllTestIds(): string[] {
  return Object.keys(quizRegistry);
}
