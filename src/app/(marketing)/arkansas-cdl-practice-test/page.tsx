import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Arkansas CDL Practice Test 2025 – Free AR Commercial Driver's License Prep",
  description:
    "Prepare for your Arkansas CDL knowledge test with free practice questions covering I-40 freight corridor rules, Arkansas River lock approach procedures, DFA Revenue Division requirements, and FMCSA regulations.",
  alternates: { canonical: "https://caredmvprep.com/arkansas-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/arkansas-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Arkansas",
  stateAbbr: "AR",
  testLabel: "CDL Practice Test",
  slug: "arkansas-cdl-practice-test",
  headline: "Arkansas CDL Practice Test 2025",
  intro:
    "Arkansas CDL applicants must pass FMCSA-compliant knowledge tests administered by the Arkansas Department of Finance and Administration (DFA), Revenue Division. Arkansas CDL operations include unique considerations: the I-40 freight corridor from Memphis to Fort Smith, grain and poultry industry trucking throughout the Delta and northwest Arkansas, and Arkansas River navigation lock approach routes in Little Rock. This free practice test covers Arkansas-specific CDL topics.",
  basedOn: "FMCSA CDL Manual – Arkansas DFA Revenue Division CDL Supplement",
  about: [
    "Arkansas CDLs are issued by the Department of Finance and Administration (DFA), Revenue Division — not a traditional DMV. This is an important distinction for CDL applicants who may be accustomed to other states' DMV-based licensing. CDL knowledge tests follow FMCSA requirements and must be passed with an 80% score. Arkansas's CDL operations are heavily influenced by the state's agricultural economy: grain trucks and poultry haulers operate throughout the Delta and northwest Arkansas corridor, and Arkansas has a specific seasonal overweight permit system for grain and livestock haulers. The I-40 freight corridor is one of the busiest commercial truck routes in the South, running from Memphis in the east through Little Rock to Fort Smith at the Oklahoma border.",
    "Arkansas CDL drivers also need to understand the Arkansas River navigation system, which includes a series of locks and dams between the Oklahoma border and the Mississippi River. Roads near these lock facilities in Little Rock and other river communities may have specific routing restrictions for oversized or overweight vehicles. The FMCSA BAC limit of 0.04% applies to all CDL drivers operating a CMV in Arkansas. Flash flooding on I-40 and US highway crossings of the Arkansas, White, and Red Rivers also creates operational hazards that CDL drivers must be prepared to navigate safely.",
  ],
  sampleQuestions: [
    {
      question:
        "Which agency issues Commercial Driver's Licenses in Arkansas?",
      options: [
        "Arkansas Department of Motor Vehicles (DMV)",
        "Arkansas Department of Transportation (ARDOT)",
        "Arkansas Department of Finance and Administration (DFA), Revenue Division",
        "Arkansas State Police Commercial Vehicle Division",
      ],
      correctIndex: 2,
      explanation:
        "Arkansas does not have a DMV. Commercial Driver's Licenses in Arkansas are issued by the Department of Finance and Administration (DFA), Revenue Division — the same agency that issues standard driver's licenses. CDL applicants must visit a DFA Revenue Division office to take knowledge tests, submit a medical certificate (FMCSA DOT physical), and complete the CDL skills test. This non-traditional agency name is a common point of confusion for CDL applicants relocating to Arkansas.",
    },
    {
      question:
        "What is the FMCSA blood alcohol concentration (BAC) limit for an Arkansas commercial driver operating a CMV?",
      options: ["0.08%", "0.02%", "0.04%", "0.00%"],
      correctIndex: 2,
      explanation:
        "The FMCSA sets a 0.04% BAC limit for commercial motor vehicle operators — half the standard 0.08% limit for non-commercial drivers. This limit applies in Arkansas whenever a CDL holder is operating a CMV, regardless of vehicle weight class. An Arkansas CDL driver who tests at 0.04% BAC or higher is placed out of service immediately. Arkansas also applies the DWI 0.08% limit to CDL holders driving personal (non-CMV) vehicles.",
    },
    {
      question:
        "Arkansas's I-40 corridor is a major freight route. Between which two cities does it primarily run through Arkansas?",
      options: [
        "Fayetteville to Hot Springs",
        "Memphis, Tennessee to Fort Smith",
        "Texarkana to Jonesboro",
        "Little Rock to Blytheville",
      ],
      correctIndex: 1,
      explanation:
        "Interstate 40 enters Arkansas from Memphis, Tennessee at the eastern border, passes through Little Rock (the state capital), and exits at Fort Smith at the Oklahoma border. This corridor is one of the busiest commercial freight routes in the South, carrying significant truck traffic between the eastern United States and the Southwest. CDL drivers operating on I-40 in Arkansas should be aware of weigh stations at state lines and at locations along the route, as well as seasonal weight restrictions during spring thaw.",
    },
    {
      question:
        "Arkansas's grain and poultry industry creates what specific seasonal CDL operating condition?",
      options: [
        "All grain trucks are prohibited from I-40 during harvest season",
        "Arkansas allows grain and livestock haulers to operate at greater than standard legal weight during designated seasons on designated routes under a permit system",
        "Grain trucks must display a special orange slow-moving vehicle triangle at all times",
        "Poultry haulers require a hazardous materials endorsement for live bird transport",
      ],
      correctIndex: 1,
      explanation:
        "Arkansas, like several agricultural states, has a seasonal overweight permit system that allows grain and livestock trucks to operate above standard legal weight limits during harvest and other designated seasons on designated routes. CDL drivers operating grain or livestock trucks in Arkansas during these periods must carry the appropriate permits and understand the specific routes and weight limits authorized. Violations of permit conditions can result in fines and CDL disqualification.",
    },
    {
      question:
        "When approaching a flash-flooded road crossing on I-40 or a US highway over an Arkansas river, what must a CDL driver do?",
      options: [
        "Proceed slowly since the CMV's height gives it an advantage over water depth",
        "Stop and assess water depth by walking the crossing before proceeding",
        "Follow all road closure or barricade instructions and do not attempt to cross flooded sections",
        "Drive around the barricade if the water appears shallow enough for the truck's undercarriage",
      ],
      correctIndex: 2,
      explanation:
        "Arkansas law prohibits driving around flood barricades, and CDL drivers face additional regulatory consequences for violating this law. Flash flooding on the Arkansas, White, Red, and other river crossings can occur rapidly. A large CMV does not provide protection against floodwater — moving water can overwhelm even large trucks, and the road surface beneath the water may be washed out entirely. CDL drivers must follow all barricade and road closure instructions without exception and report their delay to dispatch.",
    },
    {
      question:
        "Near the Arkansas River lock and dam facilities in the Little Rock area, CDL drivers may encounter what routing restriction?",
      options: [
        "All CMVs must stop at lock facilities and present paperwork",
        "Specific routes near lock approach roads may have weight restrictions or low-clearance bridges that require CDL route planning",
        "CDL vehicles are prohibited within 1 mile of all Arkansas River lock facilities",
        "Lock approach roads are designated as hazmat-free zones requiring rerouting",
      ],
      correctIndex: 1,
      explanation:
        "The Arkansas River Navigation System operates a series of locks and dams between Fort Smith and the Mississippi River. Roads near these facilities — including access roads, service bridges, and river-crossing structures — may have weight restrictions or low-clearance bridges that CDL drivers must identify during route planning. CDL pre-trip planning in Arkansas should include checking bridge height clearances and posted weight limits on routes near river facilities, especially for oversized or overweight loads.",
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
      question: "What agency issues CDLs in Arkansas and where do I apply?",
      answer:
        "CDLs in Arkansas are issued by the Arkansas Department of Finance and Administration (DFA), Revenue Division. There is no Arkansas DMV. DFA Revenue Division offices are located in Little Rock, Fort Smith, Fayetteville, Jonesboro, and other cities throughout the state. You must visit a DFA office to take CDL knowledge tests, submit your FMCSA medical certificate, and schedule a CDL skills test with an approved third-party examiner or at a DFA testing location.",
    },
    {
      question: "What knowledge tests are required for an Arkansas CDL?",
      answer:
        "All Arkansas CDL applicants must pass the General Knowledge test. Additional tests required depend on the vehicle class and endorsements: Combination Vehicles (Class A), Air Brakes (if the vehicle has air brakes), Passenger Transport, Hazardous Materials (with TSA security threat assessment), Tank Vehicles, Doubles/Triples, and School Bus. Each test requires an 80% passing score. Arkansas CDL applicants should also be familiar with the DFA Revenue Division's specific application requirements beyond the standard FMCSA tests.",
    },
    {
      question: "What is the BAC limit for CDL drivers in Arkansas?",
      answer:
        "The FMCSA BAC limit of 0.04% applies to CDL drivers operating any CMV in Arkansas — half the standard 0.08% limit for personal vehicles. Additionally, Arkansas prohibits CDL drivers from consuming alcohol within 4 hours before operating a CMV. A CDL driver who refuses a chemical test or tests at or above 0.04% is placed out of service and faces CDL disqualification proceedings. Note that Arkansas uses 'DWI' terminology rather than 'DUI.'",
    },
    {
      question: "What agricultural CDL considerations are unique to Arkansas?",
      answer:
        "Arkansas's large grain and poultry industries create specific CDL operational considerations. Arkansas has a seasonal overweight permit system allowing grain and livestock haulers to exceed standard weight limits on designated routes during designated seasons. CDL drivers hauling agricultural commodities in Arkansas should obtain and carry the appropriate Arkansas State Highway Commission permits. Northwest Arkansas (Tyson Foods headquarters is in Springdale) has heavy poultry industry truck traffic, and the Arkansas Delta has significant grain elevator and cotton gin truck traffic.",
    },
    {
      question: "What hazards do CDL drivers face on Arkansas interstates and highways during severe weather?",
      answer:
        "Arkansas severe weather hazards for CDL drivers include flash flooding on river crossings (Arkansas, White, Red Rivers and their tributaries), severe thunderstorms and tornado activity particularly in spring, and ice events on the I-40 corridor and Ozark mountain routes in winter. CDL drivers should monitor NOAA weather radio and Arkansas Department of Transportation (ARDOT) road condition alerts. During flooding, follow all barricade and closure instructions — driving around barricades is a misdemeanor violation in Arkansas. During tornado warnings, do not shelter under overpasses — evacuate the CMV and seek a low-lying ditch away from trees.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Arkansas?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Arkansas?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Arkansas DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Arkansas CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Arkansas DMV for available language options.",
    },
    {
      question: "How long is a Arkansas CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Arkansas CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Arkansas CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Arkansas, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Arkansas DMV Practice Test", href: "/arkansas-dmv-practice-test" },
    { label: "Arkansas Motorcycle Practice Test", href: "/arkansas-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function ArkansasCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
