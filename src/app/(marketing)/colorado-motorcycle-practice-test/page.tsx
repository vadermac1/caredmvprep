import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Colorado Motorcycle Practice Test 2025 – Free CO DMV Endorsement Exam Prep",
  description:
    "Free Colorado motorcycle practice test based on the 2025 Colorado Motorcycle Operator Manual. Prepare for your CO Division of Motor Vehicles motorcycle endorsement test.",
  alternates: { canonical: "https://caredmvprep.com/colorado-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/colorado-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Colorado",
  stateAbbr: "CO",
  testLabel: "Motorcycle Endorsement Knowledge Test",
  slug: "colorado-motorcycle-practice-test",
  headline: "Colorado Motorcycle Endorsement Practice Test 2025",
  intro:
    "Prepare for your Colorado motorcycle endorsement knowledge test with free practice questions based on the official Colorado Motorcycle Operator Manual. The Colorado Division of Motor Vehicles (DMV) requires all motorcycle riders to hold a motorcycle endorsement on their driver's license, earned by passing the DMV knowledge test and road skills test.",
  basedOn: "2025 Colorado Motorcycle Operator Manual",
  about: [
    "The Colorado Division of Motor Vehicles (DMV) requires all motorcycle operators to hold a motorcycle endorsement on their standard driver's license. To earn the endorsement, applicants must pass a motorcycle knowledge test at a Colorado DMV office, then complete a road skills test at a DMV site (or a certified third-party tester). Riders between 15 and 16 years old must additionally complete a Motorcycle Operator Skills Training (MOST) program before they can even receive their motorcycle instruction permit — this is a prerequisite for younger riders, not a general skills-test waiver open to applicants of any age.",
    "Colorado's motorcycle helmet law is conditional. Riders under age 18 are required to wear a DOT-approved helmet at all times. Riders 18 and older are not legally required to wear a helmet in Colorado. However, eye protection is required for ALL riders — a face shield, goggles, or a motorcycle with a windshield. Colorado's high-altitude, mountainous terrain, extreme weather variability, and steep highway descents make Colorado one of the more challenging states for motorcycle riding. A full-face DOT helmet provides both head and eye protection and is strongly recommended by the Colorado DMV for all riders regardless of the legal requirement.",
    "Colorado's DWAI law (0.05–0.079% BAC) and cannabis DUI threshold (5 ng/mL THC) both apply to motorcycle operators. Riding a motorcycle while impaired by alcohol or cannabis is extraordinarily dangerous — the balance and coordination required to operate a motorcycle are severely affected even at BAC levels below the DUI threshold. Colorado's hands-free law (HB 22-1247, effective April 2023) applies to motorcyclists as well — riders may not hold or manually use any wireless device while operating a motorcycle. Mountain terrain and sudden weather changes (afternoon thunderstorms, hail, temperature drops) are additional unique hazards for Colorado motorcycle riders.",
  ],
  sampleQuestions: [
    { question: "Colorado's motorcycle helmet law requires helmets for:", options: ["ALL riders and passengers regardless of age", "Riders under 21 only", "Riders under 18 only — adults 18+ are not legally required to wear one", "No riders — Colorado has no helmet law"], correctIndex: 2, explanation: "Colorado's helmet law requires helmets for riders under 18. Riders 18 and older are NOT legally required to wear a helmet in Colorado. However, ALL riders must wear eye protection (face shield, goggles, or windshield). Safety advocates and the Colorado DMV strongly recommend helmets for all riders — unhelmeted riders face significantly higher fatality risk. Colorado's mountain terrain, steep descents, and gravel on curves make head protection especially valuable." },
    { question: "Colorado's DWAI law applies to motorcycle operators when their BAC is:", options: ["0.08% or above — same threshold as DUI", "0.05% to 0.079% — a criminal impaired driving charge even below the DUI threshold", "0.04% — the commercial vehicle threshold", "No DWAI applies to motorcycle operators in Colorado"], correctIndex: 1, explanation: "Colorado's DWAI (Driving While Ability Impaired) law applies to motorcycle operators at 0.05%–0.079% BAC — below the standard DUI threshold. DWAI is a criminal charge in Colorado. For motorcyclists, even a 0.05% BAC significantly impairs the balance, lean angle control, and reaction time required to safely navigate curves and mountain roads. Under-21 riders face the 0.02% threshold." },
    { question: "Colorado's cannabis DUI threshold affects motorcycle operators at:", options: ["Any detectable THC — trace amounts are enough for a charge", "5 ng/mL THC in whole blood — same as all motor vehicle operators", "10 ng/mL THC — a higher threshold for experienced riders", "Cannabis impairment is not covered under Colorado motorcycle law"], correctIndex: 1, explanation: "Colorado's per se cannabis DUI threshold (5 ng/mL THC in whole blood) applies equally to motorcycle operators. Riding a motorcycle while cannabis-impaired is particularly dangerous — balance, visual tracking, and reaction time (all critical for motorcyclists) are impaired even at THC levels below the per se threshold. Colorado can charge DUI for cannabis impairment at any THC level if riding ability is demonstrably affected." },
    { question: "What is the most dangerous motorcycle challenge specific to Colorado's mountain highways?", options: ["High altitude reducing engine power at slow speeds", "Steep, extended descents that can overheat brakes if applied continuously", "Thin air reducing rider oxygen and causing confusion at all altitudes", "Speed limits over 80 mph making motorcycle riding dangerous"], correctIndex: 1, explanation: "Colorado's steep mountain highway descents — including passes like Loveland Pass, Wolf Creek Pass, and Monarch Pass — can overheat motorcycle brakes if applied continuously. The correct technique: downshift to a lower gear BEFORE starting the descent, use engine braking to control speed, and apply brakes intermittently (snub braking) rather than constantly. Brake overheating (brake fade) can cause complete brake failure — a catastrophic outcome on a long mountain descent." },
    { question: "Colorado's hands-free law (HB 22-1247, effective April 2023) applies to motorcycle operators:", options: ["No — the law only applies to car drivers", "Yes — motorcycle riders may not hold or manually use any device while riding", "Only in school zones and construction zones", "Only for riders under 21 years old"], correctIndex: 1, explanation: "Colorado's hands-free law (HB 22-1247, effective April 29, 2023) applies to ALL motor vehicle operators including motorcycle riders. You may not hold or manually use a wireless device while riding — calls, texts, GPS, or any app. A Bluetooth headset or intercom in your helmet is permitted. Fines: $75 (first), $150 (second), $300 (third+). Double fines in school and construction zones." },
    { question: "When a Colorado motorcycle rider encounters afternoon thunderstorms on a mountain road, they should:", options: ["Continue riding at normal speed — rain clears quickly in Colorado", "Pull off at the first safe location before the storm intensifies — lightning, hail, and rapidly reduced visibility are life-threatening", "Reduce speed by 10 mph and continue to the nearest town", "Use high beams to improve visibility in the rain"], correctIndex: 1, explanation: "Colorado's afternoon thunderstorms can be extremely intense — lightning strikes above treeline, hail (which can be marble-sized or larger), and sudden visibility reduction to near-zero in minutes. For motorcyclists: pull off at the nearest shelter, gas station, or covered area BEFORE the storm hits. If caught in the open, dismount and move away from trees and metal structures (lightning rods). Never shelter under an isolated tree. Wet pavement, hail, and reduced visibility combine to make riding in a Colorado thunderstorm extremely hazardous." },
    { question: "On a Colorado mountain road, when two vehicles meet on a narrow section where only one can pass:", options: ["The uphill vehicle must pull over and yield to the downhill vehicle", "The downhill vehicle should pull over when safely possible to yield to the uphill vehicle", "The larger vehicle always has the right of way in both directions", "Both vehicles must stop until one backs up to a wider section"], correctIndex: 1, explanation: "Colorado law and the Driver Handbook state that when two vehicles meet on a narrow mountain road, the vehicle going DOWNHILL should yield to the uphill vehicle by pulling off when safely possible. The logic: it is generally easier for the downhill vehicle to back up to a wider spot than for the uphill vehicle, which would need to back up on a grade. This rule applies to motorcycles and all vehicles equally on Colorado's narrow mountain roads." },
    { question: "Eye protection required for all Colorado motorcycle riders must be:", options: ["Regular sunglasses meeting ANSI Z80 standards", "A DOT-approved face shield, goggles, or motorcycle windshield extending above eye level", "Only required for riders under 18", "Contact lenses — no separate eye protection required if contacts are worn"], correctIndex: 1, explanation: "Colorado requires ALL motorcycle riders (regardless of age or helmet choice) to wear a face shield, approved goggles, or have a motorcycle windshield that extends above the rider's eye level. Regular sunglasses do not meet the legal standard. Eye protection prevents wind, insects, debris, and hail from impairing vision. In Colorado, hail during afternoon mountain thunderstorms can be large enough to cause serious injury without eye protection." },
    {
      question: "Alcohol affects a motorcycle rider's ability primarily by:",
      options: ["Improving focus and reducing reaction time", "Reducing balance, coordination, and judgment", "Increasing grip strength on the handlebars", "Having no effect at speeds under 25 mph"],
      correctIndex: 1,
      explanation:
        "Alcohol impairs balance, reduces coordination, slows reaction time, and impairs judgment — all critical skills for motorcycle operation. Even one or two drinks can significantly increase the risk of a crash. Riding under the influence of alcohol is illegal in all 50 states and is a leading cause of fatal motorcycle crashes.",
    },
    {
      question: "When making a turn on a motorcycle, you should:",
      options: ["Slow down after you enter the turn", "Apply the brakes throughout the turn", "Look through the turn toward your exit point", "Lean opposite to the direction of the turn"],
      correctIndex: 2,
      explanation:
        "Look through the turn toward where you want to go — your exit point. Your motorcycle will naturally follow your vision. Slow down before entering the turn (not during), lean in the direction of the turn, and roll on the throttle smoothly as you exit. Never brake hard while leaning in a turn.",
    },
    {
      question: "Which part of the body is injured in the greatest percentage of fatal motorcycle crashes?",
      options: ["Arms and hands", "Legs and feet", "Chest and torso", "Head and neck"],
      correctIndex: 3,
      explanation:
        "Head and neck injuries account for the greatest percentage of fatalities in motorcycle crashes. This is why wearing a DOT-approved helmet is the single most effective protection a rider can use. Full-face helmets provide the most coverage, protecting the chin and face in addition to the skull and brain.",
    },
    {
      question: "When riding at night, which of the following is most important?",
      options: ["Increasing your speed to reduce time on the road", "Using high beams at all times", "Reducing speed and increasing following distance", "Wearing darker clothing to blend with traffic"],
      correctIndex: 2,
      explanation:
        "At night, reduce your speed and increase your following distance to compensate for reduced visibility. Your headlight only illuminates a limited distance ahead, and road hazards — potholes, debris, animals — are much harder to see. Use your high beams when no oncoming traffic is present, and wear reflective gear to improve your visibility to other drivers.",
    },
  ],
  faqs: [
    { question: "How do I get a Colorado motorcycle endorsement?", answer: "Pass the motorcycle knowledge test at a CO DMV office to receive a motorcycle instruction permit, then pass the road skills test at a DMV location or with a certified third-party tester. Riders between 15 and 16 years old must also complete a Motorcycle Operator Skills Training (MOST) program before they can receive their instruction permit in the first place." },
    { question: "Is a helmet required for motorcycle riders in Colorado?", answer: "Colorado requires helmets only for riders under 18. Riders 18 and older are not legally required to wear a helmet. However, ALL riders must wear eye protection (face shield, goggles, or windshield). Safety experts strongly recommend helmets for all riders — especially in Colorado's mountain environment with steep curves, gravel, and unpredictable wildlife." },
    { question: "What unique motorcycle hazards exist in Colorado?", answer: "Colorado-specific motorcycle hazards: (1) steep mountain descents can overheat brakes — downshift before descending; (2) afternoon thunderstorms bring lightning, hail, and sudden reduced visibility; (3) loose gravel and sand on mountain road curves after storms; (4) altitude above 10,000 feet affects both rider and engine performance; (5) elk and deer crossing at dawn/dusk; (6) temperature drops of 30–40°F in minutes during summer storms." },
    { question: "Does Colorado's DWAI law apply to motorcycle operators?", answer: "Yes. Colorado's DWAI (Driving While Ability Impaired) law applies to motorcycle operators at 0.05%–0.079% BAC — a criminal impaired driving charge even below the standard 0.08% DUI threshold. Colorado's cannabis DUI (5 ng/mL THC) also applies. Impaired motorcycle riding is especially dangerous on Colorado's mountain roads where precise balance and reaction time are critical." },
    { question: "What is Colorado's MOST motorcycle safety course?", answer: "Colorado's Motorcycle Operator Safety Training (MOST) program is an MSF-based training course approved by the Colorado DMV. Completing a MOST course waives the DMV road skills test for the motorcycle endorsement. MOST courses are available at community colleges and training facilities throughout Colorado. Many insurance companies offer premium discounts for MOST graduates." },
    {
      question: "What documents do I need to bring to the Colorado DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Colorado, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Colorado DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Colorado motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Colorado, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Colorado DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Colorado, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Colorado, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Colorado?",
      answer:
        "In Colorado, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Colorado DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Colorado?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Colorado DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "CO Driver's License", href: "/colorado-dmv-practice-test" },
    { label: "CO CDL Test", href: "/colorado-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function ColoradoMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
