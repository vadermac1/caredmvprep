import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Carolina Driver's License Practice Test 2025 – Free NC DMV Exam Prep",
  description:
    "Free North Carolina driver's license practice test based on the official NC Driver's Handbook. 25 questions, 80% passing score, detailed explanations. Pass your NC NCDMV test.",
  alternates: { canonical: "https://caredmvprep.com/north-carolina-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/north-carolina-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "North Carolina",
  stateAbbr: "NC",
  testLabel: "Driver's License Practice Test",
  slug: "north-carolina-dmv-practice-test",
  headline: "North Carolina Driver's License Practice Test — NC-Specific Laws That Will Be on Your Test",
  intro:
    "North Carolina's NCDMV knowledge test covers laws that are unique to this state — including James' Law (the only Move Over law in the country that covers all hazard-light vehicles), NC's six-level DWI sentencing grid, and a cell phone rule that lets adults use handheld devices for calls while banning teens from any phone use at all. This free practice test focuses on those distinctly NC laws so you walk in prepared for exactly what NCDMV asks.",
  numToPass: "20 correct (80%)",
  basedOn: "North Carolina Driver's Handbook (2025)",
  about: [
    "The NC Division of Motor Vehicles (NCDMV) — a division of the North Carolina Department of Transportation — administers the 25-question Class C knowledge test at driver's license offices across the state. You need 20 correct answers (80%) to pass. The test draws from both traffic sign recognition and road rules content in the NC Driver's Handbook. Walk-in testing is generally available at NCDMV offices; appointment scheduling is at ncdot.gov/dmv. One distinctly NC feature: the state uses the term DWI, not DUI, and its punishment system is a six-level sentencing grid (Level V through Aggravated Level I) based on grossly aggravating and mitigating factors — not the standard first/second/third tier structure most other states use.",
    "North Carolina's Graduated Driver Licensing program begins at age 15, when teens can apply for a Level 1 Limited Learner Permit after passing the knowledge test and a mandatory state-approved driver education course (minimum 30 hours classroom + 6 hours behind-the-wheel). Level 1 holders may drive only with a licensed supervising driver 21 or older in the front seat, cannot drive between 9 PM and 5 AM, and must hold the permit for at least 12 months while logging 60 supervised hours — 10 of which must be at night. At Level 2 (Limited Provisional License), drivers may operate without a supervisor but face a nighttime restriction of midnight to 5 AM for the first six months and may not drive with more than one passenger under age 21 (not just non-family — NC's passenger restriction is broader than most states).",
    "North Carolina's cell phone rules are deliberately asymmetric. NCGS § 20-137.4A bans texting while driving for all drivers, and prohibits any cell phone use at all — including hands-free calls — for drivers under 18. Adult drivers 21 and older, however, may use handheld devices for voice calls; NC has not enacted a statewide hands-free mandate for adults, distinguishing it from the growing majority of states that have banned all handheld use. NC also prohibits all drivers from wearing headphones or earbuds in both ears simultaneously — one ear must remain open. Additionally, under NCGS § 20-141.4, if a driver causes a death while committing any moving violation (not just DWI), they face Felony Death by Vehicle, a Class D felony — a broader predicate than most states' vehicular homicide statutes, which typically require intoxication or gross negligence.",
  ],
  keyRules: [
    { icon: "⚠️", rule: "James' Law — ALL hazard-light vehicles", detail: "NC's James' Law (SB 155, 2019) extends Move Over requirements to every vehicle displaying hazard flashers — tow trucks, disabled cars, rideshare vehicles — not just emergency vehicles. Drivers must move over or slow to 45 mph below the posted limit. Named after roadside worker James Markle, this is one of the broadest Move Over laws in the U.S." },
    { icon: "⚖️", rule: "DWI: six-level sentencing grid", detail: "NC uses DWI (not DUI) and punishes it on a unique six-level grid — Level V (least severe) through Aggravated Level I — based on grossly aggravating factors such as prior DWI convictions, child passenger, or BAC ≥ 0.15%. The grid is set by NCGS § 20-179 and is unlike any other state's tiered DWI system." },
    { icon: "🍺", rule: "BAC: 0.08% adults; 0.00% under 21", detail: "Adult DWI threshold is 0.08% BAC. Drivers under 21 face true zero tolerance under NCGS § 20-138.3 — any detectable alcohol at all, not 0.02% — triggers a 30-day civil license revocation." },
    { icon: "📱", rule: "Adults may call handheld; under-18 no phone at all", detail: "NCGS § 20-137.4A bans all cell phone use for drivers under 18 — including hands-free calls. Adult drivers may use handheld devices for voice calls but cannot text, email, or browse. NC has no statewide hands-free ban for adult drivers. No driver may wear headphones in both ears." },
    { icon: "🔒", rule: "Level 1 permit: 9 PM–5 AM curfew; 60 supervised hours", detail: "NC Level 1 permit holders may not drive between 9 PM and 5 AM. Must hold for 12 months and log 60 supervised hours (10 at night) before advancing to Level 2. Driver's education (30 hrs classroom + 6 hrs behind-the-wheel) is required before the permit is issued." },
    { icon: "⚡", rule: "Reckless by speed: 15+ mph over AND above 80 mph", detail: "NCGS § 20-141.5 creates an automatic misdemeanor when a driver is simultaneously 15+ mph over the limit AND exceeding 80 mph. Both conditions must be met — driving 81 mph in a 70 mph zone (11 over) is not automatic reckless, but 81 mph in a 65 mph zone (16 over) triggers it." },
    { icon: "💀", rule: "Felony Death by Vehicle — any moving violation", detail: "Under NCGS § 20-141.4, causing a death while committing any moving violation is Felony Death by Vehicle (Class D felony). DWI is not required — running a red light that causes a fatality qualifies. Most states require intoxication or gross negligence for vehicular homicide." },
    { icon: "🏍️", rule: "Universal motorcycle helmet law", detail: "North Carolina requires all motorcycle operators and passengers to wear a DOT-compliant helmet regardless of age, under G.S. 20-140.4 — one of the oldest universal helmet laws in the country. Eye protection is also required unless the motorcycle has a windshield." },
  ],
  sampleQuestions: [
    {
      question: "Under NC's James' Law (SB 155, 2019), which vehicles require other drivers to move over or slow down when stopped on the roadside?",
      options: [
        "Only law enforcement and fire department vehicles",
        "Emergency vehicles and tow trucks only",
        "Any vehicle displaying activated hazard flashers, including disabled private vehicles",
        "Vehicles with amber lights only — not red lights",
      ],
      correctIndex: 2,
      explanation:
        "James' Law extended North Carolina's Move Over requirement to ALL vehicles displaying hazard flashers — not just emergency or service vehicles. A broken-down car on the shoulder with hazards blinking triggers the same obligation as a police cruiser. Drivers must move over one lane on multi-lane roads, or slow to 45 mph below the posted speed limit if a lane change is unsafe. The law was named after James Markle, a roadside assistance worker killed when a passing vehicle did not move over.",
    },
    {
      question: "North Carolina's DWI sentencing system uses a six-level grid. What factor can elevate a conviction to Aggravated Level I — the most severe level?",
      options: [
        "BAC of exactly 0.08%",
        "A prior speeding ticket within two years",
        "A prior DWI conviction within seven years or a child passenger under 18 in the vehicle",
        "Driving after 9 PM with a restricted license",
      ],
      correctIndex: 2,
      explanation:
        "Under NCGS § 20-179, Aggravated Level I is triggered by three or more grossly aggravating factors, or specific severe factors such as having a prior DWI within seven years, transporting a child passenger under 18, causing serious injury to another person, or having a BAC of 0.15% or higher. This six-level grid — Level V through Aggravated Level I — is unique to North Carolina; most states use a simpler first/second/third offense model.",
    },
    {
      question: "Under NCGS § 20-138.3, what BAC level subjects a North Carolina driver under 21 to a civil license revocation?",
      options: ["0.02% or higher", "0.04% or higher", "0.08% or higher", "Any detectable alcohol — 0.00% tolerance"],
      correctIndex: 3,
      explanation:
        "North Carolina's zero-tolerance statute (NCGS § 20-138.3) prohibits drivers under 21 from driving with any alcohol in their system — not 0.02%, not 0.04%, but truly any detectable amount. A first offense results in a 30-day civil license revocation. This is stricter than many other states that use 0.02% as the underage threshold. If BAC reaches 0.08%, the driver also faces full adult DWI charges under NCGS § 20-138.1.",
    },
    {
      question: "A 17-year-old NC driver is on a Level 2 Limited Provisional License. How many passengers under age 21 may they carry during the first six months?",
      options: [
        "Unlimited — passenger restrictions apply only at Level 1",
        "No more than three non-family passengers",
        "No more than one passenger under 21",
        "No passengers at all without a parent present",
      ],
      correctIndex: 2,
      explanation:
        "During the first six months of a North Carolina Level 2 Limited Provisional License, the driver may not transport more than one passenger under 21 in the vehicle. Unlike some states that restrict only 'non-family' passengers, NC's restriction applies broadly and is not limited to non-relatives. After six months of violation-free driving, this restriction is lifted and the driver can upgrade to a full Class C license.",
    },
    {
      question: "Under NCGS § 20-137.4A, which NC drivers are banned from using a mobile phone in any form — including hands-free calls — while driving?",
      options: [
        "All NC drivers, including adults",
        "Only drivers with learner permits",
        "Drivers under 18 years of age",
        "Drivers in a school or construction zone",
      ],
      correctIndex: 2,
      explanation:
        "NCGS § 20-137.4A prohibits drivers under 18 from using any mobile phone while driving — including hands-free calls. Adult drivers 18 and older may use a handheld device for voice calls; NC has not enacted a statewide hands-free mandate for adult drivers. All drivers of any age are banned from texting, emailing, or manual device interaction. No NC driver may wear earphones or earbuds in both ears simultaneously.",
    },
    {
      question: "NCGS § 20-141.5 makes reckless driving by speed an automatic misdemeanor when a driver is driving 15 or more mph over the speed limit AND:",
      options: [
        "Is driving on a two-lane undivided road",
        "Is exceeding 70 mph at the same time",
        "Is exceeding 80 mph at the same time",
        "Has a passenger under 18 in the vehicle",
      ],
      correctIndex: 2,
      explanation:
        "North Carolina's speed-based reckless driving statute (NCGS § 20-141.5) creates an automatic misdemeanor only when BOTH conditions are met simultaneously: driving 15 or more mph over the posted limit AND exceeding 80 mph. Both thresholds must apply at once — 81 mph in a 70 mph zone (only 11 over) does not trigger it. But 81 mph in a 65 mph zone (16 over) does. This two-condition test distinguishes NC's approach from most states.",
    },
    {
      question: "Under NCGS § 20-141.4, what is a driver charged with if they cause a fatality while committing a moving violation — even without alcohol involvement?",
      options: [
        "Misdemeanor negligent driving",
        "Felony Death by Vehicle — a Class D felony",
        "Involuntary manslaughter only if the violation was reckless",
        "No criminal charge — civil liability only",
      ],
      correctIndex: 1,
      explanation:
        "NCGS § 20-141.4 creates the offense of Felony Death by Vehicle — a Class D felony — when a driver causes a death while committing a moving violation. The predicate does not require DWI or gross negligence; running a red light that kills a pedestrian qualifies. NC also has a lesser Misdemeanor Death by Vehicle (Class A1) for deaths caused while committing a misdemeanor traffic offense. Most states' vehicular homicide statutes require intoxication or reckless behavior — NC's moving-violation predicate is unusually broad.",
    },
    {
      question: "Before a North Carolina teen can apply for a Level 1 Limited Learner Permit, what must they complete?",
      options: [
        "Only the written knowledge test — no course is required",
        "A vision screening and a 5-hour pre-licensing seminar",
        "A state-approved driver education course with at least 30 hours classroom and 6 hours behind-the-wheel",
        "A road skills test supervised by a licensed instructor",
      ],
      correctIndex: 2,
      explanation:
        "North Carolina requires teens to complete an approved driver education course — at least 30 hours of classroom instruction and 6 hours of behind-the-wheel training with a licensed instructor — before they can receive a Level 1 Limited Learner Permit. After the course, they must pass the NCDMV knowledge test and a vision screening. This mandatory course requirement was strengthened after research linked formal driver education to lower crash rates for teen drivers.",
    },
    {
      question: "A North Carolina Level 1 permit holder wants to drive to pick up a friend at 9:30 PM. Is this permitted?",
      options: [
        "Yes — the curfew applies only to Level 2 holders",
        "Yes — if a licensed supervisor 21 or older is present",
        "No — Level 1 holders may not drive between 9 PM and 5 AM under any circumstances",
        "No — only if the trip is for employment purposes",
      ],
      correctIndex: 2,
      explanation:
        "NC Level 1 Limited Learner Permit holders are prohibited from driving between 9 PM and 5 AM without exception. Even having a licensed supervising driver present does not remove this restriction — the nighttime curfew is absolute for Level 1. Level 2 (Limited Provisional License) holders face a narrower restriction of midnight to 5 AM for the first six months. The 9 PM curfew reflects the highest crash-risk window for the most novice teen drivers.",
    },
    {
      question: "North Carolina's universal motorcycle helmet law (G.S. 20-140.4) requires a helmet for which riders?",
      options: [
        "Only riders under 18 or with less than one year of licensure",
        "Riders on highways — helmets are optional on city streets",
        "All motorcycle operators and passengers regardless of age or experience",
        "Helmet use is recommended but not legally required in NC",
      ],
      correctIndex: 2,
      explanation:
        "North Carolina's universal helmet law requires every motorcycle operator and every passenger to wear a DOT-compliant helmet at all times, regardless of age, license type, or experience level. NC enacted one of the nation's earliest universal helmet laws and has maintained it. Eye protection is also required unless the motorcycle is equipped with a windshield. There is no age-based or experience-based exemption.",
    },
  ],
  faqs: [
    {
      question: "Why does North Carolina call impaired driving 'DWI' instead of 'DUI,' and how is NC's punishment system different?",
      answer:
        "North Carolina uses DWI — Driving While Impaired — under NCGS § 20-138.1. What makes NC unique is its six-level sentencing grid. Instead of standard first/second/third offense tiers, NC judges assign a punishment Level V (least severe) through Aggravated Level I (most severe) based on grossly aggravating factors (prior DWI within seven years, child passenger under 18, serious injury caused, or BAC ≥ 0.15%) and mitigating factors (safe driving record, slight impairment, etc.). No other state uses this exact grid structure.",
    },
    {
      question: "What is NC's James' Law and why is it different from most states' Move Over laws?",
      answer:
        "James' Law (SB 155, 2019) extended NC's Move Over obligation to every vehicle displaying hazard flashers — not just emergency vehicles or tow trucks. Most states' Move Over laws cover only law enforcement, fire, EMS, and possibly tow vehicles. In NC, a broken-down sedan on the shoulder with hazards blinking triggers the same legal obligation as a police cruiser. Drivers must move over one lane or slow to 45 mph below the posted speed limit. The law was named after James Markle, a roadside assistance worker struck and killed by a passing motorist.",
    },
    {
      question: "What are the exact phone restrictions for North Carolina drivers under 18?",
      answer:
        "NCGS § 20-137.4A prohibits drivers under 18 from using a mobile phone in any mode while driving — including hands-free Bluetooth calls. The restriction is total: no calls, no texts, no navigation via phone. Adult drivers 18 and older may make voice calls on a handheld device but cannot text, email, or manually operate the phone. NC has not enacted a general hands-free ban for adult drivers, unlike many other states. Additionally, no NC driver of any age may wear earphones or earbuds in both ears while driving.",
    },
    {
      question: "What happens to a North Carolina driver under 21 who has any amount of alcohol detected?",
      answer:
        "NC's zero-tolerance law (NCGS § 20-138.3) means truly any detectable alcohol — not 0.02%, not a threshold — is a violation for a driver under 21. A first offense results in a 30-day civil license revocation. If the driver's BAC is 0.08% or higher, they also face full adult DWI charges with criminal penalties. NC's under-21 threshold is stricter than states like Michigan and Virginia that use 0.02% as their underage cutoff.",
    },
    {
      question: "What supervised driving and holding-period requirements apply to a North Carolina Level 1 Learner Permit?",
      answer:
        "A North Carolina Level 1 Limited Learner Permit must be held for a minimum of 12 months (not convertible early under any circumstances). During those 12 months, the teen must complete at least 60 hours of supervised driving with a licensed adult 21 or older in the front seat — including at least 10 of those hours after dark. No driving is permitted between 9 PM and 5 AM, even with a supervisor. After 12 months and 60 hours, the teen may apply for Level 2 after passing a road skills test.",
    },
    {
      question: "How does NCGS § 20-141.5 define reckless driving by speed, and what makes NC's rule distinctive?",
      answer:
        "NCGS § 20-141.5 creates an automatic Class 1 misdemeanor when a driver is simultaneously 15 or more mph over the posted speed limit AND exceeding 80 mph. Both conditions must be true at the same time. Driving 75 mph on a 55 mph road is 20 over but only 75 mph — not automatic reckless. Driving 82 mph on a 70 mph road is 12 over but exceeds 80 — still not automatic reckless (only 12 over). The two-condition test is unique nationally; Virginia by contrast makes ANY speed over 80 mph automatic reckless driving regardless of the posted limit.",
    },
    {
      question: "What driver education is required before a North Carolina teen can get a permit?",
      answer:
        "All first-time drivers under 18 must complete a state-approved driver education course before NCDMV will issue a Level 1 Limited Learner Permit. The course must include a minimum of 30 hours of classroom instruction and 6 hours of behind-the-wheel training from an approved provider. After course completion, teens pass the NCDMV knowledge test and vision screening to receive the permit. There is no exception or waiver for teens under 18 — the course is mandatory.",
    },
    {
      question: "Is North Carolina a primary enforcement state for seat belts?",
      answer:
        "Yes. NC's seat belt law (G.S. 20-135.2A) is primary enforcement — law enforcement can stop and cite you solely for not wearing a seat belt without needing any other traffic violation to justify the stop. All occupants in every seating position must be buckled. The fine is relatively modest, but the primary authority means no other violation is needed. NC has maintained primary seat belt enforcement since 2006.",
    },
    {
      question: "Does North Carolina require helmets for all motorcycle riders?",
      answer:
        "Yes. Under G.S. 20-140.4, North Carolina's universal helmet law requires every motorcycle operator and passenger to wear a DOT-compliant helmet, regardless of age or experience level. Eye protection is also mandatory unless the motorcycle has a windshield. NC is one of about 19 states with a universal (all-rider) helmet law. There is no age cutoff or experience exemption — even a licensed adult with 20 years of riding experience must wear a helmet.",
    },
    {
      question: "What is 'Felony Death by Vehicle' under NCGS § 20-141.4, and why is it unusual compared to other states?",
      answer:
        "NCGS § 20-141.4 makes it a Class D felony to cause the death of another person while committing a moving traffic violation — any moving violation, not just DWI. Running a stop sign that kills a pedestrian can result in Felony Death by Vehicle. Most other states require either intoxication or gross negligence/recklessness as the predicate for vehicular homicide. NC's statute is broader: the simple commission of a moving violation that causes death is sufficient. NC also has Misdemeanor Death by Vehicle (Class A1) for less severe predicate violations.",
    },
  ],
  relatedTests: [
    { label: "NC Motorcycle Test", href: "/north-carolina-motorcycle-practice-test" },
    { label: "NC CDL Test", href: "/north-carolina-cdl-practice-test" },
    { label: "GA Permit Test", href: "/georgia-dmv-practice-test" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "View All States", href: "/states" },
  ],
};

export default function NorthCarolinaDMVPage() {
  return <PracticeTestPage {...data} />;
}
