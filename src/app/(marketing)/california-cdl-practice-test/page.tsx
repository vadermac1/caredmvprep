import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "California CDL General Knowledge Practice Test 2025 – Free CA Commercial License Prep",
  description:
    "Free California CDL General Knowledge practice test based on the FMCSA CDL manual. 50 questions covering pre-trip inspection, braking, cargo, and hours of service. Pass your CA CDL test.",
  alternates: { canonical: "https://caredmvprep.com/california-cdl-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/california-cdl-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "California",
  stateAbbr: "CA",
  testLabel: "CDL General Knowledge Test",
  slug: "california-cdl-practice-test",
  headline: "California CDL General Knowledge Practice Test",
  intro:
    "Prepare for the California CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual. All CDL applicants must pass this test before taking any endorsement exams.",
  basedOn: "FMCSA CDL Manual & CA Commercial Driver Handbook",
  about: [
    "The California CDL General Knowledge test consists of 50 multiple-choice questions based on the Federal Motor Carrier Safety Administration (FMCSA) CDL Manual and the California Commercial Driver Handbook. A score of 80% or higher — at least 40 correct answers — is required to pass.",
    "The General Knowledge test is mandatory for all CDL applicants regardless of which vehicle class (Class A, B, or C) or endorsements (HazMat, Tanker, Doubles/Triples, Passenger, School Bus) you intend to obtain. Additional knowledge and skills tests are required for each endorsement.",
    "The test covers pre-trip vehicle inspection, basic vehicle control, shifting, backing, coupling and uncoupling, pre-trip and post-trip inspection procedures, cargo securement, hazardous materials awareness, hours-of-service regulations, and emergency procedures.",
  ],
  sampleQuestions: [
    {
      question: "What is the minimum tread depth required on the front (steering axle) tires of a commercial vehicle?",
      options: ["4/32 inch", "2/32 inch", "6/32 inch", "8/32 inch"],
      correctIndex: 0,
      explanation:
        "Front steering axle tires must have a minimum tread depth of 4/32 inch. All other tires (rear drive axles, trailer axles) must have a minimum of 2/32 inch. Never drive with tires below these minimums — worn tires dramatically increase stopping distance and blowout risk.",
    },
    {
      question: "During a pre-trip inspection, when must you check cargo securement devices?",
      options: [
        "Only at the start of the trip",
        "Only when you feel cargo movement",
        "Once per day",
        "Every 3 hours or 150 miles, and after any change in duty status",
      ],
      correctIndex: 3,
      explanation:
        "Federal regulations (49 CFR 392.9) require you to inspect cargo and securement within the first 50 miles of a trip, and then every 3 hours or 150 miles — whichever comes first — and after any change in duty status. Loose cargo is a major cause of highway fatalities.",
    },
    {
      question: "How far ahead should a commercial vehicle driver look when driving at highway speeds?",
      options: ["2–4 seconds", "5–8 seconds", "12–15 seconds", "20–30 seconds"],
      correctIndex: 2,
      explanation:
        "At highway speeds, you should scan 12 to 15 seconds ahead — approximately the distance your vehicle will travel in that time. This gives you time to identify hazards and react safely. At city speeds, scan at least 12 seconds ahead.",
    },
    {
      question: "What is the correct braking technique if your commercial vehicle has ABS?",
      options: [
        "Apply firm, steady pressure and let ABS modulate",
        "Pump the brakes repeatedly",
        "Brake harder than normal to activate ABS",
        "Use engine braking only — avoid foot brakes",
      ],
      correctIndex: 0,
      explanation:
        "With ABS (Anti-lock Braking System), apply firm, continuous pressure to the brake pedal and allow the ABS to automatically modulate brake pressure to prevent wheel lockup. Do NOT pump the brakes — pumping defeats ABS and can cause loss of steering control.",
    },
    {
      question: "What does a posted bridge weight limit mean?",
      options: [
        "It is a recommendation, not a legal limit",
        "You may exceed it in an emergency",
        "It applies only to vehicles with 5 or more axles",
        "It is a legal maximum that must never be exceeded",
      ],
      correctIndex: 3,
      explanation:
        "Posted bridge weight limits are legal maximums established by structural engineering analysis. Crossing a bridge over its posted weight limit is illegal and can cause catastrophic structural failure. Always check bridge limits along your route before dispatching.",
    },
    {
      question: "When should you downshift before a long, steep downgrade?",
      options: [
        "After you start descending and pick up speed",
        "Before you begin the descent while your speed is still controlled",
        "Only if your brakes begin to fade",
        "Downshifting on downgrades is not recommended",
      ],
      correctIndex: 1,
      explanation:
        "Always select the correct gear before starting a downgrade — the same gear you would use to climb the same grade. Once you are already moving fast on a steep hill, downshifting is dangerous and may cause a loss of control. Use engine braking combined with controlled brake application to maintain a safe speed.",
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
      question: "How many questions are on the California CDL General Knowledge test?",
      answer:
        "The California CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — a passing score of 80% — to pass.",
    },
    {
      question: "What CDL classes are available in California?",
      answer:
        "California issues three CDL classes: Class A (combination vehicles with a GVWR over 26,001 lbs and a towed unit over 10,000 lbs), Class B (single vehicles over 26,001 lbs, or towing a trailer under 10,001 lbs), and Class C (vehicles designed to transport 16 or more passengers including the driver, or carrying hazardous materials requiring placards).",
    },
    {
      question: "Do I need to pass additional tests beyond General Knowledge?",
      answer:
        "Yes. After passing the General Knowledge test, you must also pass endorsement-specific knowledge tests for any special vehicle types you want to operate: Passenger (P), School Bus (S), Tank Vehicles (N), Hazardous Materials (H), Doubles and Triples (T), or Air Brakes (restriction removed). You must also pass a CDL skills test (pre-trip inspection, basic vehicle control, and road test) in the vehicle class you are applying for.",
    },
    {
      question: "Is a California CDL valid in other states?",
      answer:
        "Yes. A CDL issued by California is valid in all 50 states for the vehicle class and endorsements listed on the license. However, you must always comply with the laws of the state in which you are driving.",
    },
    {
      question: "How long does a California CDL stay valid?",
      answer:
        "A California CDL is valid for 5 years. If you hold a HazMat endorsement, it requires a TSA security threat assessment (background check) renewal every 5 years as well. Your medical certificate (DOT physical) must be kept current throughout your CDL validity.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in California?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in California?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your California DMV website for current fee schedules.",
    },
    {
      question: "Can I take the California CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the California DMV for available language options.",
    },
    {
      question: "How long is a California CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your California CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the California CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in California, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "CA Permit Test", href: "/california-dmv-practice-test" },
    { label: "CA Motorcycle Test", href: "/california-motorcycle-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-practice-test" },
    { label: "CDL Hazmat", href: "/cdl-practice-test" },
    { label: "CDL Passenger", href: "/cdl-practice-test" },
    { label: "View All States", href: "/" },
  ],
};

export default function CaliforniaCDLPage() {
  return <PracticeTestPage {...data} />;
}
