import type { StateFacts } from "@/data/questions/schema";
import type { FAQ } from "@/components/PracticeTestPage";
import {
  getQuestionCount,
  getPassCount,
  getPassingPct,
  getHandbookUrl,
} from "./state-facts-lookup";

/** Generates factual FAQ items for a DMV permit test page. */
export function generateDMVFAQs(sf: StateFacts): FAQ[] {
  const qCount = getQuestionCount(sf, "dmv");
  const toPass = getPassCount(sf, "dmv");
  const pct = getPassingPct(sf, "dmv");
  const faqs: FAQ[] = [];

  if (qCount !== undefined && toPass !== undefined) {
    faqs.push({
      question: `How many questions are on the ${sf.state} DMV permit test?`,
      answer: `The ${sf.state} permit knowledge test has ${qCount} questions. You must answer at least ${toPass} correctly${pct ? ` (${pct})` : ""} to pass.`,
    });
  }

  if (sf.permitMinAge !== "NEEDS_VERIFICATION") {
    faqs.push({
      question: `What is the minimum age to get a learner's permit in ${sf.state}?`,
      answer: `In ${sf.state}, you can apply for a learner's permit starting at age ${sf.permitMinAge}. Requirements typically include parental consent, a vision test, and passing the written knowledge test.`,
    });
  }

  faqs.push({
    question: `Where can I find the official ${sf.state} driver's handbook?`,
    answer: `The official ${sf.state} driver's handbook is published by ${sf.agencyName}. Download it at ${sf.agencyUrl}. Always use the most current edition — traffic laws can change.`,
  });

  return faqs;
}

/** Generates factual FAQ items for a CDL practice test page. */
export function generateCDLFAQs(sf: StateFacts): FAQ[] {
  return [
    {
      question: `How many questions are on the ${sf.state} CDL General Knowledge test?`,
      answer: `The CDL General Knowledge test has 50 questions and requires 40 correct (80%) to pass. This is a federal FMCSA standard applied in all 50 states, including ${sf.state}.`,
    },
    {
      question: `Where can I find the ${sf.state} CDL handbook?`,
      answer: `The ${sf.state} CDL study materials are available from ${sf.agencyName}. You can also access the federal FMCSA CDL manual at ${sf.cdlHandbookUrl}.`,
    },
  ];
}

/** Generates factual FAQ items for a motorcycle practice test page. */
export function generateMotoFAQs(sf: StateFacts): FAQ[] {
  const qCount = getQuestionCount(sf, "motorcycle");
  const toPass = getPassCount(sf, "motorcycle");
  const pct = getPassingPct(sf, "motorcycle");
  const handbookUrl = getHandbookUrl(sf, "motorcycle");
  const faqs: FAQ[] = [];

  if (qCount !== undefined && toPass !== undefined) {
    faqs.push({
      question: `How many questions are on the ${sf.state} motorcycle knowledge test?`,
      answer: `The ${sf.state} motorcycle knowledge test has ${qCount} questions. You must answer at least ${toPass} correctly${pct ? ` (${pct})` : ""} to pass.`,
    });
  }

  const helmetNote =
    sf.motoHelmetLaw === "all-ages"
      ? `${sf.state} requires all motorcycle riders and passengers to wear a helmet at all times.`
      : sf.motoHelmetLaw === "under-19"
      ? `${sf.state} requires riders and passengers under 19 to wear a helmet, and also requires newly-endorsed riders to wear a helmet for their first 2 years regardless of age.`
      : sf.motoHelmetLaw === "under-18"
      ? `${sf.state} requires riders and passengers under 18 to wear a helmet.`
      : sf.motoHelmetLaw === "none"
      ? `${sf.state} has no universal helmet law for adult riders, though helmets are strongly recommended.`
      : null;

  if (helmetNote) {
    faqs.push({
      question: `Does ${sf.state} have a motorcycle helmet law?`,
      answer: helmetNote,
    });
  }

  if (
    sf.motoCourseWaivesSkillsTest !== "NEEDS_VERIFICATION" &&
    sf.motoCourseWaivesSkillsTest
  ) {
    faqs.push({
      question: `Can I skip the motorcycle skills test in ${sf.state}?`,
      answer: `Yes — completing an approved motorcycle safety course (such as the MSF Basic RiderCourse) in ${sf.state} can waive the DMV skills test requirement. You will still need to pass the written knowledge test at the DMV.`,
    });
  }

  faqs.push({
    question: `Where can I find the official ${sf.state} motorcycle handbook?`,
    answer: `Download the official ${sf.state} motorcycle handbook at ${handbookUrl}. It is the primary source for the knowledge test.`,
  });

  return faqs;
}
