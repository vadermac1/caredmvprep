import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Minnesota DMV Practice Test 2025 – Free MN Driver and Vehicle Services Knowledge Exam Prep",
  description:
    "Free Minnesota DVS practice test based on the 2025 Minnesota Driver's Manual. 40 questions, 80% passing score. Covers MN's wipers-on headlights law, Move It or Lose It rule, DWI tiers, and DVS hands-free law. Pass your MN permit test.",
  alternates: { canonical: "https://caredmvprep.com/minnesota-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/minnesota-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Minnesota",
  stateAbbr: "MN",
  testLabel: "Driver's License Knowledge Test",
  slug: "minnesota-dmv-practice-test",
  headline: "Minnesota DVS Practice Test – Driver and Vehicle Services Knowledge Exam",
  intro:
    "Minnesota driver's licenses are issued by Driver and Vehicle Services (DVS), a division of the Minnesota Department of Public Safety — not a DMV. The DVS administers a 40-question test requiring 80% (32/40) to pass. This free practice test targets the laws most likely to appear on your MN knowledge exam: the wipers-on headlights mandate under Minn. Stat. § 169.48, the 'Move It or Lose It' crash relocation rule under § 169.32, Minnesota's unique four-tier DWI classification system with a 10-year lookback for felony escalation, the hands-free driving law effective August 1, 2019, and the instruction permit age of 15.",
  basedOn: "2025 Minnesota Driver's Manual",
  about: [
    "Minnesota driver's licenses are issued by Driver and Vehicle Services (DVS), a division of the Minnesota Department of Public Safety (DPS) — not a Department of Motor Vehicles. DVS offices are located throughout the state and are sometimes informally called the 'Minnesota DMV,' but the correct agency name is Driver and Vehicle Services. The knowledge test consists of 40 multiple-choice questions covering road signs, traffic laws, and safe driving principles specific to Minnesota. You must answer at least 32 questions correctly — an 80% passing score. The test is based on the current Minnesota Driver's Manual, available at dps.mn.gov/dvs.",
    "Minnesota's DWI classification system is one of the most structured in the nation. The state uses four degrees: 4th-degree DWI (standard misdemeanor, first offense at 0.08%–0.15%), 3rd-degree DWI (gross misdemeanor with aggravating factors such as a BAC of 0.16%+, a child in the vehicle, or a prior DWI within 10 years), 2nd-degree DWI (gross misdemeanor with two or more aggravating factors), and 1st-degree DWI (felony — three or more DWI offenses within 10 years, or a prior felony DWI conviction). The 10-year lookback period for escalating to a felony is specific to Minnesota and is directly tested on the knowledge exam.",
    "Minnesota has two traffic laws that are distinctly state-specific and appear on the knowledge test. First, Minn. Stat. § 169.48 requires headlights to be on whenever windshield wipers are in use due to rain, snow, sleet, or other precipitation — not just in low-visibility conditions, but any time the wipers are running for weather. Second, Minn. Stat. § 169.32 ('Move It or Lose It') requires drivers involved in a crash where no one is injured and the vehicle is operable to move the vehicle out of the travel lane to the shoulder or a nearby safe location before exchanging information. Leaving a drivable vehicle blocking traffic when it is safe to move creates an additional violation.",
  ],
  keyRules: [
    { icon: "💡", rule: "Headlights on whenever wipers are running (§ 169.48)", detail: "Minn. Stat. § 169.48: headlights must be on whenever windshield wipers are in use due to precipitation — rain, snow, sleet, or fog. This applies at any time of day, not just after dark." },
    { icon: "🚗", rule: "Move It or Lose It — crash relocation rule (§ 169.32)", detail: "If a crash involves no injury and the vehicle is operable, move it to the shoulder or nearby parking lot before investigating. Leaving a drivable vehicle blocking the travel lane is an additional violation." },
    { icon: "🍺", rule: "DWI four-tier system / 10-year lookback for felony", detail: "MN uses DWI. Four degrees: 4th (misdemeanor) → 1st (felony at 3+ DWIs in 10 years). Adult BAC: 0.08%. Under 21: any detectable alcohol — effectively zero tolerance." },
    { icon: "📵", rule: "Hands-Free Law — ALL drivers (Minn. Stat. § 169.475)", detail: "Effective August 1, 2019: all drivers prohibited from holding or manually using a wireless device while driving. Even holding the phone in speaker mode is a violation. First offense: $50. Second+: $275." },
    { icon: "👦", rule: "Instruction permit at 15 — 6 months supervised minimum", detail: "MN instruction permit available at age 15 after passing the knowledge test. Permit must be held for at least 6 months with specific supervised driving requirements before taking the road skills test." },
    { icon: "🌙", rule: "Provisional curfew: midnight–5 AM until age 18", detail: "MN provisional license holders cannot drive midnight to 5 AM for 12 months or until the driver turns 18 — whichever comes LATER. This is one of the most extended curfew windows in the U.S." },
    { icon: "🚨", rule: "Move Over — emergency and tow vehicles", detail: "Minnesota Move Over law requires moving one lane away from emergency, highway maintenance, and tow vehicles with activated lights on multi-lane roads. If a lane change is not possible, slow down." },
    { icon: "❄️", rule: "Black ice and winter driving — 511MN road conditions", detail: "Minnesota's handbook specifically addresses black ice (looks like wet pavement), whiteout conditions, and the MnDOT 511MN system for checking road conditions before winter travel on state highways." },
  ],
  sampleQuestions: [
    {
      question: "Minnesota's headlights-when-wipers law (Minn. Stat. § 169.48) requires headlights to be on whenever:",
      options: [
        "Only when visibility drops below 500 feet due to fog",
        "Only between 30 minutes after sunset and 30 minutes before sunrise",
        "Whenever windshield wipers are in use due to rain, snow, sleet, or other precipitation — at any time of day",
        "Only in officially declared hazardous weather events posted by MnDOT",
      ],
      correctIndex: 2,
      explanation:
        "Minnesota Statute § 169.48 requires headlights to be on whenever windshield wipers are actively operating due to precipitation — rain, snow, sleet, or fog. This applies at any time of day, not just at night or when visibility is severely reduced. The law makes Minnesota's headlight requirement broader than many states' 'low visibility' standards. Parking lights or daytime running lights alone do not satisfy the requirement — the full headlight system must be on.",
    },
    {
      question: "Under Minnesota's 'Move It or Lose It' rule (Minn. Stat. § 169.32), after a crash where no one is injured and vehicles are drivable, drivers must:",
      options: [
        "Remain at the exact crash location and wait for police regardless of traffic impact",
        "Move vehicles out of the travel lanes to the shoulder or a safe location before exchanging information",
        "Only move if another driver requests it — staying at the crash site is the default rule",
        "Call 911 before moving any vehicle, even if injuries are absent",
      ],
      correctIndex: 1,
      explanation:
        "Minnesota's 'Move It or Lose It' law (§ 169.32) requires drivers in minor crashes — no serious injuries, vehicles are operable — to move their vehicles out of the main travel lanes to the shoulder, a parking lot, or another nearby safe area before exchanging information and investigating the crash. Leaving a drivable vehicle blocking traffic when it can safely be moved creates a separate traffic violation. After moving, drivers exchange information and can contact police if needed.",
    },
    {
      question: "Minnesota's 1st-degree DWI charge (felony) applies when a driver has how many prior DWI offenses within the lookback period?",
      options: [
        "Two or more prior DWIs within 5 years",
        "Three or more DWI offenses within 10 years, or a prior felony DWI conviction",
        "Any second DWI conviction regardless of timing",
        "Four or more DWIs within 15 years",
      ],
      correctIndex: 1,
      explanation:
        "Minnesota's 1st-degree DWI is a felony that applies when a driver has three or more DWI offenses within 10 years, OR has a prior felony DWI conviction at any time. The 10-year lookback period is specific to Minnesota's DWI escalation structure. Lower degrees: 4th-degree (first-offense misdemeanor at 0.08%+), 3rd-degree (gross misdemeanor with aggravating factors such as BAC 0.16%+ or prior DWI within 10 years), 2nd-degree (gross misdemeanor with two aggravating factors).",
    },
    {
      question: "Minnesota's hands-free law (Minn. Stat. § 169.475, effective August 1, 2019) prohibits a driver from:",
      options: [
        "Only texting while driving — calls via speakerphone held in hand are permitted",
        "Holding or manually using a wireless device while driving, including holding the phone in speaker mode with one hand",
        "Using navigation apps — voice calls and music are exempt from the law",
        "Only drivers under 21 from holding any wireless device",
      ],
      correctIndex: 1,
      explanation:
        "Minnesota Statute § 169.475 prohibits ALL drivers from holding or manually using a wireless device while driving — for calls, texts, navigation, or any app. Notably, the law explicitly bans even ONE-HAND phone holding: holding the phone in speaker mode in one hand while driving is a violation. Hands-free Bluetooth, one earbud (one ear only), and dashboard-mounted devices are permitted. First offense: $50 fine. Second offense or more: $275 fine.",
    },
    {
      question: "Minnesota's zero-tolerance DWI standard for drivers under 21 prohibits driving with what level of alcohol?",
      options: [
        "0.08% — the same standard as adult drivers",
        "0.04% — half the adult standard",
        "0.02% — the measurable legal threshold, with any detectable alcohol triggering a potential violation",
        "Any detectable alcohol at all — the 0.02% threshold is just the point of measurability",
      ],
      correctIndex: 3,
      explanation:
        "Minnesota's underage DWI law effectively applies a 'Not a Drop' standard: any consumption of alcohol by a driver under 21 can result in a violation. The 0.02% figure is the measurable legal threshold — the point at which a breathalyzer can reliably detect alcohol — but Minnesota's intent is zero tolerance for any alcohol consumption by underage drivers. A driver under 21 who consumed alcohol even hours before driving may test at 0.02%+ and face DWI charges.",
    },
    {
      question: "At what age can a Minnesota resident apply for an instruction permit?",
      options: ["14 years old", "15 years old", "15 years, 6 months", "16 years old"],
      correctIndex: 1,
      explanation:
        "Minnesota residents may apply for an instruction permit at age 15 after passing the DVS knowledge test and vision screening. The permit requires a minimum 6-month holding period and specific supervised driving requirements — including at least 30 hours of behind-the-wheel instruction with a licensed adult — before the applicant can take the road skills test for a provisional license. Minnesota DVS, not a DMV, issues the permit.",
    },
    {
      question: "What does Minnesota's MnDOT 511MN system provide for drivers?",
      options: [
        "Automatic vehicle registration renewal reminders",
        "Real-time road condition information and winter travel advisories for Minnesota state highways",
        "License suspension notifications sent via text message",
        "A speed limit database for all roads in the state",
      ],
      correctIndex: 1,
      explanation:
        "MnDOT's 511MN system provides real-time road condition reports, closures, and winter travel advisories for Minnesota's state highway system. The Minnesota Driver's Manual specifically references 511MN as a resource drivers should check before winter travel on state highways. Information is available by phone (dial 511) or at 511mn.org. This is one of the few state-specific resources directly referenced in the Minnesota knowledge test content.",
    },
    {
      question: "Minnesota's provisional license restricts nighttime driving between what hours, and for how long?",
      options: [
        "10 PM to 5 AM for the first 6 months only",
        "11 PM to 5 AM until the driver turns 17",
        "Midnight to 5 AM for 12 months or until the driver turns 18 — whichever comes LATER",
        "1 AM to 6 AM for 12 months after getting the provisional license",
      ],
      correctIndex: 2,
      explanation:
        "Minnesota provisional license holders may not drive between midnight and 5 AM for 12 months or until they turn 18 — whichever comes LATER. This means a driver who gets a provisional license at 16 years and 11 months still faces the curfew until turning 18, even if 12 months pass before then. Exceptions exist for employment, school, or religious activities with documentation. Minnesota's 'whichever comes later' rule is one of the more extended curfew standards in the country.",
    },
    {
      question: "Minnesota's provisional license limits non-family passengers under 20 to:",
      options: [
        "No passenger limit — passengers under 20 are unrestricted",
        "A maximum of 1 non-family passenger under 20 for the first 12 months",
        "No non-family passengers under 20 for the first 6 months, then up to 2",
        "A maximum of 3 non-family passengers under 20 at any time during the provisional period",
      ],
      correctIndex: 1,
      explanation:
        "Minnesota provisional license holders may carry no more than 1 non-family passenger under age 20 during the first 12 months of the provisional period. Immediate family members are excluded from this limit. The passenger restriction is designed to reduce the distraction risk for new drivers — research consistently shows that teen driver crash risk increases significantly with each additional young passenger in the vehicle.",
    },
    {
      question: "Minnesota children under 8 must use what type of restraint when riding in a vehicle?",
      options: [
        "An adult seat belt is sufficient for any child who weighs more than 40 pounds",
        "A child restraint system (car seat or booster seat) — not just a standard seat belt",
        "A seat belt with a shoulder strap only — no child seat required after age 4",
        "No restraint is required for children under 8 in rear seats on surface roads",
      ],
      correctIndex: 1,
      explanation:
        "Minnesota law requires children under age 8 to use a child restraint system — a car seat or booster seat appropriate for their size and age — not just a standard adult seat belt. Minnesota's front-seat seat belt law applies primary enforcement to all front-seat occupants. Children who have outgrown all appropriate child restraints but are still under age 8 must use a belt-positioning booster seat. The child restraint requirement is separate from the general adult seat belt law.",
    },
  ],
  faqs: [
    {
      question: "Does Minnesota have a DMV, and where do I go for my driver's license?",
      answer:
        "Minnesota does not have a Department of Motor Vehicles. Driver's licenses, instruction permits, and vehicle registrations are handled by Driver and Vehicle Services (DVS), a division of the Minnesota Department of Public Safety. DVS offices are located throughout the state. Visit dps.mn.gov/dvs for office locations, hours, and online services. Searching for 'Minnesota DMV' will lead you to DVS — the two terms refer to the same function.",
    },
    {
      question: "Why does Minnesota's headlight law include a wipers-on requirement?",
      answer:
        "Minnesota Statute § 169.48 specifically ties headlight use to wiper operation because precipitation — rain, snow, or sleet — reduces the visibility of your vehicle to other drivers even during daylight hours. Studies show that headlights significantly increase vehicle conspicuity in wet conditions. The law is broader than most states' 'reduced visibility' standards: it does not require visibility to actually be reduced — the wipers just need to be running for weather.",
    },
    {
      question: "What is Minnesota's 'Move It or Lose It' law?",
      answer:
        "Minn. Stat. § 169.32 requires drivers in minor crashes — no serious injuries, vehicle is operable — to move vehicles off the travel lane to the shoulder or a nearby safe area before investigating the crash. Blocking traffic with a drivable vehicle when it is safe to move is a separate violation. After moving, exchange information with the other driver, document the scene, and contact police if needed. If there is any injury or doubt about vehicle safety, leave the vehicle in place and call 911.",
    },
    {
      question: "What are Minnesota's DWI degrees and when does it become a felony?",
      answer:
        "Minnesota uses four DWI degrees: 4th-degree (misdemeanor, first offense at 0.08%–0.15%), 3rd-degree (gross misdemeanor with one aggravating factor: BAC 0.16%+, a child in the vehicle, or prior DWI within 10 years), 2nd-degree (gross misdemeanor with two aggravating factors), 1st-degree (felony with three or more DWIs in 10 years, or a prior felony DWI). The 10-year lookback for felony escalation is specific to Minnesota. Adult BAC threshold: 0.08%. Under 21: any detectable alcohol.",
    },
    {
      question: "What does Minnesota's hands-free driving law prohibit exactly?",
      answer:
        "Minn. Stat. § 169.475 (effective August 1, 2019) prohibits ALL drivers from holding or manually using any wireless device while driving — calls, texts, GPS, social media, or any app. Minnesota specifically bans holding the phone in speaker mode with one hand — even without raising it to your ear. One earbud (one ear only) is permitted. Hands-free Bluetooth or a dashboard-mounted device is permitted. First offense: $50. Second offense within 10 years: $275.",
    },
    {
      question: "What are the Minnesota GDL stages for teen drivers?",
      answer:
        "Minnesota GDL: (1) Instruction permit at 15 — 6-month minimum hold, supervised driving requirements including 30 hours of instruction; (2) Provisional license at 16 — midnight to 5 AM curfew (for 12 months or until 18, whichever is later), max 1 non-family passenger under 20 for 12 months; (3) Full license after all restrictions expire. All stages require a clean driving record to advance.",
    },
    {
      question: "What is black ice and why does Minnesota's test cover it?",
      answer:
        "Black ice is a thin, nearly transparent layer of ice on road surfaces that appears to be simply wet pavement. It forms when light rain or mist falls on surfaces at or below freezing, or when road surface temperatures drop below air temperature. Minnesota's handbook addresses black ice because it is common on the state's roads in fall, winter, and early spring — and because drivers who don't recognize it fail to increase following distance or reduce speed. The 511MN system reports road conditions including black ice on state highways.",
    },
    {
      question: "What documents do I need at a Minnesota DVS office?",
      answer:
        "Minnesota REAL ID applicants need: proof of identity (birth certificate or U.S. passport), proof of Social Security number (SS card, W-2, or tax return), and two proofs of Minnesota residency (utility bills, bank statements, or lease agreements within 12 months). Standard (non-REAL ID) licenses have slightly different document requirements. Visit dps.mn.gov/dvs for the full checklist and to schedule an appointment.",
    },
    {
      question: "What winter driving practices does Minnesota's knowledge test cover?",
      answer:
        "Minnesota tests winter driving knowledge including: black ice awareness (invisible, looks like wet pavement — increase following distance), clearing all snow and ice from your vehicle before driving (flying snow/ice is a hazard and can result in a citation), headlights on whenever wipers are running, reducing speed on snow and ice regardless of posted limits, and never using cruise control on slippery roads. MnDOT's 511MN system is referenced as a resource for checking road conditions.",
    },
    {
      question: "How long is a Minnesota instruction permit valid?",
      answer:
        "A Minnesota instruction permit is valid for 2 years from the date of issue. Most teen applicants complete the 6-month holding period and advance to a provisional license well within the 2-year validity. If the permit expires, the applicant must reapply and pass the knowledge test again. The 6-month minimum holding period is mandatory regardless of how quickly supervised driving requirements are completed.",
    },
    {
      question: "What are the Minnesota seat belt requirements for adults and children?",
      answer:
        "Minnesota requires all front-seat occupants to wear a seat belt — primary enforcement law. Children under age 8 must use a child restraint system (car seat or booster seat) appropriate for their size, not just a standard seat belt. Children 8 and older who have outgrown child restraints must use a seat belt. All passengers under 11 must be restrained in back seats when the back seat is available. Violations carry fines and points on the driver's record.",
    },
  ],
  relatedTests: [
    { label: "MN Motorcycle Test", href: "/minnesota-motorcycle-practice-test" },
    { label: "MN CDL Test", href: "/minnesota-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function MinnesotaDMVPage() {
  return <PracticeTestPage {...data} />;
}
