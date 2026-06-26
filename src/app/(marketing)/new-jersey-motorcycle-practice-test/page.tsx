import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New Jersey Motorcycle Practice Test 2025 – Free NJ MVC Endorsement Exam Prep",
  description:
    "Free New Jersey motorcycle practice test based on the 2025 New Jersey Motorcycle Manual. 25 questions, 80% passing score. Prepare for your NJ Motor Vehicle Commission motorcycle endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/new-jersey-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/new-jersey-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New Jersey",
  stateAbbr: "NJ",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "new-jersey-motorcycle-practice-test",
  headline: "New Jersey Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your New Jersey motorcycle endorsement knowledge test with free practice questions based on the official New Jersey Motorcycle Manual. The New Jersey Motor Vehicle Commission (MVC) requires all motorcycle riders to hold a motorcycle endorsement. Pass the MVC knowledge test, then complete the road skills test — or waive the skills test by completing an approved NJ Safety Council Motorcycle Safety Program (MSP) course.",
  basedOn: "2025 New Jersey Motorcycle Manual",
  about: [
    "The New Jersey Motor Vehicle Commission (MVC) requires all motorcycle operators to hold a motorcycle endorsement on their New Jersey driver's license. To earn the endorsement, applicants must first hold a valid NJ driver's license, then pass a 25-question motorcycle knowledge test at a regional MVC service center with at least 80% (20/25 correct). After passing the knowledge test, applicants receive a motorcycle permit and must pass a road skills test at an MVC-approved location — or waive the skills test by completing a New Jersey Safety Council Motorcycle Safety Program (MSP) course or approved MSF BRC. Course completion documents are submitted to the MVC for the endorsement.",
    "New Jersey has a universal motorcycle helmet law: ALL riders and passengers must wear a DOT-approved protective helmet at all times on New Jersey roads. There are no exceptions for age or experience. NJ also requires eye protection for all riders — either a face shield integrated into the helmet, separate goggles, or a motorcycle windshield. New Jersey's MVC strongly recommends full-face helmets that provide both head and eye protection. New Jersey's helmet requirement is strictly enforced throughout the state.",
    "New Jersey's prohibition on handheld wireless devices applies to motorcycle operators. Riders may not hold or manually use a wireless device while operating a motorcycle — this has been NJ law since 2008, predating most other states' hands-free requirements. A helmet-mounted Bluetooth intercom or hands-free earpiece is permitted. New Jersey's strict under-21 DUI threshold (0.01% BAC) applies to motorcycle operators under 21 — one of the lowest thresholds in the country. NJ's dense highway system, frequent heavy traffic, and jug handle turn requirements also present unique challenges for motorcycle riders.",
  ],
  sampleQuestions: [
    { question: "New Jersey requires motorcycle helmets for:", options: ["Riders under 21 only", "Riders in their first year of riding only", "ALL riders and passengers — no exceptions in New Jersey", "Only riders on state highways and the NJ Turnpike"], correctIndex: 2, explanation: "New Jersey has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved protective helmet. There are no exceptions for age or experience level. Eye protection is also required. NJ's universal helmet law is consistently enforced — violations result in fines. New Jersey's law reflects the significant crash fatality reduction achieved by helmet use." },
    { question: "How should a New Jersey motorcycle rider approach a jug handle turn?", options: ["Turn left from the center of the main road as in other states", "Move to the far right lane before the intersection, take the jug handle ramp right, then proceed across the main road at the signal", "Wait in the left-turn pocket lane until oncoming traffic clears", "Use the center median U-turn opening available at every NJ intersection"], correctIndex: 1, explanation: "New Jersey's jug handle turns require motorcyclists to approach the turn exactly as car drivers do: move to the right lane well before the intersection (watch for the 'Jug Handle' sign), exit right via the jug handle ramp, then wait at the signal to cross the main road. Attempting a left turn directly from the main road where a jug handle is required is illegal. On a motorcycle, staying in the right portion of the jug handle lane helps maintain visibility to following traffic." },
    { question: "New Jersey's under-21 DUI threshold for motorcycle operators is:", options: ["0.08% — same as adults", "0.04%", "0.02%", "0.01% — one of the strictest in the nation"], correctIndex: 3, explanation: "New Jersey's under-21 DUI threshold is 0.01% BAC — one of the lowest in the country. This applies to motorcycle operators under 21 exactly as it applies to all motor vehicle operators. A first under-21 DUI results in a 30–90 day license suspension, mandatory IDRC evaluation, and community service. For motorcycle operators, the suspension also covers the motorcycle endorsement." },
    { question: "NJ's handheld wireless device ban applies to motorcycle operators:", options: ["No — motorcycles have handlebars and no device holder, so the law doesn't apply", "Yes — motorcycle operators cannot hold or use any wireless device while riding", "Only if the motorcycle has a passenger", "Only on state highways — local roads are exempt"], correctIndex: 1, explanation: "New Jersey's handheld device ban (in effect since 2008) applies to ALL drivers and motor vehicle operators on NJ roads — including motorcyclists. Holding or using a wireless device while riding a motorcycle is a violation. Fines: first offense $200–$400; third offense $600–$800 plus 90-day suspension. A Bluetooth headset or intercom is permitted." },
    { question: "When riding in NJ's heavy highway traffic, what is the best lane position strategy?", options: ["Ride as far right as possible to maximize your escape route to the shoulder", "Ride in the center or left portion of the lane for maximum forward and rearward visibility", "Stay directly behind the nearest large vehicle for protection", "Lane split between cars when traffic is stopped — it's permitted in NJ"], correctIndex: 1, explanation: "In heavy New Jersey highway traffic, riding in the center or left portion of the lane improves your visibility: you can see over and around vehicles ahead, and you're more visible in other drivers' mirrors. Avoid the far right where road debris and oil drips are most concentrated. Lane splitting (riding between lanes of stopped or slow traffic) is NOT legal in New Jersey — stay within your lane at all times." },
    { question: "What is the correct response when a NJ motorcycle rider's front tire blows out?", options: ["Apply the front brake hard to slow down immediately", "Grip the handlebars firmly, ease off the throttle, apply rear brake only, and steer to safety", "Pull in the clutch and coast to a stop", "Swerve sharply toward the shoulder immediately"], correctIndex: 1, explanation: "In a front tire blowout: grip the handlebars firmly to resist the pull toward the damaged side; ease off the throttle — do not apply the front brake (which can cause the deflated tire to fold under the rim and throw the bike); use the rear brake gently to slow down; steer toward a safe stopping area. A blown front tire is extremely dangerous on a motorcycle — maintain control until you can come to a gradual, controlled stop." },
    { question: "The best way for a NJ motorcyclist to be seen in heavy traffic is:", options: ["Ride as fast as possible to spend less time in dense traffic", "Use headlight modulator, bright clothing, strategic lane position, and avoid driver blind spots", "Use the horn constantly to alert drivers", "Tailgate the vehicle ahead to stay close to an escape vehicle"], correctIndex: 1, explanation: "Increasing conspicuity (being seen) is one of the most effective crash prevention strategies for NJ motorcyclists. Use a headlight modulator (legal in NJ), wear bright or high-visibility clothing, ride in a lane position that keeps you visible in drivers' mirrors, and actively avoid blind spots. NJ's dense traffic means more potential conflict points — being proactive about being seen significantly reduces crash risk." },
    { question: "When should a NJ motorcycle rider downshift before a turn?", options: ["Never — coast in neutral through all turns", "Always — downshift to first gear before every turn", "Before entering the turn to have the appropriate gear for acceleration out of the corner", "Only when turning right — left turns don't require downshifting"], correctIndex: 2, explanation: "Downshifting before entering a turn — not during the turn — is the correct technique. Shifting while leaning can disrupt traction and upset the motorcycle's balance. Select the appropriate gear for the turn speed before entering, then execute the turn smoothly. As you exit the turn and straighten up, roll on the throttle progressively. Engine braking from downshifting helps slow the motorcycle before the turn without relying solely on the brakes." },
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
    { question: "How do I get a New Jersey motorcycle endorsement?", answer: "Pass the 25-question motorcycle knowledge test (80%) at a NJ MVC regional service center to receive a motorcycle permit. Then either pass the road skills test at an MVC-approved location, or complete an NJ Safety Council Motorcycle Safety Program (MSP) course or approved MSF BRC to waive the skills test. Present your course completion certificate at the MVC to receive the endorsement on your license." },
    { question: "Does New Jersey require helmets for all motorcycle riders?", answer: "Yes. New Jersey has a universal helmet law requiring ALL motorcycle operators and passengers to wear a DOT-approved protective helmet — no exceptions for age or experience. Eye protection (face shield, goggles, or windshield) is also required. Violations result in fines. NJ is one of the stricter helmet-law states in the country." },
    { question: "Is lane splitting legal for motorcycles in New Jersey?", answer: "No. Lane splitting — riding between lanes of moving or stopped traffic — is NOT legal in New Jersey. All motorcycle riders must stay within their own lane at all times, just like car drivers. Lane filtering and lane sharing with another motorcycle in the same lane are also not permitted in NJ without the other rider's explicit agreement in certain limited circumstances." },
    { question: "How do jug handle turns affect motorcycle riders in NJ?", answer: "New Jersey's jug handle turns apply to motorcyclists just as to car drivers. When a jug handle is required to make a left turn, you must move to the right lane before the intersection and take the jug handle ramp. On a motorcycle, watch for the turn signs early, signal right, move to the right lane, and exit via the jug handle. Approaching a jug handle in the wrong lane or at high speed can be dangerous on two wheels." },
    { question: "What MSF or NJ safety course waives the motorcycle skills test?", answer: "New Jersey accepts the NJ Safety Council Motorcycle Safety Program (MSP) and the MSF Basic RiderCourse (BRC) as alternatives to the MVC road skills test. Course completion documents are submitted to the MVC to receive the endorsement without a separate skills test. Many insurance companies also offer premium discounts for riders who complete an approved safety course." },
    {
      question: "What documents do I need to bring to the New Jersey DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in New Jersey, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the New Jersey DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the New Jersey motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in New Jersey, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the New Jersey DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in New Jersey, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including New Jersey, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in New Jersey?",
      answer:
        "In New Jersey, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the New Jersey DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in New Jersey?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. New Jersey DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "NJ Driver's License", href: "/new-jersey-dmv-practice-test" },
    { label: "NJ CDL Test", href: "/new-jersey-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function NewJerseyMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
