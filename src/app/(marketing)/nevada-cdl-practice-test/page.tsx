import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Nevada CDL Practice Test 2025 – Free DMV Commercial License Prep",
  description: "Prepare for the Nevada DMV CDL knowledge exam with questions on the Hoover Dam commercial vehicle prohibition (must use O'Callaghan-Tillman Bridge), US-50 isolation for CDL operations, Las Vegas Strip delivery routing, DUI 0.04% BAC for CMV operators, and NDOT mining industry oversize permits.",
  alternates: { canonical: "https://caredmvprep.com/nevada-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/nevada-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Nevada",
  stateAbbr: "NV",
  testLabel: "CDL Practice Test",
  slug: "nevada-cdl-practice-test",
  headline: "Nevada CDL Practice Test 2025",
  intro: "The Nevada Department of Motor Vehicles issues Commercial Driver's Licenses for Class A, B, and C vehicles. The CDL knowledge exam covers FMCSA regulations and Nevada-specific commercial driving rules including the Hoover Dam commercial vehicle prohibition (all commercial vehicles must use the O'Callaghan-Tillman Bridge), US-50 isolation for CDL fuel and route planning, Las Vegas Strip delivery routing and pedestrian priority zones, DUI at 0.04% BAC for CMV operators, and NDOT oversize permits for Nevada's mining industry.",
  basedOn: "Nevada DMV CDL Manual / FMCSA Federal Motor Carrier Safety Regulations",
  about: [
    "Nevada's CDL program is administered by the Department of Motor Vehicles. Nevada's commercial transportation network is distinctive because of the Hoover Dam restriction — all commercial vehicles on US-93 between Arizona and Nevada must use the Mike O'Callaghan–Pat Tillman Memorial Bridge rather than the dam crossing. This is a nationally unique commercial routing requirement that is directly tested on the Nevada CDL exam. The DUI threshold for CMV operators is 0.04% BAC under federal FMCSA regulations adopted in Nevada. Nevada uses DUI terminology. Nevada's NRS 484B.165 handheld device ban applies to CDL holders and may trigger FMCSA serious traffic violation provisions for multiple violations in a commercial vehicle.",
    "Nevada's commercial transportation environment includes Las Vegas metropolitan area operations — one of the most complex urban CDL environments in the western United States. Las Vegas Strip delivery routing involves timed delivery windows, pedestrian priority zones, and specific truck routing that avoids the Strip's most congested sections during casino peak hours. Nevada's mining industry — particularly the large-scale open pit gold, silver, and copper mining operations in Elko, Humboldt, and Pershing counties — generates significant oversize and overweight permit traffic. NDOT's Permit Office issues oversize permits for mining equipment moves that often involve escort vehicles, travel time restrictions, and specific route authorizations on I-80 and US-93 corridors.",
  ],
  sampleQuestions: [
    {
      question: "A CDL driver operating a tractor-trailer on US-93 in Arizona approaches Hoover Dam heading toward Nevada. The driver wants to cross at the dam. Is this permitted?",
      options: ["Yes — US-93 crosses Hoover Dam and commercial vehicles may use this crossing", "No — all commercial vehicles are prohibited from crossing Hoover Dam and must use the Mike O'Callaghan–Pat Tillman Memorial Bridge on the US-93 bypass", "Only Class B vehicles under 26,000 lbs may cross Hoover Dam", "CDL vehicles may cross the dam only with a federal security escort"],
      correctIndex: 1,
      explanation: "All commercial vehicles — regardless of size or weight class — are prohibited from crossing Hoover Dam on US-93. Commercial traffic must use the Mike O'Callaghan–Pat Tillman Memorial Bridge, which is the US-93 bypass that opened in 2010. The bridge spans the Colorado River approximately 1,500 feet downstream of the dam. The prohibition exists for national security reasons — Hoover Dam is a critical federal infrastructure facility. CDL drivers approaching from Arizona on US-93 must follow bypass signing before reaching the dam. Ignoring the restriction and attempting to cross the dam is prohibited and will result in being turned back by federal security."
    },
    {
      question: "A Nevada CDL driver is operating on US-50 between Ely and Eureka (approximately 80 miles with no services). The truck's fuel gauge shows approximately 100 miles of range remaining. What is the correct operational decision?",
      options: ["Continue — 100 miles of range exceeds the 80-mile segment distance", "Consider the 100-mile estimated range as a minimum safety margin, not just barely adequate — actual range can be reduced by headwinds, grade, speed, and idle time on US-50", "Stop at the next milepost and call dispatch for instructions", "The FMCSA requires carriers to maintain 50-mile fuel reserves on all remote routes"],
      correctIndex: 1,
      explanation: "While a 100-mile estimated range technically covers the 80-mile US-50 segment between Ely and Eureka, CDL fuel range calculations should include safety margins. US-50 in Nevada may include grades that increase fuel consumption, strong headwinds common in the Great Basin, and possible idling time if the driver needs to pull over for any reason. A more conservative approach is to plan fuel stops so the truck always enters a 100-mile service gap with at least 150+ miles of calculated range. Nevada's US-50 is a genuine CDL fuel planning challenge because there is no margin for error — breakdown assistance and fuel delivery to remote US-50 locations is slow and expensive."
    },
    {
      question: "A CDL driver is making a morning casino delivery to a Las Vegas Strip hotel. The Strip is listed as having a 'pedestrian priority zone' with timed delivery windows. The driver arrives at 7:45 AM for a window that opens at 8:00 AM. What should the driver do?",
      options: ["Enter the delivery zone immediately — 15 minutes early is within acceptable tolerance", "Wait until the authorized 8:00 AM window opens before entering the delivery zone — timed windows exist for pedestrian safety and congestion management", "Call the hotel receiving dock to request early entry authorization", "Deliveries on the Las Vegas Strip have no time restrictions in the morning hours"],
      correctIndex: 1,
      explanation: "Las Vegas Strip delivery timed windows are established by city ordinance and hotel management protocols to manage pedestrian safety and traffic flow on one of the most congested pedestrian corridors in the United States. CDL drivers must comply with the authorized delivery window and should not enter pedestrian-priority delivery zones early. Early entry can create conflicts with hotel pedestrian operations, loading dock scheduling conflicts, and potential traffic violations. The driver should stage nearby and wait for the authorized window time. The Las Vegas Strip has some of the highest pedestrian volumes in the country, and delivery operations must be managed carefully."
    },
    {
      question: "Nevada's mining industry in Elko County operates large haul trucks and mining equipment that must travel on public roads for equipment moves. A CDL driver is transporting a 14-foot-wide mining component. What document is required from NDOT?",
      options: ["Only a standard CDL and oversize cargo placard", "An NDOT oversize/overweight permit specifying the authorized route, travel time restrictions, and escort vehicle requirements", "A letter from the mining company authorizing the move", "A federal Department of Interior permit for mining equipment on Nevada roads"],
      correctIndex: 1,
      explanation: "Moving an oversize load (exceeding 8.5 feet in width — the standard maximum for vehicles without permits) on Nevada public roads requires an NDOT (Nevada Department of Transportation) oversize/overweight permit. A 14-foot-wide load would require a permit specifying: the authorized route from origin to destination, travel time restrictions (typically daylight hours only and/or no travel on Fridays through Sundays for very wide loads), required escort vehicle (pilot car) arrangements, and any specific bridge or low-clearance restrictions. NDOT's Permit Office processes these applications, and CDL drivers must carry the permit during the move and comply with all conditions."
    },
    {
      question: "A Nevada CDL holder is convicted of DUI at 0.09% BAC while driving their personal pickup truck on a day off. What mandatory CDL consequence applies?",
      options: ["No CDL consequence — the offense occurred in a personal vehicle", "Mandatory one-year CDL disqualification under FMCSA regulations, regardless of vehicle type at time of offense", "90-day CDL suspension matching the personal license action", "CDL probation for 2 years with mandatory alcohol counseling"],
      correctIndex: 1,
      explanation: "FMCSA regulations require CDL disqualification for any DUI conviction, whether the offense occurred in a commercial vehicle or a personal vehicle. A first DUI conviction in a personal pickup truck results in the same mandatory one-year CDL disqualification as a DUI in a CMV. A second DUI conviction — in any vehicle — results in lifetime CDL disqualification. Nevada DUI (NRS 484C) is triggered at 0.08% BAC for adults — a 0.09% reading constitutes a DUI violation. Nevada CDL holders must understand that off-duty behavior in personal vehicles can permanently affect their commercial driving career."
    },
    {
      question: "What must a CDL driver do at a railroad grade crossing near a Las Vegas intermodal terminal, even if no train is visible and the crossing has no active signal?",
      options: ["Slow to 15 mph and proceed if no train is visible", "Stop between 15 and 50 feet from the nearest rail, look and listen in both directions, and proceed only when safe", "CDL vehicles under 26,001 lbs are exempt from railroad crossing stopping requirements", "Only stop if the crossing has active gates or flashing lights"],
      correctIndex: 1,
      explanation: "CDL vehicles — defined as commercial motor vehicles over 26,001 lbs GVWR, vehicles carrying hazardous materials, or passenger vehicles for hire carrying 16+ passengers — must stop at all railroad grade crossings unless the crossing is posted with an 'Exempt' sign. The stop must be between 15 and 50 feet from the nearest rail. The driver must look and listen in both directions for approaching trains before proceeding. This rule applies even when the crossing has no active signals or gates, and even when no train is immediately visible, because trains travel on fixed tracks at high speed and may not be visible around curves or structures until very close. Las Vegas has numerous rail crossings near its intermodal facilities on the west side of the metro area."
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
      question: "Why are commercial vehicles prohibited from crossing Hoover Dam?",
      answer: "Hoover Dam is a critical federal infrastructure facility — a National Historic Landmark and a major power generation facility for the southwestern United States. After the September 11, 2001 attacks, federal security protocols were significantly enhanced at major infrastructure facilities, and Hoover Dam's crossing restrictions for commercial vehicles became permanent policy. The concern is both security (a large commercial vehicle could potentially be used as a weapon or carry explosive cargo without detection at the dam crossing checkpoint) and structural (the dam road was not designed for modern commercial vehicle weights and configurations). The Mike O'Callaghan–Pat Tillman Memorial Bridge, which opened in 2010 as the US-93 bypass, provides the required commercial vehicle alternative."
    },
    {
      question: "What is the DUI BAC limit for Nevada CDL holders in a commercial vehicle?",
      answer: "Nevada CDL holders operating commercial motor vehicles are subject to a 0.04% BAC DUI threshold — half the standard adult limit of 0.08%. Nevada uses DUI (Driving Under the Influence) terminology under NRS 484C. A first DUI conviction (in a CMV or personal vehicle) results in mandatory one-year CDL disqualification. If the CMV was carrying hazardous materials, the disqualification is three years for a first offense. A second DUI results in lifetime CDL disqualification. Nevada's Implied Consent law (NRS 484C.160) applies to CDL operators — refusal to submit to chemical testing triggers automatic license revocation."
    },
    {
      question: "What are the Las Vegas Strip CDL delivery restrictions?",
      answer: "Las Vegas Boulevard South (the Strip) and adjacent streets in the resort corridor are subject to timed delivery windows, truck routing restrictions, and pedestrian priority zone requirements. These restrictions are set by Clark County ordinances and individual hotel/casino property delivery protocols. CDL drivers making Strip deliveries must know their authorized delivery window time, the specific dock access route (which avoids high-pedestrian areas during peak hours), and any load and equipment restrictions at the receiving facility. The Strip's extremely high pedestrian volumes — tens of thousands of people daily near major casino intersections — require CDL drivers to exercise heightened alertness for crossing pedestrians during delivery maneuvers."
    },
    {
      question: "What NDOT oversize permits are needed for Nevada mining industry moves?",
      answer: "Nevada's large-scale open pit mining operations in Elko, Humboldt, Lander, and Pershing counties routinely require oversize and overweight permits for moving mining equipment (haul trucks, shovels, crushers, mill components) on public roads. NDOT's Permit Office issues these permits and they specify: authorized routes from origin to destination (typically via I-80 and designated state routes), travel time restrictions (often daylight hours only, no weekends for very wide loads), pilot car (escort vehicle) requirements (front escort for loads over 14 feet wide, front and rear for loads over 18 feet wide), and any necessary law enforcement escort for the widest loads. CDL drivers on mining equipment moves must carry the permit and comply with all conditions, including stopping at any restricted points identified in the permit."
    },
    {
      question: "How does US-50's isolation affect CDL operations in Nevada?",
      answer: "US-50's extreme isolation — gas stations 100+ miles apart, no cell service on most of the Nevada crossing, limited emergency services — creates specific CDL operational challenges. CDL carriers operating on US-50 must plan fuel stops carefully to ensure trucks enter each service gap with sufficient reserve fuel. Vehicle mechanical issues on US-50 may require hours for tow truck or repair service response. Drivers should carry emergency supplies (water, food, basic tools) for extended wait times. The Nevada CDL manual's guidance for remote highway operations applies directly to US-50 situations. CDL carriers should also ensure their dispatcher is aware of the driver's planned US-50 schedule so that an overdue check-in triggers a welfare check."
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Nevada?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Nevada?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Nevada DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Nevada CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Nevada DMV for available language options.",
    },
    {
      question: "How long is a Nevada CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Nevada CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Nevada CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Nevada, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Nevada DMV Practice Test", href: "/nevada-dmv-practice-test" },
    { label: "Nevada Motorcycle Practice Test", href: "/nevada-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NevadaCDLPage() {
  return <PracticeTestPage {...data} />;
}
