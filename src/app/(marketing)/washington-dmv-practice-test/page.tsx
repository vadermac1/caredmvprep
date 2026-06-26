import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Washington DMV Practice Test 2025 – Free WA Department of Licensing Exam Prep",
  description:
    "Free Washington DOL practice test based on the 2025 Washington Driver Guide. 40 questions, 80% to pass. Covers E-DUI electronics law, 5 ng/mL THC cannabis DUI, SR-520 floating bridge wind rules, WSF ferry procedures, and Negligent Driving 2nd Degree for handheld phone use.",
  alternates: { canonical: "https://caredmvprep.com/washington-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/washington-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Washington",
  stateAbbr: "WA",
  testLabel: "Driver's License Knowledge Test",
  slug: "washington-dmv-practice-test",
  headline: "Washington DOL Practice Test – Department of Licensing Knowledge Exam",
  intro:
    "Washington driver's licenses are issued by the Department of Licensing (DOL) — not a DMV. The DOL is an unusual dual-function agency that licenses both drivers and regulated professionals such as real estate agents and cosmetologists. The DOL administers a 40-question test requiring 80% (32/40) to pass. This free practice test focuses on Washington-specific content: the E-DUI electronics law (E2SHB 1371, effective July 23, 2017), the 5 ng/mL delta-9 THC cannabis DUI per se limit (RCW § 46.61.502), Negligent Driving in Second Degree for handheld-plus-negligent driving combinations, Washington State Ferries loading procedures, and the SR-520 floating bridge wind closure rules.",
  basedOn: "2025 Washington State Driver Guide",
  about: [
    "Washington state driver's licenses are issued by the Washington Department of Licensing (DOL) — not a Department of Motor Vehicles. The DOL is distinctive nationally because it licenses both drivers and various regulated professions (real estate brokers, cosmetologists, engineers, etc.) — a dual-function arrangement uncommon among state motor vehicle agencies. DOL driver licensing offices are located throughout Washington state. The knowledge test consists of 40 multiple-choice questions covering road signs, traffic laws, right-of-way rules, and Washington-specific driving regulations. You must answer at least 32 questions correctly — 80% — to pass.",
    "Washington was among the first states to legalize recreational cannabis (Initiative 502, 2012) and simultaneously established a 5 ng/mL delta-9 THC per se DUI limit under RCW § 46.61.502. Washington uses the term 'DUI' for both alcohol (0.08%+) and cannabis impairment — there is no separate terminology for drug-impaired driving. An 'E-DUI' charge (Driving Under the Influence of Electronics, E2SHB 1371, effective July 23, 2017) applies when a driver is both using a handheld device AND driving negligently — this combination elevates the charge to Negligent Driving in Second Degree, a criminal misdemeanor under RCW § 46.61.5249. A simple E-DUI ticket (handheld use without negligent driving) is a traffic infraction; the upgrade to criminal Negligent Driving 2nd Degree requires both elements.",
    "Washington has state-specific driving features not found in most other states. Washington State Ferries (WSF) is the largest ferry system in the United States by ridership and number of vessels — loading and unloading procedures, proper vehicle placement on ferry decks, and rules about remaining in or leaving vehicles during crossings are governed by WSF rules and covered in the Washington Driver Guide. The SR-520 floating bridge across Lake Washington is the longest floating bridge in the world — during high-wind events, the bridge closes to high-profile vehicles such as motorcycles, empty trailers, and large trucks. The I-405 and I-5 corridors have HOV-2 or HOV-3 lane requirements depending on the corridor and time of day.",
  ],
  keyRules: [
    { icon: "📵", rule: "E-DUI law — all handheld banned (E2SHB 1371, July 2017)", detail: "Washington's E-DUI law bans all handheld device use while driving for all drivers. First offense: $136. Second+ within 5 years: $235 — and it appears as a moving violation on your driving record." },
    { icon: "⚖️", rule: "Negligent Driving 2nd Degree — handheld + negligent = criminal", detail: "RCW § 46.61.5249: if you are using a handheld device AND driving negligently, the charge upgrades to Negligent Driving in Second Degree — a criminal misdemeanor, not just a traffic ticket." },
    { icon: "🌿", rule: "Cannabis DUI: 5 ng/mL THC per se limit (RCW § 46.61.502)", detail: "Washington's cannabis per se DUI limit is 5 ng/mL delta-9 THC in whole blood — same penalty structure as alcohol DUI. Washington legalized recreational cannabis in 2012 (I-502) and was one of the first states to set this threshold." },
    { icon: "⛴️", rule: "Washington State Ferries — largest U.S. ferry system", detail: "WSF is the largest U.S. ferry system. Drivers must follow specific loading/unloading procedures and rules about whether to remain in or leave their vehicles during crossing, governed by WSF regulations." },
    { icon: "🌉", rule: "SR-520 floating bridge — wind closures for high-profile vehicles", detail: "The SR-520 bridge across Lake Washington is the world's longest floating bridge. During high-wind events, it closes to motorcycles, empty trailers, and large trucks. Wind closure thresholds are specifically posted." },
    { icon: "👦", rule: "Instruction permit at 15 — 6 months + 50 hours supervised", detail: "WA instruction permit available at 15 years old. Must hold 6 months and log 50 hours supervised (10 at night) with a licensed adult 25 or older who has held a valid license for at least 5 years." },
    { icon: "🌙", rule: "Intermediate curfew: 1 AM–5 AM until age 18 or 12 months", detail: "WA intermediate license holders under 18 cannot drive 1 AM–5 AM for the full intermediate period (until 18 OR 12 months on the license, whichever is later)." },
    { icon: "🚗", rule: "Under-21 DUI: 0.02% BAC or any detectable THC", detail: "Washington zero tolerance for under-21 drivers: BAC 0.02%+ triggers Minor DUI. Additionally, any detectable amount of THC in blood can result in a violation for under-21 drivers — effectively combining zero tolerance for both substances." },
  ],
  sampleQuestions: [
    {
      question: "Washington's E-DUI law (E2SHB 1371, effective July 23, 2017) prohibits which behavior for all Washington drivers?",
      options: [
        "Only texting while driving — voice calls via a handheld phone are permitted",
        "All handheld electronic device use while driving — including calls, texts, navigation, and social media",
        "Only drivers under 21 from using any wireless device while driving",
        "Using navigation apps only — calls and music playback are not covered",
      ],
      correctIndex: 1,
      explanation:
        "Washington's E-DUI law (E2SHB 1371, effective July 23, 2017) prohibits ALL Washington drivers from holding or using any handheld electronic device while driving — including calls, texts, video, social media, GPS navigation, and any other use. Hands-free Bluetooth or a dashboard-mounted device is permitted. First offense: $136 fine. Second offense within 5 years: $235 — and unlike most states' distracted driving laws, a second E-DUI appears on your driving record as a moving violation.",
    },
    {
      question: "Under Washington law, when does a handheld phone violation while driving become Negligent Driving in Second Degree (a criminal misdemeanor)?",
      options: [
        "Any handheld phone use while driving is automatically criminal in Washington — the E-DUI ticket is the misdemeanor charge",
        "Only when the driver has a prior E-DUI conviction within 5 years",
        "When the driver is both using a handheld device AND operating the vehicle in a manner that is negligent — combining both elements",
        "Only when the handheld phone use results in a collision with another vehicle",
      ],
      correctIndex: 2,
      explanation:
        "Washington RCW § 46.61.5249 creates the offense of Negligent Driving in Second Degree — a criminal misdemeanor — when a driver is BOTH using a handheld device AND operating the vehicle in a negligent manner (defined as a manner that endangers or is likely to endanger persons or property). A simple E-DUI ticket (handheld use without negligent driving) is a traffic infraction. The combination of both elements — handheld use plus negligent driving — triggers the criminal misdemeanor upgrade. This makes Washington's handheld law potentially harsher than most states' versions.",
    },
    {
      question: "Washington's per se cannabis DUI threshold under RCW § 46.61.502 is:",
      options: [
        "Any detectable THC — even trace residual amounts from days-old use",
        "5 nanograms per milliliter (ng/mL) of delta-9 THC in whole blood",
        "10 nanograms per milliliter (ng/mL) of delta-9 THC in whole blood",
        "2.5 nanograms per milliliter — half the Colorado threshold",
      ],
      correctIndex: 1,
      explanation:
        "Washington RCW § 46.61.502 establishes 5 ng/mL delta-9 THC in whole blood as the per se DUI threshold for cannabis impairment. Washington legalized recreational cannabis via Initiative 502 in 2012 — making it one of the first two states to do so — and established this specific limit simultaneously. Drivers at or above 5 ng/mL face DUI charges with the same penalty structure as alcohol DUI. Washington also allows DUI prosecution at any THC level if the driver's ability to drive safely is demonstrably affected.",
    },
    {
      question: "What is Washington State Ferries (WSF), and why does the Washington Driver Guide cover ferry procedures?",
      options: [
        "WSF is a small private ferry service only relevant to Puget Sound commuters — it has no bearing on the knowledge test",
        "WSF is the largest ferry system in the United States by ridership and vessel count — loading/unloading rules and vehicle placement on ferry decks are covered in the WA Driver Guide",
        "WSF operates only foot-passenger ferries — no vehicle transport is offered",
        "WSF is a subsidiary of WSDOT with rules identical to standard road driving — no separate procedures apply",
      ],
      correctIndex: 1,
      explanation:
        "Washington State Ferries (WSF) is the largest ferry system in the United States and a critical part of Washington's transportation network. WSF carries vehicles as well as passengers across Puget Sound and the San Juan Islands. Because vehicle loading and unloading — including proper lane placement on the dock, whether to remain in or leave vehicles during crossing, and following crew instructions — involves specific rules not applicable to road driving, the Washington Driver Guide covers these procedures. WSF rules are part of the knowledge test content for Washington drivers.",
    },
    {
      question: "The SR-520 floating bridge across Lake Washington closes to which vehicles during high-wind events?",
      options: [
        "All vehicles — the SR-520 bridge closes completely to all traffic in any wind above 35 mph",
        "Only commercial trucks over 26,000 lbs GVWR",
        "High-profile vehicles such as motorcycles, empty trailers, and large trucks — passenger cars may continue",
        "Only vehicles without all-wheel drive or snow tires during winter months",
      ],
      correctIndex: 2,
      explanation:
        "The SR-520 floating bridge across Lake Washington — the longest floating bridge in the world — is susceptible to high-wind events that create dangerous conditions for high-profile vehicles. When winds exceed posted thresholds, WSDoT closes the SR-520 bridge to motorcycles, empty trailers, large trucks, and other high-profile vehicles that can be destabilized by crosswinds on the open water. Passenger cars typically continue to use the bridge during lower-severity wind events. Wind closure thresholds and current status are posted on message boards and WSDOT's 511 service.",
    },
    {
      question: "In Washington, drivers under 21 face a DUI charge at what BAC level, and how does THC factor in for this age group?",
      options: [
        "0.08% BAC — the same as adults; no special THC provision applies to under-21 drivers",
        "0.04% BAC; THC follows the 5 ng/mL adult standard for under-21 drivers",
        "0.02% BAC for alcohol; additionally, any detectable amount of THC can result in a violation for under-21 drivers",
        "0.00% BAC for alcohol; only THC violations apply to under-21 drivers",
      ],
      correctIndex: 2,
      explanation:
        "Washington's Minor DUI law applies to drivers under 21 at 0.02% BAC — far below the adult 0.08% standard. Additionally, Washington zero tolerance for under-21 drivers extends to THC: any detectable amount of THC in blood can result in a violation for an under-21 driver, even at levels below the adult 5 ng/mL per se threshold. This effectively combines zero tolerance for both alcohol and cannabis for drivers under 21 in Washington.",
    },
    {
      question: "Washington's instruction permit is available to residents at age 15 and requires a supervising driver who:",
      options: [
        "Is at least 18 years old and has held a license for at least 1 year",
        "Is at least 21 years old with any valid license",
        "Is at least 25 years old and has held a valid license for at least 5 years",
        "Is any licensed adult driver who is an immediate family member",
      ],
      correctIndex: 2,
      explanation:
        "Washington's instruction permit requires supervised driving with a licensed adult who is at least 25 years old AND has held a valid driver's license for at least 5 years. This is more restrictive than most states (which typically require supervisors to be 21+ or even just 18+). The higher age and experience requirements reflect Washington's emphasis on experienced supervision for beginning drivers. Permit holders must log at least 50 hours (10 at night) with this qualified supervisor before taking the road skills test.",
    },
    {
      question: "Washington's intermediate license nighttime driving restriction prohibits holders under 18 from driving between what hours?",
      options: [
        "11 PM to 5 AM for the first 6 months of the intermediate license only",
        "Midnight to 5 AM for the entire intermediate period",
        "1 AM to 5 AM until the driver turns 18 OR has held the intermediate license for 12 months — whichever comes LATER",
        "10 PM to 6 AM until the driver turns 17",
      ],
      correctIndex: 2,
      explanation:
        "Washington intermediate license holders under 18 cannot drive between 1 AM and 5 AM during the full intermediate license period — which runs until the driver turns 18 OR has held the intermediate license for 12 months, whichever comes LATER. Exceptions exist for work, school, religious activities, or medical emergencies, provided the teen carries written documentation in the vehicle. The 1 AM–5 AM window covers the highest-risk hours for teen fatalities nationally.",
    },
    {
      question: "Washington's E-DUI second offense (within 5 years) differs from a first offense in what significant way?",
      options: [
        "The second offense fine is only slightly higher — $235 vs. $136 — with no other difference",
        "The second offense is a criminal misdemeanor automatically, regardless of driving behavior",
        "The second offense carries a $235 fine AND appears on the driver's record as a moving violation — unlike a first offense",
        "The second offense triggers automatic license suspension for 30 days in Washington",
      ],
      correctIndex: 2,
      explanation:
        "Washington's E-DUI law treats a second offense within 5 years differently from a first offense in a notable way: the second offense carries a $235 fine AND is recorded on the driving record as a moving violation. A first E-DUI offense is a $136 traffic infraction that typically does not appear on the driving record as a moving violation. This distinction matters for insurance purposes — insurance companies review moving violations and can raise rates based on them. This is one of the features that makes Washington's E-DUI law stricter than many states' distracted driving laws.",
    },
    {
      question: "Washington permits drivers to consume alcohol while eating or drinking 'secondary distractions' — what is the rule?",
      options: [
        "All eating, drinking, and grooming while driving are strictly prohibited in Washington with the same fines as E-DUI",
        "Eating, grooming, smoking, or other 'substantial distractions' are a secondary offense if they result in dangerous driving — but eating alone is not primary enforcement",
        "Washington has no prohibition on eating or drinking while driving — only handheld electronics are regulated",
        "Eating while driving is a primary offense carrying the same $136 fine as an E-DUI first violation",
      ],
      correctIndex: 1,
      explanation:
        "Washington's E-DUI law (E2SHB 1371) also addresses non-electronic distractions. Eating, grooming, smoking, or other 'substantial distractions' while driving can be charged as a secondary offense if the distracted behavior results in dangerous driving. Unlike the handheld device ban (which is primary enforcement), a non-electronic distraction violation requires that the behavior lead to dangerous driving before an officer can cite it. This is a secondary offense — an officer cannot pull you over solely for eating while driving unless it creates a danger.",
    },
  ],
  faqs: [
    {
      question: "Does Washington state have a DMV, and who issues driver's licenses?",
      answer:
        "Washington state does not have a Department of Motor Vehicles. Driver's licenses, instruction permits, and vehicle titles and registrations are all handled by the Washington Department of Licensing (DOL). The DOL is unusual because it licenses both drivers AND regulated professionals (real estate brokers, cosmetologists, engineers, etc.). DOL driver licensing offices are located throughout Washington. Visit dol.wa.gov for locations, appointments, and online services.",
    },
    {
      question: "What is Washington's E-DUI law and how is it different from most states' distracted driving laws?",
      answer:
        "E2SHB 1371 (effective July 23, 2017) bans all handheld device use while driving for all Washington drivers — calls, texts, navigation, social media, any use. First offense: $136 traffic infraction. Second offense within 5 years: $235 AND it appears on your driving record as a moving violation (most first-offense E-DUI tickets don't hit the record). Additionally, combining handheld device use with negligent driving creates Negligent Driving in Second Degree — a criminal misdemeanor under RCW § 46.61.5249. This criminal upgrade is one feature that distinguishes Washington's law.",
    },
    {
      question: "How does Washington's cannabis DUI law work?",
      answer:
        "Washington law (RCW § 46.61.502) sets a 5 ng/mL delta-9 THC per se DUI limit in whole blood. Drivers at or above this level face DUI charges with the same penalties as alcohol DUI (minimum 24 hours jail, $940.50 fine, 90-day suspension for a first offense). Washington also allows DUI prosecution at any THC level if the driver's ability to drive safely is demonstrably affected. For under-21 drivers, any detectable THC is a violation — stricter than the adult 5 ng/mL standard. Recreational cannabis is legal in Washington; driving impaired is not.",
    },
    {
      question: "What are Washington State Ferries rules for vehicle drivers?",
      answer:
        "Washington State Ferries (WSF) is the largest U.S. ferry system. For vehicle drivers: follow dock staff directions for lane placement while waiting; drive slowly and carefully onto the ferry deck following crew instructions; turn off the engine after parking; passengers may remain in their vehicles or go to the passenger cabin (some crossings require all passengers to exit vehicles); when disembarking, wait for crew signal before starting the engine and driving off. WSF carries vehicles on multiple Puget Sound routes and to the San Juan Islands.",
    },
    {
      question: "What is the SR-520 floating bridge and why does it close during high winds?",
      answer:
        "The SR-520 bridge across Lake Washington is the longest floating bridge in the world — it literally floats on the water surface, supported by concrete pontoons. During high-wind events, crosswinds over the open water create dangerous handling conditions for high-profile vehicles: motorcycles, empty trailers, large trucks, and RVs are particularly susceptible. WSDoT closes SR-520 to these high-profile vehicles when wind speeds exceed posted thresholds. Passenger cars typically continue using the bridge during lower-severity wind events.",
    },
    {
      question: "What are Washington's intermediate license restrictions for teen drivers?",
      answer:
        "Washington intermediate license: (1) First 6 months — no passengers under age 20 who are not immediate family members; (2) Throughout the intermediate period (until age 18 OR 12 months on the license, whichever is LATER) — no driving 1 AM to 5 AM. Both restrictions can be waived for work, school, religious activities, or medical necessity with written documentation carried in the vehicle. A licensed adult 25+ in the front seat also overrides both restrictions.",
    },
    {
      question: "What documents do I need for a Washington DOL driver's license?",
      answer:
        "For a REAL ID-compliant Washington license: proof of identity (birth certificate, U.S. passport, or permanent resident card), proof of Social Security number (SSN card, W-2, or paystub with full SSN), and two proofs of Washington residency (utility bills, bank statements, or a lease agreement dated within 12 months). Visit dol.wa.gov for the current document checklist and appointment scheduling.",
    },
    {
      question: "How long is a Washington instruction permit valid?",
      answer:
        "A Washington instruction permit is valid for 1 year from the date of issue. If you do not advance to an intermediate license within 1 year, you must reapply and pass the knowledge test again. Most teens complete the 6-month holding period and take the road skills test before the permit expires. The permit requires 50 supervised hours (10 at night) with a qualified supervisor aged 25+ who has held a license for at least 5 years.",
    },
    {
      question: "What are Washington's HOV lane rules on I-5 and I-405?",
      answer:
        "Washington's I-5 and I-405 have HOV (High-Occupancy Vehicle) lanes that require 2+ occupants (HOV-2) during peak commute hours. Some portions of I-405 operate as Express Toll Lanes (ETLs) where solo drivers can pay a toll to use the lanes during congested periods. During non-peak hours, the ETLs open to all traffic. HOV violations carry significant fines. Specific HOV requirements vary by corridor and time of day — check WSDOT for current rules on specific highway segments.",
    },
    {
      question: "What is Washington's first DUI penalty?",
      answer:
        "A first DUI in Washington (at 0.08%+ BAC or 5 ng/mL+ THC) carries: minimum 24 hours in jail (or 15 days electronic home monitoring as an alternative), $940.50 in base fines (plus court fees and assessments), a 90-day license suspension for alcohol DUI (longer if refused a breath test), and mandatory IID installation after license reinstatement. A first DUI is a gross misdemeanor in Washington — not a simple misdemeanor. For under-21 drivers, a first Minor DUI at 0.02%+ BAC triggers a 90-day suspension.",
    },
  ],
  relatedTests: [
    { label: "WA Motorcycle Test", href: "/washington-motorcycle-practice-test" },
    { label: "WA CDL Test", href: "/washington-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function WashingtonDMVPage() {
  return <PracticeTestPage {...data} />;
}
