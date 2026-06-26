import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Nebraska Motorcycle Practice Test 2025 – Free DMV Endorsement Prep",
  description: "Study for the Nebraska DMV motorcycle endorsement exam with state-specific questions on helmet requirements for under-21 riders, LB 918 hands-free rules for motorcyclists, hail emergency protocol for riders, Nebraska Sandhills remote riding hazards, and DUI thresholds.",
  alternates: { canonical: "https://caredmvprep.com/nebraska-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/nebraska-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Nebraska",
  stateAbbr: "NE",
  testLabel: "Motorcycle Practice Test",
  slug: "nebraska-motorcycle-practice-test",
  headline: "Nebraska Motorcycle Endorsement Practice Test 2025",
  intro: "Nebraska requires a motorcycle endorsement (Class M) on your driver's license through the Nebraska DMV. Nebraska's helmet law requires helmets for riders under age 21 only — adults 21 and older may legally ride without a helmet. The endorsement exam tests Nebraska-specific rules including LB 918 (the 2025 hands-free law), DUI thresholds, hail emergency protocol for motorcyclists, Sandhills remote riding hazards, and open range livestock awareness.",
  basedOn: "Nebraska DMV Motorcycle Operator Manual",
  about: [
    "Nebraska requires a motorcycle endorsement (Class M) on the driver's license, obtained by passing the Nebraska DMV motorcycle knowledge exam and skills road test, or by completing an approved Motorcycle Safety Foundation (MSF) course. Nebraska's helmet law requires helmets for operators and passengers under age 21 — riders and passengers 21 and older are not legally required to wear a helmet. Nebraska's DUI law applies equally to motorcycle operators (0.08% BAC for adults, 0.02% for riders under 21). Nebraska Legislative Bill 918, effective January 1, 2025, also applies to motorcycle riders — holding a handheld electronic device while riding is a primary offense under LB 918.",
    "Nebraska presents unique hazards for motorcycle riders that are tested on the endorsement exam. The most dangerous weather threat unique to Nebraska is hail — Nebraska ranks among the states with the highest annual hail event totals, and motorcycle riders caught in a hail storm without shelter face serious injury risk from hailstones at speed. Hailstones that are quarter-sized (1 inch diameter) or larger strike an exposed rider with significant force, and at highway speed the impact energy multiplies. Nebraska riders must monitor weather forecasts and be prepared to immediately seek shelter when hail is imminent. The Nebraska Sandhills — accessible from US-83 and county roads — present remote riding conditions where breakdowns leave riders without cell service or nearby assistance for hours. Open range livestock in western Nebraska is an additional hazard for motorcyclists on rural routes.",
  ],
  sampleQuestions: [
    {
      question: "Nebraska's motorcycle helmet law requires helmets for which riders?",
      options: ["All riders regardless of age", "Riders under age 21 only", "Riders under age 18 only", "Helmets are optional for all Nebraska motorcycle riders"],
      correctIndex: 1,
      explanation: "Nebraska requires motorcycle helmets for riders and passengers who are under age 21. Riders and passengers who are 21 or older are not legally required to wear a helmet under Nebraska law. This partial helmet law is consistent with the approach of many states that set the helmet requirement at the age of legal adulthood (21 for alcohol-related laws). The Nebraska DMV motorcycle manual recommends helmet use for all riders regardless of the legal requirement, noting the significant reduction in head injury severity and fatality risk that DOT-approved helmets provide."
    },
    {
      question: "Nebraska LB 918 (effective January 1, 2025) applies to motorcycle riders. A rider is holding a phone in one hand while riding on a Nebraska highway. What violation has occurred?",
      options: ["No violation — LB 918 applies only to four-wheeled vehicles", "A violation of LB 918's handheld device ban, which applies to all motor vehicle operators including motorcycle riders", "Only a distracted driving warning if no crash occurred", "A violation only if the rider is under age 21"],
      correctIndex: 1,
      explanation: "Nebraska LB 918 applies to all motor vehicle operators, including motorcycle riders. Holding any electronic device — phone, GPS unit, or other — while operating a motorcycle on a Nebraska public road is a primary offense under LB 918. Officers can stop a rider solely for violating this law. Legal alternatives include Bluetooth helmet speakers paired to the phone, tank-mounted devices with voice control, or pulling over safely to use any handheld device. The law applies on all Nebraska public roads regardless of speed limit or road type."
    },
    {
      question: "A Nebraska motorcycle rider is riding on I-80 when a severe thunderstorm warning is issued with a hail forecast. What is the safest immediate action?",
      options: ["Increase speed to exit the storm area before hail begins", "Immediately seek covered shelter — a gas station canopy, overpass with solid walls, or parking structure — before hail begins", "Pull to the right shoulder and lie under the motorcycle for protection", "Put on rain gear and continue at reduced speed"],
      correctIndex: 1,
      explanation: "For a motorcycle rider, hail is an immediate emergency — exposed riders struck by quarter-inch or larger hailstones at highway speed risk serious injury. The only effective protection is solid shelter before hail begins. A gas station canopy, parking structure, or solid-wall overpass provides protection. Standard rain gear offers no meaningful protection against hail impact. The motorcycle itself provides no shelter — lying under it still exposes the rider to hailstones. Nebraska riders should check weather forecasts before riding and identify potential shelter points on their route in advance during storm season (April through September)."
    },
    {
      question: "A motorcycle rider is riding US-83 through the Nebraska Sandhills with 30 miles of fuel remaining and no gas station in sight. According to Nebraska DMV guidance for Sandhills riding, what should the rider do?",
      options: ["Continue at highway speed — services are typically within 15 miles on US-83", "Reduce speed to conserve fuel and proceed to the next service point, noting that the next station may be 80+ miles away — a fuel planning failure in the Sandhills requires waiting for help", "Turn around and backtrack to the last fuel stop", "Flag down the next passing vehicle for assistance"],
      correctIndex: 1,
      explanation: "The Nebraska Sandhills is one of the most remote riding environments in the continental United States. On some sections of US-83 and adjacent Sandhills roads, gas stations may be 80–100 miles apart. A rider with 30 miles of range remaining in remote territory faces a serious situation. Reducing speed reduces fuel consumption and extends range. The best practice is to have never reached this situation — riders entering the Sandhills should start with a full tank and be aware of the exact location of the next fuel stop. Running out of fuel in the Sandhills means waiting potentially hours for another vehicle to assist, with no cell service available in many areas."
    },
    {
      question: "In western Nebraska's open range territory, a motorcycle rider encounters a cattle herd crossing a rural highway at night. What is the most dangerous characteristic of cattle on a dark road for a motorcyclist?",
      options: ["Cattle make no noise and approach the road silently", "Cattle, especially black or dark-colored breeds, are nearly invisible in darkness — a rider may not detect the herd until already within stopping distance", "Cattle have reflective ear tags that may confuse the rider about road alignment", "Cattle always travel with a rancher who controls their movement"],
      correctIndex: 1,
      explanation: "Open range cattle on rural Nebraska roads at night are one of the most serious hazards for motorcycle riders. Dark-colored cattle (Black Angus are common in Nebraska) are virtually invisible in darkness until they are directly in the motorcycle's headlight beam — often at a distance far shorter than stopping distance at rural road speeds. A motorcycle-cattle collision is typically fatal or causes severe injury. Nebraska motorcyclists on rural western roads must reduce speed significantly at night, use high beams when legally appropriate, and treat every rural road margin as a potential location for unseen livestock."
    },
    {
      question: "What is the DUI BAC limit for a Nebraska motorcycle rider who is 19 years old?",
      options: ["0.08%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation: "Nebraska's DUI law sets a 0.02% BAC threshold for motorcycle operators (and all drivers) who are under 21. For practical purposes, 0.02% is a near-zero-tolerance standard — any meaningful alcohol consumption before riding can trigger a DUI violation for a rider under 21. Nebraska uses DUI terminology. Consequences for underage DUI on a motorcycle include license suspension (affecting the motorcycle endorsement), fines, and mandatory alcohol assessment and education programs. The Nebraska Implied Consent law requires submission to chemical testing when lawfully arrested for DUI."
    },
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
    {
      question: "Does Nebraska require helmets for adult motorcycle riders?",
      answer: "Nebraska requires helmets only for motorcycle operators and passengers who are under age 21. Riders and passengers 21 and older are not legally required to wear a helmet under Nebraska's motorcycle helmet law. However, the Nebraska DMV motorcycle manual strongly recommends helmet use for all riders regardless of age, noting that DOT-approved helmets reduce the risk of fatal head injury by approximately 37% and reduce the risk of brain injury significantly. Riders who choose not to wear a helmet should understand that many insurance policies may limit or exclude coverage for head injuries sustained without a helmet."
    },
    {
      question: "Why is hail the most unique severe weather threat for Nebraska motorcyclists?",
      answer: "Nebraska ranks among the states with the highest average annual hail event totals, due to the convergence of warm, moist Gulf of Mexico air with cool, dry Rocky Mountain air over the Great Plains. For motorcycle riders specifically, hail is uniquely dangerous because there is no protective shell between the rider and falling hailstones. Quarter-sized hailstones (1 inch) striking at 60 mph highway speed carry the equivalent impact energy of thrown projectiles and can cause head, neck, and arm injuries. Hail storms typically develop rapidly and can reach baseball-sized (2.75 inch) hailstones in severe supercell thunderstorms. Nebraska riders must watch weather forecasts carefully during riding season (April–September) and plan routes near potential shelter points."
    },
    {
      question: "What is the Nebraska motorcycle endorsement process?",
      answer: "Nebraska motorcycle endorsement (Class M) is obtained by holding a valid Nebraska driver's license and passing both the DMV motorcycle knowledge exam and a motorcycle skills road test. Alternatively, completion of an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse may waive the road test. The knowledge exam covers Nebraska motorcycle-specific laws (helmet law for under-21, DUI thresholds, LB 918 hands-free requirement, open range hazards, and hail/tornado protocols), motorcycle operation techniques, and hazard identification. The endorsement is added to the existing license. Nebraska strongly recommends the MSF course for all new riders as structured safety training regardless of any test waiver benefit."
    },
    {
      question: "What are the remote riding risks in the Nebraska Sandhills?",
      answer: "The Nebraska Sandhills cover approximately 19,000 square miles of grass-stabilized sand dunes in north-central Nebraska, accessible from US-83 north of North Platte and various county roads. For motorcycle riders, the primary risks are fuel depletion (gas stations may be 80–100 miles apart), cell phone outage (coverage is sparse or nonexistent throughout much of the region), and weather isolation (winter blizzards can strand riders without access to shelter for extended periods). Spring sandhill riding also brings loose sand in road margins after wind events, which creates traction hazards for motorcycle tires. Riders planning Sandhills routes should carry extra fuel in an approved container, emergency supplies, and inform someone of their planned route and estimated arrival time."
    },
    {
      question: "Does Nebraska's LB 918 hands-free law apply to motorcycle riders?",
      answer: "Yes. Nebraska LB 918, effective January 1, 2025, applies to all motor vehicle operators on Nebraska public roads, including motorcycle riders. Holding a handheld electronic device while riding a motorcycle is a primary offense — officers can stop a rider solely for this violation. Legal alternatives include Bluetooth helmet communication systems paired to the phone, handlebar-mounted GPS devices with voice guidance, or simply pulling over safely to use any handheld device. For motorcycle riders, hands-free communication is also a safety improvement — taking a hand off the handlebars to hold a phone at speed reduces motorcycle control and reaction capability."
    },
    {
      question: "What documents do I need to bring to the Nebraska DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Nebraska, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Nebraska DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Nebraska motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Nebraska, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Nebraska DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Nebraska, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Nebraska, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Nebraska?",
      answer:
        "In Nebraska, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Nebraska DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Nebraska?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Nebraska DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "Nebraska DMV Practice Test", href: "/nebraska-dmv-practice-test" },
    { label: "Nebraska CDL Practice Test", href: "/nebraska-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NebraskaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
