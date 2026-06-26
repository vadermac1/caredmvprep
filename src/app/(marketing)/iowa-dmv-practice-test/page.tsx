import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Iowa DMV Practice Test 2025 – Free IA Driver's License Exam Prep",
  description:
    "Prepare for your Iowa DOT knowledge test with free practice questions covering Iowa's permit age of 14, SF 547 hands-free law, OWI zero tolerance under-21, county road grid system, tornado protocol, and Iowa DOT rules. 35 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/iowa-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/iowa-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Iowa",
  stateAbbr: "IA",
  testLabel: "DMV Practice Test",
  slug: "iowa-dmv-practice-test",
  headline: "Iowa DMV Practice Test 2025",
  intro:
    "Iowa driver licensing is administered by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division — not a DMV. The knowledge test has 35 questions and requires 80% (28/35) to pass. This free practice test covers Iowa-specific topics: the permit age of 14, SF 547 hands-free law (January 1, 2024), Iowa's true zero-tolerance OWI for under-21, the county road grid naming system, and tornado protocol on Iowa's flat landscape.",
  basedOn: "Iowa Department of Transportation Driver's Manual",
  keyRules: [
    {
      icon: "🧒",
      rule: "Permit Age: 14 Years Old (Agricultural Communities)",
      detail:
        "Iowa issues instruction permits at age 14 — one of the few states to do so. The primary historical reason is Iowa's large agricultural community: young people in farming families have long needed to begin learning to drive tractors and farm vehicles earlier than in urban states.",
    },
    {
      icon: "🏛️",
      rule: "Iowa DOT — Not a DMV",
      detail:
        "Iowa does not have a DMV. All driver licensing is handled by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division. Iowa DOT offices are located in counties throughout the state. When looking for a driver's license office in Iowa, search for 'Iowa DOT' — not 'DMV.'",
    },
    {
      icon: "📱",
      rule: "SF 547: Hands-Free Law (January 1, 2024)",
      detail:
        "Iowa Senate File 547, effective January 1, 2024, bans all drivers from holding a wireless device while driving. Iowa was among the later states to enact such a law. The law is primary enforcement — officers can stop drivers solely for holding a phone.",
    },
    {
      icon: "🍺",
      rule: "OWI Zero Tolerance: 0.00% Under-21",
      detail:
        "Iowa uses OWI (Operating While Intoxicated) terminology. The adult BAC limit is 0.08%. For drivers under 21, Iowa enforces TRUE zero tolerance — a BAC of 0.00% is the legal limit. Any detectable alcohol in a driver under 21 is a violation. The adult standard is 0.08%.",
    },
    {
      icon: "🗺️",
      rule: "County Road Grid System: Lettered and Numbered Roads",
      detail:
        "Iowa's rural road network uses a unique alphanumeric grid system of lettered roads (County Road X20, M16, etc.) and numbered roads. Iowa drivers must understand this naming convention for rural navigation. Signs on these county roads follow a specific pattern unique to Iowa.",
    },
    {
      icon: "🌪️",
      rule: "Tornado Protocol: Do NOT Take Shelter Under Overpass",
      detail:
        "Iowa's flat landscape means tornadoes can approach from any direction with excellent visibility but also without natural barriers to slow them. If a tornado threatens, do NOT shelter under an overpass — get out of the car and lie flat in a low-lying ditch away from the vehicle and trees.",
    },
    {
      icon: "🌾",
      rule: "Seasonal Overweight: Grain and Livestock Haulers",
      detail:
        "Iowa Code § 321.463 permits grain and livestock haulers to operate at greater than standard legal weight during harvest and other designated seasons on designated routes. CDL and non-CDL drivers hauling agricultural commodities under these provisions must carry the appropriate permits.",
    },
    {
      icon: "🛣️",
      rule: "I-80: Iowa's Longest Interstate",
      detail:
        "I-80 crosses Iowa from Council Bluffs on the Nebraska border to the Illinois border near the Quad Cities — roughly 305 miles. Iowa's primary east-west truck and travel corridor, I-80 sees significant weather-related closures in winter and requires awareness of variable speed limit zones near Des Moines.",
    },
  ],
  about: [
    "Iowa driver licensing is administered by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division — not a DMV. This is an important distinction: when Iowa residents search for a driver's license office, they should search for 'Iowa DOT' rather than 'DMV.' The knowledge test consists of 35 questions from the Iowa Driver's Manual, requiring 28 correct answers (80%) to pass. Iowa's permit age of 14 is among the youngest in the nation, reflecting the state's deep agricultural heritage and the need for young people in farming communities to begin driving training early.",
    "Iowa's OWI (Operating While Intoxicated) law is stricter than most states for young drivers: Iowa enforces true zero tolerance for drivers under 21, with a 0.00% BAC legal limit — any detectable alcohol in a driver under 21 is a violation. Iowa Senate File 547, effective January 1, 2024, established a comprehensive hands-free law banning all drivers from holding a wireless device. Iowa's rural road network uses a unique county road grid system with lettered and numbered roads that Iowa drivers must understand for rural navigation.",
    "Iowa's flat landscape creates unique tornado hazards. Tornadoes in Iowa move quickly with the jet stream and can approach from any direction with minimal visual obstruction — but the same flat terrain provides excellent early visual warning of funnel clouds. Iowa drivers who observe a tornado while in a vehicle should never shelter under a highway overpass, which creates a dangerous wind tunnel effect. The correct procedure is to exit the vehicle, move away from it, and lie flat in a low ditch away from trees. Iowa Code § 321.463 also authorizes seasonal overweight permits for grain and livestock haulers, a common agricultural industry benefit in Iowa.",
  ],
  sampleQuestions: [
    {
      question:
        "What is the minimum age to obtain a driver's instruction permit in Iowa?",
      options: ["15 years old", "15½ years old", "16 years old", "14 years old"],
      correctIndex: 3,
      explanation:
        "Iowa issues instruction permits to residents as young as 14 years old — one of the very few states with this policy. The permit age of 14 reflects Iowa's strong agricultural heritage: young people in farming communities have traditionally needed to learn to drive tractors, implements, and vehicles at younger ages. Permit holders at 14 must be accompanied by a licensed driver 25 or older in the front seat at all times while driving.",
    },
    {
      question:
        "Iowa uses OWI terminology for impaired driving. What is the blood alcohol concentration (BAC) limit for a driver who is 19 years old in Iowa?",
      options: ["0.08%", "0.02%", "0.04%", "0.00%"],
      correctIndex: 3,
      explanation:
        "Iowa enforces true zero tolerance for drivers under 21: the legal BAC limit is 0.00%, meaning any detectable alcohol in a driver under 21 is an OWI violation. Iowa's zero-tolerance standard is stricter than states like Arkansas (0.02%) or Delaware (0.02%). For drivers 21 and older, Iowa's OWI BAC limit is 0.08%. Iowa uses 'OWI' (Operating While Intoxicated) terminology rather than DUI or DWI.",
    },
    {
      question:
        "Which agency administers driver licensing in Iowa?",
      options: [
        "Iowa Department of Motor Vehicles (DMV)",
        "Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division",
        "Iowa Secretary of State Driver Services",
        "Iowa State Patrol Driver Licensing Division",
      ],
      correctIndex: 1,
      explanation:
        "Iowa does not have a DMV. All driver licensing in Iowa is administered by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division. Iowa DOT offices are located throughout the state in most counties. When searching for a driver's license office in Iowa, residents should search for 'Iowa DOT driver's license' rather than 'Iowa DMV.' Iowa DOT also handles vehicle registration and title services.",
    },
    {
      question:
        "Iowa Senate File 547, effective January 1, 2024, prohibits which behavior for Iowa drivers?",
      options: [
        "Using a GPS navigation app on a phone mounted in a dashboard holder",
        "Using a hands-free Bluetooth call while driving",
        "Physically holding a wireless device while operating a vehicle",
        "Listening to music through a phone connected via Bluetooth",
      ],
      correctIndex: 2,
      explanation:
        "Iowa SF 547 specifically prohibits physically holding a wireless communications device while operating a motor vehicle. Hands-free use — such as a phone in a dashboard or windshield mount, Bluetooth calling, or speakerphone via a mounted device — is permitted. The law is primary enforcement, meaning officers can stop a driver solely for holding a device. Iowa was among the later states to pass comprehensive handheld device legislation, with the law taking effect January 1, 2024.",
    },
    {
      question:
        "Iowa's rural road network uses which unique naming system?",
      options: [
        "Mile marker-based system similar to the interstate numbering",
        "A township grid system with only numeric identifiers",
        "An alphanumeric grid system of lettered roads (such as County Road X20 or M16) and numbered roads",
        "Named roads exclusively — no numbered or lettered county roads exist in Iowa",
      ],
      correctIndex: 2,
      explanation:
        "Iowa's rural county road network uses a unique alphanumeric grid system. Roads running east-west are typically designated with letters (such as County Road E18 or D38), while roads running north-south are typically numbered (such as County Road X20 or S39). This system was designed to help travelers navigate Iowa's regular township-and-range grid layout. Iowa drivers — especially those in rural areas — must understand this naming convention to navigate county roads and follow GPS directions accurately.",
    },
    {
      question:
        "You are driving on Iowa I-80 when a tornado warning is issued and a funnel cloud is visible approaching your location. What is the correct action?",
      options: [
        "Drive under the nearest highway overpass and stay in your vehicle for protection",
        "Drive at right angles to the tornado's path to escape it",
        "Exit the vehicle, move away from it, and lie flat in a low ditch away from trees",
        "Remain in your vehicle with seat belt fastened — the vehicle provides the best protection",
      ],
      correctIndex: 2,
      explanation:
        "If you cannot escape a tornado in a vehicle, the correct action is to exit the vehicle, move well away from it and any trees, and lie flat and face-down in a low ditch or depression in the ground. Sheltering under an overpass is extremely dangerous — the overpass acts as a wind tunnel that concentrates and accelerates the wind, greatly increasing the risk of injury from debris. A vehicle is easily tossed by a tornado. A low ditch provides better shelter than either. Iowa's flat landscape means tornadoes can approach quickly and from any direction.",
    },
    {
      question:
        "Iowa Code § 321.463 provides a seasonal benefit to what type of vehicle operator?",
      options: [
        "Emergency vehicle operators who can exceed speed limits during harvest season",
        "Grain and livestock haulers, who may operate at greater than standard legal weight during designated seasons on designated routes",
        "Farm implement dealers who can use highways for equipment transport without permits",
        "Crop dusting aircraft that are allowed to land on county roads during harvest",
      ],
      correctIndex: 1,
      explanation:
        "Iowa Code § 321.463 authorizes Iowa's seasonal overweight permit system, which allows grain and livestock haulers to operate above standard legal vehicle weight limits during harvest and other designated seasons on designated routes. This provision recognizes Iowa's massive agricultural output and the practical necessity of transporting large quantities of grain and livestock in a timely manner during harvest periods. Operators must carry the appropriate permits and comply with route restrictions.",
    },
    {
      question:
        "On an Iowa county road marked 'X20,' what direction does this road most likely run?",
      options: [
        "East-west, as X is a common north-south letter in the Iowa system",
        "North-south, as numeric-letter combinations in Iowa county roads typically indicate north-south routes",
        "The road could run in any direction — Iowa county road names do not indicate direction",
        "Diagonally, following a river or historical trail route",
      ],
      correctIndex: 1,
      explanation:
        "In Iowa's county road naming system, roads with numeric-letter combinations like X20, S39, or P58 typically run north-south. Roads with letter-number combinations like D38, E18, or M16 typically run east-west. This consistent convention is part of the Iowa county road grid system that helps drivers navigate the state's regular township-and-range layout. Understanding this system is helpful for rural navigation throughout Iowa.",
    },
    {
      question:
        "Iowa enforces true zero-tolerance OWI for drivers under 21. What does '0.00%' BAC limit mean in practice?",
      options: [
        "Drivers under 21 can have up to 0.01% BAC without violation",
        "Any amount of alcohol detectable by a chemical test in a driver under 21 constitutes an OWI violation",
        "The 0.00% limit applies only to drivers who have had a previous OWI",
        "Zero tolerance means drivers under 21 must wait 8 hours after any drink before driving",
      ],
      correctIndex: 1,
      explanation:
        "Iowa's 0.00% BAC zero-tolerance OWI law for drivers under 21 means that any detectable amount of alcohol — even an amount below what most breath test equipment can reliably measure — constitutes a legal violation. A driver under 21 who has consumed even one drink may test above 0.00% depending on the sensitivity of the testing equipment. Iowa's zero-tolerance standard is among the strictest in the nation for underage drinking and driving, stricter than states that set the under-21 limit at 0.02%.",
    },
    {
      question:
        "Iowa's flat landscape creates which specific tornado risk that other states' terrain can reduce?",
      options: [
        "Iowa tornadoes are slower than tornadoes in other states",
        "Iowa tornadoes tend to be smaller and easier to see",
        "Tornadoes can approach from any direction with minimal barrier to slow them, potentially making them faster-moving with less warning time",
        "Iowa's flat terrain makes tornado shelters unnecessary since all basements are at the same elevation",
      ],
      correctIndex: 2,
      explanation:
        "Iowa's flat terrain provides virtually no natural barriers — hills, mountains, or ridges — to slow down or deflect an approaching tornado. The same flat landscape that allows good visual detection of tornadoes at a distance also allows tornadoes to maintain speed and intensity as they travel. Iowa tornadoes are influenced by the jet stream and can move faster than tornadoes in more southerly states. Drivers should act immediately when a tornado warning is issued rather than waiting to visually confirm the threat.",
    },
  ],
  faqs: [
    {
      question: "What is the Iowa knowledge test format?",
      answer:
        "The Iowa Department of Transportation (Iowa DOT) administers a 35-question multiple-choice knowledge test. You must correctly answer at least 28 questions — an 80% passing score — to pass. The test covers traffic laws, road signs, safe driving practices, and Iowa-specific topics including OWI law, the county road grid system, tornado protocol, and agricultural vehicle rules. The test is based on the Iowa Driver's Manual and available at Iowa DOT offices throughout the state.",
    },
    {
      question: "Which agency handles driver licensing in Iowa — is there an Iowa DMV?",
      answer:
        "Iowa does not have a Department of Motor Vehicles (DMV). All driver licensing in Iowa is administered by the Iowa Department of Transportation (Iowa DOT), Motor Vehicle Division. Iowa DOT offices are located in most Iowa counties. When searching for a driver's license office in Iowa, look for 'Iowa DOT' rather than 'Iowa DMV' — the DMV branding is not used in Iowa.",
    },
    {
      question: "What are the graduated licensing stages in Iowa?",
      answer:
        "Iowa's GDL system has three stages. At age 14, teens can obtain an Instruction Permit after passing the knowledge test and vision screening. Permit holders must be accompanied by a licensed driver 25 or older at all times. At age 16, after holding the permit for at least 12 months and completing 20 supervised driving hours (2 at night), an Intermediate License is available after passing a driving test. The intermediate license has nighttime and passenger restrictions. At age 17 (or after 12 months on the intermediate license), a Full License is available.",
    },
    {
      question: "What is Iowa's OWI law?",
      answer:
        "Iowa uses OWI (Operating While Intoxicated) terminology for impaired driving. The adult BAC limit is 0.08% or higher. For drivers under 21, Iowa enforces true zero tolerance with a 0.00% BAC limit — any detectable alcohol is an OWI violation. Commercial drivers face a 0.04% limit while operating a CMV. Iowa OWI penalties include license revocation, fines, possible jail time, and mandatory substance abuse evaluation. Iowa uses 'OWI' rather than 'DUI' or 'DWI' in all official documents.",
    },
    {
      question: "What is Iowa's SF 547 hands-free law?",
      answer:
        "Iowa Senate File 547, effective January 1, 2024, prohibits all drivers from physically holding a wireless communications device while operating a motor vehicle. The law is primary enforcement — an officer can stop a driver solely for holding a phone. Hands-free use including dashboard-mounted GPS, Bluetooth calling, and earpiece use is permitted. The law applies to all drivers in Iowa regardless of age. Iowa was among the last group of states to pass a comprehensive handheld device ban.",
    },
    {
      question: "What is the Iowa county road naming system?",
      answer:
        "Iowa's rural county roads use a unique alphanumeric grid system. Roads running east-west are typically designated with a letter prefix followed by a number (such as E18, D38, G44, or M16). Roads running north-south are typically designated with a letter prefix like X, S, or P followed by a number (such as X20, S39, or P58). This system reflects Iowa's regular township-and-range land grid and helps travelers navigate Iowa's rural road network. Understanding this system is important for Iowa drivers who travel rural roads.",
    },
    {
      question: "What is the correct tornado protocol for Iowa drivers?",
      answer:
        "If a tornado is approaching and you cannot outrun it (never try to outrun a tornado in your path), the safest action is to exit the vehicle immediately, move away from it and from any trees or power poles, and lie flat and face-down in a low ditch or depression in the ground. Cover your head with your arms. Do NOT shelter under a highway overpass — overpass structures concentrate and accelerate wind through the tunnel effect, greatly increasing debris injury risk. Iowa emergency management officials specifically train residents to avoid overpass shelter.",
    },
    {
      question: "What is Iowa's seasonal overweight permit for agricultural vehicles?",
      answer:
        "Iowa Code § 321.463 authorizes the Iowa DOT to issue seasonal overweight permits allowing grain and livestock haulers to operate above standard legal vehicle weight limits on designated routes during designated agricultural seasons. These permits are commonly used during the Iowa corn, soybean, and other grain harvests. CDL and non-CDL operators of these vehicles must obtain and carry the appropriate permits and comply with all route and timing restrictions specified in the permit. Violations of permit conditions can result in fines.",
    },
    {
      question: "Does Iowa require a vehicle safety inspection?",
      answer:
        "Iowa does not require periodic vehicle safety inspections for most passenger vehicles. Vehicles must meet equipment safety standards under Iowa law (working lights, brakes, etc.) but there is no mandatory annual inspection program as in states like Virginia or New York. Commercial vehicles are subject to FMCSA inspection requirements. Iowa does require vehicles to pass an emissions test in the Des Moines metropolitan area (Polk County and surrounding counties) under the Voluntary Compliance Program.",
    },
    {
      question: "What permit does a 14-year-old need to drive legally in Iowa?",
      answer:
        "A 14-year-old in Iowa may obtain an instruction permit from the Iowa DOT after passing the knowledge test and vision screening. The permit allows the 14-year-old to drive only when accompanied by a licensed driver who is at least 25 years old and is seated in the front passenger seat. The young driver may not drive after a specified curfew hour and must comply with all other instruction permit restrictions. Iowa's 14-year permit age is specifically designed to accommodate agricultural community families.",
    },
  ],
  relatedTests: [
    { label: "Iowa Motorcycle Practice Test", href: "/iowa-motorcycle-practice-test" },
    { label: "Iowa CDL Practice Test", href: "/iowa-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function IowaDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
