import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Wisconsin DMV Practice Test 2025 – Free WisDOT OWI Law & Driver's Exam Prep",
  description:
    "Free Wisconsin driver's license practice test based on the WI DOT Driver's Manual. 50 questions, 80% passing. Wisconsin is the only state where a first OWI is a civil — not criminal — offense. State-specific OWI law, farm vehicle rules, and winter driving questions.",
  alternates: { canonical: "https://caredmvprep.com/wisconsin-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/wisconsin-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Wisconsin",
  stateAbbr: "WI",
  testLabel: "Knowledge Test",
  slug: "wisconsin-dmv-practice-test",
  headline: "Wisconsin Driver's License Practice Test 2025",
  intro:
    "Wisconsin's Division of Motor Vehicles (DMV), part of the Wisconsin Department of Transportation (WisDOT), administers the 50-question knowledge test. Wisconsin has one nationally unique law: a first OWI offense is a civil infraction — not a criminal charge — making it the only state in the country with this standard. This practice test focuses on Wisconsin's OWI laws, slow-moving vehicle rules, seasonal winter driving, and the 2023 hands-free law.",
  basedOn: "Wisconsin DOT Wisconsin Driver's Manual (current edition)",
  keyRules: [
    { icon: "⚖️", rule: "First OWI = civil infraction only (WI only)", detail: "Wisconsin is the ONLY state where a first-offense OWI is a civil infraction — not criminal. Fine: $150–$300, no jail, no criminal record (unless a minor under 16 is in the vehicle)." },
    { icon: "🚔", rule: "Second OWI = criminal misdemeanor", detail: "A second OWI within 10 years is a criminal misdemeanor; third OWI = felony. Criminal record follows from the second offense onward." },
    { icon: "🍺", rule: "Absolute sobriety: 0.00% for drivers under 21", detail: "Wisconsin's Motorists' Handbook states the legal alcohol concentration allowed for drivers under 21 is 0.00% — no detectable alcohol at all. Wisconsin uses OWI, not DUI." },
    { icon: "📱", rule: "Hands-free required (Act 12, 2023)", detail: "Wisconsin Act 12 (effective April 26, 2023) bans all drivers from holding a wireless device while operating a vehicle. Hands-free Bluetooth and mounted devices permitted." },
    { icon: "🚜", rule: "Farm equipment needs SMV emblem", detail: "Farm equipment traveling under 25 mph on public roads must display a slow-moving vehicle (SMV) orange triangle emblem. Overwidth equipment may only travel during daylight." },
    { icon: "🚗", rule: "Move It or Lose It: $200 fine", detail: "Wisconsin requires drivers in no-injury accidents to move operable vehicles out of travel lanes — $200 fine for leaving a drivable vehicle blocking traffic." },
    { icon: "🌙", rule: "Instruction permit at 15½", detail: "Instruction permit at 15½; must hold for 6 months with at least 50 hours of supervised driving (40 during daylight, 10 during darkness) before a Probationary License at 16." },
    { icon: "❄️", rule: "Tire chains: permitted when conditions require", detail: "Wisconsin permits tire chains when traction conditions require them. Chains must be removed when roads are clear — chains damage dry pavement and are prohibited on clear roads." },
  ],
  about: [
    "Wisconsin's first OWI offense is a civil infraction — not a crime — making Wisconsin the only state in the United States with this legal structure. A first OWI conviction results in a $150–$300 fine, a 6- to 9-month license revocation, and mandatory alcohol assessment — but no jail time and no criminal record. The only exception: if a passenger under 16 is in the vehicle during a first OWI, the charge immediately becomes a criminal misdemeanor. This unique legal framework is heavily tested on the Wisconsin DMV knowledge exam. Second OWI offense (within 10 years): criminal misdemeanor, 5 days to 6 months jail, $350–$1,100 fine, and up to 18 months revocation. Third OWI: felony. Wisconsin uses 'OWI' (Operating While Intoxicated) terminology; 'DUI' is not used in state law. Wisconsin's Motorists' Handbook states an absolute sobriety standard for drivers under 21: the legal alcohol concentration allowed is 0.00%, meaning no detectable alcohol at all is permitted while driving.",
    "Wisconsin's agricultural economy creates a highway environment unique to the state. Farm tractors, combines, and other large agricultural equipment operate on public roads throughout the state during planting and harvest seasons. Wisconsin law (Wis. Stat. 347.24) requires slow-moving vehicle (SMV) emblems — the distinctive orange-and-red reflective triangle — on any vehicle traveling at less than 25 mph. Farm equipment exceeding legal width limits may only travel during daylight hours without a special permit, and may require an escort vehicle for certain oversize configurations. Drivers encountering slow farm equipment on rural Wisconsin roads must exercise extra caution — farm equipment can stop suddenly, make wide turns, and obstruct sight lines significantly. The DMV knowledge test includes questions on how to safely share the road with farm vehicles. Wisconsin also has specific regulations for snowmobiles crossing public highways at designated crossing points.",
    "Wisconsin's DMV (technically the Division of Motor Vehicles within WisDOT) administers the 50-question knowledge test, which must be passed with a score of at least 80% (40 correct). Tests are available at DMV service centers statewide. Wisconsin's hands-free law (Act 12, effective April 26, 2023) bans all drivers from holding a wireless device while operating a motor vehicle — one of the more recent comprehensive bans. Hands-free Bluetooth and dashboard mounts are permitted. Wisconsin's 'Move It or Lose It' law requires drivers involved in accidents with no injuries to move their vehicles out of travel lanes if operable — leaving a drivable vehicle blocking traffic results in a $200 fine. Wisconsin's graduated licensing requires an instruction permit at 15½, a minimum 6-month supervised driving period, and an intermediate license at 16 with passenger and curfew restrictions until 18.",
  ],
  sampleQuestions: [
    {
      question: "Wisconsin is the only state in the U.S. where a first-offense OWI (Operating While Intoxicated) is treated as what?",
      options: [
        "A Class A misdemeanor with up to 9 months in jail",
        "A civil infraction — not a criminal offense — with a fine but no criminal record",
        "A traffic violation equivalent to speeding — no license action required",
        "A felony if the BAC is above 0.10%, but a misdemeanor at 0.08–0.09%",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin stands alone in the United States: a first OWI offense (without aggravating factors) is a civil infraction, not a criminal charge. Consequences: $150–$300 fine, 6- to 9-month license revocation, and mandatory alcohol/drug assessment. No jail time. No criminal record. This is a major distinction from every other state. The exception: if a passenger under 16 is in the vehicle, the first offense immediately becomes criminal. Second OWI (within 10 years): criminal misdemeanor. Third: felony. Wisconsin's first-OWI civil treatment is the most tested and most surprising Wisconsin-specific law on the knowledge exam.",
    },
    {
      question: "A Wisconsin farmer drives a combine along a county highway at 15 mph. What does Wisconsin law require the combine to display?",
      options: [
        "No special marking is required if the driver uses hazard lights",
        "A slow-moving vehicle (SMV) emblem — the orange and red reflective triangle — on the rear of the vehicle",
        "A 'Wide Load' banner across the front and rear of the combine",
        "A rotating amber beacon light only — no triangle emblem is required for farm equipment",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin Statute 347.24 requires any vehicle designed to travel at less than 25 mph to display a slow-moving vehicle (SMV) emblem on its rear — the distinctive orange-and-red reflective triangle recognized nationwide. Farm tractors, combines, and other agricultural equipment operating on public roads must display this emblem. The SMV emblem is specifically designed to warn approaching traffic that the vehicle ahead moves much slower than typical road traffic. In Wisconsin's agricultural regions, slow-moving farm equipment on rural roads is a regular hazard — particularly during spring planting and fall harvest. Failure to display an SMV emblem on a qualifying vehicle is a violation.",
    },
    {
      question: "Under Wisconsin's 'Move It or Lose It' law, what must a driver do after being involved in a minor accident where no one is injured and the vehicle is still drivable?",
      options: [
        "Stay in the vehicle and call police from the accident location — do not move the vehicle under any circumstances",
        "Move the vehicle out of the travel lane to a safe location, then exchange information and call police if needed",
        "Wisconsin has no law requiring vehicles to be moved after accidents — drivers may leave vehicles in the lane until police arrive",
        "Move the vehicle only if a police officer or emergency responder instructs you to do so",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin's 'Move It or Lose It' law (Wis. Stat. 346.67) requires drivers involved in accidents with no injuries to move their vehicles to a safe location off the roadway if the vehicle is operable. Leaving a drivable vehicle blocking traffic results in a $200 fine. Wisconsin enacted this law to reduce secondary accidents caused by vehicles stopped in travel lanes. Moving the vehicle does not constitute leaving the scene — you must still exchange information with the other driver and report the accident to police if required (accidents with $1,000+ in damage or injury must be reported). Take photos before moving to document the position.",
    },
    {
      question: "Wisconsin's hands-free law (Act 12) became effective in April 2023. Which of these activities does it prohibit?",
      options: [
        "Using GPS navigation through a dashboard-mounted phone holder",
        "Talking through a Bluetooth earpiece connected to your phone",
        "Holding a phone in your hand to read a text message while stopped at a red light",
        "Using a vehicle's built-in voice command system to send a message",
      ],
      correctIndex: 2,
      explanation:
        "Wisconsin's Act 12 (effective April 26, 2023) prohibits holding or using a wireless device in your hand while operating a motor vehicle — including while stopped at a red light or stop sign, since you are still 'operating' the vehicle. Dashboard-mounted phones in a holder, Bluetooth earpieces, vehicle built-in systems, and hands-free speakerphone are all legal. The prohibition is on physical contact with the device. Being stopped at a light does not create a legal exception — the vehicle is still being operated. A first violation fine is $100; subsequent violations increase. Both primary and secondary enforcement apply under Wisconsin law.",
    },
    {
      question: "A driver under 21 in Wisconsin is stopped and found to have a BAC of 0.04%. What is the legal consequence under Wisconsin's underage OWI law?",
      options: [
        "No action — a special under-21 law only applies at 0.08% or higher",
        "An informal warning — Wisconsin requires at least 0.05% for any consequence under 21",
        "Wisconsin's \"absolute sobriety\" law sets the under-21 limit at 0.00% — any detectable alcohol is a violation, so 0.04% triggers OWI consequences including license revocation",
        "A $500 fine but no license action since the driver is not legally intoxicated at 0.04%",
      ],
      correctIndex: 2,
      explanation:
        "Wisconsin's Motorists' Handbook states the legal alcohol concentration allowed for drivers under 21 is 0.00% — meaning no measurable amount of alcohol is permitted while driving. A BAC of 0.04% is well above this threshold and triggers Wisconsin's absolute sobriety law, which is separate from and much stricter than the ordinary OWI process, since it prohibits any detectable alcohol rather than requiring proof of impairment at a higher threshold.",
    },
    {
      question: "In Wisconsin, a driver with a previous OWI conviction is stopped and found to have ANY detectable alcohol in their system while driving, even below 0.08%. What law applies?",
      options: [
        "The standard 0.08% threshold — prior OWI history only affects sentencing, not the legal limit",
        "Wisconsin's 'absolute sobriety' requirement: any driver with a prior OWI faces a 0.00% BAC limit while driving — any detectable alcohol is a violation",
        "Prior OWI offenders face a 0.04% limit — the CDL commercial vehicle standard",
        "A prior OWI creates no stricter BAC requirement unless the driver is on court-ordered probation with an ignition interlock",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin law imposes absolute sobriety (0.00% BAC) on drivers who have prior OWI convictions. If you have any OWI on your record, Wisconsin prohibits ANY detectable amount of alcohol when you drive — even a BAC of 0.01% triggers a violation. This is a separate legal provision from the standard 0.08% adult threshold. The absolute sobriety requirement continues indefinitely — it is not time-limited. This lifelong heightened standard for drivers with prior OWI convictions is a notable Wisconsin law that appears on the knowledge test.",
    },
    {
      question: "Wisconsin law requires drivers to yield to pedestrians in a crosswalk. Which of the following describes Wisconsin's crosswalk law accurately?",
      options: [
        "Drivers must yield only at marked crosswalks — not at unmarked intersections",
        "Drivers must yield to pedestrians who have already stepped into the crosswalk, but need not yield to pedestrians waiting on the curb",
        "Wisconsin requires drivers to yield to pedestrians in both marked AND unmarked crosswalks, and must not pass a vehicle stopped for pedestrians",
        "Wisconsin's crosswalk law applies only in school zones — pedestrians elsewhere must wait for a break in traffic",
      ],
      correctIndex: 2,
      explanation:
        "Wisconsin Statute 346.24 requires drivers to yield the right-of-way to pedestrians in BOTH marked crosswalks and unmarked crosswalks (at intersections where no marked crosswalk exists). A driver may not pass another vehicle that has stopped for a pedestrian in a crosswalk — even if the pedestrian is not visible from your position. This 'anti-passing' rule is important for the Wisconsin knowledge test. Wisconsin pedestrian law also prohibits pedestrians from suddenly entering traffic in a way that makes it impossible for drivers to yield, even if technically in a crosswalk. The mutual duty applies: pedestrians must not create an unexpected hazard; drivers must yield when a pedestrian is in or entering the crosswalk.",
    },
    {
      question: "What is the maximum speed limit on Wisconsin rural interstate highways?",
      options: [
        "55 mph — Wisconsin maintains a uniform 55 mph limit on all highways",
        "65 mph — Wisconsin's standard rural interstate speed",
        "70 mph — Wisconsin's maximum speed limit on rural interstates",
        "75 mph — Wisconsin raised its rural interstate limit to match neighboring states",
      ],
      correctIndex: 2,
      explanation:
        "Wisconsin's maximum speed limit on rural interstate highways is 70 mph (Wis. Stat. 346.57). This applies to interstates and four-lane divided highways in rural areas. Urban interstate sections (through or near cities) are typically posted at 55 or 65 mph. Two-lane rural state highways are generally posted at 55 mph. Wisconsin law also includes a basic speed rule requiring drivers to travel at a speed safe for actual conditions — in winter weather, driving at 70 mph on an ice-covered interstate would violate the basic speed rule even if technically within the posted limit.",
    },
    {
      question: "When must Wisconsin drivers use headlights beyond the standard sunset-to-sunrise requirement?",
      options: [
        "Only at night — Wisconsin has no additional headlight requirement beyond sunset-to-sunrise",
        "Any time visibility drops below 500 feet due to weather conditions including rain, fog, snow, or smoke",
        "Only during heavy snowfall when visibility is less than 200 feet",
        "Wisconsin requires headlights only at night and in tunnels — weather conditions are the driver's discretion",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin Statute 347.06 requires headlights to be used from sunset to sunrise AND whenever visibility is reduced to 500 feet or less due to any weather condition — rain, fog, snow, smoke, or dust. Wisconsin also requires headlights to be on during adverse weather whenever windshield wipers are needed. In practical terms: if conditions are poor enough that you need your wipers, you need your headlights. This 'wipers on, lights on' principle is a safety standard the Wisconsin DOT incorporates into driver education. Daytime running lights (DRLs) on many modern vehicles do not automatically activate taillights — full headlight activation is required in conditions that reduce visibility.",
    },
    {
      question: "Wisconsin's intermediate license for drivers under 18 includes which curfew restriction?",
      options: [
        "No curfew — Wisconsin does not restrict when probationary license holders may drive",
        "No driving between 11PM and 5AM during the school year; no restriction during summer",
        "From midnight to 5AM, may drive alone only between home/school/work, or with a qualifying supervisor",
        "No driving after 9PM for the first 6 months; no driving after midnight for the remaining period until age 18",
      ],
      correctIndex: 2,
      explanation:
        "Wisconsin's Probationary License restrictions apply for the first 9 months (or until age 18, if sooner). From midnight to 5 a.m., a driver under 18 may only drive alone if going directly between home, school, and/or work; otherwise they must be accompanied by a qualifying supervisor — a licensed driver with 2+ years' experience who is either a qualified instructor/spouse 19 or older, or any person 21 or older. From 5 a.m. to midnight, the driver may go anywhere alone, with any number of immediate family members, or with one qualifying supervisor plus one other passenger. These restrictions extend an additional 6 months if the driver is convicted of a moving violation, violates a restriction, or has their license suspended/revoked. Both restrictions lift entirely at age 18.",
    },
  ],
  faqs: [
    {
      question: "Why is Wisconsin the only state where a first OWI isn't a criminal offense?",
      answer:
        "Wisconsin's civil first-OWI standard has its roots in legislative history and advocacy by groups who argued that the first offense should be treated as a traffic matter to be addressed through education and fines rather than criminalization. Despite multiple reform efforts — including several legislative attempts to make first OWI criminal — Wisconsin has retained this structure. The civil standard still carries real consequences: $150–$300 fine, up to 9-month license revocation, mandatory alcohol assessment, and an IID requirement in some cases. However, there is no criminal record. Critics argue this makes Wisconsin's OWI deterrence weaker than other states; supporters argue the educational focus is more effective.",
    },
    {
      question: "Does a first-offense Wisconsin OWI affect a commercial driver's license (CDL)?",
      answer:
        "Yes. Even though a first OWI is a civil infraction in Wisconsin, it still triggers CDL disqualification under federal FMCSA regulations, which treat OWI/DUI as a disqualifying offense regardless of state classification. A first OWI results in a 1-year CDL disqualification under federal law. A second OWI results in lifetime CDL disqualification. Wisconsin CDL holders operating a commercial vehicle face a 0.04% BAC limit — and any driver with a prior OWI faces absolute sobriety (0.00%) requirements when operating their personal vehicle as well.",
    },
    {
      question: "What are Wisconsin's farm equipment rules on public roads?",
      answer:
        "Farm equipment traveling slower than 25 mph must display an SMV (slow-moving vehicle) emblem on the rear — the orange-and-red reflective triangle. Overwidth equipment (exceeding 8 feet 6 inches) must travel only during daylight hours without a special transport permit and may need an escort vehicle for certain sizes. Farm operators are responsible for maintaining safe movement and signaling turns clearly. Drivers encountering farm equipment should be prepared for sudden stops, wide turns that use both lanes, and equipment entering or exiting fields. Wisconsin's agricultural regions — particularly in central and western Wisconsin — see heavy farm equipment traffic during spring and fall.",
    },
    {
      question: "How does Wisconsin's graduated licensing system work for drivers under 18?",
      answer:
        "Wisconsin's GDL: (1) Instruction Permit — requires a completed driver-ed document and at least 50 hours of supervised driving (40 daylight + 10 darkness) with a qualifying supervisor (a licensed driver with 2+ years' experience who is either a qualified instructor/spouse 19+, or any person 21+); (2) Probationary License at 16, after holding the instruction permit at least 6 months and passing the road test — for the first 9 months, driving between midnight and 5 a.m. is restricted to trips between home/school/work unless a qualifying supervisor is present, and demerit points are doubled (doubled again on repeat convictions); (3) restrictions lift entirely at 18. A moving-violation conviction, restriction violation, or license suspension/revocation during the probationary period extends these restrictions by 6 months.",
    },
    {
      question: "What is Wisconsin's absolute sobriety requirement for drivers with prior OWI convictions?",
      answer:
        "Any Wisconsin driver with one or more prior OWI convictions must maintain a 0.00% BAC while operating a vehicle — any detectable amount of alcohol is a violation, regardless of whether it is above the standard 0.08% threshold. This absolute sobriety requirement applies indefinitely and is enforced alongside the standard prohibition on OWI. Wisconsin courts and the DMV are authorized to mandate ignition interlock devices (IIDs) for drivers with prior OWI convictions as a condition of maintaining driving privileges.",
    },
    {
      question: "What did Wisconsin's Act 12 (2023 hands-free law) change from prior Wisconsin law?",
      answer:
        "Before Act 12 (effective April 26, 2023), Wisconsin prohibited texting while driving for all drivers and prohibited handheld device use for operators of school buses and commercial vehicles — but had no statewide ban on handheld phone calls for regular adult drivers. Act 12 expanded the prohibition to ALL drivers: no holding or manually using a wireless device while operating a motor vehicle. The change brought Wisconsin in line with the majority of U.S. states. A first violation carries a $100 fine. Hands-free Bluetooth, voice commands, and dashboard-mounted devices remain legal.",
    },
    {
      question: "In Wisconsin, when can drivers use tire chains?",
      answer:
        "Wisconsin law permits tire chains when road and weather conditions require additional traction for safe operation. However, tire chains must be removed when road conditions no longer require them — driving on dry pavement with chains damages the road surface and the chains themselves. Wisconsin does not mandate chains for specific weather events (unlike states such as Colorado or Washington that post mandatory chain control requirements). Wisconsin drivers must assess conditions and use chains judiciously. The Wisconsin DOT recommends winter tires (not chains) as the preferred traction solution for most winter driving situations.",
    },
    {
      question: "What documents does Wisconsin require to obtain an instruction permit?",
      answer:
        "Wisconsin uses a REAL ID documentation system. To obtain an instruction permit at age 15½, applicants must present: (1) proof of U.S. citizenship or lawful presence (birth certificate, U.S. passport, or immigration documents); (2) proof of Social Security Number; (3) two proofs of Wisconsin residency (utility bills, bank statements, school records dated within 90 days); (4) parental or guardian signature if under 18. Wisconsin also requires applicants to pass a vision screening at the DMV service center before the knowledge test is administered.",
    },
    {
      question: "What accidents must Wisconsin drivers report to law enforcement?",
      answer:
        "Wisconsin Statute 346.70 requires a driver involved in an accident to report it to local police, county sheriff, or state patrol if: the accident results in injury or death to any person, OR involves property damage of $1,000 or more. The report must be made immediately (calling 911 or the nearest law enforcement agency). Wisconsin's 'Move It or Lose It' law requires moving drivable vehicles out of travel lanes — but moving the vehicle does not eliminate the duty to remain at the scene and report the accident. Wisconsin DMV must also be notified within 10 days of an accident meeting reporting thresholds.",
    },
    {
      question: "How does Wisconsin handle license suspension for accumulating too many moving violations?",
      answer:
        "Wisconsin uses a demerit point system (Wis. Stat. 343.32) where moving violation convictions add points ranging from 2 (minor violations) to 6 (serious violations like reckless driving). Accumulating 12 or more points within a 12-month period triggers automatic license suspension. The suspension lasts 2 months for 12–16 points, with longer periods for more points. After suspension, the driver's record is reviewed and they may be required to pass a road skills test before reinstatement. Wisconsin also uses driver improvement hearings for patterns of violations even before the 12-point threshold is reached.",
    },
  ],
  relatedTests: [
    { label: "WI Motorcycle Test", href: "/wisconsin-motorcycle-practice-test" },
    { label: "WI CDL Test", href: "/wisconsin-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function WisconsinDMVPage() {
  return <PracticeTestPage {...data} />;
}
