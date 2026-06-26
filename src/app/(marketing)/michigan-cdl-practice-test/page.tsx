import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Michigan CDL Practice Test 2025 – Free MI Secretary of State Commercial License Exam Prep",
  description:
    "Free Michigan CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your MI Secretary of State CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/michigan-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/michigan-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Michigan",
  stateAbbr: "MI",
  testLabel: "CDL General Knowledge Test",
  slug: "michigan-cdl-practice-test",
  headline: "Michigan CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Michigan CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Michigan CDL Manual. All MI Secretary of State (SOS) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Michigan CDL Manual",
  about: [
    "Michigan CDL testing is administered by the Michigan Secretary of State (SOS) — not a DMV — through SOS branch offices and approved third-party testing sites. The CDL General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Michigan Commercial Driver License Manual. A passing score of 80% — at least 40 correct answers — is required. The General Knowledge test is mandatory for all CDL applicants regardless of vehicle class (A, B, or C) or endorsements.",
    "Michigan-specific CDL considerations include: Michigan's OWI (Operating While Intoxicated) law, which applies to commercial vehicle operators at the standard 0.04% BAC limit for CDL holders in a CMV. An OWI conviction in any vehicle — personal or commercial — results in CDL disqualification under both FMCSA regulations and Michigan law. Michigan's hands-free law (HB 4250, effective June 30, 2023) applies to CDL holders — commercial drivers also face federal FMCSA penalties up to $2,750 per handheld device violation on top of Michigan's state fine. Michigan's Move Over law applies to commercial vehicles approaching stationary emergency, maintenance, or tow vehicles on Michigan highways.",
    "After passing the General Knowledge test, Michigan CDL applicants must pass endorsement-specific knowledge tests (HazMat, Tanker, Doubles/Triples, Passenger, School Bus) and a skills test in the appropriate vehicle class. CDL skills tests include pre-trip inspection, basic vehicle control, and on-road driving at an SOS-approved third-party testing site. A current DOT medical certificate from a federally registered medical examiner on the FMCSA National Registry must be maintained throughout CDL validity. Michigan CDLs are valid for 4 years.",
  ],
  sampleQuestions: [
    { question: "Michigan CDL holders operating a commercial motor vehicle are subject to what BAC limit?", options: ["0.08% — same as standard adult OWI", "0.04%", "0.02%", "0.00% — no alcohol in a CMV"], correctIndex: 1, explanation: "Michigan CDL holders are subject to a 0.04% BAC limit while operating a commercial motor vehicle — half the standard adult OWI threshold. An OWI conviction in any vehicle (personal or commercial) triggers CDL disqualification: 1 year for a first offense, permanent for a second offense. Michigan uses the term OWI rather than DUI, but the federal FMCSA CDL disqualification rules apply the same way regardless of state terminology." },
    { question: "Michigan's hands-free law (HB 4250) applies to CDL operators — what additional penalty do CDL holders face?", options: ["No additional penalty — only Michigan's state fine applies", "Federal FMCSA civil penalties up to $2,750 per violation in addition to Michigan's state fine", "A mandatory 7-day CDL suspension for a first offense", "Only a warning letter from the FMCSA for a first violation"], correctIndex: 1, explanation: "Michigan's hands-free law (effective June 30, 2023) applies to all drivers including CDL holders. However, CDL holders in a CMV also face federal FMCSA penalties (49 CFR 392.82): civil penalties up to $2,750 per violation and potential CDL disqualification for multiple violations. Both Michigan state fines and federal FMCSA penalties apply simultaneously. The violation also appears on the driver's PSP (Pre-Employment Screening Program) record." },
    { question: "What is the required stopping distance for a fully loaded commercial truck compared to a typical car under the same conditions?", options: ["About the same — modern truck brakes are as efficient as car brakes", "40% shorter because trucks have larger brakes", "About 40% longer because of the truck's increased weight and momentum", "Twice as long as a car under all conditions"], correctIndex: 2, explanation: "A fully loaded 80,000-pound commercial truck requires approximately 40% more stopping distance than a typical car. At 55 mph on dry pavement, a loaded tractor-trailer needs about 400–450 feet to stop compared to approximately 300 feet for a car. Factors include total weight (more momentum to overcome), brake effectiveness (air brakes have lag time), and load distribution. Following too closely in a commercial vehicle greatly increases rear-end crash risk." },
    { question: "Under FMCSA Hours of Service rules, a property-carrying driver must take a 30-minute break after:", options: ["4 hours of driving", "8 hours of driving", "After driving for 8 cumulative hours without at least 30 minutes off-duty", "12 hours of on-duty time"], correctIndex: 2, explanation: "FMCSA's 30-minute break rule (49 CFR 395.3) requires that a property-carrying driver take a 30-minute break if more than 8 hours have passed since the driver's last break — meaning after 8 cumulative hours of driving without at least 30 consecutive minutes off duty (either off-duty, sleeper berth, or on-duty-not-driving status). This break must occur before the driver reaches the 11-hour driving limit." },
    { question: "Michigan's Move Over law applies to CDL operators. What is required when approaching a stationary emergency vehicle?", options: ["CDL vehicles are exempt from Move Over law due to their size", "Move over one lane or reduce speed to a safe speed — same as all other vehicles", "Only stop if the stationary vehicle is a police car — utility trucks are excluded", "Sound the air horn twice and maintain normal speed"], correctIndex: 1, explanation: "Michigan's Move Over law applies to ALL vehicles including commercial trucks and buses. When approaching a stationary emergency vehicle, maintenance vehicle, or tow truck with activated warning lights, CDL operators must move one lane away from the vehicle or reduce speed to a safe speed below the posted limit if a lane change is not safely possible. Given the size and stopping distance of commercial vehicles, extra caution is required near roadside incidents." },
    { question: "When conducting a pre-trip inspection on a tractor-trailer, the 'tug test' is used to:", options: ["Check the tension of the fifth wheel spring", "Verify that the trailer is securely coupled to the fifth wheel by attempting to pull forward in low gear with trailer brakes set", "Test the air pressure in the trailer's suspension system", "Confirm the trailer's landing gear is fully retracted"], correctIndex: 1, explanation: "The tug test is performed after coupling the tractor to the semi-trailer to verify that the fifth wheel has properly latched onto the trailer's kingpin. With the trailer's emergency brake (red valve) applied, the driver attempts to drive forward slowly in low gear. If the trailer separates from the tractor or the fifth wheel visibly moves without the trailer following, the coupling is incomplete. A failed tug test means the coupling must be redone before driving." },
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
    { question: "How many questions are on the Michigan CDL General Knowledge test?", answer: "The Michigan CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — an 80% passing score — to proceed to endorsement tests and the skills test." },
    { question: "Does Michigan have a DMV for CDL services?", answer: "No. Michigan CDL testing and licensing is administered by the Michigan Secretary of State (SOS), not a DMV. CDL knowledge tests are available at SOS branch offices; skills tests are conducted at SOS-approved third-party testing sites. Visit michigan.gov/sos for CDL information." },
    { question: "What BAC limit applies to Michigan CDL holders in a commercial vehicle?", answer: "Michigan CDL holders are subject to a 0.04% BAC limit while operating any commercial motor vehicle — half the standard adult OWI threshold. An OWI conviction in any vehicle triggers CDL disqualification: 1 year for a first offense, lifetime for a second offense. Michigan uses the term OWI (Operating While Intoxicated) instead of DUI/DWI." },
    { question: "How long is a Michigan CDL valid?", answer: "A Michigan CDL is valid for 4 years. Your DOT medical certificate must remain current throughout the CDL's validity — typically requiring renewal every 24 months. HazMat endorsement holders must renew their TSA security threat assessment every 5 years. Michigan also requires CDL holders to self-certify their medical status category." },
    { question: "Where can I take the Michigan CDL skills test?", answer: "Michigan CDL skills tests are conducted at SOS-approved third-party testing sites throughout the state. You must provide the appropriate commercial vehicle for your CDL class. The skills test includes pre-trip inspection, basic vehicle control, and on-road driving. Contact the Michigan SOS at michigan.gov/sos for a list of approved CDL third-party testing sites." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Michigan?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Michigan?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Michigan DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Michigan CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Michigan DMV for available language options.",
    },
    {
      question: "How long is a Michigan CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Michigan CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Michigan CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Michigan, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "MI Driver's License", href: "/michigan-dmv-practice-test" },
    { label: "MI Motorcycle Test", href: "/michigan-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MichiganCDLPage() {
  return <PracticeTestPage {...data} />;
}
