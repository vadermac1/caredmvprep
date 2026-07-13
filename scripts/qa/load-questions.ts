// Loader: aggregates all question files into a single array for QA scripts.
// Only re-export — never modify question data in this file.

import type { Question } from "../../src/data/questions/schema";

export async function loadAllQuestions(): Promise<Question[]> {
  const modules: { default: Question[] }[] = [];

  // ── DMV questions (one file per state) ──────────────────────────────────
  modules.push(await import("../../src/data/questions/dmv/california"));
  modules.push(await import("../../src/data/questions/dmv/texas"));
  modules.push(await import("../../src/data/questions/dmv/florida"));
  modules.push(await import("../../src/data/questions/dmv/new-york"));
  modules.push(await import("../../src/data/questions/dmv/pennsylvania"));
  modules.push(await import("../../src/data/questions/dmv/illinois"));
  modules.push(await import("../../src/data/questions/dmv/ohio"));
  modules.push(await import("../../src/data/questions/dmv/georgia"));
  modules.push(await import("../../src/data/questions/dmv/north-carolina"));
  modules.push(await import("../../src/data/questions/dmv/arizona"));
  modules.push(await import("../../src/data/questions/dmv/indiana"));
  modules.push(await import("../../src/data/questions/dmv/michigan"));
  modules.push(await import("../../src/data/questions/dmv/missouri"));
  modules.push(await import("../../src/data/questions/dmv/tennessee"));
  modules.push(await import("../../src/data/questions/dmv/virginia"));
  modules.push(await import("../../src/data/questions/dmv/washington"));
  modules.push(await import("../../src/data/questions/dmv/new-jersey"));
  modules.push(await import("../../src/data/questions/dmv/maryland"));
  modules.push(await import("../../src/data/questions/dmv/south-carolina"));
  modules.push(await import("../../src/data/questions/dmv/massachusetts"));
  modules.push(await import("../../src/data/questions/dmv/alabama"));
  modules.push(await import("../../src/data/questions/dmv/colorado"));
  modules.push(await import("../../src/data/questions/dmv/wisconsin"));
  modules.push(await import("../../src/data/questions/dmv/minnesota"));
  modules.push(await import("../../src/data/questions/dmv/louisiana"));
  modules.push(await import("../../src/data/questions/dmv/kentucky"));
  modules.push(await import("../../src/data/questions/dmv/oregon"));
  modules.push(await import("../../src/data/questions/dmv/oklahoma"));
  modules.push(await import("../../src/data/questions/dmv/connecticut"));
  modules.push(await import("../../src/data/questions/dmv/nevada"));

  // ── CDL questions ────────────────────────────────────────────────────────
  modules.push(await import("../../src/data/questions/cdl/federal"));
  modules.push(await import("../../src/data/questions/cdl/school-bus"));
  modules.push(await import("../../src/data/questions/cdl/tank-vehicles"));
  modules.push(await import("../../src/data/questions/cdl/air-brakes"));
  modules.push(await import("../../src/data/questions/cdl/combination-vehicles"));
  modules.push(await import("../../src/data/questions/cdl/hazmat"));
  modules.push(await import("../../src/data/questions/cdl/doubles-triples"));
  modules.push(await import("../../src/data/questions/cdl/passenger"));

  // ── Motorcycle questions ─────────────────────────────────────────────────
  modules.push(await import("../../src/data/questions/motorcycle/california"));
  modules.push(await import("../../src/data/questions/motorcycle/texas"));
  modules.push(await import("../../src/data/questions/motorcycle/florida"));
  modules.push(await import("../../src/data/questions/motorcycle/new-york"));
  modules.push(await import("../../src/data/questions/motorcycle/pennsylvania"));
  modules.push(await import("../../src/data/questions/motorcycle/illinois"));
  modules.push(await import("../../src/data/questions/motorcycle/ohio"));
  modules.push(await import("../../src/data/questions/motorcycle/georgia"));
  modules.push(await import("../../src/data/questions/motorcycle/north-carolina"));
  modules.push(await import("../../src/data/questions/motorcycle/arizona"));
  modules.push(await import("../../src/data/questions/motorcycle/missouri"));
  modules.push(await import("../../src/data/questions/motorcycle/virginia"));
  modules.push(await import("../../src/data/questions/motorcycle/maryland"));
  modules.push(await import("../../src/data/questions/motorcycle/south-carolina"));
  modules.push(await import("../../src/data/questions/motorcycle/massachusetts"));
  modules.push(await import("../../src/data/questions/motorcycle/alabama"));
  modules.push(await import("../../src/data/questions/motorcycle/colorado"));
  modules.push(await import("../../src/data/questions/motorcycle/wisconsin"));
  modules.push(await import("../../src/data/questions/motorcycle/minnesota"));
  modules.push(await import("../../src/data/questions/motorcycle/louisiana"));
  modules.push(await import("../../src/data/questions/motorcycle/kentucky"));
  modules.push(await import("../../src/data/questions/motorcycle/oregon"));
  modules.push(await import("../../src/data/questions/motorcycle/oklahoma"));
  modules.push(await import("../../src/data/questions/motorcycle/connecticut"));
  modules.push(await import("../../src/data/questions/motorcycle/nevada"));

  return modules.flatMap(m => m.default);
}
