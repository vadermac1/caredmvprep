import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Virginia DMV Practice Test 2025 – Free VA Driver's Knowledge Exam Prep",
  description:
    "Free Virginia DMV practice test based on the 2025 Virginia Driver's Manual. 35 questions across road signs and road rules, 80% passing score per section. Prepare for your VA DMV knowledge exam.",
  alternates: { canonical: "https://caredmvprep.com/virginia-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/virginia-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Virginia",
  stateAbbr: "VA",
  testLabel: "Driver's License Knowledge Test",
  slug: "virginia-dmv-practice-test",
  headline: "Virginia DMV Practice Test — The Laws That Surprise Out-of-State Drivers Every Year",
  intro:
    "Virginia's knowledge test is one of the longest in the country at 35 questions, but what surprises most applicants are the Virginia-specific laws hiding in the curriculum: radar detectors are illegal in every vehicle on Virginia roads, driving 80 mph or above is automatically a Class 1 misdemeanor regardless of the posted speed limit, and permit-eligible age is 15 years and 6 months — a specific threshold found in only a handful of states. This practice test focuses on the Virginia statutes that appear on the real exam and that you cannot guess from general driving knowledge.",
  basedOn: "2025 Virginia Driver's Manual",
  about: [
    "The Virginia Department of Motor Vehicles administers the knowledge test at Customer Service Centers across the state. Virginia's test is structured as two independent sections taken back-to-back in a single visit: 10 road sign questions and 25 road rules questions. You must score at least 80% on each section separately — 8 of 10 on signs and 20 of 25 on road rules. Passing one section does not carry over if you fail the other; both must be passed in the same session. The 35-question total is one of the longest knowledge tests nationally, where most states use 20 to 25 questions. Virginia's reckless driving statute (§ 46.2-862) is particularly important: driving at 80 mph or above is automatically reckless driving — a Class 1 misdemeanor carrying up to 12 months in jail and a $2,500 fine — regardless of the posted speed limit. On a 70 mph Interstate, that means 10 mph over the limit is a criminal offense.",
    "Virginia's Graduated Driver Licensing program allows permit applications at 15 years and 6 months — a specific half-year threshold that distinguishes Virginia from states that use 15 or 16 as the cutoff. The learner's permit must be held for a minimum of 9 months, during which the applicant must log at least 45 hours of supervised driving (15 at night) under a licensed adult 21 or older. The parent or guardian must sign a certification verifying the 45 hours when the teen applies for a road skills test. The subsequent provisional license restricts nighttime driving between midnight and 4 AM for 12 months and limits passengers to no more than one person under 21 who is not the driver's sibling. Virginia's Aggressive Driving statute (§ 46.2-868.1) also applies to any driver who commits two or more listed violations — including speeding, following too closely, or running a red light — in a manner that endangers another person, creating a Class 2 misdemeanor that does not require proof of intent.",
    "Two Virginia laws are nationally distinctive enough that they appear on the knowledge test specifically because out-of-state residents frequently violate them. First: radar detectors are illegal in all vehicles on Virginia roads under § 46.2-1079 — Virginia and Washington D.C. are the only U.S. jurisdictions with a complete radar detector ban. A detector found in your vehicle will be confiscated and you will receive a traffic infraction, even if you are just passing through the state. Second: Virginia's Hands-Free Law (§ 46.2-818.2), effective January 1, 2021, prohibits all drivers from holding any wireless communication device while driving, regardless of age. First offense: $125 fine. Second and subsequent: $250. HOV lane rules on I-95, I-66, I-395, and I-64 are also specifically tested — Virginia has extensive HOV-2 and HOV-3 lane infrastructure with time-of-day variations and $125+ fines for violations.",
  ],
  keyRules: [
    { icon: "🚨", rule: "80 mph = automatic reckless driving (Class 1 misdemeanor)", detail: "§ 46.2-862: Driving 80 mph or above on any Virginia road is automatically reckless driving — a criminal Class 1 misdemeanor with up to 12 months in jail and $2,500 fine — regardless of the posted speed limit. On a 70 mph Interstate, 10 mph over is a misdemeanor. Thousands of out-of-state drivers are charged annually." },
    { icon: "📡", rule: "Radar detectors illegal in all vehicles", detail: "§ 46.2-1079: Possessing a radar detector in any vehicle on Virginia roads is prohibited. Virginia and D.C. are the only U.S. jurisdictions with this ban. The device will be confiscated and a traffic infraction issued — even for out-of-state drivers passing through." },
    { icon: "📵", rule: "Hands-Free Law — ALL drivers (Jan 1, 2021)", detail: "§ 46.2-818.2: No driver may hold any wireless device while driving in Virginia. First offense: $125. Second+: $250. Applies to every driver regardless of age. Hands-free Bluetooth and mounted navigation are permitted." },
    { icon: "🍺", rule: "DUI: 0.08% adults; mandatory jail at 0.15% and 0.20%", detail: "Virginia DUI first offense: mandatory VASAP enrollment, $250 min fine, 1-year license suspension. BAC ≥ 0.15%: mandatory 5 days jail. BAC ≥ 0.20%: mandatory 10 days jail. Under 21: 0.02% BAC zero-tolerance limit." },
    { icon: "👦", rule: "Permit at 15 years, 6 months — 9 months + 45 hours", detail: "Virginia permit age is 15½ years. Must hold 9 months minimum. Must log 45 hours supervised driving (15 at night). Parent certifies hours in writing at the skills test application." },
    { icon: "🌙", rule: "Provisional curfew: midnight–4 AM for 12 months", detail: "Provisional license holders under 18 may not drive between midnight and 4 AM for 12 months unless accompanied by a licensed parent, guardian, or employer. Maximum 1 passenger under 21 who is not a sibling." },
    { icon: "🚗", rule: "Aggressive Driving: two listed violations endangering another", detail: "§ 46.2-868.1: Committing two or more listed violations (speeding, tailgating, improper passing, running red lights, etc.) in a manner that endangers another person is a standalone Class 2 misdemeanor — no proof of intent required." },
    { icon: "🚌", rule: "HOV lanes: I-95, I-66, I-395, I-64 — time-of-day rules", detail: "Virginia's extensive HOV-2 and HOV-3 lane network has varying occupancy requirements and active hours by corridor. Violations carry $125+ fines. HOV rules are specifically tested on the VA knowledge exam because they vary by location." },
  ],
  sampleQuestions: [
    {
      question: "Under Virginia Code § 46.2-862, a driver traveling 82 mph on I-81 where the posted limit is 70 mph faces what charge?",
      options: [
        "A standard speeding ticket — 12 mph over is not criminal",
        "Reckless driving — a Class 1 misdemeanor with up to 12 months in jail",
        "An aggressive driving infraction only",
        "A warning on a first offense",
      ],
      correctIndex: 1,
      explanation:
        "§ 46.2-862 makes driving at 80 mph or above automatically reckless driving in Virginia — a Class 1 misdemeanor — regardless of the posted speed limit. At 82 mph on a 70 mph Interstate, the driver is only 12 mph over the limit, but because they exceed 80 mph, reckless driving applies. Penalties include up to 12 months in jail, a $2,500 fine, and 6 demerit points. Virginia is one of the most aggressively enforced speed states in the eastern U.S. for this reason.",
    },
    {
      question: "A driver enters Virginia from North Carolina with a radar detector mounted on their windshield. Under Virginia law, this is:",
      options: [
        "Legal — federal law allows radar detector use on interstates",
        "Legal only if the detector is not actively used",
        "A civil traffic infraction — the detector will be confiscated",
        "Permitted for out-of-state drivers who did not know the Virginia law",
      ],
      correctIndex: 2,
      explanation:
        "Virginia Code § 46.2-1079 prohibits possession of a radar detector in any vehicle on Virginia roads. It does not matter if the driver is from another state — Virginia's law applies to every vehicle on its roads. The detector will be confiscated and the driver will receive a traffic infraction. Virginia and Washington D.C. are the only U.S. jurisdictions where radar detectors are prohibited in all vehicles. Ignorance of the law is not a legal defense.",
    },
    {
      question: "Virginia's Hands-Free Law (§ 46.2-818.2, effective January 1, 2021) applies to:",
      options: [
        "Only drivers under 18",
        "Only drivers in school zones and construction zones",
        "All drivers in Virginia — holding any wireless device while driving is prohibited",
        "Texting only — voice calls via speakerphone are allowed if the phone is in a cupholder",
      ],
      correctIndex: 2,
      explanation:
        "Virginia's Hands-Free Law applies to every driver in Virginia, regardless of age. You may not hold any wireless communication device while driving — for any purpose, including calls, texts, navigation, or social media. Hands-free via Bluetooth or a mounted device is permitted. A phone in a cupholder being used for a speakerphone call would still require hands-free operation — you cannot hold it. First offense: $125 fine. Second and subsequent: $250.",
    },
    {
      question: "At what age can a Virginia resident first apply for a learner's permit?",
      options: ["15 years old", "15 years, 3 months", "15 years, 6 months", "16 years old"],
      correctIndex: 2,
      explanation:
        "Virginia permits applications at exactly 15 years and 6 months old — commonly written as 15½. This specific half-year threshold is found in only a handful of states. After receiving the permit by passing the knowledge test, the applicant must hold it for a minimum of 9 months and log at least 45 hours of supervised driving, including 15 hours at night, before taking the road skills test for a provisional license.",
    },
    {
      question: "What additional mandatory penalty applies when a Virginia DUI defendant's BAC tests at 0.20% or higher?",
      options: [
        "No additional penalty — BAC level is only used for sentencing recommendations",
        "Mandatory 5 days in jail",
        "Mandatory 10 days in jail",
        "Automatic felony upgrade for first offense",
      ],
      correctIndex: 2,
      explanation:
        "Virginia's DUI statute has BAC-enhanced mandatory jail minimums: BAC of 0.15% to 0.19% triggers a mandatory 5 consecutive days in jail on a first offense; BAC of 0.20% or higher triggers a mandatory 10 consecutive days in jail. These mandatory minimums are distinct from the $250 minimum fine and 1-year license suspension that apply to all first offenses. This tiered BAC-to-jail structure is one of Virginia's most distinctive DUI penalty features.",
    },
    {
      question: "Virginia's Aggressive Driving statute (§ 46.2-868.1) creates a Class 2 misdemeanor when a driver:",
      options: [
        "Exceeds the speed limit by more than 20 mph once",
        "Commits two or more listed traffic violations in a manner that endangers another person",
        "Passes another vehicle on a solid double yellow line",
        "Drives with a suspended license while in a school zone",
      ],
      correctIndex: 1,
      explanation:
        "§ 46.2-868.1 defines Aggressive Driving as committing two or more listed violations — which include speeding, following too closely, improper passing, failure to yield, improper lane change, and running red or stop signs — in a manner that endangers another person or with intent to harass, intimidate, or obstruct. It is a Class 2 misdemeanor. Unlike most traffic offenses, Aggressive Driving is a combination offense: no single listed act triggers it, but two acts together in a dangerous manner do.",
    },
    {
      question: "Virginia's provisional driver's license restricts nighttime driving between:",
      options: ["10 PM and 5 AM", "11 PM and 5 AM", "Midnight and 4 AM", "Midnight and 6 AM"],
      correctIndex: 2,
      explanation:
        "Virginia provisional license holders under 18 may not drive between midnight and 4 AM for the first 12 months unless accompanied by a licensed parent, guardian, or employer — or traveling to or from work, or in a documented emergency. The midnight-to-4 AM window represents a high crash-risk period for teen drivers. The passenger restriction — no more than 1 passenger under 21 who is not a sibling — also applies during this 12-month provisional period.",
    },
    {
      question: "How many supervised driving hours must a Virginia learner's permit holder log before applying for a road skills test?",
      options: ["30 hours (10 at night)", "40 hours (10 at night)", "45 hours (15 at night)", "60 hours (10 at night)"],
      correctIndex: 2,
      explanation:
        "Virginia requires learner's permit holders to complete at least 45 hours of supervised driving — including a minimum of 15 hours at night — before taking the road skills test for a provisional license. The parent or guardian must sign a certification form confirming these hours when the teen applies for the skills test. No Virginia DMV office will accept a skills test application without this signed certification.",
    },
    {
      question: "Virginia law requires drivers involved in a funeral procession escorted by law enforcement to:",
      options: [
        "Obey all traffic signals normally — processions have no special rights",
        "Stop at red lights but may proceed through stop signs",
        "Proceed through controlled intersections lawfully — exempted from stop signs and red lights when escorted",
        "Use hazard flashers and yield at every intersection",
      ],
      correctIndex: 2,
      explanation:
        "Virginia specifically exempts funeral processions escorted by law enforcement with activated lights and sirens from red lights and stop signs. All vehicles in a properly escorted funeral procession may legally proceed through controlled intersections without stopping as a group. Other drivers must yield to the procession. This Virginia-specific right-of-way rule is tested on the knowledge exam because it differs from normal intersection rules.",
    },
    {
      question: "On Virginia's I-66 HOV lanes, what is the minimum vehicle occupancy typically required during peak hours, and what is the fine for a violation?",
      options: [
        "HOV-2 (2 or more people); $50 fine",
        "HOV-2 (2 or more people) or HOV-3 depending on corridor and time; $125+ fine",
        "HOV-3 (3 or more people) on all Virginia HOV roads; $250 fine",
        "HOV lanes have no fines — only exit ramps are required",
      ],
      correctIndex: 1,
      explanation:
        "Virginia's HOV lane requirements vary by corridor and time of day. I-66 inside the Beltway requires HOV-3 (3 or more occupants) during peak hours, while I-95 and I-395 typically require HOV-2 during peak periods. Fines for HOV violations start at $125 and increase for repeat offenses. Virginia's knowledge test specifically covers HOV requirements because the rules differ across corridors and are strictly enforced by Virginia State Police.",
    },
  ],
  faqs: [
    {
      question: "Why does Virginia's reckless driving law catch so many out-of-state drivers off guard?",
      answer:
        "Virginia Code § 46.2-862 makes driving at 80 mph or above automatically reckless driving — a Class 1 misdemeanor — regardless of the posted speed limit. On Virginia's 70 mph Interstates, that means driving just 10 mph over the limit is a criminal offense punishable by up to 12 months in jail, a $2,500 fine, and 6 demerit points. Drivers from states where 80 mph is a normal freeway speed (some western states post 80 mph limits) are often charged without knowing the Virginia rule. It is one of the most aggressive speed-related criminal statutes in the eastern U.S.",
    },
    {
      question: "Are radar detectors legal in Virginia?",
      answer:
        "No. Virginia Code § 46.2-1079 prohibits possessing a radar detector in any vehicle operating on Virginia roads. This applies to all drivers — residents and out-of-state visitors alike. Virginia and Washington D.C. are the only jurisdictions in the United States where radar detectors are banned in all vehicles. A detector found during a traffic stop will be confiscated and the driver will receive a traffic infraction. The ban has been in effect in Virginia since 1973.",
    },
    {
      question: "How is Virginia's two-section knowledge test structured, and can I retake just one section if I fail?",
      answer:
        "Virginia's knowledge test has two sections taken back-to-back: 10 road sign questions (must score 8/10 — 80%) and 25 road rules questions (must score 20/25 — 80%). Both sections must be passed in the same visit. If you fail one section, you must retake the entire test — you cannot carry over a passing score on one section. Virginia DMV allows retesting, but a waiting period and additional fee may apply after multiple failures.",
    },
    {
      question: "What makes Virginia's DUI BAC penalties different from most states?",
      answer:
        "Virginia layered mandatory jail minimums onto its DUI statute based on BAC level. All first-offense DUI convictions carry mandatory VASAP enrollment, a $250 minimum fine, and a 1-year license suspension. If BAC was 0.15% or higher, there is an additional mandatory 5 consecutive days in jail. If BAC was 0.20% or higher, the mandatory jail minimum increases to 10 consecutive days. These BAC-triggered mandatory jail requirements are more specific and aggressive than most states, which reserve mandatory jail for repeat offenders rather than attaching it to BAC levels.",
    },
    {
      question: "What is Virginia's permit age and how long must teens hold it before getting a provisional license?",
      answer:
        "Virginia residents can apply for a learner's permit at 15 years and 6 months old (15½). This specific half-year threshold distinguishes Virginia from states that use 15 or 16 as the permit age. The permit must be held for a minimum of 9 months. During that time, the teen must log at least 45 supervised driving hours — including 15 at night — with a licensed adult 21 or older in the front passenger seat. A parent or guardian must sign a certification confirming these hours when the teen applies for the road skills test.",
    },
    {
      question: "What is Virginia's Aggressive Driving statute and what makes it different from reckless driving?",
      answer:
        "Virginia Code § 46.2-868.1 defines Aggressive Driving as committing two or more of a list of violations — speeding, following too closely, improper passing, failure to yield, improper lane change, or running red or stop signs — in a manner that endangers another person or with intent to harass, intimidate, or obstruct. It is a Class 2 misdemeanor. Reckless driving (§ 46.2-852 or § 46.2-862) can be a single act (like driving 80+ mph); Aggressive Driving requires a combination of violations in an endangering manner. Both are criminal offenses in Virginia.",
    },
    {
      question: "How long is a Virginia learner's permit valid?",
      answer:
        "A Virginia instruction (learner's) permit is valid for 2 years from the date of issue or until the holder turns 19, whichever is earlier. Most teens complete the required 9-month holding period and 45 hours of supervised driving within that window and advance to a provisional license before the permit expires. If the permit does expire before advancement, the teen must reapply by retaking and passing the knowledge test.",
    },
    {
      question: "What do Virginia's HOV lanes require, and why are they on the knowledge test?",
      answer:
        "Virginia has one of the most extensive HOV (High Occupancy Vehicle) lane networks in the eastern U.S., including major corridors on I-95, I-66, I-395, and I-64. Occupancy requirements vary: I-66 inside the Capital Beltway requires HOV-3 (three or more people) during peak hours; I-95 and I-395 typically require HOV-2 (two or more). The rules also change by time of day. Violations carry fines starting at $125. The knowledge test includes HOV questions because many Virginia drivers — particularly those near Northern Virginia and Hampton Roads — must understand these rules daily.",
    },
    {
      question: "What nighttime and passenger restrictions apply to a Virginia provisional license holder?",
      answer:
        "For 12 months after a Virginia provisional license is issued (or until age 18), holders may not: (1) drive between midnight and 4 AM without a licensed parent, guardian, or employer; (2) transport more than one passenger under age 21 who is not the driver's sibling, unless a licensed parent or guardian is present. These restrictions reflect Virginia crash data showing that late-night driving with multiple teenage passengers significantly elevates crash risk for new drivers.",
    },
    {
      question: "Can I take my Virginia DMV knowledge test online or must I go to a customer service center?",
      answer:
        "Virginia DMV offers online appointment scheduling at dmv.virginia.gov/appointment for in-person testing at Customer Service Centers. Some Virginia DMV offices also offer a remote knowledge testing option at qualifying locations. Walk-in testing is available at many locations but wait times can be long, especially at Northern Virginia, Hampton Roads, and Richmond-area centers. Extended evening and Saturday hours are available at some offices — check dmv.virginia.gov for current hours.",
    },
  ],
  relatedTests: [
    { label: "VA Motorcycle Test", href: "/virginia-motorcycle-practice-test" },
    { label: "VA CDL Test", href: "/virginia-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function VirginiaDMVPage() {
  return <PracticeTestPage {...data} />;
}
