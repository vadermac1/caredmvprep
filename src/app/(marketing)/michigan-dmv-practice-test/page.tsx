import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Michigan DMV Practice Test 2025 – Free MI Secretary of State Knowledge Exam Prep",
  description:
    "Free Michigan DMV practice test based on the 2025 Michigan Driver's Manual. 50 questions, 80% passing score. Prepare for your MI Secretary of State (SOS) knowledge exam and pass on the first try.",
  alternates: { canonical: "https://caredmvprep.com/michigan-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/michigan-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Michigan",
  stateAbbr: "MI",
  testLabel: "Driver's License Knowledge Test",
  slug: "michigan-dmv-practice-test",
  headline: "Michigan DMV Practice Test — OWI vs. OWVI, Michigan Left Turns, and the 50-Question SOS Exam",
  intro:
    "Michigan's knowledge test is 50 questions — one of the longest in the country — and the content is specifically Michigan: OWI and OWVI instead of DUI, a 'Super Drunk' High BAC charge at 0.17%+, permits available at 14 years and 9 months with Segment 1 driver's education, and the Michigan Left intersection design that's unique to state highways here. This practice test focuses on those Michigan-specific laws and concepts that general driving knowledge won't prepare you for.",
  basedOn: "2025 Michigan Driver's Manual",
  about: [
    "Michigan driver's licenses are issued by the Michigan Secretary of State (SOS) — not a Department of Motor Vehicles. Like Illinois, Michigan's SOS is a statewide elected official. SOS branch offices throughout the state administer the 50-question knowledge test, which requires 40 correct answers (80%) to pass. At 50 questions, Michigan's test is among the longest knowledge exams nationally — most states use 20 to 25 questions. The test covers road signs, Michigan traffic laws, and safe driving principles from the Michigan Driver's Manual. Michigan uses OWI (Operating While Intoxicated) for its standard per-se impairment offense at 0.08% BAC, and OWVI (Operating While Visibly Impaired) as a lesser charge when a driver appears impaired but may be below 0.08%. Michigan also has a 'High BAC' or 'Super Drunk' OWI charge under MCL 257.625(1)(c) when BAC reaches 0.17% or higher — a specific threshold with enhanced penalties including a mandatory minimum 45 days in jail or 360 hours of community service and a mandatory 1-year license suspension.",
    "Michigan's Graduated Driver Licensing program begins earlier than most states. With completion of an approved Segment 1 driver's education course (24 hours of classroom instruction), a Michigan resident can receive a Level 1 instruction permit at 14 years and 9 months old — one of the youngest permit ages in the country. Without Segment 1, the minimum age is 16. The Level 1 permit requires 12 months of supervised driving with at least 50 hours logged (10 at night) under a licensed adult 21 or older. Segment 2 training (additional formal instruction after at least 3 months with the Level 1 permit) is required before advancing to a Level 2 restricted license. The Level 2 restricted license restricts nighttime driving to midnight through 5 AM for the first 12 months and limits passenger transportation to no more than 1 person under 21 who is not a family member. Michigan's formal two-segment driver education structure is more detailed than most states' GDL programs.",
    "Michigan's roads have a distinctive feature found almost nowhere else in the U.S.: the Michigan Left intersection. On many divided state highways — particularly in Metro Detroit, Grand Rapids, and Flint — drivers who want to turn left must instead turn right and then make a U-turn at a designated crossover opening in the median. This eliminates left-turn movements at the main intersection, reducing conflict points and improving traffic flow. Michigan Left intersections are specifically described in the Michigan Driver's Manual and appear on the knowledge test. Michigan enacted its Distracted Driving Law (HB 4250, effective June 30, 2023) prohibiting all handheld device use while driving for every driver — Michigan was a relatively late adopter compared to states like Illinois (2014) or Georgia (2018). First offense: $100 fine; repeat offense: $250. Michigan's Move Over law (MCL 257.653a) was also expanded to include any vehicle displaying hazard lights or road flares — similar to NC's James' Law — with fines up to $400.",
  ],
  keyRules: [
    { icon: "⚖️", rule: "OWI + OWVI: two-tier impaired driving system", detail: "Michigan uses OWI (Operating While Intoxicated, BAC ≥ 0.08%) and the lesser OWVI (Operating While Visibly Impaired — any BAC where impairment is observable). OWVI can be charged even below 0.08% based on officer observations alone. Both terms appear on the MI knowledge test." },
    { icon: "🍺", rule: "Super Drunk: 0.17%+ BAC triggers enhanced OWI", detail: "MCL 257.625(1)(c): BAC of 0.17% or higher creates a 'High BAC' OWI with mandatory minimum 45 days in jail or 360 hours community service and a 1-year license suspension. The specific 0.17% threshold is tested. Under-21 limit is 0.02%." },
    { icon: "👦", rule: "Level 1 permit at 14 yrs 9 months with Segment 1", detail: "Michigan's permit age with approved Segment 1 driver education is 14 years and 9 months — one of the youngest in the country. Without Segment 1, minimum age is 16. Level 1 requires 12 months + 50 hours supervised (10 at night)." },
    { icon: "↩️", rule: "Michigan Left: turn right then U-turn at crossover", detail: "On many Michigan divided state highways, left turns are replaced by Michigan Left intersections — turn right, then make a U-turn at a designated median opening. Covered in the Michigan Driver's Manual and specifically tested on the knowledge exam." },
    { icon: "📵", rule: "Handheld ban for ALL drivers (June 30, 2023)", detail: "HB 4250: All Michigan drivers prohibited from holding any wireless device while driving. First offense: $100. Repeat: $250. Enacted in 2023 — later than many states. Hands-free Bluetooth and mounted devices are permitted." },
    { icon: "🚨", rule: "Move Over: includes hazard-light and flare vehicles", detail: "MCL 257.653a: Michigan's Move Over law covers emergency, maintenance, tow trucks — and any vehicle displaying hazard lights or road flares. Fines up to $400. Move one lane or slow below posted limit if lane change is unsafe." },
    { icon: "🌙", rule: "Level 2 curfew: midnight–5 AM; 1 non-family passenger", detail: "Michigan Level 2 restricted license holders may not drive midnight to 5 AM for 12 months. Also limited to no more than 1 passenger under 21 who is not a family member. Violations extend the restricted period by 6 months." },
    { icon: "📚", rule: "Segment 1 + Segment 2 required for teen GDL", detail: "Michigan's two-segment driver education structure: Segment 1 (24 hrs classroom + 6 hrs behind-the-wheel) before Level 1 permit; Segment 2 (additional training after 3 months with permit) required before Level 2 license. Both segments are mandatory." },
  ],
  sampleQuestions: [
    {
      question: "A Michigan driver is observed by a police officer driving erratically and slurring their words. Their BAC tests at 0.06%. What charge can Michigan prosecutors bring?",
      options: [
        "No charge — 0.06% is below the 0.08% OWI threshold",
        "OWI (Operating While Intoxicated) — the 0.08% threshold is a guideline, not a limit",
        "OWVI (Operating While Visibly Impaired) — charged based on observable impairment regardless of BAC",
        "Only a civil infraction for erratic driving",
      ],
      correctIndex: 2,
      explanation:
        "Michigan's OWVI (Operating While Visibly Impaired) charge can be brought at any BAC level — or even without a BAC reading — when the officer observes visible impairment. Slurred speech, erratic driving, and poor coordination are sufficient evidence. OWVI is a lesser offense than OWI (which requires BAC ≥ 0.08% or other per se evidence), but it still carries penalties including fines, points, and license restrictions. Michigan's two-tier system — OWI plus OWVI — is found in only a few states.",
    },
    {
      question: "Michigan's 'Super Drunk' or 'High BAC' OWI charge under MCL 257.625(1)(c) applies when a driver's BAC is:",
      options: [
        "0.10% or higher",
        "0.15% or higher",
        "0.17% or higher",
        "0.20% or higher",
      ],
      correctIndex: 2,
      explanation:
        "Michigan's High BAC OWI — often called 'Super Drunk' — applies when a driver's BAC is 0.17% or higher. The specific 0.17% threshold is unique to Michigan. Penalties are substantially enhanced: mandatory minimum 45 days in jail (or 360 hours of community service), 1-year license suspension with no restricted license for the first 45 days, mandatory alcohol treatment, and possible vehicle immobilization. This threshold is specifically tested on Michigan's knowledge exam because the 0.17% trigger is a Michigan-specific statutory number.",
    },
    {
      question: "What is the earliest age at which a Michigan resident can receive a Level 1 instruction permit?",
      options: [
        "15 years old",
        "15 years, 6 months",
        "14 years, 9 months",
        "16 years old",
      ],
      correctIndex: 2,
      explanation:
        "With completion of an approved Segment 1 driver's education course (24 hours classroom + 6 hours behind-the-wheel), Michigan residents can obtain a Level 1 instruction permit at 14 years and 9 months — one of the youngest permit ages in the United States. Without the Segment 1 course, applicants must wait until age 16 for a license. The early permit age is specifically tied to completing formal driver education, not simply reaching a birthday milestone.",
    },
    {
      question: "What is a Michigan Left intersection, and where are they most commonly found?",
      options: [
        "An intersection where left turns are made from the center turn lane using traffic signal priority",
        "An intersection where drivers turn right and then make a U-turn at a designated median crossover, instead of turning left directly",
        "A T-intersection where the road bends to the left",
        "A protected left-turn intersection used only in Detroit city limits",
      ],
      correctIndex: 1,
      explanation:
        "A Michigan Left intersection eliminates direct left-turn movements at major intersections on divided state highways. Instead of turning left at the main intersection, drivers turn right and then travel to a designated median crossover where they can make a U-turn to head in the direction they wanted. Michigan Left intersections are common on state trunklines in Metro Detroit, Flint, Lansing, and Grand Rapids. They reduce crash-causing left-turn conflicts. The Michigan Driver's Manual covers Michigan Left intersections specifically because they are unique to Michigan's highway system.",
    },
    {
      question: "Michigan's Distracted Driving Law (HB 4250, effective June 30, 2023) applies to:",
      options: [
        "Only drivers under age 18",
        "Drivers in school zones and construction zones only",
        "All Michigan drivers — holding any wireless device for any purpose while driving is prohibited",
        "Only texting — handheld calls via speakerphone are allowed if the phone is not near the ear",
      ],
      correctIndex: 2,
      explanation:
        "Michigan's Distracted Driving Law (HB 4250), effective June 30, 2023, prohibits ALL Michigan drivers from holding a wireless communication device while driving for any purpose — calls, texts, navigation, or any app. Bluetooth, voice commands, and dashboard-mounted devices are permitted. First offense: $100 fine. Repeat offenses: $250 fine. Commercial vehicle drivers also face federal FMCSA penalties. Michigan's 2023 effective date makes it a relatively late adopter compared to states like Illinois (2014) and Georgia (2018).",
    },
    {
      question: "Michigan's Level 2 restricted license nighttime curfew prohibits driving between:",
      options: [
        "10 PM and 5 AM",
        "11 PM and 5 AM",
        "Midnight and 5 AM",
        "Midnight and 6 AM",
      ],
      correctIndex: 2,
      explanation:
        "Michigan Level 2 (restricted) license holders may not drive between midnight and 5 AM for 12 months after receiving the Level 2 license, unless accompanied by a licensed parent, guardian, or driver's education instructor. This curfew applies until the driver turns 18 or completes 12 months on Level 2, whichever comes first. Michigan's midnight-to-5 AM curfew window is distinct from states like Virginia (midnight to 4 AM) and Georgia (midnight to 6 AM). Violations can extend the restricted period by 6 months.",
    },
    {
      question: "Michigan's Move Over law (MCL 257.653a) was expanded to require moving over or slowing down not only for emergency vehicles but also for:",
      options: [
        "Vehicles with headlights on during daytime hours",
        "Any vehicle displaying activated hazard lights or road flares on the roadway",
        "Commercial trucks with flashers on while making deliveries",
        "Vehicles with amber lights — law enforcement only",
      ],
      correctIndex: 1,
      explanation:
        "Michigan's expanded Move Over law (MCL 257.653a) requires drivers to move over one lane — or reduce speed below the posted limit if a lane change is unsafe — when passing any vehicle displaying hazard lights or road flares, not just traditional emergency, maintenance, or tow trucks. A broken-down car on the shoulder with hazards blinking triggers the same Move Over obligation as a police cruiser. Fines for violations reach up to $400. This broad coverage is similar to North Carolina's James' Law.",
    },
    {
      question: "Before advancing to a Michigan Level 2 restricted license, what Segment 2 training is required?",
      options: [
        "No additional training is required — only 12 months with the Level 1 permit",
        "An additional 6 hours behind-the-wheel training after at least 3 months with the Level 1 permit",
        "A separate 40-hour classroom course focused on Michigan traffic laws",
        "A road test at the SOS office — no additional training is required",
      ],
      correctIndex: 1,
      explanation:
        "Michigan's GDL requires both Segment 1 (24 hours classroom + 6 hours behind-the-wheel, completed before the Level 1 permit) and Segment 2 (additional formal driver training taken after at least 3 months with the Level 1 permit) before the teen can advance to a Level 2 restricted license. Segment 2 content covers higher-risk driving scenarios and must be completed through an SOS-approved provider. Both segments are mandatory — completing only Segment 1 is not sufficient to advance to Level 2.",
    },
    {
      question: "Michigan's BAC limit for drivers under 21 is 0.02%. How does this differ from Illinois's underage alcohol policy?",
      options: [
        "It doesn't differ — both states use 0.02% as the underage threshold",
        "Illinois uses 0.02% while Michigan uses 0.00% (true zero tolerance)",
        "Michigan uses 0.02% while Illinois prohibits any detectable trace of alcohol for under-21 drivers",
        "Michigan uses 0.04% while Illinois uses 0.02%",
      ],
      correctIndex: 2,
      explanation:
        "Michigan's under-21 BAC threshold is 0.02% — any measurable consumption triggers a violation, but the 0.02% threshold acknowledges minor measurement error. Illinois, by contrast, enforces true zero tolerance: any detectable trace of alcohol for a driver under 21 is a violation, with no 0.02% buffer. Both are strict, but Illinois's standard is technically stricter. Michigan's 0.02% limit is the same as Virginia's underage limit. This distinction between states appears on comparative law questions on Michigan's 50-question exam.",
    },
    {
      question: "The Michigan SOS knowledge test has 50 questions requiring 40 correct to pass. Why does Michigan use a longer test than most states?",
      options: [
        "Michigan law requires a minimum 50-question test under a 1993 statute",
        "Michigan's test covers three separate categories — road signs, traffic law, and highway driving — each with minimum passing requirements",
        "Michigan's 50-question format covers road signs, traffic laws, and safe driving principles more comprehensively than the 20-25 question tests used by most states",
        "Michigan adds extra questions about OWI because alcohol-related crashes are above the national average",
      ],
      correctIndex: 2,
      explanation:
        "Michigan's 50-question knowledge test is one of the longest in the United States — most states use 20 to 25 questions. Michigan's test comprehensively covers road signs, Michigan-specific traffic laws (including OWI, OWVI, Michigan Left intersections, Scott's Law equivalent, and GDL rules), and general safe driving principles. The longer format allows Michigan to test a broader range of topics that shorter exams must omit. You need 40 of 50 correct (80%) to pass. Michigan's Driver's Manual is the primary study resource.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between OWI and OWVI in Michigan, and why does Michigan use these terms instead of DUI?",
      answer:
        "Michigan uses OWI (Operating While Intoxicated) as its standard per se drunk driving charge when BAC is 0.08% or higher. OWVI (Operating While Visibly Impaired) is a lesser charge that applies when a driver's ability is observably impaired by alcohol, drugs, or a combination — even if BAC is below 0.08% or no BAC test was taken. A driver can be convicted of OWVI based entirely on officer observations and field sobriety test results. Michigan also has a 'High BAC' OWI at 0.17%+ with enhanced mandatory penalties. Most states use DUI or DWI; Michigan's OWI/OWVI terminology is specific to its statutes.",
    },
    {
      question: "What is Michigan's Super Drunk law and what are the mandatory penalties?",
      answer:
        "Michigan's High BAC OWI — known informally as 'Super Drunk' — applies under MCL 257.625(1)(c) when a driver's BAC is 0.17% or higher. This specific threshold is Michigan's statutory line for enhanced penalties: mandatory minimum 45 days in jail (or 360 hours of community service as an alternative), a 1-year license suspension with no restricted driving permitted for the first 45 days, mandatory vehicle immobilization or ignition interlock for 90 days to 1 year, and required alcohol treatment assessment. These penalties are significantly harsher than a standard first-offense OWI and are triggered by the 0.17% BAC threshold specifically.",
    },
    {
      question: "What is the youngest age at which a Michigan teen can get a driver's license permit?",
      answer:
        "With completion of an approved Segment 1 driver's education course — 24 hours of classroom instruction and 6 hours of behind-the-wheel training — a Michigan resident can obtain a Level 1 instruction permit at 14 years and 9 months old. Without the Segment 1 course, applicants must wait until age 16. The 14 years and 9 months permit age is one of the youngest in the United States and is specifically tied to completing formal driver education.",
    },
    {
      question: "What is a Michigan Left turn and will it appear on the knowledge test?",
      answer:
        "A Michigan Left is an intersection design used extensively on Michigan's divided state highways where direct left-turn movements are eliminated. Instead of turning left at the main intersection, drivers turn right and then proceed to a designated median crossover where they execute a U-turn to travel in their intended direction. Michigan Left intersections are common throughout Metro Detroit, Flint, Lansing, and Grand Rapids. The Michigan Driver's Manual describes this design explicitly, and questions about Michigan Left intersections appear on the knowledge test because the design is unique to Michigan and unfamiliar to most out-of-state drivers.",
    },
    {
      question: "Does Michigan have a DMV? Where do Michigan drivers go for their licenses?",
      answer:
        "Michigan does not have a Department of Motor Vehicles. All driver licensing, vehicle registrations, and related services are administered by the Michigan Secretary of State (SOS), which operates branch offices throughout the state. You can schedule an appointment online at michigan.gov/sos — scheduling is strongly recommended because walk-in wait times can be long, particularly at suburban Detroit, Grand Rapids, and Lansing-area branches. The SOS also handles title transfers and boat registrations.",
    },
    {
      question: "What is required before a Michigan teen can advance from Level 1 permit to Level 2 restricted license?",
      answer:
        "To advance from Level 1 (instruction permit) to Level 2 (restricted license), a Michigan teen must: (1) hold the Level 1 permit for a minimum of 12 months; (2) log at least 50 hours of supervised driving — 10 at night — with a licensed adult 21 or older; (3) complete Segment 2 driver education training (taken after at least 3 months with the Level 1 permit); and (4) pass a road skills test at an SOS branch or approved third-party testing location. Both Segment 1 and Segment 2 are mandatory parts of Michigan's GDL program.",
    },
    {
      question: "When did Michigan enact its hands-free driving law and what does it cover?",
      answer:
        "Michigan enacted its Distracted Driving Law (HB 4250) effective June 30, 2023 — making Michigan a relatively late adopter compared to states like Illinois (2014) and Georgia (2018). The law prohibits all Michigan drivers from holding any wireless communication device while driving for any purpose: calls, texts, navigation, video, or any app use. Hands-free via Bluetooth, voice commands, or a device mounted to the dashboard are permitted. First offense: $100 fine. Repeat offenses: $250 fine. Commercial drivers also face federal FMCSA penalties for violations.",
    },
    {
      question: "What are the passenger and nighttime restrictions on a Michigan Level 2 restricted license?",
      answer:
        "Michigan Level 2 restricted license holders face two restrictions for 12 months (or until age 18, whichever comes first): (1) no driving between midnight and 5 AM without a licensed parent, guardian, or driver's education instructor in the vehicle; (2) no more than 1 passenger under age 21 who is not a family member. Violating either restriction can result in a 6-month extension of the Level 2 restricted period — meaning the teen must wait longer before becoming eligible for a Level 3 (unrestricted) license.",
    },
    {
      question: "Can I take the Michigan knowledge test in a language other than English?",
      answer:
        "Yes. The Michigan SOS knowledge test is available in multiple languages including Spanish, Arabic, Chinese, and several others. Ask your local SOS branch office for the available language options when scheduling. The Michigan Driver's Manual is also available in multiple languages for download at michigan.gov/sos. Michigan's multilingual testing option reflects the significant foreign-language speaking populations in Metro Detroit and other Michigan urban areas.",
    },
    {
      question: "What expanded Michigan's Move Over law to cover non-emergency vehicles?",
      answer:
        "Michigan's Move Over law (MCL 257.653a) was expanded to require drivers to move over or reduce speed not only for traditional emergency vehicles (police, fire, EMS) but also for any vehicle displaying activated hazard lights or road flares on the roadway — including broken-down private vehicles and any other vehicle indicating a hazard. This broad coverage means a driver with hazards on at the side of a highway triggers the same legal obligation as a police cruiser. Fines for violations reach up to $400. The expansion is similar in scope to North Carolina's James' Law.",
    },
  ],
  relatedTests: [
    { label: "MI Motorcycle Test", href: "/michigan-motorcycle-practice-test" },
    { label: "MI CDL Test", href: "/michigan-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function MichiganDMVPage() {
  return <PracticeTestPage {...data} />;
}
