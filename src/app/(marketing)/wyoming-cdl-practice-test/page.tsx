import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Wyoming CDL Practice Test 2025 – Free WYDOT Commercial License Exam Prep",
  description:
    "Prepare for your Wyoming CDL knowledge test with free practice questions covering I-80 High-Profile Vehicle Restriction compliance, WYDOT 511 monitoring requirements, Yellowstone CDL access, coal and gas oversize permits, open range livestock risk, and WYDOT CDL requirements.",
  alternates: { canonical: "https://caredmvprep.com/wyoming-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/wyoming-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Wyoming",
  stateAbbr: "WY",
  testLabel: "CDL Practice Test",
  slug: "wyoming-cdl-practice-test",
  headline: "Wyoming CDL Practice Test 2025",
  intro:
    "Wyoming Department of Transportation (WYDOT) Driver Services issues Commercial Driver's Licenses and administers CDL knowledge and skills testing. This free practice test covers Wyoming-specific CDL topics: I-80 wind restriction compliance for high-profile CDL vehicles, mandatory WYDOT 511 monitoring on I-80, Yellowstone National Park CDL designated access routes, coal and gas industry oversize permits from WYDOT, open range livestock collision risk management, and the 0.04% CMV BAC threshold.",
  basedOn: "Wyoming CDL Driver's Manual (WYDOT Driver Services)",
  about: [
    "Wyoming Department of Transportation (WYDOT) Driver Services issues Commercial Driver's Licenses and administers all CDL knowledge and skills testing in Wyoming. CDL applicants must pass the General Knowledge test plus applicable endorsement tests. The BAC limit for CDL holders operating a commercial motor vehicle is 0.04% under federal FMCSA regulations. Wyoming's primary CDL freight corridors are I-80 (east-west from Nebraska to Utah), I-25 (north-south from Colorado to Montana via Cheyenne and Casper), and I-90 (east-west through Gillette and Sheridan). All three have 80 mph rural speed limits but are subject to Wyoming's extreme wind and winter conditions.",
    "Wyoming CDL drivers face wind-related challenges that are unlike those in any other state. I-80's High-Profile Vehicle Restriction specifically targets CDL vehicles — combination trucks, box vans, refrigerated trailers, flatbeds with tall loads, and tankers are among the most common vehicle types restricted when WYDOT issues a High-Profile Vehicle Restriction. CDL drivers are required to monitor WYDOT 511 before and during I-80 trips, and must exit immediately when restrictions are issued. WYDOT 511 compliance is a professional expectation for Wyoming CDL drivers. Additional Wyoming CDL topics include: Yellowstone National Park supply truck routing through designated CDL access roads (not through the main visitor entrance in the same way as personal vehicles in some cases); coal and gas industry oversize permits from WYDOT for energy sector loads; and open range livestock awareness on the vast Wyoming rural highway network.",
  ],
  sampleQuestions: [
    {
      question:
        "WYDOT issues a High-Profile Vehicle Restriction on I-80 between Laramie and Rawlins. A CDL driver in a loaded refrigerated trailer combination is approaching. What must the driver do?",
      options: [
        "Reduce speed to 45 mph and proceed — the restriction is advisory for CDL vehicles with experienced drivers",
        "Exit the Interstate immediately at the next exit and wait for WYDOT to lift the restriction",
        "Pull to the right shoulder and wait with hazard lights activated until the restriction lifts",
        "CDL vehicles with air ride suspension are exempt from High-Profile Vehicle Restrictions",
      ],
      correctIndex: 1,
      explanation:
        "A High-Profile Vehicle Restriction requires vehicles 6 feet or wider to exit the Interstate immediately. A loaded refrigerated trailer combination vehicle is far wider than 6 feet and is a prime example of the high-profile vehicles the restriction is designed for. CDL drivers must exit at the nearest exit when a restriction is issued — there is no exception for experienced drivers, air suspension, or load type. Stopping on the Interstate shoulder is not an acceptable response — CDL vehicles must exit to a safe staging area. WYDOT 511 can inform drivers of where the nearest staging area or truck stop is available.",
    },
    {
      question:
        "A CDL carrier dispatches a driver for an I-80 run from Cheyenne to Evanston on a December morning. Before departure, what is the driver's obligation regarding WYDOT 511?",
      options: [
        "Checking 511 is optional — experienced CDL drivers rely on personal weather assessment",
        "The driver must check WYDOT 511 for current road conditions, wind restriction status, and any closures before departing, and monitor it during the trip",
        "Only the carrier dispatcher is required to check 511 — the driver is responsible for driving, not weather monitoring",
        "WYDOT 511 only applies to I-80 between Rawlins and Laramie — other I-80 sections need no monitoring",
      ],
      correctIndex: 1,
      explanation:
        "CDL drivers operating on Wyoming I-80 are professionally obligated to monitor WYDOT 511 before departure and during the trip. Federal FMCSA regulations require CDL drivers to have knowledge of road conditions before operating a CMV. Wyoming's I-80 conditions can change rapidly — a trip that begins in clear conditions in Cheyenne may encounter wind restrictions or a road closure by Rock Springs or Rawlins. CDL carriers should have established protocols for 511 monitoring, and drivers should check the system before every I-80 departure and at regular intervals during the trip.",
    },
    {
      question:
        "A CDL food supply truck is delivering to lodges inside Yellowstone National Park. How should the carrier plan the route?",
      options: [
        "All routes inside Yellowstone are equally accessible to CDL delivery trucks",
        "Use designated CDL-approved access routes and supply roads — commercial trucks use specific entry points and internal roads, not all visitor access routes",
        "CDL vehicles are prohibited from all national park roads and must use helicopter delivery",
        "CDL vehicles may use any Yellowstone road during night hours (2 AM–6 AM) to avoid visitor conflicts",
      ],
      correctIndex: 1,
      explanation:
        "Commercial delivery trucks serving Yellowstone National Park use designated access routes and supply roads — not necessarily the same routes as personal visitor vehicles. The park has specific commercial vehicle routing to minimize conflicts with visitor traffic and to use roads with appropriate dimensions for commercial vehicles. CDL carriers serving Yellowstone lodges, concessions, and park facilities should contact the National Park Service's Yellowstone logistics contacts to verify current commercial vehicle routing, height restrictions at specific structures, and delivery time windows.",
    },
    {
      question:
        "A CDL driver operating on a Wyoming rural state highway in the Powder River Basin strikes a steer that was standing in the road. Wyoming's open range law says what about the driver's liability?",
      options: [
        "The rancher is always liable when livestock cause a vehicle accident",
        "The driver is never liable for livestock on public roads in Wyoming",
        "In open range territory, the rancher is not required to fence livestock away from roads — the driver may bear some financial liability for damage to the animal",
        "Wyoming has no open range law — all livestock must be fenced from public roads statewide",
      ],
      correctIndex: 2,
      explanation:
        "Open range law in Wyoming does not require ranchers to fence livestock away from public roads. In an open range area, a driver who strikes livestock may bear financial liability for the animal's injury or death. For a CDL carrier, this creates significant potential liability when operating in Wyoming's vast rural open range territory — the Powder River Basin, the Big Horn Basin, the Wind River Basin, and most other rural areas of Wyoming. CDL drivers must scan vigilantly for livestock at all times on Wyoming rural highways, especially at night when cattle and horses are nearly invisible in headlights.",
    },
    {
      question:
        "A CDL carrier is transporting oversize drilling equipment from Casper to a gas well in the Jonah Field area of western Wyoming. What permit must the carrier obtain?",
      options: [
        "No permit is needed for energy industry equipment in Wyoming",
        "An oversize/overweight permit from WYDOT specifying approved routes, travel times, and escort vehicle requirements",
        "A federal BLM permit since the equipment is destined for a federal oil and gas lease area",
        "A Wyoming Department of Environmental Quality transport permit for oilfield equipment",
      ],
      correctIndex: 1,
      explanation:
        "All oversize or overweight loads on Wyoming public highways require a permit from WYDOT. This applies to oil and gas industry equipment, wind turbine components, mining machinery, and any other load exceeding standard legal dimensions or weight. WYDOT oversize permits specify: the approved route (which must accommodate the load's dimensions), time windows for movement (often daylight hours, may exclude weekends for very wide loads), escort vehicle requirements, maximum permitted speeds, and any special conditions. CDL carriers serving Wyoming's energy sector should have a working relationship with WYDOT's permit office for regular load movements.",
    },
    {
      question:
        "Under federal FMCSA regulations, what is the BAC limit for a CDL holder operating a commercial motor vehicle in Wyoming?",
      options: [
        "0.08% — Wyoming's standard adult DUI threshold",
        "0.06% — a reduced standard for professional drivers",
        "0.04% — the federal FMCSA CMV standard",
        "0.02% — Wyoming's under-21 threshold",
      ],
      correctIndex: 2,
      explanation:
        "Federal FMCSA regulations set the BAC limit at 0.04% for CDL holders operating a commercial motor vehicle — this federal standard applies in Wyoming as in all other states. A CDL holder with a BAC of 0.04% or higher in a CMV faces CDL disqualification under federal law, even if the BAC is below Wyoming's civilian DUI threshold of 0.08%. Wyoming's implied consent law also applies to CDL holders — refusing a chemical test triggers automatic license suspension separate from any criminal charges.",
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
      question: "How does WYDOT's I-80 wind restriction system specifically affect CDL vehicles?",
      answer:
        "CDL combination vehicles — semi-trucks with trailers, especially refrigerated trailers, flatbeds with tall loads, and box vans — are the primary target of WYDOT's High-Profile Vehicle Restriction. These vehicles are typically 8'6\" or wider and well above the 6-foot threshold that triggers the restriction. When WYDOT issues a High-Profile Vehicle Restriction, CDL drivers must immediately exit I-80 at the nearest exit. Carriers must have protocols for drivers to shelter at truck stops (located at major I-80 exits in Wyoming) and wait for WYDOT to lift the restriction. I-80 restrictions in the Elk Mountain area can last several hours, so carrier scheduling must account for potential waits.",
    },
    {
      question: "What are WYDOT 511 obligations for CDL drivers on Wyoming's I-80?",
      answer:
        "CDL drivers operating on Wyoming I-80 are professionally obligated to: check WYDOT 511 for current road conditions and wind restriction status before every departure; monitor variable message signs on the Interstate for real-time restriction updates during the trip; comply immediately with all wind restriction and road closure orders; report road condition issues to WYDOT via the 511 system or dispatch; and communicate current conditions to their carrier dispatcher. FMCSA regulations require CDL drivers to know road conditions before operating — I-80's frequent wind events make 511 monitoring a fundamental professional practice in Wyoming.",
    },
    {
      question: "How do CDL carriers access Yellowstone National Park for supply deliveries?",
      answer:
        "CDL commercial supply vehicles serving Yellowstone National Park (lodges, concessions, park facilities) use designated commercial vehicle access routes and delivery protocols coordinated with the National Park Service. Commercial trucks typically use specific entrance gates and internal roads that can accommodate their vehicle dimensions. Some roads within the park have height and weight restrictions. Carriers should contact the park's logistics and commercial vehicle contacts well in advance of scheduled deliveries to verify current routing, dimensional restrictions, and delivery time windows. Advance planning is essential — standard GPS navigation may route CDL vehicles onto inappropriate park roads.",
    },
    {
      question: "What oversize permit process applies to Wyoming's energy industry CDL operations?",
      answer:
        "Wyoming's oil, gas, and coal industries generate frequent oversize and overweight load movements for drilling equipment, wind turbine components, and mining machinery. All such loads require WYDOT oversize/overweight permits issued by the WYDOT Permits Office. Permits specify: approved routes (verified for the load's height, width, and weight), movement time windows (typically daylight hours only, with restrictions during peak commute periods and weekends for very wide loads), escort vehicle requirements (pilot cars and/or law enforcement escorts for the widest loads), and maximum permitted speeds. Carriers regularly handling energy sector loads should maintain current relationships with WYDOT's permits office to expedite frequent permit applications.",
    },
    {
      question: "What CDL endorsements are most relevant for Wyoming commercial operations?",
      answer:
        "Wyoming's economy drives demand for specific CDL endorsements. The Combination (Class A) CDL covers I-80, I-25, and I-90 freight operations. The Tank (N) endorsement is essential for crude oil transport from Wyoming's Powder River Basin and Jonah Field energy operations. The HazMat (H) endorsement covers hazardous material transport in the energy sector. The Doubles/Triples (T) endorsement is used for long-haul freight on Wyoming's I-80 corridor. The Passenger (P) endorsement covers tourism transport for Yellowstone and Grand Teton National Park visitors. Oversize load transport (energy industry, wind turbine components) requires compliance with WYDOT permit conditions rather than a separate CDL endorsement.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Wyoming?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Wyoming?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Wyoming DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Wyoming CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Wyoming DMV for available language options.",
    },
    {
      question: "How long is a Wyoming CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Wyoming CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Wyoming CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Wyoming, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Wyoming DMV Practice Test", href: "/wyoming-dmv-practice-test" },
    { label: "Wyoming Motorcycle Practice Test", href: "/wyoming-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function WyomingCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
