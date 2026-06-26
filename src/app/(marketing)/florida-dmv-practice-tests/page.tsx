import type { Metadata } from "next";
import StateIndexPage, { type StateIndexPageProps } from "@/components/StateIndexPage";

export const metadata: Metadata = {
  title: "Florida DMV Practice Tests 2025 – Free FL Driver's License, Motorcycle & CDL Prep",
  description:
    "Free Florida DHSMV practice tests for Class E driver's license, motorcycle endorsement, and CDL General Knowledge. Based on the official Florida Driver Handbook and FMCSA CDL Manual.",
  alternates: { canonical: "https://caredmvprep.com/florida-dmv-practice-test" },
  robots: { index: false, follow: true },
  openGraph: { url: 'https://caredmvprep.com/florida-dmv-practice-tests', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: StateIndexPageProps = {
  state: "Florida",
  stateAbbr: "FL",
  slug: "florida-dmv-practice-tests",
  intro:
    "Free practice tests for every Florida DHSMV license type — Class E driver's license, motorcycle endorsement, and CDL General Knowledge. All content is based on the official Florida Driver Handbook and FMCSA CDL Manual.",
  tests: [
    {
      label: "Florida Driver's License Practice Test",
      href: "/florida-dmv-practice-test",
      description:
        "Practice for the Florida DHSMV Class E knowledge test. Covers traffic signs, speed limits, DUI and implied consent laws, Florida no-fault insurance, and road rules.",
    },
    {
      label: "Florida Motorcycle Practice Test",
      href: "/florida-motorcycle-practice-test",
      description:
        "Prepare for your Florida motorcycle endorsement test. Covers riding techniques, helmet and eye protection laws, lane positioning, and safe motorcycle operation.",
    },
    {
      label: "Florida CDL General Knowledge Test",
      href: "/florida-cdl-practice-test",
      description:
        "Study for the Florida CDL General Knowledge exam. Covers pre-trip inspection, braking techniques, cargo securement, hours of service, and Florida commercial vehicle rules.",
    },
  ],
  faqs: [
    {
      question: "What is the passing score for the Florida DHSMV knowledge test?",
      answer:
        "The Florida Class E knowledge test requires a passing score of 80% — at least 40 correct answers out of 50 questions. The motorcycle endorsement knowledge test and CDL General Knowledge test also require 80%.",
    },
    {
      question: "How many times can I retake the Florida knowledge test?",
      answer:
        "There is no statewide limit on the number of retakes for the Florida knowledge test. However, each attempt requires a fee. Check with your local DHSMV office for scheduling and current fee information.",
    },
    {
      question: "What is Florida's implied consent law?",
      answer:
        "Florida's implied consent law states that by driving on Florida roads, you automatically agree to take a chemical test (breath, blood, or urine) if a law enforcement officer has probable cause to believe you are under the influence. Refusing the test results in an automatic 1-year license suspension for a first refusal.",
    },
    {
      question: "Can I take a motorcycle safety course instead of the DHSMV skills test in Florida?",
      answer:
        "Yes. Completing a Florida Rider Training Program Basic RiderCourse approved by the DHSMV can waive the motorcycle skills test. You still need to pass the written knowledge test. Contact the DHSMV or a local course provider for current offerings.",
    },
  ],
};

export default function FloridaDMVIndexPage() {
  return <StateIndexPage {...data} />;
}
