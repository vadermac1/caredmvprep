import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Delaware DMV Practice Test 2025 – Free DE Driver's License Exam Prep",
  description:
    "Free Delaware DMV practice test covering SB 68 Hands-Free Act (Jan 2024), Delaware Memorial Bridge wind closures, Cape May-Lewes Ferry vehicle procedures, 21 Del.C. § 4177 high-BAC DUI (0.16%), and no-sales-tax vehicle registration facts. 30 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/delaware-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/delaware-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Delaware",
  stateAbbr: "DE",
  testLabel: "DMV Practice Test",
  slug: "delaware-dmv-practice-test",
  headline: "Delaware DMV Practice Test – Division of Motor Vehicles Knowledge Exam",
  intro:
    "Delaware's Division of Motor Vehicles (DMV) operates within DelDOT (Delaware Department of Transportation) — one of the few states where driver licensing is housed within the transportation agency rather than a standalone licensing authority. The DMV administers a 30-question test requiring 80% (24/30) to pass. This free practice test focuses on Delaware-specific content: SB 68 Hands-Free Delaware Act (effective January 1, 2024), Delaware Memorial Bridge high-wind closures for high-profile vehicles, Cape May-Lewes Ferry vehicle boarding and crossing rules, Delaware's high-BAC DUI enhancement at 0.16%+ (21 Del.C. § 4177), the no-sales-tax vehicle purchase context, and Wilmington school zone camera enforcement.",
  basedOn: "Delaware Division of Motor Vehicles Driver's Manual",
  keyRules: [
    { icon: "📱", rule: "SB 68: Hands-Free Delaware Act (effective January 1, 2024)", detail: "Delaware's hands-free law took effect January 1, 2024 — one of the more recently enacted state handheld bans. All drivers prohibited from physically holding a wireless device while driving. First offense: $100; second: $200; third+: $400." },
    { icon: "🌉", rule: "Delaware Memorial Bridge: wind closures for high-profile vehicles", detail: "The Delaware Memorial Bridge (US 13/US 40) over the Delaware River closes high-profile vehicles (motorcycles, campers, large trucks) during high-wind events. Wind closure thresholds are posted and enforced by DelDOT." },
    { icon: "⛴️", rule: "Cape May-Lewes Ferry: engine off, exit vehicle during crossing", detail: "The Cape May-Lewes Ferry crosses Delaware Bay between Lewes, DE and Cape May, NJ. Vehicle operators must turn off engines and exit vehicles after parking on the ferry deck. Passengers proceed to the passenger areas during crossing." },
    { icon: "🍺", rule: "DUI high-BAC enhancement: 0.16%+ triggers enhanced penalties (21 Del.C. § 4177)", detail: "Delaware's DUI law includes a high-BAC enhancement: 0.16%+ BAC triggers mandatory minimum sentence enhancements including longer suspension and higher fines. Standard adult DUI threshold: 0.08%. Under 21: 0.02%." },
    { icon: "💸", rule: "No sales tax on vehicle purchases — but residency still required for license", detail: "Delaware is the only state with no sales tax. Vehicle purchases attract buyers from neighboring PA, NJ, and MD. However, Delaware driver's license eligibility is based on residency, not where the vehicle is registered." },
    { icon: "📷", rule: "School zone speed cameras — Wilmington and other areas", detail: "Delaware has school zone speed camera enforcement systems in Wilmington and other school zones. Camera violations result in civil fines mailed to the registered owner — not moving violations that affect driving records." },
    { icon: "👦", rule: "Instruction permit at 16 — supervised by driver 25+ years old", detail: "Delaware's learner's permit is available at 16. Permit holders must always be accompanied by a licensed driver at least 25 years old (or a licensed driving instructor) in the front seat while driving." },
    { icon: "🚗", rule: "DUI with minor in vehicle: enhanced penalty regardless of BAC", detail: "Delaware's DUI law (21 Del.C. § 4177) includes an enhanced penalty provision for operating a vehicle under the influence with a child under 17 in the vehicle — regardless of the driver's BAC level." },
  ],
  about: [
    "Delaware's Division of Motor Vehicles (DMV) operates under the Delaware Department of Transportation (DelDOT) — an unusual national arrangement where driver licensing sits within a transportation agency rather than a standalone licensing authority or a revenue department. Most states have a separate DMV, licensing division, or motor vehicle administration. Delaware DMV offices are located in Dover, Newark, Wilmington, and Georgetown. The knowledge test consists of 30 multiple-choice questions covering traffic laws, road signs, and safe driving, requiring at least 24 correct (80%) to pass. Delaware's permit age of 16 requires the supervising driver to be at least 25 years old — higher than most states' 21-year-old supervisor requirement.",
    "Delaware is the only state in the United States with no sales tax, making it a destination for vehicle purchases by residents of neighboring Pennsylvania, New Jersey, and Maryland. A vehicle bought in Delaware carries no state sales tax at the point of sale. However, when buyers from those neighboring states register the vehicle in their home state, they typically owe their home state's use tax. Delaware driver's license eligibility is entirely based on residency — registering a vehicle in Delaware does not qualify a non-resident for a Delaware driver's license. Delaware's unique no-sales-tax status is part of the driving context tested because it affects vehicle purchasing patterns and registration considerations that Delaware drivers encounter.",
    "Delaware has two state-specific geographic driving features. The Delaware Memorial Bridge — carrying US 13 and US 40 across the Delaware River between Delaware and New Jersey — has high-wind restrictions and closures for high-profile vehicles (motorcycles, campers, large trucks) during strong wind events. The bridge has two separate spans — the older southern span and newer northern span — with specific lane assignments. The Cape May-Lewes Ferry crosses Delaware Bay between Lewes, Delaware and Cape May, New Jersey. Vehicle operators must turn off their engines after parking on the ferry deck, exit their vehicles, and proceed to the passenger areas during the crossing. Weight limits for vehicles on the ferry apply, and hazardous materials vehicles face additional restrictions. SB 68, the Hands-Free Delaware Act effective January 1, 2024, is one of the more recently enacted state handheld bans nationally.",
  ],
  sampleQuestions: [
    {
      question: "Delaware's SB 68 Hands-Free Delaware Act took effect on what date, and what does it prohibit?",
      options: [
        "January 1, 2020 — Delaware was an early adopter of the hands-free ban",
        "July 1, 2021 — Delaware enacted the ban following the pandemic-era legislative session",
        "January 1, 2024 — it prohibits physically holding a wireless device while driving, for all drivers",
        "January 1, 2022 — Delaware's law followed neighboring Maryland's enactment",
      ],
      correctIndex: 2,
      explanation:
        "Delaware's Hands-Free Delaware Act (SB 68) took effect January 1, 2024 — making Delaware one of the more recently enacted state handheld bans in the U.S. The law prohibits all drivers from physically holding a wireless communications device while operating a motor vehicle. Hands-free use — a phone in a dashboard mount, Bluetooth speakerphone, or earpiece — is permitted. The law is primary enforcement, meaning an officer can stop a driver solely for holding a device. First offense: $100; second: $200; third+: $400.",
    },
    {
      question: "What should drivers of high-profile vehicles (motorcycles, campers, large trucks) do before crossing the Delaware Memorial Bridge during a high-wind event?",
      options: [
        "Use only the older southern span — it offers better wind protection for high-profile vehicles",
        "Proceed normally — the Delaware Memorial Bridge has no special rules for high-profile vehicles in any weather",
        "Check DelDOT alerts for wind closure status before attempting the crossing — the bridge closes to high-profile vehicles in strong winds",
        "High-profile vehicles are restricted to the right lane only during wind events — no full closures occur",
      ],
      correctIndex: 2,
      explanation:
        "The Delaware Memorial Bridge (carrying US 13/US 40 across the Delaware River) imposes closures for high-profile vehicles — motorcycles, campers, empty trailers, and large trucks — when wind speeds exceed posted thresholds. The bridge authority and DelDOT issue wind restriction alerts in real time. Drivers of high-profile vehicles should check DelDOT's traffic alert system and the Delaware State Police website before traveling during storm conditions. The bridge has two spans (older southern, newer northern) with specific lane assignments under normal conditions.",
    },
    {
      question: "When taking a vehicle on the Cape May-Lewes Ferry between Delaware and New Jersey, drivers must:",
      options: [
        "Keep the engine running throughout the crossing to maintain vehicle systems",
        "Remain in their vehicle with seat belts fastened for safety during the water crossing",
        "Turn off the engine after parking on the ferry deck, exit the vehicle, and proceed to the passenger areas during the crossing",
        "Display hazard lights throughout the crossing as a safety signal to crew members",
      ],
      correctIndex: 2,
      explanation:
        "The Cape May-Lewes Ferry (CMLF) requires all vehicle operators to turn off their engines after parking on the ferry deck and to exit their vehicles. Passengers are not permitted to remain in their vehicles during the crossing — they must proceed to the passenger areas of the ferry. This is a safety requirement applicable to all standard vehicle crossings. Hazardous materials vehicles face additional boarding restrictions and must be declared to ferry staff in advance. When disembarking, wait for crew instructions before returning to your vehicle.",
    },
    {
      question: "Delaware's DUI law (21 Del.C. § 4177) includes a 'high-BAC' enhancement that triggers enhanced penalties at what threshold?",
      options: [
        "0.10% BAC — just above the standard 0.08% threshold",
        "0.12% BAC — a moderate high-BAC enhancement",
        "0.16% BAC — double the standard limit, triggering mandatory enhanced penalties",
        "0.20% BAC — only extreme BAC levels trigger Delaware's enhancement",
      ],
      correctIndex: 2,
      explanation:
        "Delaware's DUI law includes a high-BAC enhancement provision: a BAC of 0.16% or higher — double the standard 0.08% DUI threshold — triggers mandatory enhanced penalties including longer minimum license revocation periods and higher fines than standard DUI. Delaware also includes an enhanced penalty for DUI with a child under 17 in the vehicle regardless of the driver's BAC. The high-BAC enhancement and the child-in-vehicle enhancement are both directly tested in Delaware's knowledge exam content.",
    },
    {
      question: "Delaware is the only state with no sales tax. How does this affect eligibility for a Delaware driver's license?",
      options: [
        "Non-residents who purchase and register a vehicle in Delaware automatically qualify for a Delaware license",
        "Delaware's no-sales-tax policy allows any vehicle purchaser in Delaware to apply for a Delaware license",
        "Delaware driver's license eligibility is based entirely on residency — registering a vehicle in Delaware does not qualify a non-resident for a license",
        "Non-residents who register three or more vehicles in Delaware may apply for a Delaware license regardless of where they live",
      ],
      correctIndex: 2,
      explanation:
        "Delaware's driver's license eligibility is based entirely on state residency — not vehicle registration or vehicle purchase. While Delaware's no-sales-tax environment attracts many vehicle buyers from neighboring Pennsylvania, New Jersey, and Maryland (some of whom also register their vehicles in Delaware), a non-resident cannot obtain a Delaware driver's license simply by owning a Delaware-registered vehicle. You must be a bona fide Delaware resident with a Delaware address as your primary domicile to apply for a Delaware license.",
    },
    {
      question: "What is the minimum age to apply for a Delaware learner's permit, and how old must the supervising driver be?",
      options: [
        "15 years old; supervising driver must be at least 18",
        "16 years old; supervising driver must be at least 21",
        "16 years old; supervising driver must be at least 25 or a licensed driving instructor",
        "15 years, 6 months old; supervising driver must be at least 21",
      ],
      correctIndex: 2,
      explanation:
        "Delaware's learner's permit is available at age 16 after passing the knowledge test and vision screening. Permit holders must always be accompanied by a licensed driver who is at least 25 years old (or a licensed driving instructor seated in the front seat) whenever they are behind the wheel. Delaware's 25-year-old supervisor requirement is more restrictive than many states, which allow 21-year-old supervisors. After accumulating the required supervised driving hours (including nighttime hours), a provisional license becomes available.",
    },
    {
      question: "What is Delaware's school zone speed camera enforcement program?",
      options: [
        "Delaware does not use automated cameras — only in-person enforcement by police applies in school zones",
        "Camera systems in Wilmington and other school zones issue civil fines by mail to the registered owner for speeding violations — these are not moving violations affecting driving records",
        "Camera violations in Delaware school zones result in criminal misdemeanor charges and mandatory court appearances",
        "Delaware's school zone cameras are advisory only — they display speed to drivers but do not issue tickets",
      ],
      correctIndex: 1,
      explanation:
        "Delaware has school zone speed camera enforcement systems operating in Wilmington and other school zones. When a vehicle is photographed speeding in a school zone, a civil fine is mailed to the registered owner of the vehicle. These are civil violations — not moving violations — so they do not appear on the driver's record and do not affect insurance in the same way as officer-issued moving violation tickets. However, they must be paid and can result in vehicle registration holds if unpaid.",
    },
    {
      question: "Delaware's DUI law includes an enhanced penalty when a driver is DUI and also has a minor in the vehicle. When does this enhancement apply?",
      options: [
        "Only when the driver's BAC is 0.16% or higher AND a minor is in the vehicle",
        "When the driver is convicted of DUI AND a child under 17 is in the vehicle — regardless of the driver's BAC level",
        "Only for first-time DUI offenders who have a child under 12 in the vehicle",
        "The minor-in-vehicle enhancement is automatic only for commercial vehicle drivers with child passengers",
      ],
      correctIndex: 1,
      explanation:
        "Delaware's DUI law (21 Del.C. § 4177) includes an enhanced penalty provision for operating a vehicle while under the influence of alcohol or drugs when a child under the age of 17 is in the vehicle — and this enhancement applies regardless of the driver's BAC level. The child-in-vehicle enhancement is separate from the high-BAC enhancement (which triggers at 0.16%+ BAC). Delaware's DUI law contains both enhancements, each applicable under different circumstances, and both are tested in Delaware's knowledge exam.",
    },
    {
      question: "Delaware's graduated licensing program allows a provisional (Level 1) license after the learner's permit at what age or holding period?",
      options: [
        "At age 16 or after 3 months with the permit — whichever comes first",
        "At age 16½ or after 6 months with the permit — whichever comes first — after logging 50 supervised hours (10 at night)",
        "At age 17 or after 12 months with the permit regardless of supervised hours",
        "At age 16 immediately — no supervised hours requirement applies in Delaware",
      ],
      correctIndex: 1,
      explanation:
        "Delaware's GDL program requires the learner's permit to be held until age 16½ OR for at least 6 months — whichever comes first — and the applicant must log a minimum of 50 supervised driving hours (10 at night) with a licensed driver at least 25 years old in the front seat. After passing a road skills test, a Level 1 (Provisional) License is issued. The provisional license has nighttime driving restrictions and passenger limitations. A full unrestricted Level 2 License is available at age 18 or after 12 months on the provisional license.",
    },
    {
      question: "When a vehicle buyer from Pennsylvania purchases a car in Delaware (no sales tax), what happens when they register the vehicle in Pennsylvania?",
      options: [
        "No taxes are owed in Pennsylvania — the Delaware purchase is fully tax-exempt in neighboring states",
        "Pennsylvania waives its use tax when the vehicle was legitimately purchased out of state",
        "Pennsylvania assesses its own use tax on the vehicle when it is registered there — the Delaware no-sales-tax benefit does not follow the vehicle to the buyer's home state",
        "The buyer owes Delaware a use tax upon vehicle registration — Delaware taxes vehicles that leave the state",
      ],
      correctIndex: 2,
      explanation:
        "Delaware's no-sales-tax benefit applies at the point of purchase in Delaware — no Delaware sales tax is collected. However, when a Pennsylvania resident takes that vehicle home and registers it in Pennsylvania, Pennsylvania collects its use tax (equivalent to the sales tax for out-of-state purchases). The same applies for New Jersey and Maryland residents. The no-tax savings on purchase are often offset by the home state's use tax upon registration. This is part of Delaware's driving context because it explains why out-of-state residents frequently purchase vehicles in Delaware.",
    },
  ],
  faqs: [
    {
      question: "Which agency issues Delaware driver's licenses and what is unusual about its placement?",
      answer:
        "Delaware driver's licenses are issued by the Division of Motor Vehicles (DMV), which operates under the Delaware Department of Transportation (DelDOT). This is unusual nationally — most states have a standalone DMV, separate licensing division, or a motor vehicle administration within a public safety or revenue department. Delaware's DMV within its transportation agency reflects Delaware's integrated approach to transportation and licensing functions. DMV offices are located in Dover, Newark, Wilmington, and Georgetown.",
    },
    {
      question: "What is Delaware's SB 68 Hands-Free Delaware Act?",
      answer:
        "Delaware Senate Bill 68, the Hands-Free Delaware Act, took effect January 1, 2024. It prohibits all drivers from physically holding a wireless communications device while operating a motor vehicle. Hands-free use — via Bluetooth, a dashboard mount, or an earpiece — is permitted. The law is primary enforcement, meaning an officer can stop a driver solely for holding a device. First offense: $100 fine; second offense: $200; third or subsequent: $400. The law applies while the vehicle is in motion, including at red lights.",
    },
    {
      question: "What are the rules for crossing the Delaware Memorial Bridge during high-wind events?",
      answer:
        "The Delaware Memorial Bridge (US 13/US 40) over the Delaware River has wind restriction and closure procedures for high-profile vehicles — including motorcycles, campers, empty trailers, and large trucks — during high-wind events. DelDOT and the Delaware River and Bay Authority issue real-time wind closure alerts. Drivers of high-profile vehicles should check deldot.gov or the Delaware State Police website for bridge status before traveling during storms. The bridge has two spans — the older southern span and newer northern span — with specific lane assignments under normal conditions.",
    },
    {
      question: "What do I need to know about the Cape May-Lewes Ferry for the Delaware knowledge test?",
      answer:
        "The Cape May-Lewes Ferry crosses Delaware Bay between Lewes, DE and Cape May, NJ. For the knowledge test: vehicle operators must turn off their engines and exit their vehicles after parking on the ferry deck. Passengers are not permitted to remain in vehicles during the crossing — all occupants proceed to the passenger areas. Weight limits apply for vehicles on the ferry. Hazardous materials vehicles must be declared and face additional boarding restrictions. When disembarking, wait for crew instructions before returning to your vehicle and starting the engine.",
    },
    {
      question: "How does Delaware's no-sales-tax policy affect driver's license eligibility?",
      answer:
        "Delaware's no-sales-tax environment attracts vehicle buyers from neighboring states, and some buyers also register vehicles in Delaware. However, Delaware driver's license eligibility is based entirely on state residency — not vehicle registration or where you purchased a vehicle. A non-resident who registers a car in Delaware or buys a car in Delaware cannot obtain a Delaware driver's license. Only bona fide Delaware residents — people who live in Delaware as their primary domicile — may apply.",
    },
    {
      question: "What are Delaware's DUI thresholds and enhanced penalty provisions?",
      answer:
        "Delaware uses DUI (Driving Under the Influence). Adult threshold: 0.08% BAC. Under-21 threshold: 0.02% BAC (near zero tolerance). Two enhanced penalty provisions: (1) High-BAC enhancement at 0.16%+ BAC — triggers longer minimum suspension and higher fines; (2) Child-in-vehicle enhancement — DUI with a child under 17 in the vehicle carries enhanced penalties regardless of the driver's BAC level. Delaware DUI penalties also include mandatory alcohol assessment and possible IID as a reinstatement condition.",
    },
    {
      question: "What are Delaware's graduated licensing stages?",
      answer:
        "Delaware GDL: (1) Learner's permit at 16 — must be held until age 16½ or 6 months (whichever comes first), with 50 supervised hours (10 at night), supervised by a driver 25+ or a licensed instructor; (2) Level 1 (Provisional) License — nighttime driving restrictions and passenger limitations; (3) Level 2 (Full) License at age 18 or after 12 months on the provisional license. Violations during the provisional period can extend the restriction period.",
    },
    {
      question: "What is Delaware's school zone camera enforcement?",
      answer:
        "Delaware operates school zone speed enforcement cameras in Wilmington and other areas. When a vehicle is photographed exceeding the posted school zone speed limit, a civil citation is mailed to the registered owner. These are civil violations — not moving violations — so they do not add points to the driver's record or typically affect insurance rates the same way officer-issued tickets do. However, unpaid civil camera citations can result in vehicle registration holds when renewal time comes.",
    },
    {
      question: "What is the supervisor age requirement for Delaware learner's permit holders?",
      answer:
        "Delaware requires the supervising driver for a learner's permit holder to be at least 25 years old (or a licensed driving instructor in the front seat). This is more restrictive than most states, which allow 21-year-old supervisors. The supervisor must be seated in the front passenger seat at all times while the permit holder is driving. Family members who are at least 25 with a valid license can serve as supervisors for the mandatory practice hours.",
    },
    {
      question: "What happens at the Delaware Memorial Bridge during high-wind events for passenger cars?",
      answer:
        "Passenger cars are generally not subject to wind closure restrictions on the Delaware Memorial Bridge at the same wind speeds that trigger closures for high-profile vehicles. High-profile vehicles (motorcycles, campers, large trucks, empty trailers) are more susceptible to being destabilized by crosswinds and are closed first. However, in severe wind events, the bridge may be closed to all traffic. Drivers should always check DelDOT alerts during storm conditions before attempting to cross, regardless of vehicle type.",
    },
  ],
  relatedTests: [
    { label: "Delaware Motorcycle Practice Test", href: "/delaware-motorcycle-practice-test" },
    { label: "Delaware CDL Practice Test", href: "/delaware-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function DelawareDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
