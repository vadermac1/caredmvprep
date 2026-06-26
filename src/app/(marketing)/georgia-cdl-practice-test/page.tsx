import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Georgia CDL Practice Test 2025 – Free GA DDS Commercial Driver's License Exam Prep",
  description:
    "Free Georgia CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your GA DDS CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/georgia-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/georgia-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Georgia",
  stateAbbr: "GA",
  testLabel: "CDL General Knowledge Test",
  slug: "georgia-cdl-practice-test",
  headline: "Georgia CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Georgia CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Georgia CDL Manual. All GA DDS CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Georgia CDL Manual",
  about: [
    "The Georgia Department of Driver Services (DDS) administers CDL testing in Georgia. The General Knowledge test consists of 50 multiple-choice questions based on the FMCSA CDL Manual and the Georgia CDL Manual. A passing score of 80% or higher — at least 40 correct answers — is required. This test is mandatory for all CDL applicants in Georgia regardless of which vehicle class (A, B, or C) or endorsements you are seeking.",
    "Georgia CDL operators must comply with both federal FMCSA rules and Georgia-specific requirements. Georgia's Hands-Free Law (O.C.G.A. §40-6-241.2) applies to commercial vehicle operators — holding any wireless device while driving a commercial motor vehicle is prohibited and triggers both state fines and federal FMCSA penalties. Georgia's Move Over Law also applies to commercial vehicles passing stationary emergency and utility vehicles. A DUI conviction in any vehicle results in a 1-year CDL disqualification under both Georgia law and FMCSA regulations.",
    "After passing the General Knowledge test, Georgia CDL applicants must pass endorsement-specific knowledge tests for special vehicle types (HazMat, Tanker, Doubles/Triples, Passenger, School Bus). A CDL skills test — pre-trip inspection, basic vehicle control, and on-road driving — must be completed in the appropriate vehicle class at a Georgia DDS-approved testing site. A current DOT medical certificate from an FMCSA National Registry-listed medical examiner must be maintained.",
  ],
  sampleQuestions: [
    {
      question: "Georgia's DUI BAC limit for a CDL holder operating a commercial motor vehicle is:",
      options: ["0.08% — same as the standard limit", "0.04%", "0.02%", "0.00% — any alcohol is prohibited in a CMV"],
      correctIndex: 1,
      explanation:
        "Georgia CDL holders are subject to a 0.04% BAC limit while operating a commercial motor vehicle — half the standard adult limit. This federal minimum applies in all states. A DUI conviction at 0.04% or higher while operating a CMV, or a DUI conviction in any vehicle (personal or commercial), results in a 1-year CDL disqualification for a first offense and a lifetime disqualification for a second. Georgia's DUI law applies to prescription drug impairment as well.",
    },
    {
      question: "What is the correct procedure when your commercial vehicle's air pressure drops to the warning level?",
      options: [
        "Drive to the nearest truck stop to refill air pressure",
        "Stop safely as soon as possible — do not drive until the leak is repaired",
        "Pump the brakes to build pressure while driving to a shop",
        "Switch to engine braking only and continue to the destination",
      ],
      correctIndex: 1,
      explanation:
        "When air pressure drops to the warning level (typically 60 psi — when the low-pressure warning light and buzzer activate), you must stop the vehicle safely as soon as possible. Do not continue driving. Driving with inadequate air pressure means the spring brakes may apply automatically, the system may not have enough pressure for controlled braking, and you risk brake failure. Find a safe location off the road and address the leak before driving.",
    },
    {
      question: "Georgia's Hands-Free Law applies to commercial vehicle operators. What is the FMCSA penalty for a CDL holder using a handheld device?",
      options: [
        "A written warning for a first offense",
        "A $100 fine — same as for passenger vehicle drivers",
        "Civil penalties up to $2,750 and potential driver disqualification for multiple violations",
        "No federal penalty exists — only Georgia's state fine applies",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA regulations (49 CFR 392.82) prohibit CDL holders from using handheld mobile devices while operating a commercial motor vehicle. Civil penalties can reach $2,750 per violation. Multiple violations can lead to CDL driver disqualification. These federal penalties apply in addition to Georgia's Hands-Free Law penalties. A CDL holder caught using a handheld device also receives a violation recorded in their PSP (Pre-Employment Screening Program) record.",
    },
    {
      question: "How many hours may a property-carrying CDL driver drive in a single day under FMCSA Hours of Service rules?",
      options: ["8 hours after 8 hours off", "10 hours after 8 hours off", "11 hours after 10 hours off", "12 hours after 10 hours off"],
      correctIndex: 2,
      explanation:
        "Under FMCSA's 11-hour driving rule (49 CFR 395.3), property-carrying drivers may drive a maximum of 11 hours after 10 consecutive hours off duty. All driving must be completed within a 14-hour on-duty window from the start of work. After 11 hours of driving OR after the 14-hour window closes (whichever comes first), the driver must take 10 consecutive hours off duty before driving again.",
    },
    {
      question: "During a pre-trip inspection, what is the correct way to check for low air pressure buildup rate?",
      options: [
        "Start the engine and immediately drive at highway speed to build pressure",
        "With engine running at proper RPM, pressure should build from 50 to 90 psi within 3 minutes",
        "Air pressure should reach 120 psi within 30 seconds of engine start",
        "Air pressure build rate cannot be checked without specialized tools",
      ],
      correctIndex: 1,
      explanation:
        "The Georgia CDL Manual and FMCSA guidelines specify that air pressure should build from 50 psi to 90 psi within 3 minutes with the engine at the proper RPM (usually around 600–900 rpm). If pressure builds too slowly, there may be a compressor issue or a significant air leak that requires repair before the vehicle is driven. Pressure should continue building to the governor cutoff (typically 120–130 psi) after the initial build-up test.",
    },
    {
      question: "What is the 'danger zone' for a school bus driver in Georgia?",
      options: [
        "The area behind the bus where the driver cannot see",
        "The 10-foot area surrounding the bus where children are most at risk of injury",
        "The intersection ahead of the bus",
        "The roadway on both sides of the bus during loading/unloading",
      ],
      correctIndex: 1,
      explanation:
        "The 'danger zone' is the area within 10 feet surrounding a school bus where children are at greatest risk of being struck — either by the bus itself during movement, or by passing motorists who may not have stopped. Bus drivers must account for children who may be in the danger zone before moving the vehicle. Georgia school bus operators require a School Bus (S) endorsement and must follow specific safety protocols for loading and unloading.",
    },
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
    {
      question: "How many questions are on the Georgia CDL General Knowledge test?",
      answer:
        "The Georgia CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — an 80% passing score — to pass and proceed to endorsement tests and the skills test.",
    },
    {
      question: "What CDL classes does Georgia issue?",
      answer:
        "Georgia issues Class A (combination vehicles with GCWR over 26,001 lbs and towed unit over 10,000 lbs GVWR), Class B (single vehicles over 26,001 lbs GVWR or towing under 10,001 lbs), and Class C (16+ passengers or HazMat requiring placards). Each requires the General Knowledge test, endorsement tests, and a skills test.",
    },
    {
      question: "Does Georgia's Hands-Free Law apply to CDL drivers?",
      answer:
        "Yes. Georgia's Hands-Free Law (O.C.G.A. §40-6-241.2) applies to all drivers including commercial vehicle operators. CDL holders also face separate federal FMCSA penalties of up to $2,750 per violation for handheld device use while operating a commercial motor vehicle. Both Georgia state fines and federal penalties can apply simultaneously.",
    },
    {
      question: "How long is a Georgia CDL valid?",
      answer:
        "A Georgia CDL is valid for 8 years for drivers between the ages of 21 and 64 (matching Georgia's standard license validity). Your DOT medical certificate must remain current — typically renewed every 24 months. HazMat endorsements require a TSA security threat assessment renewal every 5 years.",
    },
    {
      question: "Where do I take the Georgia CDL skills test?",
      answer:
        "Georgia CDL skills tests are conducted at DDS-approved third-party testing sites. You must provide the appropriate commercial vehicle for the skills test (or arrange one through a CDL training school). The test includes a pre-trip inspection, basic vehicle control exercises, and an on-road driving test. Visit dds.georgia.gov for a list of approved testing locations.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Georgia?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Georgia?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Georgia DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Georgia CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Georgia DMV for available language options.",
    },
    {
      question: "How long is a Georgia CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Georgia CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Georgia CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Georgia, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "GA Driver's License", href: "/georgia-dmv-practice-test" },
    { label: "GA Motorcycle Test", href: "/georgia-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL General Knowledge", href: "/cdl-general-knowledge" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function GeorgiaCDLPage() {
  return <PracticeTestPage {...data} />;
}
