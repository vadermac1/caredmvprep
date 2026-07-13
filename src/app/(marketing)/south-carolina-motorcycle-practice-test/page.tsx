import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "South Carolina Motorcycle Practice Test 2025 – Free SCDMV Class M Endorsement Exam Prep",
  description:
    "Free South Carolina motorcycle endorsement practice test. Helmet required for riders and passengers under 21, Emma's Law IID applies to motorcycle DUI, SC golf cart roads affect lane positioning, SCDMV endorsement process and MSF waiver.",
  alternates: { canonical: "https://caredmvprep.com/south-carolina-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/south-carolina-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "South Carolina",
  stateAbbr: "SC",
  testLabel: "Motorcycle Endorsement Test",
  slug: "south-carolina-motorcycle-practice-test",
  headline: "South Carolina Motorcycle Endorsement Practice Test 2025",
  intro:
    "The South Carolina DMV (SCDMV) issues a Class M motorcycle endorsement after a knowledge test and skills test, requiring an 80% passing score. South Carolina's helmet law applies to riders and passengers under 21 — there is no helmet requirement for operators 21 and older. Emma's Law IID requirements apply to motorcyclists convicted of DUI. Coastal SC roads are shared with golf carts — a unique road-sharing hazard.",
  basedOn: "South Carolina Motorcycle & Moped Operator's Manual (current edition)",
  about: [
    "South Carolina's motorcycle endorsement (Class M) is issued by SCDMV after passing the knowledge test and skills test, or by completing an approved MSF BRC which waives the skills test. South Carolina's helmet law requires operators and passengers under 21 years of age to wear an approved protective helmet with a neck or chin strap, reflectorized on both sides, plus goggles or a face shield for eye protection — riders 21 and older face no state helmet requirement. Emma's Law (2014) applies to motorcycle DUI offenders: a first-offense DUI with BAC 0.15%+ requires an ignition interlock device upon reinstatement. The Hands-Free Act (Act R-134, May 2023) applies to all vehicle operators including motorcyclists.",
    "South Carolina motorcycle riders face a unique road-sharing challenge in coastal communities: golf carts. In areas like Hilton Head Island, Myrtle Beach, Kiawah Island, and Pawleys Island, golf carts are legally permitted on roads posted 35 mph or less and travel significantly slower than motorcycles. Riders must be prepared to encounter golf carts at intersections, on narrow coastal lanes, and crossing between beach access points. Golf carts are low, small, and may not be visible from a motorcycle's headlight at night at the same distance as a car. South Carolina's Blue Ridge Escarpment (SC 11 — Cherokee Foothills Scenic Highway) offers mountain motorcycle routes with tight curves and variable road surfaces.",
  ],
  sampleQuestions: [
    {
      question: "South Carolina's helmet law requires DOT-approved helmets for which motorcycle riders?",
      options: [
        "Riders and passengers under 21 — riders 21 and older face no state helmet requirement",
        "Only permit holders, regardless of age",
        "All riders and passengers of any age — South Carolina has a universal helmet law",
        "Riders under 16 only",
      ],
      correctIndex: 0,
      explanation:
        "South Carolina's Motorcycle & Moped Operator's Manual states the helmet requirement applies to operators and passengers under 21 years of age, who must wear an approved protective helmet with a neck or chin strap, reflectorized on both sides, plus goggles or a face shield for eye protection. Riders 21 and older have no state helmet requirement.",
    },
    {
      question: "A South Carolina motorcyclist encounters a golf cart crossing a coastal road near Hilton Head. What should the rider do?",
      options: [
        "Golf carts must yield to all motor vehicles — continue at current speed",
        "Slow significantly — golf carts are small, slow, and low to the ground; they may be harder to see at distance and may stop, turn, or pull out unexpectedly",
        "Flash headlights to alert the golf cart operator before passing",
        "Golf carts are prohibited on roads used by motorcycles — this situation should not occur on public roads",
      ],
      correctIndex: 1,
      explanation:
        "South Carolina's coastal communities legally allow golf carts on roads posted 35 mph or less. Golf carts are much smaller and slower than motorcycles, may not have full-size lighting visible from a distance, and may operate at only 12–20 mph. When approaching a golf cart, reduce speed significantly, signal your presence early, and give extra space when passing. Golf carts can make unexpected turns into driveways, parking areas, or across the road. At night, golf cart lights are much dimmer than vehicle headlights — keep this in mind on dark coastal roads.",
    },
    {
      question: "Emma's Law (SC 2014) applies to motorcycle operators convicted of DUI. Under what condition does it require an ignition interlock device?",
      options: [
        "Emma's Law applies only to car drivers — motorcycle operators cannot have IIDs installed",
        "Any first-offense motorcycle DUI triggers IID requirement under Emma's Law",
        "First-offense DUI with BAC 0.15% or higher — or any second or subsequent DUI regardless of BAC",
        "Emma's Law only applies to commercial vehicle operators in South Carolina",
      ],
      correctIndex: 2,
      explanation:
        "Emma's Law (SC Code § 56-1-400) requires IID installation for: (1) first-offense DUI with BAC 0.15% or higher; (2) any second or subsequent DUI regardless of BAC. While motorcycles technically cannot have a traditional IID (designed for four-wheeled vehicles) installed, courts impose IID requirements in the context of license reinstatement conditions — which effectively prevent riding until the IID requirement is served or waived by a judge. Motorcycle operators convicted of DUI face the full range of SC DUI consequences including the IID requirement's impact on license reinstatement.",
    },
    {
      question: "South Carolina's Blue Ridge Escarpment (SC 11) is a popular motorcycle route. What specific hazard should riders be aware of?",
      options: [
        "SC 11 has a flat terrain with no curves — the only hazard is high tourist traffic in summer",
        "SC 11 crosses multiple rivers — flooded bridge approaches are common",
        "Tight mountain curves with varying sight distances, changing road surfaces (shade-dried sections vs. sunlit sections), and deer on the roadway",
        "SC 11 is closed to motorcycles during fall foliage season due to narrow lanes",
      ],
      correctIndex: 2,
      explanation:
        "South Carolina's Cherokee Foothills Scenic Highway (SC 11) runs along the Blue Ridge Escarpment in the Upstate region and is a premier motorcycle route. Hazards specific to SC 11 and similar routes: tight curves where exit sight distance is limited (speed must be reduced before curves, not in them); sections of road under heavy tree cover that retain moisture and surface debris longer than sun-exposed sections — creating hidden traction differences; white-tailed deer crossings at dawn and dusk throughout the Blue Ridge; and seasonal road surface changes. October through November offers peak fall color but also maximum deer crash risk.",
    },
    {
      question: "What technique should a South Carolina motorcyclist use when riding over a metal bridge grate surface?",
      options: [
        "Accelerate over bridge grates — speed improves gyroscopic stability",
        "Brake firmly before the grate and stop before crossing to let trucks pass first",
        "Maintain steady throttle and a relaxed grip — avoid sudden steering, braking, or acceleration inputs while on the grate",
        "Lean the motorcycle slightly to the left to counteract the natural pull of metal grates",
      ],
      correctIndex: 2,
      explanation:
        "Metal bridge grate surfaces present reduced traction — especially when wet — and can cause vibration that unsettles motorcycle handling. The correct technique: approach at reduced speed (before the grate, not on it); maintain steady throttle; grip the handlebars firmly but not rigidly (allow natural vibration without fighting it); ride in a straight line and avoid steering inputs while on the grate; do not brake or accelerate sharply until you're clear of the grate. South Carolina's coastal bridges and river crossings include metal grating on some sections. Wet metal grates are particularly slippery for the narrow tires of a motorcycle.",
    },
    {
      question: "South Carolina's Hands-Free Act (Act R-134, 2023) applies to motorcycle operators. What method can SC riders legally use to receive phone calls while riding?",
      options: [
        "Holding the phone to the ear through the helmet opening — one-handed riding is acceptable for short calls",
        "Using a Bluetooth earpiece under the helmet or a Bluetooth speaker integrated into the helmet",
        "Pulling over to the side of the road — SC riders must stop before any phone interaction",
        "Motorcyclists are exempt from SC's hands-free law — the law only covers enclosed vehicles",
      ],
      correctIndex: 1,
      explanation:
        "South Carolina's Hands-Free Act (Act R-134, effective May 17, 2023) prohibits holding or manually operating a wireless device while driving or riding — motorcycles are included. Legal methods for answering calls while riding: Bluetooth earpiece paired to the phone, helmet-integrated Bluetooth speaker system, or a hands-free speakerphone system mounted to the handlebars without requiring manual contact. Holding the phone in any position while riding is prohibited. Primary enforcement applies. A first violation is $100. Motorcycle-specific Bluetooth communication systems (such as Cardo or Sena helmet systems) are popular in South Carolina and provide both navigation audio and phone communication legally.",
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
      question: "Does South Carolina require helmets for all motorcycle riders?",
      answer:
        "No. South Carolina's Motorcycle & Moped Operator's Manual requires only operators and passengers under 21 years of age to wear a DOT-approved protective helmet (with a neck or chin strap, reflectorized on both sides) plus goggles or a face shield for eye protection. Riders 21 and older face no state helmet requirement.",
    },
    {
      question: "How do I get a South Carolina Class M motorcycle endorsement?",
      answer:
        "South Carolina Class M endorsement: (1) Pass the SCDMV motorcycle knowledge test (80% passing score); (2) Pass the SCDMV motorcycle skills test OR complete an approved MSF Basic RiderCourse (BRC) — the BRC completion card waives the skills test; (3) Present documentation and pay the fee at any SCDMV office. The BRC is offered at approved sites throughout South Carolina. New riders are strongly encouraged to complete the BRC for its safety training value in addition to the skills test waiver.",
    },
    {
      question: "Are there golf carts on roads near Hilton Head and Myrtle Beach that motorcyclists need to be aware of?",
      answer:
        "Yes. South Carolina law allows golf cart operation on roads posted 35 mph or less in designated communities. Hilton Head Island, Myrtle Beach, Kiawah Island, Pawleys Island, and other coastal communities have significant golf cart traffic on their local roads. Motorcyclists riding on these roads should be aware that golf carts: travel at 12–20 mph (much slower than motorcycles); are lower to the ground and harder to see at night; may not have standard vehicle-brightness lights; and may cross roads, turn into driveways, or stop unexpectedly. Treat golf carts as slow-moving vehicles requiring extra care when overtaking.",
    },
    {
      question: "Does Emma's Law affect motorcycle riders convicted of DUI in South Carolina?",
      answer:
        "Emma's Law impacts motorcycle riders in the context of license reinstatement requirements. While a motorcycle cannot have a traditional ignition interlock device (IID) bolted to its ignition, courts may impose IID requirements on the license itself — meaning the rider cannot ride (or drive any vehicle) without satisfying the IID requirement through an alternate mechanism or court waiver. For practical purposes, a motorcycle DUI conviction that triggers Emma's Law will affect the rider's ability to regain their license until the IID issue is resolved with SCDMV and the court.",
    },
    {
      question: "Is lane splitting legal in South Carolina?",
      answer:
        "No. Lane splitting (riding between lanes of moving or stopped traffic) is not legal in South Carolina. Motorcycles must occupy a full travel lane and may not pass between lines of stopped or moving traffic. Two motorcycles may share a lane side by side only if both riders consent and maintain safe spacing. South Carolina has not enacted lane-splitting or lane-filtering legislation. Riders who lane-split risk citations for improper lane usage and may be found at fault in any resulting accident.",
    },
    {
      question: "What documents do I need to bring to the South Carolina DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in South Carolina, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the South Carolina DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the South Carolina motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in South Carolina, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the South Carolina DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in South Carolina, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including South Carolina, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in South Carolina?",
      answer:
        "In South Carolina, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the South Carolina DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in South Carolina?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. South Carolina DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "SC Driver's License", href: "/south-carolina-dmv-practice-test" },
    { label: "SC CDL Test", href: "/south-carolina-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function SouthCarolinaMotoPage() {
  return <PracticeTestPage {...data} />;
}
