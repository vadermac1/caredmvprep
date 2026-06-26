import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Florida CDL General Knowledge Practice Test 2025 – Free FL Commercial License Prep",
  description:
    "Free Florida CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions covering pre-trip inspection, braking, cargo, and hours of service. Pass your FL CDL test.",
  alternates: { canonical: "https://caredmvprep.com/florida-cdl-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/florida-cdl-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Florida",
  stateAbbr: "FL",
  testLabel: "CDL General Knowledge Test",
  slug: "florida-cdl-practice-test",
  headline: "Florida CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Florida CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Florida Commercial Driver License Handbook. All Florida CDL applicants must pass this test before endorsement exams.",
  numToPass: "40 correct (80%)",
  basedOn: "FMCSA CDL Manual & Florida CDL Handbook",
  about: [
    "The Florida CDL General Knowledge test consists of 50 multiple-choice questions based on the FMCSA CDL Manual and the Florida Commercial Driver License Handbook. A passing score of 80% — at least 40 correct answers — is required. The General Knowledge test is mandatory for all CDL applicants regardless of vehicle class or endorsements sought.",
    "Florida is a key distribution hub with high commercial vehicle traffic on its interstates and toll roads. CDL drivers must be familiar with Florida-specific regulations such as the Statewide I-4 corridor weight limits, agricultural vehicle exemptions, and Florida's strict DUI laws for commercial drivers (BAC limit of 0.04%).",
    "After passing the General Knowledge test, CDL applicants must also pass any required endorsement knowledge tests and a skills test (pre-trip inspection, basic vehicle control, and road test) in the vehicle class they are applying for.",
  ],
  sampleQuestions: [
    {
      question: "What is a 'runaway truck ramp' designed to do?",
      options: [
        "Stop a CMV that has lost its brakes on a steep downgrade",
        "Provide an alternative route around road construction",
        "Allow trucks to bypass weigh stations legally",
        "Enable large trucks to make U-turns safely",
      ],
      correctIndex: 0,
      explanation:
        "Runaway truck ramps (also called emergency escape ramps) are designed to safely stop a CMV that has lost braking ability on a steep downgrade. They use gravel, sand, or an ascending grade to absorb the vehicle's kinetic energy. Using a ramp is far safer than trying to brake on the road or crashing. Always note ramp locations before descending a steep grade.",
    },
    {
      question: "What must a CDL holder do if convicted of a traffic violation while driving a personal vehicle?",
      options: [
        "Nothing — personal vehicle violations have no effect on a CDL",
        "Report it only if the violation involves alcohol or drugs",
        "Report it to the state DMV within 30 days",
        "Notify their employer within 30 days of the conviction",
      ],
      correctIndex: 3,
      explanation:
        "Under 49 CFR 383.31, CDL holders must notify their employer within 30 days of a conviction for any traffic violation — including violations that occur in a personal vehicle. This requirement applies regardless of whether the employer already knows about the violation. Failing to report can result in disqualification.",
    },
    {
      question: "What is the safest way to recover from a front-wheel skid in a CMV?",
      options: [
        "Turn into the skid and accelerate to regain control",
        "Stop accelerating and let the front wheels regain traction naturally",
        "Apply the parking brake to lock the rear wheels",
        "Steer sharply in the opposite direction of the skid",
      ],
      correctIndex: 1,
      explanation:
        "A front-wheel skid usually means the front wheels have lost traction due to over-braking or excessive speed on a slippery surface. The correct response is to release brake pressure and stop accelerating, allowing the tires to regain grip. Steering or braking more aggressively will worsen the skid.",
    },
    {
      question: "When pulling doubles or triples, which trailer should be placed directly behind the tractor?",
      options: [
        "The heaviest trailer always goes at the end",
        "The lightest trailer should always be placed first",
        "The heaviest trailer should be placed directly behind the tractor",
        "The order of trailers does not affect safety",
      ],
      correctIndex: 2,
      explanation:
        "When coupling doubles or triples, the heaviest trailer must always be placed first — directly behind the tractor. Lighter trailers go at the rear of the combination. Placing a lighter trailer first creates instability and dramatically increases the risk of a rearward amplification ('crack-the-whip') rollover during maneuvers.",
    },
    {
      question: "What should you do if you miss your exit on an expressway while driving a CMV?",
      options: [
        "Continue to the next exit and use an approved turnaround",
        "Stop on the shoulder and back up to the exit",
        "Use a crossover in the median to reverse direction",
        "Pull into the median and wait for a gap in traffic",
      ],
      correctIndex: 0,
      explanation:
        "If you miss your exit, continue to the next exit and use a legal turnaround or crossover designed for large vehicles. Stopping and backing up on an expressway shoulder is extremely dangerous and illegal. Never use a median crossover that is not designated for commercial vehicles — the surface may not support your weight.",
    },
    {
      question: "What does a yellow diamond-shaped warning sign featuring a downward-pointing truck symbol indicate?",
      options: [
        "A truck weigh station is ahead",
        "No commercial trucks are permitted beyond this point",
        "The designated truck route begins at this point",
        "Steep downgrade ahead — trucks must use a low gear",
      ],
      correctIndex: 3,
      explanation:
        "A yellow diamond sign with a truck on a downgrade symbol warns of a steep hill ahead where trucks must shift into a low gear before beginning the descent. Failing to downshift before a long, steep grade can cause brake fade or brake failure. Always check and adjust your gear selection before starting the descent.",
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
      question: "How many questions are on the Florida CDL General Knowledge test?",
      answer:
        "The Florida CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — a passing score of 80% — to pass.",
    },
    {
      question: "What CDL classes are available in Florida?",
      answer:
        "Florida issues three CDL classes: Class A (combination vehicles with GVWR over 26,001 lbs towing a unit over 10,000 lbs), Class B (single vehicles over 26,001 lbs, or towing vehicles under 10,001 lbs), and Class C (vehicles transporting 16 or more passengers or carrying HazMat requiring placards).",
    },
    {
      question: "What is the BAC limit for commercial drivers in Florida?",
      answer:
        "Florida, like all states, applies the federal commercial driver BAC limit of 0.04% — half the standard 0.08% limit for non-commercial drivers. A CDL holder found operating a CMV with a BAC of 0.04% or higher is subject to immediate disqualification from CDL driving.",
    },
    {
      question: "How long is a Florida CDL valid?",
      answer:
        "A Florida CDL is valid for 8 years. If you hold a HazMat endorsement, you must complete a TSA threat assessment renewal every 5 years. Your DOT medical certificate must remain current for the entire duration of your CDL.",
    },
    {
      question: "Do I need a CDL learner's permit before taking the skills test?",
      answer:
        "Yes. You must obtain a Florida CDL learner's permit (CLP) by passing the General Knowledge test and any required endorsement knowledge tests. You must hold the CLP for a minimum of 14 days before scheduling your CDL skills test.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Florida?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Florida?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Florida DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Florida CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Florida DMV for available language options.",
    },
    {
      question: "How long is a Florida CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Florida CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Florida CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Florida, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "FL Permit Test", href: "/florida-dmv-practice-test" },
    { label: "FL Motorcycle Test", href: "/florida-motorcycle-practice-test" },
    { label: "CA CDL Test", href: "/california-cdl-practice-test" },
    { label: "TX CDL Test", href: "/texas-cdl-practice-test" },
    { label: "NY CDL Test", href: "/new-york-cdl-practice-test" },
    { label: "View All States", href: "/" },
  ],
};

export default function FloridaCDLPage() {
  return <PracticeTestPage {...data} />;
}
