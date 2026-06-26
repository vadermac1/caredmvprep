import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Massachusetts Motorcycle Practice Test 2025 – Free MA RMV Endorsement Exam Prep",
  description:
    "Free Massachusetts motorcycle practice test based on the 2025 Massachusetts Motorcycle Manual. 25 questions, 72% passing score. Prepare for your MA Registry of Motor Vehicles motorcycle endorsement test.",
  alternates: { canonical: "https://caredmvprep.com/massachusetts-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/massachusetts-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Massachusetts",
  stateAbbr: "MA",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "massachusetts-motorcycle-practice-test",
  headline: "Massachusetts Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Massachusetts motorcycle endorsement knowledge test with free practice questions based on the official Massachusetts Motorcycle Manual. The Massachusetts Registry of Motor Vehicles (RMV) requires all motorcycle riders to hold a motorcycle endorsement (Class M). Pass the RMV knowledge test with a 72% passing score, then complete the road skills test — or waive the skills test by completing an approved Massachusetts Rider Education Program (MREP) course.",
  basedOn: "2025 Massachusetts Motorcycle Manual",
  about: [
    "The Massachusetts Registry of Motor Vehicles (RMV) requires all motorcycle operators to hold a Class M motorcycle endorsement on their standard driver's license. To earn the endorsement, applicants must pass a 25-question motorcycle knowledge test at an RMV service center with at least 72% (18/25 correct) — Massachusetts applies the same 72% threshold to both the standard driver's license and motorcycle tests. After passing, riders receive a motorcycle learner's permit and must pass a road skills test at an RMV-approved site, or waive the skills test by completing an approved Massachusetts Rider Education Program (MREP) course.",
    "Massachusetts has a universal motorcycle helmet law: ALL riders and passengers must wear a DOT-approved protective helmet at all times. There are no exceptions based on age or riding experience. Massachusetts also requires eye protection — a face shield, goggles, or a windshield of sufficient height. Massachusetts's RMV recommends a full-face DOT-approved helmet that provides both head and facial protection. Massachusetts rotary (traffic circle) rules also apply to motorcycle riders: inside traffic has right of way, entering riders must yield.",
    "Massachusetts's Hands-Free Law (effective February 23, 2020) applies to motorcycle operators. Riders may not hold any electronic device while riding — including GPS, phone, or any wireless device. A Bluetooth headset or intercom in the helmet is permitted. Massachusetts's OUI (Operating Under the Influence) law applies to motorcycle operators: the 0.08% BAC threshold (0.02% for under-21 riders) applies equally to motorcyclists. A first OUI on a motorcycle carries the same mandatory suspension and Melanie's Law provisions as an OUI in any other motor vehicle.",
  ],
  sampleQuestions: [
    { question: "Massachusetts's motorcycle endorsement passing score is:", options: ["80% (20/25)", "75% (18.75/25)", "72% (18/25)", "70% (17.5/25)"], correctIndex: 2, explanation: "Massachusetts applies its standard 72% passing threshold to the motorcycle endorsement knowledge test, just like the regular driver's license test. You need at least 18 correct answers out of 25. This is lower than most states' 80% threshold. However, the content covers MA-specific rules including the universal helmet law, rotary right-of-way, OUI terminology, and the Hands-Free Law as applied to motorcycle operators." },
    { question: "Massachusetts requires motorcycle helmets for:", options: ["Riders under 21 only", "Riders in their first 2 years of endorsement only", "ALL riders and passengers — no exceptions", "Only riders on highways with speed limits over 45 mph"], correctIndex: 2, explanation: "Massachusetts has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved protective helmet — no exceptions for age or experience. Eye protection (face shield, goggles, or windshield) is also required. Massachusetts's RMV recommends a full-face DOT helmet. Riding without a helmet or eye protection in Massachusetts is a violation that results in fines." },
    { question: "When a Massachusetts motorcycle rider approaches a rotary (traffic circle), they must:", options: ["Enter at speed — rotary traffic must yield to entering vehicles", "Yield to all vehicles already circulating inside the rotary", "Only yield if the rotary has more than two lanes", "Treat the rotary like any other intersection — first come, first served"], correctIndex: 1, explanation: "Massachusetts's rotary rule applies to motorcycle riders exactly as it applies to car drivers: traffic INSIDE the rotary has the right of way. Motorcyclists entering a rotary must yield to all circulating traffic. Approach at reduced speed, yield to your left (where circulating traffic comes from), and merge when safe. Rotaries in Massachusetts can have one or more lanes — choose your lane before entering based on which exit you're taking." },
    { question: "What protective gear is recommended for Massachusetts motorcycle riders beyond the required helmet?", options: ["Only a helmet is needed — other gear is personal preference", "A jacket with abrasion-resistant material, gloves, long pants, and over-the-ankle boots", "Only sunglasses or safety glasses in addition to the required helmet", "A reflective vest and nothing else beyond the required helmet"], correctIndex: 1, explanation: "Beyond the legally required DOT helmet and eye protection, Massachusetts's motorcycle safety program (following the MSF curriculum) recommends: a riding jacket made of leather or abrasion-resistant synthetic material, full-fingered riding gloves, long pants (leather or armored riding pants), and over-the-ankle boots. This gear protects against road rash, impacts, and weather. Massachusetts's varied climate (from hot summers to cool fall conditions) requires riders to adapt gear appropriately." },
    { question: "Massachusetts's OUI law applies to motorcycle operators at what BAC threshold for adults 21+?", options: ["0.04% — motorcycles are more dangerous so the limit is lower", "0.06% — a reduced standard for two-wheelers", "0.08% — same threshold as all motor vehicles", "0.10% — no special threshold for motorcycles in Massachusetts"], correctIndex: 2, explanation: "Massachusetts's OUI (Operating Under the Influence) law applies to motorcycle operators at the same 0.08% BAC threshold as all other motor vehicle operators 21 and older. Under-21 riders face the 0.02% limit. Massachusetts's Melanie's Law provisions — including mandatory IID for second OUI convictions — apply equally to a motorcycle OUI conviction. A first OUI on a motorcycle results in the same 45–90 day suspension and program requirements as any other vehicle OUI." },
    { question: "What is the MSF-recommended technique for braking on wet Massachusetts roads?", options: ["Only use the rear brake on wet roads — the front brake skids easily when wet", "Apply both brakes smoothly and progressively with reduced stopping force compared to dry conditions", "Downshift rapidly to use engine braking only — never use hand or foot brakes in rain", "Use the same braking force as dry conditions — the wet myth is overstated"], correctIndex: 1, explanation: "On wet roads, both front and rear brakes remain effective but require reduced force and more distance. Apply both brakes smoothly and progressively — avoid abrupt squeezing that can lock a wheel on slippery pavement. Allow 2–3 times your normal stopping distance on wet roads. Massachusetts's frequent rain means wet-road braking is tested knowledge. Additionally, wet pavement has less predictable friction, especially on painted surfaces, metal, and leaves." },
    { question: "The Massachusetts MREP (Massachusetts Rider Education Program) waives:", options: ["The knowledge test — graduates still need to take the road skills test", "The road skills test — graduates still need to pass the knowledge test", "Both the knowledge test and road skills test", "The RMV fee — but both tests are still required"], correctIndex: 1, explanation: "Completing a Massachusetts Rider Education Program (MREP) or approved MSF Basic RiderCourse (BRC) waives the road skills test for the motorcycle endorsement. You still need to pass the 25-question knowledge test (18/25 = 72%) at an RMV service center. MREP courses are offered through community colleges, private riding schools, and military installations in Massachusetts. Upon completion, submit your course card to the RMV for the endorsement." },
    { question: "When a Massachusetts motorcycle rider encounters a dog or animal running onto the road:", options: ["Accelerate past the animal before it reaches your path", "Brake hard and swerve to avoid the animal", "Reduce speed, honk your horn, and be prepared to swerve if necessary — but prioritize staying on the road over dodging", "Stop the motorcycle completely whenever an animal is visible"], correctIndex: 2, explanation: "When an animal runs onto the road, your safest response is to slow down, sound your horn (which may deter the animal), and be prepared to maneuver around it if necessary — but never swerve abruptly or brake so hard that you lose control. In Massachusetts, deer and other wildlife are common hazards, especially at dawn and dusk. Staying in your lane and giving the animal time to react is usually safer than a sudden swerve into oncoming traffic or off the road." },
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
    { question: "How do I get a Massachusetts motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (72% = 18/25) at an MA RMV service center to receive a motorcycle learner's permit. Then either pass the road skills test at an RMV-approved location, or complete a Massachusetts Rider Education Program (MREP) or MSF BRC course to waive the skills test. Submit your course completion card to the RMV to receive the Class M endorsement." },
    { question: "Does Massachusetts require helmets for all motorcycle riders?", answer: "Yes. Massachusetts has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved protective helmet — no age or experience exceptions. Eye protection (face shield, goggles, or windshield) is also required. Violations result in fines. Massachusetts's helmet law is strictly enforced throughout the state." },
    { question: "What is the motorcycle endorsement passing score in Massachusetts?", answer: "Massachusetts requires 72% to pass the motorcycle knowledge test — at least 18 correct answers out of 25. This is the same threshold as Massachusetts's standard driver's license test, and is lower than most states' 80% motorcycle test standard. The lower threshold reflects Massachusetts's overall driver testing philosophy, not an easier test — the content covers MA-specific laws and safety principles." },
    { question: "How does the MREP course waive the road skills test?", answer: "The Massachusetts Rider Education Program (MREP) and MSF Basic RiderCourse (BRC) are approved by the MA RMV as substitutes for the motorcycle road skills test. Upon completing an MREP/BRC course, you receive a completion certificate that you submit to the RMV. You still need to pass the knowledge test first. MREP courses are available at community colleges throughout Massachusetts — visit mass.gov/rmv for a list of providers." },
    { question: "Do Massachusetts rotary rules apply to motorcycle riders?", answer: "Yes. Massachusetts's rotary (traffic circle) rule applies equally to motorcycle riders: traffic already circulating inside the rotary has the right of way. Motorcyclists entering a rotary must yield to all circulating traffic before merging in. This is a key MA-specific rule that differs from older rotary conventions in some other regions." },
    {
      question: "What documents do I need to bring to the Massachusetts DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Massachusetts, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Massachusetts DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Massachusetts motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Massachusetts, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Massachusetts DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Massachusetts, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Massachusetts, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Massachusetts?",
      answer:
        "In Massachusetts, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Massachusetts DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Massachusetts?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Massachusetts DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "MA Driver's License", href: "/massachusetts-dmv-practice-test" },
    { label: "MA CDL Test", href: "/massachusetts-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MassachusettsMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
