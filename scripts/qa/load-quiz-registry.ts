// Loader: returns the quiz registry mapping quizId → array of question IDs.
// The registry in src/data/questions/index.ts stores QuizConfig objects;
// we extract just the question IDs for QA purposes.

export async function loadQuizRegistry(): Promise<Record<string, string[]>> {
  try {
    const mod = await import("../../src/data/questions/index");
    const registry = mod.quizRegistry ?? {};
    const result: Record<string, string[]> = {};
    for (const [quizId, config] of Object.entries(registry)) {
      const questions = (config as { questions?: Array<{ id: string }> }).questions ?? [];
      result[quizId] = questions.map((q) => q.id);
    }
    return result;
  } catch {
    return {};
  }
}
