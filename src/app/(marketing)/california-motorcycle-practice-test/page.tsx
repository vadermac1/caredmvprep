import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "California Motorcycle Practice Test 2025 – Free CA DMV M1 Endorsement Prep",
  description:
    "Free California motorcycle practice test based on the official CA Motorcycle Handbook. 30 questions covering riding skills, safety, and traffic laws. Pass your M1 license test.",
  alternates: { canonical: "https://caredmvprep.com/california-motorcycle-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/california-motorcycle-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "California",
  stateAbbr: "CA",
  testLabel: "Motorcycle Practice Test",
  slug: "california-motorcycle-practice-test",
  headline: "California Motorcycle Practice Test (M1)",
  intro:
    "Prepare for your California M1 motorcycle license knowledge test with free practice questions based on the official 2025 California Motorcycle Handbook. Covers riding techniques, safety strategies, and traffic laws specific to motorcyclists.",
  basedOn: "California Motorcycle Handbook (2025)",
  about: [
    "The California DMV motorcycle knowledge test consists of 30 questions drawn from the California Motorcycle Handbook. To pass, you must answer at least 24 questions correctly — an 80% passing score. The test is required to obtain your M1 motorcycle license or add a motorcycle endorsement to your existing Class C license.",
    "The knowledge test covers safe riding posture and positioning, protective gear, handling hazardous conditions, sharing the road with other vehicles, alcohol and drug awareness, and motorcycle-specific traffic laws.",
    "After passing the knowledge test, most riders are also required to complete the California Motorcyclist Safety Program (CMSP) Basic RideCheck or pass a riding skills test at the DMV. Completing an approved CMSP course may waive the skills test requirement.",
  ],
  sampleQuestions: [
    {
      question: "What is the most effective method for stopping a motorcycle quickly?",
      options: [
        "Use only the front brake",
        "Use only the rear brake",
        "Apply both front and rear brakes simultaneously",
        "Downshift rapidly to slow down",
      ],
      correctIndex: 2,
      explanation:
        "Applying both brakes together — the front brake lever and rear brake pedal — provides the most stopping power. The front brake provides approximately 70% of total braking force. Squeeze the front brake progressively to avoid locking the wheel.",
    },
    {
      question: "When riding in a group, the recommended formation is:",
      options: ["Single file", "Staggered formation", "Side-by-side", "Two-by-two"],
      correctIndex: 1,
      explanation:
        "A staggered formation is recommended for group riding. It allows each rider to maintain a 2-second following distance from the rider directly ahead and a 1-second gap from the rider diagonally in front. This provides space to react while keeping the group compact.",
    },
    {
      question: "What should you do when riding over rain grooves or uneven pavement?",
      options: [
        "Brake hard immediately",
        "Weave to avoid the grooves",
        "Maintain your speed and hold the handlebars firmly",
        "Lean sharply to maintain balance",
      ],
      correctIndex: 2,
      explanation:
        "When crossing rain grooves or rough pavement, hold the handlebars firmly, keep your speed steady, and avoid sudden steering inputs. The motorcycle may feel like it is wandering, but it will track safely if you remain relaxed and do not fight the handlebars.",
    },
    {
      question: "Before T-CLOCS inspection, what does 'T' stand for?",
      options: ["Transmission", "Turn signals", "Temperature", "Tires and Wheels"],
      correctIndex: 3,
      explanation:
        "T-CLOCS stands for Tires and Wheels, Controls, Lights and Electrics, Oil and Other Fluids, Chassis, and Stands. Performing this pre-ride inspection before every trip helps identify mechanical problems before they become dangerous on the road.",
    },
    {
      question: "When is it safest to ride in the right portion of your lane?",
      options: [
        "When following a large vehicle",
        "When being passed by another vehicle",
        "When passing a row of parked cars",
        "When making a left turn",
      ],
      correctIndex: 0,
      explanation:
        "When following a large vehicle such as a truck or bus, riding in the right portion of your lane gives you the best view around the vehicle and makes you more visible to the driver in their mirrors. Avoid riding directly behind large vehicles in their blind spots.",
    },
    {
      question: "What is the primary cause of motorcycle accidents involving another vehicle?",
      options: [
        "Excessive speed by the motorcyclist",
        "Poor road conditions",
        "Mechanical failure",
        "Other drivers failing to see the motorcycle",
      ],
      correctIndex: 3,
      explanation:
        "The most common cause of motorcycle accidents involving other vehicles is that the other driver failed to see the motorcycle. Riding in a well-lit position in your lane, wearing bright or reflective gear, and using your headlight at all times helps improve your visibility.",
    },
    {
      question: "Alcohol affects a motorcycle rider's ability primarily by:",
      options: ["Improving focus and reducing reaction time", "Reducing balance, coordination, and judgment", "Increasing grip strength on the handlebars", "Having no effect at speeds under 25 mph"],
      correctIndex: 1,
      explanation:
        "Alcohol impairs balance, reduces coordination, slows reaction time, and impairs judgment — all critical skills for motorcycle operation. Even one or two drinks can significantly increase the risk of a crash. Riding under the influence of alcohol is illegal in all 50 states and is a leading cause of fatal motorcycle crashes.",
    },
    {
      question: "When making a turn on a motorcycle, you should:",
      options: ["Slow down after you enter the turn", "Apply the brakes throughout the turn", "Look through the turn toward your exit point", "Lean opposite to the direction of the turn"],
      correctIndex: 2,
      explanation:
        "Look through the turn toward where you want to go — your exit point. Your motorcycle will naturally follow your vision. Slow down before entering the turn (not during), lean in the direction of the turn, and roll on the throttle smoothly as you exit. Never brake hard while leaning in a turn.",
    },
    {
      question: "Which part of the body is injured in the greatest percentage of fatal motorcycle crashes?",
      options: ["Arms and hands", "Legs and feet", "Chest and torso", "Head and neck"],
      correctIndex: 3,
      explanation:
        "Head and neck injuries account for the greatest percentage of fatalities in motorcycle crashes. This is why wearing a DOT-approved helmet is the single most effective protection a rider can use. Full-face helmets provide the most coverage, protecting the chin and face in addition to the skull and brain.",
    },
    {
      question: "When riding at night, which of the following is most important?",
      options: ["Increasing your speed to reduce time on the road", "Using high beams at all times", "Reducing speed and increasing following distance", "Wearing darker clothing to blend with traffic"],
      correctIndex: 2,
      explanation:
        "At night, reduce your speed and increase your following distance to compensate for reduced visibility. Your headlight only illuminates a limited distance ahead, and road hazards — potholes, debris, animals — are much harder to see. Use your high beams when no oncoming traffic is present, and wear reflective gear to improve your visibility to other drivers.",
    },
  ],
  faqs: [
    {
      question: "How many questions are on the California motorcycle knowledge test?",
      answer:
        "The California DMV motorcycle knowledge test has 30 questions. You must answer at least 24 correctly — a passing score of 80% — to receive your M1 instruction permit or motorcycle license.",
    },
    {
      question: "What is the difference between an M1 and M2 license in California?",
      answer:
        "An M1 license authorizes you to operate any two-wheel motorcycle or motor-driven cycle. An M2 license covers motorized bicycles (mopeds) and scooters only. The knowledge test for M1 and M2 is the same, but the M1 also requires a riding skills evaluation.",
    },
    {
      question: "Do I need to take a motorcycle safety course in California?",
      answer:
        "You are not required to take a safety course, but completing an approved California Motorcyclist Safety Program (CMSP) Basic RideCheck or DL389 waives the riding skills test at the DMV for riders under 21. For riders 21 and older, completing the course is strongly recommended but the skills test can be taken at the DMV instead.",
    },
    {
      question: "What gear do I need to wear to ride a motorcycle in California?",
      answer:
        "California law requires all motorcycle riders and passengers to wear a DOT-compliant helmet at all times. While a helmet is the only legally required piece of gear, the California Motorcycle Handbook strongly recommends a jacket, gloves, sturdy boots, and eye protection for maximum protection.",
    },
    {
      question: "Can I lane split on a motorcycle in California?",
      answer:
        "Yes — California is the first state to formally legalize lane splitting. The California DMV and CHP guidelines recommend that motorcyclists practice lane splitting at speeds no more than 10 mph faster than surrounding traffic, and never above 30 mph. Lane splitting at unsafe speeds is still illegal.",
    },
    {
      question: "What documents do I need to bring to the California DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in California, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the California DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the California motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in California, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the California DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in California, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including California, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in California?",
      answer:
        "In California, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the California DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in California?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. California DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "CA Permit Test", href: "/california-dmv-practice-test" },
    { label: "CA CDL Test", href: "/california-cdl-practice-test" },
    { label: "Texas Permit Test", href: "/texas-dmv-practice-test" },
    { label: "Florida Permit Test", href: "/florida-dmv-practice-test" },
    { label: "Motorcycle Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/" },
  ],
};

export default function CaliforniaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
