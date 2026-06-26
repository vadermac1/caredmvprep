import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Dakota Motorcycle Practice Test 2025 – Free NDDOT Endorsement Prep",
  description:
    "Prepare for your North Dakota motorcycle endorsement test with free practice questions covering oilfield road hazards, blizzard riding risks, open range livestock, and ND helmet laws. Based on the NDDOT motorcycle manual.",
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
    "Earning a North Dakota motorcycle endorsement requires passing a knowledge test administered by the NDDOT Driver License Site. This free practice test focuses on North Dakota-specific hazards: oilfield road damage and loose gravel in the Bakken region, blizzard and cold-weather riding risks, open range livestock on rural roads, and the state's helmet law for riders under 18.",
  basedOn: "North Dakota Motorcycle Operator Manual (NDDOT)",
  about: [
    "The North Dakota Department of Transportation (NDDOT) requires all motorcycle operators to hold a valid motorcycle endorsement on their driver's license. To earn the endorsement, applicants must pass a knowledge test based on the NDDOT Motorcycle Operator Manual and complete a skills test. Riders under 18 are required by North Dakota law to wear a helmet. Adult riders 18 and older are not required to wear a helmet, though the NDDOT and safety organizations strongly recommend helmets for all riders. North Dakota's practical riding season runs roughly from May through September — winter conditions make year-round riding impractical for most of the state.",
    "North Dakota presents unique hazards for motorcycle riders that go beyond standard motorcycle safety. In the Williston Basin counties of Williams, McKenzie, Mountrail, and Dunn, oilfield truck traffic has severely damaged county roads, leaving potholes, loose gravel, and uneven surfaces that are particularly dangerous for motorcycles. Riders in oilfield areas must ride well below county road speed limits and scan constantly for surface hazards. Western North Dakota's open range territory means cattle and horses may legally be on public roads — a collision with a 1,200-pound steer is catastrophic on a motorcycle. Additionally, North Dakota's blizzards can arrive rapidly; riders must monitor NDDOT 511 and be prepared to stop if weather deteriorates.",
  ],
  sampleQuestions: [
    {
      question:
        "North Dakota law requires a helmet for which motorcycle riders?",
      options: [
        "All motorcycle riders regardless of age",
        "Riders under 18 years of age only",
        "Riders under 21 years of age only",
        "No helmet requirement exists in North Dakota",
      ],
      correctIndex: 1,
      explanation:
        "North Dakota requires helmets for motorcycle riders under 18 years old. Adult riders 18 and older are not legally required to wear a helmet under state law, though safety organizations strongly recommend helmets for all riders. Despite the legal exemption for adults, helmets significantly reduce the risk of fatal head injuries in crashes — the most common cause of motorcycle fatality.",
    },
    {
      question:
        "You are riding a motorcycle on a county road in Williams County, North Dakota (Bakken oilfield area) and encounter a road surface with extensive potholes and loose gravel. What is the safest response?",
      options: [
        "Accelerate through the hazard zone quickly to minimize time on the bad surface",
        "Significantly reduce speed, avoid sudden braking, and scan ahead constantly for additional hazards",
        "Ride in the center of the lane to avoid the edges where gravel accumulates",
        "Use the shoulder of the road which is usually in better condition",
      ],
      correctIndex: 1,
      explanation:
        "Oilfield truck traffic in the Williston Basin has severely damaged county road surfaces in Williams, McKenzie, Mountrail, and Dunn counties. Potholes and loose gravel are extremely hazardous for motorcycles. The correct response is to significantly reduce speed, avoid aggressive braking (which can cause wheel lock on loose surfaces), and scan well ahead for additional hazards. Accelerating through bad road conditions increases the risk of losing control.",
    },
    {
      question:
        "You are riding in western North Dakota near dusk and notice cattle near the right shoulder of a rural highway. What is the appropriate action?",
      options: [
        "Maintain your speed — cattle typically stay off paved surfaces",
        "Sound your horn to scare the cattle away before passing",
        "Reduce speed significantly and be prepared to stop — cattle may move onto the road without warning",
        "Move to the center line and pass quickly",
      ],
      correctIndex: 2,
      explanation:
        "Western North Dakota is open range territory, meaning cattle, horses, and other livestock may legally be on public roads. Cattle are unpredictable and may move suddenly onto the roadway. For a motorcycle rider, a collision with a large animal is almost certainly fatal or severely injurious. Reduce speed significantly when livestock are visible near the road, scan for additional animals, and be prepared to stop completely.",
    },
    {
      question:
        "A North Dakota motorcyclist hears on the radio that a blizzard is approaching and NDDOT may close I-94. What should the rider do?",
      options: [
        "Continue riding at reduced speed — interstates are always safer than county roads",
        "Monitor NDDOT 511 for road closure updates and immediately seek shelter before the storm arrives",
        "Pull off at the next exit and wait for the storm to pass at a roadside stop",
        "Riding in light snow is acceptable — blizzard warnings are usually exaggerated",
      ],
      correctIndex: 1,
      explanation:
        "Motorcycle riding in blizzard conditions is extremely dangerous and potentially fatal. North Dakota blizzards can produce zero-visibility whiteout conditions rapidly. Riders should immediately check NDDOT's 511 system for road closure information and find shelter before the storm arrives — not after it hits. NDDOT legally closes I-94 and I-29 during severe blizzards; riding on a closed road is a Class B misdemeanor and is life-threatening on a motorcycle.",
    },
    {
      question:
        "When riding in North Dakota's strong crosswinds — common on I-94 between Bismarck and Dickinson — what technique helps maintain control?",
      options: [
        "Grip the handlebars tightly with both hands and lean away from the wind",
        "Relax your grip slightly, lean into the wind, and make smooth throttle adjustments to compensate",
        "Increase speed to reduce the effect of crosswind on the motorcycle",
        "Move to the left lane where wind effects are reduced by the median barrier",
      ],
      correctIndex: 1,
      explanation:
        "North Dakota's flat, open terrain produces strong and unpredictable crosswinds, especially on I-94 across the western half of the state. When riding in crosswinds, maintain a relaxed grip on the handlebars (a tight grip reduces your ability to feel and respond to the bike's movements), lean slightly into the wind direction, and make smooth gradual throttle inputs. Sudden changes in throttle or direction in strong crosswinds can cause loss of control.",
    },
    {
      question:
        "Under North Dakota's SB 2016 handheld device law, a motorcycle rider stopped at a red light may legally do which of the following?",
      options: [
        "Check text messages while waiting for the light to change",
        "Make a handheld phone call because the motorcycle is not in motion",
        "Use a Bluetooth headset to answer an incoming call",
        "Hold the phone to read directions while the light is red",
      ],
      correctIndex: 2,
      explanation:
        "North Dakota's SB 2016 (effective August 1, 2021) prohibits handheld device use while operating a motor vehicle, and motorcycles are motor vehicles under this law. The prohibition applies even when stopped at a red light, as the vehicle is still being operated. Hands-free use via Bluetooth headsets is the only permitted method for calls or audio. Violations are primary offenses.",
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
      question: "What is required to get a motorcycle endorsement in North Dakota?",
      answer:
        "To earn a North Dakota motorcycle endorsement, you must hold a valid North Dakota driver's license, pass a motorcycle knowledge test at an NDDOT Driver License office, and pass a motorcycle skills test. The NDDOT also recognizes completion of an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse as a skills test waiver. The knowledge test is based on the NDDOT Motorcycle Operator Manual. Riders under 18 must complete an approved motorcycle safety course.",
    },
    {
      question: "Does North Dakota require motorcycle helmets for all riders?",
      answer:
        "No. North Dakota requires helmets only for riders under 18 years old. Adult riders 18 and older are not required by state law to wear a helmet. However, the NDDOT and safety experts strongly recommend that all riders wear helmets at all times. Head injuries are the leading cause of motorcycle fatalities, and helmets reduce fatal injury risk by approximately 37% according to NHTSA data.",
    },
    {
      question: "What road hazards are unique to motorcycle riding in the Bakken oilfield region of North Dakota?",
      answer:
        "In Williams, McKenzie, Mountrail, and Dunn counties — the Williston Basin Bakken Formation oil patch — county roads have been severely damaged by oilfield truck traffic. Motorcycle riders face potholes, loose gravel, road edge deterioration, and unpredictable surface conditions. Counties may post reduced speed or weight limits. Riders should slow significantly below the posted limit on oilfield-area county roads, scan well ahead, and avoid sudden braking or swerving on compromised surfaces.",
    },
    {
      question: "What are the open range risks for motorcycle riders in western North Dakota?",
      answer:
        "Western North Dakota's open range laws do not require ranchers to fence livestock away from public roads. Cattle, horses, and other large animals may be on the roadway at any time, day or night. For motorcycle riders, a collision with a 1,000–1,500 pound steer at highway speed is almost certainly fatal or catastrophic. Riders must scan the road edges continuously at dusk and at night, reduce speed when livestock are visible near the road, and never attempt to accelerate past animals that are near or on the pavement.",
    },
    {
      question: "When is it practical to ride a motorcycle in North Dakota?",
      answer:
        "North Dakota's practical riding season is approximately May through September. October can bring early snowstorms, and by November, blizzard conditions are possible on any day. Winter temperatures regularly reach -20°F to -40°F, making riding extremely dangerous due to ice, snow, and extreme cold. During the riding season, riders must still be aware of spring frost heaves on county roads, strong summer crosswinds, and the potential for rapidly developing severe thunderstorms on the open prairie.",
    },
    {
      question: "What documents do I need to bring to the North Dakota DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in North Dakota, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the North Dakota DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the North Dakota motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in North Dakota, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the North Dakota DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in North Dakota, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including North Dakota, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in North Dakota?",
      answer:
        "In North Dakota, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the North Dakota DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in North Dakota?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. North Dakota DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "North Dakota DMV Practice Test", href: "/north-dakota-dmv-practice-test" },
    { label: "North Dakota CDL Practice Test", href: "/north-dakota-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NorthDakotaMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
