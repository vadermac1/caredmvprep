import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Florida Motorcycle Practice Test 2025 – Free FL Motorcycle Endorsement Prep",
  description:
    "Free Florida motorcycle practice test based on the official Florida Motorcycle Handbook. Covers riding techniques, safety, and FL motorcycle laws. Pass your FL endorsement test.",
  alternates: { canonical: "https://caredmvprep.com/florida-motorcycle-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/florida-motorcycle-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Florida",
  stateAbbr: "FL",
  testLabel: "Motorcycle Practice Test",
  slug: "florida-motorcycle-practice-test",
  headline: "Florida Motorcycle Endorsement Practice Test",
  intro:
    "Prepare for your Florida motorcycle endorsement test with free practice questions based on the official Florida Motorcycle Handbook. Covers safe riding techniques, protective gear requirements, and Florida-specific motorcycle laws.",
  numToPass: "40 correct (80%)",
  basedOn: "Florida Motorcycle Handbook & Florida Driver Handbook (2025)",
  about: [
    "To ride a motorcycle in Florida, you must obtain a motorcycle endorsement (class E-M) on your driver's license or a standalone Class E motorcycle-only license. The knowledge test is based on both the Florida Driver Handbook and the Florida Motorcycle Handbook and consists of 50 questions with a required passing score of 80% (40 correct).",
    "Florida law requires all motorcycle riders to wear a DOT-approved helmet unless they are 21 or older AND carry at least $10,000 in medical benefits coverage. Eye protection is required for all riders unless the motorcycle has a windshield. Florida also requires that all motorcycle operators and passengers use footrests.",
    "Completing the Motorcycle Safety Foundation's Basic RiderCourse (or equivalent approved by the Florida Department of Highway Safety and Motor Vehicles) may waive the skills test requirement. Our practice questions cover both general traffic laws and motorcycle-specific content to give you comprehensive preparation.",
  ],
  sampleQuestions: [
    {
      question: "What is the recommended lane position for a motorcyclist approaching an intersection?",
      options: [
        "Far right to allow overtaking vehicles to pass",
        "The left third of the lane for best visibility",
        "The center of the lane at all times",
        "The far left edge next to the center line",
      ],
      correctIndex: 1,
      explanation:
        "When approaching an intersection, riding in the left portion of your lane makes you more visible to oncoming vehicles and those waiting to enter from cross streets. This position also keeps you away from right-side hazards and gives you a clearer line of sight through the intersection.",
    },
    {
      question: "How does riding in the rain affect a motorcycle's braking distance?",
      options: [
        "No change — ABS systems compensate automatically",
        "Braking distance decreases because tires grip better when wet",
        "Braking distance increases significantly on wet pavement",
        "Only the rear wheel brake is affected by rain",
      ],
      correctIndex: 2,
      explanation:
        "Wet pavement dramatically reduces tire traction, which significantly increases braking distance. In rain, you should increase your following distance, reduce speed, and apply both brakes gently and progressively. Avoid sudden brake application, which can lock the wheels and cause a slide.",
    },
    {
      question: "In Florida, is a motorcycle operator required to wear eye protection?",
      options: [
        "Yes, unless the motorcycle has a windshield",
        "No, eye protection is optional for adults",
        "Only on highways and interstates",
        "Only for riders under 21 years of age",
      ],
      correctIndex: 0,
      explanation:
        "Florida law requires eye protection for all motorcycle riders unless the motorcycle is equipped with a windshield. A face shield, goggles, or safety glasses are all acceptable forms of eye protection. Sunglasses alone do not qualify as adequate eye protection for riders without a windshield.",
    },
    {
      question: "What is the primary danger of riding a motorcycle in another vehicle's blind spot?",
      options: [
        "Reduced fuel efficiency from turbulence",
        "Increased wind turbulence that affects handling",
        "Engine overheating due to reduced airflow",
        "The driver may change lanes without seeing the motorcycle",
      ],
      correctIndex: 3,
      explanation:
        "Riding in a vehicle's blind spot is one of the most dangerous positions for a motorcyclist. The driver of that vehicle may not see you and could change lanes into your path. Always position yourself to be visible in the driver's mirrors, or pass through the blind spot quickly — never linger there.",
    },
    {
      question: "When should a motorcyclist use engine (compression) braking?",
      options: [
        "Never — always use the front and rear brakes only",
        "When gradually slowing down and on long descents",
        "Only in emergency stopping situations",
        "Only in stop-and-go traffic situations",
      ],
      correctIndex: 1,
      explanation:
        "Engine braking — downshifting to slow the motorcycle using the engine's compression — is useful when gradually reducing speed and on long downgrades. It reduces wear on brake pads and provides smooth deceleration. However, always supplement engine braking with controlled application of both wheel brakes when stopping.",
    },
    {
      question: "What protective gear is required by Florida law for motorcycle riders?",
      options: [
        "Helmet, gloves, and riding jacket",
        "Helmet and sturdy footwear",
        "A helmet (required for riders under 21 years of age)",
        "No specific gear is legally required in Florida",
      ],
      correctIndex: 2,
      explanation:
        "Florida requires a DOT-approved helmet for all riders under 21. Riders 21 and older may ride without a helmet only if they carry at least $10,000 in medical benefits coverage. Eye protection is separately required unless the motorcycle has a windshield. While additional gear is strongly recommended, only the helmet (for under-21) is strictly required by law.",
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
      question: "How do I get a motorcycle endorsement in Florida?",
      answer:
        "To add a motorcycle endorsement to your Florida Class E license, you must pass a motorcycle knowledge test and a motorcycle skills test. Completing an approved Basic RiderCourse through the Florida Rider Training Program may waive the skills test. Visit the DHSMV website for current requirements.",
    },
    {
      question: "Do I need a helmet to ride a motorcycle in Florida?",
      answer:
        "Riders under 21 must always wear a DOT-approved helmet. Riders 21 and older may ride without a helmet if they have at least $10,000 in medical benefits coverage. Regardless of age, eye protection is required for all riders unless the motorcycle has a windshield.",
    },
    {
      question: "Is lane splitting legal in Florida?",
      answer:
        "No. Lane splitting — riding between lanes of slow or stopped traffic — is illegal in Florida. Florida Statute §316.209 prohibits motorcycles from passing between lanes of traffic or between a vehicle and the curb.",
    },
    {
      question: "What is the passing score for the Florida motorcycle knowledge test?",
      answer:
        "The Florida motorcycle knowledge test requires a passing score of 80%, meaning you must answer at least 40 of 50 questions correctly.",
    },
    {
      question: "Can I take a motorcycle safety course instead of the DMV skills test in Florida?",
      answer:
        "Yes. Completing a Florida Rider Training Program Basic RiderCourse that is approved by the DHSMV can waive the motorcycle skills test at the DMV. You will still need to pass the written knowledge test. Contact the DHSMV or a local course provider for scheduling.",
    },
    {
      question: "What documents do I need to bring to the Florida DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Florida, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Florida DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Florida motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Florida, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Florida DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Florida, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Florida, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Florida?",
      answer:
        "In Florida, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Florida DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Florida?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Florida DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "FL Permit Test", href: "/florida-dmv-practice-test" },
    { label: "FL CDL Test", href: "/florida-cdl-practice-test" },
    { label: "CA Motorcycle Test", href: "/california-motorcycle-practice-test" },
    { label: "TX Motorcycle Test", href: "/texas-motorcycle-practice-test" },
    { label: "NY Motorcycle Test", href: "/new-york-motorcycle-practice-test" },
    { label: "View All States", href: "/" },
  ],
};

export default function FloridaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
