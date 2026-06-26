import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Texas DMV Practice Test 2025 – Free TX Driver's License Exam Prep",
  description:
    "Free Texas DPS practice test based on the official Texas Driver Handbook. 30 questions, detailed explanations, and real test format. Pass your TX knowledge test the first time.",
  alternates: { canonical: "https://caredmvprep.com/texas-dmv-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/texas-dmv-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Texas",
  stateAbbr: "TX",
  testLabel: "Permit Practice Test",
  slug: "texas-dmv-practice-test",
  headline: "Texas DPS Driver's License Practice Test",
  intro:
    "Prepare for your Texas Department of Public Safety (DPS) knowledge test with free practice questions built around Texas-specific laws — including the 85 mph speed limit on SH 130 (highest in the nation), the zero-alcohol rule for under-21 DWI, the open-container law that applies to passengers, and why you must go to DPS (not TxDMV) for a driver's license. Texas's 30-question test at 70% is one of the most forgiving pass thresholds nationally — but Texas law has enough unique rules to catch unprepared applicants.",
  numToPass: "21 correct (70%)",
  basedOn: "Texas Driver Handbook (2025)",
  about: [
    "Texas driver's licenses are issued by the Texas Department of Public Safety (DPS), Driver License Division — not TxDMV. Texas has TWO separate state agencies with similar names: the Texas Department of Motor Vehicles (TxDMV) handles vehicle title and registration; the Texas Department of Public Safety (DPS) issues driver's licenses. Many Texans go to the wrong agency. If you need a driver's license, you go to a DPS driver's license office. The DPS knowledge test is 30 questions, passing at 70% — meaning you can miss up to 9 questions. Texas's 70% threshold is among the lowest nationally; most other large states require 75%–83%.",
    "Texas DWI under Transportation Code § 49.04 uses the term 'DWI' (Driving While Intoxicated), not DUI. Texas DWI covers impairment by alcohol, controlled substances, or any other substance that impairs driving. For adults 21 and older, the BAC limit is 0.08%. For drivers under 21, Texas has a true zero-tolerance policy: any detectable amount of alcohol is a violation under the Minor Alcohol offense framework — Texas does not use a 0.02% threshold like most states. Texas Intoxication Assault (§ 49.07) and Intoxication Manslaughter (§ 49.08) are second-degree felonies — placing Texas among the states with the most serious vehicular offense classifications. Texas also has the highest posted speed limit in the United States: 85 mph on State Highway 130 (the toll road east of Austin). Multiple Texas rural interstates post 75–80 mph limits.",
    "Texas's open-container law (Transportation Code § 49.031) prohibits any person — including passengers — from possessing an open container of alcohol in the passenger area of a motor vehicle on a public highway, whether the vehicle is moving or parked. Exceptions apply to passengers (not drivers) in hired limousines, chartered buses, and the living quarters of motorhomes. Texas's open-container law specifically applies even while the vehicle is stopped — a common misconception is that passengers may drink while parked. Texas's texting-while-driving ban (HB 62, effective September 1, 2017, Transportation Code § 545.4251) prohibits all electronic messaging while driving statewide, but Texas does NOT have a full handheld ban for adults — holding a phone for a call remains legal on Texas open roads. Texas's provisional license program restricts drivers under 18 from driving between midnight and 5 AM and from carrying more than one non-family passenger under 21 during the first six months.",
  ],
  keyRules: [
    { icon: "🚄", rule: "85 mph on SH 130 — highest posted limit in the U.S.", detail: "Texas State Highway 130 (east of Austin) has an 85 mph posted speed limit — the highest in the United States. Multiple other Texas rural interstates post 75–80 mph. The specific 85 mph limit on SH 130 is a tested Texas fact." },
    { icon: "🍺", rule: "DWI: 0.08% adult; zero detectable alcohol under 21", detail: "Texas DWI (TTC § 49.04) has a 0.08% BAC adult limit. Under-21 drivers face a true zero-tolerance policy — any detectable alcohol is a violation, not a 0.02% threshold as in most states." },
    { icon: "🍾", rule: "Open container: applies to ALL occupants, including passengers", detail: "TTC § 49.031 prohibits any person — driver or passenger — from possessing an open alcohol container in the passenger area of a vehicle on a public highway, even while stopped or parked. Exceptions for limousine/motorhome passengers only." },
    { icon: "📱", rule: "Texting banned statewide; handheld calls legal for adults", detail: "HB 62 (TTC § 545.4251) bans electronic messaging while driving statewide. However, Texas has no full handheld ban for adults — holding a phone for a call is legal on Texas open roads outside of local city ordinances." },
    { icon: "🏢", rule: "DPS licenses drivers; TxDMV handles titles and registration", detail: "Texas has two separate agencies: DPS (driver's licenses) and TxDMV (vehicle titles and registration). Going to TxDMV for a driver's license is a common and costly mistake — always go to a DPS driver's license office." },
    { icon: "🔄", rule: "Right-side passing: only when ahead vehicle is turning left", detail: "TTC § 545.057 permits passing on the right only when the vehicle ahead is turning left or when traffic moves in designated lanes. Passing on the right shoulder or off the main roadway is expressly prohibited." },
    { icon: "📡", rule: "Signal 100 ft in city / 200 ft on highway before turning", detail: "Texas requires signaling at least 100 feet before a turn in a city or town, and at least 200 feet before a turn on a highway outside city limits. The two-distance rule is Texas-specific and tested." },
    { icon: "🎓", rule: "Provisional: midnight–5 AM curfew, 1 non-family passenger (6 months)", detail: "Texas provisional license holders under 18 may not drive midnight–5 AM and may carry no more than one non-family passenger under 21 for the first 6 months. DPS provisional license converts to standard Class C at 18." },
  ],
  sampleQuestions: [
    {
      question: "A Texas resident needs a driver's license. Which agency issues it — the Texas Department of Motor Vehicles (TxDMV) or the Texas Department of Public Safety (DPS)?",
      options: [
        "TxDMV — Texas Department of Motor Vehicles",
        "DPS — Texas Department of Public Safety, Driver License Division",
        "Either agency — they both issue driver's licenses in Texas",
        "The Texas Secretary of State's office",
      ],
      correctIndex: 1,
      explanation:
        "Texas has two separate agencies with similar names. The Texas Department of Public Safety (DPS), Driver License Division issues all driver's licenses. The Texas Department of Motor Vehicles (TxDMV) handles vehicle title and registration. Many Texans make the costly mistake of going to TxDMV for a driver's license — only to be turned away and directed to a DPS driver's license office. Always go to a DPS office for driver's license services.",
    },
    {
      question: "What is the highest posted speed limit in the United States, and where is it located in Texas?",
      options: [
        "80 mph on I-10 in West Texas",
        "80 mph on I-20 near Odessa",
        "85 mph on State Highway 130, the toll road east of Austin",
        "75 mph on US-290 in the Texas Hill Country",
      ],
      correctIndex: 2,
      explanation:
        "State Highway 130 — a toll road that runs east of Austin through Caldwell and Williamson counties — has an 85 mph posted speed limit, the highest in the United States. Other Texas rural interstates (I-10 in West Texas, sections of I-20 and I-27) post 75–80 mph. The 85 mph SH 130 limit is a tested Texas fact on the DPS knowledge exam.",
    },
    {
      question: "Under Texas's DWI zero-tolerance policy for drivers under 21, what BAC level constitutes a violation?",
      options: [
        "0.02% — the same threshold used in most states",
        "0.04%",
        "0.08% — the same as the adult limit",
        "Any detectable amount of alcohol — Texas's under-21 DWI threshold is effectively zero",
      ],
      correctIndex: 3,
      explanation:
        "Texas has a true zero-tolerance policy for drivers under 21: any detectable amount of alcohol is a violation under the Minor Alcohol offense framework within Texas traffic law. Texas does not use a 0.02% threshold like many other states — if any alcohol is detected in the system of a driver under 21, they face an under-21 DWI charge. The adult limit remains 0.08% BAC under TTC § 49.04.",
    },
    {
      question: "Texas's open-container law (TTC § 49.031) prohibits possessing an open container of alcohol in the passenger area. Does this apply to passengers as well as the driver?",
      options: [
        "No — only the driver is prohibited; passengers may have open containers",
        "Yes — all occupants including passengers are prohibited from possessing open containers in the passenger area of a vehicle on a public highway",
        "Only front-seat occupants are covered; rear passengers may have open containers",
        "The law only applies while the vehicle is moving, not while parked",
      ],
      correctIndex: 1,
      explanation:
        "Texas Transportation Code § 49.031 prohibits ANY person — including passengers in the back seat — from possessing an open container of alcohol in the passenger area of a motor vehicle on a public highway, whether moving or stopped. Exceptions apply only to passengers (not drivers) in hired limousines, chartered buses, and the living quarters of motorhomes. The common misconception that passengers may drink in a moving vehicle or that parked cars are exempt is incorrect under Texas law.",
    },
    {
      question: "Texas's HB 62 (effective September 1, 2017) bans electronic messaging while driving statewide. Can a Texas adult driver legally hold a phone to their ear for a call on an open road?",
      options: [
        "No — HB 62 bans all handheld device use statewide",
        "Yes — HB 62 only bans electronic messaging (texting). Handheld calls remain legal for adults on Texas open roads",
        "Only in rural areas — handheld calls are banned in cities",
        "Only if the call is under 2 minutes",
      ],
      correctIndex: 1,
      explanation:
        "Texas HB 62 (TTC § 545.4251), effective September 1, 2017, bans reading, writing, or sending electronic messages while driving statewide. However, Texas does NOT have a full statewide handheld ban for adults — holding a phone to your ear for a voice call is legal on Texas open roads. Some Texas cities (Austin, San Antonio) have local ordinances imposing broader handheld restrictions. The messaging-only ban (not a full handheld ban) is a Texas-specific rule that is tested on the DPS exam.",
    },
    {
      question: "Texas's right-side passing rule under TTC § 545.057 permits passing on the right only in which specific circumstance?",
      options: [
        "Whenever the driver ahead is traveling slower than the posted speed limit",
        "Only when the vehicle ahead is turning left, or when lanes are designated for separate traffic flows",
        "Whenever the right lane is empty and it can be done safely",
        "Passing on the right is never permitted in Texas",
      ],
      correctIndex: 1,
      explanation:
        "Texas Transportation Code § 545.057 permits passing on the right in two specific situations: (1) when the vehicle being overtaken is making or about to make a left turn, and (2) when traffic moves in designated lanes that allow right-side passing. Critically, Texas expressly prohibits passing on the right shoulder or driving off the main roadway to pass on the right. This is more restrictive than some states that more broadly permit right-side passing.",
    },
    {
      question: "Before turning in Texas, how far in advance must you signal — and does the distance change depending on where you are?",
      options: [
        "100 feet before any turn, regardless of location",
        "200 feet before any turn, regardless of location",
        "100 feet before a turn in a city or town; 200 feet before a turn on a highway outside city limits",
        "50 feet for all turns — the same rule applies everywhere in Texas",
      ],
      correctIndex: 2,
      explanation:
        "Texas law requires signaling at least 100 feet before making a turn in a city or town. On a highway outside the limits of a city or town, the requirement increases to at least 200 feet before a turn. This two-distance signaling rule — 100 feet urban, 200 feet highway — is Texas-specific and a common knowledge test question. Early signaling gives cyclists, pedestrians, and other drivers more time to react at higher speeds.",
    },
    {
      question: "Under Texas DWI law, what are Intoxication Assault (§ 49.07) and Intoxication Manslaughter (§ 49.08) classified as?",
      options: [
        "Class A misdemeanors",
        "Third-degree felonies",
        "Second-degree felonies",
        "First-degree felonies",
      ],
      correctIndex: 2,
      explanation:
        "Texas Transportation Code § 49.07 (Intoxication Assault) and § 49.08 (Intoxication Manslaughter) are both second-degree felonies in Texas — placing Texas among the states with the most serious vehicular offense classifications. A standard first-offense DWI (§ 49.04) is a Class B misdemeanor. Intoxication Assault applies when a DWI crash causes serious bodily injury; Intoxication Manslaughter applies when someone dies. A second-degree felony in Texas carries 2–20 years in state prison.",
    },
    {
      question: "Texas provisional license holders under 18 may not drive between what hours during the first six months?",
      options: [
        "10 PM and 5 AM",
        "11 PM and 5 AM",
        "Midnight and 5 AM",
        "Midnight and 6 AM",
      ],
      correctIndex: 2,
      explanation:
        "Texas provisional license holders under 18 may not drive between midnight and 5 AM during the first six months of their provisional license unless accompanied by a licensed adult 21 or older. This nighttime driving restriction runs concurrently with the first-six-months passenger restriction (no more than one non-family passenger under 21). After six months of violation-free driving, both restrictions are lifted. The provisional license converts to a standard Class C at age 18.",
    },
    {
      question: "Texas requires supervised driving for drivers under 18 in the Parent-Taught Driver Education (PTDE) program. How many total hours of supervised driving are required, and how many must be at night?",
      options: [
        "20 hours total, no nighttime requirement",
        "30 hours total, at least 10 at night",
        "50 hours total, at least 10 at night",
        "65 hours total, at least 15 at night",
      ],
      correctIndex: 1,
      explanation:
        "Texas drivers under 18 in the Parent-Taught Driver Education (PTDE) program must complete 30 hours of supervised driving practice, including at least 10 hours at night. Classroom-based programs have similar supervised driving requirements. These 30 hours must be logged with a licensed supervising driver before the teen can take the DPS road skills test for a provisional license. Adults 18 and older have no supervised driving requirement.",
    },
  ],
  faqs: [
    {
      question: "Why do I need to go to DPS for my driver's license — isn't there a Texas DMV?",
      answer:
        "Yes, there is a Texas Department of Motor Vehicles (TxDMV), but it handles vehicle title and registration — not driver's licenses. All Texas driver's licenses are issued by the Texas Department of Public Safety (DPS), Driver License Division. Many Texans waste a trip by going to TxDMV for a driver's license. If you need a driver's license, new ID, or learner's permit, you must visit a DPS driver's license office. Visit dps.texas.gov to find the nearest location.",
    },
    {
      question: "What makes Texas's speed limit law unique, and what is SH 130?",
      answer:
        "Texas has the highest posted speed limit in the United States — 85 mph on State Highway 130, a toll road running east of Austin through Caldwell and Williamson counties. Multiple other Texas rural interstates (I-10 in West Texas, sections of I-20) post 75–80 mph limits. Texas's high speed limit reflects the state's vast distances and rural highway design. The 85 mph SH 130 limit is a tested fact on the DPS knowledge exam because it distinguishes Texas from every other state.",
    },
    {
      question: "How does Texas's under-21 DWI zero-tolerance policy differ from most other states?",
      answer:
        "Most states set an under-21 BAC threshold at 0.02% — any reading at or above 0.02% is a violation. Texas's zero-tolerance policy has no such minimum threshold: any detectable amount of alcohol is a violation for drivers under 21, regardless of the specific BAC reading. A driver under 21 with even a trace of alcohol in their system can be charged under Texas's Minor Alcohol offense framework, which is stricter than the 0.02% approach used by most neighboring states.",
    },
    {
      question: "Does Texas's open-container law apply to passengers in the back seat?",
      answer:
        "Yes. Texas Transportation Code § 49.031 prohibits any person — including passengers seated in the back seat — from possessing an open container of alcohol in the passenger area of a motor vehicle on a public highway, whether the vehicle is moving or parked. Exceptions apply only to passengers (not drivers) in hired limousines, chartered buses, and the living quarters of motorhomes. The most common misconception is that 'passengers can drink' — under Texas law, they cannot in most vehicles.",
    },
    {
      question: "What is the difference between Texas DWI and DUI?",
      answer:
        "Texas uses 'DWI' (Driving While Intoxicated) as the primary impaired driving charge under Transportation Code § 49.04 for adults. 'DUI' in Texas is sometimes informally used but it is technically a separate, lesser charge used specifically for drivers under 21 with any detectable alcohol (the Minor Alcohol offense). For all adult impaired driving — whether by alcohol or drugs — the charge is DWI, not DUI. Commercial drivers face a 0.04% DWI limit.",
    },
    {
      question: "Can Texas adults legally hold a phone for a call while driving?",
      answer:
        "Yes — on Texas open roads, adult drivers may legally hold a phone to their ear for a voice call. Texas HB 62 (TTC § 545.4251), effective September 1, 2017, bans only electronic messaging (texting, emailing, social media posting) while driving statewide. Texas does not have a full statewide handheld phone ban for adult drivers. However, some Texas cities — including Austin and San Antonio — have local ordinances that go further and prohibit all handheld use. Always check local rules in Texas cities.",
    },
    {
      question: "How many questions are on the Texas DPS knowledge test and what is the passing score?",
      answer:
        "The Texas DPS driver's license knowledge test has 30 questions. You must answer at least 21 correctly — a 70% passing score — to pass. This 70% threshold is among the lowest for any major state (most require 75%–83%), meaning up to 9 wrong answers are permitted. Despite the lower threshold, Texas-specific laws (SH 130 speed, zero-tolerance under-21 DWI, open container rules) can catch unprepared applicants.",
    },
    {
      question: "Does Texas require driver education for new teen drivers?",
      answer:
        "Yes. Texas drivers under 18 must complete a state-approved driver education course before applying for a learner's permit. Options include classroom-based programs and Parent-Taught Driver Education (PTDE). The PTDE program requires 32 hours of classroom instruction and 30 hours of supervised behind-the-wheel practice (10 at night). Adults 18 and older are not required to complete driver education but must pass both the knowledge and road skills tests at DPS.",
    },
    {
      question: "What is Texas's signaling requirement before a turn?",
      answer:
        "Texas requires two different signal distances depending on location: at least 100 feet before a turn in a city or town, and at least 200 feet before a turn on a highway outside city limits. This two-distance rule is Texas-specific — many other states use a single distance for all roads. Early signaling is especially important at the higher speeds common on Texas highways.",
    },
    {
      question: "What is a Texas Provisional License and what restrictions apply?",
      answer:
        "Texas issues a Provisional License to drivers ages 16–17 who have passed the DPS knowledge and road skills tests. For the first 6 months: no driving between midnight and 5 AM; no more than one passenger under 21 who is not an immediate family member. After 6 months of violation-free driving, both restrictions lift. The provisional license automatically converts to a standard Class C license at age 18. Violations of provisional restrictions extend the restriction period.",
    },
  ],
  relatedTests: [
    { label: "TX Motorcycle Test", href: "/texas-motorcycle-practice-test" },
    { label: "TX CDL Test", href: "/texas-cdl-practice-test" },
    { label: "CA Permit Test", href: "/california-dmv-practice-test" },
    { label: "FL Permit Test", href: "/florida-dmv-practice-test" },
    { label: "NY Permit Test", href: "/new-york-dmv-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function TexasDMVPage() {
  return <PracticeTestPage {...data} />;
}
