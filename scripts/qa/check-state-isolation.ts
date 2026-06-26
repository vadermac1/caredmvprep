#!/usr/bin/env npx ts-node
// QA Script 5: State Law Isolation Check
// Prevents California laws from appearing in Texas questions, etc.
// Checks:
//   (a) jurisdiction:"state" questions that mention another state's name
//   (b) jurisdiction:"federal" questions that reference a single state's law
//   (c) isStateSpecificLaw:true questions matched to wrong state
//   (d) CDL questions: confirms federal content isn't tagged as state-specific
//
// Usage: npx ts-node scripts/qa/check-state-isolation.ts [--json]

import type { Question, AuditIssue } from "../../src/data/questions/schema";
import { loadAllQuestions } from "./load-questions";

// Known state-specific triggers: phrases that only apply to specific states
// Extend this list as state-specific content grows
const STATE_SPECIFIC_PHRASES: Record<string, string[]> = {
  CA: ["lane splitting", "lane filtering", "proposition 65", "prop 65", "cmsp", "pink slip", "california motorcyclist safety"],
  TX: ["texas dot", "txdot", "texas dps"],
  FL: ["florida highway patrol", "fhp"],
  NY: ["new york state police", "nysdmv"],
  HI: ["all ages helmet", "hawaii helmet"],
  // Add more as content is built
};

const US_STATE_NAMES = [
  "alabama","alaska","arizona","arkansas","california","colorado","connecticut",
  "delaware","florida","georgia","hawaii","idaho","illinois","indiana","iowa",
  "kansas","kentucky","louisiana","maine","maryland","massachusetts","michigan",
  "minnesota","mississippi","missouri","montana","nebraska","nevada",
  "new hampshire","new jersey","new mexico","new york","north carolina",
  "north dakota","ohio","oklahoma","oregon","pennsylvania","rhode island",
  "south carolina","south dakota","tennessee","texas","utah","vermont",
  "virginia","washington","west virginia","wisconsin","wyoming",
];

const US_STATE_ABBRS = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN",
  "IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV",
  "NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN",
  "TX","UT","VT","VA","WA","WV","WI","WY",
];

function getStateNameForAbbr(abbr: string): string | null {
  const index = US_STATE_ABBRS.indexOf(abbr);
  return index >= 0 ? US_STATE_NAMES[index] : null;
}

async function main() {
  const questions = await loadAllQuestions();
  const useJson = process.argv.includes("--json");
  const issues: AuditIssue[] = [];

  for (const q of questions) {
    const fullText = `${q.question} ${q.options.join(" ")} ${q.explanation}`.toLowerCase();
    const ownStateName = q.state !== "all" ? getStateNameForAbbr(q.state)?.toLowerCase() : null;

    // (a) State question mentions another state's name
    if (q.jurisdiction === "state" && q.state !== "all") {
      for (const stateName of US_STATE_NAMES) {
        if (stateName === ownStateName) continue;
        // Allow mentioning other states in a context like "valid in all 50 states"
        // Flag only if the other state name appears in a legal/rule context
        const pattern = new RegExp(`\\b${stateName}\\b`, "i");
        if (pattern.test(fullText) && !fullText.includes("all 50 states") && !fullText.includes("all states")) {
          issues.push({
            questionId: q.id,
            issueType: "STATE_ISOLATION",
            severity: "warning",
            detail: `State question for "${q.state}" mentions "${stateName}" — verify this is not a law from the wrong state.`,
          });
        }
      }
    }

    // (b) Federal question references a state-specific law
    if (q.jurisdiction === "federal") {
      for (const [abbr, phrases] of Object.entries(STATE_SPECIFIC_PHRASES)) {
        for (const phrase of phrases) {
          if (fullText.includes(phrase.toLowerCase())) {
            issues.push({
              questionId: q.id,
              issueType: "STATE_ISOLATION",
              severity: "error",
              detail: `Federal question contains state-specific phrase "${phrase}" (${abbr}). Change jurisdiction to "state" or remove the state-specific reference.`,
            });
          }
        }
      }
    }

    // (c) isStateSpecificLaw:true on a federal question
    if (q.jurisdiction === "federal" && q.isStateSpecificLaw === true) {
      issues.push({
        questionId: q.id,
        issueType: "STATE_ISOLATION",
        severity: "error",
        detail: `jurisdiction:"federal" cannot have isStateSpecificLaw:true — these are contradictory.`,
      });
    }

    // (d) CDL questions tagged as state-specific when they should be federal
    // CDL HOS, air brakes, hazmat placarding, cargo securement are FMCSA federal
    const federalCdlKeywords = ["hours of service", "fmcsa", "49 cfr", "11-hour", "11 hour driving limit", "hos rule"];
    if (q.testType === "cdl" && q.jurisdiction === "state" && q.isStateSpecificLaw === true) {
      for (const kw of federalCdlKeywords) {
        if (fullText.includes(kw)) {
          issues.push({
            questionId: q.id,
            issueType: "STATE_ISOLATION",
            severity: "error",
            detail: `CDL question references federal regulation ("${kw}") but is tagged jurisdiction:"state". Change to jurisdiction:"federal", state:"all".`,
          });
        }
      }
    }
  }

  if (useJson) {
    console.log(JSON.stringify(issues, null, 2));
    return;
  }

  const errors = issues.filter(i => i.severity === "error");
  const warnings = issues.filter(i => i.severity === "warning");

  console.log(`\n── State Isolation Audit ─────────────────────────────`);
  console.log(`Questions checked: ${questions.length}`);
  console.log(`Errors:            ${errors.length}  ← must fix`);
  console.log(`Warnings:          ${warnings.length}  ← review manually`);

  if (errors.length > 0) {
    console.log("\nERRORS:");
    for (const i of errors) console.log(`  [${i.questionId}] ${i.detail}`);
  }
  if (warnings.length > 0) {
    console.log("\nWARNINGS:");
    for (const i of warnings) console.log(`  [${i.questionId}] ${i.detail}`);
  }
  if (issues.length === 0) {
    console.log("✓ No state isolation issues detected.");
  }

  process.exit(errors.length > 0 ? 1 : 0);
}

main().catch(console.error);
