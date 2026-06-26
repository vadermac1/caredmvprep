import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Vermont DMV Practice Test 2025 – Free VT Driver's License Exam Prep",
  description:
    "Prepare for your Vermont DMV knowledge test with free practice questions covering Vermont's no-billboard law, OUI terminology, covered bridge weight limits, Appalachian Gap mountain roads, and foliage season traffic. 20 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/vermont-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/vermont-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Vermont",
  stateAbbr: "VT",
  testLabel: "DMV Practice Test",
  slug: "vermont-dmv-practice-test",
  headline: "Vermont DMV Practice Test 2025",
  intro:
    "The Vermont Department of Motor Vehicles (DMV), Agency of Transportation, administers a 20-question knowledge test — one of the shortest in the nation. You must answer at least 16 questions correctly (80%) to pass. This free practice test covers Vermont's unique no-billboard law, OUI (Operating Under the Influence) terminology, covered bridge weight restrictions, Green Mountain gap road driving, and foliage season traffic management.",
  basedOn: "Vermont Driver's Manual (Vermont DMV, Agency of Transportation)",
  keyRules: [
    {
      icon: "🪧",
      rule: "Vermont Has No Roadside Billboards — Navigate by Landmarks and Signs",
      detail:
        "Vermont's Outdoor Advertising Act bans all highway billboard advertising, making Vermont the only state in the nation with this prohibition. Without billboard landmarks, Vermont drivers rely on exit signs, mileposts, and natural landmarks for navigation. Never expect to see corporate billboard directions on Vermont highways.",
    },
    {
      icon: "🍺",
      rule: "OUI — Not DUI: Operating Under the Influence (23 VSA § 1201)",
      detail:
        "Vermont uses OUI (Operating Under the Influence) terminology under 23 VSA § 1201 — not DUI or DWI. The BAC threshold is 0.08% for adults 21+. Vermont also prohibits operating a motor vehicle while under the influence of any substance that impairs safe operation, even if BAC is below 0.08%.",
    },
    {
      icon: "🌉",
      rule: "Covered Bridges: Posted Weight Limits Are Legal Restrictions",
      detail:
        "Vermont has over 100 active covered wooden bridges, many with posted weight limits of 3–5 tons. These limits are legally enforceable restrictions — not suggestions. Heavy vehicles must observe all covered bridge postings and find alternate routes if their vehicle exceeds the posted limit.",
    },
    {
      icon: "⛰️",
      rule: "Mountain Gap Roads: Extreme Grades (Some Exceed 18%)",
      detail:
        "Vermont's Appalachian Gaps (VT-17, VT-116/Lincoln Gap, VT-73) have grades that can exceed 18%. Lincoln Gap closes annually to trucks and is single-lane for much of its length. These roads are unsuitable for large vehicles and challenging even for standard cars. Use lower gears when descending.",
    },
    {
      icon: "🍂",
      rule: "Foliage Season: 2–3x Normal Traffic on VT-100",
      detail:
        "October foliage season brings 2–3 times normal traffic volumes to Vermont, particularly on VT-100 (the 'Foliage Highway'). Expect traffic delays of 1–2 hours on popular foliage routes. Be patient, yield properly at small-town intersections, and never stop in traffic lanes to view foliage.",
    },
    {
      icon: "🦌",
      rule: "Moose Hazard: Northern Vermont Roads at Dawn and Dusk",
      detail:
        "Northern Vermont (US-2, I-89 north of Montpelier) has significant moose activity, particularly at dawn and dusk. Moose eyes are above headlight height and do not reflect headlights. A moose-vehicle collision is almost always catastrophic. Reduce speed and scan road edges in known moose areas.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 15 Years Old",
      detail:
        "Vermont issues learner's permits at age 15. Permit holders must be accompanied by a licensed driver 25 or older. Vermont's GDL program requires a minimum of 40 hours of supervised driving before a Level 2 license is issued. A full unrestricted license is available at age 18.",
    },
    {
      icon: "❄️",
      rule: "Frost Heaves on Spring Mountain Roads",
      detail:
        "Vermont's freeze-thaw cycles create severe frost heaves — pavement bulges from subsurface ice expansion — on mountain roads each spring. US-250 and other Green Mountain roads can have dramatic frost heaves that create significant bumps. Reduce speed significantly when frost heave warning signs are posted.",
    },
  ],
  about: [
    "The Vermont Department of Motor Vehicles (DMV), operating under the Agency of Transportation, administers driver licensing and testing in Vermont. The knowledge test is among the shortest in the nation at just 20 questions, requiring 16 correct answers (80%) to pass. Vermont's Driver's Manual covers the state's unique traffic laws, including OUI (Operating Under the Influence) under 23 VSA § 1201, covered bridge weight restrictions, and mountain driving rules. Permits are issued at age 15, and Vermont's GDL program requires 40 hours of supervised driving before a Level 2 license is issued.",
    "Vermont's most nationally unique driving characteristic is its absolute prohibition on roadside billboard advertising. Vermont's Outdoor Advertising Act bans all highway billboard advertising, making Vermont the only state in the nation without billboard advertising on its roads. This means drivers navigating Vermont highways cannot use billboard landmarks — which are standard navigation reference points in other states — and must rely instead on exit signs, mileposts, town names, and natural landmarks. Vermont's extensive covered bridge network (over 100 active wooden covered bridges) creates another unique requirement: these bridges frequently have posted weight limits of 3–5 tons, far below the capacity of modern vehicles, and these limits are legally enforceable restrictions.",
    "Vermont's Green Mountains create dramatic mountain driving conditions. The Appalachian Gaps — VT-17 (Appalachian Gap), VT-116 (Lincoln Gap), and VT-73 (Brandon Gap) — have grades that can exceed 18% on some sections, with Lincoln Gap being a single-lane road closed to trucks throughout its length. Vermont uses OUI terminology (not DUI) under 23 VSA § 1201, with a 0.08% BAC threshold for adults and 0.02% for drivers under 21. October foliage season brings extraordinary traffic volumes to VT-100 and other scenic routes — 2 to 3 times normal traffic is typical, with associated delays and congestion at small-town intersections throughout the state.",
  ],
  sampleQuestions: [
    {
      question:
        "Vermont is the only state in the nation to have what specific prohibition on roadside advertising?",
      options: [
        "Vermont prohibits digital billboards but allows static billboards",
        "Vermont prohibits all billboards on Interstate highways only",
        "Vermont prohibits all roadside billboard advertising on all highways — no billboards exist anywhere in the state",
        "Vermont prohibits billboards within 500 feet of historic sites only",
      ],
      correctIndex: 2,
      explanation:
        "Vermont's Outdoor Advertising Act bans all roadside billboard advertising on Vermont highways — making Vermont the only state in the United States with this complete prohibition. There are no billboards anywhere on Vermont's road network. This unique policy means drivers navigating Vermont cannot use corporate billboard advertising as landmarks or navigation cues, which are common in other states. Vermont drivers rely on exit signs, route numbers, mileposts, town signs, and natural landmarks for navigation.",
    },
    {
      question:
        "Vermont uses which legal terminology for the offense of driving while impaired by alcohol?",
      options: [
        "DUI (Driving Under the Influence)",
        "DWI (Driving While Intoxicated)",
        "OUI (Operating Under the Influence) under 23 VSA § 1201",
        "OMVI (Operating a Motor Vehicle While Intoxicated)",
      ],
      correctIndex: 2,
      explanation:
        "Vermont uses OUI (Operating Under the Influence) terminology under 23 VSA § 1201 — not DUI or DWI. The 'Operating' language is significant: Vermont's law covers operating any motor vehicle while impaired, not just driving. The BAC threshold is 0.08% for adults 21 and older, and 0.02% for drivers under 21. Vermont's OUI law also prohibits operating while under the influence of drugs or any other substance that impairs safe driving, even if BAC is below 0.08%.",
    },
    {
      question:
        "You approach a covered wooden bridge in Vermont that has a posted weight limit of 3 tons. Your vehicle weighs 2.5 tons (5,000 lbs). What should you do?",
      options: [
        "Proceed slowly — the posted weight limit has a 25% safety margin that your vehicle fits within",
        "Your vehicle is under the posted 3-ton (6,000 lb) limit, so you may legally proceed",
        "Honk before entering to warn oncoming traffic, then proceed slowly",
        "Check if an alternate route is available — the 3-ton limit is close to your weight and covered bridge limits can vary",
      ],
      correctIndex: 1,
      explanation:
        "At 2.5 tons (5,000 lbs), your vehicle is under the posted 3-ton (6,000 lb) weight limit for the covered bridge and may legally proceed. However, drivers should note that covered bridge weight limits are legally enforceable restrictions — not guidelines. If your vehicle weighed 3.5 tons (7,000 lbs), you would be required to find an alternate route. Vermont has over 100 active covered wooden bridges, many constructed in the 1800s with wooden structural capacity far below modern road bridges. Weight limits must be strictly observed to preserve these historic structures.",
    },
    {
      question:
        "VT-116 (Lincoln Gap) in Vermont is notable for being closed to which type of vehicle?",
      options: [
        "Motorcycles — the road is too narrow for safe two-wheeled operation",
        "Trucks — the road is closed to trucks and is single-lane for much of its length",
        "Recreational vehicles over 25 feet — the switchbacks are too tight for long vehicles",
        "All vehicles during October foliage season due to congestion",
      ],
      correctIndex: 1,
      explanation:
        "Lincoln Gap (VT-116 over the Lincoln Gap summit) is closed to trucks and is a single-lane road for much of its length. The gap road has grades that can exceed 18% and is one of the steepest paved roads in Vermont. The road is also seasonally closed (typically early November through late May) due to snow and ice. Lincoln Gap is passable for standard passenger vehicles and motorcycles during the open season, but truck operators must use alternate routes (typically VT-17 Appalachian Gap or VT-4 through the broader gaps).",
    },
    {
      question:
        "During Vermont's October foliage season, traffic volumes on VT-100 (the 'Foliage Highway') typically increase by how much compared to normal?",
      options: [
        "About 25% above normal",
        "About 50% above normal",
        "2 to 3 times (200–300%) normal traffic volumes",
        "Traffic actually decreases in October because summer tourism ends",
      ],
      correctIndex: 2,
      explanation:
        "Vermont's October foliage season brings 2 to 3 times the normal traffic volume to popular routes, especially VT-100 (which runs the length of Vermont through the Green Mountains and is known as the 'Foliage Highway'). Significant delays of 1–2 hours are common at small-town intersections and overlooks on autumn weekends. Drivers should plan extra travel time, never stop in traffic lanes to view foliage, yield properly at all intersections even when traffic is backed up, and be patient with the dramatically increased volume of visitors.",
    },
    {
      question:
        "What is the OUI BAC threshold for an adult driver (age 21+) in Vermont under 23 VSA § 1201?",
      options: ["0.05%", "0.06%", "0.08%", "0.10%"],
      correctIndex: 2,
      explanation:
        "Vermont's OUI law (23 VSA § 1201) uses a 0.08% BAC threshold for adult drivers 21 and older — the same numeric level as most other states, though Vermont calls it OUI rather than DUI. Vermont's OUI law is broader than a simple BAC test: it also prohibits operating while under the influence of any substance (drugs, medications, alcohol) that impairs safe operation, even if BAC is below 0.08%. For drivers under 21, Vermont enforces a 0.02% threshold.",
    },
    {
      question:
        "In northern Vermont, particularly near US-2 and I-89 north of Montpelier, drivers should be especially alert for which large animal hazard at dawn and dusk?",
      options: [
        "White-tailed deer, which are the primary large animal hazard in all of Vermont",
        "Black bears, which cross roads in northern Vermont during fall",
        "Moose, which are common in northern Vermont and do not reflect headlights at night",
        "Wild turkeys, which travel in large flocks on rural roads",
      ],
      correctIndex: 2,
      explanation:
        "Northern Vermont has significant moose populations, particularly in the Northeast Kingdom and along US-2 and I-89 north of Montpelier. Like in Alaska and Maine, moose present a unique hazard because their eyes are positioned above headlight beam height and do not produce eye-shine in headlights the way deer do. Moose can weigh 600–1,200 pounds, and a collision at highway speed is almost always catastrophic for the vehicle. Drivers should reduce speed and scan road edges carefully at dawn and dusk in known moose areas.",
    },
    {
      question:
        "What is the minimum age to obtain a learner's permit in Vermont?",
      options: ["14 years old", "15 years old", "16 years old", "15½ years old"],
      correctIndex: 1,
      explanation:
        "Vermont issues learner's permits at age 15. Vermont's GDL program requires permit holders to be accompanied by a licensed driver who is at least 25 years old — a higher minimum supervising driver age than many states. Vermont requires a minimum of 40 hours of supervised driving before a Level 2 license can be issued. A full unrestricted (Level 3) license is available at age 18 after completing all GDL requirements.",
    },
    {
      question:
        "Spring driving on Vermont mountain roads presents a unique hazard called 'frost heaves.' What causes frost heaves, and how should drivers respond?",
      options: [
        "Frost heaves are caused by fallen frost on the road surface and require special tires",
        "Frost heaves are pavement bulges caused by subsurface ice expansion during the freeze-thaw cycle; drivers should reduce speed significantly in areas with frost heave warning signs",
        "Frost heaves are localized ice patches that form at road edges — drivers should avoid the road shoulder in spring",
        "Frost heaves are caused by heavy snowplows and are mostly cosmetic — they do not affect vehicle handling",
      ],
      correctIndex: 1,
      explanation:
        "Frost heaves are dramatic pavement bulges that form when water in the road subbase freezes and expands during Vermont's repeated freeze-thaw cycles in late winter and early spring. They can create bumps of several inches in height that appear suddenly on mountain roads including US-250 and other Green Mountain routes. Hitting a frost heave at highway speed can damage a vehicle's suspension, cause loss of control, or send the vehicle airborne. Vermont posts frost heave warning signs seasonally — when these signs are present, reduce speed significantly.",
    },
    {
      question:
        "Vermont's Appalachian Gap on VT-17 is primarily challenging for drivers due to which road characteristic?",
      options: [
        "Very narrow tunnels with limited clearance for vehicles wider than 7 feet",
        "Extreme grades that can exceed 18%, with tight switchbacks and seasonal closures",
        "Constant road construction that makes the road impassable for several months each year",
        "Extremely low speed limits (15 mph maximum) due to extensive wildlife crossings",
      ],
      correctIndex: 1,
      explanation:
        "The Appalachian Gap on VT-17 and nearby Vermont mountain gap roads have extreme grades — some sections can exceed 18% — along with tight switchbacks and limited guardrails. These roads require careful gear selection (lower gears to prevent brake fade on descents), slow speeds on curves, and awareness that some gap roads (like Lincoln Gap) close annually in winter. The gap roads are scenic but challenging and are not suitable for large vehicles, RVs, or trucks. Drivers unfamiliar with Vermont mountain roads should research specific gap road conditions before attempting them.",
    },
  ],
  faqs: [
    {
      question: "What agency administers driver licensing in Vermont?",
      answer:
        "The Vermont Department of Motor Vehicles (DMV), operating under the Agency of Transportation, administers all driver licensing, knowledge testing, and skills testing in Vermont. DMV offices are located in Montpelier (headquarters), Burlington, Rutland, St. Johnsbury, and other communities. Vermont's DMV also handles vehicle registration, title, and other motor vehicle services.",
    },
    {
      question: "What is the Vermont DMV knowledge test format?",
      answer:
        "Vermont's knowledge test consists of 20 multiple-choice questions — one of the shortest tests in the United States. A passing score of 80% — at least 16 correct answers — is required. The test covers Vermont traffic laws, road signs, safe driving practices, and Vermont-specific rules including OUI law, covered bridge weight limits, and mountain driving. If you fail, a waiting period applies before retaking. The Vermont Driver's Manual is available online from the Vermont DMV.",
    },
    {
      question: "Why does Vermont have no billboards, and how does this affect navigation?",
      answer:
        "Vermont's Outdoor Advertising Act, combined with Vermont's Act 250 environmental law, prohibits all roadside billboard advertising on Vermont highways. Vermont is the only state in the nation with this complete ban. The law reflects Vermont's commitment to scenic preservation — billboards are seen as visual pollution that detracts from the state's natural beauty. For drivers, the absence of billboards means you cannot use corporate signage (gas stations, fast food, hotels) as navigation landmarks as you would in other states. Vermont drivers rely on exit signs, route numbers, mileposts, town name signs, and natural landmarks.",
    },
    {
      question: "What are Vermont's OUI penalties for a first offense?",
      answer:
        "A first OUI offense in Vermont (BAC 0.08% or higher) results in: a 90-day license suspension, a minimum fine of $750 (plus court costs), mandatory attendance at a DUI Offender Education Program, and a one-year ignition interlock device requirement upon license reinstatement. Additional penalties apply for high BAC (0.16%+), presence of a minor passenger, or prior OUI history. Vermont's OUI law (23 VSA § 1201) also covers impairment from drugs, not just alcohol.",
    },
    {
      question: "What should drivers know about Vermont's covered bridges?",
      answer:
        "Vermont has over 100 active covered wooden bridges — the most of any state east of the Mississippi. These historic bridges, many constructed in the 1800s and early 1900s, frequently have posted weight limits of 3–5 tons (much lower than modern bridge capacity). These limits are legally enforceable restrictions under Vermont law. Heavy vehicles must observe all covered bridge weight postings and find alternate routes if their vehicle exceeds the limit. Driving over the weight limit on a covered bridge can cause structural damage and endanger the driver and any other users of the bridge.",
    },
    {
      question: "What are Vermont's GDL (Graduated Driver License) stages?",
      answer:
        "Vermont's GDL program has three levels. Level 1 (Learner's Permit): available at age 15, requires a licensed driver at least 25 years old in the vehicle, and mandates 40+ hours of supervised driving (10+ hours at night). Level 2 (Operator's License with restrictions): available at 16 after 12 months with Level 1, nighttime driving restrictions (no driving between 9 PM and 5 AM for the first 6 months, except to/from work, school, or emergency), and passenger limits. Level 3 (Full license): available at age 18 after completing all Level 2 requirements.",
    },
    {
      question: "What makes Vermont's mountain gap roads different from other mountain roads?",
      answer:
        "Vermont's Appalachian Gaps — including the Appalachian Gap (VT-17), Lincoln Gap (VT-116/Lincoln Gap Road), and Brandon Gap (VT-73) — are old carriage road routes over the Green Mountains with grades that can exceed 18% on some sections. These grades are among the steepest on paved public roads in the eastern United States. Lincoln Gap is a single-lane road closed to all trucks and has a seasonal closure (approximately November through late May). These roads require low gears on descents to prevent brake fade, careful attention to oncoming vehicles, and awareness that cell service may be unavailable in some areas.",
    },
    {
      question: "What is the under-21 OUI threshold in Vermont?",
      answer:
        "Vermont enforces a 0.02% BAC threshold for drivers under 21 under its OUI law (23 VSA § 1201) — a near-zero tolerance policy that effectively prohibits any alcohol consumption before driving. At 0.02%, even a very small amount of alcohol can result in an OUI charge. Vermont's zero-tolerance approach for underage drinking and driving is consistent with federal highway funding requirements and reflects the state's commitment to reducing underage impaired driving.",
    },
    {
      question: "What foliage season driving tips apply in Vermont?",
      answer:
        "Vermont's October foliage season is one of the state's most economically significant tourism events, but it creates significant traffic challenges. VT-100 (the Foliage Highway) and other scenic routes see 2–3x normal traffic on peak October weekends. Driving tips for foliage season include: plan extra travel time (30–60+ minutes for popular routes), never stop in travel lanes to view foliage, use designated overlooks and parking areas, be patient at small-town intersections with higher traffic volumes, be alert for pedestrians and cyclists on rural roads, and check Vermont 511 for real-time traffic information before departing.",
    },
  ],
  relatedTests: [
    { label: "Vermont Motorcycle Practice Test", href: "/vermont-motorcycle-practice-test" },
    { label: "Vermont CDL Practice Test", href: "/vermont-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function VermontDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
