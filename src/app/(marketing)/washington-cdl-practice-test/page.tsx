import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Washington CDL Practice Test 2025 – Free WA DOL Commercial License Exam Prep",
  description:
    "Free Washington CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your WA Department of Licensing CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/washington-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/washington-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Washington",
  stateAbbr: "WA",
  testLabel: "CDL General Knowledge Test",
  slug: "washington-cdl-practice-test",
  headline: "Washington CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Washington CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Washington CDL Manual. All WA Department of Licensing (DOL) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Washington CDL Manual",
  about: [
    "The Washington Department of Licensing (DOL) administers CDL testing at driver licensing offices and approved third-party testing sites throughout Washington state. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Washington CDL Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all CDL applicants regardless of vehicle class (A, B, or C) or endorsements.",
    "Washington-specific CDL considerations include: Washington's E-DUI law (effective July 23, 2017) applies to CDL operators — commercial drivers using a handheld device also face federal FMCSA penalties up to $2,750 per violation in addition to Washington's E-DUI fines. Washington's DUI law (0.08% BAC standard) applies at the federal 0.04% threshold for CDL holders in a CMV. Washington's cannabis DUI law (5 ng/mL THC) applies to CDL operators — a cannabis DUI conviction in any vehicle triggers CDL disqualification under FMCSA regulations. Washington's Move Over law applies to commercial vehicles approaching stationary emergency vehicles on multi-lane highways.",
    "Washington CDL applicants must also be aware of the state's mountainous terrain and ferry system — CDL Class A drivers hauling cargo to Olympic Peninsula, San Juan Islands (via ferry), or through Cascade and Olympic mountain passes face unique challenges including grades, narrow roads, and weather-related road closures. After passing General Knowledge, applicants must pass endorsement tests and skills tests at DOL-approved sites. Washington CDLs are valid for 4 years; DOT medical certificates must remain current.",
  ],
  sampleQuestions: [
    { question: "Washington CDL holders in a commercial motor vehicle face a BAC limit of:", options: ["0.08% — same as standard DUI", "0.04%", "0.02%", "Cannabis impairment is not covered for CDL holders in WA"], correctIndex: 1, explanation: "Washington CDL holders are subject to the federal 0.04% BAC limit while operating a commercial motor vehicle. Washington's cannabis DUI law (5 ng/mL THC in whole blood) also applies to CDL operators — and a cannabis DUI conviction in any vehicle triggers federal FMCSA CDL disqualification. A DUI conviction: 1-year CDL disqualification for a first offense, lifetime for a second." },
    { question: "Washington's E-DUI law applies to CDL operators. What additional federal penalty do commercial drivers face?", options: ["No federal penalty — only Washington's E-DUI fine applies", "FMCSA civil penalties up to $2,750 per violation in addition to WA's fine", "A 30-day CDL suspension for a first E-DUI violation", "CDL holders are exempt from E-DUI law when using navigation in a commercial vehicle"], correctIndex: 1, explanation: "Washington's E-DUI law (effective July 2017) bans all handheld device use while driving for all operators including CDL holders. CDL holders in a CMV also face federal FMCSA penalties (49 CFR 392.82): civil penalties up to $2,750 per violation and CDL disqualification for multiple violations. Both Washington's E-DUI fine and the federal penalty apply simultaneously. E-DUI violations by CDL holders appear on their PSP record." },
    { question: "When a Washington CDL driver hauls cargo through a mountain pass in winter, what is the most important consideration?", options: ["Mountain passes have no special weight restrictions for commercial vehicles", "Check for chain control requirements — Washington imposes chain requirements on commercial vehicles during winter weather", "Only Class A trucks must slow for mountain passes — Class B vehicles have no restriction", "Washington DOT automatically clears all mountain passes for commercial vehicles 24/7"], correctIndex: 1, explanation: "Washington's Cascade mountain passes frequently require tire chains or traction tires for commercial vehicles during winter weather. The Washington DOT (WSDOT) issues chain control orders at specific passes (Snoqualmie Pass on I-90, Stevens Pass on US 2, etc.) for commercial vehicles. CDL drivers must monitor WSDOT road conditions (at wsdot.wa.gov) and carry chains when required. Driving through chain control without chains is a serious violation and can result in out-of-service orders." },
    { question: "What does Washington's cargo securement law require for commercial vehicles carrying general freight?", options: ["Cargo only needs to be secured if it weighs over 10,000 pounds", "All cargo must be immobilized or secured using tie-downs, blocking, or containment adequate to prevent shifting during transport", "Commercial drivers are only responsible for cargo after it is loaded — shippers are responsible before departure", "Only livestock and hazardous materials require formal securement in Washington"], correctIndex: 1, explanation: "Washington state and FMCSA cargo securement regulations (49 CFR Part 393) require all cargo to be immobilized or secured using a combination of blocking, bracing, tie-downs, friction mats, or containment to prevent forward, rearward, and lateral movement during transport. Unsecured cargo is a serious public safety hazard — flying debris from trucks kills dozens of people annually. Drivers must check cargo securement within the first 50 miles and every 3 hours or 150 miles thereafter." },
    { question: "Under FMCSA regulations, what is a commercial vehicle driver's responsibility when a weigh station is open?", options: ["Weigh stations are optional for trucks under 26,001 lbs GVWR", "All commercial vehicles with a GVWR over 10,000 lbs must pull into open weigh stations unless directed otherwise", "Only Class A CDL vehicles must stop at weigh stations", "Bypass is permitted if the trip started before the weigh station opened"], correctIndex: 1, explanation: "FMCSA and state weight limit regulations require all commercial motor vehicles with a GVWR over 10,000 lbs to pull into open weigh stations for inspection unless PrePass or an equivalent electronic bypass system has cleared them. Washington's DOT operates numerous weigh stations on major freight corridors. Bypassing an open weigh station without authorization is a traffic violation in Washington and can result in fines and CDL points." },
    { question: "What is the purpose of a CDL pre-trip inspection for Washington's winter mountain routes?", options: ["Pre-trip inspections are only required at the start of a trip, not for each leg", "To verify all safety-critical systems — including brakes, lights, tire chains, and wiper blades — are functional before entering mountain passes", "Pre-trip inspections are optional if the driver has a clean safety record", "Only brake checks are required before mountain routes — other systems can be checked at the summit"], correctIndex: 1, explanation: "A pre-trip inspection for Washington's winter mountain routes should specifically verify: tire chains are present and in good condition (if chain controls are possible); wiper blades and windshield washer fluid are functional; all lights work (visibility is often reduced in mountain precipitation); brakes are tested on flat ground before a steep descent; and mirrors are clear. The FMCSA-required pre-trip covers all these systems — the mountain environment makes each item especially critical for safe operation." },
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
    { question: "How many questions are on the Washington CDL General Knowledge test?", answer: "The Washington CDL test has 50 questions. You need at least 40 correct — 80% — to pass and advance to endorsement knowledge tests and the skills test." },
    { question: "Does Washington have a DMV for CDL testing?", answer: "No. Washington CDL testing is administered by the Department of Licensing (DOL), not a DMV. CDL knowledge tests are available at DOL licensing offices; skills tests are conducted at DOL-approved third-party testing sites. Visit dol.wa.gov for CDL information and testing locations." },
    { question: "What is Washington's cannabis DUI standard for CDL holders?", answer: "Washington's cannabis DUI threshold (5 ng/mL THC in whole blood) applies to CDL operators in their personal vehicles and in commercial motor vehicles. A cannabis DUI conviction in any vehicle triggers FMCSA CDL disqualification: 1 year for a first offense, lifetime for a second. Washington legalized recreational cannabis in 2012, but impaired driving — by cannabis or alcohol — is a CDL disqualifying offense." },
    { question: "How long is a Washington CDL valid?", answer: "A Washington CDL is valid for 4 years. Your DOT medical certificate must remain current throughout the CDL's validity period. HazMat endorsement holders must renew the TSA security threat assessment every 5 years. Washington requires CDL holders to self-certify their medical status annually." },
    { question: "What chain control requirements apply to Washington CDL drivers?", answer: "Washington DOT can require tire chains or traction tires for commercial vehicles during winter weather at mountain passes on I-90, US 2, US 12, SR 20, and other routes. CDL drivers must monitor WSDOT road conditions at wsdot.wa.gov or by calling 511. Driving through a chain control without chains is a violation. Check WSDOT commercial vehicle restrictions for specific pass requirements." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Washington?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Washington?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Washington DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Washington CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Washington DMV for available language options.",
    },
    {
      question: "How long is a Washington CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Washington CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Washington CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Washington, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "WA Driver's License", href: "/washington-dmv-practice-test" },
    { label: "WA Motorcycle Test", href: "/washington-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Hazmat", href: "/cdl-hazmat" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function WashingtonCDLPage() {
  return <PracticeTestPage {...data} />;
}
