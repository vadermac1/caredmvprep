import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Arizona DMV Practice Test 2025 – Free AZ MVD Knowledge Exam Prep",
  description:
    "Free Arizona MVD practice test based on the 2025 Arizona Driver License Manual. 30 questions, 80% passing score. Prepare for your AZ Motor Vehicle Division knowledge test and pass on the first try.",
  alternates: { canonical: "https://caredmvprep.com/arizona-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/arizona-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Arizona",
  stateAbbr: "AZ",
  testLabel: "Driver's License Knowledge Test",
  slug: "arizona-dmv-practice-test",
  headline: "Arizona MVD Driver's License Practice Test",
  intro:
    "Prepare for your Arizona Motor Vehicle Division (MVD) knowledge test with free practice questions built around Arizona-specific laws — including the 'Pull Aside, Stay Alive' haboob dust storm protocol (hazard lights off, not on), the three-tier DUI structure with 'extreme' and 'super extreme' tiers under ARS § 28-1381, the authorized third-party (ATP) private licensing network, and an open-container law that applies to ALL vehicle occupants. Arizona's MVD is a division of ADOT — not a standalone agency.",
  basedOn: "2025 Arizona Driver License Manual",
  about: [
    "Arizona driver's licenses are issued by the Motor Vehicle Division (MVD), a division within the Arizona Department of Transportation (ADOT) — not a standalone DMV. Arizona's licensing system is nationally unusual in that it relies heavily on an authorized third-party (ATP) network: private businesses licensed by the state to process MVD transactions including road skills tests and some knowledge tests. These 'AZ MVD Now' ATP offices are often found at car dealerships and driving schools and typically offer faster appointment availability than state MVD offices. The AZ MVD Now online portal at azmvdnow.gov allows eligible applicants to complete many transactions digitally. First-time permit applicants typically must visit an MVD office or ATP location in person. Arizona's knowledge test is 30 questions; passing requires 24 correct (80%). If you fail, you may retake; but after a second failure you must wait 15 days before a third attempt.",
    "Arizona's DUI law under ARS § 28-1381 is among the strictest in the country and has three tiers for alcohol impairment. Standard DUI applies at 0.08%–0.149% BAC. 'Extreme DUI' under ARS § 28-1382 applies at 0.15%–0.199% BAC and carries mandatory minimum jail time on a first offense: 30 consecutive days (or 9 days if an IID is installed and treatment is completed), plus a minimum $2,500 in fines. 'Super Extreme DUI' applies at 0.20%+ BAC with even harsher mandatory minimums. For drivers under 21, Arizona has true zero tolerance — any detectable alcohol is a violation under ARS § 4-244(34), with no 0.02% threshold as in most states. A first-offense standard DUI in Arizona (even at the minimum 0.08% level) requires 10 days in jail — 9 of which can be suspended for treatment completion — making Arizona's baseline first-offense DUI penalty among the most severe nationally.",
    "Arizona's most unique traffic safety protocol addresses haboobs — massive dust storms that can exceed 3,000 feet in height and are common in the greater Phoenix area and along I-10 in Pinal County. Arizona's 'Pull Aside, Stay Alive' campaign specifies a counter-intuitive procedure: when visibility drops in a haboob, drivers must pull completely off the road beyond the fog line, turn off ALL lights including hazard flashers, and take their foot off the brake so brake lights are dark. Leaving hazard flashers on is specifically WRONG in Arizona's protocol because they guide blinded drivers directly into your stopped vehicle. Arizona's open-container law (ARS § 4-251) applies to all vehicle occupants — even rear passengers cannot possess an open alcohol container while the vehicle is on a public highway. Arizona's Vulnerable Road User (VRU) law under ARS § 28-735 requires 3 feet of clearance when passing bicyclists and imposes enhanced penalties when a driver commits a traffic violation that injures a cyclist, pedestrian, or other VRU.",
  ],
  keyRules: [
    { icon: "🌪️", rule: "Haboob protocol: pull off, ALL lights OFF including hazards", detail: "Arizona's 'Pull Aside, Stay Alive' dust storm protocol: pull completely off the road past the fog line, turn off ALL lights INCLUDING hazard flashers, and take foot off the brake. Hazard lights ON is specifically wrong — they guide blinded drivers into your vehicle." },
    { icon: "🍺", rule: "DUI tiers: Standard 0.08% / Extreme 0.15% / Super Extreme 0.20%", detail: "ARS § 28-1381/1382: Standard DUI 0.08%+. Extreme DUI at 0.15%+ carries 30-day mandatory jail (or 9 with IID) + $2,500 minimum fine on first offense. Super Extreme at 0.20%+ has even longer mandatory minimums. Under-21: any detectable alcohol." },
    { icon: "🏢", rule: "ATP network: private businesses authorized to process MVD transactions", detail: "Arizona's Authorized Third Party (ATP) offices are private businesses licensed to conduct road skills tests, some knowledge tests, and other MVD transactions. Usually faster than state MVD offices. Find locations at servicearizona.com." },
    { icon: "🍾", rule: "Open container law applies to ALL occupants (ARS § 4-251)", detail: "Arizona's open-container prohibition covers every occupant — including rear-seat passengers. No person may possess an open alcohol container in a vehicle on a public highway, more broadly than some states' driver-only provisions." },
    { icon: "🚲", rule: "3-foot bicycle passing clearance + VRU enhanced penalties", detail: "ARS § 28-735 requires 3 feet when passing bicyclists. Arizona's VRU law imposes enhanced criminal penalties when a driver committing a traffic violation injures a cyclist, pedestrian, or other vulnerable road user." },
    { icon: "📵", rule: "Handheld ban for ALL drivers (ARS § 28-914.01, effective Jan 1, 2021)", detail: "Arizona's distracted driving law effective January 1, 2021 prohibits all handheld device use while driving. First offense: $75–$149. Subsequent offenses: $150–$250. Hands-free Bluetooth and dash-mounted devices permitted." },
    { icon: "🎓", rule: "Permit at 15½: 6 months + 30 supervised hours (5 at night)", detail: "Arizona instruction permit at 15 years 6 months after passing the knowledge test. Hold at least 6 months. Log 30 supervised hours including 5 at night. Then take road skills test for Class G graduated license." },
    { icon: "🌙", rule: "Class G curfew: midnight–5 AM for first 6 months", detail: "Arizona Class G (graduated) license holders may not drive midnight to 5 AM during the first 6 months unless for work, school, or documented family emergency. No passengers under 18 for first 6 months without a licensed adult 21+ present." },
  ],
  sampleQuestions: [
    {
      question: "Arizona's 'Pull Aside, Stay Alive' protocol for haboob dust storms instructs drivers to take a specific action regarding hazard flashers. What is the correct instruction?",
      options: [
        "Turn hazard flashers ON to warn other drivers of your stopped position",
        "Turn hazard flashers ON only if you are on an interstate highway",
        "Turn ALL lights OFF including hazard flashers, pull completely off the road, and take your foot off the brake",
        "Keep headlights on low beam and slow to 25 mph until visibility improves",
      ],
      correctIndex: 2,
      explanation:
        "Arizona's 'Pull Aside, Stay Alive' dust storm protocol specifies pulling completely off the road beyond the fog line, turning off ALL lights including hazard flashers, and removing your foot from the brake pedal so your brake lights are off. This counter-intuitive instruction exists because hazard flashers guide blinded drivers directly into your stopped vehicle — other drivers follow the flashing lights thinking they mark the travel lane. In an Arizona haboob with near-zero visibility, a stopped vehicle with hazard flashers on is a deadly target. Dark lights mean other drivers cannot track your position.",
    },
    {
      question: "Arizona's 'Extreme DUI' charge under ARS § 28-1382 applies at what BAC level, and what mandatory penalty applies on a first offense?",
      options: [
        "0.10%+ BAC — 3 days mandatory jail",
        "0.12%+ BAC — 5 days mandatory jail plus IID",
        "0.15%+ BAC — 30 consecutive days mandatory jail (or 9 days with IID and treatment completion) plus $2,500 minimum fine",
        "0.20%+ BAC — 45 days mandatory jail",
      ],
      correctIndex: 2,
      explanation:
        "Arizona's Extreme DUI tier (ARS § 28-1382) activates at 0.15% BAC. A first-offense Extreme DUI carries 30 consecutive days in jail — or 9 days if the driver installs an ignition interlock device (IID) and completes an alcohol screening and treatment program — plus a minimum fine of $2,500 plus surcharges. Standard DUI (0.08%–0.149%) requires 10 days jail (9 suspended with treatment). 'Super Extreme DUI' at 0.20%+ has even harsher mandatory minimums. Arizona's DUI penalties are among the most severe for a first offense of any state.",
    },
    {
      question: "For Arizona drivers under 21, what BAC level constitutes a DUI violation under Arizona's zero-tolerance policy?",
      options: [
        "0.08% — the same as the adult limit",
        "0.04% — half the adult limit",
        "0.02% — the threshold used in most states",
        "Any detectable amount of alcohol — Arizona has true zero tolerance for under-21 drivers",
      ],
      correctIndex: 3,
      explanation:
        "Arizona's zero-tolerance policy for drivers under 21 prohibits driving with any detectable amount of alcohol in the body — not 0.02% as used in most states, but any measurable alcohol at all. This is codified under ARS § 4-244(34). A first offense results in a 2-year license suspension (with possible reinstatement after 1 year with IID), fines, and mandatory alcohol screening. Arizona's zero-tolerance standard is stricter than the majority of other states.",
    },
    {
      question: "What is Arizona's Authorized Third Party (ATP) program and why is it unusual?",
      options: [
        "A program allowing out-of-state drivers to transfer licenses without testing",
        "A network of private businesses authorized by the state MVD to conduct road skills tests, some knowledge tests, and other MVD transactions",
        "A federal program for commercial driver testing",
        "An online portal for vehicle registration renewal only",
      ],
      correctIndex: 1,
      explanation:
        "Arizona's ATP (Authorized Third Party) program allows private businesses — such as car dealerships and driving schools — to be licensed by ADOT's MVD to conduct MVD transactions including road skills tests, some knowledge tests, and vehicle inspections. ATP offices typically offer faster appointment availability than state MVD offices. This decentralized third-party model reduces wait times at state offices and is nationally unusual in its scope and scale. Find the nearest ATP location at servicearizona.com.",
    },
    {
      question: "Arizona's open-container law (ARS § 4-251) prohibits possessing an open alcohol container in a vehicle. Does this apply only to the driver?",
      options: [
        "Yes — only the driver is prohibited; passengers may have open containers",
        "No — ALL occupants including rear-seat passengers are prohibited from possessing open containers in any vehicle on a public highway",
        "Only front-seat occupants; rear passengers are permitted to have open containers",
        "The law only applies while the vehicle is moving",
      ],
      correctIndex: 1,
      explanation:
        "Arizona's open-container law under ARS § 4-251 applies to all vehicle occupants — not just the driver. Every person in the vehicle is prohibited from possessing an open container of alcohol while the vehicle is on a public highway, whether moving or stopped. This 'all occupants' rule is broader than some states' laws that only target the driver or front-seat occupants. There are no passenger exemptions for rear-seat passengers in standard vehicles under Arizona law.",
    },
    {
      question: "Arizona's hands-free distracted driving law (ARS § 28-914.01) took effect on what date, and what does it prohibit?",
      options: [
        "January 1, 2019 — texting only",
        "January 1, 2021 — all handheld device use while driving",
        "April 1, 2023 — all handheld device use except calls",
        "July 1, 2020 — social media use only",
      ],
      correctIndex: 1,
      explanation:
        "Arizona's distracted driving law (ARS § 28-914.01) took effect January 1, 2021 — making Arizona one of the later states to enact a statewide handheld ban. The law prohibits all handheld electronic device use while driving: calls, texting, navigation input, social media, and any other use while holding the device. Hands-free via Bluetooth or a dashboard-mounted device is permitted. First offense: $75–$149. Subsequent offenses: $150–$250. School and work zone violations carry additional penalties.",
    },
    {
      question: "At what age can an Arizona resident apply for an instruction permit, and what supervised driving is required before a Class G license?",
      options: [
        "15 years old — 20 hours supervised, no nighttime requirement",
        "15 years, 6 months — 30 hours supervised including 5 hours at night",
        "16 years old — 40 hours supervised including 10 hours at night",
        "16 years old — 50 hours supervised including 10 hours at night",
      ],
      correctIndex: 1,
      explanation:
        "Arizona residents can obtain an instruction permit at 15 years and 6 months (15½) after passing the MVD knowledge test. The permit must be held for at least 6 months, and the applicant must log at least 30 hours of supervised driving — including at least 5 hours at night — with a licensed driver 21 or older in the front seat. After meeting these requirements, the teen can apply for a Class G (graduated) license by passing the road skills test at an MVD office or ATP location.",
    },
    {
      question: "Under Arizona's Move Over law (ARS § 28-775), what is the criminal classification for a violation?",
      options: [
        "Civil infraction — fine only, no criminal record",
        "Class 3 misdemeanor",
        "Class 2 misdemeanor — a criminal offense, not merely a civil infraction",
        "Class 6 felony",
      ],
      correctIndex: 2,
      explanation:
        "Arizona's Move Over law (ARS § 28-775) classifies a violation as a class 2 misdemeanor — a criminal traffic offense, not just a civil infraction. This makes Arizona's Move Over law more punitive than most states, where violations are typically civil traffic citations. Arizona drivers must move one lane away from stationary emergency vehicles, law enforcement, tow trucks, or highway maintenance vehicles with activated lights, or reduce speed to a safe speed below the posted limit if a lane change is not possible.",
    },
    {
      question: "Under Arizona law, what is the consequence of passing a stopped school bus displaying flashing red lights on an undivided road?",
      options: [
        "A civil fine of $150",
        "A civil fine of $250 and 3 points on the license",
        "A criminal traffic offense — illegally passing a stopped school bus is a criminal violation in Arizona",
        "A warning letter for a first offense only",
      ],
      correctIndex: 2,
      explanation:
        "In Arizona, illegally passing a stopped school bus with activated red lights and an extended stop arm is a criminal traffic offense — not merely a civil citation. All traffic in both directions must stop on undivided roads. On divided highways with a physical median, only traffic following the bus must stop. The stop must be maintained until the lights stop flashing and the arm retracts. Arizona treats this violation as a criminal matter reflecting the severity of endangering children.",
    },
    {
      question: "Arizona's Class G graduated license restricts teen drivers from carrying passengers under 18 during the first 6 months. What exception exists?",
      options: [
        "No exceptions — no passengers under 18 for the first 6 months",
        "The restriction only applies during nighttime hours",
        "Passengers under 18 are permitted if a licensed adult 21 or older is also in the vehicle",
        "Siblings and family members are the only exceptions",
      ],
      correctIndex: 2,
      explanation:
        "Arizona's Class G license restriction on passengers under 18 during the first 6 months can be waived if a licensed adult 21 or older is present in the vehicle. The curfew restriction (no driving midnight to 5 AM) also has an exception for documented work, school, or family emergency with written documentation. After 6 months of violation-free driving, both the passenger restriction and the curfew restriction are lifted. At age 18, Arizona drivers transition directly to a standard (non-graduated) license.",
    },
  ],
  faqs: [
    {
      question: "What is Arizona's MVD and how does it differ from a standard DMV?",
      answer:
        "Arizona's Motor Vehicle Division (MVD) is a division within the Arizona Department of Transportation (ADOT) — not a standalone agency. It performs the same functions as a DMV in other states: driver licensing, vehicle registration, titling, and enforcement of motor vehicle laws. What makes Arizona unusual is the ATP (Authorized Third Party) network of private businesses authorized to conduct many MVD transactions, including road skills tests and some knowledge tests. The AZ MVD Now online portal (azmvdnow.gov) handles many transactions digitally. This decentralized model reduces wait times significantly compared to traditional DMV systems.",
    },
    {
      question: "What is Arizona's 'Pull Aside, Stay Alive' protocol and why must hazard lights be turned OFF?",
      answer:
        "Arizona's haboob dust storm protocol ('Pull Aside, Stay Alive') requires drivers to: (1) pull completely off the road past the fog line, (2) turn off ALL lights INCLUDING hazard flashers, and (3) take your foot off the brake. The reason hazard lights must be OFF is counter-intuitive but critical: in near-zero visibility, other blinded drivers follow flashing lights thinking they mark the travel lane — hazard flashers on a stopped vehicle guide those drivers directly into your stopped car. A dark vehicle off the road is safer than a flashing target. Haboobs exceeding 3,000 feet in height are common near Phoenix and along I-10 in Pinal County.",
    },
    {
      question: "What are Arizona's three DUI tiers and their BAC thresholds?",
      answer:
        "Arizona has three DUI tiers under ARS § 28-1381 and 1382: (1) Standard DUI — 0.08%–0.149% BAC, minimum 10 days jail (9 suspended with treatment), ~$1,250+ fines, IID required; (2) Extreme DUI — 0.15%–0.199% BAC, mandatory 30 days jail (or 9 with IID and treatment), $2,500+ minimum fines; (3) Super Extreme DUI — 0.20%+ BAC, even longer mandatory jail minimums. Under-21 drivers face zero tolerance: any detectable alcohol. Drug impairment can also constitute DUI regardless of BAC.",
    },
    {
      question: "Does Arizona's open-container law apply to passengers?",
      answer:
        "Yes. Under ARS § 4-251, Arizona's open-container prohibition applies to all vehicle occupants — not just the driver. Every person in the vehicle is prohibited from possessing an open container of alcohol while the vehicle is on a public highway, whether the vehicle is moving or stopped. There are no passenger exemptions for rear-seat occupants in standard vehicles. This is broader than some states where only the driver or front-seat occupant is covered.",
    },
    {
      question: "What is Arizona's ATP program and how do I use it to take my road skills test?",
      answer:
        "Arizona's Authorized Third Party (ATP) program licenses private businesses to conduct MVD-authorized transactions including road skills tests, vehicle inspections, and some knowledge tests. ATP sites (at car dealerships, driving schools, and dedicated testing facilities) usually offer faster appointments than state MVD offices. To find an ATP location: visit servicearizona.com and use the MVD office locator, filtering for ATP sites. Bring your instruction permit, required documentation, and payment for the test fee. ATP offices conduct the same road skills test as state MVD offices.",
    },
    {
      question: "What are Arizona's Class G graduated license restrictions?",
      answer:
        "Arizona Class G license restrictions: (1) No driving midnight to 5 AM for the first 6 months, except for documented work, school, or family emergency; (2) No passengers under 18 for the first 6 months unless a licensed adult 21+ is in the vehicle. Both restrictions lift after 6 months of violation-free driving. At age 18, Arizona drivers skip further GDL stages and transition directly to a standard license. Violations during the Class G period can result in extension of the restriction period.",
    },
    {
      question: "What happens if I fail the Arizona MVD knowledge test?",
      answer:
        "You may retake the Arizona knowledge test after a failure. However, after your second failure you must wait 15 days before a third attempt. There is no statewide limit on total attempts, but the 15-day waiting period applies after any second or subsequent consecutive failure. A fee is charged for each attempt. The test is 30 questions; 24 correct (80%) is required to pass. Many Arizona MVD offices and ATP sites offer same-day testing if appointments are available.",
    },
    {
      question: "What is Arizona's bicycle and Vulnerable Road User (VRU) passing law?",
      answer:
        "ARS § 28-735 requires Arizona drivers to maintain at least 3 feet of clearance when overtaking a bicyclist. Arizona's VRU law imposes enhanced criminal penalties when a driver who is committing a traffic violation injures a cyclist, pedestrian, scooter rider, or other vulnerable road user. The VRU enhancement can upgrade what would otherwise be a minor traffic infraction to a criminal charge if a VRU is injured as a result of the violation.",
    },
    {
      question: "When must Arizona drivers use headlights?",
      answer:
        "Arizona law requires headlights from sunset to sunrise and whenever visibility is insufficient to see persons or vehicles at a distance of 500 feet. Arizona also requires headlights when using windshield wipers due to rain, fog, or other precipitation. In dusty or smoky conditions that reduce visibility, headlights should also be used. During a haboob, however, Arizona's 'Pull Aside, Stay Alive' protocol overrides the headlight rule — when pulling off the road in a dust storm, all lights (including headlights) should be turned off.",
    },
    {
      question: "How does Arizona's AZ MVD Now system work for licensing?",
      answer:
        "AZ MVD Now (azmvdnow.gov) is Arizona's online MVD portal that allows eligible applicants to complete many transactions without visiting an office: vehicle registration renewal, address changes, license renewal (for eligible licenses), and some title transfers. First-time permit and license applicants typically must visit in person to verify identity documents, take the knowledge test, and complete biometrics. The portal also allows users to schedule appointments at MVD offices and ATP locations.",
    },
  ],
  relatedTests: [
    { label: "AZ Motorcycle Test", href: "/arizona-motorcycle-practice-test" },
    { label: "AZ CDL Test", href: "/arizona-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function ArizonaDMVPage() {
  return <PracticeTestPage {...data} />;
}
