import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Connecticut DMV Practice Test 2025 – Free CT OUI Law & Driver's License Exam Prep",
  description:
    "Free Connecticut DMV practice test covering the nation's first handheld phone ban (2001, CGS § 14-296aa), Merritt Parkway commercial vehicle prohibition, mandatory first-offense IID for OUI, implied consent dual penalties, and HOV lane rules. 25 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/connecticut-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/connecticut-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Connecticut",
  stateAbbr: "CT",
  testLabel: "CT DMV Knowledge Test",
  slug: "connecticut-dmv-practice-test",
  headline: "Connecticut DMV Practice Test – CT DMV Knowledge Exam",
  intro:
    "Connecticut's Department of Motor Vehicles is one of the original 'DMV' agencies nationally. The CT DMV administers a 25-question test requiring 80% (20/25) to pass. Connecticut has three nationally distinctive driving laws: it enacted the nation's first statewide handheld phone ban in 2001 under CGS § 14-296aa, six years before most states; the Merritt Parkway (Route 15) absolutely prohibits all commercial vehicles due to bridge clearances as low as 9 feet; and Connecticut mandates an ignition interlock device for ALL OUI convictions including first offenses. This free practice test covers all three topics plus the OUI terminology (not DUI), the dual implied consent penalty (suspension AND IID from a single refusal), and Connecticut's 40-hour supervised driving requirement for teen permit holders.",
  basedOn: "Connecticut DMV Driver's Manual (current CT DMV edition)",
  keyRules: [
    { icon: "📱", rule: "Nation's first handheld ban: 2001 (CGS § 14-296aa)", detail: "Connecticut enacted the first statewide handheld phone ban in the U.S. in 2001 — six years before most states. Updated in 2021 to cover all electronic devices. First offense: $150; second: $300; third+: $500." },
    { icon: "🚫", rule: "Merritt Parkway (Route 15): NO trucks, buses, or commercial vehicles", detail: "Route 15 (Merritt/Wilbur Cross Parkway) prohibits ALL commercial vehicles, trucks, and buses — any commercial vehicle over 1 ton or with commercial plates — due to historic bridge clearances as low as 9 feet." },
    { icon: "🍺", rule: "OUI (not DUI): 0.08% adults / 0.02% under-21 (CGS § 14-227a)", detail: "Connecticut uses OUI (Operating Under the Influence). 0.08% BAC for adults; 0.02% for under-21; 0.04% for CDL holders in a commercial vehicle. Same OUI terminology as Massachusetts." },
    { icon: "🔑", rule: "IID mandatory for ALL OUI convictions including first offense", detail: "Connecticut requires an ignition interlock device for every OUI conviction — even first offense. Minimum 45-day IID before license reinstatement after first OUI. Second OUI: 1-year IID. Third OUI: 3-year IID." },
    { icon: "⚖️", rule: "Implied consent: refusal = 45-day suspension AND 1-year IID", detail: "Connecticut's implied consent law (CGS § 14-227b): first refusal triggers BOTH a 45-day license suspension AND a 1-year IID requirement — both consequences from the refusal alone, before any criminal conviction." },
    { icon: "👦", rule: "Learner's permit at 16 — 120 or 180 days + 40 hours", detail: "CT learner's permit at 16. Applicants who complete a full driver-ed program (commercial/secondary school) may test after 120 days; all other applicants must hold the permit 180 days. Must log 40 hours of behind-the-wheel training." },
    { icon: "🌙", rule: "Under-18 driver: 11PM–5AM curfew (first 6 months)", detail: "CT drivers under 18 cannot drive 11PM–5AM during the first 6 months after licensing, except for employment, school, religious activities, medical necessity, or as an assigned Safe Ride Program driver. Also limited to 1 non-family passenger under 18 during the first 6 months." },
    { icon: "🛣️", rule: "I-95 / I-91 HOV lanes: 6–9 AM and 4–7 PM weekdays", detail: "Connecticut I-95 and I-91 have HOV-2 lanes during peak hours (6–9 AM and 4–7 PM on weekdays). Violations carry $150 fines. Connecticut strictly enforces HOV lane rules on its congested interstate corridors." },
  ],
  about: [
    "Connecticut's Department of Motor Vehicles (CT DMV) is one of the original agencies to use the 'DMV' name — Connecticut does not use 'Registry' (like Massachusetts), 'DVS' (like Minnesota), or 'MVA' (like Maryland). CT DMV offices are located throughout the state. The knowledge test consists of 25 questions requiring 20 correct (80%) to pass. Connecticut made history on July 1, 2001, by becoming the first state in the United States to enact a statewide handheld phone ban for all drivers under CGS § 14-296aa — six years before most other states began enacting similar legislation. Connecticut updated the law in 2021 to expand coverage to all electronic devices, not just phones, and to prohibit any physical contact with a held device while driving. Current fines: $150 (first offense), $300 (second), $500 (third or subsequent).",
    "Connecticut's Route 15 — the Merritt Parkway in Fairfield County and the Wilbur Cross Parkway in New Haven County — is one of the most restricted limited-access highways in the United States. Constructed in the late 1930s and early 1940s as a scenic parkway exclusively for passenger automobiles, the Merritt's original bridge structures have clearances as low as 9 feet — far below the federal 16-foot standard for interstate highways. The Merritt Parkway absolutely prohibits: all commercial vehicles (any commercial vehicle), trucks of any size, buses of any type, RVs and motorhomes, vehicles towing trailers, and any vehicle with commercial plates or weighing over 1 ton. GPS navigation systems frequently route trucks onto Route 15, causing bridge strikes — this is a regular occurrence in Fairfield County and is directly tested on the CT DMV knowledge exam.",
    "Connecticut uses OUI (Operating Under the Influence) for impaired driving under CGS § 14-227a — the same OUI terminology used in Massachusetts. The 0.08% BAC adult threshold applies, with 0.02% for under-21 drivers and 0.04% for CDL holders in a commercial vehicle. Connecticut requires an ignition interlock device for ALL OUI convictions including first offenses — a mandatory first-offense IID requirement that was enacted earlier than most states. Connecticut's implied consent law (CGS § 14-227b) is particularly strict: a single test refusal triggers BOTH a 45-day administrative license suspension AND a 1-year IID requirement — both consequences flowing entirely from the refusal, separate from any criminal OUI case. The dual penalty (suspension plus IID) for a first refusal makes Connecticut's implied consent system one of the more consequential in the nation.",
  ],
  sampleQuestions: [
    {
      question: "Connecticut enacted the nation's first statewide handheld phone ban for all drivers in what year?",
      options: [
        "1998 — Connecticut was the very first state to ban cell phones entirely while driving",
        "2001 — Connecticut's ban on handheld cell phones for all drivers was the first in the U.S., taking effect July 1, 2001",
        "2006 — Connecticut followed New York's 2001 ban five years later",
        "2015 — Connecticut was a middle-of-the-pack adopter of hands-free laws nationally",
      ],
      correctIndex: 1,
      explanation:
        "Connecticut enacted the nation's first statewide handheld phone ban for all drivers under CGS § 14-296aa, which took effect July 1, 2001 — six years before most other states began passing similar legislation. The original 2001 law focused on handheld phone calls. Connecticut updated the law in 2021 to cover all electronic devices and to prohibit any physical contact with a held wireless device while driving. Current fines: $150 (first offense), $300 (second), $500 (third and subsequent offenses).",
    },
    {
      question: "The Merritt Parkway (Route 15) in Connecticut prohibits which vehicles due to low bridge clearances?",
      options: [
        "Vehicles without E-ZPass — Route 15 is a cashless toll road accessible only to transponder users",
        "Vehicles over 6,000 lbs GVWR — standard SUVs and pickup trucks are restricted",
        "ALL commercial vehicles, trucks (any size), buses, RVs, trailers, and any vehicle with commercial plates or over 1 ton — due to bridge clearances as low as 9 feet",
        "Only semi-trucks over 80,000 lbs — smaller commercial vehicles are permitted on the Merritt",
      ],
      correctIndex: 2,
      explanation:
        "The Merritt Parkway (Fairfield County) and Wilbur Cross Parkway (New Haven County) form Route 15 — a historic 1930s–1940s scenic parkway designed exclusively for passenger automobiles. Its original bridge clearances of approximately 9–11 feet are far below the federal 16-foot interstate standard. Route 15 prohibits: ALL commercial vehicles (any commercial plate vehicle), trucks of any size, buses of any type (with very limited exceptions), RVs and motorhomes, and any vehicle towing a trailer. GPS systems routinely route trucks onto Route 15, causing bridge strikes. This prohibition is directly tested on the CT DMV exam.",
    },
    {
      question: "Connecticut's OUI law (CGS § 14-227a) uses 'OUI' rather than 'DUI.' What does OUI stand for, and what BAC triggers it for an adult driver?",
      options: [
        "Operating While Intoxicated — Connecticut's term differs from the OUI used in Massachusetts",
        "Offense Under the Influence — a Connecticut-specific term with a 0.05% threshold",
        "Operating Under the Influence — applies at 0.08% BAC for adults 21+",
        "Operating Under the Influence — applies at 0.10% BAC; Connecticut has not adopted the 0.08% federal standard",
      ],
      correctIndex: 2,
      explanation:
        "Connecticut's impaired driving statute (CGS § 14-227a) uses OUI — Operating Under the Influence — at 0.08% BAC for adults 21 and over. For drivers under 21, the threshold is 0.02%. CDL holders operating a commercial vehicle face the federal 0.04% standard. Connecticut's OUI terminology is consistent with Massachusetts (which also uses OUI) and differs from most U.S. states that use DUI or DWI. The term 'Operating' (not 'Driving') is important because it can cover situations where the engine is running even if the vehicle is stopped.",
    },
    {
      question: "Connecticut requires an ignition interlock device (IID) after which OUI convictions?",
      options: [
        "Only after a third or subsequent OUI conviction",
        "After second and subsequent OUI convictions — first offense does not require IID in Connecticut",
        "After ALL OUI convictions including first offense — minimum 45-day IID before license reinstatement",
        "Only when the OUI involved a BAC of 0.15% or higher",
      ],
      correctIndex: 2,
      explanation:
        "Connecticut requires an ignition interlock device for ALL OUI convictions — including first offense. After a first OUI conviction, the IID must be installed for a minimum of 45 days before the license can be reinstated. Second OUI: 1-year IID. Third OUI: 3-year IID. Connecticut's mandatory first-offense IID was enacted earlier than most states and makes Connecticut one of the more restrictive OUI states. The IID is a reinstatement condition — it runs in addition to, not instead of, the license suspension.",
    },
    {
      question: "Under Connecticut's implied consent law (CGS § 14-227b), a driver who refuses a chemical test for the first time faces:",
      options: [
        "A $200 fine only — Connecticut cannot suspend a license without a court conviction",
        "A 30-day license suspension concurrent with the criminal OUI case",
        "A 45-day administrative license suspension AND a 1-year ignition interlock device requirement — both from the refusal alone",
        "No immediate consequence — first refusal is treated as a constitutional exercise that carries no penalty",
      ],
      correctIndex: 2,
      explanation:
        "Connecticut's implied consent law (CGS § 14-227b) is one of the strictest in the nation: a first test refusal triggers BOTH a 45-day administrative license suspension AND a 1-year IID requirement upon reinstatement — both consequences flowing entirely from the refusal, separate from any criminal OUI charges. A second refusal within 10 years results in a 45-day suspension PLUS a 3-year IID. The dual penalty (suspension plus IID) for a first refusal means refusing a chemical test may be more damaging than cooperating with testing.",
    },
    {
      question: "How many hours of behind-the-wheel training must a Connecticut 16-/17-year-old permit holder complete before the road test?",
      options: [
        "20 hours — Connecticut's requirement is below the national average",
        "40 hours, accomplished through professional driving-school instruction, home training, or a combination of both",
        "100 hours — Connecticut has one of the highest behind-the-wheel requirements nationally",
        "No specific hour requirement — only the permit-hold period matters",
      ],
      correctIndex: 1,
      explanation:
        "Connecticut requires 16-/17-year-old applicants to complete at least 40 hours of behind-the-wheel, on-the-road training, which may be accomplished through any combination of professional driving-school instruction and home training. The person supervising this training — whether a commercial instructor or a qualifying family member for home training — must be at least 20 years old and have held a license for 4 or more consecutive years with no suspensions in that period.",
    },
    {
      question: "Connecticut's driving restrictions for licensed drivers under 18 include:",
      options: [
        "No passenger restrictions; only a curfew applies",
        "No driving 11PM–5AM (with exceptions for employment, school, religious activities, medical necessity, or the Safe Ride Program); passenger limits in the first year",
        "No driving after 10 PM; no passengers under 21 at any time",
        "No driving after midnight; maximum 3 non-family passengers under 21",
      ],
      correctIndex: 1,
      explanation:
        "Connecticut restricts drivers under 18: a curfew of 11PM–5AM, with specific exceptions for employment, school, religious activities, medical necessity, or being an assigned driver in the Safe Ride Program (volunteer fire/ambulance/EMS members responding to emergencies are also exempt). Passenger restrictions run in two tiers over the first year: for the first 6 months, no passengers except a licensed instructor, a parent/guardian (at least one licensed), or one person 20+ with 4+ consecutive years licensed and no suspensions; for months 7-12, immediate family members are additionally allowed.",
    },
    {
      question: "What are Connecticut's HOV lane requirements on I-95 and I-91?",
      options: [
        "HOV-3 lanes requiring 3 or more occupants during all hours of operation",
        "HOV-2 lanes during peak hours of 6–9 AM and 4–7 PM on weekdays, with $150 violations for solo drivers",
        "Open to all vehicles at all times — Connecticut's HOV lanes have no occupancy restrictions",
        "HOV-2 lanes 24 hours a day, 7 days a week with no time restrictions",
      ],
      correctIndex: 1,
      explanation:
        "Connecticut's I-95 and I-91 have HOV (High-Occupancy Vehicle) lanes requiring 2 or more occupants during peak hours: 6–9 AM and 4–7 PM on weekdays. During off-peak hours, the HOV lanes are generally open to all traffic. Violations (solo drivers using the HOV lane during restricted hours) carry $150 fines in Connecticut. Connecticut strictly enforces HOV lane rules on its congested I-95 and I-91 corridors, particularly in the New Haven-Hartford-Bridgeport region.",
    },
    {
      question: "Connecticut headlight requirements: when must headlights be on beyond the standard sunset-to-sunrise hours?",
      options: [
        "Only when officially declared 'hazardous conditions' are posted by CT DOT",
        "When visibility is reduced to 500 feet or less due to any weather condition, AND whenever windshield wipers are in use",
        "Only in fog — rain and snow do not require headlights during daylight hours in Connecticut",
        "Headlights are only required at night — weather does not extend the requirement",
      ],
      correctIndex: 1,
      explanation:
        "Connecticut law (CGS § 14-96a) requires headlights from sunset to sunrise AND whenever visibility is reduced to 500 feet or less due to any weather condition — rain, fog, smoke, or snow. Connecticut also requires headlights whenever windshield wipers are in use ('wipers on, lights on' principle). Parking lights or daytime running lights do not satisfy the Connecticut headlight requirement — the full headlight system (including taillights) must be activated. Connecticut's coastal and inland fog events make the weather-triggered headlight rule practically important.",
    },
    {
      question: "Connecticut's maximum speed limit on rural limited-access highways is:",
      options: [
        "55 mph — Connecticut maintains a strict 55 mph maximum statewide on all highways",
        "60 mph — a compromise between the old 55 mph and higher western standards",
        "65 mph — Connecticut's maximum on rural interstates and divided expressways",
        "70 mph — Connecticut raised its limit to match neighboring states in recent years",
      ],
      correctIndex: 2,
      explanation:
        "Connecticut's maximum speed limit is 65 mph on rural limited-access highways (interstates and divided expressways outside urban areas). Much of Connecticut's interstate system passes near densely populated areas and is posted at 55 mph — including the Merritt Parkway, which is posted at 55 mph throughout. The 65 mph maximum reflects Connecticut's smaller geographic size, higher traffic density, and the proximity of 'rural' highway segments to populated areas. Connecticut law enforcement consistently ranks among states with higher per-capita traffic enforcement activity.",
    },
  ],
  faqs: [
    {
      question: "Why was Connecticut the first state to ban handheld phones while driving, and how has the law changed?",
      answer:
        "Connecticut enacted its handheld phone ban (CGS § 14-296aa) effective July 1, 2001 — in response to research linking handheld phone use to crash risks comparable to drunk driving. At the time, only a handful of localities had similar restrictions. Connecticut's 2001 law originally banned handheld calls. A 2013 amendment added texting. The 2021 expansion made Connecticut's law one of the broadest in the nation: all physical contact with a held wireless device while driving is now prohibited — any touching of a held phone, for any reason. Fines: $150 (first), $300 (second), $500 (third+). Connecticut has nearly 25 years of enforcement history under this law.",
    },
    {
      question: "What vehicles are completely prohibited on Connecticut's Merritt Parkway?",
      answer:
        "Route 15 (Merritt Parkway in Fairfield County; Wilbur Cross Parkway in New Haven County) prohibits: all commercial vehicles of any type, all trucks regardless of size, all buses (with very limited exceptions for specific transit routes), all RVs and motorhomes, all vehicles towing trailers, and any vehicle with commercial plates or exceeding 1 ton. Passenger cars, minivans, SUVs without commercial use, and motorcycles are permitted. The restriction exists because bridge clearances can be as low as 9 feet — well below the 16-foot federal standard. GPS devices frequently route trucks onto Route 15, causing bridge strikes that close the Parkway.",
    },
    {
      question: "How does Connecticut's mandatory first-offense OUI IID requirement work?",
      answer:
        "After any first OUI conviction in Connecticut, the driver must install an ignition interlock device (IID) for a minimum of 45 days before the license can be reinstated. The IID requires a clean breath sample to start the vehicle and demands random retests while driving. Second OUI: 1-year IID. Third OUI: 3-year IID. Attempting to circumvent the IID extends the requirement and creates additional criminal exposure. Connecticut's first-offense IID mandate was enacted earlier than most states and remains one of the more comprehensive immediate-IID requirements nationally.",
    },
    {
      question: "What is Connecticut's dual implied consent penalty for refusing a chemical test?",
      answer:
        "Connecticut's implied consent law (CGS § 14-227b) imposes two simultaneous penalties for a first test refusal: (1) a 45-day administrative license suspension, and (2) a 1-year ignition interlock device requirement upon reinstatement. Both consequences flow from the refusal alone — separate from any criminal OUI case. Second refusal within 10 years: same 45-day suspension plus a 3-year IID. The combination of suspension AND IID from a single refusal makes Connecticut's implied consent system one of the more consequential in the country — refusing may result in worse outcomes than cooperating.",
    },
    {
      question: "What is Connecticut's GDL program for teen drivers?",
      answer:
        "Connecticut GDL: (1) Learner's permit at 16 — 120-day minimum hold if completing a full driver-ed program (commercial/secondary school), or 180 days otherwise; 40 hours of behind-the-wheel training with an instructor or qualifying family member at least 20 years old with 4+ years licensed; while holding the permit, a 16-/17-year-old may not have any passengers except the instructor or a qualifying trainer. (2) After licensing — an 11PM–5AM curfew (exceptions for employment, school, religious activities, medical necessity, Safe Ride Program) and a two-tier passenger restriction: first 6 months limited to an instructor, parent/guardian, or one qualifying person 20+; months 7-12 additionally allow immediate family. (3) Restrictions lift at age 18.",
    },
    {
      question: "What is Connecticut's right-of-way rule at an uncontrolled intersection?",
      answer:
        "Connecticut law (CGS § 14-245) gives right of way at an uncontrolled intersection (no signs, no signals, no officer) to the vehicle approaching from the RIGHT when two vehicles arrive at approximately the same time. The driver on the left must yield. At T-intersections, the vehicle on the through road has right of way over vehicles entering from a side road. These rules apply in Connecticut's many older urban areas where intersections may lack signage.",
    },
    {
      question: "What are Connecticut's minimum auto insurance requirements?",
      answer:
        "Connecticut requires minimum liability coverage of 25/50/25: $25,000 bodily injury per person, $50,000 per accident, $25,000 property damage. Connecticut also requires uninsured motorist coverage of at least 25/50 ($25,000 per person, $50,000 per accident). Proof of insurance must be in the vehicle at all times. Connecticut's electronic insurance verification system allows DMV and law enforcement to check coverage status in real time. SR-22 certificates are required for OUI-related reinstatements.",
    },
    {
      question: "How long must a Connecticut learner's permit be held and what supervision is required?",
      answer:
        "A Connecticut learner's permit must be held for at least 120 days if the applicant completes a full driver-ed program through a licensed commercial driving school or secondary school program (30 hours classroom + 8 hours behind-the-wheel minimum); all other 16-/17-year-old applicants must hold the permit at least 180 days. Either way, the applicant must complete at least 40 hours of behind-the-wheel, on-the-road training. The instructor — whether a commercial driving school professional or a qualifying home-training family member — must be a licensed driver at least 20 years old with 4 or more consecutive years of licensure and no suspensions in that period, seated in the front passenger seat while the permit holder drives.",
    },
    {
      question: "What is Connecticut's maximum highway speed limit and where does it apply?",
      answer:
        "Connecticut's maximum speed limit is 65 mph, which applies on rural limited-access highways — interstates and divided expressways outside of urban/congested areas. However, much of Connecticut's highway network passes through or near densely populated areas and is posted at 55 mph, including the Merritt Parkway (55 mph throughout) and many sections of I-95 and I-91 near cities. The 65 mph maximum applies on less-congested sections of I-84, I-91, and I-395 in less-populated areas.",
    },
    {
      question: "Does Connecticut's 2021 electronic device expansion cover GPS navigation?",
      answer:
        "Connecticut's 2021 expansion of CGS § 14-296aa prohibits any physical contact with a held electronic device while driving. GPS navigation on a mounted device (dashboard or windshield mount where the driver does not need to touch or hold the device) is permitted. Voice-activated navigation commands are permitted. The prohibition is on physical contact with a held device — not on GPS use itself. Programming a GPS before driving or at a red light with the vehicle in park is permitted. The key test: is the driver physically holding the device? If yes, it's prohibited.",
    },
  ],
  relatedTests: [
    { label: "CT Motorcycle Test", href: "/connecticut-motorcycle-practice-test" },
    { label: "CT CDL Test", href: "/connecticut-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function ConnecticutDMVPage() {
  return <PracticeTestPage {...data} />;
}
