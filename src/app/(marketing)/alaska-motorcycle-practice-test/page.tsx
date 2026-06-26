import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Alaska Motorcycle Practice Test 2025 – Free AK Endorsement Exam Prep",
  description:
    "Prepare for your Alaska motorcycle endorsement test with free practice questions covering universal helmet laws, moose hazard techniques, extreme cold riding, and AK-specific traffic laws.",
  alternates: { canonical: "https://caredmvprep.com/alaska-motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/alaska-motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Alaska",
  stateAbbr: "AK",
  testLabel: "Motorcycle Practice Test",
  slug: "alaska-motorcycle-practice-test",
  headline: "Alaska Motorcycle Practice Test 2025",
  intro:
    "Alaska requires a motorcycle endorsement on your driver's license to operate any two- or three-wheeled motor vehicle. The endorsement knowledge test covers Alaska-specific hazards including moose encounters, extreme cold riding conditions, and the universal helmet requirement under AS 28.35.247. Use this free practice test to prepare.",
  basedOn: "Alaska Division of Motor Vehicles Motorcycle Operator Manual",
  about: [
    "Alaska requires all motorcycle operators to wear a helmet that meets federal safety standards — this universal helmet law under Alaska Statute 28.35.247 applies to all riders regardless of age or experience. Alaska's motorcycle endorsement test covers unique hazards including moose encounters (moose do not reflect headlights, making them invisible at night until it is too late), extreme cold weather riding precautions, and road surface hazards found on gravel sections of roads like the Dalton Highway and parts of the Parks Highway. The Alaska zero-tolerance BAC rule of 0.00% for riders under 21 also applies to motorcycle operators.",
    "Riding a motorcycle in Alaska presents challenges not found anywhere else in the United States. Ice fog in the Fairbanks Interior can reduce visibility to near zero at road level; gravel roads in rural Alaska require slow, deliberate throttle and steering inputs; and sudden encounters with large wildlife — particularly moose and bears — require specific evasive techniques. Unlike deer, moose will NOT create reflective eye-shine in your headlight beam because their eyes are above headlight height, so scanning the roadside continuously after dark is essential for Alaska motorcycle riders.",
  ],
  sampleQuestions: [
    {
      question:
        "Under Alaska Statute AS 28.35.247, who is required to wear a helmet while operating a motorcycle in Alaska?",
      options: [
        "Only riders under 18 years old",
        "Only riders under 21 years old",
        "All motorcycle operators and passengers, regardless of age",
        "Only riders who have held their endorsement for less than one year",
      ],
      correctIndex: 2,
      explanation:
        "Alaska has a universal helmet law under AS 28.35.247 that requires all motorcycle operators and passengers to wear a helmet that meets federal safety standards (DOT-approved), regardless of age or riding experience. This is different from states like Idaho or Iowa that only require helmets for younger riders. Riding without a compliant helmet in Alaska is a traffic violation subject to fines.",
    },
    {
      question:
        "You are riding a motorcycle at night on a rural Alaska road. What is the correct technique for detecting moose?",
      options: [
        "Watch for eye-shine reflecting from your headlight, as you would for deer",
        "Continuously scan the road edges because moose eyes do not reflect headlight beams",
        "Use high beams at all times to illuminate moose on the roadside",
        "Moose are only active during the day, so night riding is safer",
      ],
      correctIndex: 1,
      explanation:
        "Moose eyes are positioned 6–7 feet off the ground, above the height of a motorcycle's headlight beam. Unlike deer, moose do NOT produce eye-shine that reflects back at you. The only reliable technique is to continuously scan the road edges and slow down when you cannot see far ahead. Moose can weigh 800–1,500 pounds, and a collision at any speed on a motorcycle is almost always fatal for the rider.",
    },
    {
      question:
        "What riding technique is most important when navigating gravel road sections in rural Alaska?",
      options: [
        "Accelerate quickly to maintain momentum and stability",
        "Lean heavily into turns to maintain tire contact",
        "Use smooth, gradual throttle, braking, and steering inputs to avoid sliding",
        "Increase tire pressure to prevent gravel from sticking to the tires",
      ],
      correctIndex: 2,
      explanation:
        "On gravel road surfaces, loose material can cause tires to slide unpredictably. Motorcycle operators should use smooth and gradual throttle application, gentle braking (avoiding hard front brake application), and wide, deliberate turns. Avoid sudden inputs that can break traction. Roads such as portions of the Dalton Highway and some rural roads in Alaska have extensive gravel sections that require this disciplined technique.",
    },
    {
      question:
        "What is the blood alcohol concentration (BAC) limit for a motorcycle rider under 21 years old in Alaska?",
      options: ["0.02%", "0.04%", "0.08%", "0.00%"],
      correctIndex: 3,
      explanation:
        "Alaska's zero-tolerance law for under-21 drivers applies equally to motorcycle riders: the BAC limit is 0.00%, meaning any detectable alcohol is a DUI violation. This is stricter than many other states that set the under-21 limit at 0.02%. For riders 21 and older, the standard 0.08% BAC limit applies. DUI on a motorcycle carries the same penalties as DUI in a car, including license revocation and possible ignition interlock requirements.",
    },
    {
      question:
        "When riding in ice fog conditions in Interior Alaska, which action is correct?",
      options: [
        "Switch to high-beam headlights to maximize visibility through the fog",
        "Maintain normal speed because ice fog is only a cosmetic hazard",
        "Use low-beam headlights, reduce speed, and increase following distance significantly",
        "Turn off headlights to avoid reflecting light back into your eyes",
      ],
      correctIndex: 2,
      explanation:
        "Ice fog forms at temperatures below -20°F and reduces visibility to near zero at road level. High-beam headlights make conditions worse because they reflect off the suspended ice crystals. Low-beam headlights, dramatically reduced speed, and increased following distance are the correct responses. Motorcycle riders face additional risk in ice fog because of reduced stability if road surfaces are also icy. Consider not riding in severe ice fog conditions.",
    },
    {
      question:
        "Which of the following best describes a unique cold-weather preparation step for Alaska motorcycle riders before riding in sub-zero temperatures?",
      options: [
        "Increase tire pressure by 10 psi to compensate for cold air contraction",
        "Check that battery output is sufficient, as battery capacity drops significantly in extreme cold",
        "Switch to summer-weight engine oil for easier starting",
        "Remove the windshield to reduce wind resistance in cold air",
      ],
      correctIndex: 1,
      explanation:
        "In extreme cold, battery capacity can drop by 50–60%, making engine starting unreliable. Before riding in sub-zero Alaska temperatures, check that the battery is fully charged and in good condition. Tire pressure also drops in cold weather (roughly 1 psi per 10°F drop in temperature), so tires should be checked and inflated to the correct pressure. Cold-weather motorcycle oil viscosity is also important for engine protection. Many Alaska riders use engine block heaters or battery trickle chargers to maintain starting reliability.",
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
      question: "Is a helmet required to ride a motorcycle in Alaska?",
      answer:
        "Yes. Alaska has a universal helmet law under Alaska Statute 28.35.247 that requires all motorcycle operators and passengers to wear a DOT-approved helmet, regardless of age. There are no exceptions for experienced riders or older adults. The helmet must meet federal safety standards. Violating the helmet law is a traffic violation subject to a fine.",
    },
    {
      question: "What is the motorcycle endorsement process in Alaska?",
      answer:
        "To obtain a motorcycle endorsement in Alaska, you must pass a written knowledge test at a Division of Motor Vehicles office and either pass a riding skills test or complete an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse. Completing the MSF course waives the skills test and may qualify you for an insurance discount. The endorsement is added to your existing Alaska driver's license.",
    },
    {
      question: "Can I ride a motorcycle on the Dalton Highway in Alaska?",
      answer:
        "Yes, the Dalton Highway is open to motorcycles, but it presents serious challenges. Approximately 166 miles of the 414-mile highway are unpaved gravel, which requires slow, controlled riding technique. There are no services for 240 miles between Coldfoot and Deadhorse, so riders must carry extra fuel, water, food, tools, and emergency supplies. Tires must be in excellent condition, and riders should be experienced with unpaved road riding before attempting the Dalton.",
    },
    {
      question: "How does extreme cold affect motorcycle riding in Alaska?",
      answer:
        "Extreme cold reduces tire pressure (approximately 1 psi per 10°F temperature drop), reduces battery capacity, thickens engine oil making starting harder, and can make road surfaces extremely slippery. Motorcycle riders should check tire pressure before every cold-weather ride, ensure the battery is fully charged, use oil viscosity appropriate for cold temperatures, and wear layered gear including wind-proof and insulated clothing. Many Alaska riders store motorcycles during the deepest winter months and ride primarily from late April through September.",
    },
    {
      question: "What is the BAC limit for motorcycle riders in Alaska?",
      answer:
        "For motorcycle riders 21 and older, Alaska's DUI BAC limit is 0.08%. For riders under 21, Alaska enforces zero tolerance with a 0.00% BAC limit — any detectable alcohol is a violation. Penalties for motorcycle DUI are the same as for car DUI: mandatory license revocation, fines, and possible ignition interlock requirements. Even small amounts of alcohol impair the fine motor skills and balance required for safe motorcycle operation.",
    },
    {
      question: "What documents do I need to bring to the Alaska DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Alaska, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Alaska DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Alaska motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Alaska, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Alaska DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Alaska, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Alaska, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Alaska?",
      answer:
        "In Alaska, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Alaska DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Alaska?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Alaska DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "Alaska DMV Practice Test", href: "/alaska-dmv-practice-test" },
    { label: "Alaska CDL Practice Test", href: "/alaska-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function AlaskaMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
