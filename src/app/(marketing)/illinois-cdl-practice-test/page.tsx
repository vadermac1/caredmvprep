import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Illinois CDL Practice Test 2025 – Free IL Commercial Driver's License Exam Prep",
  description:
    "Free Illinois CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your IL Secretary of State CDL knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/illinois-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/illinois-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Illinois",
  stateAbbr: "IL",
  testLabel: "CDL General Knowledge Test",
  slug: "illinois-cdl-practice-test",
  headline: "Illinois CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Illinois CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Illinois Commercial Driver's License Study Guide. All CDL applicants must pass this test before taking any endorsement exams.",
  basedOn: "FMCSA CDL Manual & IL CDL Study Guide",
  about: [
    "The Illinois Secretary of State (SOS) administers CDL testing in Illinois. The General Knowledge test consists of 50 multiple-choice questions based on the Federal Motor Carrier Safety Administration (FMCSA) CDL Manual and the Illinois Commercial Driver's License Study Guide. A passing score of 80% or higher — at least 40 correct answers — is required. The General Knowledge test is mandatory for all CDL applicants, regardless of which vehicle class or endorsements you are seeking.",
    "Illinois CDL applicants must also be aware of Illinois-specific regulations beyond the federal baseline. Scott's Law (Illinois's Move Over law) applies to CDL operators and carries enhanced penalties for commercial vehicles. Illinois's statewide handheld phone ban applies to CDL holders — texting, calling, and any handheld device use while operating a commercial vehicle is prohibited and can result in serious disqualification consequences. An OVI/DUI conviction in a commercial vehicle triggers immediate CDL disqualification.",
    "After passing the General Knowledge test, Illinois CDL applicants must also pass endorsement-specific knowledge tests for any special vehicle types: Passenger (P), School Bus (S), Tank Vehicles (N), HazMat (H), Doubles and Triples (T), or Combination Vehicles. A CDL skills test — including pre-trip inspection, basic vehicle control, and an on-road driving test — must be passed in the vehicle class you are applying for. The Illinois SOS coordinates CDL skills testing at approved third-party testing sites.",
  ],
  sampleQuestions: [
    {
      question: "What is the minimum tread depth for front (steering) axle tires on a commercial vehicle?",
      options: ["2/32 inch", "4/32 inch", "6/32 inch", "8/32 inch"],
      correctIndex: 1,
      explanation:
        "Front steering axle tires must have a minimum tread depth of 4/32 inch. All other tires (drive axles, trailer axles) must have a minimum of 2/32 inch. Tires below these minimums are illegal to operate and dramatically increase stopping distance and blowout risk, particularly critical for large commercial vehicles that take much longer to stop than passenger cars.",
    },
    {
      question: "When inspecting your commercial vehicle for a pre-trip inspection, which item is included in the T-CLOCS or equivalent check?",
      options: [
        "Only checking the engine oil level",
        "Checking tires, coupling devices, lights, brake adjustments, and fluid levels",
        "Only walking around the outside of the vehicle",
        "Checking only the instruments inside the cab",
      ],
      correctIndex: 1,
      explanation:
        "A pre-trip inspection for a commercial vehicle is comprehensive and includes: tires (pressure, tread, damage), coupling devices (fifth wheel, kingpin, safety chains), all lights and reflectors, brake adjustment (slack adjusters), air lines and brake chambers, fluid levels (oil, coolant, washer fluid), and structural components. The Illinois CDL Study Guide specifies the full order and method for conducting a proper pre-trip inspection.",
    },
    {
      question: "How far ahead should a commercial vehicle driver look when traveling at highway speeds?",
      options: ["3–4 seconds ahead", "5–7 seconds ahead", "12–15 seconds ahead", "30+ seconds ahead"],
      correctIndex: 2,
      explanation:
        "At highway speeds, CDL operators should scan 12 to 15 seconds ahead — roughly the distance your vehicle will travel in that time. This provides sufficient time to identify hazards, plan responses, and slow a large vehicle safely. At city speeds, the recommended scanning distance is at least 12 seconds. Commercial vehicles require much greater stopping distances than cars, making forward scanning critical.",
    },
    {
      question: "What is the correct response when your anti-lock braking system (ABS) activates during emergency braking?",
      options: [
        "Pump the brakes rapidly to help ABS function",
        "Release the brake pedal immediately to disengage ABS",
        "Maintain firm, steady pressure — ABS modulates braking automatically",
        "Switch to engine braking only and release the brake pedal",
      ],
      correctIndex: 2,
      explanation:
        "When ABS activates, maintain firm, continuous pressure on the brake pedal. ABS automatically cycles brake pressure to prevent wheel lockup while preserving steering control. Pumping the brakes defeats ABS and should never be done on vehicles equipped with ABS. ABS may cause a pulsating feeling in the pedal — this is normal and expected during activation.",
    },
    {
      question: "Illinois's Scott's Law applies to CDL operators. What does it require when you approach a stationary emergency vehicle?",
      options: [
        "Honk the air horn to warn the emergency crew and maintain speed",
        "Stop your vehicle immediately and wait for an all-clear signal",
        "Move over one lane or slow to 20 mph below the posted limit if a lane change is not possible",
        "Flash your lights and pass in the farthest available lane",
      ],
      correctIndex: 2,
      explanation:
        "Illinois's Scott's Law (Move Over law) applies to all drivers including CDL operators. When approaching a stationary emergency, highway maintenance, or tow truck with activated warning lights, you must move over one lane — or reduce speed to at least 20 mph below the posted limit if a lane change is not safely possible. Violations by commercial vehicle operators carry enhanced fines and can affect CSA (Compliance, Safety, Accountability) scores.",
    },
    {
      question: "Under FMCSA Hours of Service regulations, what is the maximum consecutive hours a property-carrying driver may drive before mandatory rest?",
      options: ["8 hours", "10 hours", "11 hours", "14 hours"],
      correctIndex: 2,
      explanation:
        "Under FMCSA Hours of Service regulations (49 CFR Part 395), property-carrying drivers may drive a maximum of 11 consecutive hours after 10 consecutive hours off duty. The 11-hour driving limit is within a 14-hour window from the start of work. After the 14-hour on-duty window closes, the driver must take 10 consecutive hours off before driving again. These rules apply to Illinois CDL operators in interstate commerce.",
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
      question: "How many questions are on the Illinois CDL General Knowledge test?",
      answer:
        "The Illinois CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — an 80% passing score — to pass.",
    },
    {
      question: "What CDL classes are available in Illinois?",
      answer:
        "Illinois issues Class A (combination vehicles over 26,001 lbs GVWR with towed unit over 10,000 lbs), Class B (single vehicles over 26,001 lbs or towing a vehicle under 10,001 lbs GVWR), and Class C (transporting 16+ passengers or HazMat requiring placards). All classes require passing the General Knowledge test first.",
    },
    {
      question: "Does Illinois's handheld phone ban apply to CDL drivers?",
      answer:
        "Yes. Illinois's statewide handheld phone ban applies to all drivers including CDL holders. Additionally, federal FMCSA regulations (49 CFR 392.82) prohibit CDL operators from using handheld mobile devices while operating a commercial motor vehicle. Violations can result in CDL disqualification and civil penalties up to $2,750 per violation.",
    },
    {
      question: "How long is an Illinois CDL valid?",
      answer:
        "An Illinois CDL is valid for 4 years. HazMat endorsement holders must renew their TSA security threat assessment every 5 years. Your DOT medical certificate must remain current throughout your CDL validity — typically requiring a DOT physical every 24 months (or annually for certain conditions).",
    },
    {
      question: "What is a CDL disqualifying offense in Illinois?",
      answer:
        "CDL disqualifying offenses include: DUI/OVI in any vehicle (1-year disqualification for first offense; lifetime for second), leaving the scene of an accident, using a CMV in a felony, refusing a chemical test, and driving a CMV while disqualified. In Illinois, a conviction in a personal vehicle can still disqualify your CDL.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Illinois?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Illinois?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Illinois DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Illinois CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Illinois DMV for available language options.",
    },
    {
      question: "How long is a Illinois CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Illinois CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Illinois CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Illinois, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "IL Driver's License", href: "/illinois-dmv-practice-test" },
    { label: "IL Motorcycle Test", href: "/illinois-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL General Knowledge", href: "/cdl-general-knowledge" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function IllinoisCDLPage() {
  return <PracticeTestPage {...data} />;
}
