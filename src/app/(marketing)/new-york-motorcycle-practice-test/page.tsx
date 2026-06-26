import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New York Motorcycle Practice Test 2025 – Free NY Class M License Exam Prep",
  description:
    "Free New York motorcycle practice test based on the official NY Motorcycle Manual. 20 questions, detailed explanations. Pass your NY Class M knowledge test the first time.",
  alternates: { canonical: "https://caredmvprep.com/new-york-motorcycle-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/new-york-motorcycle-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New York",
  stateAbbr: "NY",
  testLabel: "Motorcycle Practice Test",
  slug: "new-york-motorcycle-practice-test",
  headline: "New York Motorcycle License Practice Test (Class M)",
  intro:
    "Prepare for your New York DMV Class M motorcycle knowledge test with free practice questions based on the official New York Motorcycle Manual. Covers safe riding techniques, gear requirements, New York helmet laws, and hazard awareness.",
  numToPass: "14 correct (70%)",
  basedOn: "New York Motorcycle Manual (2025)",
  about: [
    "The New York DMV motorcycle knowledge test consists of 20 questions based on the New York Motorcycle Manual. To pass, you must answer at least 14 questions correctly — a 70% passing score. The test is required to obtain a Class M (motorcycle) or Class MJ (motorcycle junior) driver's license.",
    "New York State requires all motorcycle operators and passengers to wear a DOT-approved helmet, regardless of age. New York is one of the strictest states in the country for helmet laws — there are no age-based exemptions. Eye protection is also strongly recommended, as most motorcycles do not have windshields.",
    "Completing the Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent New York-approved safety course can waive the DMV road skills test. Our practice questions cover all content areas of the NY Motorcycle Manual to help you pass the knowledge test on your first attempt.",
  ],
  sampleQuestions: [
    {
      question: "What is New York State's helmet law for motorcycle riders and passengers?",
      options: [
        "Helmets are optional for riders 21 and older",
        "Helmets are required only for riders under 18",
        "Helmets are required only on highways and expressways",
        "Helmets are required for all motorcycle operators and passengers",
      ],
      correctIndex: 3,
      explanation:
        "New York State Vehicle and Traffic Law §381(6) requires all motorcycle operators AND passengers to wear a DOT-approved helmet at all times, regardless of age. Unlike some states, New York has no age-based exemption. Helmets must meet federal Department of Transportation (DOT) safety standards.",
    },
    {
      question: "When riding over a slippery surface such as wet leaves or loose gravel, what should you do?",
      options: [
        "Increase speed to pass through the area quickly",
        "Reduce speed and avoid sudden braking or sharp turns",
        "Use only the front brake for maximum control",
        "Lean the motorcycle sharply to maintain balance",
      ],
      correctIndex: 1,
      explanation:
        "When riding over slippery surfaces, slow down before reaching the hazard, keep the motorcycle upright, and avoid abrupt braking or steering inputs. Sudden actions on a low-traction surface can cause a loss of control. If possible, avoid the hazard entirely by adjusting your lane position.",
    },
    {
      question: "What is the most common hazard for motorcyclists at intersections in New York?",
      options: [
        "Vehicles making left turns in front of the motorcycle",
        "Potholes and road surface defects",
        "Traffic signals changing unexpectedly",
        "Pedestrians crossing mid-block",
      ],
      correctIndex: 0,
      explanation:
        "The most common motorcycle collision at intersections involves a vehicle making a left turn into the path of an oncoming motorcycle. The driver often misjudges the motorcycle's speed or simply fails to see it. Approach all intersections with caution, reduce speed, and be prepared to stop or swerve.",
    },
    {
      question: "In New York, what is the legal method for carrying a passenger on a motorcycle?",
      options: [
        "The passenger may sit in front of the operator",
        "Any seating arrangement the operator considers safe",
        "The passenger must use a permanent rear seat and keep both feet on footrests",
        "Passengers are not permitted on any motorcycle in New York",
      ],
      correctIndex: 2,
      explanation:
        "New York law requires motorcycle passengers to ride on a permanent seat attached behind the operator and to keep both feet on footrests at all times. The motorcycle must be designed to carry a passenger. Allowing a passenger to sit unsafely or without proper footrests is a traffic violation.",
    },
    {
      question: "What is the recommended technique when entering a curve on a motorcycle?",
      options: [
        "Accelerate hard to exit the curve as quickly as possible",
        "Apply the brakes in the middle of the curve",
        "Maintain the exact same speed from entry to exit",
        "Look through the curve, lean smoothly, and accelerate gently as you exit",
      ],
      correctIndex: 3,
      explanation:
        "The proper curve technique is: reduce speed before the curve (on the straight approach), look through the curve toward your intended path, lean the motorcycle smoothly in the direction of the turn, then gradually accelerate as you exit. This keeps the tires loaded and maintains traction throughout.",
    },
    {
      question: "If your motorcycle begins to skid, what is the correct immediate response?",
      options: [
        "Apply both brakes as hard as possible",
        "Release the brake causing the skid, then reapply smoothly",
        "Turn the handlebars sharply in the opposite direction",
        "Pull in the clutch and allow the motorcycle to coast",
      ],
      correctIndex: 1,
      explanation:
        "If a wheel locks and causes a skid, immediately release the brake on that wheel. This allows the tire to spin again and regain traction. Once traction is restored, reapply the brake smoothly and progressively. Keeping the brake fully applied while the wheel is locked will continue the skid.",
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
      question: "How many questions are on the New York motorcycle knowledge test?",
      answer:
        "The New York motorcycle knowledge test has 20 questions. You must answer at least 14 correctly — a passing score of 70% — to pass.",
    },
    {
      question: "Is the New York motorcycle helmet law one of the strictest in the US?",
      answer:
        "Yes. New York requires all motorcycle operators and passengers to wear a DOT-approved helmet at all times, with no age-based exemptions. This is one of the strictest helmet laws in the country. Failure to wear a helmet is a traffic violation with fines and insurance penalties.",
    },
    {
      question: "Can I waive the motorcycle skills test in New York?",
      answer:
        "Yes. Completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse in New York can waive the DMV road skills test. You must still pass the written knowledge test. The MSF course is strongly recommended for all new riders — it also earns an insurance discount from many insurers.",
    },
    {
      question: "What is the difference between a Class M and Class MJ motorcycle license in New York?",
      answer:
        "A Class M license is for riders 18 and older with no restrictions. A Class MJ (motorcycle junior) license is issued to riders 16–17 and comes with graduated restrictions: no passengers, no night riding (9 PM–5 AM), and no expressway driving. Restrictions lift when the rider turns 18.",
    },
    {
      question: "Is lane splitting legal in New York?",
      answer:
        "No. Lane splitting — riding between lanes of traffic — is illegal in New York State. New York Vehicle and Traffic Law does not permit motorcycles to ride between lanes or between traffic and the curb.",
    },
    {
      question: "What documents do I need to bring to the New York DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in New York, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the New York DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the New York motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in New York, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the New York DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in New York, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including New York, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in New York?",
      answer:
        "In New York, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the New York DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in New York?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. New York DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "NY Permit Test", href: "/new-york-dmv-practice-test" },
    { label: "NY CDL Test", href: "/new-york-cdl-practice-test" },
    { label: "CA Motorcycle Test", href: "/california-motorcycle-practice-test" },
    { label: "TX Motorcycle Test", href: "/texas-motorcycle-practice-test" },
    { label: "FL Motorcycle Test", href: "/florida-motorcycle-practice-test" },
    { label: "View All States", href: "/" },
  ],
};

export default function NewYorkMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
