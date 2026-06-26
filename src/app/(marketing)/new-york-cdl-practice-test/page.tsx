import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New York CDL General Knowledge Practice Test 2025 – Free NY Commercial License Prep",
  description:
    "Free New York CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions covering pre-trip inspection, HOS, cargo, and braking. Pass your NY CDL test.",
  alternates: { canonical: "https://caredmvprep.com/new-york-cdl-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/new-york-cdl-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New York",
  stateAbbr: "NY",
  testLabel: "CDL General Knowledge Test",
  slug: "new-york-cdl-practice-test",
  headline: "New York CDL General Knowledge Practice Test",
  intro:
    "Prepare for the New York CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the New York Commercial Driver's Manual. All NY CDL applicants must pass this test before any endorsement exams.",
  numToPass: "40 correct (80%)",
  basedOn: "FMCSA CDL Manual & New York Commercial Driver's Manual",
  about: [
    "The New York CDL General Knowledge test consists of 50 multiple-choice questions based on the FMCSA CDL Manual and the New York Commercial Driver's Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all CDL applicants regardless of vehicle class or endorsements.",
    "New York has specific commercial vehicle regulations to be aware of, including stricter weight restrictions on certain local roads and bridges (especially in New York City), designated truck routes, and high-occupancy toll lane rules. New York also enforces strict idling limits for diesel vehicles in New York City and other areas.",
    "Passing the General Knowledge test earns you a Commercial Learner's Permit (CLP). You must hold the CLP for at least 14 days before taking the CDL skills test (pre-trip inspection, basic vehicle control, and road test).",
  ],
  sampleQuestions: [
    {
      question: "Under federal HOS rules for property-carrying CMV drivers, how many hours may you drive after 10 consecutive hours off duty?",
      options: ["8 hours", "11 hours", "12 hours", "14 hours"],
      correctIndex: 1,
      explanation:
        "Property-carrying CMV drivers may drive a maximum of 11 hours following 10 consecutive hours off duty. This is the federal driving-time limit (not on-duty limit). Drivers are also prohibited from driving after being on duty for 14 consecutive hours following the start of their workday, regardless of how many of those hours were spent driving.",
    },
    {
      question: "What is a 'converter dolly' used for in a combination vehicle?",
      options: [
        "Lifting the front of a trailer during coupling procedures",
        "Storing and protecting air brake hoses",
        "Converting a semi-trailer into a full trailer by providing a front axle",
        "Equalizing weight distribution across trailer axles",
      ],
      correctIndex: 2,
      explanation:
        "A converter dolly is a piece of equipment consisting of one or two axles and a fifth wheel used to convert a semi-trailer (which has no front axle) into a full trailer. This allows semi-trailers to be towed as the rear units in a double or triple trailer combination.",
    },
    {
      question: "When must you apply the parking brake on a commercial vehicle?",
      options: [
        "Whenever you leave the cab unattended",
        "Only on grades steeper than 5%",
        "Only when stopped in heavy city traffic",
        "Only when performing a pre-trip inspection",
      ],
      correctIndex: 0,
      explanation:
        "You must always set the parking brake whenever you leave the cab unattended, regardless of grade or stopping duration. Failing to set the parking brake on a parked CMV can result in the vehicle rolling away, causing serious injury or property damage. Chock the wheels whenever the parking brake alone may be insufficient.",
    },
    {
      question: "Under FMCSA regulations, when is a CMV considered 'out of service' for brakes?",
      options: [
        "When any single wheel's brakes are worn past the adjustment limit",
        "When brake air pressure drops below 90 psi",
        "When any air leak of any size is detected",
        "When 20% or more of the service brakes are defective",
      ],
      correctIndex: 3,
      explanation:
        "Under the FMCSA out-of-service criteria, a CMV may be placed out of service when 20% or more of its brakes (based on the number of brake assemblies) are defective, out of adjustment, or non-functional. For a 10-axle vehicle, that means any 2 or more defective brakes trigger an out-of-service order.",
    },
    {
      question: "What must you do before crossing a railroad grade crossing with a CMV that requires stopping?",
      options: [
        "Activate hazard flashers and cross at 5 mph",
        "Stop within 50 feet but no closer than 15 feet, check for trains, then cross",
        "Contact dispatch and wait for clearance before crossing",
        "Stop, exit the cab, and physically check the tracks before crossing",
      ],
      correctIndex: 1,
      explanation:
        "Certain CMVs (those carrying HazMat, passengers, or built to carry liquids) must stop at all railroad grade crossings. You must stop within 50 feet of the nearest rail but no closer than 15 feet. Turn off fans, radio, and A/C, open the window, listen for trains, look both ways, and then cross only if it is safe to do so without stopping on the tracks.",
    },
    {
      question: "What is the CDL disqualification penalty for a second serious traffic violation within 3 years?",
      options: [
        "A formal warning letter from the FMCSA",
        "A 30-day CDL suspension",
        "A 60-day CDL disqualification",
        "Permanent CDL revocation",
      ],
      correctIndex: 2,
      explanation:
        "Under 49 CFR 383.51, a CDL holder who is convicted of two serious traffic violations within a 3-year period is disqualified from operating a CMV for 60 days. A third conviction within 3 years results in a 120-day disqualification. Serious violations include excessive speeding, reckless driving, and improper lane changes.",
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
      question: "How many questions are on the New York CDL General Knowledge test?",
      answer:
        "The New York CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — a passing score of 80% — to pass and receive your CDL learner's permit.",
    },
    {
      question: "What CDL classes are available in New York?",
      answer:
        "New York issues three CDL classes: Class A (combination vehicles over 26,001 lbs GVWR towing a unit over 10,000 lbs), Class B (single vehicles over 26,001 lbs, or towing a vehicle under 10,001 lbs), and Class C (vehicles transporting 16+ passengers or HazMat requiring placards).",
    },
    {
      question: "Are there special truck route requirements in New York City?",
      answer:
        "Yes. New York City has a complex designated truck route system. Commercial vehicles must use designated truck routes unless making a local pickup or delivery. Some bridges and tunnels also have specific restrictions for commercial vehicles based on height, weight, or HazMat cargo. Always review route restrictions before operating in NYC.",
    },
    {
      question: "How long is a New York CDL valid?",
      answer:
        "A New York State CDL is valid for 8 years for most drivers. HazMat endorsement holders must complete a TSA security threat assessment renewal every 5 years. Your DOT medical certificate must remain current for the full CDL validity period.",
    },
    {
      question: "How many knowledge tests do I need to pass for a New York CDL?",
      answer:
        "You must pass the CDL General Knowledge test plus any endorsement-specific knowledge tests required for your vehicle class and intended operation. Common endorsements requiring additional knowledge tests include: HazMat (H), Passenger (P), School Bus (S), Tanker (N), and Doubles/Triples (T). Air Brakes requires a separate knowledge test to remove the restriction.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in New York?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in New York?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your New York DMV website for current fee schedules.",
    },
    {
      question: "Can I take the New York CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the New York DMV for available language options.",
    },
    {
      question: "How long is a New York CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your New York CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the New York CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in New York, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "NY Permit Test", href: "/new-york-dmv-practice-test" },
    { label: "NY Motorcycle Test", href: "/new-york-motorcycle-practice-test" },
    { label: "CA CDL Test", href: "/california-cdl-practice-test" },
    { label: "TX CDL Test", href: "/texas-cdl-practice-test" },
    { label: "FL CDL Test", href: "/florida-cdl-practice-test" },
    { label: "View All States", href: "/" },
  ],
};

export default function NewYorkCDLPage() {
  return <PracticeTestPage {...data} />;
}
