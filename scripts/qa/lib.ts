// Shared utilities for all QA scripts

import * as crypto from "crypto";

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")   // strip punctuation
    .replace(/\s+/g, " ")        // collapse whitespace
    .trim();
}

export function fingerprint(questionText: string): string {
  return crypto.createHash("sha256").update(normalize(questionText)).digest("hex");
}

// Jaccard similarity on word trigrams
export function jaccardSimilarity(a: string, b: string): number {
  const trigrams = (s: string): Set<string> => {
    const words = normalize(s).split(" ");
    const grams = new Set<string>();
    for (let i = 0; i <= words.length - 3; i++) {
      grams.add(words.slice(i, i + 3).join(" "));
    }
    // Fall back to bigrams if text is too short for trigrams
    if (grams.size === 0) {
      for (let i = 0; i <= words.length - 2; i++) {
        grams.add(words.slice(i, i + 2).join(" "));
      }
    }
    return grams;
  };

  const setA = trigrams(a);
  const setB = trigrams(b);
  if (setA.size === 0 && setB.size === 0) return 1;
  if (setA.size === 0 || setB.size === 0) return 0;

  let intersection = 0;
  for (const g of setA) {
    if (setB.has(g)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return intersection / union;
}

export function today(): string {
  return new Date().toISOString().split("T")[0];
}

export function daysSince(isoDate: string): number {
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

export const STALE_DAYS = 365;
export const NEAR_DUPLICATE_THRESHOLD = 0.65;
export const ANSWER_PATTERN_MAX_PCT = 0.35;
export const ANSWER_PATTERN_MIN_PCT = 0.15;
export const ANSWER_PATTERN_MIN_QUESTIONS = 20;
export const MIN_EXPLANATION_LENGTH = 75;
