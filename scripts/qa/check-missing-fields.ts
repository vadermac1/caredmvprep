#!/usr/bin/env npx ts-node
// QA Script 1: Missing Required Fields
// Flags any question missing required fields or with fields that are too vague.
//
// Usage: npx ts-node scripts/qa/check-missing-fields.ts [--json]

import type { Question, AuditIssue } from "../../src/data/questions/schema";
import { loadAllQuestions } from "./load-questions";

const REQUIRED_STRING_FIELDS: (keyof Question)[] = [
  "id", "fingerprint", "jurisdiction", "state", "testType",
  "category", "subcategory", "question", "explanation",
  "source", "sourceUrl", "sourceSection", "status",
  "createdAt", "lastVerifiedAt",
];

const MIN_SOURCE_SECTION_LEN = 10;
const MIN_EXPLANATION_LEN = 75;

function checkQuestion(q: Question): AuditIssue[] {
  const issues: AuditIssue[] = [];

  const flag = (field: string, detail: string, severity: "error" | "warning" = "error") =>
    issues.push({ questionId: q.id, issueType: "MISSING_FIELD", severity, field, detail });

  // Required string fields
  for (const field of REQUIRED_STRING_FIELDS) {
    const val = q[field];
    if (val === undefined || val === null || val === "") {
      flag(field, `Field "${field}" is missing or empty`);
    }
  }

  // options must be exactly 4 non-empty strings
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    flag("options", `Must have exactly 4 options (found ${q.options?.length ?? 0})`);
  } else {
    q.options.forEach((opt, i) => {
      if (!opt || opt.trim() === "") flag("options", `options[${i}] is empty`);
    });
  }

  // correctIndex must be 0–3
  if (![0, 1, 2, 3].includes(q.correctIndex)) {
    flag("correctIndex", `correctIndex must be 0–3 (found ${q.correctIndex})`);
  }

  // sourceSection must be specific
  if (q.sourceSection && q.sourceSection.length < MIN_SOURCE_SECTION_LEN) {
    flag("sourceSection", `Too vague: "${q.sourceSection}" (< ${MIN_SOURCE_SECTION_LEN} chars). Must cite chapter/section/page.`, "warning");
  }

  // sourceUrl should be a .gov or known official domain
  if (q.sourceUrl && !q.sourceUrl.startsWith("http")) {
    flag("sourceUrl", `Not a valid URL: "${q.sourceUrl}"`);
  }

  // explanation must be substantive
  if (q.explanation && q.explanation.length < MIN_EXPLANATION_LEN) {
    flag("explanation", `Too short (${q.explanation.length} chars, min ${MIN_EXPLANATION_LEN}). Must teach, not just restate.`, "warning");
  }

  // jurisdiction + state consistency
  if (q.jurisdiction === "federal" && q.state !== "all") {
    flag("state", `jurisdiction:"federal" requires state:"all" (found "${q.state}")`);
  }
  if (q.jurisdiction === "state" && (!q.state || q.state === "all")) {
    flag("state", `jurisdiction:"state" requires a specific state abbreviation`);
  }

  // isStateSpecificLaw must be boolean
  if (typeof q.isStateSpecificLaw !== "boolean") {
    flag("isStateSpecificLaw", `Must be true or false (found ${typeof q.isStateSpecificLaw})`);
  }

  // retired questions need a reason
  if (q.status === "retired" && !q.retiredReason) {
    flag("retiredReason", `Retired question must include retiredReason`);
  }

  return issues;
}

async function main() {
  const questions = await loadAllQuestions();
  const allIssues: AuditIssue[] = [];

  for (const q of questions) {
    allIssues.push(...checkQuestion(q));
  }

  const useJson = process.argv.includes("--json");

  if (useJson) {
    console.log(JSON.stringify(allIssues, null, 2));
  } else {
    const errors = allIssues.filter(i => i.severity === "error");
    const warnings = allIssues.filter(i => i.severity === "warning");
    console.log(`\n── Missing Fields Audit ──────────────────────────────`);
    console.log(`Questions checked: ${questions.length}`);
    console.log(`Errors:   ${errors.length}`);
    console.log(`Warnings: ${warnings.length}\n`);

    if (errors.length > 0) {
      console.log("ERRORS:");
      for (const i of errors) {
        console.log(`  [${i.questionId}] ${i.field}: ${i.detail}`);
      }
    }
    if (warnings.length > 0) {
      console.log("\nWARNINGS:");
      for (const i of warnings) {
        console.log(`  [${i.questionId}] ${i.field}: ${i.detail}`);
      }
    }
    if (allIssues.length === 0) {
      console.log("✓ All questions pass field validation.");
    }
  }

  process.exit(allIssues.filter(i => i.severity === "error").length > 0 ? 1 : 0);
}

main().catch(console.error);
