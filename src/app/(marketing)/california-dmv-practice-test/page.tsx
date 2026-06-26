import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps, type SplitTest } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "California DMV Permit Practice Test 2025 – Free CA Driver's License Prep",
  description:
    "Free California DMV practice test based on the official CA Driver Handbook. 46 questions, detailed explanations, and instant feedback. Pass your permit test the first time.",
  alternates: { canonical: "https://caredmvprep.com/california-dmv-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/california-dmv-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "California",
  stateAbbr: "CA",
  testLabel: "Permit Practice Test",
  slug: "california-dmv-practice-test",
  headline: "California DMV Permit Practice Test",
  intro:
    "Prepare for your California driver's license knowledge test with free practice questions built around California-specific laws — including the only U.S. statute explicitly legalizing motorcycle lane splitting (CVC § 21658.1), the automatic 4-month license suspension triggered by a DUI arrest under California's Administrative Per Se (APS) law, the under-20 provisional passenger restriction (not 'under 21'), and the center two-way left turn lane ('suicide lane') rules unique to California's Vehicle Code. California's test is offered in 36 languages — more than any other state.",
  splitTests: [
    { label: "Adult Test (18+)", questions: 36, toPass: 29 },
    { label: "Under 18 Test", questions: 46, toPass: 37 },
  ] satisfies SplitTest[],
  about: [
    "The California DMV knowledge test is required for all new Class C (standard) driver's license applicants. The number of questions depends on your age: drivers 18 and older take a 36-question test, while applicants under 18 take a 46-question version. Both require 80% to pass — approximately 29 correct on the 36-question test, or approximately 37 correct on the 46-question test. California allows up to three attempts per application; if all three are failed, the application expires and a new application fee is required. California's test is available in 36 languages — more than any other state in the country, reflecting California's linguistic diversity.",
    "California is the only state in the United States where motorcycle lane splitting is explicitly codified and legal. CVC § 21658.1 defines lane splitting as a motorcycle traveling between rows of stopped or moving vehicles in the same lane, and permits it at a speed no more than 10 mph faster than surrounding traffic and not exceeding 30 mph absolute. This law is tested on the California knowledge exam because it affects all drivers — not just motorcyclists — who must anticipate motorcycles moving between lanes. California's provisional license for under-18 drivers under CVC § 12814.6 restricts passengers under 20 (not under 21 as in most states) during the first 12 months, and imposes a nighttime restriction from 11 PM to 5 AM.",
    "California's Administrative Per Se (APS) DUI law is one of the most tested California-specific provisions. Under CVC § 13353.2, a DUI arrest that includes a chemical test result of 0.08% BAC or higher triggers an automatic 4-month license suspension — independent of and concurrent with any criminal case. The driver has exactly 10 days from the arrest date to request a DMV hearing to contest the suspension; missing the 10-day window means the suspension proceeds automatically. California's DUI BAC thresholds: 0.08% for adults 21+; 0.04% for commercial drivers; 0.01% for under-21 drivers. California's center two-way left turn lane rule under CVC § 21460.5 is also specifically tested: the center lane may only be used to begin or complete a left turn — never as a traffic lane or for merging.",
  ],
  keyRules: [
    { icon: "🏍️", rule: "Lane splitting legal (CVC § 21658.1) — CA is the ONLY such state", detail: "California is the only U.S. state with explicit lane-splitting legislation. CVC § 21658.1 permits motorcycles to travel between lanes at no more than 10 mph over surrounding traffic and not exceeding 30 mph absolute." },
    { icon: "⏱️", rule: "DUI arrest triggers automatic 4-month suspension (APS law)", detail: "Under CVC § 13353.2, a DUI arrest with a 0.08%+ test result triggers an automatic 4-month DMV license suspension — independent of the criminal case. Drivers have exactly 10 days to request a DMV hearing or the suspension proceeds automatically." },
    { icon: "🛣️", rule: "Two-way left turn center lane: left turns only, never a traffic lane", detail: "CVC § 21460.5 restricts the center two-way left turn lane (often called a 'suicide lane') to beginning or completing a left turn only. It may not be used as a through traffic lane or for merging into traffic flow." },
    { icon: "👶", rule: "Provisional passenger restriction: under 20, not under 21", detail: "California's provisional license under CVC § 12814.6 restricts passengers under 20 (not the more common 'under 21' threshold used by most states) during the first 12 months, unless a licensed adult 25+ is in the vehicle." },
    { icon: "🍺", rule: "DUI: 0.08% (21+), 0.04% commercial, 0.01% under-21", detail: "California's under-21 DUI threshold is 0.01% — effectively zero tolerance for any measurable alcohol. Adult limit: 0.08%. Commercial: 0.04%. The 0.01% under-21 threshold makes CA effectively zero tolerance." },
    { icon: "🚗", rule: "25 mph residential default; 15 mph near schools and senior centers", detail: "California's prima facie speed limit in residential areas is 25 mph. Near schools, playgrounds, and senior centers, it drops to 15 mph. Speed limits are set at the 85th-percentile of actual traffic surveys — posted limits may be lower than traffic engineering would suggest." },
    { icon: "🌿", rule: "HOV single-occupant exemption for qualifying EVs and PHEVs", detail: "California DMV issues color-coded decals (green, white, or purple depending on generation) that allow single-occupant qualifying electric and plug-in hybrid vehicles to use HOV carpool lanes without meeting occupancy requirements." },
    { icon: "🌐", rule: "Test available in 36 languages — more than any other state", detail: "The California DMV knowledge test is available in 36 languages including Spanish, Mandarin, Cantonese, Vietnamese, Tagalog, Korean, and Armenian — more languages than any other U.S. state's licensing test." },
  ],
  sampleQuestions: [
    {
      question: "California Vehicle Code § 21658.1 makes California unique in the U.S. What does this statute permit?",
      options: [
        "Motorcycles to exceed the posted speed limit by 10 mph to pass slow traffic",
        "Motorcycle lane splitting — riding between rows of stopped or moving vehicles in the same lane",
        "Motorcycles to use HOV lanes without a second occupant",
        "Bicycles to use freeway shoulders at any speed",
      ],
      correctIndex: 1,
      explanation:
        "CVC § 21658.1 explicitly legalizes motorcycle lane splitting in California — making California the only state in the U.S. with a statute codifying this practice. Lane splitting permits motorcycles to ride between rows of stopped or moving vehicles in the same lane. California law requires lane splitting to occur at a speed no more than 10 mph faster than surrounding traffic and not exceeding 30 mph absolute. All California drivers must anticipate motorcycles moving between lanes — this law affects every driver on the road, not just motorcyclists.",
    },
    {
      question: "Under California's Administrative Per Se (APS) law (CVC § 13353.2), what happens automatically after a DUI arrest with a BAC of 0.08% or higher?",
      options: [
        "The driver's license is suspended only after a criminal DUI conviction",
        "The driver receives a warning letter with a 90-day window to contest",
        "An automatic 4-month DMV license suspension is triggered — independent of the criminal case — and the driver has 10 days from arrest to request a DMV hearing",
        "The license is confiscated at arrest but restored if charges are dropped",
      ],
      correctIndex: 2,
      explanation:
        "California's Administrative Per Se (APS) law (CVC § 13353.2) triggers an automatic 4-month DMV license suspension upon a DUI arrest with a BAC of 0.08% or higher — independent of whether the criminal case results in a conviction. The driver has exactly 10 days from the date of arrest to request a DMV hearing to contest the suspension. Missing the 10-day window causes the suspension to proceed automatically at 30 days post-arrest. This APS suspension runs concurrently with (not in addition to) any criminal court suspension.",
    },
    {
      question: "Under CVC § 21460.5, the center two-way left turn lane (sometimes called the 'suicide lane') may be used for which purposes?",
      options: [
        "As an additional travel lane when the road is congested",
        "To merge into traffic flow from a side street or driveway",
        "Only to begin or complete a left turn — it may not be used as a travel lane or for merging",
        "For passing on the left at speeds under 25 mph",
      ],
      correctIndex: 2,
      explanation:
        "CVC § 21460.5 restricts use of the center two-way left turn lane to two purposes: (1) beginning a left turn from the road, or (2) completing a left turn from the opposite direction into the center lane. The center lane may not be used as a through traffic lane, for passing, or for merging into traffic flow. Violations of the center lane rules are a common cause of head-on collisions and are specifically tested on the California knowledge exam.",
    },
    {
      question: "California's provisional license for drivers under 18 restricts passengers during the first 12 months. Passengers of what age are restricted?",
      options: [
        "Under 18",
        "Under 20",
        "Under 21",
        "Under 25",
      ],
      correctIndex: 1,
      explanation:
        "California's provisional license under CVC § 12814.6 restricts passengers who are under 20 years of age — not the 'under 21' threshold used by most other states. During the first 12 months, a provisional license holder may not transport passengers under 20 unless a licensed driver 25 or older is also in the vehicle. The nighttime restriction also applies: no driving between 11 PM and 5 AM without a licensed adult 25+ present.",
    },
    {
      question: "California's under-21 DUI threshold is 0.01% BAC. How does this compare to most other states' underage DUI limits?",
      options: [
        "California is more lenient — most states use 0.00% (zero tolerance)",
        "California is the same as most states — 0.01% is the standard",
        "California is stricter — most states use 0.02%, making California's 0.01% effectively zero tolerance for any measurable alcohol",
        "California's limit only applies to drivers under 18, not 18–20 year olds",
      ],
      correctIndex: 2,
      explanation:
        "California's under-21 BAC limit of 0.01% is stricter than the 0.02% threshold used by most other states. At 0.01%, any measurable alcohol above the smallest detectable trace constitutes a DUI violation for California drivers under 21 — making the California standard effectively zero tolerance. This 0.01% limit applies to all drivers under 21 regardless of whether they are 16, 18, or 20 years old.",
    },
    {
      question: "What does California's 'Basic Speed Law' (CVC § 22350) require of all drivers?",
      options: [
        "Never to exceed the posted speed limit under any conditions",
        "To drive no faster than is reasonable or prudent under the actual conditions — even if below the posted limit",
        "To drive at exactly the posted speed limit at all times",
        "To increase speed to the posted limit even in adverse conditions",
      ],
      correctIndex: 1,
      explanation:
        "California's Basic Speed Law (CVC § 22350) prohibits driving faster than is 'reasonable or prudent' for the actual conditions — road surface, traffic, visibility, and weather — even if the speed is below the posted limit. A driver traveling at 55 mph in heavy rain with poor visibility can be cited under the Basic Speed Law even if the posted limit is 65 mph. Conversely, California sets posted speed limits at the 85th-percentile of actual traffic surveys, which means posted limits may be lower than a driver's 'feels safe' instinct on many roads.",
    },
    {
      question: "California's DMV knowledge test is available in how many languages?",
      options: ["12 languages", "20 languages", "36 languages — more than any other U.S. state", "English only"],
      correctIndex: 2,
      explanation:
        "The California DMV knowledge test is available in 36 languages — more than any other state in the country. Languages include Spanish, Mandarin, Cantonese, Vietnamese, Tagalog, Korean, Armenian, Japanese, and dozens of others, reflecting California's extraordinary linguistic diversity. Traffic signs on the test are still shown as they appear on real roads (visual), not translated. You can request your preferred language when scheduling your DMV appointment.",
    },
    {
      question: "California issues single-occupant HOV lane exemption decals for certain clean-air vehicles. Who issues these decals?",
      options: [
        "The California Air Resources Board (CARB) — not the DMV",
        "The California DMV — as part of the vehicle registration process",
        "The California Department of Transportation (Caltrans)",
        "Federal NHTSA — the same sticker applies in all states",
      ],
      correctIndex: 1,
      explanation:
        "The California DMV issues color-coded decals (green, white, or purple — depending on the vehicle generation and eligibility category) that allow qualifying single-occupant electric vehicles (EVs) and plug-in hybrid electric vehicles (PHEVs) to use HOV (carpool) lanes without meeting the occupancy requirement. The decals are obtained through the vehicle registration process at the California DMV. Current sticker color and eligibility requirements can change; check the California DMV website for the most current decal program details.",
    },
    {
      question: "California's provisional license nighttime restriction prohibits driving between what hours during the first 12 months?",
      options: [
        "10 PM and 5 AM",
        "11 PM and 5 AM",
        "Midnight and 5 AM",
        "11 PM and 6 AM",
      ],
      correctIndex: 1,
      explanation:
        "California's provisional license under CVC § 12814.6 prohibits drivers under 18 from driving between 11 PM and 5 AM during the first 12 months — or until turning 18, whichever is longer — unless accompanied by a licensed driver aged 25 or older. The 11 PM to 5 AM nighttime window is specific to California. Exceptions include travel for work, school, or medical necessity with documentation. Violations can result in suspension of the provisional license.",
    },
    {
      question: "California requires how many hours of supervised driving for drivers under 18 applying for a provisional license?",
      options: [
        "30 hours total, 5 at night",
        "40 hours total, 5 at night",
        "50 hours total, 10 at night",
        "65 hours total, 10 at night",
      ],
      correctIndex: 2,
      explanation:
        "California's provisional license program (CVC § 12814.6) requires drivers under 18 to complete at least 50 hours of supervised driving, with at least 10 of those hours occurring at night. This supervised practice must occur during a minimum 6-month permit holding period. The supervising driver must be a licensed adult 25 or older in the front seat. After meeting the hours requirement and holding the permit for 6 months, the teen can apply for a California provisional license by passing the DMV road test.",
    },
  ],
  faqs: [
    {
      question: "Why is California the only state with explicit lane-splitting legislation?",
      answer:
        "Lane splitting — a motorcycle riding between lanes of traffic — was tolerated but not explicitly legal in California for decades. The California Highway Patrol issued informal safety guidelines but there was no statute. In 2016, California enacted AB 51, codified as CVC § 21658.1, to formally define and legalize lane splitting at safe speeds (no more than 10 mph over traffic, not exceeding 30 mph). No other U.S. state has followed with a comparable explicit statute, though some states tolerate it without prohibition. The law is tested on California's knowledge exam because all drivers must understand that motorcycles may legally occupy the space between lanes.",
    },
    {
      question: "What is California's Administrative Per Se (APS) DUI law and why does it matter?",
      answer:
        "California's APS law (CVC § 13353.2) allows the California DMV to suspend a driver's license based solely on a DUI arrest and chemical test result — without waiting for a criminal conviction. A BAC of 0.08%+ at arrest triggers an automatic 4-month suspension. The driver has exactly 10 days from the arrest date to request a DMV hearing to contest the suspension. If the 10-day window is missed, the suspension proceeds automatically at 30 days post-arrest. The APS suspension and the criminal DUI prosecution proceed on separate tracks simultaneously.",
    },
    {
      question: "California's provisional license restricts passengers 'under 20' — why not 'under 21' as in most states?",
      answer:
        "CVC § 12814.6, California's provisional license statute, specifically restricts passengers under 20 years of age (not under 21) during the first 12 months. The California Legislature's research found that crash risk associated with teen peer passengers drops significantly once passengers are 20 or older. This California-specific '20' threshold is a frequent trap on the knowledge exam because test-takers who remember 'under 21' from other contexts will get the answer wrong.",
    },
    {
      question: "How does California's two-way left turn center lane work?",
      answer:
        "The center two-way left turn lane (CVC § 21460.5) — informally called the 'suicide lane' — is the center lane marked with yellow lines that allows vehicles from both directions to make left turns. In California, this lane may ONLY be used to begin a left turn from the road or to complete a left turn from the opposite direction. It may NOT be used as a travel lane for moving traffic, for passing, or for merging into traffic from a driveway or side street. Using the center lane as a travel lane is a violation under CVC § 21460.5.",
    },
    {
      question: "How many questions are on the California DMV permit test and how many times can I retake it?",
      answer:
        "Applicants 18 and older take a 36-question test; applicants under 18 take a 46-question test. Both require 80% to pass (approximately 29/36 or 37/46 correct). California allows up to three attempts per application. If all three fail, the application expires — you must start over, pay a new $38 application fee, and submit a new DL 44 form. A new application also resets the three-attempt counter.",
    },
    {
      question: "What is California's 3-second following distance rule?",
      answer:
        "The California Driver Handbook emphasizes a minimum 3-second following distance at any speed in normal conditions. To measure: pick a fixed object ahead; count the seconds between when the vehicle ahead passes it and when you reach it — it should be 3 or more seconds. In rain, fog, or heavy traffic, California's handbook recommends extending to 4 or more seconds. California specifically tests the 3-second rule (not a specific car-length count, which varies by speed) because it scales correctly across different speeds.",
    },
    {
      question: "What are California's DUI BAC thresholds for different driver categories?",
      answer:
        "California DUI BAC thresholds: (1) Adults 21+ — 0.08%; (2) Commercial drivers — 0.04%; (3) Drivers under 21 — 0.01% (effectively zero tolerance). The 0.01% under-21 threshold is stricter than most states' 0.02% standard. California's APS law also triggers an automatic license suspension at arrest for 0.08%+ BAC (adults) or 0.01%+ BAC (under 21), independent of criminal charges.",
    },
    {
      question: "Does California offer the DMV knowledge test in languages other than English?",
      answer:
        "Yes — California offers the knowledge test in 36 languages, more than any other U.S. state. Languages include Spanish, Mandarin, Cantonese, Vietnamese, Tagalog, Korean, Armenian, Japanese, Punjabi, Hindi, and dozens more. Request your language when scheduling your DMV appointment at dmv.ca.gov. Traffic signs on the test are shown visually as they appear on actual roads — not translated — regardless of the language chosen for the written portions.",
    },
    {
      question: "What is California's 15 mph speed limit and when does it apply?",
      answer:
        "California's prima facie speed limit of 15 mph applies in specific locations: (1) in any alley, (2) when approaching a railroad crossing where view is obstructed, and (3) near schools, playgrounds, and senior centers when children or seniors are present. The 15 mph limit applies even if no sign is posted in these locations. The standard California residential prima facie limit is 25 mph. Near schools and senior centers during operating hours, the 15 mph limit is posted and enforced with doubled fines.",
    },
    {
      question: "What documents do I need for the California DMV knowledge test?",
      answer:
        "You need a completed DL 44 application form (available at DMV offices or online), proof of California residency (two documents such as utility bills or bank statements), your Social Security number or ITIN, and the $38 application fee as of 2025. If under 18, a parent or legal guardian must sign the DL 44. You will also take a vision test at the DMV at no additional cost. Scheduling online at dmv.ca.gov is strongly recommended to avoid long wait times.",
    },
  ],
  relatedTests: [
    { label: "Texas Permit Test", href: "/texas-dmv-practice-test" },
    { label: "Florida Permit Test", href: "/florida-dmv-practice-test" },
    { label: "New York Permit Test", href: "/new-york-dmv-practice-test" },
    { label: "CA Motorcycle Test", href: "/california-motorcycle-practice-test" },
    { label: "CA CDL Test", href: "/california-cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function CaliforniaDMVPage() {
  return <PracticeTestPage {...data} />;
}
