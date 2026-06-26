import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Kansas CDL Practice Test 2025 – Free KS Commercial Driver's License Prep",
  description:
    "Prepare for your Kansas CDL knowledge test with free practice questions covering I-70 crosswind advisories for CDL vehicles, Kansas Turnpike toll procedures, grain elevator access weight limits, seasonal overweight permits, and KDOT requirements.",
  alternates: { canonical: "https://caredmvprep.com/kansas-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/kansas-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Kansas",
  stateAbbr: "KS",
  testLabel: "CDL Practice Test",
  slug: "kansas-cdl-practice-test",
  headline: "Kansas CDL Practice Test 2025",
  intro:
    "Kansas CDL applicants must pass FMCSA-compliant knowledge tests administered by the Kansas Department of Revenue (DOR), Division of Vehicles. Kansas CDL operations include critical considerations: I-70 crosswind advisories specifically targeting high-profile CMVs, Kansas Turnpike (KTA) CDL toll billing procedures, grain elevator access road weight limits, and KDOT seasonal overweight grain permits. This free practice test covers Kansas-specific CDL topics.",
  basedOn: "FMCSA CDL Manual – Kansas DOR CDL Supplement",
  about: [
    "Kansas CDLs are issued by the Kansas Department of Revenue (DOR), Division of Vehicles — not a DMV. CDL knowledge tests follow FMCSA requirements with an 80% passing score required. Kansas CDL operations are profoundly shaped by the state's agricultural economy and its position as a major national freight corridor. I-70 through Kansas is one of the nation's busiest east-west commercial truck routes, and its notorious crosswind conditions — sustained 30–50 mph winds — create specific operational challenges for high-profile CMVs including empty trailers, box trucks, and RV haulers. KDOT issues crosswind advisories with specific wind speed thresholds at which high-profile vehicles are restricted from I-70.",
    "Kansas Turnpike Authority (KTA) operates tolled sections of I-335 and portions of I-70 near Wichita. CDL drivers on KTA routes must understand commercial vehicle toll rates and billing procedures, which differ from passenger car tolls. Kansas KDOT's seasonal overweight grain permit system allows grain and livestock haulers to operate above standard weight limits during designated harvest seasons on designated routes — a critical benefit for CDL drivers serving Kansas's wheat (June harvest) and corn/soybean (October harvest) industries. Grain elevator access roads throughout rural Kansas often have posted weight limits that CDL drivers must check before entry.",
  ],
  sampleQuestions: [
    {
      question:
        "KDOT issues crosswind advisories for I-70 specifically targeting which type of CDL vehicles?",
      options: [
        "All CDL vehicles must stop when KDOT crosswind advisories are issued",
        "High-profile CMVs including empty trailers, box trucks, enclosed cargo vehicles, and similar vehicles with large surface areas",
        "Only vehicles over 80,000 lbs GVWR face crosswind restrictions on I-70",
        "Crosswind advisories in Kansas are advisory only and carry no legal weight for CDL drivers",
      ],
      correctIndex: 1,
      explanation:
        "KDOT's crosswind advisories on I-70 specifically target high-profile commercial motor vehicles — those with large surface areas that catch wind, including empty or lightly loaded enclosed trailers, box trucks, RV haulers, and similar configurations. These vehicles are at highest risk of being pushed off the road by sustained 30–50 mph crosswinds. KDOT can issue restrictions at specific wind speed thresholds that legally prohibit high-profile vehicles from I-70 until conditions improve. CDL drivers must monitor KDOT's 511 road condition service before and during I-70 travel in windy conditions.",
    },
    {
      question:
        "What is the FMCSA blood alcohol concentration (BAC) limit for a Kansas CDL driver operating a CMV?",
      options: ["0.08%", "0.02%", "0.04%", "0.00%"],
      correctIndex: 2,
      explanation:
        "The FMCSA sets a 0.04% BAC limit for CDL drivers operating a commercial motor vehicle. This is half the standard 0.08% DUI limit for non-commercial drivers in Kansas. The 0.04% limit applies whenever the CDL holder is behind the wheel of a CMV, regardless of the distance traveled or time of day. A Kansas CDL driver who tests at 0.04% BAC or higher is placed out of service immediately and faces CDL disqualification proceedings. Kansas uses DUI terminology for all impaired driving offenses.",
    },
    {
      question:
        "Which agency issues CDLs in Kansas?",
      options: [
        "Kansas Department of Motor Vehicles (DMV)",
        "Kansas Department of Transportation (KDOT)",
        "Kansas Department of Revenue (DOR), Division of Vehicles",
        "Kansas Highway Patrol Commercial Vehicle Division",
      ],
      correctIndex: 2,
      explanation:
        "Kansas CDLs are issued by the Department of Revenue (DOR), Division of Vehicles. Kansas does not have a DMV — all driver licensing is administered through DOR. CDL applicants must visit a Kansas DOR office to take knowledge tests, submit a DOT medical certificate, and complete the CDL skills test with an approved examiner. DOR offices are located throughout Kansas.",
    },
    {
      question:
        "A CDL driver operating a grain truck on a Kansas county road approaches a grain elevator. What must the driver check before proceeding down the elevator access road?",
      options: [
        "Whether the elevator is open for business — elevator access roads have no weight restrictions",
        "The posted weight limit on the elevator access road — grain elevator access roads often have lower weight limits than county roads",
        "Whether a KDOT escort vehicle is required for grain trucks on elevator access roads",
        "The elevator operator's CDL status to determine if the load can be received",
      ],
      correctIndex: 1,
      explanation:
        "Grain elevator access roads in rural Kansas are often county-maintained or privately maintained roads that have lower posted weight limits than the county roads leading to them. CDL drivers must check the posted weight limit on elevator access roads before entering and ensure their vehicle's gross vehicle weight does not exceed the posted limit. Overweight violations on posted weight limit roads carry significant fines and can result in CDL consequences. Some elevator access roads have seasonal weight limit adjustments based on road conditions.",
    },
    {
      question:
        "KDOT's seasonal overweight grain permit for Kansas CDL drivers allows:",
      options: [
        "All grain trucks to operate on all Kansas roads at unlimited weight during harvest",
        "Grain and livestock haulers to operate above standard weight limits on designated routes during designated harvest seasons under a permit",
        "CDL drivers to skip weigh station inspections during harvest season",
        "Grain trucks to use I-70 shoulders as additional lanes during peak harvest periods",
      ],
      correctIndex: 1,
      explanation:
        "KDOT's seasonal overweight grain permit system allows grain and livestock haulers to operate above the standard Kansas legal weight limits on specific designated routes during specific harvest season dates. CDL drivers operating under these permits must carry the permit document in the vehicle, comply with all route restrictions and vehicle configuration requirements, and remain within the weight limits specified in the permit. Kansas's wheat harvest occurs primarily in June, and corn/soybean harvest occurs in October. Violating permit conditions results in fines and potential CDL consequences.",
    },
    {
      question:
        "When transporting hazardous materials on a Kansas highway and approaching a railroad grade crossing, a CDL driver must:",
      options: [
        "Stop only if a train is visible or warning lights are flashing",
        "Slow to 15 mph and proceed through if no train is visible",
        "Stop within 50 feet but not less than 15 feet from the nearest rail, look and listen both directions, then proceed when safe",
        "Hazmat loads in Kansas are exempt from railroad crossing stop requirements",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA regulations require CDL drivers transporting hazardous materials to stop at all railroad crossings, regardless of whether gates are up, warning lights are not flashing, or no train is visible. The stop must be made within 50 feet but not less than 15 feet from the nearest rail. The driver must look and listen in both directions and ensure it is safe before proceeding. Kansas has numerous railroad crossings — particularly near grain elevator rail loading facilities throughout rural Kansas — where CDL vehicles transporting hazardous materials frequently operate.",
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
      question: "What agency issues CDLs in Kansas?",
      answer:
        "Kansas CDLs are issued by the Kansas Department of Revenue (DOR), Division of Vehicles. Kansas does not have a DMV. CDL applicants must visit a DOR Division of Vehicles office to complete knowledge tests, submit a current DOT medical certificate, and complete the CDL skills test with an approved examiner. DOR offices are located in most Kansas counties. When searching for a CDL testing location in Kansas, search for 'Kansas DOR Division of Vehicles' rather than 'Kansas DMV.'",
    },
    {
      question: "What CDL knowledge tests are required in Kansas?",
      answer:
        "All Kansas CDL applicants must pass the General Knowledge test. Additional tests are required based on the vehicle class and endorsements: Combination Vehicles (Class A), Air Brakes (if the vehicle has air brakes), Passenger Transport, Hazardous Materials (plus TSA security threat assessment), Tank Vehicles, Doubles/Triples, and School Bus. Each test requires a minimum score of 80%. Kansas CDL applicants should also understand state-specific operational requirements including I-70 crosswind advisories, Kansas Turnpike toll procedures, and KDOT seasonal overweight permit processes.",
    },
    {
      question: "What is the BAC limit for CDL drivers in Kansas?",
      answer:
        "The FMCSA BAC limit of 0.04% applies to CDL drivers operating a CMV in Kansas. Kansas uses DUI terminology. Kansas also prohibits CDL drivers from consuming alcohol within 4 hours before operating a CMV. A CDL driver who tests at 0.04% BAC or above is placed out of service and faces CDL disqualification. The standard Kansas DUI limit of 0.08% applies to CDL holders driving personal (non-CMV) vehicles, and the 0.02% limit applies to CDL holders under 21.",
    },
    {
      question: "What are Kansas Turnpike toll procedures for CDL vehicles?",
      answer:
        "The Kansas Turnpike Authority (KTA) operates I-335 (the main Kansas Turnpike) and portions of I-70 near Wichita. CDL vehicles on KTA routes pay commercial vehicle toll rates, which are higher than passenger car rates and are based on vehicle axle count and weight class. Drivers can pay with exact change cash at toll plazas or use a K-TAG electronic transponder for automated billing. Commercial fleet operators often use K-TAG accounts for CDL vehicles. Bypassing a toll plaza is a violation. CDL drivers should verify the toll amounts for their specific vehicle configuration before traveling KTA routes.",
    },
    {
      question: "What I-70 operational hazards are specific to Kansas CDL drivers?",
      answer:
        "Kansas I-70 presents multiple operational hazards for CDL drivers. Crosswinds of 30–50 mph can push high-profile CMVs off the road — KDOT monitors conditions and issues crosswind advisories and restrictions for specific vehicle types. Dust storms from agricultural fields have caused multi-vehicle pileups on I-70. Winter ice and blizzard conditions can trigger I-70 closures. Variable speed limit zones near Wichita (I-70/I-135 interchange) require CDL driver attention. CDL drivers should monitor KDOT's 511 road conditions system throughout any I-70 transit in Kansas and be prepared to stop and wait out dangerous conditions rather than proceeding through them.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Kansas?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Kansas?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Kansas DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Kansas CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Kansas DMV for available language options.",
    },
    {
      question: "How long is a Kansas CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Kansas CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Kansas CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Kansas, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Kansas DMV Practice Test", href: "/kansas-dmv-practice-test" },
    { label: "Kansas Motorcycle Practice Test", href: "/kansas-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function KansasCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
