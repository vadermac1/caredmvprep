// Loader: imports the state facts table.

import type { StateFacts } from "../../src/data/questions/schema";

export async function loadStateFacts(): Promise<StateFacts[]> {
  try {
    const mod = await import("../../src/data/questions/state-facts");
    return mod.default;
  } catch {
    console.warn("Warning: src/data/questions/state-facts.ts not found. Run state facts build first.");
    return [];
  }
}
