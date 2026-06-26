import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Rhode Island DMV Practice Test 2025 – Free RI Driver's License Exam Prep",
  description:
    "Prepare for your Rhode Island DMV knowledge test with free practice questions covering rotary right-of-way, Providence No Turn on Red rules, Pell Bridge procedures, chemical test refusal penalties, and RI traffic laws. 25 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/rhode-island-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/rhode-island-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Rhode Island",
  stateAbbr: "RI",
  testLabel: "DMV Practice Test",
  slug: "rhode-island-dmv-practice-test",
  headline: "Rhode Island DMV Practice Test 2025",
  intro:
    "The Rhode Island Division of Motor Vehicles (DMV), part of the Department of Revenue, administers a 25-question knowledge test. You must answer at least 20 questions correctly (80%) to pass. This free practice test covers Rhode Island's unique rotary right-of-way rules, Providence's No Turn on Red intersections, Pell Bridge procedures, chemical test refusal penalties, and the RI Distracted Driving Act.",
  basedOn: "Rhode Island Division of Motor Vehicles Driver's Manual",
  keyRules: [
    {
      icon: "🔄",
      rule: "Rotary Right-of-Way: Yield to Circulating Traffic",
      detail:
        "Rhode Island has the highest density of traffic circles (rotaries/roundabouts) in the U.S. Vehicles already IN the rotary have the right of way. Entering drivers must yield to all circulating traffic before entering. Never assume you can enter just because you arrived at the rotary first.",
    },
    {
      icon: "🚫",
      rule: "No Right Turn on Red in Downtown Providence",
      detail:
        "The City of Providence's downtown core prohibits right turns on red at many intersections. Posted 'No Turn on Red' signs are common throughout Providence. Never assume right-on-red is permitted in Providence — always look for a sign before proceeding on red.",
    },
    {
      icon: "🌉",
      rule: "Pell Bridge (I-138) Toll and Wind Procedures",
      detail:
        "The Claiborne Pell Newport Bridge on I-138 crosses Narragansett Bay on a 1.6-mile span. Tolls are collected using E-ZPass or cash. High winds on the bridge can affect high-profile vehicles. Follow all posted speed limits and lane restrictions on the bridge.",
    },
    {
      icon: "📱",
      rule: "RI Distracted Driving Act: No Handheld Devices",
      detail:
        "Rhode Island's Distracted Driving Act bans all handheld mobile device use while driving. You may not hold your phone while your vehicle is in motion. Hands-free Bluetooth calling is permitted. First-offense fines apply, and the violation is a primary offense.",
    },
    {
      icon: "🍺",
      rule: "DUI Threshold: 0.08% Adults, 0.02% Under-21",
      detail:
        "Rhode Island uses 'DUI' terminology (not OUI or OWI). Adults 21+ face a DUI at 0.08% BAC. Drivers under 21 face a 0.02% threshold. Refusing a chemical test in Rhode Island triggers an automatic 6-month suspension for a first refusal, and 1 year for a second refusal (RIGL § 31-27-2).",
    },
    {
      icon: "⛴️",
      rule: "Ferry Procedures: Block Island and Conanicut",
      detail:
        "Rhode Island ferries (Block Island Ferry and Conanicut Island Ferry) carry vehicles. Specific boarding procedures apply: arrive before departure time, follow ferry crew instructions for vehicle positioning, set your parking brake, and remain outside your vehicle during transit unless directed otherwise.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 16 Years Old",
      detail:
        "Rhode Island issues learner's permits at age 16. Permit holders must be accompanied by a licensed driver 21 or older at all times. Rhode Island's GDL program includes mandatory supervised driving hours before a restricted license can be issued. A full unrestricted license is available at age 17½ after meeting all requirements.",
    },
    {
      icon: "🚗",
      rule: "Chemical Test Refusal Penalties",
      detail:
        "Under RIGL § 31-27-2, refusing a chemical test (breathalyzer or blood test) in Rhode Island carries automatic administrative penalties: 6-month license suspension for a first refusal, and 1-year suspension for a second or subsequent refusal. These are separate from any DUI criminal penalties and apply even if you are not convicted of DUI.",
    },
  ],
  about: [
    "The Rhode Island Division of Motor Vehicles (DMV), operating within the Department of Revenue, administers driver licensing and testing for Rhode Island residents. The knowledge test consists of 25 multiple-choice questions drawn from the Rhode Island Driver's Manual, covering traffic laws, road signs, and Rhode Island-specific driving rules. A passing score of 80% — 20 correct answers out of 25 — is required. Rhode Island's DMV offices are located in Cranston (headquarters), Providence, and other locations throughout the state.",
    "Rhode Island's most consequential and consistently tested unique driving rule is the rotary (traffic circle) right-of-way. Rhode Island has the highest density of traffic circles of any U.S. state, and the state follows the modern roundabout rule: vehicles already circulating inside the rotary have the right of way. Drivers approaching the rotary must yield to all circulating traffic before entering. This is the opposite of how some older rotary designs worked, where entering traffic had priority. Additionally, Providence's downtown core prohibits right turns on red at many intersections — 'No Turn on Red' signs are posted throughout the city, and drivers must never assume right-on-red is permitted in Providence without seeing a green signal.",
    "Rhode Island law (RIGL § 31-27-2) creates significant penalties for refusing a chemical test when suspected of DUI. A first refusal triggers an automatic 6-month administrative license suspension; a second refusal triggers a 1-year suspension. These administrative penalties apply separately from any criminal DUI charges. Rhode Island also enforces a 0.02% BAC limit for drivers under 21. The state's Distracted Driving Act prohibits all handheld device use while driving — violations are primary offenses. Rhode Island's geography also means that many drivers use the Claiborne Pell Newport Bridge (I-138) across Narragansett Bay and the Block Island Ferry, both of which have specific procedures that licensed drivers must understand.",
  ],
  sampleQuestions: [
    {
      question:
        "You are approaching a rotary (roundabout) in Rhode Island. There is a vehicle already circulating inside the rotary. Who has the right of way?",
      options: [
        "You do, because you arrived at the rotary first",
        "The vehicle already circulating inside the rotary has the right of way",
        "Whichever vehicle is on the right has the right of way",
        "Right of way alternates by direction — northbound vehicles have priority",
      ],
      correctIndex: 1,
      explanation:
        "Rhode Island follows the modern roundabout rule: vehicles already inside the rotary circulating have the right of way over vehicles entering the rotary. All entering drivers must yield to circulating traffic. This rule applies at all of Rhode Island's numerous traffic circles. Rhode Island has the highest density of rotaries of any U.S. state, making this one of the most important — and most frequently tested — rules in the Rhode Island Driver's Manual.",
    },
    {
      question:
        "You are driving in downtown Providence, Rhode Island, and reach an intersection with a red light. You want to turn right. There is no sign at the intersection. What should you do?",
      options: [
        "Turn right after stopping — right on red is always permitted in Rhode Island",
        "Look for a 'No Turn on Red' sign — downtown Providence prohibits right on red at many intersections, and you must not assume it is permitted",
        "Wait for a green light — right on red is never permitted in Rhode Island",
        "Turn right only if no pedestrians are in the crosswalk",
      ],
      correctIndex: 1,
      explanation:
        "Downtown Providence has numerous intersections where right turns on red are specifically prohibited by posted 'No Turn on Red' signs. Drivers must not assume right-on-red is permitted just because they do not immediately see a sign — they must look carefully for the prohibition sign. If no 'No Turn on Red' sign is posted, right on red is permitted after a complete stop and yielding to all traffic and pedestrians. Never pull into the intersection before confirming no sign is posted.",
    },
    {
      question:
        "In Rhode Island, what is the administrative penalty for a FIRST refusal to submit to a chemical test when suspected of DUI, under RIGL § 31-27-2?",
      options: [
        "30-day license suspension",
        "3-month license suspension",
        "6-month license suspension",
        "12-month license suspension",
      ],
      correctIndex: 2,
      explanation:
        "Rhode Island General Law § 31-27-2 imposes automatic administrative license suspensions for refusing a chemical test (breathalyzer, blood, or urine test) when lawfully requested by law enforcement. A first refusal results in a 6-month license suspension. A second or subsequent refusal results in a 1-year suspension. These are administrative penalties imposed by the DMV and are separate from any criminal DUI charges — meaning you can face both the administrative suspension and criminal penalties simultaneously.",
    },
    {
      question:
        "What is the blood alcohol concentration (BAC) limit that constitutes DUI for an adult driver (age 21+) in Rhode Island?",
      options: ["0.06%", "0.08%", "0.10%", "0.05%"],
      correctIndex: 1,
      explanation:
        "Rhode Island uses a 0.08% BAC threshold for DUI charges against adult drivers 21 and older. Rhode Island uses the term 'DUI' (Driving Under the Influence) rather than OUI or OWI terminology used in some other states. Drivers under 21 face a much stricter 0.02% BAC limit. Commercial vehicle operators face the federal CDL standard of 0.04%. Rhode Island's implied consent law (RIGL § 31-27-2) means refusing a test triggers automatic license suspension.",
    },
    {
      question:
        "You are boarding the Block Island Ferry with your vehicle for the first time. What is the correct procedure?",
      options: [
        "Drive aboard and remain in your vehicle throughout the crossing for security",
        "Arrive before departure time, follow ferry crew instructions for vehicle positioning, set your parking brake, and exit your vehicle during transit",
        "Vehicles must be parked in neutral on the ferry — never use the parking brake on a boat",
        "Only vehicles with Rhode Island registration may use the Block Island Ferry",
      ],
      correctIndex: 1,
      explanation:
        "When using Rhode Island's ferry services (including the Block Island Ferry), drivers should arrive before the scheduled departure time, follow all instructions from ferry crew regarding vehicle placement and positioning, set the parking brake once parked on the ferry deck, and exit the vehicle during the crossing unless specifically instructed otherwise. Remaining in a vehicle on a ferry during transit is discouraged for safety reasons. Ferry crew directions take precedence over normal driving habits.",
    },
    {
      question:
        "Under Rhode Island's Distracted Driving Act, which of the following is permitted while driving in Rhode Island?",
      options: [
        "Holding your phone to your ear to take a call at a stoplight",
        "Texting while driving at low speeds in a parking lot",
        "Using a hands-free Bluetooth earpiece to make a phone call",
        "Checking your phone screen while stopped at a red light",
      ],
      correctIndex: 2,
      explanation:
        "Rhode Island's Distracted Driving Act prohibits all handheld mobile device use while operating a motor vehicle. The prohibition covers holding the phone for any reason while the vehicle is in motion. Hands-free operation via a Bluetooth headset or vehicle-integrated system is the only permitted method for phone calls while driving. The law applies at red lights and stop signs, not just while the vehicle is moving. Violations are primary offenses — officers can stop you solely for this violation.",
    },
    {
      question:
        "The Claiborne Pell Newport Bridge carries what Interstate highway across Narragansett Bay in Rhode Island?",
      options: ["I-195", "I-95", "I-138", "US-1"],
      correctIndex: 2,
      explanation:
        "The Claiborne Pell Newport Bridge carries I-138 across Narragansett Bay between Jamestown and Newport, Rhode Island. The bridge is approximately 1.6 miles long and includes a toll collection system accepting E-ZPass and cash. High winds are a hazard on the bridge, particularly for high-profile vehicles. The bridge connects the Aquidneck Island communities (Newport, Middletown, Portsmouth) to the mainland via Jamestown.",
    },
    {
      question:
        "What is the minimum age to obtain a learner's permit in Rhode Island?",
      options: ["15 years old", "15½ years old", "16 years old", "17 years old"],
      correctIndex: 2,
      explanation:
        "Rhode Island issues learner's permits at age 16. Permit holders must be accompanied by a licensed driver who is at least 21 years old whenever they are behind the wheel. Rhode Island's Graduated Driver License (GDL) program requires permit holders to complete a minimum number of supervised driving hours before becoming eligible for a restricted license. A full unrestricted license is available at age 17½ after completing all GDL requirements.",
    },
    {
      question:
        "A Rhode Island driver with a learner's permit is driving with their supervising driver when a police officer stops them for a traffic violation. Under RI law, what BAC level would constitute a DUI for the permit holder if they were under 21?",
      options: ["0.08%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation:
        "Rhode Island enforces a 0.02% BAC limit for drivers under 21 years old — a near-zero tolerance policy that effectively prohibits any alcohol consumption before driving. This is far more restrictive than the 0.08% adult standard. At 0.02%, even a small amount of alcohol (less than one drink for most people) can result in a DUI charge. Combined with the administrative consequences of the learner's permit program, an underage DUI can derail a young driver's licensing process entirely.",
    },
    {
      question:
        "In Rhode Island, vehicles approaching a rotary must yield to circulating traffic. When is it legal for an entering vehicle to proceed into a Rhode Island rotary?",
      options: [
        "When you reach the yield line at the rotary entry",
        "When there is a gap in circulating traffic large enough to enter safely without causing circulating vehicles to brake",
        "When you have been waiting at the yield line for more than 10 seconds",
        "When the vehicle to your right inside the rotary signals an exit",
      ],
      correctIndex: 1,
      explanation:
        "The correct time to enter a Rhode Island rotary is when there is a sufficient gap in the circulating traffic to enter safely without requiring vehicles already in the rotary to reduce speed or brake for you. Simply reaching the yield line does not create the right to enter — you must wait for a safe gap. The size of the needed gap depends on your vehicle's speed of entry and the speed of circulating traffic. Pedestrians in crosswalks at rotary entries must also be yielded to.",
    },
  ],
  faqs: [
    {
      question: "What agency administers driver licensing in Rhode Island?",
      answer:
        "The Rhode Island Division of Motor Vehicles (DMV), within the Department of Revenue, administers all driver licensing, knowledge testing, and skills testing in Rhode Island. The DMV's main office is located in Cranston on Branch Avenue, with additional offices in other communities. The Rhode Island DMV also handles vehicle registration, title, and other motor vehicle services.",
    },
    {
      question: "What is the Rhode Island DMV knowledge test format?",
      answer:
        "The Rhode Island knowledge test consists of 25 multiple-choice questions drawn from the Rhode Island Driver's Manual. A passing score of 80% — at least 20 correct answers — is required. The test covers Rhode Island traffic laws, road signs, safe driving practices, and Rhode Island-specific rules including rotary right-of-way and DUI/chemical test refusal laws. If you fail, a waiting period applies before retaking.",
    },
    {
      question: "What are the rotary right-of-way rules in Rhode Island?",
      answer:
        "Rhode Island's rotary (roundabout/traffic circle) rule is clear: vehicles already circulating inside the rotary have the right of way over entering vehicles. All drivers approaching a rotary must yield to circulating traffic before entering. This is the modern roundabout rule and is the opposite of older rotary conventions where entering vehicles sometimes had priority. Rhode Island has more traffic circles per square mile than any other U.S. state, making this rule essential knowledge for all Rhode Island drivers.",
    },
    {
      question: "Why are right turns on red restricted in Providence, Rhode Island?",
      answer:
        "The City of Providence has designated many downtown intersections as 'No Turn on Red' locations to improve pedestrian safety in the dense downtown area. These intersections are marked with posted 'No Turn on Red' signs. Providence's downtown has high pedestrian volumes near Brown University, Providence College, hospitals, restaurants, and the State House area. Drivers in Providence must always look for 'No Turn on Red' signage before proceeding on red and should never assume right-on-red is permitted in the downtown core without verifying.",
    },
    {
      question: "What are Rhode Island's GDL (Graduated Driver License) stages?",
      answer:
        "Rhode Island's GDL program has three stages. Stage 1 (Learner's Permit): available at age 16, requires a licensed driver 21 or older in the vehicle at all times, and mandates a minimum of 50 hours of supervised driving (including 10 hours at night). Stage 2 (Restricted License): available at age 17 after 12 months with the permit and completion of all requirements; includes a nighttime driving restriction and passenger limits. Stage 3 (Full License): available at age 17½ after completing Stage 2 requirements.",
    },
    {
      question: "What are the chemical test refusal penalties in Rhode Island?",
      answer:
        "Under Rhode Island General Law § 31-27-2, refusing to submit to a chemical test (breathalyzer, blood, or urine) when lawfully requested by police in a DUI investigation triggers automatic administrative license suspensions: a first refusal results in a 6-month suspension, and a second or subsequent refusal results in a 1-year suspension. These administrative penalties are imposed by the Rhode Island DMV and are completely separate from any criminal DUI charges. You can face both simultaneously — and refusing a test does not prevent prosecution for DUI.",
    },
    {
      question: "Does Rhode Island have a hands-free cell phone driving law?",
      answer:
        "Yes. Rhode Island's Distracted Driving Act prohibits all handheld mobile device use while operating a motor vehicle. Drivers may not hold their phone for any reason while driving, including at red lights and stop signs. Hands-free operation via Bluetooth headsets or vehicle-integrated systems is permitted. Violations are primary offenses, meaning law enforcement can stop drivers solely for holding a device. First-offense fines apply, with higher penalties for subsequent violations.",
    },
    {
      question: "What should Rhode Island drivers know about the Pell Bridge?",
      answer:
        "The Claiborne Pell Newport Bridge (I-138) is a 1.6-mile cable-stayed bridge spanning Narragansett Bay between Jamestown and Newport. Tolls are collected in the westbound direction using E-ZPass or cash. The bridge experiences significant wind exposure, particularly affecting high-profile vehicles and motorcycles. Drivers should observe posted speed limits on the bridge, maintain lane position in wind, and have their E-ZPass ready or cash available for the toll. The bridge is the only fixed link between the West Bay mainland and Aquidneck Island.",
    },
    {
      question: "What is the DUI penalty for a first offense in Rhode Island?",
      answer:
        "A first DUI offense in Rhode Island for an adult driver (0.08% BAC or higher) carries penalties including a 30–180 day license suspension, fines of $100–$300 plus court costs, 10–60 hours of community service, mandatory participation in a DUI treatment program, and possible installation of an ignition interlock device. Aggravating factors (high BAC, minor passenger, prior record) increase penalties. Drivers under 21 face the same criminal process plus enhanced penalties for their 0.02% BAC threshold violation.",
    },
    {
      question: "How do Rhode Island ferry services work for vehicles?",
      answer:
        "Rhode Island's ferry services include the Interstate Navigation Company's Block Island Ferry (from Point Judith in Narragansett) and the Jamestown-Newport Ferry among others. Vehicle ferry service to Block Island operates seasonally. Drivers must purchase vehicle tickets in advance or at the terminal, arrive well before departure time, and follow all directions from ferry crew for vehicle loading, positioning, and parking. Vehicles must be secured with the parking brake set. Passengers must typically exit vehicles during the crossing. Vehicle size and weight restrictions apply, and advance reservations are strongly recommended for vehicle passage.",
    },
  ],
  relatedTests: [
    { label: "Rhode Island Motorcycle Practice Test", href: "/rhode-island-motorcycle-practice-test" },
    { label: "Rhode Island CDL Practice Test", href: "/rhode-island-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function RhodeIslandDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
