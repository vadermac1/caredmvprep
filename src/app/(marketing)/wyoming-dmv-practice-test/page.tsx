import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Wyoming DMV Practice Test 2025 – Free WYDOT Driver's License Exam Prep",
  description:
    "Prepare for your Wyoming WYDOT knowledge test with free practice questions covering I-80 wind restriction tiers, open range livestock laws, Yellowstone vehicle restrictions, Snowy Range Pass seasonal closure, and WY-specific traffic laws. 25 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/wyoming-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/wyoming-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Wyoming",
  stateAbbr: "WY",
  testLabel: "DMV Practice Test",
  slug: "wyoming-dmv-practice-test",
  headline: "Wyoming DMV Practice Test 2025",
  intro:
    "Wyoming Department of Transportation (WYDOT) Driver Services administers a 25-question knowledge test. You must answer at least 20 questions correctly (80%) to pass. This free practice test covers Wyoming's I-80 tiered wind restriction system (the most frequently wind-closed Interstate in the U.S.), open range livestock laws, Yellowstone National Park road rules, Snowy Range Pass seasonal closure, and WYDOT's 511 system.",
  basedOn: "Wyoming Driver's License Study Guide (WYDOT Driver Services)",
  keyRules: [
    {
      icon: "💨",
      rule: "I-80 Wind Restriction System: Three Tiers",
      detail:
        "WYDOT uses a three-tier I-80 wind restriction system: (1) Wind Advisory — be aware and reduce speed; (2) High-Profile Vehicle Restriction — vehicles 6 feet or wider must exit and wait; (3) Road Closure — ALL vehicles must exit. I-80 between Laramie and Rawlins (the 'Snow Chi Minh Trail' / Elk Mountain area) closes due to wind more often than any other U.S. Interstate.",
    },
    {
      icon: "🐄",
      rule: "Open Range: Virtually All Wyoming Outside City Limits",
      detail:
        "Open range law applies to virtually all of Wyoming outside incorporated city and town limits. Cattle, horses, and wildlife may legally be on public roads. If you strike livestock in an open range area, the driver — not the rancher — may bear financial liability. Scan continuously for animals, especially at dawn and dusk.",
    },
    {
      icon: "🦬",
      rule: "Yellowstone National Park: Wildlife on Roads, Vehicle Restrictions",
      detail:
        "Yellowstone National Park has specific driving rules: vehicle height restrictions at some tunnels, low speed limits strictly enforced by rangers, no passing wildlife jams except in designated areas, and bison traffic jams that require full stops. Wildlife is unpredictable — a bison can charge a vehicle without warning.",
    },
    {
      icon: "⛰️",
      rule: "Snowy Range Pass (WY-130): Closed November Through Late May",
      detail:
        "WY-130 (Snowy Range Scenic Byway) connects Laramie to Saratoga over the Snowy Range mountains. It closes annually around November and remains closed through late May due to snow and ice. Check WYDOT 511 for current open/closed status before planning a Snowy Range Pass crossing.",
    },
    {
      icon: "📱",
      rule: "DUI Threshold: 0.08% Adults, 0.02% Under-21",
      detail:
        "Wyoming's DUI threshold is 0.08% for adults 21+ and 0.02% for drivers under 21. Wyoming uses 'DUI' terminology. Implied consent applies — refusing a chemical test triggers automatic license suspension. Wyoming has mandatory ignition interlock requirements for repeat DUI offenders.",
    },
    {
      icon: "🛣️",
      rule: "80 MPH Rural Interstate Speed Limit",
      detail:
        "Wyoming's rural Interstate speed limit is 80 mph on I-80, I-25, and I-90 — one of the highest in the nation. This limit applies only in ideal conditions. Wind restrictions, blizzards, and other adverse conditions frequently require speeds well below 80 mph. WYDOT variable message signs post current advised speeds.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 15 Years Old",
      detail:
        "Wyoming issues instruction permits at age 15. Permit holders must be accompanied by a licensed driver at least 21 years old. Wyoming's GDL program requires a minimum of 50 hours of supervised driving before a provisional license is issued. A full unrestricted license is available at age 17 after meeting all GDL requirements.",
    },
    {
      icon: "🚌",
      rule: "WYDOT 511: Essential for I-80 and Mountain Travel",
      detail:
        "WYDOT's 511 system provides real-time road conditions, wind restriction status, and road closures for all Wyoming highways. Checking WYDOT 511 before any Wyoming highway trip — especially on I-80 in the Laramie-to-Rawlins corridor — is essential for driver safety and legal compliance. App and web versions are available.",
    },
  ],
  about: [
    "Wyoming Department of Transportation (WYDOT) Driver Services administers all driver licensing and testing in Wyoming. The knowledge test consists of 25 multiple-choice questions drawn from the Wyoming Driver's License Study Guide, covering traffic laws, road signs, and Wyoming's unique driving conditions. A passing score of 80% — 20 correct answers out of 25 — is required. Wyoming issues permits at age 15, and the GDL program requires 50 hours of supervised driving. WYDOT's 511 system is one of the most important tools a Wyoming driver can use — it provides real-time wind restriction, closure, and road condition information for the state's highway system.",
    "Wyoming's I-80 wind restriction system is the state's most consequential and most-tested unique driving rule. The stretch of I-80 between Laramie and Rawlins — which includes the Elk Mountain area (sometimes called the 'Snow Chi Minh Trail') and the 'Miracle Mile' near Medicine Bow — experiences some of the highest sustained wind speeds recorded on any U.S. Interstate. WYDOT's tiered wind restriction system has three levels: a Wind Advisory (be aware, reduce speed), a High-Profile Vehicle Restriction (vehicles 6 feet or wider must immediately exit the highway and wait), and a full Road Closure (all vehicles, including passenger cars, must exit the highway). These closures happen multiple times per year and are legally enforceable orders.",
    "Open range law applies to virtually all of Wyoming outside incorporated areas — meaning cattle, horses, and other livestock may legally be on public highways across the entire state. The driver, not the rancher, may bear liability if livestock are struck in an open range area. Yellowstone National Park, located in Wyoming's northwest corner, has specific vehicle restrictions at some tunnels and strictly enforced low speed limits. WY-130 (Snowy Range Scenic Byway) closes each year from approximately November through late May — drivers must check WYDOT 511 before attempting the pass. Wyoming's rural Interstate speed limit of 80 mph on I-80, I-25, and I-90 is among the highest in the nation, though wind and weather conditions frequently require speeds far below this.",
  ],
  sampleQuestions: [
    {
      question:
        "Wyoming's WYDOT I-80 wind restriction system has three tiers. What does a 'High-Profile Vehicle Restriction' require?",
      options: [
        "All vehicles must reduce speed to 45 mph",
        "Vehicles 6 feet or wider must immediately exit the Interstate and wait — other vehicles may proceed with caution",
        "Only motorcycles and bicycles must exit — all other vehicles may proceed",
        "High-profile vehicle restrictions only apply to vehicles over 80,000 lbs",
      ],
      correctIndex: 1,
      explanation:
        "A High-Profile Vehicle Restriction on Wyoming's I-80 requires all vehicles that are 6 feet or wider to immediately exit the Interstate and wait at the nearest exit until the restriction is lifted. High-profile vehicles — including box trucks, RVs, panel vans, SUVs with roof carriers, and most commercial vehicles — are especially vulnerable to being pushed off course or rolled by Wyoming's extreme wind events. Standard passenger cars may proceed under a High-Profile Vehicle Restriction but should do so with caution at reduced speed.",
    },
    {
      question:
        "Under Wyoming's open range law, you are driving on a state highway west of Casper and a horse steps onto the road from the right shoulder. What does open range law say about liability if you cannot stop in time?",
      options: [
        "The horse owner is always liable for animals on public roads",
        "Wyoming's open range law does not require ranchers to fence livestock away from roads — the driver may bear financial liability for striking livestock in an open range area",
        "Liability is shared equally between driver and livestock owner",
        "The Wyoming DOT compensates drivers who strike livestock on state highways",
      ],
      correctIndex: 1,
      explanation:
        "Open range law in Wyoming (which applies to virtually all areas outside incorporated city and town limits) does not require ranchers and livestock owners to fence their animals away from public roads. This means that when a driver strikes cattle, horses, or other livestock on a Wyoming highway in an open range area, the driver may bear financial liability for injury to or death of the animal. This makes vigilant scanning for livestock on Wyoming rural roads — especially at dawn and dusk when animals are most active near roads — a critical safety practice with legal implications.",
    },
    {
      question:
        "What does a 'Road Closure' on Wyoming's I-80 require of ALL drivers, including passenger car drivers?",
      options: [
        "Reduce speed to 25 mph and proceed with extreme caution",
        "All vehicles must exit the Interstate immediately at the nearest exit and wait for the road to reopen",
        "Only commercial vehicles must exit — passenger cars may proceed at their own risk",
        "Road closures are advisory on Wyoming Interstates — drivers may choose to proceed",
      ],
      correctIndex: 1,
      explanation:
        "A Road Closure on Wyoming's I-80 is a legally enforceable order requiring ALL vehicles — including passenger cars — to exit the Interstate immediately and wait at the nearest exit. Wyoming I-80 road closures occur during extreme blizzard and/or wind events when the highway is genuinely life-threatening. WYDOT uses social media, its 511 system, and variable message signs to communicate closures. Driving on a closed Wyoming highway violates state law. The Elk Mountain area on I-80 near Rawlins experiences more annual closures than virtually any other U.S. Interstate segment.",
    },
    {
      question:
        "WY-130 (Snowy Range Scenic Byway) connects Laramie to Saratoga. When is this route typically closed?",
      options: [
        "October 15 through April 1",
        "Approximately November through late May",
        "December 1 through March 31 only",
        "WY-130 is open year-round with reduced speed limits in winter",
      ],
      correctIndex: 1,
      explanation:
        "WY-130 (Snowy Range Scenic Byway) crosses the Snowy Range mountains at Medicine Bow Pass (elevation approximately 10,847 feet) and is closed annually due to snow and ice from approximately November through late May — exact dates vary each year based on snowpack and spring weather. Drivers planning to use the Snowy Range Pass route between Laramie and Saratoga must check WYDOT 511 for the current open/closed status before attempting the crossing. No alternative scenic route exists — when the pass is closed, travelers must use the longer US-30 route through Rawlins.",
    },
    {
      question:
        "You are driving in Yellowstone National Park when you encounter a traffic jam caused by a bison herd on the road ahead. What is the correct action?",
      options: [
        "Honk your horn to move the bison — rangers allow this in traffic jam situations",
        "Drive slowly around the bison on the road shoulder",
        "Stop and wait for the bison to move — never attempt to drive through or around a bison traffic jam",
        "Flash your headlights alternately to signal the bison to move",
      ],
      correctIndex: 2,
      explanation:
        "Bison in Yellowstone National Park are protected wildlife and are extremely dangerous. A bison can weigh 2,000 pounds, run at 35 mph, and charge a vehicle without warning. The only correct response to a bison traffic jam in Yellowstone is to stop and wait for the animals to move on their own. Never honk excessively (which can provoke a charge), never drive around bison in the road (they may follow unpredictably), and never get out of your vehicle near bison. Yellowstone rangers strictly enforce speed limits and wildlife protection rules — the park has low speed limits (typically 25–45 mph) that are aggressively enforced.",
    },
    {
      question:
        "What is the maximum rural Interstate speed limit on I-80 in Wyoming?",
      options: ["70 mph", "75 mph", "80 mph", "85 mph"],
      correctIndex: 2,
      explanation:
        "Wyoming's rural Interstate speed limit on I-80 (as well as I-25 and I-90) is 80 mph — one of the highest in the nation. This limit applies only in ideal conditions. On any given day, portions of I-80 through Wyoming may have wind restrictions, blizzard conditions, or other hazards that require speeds far below 80 mph. WYDOT's variable message signs on I-80 routinely post advised speeds of 45–55 mph during adverse conditions. Drivers must always comply with posted advisory speeds and wind restriction orders regardless of the posted speed limit.",
    },
    {
      question:
        "What is the minimum age to obtain an instruction permit in Wyoming?",
      options: ["14 years old", "15 years old", "16 years old", "15½ years old"],
      correctIndex: 1,
      explanation:
        "Wyoming issues instruction permits at age 15. Permit holders must be accompanied by a licensed driver who is at least 21 years old at all times. Wyoming's GDL program requires a minimum of 50 hours of supervised driving, including at least 10 hours at night, before a provisional license can be issued. A full unrestricted license becomes available at age 17 after completing all GDL requirements including a period of holding the provisional license.",
    },
    {
      question:
        "WYDOT's 511 system is described as essential for Wyoming drivers. What information does it provide that is critical for I-80 travel?",
      options: [
        "Current fuel prices at truck stops on I-80",
        "Real-time wind restriction status, road closures, road conditions, and advised speeds on Wyoming highways including I-80",
        "Weather forecasts only — not road conditions",
        "Construction zone schedules for the upcoming year",
      ],
      correctIndex: 1,
      explanation:
        "WYDOT's 511 system provides real-time information that is critical for I-80 and other Wyoming highway travel: current wind restriction levels (Advisory, High-Profile Restriction, or Road Closure), actual road conditions (dry, wet, icy, snow-packed), visibility conditions, advised speeds, and any highway closures. On Wyoming's I-80, conditions can change from clear to life-threatening within minutes. Checking 511 before departure and monitoring variable message signs on the highway is a standard safety practice for all Wyoming drivers, especially during winter months.",
    },
    {
      question:
        "What is the DUI blood alcohol concentration (BAC) limit for a driver under 21 years old in Wyoming?",
      options: ["0.05%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation:
        "Wyoming enforces a 0.02% BAC limit for drivers under 21 — a near-zero tolerance policy that prohibits any meaningful alcohol consumption before driving. At 0.02%, even a very small amount of alcohol (less than one standard drink for most people) can result in a DUI charge. Wyoming's standard adult DUI threshold is 0.08%. Wyoming's implied consent law means that refusing a chemical test triggers an automatic license suspension separate from any criminal DUI charges.",
    },
    {
      question:
        "During a Wyoming blizzard, WYDOT issues a Road Closure for I-80 between Laramie and Rawlins. You have already passed the previous exit. What should you do?",
      options: [
        "Proceed to the next exit or town as quickly as possible before conditions worsen",
        "Pull to the right shoulder and activate hazard lights to wait for conditions to improve",
        "Follow all WYDOT variable message sign directions, which may direct you to a specific exit or staging area; law enforcement will guide you",
        "Continue at 25 mph — blizzard closures are just advisories for most of the I-80 corridor",
      ],
      correctIndex: 2,
      explanation:
        "When WYDOT issues a Road Closure for I-80 and you are already past the previous exit, you must follow all variable message sign directions and law enforcement officer instructions. WYDOT typically establishes staging areas at exits where vehicles are directed to wait during closures. Law enforcement officers will direct traffic during closures. Stopping on the Interstate shoulder in a blizzard is extremely dangerous — other drivers may not see you in whiteout conditions. Never attempt to continue driving past a road closure barrier.",
    },
  ],
  faqs: [
    {
      question: "What agency administers driver licensing in Wyoming?",
      answer:
        "Wyoming Department of Transportation (WYDOT) Driver Services administers all driver licensing, knowledge testing, and skills testing in Wyoming. Driver's license offices are located in cities and towns throughout the state. WYDOT also manages the state's 511 road condition system and oversees the statewide road sign and signal system. Vehicle registration and title services are typically handled at county clerk offices rather than WYDOT offices.",
    },
    {
      question: "What is the Wyoming knowledge test format?",
      answer:
        "Wyoming's knowledge test consists of 25 multiple-choice questions drawn from the Wyoming Driver's License Study Guide. A passing score of 80% — at least 20 correct answers — is required. The test covers Wyoming traffic laws, road signs, and WY-specific topics including the I-80 wind restriction system, open range law, Yellowstone rules, and the WYDOT 511 system. If you fail, a waiting period applies before retaking.",
    },
    {
      question: "How does Wyoming's I-80 wind restriction system work in practice?",
      answer:
        "WYDOT monitors wind speeds along I-80 continuously and activates restrictions through a tiered system. Level 1 is a Wind Advisory — conditions are dangerous but passable; reduce speed and be alert. Level 2 is a High-Profile Vehicle Restriction — any vehicle 6 feet or wider must immediately exit and wait. Level 3 is a Road Closure — all vehicles, including passenger cars, must exit immediately. Restrictions are communicated via WYDOT 511 (website, app, phone), variable message signs on the Interstate, and social media. The Elk Mountain area near milepost 255–270 is the most frequently restricted section.",
    },
    {
      question: "What are Wyoming's open range livestock laws?",
      answer:
        "Open range law applies throughout virtually all of Wyoming outside incorporated city and town limits. Livestock owners have no legal obligation to fence cattle, horses, and other animals away from public roads in open range territory. If a driver strikes livestock on a Wyoming highway in an open range area, the driver may bear financial liability for the animal's injury or death — not the rancher. This makes scanning for livestock on rural Wyoming roads, especially at dawn and dusk, both a safety practice and a legal necessity. Some areas may be 'fenced range' — check local signage.",
    },
    {
      question: "What are Wyoming's GDL (Graduated Driver License) stages?",
      answer:
        "Wyoming's GDL program has three stages. Stage 1 (Instruction Permit): available at age 15, requires a licensed driver 21+ in the vehicle, and mandates 50 hours of supervised driving (10+ hours at night). Stage 2 (Provisional License): available after 12 months with Stage 1 and meeting all requirements; restrictions include no driving between midnight and 5 AM and limits on passengers under 18 who are not family members. Stage 3 (Full Unrestricted License): available at age 17 after completing all Stage 2 requirements.",
    },
    {
      question: "What special driving rules apply in Yellowstone National Park?",
      answer:
        "Yellowstone National Park in northwest Wyoming has specific driving rules: the primary speed limit is 25–45 mph on different road sections and is strictly enforced by park rangers; wildlife (bison, elk, bears, wolves) may be on roads and must not be disturbed or approached; vehicle height restrictions exist at some tunnels and narrow sections; bison traffic jams require complete stops and patience — never attempt to drive through a bison herd; parking is permitted only in designated pullouts; and the park uses a fee entry system. Park roads are maintained by the National Park Service, not WYDOT.",
    },
    {
      question: "What is Snowy Range Pass (WY-130) and when can it be driven?",
      answer:
        "Snowy Range Pass on WY-130 crosses the Medicine Bow Mountains at an elevation of approximately 10,847 feet, connecting Laramie to Saratoga. It is a beautiful summer driving route but is closed annually from approximately November through late May due to snow and ice that makes the road impassable. The exact closure and opening dates vary each year based on weather conditions. Drivers must check WYDOT 511 for the current status before attempting the pass — arriving at the gate to find it closed means a long detour via the lower-elevation US-30 route through Rawlins.",
    },
    {
      question: "What should Wyoming drivers do when caught in a blizzard on I-80?",
      answer:
        "Wyoming's I-80 blizzards can produce zero-visibility whiteout conditions within minutes. If you are caught in a blizzard on I-80, follow variable message sign directions and law enforcement instructions — exit at the directed location. If you are stranded before an exit, pull as far off the road as safely possible, activate hazard lights, and stay in your vehicle — do not attempt to walk for help in Wyoming blizzard conditions. Call 911 if you have cell service. Prepare by carrying an emergency kit: blankets, food, water, a flashlight, jumper cables, and a phone charger. Never stop in a travel lane.",
    },
    {
      question: "What is Wyoming's DUI law and its penalties for a first offense?",
      answer:
        "Wyoming's DUI law sets the BAC threshold at 0.08% for adults 21+ and 0.02% for drivers under 21. Wyoming uses 'DUI' terminology. A first offense DUI penalty includes a 90-day license suspension, a fine of $750, mandatory alcohol assessment and education, and possible jail time of up to 6 months. A BAC of 0.15% or higher triggers a more serious charge with enhanced penalties. Wyoming's implied consent law means refusing a chemical test results in a 6-month license suspension for a first refusal. Repeat DUI offenders may face mandatory ignition interlock device installation.",
    },
  ],
  relatedTests: [
    { label: "Wyoming Motorcycle Practice Test", href: "/wyoming-motorcycle-practice-test" },
    { label: "Wyoming CDL Practice Test", href: "/wyoming-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function WyomingDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
