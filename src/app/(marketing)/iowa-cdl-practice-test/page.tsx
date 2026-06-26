import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Iowa CDL Practice Test 2025 – Free IA Commercial Driver's License Prep",
  description:
    "Prepare for your Iowa CDL knowledge test with free practice questions covering Iowa DOT seasonal overweight grain permits, I-80 corridor rules, RAGBRAI road closures, Des Moines interchange routing, and Iowa OWI 0.04% CMV rules.",
  alternates: { canonical: "https://caredmvprep.com/iowa-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/iowa-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Iowa",
  stateAbbr: "IA",
  testLabel: "CDL Practice Test",
  slug: "iowa-cdl-practice-test",
  headline: "Iowa CDL Practice Test 2025",
  intro:
    "Iowa CDL applicants must pass FMCSA-compliant knowledge tests administered by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division. Iowa CDL operations include unique considerations: Iowa DOT's seasonal overweight grain permit system under Iowa Code § 321.463, I-80 as Iowa's longest freight corridor, summer RAGBRAI bicycle ride road closures, Des Moines metropolitan interchange routing, and Iowa's OWI 0.04% BAC limit for CDL drivers. This free practice test covers Iowa-specific CDL topics.",
  basedOn: "FMCSA CDL Manual – Iowa DOT CDL Supplement",
  about: [
    "Iowa CDLs are issued by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division — not a DMV. CDL knowledge tests follow FMCSA requirements with an 80% passing score required. Iowa's CDL environment is shaped by the state's dominant agricultural economy. Iowa Code § 321.463's seasonal overweight permit system allows grain and livestock haulers to operate above standard legal weight limits on designated routes during harvest season — a critical benefit for CDL drivers in Iowa's corn, soybean, and livestock industries. I-80 is Iowa's primary east-west freight corridor, running 305 miles from the Nebraska border to the Illinois border, and it is one of the busiest commercial truck routes in the Midwest.",
    "Iowa CDL operations also include RAGBRAI (Register's Annual Great Bicycle Race Across Iowa), held each July — a week-long cycling event that crosses the state from Missouri River to Mississippi River and temporarily closes or restricts many Iowa roads and bridges to commercial traffic. CDL dispatchers and drivers must plan around RAGBRAI closures. Des Moines's interstate interchange — where I-80, I-35, and I-235 converge — is one of the most complex interchange systems in the Midwest and requires CDL drivers to understand lane configurations and exit sequencing. Iowa's OWI BAC limit of 0.04% for CDL drivers in CMVs is consistent with FMCSA requirements.",
  ],
  sampleQuestions: [
    {
      question:
        "Under Iowa Code § 321.463, what operational benefit does Iowa provide to grain and livestock haulers during harvest season?",
      options: [
        "Grain trucks are exempt from all Iowa weight limits during harvest",
        "Iowa allows grain and livestock haulers to operate above standard legal vehicle weight on designated routes during designated agricultural seasons under a permit system",
        "Grain trucks may use interstate highways at no cost during harvest season",
        "Iowa suspends commercial vehicle safety inspections during harvest season",
      ],
      correctIndex: 1,
      explanation:
        "Iowa Code § 321.463 authorizes Iowa DOT to issue seasonal overweight permits allowing grain and livestock haulers to exceed standard legal vehicle weight limits on designated routes during harvest and other authorized seasons. CDL drivers operating under these permits must carry the permit document in the vehicle and comply with all route restrictions, vehicle configuration requirements, and timing limitations specified in the permit. Violating permit conditions can result in fines and CDL disqualification.",
    },
    {
      question:
        "What is the FMCSA blood alcohol concentration (BAC) limit for an Iowa CDL driver operating a CMV?",
      options: ["0.08%", "0.02%", "0.04%", "0.00%"],
      correctIndex: 2,
      explanation:
        "The FMCSA sets a 0.04% OWI BAC limit for CDL drivers operating a commercial motor vehicle in Iowa. Iowa uses OWI (Operating While Intoxicated) terminology rather than DUI or DWI. This 0.04% limit is half the standard 0.08% limit for non-commercial drivers and applies whenever the CDL holder is operating a CMV. A CDL driver who tests at 0.04% BAC or higher is placed out of service immediately and faces CDL disqualification proceedings.",
    },
    {
      question:
        "RAGBRAI, held each July in Iowa, affects CDL operations by:",
      options: [
        "Increasing speed limits on I-80 to accommodate freight diverted from RAGBRAI routes",
        "Temporarily closing or restricting Iowa roads and bridges along the bicycle ride route to commercial traffic",
        "Requiring all CDL drivers to display a RAGBRAI support vehicle designation",
        "RAGBRAI has no effect on Iowa commercial vehicle routing",
      ],
      correctIndex: 1,
      explanation:
        "RAGBRAI (Register's Annual Great Bicycle Race Across Iowa) is a week-long bicycle ride held each July that crosses Iowa from the Missouri River to the Mississippi River. Tens of thousands of cyclists and support vehicles use Iowa roads during this period. Local authorities close or restrict many roads along the route to commercial vehicles during the event. CDL drivers and dispatchers must plan routes that avoid RAGBRAI road closures during the event week. Iowa DOT publishes RAGBRAI road closure information in advance for commercial vehicle operators.",
    },
    {
      question:
        "I-80 crosses Iowa from which border to which border?",
      options: [
        "Minnesota border to Missouri border",
        "Nebraska border near Council Bluffs to Illinois border near the Quad Cities",
        "South Dakota border to Wisconsin border",
        "Kansas border near Sioux City to Indiana border near Iowa City",
      ],
      correctIndex: 1,
      explanation:
        "Iowa's I-80 enters from the Nebraska border at Council Bluffs and exits at the Illinois border near the Quad Cities (Davenport/Bettendorf), spanning approximately 305 miles. This east-west route is Iowa's primary freight corridor and one of the busiest commercial truck routes in the Midwest. Weigh stations on I-80 are located at the Nebraska border and in eastern Iowa. Winter weather conditions — including blizzards, ice, and blowing snow — can result in I-80 closures that CDL drivers must be prepared to manage.",
    },
    {
      question:
        "When approaching a railroad grade crossing while transporting hazardous materials in Iowa, a CDL driver must:",
      options: [
        "Slow to 15 mph and proceed through if lights are not flashing and no train is visible",
        "Stop within 50 feet but not less than 15 feet from the nearest rail, look and listen in both directions, then proceed when safe",
        "Honk twice and proceed through at normal speed",
        "Stop only if the automatic crossing gate is in the lowered position",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA regulations require CDL drivers transporting hazardous materials to stop at all railroad crossings regardless of whether gates are up or a train is visible. The stop must be within 50 feet but not less than 15 feet from the nearest rail. After stopping, the driver must look and listen in both directions and ensure it is safe before proceeding. Iowa has numerous railroad crossings — particularly in agricultural areas where grain elevator rail loading facilities create multiple crossings on rural routes.",
    },
    {
      question:
        "What CDL routing challenge is specific to the Des Moines metropolitan area where I-80, I-35, and I-235 converge?",
      options: [
        "CDL vehicles are prohibited from the Des Moines interstate system during peak hours",
        "The convergence of multiple interstates requires advance lane selection — CDL drivers must plan which interchange exits to use before entering the Des Moines interchange system",
        "All CDL vehicles must use I-235 through downtown Des Moines regardless of destination",
        "The Des Moines area has no interchange challenges — all routes are clearly marked",
      ],
      correctIndex: 1,
      explanation:
        "The Des Moines metropolitan area is where I-80 (east-west), I-35 (north-south), I-235 (downtown connector), and several US highways converge. This creates one of the more complex interchange systems in the Midwest, with multiple splits, lane changes, and exit sequencing required over a short distance. CDL drivers unfamiliar with the area must plan their route and lane selection in advance, using commercial vehicle navigation tools. Making a wrong exit with a large CMV in the Des Moines interchange can result in navigating downtown streets or local roads that are unsuitable for large trucks.",
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
      question: "What agency issues CDLs in Iowa?",
      answer:
        "Iowa CDLs are issued by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division — not a DMV. CDL applicants must visit an Iowa DOT driver's license office to take the required knowledge tests, submit a current DOT medical certificate, and complete the CDL skills test. Iowa DOT offices are located throughout the state, with major locations in Des Moines, Cedar Rapids, Davenport, Sioux City, and Waterloo.",
    },
    {
      question: "What CDL knowledge tests are required in Iowa?",
      answer:
        "All Iowa CDL applicants must pass the General Knowledge test. Additional tests are required based on the vehicle class and endorsements sought: Combination Vehicles (Class A), Air Brakes (if the vehicle has air brakes), Passenger Transport, Hazardous Materials (plus TSA security threat assessment), Tank Vehicles, Doubles/Triples, and School Bus. Each test requires a minimum score of 80%. Iowa CDL applicants should understand the state's seasonal overweight permit system as part of their CDL operational knowledge.",
    },
    {
      question: "What is the OWI BAC limit for CDL drivers in Iowa?",
      answer:
        "The FMCSA OWI BAC limit of 0.04% applies to CDL drivers operating a CMV in Iowa. Iowa uses OWI (Operating While Intoxicated) terminology. Iowa also prohibits CDL drivers from consuming alcohol within 4 hours before operating a CMV. A CDL driver who tests at 0.04% BAC or above is immediately placed out of service and faces CDL disqualification. Iowa's true zero-tolerance standard of 0.00% applies to CDL holders under 21 even when operating a non-CMV personal vehicle.",
    },
    {
      question: "What are Iowa's seasonal overweight permits for CDL operators?",
      answer:
        "Iowa Code § 321.463 authorizes Iowa DOT to issue seasonal overweight permits allowing grain and livestock haulers to operate above standard legal weight limits during designated agricultural seasons on designated routes. CDL drivers hauling grain, corn, soybeans, or livestock during these seasons must obtain the appropriate permit, carry it in the vehicle, and comply with all route and timing restrictions. These permits are distinct from standard oversize/overweight special permits used for non-agricultural loads. Violating permit conditions can result in fines and CDL disqualification.",
    },
    {
      question: "How does RAGBRAI affect CDL operations in Iowa?",
      answer:
        "RAGBRAI (Register's Annual Great Bicycle Race Across Iowa) is held each July and draws tens of thousands of participants cycling across the state over approximately one week. Along the route, local authorities temporarily close or restrict roads to commercial vehicle traffic. CDL dispatchers and drivers must monitor Iowa DOT and local authority announcements for RAGBRAI closures and plan alternate routes during the event. Iowa DOT typically publishes RAGBRAI-related commercial vehicle routing information in advance of the event each year.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Iowa?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Iowa?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Iowa DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Iowa CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Iowa DMV for available language options.",
    },
    {
      question: "How long is a Iowa CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Iowa CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Iowa CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Iowa, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Iowa DMV Practice Test", href: "/iowa-dmv-practice-test" },
    { label: "Iowa Motorcycle Practice Test", href: "/iowa-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function IowaCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
