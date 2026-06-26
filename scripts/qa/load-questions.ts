// Loader: aggregates all question files into a single array.
// Add new question files here as they are created.
// Only re-export — never modify question data in this file.

import type { Question } from "../../src/data/questions/schema";

export async function loadAllQuestions(): Promise<Question[]> {
  const modules: { default: Question[] }[] = [];

  // ── DMV questions (one file per state) ──────────────────────────────
  // Example (uncomment as files are created):
  // modules.push(await import("../../src/data/questions/dmv/california"));
  // modules.push(await import("../../src/data/questions/dmv/texas"));

  // ── CDL questions ────────────────────────────────────────────────────
  // modules.push(await import("../../src/data/questions/cdl/federal"));
  // modules.push(await import("../../src/data/questions/cdl/california"));

  // ── Motorcycle questions ─────────────────────────────────────────────
  // modules.push(await import("../../src/data/questions/motorcycle/federal"));
  // modules.push(await import("../../src/data/questions/motorcycle/california"));

  return modules.flatMap(m => m.default);
}
