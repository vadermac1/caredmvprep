import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Pennsylvania CDL Practice Test 2025 – Free PA PennDOT Commercial License Exam Prep",
  description:
    "Free Pennsylvania CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your PA PennDOT CDL knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/pennsylvania-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/pennsylvania-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Pennsylvania",
  stateAbbr: "PA",
  testLabel: "CDL General Knowledge Test",
  slug: "pennsylvania-cdl-practice-test",
  headline: "Pennsylvania CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Pennsylvania CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Pennsylvania CDL Manual. All PA CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & PA CDL Manual",
  about: [
    "PennDOT administers CDL testing in Pennsylvania. The General Knowledge test consists of 50 multiple-choice questions based on the FMCSA CDL Manual and the Pennsylvania CDL Manual. A passing score of 80% or higher — at least 40 correct answers — is required. The General Knowledge test is mandatory for all CDL applicants regardless of which class (A, B, or C) or endorsements (HazMat, Tanker, Doubles/Triples, Passenger, School Bus) you are seeking.",
    "Pennsylvania CDL operators must comply with both federal FMCSA regulations and Pennsylvania-specific requirements. Pennsylvania's annual vehicle safety inspection requirement extends to commercial vehicles — CDL operators are responsible for ensuring their vehicles have current inspection stickers. Pennsylvania's DUI tiered system applies to CDL holders: a DUI in any vehicle — personal or commercial — triggers CDL disqualification. Pennsylvania also requires CDL holders to notify their employer within 30 days of any traffic conviction in any vehicle.",
    "After passing the General Knowledge test, Pennsylvania CDL applicants must pass endorsement-specific knowledge tests for any special vehicle types. A CDL skills test — pre-trip inspection, basic vehicle control, and an on-road test — must be completed in the appropriate vehicle class. PennDOT coordinates CDL skills testing through approved third-party testing sites. Pennsylvania also requires a DOT medical certificate (obtained through a DOT-certified medical examiner) to be maintained throughout CDL validity.",
  ],
  sampleQuestions: [
    {
      question: "Under FMCSA regulations, what is the maximum total hours a property-carrying driver can be on duty in a 7-day period?",
      options: ["60 hours", "70 hours", "80 hours", "No weekly limit exists"],
      correctIndex: 0,
      explanation:
        "Under the 60-hour/7-day rule (or 70-hour/8-day rule for carriers operating 7 days per week), property-carrying drivers may not drive after accumulating 60 (or 70) hours of on-duty time in the relevant period. After reaching the limit, the driver must take 34 consecutive hours off duty before returning to work. This cycle ensures drivers do not accumulate excessive fatigue over a rolling week.",
    },
    {
      question: "Pennsylvania requires commercial vehicles to have a current:",
      options: [
        "Federal DOT compliance sticker",
        "Annual state safety inspection",
        "Emissions test every 2 years",
        "Commercial vehicle weight permit renewed annually",
      ],
      correctIndex: 1,
      explanation:
        "Pennsylvania requires all motor vehicles — including commercial vehicles — to undergo an annual state safety inspection at a licensed inspection station. CDL operators are responsible for ensuring their vehicles have a valid current inspection sticker. An expired inspection on a commercial vehicle is a citable violation that can result in the vehicle being placed out of service.",
    },
    {
      question: "What is the correct way to test air brake pressure in a commercial vehicle during a pre-trip inspection?",
      options: [
        "Drive slowly and apply brakes to feel if they hold",
        "Apply and hold the brake pedal for 1 minute while watching the gauge for pressure loss",
        "Start the engine and listen for unusual sounds from the air system",
        "Air brakes do not require testing — only hydraulic brakes need inspection",
      ],
      correctIndex: 1,
      explanation:
        "To test air brake system integrity, build air pressure to governor cutoff (typically 120–130 psi), turn off the engine, apply the foot brake firmly, and hold for 1 minute. In a single vehicle, air pressure should not drop more than 3 psi in 1 minute. In a combination vehicle, the allowable drop is 4 psi. Pressure loss greater than these limits indicates a leak that must be repaired before driving.",
    },
    {
      question: "How does a CDL DUI conviction in Pennsylvania affect your commercial driver's license?",
      options: [
        "It only affects your personal vehicle privileges",
        "First offense causes a 1-year CDL disqualification; second offense is lifetime",
        "It results in a 90-day suspension with no CDL impact",
        "Only a DUI in a commercial vehicle affects your CDL",
      ],
      correctIndex: 1,
      explanation:
        "In Pennsylvania — and under FMCSA regulations — a DUI conviction in ANY vehicle (personal or commercial) triggers CDL disqualification. A first DUI offense results in a minimum 1-year CDL disqualification. A second DUI offense results in a lifetime CDL disqualification. Pennsylvania's tiered DUI system (General/High/Highest BAC) also affects the severity of criminal penalties, but CDL disqualification applies regardless of the tier.",
    },
    {
      question: "What cargo securement frequency is required by FMCSA regulations?",
      options: [
        "Only at the start of the trip",
        "Every 50 miles for the first 150 miles, then every 3 hours or 150 miles thereafter",
        "Within the first 50 miles, then every 3 hours or 150 miles, and after any duty status change",
        "Once per day at the start of each shift",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA regulations (49 CFR 392.9) require cargo to be inspected and securement verified: (1) within the first 50 miles of a trip, (2) every 3 hours or 150 miles thereafter (whichever comes first), and (3) after any change in duty status. Loose or improperly secured cargo is a significant highway safety hazard and is strictly enforced during roadside inspections.",
    },
    {
      question: "When descending a long, steep hill in Pennsylvania, what is the correct technique for maintaining safe speed?",
      options: [
        "Apply continuous steady brake pressure throughout the entire descent",
        "Use a gear that limits speed to 5 mph above the designated safe speed, with intermittent braking",
        "Select the appropriate low gear before starting the descent and use controlled brake applications",
        "Let the truck coast in neutral to conserve fuel on the descent",
      ],
      correctIndex: 2,
      explanation:
        "Before beginning a steep descent in Pennsylvania's mountainous terrain, select a gear low enough to control your speed using engine braking alone. Apply the brakes to reduce speed to the posted safe speed, then release. Repeat as needed (snub braking). Never coast in neutral — it removes engine braking and can lead to brake fade (overheating). Brake fade from continuous brake application is a leading cause of runaway truck incidents.",
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
      question: "How many questions are on the Pennsylvania CDL General Knowledge test?",
      answer:
        "The Pennsylvania CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — an 80% passing score — to pass and proceed to endorsement tests.",
    },
    {
      question: "What CDL classes does Pennsylvania issue?",
      answer:
        "Pennsylvania issues Class A (combination vehicles over 26,001 lbs GVWR with towed unit over 10,000 lbs GVWR), Class B (single vehicles over 26,001 lbs or towing under 10,001 lbs), and Class C (16+ passengers or HazMat placards). Each class requires the General Knowledge test plus a skills test in the appropriate vehicle class.",
    },
    {
      question: "Does Pennsylvania's annual vehicle inspection apply to commercial vehicles?",
      answer:
        "Yes. All Pennsylvania-registered vehicles including commercial trucks and buses must pass an annual state safety inspection. CDL operators are responsible for ensuring their vehicle has a valid inspection sticker. An expired commercial vehicle inspection can result in the vehicle being placed out of service during a roadside inspection.",
    },
    {
      question: "How long is a Pennsylvania CDL valid?",
      answer:
        "A Pennsylvania CDL is valid for 4 years. Your DOT medical certificate must remain current throughout that period — typically requiring a DOT physical examination every 24 months, or annually for certain medical conditions. HazMat endorsement holders must renew their TSA security threat assessment every 5 years.",
    },
    {
      question: "What is a Pennsylvania CDL employer notification requirement?",
      answer:
        "Pennsylvania CDL holders (along with all commercial drivers under FMCSA rules) must notify their employer within 30 days of any traffic conviction in any vehicle — personal or commercial — in any state. Drivers must also notify their state of CDL issuance (PennDOT) within 30 days of any conviction in another state. Failure to notify is itself a violation that can result in CDL disqualification.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Pennsylvania?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Pennsylvania?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Pennsylvania DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Pennsylvania CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Pennsylvania DMV for available language options.",
    },
    {
      question: "How long is a Pennsylvania CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Pennsylvania CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Pennsylvania CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Pennsylvania, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "PA Driver's License", href: "/pennsylvania-dmv-practice-test" },
    { label: "PA Motorcycle Test", href: "/pennsylvania-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL General Knowledge", href: "/cdl-general-knowledge" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function PennsylvaniaCDLPage() {
  return <PracticeTestPage {...data} />;
}
