import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Utah DMV Practice Test 2025 – Free UT Driver's License Exam Prep",
  description:
    "Prepare for your Utah Driver License Division knowledge test with free practice questions covering Utah's 0.05% DUI threshold (lowest in the US), Parley's Canyon grades, Great Salt Lake road flooding, and UT-specific traffic laws. 50 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/utah-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/utah-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Utah",
  stateAbbr: "UT",
  testLabel: "DMV Practice Test",
  slug: "utah-dmv-practice-test",
  headline: "Utah DMV Practice Test 2025",
  intro:
    "The Driver License Division, Utah Department of Public Safety (DPS), administers a 50-question knowledge test — one of the longest in the nation. You must answer at least 40 questions correctly (80%) to pass. This free practice test covers Utah's landmark 0.05% DUI threshold (the lowest of any U.S. state), Parley's Canyon grade driving, Great Salt Lake area road conditions, the hands-free law, and other Utah-specific traffic rules.",
  basedOn: "Utah Driver License Division Driver Handbook (Utah DPS)",
  keyRules: [
    {
      icon: "🍺",
      rule: "Utah's DUI Threshold: 0.05% BAC — Lowest in the U.S.",
      detail:
        "Utah HB 155 (2017) lowered the DUI BAC threshold from 0.08% to 0.05%, effective December 30, 2018. At 0.05%, Utah has the lowest DUI threshold of any U.S. state — a BAC level that is legal to drive at in all 49 other states. For many adults, 0.05% can be reached with just one standard drink.",
    },
    {
      icon: "🏔️",
      rule: "Parley's Canyon (I-80): Steep 6% Grade",
      detail:
        "I-80 east of Salt Lake City descends through Parley's Canyon on a 6% grade into the Salt Lake Valley. Chain control is enforced during winter storms. A runaway truck ramp is available. Drivers must check brakes before descending, downshift or use engine braking on long descents, and reduce speed below posted limits when road conditions deteriorate.",
    },
    {
      icon: "🧂",
      rule: "Great Salt Lake Area: Road Flooding and Salt Flats",
      detail:
        "I-80 west of Salt Lake City runs through the Bonneville Salt Flats area. When Great Salt Lake levels rise, road flooding is possible on adjacent roads. The salt flat surface creates unique traction conditions. Never attempt to cross flooded roads — the depth may be far greater than it appears.",
    },
    {
      icon: "📱",
      rule: "Hands-Free Law: No Handheld Device Use",
      detail:
        "Utah's hands-free law prohibits handheld mobile device use while driving. You may not hold your phone while the vehicle is in motion. Hands-free Bluetooth calling is permitted. Violations are primary offenses. Utah also has some of the strictest distracted driving enforcement in the Mountain West.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 15 Years Old",
      detail:
        "Utah issues instruction permits at age 15. Permit holders must be accompanied by a licensed driver at least 21 years old. Utah's GDL program requires at least 40 hours of supervised driving (including 10 hours at night) before a restricted license can be issued. A full license is available at age 17 after completing all GDL requirements.",
    },
    {
      icon: "🚗",
      rule: "80 MPH Rural Interstate Speed Limit",
      detail:
        "Utah's rural Interstate highways (I-15, I-70, I-80) have an 80 mph speed limit in some sections — one of the highest in the nation. Speed limits apply in ideal conditions. Always reduce speed for weather, construction, and traffic conditions, particularly on mountain grades and desert highways.",
    },
    {
      icon: "🚫",
      rule: "0.00% BAC for Drivers Under 21",
      detail:
        "Utah enforces a zero-tolerance policy for drivers under 21: any detectable alcohol (essentially 0.00% BAC) is a violation. Utah's 0.05% DUI threshold for adults is itself below the legal limit in every other state, making Utah's zero-tolerance policy for minors especially strict. Under-21 DUI carries automatic license suspension.",
    },
    {
      icon: "🏢",
      rule: "Driver License Division (DPS) — Not a 'DMV'",
      detail:
        "Utah's driver licensing agency is the Driver License Division, within the Utah Department of Public Safety — not a 'DMV.' The Driver License Division issues all driver licenses and handles testing at Driver License Division offices throughout the state. Some DMV functions (like vehicle registration) are handled by the Utah Division of Motor Vehicles, a separate agency.",
    },
  ],
  about: [
    "The Driver License Division, within the Utah Department of Public Safety (DPS), administers all driver licensing and testing in Utah. The knowledge test consists of 50 multiple-choice questions drawn from the Utah Driver Handbook — one of the longest knowledge tests in the United States. A passing score of 80% — 40 correct answers out of 50 — is required. Utah's permit age is 15, and the GDL program requires 40 hours of supervised driving before a restricted license is issued. First-time applicants who fail the knowledge test may retake it after a waiting period specified by the Driver License Division.",
    "Utah's most consequential and most nationally significant driving law is its DUI threshold: 0.05% BAC. Utah's HB 155 (2017), effective December 30, 2018, lowered the DUI BAC from 0.08% to 0.05% — making Utah the first and only U.S. state with a 0.05% DUI threshold. This means that at a BAC level that is fully legal to drive at in all 49 other states, a Utah driver can face DUI charges with their full criminal and administrative consequences: license suspension, fines, possible jail time, and ignition interlock device installation. For many adults, a BAC of 0.05% can be reached with a single standard drink, depending on body weight, metabolism, and timing.",
    "Utah's geography creates several unique driving challenges. Parley's Canyon on I-80 east of Salt Lake City descends on a 6% grade into the Salt Lake Valley — a grade that requires chain control in winter and claims runaway truck incidents every year. A runaway truck ramp is available. The Great Salt Lake area west of Salt Lake City on I-80 presents unique conditions: when lake levels rise, adjacent roads can flood, and the Bonneville Salt Flats surface creates traction conditions unlike typical asphalt. Canyon roads throughout Utah (US-189 through Provo Canyon, US-191 through Spanish Fork Canyon) are steep and winding, requiring careful speed management, especially when descending. Utah's Driver License Division issues permits at 15 and requires 40 hours of supervised driving before a restricted license.",
  ],
  sampleQuestions: [
    {
      question:
        "What is Utah's DUI blood alcohol concentration (BAC) threshold for adult drivers age 21 and older, and how does it compare to all other U.S. states?",
      options: [
        "0.08% — the same as all other U.S. states",
        "0.05% — the lowest DUI threshold of any U.S. state",
        "0.06% — slightly lower than the national standard",
        "0.04% — the same as the federal CDL standard",
      ],
      correctIndex: 1,
      explanation:
        "Utah's DUI threshold is 0.05% BAC — the lowest of any U.S. state. Every other state in the nation uses 0.08%. Utah's HB 155 (2017) lowered the threshold from 0.08% to 0.05%, effective December 30, 2018. At 0.05% BAC, a Utah driver can be arrested for DUI at a level that would be fully legal to drive at in California, Texas, New York, Florida, and every other state. For many adults of average weight, a single standard drink can produce a BAC around 0.03–0.05%, meaning 0.05% is within reach of very light alcohol consumption.",
    },
    {
      question:
        "You are driving eastbound on I-80 approaching Salt Lake City via Parley's Canyon. The canyon descent has a grade of approximately 6%. What is the recommended approach?",
      options: [
        "Maintain the posted speed limit — the grade is not steep enough to affect braking",
        "Check your brakes before descending, use engine braking (lower gear) to control speed, and do not ride the brakes continuously",
        "Increase speed slightly to get through the canyon quickly and reduce engine wear",
        "Turn on your hazard lights and coast down in neutral",
      ],
      correctIndex: 1,
      explanation:
        "Parley's Canyon on I-80 has a 6% descending grade into the Salt Lake Valley — steep enough to cause brake fade on heavy vehicles if brakes are applied continuously. The correct technique is to use engine braking (lower gears) to control speed rather than riding the brakes, which can cause overheating and brake failure. Check brakes at the top of the grade, select an appropriate gear before beginning descent, and apply brakes in intervals rather than continuously. A runaway truck ramp is available on the canyon descent for vehicles that lose braking control.",
    },
    {
      question:
        "At what blood alcohol concentration (BAC) does Utah consider a driver under age 21 to be in violation of the DUI law?",
      options: [
        "0.05% — the same as the adult standard",
        "0.02% — Utah's under-21 limit",
        "Any detectable alcohol — essentially 0.00%",
        "0.04% — the federal CDL standard",
      ],
      correctIndex: 2,
      explanation:
        "Utah enforces a zero-tolerance policy for drivers under 21: any detectable alcohol — essentially a 0.00% BAC — is a violation. Given that Utah's adult DUI threshold is already 0.05% (the lowest in the nation), the under-21 zero-tolerance policy makes Utah's laws on underage drinking and driving among the most restrictive in the country. Any amount of alcohol that can be detected by a chemical test can result in DUI charges for an underage Utah driver.",
    },
    {
      question:
        "The Utah Driver License Division is part of which state agency?",
      options: [
        "Utah Department of Motor Vehicles (DMV)",
        "Utah Department of Transportation (UDOT)",
        "Utah Department of Public Safety (DPS)",
        "Utah Division of Administrative Services",
      ],
      correctIndex: 2,
      explanation:
        "The Utah Driver License Division is a division within the Utah Department of Public Safety (DPS) — not a separate DMV. The Driver License Division handles all driver licensing, testing, and related functions. Vehicle registration and title functions are handled by the Utah Division of Motor Vehicles, which is a separate agency. When preparing for the Utah driver's license test, applicants should visit a Driver License Division office, not a general DMV office.",
    },
    {
      question:
        "What is the maximum speed limit on Utah's rural Interstate highways such as I-15 and I-80?",
      options: ["70 mph", "75 mph", "80 mph", "65 mph"],
      correctIndex: 2,
      explanation:
        "Utah's rural Interstate highways, including I-15 (the primary north-south corridor through Salt Lake City and beyond) and I-80 (the east-west corridor), have an 80 mph speed limit in many rural sections. This is one of the highest Interstate speed limits in the nation. The 80 mph limit applies only in ideal conditions — during winter storms, canyon passages like Parley's Canyon, and high-traffic urban sections, speed must be reduced to match actual conditions.",
    },
    {
      question:
        "What is the minimum age to obtain an instruction permit in Utah?",
      options: ["14 years old", "15 years old", "16 years old", "15½ years old"],
      correctIndex: 1,
      explanation:
        "Utah issues instruction permits at age 15. Permit holders must be accompanied by a licensed driver who is at least 21 years old whenever they are behind the wheel. Utah's GDL program requires a minimum of 40 hours of supervised driving, including at least 10 hours at night, before a restricted license can be issued. A full unrestricted license becomes available at age 17 after completing all GDL requirements, including a minimum period of holding the restricted license.",
    },
    {
      question:
        "I-80 west of Salt Lake City runs through the area near the Great Salt Lake and Bonneville Salt Flats. What unique driving hazard exists in this area when Great Salt Lake water levels are high?",
      options: [
        "Salt crystals on the road surface cause tires to hydroplane",
        "Road flooding on adjacent roads when lake levels rise, combined with unique salt flat traction conditions",
        "Extreme dust storms from the dry salt lake bed reduce visibility to zero",
        "Magnetic interference from salt deposits affects vehicle navigation systems",
      ],
      correctIndex: 1,
      explanation:
        "When Great Salt Lake water levels rise, roads adjacent to the lake can experience flooding. The lake's level has varied significantly over the years due to drought and snowpack changes. Additionally, the Bonneville Salt Flats surface creates traction conditions that differ from standard asphalt — the hard salt crust can become slippery when wet and has different adhesion properties for tires. Drivers in this area should never attempt to cross flooded road sections, as water depth over the flat terrain can be deceptive.",
    },
    {
      question:
        "Under Utah's hands-free law, which activity is permitted while driving?",
      options: [
        "Holding your phone to check GPS directions at a red light",
        "Making a phone call using a Bluetooth-enabled hands-free headset",
        "Composing a voice text message while holding the phone",
        "Checking social media at speeds under 25 mph",
      ],
      correctIndex: 1,
      explanation:
        "Utah's hands-free law prohibits all handheld mobile device use while operating a motor vehicle. Drivers may not hold their phone for any purpose while the vehicle is in motion. Hands-free use via Bluetooth headsets or vehicle-integrated systems is permitted. The law applies at all speeds and at stops (red lights, stop signs). Voice-to-text features may only be used in a hands-free manner through the vehicle's integrated system or a Bluetooth device — not by holding the phone.",
    },
    {
      question:
        "How many questions are on the Utah Driver License Division knowledge test, and what score is needed to pass?",
      options: [
        "20 questions, 80% (16/20)",
        "25 questions, 80% (20/25)",
        "40 questions, 75% (30/40)",
        "50 questions, 80% (40/50)",
      ],
      correctIndex: 3,
      explanation:
        "Utah's Driver License Division knowledge test consists of 50 multiple-choice questions — one of the longest in the United States. A passing score of 80% is required, meaning at least 40 correct answers out of 50. The longer test reflects Utah's comprehensive approach to driver education. The test covers traffic laws, road signs, the state's unique 0.05% DUI threshold, mountain driving rules, and other Utah-specific driving knowledge.",
    },
    {
      question:
        "Chain control is frequently enforced in Parley's Canyon (I-80) during winter. What does 'chain control' require drivers to do?",
      options: [
        "Slow to 30 mph through the canyon regardless of road conditions",
        "Install tire chains or have traction tires (snow tires) on your vehicle before proceeding through the restricted zone",
        "Follow a lead UDOT vehicle through the canyon at reduced speed",
        "Stop at the canyon entrance and wait for a clear weather window before proceeding",
      ],
      correctIndex: 1,
      explanation:
        "Chain control in Parley's Canyon requires vehicles to have either tire chains installed or qualifying traction tires (typically marked 'M+S' or with a snowflake symbol) before entering the restricted section. Utah Department of Transportation (UDOT) enforces chain control at gates on I-80. Drivers without qualifying tires or chains during chain control periods may be turned back or fined. During severe conditions, UDOT may close Parley's Canyon entirely. Chain control notices are broadcast on UDOT's 511 system and variable message signs.",
    },
  ],
  faqs: [
    {
      question: "What agency administers driver licensing in Utah?",
      answer:
        "The Driver License Division, within the Utah Department of Public Safety (DPS), administers all driver licensing and testing in Utah. It is sometimes informally called the 'Utah DMV' but is technically the Driver License Division. Vehicle registration, titles, and related services are handled separately by the Utah Division of Motor Vehicles, which is a different agency. Driver License Division offices are located throughout the state, with major offices in Salt Lake City, Ogden, Provo, and other cities.",
    },
    {
      question: "Why did Utah lower its DUI limit to 0.05%?",
      answer:
        "Utah's Legislature passed HB 155 in 2017, lowering the DUI BAC threshold from 0.08% to 0.05% effective December 30, 2018. Proponents argued that the World Health Organization recommends 0.05% as the standard, that most impairment studies show driving ability is compromised at 0.05%, and that the law would reduce traffic fatalities. Utah was the first U.S. state to adopt 0.05%, making it the lowest DUI threshold in the nation. The law generated national attention and debate about whether other states should follow Utah's lead.",
    },
    {
      question: "What are the GDL stages in Utah?",
      answer:
        "Utah's Graduated Driver License (GDL) program begins with an instruction permit at age 15. Permit holders must drive with a licensed adult 21+ at all times and complete at least 40 hours of supervised driving (10+ hours at night). A restricted license (Stage 2) is available after 6 months with the permit and meeting all driving requirements. Stage 2 restrictions include no driving between midnight and 5 AM, and limitations on non-family passengers under 18. A full unrestricted license is available at age 17 after completing all Stage 2 requirements.",
    },
    {
      question: "What makes Parley's Canyon (I-80) particularly dangerous?",
      answer:
        "Parley's Canyon on I-80 east of Salt Lake City descends on a sustained 6% grade into the Salt Lake Valley. This grade is steep enough to cause brake fade and brake failure on vehicles — particularly trucks, RVs, and vehicles towing trailers — if drivers continuously apply the brakes rather than using engine braking. In winter, ice, snow, and chain control create additional hazards. A runaway truck ramp is available on the descent for vehicles that lose brake control. UDOT frequently enforces chain control requirements and occasionally closes the canyon during severe winter storms.",
    },
    {
      question: "What is the difference between Utah's DUI charge and what other states call it?",
      answer:
        "Utah uses the term 'DUI' (Driving Under the Influence) for the 0.05% BAC offense. There is no separate 'DWAI' (Driving While Ability Impaired) category as some states have — in Utah, 0.05% is the DUI threshold itself, not a lesser offense. Driving Under the Influence of drugs (including prescription medications that impair driving) is also illegal in Utah regardless of BAC. A DUI conviction in Utah carries mandatory license suspension, fines, possible jail time, and for many offenses, an ignition interlock device requirement.",
    },
    {
      question: "Does Utah have a hands-free cell phone law?",
      answer:
        "Yes. Utah prohibits handheld mobile device use while driving. The law bans holding a phone for any purpose while operating a vehicle, including at red lights and stop signs. Hands-free use via Bluetooth headsets or vehicle-integrated systems is permitted. Violations are primary offenses. Utah also has strict distracted driving laws that allow additional charges if distraction contributed to an accident — Utah's 'Reckless Driving Due to Distraction' statute can upgrade a distracted driving accident to a more serious charge.",
    },
    {
      question: "What should Utah drivers know about canyon road driving?",
      answer:
        "Utah has numerous canyon roads used for both commuting and recreation, including Parley's Canyon (I-80), Provo Canyon (US-189), Spanish Fork Canyon (US-6), Logan Canyon (US-89), and others. Canyon driving rules include: check brakes before descending steep grades, use engine braking (lower gears) on long descents rather than continuous brake application, follow chain control requirements in winter, watch for rocks and debris on the road, and observe speed limits (canyon roads have lower limits than open highways). During extreme weather, UDOT can close canyon roads entirely.",
    },
    {
      question: "What are Great Salt Lake area driving hazards?",
      answer:
        "The Great Salt Lake and its surrounding area west of Salt Lake City create unique driving conditions on I-80 and nearby roads. When lake levels are high, adjacent roads can experience flooding — the flat terrain means water can spread widely and appear shallower than it is. Never drive through flooded road sections in this area. The Bonneville Salt Flats surface (used for land speed records) has different traction properties from asphalt. I-80 through this area also experiences strong crosswinds and reduced visibility from blowing salt and dust during windy conditions.",
    },
    {
      question: "What is the Utah knowledge test format, and how does it differ from other states?",
      answer:
        "Utah's knowledge test has 50 questions — significantly more than most states, which typically use 20–25 question tests. A passing score of 80% (40/50 correct) is required. The longer test reflects Utah's emphasis on thorough driver education. The test covers all standard topics (traffic laws, road signs, safe driving) plus Utah-specific material: the 0.05% DUI threshold, canyon and mountain driving rules, Parley's Canyon chain control, Great Salt Lake area conditions, and the state's hands-free law. The Utah Driver Handbook should be studied completely before taking the test.",
    },
    {
      question: "What is Utah's policy on DUI for prescription drug users?",
      answer:
        "Utah's DUI law covers impairment from any substance — including prescription medications. A driver who is impaired by a prescription medication can be charged with DUI in Utah even if their BAC is 0.00% and they took the medication as prescribed. Utah has specific DUI provisions for controlled substance impairment that do not require a BAC test result — impairment is determined through field sobriety tests and Drug Recognition Expert (DRE) evaluation. Utah drivers taking any medication that may affect driving should consult their physician about whether it is safe to drive while taking it.",
    },
  ],
  relatedTests: [
    { label: "Utah Motorcycle Practice Test", href: "/utah-motorcycle-practice-test" },
    { label: "Utah CDL Practice Test", href: "/utah-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function UtahDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
