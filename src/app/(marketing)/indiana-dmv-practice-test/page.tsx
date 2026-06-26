import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Indiana BMV Practice Test 2025 – Free IN Bureau of Motor Vehicles Permit Exam Prep",
  description:
    "Free Indiana BMV practice test based on the IN Driver's Manual. 34 questions, 82% passing score. State-specific questions on Indiana's Habitual Traffic Violator law, HEA 1070 hands-free rules, and graduated licensing. Pass your BMV test first try.",
  alternates: { canonical: "https://caredmvprep.com/indiana-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/indiana-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Indiana",
  stateAbbr: "IN",
  testLabel: "BMV Knowledge Test",
  slug: "indiana-dmv-practice-test",
  headline: "Indiana BMV Practice Test 2025",
  intro:
    "Indiana's Bureau of Motor Vehicles (BMV) — not a DMV — administers the 34-question knowledge test required for a learner's permit. This free practice test focuses on Indiana's Habitual Traffic Violator designation, HEA 1070 hands-free law, and the graduated licensing system for drivers under 18.",
  basedOn: "Indiana BMV Driver's Manual (current edition)",
  keyRules: [
    { icon: "⚖️", rule: "HTV: 10 violations = lifetime suspension", detail: "10 major violations in 10 years = lifetime suspension under Indiana's Habitual Traffic Violator law (IC 9-30-10). Reinstatement requires court petition after 10 years." },
    { icon: "📱", rule: "Hands-free required (HEA 1070)", detail: "All drivers banned from holding or supporting a device with any body part while driving; effective July 1, 2020. First violation: Class C infraction ($500 fine)." },
    { icon: "🚗", rule: "Level 1 Learner Permit at 15", detail: "Issued at 15; must hold for 180 days minimum with supervised driving before progressing to Level 2 Probationary License at age 16½." },
    { icon: "🌙", rule: "Level 2: midnight–5AM curfew", detail: "Under 18: no more than 1 non-family passenger under 25 during first 180 days, no driving midnight–5AM unless for work, school, or emergency." },
    { icon: "🍺", rule: "OWI threshold: 0.08% adults", detail: "0.08% BAC for adults; 0.02% for under-21; 0.04% for CDL holders in a CMV. Indiana uses OWI (Operating While Intoxicated) terminology." },
    { icon: "📋", rule: "18 points in 2 years = suspension", detail: "18 points accumulated in 24 months triggers a 1-year license suspension. Reckless driving adds 8 points immediately; most moving violations add 2–4 points." },
    { icon: "🚨", rule: "Move Over: 25 mph below posted limit", detail: "Move one lane away or slow to 25 mph under the posted limit when passing stopped emergency or utility vehicles. Violation = Class C misdemeanor." },
    { icon: "🧪", rule: "Implied consent: 1-year refusal suspension", detail: "Refusing a chemical test results in a 1-year suspension for the first refusal, 2 years for the second. This suspension runs alongside any criminal OWI sentence." },
  ],
  about: [
    "Indiana licenses are issued through the Bureau of Motor Vehicles (BMV) — not a Department of Motor Vehicles (DMV). The BMV administers the 34-question knowledge test, which is divided into two sections: road rules and road signs. You must answer at least 28 questions correctly (82%) to pass. The test is available at any BMV branch; no appointment is required at most locations. Indiana does not currently offer the standard knowledge test online, but the BMV does allow online renewals for qualified drivers. If you fail the knowledge test, you must wait one day before retesting. After three failures, you must wait 30 days.",
    "Indiana's Habitual Traffic Violator (HTV) law (IC 9-30-10) is one of the most consequential driver accountability systems in the United States. A driver who accumulates 10 major violations within a 10-year period is classified as an HTV and faces a lifetime license suspension — with reinstatement available only after 10 years and a court petition. Major violations include DUI/OWI, reckless driving causing injury, and leaving the scene of an accident. Even intermediate HTV status (2 major violations in 10 years, or 10 total violations) triggers a 10-year suspension. Indiana BMV exam questions frequently address the point system and HTV consequences. A single reckless driving conviction adds 8 points; accumulating 18 points within 24 months triggers a 1-year suspension. Understanding the point system is essential for the test and for long-term license retention.",
    "Indiana adopted HEA 1070 (House Enrolled Act 1070) in 2020, which took effect July 1, 2020, banning all drivers from holding or supporting a wireless device with any part of the body while operating a vehicle. Bluetooth, hands-free earpieces, and dashboard-mounted navigation are permitted. A first violation is a Class C infraction ($500 fine); if a person is injured or killed as a result of the violation, it becomes a Class A infraction ($10,000 fine). Indiana's graduated licensing system requires drivers under 18 to hold a Level 1 Learner Permit for at least 180 days, supervised at all times by a licensed adult 25 or older. Level 2 Probationary License holders under 18 face a curfew (midnight to 5AM) and passenger restrictions (no more than one non-family passenger under 25 during the first 180 days). A full unrestricted license is issued at 18.",
  ],
  sampleQuestions: [
    {
      question: "Under Indiana's Habitual Traffic Violator (HTV) law, what happens to a driver who accumulates 10 major violations within a 10-year period?",
      options: [
        "A 1-year suspension — the same as three DUI convictions",
        "Lifetime license suspension, with reinstatement only available after 10 years and a court petition",
        "A 5-year suspension followed by mandatory driving school",
        "A probationary license with an ignition interlock requirement for 3 years",
      ],
      correctIndex: 1,
      explanation:
        "Indiana's HTV law (IC 9-30-10) is among the strictest license accountability systems in the country. Ten major violations within 10 years results in lifetime suspension. The driver must wait 10 full years after designation before petitioning a court for reinstatement — and reinstatement is not guaranteed. Intermediate HTV status (2 major violations OR 10 any violations in 10 years) results in a 10-year suspension, not lifetime. Major violations include OWI/DUI, drag racing, criminal recklessness with a vehicle, and leaving the scene of an accident with injury.",
    },
    {
      question: "Indiana's HEA 1070 (2020) prohibits drivers from doing which of the following while operating a vehicle?",
      options: [
        "Using a GPS device mounted to the dashboard",
        "Talking on a phone through a Bluetooth earpiece",
        "Holding or physically supporting a wireless device with any part of the body",
        "Using a hands-free phone call through the vehicle's built-in speaker system",
      ],
      correctIndex: 2,
      explanation:
        "Indiana's hands-free law (HEA 1070, effective July 1, 2020) bans holding or supporting a wireless device with any part of the body — including resting a phone on a thigh or shoulder — while the vehicle is in operation. Bluetooth earpieces, hands-free speaker systems, and dashboard-mounted navigation units are all permitted. A first violation is a Class C infraction up to $500. If the violation contributes to an injury or death, penalties escalate significantly and may combine with other criminal charges.",
    },
    {
      question: "A Level 2 Probationary License holder in Indiana who is 16 years old wants to drive friends to a movie at 1AM on a Saturday. Is this permitted?",
      options: [
        "Yes, the Level 2 curfew applies only to weeknights",
        "Yes, the passenger restriction doesn't apply to drivers who hold a Level 2 license for more than 180 days",
        "No — the curfew (midnight to 5AM) applies regardless of the day of the week unless an exception applies",
        "No — Level 2 holders may never drive with passengers under 25 who are not immediate family",
      ],
      correctIndex: 2,
      explanation:
        "Indiana's Level 2 Probationary License curfew prohibits driving between midnight and 5AM regardless of the day of the week. Exceptions exist for driving to/from work, school, a religious organization, or an emergency — and the driver must carry documentation. The passenger restriction (no more than one passenger under 25 who is not an immediate family member) applies during the first 180 days of holding the Level 2 license. After 180 days, the passenger restriction lifts — but the midnight curfew remains until the driver turns 18.",
    },
    {
      question: "An Indiana driver accumulates 18 points within a 24-month period. What does Indiana BMV do?",
      options: [
        "Issue a warning letter — no suspension until 20 points are reached",
        "Require the driver to attend a defensive driving course and reduce points by 4",
        "Suspend the driver's license for 1 year",
        "Suspend for 30 days and require a retest of the knowledge exam",
      ],
      correctIndex: 2,
      explanation:
        "Indiana's point suspension threshold is 18 points within 24 months — at that level, the BMV suspends the driver's license for 1 year. Points accumulate based on moving violations: reckless driving (8 pts), DUI/OWI (8 pts), speeding 1–15 mph over limit (2 pts), speeding 16–25 mph over limit (4 pts). Attending a driver improvement program can remove up to 4 points from the record (once per 3 years). Indiana's point system resets — violations older than 24 months no longer count toward the suspension threshold.",
    },
    {
      question: "What does Indiana law require when a driver refuses a chemical test (breathalyzer or blood test) after a lawful OWI arrest?",
      options: [
        "The driver cannot be charged with OWI unless the officer also provides visual sobriety test evidence",
        "A first refusal results in a 1-year license suspension; a second refusal within 10 years results in a 2-year suspension",
        "Refusal results in a $500 fine but no license suspension for a first offense",
        "Indiana does not have an implied consent law — refusal cannot be penalized separately",
      ],
      correctIndex: 1,
      explanation:
        "Indiana's Implied Consent Law (IC 9-30-6) means that any person operating a vehicle on Indiana roads has already consented to chemical testing if lawfully arrested for OWI. Refusing a breathalyzer or blood test on a first offense results in a 1-year administrative license suspension — separate from any criminal OWI charge. A second refusal within 10 years: 2-year suspension. The refusal can also be used as evidence against the driver in a criminal OWI trial. This suspension runs alongside (not instead of) any criminal OWI sentence.",
    },
    {
      question: "Indiana's OWI law sets which BAC threshold for drivers under 21?",
      options: [
        "0.08% — same as adult drivers, Indiana uses a uniform standard",
        "0.04% — Indiana's intermediate threshold applies to underage drivers",
        "0.02% — Indiana's zero-tolerance law for drivers under 21",
        "0.00% — any detectable alcohol in Indiana is illegal for under-21 drivers",
      ],
      correctIndex: 2,
      explanation:
        "Indiana uses a 0.02% BAC threshold for drivers under 21 — not true zero-tolerance (0.00%), but close. A reading of 0.02% or higher for a driver under 21 triggers OWI consequences under Indiana's Youth Alcohol Law (IC 9-30-5-8.5). This is designed to effectively prohibit alcohol for underage drivers (since trace amounts from mouthwash or other products wouldn't typically reach 0.02%) while maintaining a realistic legal standard. Adult drivers face the federal standard of 0.08%. CDL holders in a commercial motor vehicle face 0.04% regardless of age.",
    },
    {
      question: "What does Indiana law require of a driver when a funeral procession is moving through an intersection?",
      options: [
        "Yield only if the lead vehicle has flashing lights — otherwise treat it as regular traffic",
        "Funeral processions have no special right-of-way in Indiana; each vehicle must obey traffic signals independently",
        "Drivers must yield to the entire procession once the lead vehicle has lawfully entered the intersection, even if a light changes",
        "Drivers must stop and wait at least 500 feet from any funeral procession vehicle",
      ],
      correctIndex: 2,
      explanation:
        "Indiana law (IC 9-21-14) gives funeral processions a continuous right-of-way once the lead vehicle has lawfully entered an intersection. All other vehicles must yield and allow the entire procession to pass — even if a traffic signal changes from green to red mid-procession. Cutting into or through a funeral procession is illegal. Procession vehicles must use headlights to be identified. Indiana is among the states that codify this right explicitly to prevent funeral cortèges from being separated by traffic. The BMV knowledge test has included questions about funeral procession right-of-way.",
    },
    {
      question: "A driver is cited for speeding 20 mph over the posted speed limit in Indiana. How many points does this add to their driving record?",
      options: [
        "2 points — the same as any speeding violation in Indiana",
        "4 points — Indiana's tier for 16–25 mph over the limit",
        "6 points — Indiana adds extra points for excessive speeding",
        "8 points — Indiana treats 20 mph over as equivalent to reckless driving",
      ],
      correctIndex: 1,
      explanation:
        "Indiana's point schedule: 1–15 mph over the speed limit = 2 points; 16–25 mph over = 4 points; 26+ mph over = 6 points. Reckless driving adds 8 points regardless of speed. Speeding 20 mph over the limit falls in the 16–25 tier and adds 4 points. If a driver is approaching 18 points within 24 months, a 4-point citation could be the violation that triggers suspension. Indiana drivers can take a court-approved driver improvement course to reduce their point total by up to 4 points, but only once every 3 years.",
    },
    {
      question: "In Indiana, what is the maximum speed limit on rural interstate highways?",
      options: [
        "65 mph — Indiana maintains a uniform 65 mph limit on all state highways",
        "70 mph — the standard Indiana rural interstate limit",
        "75 mph — Indiana recently raised its rural interstate limit",
        "80 mph — Indiana matches Texas and western states at 80 mph",
      ],
      correctIndex: 1,
      explanation:
        "Indiana's maximum speed limit on rural interstate highways is 70 mph. Urban interstate sections (typically through cities and their suburbs) are posted at 55 mph or 65 mph. State roads and two-lane highways vary but are generally 55 mph in rural areas. Indiana has not raised its rural interstate limit beyond 70 mph. Always observe posted speed limits — the maximum limit only applies when road and weather conditions are good; Indiana's Basic Speed Rule also requires traveling at a speed that is safe for actual conditions regardless of the posted limit.",
    },
    {
      question: "Indiana requires headlights to be used in which of these situations beyond standard nighttime driving?",
      options: [
        "Only when visibility is less than 500 feet due to any condition including rain, fog, or smoke",
        "Only during heavy snow — Indiana does not require headlights in light rain",
        "Headlights are required whenever windshield wipers are needed due to weather conditions, and when visibility is reduced below 500 feet",
        "Indiana has no specific headlight requirement beyond sunset-to-sunrise",
      ],
      correctIndex: 2,
      explanation:
        "Indiana law (IC 9-21-7-2) requires headlights from sunset to sunrise AND whenever weather conditions reduce visibility to 500 feet or less — including rain, fog, smoke, and snow. Additionally, Indiana requires headlights to be on whenever windshield wipers are in use due to precipitation. This 'wipers on = headlights on' rule is tested on the BMV knowledge exam. Daytime running lights do not automatically satisfy the headlight requirement in all vehicles — the full headlight system (including taillights) must be activated.",
    },
  ],
  faqs: [
    {
      question: "What is Indiana's Habitual Traffic Violator (HTV) designation and how does it affect my license?",
      answer:
        "Indiana's HTV law (IC 9-30-10) creates two levels of classification. Intermediate HTV: 2 major violations within 10 years, OR 10 total violations within 10 years — results in a 10-year license suspension. Habitual (full) HTV: 10 major violations within 10 years — results in a lifetime suspension, with reinstatement eligibility after 10 years via court petition only. Major violations include OWI, reckless driving causing injury, leaving the scene of an accident, and criminal recklessness with a vehicle. The HTV designation is one of the most consequential license accountability laws in the nation.",
    },
    {
      question: "Is the Indiana BMV knowledge test divided into sections, and do I need to pass each section separately?",
      answer:
        "Indiana's 34-question knowledge test covers road rules and road sign identification. While the test is administered as a single session, questions draw from both subject areas. You need 28 correct answers (82%) overall — there is no separate minimum for each category within the standard knowledge test. If you fail, you must wait one day before retesting. After three failures within any testing period, BMV requires a 30-day waiting period before you can test again.",
    },
    {
      question: "What are the specific passenger and curfew restrictions for Indiana's Level 2 Probationary License?",
      answer:
        "Level 2 Probationary License holders under 18 face two main restrictions: (1) Curfew: no driving between midnight and 5AM, unless the trip is to/from work, school, a religious organization, or an emergency requiring documentation; (2) Passenger restriction for the first 180 days: no more than one non-family passenger who is under 25. Immediate family members (parents, siblings) are exempt from the passenger limit. After 180 days on Level 2, the passenger restriction lifts — but the midnight curfew continues until the driver turns 18.",
    },
    {
      question: "Does Indiana have a hands-free phone law for all drivers or just minors?",
      answer:
        "Indiana's HEA 1070 (effective July 1, 2020) applies to ALL drivers regardless of age. Holding or physically supporting a wireless device with any body part while driving is prohibited. Hands-free Bluetooth, earpieces, and dashboard-mounted devices are legal. A first violation is a Class C infraction with fines up to $500. If the violation contributes to injury or death, penalties are significantly higher. The law was enacted after years of being one of the few states without a comprehensive handheld ban.",
    },
    {
      question: "What is Indiana's waiting period and process after failing the BMV knowledge test?",
      answer:
        "After failing Indiana's knowledge test, you must wait at least one full day before retesting. If you fail three times within a testing period, you must wait 30 days before attempting again. There is no limit on the total number of attempts, but the 30-day cooling-off period after three failures encourages genuine study between attempts. Most BMV branches allow walk-in testing — check the Indiana BMV website (in.gov/bmv) for branch hours and any appointment requirements at specific locations.",
    },
    {
      question: "What documents does Indiana require to obtain a learner's permit?",
      answer:
        "Indiana uses the REAL ID documentation system. You must bring: (1) proof of identity (certified U.S. birth certificate or U.S. passport); (2) proof of Social Security Number (Social Security card, W-2, or pay stub showing full SSN); (3) two proofs of Indiana residency (utility bills, bank statements, school records); (4) if under 18, a completed and signed parental consent form (BMV Form 54020). All documents must be originals or certified copies — photocopies are not accepted.",
    },
    {
      question: "How do Indiana's OWI (Operating While Intoxicated) conviction points work?",
      answer:
        "An OWI conviction in Indiana adds 8 points to the driver's record — the maximum single-offense point value in Indiana's system. Since the suspension threshold is 18 points in 24 months, a single OWI places a driver 8/18ths of the way to suspension on top of the criminal penalties. Indiana's OWI penalties: first offense (Class C misdemeanor) — up to 60 days jail, $500 fine, 90–180 day license suspension. With a prior conviction or child in the vehicle, charges escalate to Level 6 felony. OWI points stay on the record for the full 2-year accumulation window.",
    },
    {
      question: "What is Indiana's minimum supervised driving requirement for a Level 1 learner permit?",
      answer:
        "Indiana does not specify a mandatory number of supervised driving hours at the state level for the Level 1 Learner Permit — unlike some states that require 40, 50, or 60 hours. Instead, Indiana requires that the Level 1 permit be held for a minimum of 180 consecutive days before progressing to a Level 2 Probationary License. The permit must be held continuously — losing and reacquiring the permit resets the 180-day clock. An approved driver education course is strongly recommended and reduces insurance costs, but is not mandated by the state.",
    },
    {
      question: "What are Indiana's rules for passing a vehicle on a two-lane highway?",
      answer:
        "Indiana law requires that you only pass when it is safe to do so and visibility is clear. Passing is prohibited: over a solid yellow centerline on your side, within 100 feet of an intersection or railroad crossing, on a hill crest or curve where you cannot see oncoming traffic, in a no-passing zone marked with signs or road markings, and when there is not enough distance to complete the pass before oncoming traffic arrives. You must signal, accelerate to a safe passing speed, return to your lane with at least 200 feet clearance before the vehicle you passed, and cancel your signal.",
    },
    {
      question: "How does Indiana handle out-of-state traffic violations on an Indiana driving record?",
      answer:
        "Indiana participates in the Driver License Compact (DLC) and the Non-Resident Violator Compact. Traffic violations received in other states are reported to Indiana BMV and can result in Indiana points being added to your record — as if the violation occurred in Indiana. The number of points assigned matches the equivalent Indiana violation, not necessarily the other state's point value. OWI/DUI convictions from other states are treated as equivalent to Indiana OWI for HTV designation purposes. This means a DUI in another state counts toward Indiana's HTV threshold.",
    },
  ],
  relatedTests: [
    { label: "IN Motorcycle Test", href: "/indiana-motorcycle-practice-test" },
    { label: "IN CDL Test", href: "/indiana-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function IndianaDMVPage() {
  return <PracticeTestPage {...data} />;
}
