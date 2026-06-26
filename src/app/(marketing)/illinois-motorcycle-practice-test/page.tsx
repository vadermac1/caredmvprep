import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Illinois Motorcycle Practice Test 2025 – Free IL Class M License Exam Prep",
  description:
    "Free Illinois motorcycle practice test based on the official IL Motorcycle Operator Manual. 25 questions, 80% passing score, detailed explanations. Pass your IL Class M endorsement test.",
  alternates: { canonical: "https://caredmvprep.com/illinois-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/illinois-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Illinois",
  stateAbbr: "IL",
  testLabel: "Motorcycle Practice Test",
  slug: "illinois-motorcycle-practice-test",
  headline: "Illinois Motorcycle Practice Test (Class M)",
  intro:
    "Prepare for your Illinois Class M motorcycle endorsement knowledge test with free practice questions based on the official 2025 Illinois Motorcycle Operator Manual. Covers riding techniques, safety strategies, and Illinois-specific motorcycle laws.",
  numToPass: "20 correct (80%)",
  basedOn: "Illinois Motorcycle Operator Manual (2025)",
  about: [
    "The Illinois Secretary of State (SOS) administers the motorcycle knowledge test, which consists of 25 questions drawn from the Illinois Motorcycle Operator Manual. To pass, you must answer at least 20 questions correctly — an 80% passing score. Passing the knowledge test earns you a motorcycle instruction permit; you must then pass a riding skills test or complete an approved motorcycle safety course to receive the full Class M endorsement added to your Class D license.",
    "Illinois does not require helmets for motorcycle riders 18 or older, but the Illinois Motorcycle Operator Manual strongly recommends full-face helmets meeting DOT standards for all riders. Riders and passengers under 18 are required by law to wear helmets. Eye protection is required for all riders unless the motorcycle is equipped with a windshield or fairing that provides equivalent protection.",
    "Completing the IDOT (Illinois Department of Transportation) Basic Rider Course (BRC) through an approved Illinois Motorcycle Safety Program (IMSP) provider is the recommended path for new riders. Completing the course waives the riding skills test requirement at the SOS office. The BRC includes both classroom instruction and on-range riding exercises. Riders who complete the BRC also qualify for insurance discounts in most cases.",
  ],
  sampleQuestions: [
    {
      question: "When making a quick stop on a motorcycle, which braking method provides the most stopping power?",
      options: [
        "Use only the rear brake to avoid front-wheel lockup",
        "Apply only the front brake for maximum deceleration",
        "Apply both front and rear brakes simultaneously and progressively",
        "Downshift aggressively through the gears to slow down",
      ],
      correctIndex: 2,
      explanation:
        "Applying both brakes simultaneously — the front brake lever and the rear brake pedal — provides maximum stopping power. The front brake provides approximately 70% of total stopping force. Apply the front brake progressively (squeeze, do not grab) to avoid locking the front wheel, which causes loss of steering control.",
    },
    {
      question: "In Illinois, are riders required to keep their motorcycle headlight on during daylight hours?",
      options: [
        "No — headlights are only required at night",
        "Yes — Illinois law requires headlights on at all times while riding",
        "Only on highways and expressways",
        "Only in rain, fog, or reduced visibility",
      ],
      correctIndex: 1,
      explanation:
        "Illinois law requires motorcycle headlights to be on at all times — day and night — when the motorcycle is in operation. Most modern motorcycles have automatic headlights that turn on with the ignition. Riding with a headlight greatly improves your visibility to other drivers, which reduces your crash risk significantly.",
    },
    {
      question: "What is the recommended lane position for a motorcyclist following a large truck?",
      options: [
        "Center of the lane, directly behind the truck",
        "Right portion of the lane for the best sightlines around the truck",
        "Left portion of the lane to be more visible in the truck's left mirror",
        "Switch positions frequently to stay alert",
      ],
      correctIndex: 1,
      explanation:
        "When following a large vehicle such as a semi-truck, riding in the right portion of your lane gives you the best view around the vehicle on the left side and keeps you visible in the truck's left mirror. Avoid riding directly in the center or right behind large vehicles, where you are in their blind spot and cannot see hazards ahead.",
    },
    {
      question: "What does T-CLOCS stand for in motorcycle pre-ride inspection?",
      options: [
        "Tires, Chassis, Lights, Oil, Controls, Stability",
        "Tires and Wheels, Controls, Lights and Electrics, Oil and Other Fluids, Chassis, Stands",
        "Transmission, Coolant, Lighting, Operation, Controls, Suspension",
        "Traction, Cables, Lubrication, Output, Chain, Speed",
      ],
      correctIndex: 1,
      explanation:
        "T-CLOCS is the standard pre-ride inspection checklist: Tires and Wheels, Controls, Lights and Electrics, Oil and Other Fluids, Chassis, and Stands. Performing this inspection before every ride helps identify mechanical problems before they become hazards. Illinois motorcycle safety instructors emphasize T-CLOCS as a foundational riding habit.",
    },
    {
      question: "How should a motorcyclist approach a curve for maximum safety?",
      options: [
        "Accelerate into the curve to maintain momentum",
        "Slow to a safe speed before entering the curve, then gradually accelerate through it",
        "Brake hard in the middle of the curve if the speed feels too high",
        "Move to the inside edge of the lane immediately upon entering the curve",
      ],
      correctIndex: 1,
      explanation:
        "The correct technique for cornering is to slow down before entering the curve — not during it. Braking while leaned over in a curve can cause traction loss and a crash. Once in the curve and confident in your entry speed, gradually roll on the throttle to stabilize the bike through the exit. Always look through the curve toward the exit point.",
    },
    {
      question: "Which of the following conditions makes motorcycle riding especially hazardous?",
      options: [
        "Moderate temperatures with light crosswinds",
        "A freshly paved, dry road surface",
        "Rain, oil residue on pavement, or leaves and gravel in curves",
        "Riding at dawn or dusk on rural highways",
      ],
      correctIndex: 2,
      explanation:
        "Rain reduces tire traction dramatically, especially on the center of travel lanes where oil residue accumulates. Leaves and gravel in curves create unpredictable slipping hazards. While dawn and dusk are also higher-risk times (reduced visibility), the most immediate traction-related hazards for motorcyclists include wet pavement, oil spills, and loose debris in corners.",
    },
    {
      question: "When riding in a group in Illinois, what formation is recommended?",
      options: [
        "Single-file line with one motorcycle per lane",
        "Side-by-side with 2 feet between bikes",
        "Staggered formation maintaining a 2-second following distance",
        "Diamond formation with the least experienced rider in front",
      ],
      correctIndex: 2,
      explanation:
        "A staggered formation is the recommended group riding formation. It allows each rider to maintain a 2-second following distance from the rider directly ahead while keeping the group compact. Each rider has a 1-second gap to the rider diagonally ahead. Side-by-side riding is dangerous because it eliminates the escape path a rider would normally have in an emergency.",
    },
    {
      question: "In Illinois, what eye protection is required for motorcycle riders?",
      options: [
        "No eye protection is required by law",
        "Eye protection (goggles or face shield) is required unless the motorcycle has a windshield providing equivalent protection",
        "Only riders under 18 are required to wear eye protection",
        "A full-face DOT helmet satisfies all eye protection requirements",
      ],
      correctIndex: 1,
      explanation:
        "Illinois law requires motorcycle riders to wear eye protection — such as goggles, a face shield, or glasses — unless the motorcycle is equipped with a windshield or fairing that provides equivalent protection from wind and debris. A full-face helmet with an integral face shield satisfies this requirement. Without proper eye protection, wind and debris at highway speeds can cause serious injuries and loss of vehicle control.",
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
      question: "How many questions are on the Illinois motorcycle knowledge test?",
      answer:
        "The Illinois Class M motorcycle knowledge test has 25 questions. You must answer at least 20 correctly — a passing score of 80% — to receive your motorcycle instruction permit.",
    },
    {
      question: "Do I need to take a motorcycle safety course in Illinois?",
      answer:
        "You are not required to take a safety course, but completing the Illinois Motorcycle Safety Program (IMSP) Basic Rider Course (BRC) waives the riding skills test requirement at the SOS office. The BRC covers both classroom knowledge and on-range riding skills. Most Illinois riders choose the course because it is thorough, eliminates the DMV skills test, and may qualify them for insurance discounts.",
    },
    {
      question: "Does Illinois require helmets for motorcycle riders?",
      answer:
        "Illinois does not require helmets for riders 18 or older. Riders and passengers under 18 are required by law to wear DOT-compliant helmets. Despite the lack of a universal requirement, the Illinois Motorcycle Operator Manual strongly recommends helmets for all riders. Eye protection is required for all riders unless the bike has a windshield.",
    },
    {
      question: "What is the difference between a motorcycle instruction permit and a Class M endorsement in Illinois?",
      answer:
        "A motorcycle instruction permit allows you to ride a motorcycle for practice with restrictions — typically no nighttime riding and no passengers. After completing a skills test or an IMSP Basic Rider Course, you receive a Class M endorsement added to your existing Class D license, which allows unrestricted motorcycle operation. The permit is valid for 12 months.",
    },
    {
      question: "How close to other vehicles should a motorcyclist follow in Illinois?",
      answer:
        "The Illinois Motorcycle Operator Manual recommends a minimum 3-second following distance in normal conditions — more than the 2-second recommendation for car drivers. In adverse conditions (rain, gravel, poor visibility), increase to 4 or more seconds. Use a fixed reference point to count: when the vehicle ahead passes it, you should reach it no sooner than 3 seconds later.",
    },
    {
      question: "What documents do I need to bring to the Illinois DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Illinois, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Illinois DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Illinois motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Illinois, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Illinois DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Illinois, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Illinois, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Illinois?",
      answer:
        "In Illinois, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Illinois DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Illinois?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Illinois DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "IL Driver's License", href: "/illinois-dmv-practice-test" },
    { label: "IL CDL Test", href: "/illinois-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Permit Test", href: "/motorcycle-permit-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function IllinoisMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
