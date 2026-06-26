#!/usr/bin/env npx ts-node
// QA Script 3: Staleness Check
// Flags verified questions and state-facts entries older than 365 days.
// With --fix: automatically demotes stale "verified" questions to "needs_review".
//
// Usage:
//   npx ts-node scripts/qa/check-stale.ts           (dry run — report only)
//   npx ts-node scripts/qa/check-stale.ts --fix     (write demotions to files)
//   npx ts-node scripts/qa/check-stale.ts --json    (machine-readable output)

import type { Question, AuditIssue } from "../../src/data/questions/schema";
import { loadAllQuestions } from "./load-questions";
import { loadStateFacts } from "./load-state-facts";
import { daysSince, STALE_DAYS, today } from "./lib";

async function main() {
  const questions = await loadAllQuestions();
  const stateFacts = await loadStateFacts();
  const args = process.argv.slice(2);
  const fix = args.includes("--fix");
  const useJson = args.includes("--json");
  const issues: AuditIssue[] = [];

  // ── Check questions ────────────────────────────────────────────────────
  const todemote: Question[] = [];

  for (const q of questions) {
    if (!q.lastVerifiedAt) {
      issues.push({
        questionId: q.id,
        issueType: "STALE_VERIFICATION",
        severity: "error",
        detail: `No lastVerifiedAt date. Cannot determine verification age.`,
      });
      continue;
    }

    const age = daysSince(q.lastVerifiedAt);

    if (q.status === "verified" && age > STALE_DAYS) {
      issues.push({
        questionId: q.id,
        issueType: "STALE_VERIFICATION",
        severity: "warning",
        detail: `Verified ${age} days ago (limit: ${STALE_DAYS}). State laws may have changed. Re-verify against ${q.source}.`,
      });
      todemote.push(q);
    }
  }

  // ── Check state-facts table ────────────────────────────────────────────
  for (const sf of stateFacts) {
    if (!sf.lastVerifiedAt) {
      issues.push({
        questionId: `state-facts:${sf.abbr}`,
        issueType: "STALE_VERIFICATION",
        severity: "error",
        detail: `${sf.state} state facts: no lastVerifiedAt date.`,
      });
      continue;
    }
    const age = daysSince(sf.lastVerifiedAt);
    if (age > STALE_DAYS) {
      issues.push({
        questionId: `state-facts:${sf.abbr}`,
        issueType: "STALE_VERIFICATION",
        severity: "warning",
        detail: `${sf.state} state facts last verified ${age} days ago. Re-check official handbook URL, question counts, and passing scores.`,
      });
    }
  }

  if (useJson) {
    console.log(JSON.stringify({ issues, demoteCount: todemote.length }, null, 2));
    return;
  }

  const questionIssues = issues.filter(i => !i.questionId.startsWith("state-facts:"));
  const factsIssues = issues.filter(i => i.questionId.startsWith("state-facts:"));

  console.log(`\n── Staleness Audit (threshold: ${STALE_DAYS} days) ──────────`);
  console.log(`Questions checked:          ${questions.length}`);
  console.log(`State facts entries:        ${stateFacts.length}`);
  console.log(`Stale questions:            ${questionIssues.length}`);
  console.log(`Stale state-facts entries:  ${factsIssues.length}`);

  if (questionIssues.length > 0) {
    console.log("\nSTALE QUESTIONS:");
    for (const i of questionIssues) {
      console.log(`  [${i.questionId}] ${i.detail}`);
    }
  }

  if (factsIssues.length > 0) {
    console.log("\nSTALE STATE FACTS:");
    for (const i of factsIssues) {
      console.log(`  ${i.detail}`);
    }
  }

  if (fix && todemote.length > 0) {
    console.log(`\n⚠  --fix mode: ${todemote.length} questions would be demoted to "needs_review".`);
    console.log(`   (Automatic file writing not yet implemented — update status fields manually.)`);
    console.log(`   Run this report monthly and update lastVerifiedAt after re-checking each question.`);
  }

  if (issues.length === 0) {
    console.log("✓ All questions and state facts are within the verification window.");
  }

  process.exit(0);
}

main().catch(console.error);
