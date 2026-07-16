import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Dakota Motorcycle Practice Test 2025 – Free ND Endorsement Exam Prep",
  description:
    "Free North Dakota motorcycle practice test. Covers helmet law (under-18 required, NDCC § 39-21-48), eye protection, lane splitting ban, MSF course waiver of skills test, DUI 0.08% / under-21 0.02%, countersteering, wet-road hazards, and group riding. 25Q, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/north-dakota-motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/north-dakota-motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "North Dakota",
  stateAbbr: "ND",
  testLabel: "Motorcycle Practice Test",
  slug: "north-dakota-motorcycle-practice-test",
  headline: "North Dakota Motorcycle Practice Test 2025",
  intro:
    "The North Dakota Department of Transportation requires all motorcycle endorsement applicants to pass a 25-question knowledge test at a driver license office, earning at least 20 correct answers (80%). This free practice test is built from verified NDCC statutes and MSF curriculum — covering North Dakota helmet and eye protection laws, the lane-splitting ban, the MSF course skills-test waiver, DUI thresholds, countersteering, braking technique, lane positioning, group riding, and wet-road hazards specific to North Dakota's roads.",
  basedOn: "North Dakota Century Code (NDCC) / North Dakota DOT / MSF Basic RiderCourse",
  keyRules: [
    {
      icon: "🪖",
      rule: "Helmet: Required for Riders and Passengers Under 18 (NDCC § 39-21-48)",
      detail:
        "North Dakota law requires all motorcycle operators and passengers under 18 years old to wear a helmet that meets Federal Motor Vehicle Safety Standard (FMVSS) 218. Look for the DOT sticker on the back of the helmet. Riders and passengers 18 and older may legally ride without a helmet, but helmet use is strongly recommended by safety experts for all ages.",
    },
    {
      icon: "👓",
      rule: "Eye Protection Required Unless Motorcycle Has a Windshield (NDCC § 39-21-48.1)",
      detail:
        "All North Dakota motorcycle operators and passengers must wear approved eye protection — goggles, glasses, or a face shield — unless the motorcycle is equipped with a windshield. Wind, insects, and road debris can cause dangerous distractions and injuries at highway speeds.",
    },
    {
      icon: "🚫",
      rule: "Lane Splitting Illegal — Motorcycles Must Occupy a Full Lane",
      detail:
        "Lane splitting (riding between lanes of traffic) and lane filtering are both illegal in North Dakota. Motorcyclists are entitled to the full use of a traffic lane and must not ride between rows of vehicles or between a vehicle and the curb. No more than two motorcycles may ride side by side in a single lane.",
    },
    {
      icon: "🎓",
      rule: "MSF BRC Waives Skills Test Only — Knowledge Test Still Required",
      detail:
        "Completing the Motorcycle Safety Foundation Basic RiderCourse (BRC) or an approved state-equivalent course waives the motorcycle road skills test in North Dakota. However, all applicants must still pass the written knowledge test at a DOT driver license office. Bring your MSF completion card when you apply for the endorsement.",
    },
    {
      icon: "🍺",
      rule: "DUI: Adult 0.08%; Under-21: 0.02% — Same Law Applies to Motorcyclists",
      detail:
        "NDCC § 39-08-01 applies equally to motorcycle riders. The adult per se DUI threshold is 0.08% BAC; under-21 riders face a 0.02% zero-tolerance limit. Alcohol impairs balance, throttle control, and braking precision — critical skills for safe motorcycle operation. A first refusal of implied consent testing triggers a 180-day license suspension.",
    },
    {
      icon: "🔄",
      rule: "Countersteering: Push Left to Go Left at Speed (Above ~12 mph)",
      detail:
        "Above approximately 12 mph, initiating a turn requires countersteering: push forward on the handlebar on the side you want to turn. Push left bar to go left; push right bar to go right. This technique is the primary cornering method on a motorcycle and must become automatic for safe high-speed riding.",
    },
    {
      icon: "🛑",
      rule: "Braking: Use Both Front and Rear Brakes — Front Provides ~70% of Stopping Force",
      detail:
        "Maximum stopping power requires applying both front and rear brakes simultaneously and progressively. The front brake provides approximately 70% of total stopping force. Using only the rear brake on a motorcycle is far less effective and can cause the rear wheel to skid. Never lock either wheel — a locked front wheel causes immediate loss of directional control.",
    },
    {
      icon: "🛣️",
      rule: "Lane Positioning: Use Left, Center, or Right Third — Avoid the Center Oil Strip",
      detail:
        "The center of the lane accumulates oil drips from cars and is the most slippery part of the lane. Vary your lane position — use the left third to be visible to oncoming traffic, the right third to be visible to traffic entering from the right, and move between positions as conditions change. Never lock yourself into a single fixed position.",
    },
  ],
  about: [
    "North Dakota's motorcycle endorsement process requires passing a 25-question knowledge test at a DOT driver license office with a score of at least 80% (20 out of 25 correct). Applicants who complete the MSF Basic RiderCourse (BRC) or an approved equivalent course receive a waiver for the road skills test — but the knowledge test is still required regardless. Bring your MSF course completion card to the driver license office when applying. The knowledge test covers North Dakota-specific laws, general riding techniques, protective gear, and hazard avoidance. Riders 21 or older who hold an MSF completion card and a valid North Dakota driver license can obtain the motorcycle endorsement without taking the skills test but must still pass the written exam.",
    "North Dakota has two motorcycle-specific equipment laws that are commonly tested. NDCC § 39-21-48 requires all riders and passengers under 18 to wear a DOT-approved helmet (FMVSS 218 standard). The DOT sticker on the back of the helmet confirms compliance — novelty helmets without the DOT sticker do not meet the legal standard. NDCC § 39-21-48.1 requires all riders and passengers to wear approved eye protection unless the motorcycle is equipped with a windshield that provides adequate protection. Eye protection (goggles, glasses, or a full face shield) prevents wind, insects, and road debris from impairing vision at speed. Lane splitting — riding between lanes of moving or stopped traffic — is illegal in North Dakota. Motorcyclists must use a full lane like any other vehicle, and no more than two motorcycles may ride side by side within a single lane.",
    "Safe motorcycle operation on North Dakota's roads requires mastering several critical techniques. Countersteering is the primary method for initiating turns at speeds above approximately 12 mph: push forward on the left handlebar to turn left, and push forward on the right handlebar to turn right. When entering a curve, slow down before the curve and roll on the throttle smoothly through it — braking mid-curve while leaned over reduces traction. Maximum braking uses both the front and rear brakes together; the front brake provides approximately 70% of stopping force, but locking the front wheel causes immediate loss of control. In wet conditions — which are common on North Dakota's plains roads — brake earlier, slow down, and avoid painted markings, manhole covers, and metal grates. When riding in a group, use a staggered formation with each rider maintaining at least a 2-second following distance from the rider directly ahead.",
  ],
  sampleQuestions: [
    {
      question: "Who is required by NDCC § 39-21-48 to wear a helmet when operating a motorcycle in North Dakota?",
      options: [
        "All riders and passengers regardless of age",
        "Riders and passengers under 18 years old",
        "Only the operator — passengers are exempt",
        "No one — helmet use is entirely voluntary",
      ],
      correctIndex: 1,
      explanation:
        "NDCC § 39-21-48 requires riders and passengers under 18 to wear a helmet meeting FMVSS 218 standards (DOT-stickered). Riders and passengers 18 and older may legally ride without a helmet, though safety experts strongly recommend helmet use for all ages.",
    },
    {
      question: "What eye protection requirement applies to North Dakota motorcycle riders without a windshield?",
      options: [
        "No eye protection is required at any time",
        "Eye protection is required only at speeds above 45 mph",
        "Approved eye protection is required unless the motorcycle has a windshield",
        "Eye protection is recommended but not legally required",
      ],
      correctIndex: 2,
      explanation:
        "NDCC § 39-21-48.1 requires motorcycle operators and passengers to wear protective eyewear — goggles, glasses, or a face shield — unless the motorcycle is equipped with a windshield. Wind, insects, and road debris at highway speeds can cause dangerous vision impairment.",
    },
    {
      question: "Is lane splitting legal for motorcycle riders in North Dakota?",
      options: [
        "Yes — at speeds under 15 mph only",
        "Yes — always legal on multi-lane roads",
        "No — lane splitting is illegal in North Dakota",
        "Yes — on divided highways with speed limits above 55 mph",
      ],
      correctIndex: 2,
      explanation:
        "Lane splitting is illegal in North Dakota. Motorcyclists must occupy a full lane and may not ride between rows of vehicles or between a vehicle and the road edge. No more than two motorcycles may ride side by side within a single lane.",
    },
    {
      question: "If a rider completes the MSF Basic RiderCourse in North Dakota, which portion of the endorsement test is waived?",
      options: [
        "Both the knowledge test and the road skills test",
        "Only the road skills test — the knowledge test must still be passed",
        "Only the knowledge test — the skills test must still be taken",
        "Neither — the MSF course only provides a fee discount",
      ],
      correctIndex: 1,
      explanation:
        "In North Dakota, completing the MSF BRC waives the motorcycle road skills test only. The written knowledge test (25 questions, 80% passing score) must still be passed at a DOT driver license office. Bring the MSF course completion card when applying for the endorsement.",
    },
    {
      question: "What is the correct braking technique to stop a motorcycle in the shortest distance?",
      options: [
        "Use only the rear brake to avoid flipping the motorcycle",
        "Apply only the front brake — it provides most of the stopping force",
        "Apply both front and rear brakes simultaneously and progressively",
        "Release the throttle and downshift to engine-brake the motorcycle",
      ],
      correctIndex: 2,
      explanation:
        "Maximum stopping power requires applying both front and rear brakes simultaneously and progressively. The front brake provides approximately 70% of stopping force. Using both brakes together without locking either wheel produces the shortest stopping distance.",
    },
    {
      question: "What is countersteering on a motorcycle and when is it used?",
      options: [
        "Steering into a skid — used in parking lots below 10 mph",
        "Using the rear brake only to steer around corners",
        "Applying opposite-direction handlebar pressure to initiate turns above ~12 mph",
        "Leaning the body away from a turn to maintain balance",
      ],
      correctIndex: 2,
      explanation:
        "Countersteering means pushing forward on the handlebar on the side you want to turn: push left to go left, push right to go right. This technique is effective above approximately 12 mph and is the primary method for initiating turns on a motorcycle at road speeds.",
    },
    {
      question: "What is the adult DUI BAC threshold for motorcycle riders in North Dakota?",
      options: ["0.04%", "0.10%", "0.06%", "0.08%"],
      correctIndex: 3,
      explanation:
        "NDCC § 39-08-01 applies equally to motorcycle riders. The adult per se DUI threshold is 0.08% BAC. Under-21 riders face a zero-tolerance limit of 0.02%. Alcohol impairs the balance, coordination, and precise clutch and brake control that motorcycle riders depend on.",
    },
    {
      question: "Where in the lane should a North Dakota motorcycle rider position themselves to maximize visibility to other drivers?",
      options: [
        "Always in the center of the lane",
        "As far left as possible at all times",
        "In the left, center, or right third of the lane as conditions dictate",
        "In the right third only to stay out of the center oil strip",
      ],
      correctIndex: 2,
      explanation:
        "The MSF recommends varying lane position: use the left third to be visible to oncoming traffic; use the right third to be visible to traffic entering from the right; avoid the center where oil accumulates. Move between positions as conditions change — never stay in one fixed position.",
    },
    {
      question: "In what formation should a group of motorcycles travel on a North Dakota highway?",
      options: [
        "Single file with 1-second gaps",
        "Side by side in pairs with 1-second gaps between pairs",
        "Staggered formation with 2-second gaps within the group",
        "Staggered formation with 1-second gaps",
      ],
      correctIndex: 2,
      explanation:
        "Groups should ride in a staggered formation: the leader in the left third, the next rider in the right third, etc. Each rider should maintain at least a 2-second following distance from the rider directly ahead. Staggered formation maintains spacing while keeping the group compact.",
    },
    {
      question: "What road surfaces should a North Dakota motorcycle rider treat with extra caution during rain?",
      options: [
        "Only unpaved gravel roads",
        "The center of paved lanes where most water pools",
        "Painted road markings, manhole covers, oil spots, and metal grates",
        "Highways only — city streets drain faster and are safer",
      ],
      correctIndex: 2,
      explanation:
        "In wet conditions, painted stripes, crosswalks, manhole covers, metal grates, and oil patches become extremely slippery. Motorcyclists should cross these surfaces gently and upright, avoiding braking or turning while on them, and should ride in tire-track grooves to minimize contact with the center oil strip.",
    },
  ],
  faqs: [
    {
      question: "Who must wear a helmet when riding a motorcycle in North Dakota?",
      answer:
        "NDCC § 39-21-48 requires all motorcycle operators and passengers under 18 years old to wear a helmet that meets FMVSS 218 standards (DOT-stickered). Riders and passengers 18 and older are not legally required to wear a helmet, though the MSF and safety experts strongly recommend helmet use for all ages.",
    },
    {
      question: "What eye protection is required for motorcycle riders in North Dakota?",
      answer:
        "NDCC § 39-21-48.1 requires motorcycle operators and passengers to wear approved protective eyewear — goggles, glasses, or a face shield — unless the motorcycle is equipped with a windshield that provides adequate protection. Eye protection prevents wind, insects, and road debris from impairing vision at speed.",
    },
    {
      question: "Does the MSF Basic RiderCourse waive both tests in North Dakota?",
      answer:
        "No. In North Dakota, completing the MSF Basic RiderCourse (BRC) or an approved state-equivalent waives the motorcycle road skills test only. Applicants must still pass the written knowledge test (25 questions, 80% passing score) at a DOT driver license office. Bring your MSF course completion card when applying.",
    },
    {
      question: "Is lane splitting legal in North Dakota?",
      answer:
        "No. Lane splitting (riding between lanes of traffic) is illegal in North Dakota. Motorcyclists must occupy a full traffic lane. No more than two motorcycles may ride side by side within a single lane. North Dakota does not have a lane filtering law either.",
    },
    {
      question: "What is the DUI BAC limit for motorcycle riders in North Dakota?",
      answer:
        "The same DUI thresholds that apply to car drivers apply to motorcycle riders under NDCC § 39-08-01. The adult per se threshold is 0.08% BAC. Riders under 21 face a zero-tolerance limit of 0.02%. CDL holders operating commercial vehicles face 0.04%. A BAC of 0.16% or more triggers aggravated DUI penalties.",
    },
    {
      question: "What is the North Dakota motorcycle knowledge test format and passing score?",
      answer:
        "The North Dakota motorcycle knowledge test consists of 25 multiple-choice questions. Applicants must correctly answer at least 20 questions (80%) to pass. The test is administered at North Dakota DOT driver license offices and covers North Dakota-specific laws, MSF riding techniques, protective gear, and hazard avoidance.",
    },
    {
      question: "What is countersteering and why is it important for North Dakota riders?",
      answer:
        "Countersteering is the primary technique for initiating turns on a motorcycle at speeds above approximately 12 mph. To turn left, push forward on the left handlebar; to turn right, push forward on the right handlebar. On North Dakota's high-speed highways and curves, countersteering must be an automatic response for safe, controlled cornering.",
    },
    {
      question: "How should motorcycle riders handle North Dakota's wet roads?",
      answer:
        "In wet conditions, riders should reduce speed, increase following distance to at least 4 seconds, brake earlier and more gently, and avoid painted road markings, manhole covers, metal grates, and oil-covered surfaces — all of which become extremely slippery when wet. Ride in the tire-track grooves of the lane rather than the center where oil accumulates.",
    },
    {
      question: "What is the correct braking technique for a motorcycle?",
      answer:
        "Apply both front and rear brakes simultaneously and progressively for maximum stopping power. The front brake provides approximately 70% of stopping force. Never lock either wheel — a locked front wheel causes immediate loss of directional control. If the rear wheel locks, hold steady pressure and the motorcycle will remain stable.",
    },
    {
      question: "What equipment is legally required on North Dakota motorcycles?",
      answer:
        "North Dakota requires motorcycles to have a functioning headlight (on at all times), taillight, brake light, and turn signals. Riders without a windshield must wear approved eye protection. Riders and passengers under 18 must wear a DOT-approved helmet. Lane splitting is prohibited, and motorcycles must use the full width of a traffic lane.",
    },
  ],
  relatedTests: [
    { label: "North Dakota DMV Practice Test", href: "/north-dakota-dmv-practice-test" },
    { label: "North Dakota CDL Practice Test", href: "/north-dakota-cdl-practice-test" },
    { label: "South Dakota Motorcycle Practice Test", href: "/south-dakota-motorcycle-practice-test" },
    { label: "Montana Motorcycle Practice Test", href: "/montana-motorcycle-practice-test" },
    { label: "DMV Practice Test", href: "/dmv-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NorthDakotaMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
