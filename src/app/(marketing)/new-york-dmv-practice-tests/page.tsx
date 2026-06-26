import type { Metadata } from "next";
import StateIndexPage, { type StateIndexPageProps } from "@/components/StateIndexPage";

export const metadata: Metadata = {
  title: "New York DMV Practice Tests 2025 – Free NY Driver's License, Motorcycle & CDL Prep",
  description:
    "Free New York DMV practice tests for Class D driver's license, motorcycle license, and CDL General Knowledge. Based on the official NY Driver's Manual and FMCSA CDL Manual.",
  alternates: { canonical: "https://caredmvprep.com/new-york-dmv-practice-test" },
  robots: { index: false, follow: true },
  openGraph: { url: 'https://caredmvprep.com/new-york-dmv-practice-tests', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: StateIndexPageProps = {
  state: "New York",
  stateAbbr: "NY",
  slug: "new-york-dmv-practice-tests",
  intro:
    "Free practice tests for every New York DMV license type — Class D driver's license, Class M motorcycle license, and CDL General Knowledge. All content is based on the official New York Driver's Manual and FMCSA CDL Manual.",
  tests: [
    {
      label: "New York Driver's License Practice Test",
      href: "/new-york-dmv-practice-test",
      description:
        "Practice for the New York DMV Class D knowledge test. Covers traffic signs, road rules, DWI and DWAI laws, Move Over law, and New York-specific traffic regulations.",
    },
    {
      label: "New York Motorcycle Practice Test",
      href: "/new-york-motorcycle-practice-test",
      description:
        "Prepare for the New York DMV Class M motorcycle knowledge test. Covers riding techniques, NY helmet laws (required for all riders), lane safety, and hazard awareness.",
    },
    {
      label: "New York CDL General Knowledge Test",
      href: "/new-york-cdl-practice-test",
      description:
        "Study for the New York CDL General Knowledge exam. Covers pre-trip inspection, HOS rules, braking, cargo, and New York City commercial vehicle route requirements.",
    },
  ],
  faqs: [
    {
      question: "How many questions are on the New York DMV knowledge test?",
      answer:
        "The New York Class D knowledge test has 20 questions: 4 about traffic signs and 16 about road rules. You must answer at least 14 correctly (70%) to pass. The motorcycle test also has 20 questions and requires the same 70% passing score.",
    },
    {
      question: "Does New York require a helmet for all motorcycle riders?",
      answer:
        "Yes. New York State requires all motorcycle operators and passengers to wear a DOT-approved helmet at all times, regardless of age. There are no exemptions based on age or insurance coverage in New York.",
    },
    {
      question: "What is the graduated driver licensing (GDL) process in New York?",
      answer:
        "New York's GDL program for drivers under 18 requires: passing the knowledge test to get a learner permit, holding the permit for at least 6 months, completing a 5-hour pre-licensing course, logging 50 hours of supervised driving (15 at night), and then passing a road test for a junior license with graduated restrictions.",
    },
    {
      question: "Are there special commercial vehicle rules for New York City?",
      answer:
        "Yes. New York City has a designated truck route system that CMV operators must follow. Some bridges and tunnels have weight, height, or HazMat restrictions. There are also strict idling limits for diesel vehicles. CDL drivers operating in NYC should review NYCDOT truck route maps before their trips.",
    },
  ],
};

export default function NewYorkDMVIndexPage() {
  return <StateIndexPage {...data} />;
}
