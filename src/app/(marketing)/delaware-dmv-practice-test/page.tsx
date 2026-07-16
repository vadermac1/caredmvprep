import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Delaware DMV Practice Test 2025 – Free DE Driver's License Exam Prep",
  description:
    "Free Delaware DMV practice test. Covers DUI law (0.08% adult, 0.02% under-21, aggravated at 0.15%/0.20%), GDL permit at 16, 50 supervised hours, 10 pm curfew, seat belt primary enforcement, cell phone ban, and speed limits. Based on 21 Del. C.",
  alternates: { canonical: "https://caredmvprep.com/delaware-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/delaware-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Delaware",
  stateAbbr: "DE",
  testLabel: "DMV Practice Test",
  slug: "delaware-dmv-practice-test",
  headline: "Delaware DMV Practice Test 2025",
  intro:
    "The Delaware Division of Motor Vehicles administers the driver knowledge test for all license applicants. This free practice test is based on verified Delaware Code Title 21 statutes, covering DUI law, graduated driver licensing (GDL), speed limits, seat belt and cell phone law, headlight requirements, and right-of-way rules. Study these Delaware-specific laws to prepare for the real exam.",
  basedOn: "Delaware Code Title 21 / Delaware DMV Driver's Manual",
  keyRules: [
    {
      icon: "🍺",
      rule: "DUI — Adult 0.08%; Under-21 0.02%; Aggravated at 0.15% and 0.20%",
      detail: "Delaware § 4177 sets 0.08% BAC as the adult DUI threshold. Section 4177L sets 0.02% for drivers under 21. Section 4177 also establishes two aggravated DUI tiers — 0.15% and 0.20% — each triggering enhanced mandatory sentencing. A third DUI offense is a Class G felony.",
    },
    {
      icon: "🚫",
      rule: "Implied Consent — Refusal Penalties Escalate Sharply",
      detail: "By driving in Delaware you consent to chemical testing. Refusing triggers license revocation: 1st refusal = 1 year; 2nd refusal = 18 months; 3rd or subsequent = 24 months. Delaware's 24-month maximum is among the longest in the Mid-Atlantic region (§ 2742).",
    },
    {
      icon: "📋",
      rule: "GDL Permit at 16 — 12-Month Hold, 50 Hours (10 at Night)",
      detail: "Delaware § 2710 sets the permit age at 16. The permit must be held for 12 months before applying for a Class D license. Permit holders must complete 50 supervised driving hours (10 nighttime). Supervisor must be 25+ years old with a Class D license for 5+ years, seated in the front passenger seat.",
    },
    {
      icon: "🌙",
      rule: "GDL Curfew: 10 PM to 6 AM",
      detail: "After the first 6 months, permit holders may drive unsupervised from 6 AM to 10 PM. From 10 PM to 6 AM, an adult supervisor is required. Exceptions exist for work, school, and church activities (§ 2710(c)(4)).",
    },
    {
      icon: "👥",
      rule: "Passenger Restriction: Max 1 Non-Family During First 12 Months",
      detail: "During the first 12 months of holding a Delaware Level 1 permit, permit holders may carry at most 1 non-family passenger in addition to the supervising adult. Immediate family members are exempt from this limit (§ 2710(c)(5)).",
    },
    {
      icon: "🪑",
      rule: "Seat Belt: PRIMARY Enforcement — $25 Penalty",
      detail: "Delaware § 4802 is a PRIMARY enforcement seat belt law — police may stop a vehicle solely because an occupant is not buckled. The civil penalty is $25. No points are assessed. The driver and all passengers 16 or older must wear a properly adjusted seat belt.",
    },
    {
      icon: "📱",
      rule: "Cell Phone: Handheld Ban — $100 First, $200–$300 Subsequent",
      detail: "Delaware § 4176C prohibits holding a wireless device while driving. First offense: $100 civil penalty. Subsequent offenses: $200–$300. Hands-free devices are permitted. Emergency calls to 911 are exempt. No points are assessed, but fines stack quickly for repeat violations.",
    },
    {
      icon: "🚗",
      rule: "Speed Limits: 25 Residential / 50 Rural 2-Lane / 55 Divided / 65 Route 1",
      detail: "Delaware § 4169 establishes: 25 mph in residential and business areas; 20 mph in school zones (where posted); 50 mph on rural 2-lane roads; 55 mph on four-lane divided highways; 65 mph on Route 1 between Red Lion Creek and the Appoquinimink River. High-beam dim: 500 ft for oncoming, 200 ft when following (§ 4350).",
    },
  ],
  about: [
    "Delaware's graduated driver licensing (GDL) program is among the most structured in the small-state region. Applicants must be at least 16 years old to obtain a Level 1 Learner's Permit under § 2710, complete an approved driver education course at a Delaware public or private high school, log 50 supervised driving hours (10 at night), and hold the permit for a full 12 months before applying for a Class D license. The supervising driver must be at least 25 years old and have held a Class D license for 5 or more years — a requirement that is higher than most neighboring states. During the first 6 months, all driving must be supervised. After 6 months, unsupervised driving is permitted from 6 AM to 10 PM. A 10 PM to 6 AM curfew (with exceptions for work, school, and church) applies throughout the permit period. Non-family passenger limits also apply: only 1 non-family passenger is permitted in addition to the required supervisor during the first 12 months.",
    "Delaware's DUI law (§ 4177) covers all motor vehicle operators, including motorcycle riders. The adult threshold is 0.08% BAC. Drivers under 21 face a 0.02% limit under § 4177L. Commercial vehicle drivers face 0.04% under § 4177M. Delaware's aggravated DUI tiers trigger at 0.15% and 0.20% BAC — each tier carrying mandatory enhanced sentencing. A third DUI offense is classified as a Class G felony, punishable by up to $5,000 and 1–2 years imprisonment with a mandatory minimum. Delaware's implied consent law (§ 2742) imposes escalating license revocations for refusal to submit to a chemical test: 1 year for a first refusal, 18 months for a second, and 24 months for a third or subsequent refusal. The officer must issue a 15-day temporary permit at the scene, giving the driver time to request a hearing.",
    "Delaware speed limits and lighting laws have several distinctive features worth studying. On two-lane rural roads, the default limit is 50 mph (§ 4169(a)(4)) — lower than most states' rural default. Four-lane divided highways default to 55 mph. Route 1 between Red Lion Creek and the Appoquinimink River carries a 65 mph limit — the only statutory exception above 55 mph. School zones require 20 mph where posted. Delaware's headlight law (§ 4331) requires lights from sunset to sunrise, in fog/rain/smoke, when windshield wipers are in use due to weather, and when visibility ahead is under 1,000 feet. Delaware's high-beam dimming rule (§ 4350) is distinctive: dim for oncoming vehicles within 500 feet AND for vehicles you are following within 200 feet — most states use 300 feet for the following-vehicle rule.",
  ],
  sampleQuestions: [
    {
      question: "At what BAC level does Delaware impose aggravated (enhanced) DUI penalties under § 4177?",
      options: [".10 or more", ".12 or more", ".15 or more", ".20 or more"],
      correctIndex: 2,
      explanation:
        "Section 4177 establishes .15 or more as the first aggravated threshold that triggers enhanced sentencing considerations, with a further tier at .20 or more. Once BAC reaches .15, courts must consider the elevated level as an aggravating factor at sentencing. Both tiers are tested because they appear frequently on Delaware DMV exams.",
    },
    {
      question: "How long is your license revoked for a first refusal to take a chemical test under Delaware's implied consent law (§ 4177 DUI)?",
      options: ["18 months", "6 months", "2 years", "1 year"],
      correctIndex: 3,
      explanation:
        "Delaware § 2742(b)(1) mandates a 1-year revocation for a first refusal to submit to a chemical test in a DUI (§ 4177) situation. The penalty escalates to 18 months for a second refusal and 24 months for a third or subsequent refusal. Refusing does not prevent prosecution — police may seek a warrant for a blood draw.",
    },
    {
      question: "During the first six months of holding a Delaware Level 1 permit, when may the permit holder drive without a supervisor?",
      options: ["On weekends and holidays only", "Never — supervised driving only during the first 6 months", "Between 6 AM and 8 PM", "Between 8 AM and 10 PM"],
      correctIndex: 1,
      explanation:
        "Section 2710(c)(3) restricts permit holders to supervised driving only for the first 6 months. No unsupervised driving is permitted during this initial phase — the supervisor requirement applies at all times, day or night, regardless of the destination.",
    },
    {
      question: "After the first 6 months of holding a Delaware Level 1 permit, during which hours may the permit holder drive without a supervisor?",
      options: ["7 AM–9 PM", "8 AM–midnight", "6 AM–10 PM", "5 AM–11 PM"],
      correctIndex: 2,
      explanation:
        "Section 2710(c)(4) allows unsupervised driving between 6:00 AM and 10:00 PM after the first 6 months. From 10 PM to 6 AM, a supervisor is still required except for church activities, work activities, or school-related events.",
    },
    {
      question: "Delaware's seat belt law (§ 4802) is classified as what type of enforcement?",
      options: ["Secondary — police must have another reason to stop you", "Advisory — tickets are issued only with a warning", "Primary — police may stop a vehicle solely for a seat belt violation", "Tertiary — only enforced at sobriety checkpoints"],
      correctIndex: 2,
      explanation:
        "Delaware § 4802 is a PRIMARY enforcement law — a police officer may stop a vehicle solely because an occupant is not wearing a properly adjusted seat belt. The civil penalty is $25 with no points assessed. Both the driver and all passengers 16 or older must be buckled.",
    },
    {
      question: "What is the first-offense civil penalty for using a handheld electronic device while driving under Delaware § 4176C?",
      options: ["$50", "$100", "$200", "$300"],
      correctIndex: 1,
      explanation:
        "Delaware § 4176C imposes a $100 civil penalty for a first handheld-device violation. Subsequent violations within 2 years carry penalties of $200–$300. No motor vehicle points are assessed — the penalty is financial only. The ban applies while the vehicle is in motion.",
    },
    {
      question: "What is the default speed limit on a Delaware two-lane rural roadway where no other limit is posted?",
      options: ["50 mph", "45 mph", "55 mph", "60 mph"],
      correctIndex: 0,
      explanation:
        "Section 4169(a)(4) establishes 50 mph on two-lane roadways. This is lower than the 55 mph that applies to divided or four-lane highways (§ 4169(a)(5)), reflecting the increased risk on narrower undivided rural roads.",
    },
    {
      question: "When following another vehicle in Delaware, at what following distance must you switch to low-beam headlights?",
      options: ["300 feet", "150 feet", "100 feet", "200 feet"],
      correctIndex: 3,
      explanation:
        "Section 4350 requires that when following another vehicle within 200 feet to the rear, drivers must use low beams. This 200-foot rule is distinctive — most states use 300 feet for the following-vehicle rule. High beams directed into another driver's mirrors create blinding glare.",
    },
    {
      question: "A third DUI offense in Delaware under § 4177 is classified as which type of crime?",
      options: ["An unclassified misdemeanor", "A Class A misdemeanor", "A Class G felony", "A Class E felony"],
      correctIndex: 2,
      explanation:
        "Section 4177 elevates a third DUI offense to a Class G felony, punishable by up to $5,000 in fines and 1–2 years imprisonment, with the first 3 months non-suspendable at Level V incarceration. Each subsequent offense carries even heavier felony classifications.",
    },
    {
      question: "How many total supervised driving hours must a Delaware Level 1 permit holder complete, and how many must be at night?",
      options: ["50 total, 10 nighttime", "25 total, 5 nighttime", "60 total, 15 nighttime", "40 total, 10 nighttime"],
      correctIndex: 0,
      explanation:
        "Delaware § 2710(c)(3) requires 50 hours of supervised driving time, including 10 hours of nighttime driving, certified by the parent or guardian. Nighttime driving presents unique challenges — reduced visibility and different traffic patterns — making the dedicated 10-hour nighttime requirement critically important.",
    },
  ],
  faqs: [
    {
      question: "What are the Delaware DUI BAC limits?",
      answer:
        "Delaware § 4177 sets the adult DUI threshold at 0.08% BAC. Drivers under 21 face a 0.02% limit under § 4177L. Commercial motor vehicle operators face 0.04% under § 4177M. Delaware has two aggravated DUI tiers: 0.15% BAC and 0.20% BAC, each triggering enhanced mandatory sentencing. A third DUI offense is a Class G felony under § 4177.",
    },
    {
      question: "What are Delaware's implied consent refusal penalties?",
      answer:
        "Under Delaware § 2742, refusing a chemical test triggers license revocation: 1st refusal = 1 year; 2nd refusal = 18 months; 3rd or subsequent = 24 months. The officer must issue a 15-day temporary driving permit at the scene. The driver has 15 days to request a hearing. Delaware's 24-month maximum refusal penalty is among the longest in the region.",
    },
    {
      question: "What are Delaware's GDL permit requirements?",
      answer:
        "Delaware § 2710 requires applicants to be at least 16 years old, complete a driver education course at a Delaware public or private high school, and pass a knowledge test. Permit holders must complete 50 supervised driving hours (10 at night) and hold the permit for 12 months before applying for a Class D license. The supervisor must be at least 25 years old and have held a Class D license for 5+ years.",
    },
    {
      question: "What is Delaware's GDL curfew?",
      answer:
        "After the first 6 months (during which all driving must be supervised), Delaware permit holders may drive unsupervised from 6 AM to 10 PM. From 10 PM to 6 AM, a supervisor is required. Exceptions exist for work, school, and church activities under § 2710(c)(4).",
    },
    {
      question: "Is Delaware's seat belt law primary or secondary enforcement?",
      answer:
        "Delaware § 4802 is PRIMARY enforcement — a police officer may stop a vehicle solely because an occupant is not wearing a seat belt. The civil penalty is $25 with no points assessed. Both the driver and all passengers 16 or older must wear a properly adjusted and fastened seat belt.",
    },
    {
      question: "What are Delaware's cell phone driving laws?",
      answer:
        "Delaware § 4176C prohibits holding a wireless electronic communication device while driving. First offense: $100 civil penalty. Subsequent offenses: $200–$300. Hands-free devices are permitted. Emergency calls to 911 are exempt. No points are assessed for violations.",
    },
    {
      question: "What are Delaware's speed limits?",
      answer:
        "Delaware § 4169 sets: 25 mph in residential and business areas; 20 mph in school zones (where signs are posted); 50 mph on rural two-lane roads; 55 mph on four-lane divided highways; 65 mph on Route 1 between Red Lion Creek and the Appoquinimink River. The school zone limit applies only where 20 mph signs are posted.",
    },
    {
      question: "What is distinctive about Delaware's high-beam dimming rule?",
      answer:
        "Delaware § 4350 requires dimming high beams within 500 feet of an oncoming vehicle (standard in most states) AND within 200 feet when following another vehicle. Most states use 300 feet for the following-vehicle rule — Delaware's 200-foot requirement is shorter, meaning you must dim sooner when behind another car than drivers in most other states.",
    },
    {
      question: "When must Delaware drivers use headlights during the day?",
      answer:
        "Delaware § 4331 requires headlights: from sunset to sunrise; in fog, smoke, or rain; when windshield wipers are in use due to weather conditions; and when visibility ahead is insufficient to see persons or vehicles at 1,000 feet. The wiper-triggered requirement and the 1,000-foot visibility trigger are both commonly tested on the exam.",
    },
    {
      question: "What passenger restrictions apply to Delaware GDL permit holders?",
      answer:
        "During the first 12 months of holding a Delaware Level 1 permit, permit holders may carry at most 1 non-family passenger in addition to the required adult supervisor. Immediate family members are exempt from this limit under § 2710(c)(5). Exceeding the passenger limit can result in permit suspension.",
    },
  ],
  relatedTests: [
    { label: "Delaware Motorcycle Practice Test", href: "/delaware-motorcycle-practice-test" },
    { label: "Delaware CDL Practice Test", href: "/delaware-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function DelawareDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
