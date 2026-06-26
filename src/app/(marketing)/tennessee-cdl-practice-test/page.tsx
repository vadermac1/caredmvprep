import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Tennessee CDL Practice Test 2025 – Free TN TDOSHS Commercial License Exam Prep",
  description:
    "Free Tennessee CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your TN Department of Safety CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/tennessee-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/tennessee-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Tennessee",
  stateAbbr: "TN",
  testLabel: "CDL General Knowledge Test",
  slug: "tennessee-cdl-practice-test",
  headline: "Tennessee CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Tennessee CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Tennessee CDL Manual. All TN Department of Safety and Homeland Security (TDOSHS) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Tennessee CDL Manual",
  about: [
    "Tennessee CDL testing is administered by the Tennessee Department of Safety and Homeland Security (TDOSHS) at driver services centers throughout the state. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Tennessee CDL Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all Tennessee CDL applicants regardless of vehicle class or endorsements.",
    "Tennessee-specific CDL considerations include: Tennessee's Hands-Free Act (effective July 1, 2019) applies to CDL operators — commercial drivers also face federal FMCSA penalties up to $2,750 per handheld device violation in addition to Tennessee's state fines (which double in school zones and active emergency zones for CDL operators). Tennessee's DUI law applies at the federal 0.04% BAC threshold for CDL holders in a CMV. A DUI conviction in any vehicle triggers CDL disqualification. Tennessee's Move Over law (T.C.A. §55-8-132) is a Class B misdemeanor for all vehicles including commercial trucks.",
    "Tennessee is a major logistics hub — Memphis is one of the largest freight distribution centers in the United States, and Nashville has significant warehouse and distribution activity. Interstate highways I-40, I-24, I-65, and I-75 carry substantial commercial vehicle traffic. Tennessee's Appalachian and Smoky Mountain regions have steep grades and mountain passes that require CDL drivers to use proper downhill driving techniques. After passing General Knowledge, Tennessee CDL applicants must pass endorsement tests and skills tests at TDOSHS-approved sites. Tennessee CDLs are valid for 8 years.",
  ],
  sampleQuestions: [
    { question: "Tennessee CDL holders in a commercial motor vehicle face what BAC/DUI limit?", options: ["0.08% — same as standard DUI", "0.04% — the federal CDL threshold in a CMV", "0.02% — Tennessee's underage limit applies to all CDL holders", "Tennessee has no specific CDL BAC limit — only the standard DUI applies"], correctIndex: 1, explanation: "Tennessee CDL holders are subject to the federal 0.04% BAC limit while operating a commercial motor vehicle — half the standard adult DUI threshold of 0.08%. A DUI conviction in any vehicle (personal or commercial) triggers CDL disqualification under both FMCSA regulations and Tennessee law: 1-year disqualification for a first offense, lifetime for a second. Tennessee's implied consent law (test refusal = 1-year revocation) also applies to CDL holders." },
    { question: "Tennessee's Hands-Free Act applies to CDL operators. What additional consequences do commercial drivers face?", options: ["No additional consequences — only Tennessee's $50 first-offense fine applies", "FMCSA civil penalties up to $2,750 per violation plus potential CDL disqualification for multiple violations", "A mandatory 7-day CDL suspension by TDOSHS for a first Hands-Free Act violation", "CDL holders using navigation software in a CMV are exempt from the Hands-Free Act"], correctIndex: 1, explanation: "Tennessee's Hands-Free Act (effective July 1, 2019) applies to all drivers including CDL holders. CDL drivers in a CMV also face federal FMCSA penalties: civil penalties up to $2,750 per violation (49 CFR 392.82) and potential CDL disqualification for multiple violations. Both Tennessee's state fines and federal penalties apply simultaneously. In school zones and emergency zones, Tennessee's fines are doubled — CDL operators should be especially cautious in these zones." },
    { question: "Tennessee's I-40 Smoky Mountain sections have steep grades. What is the correct CDL driving technique for a long downgrade?", options: ["Apply the service brakes continuously to maintain a slow speed throughout the descent", "Downshift to a lower gear before the descent, use engine braking, and apply service brakes briefly and intermittently (snub braking)", "Use the trailer hand valve to control speed with the trailer brakes only", "Accelerate at the top of the grade to build momentum — then coast to the bottom"], correctIndex: 1, explanation: "On Tennessee's steep mountain grades (I-40 through the Smoky Mountains has several significant downgrades), the correct technique is: (1) choose the appropriate low gear BEFORE starting the descent; (2) use engine braking (engine compression) as the primary speed control; (3) apply service brakes briefly and intermittently (snub braking) when needed — apply, let speed drop below safe speed, release, allow speed to rise to safe speed, apply again. Never ride the brakes continuously — this causes brake fade (overheating) and potential brake failure on long Tennessee mountain descents." },
    { question: "Tennessee's Move Over law (T.C.A. §55-8-132) violation by a CDL operator is classified as:", options: ["A civil infraction with no criminal record", "A Class B misdemeanor — a criminal offense in Tennessee", "Only a federal FMCSA violation with no state criminal charge", "A parking violation equivalent in Tennessee"], correctIndex: 1, explanation: "Violating Tennessee's Move Over law is a Class B misdemeanor — a criminal offense. This applies to ALL vehicles including commercial trucks. CDL operators approaching a stationary emergency vehicle, law enforcement car, highway maintenance vehicle, or tow truck with activated warning lights must move one lane away or reduce speed below the posted limit if a lane change is not safely possible. A criminal Move Over conviction has implications for a CDL holder's record and future employment." },
    { question: "Memphis, Tennessee is a major freight hub. What unique CDL challenges exist in the Memphis area?", options: ["Memphis has no CDL-specific challenges beyond standard urban driving", "High commercial vehicle traffic density on I-40 and I-55 corridor, rail crossings in industrial areas, and bridge weight and height restrictions on Mississippi River crossings", "Memphis CDL drivers must obtain a special city permit to operate on downtown streets", "Memphis has no large trucks allowed within 5 miles of the city center"], correctIndex: 1, explanation: "The Memphis area presents CDL challenges: (1) extremely high commercial vehicle density on I-40, I-55, and I-240; (2) multiple Mississippi River bridges with specific weight and lane restrictions — CDL drivers must know their vehicle's weight and which bridge to use; (3) at-grade rail crossings in industrial districts that can block commercial vehicle routing; (4) warehouse district streets with low-clearance overhangs and loading dock configurations requiring careful maneuvering. Memphis is one of the nation's busiest freight markets, requiring CDL drivers to plan routes carefully." },
    { question: "What is Tennessee's CDL requirement regarding employer notification of traffic convictions?", options: ["CDL holders only need to notify employers if convicted of a CDL-disqualifying offense", "CDL holders must notify their employer within 30 days of any traffic conviction in any state in any vehicle", "Tennessee requires notification within 7 days — stricter than the federal 30-day standard", "No notification is required — FMCSA automatically notifies employers of CDL holder convictions"], correctIndex: 1, explanation: "FMCSA regulations (49 CFR 383.31) — adopted into Tennessee CDL law — require all CDL holders to notify their employer within 30 days of any traffic conviction in any state and in any vehicle (including personal vehicles). CDL holders must also notify the Tennessee TDOSHS within 30 days of any out-of-state conviction. Failure to notify is itself a disqualifying violation. Tennessee employers are required to review the FMCSA CDL Clearinghouse for drug/alcohol violations." },
    {
      question: "Under FMCSA hours-of-service rules, how many hours may a property-carrying driver drive after 10 consecutive hours off duty?",
      options: ["8 hours", "10 hours", "11 hours", "14 hours"],
      correctIndex: 2,
      explanation:
        "Property-carrying drivers may drive a maximum of 11 hours after taking 10 consecutive hours off duty. This is the 11-Hour Driving Limit. You must stop driving at the earlier of: after 11 hours of driving, or after the 14th hour since coming on duty.",
    },
    {
      question: "At 55 mph, how much distance does a fully loaded 80,000-lb tractor-trailer need to stop compared to a car?",
      options: ["About the same", "About 25% more", "Nearly twice as much", "Three to four times as much"],
      correctIndex: 2,
      explanation:
        "A fully loaded tractor-trailer traveling at 55 mph needs approximately 400 feet to stop — nearly twice the stopping distance of a passenger car at the same speed. Wet roads, worn brakes, or improper brake adjustment can dramatically increase this distance. Always maintain a large following distance.",
    },
    {
      question: "When must a vehicle display hazardous materials placards?",
      options: ["Only when carrying more than 1,000 lbs of hazmat", "Whenever any amount of a placard-required material is being transported", "Only on interstate highways", "Only when the material is in liquid form"],
      correctIndex: 1,
      explanation:
        "Hazardous materials placards must be displayed whenever you are transporting any quantity of a material that requires placarding under 49 CFR Part 172. There is no minimum weight threshold for placards — even small amounts of certain hazmat categories require placarding.",
    },
    {
      question: "Before backing under a trailer to couple, you should check that the trailer kingpin is:",
      options: ["Greased and at a 45-degree angle", "Straight and at the correct height for the fifth wheel", "Retracted into the trailer frame", "Centered over the rear axle"],
      correctIndex: 1,
      explanation:
        "Before coupling, ensure the trailer kingpin is straight (not bent or damaged) and that the trailer is at the correct height — low enough that the fifth wheel will contact the trailer plate and ride under the kingpin, but not so low that the tractor frame hits the trailer. Always check the kingpin and fifth wheel visually before coupling.",
    },
  ],
  faqs: [
    { question: "How many questions are on the Tennessee CDL General Knowledge test?", answer: "The Tennessee CDL test has 50 questions. You must answer at least 40 correctly — 80% — to pass. TDOSHS (Tennessee Department of Safety and Homeland Security) administers CDL testing at driver services centers and approved third-party sites throughout Tennessee." },
    { question: "What is Tennessee's DUI limit for CDL holders in a commercial vehicle?", answer: "Tennessee CDL holders operating a commercial motor vehicle are subject to the federal 0.04% BAC limit — half the standard adult DUI threshold of 0.08%. A DUI conviction in any vehicle triggers CDL disqualification: 1 year for a first offense, lifetime for a second. Tennessee's implied consent law also applies — test refusal results in a 1-year revocation." },
    { question: "How does Tennessee's Hands-Free Act affect CDL drivers?", answer: "Tennessee's Hands-Free Act (effective July 1, 2019) bans all handheld device use while driving — including for CDL operators in commercial vehicles. Commercial drivers also face federal FMCSA penalties up to $2,750 per violation. Fines in school zones and emergency zones are doubled. Both state and federal penalties apply simultaneously, and violations appear on the driver's PSP record." },
    { question: "What mountain driving techniques are tested for Tennessee CDL applicants?", answer: "Tennessee's CDL test includes questions on mountain driving for Appalachian and Smoky Mountain grades: (1) downshift to a lower gear BEFORE the descent — don't wait until you need to slow; (2) use engine braking as primary speed control; (3) apply service brakes briefly and intermittently (snub braking); (4) never ride the brakes continuously — brake fade causes complete failure on long descents; (5) use runaway truck ramps if brakes fail." },
    { question: "How long is a Tennessee CDL valid?", answer: "A Tennessee CDL is valid for 8 years. Your DOT medical certificate must remain current throughout the validity period. HazMat endorsements require TSA security clearance renewal every 5 years. Tennessee CDL holders must self-certify their medical status category annually at TDOSHS driver services." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Tennessee?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Tennessee?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Tennessee DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Tennessee CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Tennessee DMV for available language options.",
    },
    {
      question: "How long is a Tennessee CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Tennessee CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Tennessee CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Tennessee, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "TN Driver's License", href: "/tennessee-dmv-practice-test" },
    { label: "TN Motorcycle Test", href: "/tennessee-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function TennesseeCDLPage() {
  return <PracticeTestPage {...data} />;
}
