#!/usr/bin/env npx ts-node
// QA Script 6: Explanation Quality Check
// Flags generic, too-short, or non-teaching explanations.
// Cannot replace human review but surfaces the worst cases automatically.
//
// Usage: npx ts-node scripts/qa/check-explanation-quality.ts [--json]

import type { Question, AuditIssue } from "../../src/data/questions/schema";
import { loadAllQuestions } from "./load-questions";
import { normalize, MIN_EXPLANATION_LENGTH } from "./lib";

// Patterns that indicate an explanation is just restating the answer
const RESTATEMENT_PATTERNS = [
  /the correct answer is/i,
  /the answer is/i,
  /this is correct because it is correct/i,
  /because that is the rule/i,
  /per state law$/i,
  /as stated in the handbook$/i,
];

// Generic filler phrases that don't teach anything
const GENERIC_PHRASES = [
  "per state law",
  "as required by law",
  "this is the correct answer",
  "according to the handbook",
  "the law requires",
  "it is important to",
  "safety is important",
  "always follow traffic laws",
];

// Good explanations typically contain at least one of these:
const TEACHING_INDICATORS = [
  // Numbers / specifics
  /\d+\s*(feet|ft|mph|mph|seconds|sec|minutes|yards|lbs|pounds|inches)/i,
  // Law codes
  /\b(cvc|vc|rs|usc|cfr|§)\s*\d+/i,
  // "because" followed by a real reason (not just "because it's correct")
  /because\s+[a-z].{20,}/i,
  // Consequence language
  /(can cause|increases?|decreases?|results? in|leads? to|prevents?)/i,
  // Citation language
  /(chapter|section|page|handbook|manual|regulation)/i,
];

async function main() {
  const questions = await loadAllQuestions();
  const useJson = process.argv.includes("--json");
  const issues: AuditIssue[] = [];

  for (const q of questions) {
    const exp = q.explanation ?? "";

    // Too short
    if (exp.length < MIN_EXPLANATION_LENGTH) {
      issues.push({
        questionId: q.id,
        issueType: "GENERIC_EXPLANATION",
        severity: "warning",
        field: "explanation",
        detail: `Explanation too short (${exp.length} chars, min ${MIN_EXPLANATION_LENGTH}): "${exp.slice(0, 60)}..."`,
      });
      continue; // Other checks won't be useful on a short explanation
    }

    // Restatement check
    for (const pattern of RESTATEMENT_PATTERNS) {
      if (pattern.test(exp)) {
        issues.push({
          questionId: q.id,
          issueType: "GENERIC_EXPLANATION",
          severity: "warning",
          field: "explanation",
          detail: `Explanation appears to restate the answer rather than teach: "${exp.slice(0, 80)}..."`,
        });
        break;
      }
    }

    // Generic phrase check
    const expLower = exp.toLowerCase();
    for (const phrase of GENERIC_PHRASES) {
      if (expLower.includes(phrase) && exp.length < 150) {
        issues.push({
          questionId: q.id,
          issueType: "GENERIC_EXPLANATION",
          severity: "warning",
          field: "explanation",
          detail: `Explanation contains generic filler ("${phrase}") and is short. Add specific rule, number, or law reference.`,
        });
        break;
      }
    }

    // Teaching indicator check — explanation should contain at least one
    const hasTeachingContent = TEACHING_INDICATORS.some(pattern => pattern.test(exp));
    if (!hasTeachingContent) {
      issues.push({
        questionId: q.id,
        issueType: "GENERIC_EXPLANATION",
        severity: "warning",
        field: "explanation",
        detail: `Explanation lacks specific teaching content (no numbers, law codes, consequences, or citations): "${exp.slice(0, 80)}..."`,
      });
    }

    // Explanation length vs. question complexity (difficulty 3-4 should have longer explanations)
    if ((q.difficulty === 3 || q.difficulty === 4) && exp.length < 150) {
      issues.push({
        questionId: q.id,
        issueType: "GENERIC_EXPLANATION",
        severity: "warning",
        field: "explanation",
        detail: `Difficulty ${q.difficulty} question has short explanation (${exp.length} chars). Complex questions need more teaching detail.`,
      });
    }
  }

  if (useJson) {
    console.log(JSON.stringify(issues, null, 2));
    return;
  }

  console.log(`\n── Explanation Quality Audit ─────────────────────────`);
  console.log(`Questions checked: ${questions.length}`);
  console.log(`Issues flagged:    ${issues.length}`);

  if (issues.length > 0) {
    console.log("\nISSUES (all warnings — review and rewrite):");
    for (const i of issues) {
      console.log(`  [${i.questionId}] ${i.detail}`);
    }
  } else {
    console.log("✓ All explanations pass quality checks.");
  }
}

main().catch(console.error);
