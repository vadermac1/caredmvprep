import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Alaska Motorcycle Practice Test 2025 – Free AK Endorsement Exam Prep",
  description:
    "Free Alaska motorcycle practice test. Covers universal helmet law (all ages required, AS § 28.35.240), eye protection, lane splitting ban, MSF course waiver of skills test, DUI 0.08% adult / absolute sobriety under-21, moose hazards, gravel roads, cold weather riding, and group riding. 25Q, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/alaska-motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/alaska-motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Alaska",
  stateAbbr: "AK",
  testLabel: "Motorcycle Practice Test",
  slug: "alaska-motorcycle-practice-test",
  headline: "Alaska Motorcycle Practice Test 2025",
  intro:
    "The Alaska Division of Motor Vehicles requires all motorcycle endorsement applicants to pass a 25-question knowledge test, earning at least 20 correct answers (80%). The test can be taken at an Alaska DMV office or online at ak.knowtodrive.com. This free practice test is built from verified Alaska Statutes and MSF curriculum — covering Alaska's universal helmet law (all ages required), the eye protection requirement, the lane-splitting ban, MSF course skills-test waiver, DUI thresholds, countersteering, braking technique, lane positioning, group riding, and Alaska-specific hazards including moose, gravel roads, and extreme cold.",
  basedOn: "Alaska Statutes Title 28 / Alaska Division of Motor Vehicles / MSF Basic RiderCourse",
  keyRules: [
    {
      icon: "🪖",
      rule: "Helmet: Required for ALL Riders and Passengers — No Age Exception (AS § 28.35.240)",
      detail:
        "Alaska's universal helmet law under AS § 28.35.240 requires all motorcycle operators and passengers to wear a properly fitting helmet that meets Federal Motor Vehicle Safety Standard (FMVSS) 218 — regardless of age or experience. Look for the DOT sticker on the back of the helmet. Novelty helmets without the DOT sticker do not satisfy the law. Alaska has no age exception, no experience waiver, and no financial hardship exemption.",
    },
    {
      icon: "👓",
      rule: "Eye Protection Required Unless Motorcycle Has a Windshield",
      detail:
        "All Alaska motorcycle operators and passengers must wear approved eye protection — goggles, safety glasses, or a face shield — unless the motorcycle is equipped with a windshield that adequately protects the rider's eyes. Wind, insects, and road debris at highway speeds cause eye injuries and dangerous vision impairment. This requirement applies in addition to the helmet law.",
    },
    {
      icon: "🚫",
      rule: "Lane Splitting Illegal — Motorcycles Must Occupy a Full Lane",
      detail:
        "Lane splitting (riding between lanes of traffic) is illegal in Alaska. Motorcyclists are entitled to the full use of a traffic lane and must not ride between rows of vehicles or between a vehicle and the road edge. No more than two motorcycles may ride side by side in a single lane. Alaska has no lane filtering exception.",
    },
    {
      icon: "🎓",
      rule: "MSF BRC Waives Skills Test Only — Knowledge Test Still Required",
      detail:
        "Completing the MSF Basic RiderCourse (BRC) or an approved state-equivalent course waives the motorcycle road skills test in Alaska. However, all applicants must still pass the 25-question written knowledge test at an Alaska DMV office or through ak.knowtodrive.com. Bring your MSF completion card when applying for the endorsement.",
    },
    {
      icon: "🍺",
      rule: "DUI: Adult 0.08%; Under-21 Absolute Sobriety — Same Law Applies to Motorcyclists",
      detail:
        "AS § 28.35.030 applies equally to motorcycle riders. The adult per se DUI threshold is 0.08% BAC; under-21 riders must maintain absolute sobriety — any detectable amount of alcohol. Alcohol severely impairs the balance, throttle control, and braking precision that motorcycle riding demands. A first implied consent refusal triggers a 90-day license revocation.",
    },
    {
      icon: "🦌",
      rule: "Moose — Most Dangerous Wildlife Hazard for Alaska Motorcyclists",
      detail:
        "Moose weigh 800–1,500 lbs and stand 5–7 feet at the shoulder — at windshield and rider height. A moose collision at any speed is typically fatal for a motorcycle rider. When a moose is on the road, stop at a safe distance and wait. Never try to pass or startle a moose — they are unpredictable and may charge. Moose are most active at dawn and dusk on Alaska's remote highways.",
    },
    {
      icon: "🔄",
      rule: "Countersteering: Push Left to Go Left at Speed (Above ~12 mph)",
      detail:
        "Above approximately 12 mph, initiating a turn requires countersteering: push forward on the handlebar on the side you want to turn. Push left bar to go left; push right bar to go right. This technique is the primary cornering method on a motorcycle and must become automatic for safe high-speed riding on Alaska's highways.",
    },
    {
      icon: "🛑",
      rule: "Braking: Use Both Front and Rear Brakes — Front Provides ~70% of Stopping Force",
      detail:
        "Maximum stopping power requires applying both front and rear brakes simultaneously and progressively. The front brake provides approximately 70% of total stopping force. Never lock either wheel — a locked front wheel causes immediate loss of directional control. On Alaska's gravel roads and icy surfaces, brake earlier and more gently than on dry pavement.",
    },
  ],
  about: [
    "Alaska's motorcycle endorsement process requires passing a 25-question knowledge test with a score of at least 80% (20 out of 25 correct). Applicants who complete the MSF Basic RiderCourse (BRC) or an approved equivalent receive a waiver for the road skills test — but the knowledge test is still required regardless of MSF completion. The test can be taken at any Alaska DMV office or online through ak.knowtodrive.com, which is especially important given Alaska's large geography and the distance many residents live from DMV facilities. Bring your MSF course completion card when applying for the endorsement.",
    "Alaska has two motorcycle-specific equipment laws that are among the strictest in the nation. AS § 28.35.240 establishes Alaska's universal helmet law: all motorcycle operators and passengers — regardless of age, experience, or license status — must wear a DOT-approved helmet (FMVSS 218 standard). The DOT sticker on the back of the helmet confirms compliance — novelty helmets without this sticker do not meet the legal standard. Alaska also requires riders to wear approved eye protection unless the motorcycle has a windshield. Lane splitting is illegal in Alaska — motorcyclists must occupy a full traffic lane, and no more than two motorcycles may ride side by side in a single lane. These laws are all commonly tested on the knowledge exam.",
    "Safe motorcycle operation on Alaska's roads requires preparation for hazards that are unique to the state. Moose-vehicle collisions are a leading cause of motorcycle fatalities in Alaska — always scan for moose at dawn, dusk, and on heavily forested roads, and stop at a safe distance if a moose is present. Gravel roads and gravel spread onto paved surfaces near road transitions require significantly reduced speed and minimal lean angle. Cold temperatures can appear suddenly even in summer at elevation — hypothermia reduces dexterity and control. On any remote Alaska highway, carry extra fuel, a tire repair kit, warm layers, and a satellite communicator, as cell service is absent on many routes. These conditions are reflected in the motorcycle knowledge test questions.",
  ],
  sampleQuestions: [
    {
      question: "Who is required by AS § 28.35.240 to wear a helmet when operating or riding a motorcycle in Alaska?",
      options: [
        "Only riders and passengers under 18",
        "Only riders and passengers under 21",
        "All motorcycle operators and passengers regardless of age",
        "No one — helmet use is entirely voluntary in Alaska",
      ],
      correctIndex: 2,
      explanation:
        "AS § 28.35.240 establishes Alaska's universal helmet law — all motorcycle operators and passengers must wear a DOT-approved helmet (FMVSS 218 standard) regardless of age or experience. There are no age exceptions in Alaska. Look for the DOT sticker on the back of the helmet to confirm it meets the standard.",
    },
    {
      question: "What eye protection requirement applies to Alaska motorcycle riders without a windshield?",
      options: [
        "No eye protection is required at any time in Alaska",
        "Eye protection is required only at speeds above 45 mph",
        "Approved eye protection is required unless the motorcycle has a windshield",
        "Eye protection is recommended but not legally required in Alaska",
      ],
      correctIndex: 2,
      explanation:
        "Alaska requires motorcycle operators and passengers to wear approved protective eyewear — goggles, glasses, or a face shield — unless the motorcycle is equipped with a windshield. Wind, insects, and road debris at highway speeds can cause dangerous vision impairment, especially on Alaska's long, remote highways.",
    },
    {
      question: "Is lane splitting legal for motorcycle riders in Alaska?",
      options: [
        "Yes — at speeds under 15 mph in stopped traffic",
        "Yes — always legal on multi-lane roads",
        "No — lane splitting is illegal in Alaska",
        "Yes — on highways with speed limits above 55 mph",
      ],
      correctIndex: 2,
      explanation:
        "Lane splitting is illegal in Alaska. Motorcyclists must occupy a full traffic lane and may not ride between rows of vehicles or between a vehicle and the road edge. No more than two motorcycles may ride side by side within a single lane. Alaska has no lane filtering exception.",
    },
    {
      question: "In Alaska, completing the MSF Basic RiderCourse waives which portion of the endorsement requirement?",
      options: [
        "Both the knowledge test and the road skills test",
        "Only the road skills test — the knowledge test must still be passed",
        "Only the knowledge test — the skills test must still be taken",
        "Neither — the MSF course only provides a fee discount",
      ],
      correctIndex: 1,
      explanation:
        "In Alaska, completing the MSF BRC waives the motorcycle road skills test only. The written knowledge test (25 questions, 80% passing score) must still be passed at a DMV office or online at ak.knowtodrive.com. Bring the MSF course completion card when applying for the endorsement.",
    },
    {
      question: "What is the correct braking technique to stop a motorcycle in the shortest distance on a dry Alaska road?",
      options: [
        "Use only the rear brake to avoid flipping the motorcycle",
        "Apply only the front brake — it provides most of the stopping force",
        "Apply both front and rear brakes simultaneously and progressively",
        "Release the throttle and downshift to engine-brake only",
      ],
      correctIndex: 2,
      explanation:
        "Maximum stopping power requires applying both front and rear brakes simultaneously and progressively. The front brake provides approximately 70% of stopping force. Using both brakes without locking either wheel produces the shortest stopping distance. Never lock the front wheel — it causes immediate loss of directional control.",
    },
    {
      question: "What is countersteering on a motorcycle and when is it used?",
      options: [
        "Steering into a skid — used in parking lots below 10 mph",
        "Using the rear brake only to steer around corners",
        "Applying opposite-direction handlebar pressure to initiate turns above approximately 12 mph",
        "Leaning the body away from a turn to maintain balance",
      ],
      correctIndex: 2,
      explanation:
        "Countersteering means pushing forward on the handlebar on the side you want to turn: push left to go left, push right to go right. This technique is effective above approximately 12 mph and is the primary method for initiating turns on a motorcycle at road speeds on Alaska's highways.",
    },
    {
      question: "What is the adult DUI BAC threshold for motorcycle riders in Alaska?",
      options: ["0.04%", "0.10%", "0.06%", "0.08%"],
      correctIndex: 3,
      explanation:
        "AS § 28.35.030 applies equally to motorcycle riders. The adult per se DUI threshold is 0.08% BAC. Under-21 riders face absolute sobriety — any detectable amount of alcohol. Alcohol impairs the balance, coordination, and precise clutch and brake control that motorcycle riders depend on.",
    },
    {
      question: "What is the safest response when an Alaska motorcycle rider sees a moose on the road ahead?",
      options: [
        "Accelerate and swerve around the moose",
        "Honk and flash headlights to move the moose",
        "Slow down and stop at a safe distance — wait for the moose to leave",
        "Lane split to pass the moose on the shoulder",
      ],
      correctIndex: 2,
      explanation:
        "Moose are the most dangerous wildlife hazard for Alaska motorcyclists. At 800–1,500 lbs at rider height, a moose collision is typically fatal for a motorcycle rider. Stop at a safe distance and wait. Never try to pass or startle a moose — they may charge unpredictably.",
    },
    {
      question: "In what formation should a group of motorcycles travel on an Alaska highway?",
      options: [
        "Single file with 1-second gaps",
        "Side by side in pairs with 1-second gaps between pairs",
        "Staggered formation with 2-second gaps within the group",
        "Staggered formation with 1-second gaps",
      ],
      correctIndex: 2,
      explanation:
        "Groups should ride in staggered formation: the leader in the left third, the next rider in the right third, and so on. Each rider maintains at least a 2-second following distance from the rider directly ahead. Staggered formation keeps the group compact while giving each rider space to react to hazards.",
    },
    {
      question: "How should an Alaska motorcycle rider navigate a gravel patch on a paved road in a curve?",
      options: [
        "Apply the front brake firmly to stop before reaching the gravel",
        "Lean deeper into the curve to clear the gravel quickly",
        "Reduce lean angle, slow before entering the gravel, and ride as upright as possible through it",
        "Accelerate through the gravel to minimize contact time",
      ],
      correctIndex: 2,
      explanation:
        "Gravel on paved roads is a major Alaska motorcycle hazard. Gravel dramatically reduces traction, especially in corners. The safest approach: reduce lean angle to lower cornering traction demands, slow down before entering the gravel if possible, and ride as upright as practical through the patch. Avoid sudden braking or turning on gravel.",
    },
  ],
  faqs: [
    {
      question: "Who must wear a helmet when riding a motorcycle in Alaska?",
      answer:
        "AS § 28.35.240 requires ALL motorcycle operators and passengers to wear a DOT-approved helmet (FMVSS 218 standard), regardless of age or experience. Alaska has a universal helmet law with no age exception, no experience waiver, and no financial hardship exemption. Look for the DOT sticker on the back of the helmet — novelty helmets without the sticker do not satisfy the law.",
    },
    {
      question: "What eye protection is required for Alaska motorcycle riders?",
      answer:
        "Alaska requires motorcycle operators and passengers to wear approved protective eyewear — goggles, safety glasses, or a face shield — unless the motorcycle is equipped with a windshield that adequately protects the rider's eyes. Eye protection prevents wind, insects, and road debris from impairing vision at highway speeds. This requirement is in addition to the helmet law.",
    },
    {
      question: "Does the MSF Basic RiderCourse waive both tests in Alaska?",
      answer:
        "No. In Alaska, completing the MSF Basic RiderCourse (BRC) or an approved state-equivalent waives the motorcycle road skills test only. Applicants must still pass the written knowledge test (25 questions, 80% passing score) at a DMV office or through ak.knowtodrive.com. Bring your MSF course completion card when applying.",
    },
    {
      question: "Is lane splitting legal in Alaska?",
      answer:
        "No. Lane splitting (riding between lanes of traffic) is illegal in Alaska. Motorcyclists must occupy a full traffic lane. No more than two motorcycles may ride side by side within a single lane. Alaska does not have a lane filtering exception.",
    },
    {
      question: "What is the DUI BAC limit for motorcycle riders in Alaska?",
      answer:
        "The same DUI thresholds that apply to car drivers apply to motorcycle riders under AS § 28.35.030. The adult per se threshold is 0.08% BAC. Riders under 21 face absolute sobriety — any detectable amount of alcohol. A BAC of 0.16% or more triggers aggravated DUI. A first implied consent refusal results in a 90-day license revocation.",
    },
    {
      question: "What is the Alaska motorcycle knowledge test format and passing score?",
      answer:
        "The Alaska motorcycle endorsement knowledge test consists of 25 multiple-choice questions. Applicants must correctly answer at least 20 questions (80%) to pass. The test is available at Alaska DMV offices or online at ak.knowtodrive.com. It covers Alaska-specific laws, MSF riding techniques, protective gear, and hazard avoidance.",
    },
    {
      question: "What is countersteering and why is it important for Alaska riders?",
      answer:
        "Countersteering is the primary technique for initiating turns on a motorcycle at speeds above approximately 12 mph. To turn left, push forward on the left handlebar; to turn right, push forward on the right handlebar. On Alaska's remote highways and mountain curves, countersteering must be an automatic response for safe, controlled cornering.",
    },
    {
      question: "How should Alaska motorcycle riders handle moose on the road?",
      answer:
        "Slow down immediately and stop at a safe distance — do not attempt to pass or drive around a moose. Moose weigh 800–1,500 lbs, stand at rider height, and are unpredictable — they may charge if startled. Wait for the moose to leave the roadway on its own. A moose collision at any speed is typically fatal for a motorcyclist.",
    },
    {
      question: "What gravel road precautions should Alaska motorcycle riders take?",
      answer:
        "Alaska has extensive gravel roads and gravel frequently spreads onto paved surfaces near road transitions. On gravel: reduce speed significantly, reduce lean angle in corners, avoid sudden braking or steering, and be prepared for dramatically reduced traction. Many Alaska paved roads end or transition to gravel without warning — watch for transition signs and slow down before the surface changes.",
    },
    {
      question: "What cold weather gear do Alaska motorcycle riders need?",
      answer:
        "Alaska's weather is highly variable and can drop to near-freezing even in summer, especially at elevation or in mountain passes. Hypothermia reduces dexterity and impairs clutch and brake control. Alaska motorcycle riders should wear insulated, layered gear year-round, carry additional warm layers, and use heated grips or vests for longer rides. Never underestimate how quickly weather can change on an Alaska highway.",
    },
  ],
  relatedTests: [
    { label: "Alaska DMV Practice Test", href: "/alaska-dmv-practice-test" },
    { label: "Alaska CDL Practice Test", href: "/alaska-cdl-practice-test" },
    { label: "North Dakota Motorcycle Practice Test", href: "/north-dakota-motorcycle-practice-test" },
    { label: "Montana Motorcycle Practice Test", href: "/montana-motorcycle-practice-test" },
    { label: "DMV Practice Test", href: "/dmv-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function AlaskaMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
