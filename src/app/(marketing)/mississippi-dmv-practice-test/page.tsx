import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Mississippi DMV Practice Test 2025 – Free DPS Knowledge Exam Prep",
  description: "Prepare for the Mississippi DPS driver's license knowledge test with 30 state-specific questions covering HB 1283 hands-free law, DUI penalties, rear seatbelt rules, extreme heat driving, and Mississippi road conditions. Free 2025 practice test.",
  alternates: { canonical: "https://caredmvprep.com/mississippi-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/mississippi-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Mississippi",
  stateAbbr: "MS",
  testLabel: "DMV Practice Test",
  slug: "mississippi-dmv-practice-test",
  headline: "Mississippi DPS Practice Test 2025",
  intro: "The Mississippi Department of Public Safety (DPS), Driver Services administers a 30-question knowledge exam. You must answer 24 questions correctly (80%) to pass. This practice test covers Mississippi-specific laws including HB 1283 (the 2024 hands-free distracted driving law effective January 1, 2025), DUI thresholds, the state's unique rear seatbelt rules, extreme summer heat driving hazards, and Mississippi road conditions.",
  basedOn: "Mississippi Department of Public Safety Driver's License Study Guide",
  keyRules: [
    { icon: "📱", rule: "HB 1283 – Hands-Free Law (2025)", detail: "Mississippi House Bill 1283, effective January 1, 2025, bans handheld device use while driving. This ended Mississippi's status as one of the last U.S. states without a primary hands-free law. Drivers may not hold a phone or device while operating a vehicle. Violations are a primary offense — officers can stop you solely for device use." },
    { icon: "🍺", rule: "DUI Limits", detail: "Mississippi uses DUI (Driving Under the Influence) terminology. The legal limit is 0.08% BAC for adults 21 and older. Drivers under 21 face a 0.02% BAC threshold. First-offense DUI penalties include fines of $250–$1,000, possible 48-hour jail time, and license suspension of up to 90 days." },
    { icon: "🪑", rule: "Rear Seatbelt Law (Adults Exempt)", detail: "Mississippi Code § 63-2-1 does not require adult rear-seat passengers to wear seatbelts. Only the front-seat occupants and children in rear seats are covered by Mississippi's seatbelt law. This is one of the most unusual seatbelt laws in the U.S. — most states require all occupants to be belted regardless of seating position." },
    { icon: "🌡️", rule: "Extreme Summer Heat", detail: "Mississippi summers regularly exceed 100°F with high humidity. Road surface temperatures can reach 150°F, dramatically increasing tire blowout risk. Drivers should check tire pressure before long drives (heat causes pressure to rise), monitor coolant levels, and avoid parking on soft asphalt that can cause tire deformation." },
    { icon: "🏍️", rule: "Permit Age: 15", detail: "Mississippi allows residents to apply for a learner's permit at age 15. Permit holders must pass the DPS written knowledge test and vision exam. The permit requires a licensed supervising driver age 21 or older in the front passenger seat during all driving." },
    { icon: "⛴️", rule: "Natchez-Vidalia Ferry", detail: "The Natchez-Vidalia Ferry crossing the Mississippi River between Natchez, MS and Vidalia, LA is one of the last operating toll-free vehicle ferries on the Mississippi River. Drivers boarding the ferry must follow crew directions, set the parking brake, turn off the engine, and remain in the vehicle or in designated passenger areas during the crossing." },
    { icon: "🌊", rule: "Flood-Prone Roads", detail: "The Mississippi Delta and Gulf Coast regions are prone to rapid flooding. Mississippi drivers must obey 'Road Closed' barriers at flood-prone crossings — attempting to drive through standing water is extremely dangerous as little as 12 inches of moving water can sweep a car off a road. 'Turn Around, Don't Drown' is a life-saving rule in Mississippi." },
    { icon: "🚧", rule: "Construction Zone Fines", detail: "Mississippi doubles traffic fines for violations occurring in active highway construction zones, including speeding, following too closely, and improper lane changes. Construction zones are common on I-20, I-55, and US-49 where MDOT conducts frequent infrastructure improvements. Fines are doubled whether or not construction workers are present." },
  ],
  about: [
    "The Mississippi Department of Public Safety (DPS), Driver Services division administers the state's driver licensing program — Mississippi uses DPS rather than a traditional DMV, similar to Oklahoma and Tennessee. The knowledge exam consists of 30 questions, and applicants must answer at least 24 correctly (80%) to pass. Mississippi's permit age is 15 years old. The 2025 knowledge exam reflects a significant legal change: Mississippi House Bill 1283, effective January 1, 2025, enacted a comprehensive ban on handheld device use while driving. This law made Mississippi one of the last states to adopt a primary hands-free law, and it is a major focus of updated 2025 exam questions.",
    "Mississippi's seatbelt law contains an unusual provision: Mississippi Code § 63-2-1 does not require adult rear-seat passengers to wear seatbelts. Front-seat occupants of all ages and children in rear seats must be buckled, but adult passengers in the rear seat are exempt from the law's requirement. This is directly testable on the DPS knowledge exam and distinguishes Mississippi from most other states. The DUI threshold in Mississippi is 0.08% BAC for adults and 0.02% for drivers under 21. First-offense DUI penalties include fines, potential jail time, and license suspension.",
    "Mississippi's climate creates specific driving hazards that are tested on the DPS exam. Summer temperatures regularly exceed 100°F with high humidity, and road surfaces can reach 150°F — dramatically increasing tire blowout risk and making prolonged parking on asphalt potentially damaging to tires. The Mississippi Delta and Gulf Coast areas experience flooding that can inundate roads rapidly, especially during hurricane season (June–November). The Natchez-Vidalia Ferry operates across the Mississippi River as a toll-free vehicle crossing, and drivers must follow specific boarding and crossing procedures. I-20, I-55, and US-49 are the major corridors where DPS exam questions address highway driving, construction zone rules, and high-speed lane change procedures.",
  ],
  sampleQuestions: [
    {
      question: "Mississippi House Bill 1283, effective January 1, 2025, changed which driving law?",
      options: ["It raised the DUI BAC threshold to 0.10%", "It banned handheld device use while driving, creating Mississippi's first comprehensive hands-free law", "It lowered the speed limit on Mississippi interstates to 65 mph", "It made rear seatbelts mandatory for all passengers"],
      correctIndex: 1,
      explanation: "HB 1283, effective January 1, 2025, is Mississippi's comprehensive hands-free distracted driving law. Before HB 1283, Mississippi was one of the few remaining states with no primary law banning handheld device use while driving. The new law makes it illegal to hold a phone or electronic device while operating a motor vehicle. It is a primary offense, meaning officers can stop drivers solely for violating this law. This is one of the most significant changes to Mississippi's traffic law in recent years and is directly tested on the 2025 DPS knowledge exam."
    },
    {
      question: "Under Mississippi Code § 63-2-1, which vehicle occupants are NOT required by state law to wear a seatbelt?",
      options: ["Children under age 8 in rear seats", "Adult passengers sitting in the rear seat", "Front-seat passengers of any age", "Drivers of all ages"],
      correctIndex: 1,
      explanation: "Mississippi's seatbelt law (MS Code § 63-2-1) does not require adult passengers seated in the rear seat to wear a seatbelt. This is one of the most unusual seatbelt provisions in the United States — most states require all vehicle occupants to be belted regardless of seating position. Mississippi law does require front-seat occupants (driver and any front passenger) to be belted, and children in rear seats must be properly restrained in age-appropriate child safety seats or seatbelts. Adult rear passengers are exempt from the requirement, though safety experts strongly recommend belting regardless of legal obligation."
    },
    {
      question: "The Mississippi DPS administers driver licensing in Mississippi. Which state agency handles driver services, and what is the exam structure?",
      options: ["Mississippi DMV; 25-question test with 80% passing", "Mississippi Department of Public Safety, Driver Services; 30-question test requiring 24 correct answers", "Mississippi Secretary of State; 35-question test with 75% passing", "Mississippi DOR; 28-question test with 80% passing"],
      correctIndex: 1,
      explanation: "Mississippi driver licensing is handled by the Department of Public Safety (DPS), Driver Services division — Mississippi does not have a traditional DMV. The knowledge exam consists of 30 questions, and applicants must answer at least 24 correctly to achieve the required 80% passing score. DPS operates driver license offices throughout the state, and the knowledge exam covers Mississippi traffic laws, road signs, and safe driving practices as outlined in the DPS Driver's License Study Guide."
    },
    {
      question: "During a Mississippi summer, road surface temperatures can reach 150°F. What specific tire hazard does this extreme heat create?",
      options: ["Tires become permanently flat from heat absorption", "Dramatically increased tire blowout risk due to heat expansion of air inside the tire and softening of tire rubber compounds", "Tires lose traction because asphalt melts and coats the tread", "High temperatures cause tire pressure to drop to unsafe levels"],
      correctIndex: 1,
      explanation: "When road surface temperatures reach 150°F — common in Mississippi summers with ambient temperatures exceeding 100°F — tires are subjected to extreme stress. Heat causes the air inside tires to expand, raising pressure beyond recommended levels. Simultaneously, the rubber compounds in tire sidewalls and tread soften under extreme heat, reducing structural integrity. This combination dramatically increases the risk of tire blowouts, especially at highway speed. Drivers should check tire pressure before long summer drives (in the cooler morning), inspect tires for wear and damage, and avoid overloading vehicles in summer heat."
    },
    {
      question: "A Mississippi driver encounters a flooded road crossing in the Delta region. The water covers the road to an unknown depth. What is the correct action?",
      options: ["Test the depth by driving through slowly with hazard lights on", "Turn around — 'Turn Around, Don't Drown' applies; never drive through standing water of unknown depth", "Accelerate to cross the water quickly before the vehicle stalls", "Wait 30 minutes and then proceed if water level has not risen"],
      correctIndex: 1,
      explanation: "The 'Turn Around, Don't Drown' principle is a life-saving rule in Mississippi, where the Delta region and Gulf Coast are highly prone to rapid flooding. As little as 12 inches of moving water can sweep a standard passenger car off a road, and 2 feet of moving water can carry away most SUVs and trucks. Road depth is impossible to determine visually — a road may drop away or the current may be far stronger than it appears. Mississippi drivers should never attempt to drive through flooded road crossings and must obey 'Road Closed' barriers even if the closure appears unnecessary."
    },
    {
      question: "What is the BAC limit for a Mississippi driver under age 21 under the state's DUI law?",
      options: ["0.08%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation: "Mississippi sets a 0.02% BAC threshold for drivers under 21 under the state's DUI law. This is consistent with the near-zero-tolerance approach used by most U.S. states for underage drivers, though it is not a complete zero-tolerance standard. For practical purposes, a 0.02% limit means any measurable alcohol intake before driving could constitute a DUI violation for a driver under 21. Penalties for underage DUI include license suspension, mandatory alcohol education programs, fines, and community service."
    },
    {
      question: "A driver is boarding the Natchez-Vidalia Ferry at Natchez for a Mississippi River crossing. What must the driver do once the vehicle is in position on the ferry?",
      options: ["Keep the engine running for quick departure", "Set the parking brake, turn off the engine, and remain in or near the vehicle as directed by ferry crew", "Move to the front of the ferry to maintain vehicle balance", "Keep the vehicle in drive gear to prevent rolling"],
      correctIndex: 1,
      explanation: "When boarding a vehicle ferry such as the Natchez-Vidalia Ferry, drivers must follow crew instructions, which typically require setting the parking brake firmly, turning off the engine (to reduce exhaust fumes and fire risk), and remaining in the vehicle or moving to designated passenger areas for the duration of the crossing. Ferry crews direct vehicles during loading and may secure vehicles with wheel chocks. Attempting to restart or move the vehicle during crossing without crew authorization is prohibited and dangerous. The Natchez-Vidalia Ferry is one of the last toll-free vehicle ferries operating on the Mississippi River."
    },
    {
      question: "Traffic fines for violations in Mississippi highway construction zones are set at what level compared to standard fines?",
      options: ["The same as standard fines", "50% higher than standard fines", "Double the standard fine amount", "Triple the standard fine amount"],
      correctIndex: 2,
      explanation: "Mississippi law doubles traffic fines for violations occurring in active highway construction zones. This doubled penalty applies to speeding, following too closely, improper lane changes, and other moving violations committed within the posted construction zone limits. Importantly, the doubled fines apply whether or not construction workers are actually present in the zone at the time of the violation. Construction zones are common on I-20, I-55, and US-49 where MDOT (Mississippi Department of Transportation) frequently conducts road improvement projects."
    },
    {
      question: "Under Mississippi DUI law, what is the maximum license suspension for a first-offense DUI conviction for an adult driver?",
      options: ["30 days", "60 days", "90 days", "180 days"],
      correctIndex: 2,
      explanation: "A first-offense adult DUI conviction in Mississippi can result in a license suspension of up to 90 days, in addition to fines of $250 to $1,000 and potential imprisonment of up to 48 hours. First offenders may be eligible for a hardship license for essential driving (work, school, medical appointments) during the suspension period. Mississippi's DUI law also requires completion of a Mississippi Alcohol Safety Education Program (MASEP) course as a condition of license reinstatement after a DUI suspension."
    },
    {
      question: "What is the minimum age to obtain a Mississippi learner's permit?",
      options: ["14 years old", "15 years old", "15½ years old", "16 years old"],
      correctIndex: 1,
      explanation: "Mississippi allows residents to apply for a learner's permit at age 15 after passing the DPS knowledge exam and vision test. Permit holders must be accompanied at all times by a licensed supervising driver who is at least 21 years old and seated in the front passenger seat. Mississippi's graduated driver license program includes mandatory permit holding periods and supervised driving hour requirements before permit holders can advance to a restricted license and eventually a full driver's license."
    },
  ],
  faqs: [
    {
      question: "What changed in Mississippi's distracted driving law in 2025?",
      answer: "Mississippi House Bill 1283, which took effect January 1, 2025, enacted the state's first comprehensive ban on handheld electronic device use while driving. Before this law, Mississippi was one of the last states in the U.S. without a primary law prohibiting handheld device use behind the wheel. HB 1283 makes it illegal to hold a phone, tablet, or other electronic device while operating a motor vehicle on any public road. It is a primary offense, so law enforcement can stop drivers solely for violating it. Hands-free technology (Bluetooth, dashboard-mounted devices, speakerphone not held in hand) is permitted. The law is directly tested on the 2025 Mississippi DPS knowledge exam."
    },
    {
      question: "Does Mississippi require all passengers to wear seatbelts?",
      answer: "No — Mississippi Code § 63-2-1 contains an unusual exemption: adult passengers seated in rear seats are not required by Mississippi law to wear seatbelts. The law requires the driver and all front-seat passengers to be belted, and children in rear seats must be restrained in appropriate child safety seats or seatbelts. Adult rear passengers are legally exempt. This is one of the most distinctive seatbelt provisions in the U.S. — nearly all other states require all occupants to be belted regardless of seating position. Safety advocates strongly recommend all occupants buckle up even though adults in rear seats are not legally required to do so in Mississippi."
    },
    {
      question: "What is Mississippi's DUI BAC threshold for adults and drivers under 21?",
      answer: "Mississippi uses DUI (Driving Under the Influence) terminology. For adults 21 and older, the legal BAC limit is 0.08%. For drivers under 21, the threshold is 0.02% — effectively a near-zero-tolerance standard. First-offense adult DUI penalties include fines of $250 to $1,000, potential imprisonment up to 48 hours, and license suspension up to 90 days. Mississippi also requires completion of the Alcohol Safety Education Program (MASEP) as a condition of reinstatement. Repeat DUI offenses carry progressively harsher penalties including mandatory ignition interlock device installation."
    },
    {
      question: "What should Mississippi drivers do to protect their vehicles from extreme summer heat?",
      answer: "Mississippi summers routinely bring ambient temperatures above 100°F and high humidity, with road surface temperatures reaching 150°F. To protect vehicles and avoid dangerous situations: check tire pressure in the morning before driving (heat increases pressure during the drive and underinflated tires are more susceptible to blowouts), inspect tires for cracks or wear that heat can worsen, maintain proper coolant levels and check the radiator cap and hoses before long trips, keep the gas tank at least half full (fuel evaporates faster in heat and a full tank prevents fuel pump damage), and avoid parking on soft asphalt for extended periods, as extreme heat can cause tire deformation."
    },
    {
      question: "What is the Natchez-Vidalia Ferry and what rules apply when crossing?",
      answer: "The Natchez-Vidalia Ferry is one of the last operating toll-free vehicle ferries crossing the Mississippi River, connecting Natchez, Mississippi with Vidalia, Louisiana. It provides an alternative to the Natchez-Vidalia Bridge (US-84) for shorter local trips. When boarding, drivers must follow crew instructions for vehicle placement on the ferry deck, set the parking brake, turn off the engine to reduce fumes and fire risk, and remain in or near the vehicle (or in designated passenger areas) during the crossing. Ferry boarding protocols are sometimes tested on the Mississippi DPS knowledge exam as an example of specialized vehicle operation rules."
    },
    {
      question: "What is the Mississippi DPS and how is it different from a typical DMV?",
      answer: "Mississippi's driver licensing is administered by the Department of Public Safety (DPS), Driver Services division. Mississippi does not have a department called the 'DMV' — instead, DPS handles both law enforcement (Highway Patrol) and driver licensing functions under one agency umbrella, similar to how Oklahoma and Tennessee organize driver services. Mississippi DPS Driver Services offices accept applications for learner's permits, driver's licenses, CDLs, motorcycle endorsements, and ID cards. The knowledge exam is administered at DPS offices and consists of 30 questions with an 80% passing threshold."
    },
    {
      question: "What are the flooding risks Mississippi drivers should know about?",
      answer: "Mississippi is highly prone to flooding, particularly in the Mississippi Delta region (which lies below the floodplain of the Mississippi River and its tributaries) and along the Gulf Coast (which is subject to storm surge and tropical rainfall during hurricane season, June through November). Roads in the Delta frequently flood rapidly after heavy rainfall, and the depth of water on a road is impossible to determine visually. As little as 12 inches of moving water can sweep a passenger car off a roadway, and 2 feet can carry away most trucks and SUVs. Mississippi drivers must obey all 'Road Closed' barriers at flooded crossings and must never attempt to drive through water of unknown depth — this is the basis of the 'Turn Around, Don't Drown' safety message."
    },
    {
      question: "What is the permit age in Mississippi and what are the permit rules?",
      answer: "Mississippi residents may apply for a learner's permit at age 15 after passing the DPS written knowledge exam and vision test. Permit holders must be accompanied at all times by a licensed supervisor who is at least 21 years old and seated in the front passenger seat. Mississippi's graduated driver license (GDL) system requires permit holders to maintain the permit for a specified period and log supervised driving hours before advancing to a restricted license. The restricted license stage includes nighttime driving restrictions and limitations on the number of non-family passengers. Full license eligibility depends on age, time held in the GDL stages, and a clean driving record."
    },
    {
      question: "What are Mississippi's road signs that are unique or frequently tested?",
      answer: "The Mississippi DPS knowledge exam tests standard national sign shapes and colors as well as Mississippi-specific situations. Yellow diamond warning signs commonly tested in Mississippi include flood warning signs, wildlife crossing signs (white-tailed deer are common throughout the state), and construction zone signs on I-20, I-55, and US-49 corridors. Green guide signs for the interstate system are tested for understanding exit numbering, interchange types, and milepost systems. Mississippi also uses brown recreational area signs for the Natchez Trace Parkway — a federally operated scenic road with its own speed limit and passing rules distinct from state highways."
    },
    {
      question: "What penalties apply for speeding in a Mississippi construction zone?",
      answer: "Mississippi law doubles all traffic fines for moving violations committed in active highway construction zones. This means if the standard fine for speeding at a certain speed over the limit is $200, it becomes $400 in a construction zone. The doubled penalty applies whether or not workers are physically present in the zone at the time of the violation — the construction zone designation is determined by the posted signs, not by worker presence. Construction zones are common on major Mississippi highways undergoing MDOT improvement projects, particularly on I-20 (Jackson corridor), I-55 (north-south corridor), and US-49 (Delta to Gulf Coast route)."
    },
  ],
  relatedTests: [
    { label: "Mississippi Motorcycle Practice Test", href: "/mississippi-motorcycle-practice-test" },
    { label: "Mississippi CDL Practice Test", href: "/mississippi-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function MississippiDMVPage() {
  return <PracticeTestPage {...data} />;
}
