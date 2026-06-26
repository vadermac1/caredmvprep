import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "West Virginia DMV Practice Test 2025 – Free WV Driver's License Exam Prep",
  description:
    "Prepare for your West Virginia DMV knowledge test with free practice questions covering mountain driving rules, coal truck operations, New River Gorge Bridge, SB 268 hands-free law, spring frost heaves, and WV-specific traffic laws. 25 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/west-virginia-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/west-virginia-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "West Virginia",
  stateAbbr: "WV",
  testLabel: "DMV Practice Test",
  slug: "west-virginia-dmv-practice-test",
  headline: "West Virginia DMV Practice Test 2025",
  intro:
    "The Division of Motor Vehicles (DMV), West Virginia Department of Transportation, administers a 25-question knowledge test. You must answer at least 20 questions correctly (80%) to pass. This free practice test covers West Virginia's mountain driving challenges (approximately 90% of the state is mountain terrain), coal truck operations under WV coalfield permits, the New River Gorge Bridge, SB 268 hands-free law, and spring frost heave hazards.",
  basedOn: "West Virginia Driver's Licensing Handbook (WV Division of Motor Vehicles)",
  keyRules: [
    {
      icon: "⛰️",
      rule: "Mountain Terrain Statewide: Runaway Truck Ramps on Every Major Descent",
      detail:
        "West Virginia is the most mountainous state east of the Mississippi River — approximately 90% is mountain terrain. There are no flat Interstates in WV. Runaway truck ramps appear on virtually every major mountain descent. All drivers must use lower gears when descending long steep grades, not just truck drivers.",
    },
    {
      icon: "🚛",
      rule: "Coal Truck Overweight Permits: Legal Overweight Vehicles in Coalfield Counties",
      detail:
        "WV Code § 17C-17-5 authorizes coalfield special permits allowing legally overweight coal trucks on designated routes in Logan, Boone, Mingo, McDowell, and Wyoming counties. Drivers on coalfield roads regularly encounter legally overweight coal trucks. These trucks are operating lawfully — give them extra space and clearance.",
    },
    {
      icon: "🌉",
      rule: "New River Gorge Bridge: Wind Hazards for High-Profile Vehicles",
      detail:
        "US-19 crosses the New River Gorge on the longest steel arch bridge in the Western Hemisphere at 876 feet above the river. High winds on the bridge can affect high-profile vehicles and motorcycles. Follow posted speed limits and exercise caution in crosswind conditions.",
    },
    {
      icon: "📱",
      rule: "SB 268 (2022): West Virginia Hands-Free Law",
      detail:
        "West Virginia's SB 268 (effective 2022) enacted a primary hands-free law banning all handheld device use while driving. Drivers may not hold a phone for any reason while the vehicle is in motion. Bluetooth and hands-free systems are permitted. Violations are primary offenses.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 15 Years Old",
      detail:
        "West Virginia issues instruction permits at age 15. Permit holders must be accompanied by a licensed driver at least 21 years old. West Virginia's GDL program requires 50 hours of supervised driving (including 10 hours at night) before a Level 2 license is issued. A full unrestricted license is available at age 17 after completing all GDL requirements.",
    },
    {
      icon: "🍺",
      rule: "DUI: 0.08% Adults, 0.02% Under-21",
      detail:
        "West Virginia's DUI threshold is 0.08% for adults and 0.02% for drivers under 21. West Virginia uses 'DUI' terminology. Implied consent applies — refusing a chemical test triggers automatic license revocation. West Virginia has mandatory minimum sentences for repeat DUI offenders.",
    },
    {
      icon: "🌱",
      rule: "Frost Heaves in Spring: Severe Pavement Damage on Mountain Roads",
      detail:
        "West Virginia's freeze-thaw cycles cause severe spring frost heaves — pavement upheavals from subsurface ice — particularly on US-250 and other mountain roads. These heaves can be dramatic and appear suddenly. When frost heave warning signs are posted, reduce speed significantly to avoid vehicle damage and loss of control.",
    },
    {
      icon: "⛏️",
      rule: "Coal Debris on Coalfield Roads: Loose Material on Pavement",
      detail:
        "Roads in WV's coalfield counties (Logan, Boone, Mingo, McDowell, Wyoming) frequently have loose coal debris deposited by coal trucks. This debris on the road surface reduces traction, especially when wet. Reduce speed and increase following distance on coalfield roads where coal debris is visible.",
    },
  ],
  about: [
    "The Division of Motor Vehicles (DMV), within the West Virginia Department of Transportation, administers all driver licensing and testing in West Virginia. The knowledge test consists of 25 multiple-choice questions drawn from the West Virginia Driver's Licensing Handbook, covering traffic laws, road signs, and the Mountain State's unique driving conditions. A passing score of 80% — 20 correct answers out of 25 — is required. Permits are issued at age 15, and West Virginia's GDL program requires 50 hours of supervised driving before a Level 2 license is issued.",
    "West Virginia is the most mountainous state east of the Mississippi River — approximately 90% of the state's terrain is characterized by mountains and ridges, and there are no flat Interstate highways in the state. This terrain shapes virtually every aspect of driving in West Virginia. The steepest grades on US-numbered highways in the eastern United States are in West Virginia, including US-119 in the coalfield area and US-60 in Kanawha County. Runaway truck ramps appear on virtually every major mountain descent. West Virginia's coalfield counties — Logan, Boone, Mingo, McDowell, and Wyoming — operate under WV Code § 17C-17-5 coalfield special permits, which authorize legally overweight coal trucks on designated route systems. Drivers in these counties regularly encounter trucks that legally exceed standard federal weight limits.",
    "West Virginia's New River Gorge Bridge carries US-19 over the New River at 876 feet — the longest steel arch bridge in the Western Hemisphere. High winds on this exposed bridge span can affect high-profile vehicles, motorcycles, and even standard passenger cars during severe wind events. The bridge is also a major tourist attraction and hosts 'Bridge Day' each October, when the bridge is closed to traffic for an annual festival. West Virginia's SB 268 (2022) enacted a primary hands-free law prohibiting all handheld device use while driving. Spring frost heaves on mountain roads — caused by West Virginia's severe freeze-thaw cycles — create dramatic pavement upheavals on US-250 and other mountain routes that require significantly reduced speeds.",
  ],
  sampleQuestions: [
    {
      question:
        "West Virginia is the most mountainous state east of the Mississippi River, with approximately what percentage of the state characterized by mountain terrain?",
      options: ["50%", "70%", "90%", "100%"],
      correctIndex: 2,
      explanation:
        "Approximately 90% of West Virginia is mountain terrain — ridges, valleys, and hollows that give the state its unique character and its significant mountain driving challenges. There are no flat Interstate highways in West Virginia. Every major road in the state involves significant grades, curves, and mountain driving conditions. This is why West Virginia's Driver's Handbook places such emphasis on mountain driving techniques, runaway truck ramps, and proper gear use on long descents.",
    },
    {
      question:
        "You are driving on a county road in Logan County, West Virginia (a coalfield county) and are passed by a coal truck that appears to be carrying a very heavy load. Under WV Code § 17C-17-5, what may be true about this truck?",
      options: [
        "The truck is likely violating federal weight limits and should be reported to the WV DOT",
        "The truck may be legally operating under a coalfield special permit that authorizes loads exceeding standard federal weight limits on designated coalfield routes",
        "Coal trucks are always limited to standard federal weight limits regardless of any state permits",
        "Overweight coal trucks are only permitted in McDowell County, not Logan County",
      ],
      correctIndex: 1,
      explanation:
        "WV Code § 17C-17-5 authorizes special permits for coal trucks operating in West Virginia's coalfield counties — Logan, Boone, Mingo, McDowell, and Wyoming — to carry loads that exceed standard federal weight limits on designated route systems. These trucks are operating legally under state permit authority. Drivers encountering coal trucks on coalfield roads should give them extra space and clearance, be aware that coal debris may fall from the trucks onto the road surface, and understand that these trucks have longer stopping distances due to their heavy loads.",
    },
    {
      question:
        "The New River Gorge Bridge (US-19) in West Virginia is the longest steel arch bridge in the Western Hemisphere at 876 feet above the New River. What driving hazard is specific to this bridge?",
      options: [
        "The bridge has a 35 mph speed limit at all times due to its narrow lanes",
        "High crosswinds on the bridge can affect high-profile vehicles and motorcycles",
        "The bridge's steel surface becomes extremely slippery in wet weather due to lack of pavement",
        "The bridge has a 10-ton weight limit due to its arch design",
      ],
      correctIndex: 1,
      explanation:
        "The New River Gorge Bridge's position 876 feet above the New River canyon exposes it to significant crosswinds, particularly affecting high-profile vehicles (box trucks, RVs, vans) and motorcycles. Wind funneling through the gorge can be stronger on the bridge than on approach roads. Drivers of high-profile vehicles should be aware of wind conditions before crossing, and motorcycle riders should maintain a firm grip, lean slightly into the wind direction, and reduce speed in strong crosswind conditions on the bridge.",
    },
    {
      question:
        "West Virginia's SB 268 (effective 2022) regulates what driver behavior?",
      options: [
        "Minimum safe following distances on mountain roads",
        "Coal truck weight limits in coalfield counties",
        "Handheld mobile device use while driving — banning all handheld use as a primary offense",
        "Runaway truck ramp usage requirements",
      ],
      correctIndex: 2,
      explanation:
        "West Virginia's SB 268, effective in 2022, enacted a primary hands-free law that prohibits all handheld mobile device use while driving a motor vehicle. Drivers may not hold their phone for any purpose while the vehicle is in motion. Hands-free use via Bluetooth headsets or vehicle-integrated systems is permitted. The violation is a primary offense — law enforcement can stop drivers solely for holding a device. First-offense fines apply, with higher penalties for subsequent violations.",
    },
    {
      question:
        "What is the minimum age to obtain an instruction permit in West Virginia?",
      options: ["14 years old", "15 years old", "15½ years old", "16 years old"],
      correctIndex: 1,
      explanation:
        "West Virginia issues instruction permits at age 15. Permit holders must be accompanied by a licensed driver who is at least 21 years old. West Virginia's GDL program requires a minimum of 50 hours of supervised driving, including 10 hours at night, before a Level 2 operator's license can be issued. A full unrestricted license becomes available at age 17 after completing all GDL requirements including a period of holding the Level 2 license.",
    },
    {
      question:
        "What are 'frost heaves' on West Virginia mountain roads, and how should drivers respond when they encounter frost heave warning signs?",
      options: [
        "Frost heaves are localized ice patches — drivers should activate 4-wheel drive",
        "Frost heaves are pavement upheavals caused by subsurface ice expansion during spring freeze-thaw cycles; drivers must reduce speed significantly when frost heave signs are posted",
        "Frost heaves are fallen rocks from mountain slopes — drivers should report them to WV DOT",
        "Frost heaves are temporary speed bumps installed by WV DOT to slow mountain traffic",
      ],
      correctIndex: 1,
      explanation:
        "Frost heaves occur when water in the subbase of a road freezes, expands, and pushes the pavement surface upward, creating significant bumps or ridges. West Virginia's mountain roads are particularly susceptible to frost heaves due to the state's repeated freeze-thaw cycles in late winter and early spring. Roads like US-250 through the Allegheny Mountains can develop dramatic frost heaves. When frost heave warning signs are posted, reduce speed significantly — hitting a frost heave at highway speed can damage a vehicle's suspension, cause loss of control, and send the vehicle airborne.",
    },
    {
      question:
        "When descending a long steep mountain grade on a West Virginia highway, what is the recommended technique to maintain control?",
      options: [
        "Apply the brakes steadily and continuously to maintain a constant speed throughout the descent",
        "Select a lower gear before beginning the descent and use engine braking; apply brakes in intervals, not continuously",
        "Shift to neutral and coast down to prevent engine overheating",
        "Maintain normal highway speed at the top of the grade and rely on brakes if speed builds too much",
      ],
      correctIndex: 1,
      explanation:
        "West Virginia's mountain grades require proper braking technique — continuous brake application on long descents causes brake fade or complete brake failure due to overheating. The correct technique is to select an appropriate lower gear before the descent begins (not after speed has built up), use engine braking as the primary speed control, and apply service brakes in intervals rather than continuously. This allows brakes to cool between applications. West Virginia highways have runaway truck ramps on major descents for vehicles that lose braking control.",
    },
    {
      question:
        "On a coalfield county road in West Virginia, you notice loose black debris on the road surface, apparently fallen from passing coal trucks. How should this affect your driving?",
      options: [
        "The debris is coal dust only and has no significant effect on traction",
        "Reduce speed and increase following distance — loose coal debris on the road surface significantly reduces traction, especially when wet",
        "Drive on the road shoulder where debris is less concentrated",
        "Coal debris on roads is illegal — stop and call the WV DOT hotline",
      ],
      correctIndex: 1,
      explanation:
        "Loose coal debris deposited on road surfaces by coal trucks in WV's coalfield counties creates a significant traction hazard, especially when wet. Coal particles create a surface somewhat like loose gravel, reducing tire adhesion. In wet conditions, a coal-slicked road can be particularly slippery. Drivers on coalfield roads in Logan, Boone, Mingo, McDowell, and Wyoming counties should reduce speed below normal, increase following distance, and be prepared for the possibility of coal debris in curve sections and at the bottom of grades where coal trucks may have deposited material.",
    },
    {
      question:
        "West Virginia has a DUI threshold of 0.08% for adult drivers. What is the threshold for drivers under 21?",
      options: ["0.05%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation:
        "West Virginia enforces a 0.02% BAC threshold for drivers under 21 — a near-zero tolerance policy that prohibits any meaningful alcohol consumption before driving. At 0.02%, even a very small amount of alcohol can result in a DUI charge. West Virginia uses 'DUI' terminology. The standard adult threshold is 0.08%. West Virginia's implied consent law means refusing a chemical test triggers automatic license revocation separate from any criminal DUI charges.",
    },
    {
      question:
        "What is a runaway truck ramp, and when is a West Virginia driver required to use one?",
      options: [
        "A runaway truck ramp is a designated parking area for trucks exceeding 80,000 lbs — all CDL vehicles must use them at the bottom of major grades",
        "A runaway truck ramp is an emergency escape ramp used when a vehicle's brakes fail on a mountain descent — drivers must use one when their brakes are no longer controlling the vehicle's speed",
        "A runaway truck ramp is a lane reserved for coal trucks only on WV coalfield roads",
        "A runaway truck ramp is a pull-off for trucks to check brakes before descending — use is mandatory for all trucks over 26,000 lbs",
      ],
      correctIndex: 1,
      explanation:
        "A runaway truck ramp (also called an emergency escape ramp or truck escape ramp) is a specially constructed feature on steep mountain descents designed for use when a vehicle's brakes have failed or faded and the driver can no longer control the vehicle's speed. The ramp is designed to stop a vehicle using deep gravel, sand, or an ascending grade that absorbs the vehicle's kinetic energy. In West Virginia, runaway truck ramps appear on virtually every major mountain descent. A driver should use the ramp immediately if their brakes are not effectively controlling speed — hesitating to use it increases the risk of a catastrophic crash at the bottom of the grade.",
    },
  ],
  faqs: [
    {
      question: "What agency administers driver licensing in West Virginia?",
      answer:
        "The Division of Motor Vehicles (DMV), within the West Virginia Department of Transportation, administers all driver licensing, knowledge testing, and skills testing in West Virginia. DMV offices are located throughout the state, with primary offices in Charleston (the capital), Huntington, Morgantown, Parkersburg, and other cities. The DMV's website provides online services including license renewal and address changes.",
    },
    {
      question: "What is the West Virginia DMV knowledge test format?",
      answer:
        "West Virginia's knowledge test consists of 25 multiple-choice questions drawn from the West Virginia Driver's Licensing Handbook. A passing score of 80% — at least 20 correct answers — is required. The test covers WV traffic laws, road signs, mountain driving rules, and WV-specific topics including coal truck operations and the hands-free law. If you fail, a waiting period applies before retaking. The handbook is available on the WV DMV website.",
    },
    {
      question: "What are West Virginia's graduated driver licensing stages?",
      answer:
        "West Virginia's GDL program has three stages. Level 1 (Instruction Permit): available at age 15, requires a licensed driver 21 or older, and mandates 50 hours of supervised driving (10 hours at night). Level 2 (Graduated License): available after 12 months with Level 1 and meeting all requirements; includes restrictions on nighttime driving and passenger limits. Level 3 (Full Unrestricted License): available at age 17 after completing all Level 2 requirements.",
    },
    {
      question: "What are coalfield special permits for coal trucks in West Virginia?",
      answer:
        "WV Code § 17C-17-5 authorizes the West Virginia Division of Highways to issue special permits allowing coal trucks to operate at weights exceeding standard federal limits on designated coalfield route systems in Logan, Boone, Mingo, McDowell, and Wyoming counties. These permits reflect the economic importance of the coal industry to West Virginia's economy and the practical need to move coal from mine to processing facility. Drivers on coalfield roads must be prepared to share the road with legally overweight coal trucks, which have longer stopping distances, may drop coal debris, and require extra clearance.",
    },
    {
      question: "What should drivers know about the New River Gorge Bridge?",
      answer:
        "The New River Gorge Bridge carries US-19 over the New River Gorge in Fayette County at 876 feet above the river — the longest steel arch bridge in the Western Hemisphere. The bridge has a 4-lane divided highway configuration. Key driving considerations include: crosswinds can be significant on the bridge due to the gorge's wind-channeling effect; high-profile vehicles and motorcycles are most affected by crosswinds; the posted speed limit must be obeyed; and 'Bridge Day' is held each October when the bridge is closed to vehicle traffic. The New River Gorge area is a National Park and attracts significant tourist traffic.",
    },
    {
      question: "Does West Virginia have a hands-free driving law?",
      answer:
        "Yes. West Virginia's SB 268, effective in 2022, enacted a primary hands-free driving law that prohibits all handheld mobile device use while operating a motor vehicle. Drivers may not hold a phone for any purpose while the vehicle is in motion — including at red lights and stop signs. Hands-free use via Bluetooth headsets or vehicle-integrated systems is permitted. Violations are primary offenses with fines that increase for repeat violations. West Virginia's law also has specific provisions addressing increased fines for handheld device use in work zones and school zones.",
    },
    {
      question: "How do WV's mountain grades affect all drivers, not just truck drivers?",
      answer:
        "While runaway truck ramps are designed primarily for heavy trucks, West Virginia's mountain grades affect all drivers. Passenger cars, SUVs, and minivans can experience brake fade on long steep descents if the driver rides the brakes continuously rather than using engine braking (lower gears). This is particularly true for fully loaded vehicles, vehicles towing trailers, and any vehicle with worn or improperly adjusted brakes. All WV drivers should downshift when descending long grades, avoid continuous brake application, and know the location of runaway ramps on major descents as a safety reference.",
    },
    {
      question: "What is the DUI (BAC) threshold and penalties for a first offense in West Virginia?",
      answer:
        "West Virginia's DUI threshold is 0.08% BAC for adults 21+. First DUI offense penalties include a mandatory license revocation (minimum 15 days, up to 6 months), a fine of $100–$500 plus court costs, mandatory DUI Safety and Treatment Program attendance, and possible jail time of up to 6 months. A BAC of 0.15% or higher triggers aggravated DUI with enhanced penalties. West Virginia's implied consent law means refusing a chemical test results in an automatic one-year license revocation for a first refusal.",
    },
    {
      question: "What should spring drivers know about West Virginia's frost heaves?",
      answer:
        "Spring is West Virginia's most hazardous season for mountain road surface conditions. The state's repeated freeze-thaw cycles from late January through April cause frost heaves — significant pavement upheavals — on mountain roads statewide, particularly on US-250 (the Staunton-Parkersburg Turnpike) and other old mountain routes. These heaves can be several inches high and appear suddenly. The WV Division of Highways posts frost heave warning signs on affected roads seasonally. Drivers should treat posted frost heave warning signs as requiring significant speed reductions — similar to approaching a significant bump at speed.",
    },
  ],
  relatedTests: [
    { label: "West Virginia Motorcycle Practice Test", href: "/west-virginia-motorcycle-practice-test" },
    { label: "West Virginia CDL Practice Test", href: "/west-virginia-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function WestVirginiaDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
