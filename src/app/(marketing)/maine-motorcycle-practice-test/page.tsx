import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Maine Motorcycle Practice Test 2025 – Free BMV Endorsement Prep",
  description: "Study for the Maine BMV motorcycle endorsement test with state-specific questions on OUI law, lane splitting (illegal), wheelies prohibited (§ 2062), headlights always on, and helmet requirements for riders under 18.",
  alternates: { canonical: "https://caredmvprep.com/maine-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/maine-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Maine",
  stateAbbr: "ME",
  testLabel: "Motorcycle Practice Test",
  slug: "maine-motorcycle-practice-test",
  headline: "Maine Motorcycle Endorsement Practice Test 2025",
  intro: "Maine requires a motorcycle endorsement (Class M) added to your driver's license through the Maine BMV. The endorsement knowledge exam is approximately 25 questions — you must answer 20 correctly to pass (80%). Maine has several motorcycle-specific laws under 29-A M.R.S. § 2062: motorcycle headlights must be on at all times, wheelies on public ways are specifically prohibited, and lane splitting is illegal. OUI (Operating Under the Influence) applies equally to motorcycle operators.",
  basedOn: "Maine Secretary of State BMV Motorcycle Operator Manual and Maine Revised Statutes Title 29-A",
  about: [
    "Maine motorcycle law has several distinctive provisions under 29-A M.R.S. § 2062. Motorcycle headlights must be on at all times when the motorcycle is operating — both day and night — to increase conspicuity. Wheelies (lifting the front wheel off the ground) are specifically prohibited on public ways, a Maine-distinctive rule not found in all states. Lane splitting — riding between lanes of traffic — is illegal in Maine. Up to two motorcycles may ride side-by-side (abreast) in a single lane, but more than two abreast or riding between lanes of cars is prohibited.",
    "Maine's OUI law (29-A M.R.S. § 2411) applies equally to motorcycle operators. The BAC threshold is 0.08% for riders 21 and older and 0.00% (zero tolerance) for riders under 21 — any detectable alcohol is a violation for underage operators. Maine's implied consent law also applies: refusing a chemical test triggers escalating license suspensions (275 days for a first refusal), and the refusal is admissible as evidence in court. Eye protection is required for motorcycle operators unless the motorcycle is equipped with a windscreen. Helmet is required for operators and passengers under 18.",
    "Maine requires a written motorcycle knowledge test at the Maine BMV. Completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse may waive the road skills test, but the written knowledge test is generally required. The motorcycle permit restricts riders to no passengers, no nighttime riding, and no limited-access highways. A properly functioning muffler is required — unmuffled motorcycles are illegal on Maine roads.",
  ],
  sampleQuestions: [
    {
      question: "Under Maine law (29-A M.R.S. § 2062), when must a motorcycle's headlight be turned on?",
      options: ["At all times when the motorcycle is in operation — both day and night", "Only between sunset and sunrise", "Only when visibility is less than 1,000 feet", "Only on highways with speed limits above 45 mph"],
      correctIndex: 0,
      explanation: "Maine law (29-A M.R.S. § 2062) requires motorcycle headlights to be on at ALL times when the motorcycle is operating — day or night. Motorcycles are harder for other drivers to see than cars, and daytime headlights significantly increase a motorcycle's conspicuity and reduce the risk of other drivers failing to detect the approaching motorcycle."
    },
    {
      question: "Are wheelies (lifting the front wheel off the ground) permitted on public roads in Maine?",
      options: ["Yes — wheelies are legal if performed safely with no traffic nearby", "Yes — only on roads with speed limits below 25 mph", "No — wheelies on public ways are specifically prohibited under 29-A M.R.S. § 2062", "Only licensed stunt professionals may legally perform wheelies"],
      correctIndex: 2,
      explanation: "Maine law (29-A M.R.S. § 2062) specifically prohibits performing wheelies on any public way. Lifting the front wheel reduces steering and braking ability, creating a significant hazard. This is a Maine-distinctive statute — not all states specifically prohibit wheelies by name. Violations can result in fines and points on the operator's license."
    },
    {
      question: "Is lane splitting (riding between lanes of stopped or moving traffic) legal in Maine?",
      options: ["Yes — lane splitting is legal on roads with speed limits over 35 mph", "Yes — lane splitting is legal only when traffic is completely stopped", "No — lane splitting is illegal in Maine under 29-A M.R.S. § 2062", "Maine has no specific law on lane splitting, so it is permitted by default"],
      correctIndex: 2,
      explanation: "Lane splitting is specifically prohibited in Maine under 29-A M.R.S. § 2062. Motorcycles must occupy a full lane and may not ride between lanes or rows of traffic. Lane splitting is illegal in Maine and most other U.S. states."
    },
    {
      question: "In Maine, when is eye protection required for a motorcycle operator?",
      options: ["Eye protection is always optional", "Only when riding at speeds above 55 mph", "Eye protection is required unless the motorcycle is equipped with a windscreen", "Only during daylight hours"],
      correctIndex: 2,
      explanation: "Maine requires eye protection for motorcycle operators unless the motorcycle is equipped with a windscreen providing adequate protection. Without a windscreen, wind, insects, debris, and rain can impair vision. Approved eye protection includes DOT-compliant goggles, a full-face helmet visor, or safety glasses."
    },
    {
      question: "Under Maine's zero-tolerance law, can a 20-year-old motorcyclist ride legally with a BAC of 0.01%?",
      options: ["No — Maine's zero-tolerance law applies to ALL operators under 21, including motorcyclists", "Yes — 0.01% is below the 0.02% threshold used in most states", "Yes — the zero-tolerance law only applies to car drivers, not motorcycles", "No — but only if riding on a highway"],
      correctIndex: 0,
      explanation: "Maine's zero-tolerance law prohibits ALL operators under 21 — including motorcyclists — from operating any motor vehicle with any detectable alcohol (0.00% threshold). A BAC of 0.01% is a clear violation. Motorcycles offer no protection in a crash, making any alcohol especially dangerous for young riders."
    },
    {
      question: "How many motorcycles may legally ride side by side (abreast) in a single lane in Maine?",
      options: ["No motorcycles may share a lane — one motorcycle per lane at all times", "Up to two motorcycles may ride abreast in a single lane", "Up to three motorcycles abreast on roads posted above 35 mph", "Only if both riders are at the same speed"],
      correctIndex: 1,
      explanation: "While lane splitting and sharing a lane with cars is prohibited, Maine law permits up to two motorcycles to ride abreast (side by side) in a single lane. More than two motorcycles riding abreast in a single lane is not permitted."
    },
    {
      question: "Which Maine motorcycle riders are required to wear a helmet?",
      options: ["All motorcycle operators and passengers regardless of age", "Operators and passengers under 18 years old", "Only operators — passengers may choose for themselves", "Helmets are completely optional in Maine"],
      correctIndex: 1,
      explanation: "Maine requires motorcycle operators and passengers who are under 18 years of age to wear an approved safety helmet. Adults 18 and older have the choice, though wearing a DOT-approved helmet significantly reduces the risk of fatal head injury in a crash. Helmets must meet DOT FMVSS 218 standards when required."
    },
    {
      question: "Alcohol affects a motorcycle rider's ability primarily by:",
      options: ["Improving focus and reducing reaction time", "Reducing balance, coordination, and judgment", "Increasing grip strength on the handlebars", "Having no effect at speeds under 25 mph"],
      correctIndex: 1,
      explanation: "Alcohol impairs balance, reduces coordination, slows reaction time, and impairs judgment — all critical skills for motorcycle operation. Even one or two drinks can significantly increase the risk of a crash. Riding under the influence of alcohol is illegal in all 50 states and is a leading cause of fatal motorcycle crashes.",
    },
    {
      question: "When making a turn on a motorcycle, you should:",
      options: ["Slow down after you enter the turn", "Apply the brakes throughout the turn", "Look through the turn toward your exit point", "Lean opposite to the direction of the turn"],
      correctIndex: 2,
      explanation: "Look through the turn toward where you want to go — your exit point. Your motorcycle will naturally follow your vision. Slow down before entering the turn (not during), lean in the direction of the turn, and roll on the throttle smoothly as you exit. Never brake hard while leaning in a turn.",
    },
    {
      question: "When riding at night, which of the following is most important?",
      options: ["Increasing your speed to reduce time on the road", "Using high beams at all times", "Reducing speed and increasing following distance", "Wearing darker clothing to blend with traffic"],
      correctIndex: 2,
      explanation: "At night, reduce your speed and increase your following distance to compensate for reduced visibility. Your headlight only illuminates a limited distance ahead, and road hazards — potholes, debris, animals — are much harder to see. Use your high beams when no oncoming traffic is present, and wear reflective gear to improve your visibility to other drivers.",
    },
  ],
  faqs: [
    {
      question: "Does Maine require a helmet for all motorcycle riders?",
      answer: "Maine requires helmets for motorcycle operators and passengers who are under 18 years of age. Adults 18 and older are not legally required to wear a helmet under Maine's current law, though wearing a DOT-approved helmet is strongly recommended as it significantly reduces the risk of fatal head injury. When a helmet is required, it must meet DOT Federal Motor Vehicle Safety Standard (FMVSS) 218."
    },
    {
      question: "What BAC limit applies to motorcycle riders in Maine?",
      answer: "Maine's OUI law applies equally to motorcycle operators. The legal limit is 0.08% BAC for riders 21 and older. Riders under 21 are subject to Maine's true zero-tolerance standard — any detectable alcohol (even 0.01% BAC) constitutes an OUI violation. An OUI conviction for a motorcycle operator results in the same penalties as for car drivers, including a 150-day suspension for a first conviction, mandatory alcohol screening and treatment, and possible ignition interlock requirements."
    },
    {
      question: "Is lane splitting legal in Maine?",
      answer: "No. Lane splitting is explicitly illegal in Maine under 29-A M.R.S. § 2062, which prohibits operating a motorcycle between lanes of traffic or between adjacent lines or rows of vehicles. However, up to two motorcycles may share one lane side-by-side (abreast) — this is permitted and is different from lane splitting. Riders visiting from states where lane splitting is legal should note that Maine law is more restrictive."
    },
    {
      question: "Are wheelies legal on Maine public roads?",
      answer: "No. Maine law (29-A M.R.S. § 2062) specifically prohibits performing wheelies on any public way. This is a Maine-distinctive statute — not all states specifically prohibit wheelies by name. Lifting the front wheel off the ground reduces steering control and braking ability, creating a serious hazard for the operator and other road users."
    },
    {
      question: "When must a motorcycle headlight be on in Maine?",
      answer: "Maine law requires motorcycle headlights to be on at all times when the motorcycle is in operation — both day and night (29-A M.R.S. § 2062). Motorcycles are significantly harder for other drivers to see than cars, and running headlights during the day substantially increases a motorcycle's conspicuity, reducing the risk of other drivers failing to detect the approaching motorcycle."
    },
    {
      question: "What is the Maine BMV motorcycle endorsement process?",
      answer: "To obtain a Class M motorcycle endorsement on your Maine driver's license, you must pass the BMV motorcycle knowledge exam and a skills road test. Alternatively, completing an approved MSF Basic RiderCourse may waive the road skills test — though the written knowledge test at the BMV is generally always required. The motorcycle permit restricts riders to no passengers, no nighttime riding, and no limited-access (interstate) highways. Verify current requirements with the Maine BMV."
    },
    {
      question: "Does Maine require eye protection for motorcycle riders?",
      answer: "Yes. Maine requires eye protection for motorcycle operators unless the motorcycle is equipped with a windscreen providing adequate protection. Without a windscreen, wind, insects, debris, and rain can seriously impair vision and injure the operator's eyes. Approved eye protection includes DOT-compliant goggles, a full-face helmet visor, or safety glasses."
    },
    {
      question: "What OUI rules apply to motorcycle operators in Maine?",
      answer: "Maine's OUI statute (29-A M.R.S. § 2411) applies equally to motorcycle operators. The BAC threshold is 0.08% for operators 21 and older and 0.00% for operators under 21. Maine's implied consent law (29-A M.R.S. § 2521) requires motorcycle operators who are lawfully arrested for OUI to submit to chemical testing — a first refusal triggers a 275-day administrative suspension, and the refusal itself is admissible as evidence in any OUI proceeding."
    },
  ],
  relatedTests: [
    { label: "Maine DMV Practice Test", href: "/maine-dmv-practice-test" },
    { label: "Maine CDL Practice Test", href: "/maine-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function MaineMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
