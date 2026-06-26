#!/usr/bin/env npx ts-node
// QA Script: Page Hardcode Validator
// Scans every marketing page.tsx for numeric numQuestions / numToPass / passingScore
// and flags values that conflict with the authoritative state-facts.ts entry.
//
// String overrides (e.g. numQuestions: "36 (18+) / 46 (under 18)") are intentional
// editorial overrides and are NOT flagged — only numeric literals are checked.
//
// Usage: npx ts-node scripts/qa/check-page-hardcodes.ts [--json]

import fs from "fs";
import path from "path";
import { loadStateFacts } from "./load-state-facts";
import type { StateFacts } from "../../src/data/questions/schema";

const PAGES_DIR = path.resolve(__dirname, "../../src/app/(marketing)");

function getTestType(slug: string): "cdl" | "motorcycle" | "dmv" {
  if (slug.includes("cdl")) return "cdl";
  if (slug.includes("motorcycle")) return "motorcycle";
  return "dmv";
}

function expectedQuestions(
  sf: StateFacts,
  type: "cdl" | "motorcycle" | "dmv"
): number | "NEEDS_VERIFICATION" {
  if (type === "cdl") return sf.cdlGeneralKnowledgeQuestions;
  if (type === "motorcycle") return sf.motoQuestions;
  return sf.permitQuestions;
}

function expectedToPass(
  sf: StateFacts,
  type: "cdl" | "motorcycle" | "dmv"
): number | "NEEDS_VERIFICATION" {
  if (type === "cdl") return sf.cdlGeneralKnowledgeToPass;
  if (type === "motorcycle") return sf.motoToPass;
  return sf.permitToPass;
}

function expectedPassingPct(
  sf: StateFacts,
  type: "cdl" | "motorcycle" | "dmv"
): string | "NEEDS_VERIFICATION" {
  if (type === "cdl") return sf.cdlGeneralKnowledgePassingPct;
  if (type === "motorcycle") return sf.motoPassingPct;
  return sf.permitPassingPct;
}

interface PageIssue {
  file: string;
  field: string;
  hardcoded: number | string;
  expected: number | string;
}

function findPageFiles(dir: string): string[] {
  const results: string[] = [];
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const e of entries) {
    if (e.isDirectory()) {
      const candidate = path.join(dir, e.name, "page.tsx");
      if (fs.existsSync(candidate)) results.push(candidate);
    }
  }
  return results;
}

async function main() {
  const allFacts = await loadStateFacts();
  const factsMap = new Map(allFacts.map((sf) => [sf.abbr, sf]));
  const issues: PageIssue[] = [];
  const useJson = process.argv.includes("--json");

  const pageFiles = findPageFiles(PAGES_DIR);
  let scanned = 0;
  let skipped = 0;

  for (const filePath of pageFiles) {
    const src = fs.readFileSync(filePath, "utf8");

    const abbrMatch = src.match(/stateAbbr:\s*["']([A-Z]{2})["']/);
    const slugMatch = src.match(/slug:\s*["']([^"']+)["']/);
    if (!abbrMatch || !slugMatch) {
      skipped++;
      continue;
    }

    const abbr = abbrMatch[1];
    const slug = slugMatch[1];
    const testType = getTestType(slug);
    const sf = factsMap.get(abbr);
    if (!sf) {
      skipped++;
      continue;
    }

    scanned++;
    const rel = path.relative(PAGES_DIR, filePath);

    // Only flag NUMERIC literals — string overrides are intentional editorial content
    const numQMatch = src.match(/numQuestions:\s*(\d+)(?!\s*\+)/);
    const numToPassMatch = src.match(/numToPass:\s*(\d+)(?!\s*\+)/);
    const passingScoreMatch = src.match(/passingScore:\s*["'](\d+)%["']/);

    if (numQMatch) {
      const hardcoded = parseInt(numQMatch[1], 10);
      const expected = expectedQuestions(sf, testType);
      if (expected !== "NEEDS_VERIFICATION" && hardcoded !== expected) {
        issues.push({ file: rel, field: "numQuestions", hardcoded, expected });
      }
    }

    if (numToPassMatch) {
      const hardcoded = parseInt(numToPassMatch[1], 10);
      const expected = expectedToPass(sf, testType);
      if (expected !== "NEEDS_VERIFICATION" && hardcoded !== expected) {
        issues.push({ file: rel, field: "numToPass", hardcoded, expected });
      }
    }

    if (passingScoreMatch) {
      const hardcoded = passingScoreMatch[1] + "%";
      const expected = expectedPassingPct(sf, testType);
      if (expected !== "NEEDS_VERIFICATION" && hardcoded !== expected) {
        issues.push({ file: rel, field: "passingScore", hardcoded, expected });
      }
    }
  }

  if (useJson) {
    console.log(JSON.stringify(issues, null, 2));
    process.exit(issues.length > 0 ? 1 : 0);
  }

  console.log(`\n── Page Hardcode Audit ──────────────────────────────`);
  console.log(`Pages scanned:  ${scanned}`);
  console.log(`Pages skipped:  ${skipped} (no stateAbbr/slug found — non-state pages)`);
  console.log(`Mismatches:     ${issues.length}`);

  if (issues.length > 0) {
    console.log("\nMISMATCHES — hardcoded value differs from state-facts.ts:");
    console.log("(These props are now overridden by state-facts.ts in the component,");
    console.log(" but stale values should be removed to avoid confusion.)\n");
    for (const i of issues) {
      console.log(`  ${i.file}`);
      console.log(`    ${i.field}: page has ${i.hardcoded}, state-facts.ts says ${i.expected}`);
    }
    console.log(
      "\nNote: string overrides (e.g. numQuestions: \"36 (18+) / 46 (under 18)\") are intentional and not flagged."
    );
    process.exit(1);
  }

  console.log("✓ All numeric page props match state-facts.ts (or use intentional string overrides).");
}

main().catch(console.error);
