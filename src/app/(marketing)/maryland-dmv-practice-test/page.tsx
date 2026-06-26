import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Maryland DMV Practice Test 2025 – Free MD MVA Knowledge Exam Prep",
  description:
    "Free Maryland MVA practice test based on the 2025 Maryland Driver's Manual. 25 questions, 88% (22/25) to pass — one of the highest passing thresholds nationally. Covers Noah's Law IID mandate, Maryland's reverse DUI/DWI semantics, 60 supervised hours, and the I-495 Beltway HOV rules.",
  alternates: { canonical: "https://caredmvprep.com/maryland-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/maryland-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Maryland",
  stateAbbr: "MD",
  testLabel: "Driver's License Knowledge Test",
  slug: "maryland-dmv-practice-test",
  headline: "Maryland MVA Practice Test – Motor Vehicle Administration Knowledge Exam",
  intro:
    "Maryland driver's licenses are issued by the Motor Vehicle Administration (MVA), part of the Maryland Department of Transportation — not a DMV. Maryland's knowledge test has two nationally distinctive features: the 88% passing threshold (22 of 25 correct), one of the highest in the country, and the reversed DUI/DWI severity — in Maryland, DUI is more serious (0.08%+) and DWI is the lesser charge (0.07%), opposite to how most drivers assume. This free practice test also covers Noah's Law mandatory IID, the permit age of 15 years 9 months, Maryland's 60-hour supervised driving requirement, and the Aggressive Driving law under Transportation Article § 21-901.2.",
  basedOn: "2025 Maryland Driver's Manual",
  about: [
    "Maryland driver's licenses are issued by the Motor Vehicle Administration (MVA), a unit of the Maryland Department of Transportation (MDOT). The MVA is sometimes informally called the 'Maryland DMV,' but its official name is the Motor Vehicle Administration. Maryland's knowledge test consists of 25 multiple-choice questions and requires a minimum of 22 correct answers — an 88% passing score. This threshold is one of the highest in the United States, significantly above the 80% standard used by most states, reflecting Maryland's expectation that drivers demonstrate strong knowledge before receiving a license.",
    "Maryland has a distinctive two-tier impaired driving structure that is the reverse of what most people intuitively expect. DUI (Driving Under the Influence) is the MORE serious offense in Maryland, applying at a BAC of 0.08% or higher and carrying up to 1 year in prison and a $1,000 fine for a first conviction. DWI (Driving While Impaired) is the LESSER offense, applying at a BAC of 0.07% and carrying up to 60 days in jail and a $500 fine for a first conviction. In most states, 'DWI' implies greater severity than 'DUI' — in Maryland, it is the opposite. Maryland's Aggressive Driving law (Transportation Article § 21-901.2) is also distinctive: committing three or more of six listed violations in sequence (speeding, tailgating, improper lane change, etc.) constitutes aggressive driving, carrying 5 license points and a $370 fine.",
    "Maryland's graduated licensing program requires a learner's permit at the unusually specific age of 15 years and 9 months (15¾) — not simply 15 or 16. The permit must be held for 9 months, and applicants must log a minimum of 60 supervised driving hours, including 10 at night, with a licensed adult 21 or older. Maryland's 60-hour supervised driving requirement is among the highest in the nation. Noah's Law (SB 945, 2016) mandates an ignition interlock device (IID) for ALL DUI convictions including first offenses in Maryland — named for Montgomery County police officer Noah Leotta, killed by a repeat drunk driver. Even a first-offense DUI at 0.08% requires IID installation before license reinstatement.",
  ],
  keyRules: [
    { icon: "📊", rule: "88% passing score — 22/25 required", detail: "Maryland requires 22 correct out of 25 (88%) to pass the knowledge test. Most states require 80%. Maryland's threshold is one of the highest nationally and requires thorough preparation." },
    { icon: "🍺", rule: "DUI (0.08%+) is MORE serious than DWI (0.07%) in Maryland", detail: "Maryland's DUI/DWI semantics are reversed from most states: DUI = 0.08%+ (criminal, 12 pts, up to 1 yr prison); DWI = 0.07% (lesser, 6 pts, up to 60 days). Under 21: 0.02%." },
    { icon: "🔑", rule: "Noah's Law: IID mandatory for ALL DUI convictions (first offense)", detail: "SB 945 (2016): Every Maryland DUI conviction — even a first offense at 0.08% — requires an ignition interlock device before license reinstatement. Named for Officer Noah Leotta, killed by a repeat drunk driver." },
    { icon: "👦", rule: "Permit age: 15 years 9 months — 9 months + 60 hours required", detail: "MD learner's permit at exactly 15 yrs 9 months. Hold 9 months minimum. Log 60 hours supervised driving (10 at night) — among the most hours required of any U.S. state." },
    { icon: "🚘", rule: "Aggressive Driving: 3 of 6 violations in sequence = offense", detail: "Transportation Article § 21-901.2: committing 3+ of 6 listed violations in sequence (speeding, tailgating, improper lane change, etc.) = aggressive driving. First offense: 5 points + $370 fine." },
    { icon: "📱", rule: "Handheld ban — all drivers (Transportation Article § 21-1124.2)", detail: "MD bans all handheld device use while driving. First offense: $83. Second offense: $140. Primary enforcement. Applies at red lights and in parking lots if the vehicle is in motion." },
    { icon: "🌙", rule: "Provisional curfew: midnight–5 AM / 18-month restriction period", detail: "MD provisional license holders under 18 cannot drive midnight to 5 AM for the entire 18-month provisional period. Also limited to 1 non-family passenger under 18." },
    { icon: "🛣️", rule: "I-495 Beltway HOV lanes during rush hours", detail: "Maryland's I-495 Capital Beltway and I-270 spur have HOV lanes during peak commute hours. Violations carry significant fines. The American Legion Bridge on I-495 over the Potomac has specific lane restrictions." },
  ],
  sampleQuestions: [
    {
      question: "In Maryland, which impaired driving charge is MORE serious — DUI or DWI — and at what BAC does each apply?",
      options: [
        "DWI is more serious at 0.08%+ BAC; DUI applies at 0.07% as the lesser charge",
        "DUI is more serious at 0.08%+ BAC; DWI is the lesser charge at 0.07% BAC",
        "Both DUI and DWI apply at the same 0.08% threshold — they are interchangeable in Maryland",
        "Maryland uses only DUI — DWI is not a separate charge in Maryland law",
      ],
      correctIndex: 1,
      explanation:
        "Maryland's impaired driving terminology is the reverse of what most people assume. DUI (Driving Under the Influence) is the MORE serious charge, applying at 0.08%+ BAC, and carries up to 1 year imprisonment and a $1,000 fine for a first conviction. DWI (Driving While Impaired) is the LESSER charge at 0.07% BAC, carrying up to 60 days in jail and a $500 fine. DUI adds 12 points to the driving record (triggering automatic revocation); DWI adds 6 points. This reversed severity is a frequently tested Maryland distinction.",
    },
    {
      question: "What is Noah's Law in Maryland (SB 945, 2016), and which DUI convictions does it apply to?",
      options: [
        "Noah's Law requires IID only for third-offense DUI convictions in Maryland",
        "Noah's Law requires IID only when a DUI involved a BAC of 0.15% or higher",
        "Noah's Law mandates an ignition interlock device for ALL DUI convictions — including first offenses at 0.08%",
        "Noah's Law applies only to DWI convictions, not DUI, in Maryland",
      ],
      correctIndex: 2,
      explanation:
        "Maryland's Noah's Law (SB 945, enacted 2016) requires an ignition interlock device (IID) for every Maryland DUI conviction — including first-offense DUI at 0.08% BAC. There is no BAC floor for the IID requirement: any DUI conviction triggers mandatory IID as a condition of license reinstatement. The law is named for Montgomery County Police Officer Noah Leotta, who was struck and killed by a repeat drunk driver in 2015. Before Noah's Law, first-offense DUI did not automatically require IID.",
    },
    {
      question: "Maryland's knowledge test requires what minimum passing score — and how does this compare to most other states?",
      options: [
        "80% (20/25 correct) — the same standard used by most U.S. states",
        "84% (21/25 correct) — slightly above the national standard",
        "88% (22/25 correct) — one of the highest passing thresholds of any state",
        "90% (22.5/25 correct) — Maryland rounds up, so 23/25 is required",
      ],
      correctIndex: 2,
      explanation:
        "Maryland's MVA knowledge test requires at least 22 correct answers out of 25 — an 88% passing score. This is one of the highest passing thresholds of any state in the nation. Most states use an 80% standard. Maryland's higher threshold reflects the MVA's expectation that drivers demonstrate strong knowledge of traffic laws before licensing. If you fail, you must wait 7 days before retaking the test.",
    },
    {
      question: "At what precise age can a Maryland resident apply for a learner's permit?",
      options: [
        "Exactly 15 years old",
        "15 years and 6 months",
        "15 years and 9 months (15¾ years old)",
        "16 years old",
      ],
      correctIndex: 2,
      explanation:
        "Maryland residents may apply for a learner's permit at the specific age of 15 years and 9 months — approximately 15¾ years old. This unusually precise age requirement is tested on the Maryland knowledge exam. The permit must be held for a minimum of 9 months and requires at least 60 hours of supervised driving (10 at night) before the applicant can take the road skills test for a provisional license.",
    },
    {
      question: "Maryland requires permit holders under 18 to log how many supervised driving hours before applying for a provisional license?",
      options: [
        "30 hours with 5 at night",
        "40 hours with 10 at night",
        "50 hours with 10 at night",
        "60 hours with 10 at night — one of the highest requirements in the nation",
      ],
      correctIndex: 3,
      explanation:
        "Maryland requires a minimum of 60 supervised driving hours — including 10 at night — before teen applicants can take the road skills test for a provisional license. This is among the highest supervised hour requirements in the U.S. The 60 hours must be with a licensed adult 21 or older in the front seat. A parent or guardian must sign a certification form attesting to the hours. Research consistently shows that more supervised practice time significantly reduces crash risk for new drivers.",
    },
    {
      question: "Maryland's Aggressive Driving law (Transportation Article § 21-901.2) triggers an offense when a driver commits:",
      options: [
        "Any single act of speeding combined with failure to signal",
        "Three or more of six listed traffic violations in sequence — such as speeding, tailgating, and improper lane changes",
        "Driving more than 20 mph over the speed limit on any Maryland highway",
        "Any two serious violations within the same 10-mile road segment",
      ],
      correctIndex: 1,
      explanation:
        "Maryland Transportation Article § 21-901.2 defines aggressive driving as committing three or more of six listed violations in sequence: exceeding the speed limit, failing to yield right of way, improperly passing another vehicle, following too closely, improperly changing lanes, or failing to obey traffic control devices. A first aggressive driving conviction carries 5 points on the license and a $370 fine. The three-of-six sequential violation structure makes Maryland's aggressive driving definition one of the more specific in the nation.",
    },
    {
      question: "What is the fine for a first offense violation of Maryland's handheld device ban (Transportation Article § 21-1124.2)?",
      options: ["$50", "$83", "$150", "$200"],
      correctIndex: 1,
      explanation:
        "Maryland's first-offense fine for handheld device use while driving is $83 under Transportation Article § 21-1124.2. A second offense within 3 years is $140. Maryland's fines are notably modest compared to many states — New York, for instance, charges $50–$200 plus 5 license points per violation. Maryland's law is primary enforcement, meaning an officer can stop a driver solely for holding a device without any other traffic violation.",
    },
    {
      question: "How many license points does a DWI conviction (at 0.07% BAC) add to a Maryland driving record?",
      options: ["3 points", "6 points", "8 points", "12 points"],
      correctIndex: 1,
      explanation:
        "A DWI (Driving While Impaired) conviction at 0.07% BAC in Maryland adds 6 points to the driver's record. Maryland's point system: 3 points triggers a warning letter; 5 points requires a conference; 8 points results in possible suspension; 12 points triggers automatic revocation. A DUI (0.08%+) conviction adds 12 points — enough to trigger automatic revocation on its own. DWI's 6-point addition is serious but does not alone trigger suspension, though combined with other infractions it can reach the 8-point threshold.",
    },
    {
      question: "Maryland's provisional license curfew restricts driving for holders under 18 during which hours?",
      options: [
        "10 PM to 5 AM for the first 6 months",
        "11 PM to 5 AM for the first 12 months",
        "Midnight to 5 AM for the entire 18-month provisional period",
        "Midnight to 6 AM for 12 months or until age 18",
      ],
      correctIndex: 2,
      explanation:
        "Maryland provisional license holders under 18 may not drive between midnight and 5 AM during the entire 18-month provisional period — unless accompanied by a licensed parent, guardian, or employer, or in a documented medical or safety emergency. Maryland also limits provisional holders to no more than 1 passenger under 18 who is not an immediate family member. Both restrictions apply for the full 18 months, not just the first portion.",
    },
    {
      question: "What does Maryland's breathalyzer refusal penalty involve under Transportation Article § 16-205.1?",
      options: [
        "A $200 fine with no license action for a first refusal",
        "A 270-day administrative license suspension for a first refusal",
        "A 30-day suspension followed by restricted driving privileges",
        "No consequence — refusal is treated as a constitutional right in Maryland",
      ],
      correctIndex: 1,
      explanation:
        "Maryland's implied consent law (Transportation Article § 16-205.1) imposes a 270-day administrative license suspension for a first breathalyzer refusal — longer than most states' refusal penalties. A second refusal within 5 years results in a 2-year suspension. The suspension runs from the date of refusal and is separate from any criminal DUI case. An Ignition Interlock System (IIS) may be offered as an alternative to the suspension period in some cases.",
    },
  ],
  faqs: [
    {
      question: "Why does Maryland's knowledge test require 88% when most states require 80%?",
      answer:
        "Maryland's 88% threshold (22/25 correct) is among the highest passing standards in the nation. The MVA sets a higher bar to ensure drivers have thorough knowledge of Maryland's traffic laws before receiving a license. Maryland's test covers state-specific rules including the reversed DUI/DWI severity, the aggressive driving statute, Noah's Law, and the specific permit age of 15 years and 9 months — content that requires careful study beyond general driving knowledge.",
    },
    {
      question: "How does Maryland's DUI/DWI system work — and why is it reversed from other states?",
      answer:
        "In Maryland, DUI (Driving Under the Influence) applies at 0.08%+ BAC and is the more serious charge (up to 1 year prison, $1,000 fine, 12 license points). DWI (Driving While Impaired) applies at 0.07% BAC and is the lesser charge (up to 60 days, $500 fine, 6 license points). Most people assume 'DWI' is more serious — in Maryland it is not. The reversed severity is directly tested on the knowledge exam and frequently surprises new Maryland drivers.",
    },
    {
      question: "What is Noah's Law in Maryland?",
      answer:
        "Noah's Law (SB 945, 2016) requires an ignition interlock device (IID) for every Maryland DUI conviction — including first offenses at 0.08% BAC. Before Noah's Law, IID was not automatically required for a first DUI. The law is named for Montgomery County Police Officer Noah Leotta, killed by a repeat drunk driver on December 3, 2015. Maryland requires IID as a condition of license reinstatement after any DUI conviction, regardless of BAC level at the time of arrest.",
    },
    {
      question: "Why is Maryland's permit age 15 years and 9 months instead of a round number like 15 or 16?",
      answer:
        "Maryland's 15-years-9-months permit age is set by state statute and is intentionally precise. It allows teens to begin the learner permit process earlier than age 16 while still requiring them to be close to 16 before learning to drive. The 9-month holding period after obtaining the permit means most teens will be approximately 16 years and 6 months before becoming eligible for a provisional license — aligning with the developmental research on teen driving readiness.",
    },
    {
      question: "What is Maryland's Aggressive Driving law?",
      answer:
        "Transportation Article § 21-901.2 defines aggressive driving as committing three or more of six listed violations in sequence: speeding, failing to yield right of way, improperly passing, following too closely, improperly changing lanes, or disobeying traffic control devices. A first aggressive driving offense carries 5 license points and a $370 fine. The law is distinct from reckless driving and is intended to address sustained patterns of hostile or dangerous driving behavior.",
    },
    {
      question: "What are Maryland's provisional license restrictions?",
      answer:
        "Maryland provisional license holders under 18 face: (1) No driving midnight to 5 AM (unless with a licensed parent, guardian, or employer, or in an emergency) — for the entire 18-month provisional period; (2) No more than 1 passenger under 18 who is not an immediate family member. After 18 violation-free months, the driver can advance to a full license. Any traffic conviction during the provisional period may extend the restrictions.",
    },
    {
      question: "What does Maryland's handheld device ban cover and what are the fines?",
      answer:
        "Transportation Article § 21-1124.2 prohibits all Maryland drivers from holding any electronic device while driving — calls, texts, GPS navigation, and any app. Hands-free via Bluetooth or a dash mount is permitted. First offense: $83 fine. Second offense within 3 years: $140. Primary enforcement — an officer can pull you over solely for holding a device. The law applies even when stopped at a red light.",
    },
    {
      question: "What is Maryland's point system and when does it trigger suspension or revocation?",
      answer:
        "Maryland's point system: 3 points = warning letter; 5 points = mandatory conference with the MVA; 8 points = possible suspension; 12 points = automatic revocation. DUI adds 12 points (instant revocation). DWI adds 6 points. Aggressive driving adds 5 points. Reckless driving adds 6 points. Points remain on the record for 2–3 years depending on the violation. Drivers can attend a voluntary Driver Improvement Program to receive credit reducing point totals.",
    },
    {
      question: "What are Maryland's HOV lane rules on I-495 and I-270?",
      answer:
        "Maryland's I-495 Capital Beltway and I-270 spur have HOV lanes that require 2+ occupants during peak commute hours (generally 6–9 AM and 4–7 PM on weekdays). Specific segments have different HOV requirements — some require HOV-2, others HOV-3 at certain times. The American Legion Bridge on I-495 over the Potomac River is a critical bottleneck with its own specific lane rules. Violations carry significant fines. Check MDOT for current HOV requirements as they are updated periodically.",
    },
    {
      question: "How does Maryland's 270-day breathalyzer refusal suspension compare to other states?",
      answer:
        "Maryland's 270-day administrative license suspension for a first breathalyzer refusal (Transportation Article § 16-205.1) is longer than most states' first-refusal penalties. Many states impose 90–180 days for a first refusal; Maryland's 270-day period is notable. A second refusal within 5 years results in a 2-year suspension. The administrative suspension runs from the date of refusal and is separate from any criminal DUI case. An IIS (Ignition Interlock System) may be offered as an alternative.",
    },
  ],
  relatedTests: [
    { label: "MD Motorcycle Test", href: "/maryland-motorcycle-practice-test" },
    { label: "MD CDL Test", href: "/maryland-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function MarylandDMVPage() {
  return <PracticeTestPage {...data} />;
}
