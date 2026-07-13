import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Nevada DMV Practice Test 2025 – Free DMV Knowledge Exam Prep",
  description: "Prepare for the Nevada DMV's adaptive knowledge test (20 correct to pass, 80%) covering Hoover Dam vehicle restrictions, US-50 Loneliest Road isolation, Las Vegas Strip pedestrian rules, open range laws, DUI thresholds, and Nevada's hands-free device ban. Free 2025 practice test.",
  alternates: { canonical: "https://caredmvprep.com/nevada-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/nevada-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Nevada",
  stateAbbr: "NV",
  testLabel: "DMV Practice Test",
  slug: "nevada-dmv-practice-test",
  headline: "Nevada DMV Practice Test 2025",
  intro: "The Nevada Department of Motor Vehicles administers an adaptive knowledge exam: a pool of up to 25 questions that stops early once you reach either 20 correct answers (an automatic pass, 80%) or 6 incorrect answers (an automatic fail). This practice test covers Nevada-specific laws including the Hoover Dam vehicle restrictions, US-50 'Loneliest Road' isolation, Las Vegas Strip pedestrian rules, 80 mph rural interstate speed limit, open range livestock laws, NRS 484B.165 handheld device ban, and DUI thresholds.",
  basedOn: "Nevada Department of Motor Vehicles Nevada Driver's Handbook",
  keyRules: [
    { icon: "🏗️", rule: "Hoover Dam – Commercial Vehicle Prohibition", detail: "Commercial vehicles are prohibited from crossing Hoover Dam on US-93. All commercial traffic must use the Mike O'Callaghan–Pat Tillman Memorial Bridge (the US-93 bypass) that opened in 2010. Personal vehicles may still cross the dam but must pass through a federal security checkpoint. Attempting to drive a commercial vehicle across the dam is prohibited." },
    { icon: "🛣️", rule: "US-50 'Loneliest Road in America'", detail: "US-50 crosses 287 miles of Nevada with minimal services. Gas stations may be 100+ miles apart on this route. Drivers should top off their fuel tank before entering US-50 stretches and carry emergency water and supplies. AAA once published a survival guide for drivers attempting the full Nevada US-50 crossing." },
    { icon: "📱", rule: "Handheld Device Ban – NRS 484B.165", detail: "Nevada banned handheld device use while driving under NRS 484B.165, enacted in 2011 — one of the earlier state bans in the nation. Drivers may not hold a phone or other device while operating a vehicle. Hands-free technology is permitted. Violations carry fines that increase for repeat offenses." },
    { icon: "🎰", rule: "Las Vegas Strip Pedestrian Rules", detail: "Las Vegas Boulevard (the Strip) has designated pedestrian crosswalk phases ('scramble' phases at major intersections where all pedestrian crossings go simultaneously and all vehicles are stopped). Elevated pedestrian bridges at some major Strip intersections eliminate at-grade crossings. Drivers on the Strip must be especially alert for pedestrians crossing at unexpected locations." },
    { icon: "🍺", rule: "DUI – 0.08% / 0.02% Under-21", detail: "Nevada uses DUI (Driving Under the Influence) terminology. The legal BAC limit is 0.08% for adults 21 and older. Drivers under 21 face a 0.02% BAC threshold. Nevada's Implied Consent law — NRS 484C.160 — requires submission to evidentiary testing when lawfully arrested for DUI. Refusal triggers automatic license revocation." },
    { icon: "🪪", rule: "Permit Age: 15½", detail: "Nevada allows residents to apply for a learner's permit at age 15½. Permit holders must drive with a supervising driver 21 or older in the front seat. Nevada's GDL program includes nighttime restrictions and passenger limitations for drivers under 18." },
    { icon: "🐄", rule: "Open Range – Rural Nevada", detail: "Most of rural Nevada is open range. Ranchers are not required to fence livestock off public roads. Cattle and horses on rural Nevada highways are common and represent a serious nighttime collision hazard. The driver is typically responsible when hitting open range livestock. This applies on US-50, US-93, US-95, and most Nevada rural highways." },
    { icon: "🏎️", rule: "80 MPH Rural Interstate", detail: "Nevada's rural interstate speed limit is 80 mph on I-80 and portions of I-15 and I-80. At this speed, following distances and braking distances increase substantially. Nevada's vast desert terrain can create heat mirages that make the road appear wet — this is an optical phenomenon, not actual water." },
  ],
  about: [
    "The Nevada Department of Motor Vehicles administers an adaptive knowledge exam — a pool of up to 25 multiple-choice questions, with 80% (20 correct) needed to pass. The test stops early once either outcome is decided: 20 correct answers ends it as a pass, or 6 incorrect answers ends it as a fail (since at most 19 of 25 could then be correct). Nevada's permit age is 15½ years old. Nevada's hands-free device ban under NRS 484B.165 has been in effect since 2011 — one of the earlier such laws in the nation. Nevada's unique geography, from the Las Vegas metropolitan area to the remote desert corridors of US-50 and US-93, creates a broad range of driving conditions that are all tested on the Nevada DMV exam.",
    "The most unusual Nevada driving fact tested on the DMV exam involves Hoover Dam on US-93. All commercial vehicles are prohibited from crossing Hoover Dam itself and must use the Mike O'Callaghan–Pat Tillman Memorial Bridge (the US-93 bypass) that spans the Colorado River downstream of the dam. Personal vehicles may cross the dam but must pass through a mandatory federal security checkpoint. US-50 through Nevada — the '287-mile Loneliest Road in America' — runs across the Great Basin with gas stations separated by 100 or more miles, tested as an example of remote road planning requirements.",
    "Nevada's 80 mph rural interstate speed limit applies on sections of I-80 and I-15 and is among the highest in the nation. Las Vegas Boulevard (the Strip) has unique pedestrian crosswalk rules including 'scramble' intersections where all vehicle movement stops simultaneously to allow pedestrians to cross in any direction. Nevada's open range laws apply throughout most of rural Nevada — livestock on highways is a significant nighttime hazard on US-50, US-93, US-95, and Nevada's secondary state routes. Nevada's DUI law (NRS 484C) uses DUI terminology with an 0.08% adult threshold and 0.02% for drivers under 21.",
  ],
  sampleQuestions: [
    {
      question: "Commercial vehicles traveling on US-93 between Arizona and Nevada must navigate around Hoover Dam. What is the required route for commercial vehicles?",
      options: ["Commercial vehicles may cross Hoover Dam at designated low-traffic hours", "Commercial vehicles must use the Mike O'Callaghan–Pat Tillman Memorial Bridge on the US-93 bypass — the dam itself is prohibited to commercial vehicles", "Commercial vehicles under 26,000 lbs may cross the dam without restriction", "Commercial vehicles must obtain a federal permit to cross Hoover Dam"],
      correctIndex: 1,
      explanation: "Commercial vehicles are prohibited from crossing Hoover Dam on US-93. All commercial traffic — regardless of size or weight — must use the Mike O'Callaghan–Pat Tillman Memorial Bridge, which opened in 2010 as the US-93 bypass over the Colorado River downstream of the dam. Personal vehicles may still cross the dam but must pass through a federal security checkpoint. This rule exists for national security reasons — Hoover Dam is a critical federal infrastructure facility. Commercial vehicle operators who attempt to cross the dam may be turned back or cited."
    },
    {
      question: "US-50 through Nevada is called the 'Loneliest Road in America.' What is the primary driving hazard this designation refers to?",
      options: ["US-50 has no speed limit in Nevada", "Gas stations and services may be 100+ miles apart on US-50 — driving without adequate fuel planning can leave drivers stranded in remote Nevada desert", "US-50 has no cell phone service due to military restrictions", "US-50 is unpaved for most of its Nevada crossing"],
      correctIndex: 1,
      explanation: "US-50 crosses approximately 287 miles of Nevada's Great Basin with very limited services. The AAA once published an actual survival guide for drivers attempting the full crossing because gas stations may be separated by over 100 miles — far beyond the range of many vehicles that start a segment with a partially empty tank. Drivers should top off the fuel tank before entering any US-50 segment, carry emergency water and food supplies, and be aware that cell phone coverage is absent on most of the route. Breakdowns or fuel depletion can leave a driver stranded in extreme desert heat for hours."
    },
    {
      question: "Nevada's handheld device ban under NRS 484B.165 prohibits which activity while driving?",
      options: ["Using any electronic device in a vehicle, including hands-free", "Holding a phone or other handheld electronic device while operating a vehicle", "Playing music through the vehicle's speaker system", "Using a GPS navigation device mounted to the dashboard"],
      correctIndex: 1,
      explanation: "NRS 484B.165, enacted in 2011, prohibits Nevada drivers from holding a handheld electronic device (including smartphones, tablets, and similar devices) while operating a motor vehicle. Hands-free use — Bluetooth, mounted dashboard devices, voice commands — remains legal. The law applies to all Nevada public roads. Fines increase for repeat violations. Nevada was one of the earlier states to enact such a ban, and the specific statute number (NRS 484B.165) may be referenced on the Nevada DMV knowledge exam."
    },
    {
      question: "At a 'scramble' pedestrian intersection on Las Vegas Boulevard (the Strip), what happens to vehicle traffic during the pedestrian phase?",
      options: ["Vehicles may make right turns on red during the pedestrian scramble phase", "All vehicle movements in all directions are stopped — pedestrians may cross in any direction including diagonally", "Pedestrians share the crossing phase with right-turn vehicles", "Scramble phases only apply to pedestrians crossing north-south"],
      correctIndex: 1,
      explanation: "At 'scramble' or 'Barnes dance' pedestrian intersections on Las Vegas Boulevard and other high-pedestrian locations, all vehicle movements — including turns — stop during the pedestrian phase. Pedestrians may then cross in any direction, including diagonally across the intersection. This design accommodates the extremely high pedestrian volumes on the Strip and reduces pedestrian-vehicle conflicts at the busiest intersections. Drivers at these intersections must wait for the pedestrian phase to complete before any vehicle movement is permitted, even right turns."
    },
    {
      question: "What is the posted speed limit on rural sections of I-80 in Nevada?",
      options: ["65 mph", "70 mph", "75 mph", "80 mph"],
      correctIndex: 3,
      explanation: "Nevada's rural interstate speed limit is 80 mph on I-80 and other designated rural interstate sections — tied for the highest legal speed limit in the United States. At 80 mph, following distances and braking distances for passenger vehicles increase substantially compared to lower speed limits. Nevada's desert terrain creates additional visibility challenges including heat mirages (which appear as reflective patches on the road but are optical illusions, not water) and crosswinds that can affect vehicle stability. Nevada's 'reasonable and prudent' standard requires speed reduction when actual conditions make the posted limit dangerous."
    },
    {
      question: "Nevada's permit age is 15½. A 15½-year-old Nevada resident wants to apply for a learner's permit. What must they do first?",
      options: ["Pass the road skills test and then apply for the permit", "Pass the Nevada DMV knowledge exam and vision test", "Have a parent sign a waiver allowing early permit issuance", "Complete an approved driver education course before taking the knowledge exam"],
      correctIndex: 1,
      explanation: "To obtain a Nevada learner's permit at age 15½, the applicant must first pass the Nevada DMV knowledge exam (an adaptive test — up to 25 questions, 80% passing score, stopping early at 20 correct or 6 incorrect) and a vision screening test. A parent or guardian must also provide consent for minor applicants. After obtaining the permit, the holder must drive exclusively with a licensed supervising adult (21 or older, with at least one year of licensed driving experience) in the front passenger seat. Nevada's GDL program then progresses through nighttime restriction and passenger restriction phases before full license eligibility."
    },
    {
      question: "A Nevada driver on a rural US-93 highway strikes a horse standing in the road at night. The road is in open range territory. Who is typically legally responsible?",
      options: ["The horse owner, for failing to contain the horse", "The driver, because Nevada's open range law does not require ranchers to fence livestock off public roads", "Both parties are equally liable in Nevada", "No one — Nevada classifies open range livestock collisions as unavoidable accidents"],
      correctIndex: 1,
      explanation: "Nevada's open range laws, which apply throughout most of rural Nevada, do not require ranchers and livestock owners to fence animals off public roads. When a driver strikes livestock (horses, cattle, or other animals) on an open range road, the driver typically bears legal responsibility for damage to the animal. This is directly tested on the Nevada DMV exam because US-50, US-93, US-95, and Nevada's secondary state routes all pass through open range territory where livestock encounters — particularly at night — are possible. Dark-colored horses and cattle are nearly invisible in desert darkness."
    },
    {
      question: "Nevada's DUI law uses what BAC threshold for drivers under 21?",
      options: ["0.08%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation: "Nevada's DUI law sets a 0.02% BAC threshold for drivers under 21 — a near-zero-tolerance standard. For practical purposes, any meaningful alcohol consumption before driving can trigger a DUI violation for a driver under 21. Nevada uses DUI (Driving Under the Influence) terminology. Nevada's Implied Consent law (NRS 484C.160) requires submission to evidentiary chemical testing when lawfully arrested for DUI — refusal triggers automatic license revocation. Under-21 DUI penalties include license suspension, fines, and mandatory alcohol education programs."
    },
    {
      question: "What should a Nevada driver do when encountering a heat mirage on a Nevada desert highway at 80 mph?",
      options: ["Slow down — the mirage indicates that the road is actually wet and slippery", "Continue at normal speed — a heat mirage is an optical illusion caused by light refraction in hot air near the road surface, not actual water on the road", "Pull over — the mirage indicates that pavement failure is occurring", "Flash headlights to warn oncoming traffic of the wet road"],
      correctIndex: 1,
      explanation: "Heat mirages are optical phenomena common on Nevada desert highways, where the road surface appears to have reflective water or wet sections. This is caused by light refracting through the extremely hot air immediately above the hot road surface — it creates a reflection effect that resembles water. The road surface is actually dry. Slowing down for a heat mirage is unnecessary. However, Nevada drivers should be alert to actual road surface hazards common on desert highways: sand and gravel blown onto the road, asphalt softening in extreme heat, and heat-related tire pressure changes."
    },
    {
      question: "Nevada's Implied Consent law (NRS 484C.160) requires a driver to submit to chemical testing when lawfully arrested for DUI. What is the consequence of refusing?",
      options: ["Refusal means no chemical evidence can be gathered, so the DUI charge is typically dismissed", "Refusal triggers automatic license revocation, which may be longer than the suspension for a DUI conviction", "Refusal is not allowed — Nevada law authorizes officers to conduct a blood draw without consent in all cases", "Refusal results in a $250 fine but no license action"],
      correctIndex: 1,
      explanation: "Nevada's Implied Consent law (NRS 484C.160) means that any driver operating a vehicle on Nevada roads has implicitly agreed to chemical testing when lawfully arrested for DUI. Refusing the test triggers automatic license revocation — which may extend longer than the revocation resulting from a DUI conviction — and the refusal itself is admissible as evidence of consciousness of guilt in a subsequent DUI trial. Nevada law also allows officers to obtain a warrant for a blood draw if a driver refuses, so refusal does not guarantee that no chemical evidence is gathered."
    },
  ],
  faqs: [
    {
      question: "How does Nevada's DMV knowledge test actually work?",
      answer: "Nevada's knowledge test is adaptive, not a fixed-length exam: it draws from a pool of up to 25 multiple-choice questions and stops as soon as the outcome is decided. Reach 20 correct answers and the test ends immediately as a pass (80%); reach 6 incorrect answers and it ends immediately as a fail, since at most 19 of the 25 questions could then be answered correctly. This means most test-takers won't see all 25 questions — the exact number depends on how quickly you build up correct or incorrect answers. The test is available online via KnowToDrive Nevada in English and Spanish."
    },
    {
      question: "Can personal vehicles cross Hoover Dam?",
      answer: "Yes, personal (non-commercial) vehicles may still cross Hoover Dam on US-93. However, all vehicles crossing the dam must pass through a mandatory federal security checkpoint operated by the Bureau of Reclamation and federal security contractors. Drivers should expect delays at the checkpoint, particularly during peak tourist season. Commercial vehicles of any size are prohibited from crossing the dam and must use the Mike O'Callaghan–Pat Tillman Memorial Bridge on the US-93 bypass, which opened in 2010. The bridge spans the Colorado River approximately 1,500 feet downstream of the dam at an elevation of approximately 840 feet above the Colorado River."
    },
    {
      question: "What is US-50 through Nevada and why is it called the 'Loneliest Road'?",
      answer: "US-50 crosses approximately 287 miles of central Nevada through the Great Basin Desert — a stretch that AAA called 'The Loneliest Road in America' in a 1986 article, noting the absence of services and questioning why any tourist would drive it. The name stuck and Nevada eventually embraced it as a tourism marketing tool, even issuing 'Loneliest Road' survival guides and passport stamps at towns along the route. For DMV purposes, the relevant facts are the extreme isolation (gas stations 100+ miles apart), absence of cell coverage, and the need for emergency supply planning — particularly water, as desert breakdowns without water can become life-threatening in summer heat."
    },
    {
      question: "What are Nevada's Las Vegas Strip pedestrian crossing rules?",
      answer: "Las Vegas Boulevard South (the Strip) is one of the highest-pedestrian-volume corridors in the United States, handling tens of thousands of pedestrians daily at major casino intersections. Nevada pedestrian law requires drivers to yield to pedestrians in crosswalks, and traffic signals control pedestrian crossings on the Strip. At select major intersections, 'scramble' or 'Barnes dance' pedestrian phases stop all vehicle traffic simultaneously and allow pedestrians to cross in any direction, including diagonally. Elevated pedestrian walkways at some major Strip intersections eliminate at-grade crossings entirely. Drivers on Las Vegas Boulevard must be particularly alert for pedestrians who may cross mid-block in tourist areas."
    },
    {
      question: "What is Nevada's DUI law for adults and drivers under 21?",
      answer: "Nevada uses DUI (Driving Under the Influence) terminology under NRS 484C. The adult BAC threshold is 0.08% for drivers 21 and older. Drivers under 21 face a 0.02% BAC threshold — effectively a near-zero-tolerance standard. Nevada's Implied Consent law (NRS 484C.160) requires submission to chemical testing when lawfully arrested for DUI, with refusal triggering automatic license revocation. First-offense adult DUI penalties include license revocation, fines, mandatory DUI school, and possible jail time. Nevada also has enhanced DUI penalties for BAC of 0.10% or higher or for repeat offenses."
    },
    {
      question: "What is Nevada's hands-free device law?",
      answer: "Nevada enacted its handheld device ban under NRS 484B.165 in 2011 — one of the earlier state-level bans in the United States. The law prohibits drivers from holding a cell phone or other handheld electronic device while operating a motor vehicle on Nevada public roads. Hands-free alternatives — Bluetooth, dashboard-mounted GPS or phone holders with voice command — are legal. Fines for violations start at $50 for a first offense and increase for subsequent offenses within specified time periods. The law is a primary offense, meaning officers can stop drivers solely for violating it."
    },
    {
      question: "What open range livestock hazards should Nevada drivers know about?",
      answer: "Most of rural Nevada — including the vast stretches of US-50, US-93, US-95, and Nevada's secondary state routes — operates under open range laws that do not require ranchers to fence cattle, horses, burros, or other livestock off public roads. Livestock on rural Nevada highways is a real and significant nighttime hazard, particularly on dark desert roads where animals are nearly invisible against the dark pavement. When a driver strikes open range livestock, Nevada law typically places responsibility on the driver. Cattle and horses on the road may also create secondary accident hazards when other drivers swerve to avoid them. Nevada drivers on rural roads should reduce speed at night and scan road margins with high beams."
    },
    {
      question: "What is the speed limit on Nevada rural interstates?",
      answer: "Nevada's rural interstate speed limit is 80 mph on I-80 (and portions of other rural interstate sections) — tied for the highest in the United States. Urban and suburban interstate sections have lower posted limits. At 80 mph, following distances must be substantially increased and braking distances are much longer than at 65–70 mph. Nevada desert driving at 80 mph presents additional hazards including strong crosswinds (particularly through mountain passes and near valleys), heat mirages (optical illusions that do not indicate wet roads), sudden haboob-type dust conditions in areas near agricultural or disturbed land, and tire pressure changes from extreme ambient temperatures."
    },
    {
      question: "What is Nevada's permit age and GDL structure?",
      answer: "Nevada residents may apply for a learner's permit at age 15½. To obtain the permit, applicants must pass the Nevada DMV's adaptive knowledge exam (up to 25 questions, 80% to pass, stopping early at 20 correct or 6 incorrect), pass a vision test, and have a parent or guardian's written consent. Permit holders must drive with a licensed adult supervisor 21 or older, with at least one year of licensed driving experience, in the front passenger seat at all times. Applicants under 18 must hold the instruction permit at least 6 months before applying for a license. New 16-/17-year-old licensees may not carry passengers under 18 (except immediate family) for their first 6 months of licensure, and a minor may not drive between 10 PM and 5 AM (except when traveling to or from a scheduled event) until turning 18, regardless of when the license was issued."
    },
    {
      question: "What road signs unique to Nevada are tested on the DMV exam?",
      answer: "The Nevada DMV knowledge exam tests standard national sign conventions and Nevada-specific signs. Unique or specifically relevant signs for Nevada include: open range/stock crossing warning signs on rural highways (yellow diamond shape), Hoover Dam security checkpoint signs on US-93, US-50 remote highway signs advising of limited services ahead, Las Vegas metro pedestrian crossing signal types, and desert driving warning signs (extreme heat, no services ahead, dust storm risk). The exam also tests standard sign shapes and colors: yellow diamond for warnings, red octagon for stop, white rectangle for regulatory signs, and green rectangle for guide signs — all applied to Nevada road contexts."
    },
    {
      question: "What emergency supplies should Nevada drivers carry for desert driving?",
      answer: "Nevada's desert environment — particularly in summer when ambient temperatures exceed 115°F in some areas — creates life-threatening risks for drivers who experience vehicle breakdowns far from services. The Nevada DMV handbook recommends that drivers on remote Nevada routes (US-50, US-93, US-95, and similar) carry: at least one gallon of water per person per day for desert emergencies, a first aid kit, a flashlight with extra batteries, blankets or warm clothing for cold desert nights (desert temperatures can drop dramatically after sunset), jumper cables or a jump starter, basic tools, a reflective triangle or flares, and nonperishable food. Cell service is unavailable on much of rural Nevada, so physical emergency supplies are not optional for remote route travelers."
    },
  ],
  relatedTests: [
    { label: "Nevada Motorcycle Practice Test", href: "/nevada-motorcycle-practice-test" },
    { label: "Nevada CDL Practice Test", href: "/nevada-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NevadaDMVPage() {
  return <PracticeTestPage {...data} />;
}
