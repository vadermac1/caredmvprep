import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Dakota DMV Practice Test 2025 – Free NDDOT Knowledge Exam Prep",
  description:
    "Prepare for your North Dakota DMV knowledge test with free practice questions covering Bakken oilfield road restrictions, blizzard road closures, open range driving, and ND-specific traffic laws. 25 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/north-dakota-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/north-dakota-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "North Dakota",
  stateAbbr: "ND",
  testLabel: "DMV Practice Test",
  slug: "north-dakota-dmv-practice-test",
  headline: "North Dakota DMV Practice Test 2025",
  intro:
    "The North Dakota Department of Transportation (NDDOT) Driver License Site administers a 25-question knowledge test. You must answer at least 20 questions correctly (80%) to pass. This free practice test covers North Dakota-specific hazards including Bakken Formation oilfield road restrictions, blizzard road closures on I-94 and I-29, open range cattle laws, and the state's handheld device ban.",
  basedOn: "North Dakota Department of Transportation Driver's License Study Guide",
  keyRules: [
    {
      icon: "🛢️",
      rule: "Bakken Oilfield Road Weight Restrictions",
      detail:
        "Counties in the Williston Basin (Williams, McKenzie, Mountrail, Dunn) may post reduced weight limits on county roads damaged by oilfield truck traffic under NDCC § 39-12-04. Check current county road postings before driving on rural roads in these counties — restrictions can change seasonally.",
    },
    {
      icon: "🌨️",
      rule: "Road Closed = Legal Order, Not a Suggestion",
      detail:
        "North Dakota DOT closes I-94 and I-29 multiple times each winter during blizzards. A 'Road Closed' sign is a legally enforceable order. Driving on a closed road in North Dakota is a Class B misdemeanor — you can be arrested, fined, and your vehicle may be impounded.",
    },
    {
      icon: "🐄",
      rule: "Open Range: Cattle on Roads",
      detail:
        "Western North Dakota is open range territory. Livestock owners are not legally required to fence cattle away from public roads. If you hit cattle in an open range area, the driver — not the rancher — may bear liability. Scan for cattle and horses on rural roads at all hours.",
    },
    {
      icon: "📱",
      rule: "Hands-Free Law (SB 2016, Effective Aug 1, 2021)",
      detail:
        "North Dakota prohibits all handheld mobile device use while driving. You may not hold your phone to your ear or in your hand while the vehicle is in motion. Hands-free Bluetooth calling is permitted. First offense fines apply, and violations are primary — officers can pull you over solely for this offense.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 14 Years Old",
      detail:
        "North Dakota issues instruction permits at age 14, one of the youngest permit ages in the United States. Permit holders between 14 and 16 must be accompanied by a licensed driver who is at least 18 years old. A restricted license is available at 16, and a full license is available at 16 years and 6 months after completing all GDL requirements.",
    },
    {
      icon: "🍺",
      rule: "DUI: 0.08% Adults, 0.02% Under-21",
      detail:
        "North Dakota's DUI threshold is 0.08% BAC for adults 21 and older. Drivers under 21 face a 0.02% threshold — any meaningful amount of alcohol is a violation. North Dakota also has an implied consent law: refusing a chemical test triggers an automatic license revocation.",
    },
    {
      icon: "🛣️",
      rule: "75 MPH Rural Interstate Speed Limit",
      detail:
        "North Dakota's maximum speed limit on rural Interstate highways (I-94, I-29, I-94) is 75 mph. On undivided highways, the limit is 65 mph. Speed limits are reduced during adverse weather — always adjust speed to conditions, which may be well below the posted limit during North Dakota winters.",
    },
    {
      icon: "🌾",
      rule: "Slow-Moving Farm Equipment Shares Roads",
      detail:
        "North Dakota's agricultural economy means slow-moving farm equipment (combines, grain carts, planters) legally uses state and county highways — especially during spring planting and fall harvest. These vehicles travel at 15–25 mph. Allow ample following distance and pass only when it is safe and legal to do so.",
    },
  ],
  about: [
    "The North Dakota Department of Transportation (NDDOT) Driver License Site administers all driver licensing and testing in North Dakota. The knowledge test consists of 25 multiple-choice questions drawn from the North Dakota Driver's License Study Guide, covering traffic laws, road signs, and driving hazards specific to the Peace Garden State. A passing score of 80% — 20 correct answers out of 25 — is required. Applicants who fail may retake the test after a waiting period specified by NDDOT.",
    "North Dakota's most consequential driving hazard — and a heavily tested topic — is blizzard road closures. The NDDOT closes I-94 and I-29 multiple times each winter when blizzard conditions make travel life-threatening. These closures are not advisories — driving on a legally closed North Dakota road is a Class B misdemeanor. The state's flat, windswept terrain means ground blizzards can create zero-visibility whiteout conditions even when snowfall is light, making the roads dangerous even for experienced drivers. The NDDOT's 511 system and website provide real-time road closure information that all North Dakota drivers should monitor during winter storms.",
    "Western North Dakota's Williston Basin (Bakken Formation) oil boom created a secondary road challenge unique to the region: massive oilfield truck traffic on county roads not engineered for heavy loads. Under NDCC § 39-12-04, counties in Williams, McKenzie, Mountrail, and Dunn counties may legally post reduced weight limits or restrict access on damaged county roads. Additionally, western North Dakota is open range territory where cattle may legally be on public roads — the responsibility for avoiding livestock collisions falls on the driver, not the rancher. North Dakota also issues instruction permits at age 14, one of the youngest ages in the nation, reflecting the rural agricultural heritage where young people have operated farm equipment for generations.",
  ],
  sampleQuestions: [
    {
      question:
        "Under North Dakota law, what is the legal consequence of driving on an I-94 or I-29 segment that has been officially closed by the NDDOT during a blizzard?",
      options: [
        "A $50 fine for the first offense",
        "A Class B misdemeanor — you can be arrested and your vehicle impounded",
        "A verbal warning from law enforcement",
        "A civil penalty only, with no criminal record",
      ],
      correctIndex: 1,
      explanation:
        "When the North Dakota Department of Transportation closes a road during a blizzard, that closure is a legally enforceable order — not a suggestion or advisory. Driving on a closed road is a Class B misdemeanor in North Dakota, which can result in arrest, fines, and vehicle impoundment. North Dakota's flat terrain produces ground blizzard whiteout conditions even in moderate snowfall, making closed roads genuinely life-threatening. NDDOT's 511 system provides real-time closure information.",
    },
    {
      question:
        "You are driving a vehicle on a county road in McKenzie County, North Dakota, and see a sign indicating a reduced weight limit posted by the county. What law gives the county authority to post this restriction?",
      options: [
        "The Federal Highway Administration oilfield exemption",
        "NDCC § 39-12-04, which allows counties to restrict access or post reduced weight limits on damaged roads",
        "North Dakota has no specific law for this — it is an informal county practice",
        "The Bakken Formation Act of 2008",
      ],
      correctIndex: 1,
      explanation:
        "NDCC § 39-12-04 authorizes North Dakota counties to restrict vehicle access or post reduced weight limits on roads that have been damaged by heavy traffic loads. In the Williston Basin oil patch counties — Williams, McKenzie, Mountrail, and Dunn — oilfield truck traffic from the Bakken Formation shale oil boom caused severe damage to county roads not designed for such loads. Drivers must check and comply with current county road postings before traveling on rural roads in these areas.",
    },
    {
      question:
        "You are driving on a rural highway in western North Dakota and a cow is standing in the road at night. Under North Dakota's open range law, who bears responsibility if you strike the animal?",
      options: [
        "The rancher is always responsible for cattle on public roads",
        "Responsibility is shared equally between the driver and rancher",
        "In open range areas, the driver may bear liability — cattle owners are not required to fence livestock away from roads",
        "The state of North Dakota is responsible for wildlife and livestock on state highways",
      ],
      correctIndex: 2,
      explanation:
        "Western North Dakota is open range territory, meaning livestock owners are not legally obligated to fence their animals away from public roads. In open range areas, a driver who strikes cattle may bear the financial liability rather than the rancher. This makes scanning for cattle and horses on rural roads — especially at night — a critical safety practice. Cattle do not reflect headlights well and can be very difficult to see until you are very close.",
    },
    {
      question:
        "Under North Dakota's SB 2016 handheld device law (effective August 1, 2021), which of the following is permitted while driving?",
      options: [
        "Holding your phone to your ear to make a call",
        "Using your phone on speaker with it resting on the seat",
        "Making a call using a Bluetooth hands-free headset",
        "Texting at a red light while the vehicle is stopped",
      ],
      correctIndex: 2,
      explanation:
        "North Dakota's SB 2016 bans all handheld mobile device use while driving — you may not hold your phone for any purpose. Hands-free use via Bluetooth headsets or vehicle-integrated systems is permitted. The law applies while the vehicle is in motion, and violations are primary offenses, meaning law enforcement can pull you over solely for holding a device. Texting at a red light is still illegal under this law.",
    },
    {
      question:
        "What is the minimum age to obtain an instruction permit in North Dakota?",
      options: ["15 years old", "16 years old", "14 years old", "15½ years old"],
      correctIndex: 2,
      explanation:
        "North Dakota issues instruction permits at age 14 — one of the youngest permit ages in the United States. This reflects the state's agricultural heritage, where young people have operated farm equipment for generations. Permit holders between 14 and 16 must be accompanied by a licensed driver who is at least 18 years old at all times. A restricted license becomes available at 16 after meeting all GDL requirements.",
    },
    {
      question:
        "What is the maximum speed limit on North Dakota's rural Interstate highways such as I-94?",
      options: ["65 mph", "70 mph", "75 mph", "80 mph"],
      correctIndex: 2,
      explanation:
        "North Dakota's rural Interstate highway speed limit is 75 mph on roads such as I-94 (which crosses the entire state east to west) and I-29 (which runs north-south along the eastern border). This limit applies only in ideal conditions — during North Dakota's frequent winter storms and blizzards, safe driving speeds can be far below the posted limit. Drivers are always required to drive at a speed safe for current conditions.",
    },
    {
      question:
        "What blood alcohol concentration (BAC) level constitutes DUI for a driver under 21 years old in North Dakota?",
      options: ["0.08%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation:
        "North Dakota uses a 0.02% BAC threshold for drivers under 21, which effectively prohibits any meaningful alcohol consumption before driving. For adult drivers 21 and older, the standard 0.08% BAC threshold applies. Commercial vehicle drivers face a 0.04% threshold. North Dakota also has implied consent laws, meaning refusing a chemical test (breathalyzer or blood test) triggers an automatic license revocation separate from any criminal DUI charges.",
    },
    {
      question:
        "During fall harvest season in North Dakota, you are driving on a two-lane state highway and approach a large grain combine traveling at approximately 15 mph. What should you do?",
      options: [
        "Flash your headlights to signal the combine to pull over",
        "Follow closely to be ready to pass at the first opportunity",
        "Allow ample following distance, wait for a safe legal passing opportunity, and pass only when you can see clearly ahead",
        "Honk and pass immediately — farm equipment must yield to faster traffic",
      ],
      correctIndex: 2,
      explanation:
        "Farm equipment legally uses North Dakota's state and county highways during planting and harvest seasons. Combines, grain carts, and planters travel at 15–25 mph and can be extremely wide. Drivers must allow safe following distance, be patient, and pass only when the road ahead is clearly visible and the maneuver can be completed safely and legally. Aggressive passing of farm equipment is a leading cause of rural road accidents in North Dakota.",
    },
    {
      question:
        "North Dakota's NDDOT 511 system provides what type of information critical to winter drivers?",
      options: [
        "Weather forecasts only, not road conditions",
        "Real-time road conditions, closures, and travel advisories for North Dakota highways",
        "Construction zone schedules for the spring season",
        "Speed limit changes for rural highways",
      ],
      correctIndex: 1,
      explanation:
        "NDDOT's 511 system provides real-time road condition information, including road closures, travel advisories, weather conditions on specific highway segments, and whether roads are open or closed. This information is critical for North Dakota winter drivers because the state regularly closes major Interstate highways during blizzards. Checking 511 before and during winter travel is a recommended safety practice — and knowing a road is closed before you reach the closure prevents dangerous situations.",
    },
    {
      question:
        "In North Dakota, what is the general speed limit on undivided two-lane highways outside cities and towns?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      correctIndex: 2,
      explanation:
        "North Dakota's default speed limit on undivided two-lane state highways outside urban areas is 65 mph. This is lower than the 75 mph rural Interstate limit. County roads may have lower posted limits, and speed limits in towns, school zones, and construction zones are always lower. Drivers must also always reduce speed to match actual road and weather conditions, regardless of the posted limit.",
    },
  ],
  faqs: [
    {
      question: "What agency administers driver licensing in North Dakota?",
      answer:
        "The North Dakota Department of Transportation (NDDOT) Driver License Site administers all driver licensing, knowledge testing, and skills testing in North Dakota. Driver license offices are located in cities and towns across the state. The NDDOT also manages road condition reporting through its 511 system and issues guidance on seasonal road restrictions.",
    },
    {
      question: "What is the North Dakota DMV knowledge test format?",
      answer:
        "The North Dakota knowledge test consists of 25 multiple-choice questions drawn from the North Dakota Driver's License Study Guide. A passing score of 80% — at least 20 correct answers — is required. The test covers traffic laws, road signs, and safe driving practices specific to North Dakota. If you fail, a waiting period applies before you can retake the test. The test is available in multiple languages at NDDOT offices.",
    },
    {
      question: "What are the graduated driver licensing stages in North Dakota?",
      answer:
        "North Dakota's Graduated Driver License (GDL) program begins with an instruction permit available at age 14. Permit holders must be accompanied by a licensed driver at least 18 years old. A restricted license (Stage 2) becomes available at age 16 after holding the permit for at least 12 months and completing required supervised driving hours. Restrictions on the Stage 2 license include no driving between 9 PM and 5 AM during the first 6 months and a limit of one non-family passenger under 18. A full unrestricted license (Stage 3) is available at 16 years and 6 months after all requirements are met.",
    },
    {
      question: "When are North Dakota roads most likely to be closed by NDDOT?",
      answer:
        "NDDOT road closures occur most frequently during blizzards, which typically strike between November and March. I-94 (the east-west Interstate) and I-29 (the north-south Interstate along the Minnesota border) are the most commonly closed routes. Closures happen when ground blizzard conditions create zero-visibility whiteouts — North Dakota's flat terrain allows wind to push snow horizontally across roads even when snowfall amounts are modest. Drivers should check NDDOT's 511 system or website before traveling during any winter storm.",
    },
    {
      question: "What should drivers know about Bakken oilfield county roads in western North Dakota?",
      answer:
        "In Williams, McKenzie, Mountrail, and Dunn counties — the heart of the Williston Basin Bakken Formation oil patch — county roads have been damaged by years of heavy oilfield truck traffic. Under NDCC § 39-12-04, counties may post reduced weight limits or restrict vehicle access on damaged roads. These restrictions can change seasonally (spring thaw weakens road surfaces further). Drivers and especially CDL operators traveling through oilfield areas must check current county postings before using rural roads.",
    },
    {
      question: "Does North Dakota have a hands-free driving law?",
      answer:
        "Yes. North Dakota's SB 2016, effective August 1, 2021, prohibits all drivers from holding or using a handheld mobile device while operating a motor vehicle. You may not hold your phone to your ear, hold it in your hand on speaker, or interact with it manually while driving. Hands-free operation via Bluetooth headsets or vehicle-integrated systems is permitted. Violations are primary offenses, meaning law enforcement can stop you solely for holding a device.",
    },
    {
      question: "What is the open range law in North Dakota, and how does it affect drivers?",
      answer:
        "Open range law applies to most of western North Dakota, meaning livestock owners are not legally required to fence cattle, horses, and other animals away from public roads. If you are driving in open range territory and strike livestock, the driver — not the rancher — may bear financial liability for damage to the animal. This makes vigilant scanning for livestock on rural roads essential, especially at night when cattle are almost invisible until you are very close.",
    },
    {
      question: "What are North Dakota's DUI penalties for a first offense?",
      answer:
        "A first DUI offense in North Dakota for an adult driver (BAC 0.08% or higher) results in a mandatory 91-day license suspension (or 25 days if the driver complies with all conditions), a $500 minimum fine, and mandatory completion of a DUI education program. Aggravating factors such as a BAC of 0.16% or higher, presence of a minor passenger, or prior DUI history increase penalties significantly. North Dakota's implied consent law means refusing a chemical test results in an automatic 180-day license revocation for a first refusal.",
    },
    {
      question: "What are the speed limits on North Dakota highways?",
      answer:
        "North Dakota's speed limits include: 75 mph on rural Interstate highways (I-94, I-29); 65 mph on most undivided two-lane state highways outside cities; and lower limits in urban areas, school zones, and construction zones. Posted limits represent maximum speeds in ideal conditions — during North Dakota's frequent winter storms, safe driving speeds can be far below posted limits. Driving at excessive speed for conditions is a separate violation from exceeding the posted limit.",
    },
    {
      question: "What documentation is required to get a North Dakota driver's license?",
      answer:
        "To obtain a North Dakota driver's license, applicants must provide proof of identity (such as a birth certificate or passport), proof of Social Security number, and proof of North Dakota residency (such as a utility bill or bank statement). REAL ID-compliant licenses require additional documentation. All documents must be original or certified copies — photocopies are not accepted. New residents from other states must transfer their out-of-state license within 60 days of establishing North Dakota residency.",
    },
    {
      question: "What should I know about driving during North Dakota winters?",
      answer:
        "North Dakota winters are among the most severe in the continental United States. Blizzards can reduce visibility to zero within minutes. Drivers should equip vehicles with winter tires or carry chains, maintain a full fuel tank during winter travel, carry an emergency kit (blankets, food, water, shovel, jumper cables, flares), and always check NDDOT 511 before long trips. Never attempt to drive around road closure barriers — drivers have died in their vehicles in whiteout conditions on closed North Dakota highways. If you are caught in a blizzard on the road, it is safer to stay with your vehicle than to attempt to walk for help.",
    },
  ],
  relatedTests: [
    { label: "North Dakota Motorcycle Practice Test", href: "/north-dakota-motorcycle-practice-test" },
    { label: "North Dakota CDL Practice Test", href: "/north-dakota-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NorthDakotaDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
