import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Arizona CDL Practice Test 2025 – Free AZ MVD Commercial License Exam Prep",
  description:
    "Free Arizona CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your AZ Motor Vehicle Division CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/arizona-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/arizona-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Arizona",
  stateAbbr: "AZ",
  testLabel: "CDL General Knowledge Test",
  slug: "arizona-cdl-practice-test",
  headline: "Arizona CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Arizona CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Arizona CDL Manual. All AZ Motor Vehicle Division (MVD) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Arizona CDL Manual",
  about: [
    "Arizona CDL testing is administered by the Motor Vehicle Division (MVD), part of the Arizona Department of Transportation (ADOT). CDL knowledge tests are available at MVD offices and Authorized Third Party (ATP) locations throughout Arizona. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Arizona CDL Manual. A passing score of 80% — at least 40 correct answers — is required. The General Knowledge test is mandatory for all Arizona CDL applicants regardless of vehicle class or endorsements.",
    "Arizona-specific CDL considerations include: Arizona's tiered DUI law applies to CDL operators at the federal 0.04% BAC standard in a CMV — below Arizona's standard DUI threshold of 0.08%. Arizona's Extreme DUI (0.15%) and Super Extreme DUI (0.20%) charges in a CMV would result in the 0.04% federal limit already being exceeded. A DUI conviction of any kind in any vehicle triggers FMCSA CDL disqualification. Arizona's hands-free law (SB 1165, effective January 2021) applies to CDL operators — commercial drivers also face federal FMCSA penalties up to $2,750 per handheld device violation. Arizona's Move Over law (A.R.S. §28-775) is a Class 2 misdemeanor for all vehicles including commercial trucks.",
    "After passing the General Knowledge test, Arizona CDL applicants must pass endorsement knowledge tests and a skills test (pre-trip inspection, basic vehicle control, and on-road driving) at an MVD-approved testing site or ATP. Arizona's desert climate creates unique CDL challenges: extreme heat (110°F+) can affect tire pressure (overinflation risk), brake performance, and cargo temperature requirements. Flash flooding in desert washes can occur suddenly, making route planning essential. Arizona CDLs are valid for 4 years.",
  ],
  sampleQuestions: [
    { question: "Arizona CDL holders operating a commercial motor vehicle face a BAC limit of:", options: ["0.08% — same as standard DUI", "0.04%", "0.15% — Arizona's Extreme DUI threshold", "0.00% — any alcohol is prohibited in a CMV"], correctIndex: 1, explanation: "Arizona CDL holders are subject to the federal 0.04% BAC limit while operating a commercial motor vehicle — well below Arizona's standard DUI threshold of 0.08% and far below the Extreme DUI threshold (0.15%). A DUI conviction in any vehicle triggers CDL disqualification: 1 year for a first offense, lifetime for a second. Arizona's tiered DUI penalties become relevant only to the extent they affect the criminal record — the CDL disqualification kicks in at 0.04% regardless of tier." },
    { question: "Arizona's Move Over law (A.R.S. §28-775) is classified as what type of violation for CDL operators?", options: ["A civil infraction with no criminal record", "A Class 2 misdemeanor — a criminal offense in Arizona", "A federal CDL violation subject only to FMCSA penalties", "A parking violation with a flat $50 fine"], correctIndex: 1, explanation: "Arizona's Move Over law violation is a Class 2 misdemeanor — a criminal offense. This applies to all vehicles including commercial trucks. CDL holders convicted of a Move Over violation face the misdemeanor on their criminal record in addition to traffic points. When approaching a stationary emergency vehicle, law enforcement, or tow truck with activated lights on an Arizona highway, CDL operators must move one lane away or reduce speed to a safe level below the posted limit." },
    { question: "In Arizona's extreme summer heat, how does ambient temperature affect commercial vehicle tire pressure?", options: ["Heat reduces tire pressure — inflate 10 psi above normal in summer", "Heat increases tire pressure — check and release pressure if above the manufacturer maximum", "Heat has no measurable effect on truck tire pressure", "Arizona CDL regulations require deflating tires to 60 psi in summer heat"], correctIndex: 1, explanation: "High ambient temperatures increase tire pressure — approximately 1 psi for every 10°F increase in temperature. In Arizona's summer heat (pavement temperatures can exceed 170°F), tire pressure can increase significantly from the manufacturer's recommended cold pressure. Overinflated tires have a smaller contact patch, reducing traction, and are more susceptible to blowout from road hazards. CDL drivers should check tire pressure in the morning (cold) and monitor throughout the day during Arizona summer operations." },
    { question: "Arizona's desert wash crossings present what hazard for commercial vehicle drivers?", options: ["Loose sand that can cause the truck to sink and become immobilized", "Flash flooding — desert washes can fill with fast-moving water with little or no warning", "Salt deposits that damage brake components", "No specific hazard — desert washes are always dry"], correctIndex: 1, explanation: "Arizona's desert washes (dry riverbeds) can flash flood rapidly — water can go from a trickle to several feet deep in minutes during monsoon season without any rain at the road location. 'Turn Around, Don't Drown' is Arizona DOT's official guidance. For CDL drivers: never drive into a flooded wash without knowing the depth. A commercial vehicle swept off a desert road by flash water is a catastrophic loss of cargo, vehicle, and potentially the driver's life." },
    { question: "Under FMCSA regulations, when must a commercial vehicle driver log a pre-trip inspection report?", options: ["Only after a breakdown — not before every trip", "Before each trip, reviewing the previous driver vehicle inspection report (DVIR)", "Once weekly at the start of the work week", "Only for vehicles crossing state lines"], correctIndex: 1, explanation: "FMCSA regulations (49 CFR 396.11) require CDL drivers to review the previous DVIR and conduct a pre-trip inspection before each trip. Any defects that affect safe operation must be repaired before driving. The driver must note any defects found and certify either that defects were corrected or that no defects were found. Arizona's hot climate makes pre-trip inspection of brakes, tires, and cooling systems especially important given the effect of extreme heat on these systems." },
    { question: "What is the correct procedure for a CDL driver who discovers a leaking fuel tank during a pre-trip inspection?", options: ["Note the leak on the DVIR and continue driving — fuel tanks are not safety-critical", "Place a container under the leak and continue to the destination", "Do not operate the vehicle until the leak is repaired — a fuel system leak is an automatic out-of-service condition", "Report the leak to dispatch but continue if the fuel loss is less than 1 gallon per hour"], correctIndex: 2, explanation: "A leaking fuel tank is an automatic out-of-service condition under FMCSA regulations. Fuel leaks create fire and explosion hazards and are extremely dangerous. The vehicle may not be operated until the fuel system is repaired. CDL drivers in Arizona (or any state) who discover a leaking fuel tank must stop the vehicle in a safe location, report the defect, and arrange for repair before the vehicle is driven again." },
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
    { question: "How many questions are on the Arizona CDL General Knowledge test?", answer: "The Arizona CDL test has 50 questions. You need at least 40 correct — 80% — to pass. CDL knowledge tests are available at Arizona MVD offices and Authorized Third Party (ATP) locations." },
    { question: "What is Arizona's CDL DUI standard?", answer: "Arizona CDL holders in a commercial motor vehicle face a 0.04% BAC limit — half the standard DUI threshold. This is the FMCSA federal minimum. Arizona's Extreme DUI (0.15%) and Super Extreme DUI (0.20%) tiers don't change the CDL threshold — CDL holders in a CMV face disqualification at 0.04% regardless of which DUI tier would apply. A DUI in any vehicle triggers CDL disqualification." },
    { question: "How does Arizona's ATP program work for CDL testing?", answer: "Arizona's Authorized Third Party (ATP) program allows private businesses to administer CDL knowledge tests and skills tests. ATP locations can offer faster appointment availability than MVD offices. CDL skills tests at ATP sites follow the same FMCSA standards. Use servicearizona.com to find ATP locations offering CDL testing services." },
    { question: "How long is an Arizona CDL valid?", answer: "An Arizona CDL is valid for 4 years. Your DOT medical certificate must remain current. HazMat endorsement requires TSA security clearance renewal every 5 years. Arizona CDL holders must self-certify their medical status category annually at the MVD." },
    { question: "What desert-specific hazards should Arizona CDL drivers know?", answer: "Arizona-specific CDL hazards: (1) extreme heat affecting tire pressure, brake fade risk, and cargo temperature; (2) flash flooding in desert washes — never drive into flowing water; (3) dust storms (haboobs) — if caught in a haboob, pull OFF the road completely, turn off all lights, and wait; (4) wildlife crossings (saguaro cactus doesn't move, but javelinas, deer, and coyotes do); (5) summer tire blowout risk from combination of heat, overloading, and overinflation." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Arizona?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Arizona?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Arizona DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Arizona CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Arizona DMV for available language options.",
    },
    {
      question: "How long is a Arizona CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Arizona CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Arizona CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Arizona, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "AZ Driver's License", href: "/arizona-dmv-practice-test" },
    { label: "AZ Motorcycle Test", href: "/arizona-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Hazmat", href: "/cdl-hazmat" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function ArizonaCDLPage() {
  return <PracticeTestPage {...data} />;
}
