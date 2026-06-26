import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Oklahoma CDL Practice Test 2025 – Free OK DPS Commercial License Exam Prep",
  description:
    "Free Oklahoma CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Oklahoma DPS CDL testing, DUI 0.04% in CMV, SB 1161 + FMCSA penalty, tornado response for CDL drivers, oilfield oversize equipment permits, I-40 freight corridor.",
  alternates: { canonical: "https://caredmvprep.com/oklahoma-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/oklahoma-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Oklahoma",
  stateAbbr: "OK",
  testLabel: "CDL General Knowledge Test",
  slug: "oklahoma-cdl-practice-test",
  headline: "Oklahoma CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Oklahoma CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the Oklahoma CDL Manual. Oklahoma's Department of Public Safety (DPS) — not a traditional DMV — administers CDL testing. The 0.04% CDL DUI standard applies in a CMV. Oklahoma's oilfield industry generates large volumes of oversize equipment transportation requiring CDL overwidth permits. Tornado season creates unique safety obligations for CDL drivers on Oklahoma's open-road freight corridors.",
  basedOn: "FMCSA CDL Manual & Oklahoma DPS CDL Manual",
  about: [
    "Oklahoma CDL testing is administered by the Department of Public Safety (DPS) — Oklahoma's driver licensing authority. CDL knowledge tests (50 questions, 80% required) are available at Oklahoma DPS Driver License Examining offices statewide. CDL skills tests are administered at DPS-approved Third Party Testing sites. Oklahoma issues CDL Class A, B, and C licenses with standard FMCSA endorsements.",
    "Oklahoma-specific CDL factors: (1) Oklahoma's DUI standard for CDL holders in a CMV is 0.04% BAC — a DUI in any vehicle triggers FMCSA CDL disqualification. Oklahoma's zero-tolerance law for under-21 operators (0.00% BAC) applies to CDL holders under 21 in any vehicle. (2) SB 1161 (hands-free law, effective November 1, 2023) applies to CDL operators — FMCSA penalties up to $2,750 per violation apply in addition to Oklahoma's state fine. (3) Oklahoma's oilfield industry (the Anadarko Basin, Permian Basin extension, SCOOP/STACK plays) generates extensive oversize load movements — CDL drivers transporting oilfield equipment (well casing, tanks, separators, drilling rig components) must carry Oklahoma Department of Transportation (ODOT) oversize/overweight permits. (4) Oklahoma's Tornado Alley position creates a unique obligation for CDL drivers on the open I-40 and I-35 freight corridors: CDL drivers must know what to do when severe weather or a tornado threatens on the open road.",
  ],
  sampleQuestions: [
    {
      question: "An Oklahoma CDL driver on I-40 west of Oklahoma City is alerted by weather radio that a tornado has been confirmed on the ground moving toward the highway. The driver cannot reach an overpass or structure in time. What is the correct action?",
      options: [
        "Stay in the cab — a CMV's steel frame provides protection against tornadoes",
        "Park the truck under the nearest highway overpass and shelter in the cab",
        "Get out of the truck immediately, move away from it, find the lowest ground available (a ditch), lie flat face-down, and cover the head with arms — do NOT shelter under an overpass",
        "Accelerate to outrun the tornado — a CMV can outrun a tornado on a straight Oklahoma highway",
      ],
      correctIndex: 2,
      explanation:
        "For a CDL driver with a tornado approaching and no time to reach shelter: (1) the CMV cab provides NO tornado protection — the high-profile box creates suction and the cab can be rolled; (2) the overpass is DEADLY — the venturi effect under an overpass accelerates wind to lethal speeds and flying debris concentrates in the narrow space; (3) the correct action is to exit the truck, move away from it (the truck can blow over onto the driver), find the lowest available ground — a roadside ditch is ideal — lie flat face-down, and cover the head and neck with both arms. This is the National Weather Service guidance for anyone on the open road during a tornado. Oklahoma DPS CDL materials address tornado emergencies because Oklahoma's Tornado Alley position makes this a realistic CDL operating scenario.",
    },
    {
      question: "Oklahoma's oilfield industry requires oversize load movements for equipment like well casing, tanks, and drilling rig components. Who issues oversize/overweight (OS/OW) permits for Oklahoma CDL drivers transporting this equipment?",
      options: [
        "The Oklahoma Corporation Commission (OCC) issues all oilfield transport permits in Oklahoma",
        "Oklahoma Department of Transportation (ODOT) issues OS/OW permits for commercial vehicle loads exceeding standard legal dimensions on Oklahoma roads",
        "Oklahoma oilfield equipment is exempt from OS/OW permits — the oilfield industry has a blanket exemption under Oklahoma law",
        "Individual Oklahoma counties issue oversize permits for oilfield equipment movements on county roads",
      ],
      correctIndex: 1,
      explanation:
        "Oklahoma Department of Transportation (ODOT) issues oversize/overweight (OS/OW) permits for CDL vehicles transporting loads that exceed standard legal limits: 8'6\" wide, 13'6\" tall, 75 feet long (combination), or 80,000 lbs GCVW. Oklahoma's oilfield equipment transport commonly requires permits for: wide-load well production tanks; long-reach drilling rig components; overheight oilfield separators and skid units; and overweight fracking water trucks. Permit requirements include approved routes, time windows (often daylight hours only, no weekends for some wide loads), and escort vehicle requirements based on load dimensions. Oklahoma county roads (used for oilfield lease access) have additional restrictions — some rural Oklahoma county roads have weight postings significantly below federal legal limits.",
    },
    {
      question: "Oklahoma SB 1161 (hands-free, November 2023) applies to CDL operators. What documentation must CDL drivers maintain regarding Hours of Service (HOS) compliance in Oklahoma?",
      options: [
        "Oklahoma has no HOS documentation requirement for intrastate operations",
        "CDL drivers must maintain electronic logging device (ELD) records or paper logs depending on FMCSA ELD mandate status — accessible for the current day and 7 prior days",
        "CDL drivers only need HOS records when crossing state lines",
        "HOS records are only required for CDL Class A vehicles — Class B and C are exempt",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA's ELD mandate (49 CFR 395.8, 395.15) requires most CDL drivers operating in interstate commerce to use an Electronic Logging Device (ELD) to record Hours of Service. Drivers must have: ELD records for the current 24-hour period; HOS records for the previous 7 consecutive days; and the ability to display records to authorized inspectors. Certain exemptions apply: short-haul operations (within 150 air miles, returning to home terminal daily, no more than 12 hours on duty); vehicles manufactured before 2000; driveaway-towaway operations. Oklahoma intrastate CDL operations that qualify for state exemptions may use paper logs, but most interstate Oklahoma freight operations require full ELD compliance.",
    },
    {
      question: "Oklahoma's I-40 corridor is one of the major U.S. east-west freight routes. What specific CDL operational consideration affects this corridor?",
      options: [
        "I-40 has a blanket 65 mph maximum speed limit for all CDL vehicles in Oklahoma",
        "Oklahoma's open-range cattle country on either side of I-40 creates livestock crossing hazards — cattle guards on county road approach ramps can also affect wide-load oversize movements",
        "I-40 CDL vehicles must stop for weighing at every county border — Oklahoma has the highest frequency of CDL weigh station requirements in the U.S.",
        "I-40 requires a special Oklahoma turnpike CDL permit for all commercial vehicles in Oklahoma",
      ],
      correctIndex: 1,
      explanation:
        "Oklahoma's I-40 corridor crosses open-range cattle country in western Oklahoma and the Ouachita Mountain foothills in the east. CDL-specific considerations on I-40: (1) livestock crossing hazards — cattle on the road from open-range areas adjacent to the interstate are an active hazard, particularly at dawn and dusk; (2) cattle guards on county road approaches to I-40 interchanges affect oversize load movement planning; (3) strong crosswinds on the western Oklahoma open plain section can significantly affect high-profile CMVs (empty trailers, high-cube containers, flatbeds with wind-catching cargo); (4) extended distances between fuel stations in western Oklahoma require route planning for diesel supply; (5) Oklahoma has designated truck weigh stations along I-40 but not at county borders.",
    },
    {
      question: "Under FMCSA regulations, when is a CDL driver required to stop at a weigh station?",
      options: [
        "Never — weigh stations are operated by states and CDL drivers have discretion about stopping",
        "Only when the vehicle exceeds 80,000 lbs GCVW",
        "CDL drivers must stop at open and operating weigh stations unless directed by signage or officials to bypass — failing to stop at an open weigh station is a violation",
        "Only for Class A CDL vehicles — Class B and C are exempt from weigh station stops",
      ],
      correctIndex: 2,
      explanation:
        "CDL drivers must stop at all open and operating weigh stations unless directed otherwise by posted signage (bypass signs) or officials. Oklahoma ODOT and Oklahoma Highway Patrol operate weigh stations on major freight routes including I-40, I-35, I-44, and US 412. A CMV that bypasses an open weigh station without authorization is subject to citation — the driver and carrier can both face penalties. Weight and inspection stations may also conduct Level I-VI FMCSA roadside inspections. Weigh-in-motion scales before weigh stations pre-screen vehicles — some stations display bypass signals if weight is within legal limits and no safety concern is flagged.",
    },
    {
      question: "A CDL driver in Oklahoma discovers during a pre-trip inspection that one of the trailer's running lights is not functioning. Is this an out-of-service condition?",
      options: [
        "Yes — any lighting defect is an automatic out-of-service condition",
        "Only if it is a brake light or turn signal — running lights are not safety-critical",
        "Non-functioning running lights are a defect that must be repaired, but whether it is OOS depends on which specific light has failed — brake lights, turn signals, and clearance lights are required equipment; a single non-critical marker light may not be OOS",
        "Running light defects are not DVIR-reportable — only mechanical defects must be noted",
      ],
      correctIndex: 2,
      explanation:
        "Lighting defect severity varies. Brake lights and turn signals are safety-critical and their failure can be an out-of-service condition. Clearance lights (identifying the vehicle's height and width) are required on vehicles over 80 inches wide. Running/marker lights provide visibility identification but a single non-functional marker light may not be an OOS condition on its own. The North American Standard OOS Criteria define specific lighting failures that require OOS placement. Any lighting defect — OOS or not — must be noted on the DVIR for repair. FMCSA Level I inspections examine all required lighting and will record any deficient lights regardless of severity.",
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
      question: "How many questions are on the Oklahoma CDL General Knowledge test?",
      answer:
        "The Oklahoma CDL General Knowledge test has 50 questions requiring 40 correct (80%) to pass. Oklahoma endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), Air Brakes (25 questions). All require 80%. Contact Oklahoma DPS for current testing fees.",
    },
    {
      question: "What is Oklahoma's CDL DUI standard?",
      answer:
        "Oklahoma CDL holders in a CMV face the federal 0.04% BAC DUI limit. Oklahoma's zero-tolerance law (0.00% BAC) for under-21 operators extends to CDL holders under 21 — any detectable alcohol is a DUI. A DUI conviction in any vehicle triggers FMCSA CDL disqualification: 1 year for first offense, lifetime for second. DPS reports all DUI convictions to FMCSA within 10 days.",
    },
    {
      question: "What should Oklahoma CDL drivers do when a tornado threatens on the open road?",
      answer:
        "Oklahoma DPS tornado guidance for CDL drivers: (1) NEVER shelter in the CMV cab — the vehicle provides no tornado protection and can roll; (2) NEVER shelter under an overpass — venturi effect is lethal; (3) exit the vehicle immediately; (4) move away from the truck; (5) find the lowest ground — roadside ditch, depression, culvert; (6) lie flat face-down; (7) cover head and neck with arms. Prevention: monitor NOAA weather radio during Oklahoma spring/fall; know the sky indicators of tornado formation (wall clouds, lowering funnels, green-hued sky).",
    },
    {
      question: "How do Oklahoma oilfield operations affect CDL permit requirements?",
      answer:
        "Oklahoma oilfield equipment transport commonly requires ODOT OS/OW permits for: overwidth well production equipment (tanks, separators, skid packages); overheight drilling rig sections; overweight crude oil transport (some frac water trucks with specialized configurations); long-reach reach-boom equipment. Permits specify approved routes, time windows (daylight, no weekends for some wide loads), and escort vehicle requirements. Many Oklahoma county lease roads have weight restrictions significantly below federal limits — CDL drivers accessing oilfield leases must know county road weight postings.",
    },
    {
      question: "Where can Oklahoma CDL applicants take skills tests?",
      answer:
        "Oklahoma CDL skills tests are administered at DPS-approved Third Party Testing sites. Knowledge tests are available at Oklahoma DPS Driver License Examining offices statewide. Oklahoma has CDL testing in Oklahoma City, Tulsa, Lawton, Enid, Muskogee, and other cities. Contact DPS for current approved testing site lists and scheduling.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Oklahoma?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Oklahoma?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Oklahoma DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Oklahoma CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Oklahoma DMV for available language options.",
    },
    {
      question: "How long is a Oklahoma CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Oklahoma CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Oklahoma CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Oklahoma, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "OK Driver's License", href: "/oklahoma-dmv-practice-test" },
    { label: "OK Motorcycle Test", href: "/oklahoma-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OklahomaCDLPage() {
  return <PracticeTestPage {...data} />;
}
