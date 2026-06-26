import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Arizona Motorcycle Practice Test 2025 – Free AZ MVD Endorsement Exam Prep",
  description:
    "Free Arizona motorcycle practice test based on the 2025 Arizona Motorcycle Operator Manual. 25 questions, 80% passing score. Prepare for your AZ Motor Vehicle Division motorcycle endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/arizona-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/arizona-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Arizona",
  stateAbbr: "AZ",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "arizona-motorcycle-practice-test",
  headline: "Arizona Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Arizona motorcycle endorsement knowledge test with free practice questions based on the official Arizona Motorcycle Operator Manual. The Arizona Motor Vehicle Division (MVD) requires all motorcycle riders to hold a motorcycle endorsement (M) on their driver's license. Pass the MVD knowledge test and road skills test — or waive the skills test by completing an approved motorcycle safety training course.",
  basedOn: "2025 Arizona Motorcycle Operator Manual",
  about: [
    "The Arizona Motor Vehicle Division (MVD) requires all motorcycle riders to hold a Class M motorcycle endorsement or a separate motorcycle-only license. To earn the endorsement, applicants must pass a 25-question motorcycle knowledge test at an MVD office or Authorized Third Party (ATP) location with at least 80% (20/25 correct). After passing, the rider receives a motorcycle instruction permit and must pass a road skills test or complete an approved Arizona motorcycle safety training course. Arizona contracts with approved training providers for course completion that waives the MVD road skills test.",
    "Arizona's helmet law applies conditionally. Riders under age 18 are required to wear a DOT-approved helmet at all times. Riders 18 and older are not required by law to wear a helmet in Arizona. However, eye protection is required for ALL riders — if your motorcycle does not have a windshield, you must wear a face shield or goggles. Arizona experiences extreme heat conditions that affect both rider safety and motorcycle performance — heat fatigue, dehydration, and hot pavement temperatures are additional Arizona-specific hazards beyond standard motorcycle safety considerations.",
    "Arizona's hands-free law (SB 1165, effective January 1, 2021) applies to motorcycle operators. Riders may not hold or manually use any electronic device while operating a motorcycle. A Bluetooth headset in your helmet or a device mounted to the motorcycle and operated hands-free is permitted. Arizona's tiered DUI law — including Extreme DUI at 0.15% BAC and Super Extreme DUI at 0.20% — applies to motorcycle operators at the same thresholds as all other motor vehicle operators. Under-21 riders face Arizona's zero-tolerance standard (0.00% BAC). Arizona's desert heat makes dehydration-related impairment a real risk even without alcohol consumption.",
  ],
  sampleQuestions: [
    { question: "Arizona's motorcycle helmet law requires helmets for:", options: ["ALL riders regardless of age", "Riders under age 21 only", "Riders under age 18 only — adults 18+ may choose not to wear one", "No riders — Arizona has no helmet law"], correctIndex: 2, explanation: "Arizona's helmet law (A.R.S. §28-964) requires helmets for riders under 18. Riders 18 and older are NOT legally required to wear a helmet in Arizona. However, eye protection IS required for all riders regardless of age unless the motorcycle has a windshield. Safety experts strongly recommend helmets for all riders — unhelmeted riders face approximately 3x higher risk of fatal head injury." },
    { question: "What eye protection is required for all Arizona motorcycle riders?", options: ["No eye protection is required in Arizona", "Sunglasses are sufficient if they meet ANSI Z87 standards", "A DOT-approved face shield or goggles — unless the motorcycle has a windshield above eye level", "Eye protection is only required for riders under 18"], correctIndex: 2, explanation: "Arizona requires ALL motorcycle riders (regardless of age or helmet choice) to wear a face shield, goggles, or other approved eye protection — unless the motorcycle is equipped with a windshield that extends above the rider's eye level. Ordinary sunglasses do not meet the eye protection requirement. Wind, insects, and debris at speed can impair vision and cause crashes without proper eye protection." },
    { question: "Arizona's extreme heat creates which unique motorcycle safety hazard?", options: ["Cold engine startup issues at high elevations", "Increased tire pressure that can cause blowouts on hot asphalt", "Heat fatigue, dehydration, and reduced mental alertness that impairs riding ability", "Ice patches on mountain roads only above 6,000 feet"], correctIndex: 2, explanation: "Arizona's extreme summer heat — regularly exceeding 110°F in the Phoenix and Tucson areas — creates unique hazards for motorcyclists: (1) heat fatigue and dehydration reduce concentration and reaction time; (2) hot pavement (up to 160°F in summer) can soften asphalt, affecting traction in curves; (3) heat shimmer reduces visibility at distance; (4) thermal updrafts near highways can affect motorcycle stability. Riders should plan early morning rides, stay hydrated, and wear heat-appropriate protective gear." },
    { question: "When riding through an Arizona desert wash crossing (low-water crossing), a motorcyclist should:", options: ["Accelerate to high speed to avoid getting stuck in sand or mud", "Evaluate the depth and surface before crossing — dismount and walk if uncertain", "Cross on the downhill path to maximize speed through the water", "Ride through the center of the wash where water flow is fastest"], correctIndex: 1, explanation: "Arizona's desert roads frequently cross dry washes that can flood suddenly in monsoon season — a phenomenon called a 'flash flood.' Never ride into flowing water of unknown depth. For sandy or muddy dry washes, slow significantly, stand on the pegs to lower your center of gravity, and ride straight through without turning. If you cannot see the bottom or assess the surface, dismount and walk the bike through or find an alternate route. 'Turn around, don't drown' is official AZ state guidance." },
    { question: "Arizona's Extreme DUI charge applies to motorcycle operators at a BAC of:", options: ["0.08% — same as standard DUI", "0.10% — a higher threshold for motorcycles", "0.15% — same as for all motor vehicle operators in Arizona", "No DUI law applies to motorcycle operators in Arizona"], correctIndex: 2, explanation: "Arizona's Extreme DUI charge applies to motorcycle operators at the same 0.15% BAC threshold as all other motor vehicle operators. Standard DUI: 0.08%. Extreme DUI: 0.15%. Super Extreme DUI: 0.20%. Under-21 riders: 0.00% (zero tolerance). Alcohol impairs the balance and coordination needed to safely operate a motorcycle — an impaired motorcyclist faces dramatically higher crash and fatality risk than an impaired car driver." },
    { question: "The correct way to navigate a curve on an Arizona desert highway is to:", options: ["Enter the curve at the highest safe speed and maintain that speed throughout", "Slow before the curve, maintain steady throttle through, and accelerate gently after the apex", "Brake hard after entering the curve to control speed", "Enter wide, cut to the inside, and exit wide — the racing line"], correctIndex: 1, explanation: "The correct curve technique (from Arizona's motorcycle safety curriculum) is: SLOW — reduce speed before entering the curve, not during it; LOOK — look through the curve to where you want to go, not at where you are; LEAN — lean the motorcycle into the curve; ROLL — roll on the throttle smoothly through the apex and exit. Braking in a curve reduces traction available for turning and can cause a slide. Enter at the outside, track to the inside apex, exit to the outside." },
    { question: "When a motorcycle tire blows out at highway speed in Arizona, the rider should:", options: ["Apply both brakes hard immediately to stop as fast as possible", "Hold the handlebars firmly, gradually reduce speed using the good tire's brake, and safely pull off", "Swerve toward the shoulder immediately to exit the roadway as fast as possible", "Accelerate slightly to stabilize the motorcycle before braking"], correctIndex: 1, explanation: "In a tire blowout, do NOT brake hard immediately — this can cause the damaged tire to fold and throw the bike. Instead: (1) grip the handlebars firmly to maintain control; (2) gradually ease off the throttle; (3) if the rear tire blew, you may use the rear brake gently; (4) if the front tire blew, rely on the rear brake only; (5) gradually and safely steer toward the shoulder. Come to a controlled stop before dismounting." },
    { question: "An Arizona motorcyclist's best strategy for dealing with a vehicle that doesn't yield at an intersection is:", options: ["Flash headlights and honk aggressively to assert right of way", "Accelerate through the intersection to get past before they enter", "Cover the brake, be prepared to stop or swerve, and never assume you've been seen", "Stay in your lane — other vehicles must yield to you by law"], correctIndex: 2, explanation: "Motorcycles are frequently overlooked by drivers at intersections — 'SMIDSY' (Sorry, Mate, I Didn't See You) is the most common driver response after intersection crashes. Your legal right of way is meaningless if you're injured. Always approach intersections with your hand covering the brake, assume you might not have been seen, scan for crossing traffic, and be prepared to stop or evasively swerve if a vehicle moves into your path." },
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
    { question: "How do I get an Arizona motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (80%) at an MVD office or Authorized Third Party (ATP) location to receive a motorcycle instruction permit. Then either pass the road skills test at an approved testing site, or complete an approved motorcycle safety training course to waive the skills test. Present your course completion certificate at an MVD or ATP to receive the Class M endorsement." },
    { question: "Is a motorcycle helmet required in Arizona?", answer: "Arizona requires helmets only for riders under 18. Riders 18 and older are not legally required to wear a helmet. However, ALL riders must wear a face shield or goggles for eye protection (unless the motorcycle has a windshield). Safety experts strongly recommend helmets for all riders — unhelmeted riders face significantly higher fatality risk in a crash." },
    { question: "What unique hazards do Arizona motorcycle riders face?", answer: "Arizona-specific motorcycle hazards include: extreme heat (110°F+) causing dehydration and heat fatigue; hot asphalt softening in curves (especially late afternoon); flash flooding at desert wash crossings during monsoon season; sand and gravel on roadways after monsoon storms; reduced visibility from dust storms (haboobs); and tire pressure changes in extreme temperature swings." },
    { question: "Does Arizona require eye protection for all motorcycle riders?", answer: "Yes. Arizona law requires ALL motorcycle riders — regardless of age or helmet choice — to wear a face shield, goggles, or have a motorcycle with a windshield that extends above eye level. Ordinary sunglasses do not meet the legal requirement. Eye protection prevents wind, insects, and debris from impairing vision at highway speed." },
    { question: "What is Arizona's MVD ATP program for motorcycle testing?", answer: "Arizona's Authorized Third Party (ATP) program allows private businesses to conduct MVD-authorized transactions including motorcycle knowledge tests and skills tests. ATP sites are often located at dealerships, driving schools, or community colleges — typically offering faster appointments than MVD offices. Use the MVD locator at servicearizona.com to find an ATP that conducts motorcycle testing." },
    {
      question: "What documents do I need to bring to the Arizona DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Arizona, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Arizona DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Arizona motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Arizona, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Arizona DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Arizona, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Arizona, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Arizona?",
      answer:
        "In Arizona, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Arizona DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Arizona?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Arizona DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "AZ Driver's License", href: "/arizona-dmv-practice-test" },
    { label: "AZ CDL Test", href: "/arizona-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function ArizonaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
