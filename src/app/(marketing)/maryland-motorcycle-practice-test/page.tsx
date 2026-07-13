import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Maryland Motorcycle Practice Test 2025 – Free MD MVA Endorsement Exam Prep",
  description:
    "Free Maryland motorcycle practice test based on the official Maryland Motorcycle Operator's Manual. 25 questions, 88% (22/25) passing score. Prepare for your MD Motor Vehicle Administration motorcycle endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/maryland-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/maryland-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Maryland",
  stateAbbr: "MD",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "maryland-motorcycle-practice-test",
  headline: "Maryland Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Maryland motorcycle endorsement knowledge test with free practice questions based on the official Maryland Motorcycle Operator's Manual. The Maryland Motor Vehicle Administration (MVA) requires all motorcycle riders to hold a motorcycle endorsement on their driver's license. Pass the MVA knowledge test, then complete the road skills test — or waive BOTH tests by completing an approved Basic Rider Course (BRC/ABRC).",
  basedOn: "Maryland Motorcycle Operator's Manual (DL-001)",
  about: [
    "The Maryland Motor Vehicle Administration (MVA) requires all motorcycle operators to hold a motorcycle endorsement on their standard Maryland driver's license. To earn the endorsement, applicants must pass a 25-question motorcycle knowledge test with at least 88% (22/25 correct) — the identical passing standard as the car knowledge test. After passing, applicants receive a motorcycle permit and must pass an MVA road skills test — or skip both tests entirely by completing an approved Basic Rider Course (BRC) or Alternate Basic Rider Course (ABRC), which are administered by the Maryland Motorcycle Safety Program at training centers statewide and required for all applicants under 18. Adults may also test directly via the MVA's FAST TRACK program, which allows the knowledge and riding tests to be taken the same day.",
    "Maryland has a universal motorcycle helmet law: ALL motorcycle riders and passengers in Maryland must wear a DOT-approved protective helmet at all times. There are no exceptions for age or experience. Eye protection is also required — a face shield, goggles, or a windshield that extends above eye level. Maryland MVA's motorcycle safety materials emphasize that helmets reduce fatal head injuries by approximately 37% and are the single most effective protective measure for motorcycle riders.",
    "Maryland's handheld device ban applies to motorcycle operators. Riders may not hold any electronic device while operating a motorcycle. Maryland's two-tier DUI/DWI system applies equally to motorcycle operators: DUI at 0.08% BAC, DWI at 0.07% BAC (a lesser criminal charge unique to Maryland). Under-21 motorcycle riders face the 0.02% threshold. Maryland's proximity to Washington D.C. and its Chesapeake Bay bridges present unique challenges for riders — the Bay Bridge (US 50) has a weather-call service for motorcyclists due to high crosswinds.",
  ],
  sampleQuestions: [
    { question: "Maryland requires motorcycle helmets for:", options: ["Only riders under 21", "Only riders in their first year of endorsement", "ALL riders and passengers — no exceptions in Maryland", "Only riders on roads with speed limits over 35 mph"], correctIndex: 2, explanation: "Maryland's universal helmet law (Transportation Article §21-1306) requires ALL motorcycle operators and passengers to wear a DOT-approved helmet at all times — no age or experience exceptions. Eye protection is also required. Maryland's MVA notes that helmets reduce the risk of fatal head injury by approximately 37%. Riding without a helmet in Maryland is a traffic violation with fines." },
    { question: "Maryland has a unique DWI law that applies to motorcycle operators at:", options: ["0.08% — same as DUI, no separate DWI", "0.07% BAC — a lesser criminal charge (below the DUI threshold)", "0.04% — the commercial vehicle standard", "0.15% — only for extreme impairment cases"], correctIndex: 1, explanation: "Maryland's two-tier impaired driving law applies to motorcycle operators: DUI (Driving Under the Influence) at 0.08%+, and DWI (Driving While Impaired) at 0.07% — a lesser criminal charge for BAC one percentage point below the DUI threshold. A DWI on a motorcycle conviction in Maryland adds 6 points to the driver's record and carries criminal penalties. Under-21 riders face the 0.02% threshold." },
    { question: "Maryland's Chesapeake Bay Bridge presents what specific hazard for motorcycle riders?", options: ["Icy road surface year-round due to marine air", "Strong crosswinds that can affect motorcycle stability — a weather-call service is available for riders", "Speed limits of 10 mph only for motorcycles on the bridge", "Motorcycles are prohibited from crossing the Bay Bridge at any time"], correctIndex: 1, explanation: "The Chesapeake Bay Bridge (US 50) is known for strong and variable crosswinds that can significantly affect motorcycle stability. Maryland's Maryland Transportation Authority (MDTA) operates a weather-call service for motorcyclists who need assistance crossing when conditions are severe — call MDTA Police to request a ride with an escort vehicle. Additionally, the bridge's metal grating surface can be slippery in wet conditions. Crosswinds require riders to actively lean into the wind to maintain a straight path." },
    { question: "Completing an approved Basic Rider Course (BRC) provides what benefit for a Maryland motorcycle endorsement applicant?", options: ["It waives the MVA knowledge test — graduates still need the road skills test", "It waives the road skills test — graduates still need to pass the knowledge test", "It waives BOTH the knowledge test and the road skills test", "It provides a provisional motorcycle permit for 6 months with no other tests required"], correctIndex: 2, explanation: "Successfully completing an approved Basic Rider Course (BRC) or Alternate Basic Rider Course (ABRC) earns a Completion Certificate that can be presented directly to the MVA for a Class M license — waiving BOTH the knowledge test and the road skills test. Riders under 18 are required to complete BRC/ABRC; adults may take this route or test directly through the MVA (including the same-day FAST TRACK program)." },
    { question: "When riding on the inner loop of a Maryland highway near Washington D.C., what is the most important safety consideration?", options: ["Speed — maintain 70 mph to keep up with traffic", "Density of traffic and proximity to other vehicles — increase following distance and heighten awareness of lane changes", "The HOV lane — all motorcycles must use HOV lanes in Maryland", "Gas mileage — plan fuel stops more frequently in urban Maryland"], correctIndex: 1, explanation: "Maryland's highway corridors near Washington D.C. (I-495 Beltway, I-270, I-95) have some of the highest traffic densities in the nation. For motorcyclists: increase following distance to at least 4 seconds; watch aggressively for lane-changers who may not see your motorcycle; position yourself where you're most visible in other drivers' mirrors; be especially cautious in the right lane where vehicles merge. Traffic density is a top safety consideration on Maryland's major highways." },
    { question: "Eye protection required for Maryland motorcycle riders must be:", options: ["Any commercial sunglasses", "A DOT-approved face shield, goggles, or a windshield extending above eye level", "Only required if the rider does not wear a full-face helmet", "Not required in Maryland — helmet is the only requirement"], correctIndex: 1, explanation: "Maryland requires ALL motorcycle riders to wear a face shield, goggles, or have a windshield that extends above the rider's eye level for eye protection — in addition to the required DOT helmet. Ordinary sunglasses do not meet the legal standard. A full-face DOT helmet with an integrated face shield satisfies both the helmet and eye protection requirements simultaneously." },
    { question: "When encountering road debris on a Maryland highway, a motorcyclist should:", options: ["Brake hard and stop in the lane until the debris is cleared", "Swerve sharply to avoid the debris", "Assess the debris well ahead, adjust speed and lane position to avoid it, and if unavoidable, slow to minimum safe speed and cross with a stable posture", "Accelerate to pass over debris before it can react"], correctIndex: 2, explanation: "Road debris is a significant hazard for motorcyclists — even small objects can cause loss of control. The MSF technique for debris: look well ahead to identify hazards early; adjust lane position to go around debris if possible; if debris is unavoidable, slow down, grip handlebars firmly, rise slightly off the seat to use your legs as shock absorbers, and cross in a straight line with a stable posture. Never swerve abruptly — the swerve itself can cause a crash." },
    { question: "What is the most critical factor in preventing crashes for Maryland motorcycle riders?", options: ["Riding the fastest possible motorcycle so you can escape dangerous situations", "Developing hazard perception skills — seeing potential threats before they become emergencies", "Wearing a helmet — helmets prevent nearly all motorcycle crashes", "Never riding faster than 45 mph regardless of highway conditions"], correctIndex: 1, explanation: "The most effective crash prevention skill for motorcyclists is hazard perception — the ability to scan the road ahead, identify potential threats early, and respond before they become emergencies. Maryland motorcycle safety instruction emphasizes the SIPDE process: Scan, Identify, Predict, Decide, Execute. Seeing a threat 3–5 seconds before a car driver does gives you time to avoid or mitigate it rather than react at the last second." },
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
    { question: "How do I get a Maryland motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (88% = 22/25) at an MD MVA location to receive a motorcycle permit. Then either pass the road skills test at an MVA location, or complete an approved Basic Rider Course (BRC/ABRC) to waive BOTH the knowledge and skills tests. Present your BRC/ABRC completion certificate at the MVA to receive the motorcycle endorsement." },
    { question: "Does Maryland require helmets for all motorcycle riders?", answer: "Yes. Maryland has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved helmet — no exceptions. Eye protection (face shield, goggles, or windshield) is also required. Violations result in fines. Maryland's universal helmet law is strictly enforced throughout the state." },
    { question: "What is Maryland's two-tier motorcycle DUI/DWI system?", answer: "Maryland's impaired driving law applies to motorcycle operators: DUI (Driving Under the Influence) at 0.08%+ BAC; DWI (Driving While Impaired) at 0.07% BAC. Both are criminal offenses. DUI adds 12 points; DWI adds 6 points to the driver's record. Under-21 riders face a 0.02% threshold. A conviction for either offense results in license suspension that covers the motorcycle endorsement." },
    { question: "Is the Chesapeake Bay Bridge safe for motorcycles?", answer: "The Bay Bridge (US 50) is open to motorcycles but presents strong crosswind hazards. MDTA Police offers a weather-call service for riders who need assistance crossing in severe winds. The bridge also has metal grating sections that become slippery in wet conditions — reduce speed and make smooth, gradual steering inputs. Visit mdta.maryland.gov for current bridge conditions." },
    { question: "What is the Basic Rider Course in Maryland?", answer: "The Basic Rider Course (BRC) and Alternate Basic Rider Course (ABRC) are training courses administered by the Maryland Motorcycle Safety Program at training centers statewide, including both classroom instruction and hands-on riding exercises. Successful completion earns a Completion Certificate that waives BOTH the MVA knowledge test and the road skills test for a Class M license. Riders under 18 are required to complete BRC or ABRC." },
    {
      question: "What documents do I need to bring to the Maryland DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Maryland, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Maryland DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Maryland motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Maryland, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Maryland DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Maryland, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Maryland, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Maryland?",
      answer:
        "In Maryland, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Maryland DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Maryland?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Maryland DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "MD Driver's License", href: "/maryland-dmv-practice-test" },
    { label: "MD CDL Test", href: "/maryland-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MarylandMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
