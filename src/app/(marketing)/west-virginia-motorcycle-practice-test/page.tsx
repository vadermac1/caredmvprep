import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "West Virginia Motorcycle Practice Test 2025 – Free WV Endorsement Exam Prep",
  description:
    "Prepare for your West Virginia motorcycle endorsement test with free practice questions covering universal helmet law, coal debris road hazards, New River Gorge Bridge crosswind technique, mountain grade riding, and WV DUI rules for riders.",
  alternates: { canonical: "https://caredmvprep.com/west-virginia-motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/west-virginia-motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "West Virginia",
  stateAbbr: "WV",
  testLabel: "Motorcycle Practice Test",
  slug: "west-virginia-motorcycle-practice-test",
  headline: "West Virginia Motorcycle Practice Test 2025",
  intro:
    "Earning a West Virginia motorcycle endorsement requires passing a 25-question knowledge test (20 correct, 80%) at the WV Division of Motor Vehicles and a skills test. This free practice test covers West Virginia-specific motorcycle topics: the universal helmet requirement under WV Code § 17C-15-46 (all ages), eye protection requirements (contact lenses alone do NOT qualify), lane splitting (illegal in WV), coal debris traction hazards on coalfield roads, New River Gorge Bridge crosswind technique, mountain grade riding, and DUI laws for motorcycle operators.",
  basedOn: "West Virginia Motorcycle Operator Manual (WV Division of Motor Vehicles)",
  about: [
    "The West Virginia Division of Motor Vehicles requires all motorcycle operators to hold a valid motorcycle endorsement on their driver's license. To earn the endorsement, applicants must pass a 25-question knowledge test (20 correct = 80%) based on the West Virginia Motorcycle Operator Manual and complete a skills test — or complete an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse to waive the skills test only (the knowledge test is always required). West Virginia Code § 17C-15-46 requires ALL motorcycle operators and passengers to wear a DOT-approved helmet, regardless of age — there is no adult exemption. Eye protection (glasses, goggles, or face shield) is required for all riders unless the motorcycle has a windshield; contact lenses alone do NOT satisfy the eye protection requirement. Lane splitting is NOT permitted in West Virginia.",
    "West Virginia is one of the most challenging — and most rewarding — states for motorcycle riding in the eastern United States. The state's mountain terrain produces spectacular riding on US-60 (the Midland Trail), US-33, US-250, and other mountain routes. However, West Virginia's 90% mountain terrain means virtually every road involves significant grades and curves. Riders must master low-gear descent technique to avoid brake fade on long steep grades. Coalfield county roads in Logan, Boone, Mingo, McDowell, and Wyoming counties present a unique traction hazard: loose coal debris deposited by coal trucks creates slippery surfaces, especially when wet. The New River Gorge Bridge (US-19) exposes riders to significant crosswinds at 876 feet above the New River.",
  ],
  sampleQuestions: [
    {
      question:
        "West Virginia Code § 17C-15-46 requires motorcycle helmets for which riders?",
      options: [
        "Riders under 18 only",
        "Riders under 21 only",
        "All motorcycle operators and passengers regardless of age",
        "Only operators, not passengers",
      ],
      correctIndex: 2,
      explanation:
        "West Virginia Code § 17C-15-46 requires ALL motorcycle operators and passengers to wear a DOT-approved helmet — there is no age-based exemption. West Virginia has a universal helmet law. Eye protection (goggles or face shield) is also required for all riders unless the motorcycle has a windshield. Helmet law violations are primary offenses in West Virginia. DOT-approved helmets must meet specific safety standards for impact resistance.",
    },
    {
      question:
        "You are riding a motorcycle on a coalfield road in Mingo County, West Virginia, and notice black debris on the road surface that appears to have fallen from coal trucks. How should you respond?",
      options: [
        "The debris is soft coal that provides extra traction — maintain your normal speed",
        "Reduce speed significantly and increase following distance — loose coal debris on the road reduces traction, especially in curves and when wet",
        "Ride in the left wheel track where coal debris is least concentrated",
        "Increase speed to minimize the time your tire spends on the debris",
      ],
      correctIndex: 1,
      explanation:
        "Loose coal debris deposited on road surfaces by coal trucks in WV's coalfield counties creates a significant traction reduction — similar to riding on loose gravel. In wet conditions, coal-slicked roads are particularly dangerous for motorcycles. The debris tends to accumulate at curves (where centrifugal force pushes coal off trucks) and at the bottom of grades. Motorcycle riders on coalfield county roads in Logan, Boone, Mingo, McDowell, and Wyoming counties must reduce speed, increase following distance, and be especially cautious in curves where both traction demand and coal debris accumulation are highest.",
    },
    {
      question:
        "You are riding your motorcycle across the New River Gorge Bridge (US-19) when you feel strong crosswind gusts pushing you toward the left lane line. What is the proper technique?",
      options: [
        "Grip the handlebars tightly and steer sharply to maintain lane position",
        "Increase speed to generate more gyroscopic stability from the wheels",
        "Maintain a firm but relaxed grip, lean slightly into the wind, and make smooth gradual throttle adjustments to stabilize your position",
        "Stop on the bridge shoulder and wait for wind conditions to improve",
      ],
      correctIndex: 2,
      explanation:
        "The New River Gorge Bridge at 876 feet above the gorge is exposed to significant crosswinds funneled through the gorge. For motorcycle riders, crosswind management requires a firm but relaxed grip on the handlebars (too tight reduces feel and response), a slight lean into the prevailing wind direction, and smooth throttle inputs without sudden changes. Gripping tightly and steering aggressively can cause overcorrection. Stopping on a bridge with traffic is dangerous — assess wind conditions before the bridge and time your crossing if winds are severe.",
    },
    {
      question:
        "West Virginia's mountain grades require specific motorcycle riding technique on descents. Which approach is correct for riding down a long 8% grade on US-119?",
      options: [
        "Apply the front and rear brakes continuously and steadily to maintain a constant speed throughout the descent",
        "Downshift to a lower gear before beginning the descent, use engine braking as the primary speed control, and apply brakes periodically in intervals",
        "Pull in the clutch and coast down in neutral, using brakes as needed",
        "Maintain highway speed at the top and brake heavily only if speed becomes excessive",
      ],
      correctIndex: 1,
      explanation:
        "West Virginia's mountain grades — some of the steepest on US highways in the eastern US — require proper brake management technique. Continuous brake application on a long descent heats brakes and causes fade, reducing or eliminating stopping ability. The correct technique is to downshift to a lower gear before the descent begins and use engine braking as the primary speed control. Apply brakes in intervals to supplement engine braking, which allows them to cool between applications. Coasting in neutral removes engine braking entirely and allows speed to build dangerously.",
    },
    {
      question:
        "A motorcycle rider in West Virginia is stopped and registers a BAC of 0.08%. What offense has occurred under West Virginia law?",
      options: [
        "No offense — 0.08% is the legal limit and riding is permitted at that level",
        "A DUI charge — 0.08% is the threshold at which DUI charges apply",
        "A lesser 'reckless riding' charge only for motorcycle operators",
        "An administrative warning — first offense at exactly 0.08% receives only a warning",
      ],
      correctIndex: 1,
      explanation:
        "West Virginia's DUI threshold is 0.08% — at exactly 0.08% or higher, a DUI charge applies. There is no grace allowance or legal riding at the precise threshold. A motorcycle rider at 0.08% BAC has committed a DUI offense in West Virginia. DUI penalties include mandatory license revocation (which covers the motorcycle endorsement), fines, mandatory DUI Safety and Treatment Program, and possible jail time. For a motorcycle rider, DUI carries additional risk because the physical and balance impairments associated with 0.08% BAC are especially dangerous on a motorcycle.",
    },
    {
      question:
        "Spring riding in West Virginia presents a specific hazard due to frost heaves. What should a motorcycle rider do when they see a frost heave warning sign on a mountain road?",
      options: [
        "Speed up slightly so the bike's momentum carries it smoothly over the heave",
        "Reduce speed significantly before reaching the frost heave — hitting one at speed can cause loss of control or serious vehicle damage",
        "Move to the road shoulder to avoid the heave in the main traffic lane",
        "Apply full braking just before the heave to reduce impact",
      ],
      correctIndex: 1,
      explanation:
        "Frost heaves — uplifted sections of pavement created by subsurface ice — can be several inches high on West Virginia mountain roads in spring. For a motorcycle, hitting a frost heave at speed can cause the front wheel to become airborne, a violent suspension impact, or loss of control. The correct approach is to reduce speed significantly before reaching the heave, keeping weight neutral on the bike (not braking hard just before impact), and crossing the heave at reduced speed with a relaxed grip to let the suspension absorb the impact. Spring mountain riding in WV requires constant attention for frost heave warning signs.",
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
      question: "Does West Virginia require motorcycle helmets for all riders?",
      answer:
        "Yes. West Virginia Code § 17C-15-46 requires ALL motorcycle operators and passengers to wear a DOT-approved helmet, regardless of age. There is no adult exemption in West Virginia — universal helmet law applies to all riders at all times. Eye protection (goggles or face shield) is also required for all riders unless the motorcycle is equipped with a windshield. Helmet violations are primary offenses. This law reflects West Virginia's recognition that mountain riding conditions make helmets a critical safety requirement.",
    },
    {
      question: "What is required to get a motorcycle endorsement in West Virginia?",
      answer:
        "To earn a West Virginia motorcycle endorsement (M), you must hold a valid West Virginia driver's license, pass a 25-question motorcycle knowledge test (20 correct = 80%) at a WV Division of Motor Vehicles office, and pass a motorcycle skills test on a closed course. Completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse waives the skills test only — the knowledge test is always required regardless of course completion. The knowledge test covers the WV Motorcycle Operator Manual, including universal helmet law (§ 17C-15-46), eye protection (contact lenses insufficient), lane splitting (illegal), mountain riding technique, coal debris hazards, and the New River Gorge Bridge.",
    },
    {
      question: "What coal debris hazards do motorcycle riders face in WV's coalfield counties?",
      answer:
        "In Logan, Boone, Mingo, McDowell, and Wyoming counties — West Virginia's coalfield region — coal trucks regularly deposit loose coal debris on road surfaces. This debris acts like loose gravel, significantly reducing traction for motorcycle tires. Wet coal debris is particularly slippery. Debris tends to accumulate at curves (where centrifugal force deposits it from truck loads), at the bottom of grades, and at intersections where trucks brake and turn. Motorcycle riders in coalfield areas should reduce speed below posted limits, scan the road surface ahead for debris, and be especially cautious in curves where traction demand is highest.",
    },
    {
      question: "What mountain riding challenges are specific to West Virginia?",
      answer:
        "West Virginia's mountain terrain — 90% of the state — creates riding challenges that include: long steep grades requiring engine braking technique on descents to prevent brake fade; sharp curves with limited sight distances common on old mountain roads; spring frost heaves that can create dangerous surface upheavals on mountain roads; coal debris on coalfield roads reducing traction; New River Gorge Bridge crosswinds; and spring and fall weather that can change rapidly between warm and cold, creating unexpected icing conditions on shaded mountain road sections.",
    },
    {
      question: "What are the DUI laws and penalties for motorcycle riders in West Virginia?",
      answer:
        "West Virginia's DUI law applies equally to motorcycle riders as to car drivers. The threshold is 0.08% BAC for adults 21+, and 0.02% for riders under 21. A first DUI offense for a motorcycle rider results in a minimum 15-day to 6-month license revocation (which covers the motorcycle endorsement), fines of $100–$500 plus court costs, mandatory DUI Safety and Treatment Program attendance, and possible jail time. Because ignition interlock devices cannot be installed on motorcycles, a DUI conviction may effectively prevent a rider from riding for the duration of the interlock requirement. West Virginia's implied consent law means refusing a chemical test results in automatic license revocation.",
    },
    {
      question: "What documents do I need to bring to the West Virginia DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in West Virginia, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the West Virginia DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the West Virginia motorcycle permit valid, and can I ride alone with it?",
      answer:
        "The West Virginia motorcycle instruction permit is valid for 90 days. Permit holders must wait at least 7 days after receiving the permit before scheduling the skills test. Permit restrictions include: daylight riding only (no night riding), no passengers, and no interstate highway riding. Permit holders under 18 must meet Level 2 GDL requirements before obtaining the full motorcycle endorsement. Check the West Virginia DMV website for any updated permit requirements.",
    },
    {
      question: "Is a motorcycle endorsement required in West Virginia, or is it a separate license?",
      answer:
        "West Virginia adds a Motorcycle (M) endorsement to your existing West Virginia driver's license — it is not a separate license card. To legally ride on public roads you must have the M endorsement on your license. Riding without it is a traffic violation. The endorsement requires passing a 25-question knowledge test and either a skills test or completing an MSF Basic RiderCourse (which waives the skills test only).",
    },
    {
      question: "What types of motorcycles require a motorcycle license in West Virginia?",
      answer:
        "In West Virginia, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the West Virginia DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in West Virginia?",
      answer:
        "Yes — completing a WV-approved Motorcycle Safety Foundation (MSF) Basic RiderCourse waives the DMV road skills test for the motorcycle endorsement. However, the 25-question written knowledge test (80% passing score = 20 correct) must still be passed at the DMV regardless of course completion. The MSF BRC does NOT waive the knowledge test. Course graduates receive a completion card to present at the DMV when applying for the endorsement.",
    },
  ],
  relatedTests: [
    { label: "West Virginia DMV Practice Test", href: "/west-virginia-dmv-practice-test" },
    { label: "West Virginia CDL Practice Test", href: "/west-virginia-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function WestVirginiaMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
