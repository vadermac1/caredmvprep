import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Idaho CDL Practice Test 2025 – Free ID Commercial Driver's License Prep",
  description:
    "Prepare for your Idaho CDL knowledge test with free practice questions covering agricultural OS/OW permits, BNSF railroad crossings, Salmon River Canyon weight-posted bridges, I-84 corridor rules, and ITD CDL requirements.",
  alternates: { canonical: "https://caredmvprep.com/idaho-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/idaho-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Idaho",
  stateAbbr: "ID",
  testLabel: "CDL Practice Test",
  slug: "idaho-cdl-practice-test",
  headline: "Idaho CDL Practice Test 2025",
  intro:
    "Idaho CDL applicants must pass FMCSA-compliant knowledge tests administered by the Idaho Transportation Department (ITD), Division of Motor Vehicles. Idaho CDL operations include unique considerations: agricultural OS/OW permit requirements for oversized farm equipment during harvest, BNSF railroad crossings in southern Idaho, weight-posted bridges on US-95 in the Salmon River Canyon, and I-84 corridor operations from Twin Falls to Boise. This free practice test covers those Idaho-specific CDL topics.",
  basedOn: "FMCSA CDL Manual – Idaho ITD CDL Supplement",
  about: [
    "Idaho CDLs are issued by the Idaho Transportation Department (ITD), Division of Motor Vehicles. CDL knowledge tests follow FMCSA requirements with an 80% passing score required. Idaho's CDL environment is heavily influenced by the state's agricultural economy — the potato industry, grain operations, and dairy farms generate significant commercial truck traffic, particularly in the Snake River Plain corridor along I-84 between Twin Falls and Boise. Agricultural oversize/overweight (OS/OW) permit requirements during potato and grain harvest (August–October) are an important CDL operational consideration in Idaho. BNSF railroad grade crossings in southern Idaho near agricultural commodity loading facilities are locations where CDL procedures must be followed carefully.",
    "Idaho CDL drivers also face mountain route challenges. US-95 through the Salmon River Canyon has weight-posted bridges that restrict certain CDL vehicle configurations. Mountain passes on US-12 (Lolo Pass) and US-95 (White Bird Hill) require tire chain compliance in winter conditions. The FMCSA 0.04% BAC limit applies to all Idaho CDL drivers operating a CMV. Idaho's HB 236 hands-free law (effective July 1, 2024) also applies to CDL drivers — CMV operators may not hold a wireless device while driving in Idaho.",
  ],
  sampleQuestions: [
    {
      question:
        "Which agency issues Commercial Driver's Licenses in Idaho?",
      options: [
        "Idaho Department of Motor Vehicles (DMV)",
        "Idaho Transportation Department (ITD), Division of Motor Vehicles",
        "Idaho State Police Commercial Vehicle Enforcement",
        "Idaho Secretary of State Driver Services",
      ],
      correctIndex: 1,
      explanation:
        "Idaho CDLs are issued by the Idaho Transportation Department (ITD), Division of Motor Vehicles. Idaho does not have a standalone DMV department — driver licensing, including CDLs, is administered through ITD. CDL applicants must visit an ITD driver's license office to take knowledge tests, submit a DOT medical certificate, and complete the CDL skills test. ITD offices are located in Boise, Twin Falls, Idaho Falls, Coeur d'Alene, and other cities throughout the state.",
    },
    {
      question:
        "What is the FMCSA blood alcohol concentration (BAC) limit for an Idaho CDL driver operating a CMV?",
      options: ["0.08%", "0.02%", "0.04%", "0.00%"],
      correctIndex: 2,
      explanation:
        "The FMCSA sets a 0.04% BAC limit for commercial motor vehicle operators — half the standard 0.08% limit for non-commercial drivers. This applies to Idaho CDL drivers whenever they are operating a CMV. A CDL driver who tests at 0.04% BAC or higher is placed out of service immediately and faces CDL disqualification proceedings. Idaho also prohibits consuming alcohol within 4 hours before operating a CMV.",
    },
    {
      question:
        "An Idaho CDL driver operating an oversized agricultural vehicle during potato harvest must have which document to legally operate on designated routes?",
      options: [
        "A special agricultural CDL endorsement from ITD",
        "An oversize/overweight (OS/OW) permit from the Idaho Transportation Department",
        "A USDA agricultural transport license",
        "A county road use agreement from the local county commissioner",
      ],
      correctIndex: 1,
      explanation:
        "Agricultural vehicles that exceed standard legal size or weight limits in Idaho must carry an oversize/overweight (OS/OW) permit issued by the Idaho Transportation Department. During potato harvest (August–October), large potato harvesters, grain trucks, and transport equipment frequently exceed standard limits and must operate under ITD OS/OW permits on designated routes. CDL drivers operating these vehicles must carry the permit in the vehicle and understand the route restrictions, travel hours, and pilot car requirements specified in the permit.",
    },
    {
      question:
        "US-95 through the Salmon River Canyon has weight-posted bridges. What must a CDL driver do when approaching a weight-posted bridge?",
      options: [
        "Proceed at reduced speed — weight posting is advisory only",
        "Stop the CMV and check the gross vehicle weight against the posted bridge weight limit before crossing",
        "Weight restrictions on Idaho bridges apply only to 5-axle semi-trucks",
        "CDL vehicles are exempt from bridge weight postings because they are federally regulated",
      ],
      correctIndex: 1,
      explanation:
        "Weight-posted bridges display a legal weight limit that all vehicles must comply with. CDL drivers approaching a weight-posted bridge on US-95 or any other Idaho road must know the gross vehicle weight of their CMV and compare it to the posted limit before crossing. If the CMV exceeds the posted weight limit, the driver must find an alternate route. Weight-posted bridges are legally enforceable — crossing with an overweight vehicle is a violation and creates structural risk to the bridge. Bridge weight postings in the Salmon River Canyon reflect the age and condition of those specific structures.",
    },
    {
      question:
        "When a CDL driver approaches a BNSF railroad grade crossing in southern Idaho, what is the required procedure for a vehicle carrying hazardous materials?",
      options: [
        "Slow to 15 mph and proceed through if no train is visible",
        "Stop within 50 feet but not less than 15 feet from the nearest rail, look and listen, then proceed when safe",
        "Hazmat vehicles must use a designated railroad crossing bypass route",
        "Stop only when the automatic gate is in the lowered position",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA regulations require CDL drivers transporting hazardous materials to stop at all railroad crossings, regardless of whether gates are up, lights are flashing, or a train is visible. The stop must be within 50 feet but not less than 15 feet from the nearest rail. The driver must look and listen in both directions before proceeding. BNSF operates active freight lines with grade crossings near agricultural commodity loading facilities in the Snake River Plain of southern Idaho, where CDL hazmat vehicles frequently operate.",
    },
    {
      question:
        "What winter CDL requirement applies on Idaho mountain passes such as White Bird Hill on US-95 and Lolo Pass on US-12?",
      options: [
        "CDL vehicles must reduce speed to 15 mph on all mountain passes in winter",
        "CDL drivers must carry and use tire chains when required by ITD or posted chain requirement signs",
        "CDL vehicles are prohibited from mountain passes from November through March",
        "Only Class A CDL vehicles need chains — Class B and C are exempt",
      ],
      correctIndex: 1,
      explanation:
        "Idaho requires tire chains on certain mountain routes when winter conditions make them necessary. Chain requirement signs on routes like White Bird Hill (US-95) and Lolo Pass (US-12) indicate when chains must be installed. CDL drivers must carry chains appropriate for their vehicle type and know how to install them. Failing to comply with a chain requirement is a traffic violation and creates serious safety risks on steep icy grades. Chain requirement conditions can change rapidly and CDL drivers should monitor Idaho 511 road conditions before and during mountain travel.",
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
      question: "What agency issues CDLs in Idaho?",
      answer:
        "Idaho CDLs are issued by the Idaho Transportation Department (ITD), Division of Motor Vehicles. Idaho does not have a standalone DMV — all driver licensing is administered through ITD. CDL applicants must visit an ITD driver's license office to take the required knowledge tests, submit a current DOT medical certificate, and schedule a CDL skills test with an ITD examiner or approved third-party tester. ITD offices are located in Boise, Twin Falls, Idaho Falls, Pocatello, Lewiston, Coeur d'Alene, and other communities.",
    },
    {
      question: "What CDL knowledge tests are required in Idaho?",
      answer:
        "All Idaho CDL applicants must pass the General Knowledge test. Additional tests are required based on the license class and endorsements: Combination Vehicles (Class A), Air Brakes (if the vehicle has air brakes), Passenger Transport, Hazardous Materials (plus TSA security threat assessment), Tank Vehicles, Doubles/Triples, and School Bus. Each test requires a minimum score of 80%. Idaho CDL applicants should also understand Idaho-specific operational requirements including OS/OW permit procedures for agricultural operations.",
    },
    {
      question: "What is the BAC limit for CDL drivers in Idaho?",
      answer:
        "The FMCSA BAC limit of 0.04% applies to CDL drivers operating a CMV in Idaho. Idaho also prohibits consuming alcohol within 4 hours before operating a CMV. A CDL driver who tests at 0.04% BAC or above is placed out of service and faces CDL disqualification. Idaho's standard DUI limit of 0.08% applies to CDL holders driving personal (non-CMV) vehicles. The under-21 DUI limit of 0.02% applies to CDL holders under 21.",
    },
    {
      question: "What are agricultural OS/OW permits and when are they needed in Idaho?",
      answer:
        "Oversize/overweight (OS/OW) permits from the Idaho Transportation Department are required when a vehicle exceeds standard legal size or weight limits. In Idaho's agricultural sector — particularly during potato and grain harvest from August through October — large farm equipment and loaded grain/potato trucks frequently exceed legal limits on specific routes. CDL drivers must obtain the appropriate OS/OW permit before operating oversize or overweight on Idaho roads, carry the permit in the vehicle, and comply with all route restrictions, travel time limitations, and pilot car requirements specified in the permit.",
    },
    {
      question: "What I-84 corridor CDL considerations are specific to Idaho?",
      answer:
        "I-84 in southern Idaho runs from the Oregon border through Twin Falls to Boise and is Idaho's primary freight corridor. CDL considerations on this route include: weigh stations at the Oregon border and in Canyon County near Boise; agricultural oversize and overweight loads common during harvest season; dust visibility hazards during potato and grain harvest operations adjacent to the interstate; crosswind exposure across the Snake River Plain; and winter ice conditions on elevated sections over the Snake River. CDL drivers should monitor Idaho 511 (Idaho road conditions) for I-84 conditions.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Idaho?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Idaho?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Idaho DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Idaho CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Idaho DMV for available language options.",
    },
    {
      question: "How long is a Idaho CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Idaho CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Idaho CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Idaho, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Idaho DMV Practice Test", href: "/idaho-dmv-practice-test" },
    { label: "Idaho Motorcycle Practice Test", href: "/idaho-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function IdahoCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
