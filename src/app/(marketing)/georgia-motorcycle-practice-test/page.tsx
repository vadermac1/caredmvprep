import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Georgia Motorcycle Practice Test 2025 – Free GA DDS Class M License Exam Prep",
  description:
    "Free Georgia motorcycle practice test based on the official GA Motorcycle Operator Manual. 20 questions, 75% passing score. Pass your GA DDS Class M endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/georgia-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/georgia-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Georgia",
  stateAbbr: "GA",
  testLabel: "Motorcycle Practice Test",
  slug: "georgia-motorcycle-practice-test",
  headline: "Georgia Motorcycle Practice Test (Class M)",
  intro:
    "Prepare for your Georgia Class M motorcycle license knowledge test with free practice questions based on the official 2025 Georgia Motorcycle Operator Manual. Covers riding skills, safety strategies, and Georgia-specific motorcycle laws.",
  numToPass: "15 correct (75%)",
  basedOn: "Georgia Motorcycle Operator Manual (2025)",
  about: [
    "The Georgia Department of Driver Services (DDS) administers the Class M motorcycle knowledge test, which consists of 20 questions from the Georgia Motorcycle Operator Manual. To pass, you must answer at least 15 questions correctly — a 75% passing score. After passing the knowledge test, you receive a motorcycle learner's permit valid for 1 year. To upgrade to a full Class M license or endorsement, you must pass a riding skills test or complete an approved TEAM Georgia Motorcycle Program course.",
    "Georgia has a universal motorcycle helmet law (O.C.G.A. §40-6-315): ALL motorcycle operators and passengers are required to wear a DOT-compliant helmet at all times, regardless of age, experience, or license type. This is one of the strictest helmet laws in the country. Eye protection is also required for all riders unless the motorcycle has a windshield that provides equivalent protection. Failure to wear a helmet in Georgia is a primary traffic offense.",
    "The TEAM Georgia Motorcycle Program provides Basic Experience and Skill Training (BEST) courses at approved sites across the state. Completing the BEST course waives the DDS riding skills test requirement and is strongly recommended for all new riders. The program also offers a Basic RiderCourse (BRC) in partnership with the Motorcycle Safety Foundation. Course completers typically qualify for motorcycle insurance discounts. Find course schedules at dps.georgia.gov/team-georgia.",
  ],
  sampleQuestions: [
    {
      question: "Georgia law requires motorcycle helmets for:",
      options: [
        "Only riders under 18 years of age",
        "Riders under 21 and those with less than 2 years of licensure",
        "All motorcycle operators and passengers, regardless of age",
        "No one — helmets are optional in Georgia",
      ],
      correctIndex: 2,
      explanation:
        "Georgia has a universal helmet law (O.C.G.A. §40-6-315) requiring all motorcycle operators and passengers to wear a DOT-compliant helmet at all times, regardless of age or riding experience. There is no age exemption, experience exemption, or insurance-based exemption in Georgia. Law enforcement can stop and cite riders solely for not wearing a helmet — it is a primary offense.",
    },
    {
      question: "What is the most effective braking method for stopping a motorcycle quickly?",
      options: [
        "Use only the front brake for maximum deceleration",
        "Use only the rear brake to prevent front-wheel lockup",
        "Apply both front and rear brakes progressively and simultaneously",
        "Downshift through all gears to let engine braking do the work",
      ],
      correctIndex: 2,
      explanation:
        "Applying both the front brake lever and the rear brake pedal progressively and simultaneously produces the most effective stop. The front brake contributes approximately 70% of stopping power. Squeezing the front brake progressively — rather than grabbing it suddenly — prevents front-wheel lockup. Using both brakes together provides balanced deceleration and maximum control.",
    },
    {
      question: "Georgia's Hands-Free Law applies to motorcycle riders. Which of the following is permitted while riding?",
      options: [
        "Holding a phone in your left hand while making a call",
        "Using a mounted Bluetooth headset to answer a call with a voice command",
        "Resting a GPS device on your gas tank for navigation viewing",
        "Texting at a red light since you are temporarily stopped",
      ],
      correctIndex: 1,
      explanation:
        "Georgia's Hands-Free Law (O.C.G.A. §40-6-241.2) applies to all drivers and riders — including motorcyclists. You may not hold any wireless device while riding. A Bluetooth headset that connects to your helmet and allows voice-activated call answering is the hands-free option most commonly used by Georgia motorcyclists. Resting a device on the tank or holding it in any position is prohibited.",
    },
    {
      question: "What lane position is most visible and safest for a motorcyclist approaching an intersection in Georgia traffic?",
      options: [
        "Right edge of the lane to maximize shoulder space",
        "Center of the lane in all situations",
        "Left portion of the lane to be seen by oncoming left-turning drivers",
        "Any position is equally safe at intersections",
      ],
      correctIndex: 2,
      explanation:
        "When approaching an intersection, the left portion of your lane is typically the best position for a motorcyclist. It places you in the field of vision of oncoming drivers who might turn left across your path — the most common cause of motorcycle crashes at intersections. It also keeps you away from right-turning vehicles and gives you more escape options to your right if a hazard develops.",
    },
    {
      question: "When riding over railroad tracks or expansion joints in Georgia, the safest approach is to:",
      options: [
        "Swerve to find the smoothest path across the tracks",
        "Brake hard before the tracks and accelerate through them",
        "Cross at a 90-degree angle at a steady speed",
        "Lean the motorcycle aggressively to improve traction over the tracks",
      ],
      correctIndex: 2,
      explanation:
        "Railroad tracks, expansion joints, and bridge joints should be crossed at as close to a 90-degree angle as safely possible. This minimizes the time the tires are parallel to the gap (which can catch a tire and cause a crash) and reduces the lateral deflection of the front wheel. Maintain a steady speed through the crossing — neither braking nor accelerating on the tracks.",
    },
    {
      question: "In Georgia, what should you do when you notice sand or gravel in a curve ahead?",
      options: [
        "Accelerate to power through the loose material",
        "Lean further into the curve to maintain the normal line",
        "Slow down before the curve, straighten the bike as much as possible through the loose material, and avoid abrupt throttle or brake inputs",
        "Move to the center lane stripe where traction is always better",
      ],
      correctIndex: 2,
      explanation:
        "Sand and gravel dramatically reduce tire traction and are especially dangerous in curves. If you cannot avoid them, reduce speed before entry, reduce your lean angle as much as possible, and avoid abrupt throttle, brake, or steering inputs through the hazard. Smooth, gradual inputs minimize the risk of a tire sliding. After clearing the loose material, gradually resume normal speed and lean angle.",
    },
    {
      question: "What is the primary purpose of wearing bright or reflective gear as a motorcyclist in Georgia?",
      options: [
        "To comply with Georgia's reflective gear law",
        "To look professional on the road",
        "To increase your visibility to other drivers and reduce the risk of being hit",
        "Reflective gear provides no safety benefit beyond aesthetics",
      ],
      correctIndex: 2,
      explanation:
        "The primary purpose of wearing bright colors and reflective materials is to increase your visibility to other motor vehicle drivers — especially in low-light conditions, at dawn and dusk, and when approaching from the front or side. Since 'failure to see the motorcycle' is the leading cause of motorcycle crashes involving another vehicle, maximizing your visibility is one of the most effective safety strategies available to Georgia riders.",
    },
    {
      question: "How long is a Georgia motorcycle learner's permit valid?",
      options: ["3 months", "6 months", "1 year", "2 years"],
      correctIndex: 2,
      explanation:
        "A Georgia motorcycle learner's permit is valid for 1 year. During this time, the permit holder may practice riding but faces restrictions: no passengers, no nighttime riding (typically), and the supervising rider requirements vary by age. Before the permit expires, you must pass either a DDS riding skills test or complete an approved TEAM Georgia Motorcycle Program course to receive your full Class M license or endorsement.",
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
      question: "How many questions are on the Georgia motorcycle knowledge test?",
      answer:
        "The Georgia Class M motorcycle knowledge test has 20 questions. You must answer at least 15 correctly — a passing score of 75% — to receive your motorcycle learner's permit.",
    },
    {
      question: "Does Georgia require helmets for all motorcycle riders?",
      answer:
        "Yes. Georgia has a universal helmet law (O.C.G.A. §40-6-315) requiring ALL motorcycle operators and passengers to wear a DOT-compliant helmet at all times, regardless of age, experience, or insurance status. There are no exemptions. Eye protection is also required unless the motorcycle has a windshield. Not wearing a helmet is a primary offense in Georgia.",
    },
    {
      question: "What is the TEAM Georgia Motorcycle Program?",
      answer:
        "TEAM Georgia (Training, Education, And Motorcyclist Safety) is Georgia's state-sponsored rider training program offering Basic Experience and Skill Training (BEST) courses at approved sites across Georgia. Completing the BEST course waives the DDS riding skills test. The program also offers intermediate and advanced courses. Visit dps.georgia.gov/team-georgia for schedules.",
    },
    {
      question: "What restrictions apply to a Georgia motorcycle learner's permit holder?",
      answer:
        "Georgia motorcycle learner's permit holders may not carry passengers, and the permit is valid for 1 year. Additional restrictions depend on age. Riders under 18 must comply with GDL restrictions. To remove permit restrictions and obtain a full Class M license, riders must pass the DDS skills test or complete an approved TEAM Georgia course.",
    },
    {
      question: "Does Georgia's Hands-Free Law apply when riding a motorcycle?",
      answer:
        "Yes. Georgia's Hands-Free Law (O.C.G.A. §40-6-241.2) applies to all motor vehicle operators including motorcyclists. Holding or supporting a wireless communication device with any body part while riding is prohibited. Helmet-mounted Bluetooth headsets operated by voice commands are the hands-free solution most commonly used by Georgia riders. First offense: $50 fine and 1 point.",
    },
    {
      question: "What documents do I need to bring to the Georgia DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Georgia, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Georgia DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Georgia motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Georgia, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Georgia DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Georgia, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Georgia, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Georgia?",
      answer:
        "In Georgia, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Georgia DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Georgia?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Georgia DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "GA Driver's License", href: "/georgia-dmv-practice-test" },
    { label: "GA CDL Test", href: "/georgia-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Safety Tips", href: "/motorcycle-safety-tips" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function GeorgiaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
