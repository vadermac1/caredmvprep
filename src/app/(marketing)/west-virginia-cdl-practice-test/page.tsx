import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "West Virginia CDL Practice Test 2025 – Free WV Commercial License Exam Prep",
  description:
    "Prepare for your West Virginia CDL knowledge test with free practice questions covering coalfield special overweight permits, runaway truck ramp usage, New River Gorge Bridge wind restrictions, SB 268 FMCSA penalties, mountain freight corridor operations, and WV DMV CDL requirements.",
  alternates: { canonical: "https://caredmvprep.com/west-virginia-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/west-virginia-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "West Virginia",
  stateAbbr: "WV",
  testLabel: "CDL Practice Test",
  slug: "west-virginia-cdl-practice-test",
  headline: "West Virginia CDL Practice Test 2025",
  intro:
    "The West Virginia Division of Motor Vehicles issues Commercial Driver's Licenses and administers CDL knowledge and skills testing. This free practice test covers WV-specific CDL topics: coalfield special overweight permit operations under WV Code § 17C-17-5, runaway truck ramp usage on US-119, US-60, and US-19 descents, New River Gorge Bridge wind restrictions for high-profile CDL vehicles, SB 268 plus FMCSA distracted driving penalties, and the I-64/I-79/I-77 mountain freight corridor.",
  basedOn: "West Virginia CDL Driver's Manual (WV Division of Motor Vehicles)",
  about: [
    "The West Virginia Division of Motor Vehicles (DMV), within the Department of Transportation, issues Commercial Driver's Licenses and administers all CDL knowledge and skills testing in West Virginia. CDL applicants must pass the General Knowledge test plus all applicable endorsement tests. The BAC limit for CDL holders operating a commercial motor vehicle is 0.04% under federal FMCSA regulations — West Virginia uses DUI terminology. West Virginia's primary CDL freight corridors are I-64 (east-west through Charleston to the Virginia border), I-79 (north-south through Charleston to Pittsburgh and south to Virginia), and I-77 (north-south through Charleston and the New River Gorge area to Virginia). All three Interstate highways involve significant mountain grades.",
    "West Virginia CDL drivers face challenges that are unique in the eastern United States. The state's coalfield counties operate under WV Code § 17C-17-5, which authorizes special permits allowing coal trucks to carry loads exceeding standard federal weight limits. CDL drivers working coalfield routes must understand permit conditions and manage the unique hazards of coalfield roads, including loose debris and narrow pavement. West Virginia's mountain grades are among the steepest on the US highway system east of the Mississippi — descents on US-119 (the Coal River Road) in Logan County, US-60 in Kanawha County, and US-19 approaching the New River Gorge are documented runaway truck locations. CDL drivers must master brake management on these grades. The New River Gorge Bridge on US-19 has specific high-wind concerns for high-profile CMVs.",
  ],
  sampleQuestions: [
    {
      question:
        "A CDL driver is dispatched on a coalfield route in Logan County, West Virginia, operating under a WV Code § 17C-17-5 coalfield special permit. The permit authorizes a vehicle weight of 120,000 lbs on the designated route. Is this legal operation?",
      options: [
        "No — federal weight limits of 80,000 lbs apply on all roads regardless of state permits",
        "Yes — WV Code § 17C-17-5 authorizes the state to issue special permits allowing weights exceeding federal limits on designated coalfield routes",
        "Only partially — the federal 80,000 lb limit still applies on any bridge on the route",
        "Yes, but only for vehicles carrying actual coal — empty trucks must comply with the 80,000 lb limit",
      ],
      correctIndex: 1,
      explanation:
        "WV Code § 17C-17-5 authorizes the West Virginia Division of Highways to issue special permits allowing coal trucks to operate at weights that exceed the standard federal 80,000 lb limit on designated coalfield route systems in Logan, Boone, Mingo, McDowell, and Wyoming counties. These permits are granted under West Virginia's authority to regulate roads within the state. CDL drivers operating under these permits must carry the permit in the vehicle and operate only on the designated permit routes — the overweight authorization does not apply statewide.",
    },
    {
      question:
        "A CDL driver operating a loaded flatbed descending US-119 in Logan County, West Virginia, discovers that their brakes are fading and speed is increasing beyond the safe threshold. A runaway truck ramp is visible 500 feet ahead. What must the driver do?",
      options: [
        "Attempt to downshift to recover braking — do not use the ramp unless the vehicle is completely out of control",
        "Use the runaway truck ramp immediately — brake fade is a brake failure emergency that the ramp is specifically designed for",
        "Steer to the road shoulder and apply maximum brake force",
        "Sound the horn to warn other traffic and continue to the next straight section where brakes can be tested",
      ],
      correctIndex: 1,
      explanation:
        "When a CDL driver recognizes brake fade on a mountain descent, the runaway truck ramp must be used immediately — not as a last resort. Brake fade progresses rapidly, and delaying use of the ramp while attempting to recover brakes allows speed to build, reducing the ramp's effectiveness and increasing risk. Runaway truck ramps are specifically designed for exactly this scenario and can stop a heavy vehicle safely when used at appropriate speeds. The Federal Motor Carrier Safety Administration training materials emphasize that CDL drivers should not hesitate to use escape ramps when brake effectiveness is compromised.",
    },
    {
      question:
        "A CDL driver operating a high-profile box van is crossing the New River Gorge Bridge (US-19) when a severe wind advisory is posted. How does this affect the CDL driver?",
      options: [
        "CDL vehicles are exempt from wind advisories due to their heavier weight",
        "The driver should reduce speed, maintain a firm grip, and be prepared for significant vehicle movement — high-profile CMVs are especially vulnerable to crosswinds on the bridge",
        "The driver should stop on the bridge shoulder and wait for the advisory to lift",
        "Wind advisories only affect empty trailers — fully loaded CMVs are stable in wind",
      ],
      correctIndex: 1,
      explanation:
        "High-profile commercial motor vehicles — box vans, flatbeds with tall cargo, refrigerated trailers, and tankers — are among the most vulnerable to crosswind effects on the New River Gorge Bridge. The bridge at 876 feet above the gorge is exposed to winds funneled by the gorge terrain. In severe crosswind conditions, a high-profile CMV can be pushed significantly sideways, risking loss of control or rollover. CDL drivers should reduce speed on the bridge in wind conditions, maintain firm control, and in extreme wind events may need to wait at the approach until conditions improve.",
    },
    {
      question:
        "Under both West Virginia's SB 268 (2022) and federal FMCSA regulations, what are CDL drivers prohibited from doing with a mobile phone while operating a commercial motor vehicle?",
      options: [
        "CDL drivers may use handheld phones while the CMV is stopped in traffic",
        "CDL drivers are prohibited from all handheld mobile phone use while operating a CMV — federal FMCSA regulations ban handheld phone use independently of state law",
        "CDL drivers may use handheld phones in rural areas where traffic is lighter",
        "Federal FMCSA regulations only apply to Interstate driving — state SB 268 governs off-Interstate",
      ],
      correctIndex: 1,
      explanation:
        "CDL drivers face dual prohibition on handheld phone use: West Virginia's SB 268 (2022) bans handheld device use for all drivers as a state law, and federal FMCSA regulations independently prohibit CDL drivers from using handheld mobile phones while operating a CMV on any road. FMCSA violations for handheld phone use can result in civil penalties up to $2,750 per violation for the driver and up to $11,000 per violation for the carrier. Multiple violations can trigger CDL disqualification. The prohibition applies at all times while the CMV is in motion, including when stopped in traffic.",
    },
    {
      question:
        "What specific mountain driving knowledge must CDL drivers demonstrate for West Virginia's I-64, I-79, and I-77 corridors?",
      options: [
        "These Interstates are flat — no specific mountain driving knowledge is needed",
        "Proper brake management on significant grades: selecting appropriate gears before descents, using engine braking, applying service brakes in intervals rather than continuously, and knowing the location of runaway ramps",
        "CDL drivers on WV Interstates only need to know the maximum speed limits",
        "West Virginia Interstates require mandatory chain control for CDL vehicles in all months",
      ],
      correctIndex: 1,
      explanation:
        "All three of West Virginia's primary Interstate highways — I-64 (east-west through Charleston), I-79 (north-south through the interior), and I-77 (through the New River Gorge area) — involve significant mountain grades. There are no flat Interstates in West Virginia. CDL drivers must apply proper mountain brake management: select appropriate gear before the grade begins, use engine braking as primary speed control, apply service brakes in intervals to allow cooling, and know the locations of runaway truck ramps on major descents. Brake fade on WV Interstate grades is a documented cause of serious truck accidents.",
    },
    {
      question:
        "A CDL driver's carrier instructs the driver to use a county road in Boone County, West Virginia (a coalfield county) as a shortcut. The driver encounters coal debris on the road and narrow pavement. What are the specific hazards the driver must manage?",
      options: [
        "Coalfield county roads have no specific hazards different from any rural road",
        "Loose coal debris reduces traction (especially in wet conditions), narrow pavement may not accommodate full CDL vehicle width, and legally overweight coal trucks may be encountered on the same roads",
        "The only hazard is the weight limit — avoid crossing bridges in coalfield areas",
        "CDL vehicles are prohibited from all county roads in coalfield counties",
      ],
      correctIndex: 1,
      explanation:
        "Coalfield county roads in Boone, Logan, Mingo, McDowell, and Wyoming counties present multiple specific CDL hazards: (1) loose coal debris on the road surface reduces traction, particularly in wet conditions and in curves; (2) many coalfield county roads are narrow, sometimes barely adequate for one vehicle, let alone a CDL combination vehicle; (3) legally overweight coal trucks operating under WV Code § 17C-17-5 permits use the same roads and may require the CDL driver to yield or navigate carefully around them. CDL drivers should verify that planned county road routes are appropriate for their vehicle's size and weight before using them in coalfield areas.",
    },
    {
      question: "Under FMCSA hours-of-service rules, how many hours may a property-carrying driver drive after 10 consecutive hours off duty?",
      options: ["8 hours", "10 hours", "11 hours", "14 hours"],
      correctIndex: 2,
      explanation:
        "Property-carrying drivers may drive a maximum of 11 hours after taking 10 consecutive hours off duty. This is the 11-Hour Driving Limit. You must stop driving at the earlier of: after 11 hours of driving, or after the 14th hour since coming on duty.",
    },
    {
      question: "At 55 mph, how much distance does a fully loaded 80,000-lb tractor-trailer need to stop compared to a car?",
      options: ["About the same", "About 25% more", "Nearly twice as much", "Three to four times as much"],
      correctIndex: 2,
      explanation:
        "A fully loaded tractor-trailer traveling at 55 mph needs approximately 400 feet to stop — nearly twice the stopping distance of a passenger car at the same speed. Wet roads, worn brakes, or improper brake adjustment can dramatically increase this distance. Always maintain a large following distance.",
    },
    {
      question: "When must a vehicle display hazardous materials placards?",
      options: ["Only when carrying more than 1,000 lbs of hazmat", "Whenever any amount of a placard-required material is being transported", "Only on interstate highways", "Only when the material is in liquid form"],
      correctIndex: 1,
      explanation:
        "Hazardous materials placards must be displayed whenever you are transporting any quantity of a material that requires placarding under 49 CFR Part 172. There is no minimum weight threshold for placards — even small amounts of certain hazmat categories require placarding.",
    },
    {
      question: "Before backing under a trailer to couple, you should check that the trailer kingpin is:",
      options: ["Greased and at a 45-degree angle", "Straight and at the correct height for the fifth wheel", "Retracted into the trailer frame", "Centered over the rear axle"],
      correctIndex: 1,
      explanation:
        "Before coupling, ensure the trailer kingpin is straight (not bent or damaged) and that the trailer is at the correct height — low enough that the fifth wheel will contact the trailer plate and ride under the kingpin, but not so low that the tractor frame hits the trailer. Always check the kingpin and fifth wheel visually before coupling.",
    },
  ],
  faqs: [
    {
      question: "What are West Virginia's coalfield special permits for CDL operations?",
      answer:
        "WV Code § 17C-17-5 authorizes the West Virginia Division of Highways to issue special permits allowing coal transport vehicles to carry loads exceeding standard federal weight limits (typically 80,000 lbs) on designated coalfield route systems in Logan, Boone, Mingo, McDowell, and Wyoming counties. CDL drivers operating under these permits must carry the permit documentation in the vehicle, operate only on designated routes, and comply with all permit conditions. The permits reflect West Virginia's recognition of the economic importance of coal transport and the practical need for higher weight operations in the coalfield region.",
    },
    {
      question: "What runaway truck ramp knowledge do CDL drivers need for West Virginia?",
      answer:
        "CDL drivers operating in West Virginia must know the location of runaway truck ramps on major mountain descents including US-119 in the coalfield area, US-60 in Kanawha County, US-19 at the New River Gorge, I-64 east of Charleston, I-77 near Ghent, and other grade locations. FMCSA training emphasizes that runaway ramps should be used immediately upon recognizing brake fade — not as an absolute last resort. CDL drivers should also perform pre-trip brake inspections before any mountain descent, and West Virginia requires brake checks at truck brake check areas posted on major mountain routes.",
    },
    {
      question: "How does the New River Gorge Bridge affect CDL vehicle routing?",
      answer:
        "The New River Gorge Bridge (US-19) is a critical crossing connecting communities north and south of the New River Gorge. CDL carriers routing through the Fayetteville-Oak Hill area should verify their vehicle's weight and height comply with the bridge's posted limits. In severe crosswind conditions (which can occur due to wind funneling through the gorge), high-profile CMVs should approach with caution, reduce speed on the bridge, and may need to wait if wind conditions are extreme. The West Virginia DOT occasionally issues wind advisories for the bridge that CDL drivers should monitor.",
    },
    {
      question: "What FMCSA penalties apply to WV CDL drivers for handheld phone violations?",
      answer:
        "Federal FMCSA regulations prohibit CDL drivers from using handheld mobile phones while operating a CMV. Violations carry civil penalties of up to $2,750 per violation for the driver and up to $11,000 per violation for the carrier. Multiple violations can lead to CDL disqualification proceedings under FMCSA's Safety Measurement System (SMS). These federal penalties are in addition to West Virginia state penalties under SB 268. The combined state and federal enforcement makes handheld phone use an especially serious compliance issue for West Virginia CDL holders.",
    },
    {
      question: "What CDL endorsements are most relevant for West Virginia commercial operations?",
      answer:
        "West Virginia's economy and terrain make several endorsements important. The Combination (Class A) CDL covers I-64, I-79, and I-77 freight operations. The Tank (N) endorsement is relevant for bulk liquid transport including chemical products from WV's chemical valley (Kanawha Valley area). The HazMat (H) endorsement covers chemical transport from WV's industrial facilities. The Doubles/Triples (T) endorsement is less common in WV due to mountain terrain but used on I-64 connections to neighboring state systems. Coalfield operations typically require a standard Class A or Class B CDL with no special endorsement beyond the standard licensing, though familiarity with WV Code § 17C-17-5 permit operations is essential.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in West Virginia?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in West Virginia?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your West Virginia DMV website for current fee schedules.",
    },
    {
      question: "Can I take the West Virginia CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the West Virginia DMV for available language options.",
    },
    {
      question: "How long is a West Virginia CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your West Virginia CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the West Virginia CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in West Virginia, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "West Virginia DMV Practice Test", href: "/west-virginia-dmv-practice-test" },
    { label: "West Virginia Motorcycle Practice Test", href: "/west-virginia-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function WestVirginiaCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
