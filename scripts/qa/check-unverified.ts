#!/usr/bin/env npx ts-node
// QA Script 7: Unverified Question Report
// Shows which state+testType combinations are ready to launch (≥30 verified questions)
// and flags any unverified questions referenced in quiz configs.
//
// Usage: npx ts-node scripts/qa/check-unverified.ts [--json] [--min 30]

import type { Question, AuditIssue } from "../../src/data/questions/schema";
import { loadAllQuestions } from "./load-questions";
import { loadQuizRegistry } from "./load-quiz-registry";

const DEFAULT_LAUNCH_MIN = 30;

async function main() {
  const questions = await loadAllQuestions();
  const quizRegistry = await loadQuizRegistry();
  const args = process.argv.slice(2);
  const useJson = args.includes("--json");
  const launchMin = args.includes("--min")
    ? parseInt(args[args.indexOf("--min") + 1], 10)
    : DEFAULT_LAUNCH_MIN;

  const issues: AuditIssue[] = [];

  // ── Count by state + testType + status ────────────────────────────────
  const matrix = new Map<string, { verified: number; draft: number; needs_review: number; retired: number; total: number }>();

  for (const q of questions) {
    const key = `${q.state}|${q.testType}`;
    if (!matrix.has(key)) {
      matrix.set(key, { verified: 0, draft: 0, needs_review: 0, retired: 0, total: 0 });
    }
    const entry = matrix.get(key)!;
    entry.total++;
    if (q.status === "verified") entry.verified++;
    else if (q.status === "draft") entry.draft++;
    else if (q.status === "needs_review") entry.needs_review++;
    else if (q.status === "retired") entry.retired++;
  }

  // ── Flag unverified questions used in quiz configs ────────────────────
  const verifiedIds = new Set(
    questions.filter(q => q.status === "verified").map(q => q.id)
  );

  for (const [quizId, questionIds] of Object.entries(quizRegistry)) {
    for (const qid of questionIds) {
      if (!verifiedIds.has(qid)) {
        const q = questions.find(q => q.id === qid);
        issues.push({
          questionId: qid,
          issueType: "UNVERIFIED_IN_QUIZ",
          severity: "error",
          detail: `Question "${qid}" (status: ${q?.status ?? "unknown"}) is in quiz "${quizId}" but is not verified. Only verified questions should be served.`,
        });
      }
    }
  }

  if (useJson) {
    const matrixObj = Object.fromEntries(matrix);
    console.log(JSON.stringify({ matrix: matrixObj, issues }, null, 2));
    return;
  }

  console.log(`\n── Launch Readiness Matrix (min ${launchMin} verified) ────────`);
  console.log(`${"State+Type".padEnd(22)} ${"Verified".padEnd(10)} ${"Draft".padEnd(8)} ${"Review".padEnd(8)} Retired  Status`);
  console.log("─".repeat(75));

  const sortedKeys = [...matrix.keys()].sort();
  for (const key of sortedKeys) {
    const e = matrix.get(key)!;
    const ready = e.verified >= launchMin;
    const status = ready ? "✓ READY" : `✗ NEED ${launchMin - e.verified} MORE`;
    console.log(
      `${key.padEnd(22)} ${String(e.verified).padEnd(10)} ${String(e.draft).padEnd(8)} ${String(e.needs_review).padEnd(8)} ${String(e.retired).padEnd(8)} ${status}`
    );
  }

  if (issues.length > 0) {
    console.log("\nCRITICAL — UNVERIFIED QUESTIONS IN QUIZ CONFIGS:");
    for (const i of issues) console.log(`  ${i.detail}`);
  }

  const readyCount = [...matrix.values()].filter(e => e.verified >= launchMin).length;
  console.log(`\nSummary: ${readyCount} of ${matrix.size} state+testType combinations ready to launch.`);

  process.exit(issues.filter(i => i.severity === "error").length > 0 ? 1 : 0);
}

main().catch(console.error);
