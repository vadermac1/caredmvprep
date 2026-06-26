#!/usr/bin/env npx ts-node
// QA Script 2: Duplicate Detection
// Layer 1 — Exact duplicates (SHA-256 fingerprint match)
// Layer 2 — Near-duplicates (Jaccard similarity > 0.65 within same state+testType+category)
// Layer 3 — Recycled explanations (same explanation text on different questions)
//
// Usage: npx ts-node scripts/qa/check-duplicates.ts [--json] [--near-only] [--exact-only]

import type { Question, AuditIssue } from "../../src/data/questions/schema";
import { loadAllQuestions } from "./load-questions";
import { fingerprint, jaccardSimilarity, normalize, NEAR_DUPLICATE_THRESHOLD } from "./lib";
import * as crypto from "crypto";

function explanationFingerprint(text: string): string {
  return crypto.createHash("sha256").update(normalize(text)).digest("hex");
}

async function main() {
  const questions = await loadAllQuestions();
  const issues: AuditIssue[] = [];
  const args = process.argv.slice(2);
  const nearOnly = args.includes("--near-only");
  const exactOnly = args.includes("--exact-only");
  const useJson = args.includes("--json");

  // ── Layer 1: Exact fingerprint duplicates ──────────────────────────────
  if (!nearOnly) {
    const seenFingerprints = new Map<string, string>(); // fingerprint → questionId
    for (const q of questions) {
      const fp = fingerprint(q.question);
      if (seenFingerprints.has(fp)) {
        issues.push({
          questionId: q.id,
          issueType: "DUPLICATE_EXACT",
          severity: "error",
          detail: `Exact duplicate of question "${seenFingerprints.get(fp)}". Same normalized question text.`,
        });
      } else {
        seenFingerprints.set(fp, q.id);
      }
    }
  }

  // ── Layer 2: Near-duplicate (Jaccard similarity) ───────────────────────
  if (!exactOnly) {
    // Group by state + testType + category to limit comparison scope
    const groups = new Map<string, Question[]>();
    for (const q of questions) {
      const key = `${q.state}|${q.testType}|${q.category}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(q);
    }

    for (const [groupKey, group] of groups) {
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          const sim = jaccardSimilarity(group[i].question, group[j].question);
          if (sim >= NEAR_DUPLICATE_THRESHOLD) {
            issues.push({
              questionId: group[i].id,
              issueType: "DUPLICATE_NEAR",
              severity: "warning",
              detail: `Similarity ${(sim * 100).toFixed(1)}% with "${group[j].id}" in group [${groupKey}]. Review both — may be redundant.`,
            });
          }
        }
      }
    }
  }

  // ── Layer 3: Recycled explanations ────────────────────────────────────
  if (!exactOnly) {
    const seenExplanations = new Map<string, string>(); // explanationFingerprint → questionId
    for (const q of questions) {
      if (!q.explanation) continue;
      const efp = explanationFingerprint(q.explanation);
      if (seenExplanations.has(efp)) {
        issues.push({
          questionId: q.id,
          issueType: "RECYCLED_EXPLANATION",
          severity: "warning",
          detail: `Identical explanation as "${seenExplanations.get(efp)}". Explanations should be specific to each question.`,
        });
      } else {
        seenExplanations.set(efp, q.id);
      }
    }
  }

  if (useJson) {
    console.log(JSON.stringify(issues, null, 2));
  } else {
    const exact = issues.filter(i => i.issueType === "DUPLICATE_EXACT");
    const near = issues.filter(i => i.issueType === "DUPLICATE_NEAR");
    const recycled = issues.filter(i => i.issueType === "RECYCLED_EXPLANATION");

    console.log(`\n── Duplicate Detection Audit ─────────────────────────`);
    console.log(`Questions checked:       ${questions.length}`);
    console.log(`Exact duplicates:        ${exact.length}  ← must fix before launch`);
    console.log(`Near-duplicates (≥65%):  ${near.length}  ← review manually`);
    console.log(`Recycled explanations:   ${recycled.length}  ← review manually`);

    if (exact.length > 0) {
      console.log("\nEXACT DUPLICATES (errors):");
      for (const i of exact) console.log(`  [${i.questionId}] ${i.detail}`);
    }
    if (near.length > 0) {
      console.log("\nNEAR-DUPLICATES (warnings):");
      for (const i of near) console.log(`  [${i.questionId}] ${i.detail}`);
    }
    if (recycled.length > 0) {
      console.log("\nRECYCLED EXPLANATIONS (warnings):");
      for (const i of recycled) console.log(`  [${i.questionId}] ${i.detail}`);
    }
    if (issues.length === 0) {
      console.log("✓ No duplicates detected.");
    }
  }

  process.exit(issues.filter(i => i.severity === "error").length > 0 ? 1 : 0);
}

main().catch(console.error);
