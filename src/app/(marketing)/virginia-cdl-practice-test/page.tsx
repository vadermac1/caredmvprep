import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Virginia CDL Practice Test 2025 – Free VA DMV Commercial License Exam Prep",
  description:
    "Free Virginia CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your VA DMV CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/virginia-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/virginia-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Virginia",
  stateAbbr: "VA",
  testLabel: "CDL General Knowledge Test",
  slug: "virginia-cdl-practice-test",
  headline: "Virginia CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Virginia CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Virginia CDL Manual. All VA DMV CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Virginia CDL Manual",
  about: [
    "The Virginia Department of Motor Vehicles (DMV) administers CDL testing at DMV customer service centers and approved third-party testing sites throughout Virginia. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Virginia CDL Manual. A passing score of 80% or higher — at least 40 correct answers — is required. This test is mandatory for all CDL applicants regardless of vehicle class or endorsements.",
    "Virginia-specific CDL considerations include: Virginia's hands-free law (§46.2-818.2, effective January 1, 2021) applies to all drivers including CDL holders — commercial drivers face federal FMCSA penalties of up to $2,750 per handheld device violation in addition to Virginia's state fine. Virginia's DUI law (0.08% BAC standard; 0.04% in a CMV) applies to commercial operators. A DUI conviction in any vehicle results in CDL disqualification under both FMCSA regulations and Virginia law. Virginia's Move Over law (§46.2-921.1) requires commercial vehicle operators to move over or reduce speed for stationary emergency and maintenance vehicles.",
    "After passing the General Knowledge test, Virginia CDL applicants must pass endorsement-specific knowledge tests and a skills test (pre-trip inspection, basic vehicle control, and on-road driving) in the appropriate vehicle class at a Virginia DMV-approved testing site. A current DOT medical certificate from an FMCSA National Registry-listed medical examiner must be maintained. Virginia CDLs are valid for 8 years for drivers age 21–64.",
  ],
  sampleQuestions: [
    { question: "Virginia CDL holders operating a commercial motor vehicle face a BAC limit of:", options: ["0.08% — same as standard DUI", "0.04%", "0.02%", "0.00% — no alcohol while in a CMV"], correctIndex: 1, explanation: "Virginia CDL holders are subject to a 0.04% BAC limit while operating a commercial motor vehicle — half the standard adult DUI limit. A DUI conviction in any vehicle (personal or commercial) triggers CDL disqualification: 1 year for a first offense, lifetime for a second. Virginia's DUI charges in any vehicle affect the CDL under both state law and FMCSA regulations." },
    { question: "Virginia's hands-free law (§46.2-818.2) applies to CDL operators — what additional federal penalty applies?", options: ["No federal penalty — only Virginia's state fine applies", "FMCSA civil penalties up to $2,750 per violation plus potential CDL disqualification", "A mandatory 30-day CDL suspension for a first offense", "Only a written warning for a first CDL handheld device violation"], correctIndex: 1, explanation: "Virginia's hands-free law applies to all drivers including CDL holders. CDL holders in a CMV also face federal FMCSA penalties: civil penalties up to $2,750 per violation (49 CFR 392.82) and potential CDL disqualification for multiple violations. Both Virginia's state fine and the federal penalty apply simultaneously. The violation appears on the driver's PSP record, which employers review during pre-employment screening." },
    { question: "Under FMCSA Hours of Service regulations, a property-carrying driver may drive a maximum of how many hours after 10 consecutive hours off duty?", options: ["8 hours", "10 hours", "11 hours", "14 hours"], correctIndex: 2, explanation: "FMCSA's 11-hour driving limit (49 CFR 395.3) allows property-carrying drivers to drive a maximum of 11 hours after 10 consecutive hours off duty. All driving must occur within a 14-hour on-duty window from the start of work. After 11 hours of driving OR after the 14-hour window closes — whichever comes first — the driver must take 10 consecutive hours off duty before driving again." },
    { question: "Virginia's Move Over law (§46.2-921.1) requires CDL operators approaching a stationary emergency vehicle to:", options: ["CDL vehicles are exempt from Move Over law", "Move one lane away or reduce speed to a safe level below the posted limit", "Only slow to 45 mph regardless of posted speed", "Stop completely until the emergency vehicle moves"], correctIndex: 1, explanation: "Virginia's Move Over law applies to ALL vehicles including commercial trucks. When approaching a stationary emergency, law enforcement, highway maintenance, or tow truck with activated lights, CDL operators must move one lane away or reduce speed below the posted limit if a lane change is not safely possible. Given the size and stopping distance of commercial vehicles, Move Over compliance is especially important near roadside emergencies." },
    { question: "What is 'brake fade' and what causes it in a commercial vehicle?", options: ["Brake fade is when brake pedal pressure becomes too light — caused by cold temperatures", "Brake fade is reduced braking effectiveness caused by overheated brakes — typically from continuous brake application on long downgrades", "Brake fade refers to ABS activation during emergency braking — it's a safety feature", "Brake fade occurs only in drum brakes — disc brakes are immune"], correctIndex: 1, explanation: "Brake fade is the progressive loss of braking effectiveness caused by overheated brakes. On long, steep downgrades, continuous brake application generates more heat than the brakes can dissipate — the brake lining material chemically changes under extreme heat, dramatically reducing friction. In severe cases, brakes can fail completely. Prevention: downshift to a lower gear before the descent, use engine braking to control speed, and apply brakes briefly and intermittently (snub braking) rather than continuously." },
    { question: "The FMCSA's 'out-of-service' order means:", options: ["A minor citation that the driver can address at the next scheduled maintenance stop", "The driver or vehicle cannot be operated until the violation is corrected or the driver's off-duty requirement is fulfilled", "Only the specific defective component must be tagged — the truck can still drive", "An out-of-service order requires only a supervisor's signature to override in an emergency"], correctIndex: 1, explanation: "An FMCSA out-of-service (OOS) order from a DOT inspector or enforcement officer means the driver or vehicle is prohibited from operating until the specific violation is corrected (for vehicle defects) or the required off-duty time is taken (for hours-of-service violations). Operating under an OOS order is a serious federal violation with civil penalties. Vehicle OOS violations include defective brakes, tire failures, and lighting defects that affect safe operation." },
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
    { question: "How many questions are on the Virginia CDL General Knowledge test?", answer: "The Virginia CDL test has 50 questions. You must answer at least 40 correctly — 80% — to pass and advance to endorsement tests and the skills test." },
    { question: "What BAC limit applies to Virginia CDL holders in a CMV?", answer: "0.04% BAC — half the standard adult DUI limit. A DUI conviction in any vehicle triggers CDL disqualification: 1 year for a first offense, lifetime for a second. Virginia's DUI law applies equally to CDL holders in commercial and personal vehicles." },
    { question: "How long is a Virginia CDL valid?", answer: "A Virginia CDL is valid for 8 years for drivers ages 21–64. Your DOT medical certificate must remain current. HazMat endorsement requires TSA security clearance renewal every 5 years. Virginia CDL holders must self-certify their medical status category annually." },
    { question: "What CDL classes does Virginia issue?", answer: "Virginia issues Class A (combination vehicles, GCWR over 26,001 lbs + towed unit over 10,000 lbs GVWR), Class B (single vehicles over 26,001 lbs GVWR), and Class C (vehicles for 16+ passengers or HazMat placards). Each requires the General Knowledge test, applicable endorsement tests, and a skills test." },
    { question: "Where do I take the Virginia CDL skills test?", answer: "Virginia CDL skills tests are conducted at DMV-approved third-party testing sites. You must provide the appropriate commercial vehicle for the class being tested. The test covers pre-trip inspection, basic vehicle control, and on-road driving. Visit dmv.virginia.gov for a list of approved CDL testing locations." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Virginia?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Virginia?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Virginia DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Virginia CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Virginia DMV for available language options.",
    },
    {
      question: "How long is a Virginia CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Virginia CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Virginia CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Virginia, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "VA Driver's License", href: "/virginia-dmv-practice-test" },
    { label: "VA Motorcycle Test", href: "/virginia-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL General Knowledge", href: "/cdl-general-knowledge" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function VirginiaCDLPage() {
  return <PracticeTestPage {...data} />;
}
