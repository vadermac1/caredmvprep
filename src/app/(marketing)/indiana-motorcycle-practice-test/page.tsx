import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Indiana Motorcycle Practice Test 2025 – Free IN BMV Endorsement Exam Prep",
  description:
    "Free Indiana motorcycle endorsement practice test. 25 questions, 80% passing. IN BMV CY endorsement, conditional helmet law (under 18 + permit holders), HEA 1070 hands-free applies to riders, and MSF BRC waiver. Pass your Indiana motorcycle knowledge test first try.",
  alternates: { canonical: "https://caredmvprep.com/indiana-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/indiana-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Indiana",
  stateAbbr: "IN",
  testLabel: "Motorcycle Endorsement Test",
  slug: "indiana-motorcycle-practice-test",
  headline: "Indiana Motorcycle Endorsement Practice Test 2025",
  intro:
    "Indiana's Bureau of Motor Vehicles (BMV) issues a CY motorcycle endorsement added to your existing operator license. The 25-question endorsement test requires 80% (20/25) to pass. Indiana's helmet law applies to riders under 18 and to all permit holders; adult riders 18+ with a valid endorsement are not required to wear a helmet by Indiana law. HEA 1070 applies to motorcyclists — no holding a device while riding.",
  basedOn: "Indiana BMV Motorcycle Manual (current edition)",
  about: [
    "Indiana's motorcycle endorsement is designated 'CY' on the driver's license. To obtain the endorsement, an applicant must pass the BMV's motorcycle knowledge test and motorcycle skills test, or complete an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse (BRC), which waives the BMV skills test requirement. Indiana's helmet law is conditional: riders under 18 and all motorcycle permit holders (regardless of age) must wear a DOT-approved helmet at all times. Adult riders 18+ who hold a full endorsement are not legally required to wear a helmet under Indiana law — though the BMV and MSF strongly recommend helmets for all riders. Indiana's HEA 1070 (hands-free law, effective July 1, 2020) applies to motorcyclists — holding a phone or device while operating a motorcycle is prohibited.",
    "Indiana's two-wheeled riding environment includes significant hazard variety: Interstate 70 and US 40 through the flatlands and into eastern Indiana offer high-speed riding, while the southern Indiana hill country (Brown County, the Hoosier National Forest) has winding two-lane roads with variable surface conditions. Indiana's spring season brings gravel and sand washed onto rural roads from winter — a particular traction hazard. Railroad crossings in urban and rural Indiana should be crossed at a 45° angle to prevent tire trapping. Indiana riders share rural roads with slow-moving farm equipment, especially during spring planting and fall harvest.",
  ],
  sampleQuestions: [
    {
      question: "Indiana's conditional helmet law requires a helmet for which motorcycle riders?",
      options: [
        "All riders of any age — Indiana has a universal helmet law",
        "Riders under 18 AND all motorcycle permit holders (regardless of age)",
        "Only first-year riders with fewer than 12 months of riding experience",
        "No riders — Indiana removed its helmet requirement entirely",
      ],
      correctIndex: 1,
      explanation:
        "Indiana's helmet law is conditional, not universal. Helmets are required for: (1) all riders under 18, and (2) all motorcycle permit holders regardless of age. Adult riders 18 and over who hold a valid CY endorsement are not required by Indiana law to wear a helmet. However, DOT-approved helmets significantly reduce the severity of head injuries in crashes. The BMV and MSF both recommend helmet use for all riders at all times regardless of legal requirement.",
    },
    {
      question: "Which is the correct path for Indiana motorcyclists to waive the BMV skills test?",
      options: [
        "Having 5+ years of riding experience documented by an affidavit",
        "Completing an approved MSF Basic RiderCourse (BRC) — the completion card is accepted by BMV in lieu of the skills test",
        "Passing a road skills test administered by a licensed motorcycle dealer",
        "Indiana does not offer a skills test waiver — all applicants must pass the BMV road test",
      ],
      correctIndex: 1,
      explanation:
        "Indiana BMV accepts completion of an approved MSF (Motorcycle Safety Foundation) Basic RiderCourse (BRC) as a waiver for the motorcycle road skills test. Upon completing the BRC, applicants receive a completion card that can be presented to BMV in lieu of the road skills test. The BRC consists of classroom instruction and range (low-speed controlled) riding exercises. Applicants still must pass the written knowledge test. Indiana's MSF course network is substantial — courses are offered at multiple sites across the state, particularly in spring and summer.",
    },
    {
      question: "Indiana's HEA 1070 (hands-free law) applies to motorcyclists. What does this mean for a rider who wants to use GPS navigation?",
      options: [
        "Motorcyclists are exempt from HEA 1070 — the law only covers enclosed motor vehicles",
        "GPS is permitted — riders may hold a phone in one hand while riding as long as they're only using it for navigation",
        "Riders must use a tank bag, handlebar mount, or helmet-integrated system — holding any device while riding is prohibited",
        "Only texting is prohibited for motorcycle riders — phone GPS is explicitly exempt",
      ],
      correctIndex: 2,
      explanation:
        "Indiana's HEA 1070 prohibits ALL drivers and riders from holding or supporting a wireless device with any part of the body while operating a motor vehicle — motorcycles are included. Riders who want GPS navigation must use a handlebar-mounted phone holder, tank bag mount, helmet-integrated Bluetooth display, or ear piece with voice navigation. The device must be operable without manual contact while riding. A first violation is a Class C infraction ($500 fine); if injury or death results, penalties escalate significantly.",
    },
    {
      question: "A motorcyclist in Indiana approaches a rural intersection with a flashing yellow light. What does this signal require?",
      options: [
        "Stop completely before proceeding — a flashing yellow has the same requirement as a red light",
        "Proceed at normal speed — a flashing yellow means the intersection is cleared by traffic control",
        "Slow down, yield to any traffic already in the intersection or approaching closely, and proceed with caution",
        "Flashing yellow lights at rural intersections are advisory only — no legal action is required",
      ],
      correctIndex: 2,
      explanation:
        "A flashing yellow traffic signal requires drivers and riders to slow down, yield to cross traffic or pedestrians already in or approaching the intersection, and proceed with caution when safe. It does not require a complete stop (unlike a flashing red, which requires a full stop before proceeding). For motorcyclists, flashing yellow intersections in rural Indiana require extra caution because cross traffic from secondary roads may not be fully visible through corn or soybean fields. Reduce speed, scan both directions thoroughly, and proceed only when clear.",
    },
    {
      question: "Indiana riders should cross railroad tracks at what angle to avoid tire trapping?",
      options: [
        "Parallel to the tracks when possible — perpendicular crossings are the most dangerous",
        "Exactly perpendicular (90°) — the only safe angle for motorcycle railroad crossing",
        "At approximately 45° or more — to prevent the front tire from dropping into the rail gap while maintaining stable crossing",
        "Railroad tracks present no special hazard to motorcycles — cross at any angle at normal speed",
      ],
      correctIndex: 2,
      explanation:
        "Railroad tracks (and trolley tracks, pavement seams, and bridge expansion joints) present a specific tire-trapping hazard for motorcycles. The narrow front tire can drop into a gap running parallel to the direction of travel and cause an immediate loss of steering control. Crossing at a 45° or greater angle prevents this by rolling over the gap rather than dropping into it. For very slippery or wet tracks, slow down before reaching the crossing and cross at the minimum safe angle. Do not change direction, brake sharply, or accelerate while on the tracks themselves.",
    },
    {
      question: "What is the most common cause of motorcycle single-vehicle crashes in Indiana and nationally?",
      options: [
        "Rear-wheel skid from excessive braking — Indiana riders overapply rear brake most frequently",
        "Running off the road or failing to negotiate a curve due to excess speed entering the turn",
        "Tire blowouts — Indiana's rural road debris causes more blowouts than any other cause",
        "Head-on collisions with oncoming traffic on two-lane Indiana rural highways",
      ],
      correctIndex: 1,
      explanation:
        "Nationally and in Indiana, the most common single-vehicle motorcycle crash type is a rider running off the road or failing to negotiate a curve — most often because the rider was traveling too fast to execute the required lean angle for the curve. This is especially relevant on Indiana's southern hill country roads (Brown County, Morgan-Monroe State Forest area) where curves can be tighter than they appear on approach. The Motorcycle Safety Foundation trains riders in 'Slow, Look, Press, Roll' for cornering: slow to the correct entry speed BEFORE the curve, look through the curve to the exit, apply countersteering pressure (press), and roll on the throttle through the curve.",
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
      question: "Does Indiana require a helmet for all motorcycle riders?",
      answer:
        "Indiana's helmet law is conditional — not universal. Helmets are required for: (1) all riders under age 18; (2) all motorcycle permit holders regardless of age. Adult riders 18+ with a valid CY endorsement are not required to wear a helmet under Indiana law. Despite the absence of a legal requirement for endorsed adult riders, the BMV and MSF strongly recommend helmets for all riders — DOT-approved helmets reduce fatal head injury risk by approximately 37% according to NHTSA data.",
    },
    {
      question: "How do I get a CY motorcycle endorsement on my Indiana license?",
      answer:
        "To add a CY motorcycle endorsement to your Indiana operator license: (1) Pass the BMV motorcycle knowledge test (25 questions, 80%); (2) Pass the BMV motorcycle skills test OR complete an MSF BRC (which waives the skills test); (3) Pay the endorsement fee at any BMV branch. If you hold a motorcycle permit (learner stage) while completing steps 1–2, you may practice riding while supervised by an endorsed rider 21+. The MSF BRC is offered at locations throughout Indiana, typically April through October.",
    },
    {
      question: "Can Indiana motorcyclists use navigation on a phone while riding?",
      answer:
        "Indiana's HEA 1070 (effective July 1, 2020) prohibits all riders from physically holding or supporting a wireless device while operating a motorcycle. GPS navigation is permitted only when the device is mounted (handlebar mount, tank bag, or helmet-integrated display) in a way that doesn't require the rider to hold it. Voice-activated navigation via a Bluetooth earpiece or helmet speaker is also permitted. Mounting hardware specific to motorcycles is widely available from motorcycle accessory retailers.",
    },
    {
      question: "What hazards are specific to motorcycle riding in Indiana?",
      answer:
        "Indiana-specific motorcycle hazards: (1) Spring road debris — gravel and sand washed onto rural roads during winter snowmelt reduces traction in March–April; (2) Farm equipment on rural roads — especially during planting and harvest, slow-moving tractors and combines create surprise hazards on county roads; (3) Railroad crossings — Indiana's agricultural and industrial heritage means many rural roads cross rail lines; cross at 45°+; (4) White-tailed deer — Indiana has high deer populations; dawn and dusk riding in autumn (October–November) creates maximum deer strike risk.",
    },
    {
      question: "Does Indiana's OWI law apply the same way to motorcycle operators as to car drivers?",
      answer:
        "Yes. Indiana's OWI (Operating While Intoxicated) law applies to motorcycle operators the same as car drivers. The 0.08% BAC threshold for adults and 0.02% for riders under 21 apply to motorcycle operation. Riding a motorcycle while impaired is OWI under Indiana law, with the same criminal penalties and license consequences as driving a car while impaired. Additionally, alcohol impairs the fine motor skills, balance, and reaction time that motorcycle riders rely on even more critically than car drivers — the Indiana BMV strongly emphasizes that even small amounts of alcohol significantly increase motorcycle crash risk.",
    },
    {
      question: "What documents do I need to bring to the Indiana DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Indiana, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Indiana DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Indiana motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Indiana, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Indiana DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Indiana, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Indiana, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Indiana?",
      answer:
        "In Indiana, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Indiana DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Indiana?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Indiana DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "IN Driver's License", href: "/indiana-dmv-practice-test" },
    { label: "IN CDL Test", href: "/indiana-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function IndianaMotoPage() {
  return <PracticeTestPage {...data} />;
}
