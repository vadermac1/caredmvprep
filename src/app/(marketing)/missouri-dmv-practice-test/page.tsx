import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Missouri DOR Practice Test 2025 – Free MO Department of Revenue Driver's License Exam Prep",
  description:
    "Free Missouri driver's license practice test based on the MO Driver Guide. 25 questions, 80% passing. Missouri's Department of Revenue (not a DMV) administers licensing. State-specific questions on MO's point system, flash flood laws, and DWI rules.",
  alternates: { canonical: "https://caredmvprep.com/missouri-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/missouri-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Missouri",
  stateAbbr: "MO",
  testLabel: "Missouri Driver License Test",
  slug: "missouri-dmv-practice-test",
  headline: "Missouri Driver's License Practice Test 2025",
  intro:
    "Missouri is the only state in the nation where the Department of Revenue (DOR) — not a DMV or Department of Transportation — administers driver licensing. The MO DOR knowledge test has 25 questions with a required 80% passing score. This free practice exam covers Missouri's point suspension system, DWI laws, flash flood safety rules, and road sign recognition.",
  basedOn: "Missouri Driver Guide (current DOR edition)",
  keyRules: [
    { icon: "🏛️", rule: "Agency: MO DOR issues all licenses", detail: "Missouri is the only U.S. state where the Department of Revenue (DOR) — not a DMV or DPS — issues driver licenses. Look for DOR offices, not DMV offices." },
    { icon: "📋", rule: "8 points in 18 months = 30-day suspension", detail: "4 points in 12 months = advisory letter; 8 points in 18 months = 30-day suspension; 12 points in 12 months = 60-day suspension; 18 points in 24 months = 90-day suspension." },
    { icon: "🍺", rule: "DWI: 0.08% adults (not DUI)", detail: "Missouri uses DWI (Driving While Intoxicated). 0.08% adult BAC; 0.02% for drivers under 21; 0.04% for CDL holders in a CMV. First DWI = Class B misdemeanor." },
    { icon: "🌊", rule: "Flooded roads: barricade violation is illegal", detail: "Missouri's 'Turn Around, Don't Drown' rule (RSMo 304.022): it is illegal to drive through or around a flooded road barricade. Civil liability and criminal charges for violations." },
    { icon: "📱", rule: "Hands-free required (SB 398)", detail: "Missouri's hands-free law (SB 398) took effect August 28, 2023 — banning handheld device use for all drivers. First violation: $150 fine." },
    { icon: "🚗", rule: "Instruction permit at 15 (182-day hold)", detail: "Instruction permit issued at 15; must hold for 182 consecutive days (6 months + 1 day) before an Intermediate License. Must log driving hours with supervising adult." },
    { icon: "🌙", rule: "Intermediate: 1AM–5AM curfew", detail: "Under 18: no more than 1 non-family passenger under 19 for first 12 months; no driving 1AM–5AM without a licensed adult 21+ present." },
    { icon: "🔧", rule: "Annual safety inspection required", detail: "Missouri requires annual safety and emissions inspections for vehicles registered in participating counties. Sticker must be current for registration renewal." },
  ],
  about: [
    "Missouri stands alone among all 50 states: driver licensing is handled by the Department of Revenue (DOR), not a Department of Motor Vehicles, Department of Public Safety, or Secretary of State. The MO DOR's Driver License Bureau issues all operator licenses, permits, and commercial licenses. This distinction matters for test-takers — official forms, websites, and building signage all reference 'DOR' or 'Driver License Bureau,' not 'DMV.' The knowledge test has 25 questions, and you must answer at least 20 correctly (80%) to pass. Tests are available at DOR license offices statewide without an appointment in most locations. If you fail, you may retest immediately (same day) at most offices, though some locations impose a short waiting period.",
    "Missouri's point system (RSMo 302.302) accumulates based on moving traffic violations. Each conviction adds points: 2 points for most minor violations, 3 for following too closely or improper passing, 4 for excessive speeding, 6 for aggressive driving or racing, 12 for DWI or vehicular manslaughter. When a driver accumulates 8 points within 18 months, the DOR automatically suspends the license for 30 days. Twelve points in 12 months results in a 60-day suspension; 18 points in 24 months results in a 90-day suspension. After each suspension, points are reduced to 4 (not zero) — so drivers must avoid further violations to prevent re-suspension. Missouri uses the term DWI (Driving While Intoxicated) — BAC 0.08% for adults, 0.02% for drivers under 21. A first-offense DWI in Missouri (BAC ≥ 0.08%) results in: Class B misdemeanor, up to 6 months jail, $1,000 fine, 90-day license suspension (or 30 days suspension + 60 days restricted/limited driving privilege).",
    "Missouri's geography creates a unique driving hazard: the state is crisscrossed by rivers, streams, and drainage basins that flood regularly. The Missouri and Mississippi Rivers, along with hundreds of smaller waterways, make flooded road conditions a recurring reality — especially in spring and after heavy rain. Missouri law makes it illegal to drive around a flooded road barricade or barrier (RSMo 304.022). The 'Turn Around, Don't Drown' principle is incorporated into Missouri driver education: most flood fatalities occur when drivers attempt to cross flooded roads that look passable but have washed-out pavement, strong current, or deeper water than visible. Just six inches of fast-moving water can knock a person down; twelve inches can carry away a small vehicle. The Missouri DOR knowledge test includes questions on this topic. Missouri's hands-free law (SB 398) took effect August 28, 2023 — banning all drivers from holding a wireless device while driving, statewide.",
  ],
  sampleQuestions: [
    {
      question: "Missouri is unique among all 50 states because driver licensing is administered by which state agency?",
      options: [
        "The Missouri Department of Transportation (MoDOT)",
        "The Missouri Department of Public Safety (DPS)",
        "The Missouri Department of Revenue (DOR), Driver License Bureau",
        "The Missouri Secretary of State",
      ],
      correctIndex: 2,
      explanation:
        "Missouri is the only state in the United States where driver licensing is handled by the Department of Revenue (DOR). All other states use a DMV, Department of Motor Vehicles, Department of Public Safety, Department of Transportation, Bureau of Motor Vehicles, or Secretary of State for driver licensing. This means Missouri license offices are labeled 'Department of Revenue — Driver License' and the official website for license information is dor.mo.gov/driver-license. The DOR administers all knowledge tests, issues all licenses, and manages the points system.",
    },
    {
      question: "A Missouri driver has accumulated 8 points on their driving record within the last 18 months. What action does the MO DOR take?",
      options: [
        "Sends an advisory letter only — no suspension until 12 points are reached",
        "Suspends the driver's license for 30 days",
        "Suspends the license for 60 days and requires a driving course",
        "Revokes the license and requires a full retest",
      ],
      correctIndex: 1,
      explanation:
        "Under Missouri RSMo 302.304, accumulating 8 points within any 18-month period triggers an automatic 30-day license suspension. The progressive system: 4 points in 12 months = advisory letter; 8 points in 18 months = 30-day suspension; 12 points in 12 months = 60-day suspension; 18 points in 24 months = 90-day suspension. After each suspension, the driver's record is reduced to 4 points — not zero. Points remain on record for 3 years and can continue to accumulate. Drivers may be eligible for a Limited Driving Privilege (LDP) to drive to work, school, or medical appointments during a suspension.",
    },
    {
      question: "Missouri law regarding flooded roads prohibits which of the following?",
      options: [
        "Driving on any road during active rainfall",
        "Driving through a flooded road if the water is more than 6 inches deep",
        "Driving around or through a barricade or barrier placed at a flooded road",
        "Driving within 300 feet of any river overbank during flood season",
      ],
      correctIndex: 2,
      explanation:
        "Missouri RSMo 304.022 makes it illegal to drive around or through a barrier or barricade placed at a flooded road. This law was enacted because most Missouri flood fatalities occur when drivers bypass barricades and drive into water of unknown depth or force. Missouri's 'Turn Around, Don't Drown' campaign emphasizes that fast-moving water as shallow as 12 inches can sweep a passenger car off the road, and just 6 inches can knock an adult off their feet. The DOR knowledge test addresses this law because flooding is a recurring statewide hazard on Missouri's thousands of low-water bridges and river-adjacent roads.",
    },
    {
      question: "Missouri uses the term 'DWI' for impaired driving. What BAC threshold triggers a DWI for an adult driver over 21?",
      options: [
        "0.10% — Missouri uses an older standard than the federal 0.08%",
        "0.08% — consistent with the federal standard",
        "0.05% — Missouri has a lower threshold because of its rural highway system",
        "0.06% — Missouri's compromise standard between federal and stricter states",
      ],
      correctIndex: 1,
      explanation:
        "Missouri's DWI law (RSMo 577.010) uses a BAC of 0.08% as the per se threshold for adult drivers 21 and over — consistent with the federal standard. Missouri uses the term 'Driving While Intoxicated' (DWI) rather than DUI. For drivers under 21, Missouri's BAC limit is 0.02%. CDL holders operating a commercial motor vehicle face the federal 0.04% threshold. A first-offense DWI (BAC ≥ 0.08%) is a Class B misdemeanor: up to 6 months jail, $1,000 fine, and 90-day suspension or 30-day suspension with 60-day restricted driving privilege.",
    },
    {
      question: "Missouri's hands-free law (SB 398) took effect on which date and applies to which drivers?",
      options: [
        "January 1, 2021 — applies only to drivers under 21",
        "July 1, 2020 — applies to school and construction zones only",
        "August 28, 2023 — applies to all drivers statewide, prohibiting handheld device use while driving",
        "Missouri has no statewide hands-free law — only local ordinances apply",
      ],
      correctIndex: 2,
      explanation:
        "Missouri's SB 398 hands-free law became effective August 28, 2023. The law applies to ALL drivers statewide and prohibits holding or using a handheld wireless device while operating a motor vehicle. Hands-free Bluetooth, speakerphone on a dashboard mount, and earpieces are permitted. Missouri was one of the last states to adopt a comprehensive hands-free law — previously, only drivers under 21 were prohibited from texting while driving. A first violation is a $150 fine; repeat violations carry higher fines. Missouri law enforcement can pull over a driver solely for a hands-free violation (primary enforcement).",
    },
    {
      question: "A Missouri driver under 18 with an Intermediate License wants to drive two friends (ages 16 and 17) to school at 7AM. Is this allowed under Missouri graduated licensing rules?",
      options: [
        "Yes — the Intermediate License places no passenger restrictions during school hours",
        "No — the passenger restriction (1 non-family passenger under 19) would be exceeded by having two non-family passengers",
        "Yes — school transportation is an explicit exception to Missouri's passenger restriction",
        "No — Intermediate License holders may not drive anyone under 19 for any reason",
      ],
      correctIndex: 1,
      explanation:
        "Missouri's Intermediate License passenger restriction limits drivers under 18 to one (1) non-family passenger under 19 during the first 6 months of holding the license — unless a licensed adult 21 or older is also in the vehicle. Driving two friends to school exceeds this limit and is not permitted, even though school travel is a legitimate reason. Immediate family members are excluded from the passenger count. The curfew restriction (no driving 1AM–5AM without a licensed adult 21+ present) applies separately from the passenger restriction. Both restrictions apply until the driver turns 18 or has held the Intermediate License for 6 months (whichever comes later).",
    },
    {
      question: "In Missouri, what annual requirements must most vehicle owners satisfy to legally register their vehicle?",
      options: [
        "Missouri requires no vehicle inspection — annual registration is based on payment only",
        "Safety inspection only — emissions are not tested in any Missouri county",
        "Safety inspection and, for vehicles registered in certain counties, an emissions inspection",
        "A full mechanical inspection by a licensed MoDOT inspector at the DOR office",
      ],
      correctIndex: 2,
      explanation:
        "Missouri requires an annual safety inspection for all registered motor vehicles. Additionally, certain Missouri counties require a separate emissions (pollution control) test — currently applicable to vehicles registered in the St. Louis metropolitan area and Kansas City area counties. The safety inspection covers brakes, lights, tires, steering, and other safety components. Inspections are performed by licensed Missouri inspection stations (not at the DOR). A vehicle that fails inspection must be repaired and re-inspected before the owner can renew registration. Vehicles less than 5 years old may be exempt from emissions testing in some counties.",
    },
    {
      question: "Missouri's 'implied consent' law means that drivers who refuse a chemical test after a lawful DWI arrest face:",
      options: [
        "A $500 fine only — Missouri cannot suspend a license without a DWI conviction",
        "A 1-year license revocation (first refusal), which is separate from any criminal DWI charge",
        "No consequence for refusal — Missouri's implied consent was ruled unconstitutional",
        "A 90-day suspension only if the BAC test would have shown 0.08% or higher",
      ],
      correctIndex: 1,
      explanation:
        "Missouri's Implied Consent Law (RSMo 577.041) provides that all drivers on Missouri roads have implicitly consented to chemical testing if lawfully arrested for DWI. Refusing a breathalyzer or blood test results in a 1-year license revocation for a first refusal — entirely separate from and in addition to any criminal DWI charges. A second refusal within 5 years results in a 1-year revocation (same, but the DOR may impose additional conditions on reinstatement). The refusal is also admissible as evidence in a criminal DWI trial under Missouri law.",
    },
    {
      question: "What is the legal speed limit on Missouri rural two-lane highways when no speed limit sign is posted?",
      options: [
        "55 mph — Missouri's default rural highway speed limit",
        "60 mph — Missouri's default for unpaved county roads and state routes",
        "65 mph — Missouri's rural two-lane default is higher than most states",
        "70 mph — Missouri sets its rural interstate and highway limit at the same value",
      ],
      correctIndex: 0,
      explanation:
        "Missouri's default speed limit on rural two-lane state highways when no sign is posted is 55 mph (RSMo 304.010). Urban areas and residential districts have lower default limits. Missouri interstate rural highways are posted (typically 70 mph), and those posted limits control. Missouri law also incorporates the 'Reasonable and Prudent' standard: even if below the posted limit, a driver must travel at a speed safe for actual road and weather conditions. In fog, rain, or at night on unlit rural roads, the appropriate safe speed may be well below 55 mph regardless of what's posted.",
    },
    {
      question: "Missouri law on passing a stopped school bus applies in which situation?",
      options: [
        "Only when the school bus is on a divided highway",
        "Whenever a school bus displays flashing red lights and an extended stop arm, all traffic in both directions on an undivided road must stop — traffic on a divided highway need not stop for buses on the opposite roadway",
        "Only to vehicles directly behind the school bus — approaching vehicles from the opposite direction are not required to stop",
        "Missouri school bus stop laws only apply on roads with posted speed limits of 35 mph or less",
      ],
      correctIndex: 1,
      explanation:
        "Missouri law (RSMo 304.050) requires all traffic traveling in both directions to stop when a school bus activates its flashing red lights and stop arm on an undivided road. On a divided highway (separated by a physical median or barrier), only traffic traveling in the same direction as the bus must stop — traffic on the opposite roadway may continue. You must remain stopped until the red lights stop flashing and the stop arm is retracted. The fine for violating Missouri's school bus stop law starts at $300. Missouri is the state where specific, testable rules on this topic include the divided highway exception — a detail the DOR knowledge test covers.",
    },
  ],
  faqs: [
    {
      question: "Why does Missouri use the Department of Revenue (DOR) for driver licensing instead of a DMV?",
      answer:
        "Missouri consolidated driver licensing under the DOR for historical and administrative reasons — it was more efficient to combine vehicle registration, tax collection, and licensing under one agency in the 20th century when the system was built. Missouri is the only state to retain this structure. The DOR's Driver License Bureau operates statewide at license offices and handles all functions a traditional DMV would: knowledge tests, road skills tests, license issuance, and points management. The official website is dor.mo.gov/driver-license.",
    },
    {
      question: "What is Missouri's policy on driving around flooded road barricades?",
      answer:
        "Missouri law (RSMo 304.022) explicitly prohibits driving around or through a barricade placed at a flooded road. Violating this law is a Class B misdemeanor. Missouri has one of the highest per-capita flood fatality rates in the nation due to its geography — the Missouri and Mississippi Rivers plus hundreds of tributary streams regularly flood rural roads and low-water bridges. The 'Turn Around, Don't Drown' principle is codified: six inches of fast-moving water can sweep a person off their feet, and twelve inches can carry away a passenger car.",
    },
    {
      question: "What is Missouri's graduated licensing system for drivers under 18?",
      answer:
        "Missouri's three-stage GDL system: (1) Instruction Permit at 15 — supervised driving only, adult 21+ in front passenger seat, must be held for 182 consecutive days; (2) Intermediate License at 16 (after permit + passing road test) — no more than 1 non-family passenger under 19, no driving 1AM–5AM without adult 21+ present; (3) Full license at 18. Both the passenger restriction and curfew apply until the driver turns 18 OR has held the Intermediate License for 6 months, whichever comes later. A licensed parent or guardian 21+ can override restrictions by being present in the vehicle.",
    },
    {
      question: "How does Missouri's DWI point system affect commercial driver's license (CDL) holders?",
      answer:
        "Missouri CDL holders face the DOR point system for personal vehicle violations AND federal FMCSA disqualification rules. For commercial vehicles, the DWI BAC threshold drops to 0.04%. A DWI conviction in any vehicle — personal or commercial — triggers CDL disqualification: 1 year for a first offense, lifetime for a second. Missouri's points system also counts out-of-state violations reported through the Driver License Compact — a DWI received while traveling in another state still adds points to a Missouri driving record.",
    },
    {
      question: "Does Missouri require driver education for new drivers under 18?",
      answer:
        "Missouri does not mandate driver education for drivers under 18 at the state level, but it is strongly encouraged. Without a state-approved driver education course, the minimum age for an Intermediate License is 16½ (must hold permit for 182 days starting at 15). Completing an approved driver education course may allow progression at 16. Additionally, most Missouri auto insurance companies offer significant discounts (10–15%) for drivers who complete an approved course. Check dor.mo.gov for a list of approved driver education providers.",
    },
    {
      question: "What does Missouri's annual vehicle inspection require?",
      answer:
        "Missouri requires an annual safety inspection at a licensed inspection station. The inspection covers: brakes and brake components, steering and suspension, tires and wheels, lights (headlights, taillights, brake lights, turn signals), windshield and wipers, horn, and mirrors. In the St. Louis and Kansas City metro areas, an additional emissions inspection is required. Vehicles under 5 years old may be exempt from emissions in some counties. A failed inspection requires repair within a set timeframe before registration can be renewed. Cost varies by inspection station.",
    },
    {
      question: "What is Missouri's basic speed law and how does it affect drivers on rural roads?",
      answer:
        "Missouri's basic speed law (RSMo 304.010) requires all drivers to travel at a speed that is 'reasonable and prudent under the conditions' — even if below the posted limit. In fog, heavy rain, construction zones, or on winding rural roads, the law requires reducing speed to match visibility and road conditions regardless of what's posted. Missouri's default rural highway speed limit (when unposted) is 55 mph. Driving at 55 mph on an ice-covered rural highway when conditions dictate 30 mph can still result in a citation under the basic speed law even if no speed limit sign was violated.",
    },
    {
      question: "How do out-of-state traffic convictions affect a Missouri driver's DOR record?",
      answer:
        "Missouri participates in the Driver License Compact (DLC), which requires member states to share traffic conviction information. Violations received in other DLC states are reported to the Missouri DOR and added to the driver's record as if the violation occurred in Missouri. The DOR assigns equivalent Missouri points — for example, a DWI received in Kansas adds 12 points, the same as a Missouri DWI. This means that traffic violations while traveling or living briefly in another state can still affect a Missouri license and trigger suspension thresholds.",
    },
    {
      question: "What is Missouri's Limited Driving Privilege (LDP) and who qualifies?",
      answer:
        "Missouri's Limited Driving Privilege (LDP) allows drivers whose licenses are suspended or revoked to drive for essential purposes during the suspension period. LDP typically covers driving to/from work, school, medical appointments, court-ordered programs, and alcohol treatment. LDP is not automatic — you must petition the DOR or a circuit court (depending on the type of suspension). LDP is not available for all suspension types: drivers with multiple DWI convictions or certain serious offenses may not qualify. DWI-related suspensions may require proof of SR-22 insurance as a condition of LDP.",
    },
    {
      question: "What are Missouri's DOR rules about vehicle registration and when must out-of-state vehicles be re-registered?",
      answer:
        "New Missouri residents who bring a vehicle from another state must register it with the Missouri DOR within 30 days of establishing residency. Registration requires: (1) title in owner's name (or lien release); (2) passed Missouri safety inspection; (3) proof of Missouri auto insurance; (4) payment of Missouri personal property tax (vehicles are taxed annually as personal property by Missouri counties — a unique feature compared to many states). Missouri vehicle registration must be renewed annually. License plates stay with the vehicle (not the owner) when the vehicle is sold.",
    },
  ],
  relatedTests: [
    { label: "MO Motorcycle Test", href: "/missouri-motorcycle-practice-test" },
    { label: "MO CDL Test", href: "/missouri-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MissouriDMVPage() {
  return <PracticeTestPage {...data} />;
}
