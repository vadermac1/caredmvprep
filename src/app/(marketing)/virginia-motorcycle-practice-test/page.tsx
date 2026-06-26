import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Virginia Motorcycle Practice Test 2025 – Free VA DMV Endorsement Exam Prep",
  description:
    "Free Virginia motorcycle practice test based on the 2025 Virginia Motorcycle Operator Manual. 25 questions, 80% passing score. Prepare for your VA DMV motorcycle endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/virginia-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/virginia-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Virginia",
  stateAbbr: "VA",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "virginia-motorcycle-practice-test",
  headline: "Virginia Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Virginia motorcycle endorsement knowledge test with free practice questions based on the official Virginia Motorcycle Operator Manual. The Virginia DMV requires all motorcycle riders to obtain a motorcycle endorsement or a separate motorcycle license. Pass the knowledge test at a Virginia DMV customer service center, then complete the road skills test — or waive the skills test by completing an approved MSF Basic RiderCourse (BRC).",
  basedOn: "2025 Virginia Motorcycle Operator Manual",
  about: [
    "The Virginia Department of Motor Vehicles (DMV) requires all motorcycle operators to hold a motorcycle endorsement on their standard driver's license, or obtain a separate Class M motorcycle license if they do not have a standard license. To earn the endorsement, applicants must pass a 25-question motorcycle knowledge test at a Virginia DMV customer service center with a score of at least 80% (20/25 correct). After passing the knowledge test, applicants receive a motorcycle learner's permit and must pass a road skills test — or waive the skills test by completing an approved MSF Basic RiderCourse (BRC). The BRC is offered throughout Virginia through community colleges and private riding schools.",
    "Virginia has a universal motorcycle helmet law: ALL riders and passengers on a motorcycle must wear a DOT-approved protective helmet at all times. There are no age or experience exceptions to Virginia's helmet requirement — it applies to every motorcycle operator and every passenger on Virginia roads. Riders must also wear face shields or goggles for eye protection unless the motorcycle has a windshield. Virginia's universal helmet law is strictly enforced and violations result in fines.",
    "Virginia's hands-free law (Virginia Code §46.2-818.2, effective January 1, 2021) applies to motorcycle operators. Riders may not hold a wireless communication device while riding. Hands-free Bluetooth earbuds, intercom helmet systems, or a device mounted to the bike and operated by voice command are permitted. Virginia's DUI threshold applies to motorcyclists: 0.08% BAC for adults 21+, 0.02% for under-21 riders. A DUI conviction while operating any motor vehicle — including a motorcycle — results in the same penalties and has the same impact on the motorcycle endorsement.",
  ],
  sampleQuestions: [
    { question: "Virginia's helmet law for motorcycle riders requires:", options: ["Helmets only for riders under 21 years old", "Helmets only during the first 12 months of riding", "Helmets for ALL riders and passengers — no exceptions", "Helmets only when riding on highways over 55 mph"], correctIndex: 2, explanation: "Virginia has a universal motorcycle helmet law (Virginia Code §46.2-906) requiring ALL motorcycle operators and passengers to wear a DOT-approved protective helmet at all times. There are no age or experience exceptions. Riders must also wear eye protection (face shield, goggles, or windshield). Violations result in a fine and contribute to the approximately 3x higher fatality risk for unhelmeted riders." },
    { question: "What is the advantage of taking an MSF Basic RiderCourse (BRC) in Virginia?", options: ["BRC graduates are exempt from insurance requirements in Virginia", "BRC completion waives the road skills test for the motorcycle endorsement", "BRC graduates receive a discount on the Virginia DMV knowledge test fee", "BRC is only required for riders over age 50"], correctIndex: 1, explanation: "Completing an approved MSF Basic RiderCourse (BRC) in Virginia allows applicants to skip the road skills test at the DMV — the BRC serves as the skills test substitute. You still need to pass the 25-question knowledge test. Many insurance companies also offer premium discounts for BRC graduates. The BRC is available at community colleges and private riding schools throughout Virginia." },
    { question: "Virginia's hands-free law (§46.2-818.2) applies to motorcycle operators:", options: ["No — the law only applies to enclosed motor vehicles with a steering wheel", "Yes — motorcycle operators may not hold any wireless device while riding", "Only if the rider has passengers on the motorcycle", "Only when riding on interstate highways"], correctIndex: 1, explanation: "Virginia Code §46.2-818.2 (effective January 1, 2021) applies to ALL drivers and operators of motor vehicles on Virginia roads — including motorcycle riders. You may not hold any wireless communication device while operating a motorcycle. Hands-free helmet intercoms, Bluetooth earbuds, or a voice-activated mount are permitted alternatives." },
    { question: "In Virginia, the proper technique for braking on a motorcycle is:", options: ["Always use the rear brake only — the front brake causes skids", "Apply both front and rear brakes simultaneously and progressively", "Use the front brake only in emergency stops", "Downshift without any brake application for all normal stops"], correctIndex: 1, explanation: "The proper braking technique on a motorcycle uses BOTH front and rear brakes simultaneously and progressively. The front brake provides approximately 70–75% of stopping power. Braking with only the rear can cause the rear wheel to lock and skid. Squeezing the front brake lever progressively transfers weight to the front wheel, improving grip. Hard, abrupt front brake application at highway speeds can cause the front wheel to lock." },
    { question: "When riding in a group in Virginia, the recommended formation is:", options: ["Single file with each rider directly behind the one in front", "Two abreast (side-by-side) in the same lane", "Staggered formation — one rider in the left portion of the lane, the next in the right portion", "Completely random positioning — no formation is required"], correctIndex: 2, explanation: "Virginia's motorcycle safety guidance (following the MSF standard) recommends staggered formation for group riding: the leader rides in the left portion of the lane, the second rider takes the right portion approximately 1 second behind, the third is back to the left portion 2 seconds behind the leader, and so on. Staggered formation maintains adequate following distance, gives each rider a safe escape route, and keeps the group visible as a unit." },
    { question: "What is the most important factor in preventing intersection crashes for Virginia motorcyclists?", options: ["Riding in the center of the lane at all intersections", "Covering the brake lever when approaching intersections and scanning for cross traffic", "Using the horn to alert cross traffic to your presence", "Accelerating quickly through intersections to spend less time in the danger zone"], correctIndex: 1, explanation: "Intersections are the most dangerous locations for motorcyclists — approximately 40% of motorcycle fatal crashes involve a car turning left in front of the rider. Virginia's motorcycle safety guidance recommends: covering the brake (hand on lever, foot near pedal) when approaching intersections, actively scanning for cross traffic, reducing speed if a cross-street vehicle is approaching, and being prepared to stop. Never assume an approaching driver has seen you." },
    { question: "Virginia's DUI BAC limit applies to motorcycle operators at:", options: ["0.04% — motorcycles are considered more dangerous", "0.06% — a reduced standard for two-wheelers", "0.08% for adults 21+ — same as all motor vehicles", "0.10% — no special motorcycle DUI law exists in Virginia"], correctIndex: 2, explanation: "Virginia's DUI law applies to motorcycle operators at the same 0.08% BAC threshold as all motor vehicle operators (adults 21+). Under-21 motorcyclists face the 0.02% zero-tolerance limit. Alcohol and drugs impair the balance, coordination, and reaction time needed to safely operate a motorcycle — impaired motorcycle crashes have a significantly higher fatality rate than impaired car crashes." },
    { question: "When making an emergency stop on a motorcycle in Virginia, you should:", options: ["Lock the rear brake first, then progressively apply the front brake", "Apply both brakes simultaneously and progressively while looking straight ahead", "Use only the rear brake to avoid flipping forward", "Release the throttle completely but do not touch the brakes until fully stopped"], correctIndex: 1, explanation: "In an emergency stop, apply both front and rear brakes simultaneously and progressively — squeeze the front brake lever firmly while pressing the rear brake pedal down. Keep your eyes and head up, looking where you want to go. Steer away from obstacles if needed while braking. With ABS-equipped bikes, you can brake firmly without skidding. On non-ABS bikes, ease up immediately if the rear wheel starts to skid to prevent a slide." },
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
    { question: "How do I get a Virginia motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (80%) at a Virginia DMV customer service center. Then complete the road skills test at a DMV location — or waive the skills test by completing an approved MSF Basic RiderCourse (BRC). Present your BRC completion card at a Virginia DMV to receive the Class M endorsement on your license." },
    { question: "Does Virginia have a universal helmet law?", answer: "Yes. Virginia requires ALL motorcycle operators and passengers to wear a DOT-approved helmet at all times. There are no age or experience exceptions. Riders must also wear a face shield, goggles, or have a windshield. Violations result in fines. Virginia's helmet law applies to mopeds and other two-wheeled motor vehicles as well." },
    { question: "Can I take a Virginia motorcycle test with a learner's permit?", answer: "Yes. After passing the motorcycle knowledge test, Virginia issues a motorcycle learner's permit that allows you to ride under certain restrictions. You must then pass the road skills test or complete a BRC to receive the full motorcycle endorsement. The learner's permit is valid for 12 months, giving you time to practice before the skills test." },
    { question: "What MSF course waives the Virginia motorcycle skills test?", answer: "The MSF Basic RiderCourse (BRC) is the primary course that waives the Virginia road skills test for the motorcycle endorsement. The BRC is available at community colleges, private riding schools, and military installations throughout Virginia. Upon completion, you receive a completion card to present at a Virginia DMV to receive the Class M endorsement." },
    { question: "What eye protection is required for Virginia motorcycle riders?", answer: "Virginia requires motorcycle riders to wear a face shield, goggles, or a windshield-equipped motorcycle for eye protection. Sunglasses alone do not satisfy the eye protection requirement in Virginia. A DOT-approved helmet with an integrated face shield provides both head and eye protection. Eye protection prevents wind, debris, and insects from impairing your vision at speed." },
    {
      question: "What documents do I need to bring to the Virginia DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Virginia, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Virginia DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Virginia motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Virginia, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Virginia DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Virginia, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Virginia, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Virginia?",
      answer:
        "In Virginia, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Virginia DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Virginia?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Virginia DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "VA Driver's License", href: "/virginia-dmv-practice-test" },
    { label: "VA CDL Test", href: "/virginia-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function VirginiaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
