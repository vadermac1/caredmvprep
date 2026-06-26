import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Georgia Driver's License Practice Test 2025 – Free GA DDS Exam Prep",
  description:
    "Free Georgia driver's license practice test based on the official Georgia Driver's Manual. 20 questions, 75% passing score, detailed explanations. Pass your GA DDS knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/georgia-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/georgia-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Georgia",
  stateAbbr: "GA",
  testLabel: "Driver's License Practice Test",
  slug: "georgia-dmv-practice-test",
  headline: "Georgia DDS Practice Test — Super Speeder Law, Hands-Free Act, and Joshua's Law",
  intro:
    "Georgia's knowledge test is 20 questions with a 75% passing threshold — you can miss 5 and still pass, which is more forgiving than the 80% standard used by most states. But the content is genuinely Georgia-specific: the Super Speeder surcharge that adds $200 on top of any court fine for speeds of 75+ mph on two-lane roads or 85+ mph anywhere, the Hands-Free Georgia Act's point-based penalty escalation, and Joshua's Law's mandatory driver education requirement. This practice test drills those GA-specific laws.",
  numToPass: "15 correct (75%)",
  basedOn: "Georgia Driver's Manual (2025)",
  about: [
    "In Georgia, driver's licenses are issued by the Georgia Department of Driver Services (DDS) — not a DMV. The DDS was established as a standalone agency in 2003 when it was separated from the Georgia Department of Transportation, making it one of the few states where driver licensing is its own cabinet-level agency. The knowledge test is 20 questions drawn from the Georgia Driver's Manual, and you must answer at least 15 correctly — a 75% passing score. This threshold is lower than the 80% standard used by most states, meaning Georgia allows 5 incorrect answers on a 20-question test. Testing is available at DDS Customer Service Centers across the state; appointments are available at dds.georgia.gov. Georgia's Super Speeder Law (OCGA § 40-6-189) is one of the state's most distinctive traffic statutes: anyone convicted of speeding at 75 mph or faster on any two-lane road, or 85 mph or faster on any Georgia road or highway, owes a $200 state surcharge in addition to whatever fine the local court imposes. The $200 must be paid to the state within 120 days of conviction or the driver's license is automatically suspended.",
    "Joshua's Law (OCGA § 40-5-22.1) requires all first-time drivers under 18 to complete a state-approved driver education program before receiving an Instructional Driving Permit. The program must include at least 30 hours of classroom instruction and 6 hours of behind-the-wheel training. The law was named for Joshua Brown, a Georgia teenager killed in a crash before the law existed. After completing driver education, teens apply for an Instructional Driving Permit (IDP) at age 15 and must hold it for at least 12 months, log 40 hours of supervised driving (6 hours at night), and be 16 years old before applying for a Class D Provisional License. The Class D license carries a nighttime restriction — no driving between midnight and 6 AM without a licensed adult parent or guardian — and limits the holder to one non-family passenger under 21 during the first year. After 12 months on the Class D license, drivers who are at least 17 may upgrade to a Class C (full) license.",
    "Georgia's Hands-Free Georgia Act (HB 673, OCGA § 40-6-241.2), effective July 1, 2018, was among the earliest comprehensive hands-free laws enacted by any state. The law prohibits holding or supporting a wireless communication device with any part of the body while operating a motor vehicle — calls, texts, navigation, video, and any other use. Even resting a phone on your shoulder counts as 'supporting' it. The penalty escalates with each offense: first violation $50 fine + 1 point; second violation $100 + 2 points; third and subsequent violations $150 + 3 points. Georgia's point-based escalation is more detailed than most states' flat fine structures. Georgia's Move Over Law (OCGA § 40-6-16) was expanded in 2022 to cover tow trucks displaying amber lights, with a specific threshold: drivers must move over or slow to 25 mph below the posted speed limit — the '25 mph below' language is more specific than many other states' equivalent laws.",
  ],
  keyRules: [
    { icon: "💰", rule: "Super Speeder: $200 state surcharge on top of court fine", detail: "OCGA § 40-6-189: Anyone convicted of speeding at 75+ mph on any two-lane road, or 85+ mph on any Georgia road, owes a $200 state surcharge payable within 120 days. Failure to pay suspends the license automatically. This surcharge is separate from — and in addition to — any local court fine." },
    { icon: "📱", rule: "Hands-Free Act: $50/$100/$150 + points per violation", detail: "OCGA § 40-6-241.2: Holding or supporting a device with any body part while driving. First offense: $50 + 1 point. Second: $100 + 2 points. Third+: $150 + 3 points. Effective July 1, 2018 — one of the earliest comprehensive hands-free laws nationally." },
    { icon: "🎓", rule: "Joshua's Law: 30 hrs classroom + 6 hrs driving before permit", detail: "OCGA § 40-5-22.1: All first-time drivers under 18 must complete state-approved driver education (30 hours classroom, 6 hours behind-the-wheel) before an Instructional Driving Permit is issued. Named for Joshua Brown, killed before the law existed." },
    { icon: "✅", rule: "75% passing threshold — 15 of 20 correct", detail: "Georgia's DDS knowledge test requires 75% (15/20) to pass — lower than the 80% standard most states use. This means 5 wrong answers still result in a passing score on Georgia's 20-question test." },
    { icon: "🏛️", rule: "DDS not DMV — standalone agency since 2003", detail: "The Georgia Department of Driver Services was separated from GDOT in 2003 and operates as its own cabinet agency. All licensing, IDs, and driver testing are DDS functions. There is no 'Georgia DMV.'" },
    { icon: "🚛", rule: "Move Over: slow 25 mph below the posted limit", detail: "OCGA § 40-6-16: When a lane change is not possible, drivers must slow to 25 mph below the posted speed limit when passing stationary emergency, law enforcement, tow trucks, or utility vehicles with activated lights. The '25 mph below' threshold is Georgia's specific standard." },
    { icon: "🌙", rule: "Class D curfew: midnight–6 AM; 1 non-family passenger limit", detail: "Georgia Class D (Provisional) license holders under 18 may not drive between midnight and 6 AM without a licensed parent or guardian. Also limited to 1 non-family passenger under 21 during the first year." },
    { icon: "🍺", rule: "DUI 'less safe' — no BAC required to charge", detail: "OCGA § 40-6-391 allows a DUI 'less safe' charge based solely on officer observations of impairment — without a BAC reading. A driver below 0.08% who appears impaired can still be charged. Under-21 limit is 0.02% BAC." },
  ],
  sampleQuestions: [
    {
      question: "A Georgia driver is convicted of driving 77 mph on a two-lane state highway where the speed limit is 55 mph. Under Georgia's Super Speeder Law (OCGA § 40-6-189), what additional financial penalty does the state impose?",
      options: [
        "No additional penalty — only the court fine applies",
        "A $100 state surcharge payable to the court",
        "A $200 state surcharge payable to the state within 120 days",
        "A $500 surcharge and mandatory court appearance",
      ],
      correctIndex: 2,
      explanation:
        "Georgia's Super Speeder Law (OCGA § 40-6-189) adds a $200 state surcharge when any driver is convicted of speeding at 75 mph or faster on any two-lane road, or 85 mph or faster on any road or highway in Georgia. This $200 is in addition to the local court fine and is paid to the state — not the court — within 120 days of conviction. Failure to pay results in automatic license suspension. The driver here was convicted of 77 mph on a two-lane road, which triggers the Super Speeder designation.",
    },
    {
      question: "Georgia's Hands-Free Act (OCGA § 40-6-241.2) penalizes violations on a sliding scale. What penalty applies on a third or subsequent violation?",
      options: [
        "$25 fine — the law caps penalties at $25",
        "$50 fine and 1 point on the license",
        "$150 fine and 3 points on the license",
        "$500 fine and a 30-day license suspension",
      ],
      correctIndex: 2,
      explanation:
        "Georgia's Hands-Free Act uses a three-tier penalty scale tied to violation history: first offense $50 + 1 point; second offense $100 + 2 points; third and subsequent offenses $150 + 3 points. The accumulating point values mean repeat violations can accelerate toward license suspension under Georgia's point system. This escalating structure distinguishes Georgia's law from many states that impose a single flat fine regardless of how many prior violations exist.",
    },
    {
      question: "Which Georgia statute allows a DUI charge even when the driver's BAC is below 0.08%?",
      options: [
        "No such statute exists — Georgia requires 0.08% or higher to charge DUI",
        "OCGA § 40-6-391's DUI 'less safe' provision, based on officer observation of impairment",
        "Georgia's underage DUI statute, which applies only to drivers under 21",
        "Only commercial vehicle drivers can be charged below 0.08%",
      ],
      correctIndex: 1,
      explanation:
        "OCGA § 40-6-391 contains two DUI pathways: the per se offense (BAC ≥ 0.08%) and a 'less safe' offense in which the state proves impairment through officer observation, field sobriety test results, and other evidence — without a BAC reading at all. A driver below 0.08% who appears visibly impaired can be charged with and convicted of DUI 'less safe' in Georgia. This is an important Georgia-specific DUI concept tested on the knowledge exam.",
    },
    {
      question: "What does Georgia's Joshua's Law (OCGA § 40-5-22.1) require before a teen under 18 can receive an Instructional Driving Permit?",
      options: [
        "Only passing the written knowledge test at a DDS office",
        "Completing a state-approved driver education course with 30 hours classroom and 6 hours behind-the-wheel",
        "A parent or guardian must co-sign a driving pledge form",
        "Completing a 5-hour pre-licensing online course",
      ],
      correctIndex: 1,
      explanation:
        "Joshua's Law (OCGA § 40-5-22.1) requires all first-time drivers under 18 to complete a Georgia-approved driver education course including at least 30 hours of classroom instruction and 6 hours of supervised behind-the-wheel training before the DDS will issue an Instructional Driving Permit. The law was enacted after Joshua Brown, a Georgia teen, was killed in a crash. All teens must complete this requirement — there is no exemption based on age or parental preference.",
    },
    {
      question: "What agency issues Georgia driver's licenses, and when was it separated from GDOT?",
      options: [
        "Georgia DMV — established in 1945",
        "Georgia Department of Driver Services (DDS) — separated from GDOT in 2003",
        "Georgia Secretary of State — handles all licensing",
        "Georgia Motor Vehicle Division — part of the Revenue Department",
      ],
      correctIndex: 1,
      explanation:
        "The Georgia Department of Driver Services (DDS) has been Georgia's standalone driver licensing agency since 2003, when it was separated from the Georgia Department of Transportation. There is no 'Georgia DMV.' The DDS operates Customer Service Centers statewide and handles all driver licenses, ID cards, and the GDL program. Appointments can be scheduled at dds.georgia.gov. This separation makes Georgia one of the few states where driver licensing is its own distinct cabinet agency.",
    },
    {
      question: "Georgia's Move Over Law (OCGA § 40-6-16) requires that when a lane change is not safely possible, drivers passing a stationary tow truck with amber lights must slow to:",
      options: [
        "5 mph below the posted speed limit",
        "10 mph below the posted speed limit",
        "25 mph below the posted speed limit",
        "A complete stop",
      ],
      correctIndex: 2,
      explanation:
        "Georgia's Move Over Law specifies that when a lane change cannot safely be made, drivers must reduce speed to 25 mph below the posted speed limit when passing any stationary authorized emergency vehicle, law enforcement vehicle, tow truck, or utility vehicle displaying flashing amber or emergency lights. The '25 mph below' threshold is Georgia's specific legal standard — more precise than many other states' 'reasonable and safe' language. Georgia expanded the law in 2022 to explicitly include tow trucks with amber lights.",
    },
    {
      question: "A Georgia Class D Provisional license holder just turned 16. What nighttime restriction applies to their license?",
      options: [
        "No driving after 9 PM under any circumstances",
        "No driving between midnight and 6 AM without a licensed parent or guardian present",
        "No nighttime driving for the first 30 days only",
        "No restriction — nighttime curfews apply only during the IDP phase",
      ],
      correctIndex: 1,
      explanation:
        "Georgia Class D (Provisional) license holders under 18 may not drive between midnight and 6 AM without a licensed parent, guardian, or other adult 21 or older in the vehicle. This nighttime restriction applies for the first 12 months of the Class D license. After 12 months without serious violations, a driver who is at least 17 may upgrade to a Class C (full) license. Georgia's midnight-to-6 AM curfew is in place because crash rates for teen drivers are significantly elevated during late-night hours.",
    },
    {
      question: "Georgia's DDS knowledge test passing threshold is different from most states. What score is required?",
      options: [
        "80% — same as most states",
        "85% — Georgia's standard is higher than average",
        "75% — 15 of 20 questions correct",
        "70% — Georgia uses a lower threshold than most states",
      ],
      correctIndex: 2,
      explanation:
        "Georgia's DDS knowledge test requires a passing score of 75% — 15 correct answers out of 20 questions. This is more forgiving than the 80% standard used by most other states. On Georgia's test, a test-taker can miss 5 questions and still pass. Despite the lower threshold, the content tests Georgia-specific laws including the Super Speeder Law, Hands-Free Act, Joshua's Law, and Georgia DDS agency knowledge.",
    },
    {
      question: "After receiving a Georgia Class D Provisional License, how long must a driver wait — and how old must they be — before upgrading to a Class C full license?",
      options: [
        "6 months and age 16",
        "12 months on Class D and at least age 17",
        "12 months on Class D and at least age 18",
        "24 months and age 17",
      ],
      correctIndex: 1,
      explanation:
        "After holding a Georgia Class D Provisional License for at least 12 months without serious violations, a driver who has reached age 17 may upgrade to a Class C (unrestricted) license. Both requirements — 12 months on Class D AND at least age 17 — must be met. The Class D license is typically issued at age 16 after 12 months with an IDP. All GDL restrictions (curfew and passenger limits) end when the driver upgrades to Class C.",
    },
    {
      question: "Under Georgia's Hands-Free Act (OCGA § 40-6-241.2), which action by a Georgia driver would constitute a violation?",
      options: [
        "Using a Bluetooth earpiece for a phone call while driving",
        "Using voice commands to start navigation through the car's built-in system",
        "Resting a phone on the shoulder while making a speakerphone call",
        "Using a phone mounted to a dashboard vent for turn-by-turn navigation",
      ],
      correctIndex: 2,
      explanation:
        "Georgia's Hands-Free Act prohibits holding or supporting a wireless communication device with any part of the body while driving — and 'any part of the body' includes the shoulder. Resting a phone on the shoulder during a speakerphone call violates the law because the device is being supported by the body. A Bluetooth earpiece, a dashboard-mounted device operated by voice, or a phone in a cupholder on speaker are all permissible as long as the driver does not touch or hold the device while the vehicle is in motion.",
    },
  ],
  faqs: [
    {
      question: "What is Georgia's Super Speeder Law and what triggers the $200 surcharge?",
      answer:
        "Georgia's Super Speeder Law (OCGA § 40-6-189) imposes a $200 state surcharge — separate from any court fine — on any driver convicted of speeding at 75 mph or faster on any two-lane road, or 85 mph or faster on any road or highway in Georgia. The $200 is paid to the state (not the local court) within 120 days of conviction. If not paid, the driver's license is automatically suspended until the surcharge is paid plus a $50 reinstatement fee. The Super Speeder designation also appears on the driving record.",
    },
    {
      question: "What is Georgia's DDS, and why does it say 'DDS' instead of 'DMV' on Georgia licenses?",
      answer:
        "Georgia's Department of Driver Services (DDS) was created in 2003 when driver licensing functions were separated from the Georgia Department of Transportation (GDOT). DDS is a standalone cabinet-level agency that handles all driver licensing, ID cards, and driver testing. There is no Georgia DMV. DDS Customer Service Centers are located throughout the state and at dds.georgia.gov you can schedule appointments, check office locations, and find fee information.",
    },
    {
      question: "How does Georgia's Hands-Free Act differ from a simple texting ban?",
      answer:
        "Georgia's Hands-Free Act (OCGA § 40-6-241.2) is far broader than a texting ban. It prohibits holding or supporting a wireless communication device with any part of the body for any purpose — calls, texts, navigation, video, social media, or any app. Even resting a phone on your shoulder during a call is a violation because the body is supporting the device. The law also uses a point-based penalty structure: first offense $50 + 1 point; second $100 + 2 points; third+ $150 + 3 points. A texting-only ban would allow handheld calls — Georgia's law does not.",
    },
    {
      question: "What is Joshua's Law and who does it apply to in Georgia?",
      answer:
        "Joshua's Law (OCGA § 40-5-22.1) requires every first-time driver under age 18 in Georgia to complete a state-approved driver education course before the DDS will issue an Instructional Driving Permit. The course must include at least 30 hours of classroom instruction and 6 hours of supervised behind-the-wheel driving. The law was named after Joshua Brown, a Georgia teen killed in a crash. There are no waivers or exceptions — all teens under 18 must complete the course before getting a permit.",
    },
    {
      question: "What is Georgia's DUI 'less safe' charge, and how is it different from a standard DUI?",
      answer:
        "OCGA § 40-6-391 contains two types of DUI in Georgia. The per se offense applies when BAC is 0.08% or higher (0.02% for under-21 drivers). The 'less safe' offense applies when the state proves — through officer observations, field sobriety tests, and other evidence — that the driver was so impaired they were less safe to drive, regardless of BAC. A driver below 0.08% who fails field sobriety tests, smells of alcohol, and drives erratically can still be convicted of DUI 'less safe.' No BAC test is needed to charge or convict.",
    },
    {
      question: "What is Georgia's IDP holding period and supervised driving requirement before getting a Class D license?",
      answer:
        "After receiving an Instructional Driving Permit (IDP) at age 15, Georgia teens must hold the permit for a minimum of 12 months and log at least 40 hours of supervised driving — including at least 6 hours at night — before applying for a Class D Provisional License at age 16. The 40 hours must be logged under the direct supervision of a licensed adult 21 or older in the front seat. There is no shortcut to the 12-month holding period.",
    },
    {
      question: "Can I schedule a Georgia DDS knowledge test online?",
      answer:
        "Yes. The Georgia DDS allows online appointment scheduling for knowledge tests and road tests at dds.georgia.gov. Walk-in testing may be available at some locations, but scheduling an appointment is strongly recommended, especially at busy metro Atlanta-area DDS centers like the Conyers Road Decatur office or Duluth locations, which often have long wait times for walk-ins.",
    },
    {
      question: "What passenger restrictions apply to a Georgia Class D Provisional license holder?",
      answer:
        "During the first year of a Georgia Class D Provisional License, holders under 18 may not drive with more than one non-family passenger under 21 in the vehicle. Family members (siblings, parents, etc.) do not count toward this limit. This restriction is designed to reduce peer distraction during the highest-risk period of new driver licensure. The restriction lifts after 12 months on Class D when the driver is eligible to upgrade to Class C.",
    },
    {
      question: "Does Georgia require a helmet for all motorcycle riders?",
      answer:
        "Yes. Georgia's universal helmet law (OCGA § 40-6-315) requires all motorcycle operators and passengers to wear a DOT-compliant helmet regardless of age or experience. Eye protection is also required unless the motorcycle is equipped with a windshield. Georgia is one of approximately 19 states with a universal helmet requirement — there is no age-based exemption for adult riders.",
    },
    {
      question: "What does Georgia's Move Over Law specifically require when a lane change is not possible?",
      answer:
        "Georgia's Move Over Law (OCGA § 40-6-16) requires drivers to move over one lane on multi-lane roads when passing stationary emergency, law enforcement, tow trucks, or utility vehicles with activated lights. When moving over is not safely possible, drivers must slow to 25 mph below the posted speed limit — a specific threshold written into Georgia law. Georgia expanded the law in 2022 to explicitly include tow trucks with amber lights. Violations carry fines up to $500 and are moving violations.",
    },
  ],
  relatedTests: [
    { label: "GA Motorcycle Test", href: "/georgia-motorcycle-practice-test" },
    { label: "GA CDL Test", href: "/georgia-cdl-practice-test" },
    { label: "FL Permit Test", href: "/florida-dmv-practice-test" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "View All States", href: "/states" },
  ],
};

export default function GeorgiaDMVPage() {
  return <PracticeTestPage {...data} />;
}
