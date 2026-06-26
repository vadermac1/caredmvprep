import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Tennessee Motorcycle Practice Test 2025 – Free TN TDOSHS Endorsement Exam Prep",
  description:
    "Free Tennessee motorcycle practice test based on the 2025 Tennessee Motorcycle Manual. 25 questions, 80% passing score. Prepare for your TN Department of Safety motorcycle endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/tennessee-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/tennessee-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Tennessee",
  stateAbbr: "TN",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "tennessee-motorcycle-practice-test",
  headline: "Tennessee Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Tennessee motorcycle endorsement knowledge test with free practice questions based on the official Tennessee Motorcycle Manual. The Tennessee Department of Safety and Homeland Security (TDOSHS) requires all motorcycle riders to hold a motorcycle endorsement or a motorcycle-only license (Class M). Pass the TDOSHS knowledge test, then complete the road skills test — or waive the skills test by completing an approved Tennessee Motorcycle Safety Program (MSP) course.",
  basedOn: "2025 Tennessee Motorcycle Manual",
  about: [
    "The Tennessee Department of Safety and Homeland Security (TDOSHS) requires all motorcycle operators to hold a Class M motorcycle endorsement on their driver's license or obtain a separate motorcycle-only license. To earn the endorsement, applicants must pass a 25-question motorcycle knowledge test at a TDOSHS driver services center with at least 80% (20/25 correct). After passing, riders receive a motorcycle learner's permit and must pass a road skills test — or waive it by completing an approved Tennessee Motorcycle Safety Program (MSP) course, which is an MSF-based training program offered at community colleges and training facilities throughout Tennessee.",
    "Tennessee has a universal motorcycle helmet law: ALL motorcycle riders and passengers must wear a DOT-approved protective helmet at all times on Tennessee roads. There are no exceptions based on age or experience. Eye protection is also required — a face shield, goggles, or a motorcycle windshield that extends above eye level. Tennessee's TDOSHS motorcycle safety materials note that helmets reduce the risk of fatal head injury by approximately 37% and are the single most effective safety measure available to motorcycle riders.",
    "Tennessee's Hands-Free Act (effective July 1, 2019) applies to motorcycle operators. Riders may not hold or manually use any wireless electronic device while operating a motorcycle — including GPS, calls, texts, and any app. A Bluetooth headset or helmet-mounted intercom connected to a device on the motorcycle is permitted. Tennessee's DUI law (0.08% BAC for adults 21+, 0.02% for under-21) applies equally to motorcycle operators. Tennessee's Appalachian and Great Smoky Mountains region is a world-famous motorcycling destination — the Tail of the Dragon (US 129) and other mountain roads present curves, elevation changes, and wildlife hazards that are unique to Tennessee riding.",
  ],
  sampleQuestions: [
    { question: "Tennessee's motorcycle helmet law requires helmets for:", options: ["Only riders under 18", "Riders with less than 2 years of endorsement experience", "ALL Tennessee motorcycle riders and passengers — no exceptions", "Only riders on state highways with limits over 45 mph"], correctIndex: 2, explanation: "Tennessee has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved protective helmet — no exceptions based on age or experience level. Eye protection is also required. Tennessee's mountain riding environment (Smoky Mountains, Tail of the Dragon) makes helmets especially critical given the elevation, tight curves, and potential for animal crossings at any moment." },
    { question: "Tennessee's Hands-Free Act applies to motorcycle operators because:", options: ["Motorcycles with handlebars are exempt from hands-free laws", "All motor vehicle operators in Tennessee are covered, including motorcyclists", "Only if the motorcycle has a passenger compartment", "Only on Tennessee interstate highways"], correctIndex: 1, explanation: "Tennessee's Hands-Free Act (Public Chapter 412, effective July 1, 2019) applies to ALL operators of motor vehicles in Tennessee — including motorcycle riders. You may not hold or manually use any wireless device while riding. Hands-free Bluetooth in your helmet or an intercom system is permitted. Fines: $50 (first), $100 (second), $150 (third+). School zone and emergency zone violations carry double fines." },
    { question: "What is the primary hazard on Tennessee's Tail of the Dragon (US 129) and other Smoky Mountain motorcycle routes?", options: ["Low fuel — no gas stations exist for 40 miles on the Dragon", "Tight, consecutive curves with limited sight distance, elevation changes, and wildlife crossing the road", "High-altitude engine power loss affecting acceleration", "State Police strict enforcement making safe speeds illegal"], correctIndex: 1, explanation: "The Tail of the Dragon and similar Tennessee mountain roads have 318 curves in 11 miles — presenting continuous blind corners, elevation changes, and frequent wildlife crossing. The primary hazard is overconfidence leading to entering corners too fast. The MSF technique: slow before the corner (not during), look through the curve, lean, and gradually roll on the throttle. Deer and black bears frequently cross these roads — especially at dawn, dusk, and night." },
    { question: "Tennessee's DUI threshold for motorcycle operators 21 and older is:", options: ["0.04% — a stricter standard for two-wheelers", "0.06% — lower than the standard for car drivers", "0.08% — same as all motor vehicle operators", "0.10% — Tennessee uses a higher threshold for motorcycles"], correctIndex: 2, explanation: "Tennessee's DUI law applies to motorcycle operators at the same 0.08% BAC threshold as all motor vehicle operators for drivers 21 and older. Under-21 riders face Tennessee's 0.02% limit. Alcohol impairs the balance, coordination, and reaction time needed to safely navigate Tennessee's curves and mountain roads. A DUI conviction while riding a motorcycle carries the same penalties and license implications as a car DUI." },
    { question: "When a Tennessee motorcycle rider needs to stop quickly on a downhill slope:", options: ["Apply the front brake only — the rear slides down hills", "Apply both brakes simultaneously and progressively, adding extra braking force to account for the downhill momentum", "Use only engine braking — no brakes on a slope", "Downshift rapidly to use compression braking before applying the brakes"], correctIndex: 1, explanation: "Stopping on a downhill grade requires more braking effort than on flat ground because gravity is adding to your forward momentum. Apply both front and rear brakes simultaneously and progressively, beginning the stop earlier than you would on flat ground. The front brake provides most of the stopping power — apply it progressively to avoid front wheel lockup. If the rear wheel locks on a downhill (in a straight line), maintain the lock and steer straight to a controlled stop rather than releasing abruptly." },
    { question: "What is the Tennessee Motorcycle Safety Program (MSP) and how does it benefit endorsement applicants?", options: ["The MSP provides a temporary 90-day endorsement while you study for the knowledge test", "Completing the MSP waives the TDOSHS road skills test for the motorcycle endorsement", "The MSP is a free program that also waives the knowledge test", "MSP completion allows you to skip the permit stage and go directly to a full endorsement"], correctIndex: 1, explanation: "Tennessee's Motorcycle Safety Program (MSP) — an MSF-based course — waives the TDOSHS road skills test when completed. You still need to pass the 25-question knowledge test (20/25 = 80%) at a TDOSHS driver services center. MSP courses are available at community colleges and private training facilities in Tennessee. Many auto insurance companies also offer premium discounts for MSP-certified riders." },
    { question: "Riding through Tennessee's mountain curves at speed, countersteering requires the rider to:", options: ["Turn the handlebars in the direction of the curve like a bicycle", "Press forward on the handlebar grip on the SAME side as the direction of the turn at speeds above approximately 15 mph", "Press forward on the handlebar grip on the OPPOSITE side as the direction of the turn", "Lean body weight only — do not apply pressure to the handlebars"], correctIndex: 1, explanation: "Wait — this answer option is incorrect. Countersteering: to turn RIGHT at speed, press forward on the RIGHT handlebar — which causes the motorcycle to lean right and turn right. Option B is correct for turning in the SAME direction. Let me re-examine: 'Press forward on the handlebar grip on the SAME side as the direction of the turn' — pressing right to go right IS countersteering. This is correct. The physics: pushing the right bar forward rotates the front wheel slightly left momentarily, causing the motorcycle to lean right and initiate a right turn." },
    { question: "Eye protection required for Tennessee motorcycle riders must be:", options: ["Regular sunglasses — any type is acceptable", "A DOT-approved face shield, goggles, or motorcycle windshield extending above eye level", "Only required for riders under 18 in Tennessee", "Prescription eyeglasses satisfy the eye protection requirement"], correctIndex: 1, explanation: "Tennessee requires ALL motorcycle riders to wear a face shield, goggles, or have a windshield extending above the rider's eye level — in addition to the required DOT helmet. Ordinary sunglasses do not meet the legal standard (they can be blown off, shatter on impact, and don't seal against wind). A full-face DOT helmet with integrated face shield satisfies both the helmet and eye protection requirements simultaneously." },
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
    { question: "How do I get a Tennessee motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (80% = 20/25) at a TDOSHS driver services center to receive a motorcycle learner's permit. Then either pass the road skills test, or complete an approved Tennessee Motorcycle Safety Program (MSP) course to waive the skills test. Submit your MSP completion certificate to TDOSHS for the motorcycle endorsement." },
    { question: "Does Tennessee require helmets for all motorcycle riders?", answer: "Yes. Tennessee has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved helmet — no exceptions. Eye protection (face shield, goggles, or windshield) is also required. Violations result in fines. This applies to all Tennessee roads including the Tail of the Dragon and other popular motorcycle routes in the Smoky Mountains area." },
    { question: "What is the Tail of the Dragon and how should motorcyclists approach it?", answer: "The Tail of the Dragon (US 129) has 318 curves in 11 miles — one of the most famous motorcycle roads in the U.S. Safe approach: slow to an appropriate speed for each blind corner; never assume the road will straighten out; watch for wildlife crossing; ride in your lane with no center line crossing; and stop at the midpoint rest area to check your mental and physical state. Many serious crashes occur when riders exceed their skill level on the Dragon's blind curves." },
    { question: "Does Tennessee's Hands-Free Act apply to motorcycle operators?", answer: "Yes. Tennessee's Hands-Free Act (effective July 1, 2019) applies to ALL motor vehicle operators in Tennessee — including motorcycle riders. You may not hold or manually use any wireless device while riding. Bluetooth headsets and intercom systems are permitted. Fines: $50 (first), $100 (second), $150 (third+). Double fines in school zones and active emergency zones." },
    { question: "What is the best gear for riding Tennessee mountain roads?", answer: "For Tennessee mountain riding: a DOT full-face helmet (face shield provides eye protection in bugs and debris); a motorcycle jacket with CE-rated armor at shoulders, elbows, and back; gloves with palm protection; riding pants with knee and hip armor; and over-the-ankle boots with ankle protection. Tennessee's mountainous roads involve long descents, tight curves, and potential for gravel — full protective gear significantly reduces injury severity in the event of a crash." },
    {
      question: "What documents do I need to bring to the Tennessee DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Tennessee, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Tennessee DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Tennessee motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Tennessee, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Tennessee DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Tennessee, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Tennessee, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Tennessee?",
      answer:
        "In Tennessee, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Tennessee DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Tennessee?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Tennessee DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "TN Driver's License", href: "/tennessee-dmv-practice-test" },
    { label: "TN CDL Test", href: "/tennessee-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function TennesseeMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
