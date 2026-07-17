import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Alaska DMV Practice Test 2025 – Free AK Driver's License Exam Prep",
  description:
    "Free Alaska DMV practice test. Covers DUI law (0.08% adult, absolute sobriety under-21, aggravated at 0.16%), implied consent refusals (90 days / 1 year / 3 years), GDL permit at 14, cell phone ban ($500 fine), studded tire season, moose hazards, seat belt law, and speed limits. Based on Alaska Statutes Title 28.",
  alternates: { canonical: "https://caredmvprep.com/alaska-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/alaska-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Alaska",
  stateAbbr: "AK",
  testLabel: "DMV Practice Test",
  slug: "alaska-dmv-practice-test",
  headline: "Alaska DMV Practice Test 2025",
  intro:
    "The Alaska Division of Motor Vehicles administers a 20-question driver knowledge test — applicants must answer at least 16 questions correctly (80%) to pass. This free practice test is built from verified Alaska Statutes Title 28 and the Alaska Driver Manual, covering DUI and implied consent law, graduated driver licensing (GDL), speed limits, the statewide handheld cell phone ban, seat belt and child restraint requirements, headlight rules, school bus and railroad crossing laws, studded tire season, and Alaska-distinctive hazards including moose on the road, gravel roads, and extreme winter conditions. The test is also available online at ak.knowtodrive.com — a key advantage in a state where many residents live far from a DMV office.",
  basedOn: "Alaska Statutes Title 28 / Alaska Division of Motor Vehicles Driver Manual",
  keyRules: [
    {
      icon: "🍺",
      rule: "DUI — Adult 0.08%; Under-21 Absolute Sobriety; Aggravated at 0.16%",
      detail:
        "AS § 28.35.030 sets 0.08% BAC as the adult per se DUI threshold. Drivers under 21 face absolute sobriety — any detectable amount of alcohol triggers DUI consequences. CDL holders operating commercial vehicles are subject to a 0.04% federal limit. A BAC of 0.16% or more — or a third or subsequent DUI offense — triggers aggravated DUI with significantly enhanced penalties.",
    },
    {
      icon: "🚫",
      rule: "Implied Consent — 90 Days for 1st Refusal; 1 Year for 2nd; 3 Years for 3rd",
      detail:
        "By driving in Alaska, you automatically consent to chemical testing (breath, blood, or urine) when an officer has probable cause to believe you are impaired (AS § 28.35.031–032). A first refusal results in a 90-day administrative license revocation. A second refusal doubles that to 1 year. A third or subsequent refusal results in a 3-year revocation. Refusing does not prevent DUI prosecution — officers may seek a warrant for a blood draw.",
    },
    {
      icon: "📋",
      rule: "GDL Permit at 14 — 6-Month Hold; 40 Supervised Hours; Midnight Curfew",
      detail:
        "AS § 28.15.057 allows Alaskans to obtain an instruction permit at age 14 — one of the youngest in the country. Permit holders must hold the permit for at least 6 months and log 40 supervised driving hours, of which 10 must be at night. A licensed driver at least 21 years old must be seated beside the permit holder at all times. Restricted license holders under 18 face a midnight-to-5-am curfew and non-family passenger restrictions during the first 6 months.",
    },
    {
      icon: "📱",
      rule: "Cell Phone: Handheld Ban for All Drivers — $500 First Offense",
      detail:
        "AS § 28.35.161 prohibits all Alaska drivers from using a handheld cell phone or wireless device while driving. Hands-free use is permitted. The fine for a first offense is $500 — among the higher first-offense cell phone penalties in the country. The only exception is reporting a genuine emergency. This law applies to all drivers regardless of age.",
    },
    {
      icon: "🚗",
      rule: "Speed Limits: 65 mph Interstate / 55 mph Rural / 20 mph Residential",
      detail:
        "Alaska's maximum speed limit on interstate and divided limited-access highways is 65 mph — lower than many states, reflecting Alaska's wildlife crossings, ice hazards, and limited emergency services in remote areas. The default limit on rural state highways is 55 mph. Urban residential areas have a 20 mph default limit. School zones are typically posted at 20 mph when children are present.",
    },
    {
      icon: "💡",
      rule: "Headlights: Required When Visibility ≤1,000 ft; Dim Within 500 ft / 300 ft",
      detail:
        "Headlights are required from 30 minutes after sunset until 30 minutes before sunrise, and whenever visibility is reduced to 1,000 feet or less. High beams must be dimmed to low beam within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle. In Alaska's frequent fog, rain, and snow conditions, headlights are a critical safety requirement.",
    },
    {
      icon: "🪑",
      rule: "Seat Belt: Primary Enforcement — Under-16 Required in All Seats",
      detail:
        "AS § 28.05.095 requires all front-seat occupants to wear a properly fastened seat belt. Alaska enforces this as a primary law — officers may stop a vehicle solely for a seat belt violation. Persons under 16 must be buckled in all seating positions (front and rear). Children under 8 AND under 65 lbs must use an approved child safety seat appropriate to their age, height, and weight.",
    },
    {
      icon: "🦌",
      rule: "Moose on Road — Stop and Wait; Never Try to Pass a Moose",
      detail:
        "Moose are a major traffic hazard unique to Alaska. At 800–1,500 lbs and standing 5–7 feet at the shoulder, a moose-vehicle collision is extremely dangerous at any speed. When a moose is on the roadway, stop at a safe distance and wait for it to move. Never try to drive around, honk aggressively at, or startle a moose — they are unpredictable and may charge.",
    },
  ],
  about: [
    "Alaska's graduated driver licensing (GDL) program begins with one of the youngest permit ages in the nation. Under AS § 28.15.057, applicants as young as 14 may obtain a Class D instruction permit after passing the 20-question written knowledge test (80% required — 16 of 20 correct) and a vision test. The permit holder must hold the permit for at least 6 months, log 40 total supervised driving hours (10 of which must be at night), and drive only when accompanied by a licensed driver at least 21 years old seated beside them. After completing the holding period and supervised hours, the permit holder may take the road skills test to obtain a restricted license. Restricted license holders under 18 face a midnight-to-5-am curfew and restrictions on transporting non-family passengers under 21 unless a licensed adult 21+ is present. These restrictions lift after 6 months without a moving violation, and the driver may obtain an unrestricted license at age 18.",
    "Alaska's DUI law (AS § 28.35.030) creates a multi-tier system with escalating consequences. The adult per se threshold is 0.08% BAC. Alaska's under-21 zero-tolerance rule is among the strictest in the country: any detectable amount of alcohol — absolute sobriety — is required. CDL holders in commercial vehicles face the federal 0.04% standard. A BAC of 0.16% or higher triggers aggravated DUI with enhanced criminal penalties. Alaska's implied consent law (AS § 28.35.032) means that by driving on public roads, you automatically consent to chemical testing. Refusing results in escalating administrative license revocations: 90 days (1st), 1 year (2nd), 3 years (3rd+). An ignition interlock device may be required as a condition of license reinstatement for DUI offenders.",
    "Alaska has several distinctive traffic laws that reflect its unique geography and conditions. The statewide handheld wireless device ban (AS § 28.35.161) carries a $500 first-offense fine — designed for a state where distraction while driving can be especially deadly given moose on roads, icy conditions, and limited emergency response times. Studded tires are permitted from October 1 through April 15 — a distinctively long season compared to most states. The universal motorcycle helmet law (AS § 28.35.240) requires all riders and passengers of any age to wear a DOT-approved helmet. Alaska's residential speed limit defaults to 20 mph — lower than the 25 mph common in most states. Online knowledge testing at ak.knowtodrive.com is particularly important in Alaska, where many residents live hundreds of miles from a DMV office.",
  ],
  sampleQuestions: [
    {
      question: "What is the adult per se DUI BAC threshold in Alaska under AS § 28.35.030?",
      options: ["0.10% or more", "0.05% or more", "0.08% or more", "0.06% or more"],
      correctIndex: 2,
      explanation:
        "AS § 28.35.030 sets 0.08% BAC as the adult per se DUI threshold in Alaska. A driver at or above this level is guilty of DUI regardless of apparent impairment. Aggravated DUI triggers at 0.16% or more, or on a third or subsequent offense.",
    },
    {
      question: "What BAC limit applies to Alaska drivers under 21 years old?",
      options: ["0.04%", "0.02%", "0.08% — same as adults", "Any detectable amount — absolute sobriety required"],
      correctIndex: 3,
      explanation:
        "Alaska's zero-tolerance rule for under-21 drivers requires absolute sobriety — any detectable amount of alcohol triggers DUI consequences. This is more strict than most states. The rule applies to motorcycle riders under 21 as well.",
    },
    {
      question: "How long is a first-offense implied consent refusal license revocation in Alaska?",
      options: ["30 days", "180 days", "90 days", "1 year"],
      correctIndex: 2,
      explanation:
        "Under AS § 28.35.032, a first refusal to submit to chemical testing in Alaska results in a 90-day administrative license revocation. A second refusal doubles to 1 year; a third results in 3 years. Refusing does not prevent DUI prosecution.",
    },
    {
      question: "What is the minimum age to apply for an Alaska instruction permit?",
      options: ["15 years old", "16 years old", "14 years old", "13 years old"],
      correctIndex: 2,
      explanation:
        "AS § 28.15.057 allows Alaskans to apply for a Class D instruction permit at age 14 — one of the youngest in the country. The permit holder must hold it for at least 6 months and complete 40 supervised driving hours (10 at night) before taking the skills test.",
    },
    {
      question: "What cell phone restriction applies to ALL drivers in Alaska?",
      options: [
        "Only texting is banned; handheld calls are permitted",
        "No restriction exists for adult drivers",
        "All handheld wireless device use is banned while driving; hands-free is permitted",
        "The ban applies only to drivers under 18",
      ],
      correctIndex: 2,
      explanation:
        "AS § 28.35.161 bans handheld cell phone and wireless device use for all drivers while driving. Hands-free use is permitted. The first-offense fine is $500. The only exception is reporting a genuine emergency.",
    },
    {
      question: "What is the maximum speed limit on Alaska interstate highways?",
      options: ["55 mph", "70 mph", "75 mph", "65 mph"],
      correctIndex: 3,
      explanation:
        "Alaska's maximum interstate speed limit is 65 mph — lower than many other states. Alaska's wildlife crossings, icy road conditions in winter, and limited emergency services on remote highways make a lower maximum speed appropriate.",
    },
    {
      question: "During which period are studded tires legally permitted in Alaska?",
      options: ["Year-round", "November 1 through March 31", "October 1 through April 15", "December 1 through February 28"],
      correctIndex: 2,
      explanation:
        "Alaska permits studded tires from October 1 through April 15 — a longer season than most states, reflecting Alaska's extended periods of icy road conditions. Outside this window, studded tires are prohibited because they damage road surfaces.",
    },
    {
      question: "Within how many feet of an oncoming vehicle must you dim your high-beam headlights in Alaska?",
      options: ["200 feet", "300 feet", "400 feet", "500 feet"],
      correctIndex: 3,
      explanation:
        "Alaska requires dimming high beams to low beams within 500 feet of an oncoming vehicle. When following another vehicle, dim within 300 feet. High beams directed at oncoming drivers on Alaska's dark, remote roads can cause temporary blindness and serious crash risk.",
    },
    {
      question: "What should a driver do when a school bus displays flashing red lights in Alaska?",
      options: [
        "Slow to 15 mph and proceed past the bus carefully",
        "Stop in all lanes in both directions and remain stopped until lights stop flashing",
        "Stop only if children are visible outside the bus",
        "Stop only if directly behind the bus",
      ],
      correctIndex: 1,
      explanation:
        "AS § 28.35.182 requires all vehicles to stop completely — in all lanes and both directions — when a school bus activates flashing red lights and extends its stop arm. You must remain stopped until the lights stop flashing.",
    },
    {
      question: "Under Alaska law, who must be buckled in all seating positions — front and rear — in a vehicle?",
      options: [
        "All occupants regardless of age",
        "Only the driver",
        "Persons under 16 years old",
        "Persons under 8 years old",
      ],
      correctIndex: 2,
      explanation:
        "AS § 28.05.095 requires all persons under 16 to wear a seat belt in every seating position. Adult front-seat occupants are also required to wear seat belts. Children under 8 AND under 65 lbs must additionally use an approved child safety seat.",
    },
  ],
  faqs: [
    {
      question: "What are Alaska's DUI BAC limits?",
      answer:
        "AS § 28.35.030 sets the adult per se DUI threshold at 0.08% BAC. Drivers under 21 face absolute sobriety — any detectable amount of alcohol. CDL holders in commercial vehicles face the federal 0.04% standard. A BAC of 0.16% or more, or a third or subsequent DUI offense, triggers aggravated DUI with enhanced penalties including longer license revocations and ignition interlock requirements.",
    },
    {
      question: "What are Alaska's implied consent refusal penalties?",
      answer:
        "Alaska's implied consent law (AS § 28.35.031–032) means that by driving on public roads, you consent to chemical testing when an officer has probable cause. A first refusal results in a 90-day administrative license revocation. A second refusal results in a 1-year revocation. A third or subsequent refusal results in a 3-year revocation. Refusing does not prevent DUI prosecution.",
    },
    {
      question: "What are Alaska's GDL permit requirements?",
      answer:
        "Under AS § 28.15.057, Alaskans may obtain an instruction permit at age 14. Permit holders must hold the permit for at least 6 months, log 40 supervised driving hours (10 at night), and drive only with a licensed adult 21+ seated beside them. Restricted license holders under 18 face a midnight-to-5-am curfew and non-family passenger restrictions during the first 6 months.",
    },
    {
      question: "What are Alaska's speed limits?",
      answer:
        "Alaska's interstate maximum is 65 mph. The default on rural state highways is 55 mph. Urban residential areas default to 20 mph (lower than most states). School zones are typically posted at 20 mph when children are present. Many remote Alaska roads have no posted signs — knowledge of default limits is essential.",
    },
    {
      question: "What is Alaska's cell phone driving law?",
      answer:
        "AS § 28.35.161 bans all handheld wireless device use by all drivers while driving. Hands-free use is permitted. The fine for a first offense is $500. The only exception is reporting a genuine emergency. The ban applies to all drivers of all ages.",
    },
    {
      question: "What is Alaska's seat belt and child restraint law?",
      answer:
        "AS § 28.05.095 requires all front-seat occupants to wear seat belts (primary enforcement). All persons under 16 must be buckled in every seating position. Children under 8 AND under 65 lbs must use an approved child safety seat appropriate to their age, height, and weight.",
    },
    {
      question: "When must Alaska drivers use headlights during the day?",
      answer:
        "Headlights are required when visibility is reduced to 1,000 feet or less — from fog, rain, snow, or other conditions. Also required from 30 minutes after sunset until 30 minutes before sunrise. High beams must be dimmed within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle.",
    },
    {
      question: "What is the Alaska driver knowledge test format?",
      answer:
        "The Alaska driver knowledge test consists of 20 multiple-choice questions. Applicants must correctly answer at least 16 questions (80%) to pass. The test is available at Alaska DMV offices and online at ak.knowtodrive.com. It covers traffic laws, road signs, GDL rules, DUI and implied consent, and special Alaska driving conditions.",
    },
    {
      question: "When are studded tires legal in Alaska?",
      answer:
        "Studded tires are permitted from October 1 through April 15. This is one of the longest studded tire seasons in the country, reflecting Alaska's extended icy road periods. Outside this window, studded tires are prohibited because they damage road surfaces. Tire chains may be used whenever conditions warrant.",
    },
    {
      question: "What should Alaska drivers do when a moose is on the road?",
      answer:
        "Slow down and stop at a safe distance. Wait for the moose to move on its own. Never try to drive around, honk aggressively at, or startle a moose — they can weigh over 1,000 lbs and are unpredictable. At windshield height, moose are especially dangerous in collisions. Alaska has the highest moose density of any US state.",
    },
  ],
  relatedTests: [
    { label: "Alaska Motorcycle Practice Test", href: "/alaska-motorcycle-practice-test" },
    { label: "Alaska CDL Practice Test", href: "/alaska-cdl-practice-test" },
    { label: "North Dakota DMV Practice Test", href: "/north-dakota-dmv-practice-test" },
    { label: "Montana DMV Practice Test", href: "/montana-dmv-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function AlaskaDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
