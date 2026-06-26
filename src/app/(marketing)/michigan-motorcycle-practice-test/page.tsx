import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Michigan Motorcycle Practice Test 2025 – Free MI SOS Endorsement Exam Prep",
  description:
    "Free Michigan motorcycle practice test based on the 2025 Michigan Motorcycle Operator Manual. 25 questions, 80% passing score. Prepare for your MI Secretary of State motorcycle endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/michigan-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/michigan-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Michigan",
  stateAbbr: "MI",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "michigan-motorcycle-practice-test",
  headline: "Michigan Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Michigan motorcycle endorsement knowledge test with free practice questions based on the official Michigan Motorcycle Operator Manual. The Michigan Secretary of State (SOS) requires all motorcycle riders to hold an endorsement (CY) on their driver's license. Pass the knowledge test and road skills test — or complete an approved MSF Basic RiderCourse (BRC) to waive the skills test.",
  basedOn: "2025 Michigan Motorcycle Operator Manual",
  about: [
    "The Michigan Secretary of State (SOS) requires all motorcycle riders to obtain a CY (cycle) endorsement on their Michigan driver's license. To earn the endorsement, applicants must pass a 25-question motorcycle knowledge test at an SOS office with a score of at least 80% (20/25 correct), then pass a road skills test. Alternatively, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse (BRC) waives the road skills test — BRC graduates receive a course completion card that is submitted to the SOS. Michigan strongly recommends the MSF BRC for all new riders.",
    "Michigan's motorcycle helmet law is conditional. Riders under age 21 are always required to wear a DOT-approved motorcycle helmet. Riders 21 and older who have held their motorcycle endorsement for fewer than 2 years are also required to wear a helmet. Riders 21 or older who have held the endorsement for 2 or more years AND carry at least $20,000 in first-party medical benefits insurance may legally ride without a helmet. However, the Michigan SOS and safety advocates strongly recommend helmet use for all riders regardless of legal status — helmet use reduces fatal head injury risk by approximately 37%.",
    "Michigan's hands-free driving law (HB 4250, effective June 30, 2023) applies to motorcyclists as well as car drivers. Motorcycle operators may not hold or manually use a wireless communication device while riding — including GPS, phone calls, or any app. Hands-free Bluetooth earbuds or intercom systems connected to a mounted device are permitted. Motorcycle riders should also be aware that Michigan's OWI (Operating While Intoxicated) law applies equally to motorcycles: the 0.08% BAC threshold (0.02% under 21) applies to all motor vehicle operators, including motorcyclists.",
  ],
  sampleQuestions: [
    { question: "To earn a Michigan motorcycle endorsement, applicants must pass:", options: ["A written test only — no road test is required in Michigan", "A 25-question knowledge test and a road skills test (or complete an approved MSF BRC to waive the skills test)", "A road skills test only — no written test required for experienced riders", "A 50-question knowledge test and a 2-hour road skills course"], correctIndex: 1, explanation: "Michigan requires both a 25-question knowledge test (80% passing) and a road skills test. Completing an approved MSF Basic RiderCourse (BRC) waives the road skills test — graduates submit their BRC completion card to the SOS to receive the CY endorsement without a separate skills test." },
    { question: "In Michigan, which riders are ALWAYS required to wear a DOT-approved helmet?", options: ["All Michigan motorcycle riders regardless of age or experience", "Only riders under age 16", "Riders under age 21, and riders 21+ who have held the endorsement less than 2 years", "No helmet is required in Michigan — it's a personal choice for all riders"], correctIndex: 2, explanation: "Michigan's conditional helmet law requires helmets for: (1) all riders under 21, and (2) riders 21 or older who have held their motorcycle endorsement for fewer than 2 years. Riders 21+ with 2+ years of endorsement AND at least $20,000 in first-party medical insurance may legally ride without a helmet. Safety experts still recommend helmets for all riders." },
    { question: "Michigan's hands-free driving law (HB 4250) applies to motorcycle operators:", options: ["No — the hands-free law only applies to car drivers with a steering wheel", "Yes — motorcycle operators may not hold or manually use any wireless device while riding", "Only in school zones and highway construction zones", "Only for riders under 21"], correctIndex: 1, explanation: "Michigan's hands-free law (effective June 30, 2023) applies to ALL operators of motor vehicles, including motorcycle riders. You may not hold a phone, GPS, or any wireless device while riding. Hands-free Bluetooth earbuds or an intercom system connected to a mounted device are permitted for navigation and communication." },
    { question: "What is the most effective protective gear for a Michigan motorcycle rider?", options: ["A DOT-approved helmet, eye protection, jacket, gloves, and over-the-ankle boots", "A bicycle helmet and sunglasses are sufficient for lower speeds", "Only a jacket and gloves — helmets are optional for adults 21+ in Michigan", "Protective gear is not required and has no impact on crash outcomes"], correctIndex: 0, explanation: "For maximum protection, Michigan's motorcycle safety program recommends: a DOT-approved helmet, eye protection (goggles or face shield — not sunglasses alone), a riding jacket with abrasion-resistant material, gloves, long pants, and over-the-ankle boots. This gear protects against road rash, impacts, and environmental hazards. Even where helmets are legally optional, safety advocates strongly recommend them." },
    { question: "When should a Michigan motorcyclist perform a T-CLOCS pre-ride inspection?", options: ["Monthly — once per month is sufficient for well-maintained bikes", "Before every ride, especially after the bike has been in storage", "Only when the bike has been serviced by a mechanic", "Never — pre-ride inspections are only required for commercial vehicles"], correctIndex: 1, explanation: "T-CLOCS (Tires, Controls, Lights, Oil, Chassis, Stands) is a pre-ride inspection checklist riders should complete before every ride. This is especially important in Michigan after winter storage, since cold temperatures affect tires, fluids, and chain/belt tension. A mechanical failure at speed can be far more dangerous on a motorcycle than in a car." },
    { question: "To safely corner on a motorcycle at highway speeds in Michigan, a rider should:", options: ["Apply the front brake through the turn to control speed", "Lean with the motorcycle into the turn while looking through the corner", "Counter-steer by pressing forward on the handlebar on the opposite side of the turn", "Slow down only after entering the corner — braking before the turn is dangerous"], correctIndex: 2, explanation: "At speeds above approximately 15 mph, motorcycles are steered using countersteering: to turn right, push forward on the right handlebar grip, which causes the bike to lean right and turn right. Looking through the corner (where you want to go) also helps the body naturally guide the motorcycle. Counter-steering is the primary steering mechanism at highway speeds and is tested on the Michigan motorcycle knowledge exam." },
    { question: "Michigan's OWI law applies to motorcycle riders at what BAC threshold for adults 21 and older?", options: ["0.04% — motorcycles are considered commercial vehicles", "0.06% — a more lenient standard for two-wheelers", "0.08% — same threshold as all motor vehicle operators", "0.10% — Michigan's higher threshold for experienced riders"], correctIndex: 2, explanation: "Michigan's OWI (Operating While Intoxicated) law applies to motorcycle operators at the same 0.08% BAC threshold as all other motor vehicle operators. Under-21 riders face the 0.02% zero-tolerance limit. Alcohol significantly impairs the balance, coordination, and judgment needed to safely operate a motorcycle — a first OWI on a motorcycle carries the same penalties as a car OWI." },
    { question: "When riding on Michigan's highways with faster car traffic, motorcyclists should:", options: ["Ride as close as possible to the center line to maximize visibility from behind", "Choose a lane position that increases visibility, avoids blind spots, and maintains adequate following distance", "Ride directly behind large trucks to take advantage of the windbreak effect", "Stay in the far-right tire track in all conditions to maintain consistency"], correctIndex: 1, explanation: "Lane position choices on a motorcycle directly affect safety. The MSF recommends choosing the lane position that: maximizes your visibility to other drivers, keeps you out of driver blind spots (especially trucks), avoids road hazards like oil drips and debris in the center, and maintains a safe following distance. In Michigan highway conditions, the left tire track is often preferred for straight-line riding as it keeps you visible in drivers' mirrors." },
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
    { question: "How do I get a Michigan motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (80%) at an SOS office. Then either pass the road skills test at an SOS office, or complete an approved MSF Basic RiderCourse (BRC) — BRC graduates can skip the road skills test. Submit the BRC completion card at an SOS branch to receive the CY endorsement on your Michigan license." },
    { question: "Does Michigan require a helmet for all motorcycle riders?", answer: "No — Michigan's helmet law is conditional. Riders under 21 always need a DOT-approved helmet. Riders 21+ who have held the endorsement for less than 2 years also need a helmet. Riders 21+ with 2+ years of endorsement AND $20,000 in first-party medical insurance may legally ride without one. Safety experts strongly recommend helmets regardless of legal requirements." },
    { question: "Does completing the MSF BRC waive the road skills test in Michigan?", answer: "Yes. Completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse (BRC) in Michigan waives the road skills test at the SOS office. You still need to pass the 25-question knowledge test. Present your BRC completion card at an SOS branch to receive the CY endorsement. Michigan also offers the MSF BRC through many community education programs at low cost." },
    { question: "Does Michigan's hands-free law apply to motorcycle riders?", answer: "Yes. Michigan's hands-free law (HB 4250, effective June 30, 2023) applies to all motor vehicle operators including motorcycle riders. You may not hold or manually use a wireless device while riding. Hands-free Bluetooth earbuds or a helmet-mounted intercom system connected to a GPS device are permitted alternatives." },
    { question: "What motorcycle endorsement is needed to ride in Michigan?", answer: "Michigan requires a CY (cycle) endorsement on your standard Michigan driver's license to legally operate any motorcycle, motorized bicycle (moped), or other two-or-three wheeled motor vehicle. The endorsement requires passing both the knowledge test and road skills test (or MSF BRC in lieu of skills test). Riding without the endorsement is a civil infraction." },
    {
      question: "What documents do I need to bring to the Michigan DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Michigan, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Michigan DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Michigan motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Michigan, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Michigan DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Michigan, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Michigan, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Michigan?",
      answer:
        "In Michigan, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Michigan DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Michigan?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Michigan DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "MI Driver's License", href: "/michigan-dmv-practice-test" },
    { label: "MI CDL Test", href: "/michigan-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MichiganMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
