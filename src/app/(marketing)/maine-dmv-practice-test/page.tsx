import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Maine DMV Practice Test 2025 – Free BMV Knowledge Exam Prep",
  description: "Prepare for the Maine BMV 30-question knowledge test (24 correct to pass, 80%). Covers OUI law, implied consent, zero tolerance under 21, GDL curfew, school bus rules, and Maine speed limits.",
  alternates: { canonical: "https://caredmvprep.com/maine-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/maine-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Maine",
  stateAbbr: "ME",
  testLabel: "DMV Practice Test",
  slug: "maine-dmv-practice-test",
  headline: "Maine BMV Practice Test 2025",
  intro: "The Maine Bureau of Motor Vehicles (BMV), under the Secretary of State, administers a 30-question knowledge exam. You must answer at least 24 questions correctly (80%) to pass. This practice test covers Maine-specific laws including OUI statutes, implied consent, GDL requirements, speed limits, school bus rules, and seat belt law.",
  basedOn: "Maine Secretary of State BMV Driver's Manual",
  keyRules: [
    { icon: "🍺", rule: "OUI – Not DUI", detail: "Maine uses the term OUI (Operating Under the Influence) under 29-A M.R.S. § 2411 — not DUI or DWI. The legal BAC limit is 0.08% for adults 21+. Under-21 drivers face true zero-tolerance: 0.00% BAC (any detectable alcohol). CDL holders face 0.04% while operating commercial vehicles. Aggravated OUI triggers at 0.15%+ BAC." },
    { icon: "📋", rule: "Implied Consent — Escalating Refusal Penalties", detail: "By driving in Maine you consent to chemical testing if arrested for OUI. Refusing triggers license suspension: 1st refusal = 275 days, 2nd = 18 months, 3rd = 4 years, 4th = 6 years. A refusal is also admissible as evidence in any OUI proceeding — a Maine-distinctive rule." },
    { icon: "🧑‍🎓", rule: "Permit Age: 15 (With Driver Education)", detail: "Maine allows applicants to obtain a learner's permit at age 15 — earlier than many states — provided they are enrolled in driver education. For applicants under 18, driver education is required. Permit holders must drive only with a licensed driver age 18 or older seated in the front passenger seat." },
    { icon: "🚌", rule: "School Bus — $250 First-Offense Fine", detail: "Stop before reaching a stopped school bus with red lights flashing. Wait until the red lights stop flashing and it is safe to proceed. The only exception is on a divided highway (only vehicles directly behind the bus must stop). First offense: $250 minimum fine." },
    { icon: "🪑", rule: "Seat Belt Fines Cannot Be Suspended", detail: "All front-seat occupants and all passengers under 18 must wear seat belts. Maine has a distinctive rule: seat belt fines CANNOT be suspended by the court. A judge has no discretion to waive or reduce the penalty once a violation is found." },
    { icon: "💡", rule: "Headlights When Wipers Are In Use", detail: "Headlights are required from sunset to sunrise, when visibility is less than 1,000 feet, AND when windshield wipers are in constant or intermittent use. The wiper-use trigger is directly tested on the exam." },
    { icon: "🕛", rule: "GDL Curfew: Midnight to 5 a.m.", detail: "Maine drivers under 18 cannot drive between midnight and 5 a.m. unless accompanied by a licensed adult driver. GDL requirements include 70 supervised driving hours (10 at night) and a 6-month holding period before the road test." },
    { icon: "🏎️", rule: "Speed Limits", detail: "Interstate: 75 mph. Business/residential areas: 25 mph. Rural roads (no sign posted): 45 mph. School zone when children are present: 15 mph. Drivers can also be cited under the basic speed rule even while traveling at or below the posted limit if conditions make that speed unsafe." },
  ],
  about: [
    "The Maine Bureau of Motor Vehicles (BMV) operates under the Maine Secretary of State's office and administers the state's driver licensing program. The knowledge exam consists of 30 questions drawn from the Maine Driver's Manual, and applicants must answer at least 24 correctly to earn an 80% passing score. Maine uses the term OUI (Operating Under the Influence) under 29-A M.R.S. § 2411 rather than DUI — this is one of the most distinctive aspects of Maine traffic law and is directly tested on the exam.",
    "Maine's implied consent law (29-A M.R.S. § 2521) means that by driving on Maine roads, every driver automatically consents to a chemical test if lawfully arrested for OUI. Refusing this test triggers escalating suspension periods: 275 days for a first refusal, 18 months for a second, 4 years for a third, and 6 years for a fourth or subsequent refusal. Maine also allows the refusal itself to be admitted as evidence in an OUI criminal proceeding — a Maine-distinctive rule. A first OUI conviction results in a 150-day license suspension plus mandatory alcohol screening and treatment.",
    "Maine's GDL program requires permit holders to be at least 15 years old with driver education enrollment. Before taking the road test, permit holders must complete 70 supervised driving hours (10 at night) and hold the permit for at least 6 months. Drivers under 18 face a midnight-to-5-a.m. curfew. All front-seat occupants and all passengers under 18 must wear seat belts — and Maine's seat belt fines cannot be suspended by the court. Interstate speed limit is 75 mph, business/residential areas are 25 mph, rural roads default to 45 mph, and school zones require 15 mph when children are present.",
  ],
  sampleQuestions: [
    {
      question: "Maine law refers to impaired driving as OUI. What does OUI stand for under Maine statute 29-A M.R.S. § 2411?",
      options: ["Operating Under Influence", "Operating While Intoxicated", "Operating Under the Influence", "Operating with Impairment"],
      correctIndex: 2,
      explanation: "OUI stands for 'Operating Under the Influence,' which is the exact term used in Maine statute 29-A M.R.S. § 2411. Maine does not use the DUI or DWI terminology found in other states. OUI charges can result from impairment by alcohol, drugs, or a combination of both substances."
    },
    {
      question: "What is the mandatory license suspension for a first OUI conviction in Maine?",
      options: ["150 days", "90 days", "6 months", "1 year"],
      correctIndex: 0,
      explanation: "A first OUI conviction in Maine results in a 150-day license suspension under 29-A M.R.S. § 2411(5)(A), along with mandatory alcohol screening and treatment. This is separate from — and shorter than — the 275-day implied consent refusal suspension."
    },
    {
      question: "A driver under age 21 in Maine is found to have a BAC of 0.01%. What is the legal consequence under Maine's zero-tolerance law?",
      options: ["No penalty — 0.01% is below the 0.02% threshold", "A warning only", "An OUI charge — any detectable alcohol is a violation for under-21 drivers", "A fine but no license action"],
      correctIndex: 2,
      explanation: "Maine enforces true zero tolerance for drivers under 21: any detectable alcohol — even 0.01% — constitutes an OUI violation. Maine sets the under-21 threshold at 0.00%, which is stricter than states that use a 0.02% threshold. This is one of the most commonly tested facts on the Maine BMV exam."
    },
    {
      question: "How long is a driver's license suspended for a first refusal to take a chemical test under Maine's implied consent law?",
      options: ["150 days", "275 days", "6 months", "1 year"],
      correctIndex: 1,
      explanation: "Maine's implied consent law (29-A M.R.S. § 2521) imposes a 275-day license suspension for a first refusal to submit to a chemical test. This is longer than the 150-day first-offense OUI conviction suspension, making refusal a costly strategy. Maine also allows the refusal to be used as evidence in court."
    },
    {
      question: "When approaching a stopped school bus with red lights flashing in Maine, when may you proceed?",
      options: ["When you can see no children near the bus", "When the bus driver waves you through", "When the red lights stop flashing and it is safe to proceed", "After waiting 30 seconds"],
      correctIndex: 2,
      explanation: "Maine law requires you to stop before reaching a stopped school bus with red lights flashing and the stop arm extended. You may not proceed until the red lights stop flashing and it is safe to do so. First offense carries a minimum $250 fine."
    },
    {
      question: "In Maine, when must you turn on your headlights besides sunset to sunrise?",
      options: ["Only when visibility drops below 500 feet", "When your windshield wipers are in constant or intermittent use, or when visibility is less than 1,000 feet", "Only when traveling faster than 55 mph in rain", "When the road surface is wet"],
      correctIndex: 1,
      explanation: "Maine law requires headlights when visibility is less than 1,000 feet AND when windshield wipers are in constant or intermittent use. The wiper-use trigger is a commonly tested Maine-distinctive rule — if it is raining enough to need wipers, headlights must be on."
    },
    {
      question: "What is the default speed limit on rural roads in Maine when no sign is posted?",
      options: ["55 mph", "35 mph", "40 mph", "45 mph"],
      correctIndex: 3,
      explanation: "The default speed limit on rural roads in Maine (excluding interstates and urban/business zones) is 45 mph when no speed limit sign is posted. Business and residential areas default to 25 mph, and school zones require 15 mph when children are present."
    },
    {
      question: "Which statement about Maine's seat belt fines is correct?",
      options: ["Courts may suspend seat belt fines for first-time offenders", "Seat belt fines may be waived if the driver completes a safety course", "Seat belt fines CANNOT be suspended by the court", "Seat belt fines are optional at judicial discretion"],
      correctIndex: 2,
      explanation: "Maine has a distinctive rule: seat belt fines CANNOT be suspended by the court. A judge has no discretion to waive or reduce the penalty once a seat belt violation is found. This makes Maine's seat belt enforcement unusually firm, reflecting the legislature's intent to make compliance mandatory."
    },
    {
      question: "Maine drivers under 18 are subject to a nighttime curfew. Which hours are restricted?",
      options: ["10 p.m. to 5 a.m.", "11 p.m. to 6 a.m.", "Midnight to 5 a.m.", "1 a.m. to 5 a.m."],
      correctIndex: 2,
      explanation: "Maine's GDL curfew prohibits drivers under 18 from driving between midnight and 5 a.m. unless accompanied by a licensed adult driver. The exception allows an under-18 driver to operate during curfew hours if a licensed adult is present in the vehicle."
    },
    {
      question: "What is the maximum statutory speed limit on Maine interstate highways?",
      options: ["55 mph", "65 mph", "70 mph", "75 mph"],
      correctIndex: 3,
      explanation: "Maine's maximum statutory speed limit on interstate highways is 75 mph. Actual posted limits on specific sections may be lower, and drivers must always obey posted signs. Maine's basic speed rule also requires driving at a speed reasonable and prudent for actual conditions, regardless of the posted limit."
    },
  ],
  faqs: [
    {
      question: "What is the passing score for the Maine BMV knowledge test?",
      answer: "The Maine BMV knowledge exam consists of 30 questions, and you must answer at least 24 correctly to pass — an 80% passing threshold. The exam covers road signs, traffic laws, OUI statutes, GDL requirements, implied consent rules, speed limits, school bus laws, and seat belt law from the Maine Driver's Manual."
    },
    {
      question: "Does Maine call it DUI or OUI?",
      answer: "Maine uses OUI — Operating Under the Influence — under 29-A M.R.S. § 2411. This is an important distinction because the Maine knowledge exam uses OUI terminology throughout. The legal BAC limit is 0.08% for adults 21+, 0.00% (zero tolerance) for drivers under 21, and 0.04% for CDL holders operating commercial vehicles. Aggravated OUI triggers at 0.15%+ BAC."
    },
    {
      question: "What is the zero-tolerance BAC limit for drivers under 21 in Maine?",
      answer: "Maine enforces true zero tolerance for drivers under 21 — any detectable alcohol in a driver's system constitutes an OUI violation. There is no minimum threshold; even a BAC of 0.01% is sufficient for an OUI charge under Maine law. This is stricter than states that set a 0.02% under-21 threshold."
    },
    {
      question: "What happens if a driver refuses a chemical test in Maine?",
      answer: "Refusing a chemical test triggers an automatic license suspension under Maine's implied consent law (29-A M.R.S. § 2521): 275 days for a first refusal, 18 months for a second, 4 years for a third, and 6 years for a fourth or subsequent refusal. Maine also allows the refusal itself to be admitted as evidence against you in any OUI criminal proceeding — meaning the prosecution can argue to the jury that you refused because you knew you were over the limit."
    },
    {
      question: "What are Maine's GDL supervised driving requirements?",
      answer: "Maine's Graduated Driver Licensing program requires permit holders to complete 70 hours of supervised driving practice before the road test, with at least 10 of those hours at night. Permit holders must also hold the permit for a minimum of 6 months before they can take the road test. Under-18 drivers are also subject to a midnight-to-5-a.m. curfew and, for the first 6 months after receiving a full license, cannot carry passengers under 20 without a licensed adult present."
    },
    {
      question: "What are Maine's school bus laws?",
      answer: "Maine law requires all drivers to stop before reaching a stopped school bus with red lights flashing and the stop arm extended. Drivers must remain stopped until the red lights stop flashing and it is safe to proceed. On a divided or limited-access highway, only vehicles in the lane directly behind the bus must stop. The minimum fine for a first offense of illegally passing a stopped school bus is $250."
    },
    {
      question: "What is Maine's seat belt law?",
      answer: "Maine requires all front-seat occupants to wear a seat belt, regardless of age. All passengers under 18 must wear a seat belt in any seat — front or rear. A distinctive Maine rule is that seat belt fines CANNOT be suspended by the court: once a violation is found, the judge has no discretion to waive or reduce the penalty."
    },
    {
      question: "What age can you get a learner's permit in Maine?",
      answer: "Maine residents may apply for a learner's permit beginning at age 15, provided they are enrolled in driver education. Driver education is required for all applicants under 18. Permit holders must be accompanied at all times by a licensed driver who is 18 or older, seated in the front passenger seat. Applicants 18 and older may obtain a permit without completing a formal driver education course."
    },
    {
      question: "What does Maine's headlight and wiper law require?",
      answer: "Maine requires headlights from sunset to sunrise, when visibility is less than 1,000 feet due to weather, AND when windshield wipers are in constant or intermittent use. The wiper-use trigger is an important Maine-specific rule: if conditions require wipers, headlights must also be on to ensure other drivers can see you."
    },
    {
      question: "What are Maine's speed limits?",
      answer: "Maine's statutory speed limits: interstate highways — 75 mph; business and residential areas — 25 mph; rural roads (no sign posted) — 45 mph; school zones when children are present — 15 mph. Maine's basic speed rule also requires drivers to travel at a speed that is reasonable and prudent for actual road and weather conditions, meaning drivers can be cited even while traveling at or below the posted limit if conditions make that speed dangerous."
    },
  ],
  relatedTests: [
    { label: "Maine Motorcycle Practice Test", href: "/maine-motorcycle-practice-test" },
    { label: "Maine CDL Practice Test", href: "/maine-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function MaineDMVPage() {
  return <PracticeTestPage {...data} />;
}
