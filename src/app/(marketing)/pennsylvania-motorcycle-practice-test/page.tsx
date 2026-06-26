import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Pennsylvania Motorcycle Practice Test 2025 – Free PA Class M License Exam Prep",
  description:
    "Free Pennsylvania motorcycle practice test based on the official PA Motorcycle Operator Manual. 25 questions, 80% passing score. Pass your PA Class M endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/pennsylvania-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/pennsylvania-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Pennsylvania",
  stateAbbr: "PA",
  testLabel: "Motorcycle Practice Test",
  slug: "pennsylvania-motorcycle-practice-test",
  headline: "Pennsylvania Motorcycle Practice Test (Class M)",
  intro:
    "Prepare for your Pennsylvania Class M motorcycle license knowledge test with free practice questions based on the official 2025 Pennsylvania Motorcycle Operator Manual. Covers riding skills, safety strategies, and PA-specific motorcycle regulations.",
  numToPass: "20 correct (80%)",
  basedOn: "Pennsylvania Motorcycle Operator Manual (2025)",
  about: [
    "PennDOT administers the Pennsylvania Class M motorcycle knowledge test, which consists of 25 questions from the Pennsylvania Motorcycle Operator Manual. To pass, you must answer at least 20 questions correctly — an 80% passing score. After passing the knowledge test, you receive a motorcycle learner's permit valid for 1 year. To convert the permit to a full Class M license or endorsement, you must pass a riding skills test or successfully complete an approved Pennsylvania Motorcycle Safety Program (PAMSP) course.",
    "Pennsylvania has one of the most nuanced helmet laws in the country. Helmets are required for all riders under 21. For riders 21 and older, helmets are also required during the first 2 years of holding a motorcycle license or endorsement. After age 21 AND after 2 full years of motorcycle licensure, helmet use becomes optional — but still strongly recommended. Eye protection is required for all riders unless the motorcycle has a windshield.",
    "The PA Motorcycle Safety Program (PAMSP) offers a Basic RiderCourse (BRC) that covers fundamental riding skills in a controlled range environment. Completing the BRC waives the DMV riding skills test requirement and may result in insurance premium discounts. The course is available through community colleges, technical schools, and approved providers across Pennsylvania. New riders — especially those who have never ridden before — are strongly encouraged to complete the BRC before riding on public roads.",
  ],
  sampleQuestions: [
    {
      question: "What is the correct way to stop quickly on a motorcycle without losing control?",
      options: [
        "Use only the rear brake to avoid flipping the motorcycle",
        "Apply both front and rear brakes progressively and simultaneously",
        "Use engine braking by rapidly downshifting",
        "Apply only the front brake at maximum pressure",
      ],
      correctIndex: 1,
      explanation:
        "The safest and most effective way to stop a motorcycle quickly is to apply both the front brake lever and the rear brake pedal simultaneously and progressively — not abruptly. The front brake provides the majority of stopping power (approximately 70%). Grabbing the front brake suddenly can lock the wheel and cause a crash. Progressive application allows maximum deceleration while maintaining control.",
    },
    {
      question: "Pennsylvania's helmet law requires helmets for which motorcycle riders?",
      options: [
        "All riders regardless of age or experience",
        "Only riders under 16 years old",
        "All riders under 21, and all riders with less than 2 years of motorcycle licensure",
        "No helmet requirement exists in Pennsylvania",
      ],
      correctIndex: 2,
      explanation:
        "Pennsylvania's helmet law requires helmets for: (1) all riders under 21 years of age, and (2) all riders of any age who have held a motorcycle license or endorsement for less than 2 full years. After age 21 and after completing 2 years of licensure, helmet use is legally optional. The PA Motorcycle Operator Manual strongly recommends helmets for all riders regardless of legal requirement.",
    },
    {
      question: "When riding through a curve on a Pennsylvania rural highway, what is the safest approach?",
      options: [
        "Accelerate before the curve and lean aggressively",
        "Apply brakes hard in the middle of the curve to control speed",
        "Reduce speed before entering the curve, then gradually accelerate through it",
        "Ride close to the centerline to maximize your path radius",
      ],
      correctIndex: 2,
      explanation:
        "Always reduce speed before entering a curve — not during it. Braking while leaned over in a curve reduces traction and can cause a low-side crash. Enter the curve at a controlled speed, look through the curve toward the exit, and smoothly roll on the throttle as you progress through the turn. Pennsylvania's rural roads often include blind curves; never cross the center line.",
    },
    {
      question: "What lane position is best for a motorcycle rider approaching an intersection?",
      options: [
        "Right side of the lane, near the edge",
        "Left portion of the lane — most visible to cross-traffic",
        "Center of the lane, which is always the safest position",
        "Whichever position keeps you furthest from other vehicles",
      ],
      correctIndex: 1,
      explanation:
        "When approaching an intersection, the left portion of the lane is typically the best position for a motorcycle rider. It makes you more visible to oncoming left-turning vehicles (a leading cause of motorcycle crashes), gives you the best view of cross-traffic, and positions you away from right-turning vehicles that may not check for bikes. Adjust your lane position based on traffic and intersection layout.",
    },
    {
      question: "What does the term 'road surface contaminants' refer to in motorcycle safety?",
      options: [
        "Heavy traffic that contaminates your route",
        "Rain, oil, gravel, sand, or leaves that reduce tire traction",
        "Potholes and pavement cracks only",
        "Construction zone markings that are slippery",
      ],
      correctIndex: 1,
      explanation:
        "Road surface contaminants include any material that reduces tire traction: water (rain), motor oil (especially in the center of travel lanes where it drips from cars), gravel or sand on pavement, wet leaves, and painted lane markings that become slippery when wet. Motorcyclists are far more vulnerable to these hazards than car drivers because motorcycles rely on only two small contact patches for traction.",
    },
    {
      question: "In Pennsylvania, when riding in a group, what is the recommended formation?",
      options: [
        "Single-file line at all times",
        "Staggered formation with a minimum 2-second following distance",
        "Side-by-side pairs in each lane",
        "Random formation — each rider chooses their own position",
      ],
      correctIndex: 1,
      explanation:
        "A staggered formation is recommended for group riding in Pennsylvania and across all states. It allows each rider to maintain a 2-second following distance from the rider directly ahead while keeping the group compact. This formation provides each rider with an escape route to the side and gives adequate stopping distance. Side-by-side riding within a single lane is dangerous and prohibited on Pennsylvania roads.",
    },
    {
      question: "What is the primary reason motorcycle crashes involving another vehicle occur?",
      options: [
        "Motorcyclists riding too fast for road conditions",
        "Mechanical failure of the motorcycle",
        "Other drivers failing to detect the motorcycle",
        "Adverse weather reducing visibility for all drivers",
      ],
      correctIndex: 2,
      explanation:
        "Research consistently shows the leading cause of motorcycle crashes involving another vehicle is that the other driver failed to detect the motorcycle — often when making a left turn across the motorcycle's path. Riding in well-lit positions, wearing bright or reflective gear, and using your headlight at all times helps maximize your visibility to other road users.",
    },
    {
      question: "Before every ride, Pennsylvania motorcycle safety guidelines recommend performing what inspection?",
      options: [
        "A full engine teardown and reassembly",
        "A T-CLOCS inspection: Tires, Controls, Lights, Oil, Chassis, Stands",
        "A simple visual check of the tires only",
        "An annual state safety inspection (same as for cars)",
      ],
      correctIndex: 1,
      explanation:
        "T-CLOCS is the standard pre-ride inspection recommended by the Pennsylvania Motorcycle Operator Manual and safety programs nationwide: Tires and Wheels, Controls (levers, pedals, cables), Lights and Electrics, Oil and Other Fluids, Chassis (frame, suspension), and Stands (kickstand, center stand). Performing T-CLOCS before each ride catches mechanical problems before they cause crashes.",
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
      question: "How many questions are on the Pennsylvania motorcycle knowledge test?",
      answer:
        "The Pennsylvania Class M motorcycle knowledge test has 25 questions. You must answer at least 20 correctly — an 80% passing score — to receive your motorcycle learner's permit.",
    },
    {
      question: "Does Pennsylvania require helmets for all motorcycle riders?",
      answer:
        "Pennsylvania requires helmets for all riders under 21 and for all riders of any age who have held a motorcycle license for less than 2 years. After age 21 and after 2 full years of motorcycle licensure, helmet use is legally optional. However, the PA Motorcycle Operator Manual strongly recommends helmets for all riders at all times.",
    },
    {
      question: "Can I waive the motorcycle skills test in Pennsylvania?",
      answer:
        "Yes. Completing the Pennsylvania Motorcycle Safety Program (PAMSP) Basic RiderCourse (BRC) waives the riding skills test requirement at a PennDOT Driver License Center. The BRC includes both classroom instruction and on-range riding practice. Course completers may also receive a discount on their motorcycle insurance. Find approved providers at pa.msf-usa.org.",
    },
    {
      question: "What endorsement is needed to legally ride a motorcycle in Pennsylvania?",
      answer:
        "You need a Class M license or a Class M endorsement added to your existing passenger vehicle license to legally operate a motorcycle on Pennsylvania roads. The endorsement requires passing the 25-question knowledge test and either a riding skills test or completion of an approved safety course.",
    },
    {
      question: "Can I carry a passenger on my Pennsylvania motorcycle learner's permit?",
      answer:
        "No. A Pennsylvania motorcycle learner's permit prohibits carrying passengers. Permit holders may only ride alone. Once you receive your full Class M license or endorsement by passing the skills test or completing an approved course, passenger restrictions are removed.",
    },
    {
      question: "What documents do I need to bring to the Pennsylvania DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Pennsylvania, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Pennsylvania DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Pennsylvania motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Pennsylvania, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Pennsylvania DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Pennsylvania, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Pennsylvania, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Pennsylvania?",
      answer:
        "In Pennsylvania, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Pennsylvania DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Pennsylvania?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Pennsylvania DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "PA Driver's License", href: "/pennsylvania-dmv-practice-test" },
    { label: "PA CDL Test", href: "/pennsylvania-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Permit Test", href: "/motorcycle-permit-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function PennsylvaniaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
