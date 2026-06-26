import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Washington Motorcycle Practice Test 2025 – Free WA DOL Endorsement Exam Prep",
  description:
    "Free Washington motorcycle practice test based on the 2025 Washington Motorcycle Operator Manual. 25 questions, 80% passing score. Prepare for your WA Department of Licensing motorcycle endorsement test.",
  alternates: { canonical: "https://caredmvprep.com/washington-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/washington-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Washington",
  stateAbbr: "WA",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "washington-motorcycle-practice-test",
  headline: "Washington Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Washington motorcycle endorsement knowledge test with free practice questions based on the official Washington Motorcycle Operator Manual. The Washington Department of Licensing (DOL) requires all motorcycle riders to hold an endorsement on their driver's license. Pass the DOL knowledge test, then complete the road skills test — or waive the skills test by completing an approved MSF Basic RiderCourse (BRC).",
  basedOn: "2025 Washington Motorcycle Operator Manual",
  about: [
    "The Washington Department of Licensing (DOL) requires all motorcycle operators to hold a motorcycle endorsement on their Washington driver's license. To earn the endorsement, applicants must pass a 25-question motorcycle knowledge test at a DOL licensing office with at least 80% (20/25 correct). After passing, applicants receive a motorcycle instruction permit valid for 6 months and must either pass the road skills test at a DOL office or waive the skills test by completing an approved MSF Basic RiderCourse (BRC). The BRC is widely offered through community colleges and private riding schools throughout Washington.",
    "Washington has a universal motorcycle helmet law: ALL motorcycle riders and passengers must wear a DOT-approved protective helmet at all times on Washington roads. There are no exceptions based on age or experience. Riders must also wear eye protection — a face shield, goggles, or a windshield — unless the motorcycle is equipped with a windshield that extends above eye level. Washington state's helmet requirement is consistently enforced and applies on all roads, including residential streets and parking lots.",
    "Washington's E-DUI (Driving Under the Influence of Electronics) law applies to motorcycle operators. Riders may not hold or manually use any electronic device while operating a motorcycle — the same prohibition that applies to car drivers since 2017. A Bluetooth headset in a helmet or an intercom system is permitted. Washington's DUI law (including the cannabis DUI threshold of 5 ng/mL THC) applies equally to motorcycle operators. Washington's wet, rainy roads create unique motorcycle safety challenges — traction is significantly reduced on wet pavement, especially on painted lane markings and metal grating (common on bridges).",
  ],
  sampleQuestions: [
    { question: "Washington's helmet law for motorcycle riders and passengers requires:", options: ["Helmets only for riders under 18", "Helmets only on state highways with speed limits over 35 mph", "DOT-approved helmets for ALL riders and passengers — no exceptions", "Helmets only during the first year of riding"], correctIndex: 2, explanation: "Washington has a universal motorcycle helmet law: ALL operators and passengers on a motorcycle must wear a DOT-approved protective helmet at all times on Washington roads. There are no age or experience exceptions. Eye protection is also required unless the motorcycle has a windshield. Washington's helmet requirement reflects data showing helmets reduce motorcycle fatalities by approximately 37%." },
    { question: "What is the main motorcycle safety hazard unique to Washington's rainy climate?", options: ["High altitude affecting engine performance", "Reduced traction on wet roads, especially on painted markings and metal bridge grating", "Strong coastal winds affecting highway lane keeping", "Road debris from logging operations"], correctIndex: 1, explanation: "Washington's frequent rain creates particularly hazardous conditions for motorcyclists. Wet roads significantly reduce tire traction. Painted lane markings become extremely slippery when wet — up to 40% less traction than dry asphalt. Metal bridge grating (common on Washington's many bridges) becomes very slippery in rain. When riding in wet conditions, increase following distances, reduce speed through corners, and avoid sudden braking or steering inputs." },
    { question: "Washington's E-DUI law applies to motorcycle operators because:", options: ["Motorcycles have handlebars instead of a steering wheel, so the law doesn't apply", "All operators of motor vehicles on Washington roads are covered, including motorcyclists", "The law only applies when riding on state highways", "Only if the rider has a passenger on the motorcycle"], correctIndex: 1, explanation: "Washington's E-DUI law (effective July 23, 2017) applies to ALL operators of motor vehicles on Washington roads — including motorcycle riders. You may not hold or manually use any electronic device while operating a motorcycle. A single-ear Bluetooth headset or a helmet intercom connected to a mounted device is permitted. Using a handheld GPS on the handlebars while riding is a violation." },
    { question: "When riding over railroad tracks in Washington, the safest approach is to:", options: ["Cross railroad tracks at a 45-degree angle for the best grip", "Cross at a 90-degree angle (perpendicular) to avoid your front wheel dropping into the gap", "Stop the motorcycle and walk it over the tracks", "Accelerate quickly to minimize time on the slippery surface"], correctIndex: 1, explanation: "Crossing railroad tracks at a 90-degree angle (perpendicular to the tracks) is the safest approach on a motorcycle. Crossing at an angle risks catching the front wheel in the gap, which can cause a sudden deflection or drop. At 90 degrees, both wheels cross over the tracks quickly with minimal risk. Slow down before the tracks, cross at 90 degrees, and accelerate gently after clearing the rails." },
    { question: "Washington's cannabis DUI per se threshold applies to motorcycle operators at:", options: ["Any detectable amount of THC", "5 ng/mL THC in whole blood — same as all motor vehicle operators", "10 ng/mL THC — higher threshold for motorcycles", "Cannabis impairment is not covered under Washington motorcycle law"], correctIndex: 1, explanation: "Washington's per se cannabis DUI threshold (5 ng/mL THC in whole blood) applies to motorcycle operators exactly as it does to all other motor vehicle operators. Recreational cannabis is legal in Washington, but riding impaired is not. Cannabis significantly impairs the balance, coordination, and reaction time needed to safely operate a motorcycle — impaired motorcyclists face dramatically higher crash and fatality risks than impaired car drivers." },
    { question: "What is the recommended following distance for a motorcyclist on Washington highways?", options: ["1 second — motorcycles stop faster than cars", "2 seconds — same as a following car", "At least 3–4 seconds — more time needed to react and stop safely", "10 feet — a fixed distance rule applies in Washington"], correctIndex: 2, explanation: "Washington's motorcycle safety guidance recommends a minimum following distance of 3–4 seconds for motorcyclists, more than the 2-second standard for cars. Motorcyclists need more reaction time because: (1) motorcycles can be less stable during emergency braking, (2) road hazards (debris, gravel, potholes) are more dangerous on two wheels, and (3) motorcycles are less visible to following traffic. In adverse weather on Washington's wet roads, increase to 5+ seconds." },
    { question: "Eye protection required for Washington motorcycle riders without a windshield must be:", options: ["Ordinary sunglasses that wrap around the face", "A DOT-approved face shield or goggles designed for motorcycle use", "Any commercial-grade eyewear including safety glasses", "No eye protection is required if the rider has good natural vision"], correctIndex: 1, explanation: "Washington requires motorcycle riders to wear a DOT-approved face shield or goggles for eye protection if the motorcycle does not have a windshield that extends above the rider's eye level. Ordinary sunglasses do not meet the eye protection standard — they can be blown off, break on impact, and do not seal against wind and insects. A full-face helmet with an integrated face shield provides both head and eye protection in one piece of equipment." },
    { question: "When a Washington motorcyclist encounters a large truck on a highway, they should:", options: ["Draft closely behind the truck to reduce wind resistance", "Pass quickly and immediately cut back in front of the truck", "Stay out of the truck's blind spots — avoid riding directly beside or behind large trucks", "Ride directly in front of the truck at highway speed for maximum visibility"], correctIndex: 2, explanation: "Large trucks have significant blind spots: directly behind the truck, directly in front within 20 feet, and on both sides extending back from the mirrors. A motorcyclist in a truck's blind spot is invisible to the driver. Pass trucks quickly and definitively — don't linger beside a truck. After passing, ensure you can see the truck driver in your mirror before returning to the lane. Never tailgate a truck — the rear underride gap is deadly for motorcycles in a rear-end crash." },
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
    { question: "How do I get a Washington motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (80%) at a WA DOL licensing office to receive a 6-month motorcycle instruction permit. Then either pass the road skills test at a DOL office, or complete an approved MSF Basic RiderCourse (BRC) to waive the skills test. Present your BRC completion card at a DOL office to receive the motorcycle endorsement." },
    { question: "Does Washington require a helmet for all motorcycle riders?", answer: "Yes. Washington has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved protective helmet. There are no exceptions for age or experience. Eye protection (face shield, goggles, or windshield) is also required. Violations result in fines." },
    { question: "How does Washington's E-DUI law affect motorcyclists?", answer: "Washington's E-DUI law applies to all motor vehicle operators including motorcyclists. You may not hold or manually use any electronic device while riding — no calls, texts, GPS, or any other handheld use. A Bluetooth headset or intercom system is permitted. First offense: $136. Second within 5 years: $234 plus a driving record entry." },
    { question: "What unique hazards do Washington motorcyclists face?", answer: "Washington's rainy climate creates specific hazards: (1) wet painted markings on roads are extremely slippery — treat them like ice; (2) metal bridge grating becomes slippery when wet; (3) oil drips in the center of traffic lanes mix with rain to create a particularly slippery layer; (4) leaves on roads in fall are as slippery as ice. Reduce speed and increase following distance significantly in wet conditions." },
    { question: "Does Washington offer an MSF course to waive the motorcycle skills test?", answer: "Yes. Completing an approved MSF Basic RiderCourse (BRC) in Washington waives the DOL road skills test for the motorcycle endorsement. The BRC is offered at community colleges and private riding schools throughout Washington. Many insurance companies also offer discounts for BRC graduates. Check dol.wa.gov for a list of approved BRC providers." },
    {
      question: "What documents do I need to bring to the Washington DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Washington, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Washington DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Washington motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Washington, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Washington DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Washington, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Washington, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Washington?",
      answer:
        "In Washington, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Washington DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Washington?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Washington DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "WA Driver's License", href: "/washington-dmv-practice-test" },
    { label: "WA CDL Test", href: "/washington-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function WashingtonMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
