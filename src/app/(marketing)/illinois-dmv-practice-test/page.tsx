import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Illinois Driver's License Practice Test 2025 – Free IL SOS Exam Prep",
  description:
    "Free Illinois driver's license practice test based on the official Illinois Rules of the Road. 35 questions, 80% passing score, detailed explanations. Pass your IL Class D knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/illinois-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/illinois-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Illinois",
  stateAbbr: "IL",
  testLabel: "Driver's License Practice Test",
  slug: "illinois-dmv-practice-test",
  headline: "Illinois Driver's License Practice Test — Scott's Law, SOS Licensing, and Teen Phone Restrictions",
  intro:
    "Illinois driver's licenses are issued by the Secretary of State — a statewide elected official — not a DMV or transportation department. The 35-question Class D knowledge test covers Scott's Law (with construction-zone fines up to $10,000), a full handheld ban for all drivers, and Illinois's unique Friday/Saturday late-night GDL exception that lets teens drive until 11 PM instead of 10 PM on weekends. This practice test focuses on those specifically Illinois provisions that general driving knowledge won't cover.",
  numToPass: "28 correct (80%)",
  basedOn: "Illinois Rules of the Road (2025)",
  about: [
    "In Illinois, all driver's licensing functions are administered by the Illinois Secretary of State (SOS) — an elected constitutional officer, currently Alexi Giannoulias. Illinois is one of only a handful of states where driver licensing is not handled by an executive DMV or transportation agency but instead by a separately elected official. The Class D knowledge test is 35 questions drawn from the Illinois Rules of the Road handbook, and 28 correct answers (80%) are required to pass. The test is taken in person at an Illinois SOS Driver Services facility. Illinois was an early adopter of full handheld phone restrictions: 625 ILCS 5/12-610.2, effective July 1, 2014, prohibits ALL drivers from using any handheld electronic communication device while driving. First offense: $75; second: $100; third: $125; fourth or more: $150. Critically, a fourth or subsequent violation becomes a moving violation that adds points to the license — earlier violations are civil penalties that do not affect the driving record.",
    "Scott's Law (625 ILCS 5/11-907) is named after Chicago firefighter Scott Gillen, who was killed by an impaired driver at a crash scene in 2000. The law requires all Illinois drivers to move over at least one lane away from any stationary authorized emergency vehicle, highway maintenance vehicle, or tow truck displaying flashing lights on a multi-lane roadway. If a lane change cannot safely be made, drivers must slow to a speed at least 20 mph below the posted limit (minimum 25 mph where the limit is 20 mph or lower). Illinois extended Scott's Law in 2017 to explicitly cover highway maintenance and construction vehicles. Fines are substantial: minimum $250 for a first violation; minimum $750 for a second or subsequent violation; minimum $10,000 if the violation occurs in a construction zone with workers present. License suspension is also a potential consequence. These construction-zone fines are among the highest in the nation for a Move Over violation.",
    "Illinois's Graduated Driver Licensing program has several distinctive provisions. Teens must hold an Instruction Permit for a minimum of 9 months — one of the longer nationally mandated holding periods. All first-time drivers under 18 must complete an approved driver education course (classroom and behind-the-wheel) before a permit is issued; private home schooling does not substitute unless the provider is SOS-approved. The Probationary License carries a nighttime curfew with a notable weekend exception: no driving between 10 PM and 6 AM on Sunday through Thursday, but the curfew begins at 11 PM on Friday and Saturday nights — a one-hour extension that is specifically tested on the Illinois exam because most drivers expect a uniform curfew. Drivers under 19 face a complete phone ban — no electronic device use of any kind while driving, including hands-free calls — which is stricter than the adult rule that permits hands-free calling.",
  ],
  keyRules: [
    { icon: "🗳️", rule: "SOS not DMV — elected constitutional officer", detail: "Illinois driver licenses are issued by the Secretary of State, a statewide elected official — not a DMV or transportation agency. Illinois is one of the few states where licensing is a function of an elected office. Visit ilsos.net for office locations." },
    { icon: "🚨", rule: "Scott's Law: $250/$750 fine; $10,000 in construction zones", detail: "625 ILCS 5/11-907: Move over one lane or slow 20 mph below posted limit for stationary emergency, maintenance, or tow trucks. Fine: $250 first offense; $750 second. Violations in active construction zones with workers: minimum $10,000 fine." },
    { icon: "📱", rule: "Teen phone ban: under-19 no device use at all — including hands-free", detail: "Illinois bans ALL electronic device use for drivers under 19 — including hands-free Bluetooth calls. Adult drivers may use hands-free devices. Fourth or subsequent handheld violation becomes a moving violation adding license points." },
    { icon: "🌙", rule: "GDL curfew: 10 PM weeknights; 11 PM Fri/Sat", detail: "Illinois Probationary License holders under 18 may not drive between 10 PM and 6 AM Sunday through Thursday — but the curfew begins at 11 PM on Friday and Saturday nights. This weekend exception is a frequently tested IL-specific fact." },
    { icon: "🍺", rule: "DUI: 0.08% adults; 0.00% under 21 (any trace = violation)", detail: "Illinois zero tolerance applies to any trace of alcohol for drivers under 21 — not 0.02%, but truly any detectable amount. Adult DUI threshold is 0.08%. First IL DUI conviction carries mandatory 12-month license suspension." },
    { icon: "🎓", rule: "9-month minimum permit + 50 supervised hours (10 at night)", detail: "Illinois Instruction Permit must be held for 9 months minimum — one of the longer national requirements. Must log 50 hours supervised driving (10 at night) with a licensed adult 21+ before the Probationary License. Driver education course required before permit is issued." },
    { icon: "🛣️", rule: "Left lane camping prohibited — slower traffic must keep right", detail: "625 ILCS 5/11-709 prohibits driving in the left lane of a multi-lane highway when not actively overtaking. Illinois State Police began active enforcement after 2016. Failure to keep right is a moving violation." },
    { icon: "👮", rule: "Fourth+ handheld phone violation = moving violation with points", detail: "Under Illinois's handheld ban (625 ILCS 5/12-610.2), the first three violations are civil fines only. But a fourth or subsequent violation becomes a moving violation that adds points to the driver's license — unlike most states where repeated phone violations remain civil infractions." },
  ],
  sampleQuestions: [
    {
      question: "What Illinois agency issues Class D driver's licenses, and who heads that agency?",
      options: [
        "Illinois Department of Transportation (IDOT) — headed by a Secretary of Transportation",
        "Illinois Department of Motor Vehicles (DMV) — headed by a Director",
        "Illinois Secretary of State (SOS) — a statewide elected constitutional officer",
        "Illinois State Police — handles all licensing in rural counties",
      ],
      correctIndex: 2,
      explanation:
        "Illinois driver's licenses are issued by the Illinois Secretary of State — an independently elected constitutional officer, not a director appointed by the governor. This makes Illinois one of the few states where driver licensing is not an executive agency function. The SOS operates Driver Services facilities throughout Illinois. Visit ilsos.net to find locations and schedule appointments. The SOS also handles vehicle title and registration.",
    },
    {
      question: "What is the minimum fine for violating Scott's Law (625 ILCS 5/11-907) in an active Illinois highway construction zone where workers are present?",
      options: [
        "$250",
        "$750",
        "$2,500",
        "$10,000",
      ],
      correctIndex: 3,
      explanation:
        "Scott's Law (625 ILCS 5/11-907) imposes escalating fines: $250 minimum for a first violation and $750 minimum for a second or subsequent violation on a normal roadway. But when a Scott's Law violation occurs in an active construction zone with workers present, the minimum fine jumps to $10,000. These construction-zone fines are among the highest in the U.S. for a Move Over violation. Scott's Law is named after Chicago firefighter Scott Gillen, killed at a crash scene in 2000.",
    },
    {
      question: "An Illinois teen driver with a Probationary License wants to drive home at 10:30 PM on a Friday. Is this allowed?",
      options: [
        "No — the curfew is 10 PM every night of the week",
        "Yes — the Friday/Saturday curfew is 11 PM, so 10:30 PM is permitted",
        "Yes — curfew only applies to drivers under 16",
        "No — the Friday curfew is 10:30 PM exactly",
      ],
      correctIndex: 1,
      explanation:
        "Illinois GDL rules include a specific weekend exception: Probationary License holders under 18 may not drive between 10 PM and 6 AM on Sunday through Thursday nights — but on Friday and Saturday nights, the curfew does not begin until 11 PM. So driving at 10:30 PM on a Friday is permitted. This one-hour weekend extension is a specific Illinois provision that is frequently tested precisely because most applicants assume a uniform 10 PM curfew applies every night.",
    },
    {
      question: "A 17-year-old Illinois driver wants to use Bluetooth to take a phone call while driving. Under 625 ILCS 5/12-610.2, this is:",
      options: [
        "Legal — Bluetooth is always permitted for all Illinois drivers",
        "Legal — only texting is prohibited for teens in Illinois",
        "Illegal — drivers under 19 may not use any electronic device while driving, including hands-free",
        "Legal — the hands-free ban applies only after a first texting violation",
      ],
      correctIndex: 2,
      explanation:
        "Illinois law (625 ILCS 5/12-610.2) bans ALL electronic device use for drivers under 19 — including Bluetooth hands-free calls. This is stricter than the adult rule, which permits hands-free calling. A 17-year-old using Bluetooth to answer a call while driving is in violation of Illinois law. The same ban applies to any hands-free device — earpiece, car speaker, voice command through a handheld device. The driver must be 19 or older to use hands-free calling.",
    },
    {
      question: "Under Illinois's zero-tolerance law for drivers under 21, at what BAC level does an underage driver violate Illinois DUI law?",
      options: [
        "0.02% — the same as Virginia's underage limit",
        "0.04% — half the adult threshold",
        "0.08% — the standard adult limit applies",
        "Any detectable trace of alcohol — truly zero tolerance",
      ],
      correctIndex: 3,
      explanation:
        "Illinois's zero-tolerance policy for drivers under 21 means exactly that: any trace of alcohol — not 0.02%, but any measurable amount at all — is a violation. Unlike states such as Virginia (0.02%) or Michigan (0.02%) that use a small numerical threshold, Illinois sets the under-21 bar at zero detectable alcohol. A first zero-tolerance violation results in a 3-month license suspension (6 months if the driver refuses testing). This is one of the strictest underage alcohol policies nationally.",
    },
    {
      question: "Scott's Law in Illinois requires that when a lane change away from a stationary emergency vehicle is NOT safely possible, drivers must slow to:",
      options: [
        "25 mph below the posted speed limit",
        "20 mph below the posted speed limit",
        "Half the posted speed limit",
        "A complete stop",
      ],
      correctIndex: 1,
      explanation:
        "Scott's Law (625 ILCS 5/11-907) specifies that when a lane change cannot safely be made, drivers must slow to a speed at least 20 mph below the posted limit — not 25 mph, not half the limit. At minimum, drivers must slow to 25 mph when the posted limit is 20 mph or lower. The 20-mph-below rule is a specific Illinois statutory threshold. Named for Scott Gillen, the law has been extended to cover highway maintenance and construction vehicles since 2017.",
    },
    {
      question: "Under Illinois GDL rules, how long must a teen under 18 hold an Instruction Permit before applying for a Probationary License?",
      options: [
        "3 months",
        "6 months",
        "9 months",
        "12 months",
      ],
      correctIndex: 2,
      explanation:
        "Illinois requires drivers under 18 to hold an Instruction Permit for a minimum of 9 months before applying for a Probationary License — one of the longer nationally mandated holding periods. During those 9 months, the teen must complete 50 hours of supervised driving (10 at night) with a licensed adult 21 or older. The driver education course must also be completed. After 9 months and 50 hours, the teen may apply for the Probationary License by passing a road skills test.",
    },
    {
      question: "Illinois's left-lane law (625 ILCS 5/11-709) prohibits a driver from:",
      options: [
        "Passing any vehicle on the left on a two-lane road",
        "Driving continuously in the left lane of a multi-lane highway when not actively overtaking slower traffic",
        "Using the left lane on toll roads",
        "Turning left from the right lane at intersections",
      ],
      correctIndex: 1,
      explanation:
        "Illinois law (625 ILCS 5/11-709) prohibits 'left lane camping' — driving continuously in the left (passing) lane of a multi-lane highway when not actively overtaking another vehicle. Slower traffic must keep right. Illinois State Police began actively ticketing left-lane-only drivers after 2016 as part of an enforcement campaign. This law applies on Illinois Interstates and state highways with two or more lanes in the same direction. Violations are moving infractions.",
    },
    {
      question: "What happens to an Illinois driver who accumulates a fourth or subsequent handheld phone violation under 625 ILCS 5/12-610.2?",
      options: [
        "The same $150 civil fine as the third violation — no escalation after the third",
        "Automatic 30-day license suspension",
        "The violation becomes a moving violation that adds demerit points to the license",
        "Criminal misdemeanor charge and mandatory court appearance",
      ],
      correctIndex: 2,
      explanation:
        "Under Illinois's handheld ban (625 ILCS 5/12-610.2), the first three violations are civil penalties only: $75, $100, and $125 respectively — they do not add points or appear as moving violations on the record. However, a fourth or subsequent violation is treated as a moving violation that adds demerit points to the driver's license. This escalation to a moving violation on the fourth offense is a distinctive Illinois feature that most other states' phone laws do not include.",
    },
    {
      question: "Illinois requires drivers to use headlights under what specific conditions?",
      options: [
        "Only after 9 PM and before sunrise",
        "Whenever visibility is reduced to less than 500 feet",
        "From 30 minutes after sunset to 30 minutes before sunrise, and whenever windshield wipers are in use for weather",
        "Only during rain, snow, or fog — not at night on well-lit city streets",
      ],
      correctIndex: 2,
      explanation:
        "Illinois law (625 ILCS 5/12-201) requires headlights from 30 minutes after sunset to 30 minutes before sunrise. Headlights are also required any time windshield wipers are in use due to weather conditions — rain, snow, sleet, or fog. This 'wipers on, headlights on' rule applies regardless of ambient light levels. Daytime running lights alone do not satisfy this requirement when wipers are running.",
    },
  ],
  faqs: [
    {
      question: "Why does Illinois use the Secretary of State for driver's licenses instead of a DMV?",
      answer:
        "Illinois's constitution assigns certain ministerial functions — including motor vehicle regulation and driver licensing — to independently elected constitutional officers rather than executive agencies. The Secretary of State has handled driver licensing since Illinois reorganized its government in the 1970s. This means the SOS, currently Alexi Giannoulias, is accountable directly to voters for licensing operations. Illinois is one of only a few states (including Michigan) where the SOS issues driver's licenses rather than a DMV or department of transportation.",
    },
    {
      question: "What makes Illinois's Scott's Law fine structure different — especially in construction zones?",
      answer:
        "Scott's Law (625 ILCS 5/11-907) has a three-tier fine structure. Standard violations: $250 minimum for a first offense; $750 minimum for a second or subsequent offense. Construction zone violations where workers are present: minimum $10,000 fine. These construction-zone fines are among the highest in the country for a Move Over violation. Scott's Law also extended in 2017 to cover highway maintenance and construction vehicles, not just traditional emergency vehicles. The law is named after Chicago firefighter Scott Gillen, killed at a crash scene in December 2000.",
    },
    {
      question: "What is Illinois's weekend GDL curfew exception and why is it tested on the exam?",
      answer:
        "Illinois Probationary License holders under 18 face a 10 PM to 6 AM nighttime driving curfew on Sunday through Thursday. But on Friday and Saturday nights, the curfew begins at 11 PM instead of 10 PM — a one-hour extension. This weekend exception is specifically tested on the Illinois knowledge exam because applicants commonly assume the curfew is uniform every night and are surprised by the Friday/Saturday distinction. After the first year of the Probationary License without serious violations, all GDL restrictions are lifted.",
    },
    {
      question: "What phone restrictions apply to Illinois drivers under age 19?",
      answer:
        "Illinois drivers under 19 are prohibited from using any electronic communication device while driving — including hands-free Bluetooth calls, earpieces, and speakerphone. This is stricter than the adult rule, which permits hands-free calling. The under-19 ban was designed to prevent any distraction, not just manual interaction. Adult drivers 19 and older may use hands-free devices but cannot hold any device while driving. A first offense for a teen driver carrying a $75 civil fine; the fine does not add license points for the first three offenses.",
    },
    {
      question: "What does Illinois's zero-tolerance law mean in practice for a driver under 21?",
      answer:
        "Illinois zero tolerance for drivers under 21 means any detectable trace of alcohol — not 0.02%, but literally any amount — is a violation. A first offense results in a 3-month statutory summary suspension; a second offense results in a 6-month suspension. If the driver refuses a breath test, the suspension doubles. Unlike states such as Virginia or Michigan that set a 0.02% underage threshold (acknowledging measurement error), Illinois makes no such concession — the standard is truly zero.",
    },
    {
      question: "How long must an Illinois teen hold an Instruction Permit, and what supervised driving is required?",
      answer:
        "Illinois requires teens under 18 to hold an Instruction Permit for a minimum of 9 months before applying for a Probationary License — one of the longer nationally mandated holding periods. During those 9 months, the teen must complete at least 50 hours of supervised driving with a licensed adult 21 or older in the vehicle, including at least 10 of those hours at night. Driver education (approved classroom and behind-the-wheel course) must be completed before the permit is issued.",
    },
    {
      question: "What is the handheld phone fine schedule for Illinois adult drivers?",
      answer:
        "Illinois fines for handheld electronic device use (625 ILCS 5/12-610.2): first offense $75; second offense $100; third offense $125; fourth and subsequent offenses $150. Critically, the first three violations are civil penalties only and do not add demerit points to the driver's license. Starting with the fourth violation, the offense becomes a moving violation that adds license points. This escalation to a point-bearing offense on the fourth violation is unique among Illinois's phone law provisions.",
    },
    {
      question: "Does Illinois have a mandatory driver education requirement for teen drivers?",
      answer:
        "Yes. All first-time drivers under 18 in Illinois must complete an approved driver education program — both classroom and behind-the-wheel components — before the Secretary of State will issue an Instruction Permit. The course must be taken through a state-approved provider (a public school program or licensed commercial driving school). Home schooling does not satisfy this requirement unless the provider holds SOS approval. After completing driver education, passing the knowledge and vision tests, and paying the application fee, the teen receives the Instruction Permit.",
    },
    {
      question: "What is Illinois's rule about left-lane driving on multi-lane highways?",
      answer:
        "Illinois law (625 ILCS 5/11-709) prohibits continuous left-lane driving when not actively passing another vehicle. Slower-moving vehicles must keep right on multi-lane highways. Illinois State Police began targeting 'left lane campers' with active enforcement after 2016. The law applies on Illinois Interstates and state highways with two or more lanes in the same direction. A left-lane violation is a moving infraction. Illinois Tollway sections (Tri-State I-294, I-88, I-90) are included in the enforcement area.",
    },
    {
      question: "When did Illinois enact its hands-free law and how early was that compared to other states?",
      answer:
        "Illinois enacted its comprehensive handheld ban (625 ILCS 5/12-610.2) effective July 1, 2014 — making it one of the earliest states to prohibit all handheld device use for all drivers, not just texting. At the time, most states had only texting bans. Illinois's 2014 law covered calls, texting, browsing, and any handheld device interaction. The under-19 total ban (including hands-free) went into effect at the same time. Illinois's early adoption is relevant to the knowledge test because the law's 2014 vintage means it predates many applicants' awareness of when such laws were enacted.",
    },
  ],
  relatedTests: [
    { label: "IL Motorcycle Test", href: "/illinois-motorcycle-practice-test" },
    { label: "IL CDL Test", href: "/illinois-cdl-practice-test" },
    { label: "CA Permit Test", href: "/california-dmv-practice-test" },
    { label: "TX Permit Test", href: "/texas-dmv-practice-test" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "View All States", href: "/states" },
  ],
};

export default function IllinoisDMVPage() {
  return <PracticeTestPage {...data} />;
}
