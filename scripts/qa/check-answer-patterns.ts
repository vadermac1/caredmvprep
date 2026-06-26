#!/usr/bin/env npx ts-node
// QA Script 4: Answer Distribution / Pattern Checker
// Flags when any correctIndex (0/1/2/3) is over-represented in a question set.
// RULE: Never change the correct answer — only reorder wrong answers naturally.
//
// Usage: npx ts-node scripts/qa/check-answer-patterns.ts [--json] [--state CA] [--testtype dmv]

import type { Question, AuditIssue } from "../../src/data/questions/schema";
import { loadAllQuestions } from "./load-questions";
import {
  ANSWER_PATTERN_MAX_PCT,
  ANSWER_PATTERN_MIN_PCT,
  ANSWER_PATTERN_MIN_QUESTIONS,
} from "./lib";

async function main() {
  const questions = await loadAllQuestions();
  const args = process.argv.slice(2);
  const useJson = args.includes("--json");
  const filterState = args.includes("--state") ? args[args.indexOf("--state") + 1] : null;
  const filterType = args.includes("--testtype") ? args[args.indexOf("--testtype") + 1] : null;

  let filtered = questions;
  if (filterState) filtered = filtered.filter(q => q.state === filterState.toUpperCase());
  if (filterType) filtered = filtered.filter(q => q.testType === filterType.toLowerCase());

  // Group by state + testType
  const groups = new Map<string, Question[]>();
  for (const q of filtered) {
    const key = `${q.state}|${q.testType}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(q);
  }

  const issues: AuditIssue[] = [];
  const groupReports: Array<{
    group: string;
    total: number;
    distribution: Record<string, number>;
    distributionPct: Record<string, string>;
    flagged: boolean;
    offenders: string[];
  }> = [];

  for (const [groupKey, group] of groups) {
    if (group.length < ANSWER_PATTERN_MIN_QUESTIONS) continue;

    const counts = [0, 0, 0, 0];
    for (const q of group) counts[q.correctIndex]++;

    const labels = ["A (index 0)", "B (index 1)", "C (index 2)", "D (index 3)"];
    const distribution: Record<string, number> = {};
    const distributionPct: Record<string, string> = {};
    let flagged = false;
    const offenders: string[] = [];

    for (let i = 0; i < 4; i++) {
      const pct = counts[i] / group.length;
      distribution[labels[i]] = counts[i];
      distributionPct[labels[i]] = `${(pct * 100).toFixed(1)}%`;

      if (pct > ANSWER_PATTERN_MAX_PCT) {
        flagged = true;
        const overRepQuestions = group
          .filter(q => q.correctIndex === i)
          .map(q => q.id);
        offenders.push(...overRepQuestions.slice(0, 5)); // show first 5

        issues.push({
          questionId: groupKey,
          issueType: "ANSWER_PATTERN",
          severity: "warning",
          detail: `[${groupKey}] ${labels[i]} is correct ${(pct * 100).toFixed(1)}% of the time (max: ${(ANSWER_PATTERN_MAX_PCT * 100)}%). Reorder wrong answers on ${overRepQuestions.length} question(s): ${overRepQuestions.slice(0, 3).join(", ")}${overRepQuestions.length > 3 ? "..." : ""}`,
        });
      }

      if (pct < ANSWER_PATTERN_MIN_PCT) {
        flagged = true;
        issues.push({
          questionId: groupKey,
          issueType: "ANSWER_PATTERN",
          severity: "warning",
          detail: `[${groupKey}] ${labels[i]} is never/rarely the correct answer (${(pct * 100).toFixed(1)}%, min: ${(ANSWER_PATTERN_MIN_PCT * 100)}%). Natural reordering may help, but don't force it.`,
        });
      }
    }

    groupReports.push({ group: groupKey, total: group.length, distribution, distributionPct, flagged, offenders });
  }

  if (useJson) {
    console.log(JSON.stringify({ issues, groupReports }, null, 2));
    return;
  }

  console.log(`\n── Answer Pattern Audit ──────────────────────────────`);
  console.log(`Questions checked: ${filtered.length}`);
  console.log(`Groups analyzed:   ${groupReports.length} (min ${ANSWER_PATTERN_MIN_QUESTIONS} per group)\n`);

  for (const r of groupReports) {
    const status = r.flagged ? "⚠ " : "✓ ";
    console.log(`${status}[${r.group}] ${r.total} questions`);
    for (const [label, pct] of Object.entries(r.distributionPct)) {
      console.log(`     ${label}: ${pct}`);
    }
  }

  if (issues.length > 0) {
    console.log("\nISSUES:");
    for (const i of issues) console.log(`  ${i.detail}`);
    console.log("\nRemember: reorder WRONG answers only. Never change the correct answer.");
  } else {
    console.log("\n✓ Answer distribution is within acceptable range for all groups.");
  }
}

main().catch(console.error);
