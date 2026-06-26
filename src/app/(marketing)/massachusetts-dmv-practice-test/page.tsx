import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Massachusetts DMV Practice Test 2025 – Free MA RMV Knowledge Exam Prep",
  description:
    "Free Massachusetts RMV practice test based on the 2025 Massachusetts Driver's Manual. 25 questions, 72% to pass — one of the lowest thresholds nationally. Covers OUI vs DUI, rotary right-of-way (MGL c. 89 § 8), Melanie's Law IID, 4-foot cyclist passing rule, and the Junior Operator License.",
  alternates: { canonical: "https://caredmvprep.com/massachusetts-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/massachusetts-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Massachusetts",
  stateAbbr: "MA",
  testLabel: "Driver's License Knowledge Test",
  slug: "massachusetts-dmv-practice-test",
  headline: "Massachusetts RMV Practice Test – Registry of Motor Vehicles Knowledge Exam",
  intro:
    "Massachusetts driver's licenses are issued by the Registry of Motor Vehicles (RMV) — 'Registry,' not 'DMV' or 'Department.' The RMV administers a 25-question test passing at 72% (18/25), one of only a handful of states below the 80% national standard. This free practice test targets content unique to Massachusetts: rotary right-of-way under MGL c. 89 § 8 (vehicles inside the rotary have priority over entering vehicles), OUI terminology instead of DUI or DWI, Melanie's Law mandatory IID requirements, the 4-foot minimum cyclist passing clearance (more than most states' 3-foot rule), and the Junior Operator License (JOL) with its 12:30 AM curfew.",
  basedOn: "2025 Massachusetts Driver's Manual",
  about: [
    "Massachusetts driver's licenses are issued by the Registry of Motor Vehicles (RMV) — one of the few remaining state agencies that still uses the term 'Registry' rather than 'Division' or 'Department.' The RMV is part of MassDOT (Massachusetts Department of Transportation). The knowledge test consists of 25 multiple-choice questions and requires a minimum of 18 correct answers — a 72% passing score. Massachusetts is one of only a handful of states that passes at below 80%, making the MA test slightly more forgiving on scoring than most. However, the content is highly Massachusetts-specific, covering unique state laws that require dedicated study.",
    "Massachusetts uses the term OUI (Operating Under the Influence) for all impaired driving charges — not DUI, not DWI. Under MGL c. 90 § 24, OUI covers impairment from alcohol, drugs, or any intoxicating substance. The standard adult OUI threshold is 0.08% BAC. Melanie's Law (Chapter 122 of the Acts of 2005) — named for 13-year-old Melanie Powell, killed by a repeat OUI offender — mandates an ignition interlock device for all second OUI convictions and for first-time OUI offenders who choose early license reinstatement before the full suspension period ends. Melanie's Law also established lifetime lookback for OUI convictions in Massachusetts. Massachusetts's rotary (traffic circle) right-of-way rule under MGL c. 89 § 8 gives priority to vehicles already circulating inside the rotary — entering vehicles must yield — which is the modern roundabout convention but was a change from older rotary rules and is specifically tested.",
    "Massachusetts has several distinctive road laws. The state's 2022 safe passing law requires drivers to give cyclists at least 4 feet of clearance when passing — more than most states' 3-foot standard. The Massachusetts Hands-Free Law (MGL c. 90 § 13B, effective February 23, 2020) prohibits all handheld device use while driving, with a second-offense mandatory driver education requirement that is unusual nationally. The Junior Operator License (JOL) restricts holders from driving 12:30 AM to 5 AM until they turn 18 — the 12:30 AM start time (rather than the more common midnight or 11 PM) makes Massachusetts's JOL curfew one of the later-starting nighttime restrictions in the country. At unmarked intersections with no signs or signals, the driver on the right has the right of way.",
  ],
  keyRules: [
    { icon: "🔄", rule: "Rotary right-of-way: inside traffic has priority (MGL c. 89 § 8)", detail: "Massachusetts rotary rule: vehicles already circulating INSIDE the rotary have the right of way. Entering vehicles must yield to all circulating traffic. Massachusetts has more rotaries per capita than almost any other state." },
    { icon: "🍺", rule: "OUI terminology — not DUI or DWI (MGL c. 90 § 24)", detail: "Massachusetts uses OUI (Operating Under the Influence) — enforced by Massachusetts State Police. Adult threshold: 0.08% BAC. Under 21: 0.02%. Melanie's Law mandates IID for second OUI and early first-offense reinstatement." },
    { icon: "🔑", rule: "Melanie's Law: mandatory IID for second OUI and early reinstatement", detail: "Named for 13-year-old Melanie Powell, killed by a repeat OUI offender. Chapter 122 of 2005: IID required for all second OUI convictions AND for first offenders who seek early license reinstatement. Lifetime lookback for OUI convictions." },
    { icon: "🚲", rule: "4-foot minimum cyclist passing clearance (2022 law)", detail: "Massachusetts requires drivers to give cyclists at least 4 feet of clearance when passing — stricter than most states' 3-foot standard. The 4-foot rule was enacted in 2022 and appears in updated MA handbooks." },
    { icon: "📵", rule: "Hands-Free Law: 2nd offense requires driver education (MGL c. 90 § 13B)", detail: "MA hands-free law (effective Feb 23, 2020): $100 (1st), $250 + mandatory driver education course (2nd), $500 + education + insurance surcharge (3rd+). The mandatory education for second offense is a distinctive MA provision." },
    { icon: "🚶", rule: "Pedestrians have right of way in marked AND unmarked crosswalks", detail: "Massachusetts requires drivers to stop for pedestrians in both marked AND unmarked crosswalks at intersections. The obligation exists even at green lights if pedestrians are in the crosswalk. Among the strongest pedestrian laws in the U.S." },
    { icon: "👦", rule: "Learner's permit at 16 — 6 months + 40 hours required (10 at night)", detail: "MA permit available at exactly 16 years old. Must hold 6 months minimum and log 40 supervised hours (10 at night) with a licensed adult 21+ who has held a license for at least 1 year." },
    { icon: "🌙", rule: "JOL curfew: 12:30 AM–5 AM until age 18", detail: "Massachusetts Junior Operator License (JOL): no driving 12:30 AM–5 AM until age 18 (unless with a licensed adult 21+ with 1+ year of license). The 12:30 AM start is one of the later-starting curfews nationally." },
  ],
  sampleQuestions: [
    {
      question: "Under Massachusetts law (MGL c. 89 § 8), who has the right of way in a rotary (traffic circle)?",
      options: [
        "Entering vehicles have the right of way — they merge into the circle with priority over circulating traffic",
        "Vehicles already circulating INSIDE the rotary have the right of way — entering vehicles must yield",
        "The vehicle approaching from the right at the entry point has the right of way",
        "Right of way is determined by the size of the vehicle — larger vehicles always have priority",
      ],
      correctIndex: 1,
      explanation:
        "Massachusetts General Laws c. 89 § 8 establishes that vehicles already circulating inside a rotary (traffic circle or roundabout) have the right of way over vehicles entering the rotary. Drivers approaching a rotary must slow down, yield to circulating traffic, and merge in when safe. Massachusetts has a higher density of rotaries than nearly any other state. The rotary right-of-way rule is one of the most frequently tested topics on the Massachusetts RMV knowledge exam.",
    },
    {
      question: "Massachusetts uses what specific term for impaired driving charges instead of DUI or DWI?",
      options: [
        "DWI — Driving While Intoxicated, consistent with New England states",
        "OWI — Operating While Intoxicated, specific to Massachusetts",
        "OUI — Operating Under the Influence, under MGL c. 90 § 24",
        "DUI — Massachusetts follows the majority national terminology",
      ],
      correctIndex: 2,
      explanation:
        "Massachusetts uses OUI — Operating Under the Influence — as the official impaired driving charge under MGL c. 90 § 24. This terminology applies to impairment from alcohol, drugs, or any intoxicating substance. The standard adult OUI threshold is 0.08% BAC. Under-21 drivers face a 0.02% limit. Massachusetts State Police are the primary OUI enforcement agency, particularly on state highways. The term 'OUI' is consistent with Connecticut's terminology but different from most other U.S. states, which use DUI or DWI.",
    },
    {
      question: "What is Massachusetts's Melanie's Law (Chapter 122, 2005), and when does it require an ignition interlock device?",
      options: [
        "Melanie's Law requires IID only for third-offense OUI convictions in Massachusetts",
        "Melanie's Law requires IID for second OUI convictions AND for first-offense OUI drivers who seek early license reinstatement",
        "Melanie's Law applies only to drivers under 21 convicted of OUI",
        "Melanie's Law bans IID use and requires only alcohol education programs for OUI offenders",
      ],
      correctIndex: 1,
      explanation:
        "Massachusetts's Melanie's Law (Chapter 122 of the Acts of 2005) requires an ignition interlock device (IID) for all second OUI convictions AND for first-time OUI offenders who choose to restore their license before the full suspension period ends. The law is named for 13-year-old Melanie Powell, who was killed by a repeat OUI offender. Melanie's Law also established a lifetime lookback for OUI convictions in Massachusetts — meaning prior OUI offenses are counted regardless of how long ago they occurred.",
    },
    {
      question: "Massachusetts's minimum passing score on the RMV knowledge test is:",
      options: ["80% (20/25 correct)", "76% (19/25 correct)", "72% (18/25 correct)", "70% (17.5/25 correct)"],
      correctIndex: 2,
      explanation:
        "Massachusetts requires at least 18 correct answers out of 25 — a 72% passing score. This is notably lower than the 80% standard used by most states, making the MA test somewhat more forgiving on scoring. However, the content is highly Massachusetts-specific — covering OUI terminology, JOL restrictions, rotary right-of-way, Melanie's Law, the 4-foot cyclist passing rule, and the hands-free law — so thorough preparation remains essential.",
    },
    {
      question: "Massachusetts's 2022 safe passing law requires drivers to give bicyclists how much clearance when passing?",
      options: [
        "2 feet minimum — the standard sidewalk clearance measure",
        "3 feet minimum — the same standard used by most other states",
        "4 feet minimum — stricter than most states' 3-foot standard",
        "5 feet minimum — Massachusetts has the strictest cyclist passing clearance in the Northeast",
      ],
      correctIndex: 2,
      explanation:
        "Massachusetts's 2022 safe passing law requires drivers to give bicyclists at least 4 feet of clearance when passing. This is more than the 3-foot standard used by most other states that have enacted cycling protection laws. The 4-foot rule was added to updated Massachusetts Driver's Manuals following the 2022 legislation and is part of the knowledge test content. If 4 feet of clearance is not available without crossing into oncoming traffic, drivers should slow and follow the cyclist until it is safe to pass.",
    },
    {
      question: "Massachusetts's Hands-Free Law (MGL c. 90 § 13B, effective February 23, 2020) imposes what unique additional requirement for a second offense?",
      options: [
        "A license suspension of 30 days — no driving permitted during the suspension",
        "A mandatory driver education course in addition to a $250 fine",
        "A criminal misdemeanor charge filed with the court for a second offense",
        "An IID installation for 90 days to verify the driver does not use a phone while driving",
      ],
      correctIndex: 1,
      explanation:
        "Massachusetts's hands-free law (MGL c. 90 § 13B) has a distinctive second-offense provision: a $250 fine AND a mandatory distracted driver education program (approved by the RMV). A third or subsequent offense carries a $500 fine plus the mandatory education course AND an insurance surcharge. First offense: $100 fine only. The mandatory education requirement for a second offense is a provision not common in other states' handheld device laws.",
    },
    {
      question: "At an unmarked intersection in Massachusetts with no signs, signals, or traffic officers, who has the right of way when two vehicles arrive simultaneously?",
      options: [
        "The heavier vehicle — trucks and SUVs have priority at unmarked intersections",
        "The vehicle arriving first — first to the intersection gets the right of way",
        "The vehicle approaching from the right — Massachusetts's right-of-way rule gives priority to the vehicle on the right",
        "Neither vehicle — both must stop and wait for a traffic officer",
      ],
      correctIndex: 2,
      explanation:
        "At an unmarked intersection in Massachusetts where no sign, signal, or officer is present, and two vehicles arrive at approximately the same time, the vehicle approaching from the RIGHT has the right of way. The driver on the left must yield. This right-of-way rule is the same as in most U.S. states and reflects a standard rule to prevent ambiguity at uncontrolled intersections. Massachusetts tests this rule because Boston and other MA cities have many intersections without signage due to the irregular street grid.",
    },
    {
      question: "Massachusetts's Junior Operator License (JOL) restricts nighttime driving between what hours?",
      options: [
        "10 PM to 5 AM for the first 6 months only",
        "11 PM to 5 AM until the driver turns 17",
        "12:30 AM to 5 AM until the driver turns 18",
        "Midnight to 6 AM for the entire JOL period",
      ],
      correctIndex: 2,
      explanation:
        "Massachusetts JOL holders may not drive between 12:30 AM and 5 AM until they turn 18 — unless accompanied by a licensed adult 21 or older who has held a valid license for at least 1 year. The 12:30 AM curfew start is one of the later-starting nighttime restrictions among state GDL programs (most states use midnight or 11 PM). Exceptions apply for documented work, school activities, or emergencies. The curfew applies throughout the JOL period, not just the first few months.",
    },
    {
      question: "Massachusetts requires drivers to stop for pedestrians in crosswalks — does this obligation apply to unmarked crosswalks?",
      options: [
        "No — the Massachusetts pedestrian right-of-way law only applies at marked crosswalks with white lines",
        "Only at marked crosswalks with a Walk/Don't Walk signal",
        "Yes — Massachusetts requires drivers to stop for pedestrians in BOTH marked and unmarked crosswalks at intersections",
        "Only if the pedestrian is actually stepping off the curb — pedestrians waiting on the sidewalk do not trigger the obligation",
      ],
      correctIndex: 2,
      explanation:
        "Massachusetts law gives pedestrians the right of way in both marked AND unmarked crosswalks at intersections. An 'unmarked crosswalk' is the implied extension of the sidewalk across the intersection even if no painted lines are present. Drivers must stop for pedestrians who are crossing or about to cross — even at a green light if pedestrians are in the crosswalk. Massachusetts has some of the strongest pedestrian right-of-way protections in the country, and violations carry significant fines.",
    },
    {
      question: "At what age can a Massachusetts resident apply for a learner's permit, and how long must it be held?",
      options: [
        "15 years, 6 months; held for at least 6 months",
        "16 years old; held for at least 6 months with 40 supervised hours (10 at night)",
        "16 years old; held for at least 9 months with 50 supervised hours",
        "16 years, 6 months; held for at least 6 months",
      ],
      correctIndex: 1,
      explanation:
        "Massachusetts residents may apply for a learner's permit at exactly 16 years old — unlike many states that allow permits at 15 or 15½. The permit requires a minimum 6-month holding period and at least 40 hours of supervised driving (10 at night) with a licensed adult 21 or older who has held a valid license for at least 1 year. After fulfilling these requirements, applicants can take the road skills test to receive the Junior Operator License (JOL).",
    },
  ],
  faqs: [
    {
      question: "Why does Massachusetts use 'RMV' and 'Registry' instead of 'DMV'?",
      answer:
        "Massachusetts's motor vehicle licensing agency is the Registry of Motor Vehicles (RMV) — named when it was established in the early 20th century as a registry for recording vehicle ownership and licensing data. The 'Registry' name has been retained as a historical legacy. The RMV is part of MassDOT (Massachusetts Department of Transportation) and handles driver's licenses, vehicle registrations, and road safety programs. Visit mass.gov/rmv for RMV service center locations and appointments.",
    },
    {
      question: "What is OUI in Massachusetts and how does it differ from DUI in other states?",
      answer:
        "OUI — Operating Under the Influence — is Massachusetts's term for what other states call DUI or DWI. Under MGL c. 90 § 24, OUI applies to impairment from alcohol, drugs, or any intoxicating substance. The adult BAC threshold is 0.08%; under-21 threshold is 0.02%. The term 'Operating' (rather than 'Driving') in Massachusetts OUI law reflects the state's intent to cover situations where the vehicle engine is running even if the vehicle isn't moving — such as being intoxicated in a parked car with the engine on.",
    },
    {
      question: "How do Massachusetts rotaries work and why are they different from intersections?",
      answer:
        "Massachusetts rotaries (also called traffic circles or roundabouts) give the right of way to vehicles already circulating inside the rotary over vehicles attempting to enter (MGL c. 89 § 8). Entering drivers must yield to all circulating traffic, then merge when safe. Approach at reduced speed. In multi-lane rotaries, choose the correct lane before entering based on your exit. Massachusetts has more rotaries per capita than most U.S. states — they're a regular feature of the road network, especially in eastern Massachusetts.",
    },
    {
      question: "What is Melanie's Law and why is it significant for first-time OUI offenders?",
      answer:
        "Melanie's Law (Chapter 122 of 2005) was enacted after 13-year-old Melanie Powell was killed by a repeat OUI offender who had prior OUI convictions. The law: (1) requires IID for ALL second OUI convictions; (2) requires IID for FIRST-time OUI offenders who choose early license reinstatement before the full suspension period ends; (3) established lifetime lookback for OUI convictions; (4) lengthened license revocation periods for repeat offenders. First-offense OUI drivers who serve their full suspension period without early reinstatement do not automatically face IID.",
    },
    {
      question: "What is the Massachusetts Junior Operator License (JOL)?",
      answer:
        "The JOL is Massachusetts's provisional driving stage for drivers ages 16–17. After 6 months with a learner's permit and 40 supervised hours (10 at night), teens pass a road skills test to receive the JOL. JOL restrictions: no driving 12:30 AM–5 AM until age 18 (unless with a licensed adult 21+); no passengers under 18 (except immediate family) without a licensed adult in the front seat for the first 6 months. Any violation extends the restricted period by 1 year. The JOL lifts automatically at age 18.",
    },
    {
      question: "What is Massachusetts's 4-foot cyclist passing rule?",
      answer:
        "Massachusetts's 2022 safe passing law requires drivers to provide at least 4 feet of clearance when overtaking a bicyclist — one foot more than the 3-foot standard in most other states. If 4 feet of clearance requires crossing the center line, drivers must wait until oncoming traffic is clear. If 4 feet cannot be achieved safely at the current speed, drivers must slow and follow the cyclist until a safe passing opportunity exists. The law was enacted in response to cyclist fatalities on Massachusetts roads.",
    },
    {
      question: "What documents do I need at the Massachusetts RMV?",
      answer:
        "Massachusetts REAL ID applicants need: proof of identity (birth certificate or U.S. passport), proof of Social Security number (SS card, W-2, or tax return), and two proofs of Massachusetts residency (utility bills, bank statements, or lease agreements within 12 months). All documents must be originals or certified copies. Visit mass.gov/rmv for the complete document checklist and to schedule an appointment. Standard (non-REAL ID) licenses have different requirements.",
    },
    {
      question: "What are the hands-free law fines in Massachusetts and what is unique about the second offense?",
      answer:
        "Massachusetts hands-free law fines (MGL c. 90 § 13B): $100 (first offense), $250 plus mandatory RMV-approved distracted driver education course (second offense), $500 plus education course plus insurance surcharge (third or subsequent offense). The mandatory driver education requirement for a second offense is distinctive — most states only increase fines for repeat violations without requiring a course. The law applies to all drivers at all times, including when stopped at a red light.",
    },
    {
      question: "How long is a Massachusetts learner's permit valid?",
      answer:
        "A Massachusetts learner's permit is valid for 2 years from the date of issue. Most teen applicants complete the 6-month holding period and advance to the JOL within the permit's validity period. If the permit expires before the applicant advances, they must reapply and pass the knowledge test again. Unlike some states, Massachusetts does not allow permits before age 16.",
    },
    {
      question: "What is Massachusetts's default speed limit in thickly settled areas?",
      answer:
        "Massachusetts sets a default speed limit of 30 mph in 'thickly settled' districts (residential areas with buildings closely spaced along the road) and in business districts, under MGL c. 90 § 17. This is higher than many states' 25 mph default for similar areas. School zones typically carry a 20 mph limit when children are present. Rural roads without posted speed limit signs have a default of 50 mph in Massachusetts. Posted signs always override the default speed limits.",
    },
  ],
  relatedTests: [
    { label: "MA Motorcycle Test", href: "/massachusetts-motorcycle-practice-test" },
    { label: "MA CDL Test", href: "/massachusetts-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function MassachusettsDMVPage() {
  return <PracticeTestPage {...data} />;
}
