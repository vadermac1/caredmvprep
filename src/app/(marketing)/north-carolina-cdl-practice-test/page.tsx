import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Carolina CDL Practice Test 2025 – Free NC DMV Commercial License Exam Prep",
  description:
    "Free North Carolina CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your NC NCDMV CDL knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/north-carolina-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/north-carolina-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "North Carolina",
  stateAbbr: "NC",
  testLabel: "CDL General Knowledge Test",
  slug: "north-carolina-cdl-practice-test",
  headline: "North Carolina CDL General Knowledge Practice Test",
  intro:
    "Prepare for the North Carolina CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the North Carolina CDL Handbook. All NC NCDMV CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & NC CDL Handbook",
  about: [
    "The NC Division of Motor Vehicles (NCDMV) administers CDL testing in North Carolina. The General Knowledge test consists of 50 multiple-choice questions based on the FMCSA CDL Manual and the North Carolina CDL Handbook. A passing score of 80% or higher — at least 40 correct answers — is required. The General Knowledge test is mandatory for all CDL applicants regardless of which vehicle class or endorsements they are seeking.",
    "North Carolina CDL operators must comply with both federal FMCSA regulations and North Carolina-specific requirements. NC's DWI law (G.S. 20-138.1) applies to commercial vehicle operators at a 0.04% BAC limit while driving a CMV — a DWI conviction in any vehicle triggers CDL disqualification. North Carolina's texting-while-driving ban (G.S. 20-137.4A) applies to commercial drivers. NC's Move Over law (G.S. 20-157) requires commercial vehicle operators to move over for stationary emergency and utility vehicles. CDL holders are also subject to NC's zero-tolerance policy for drivers under 21.",
    "After passing the General Knowledge test, North Carolina CDL applicants must pass endorsement-specific knowledge tests for special vehicle types (HazMat, Tanker, Doubles/Triples, Passenger, School Bus). A CDL skills test — pre-trip inspection, basic vehicle control, and on-road driving — must be completed in the appropriate vehicle class at an NCDMV-approved testing site. A current DOT medical certificate from a federally registered medical examiner must be maintained throughout CDL validity.",
  ],
  sampleQuestions: [
    {
      question: "What BAC limit applies to a North Carolina CDL holder operating a commercial motor vehicle?",
      options: ["0.08% — same as the standard adult DWI limit", "0.04%", "0.02%", "0.00% — no alcohol allowed in a CMV"],
      correctIndex: 1,
      explanation:
        "North Carolina CDL holders are subject to a 0.04% BAC limit while operating a commercial motor vehicle — half the standard adult DWI limit of 0.08%. A DWI conviction in any vehicle (personal or commercial) results in a 1-year CDL disqualification for a first offense and a lifetime disqualification for a second offense under both FMCSA regulations and North Carolina law (G.S. 20-17.4).",
    },
    {
      question: "Under North Carolina law, CDL holders must notify their employer within how many days of any traffic conviction in any vehicle?",
      options: ["7 days", "15 days", "30 days", "60 days"],
      correctIndex: 2,
      explanation:
        "FMCSA regulations (49 CFR 383.31) — adopted into North Carolina CDL law — require all CDL holders to notify their employer within 30 days of any traffic conviction in any state and in any vehicle, including personal vehicles. CDL holders must also notify the NCDMV within 30 days of any out-of-state conviction. Failure to notify is itself a disqualifying violation.",
    },
    {
      question: "What is the purpose of a Driver Vehicle Inspection Report (DVIR) under FMCSA regulations?",
      options: [
        "A form drivers fill out only when an accident occurs",
        "A federal tax document required for long-haul drivers",
        "A required daily record of vehicle condition defects found before or after each duty period",
        "A voluntary log kept by drivers to track maintenance intervals",
      ],
      correctIndex: 2,
      explanation:
        "A Driver Vehicle Inspection Report (DVIR) is a federal requirement under 49 CFR 396.11 for property-carrying CMV operators. Drivers must prepare a written DVIR at the end of each duty day for regulated vehicles, listing any defects found during operation. The carrier must repair certified defects before the vehicle is used again. The next driver must review and sign the DVIR before driving. This system creates a documented record of vehicle condition and required repairs.",
    },
    {
      question: "North Carolina's Move Over law applies to CDL operators on North Carolina highways. What is required?",
      options: [
        "Only passenger vehicle drivers must comply — CDL vehicles are exempt due to their size",
        "CDL operators must move over one lane or reduce speed to a safe and reasonable speed when approaching stopped emergency or utility vehicles",
        "CDL operators must stop behind any stationary emergency vehicle",
        "CDL operators must use the air horn to warn emergency crews and maintain speed",
      ],
      correctIndex: 1,
      explanation:
        "North Carolina's Move Over law (G.S. 20-157) applies to ALL vehicles, including commercial trucks and buses. When approaching a stationary emergency, law enforcement, highway maintenance, or utility vehicle with activated lights on a multi-lane highway, CDL operators must move over one lane or reduce speed to a safe and reasonable speed if a lane change is not safely possible. Given the size and stopping distance of commercial vehicles, extra caution is required near roadside incidents.",
    },
    {
      question: "What is the correct method for coupling a tractor to a semi-trailer?",
      options: [
        "Back under the trailer until the fifth wheel automatically latches, then drive away",
        "Position the tractor, lower the landing gear, back under the trailer, check the coupling, connect air lines and electrical, then raise the landing gear",
        "Connect air lines first, then back under the trailer while someone guides from outside",
        "Simply back up until the kingpin locks into the fifth wheel — no other checks needed",
      ],
      correctIndex: 1,
      explanation:
        "The correct tractor-trailer coupling sequence is: position the tractor squarely in front of the trailer, check the trailer height, back slowly under the trailer, check that the fifth wheel has engaged the kingpin (tug test — try to pull away in low gear with brakes set), connect air lines and electrical connections, raise the landing gear, check clearance between the tractor frame and trailer, and perform a final walkaround inspection. A missed step — especially the tug test — can cause the trailer to separate from the tractor while driving.",
    },
    {
      question: "Under FMCSA regulations, what is the minimum tread depth required for tires on the drive axles of a commercial vehicle?",
      options: ["4/32 inch", "2/32 inch", "6/32 inch", "1/32 inch"],
      correctIndex: 1,
      explanation:
        "FMCSA regulations require a minimum tread depth of 2/32 inch on drive axle and trailer axle tires. Front (steering) axle tires must have at least 4/32 inch tread depth. Tires below the minimum legal tread depth are illegal and must be replaced before driving. Worn tires significantly increase stopping distances and blowout risk, particularly dangerous on loaded commercial vehicles that take much longer to stop than passenger cars.",
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
      question: "How many questions are on the North Carolina CDL General Knowledge test?",
      answer:
        "The North Carolina CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — an 80% passing score — to pass and proceed to endorsement knowledge tests and the skills test.",
    },
    {
      question: "What CDL classes does North Carolina issue?",
      answer:
        "North Carolina issues Class A (combination vehicles with GCWR over 26,001 lbs and towed unit over 10,000 lbs GVWR), Class B (single vehicles over 26,001 lbs GVWR or towing under 10,001 lbs), and Class C (16+ passengers or HazMat requiring placards). Each class requires passing the General Knowledge test, applicable endorsement tests, and a skills test.",
    },
    {
      question: "How long is a North Carolina CDL valid?",
      answer:
        "A North Carolina CDL is valid for 8 years. Your DOT medical certificate must remain current throughout that period — typically requiring renewal every 24 months (or annually for certain medical conditions). HazMat endorsement holders must renew their TSA security threat assessment every 5 years. NC also requires CDL holders to self-certify their medical status category annually.",
    },
    {
      question: "What happens to a North Carolina CDL after a DWI conviction?",
      answer:
        "A first DWI conviction in any vehicle (personal or commercial) results in a minimum 1-year CDL disqualification in North Carolina. If the DWI occurred while transporting hazardous materials, the disqualification is 3 years for a first offense. A second DWI conviction at any time in the driver's lifetime results in a permanent CDL disqualification. These disqualifications apply regardless of whether the driver was operating a commercial or personal vehicle at the time.",
    },
    {
      question: "Where can I take the North Carolina CDL skills test?",
      answer:
        "North Carolina CDL skills tests are conducted at NCDMV-approved driver license offices and third-party testing sites. You must provide the appropriate commercial vehicle for the skills test. The test includes a pre-trip vehicle inspection, basic vehicle control (backing and maneuvering exercises), and an on-road driving test. Visit ncdot.gov/dmv for a list of CDL testing locations and scheduling information.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in North Carolina?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in North Carolina?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your North Carolina DMV website for current fee schedules.",
    },
    {
      question: "Can I take the North Carolina CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the North Carolina DMV for available language options.",
    },
    {
      question: "How long is a North Carolina CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your North Carolina CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the North Carolina CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in North Carolina, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "NC Driver's License", href: "/north-carolina-dmv-practice-test" },
    { label: "NC Motorcycle Test", href: "/north-carolina-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Hazmat", href: "/cdl-hazmat" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function NorthCarolinaCDLPage() {
  return <PracticeTestPage {...data} />;
}
