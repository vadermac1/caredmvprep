import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Delaware Motorcycle Practice Test 2025 – Free DE Endorsement Exam Prep",
  description:
    "Prepare for your Delaware motorcycle endorsement test with free practice questions covering universal helmet laws, Delaware Memorial Bridge crosswinds, Cape May-Lewes Ferry boarding, and DE DUI rules for riders.",
  alternates: { canonical: "https://caredmvprep.com/delaware-motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/delaware-motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Delaware",
  stateAbbr: "DE",
  testLabel: "Motorcycle Practice Test",
  slug: "delaware-motorcycle-practice-test",
  headline: "Delaware Motorcycle Practice Test 2025",
  intro:
    "Delaware requires a motorcycle endorsement on your driver's license to legally operate any motorcycle. The endorsement knowledge test is administered by the Delaware Division of Motor Vehicles (DMV). Delaware requires universal helmet use (Title 21 § 4185) for all riders, enforces SB 68 for motorcyclists, and requires awareness of Delaware Memorial Bridge crosswind exposure and Cape May-Lewes Ferry boarding procedures.",
  basedOn: "Delaware DMV Motorcycle Operator Manual",
  about: [
    "Delaware has a universal motorcycle helmet law under Delaware Code Title 21 § 4185 that requires all motorcycle operators and passengers to wear a DOT-approved helmet, regardless of age or riding experience. The motorcycle endorsement process through the Delaware DMV requires passing a written knowledge test and either a skills test or completion of an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse, which waives the riding skills test. Delaware's SB 68 hands-free law applies to motorcycle operators — riders may not hold a wireless device while operating a motorcycle.",
    "Delaware's compact geography includes riding challenges specific to the state. The Delaware Memorial Bridge (I-295/US 40) crossing of the Delaware River is exposed to significant crosswinds, particularly on the approach from the Delaware side, and motorcyclists should check wind conditions before attempting the crossing during storm periods. The Cape May-Lewes Ferry, which carries motorcycles between Delaware and New Jersey, requires specific boarding procedures: riders must turn off their engine after parking on the ferry deck and exit the motorcycle area. US Route 1 along the Delaware coast is popular for motorcycle riding but requires heightened alertness for pedestrians in resort areas during summer.",
  ],
  sampleQuestions: [
    {
      question:
        "Under Delaware Code Title 21 § 4185, who is required to wear a helmet while riding a motorcycle in Delaware?",
      options: [
        "Only riders under 18 years old",
        "Only riders under 21 years old",
        "All motorcycle operators and passengers, regardless of age",
        "Only riders in their first year of licensing",
      ],
      correctIndex: 2,
      explanation:
        "Delaware's universal helmet law (Title 21 § 4185) requires all motorcycle operators and passengers to wear a DOT-approved helmet, regardless of age or riding experience. Unlike states that only require helmets for younger riders (such as Arkansas or Idaho), Delaware mandates helmet use for everyone on a motorcycle. Riding without a compliant helmet is a traffic violation subject to fines.",
    },
    {
      question:
        "You are riding a motorcycle across the Delaware Memorial Bridge on I-295 when you notice a strong crosswind from the side. What is the safest technique?",
      options: [
        "Increase speed to reduce the time of crosswind exposure",
        "Reduce speed, grip the handlebars firmly, lean slightly into the wind, and stay aware of lane position",
        "Stop on the bridge shoulder until the wind dies down",
        "Move to the rightmost lane to use the bridge railing as a windbreak",
      ],
      correctIndex: 1,
      explanation:
        "Crosswind exposure on a suspension bridge like the Delaware Memorial Bridge requires the rider to reduce speed, maintain a firm grip on the handlebars, and lean slightly into the wind to maintain a straight-line path. Crosswinds can push a motorcycle sideways unexpectedly, particularly when emerging from a sheltered area into the open span. Stopping on the bridge shoulder creates additional hazards. Checking wind conditions and DelDOT advisories before a bridge crossing in stormy weather is good practice.",
    },
    {
      question:
        "When loading a motorcycle onto the Cape May-Lewes Ferry, what must the operator do after parking on the ferry deck?",
      options: [
        "Keep the engine running at idle to maintain battery charge",
        "Remain seated on the motorcycle with the kickstand up throughout the crossing",
        "Turn off the engine, secure the motorcycle, and proceed to the passenger areas — do not remain on the ferry deck",
        "Display hazard lights and remain with the motorcycle",
      ],
      correctIndex: 2,
      explanation:
        "The Cape May-Lewes Ferry requires all vehicle operators, including motorcyclists, to turn off their engines after parking on the vehicle deck and to leave the vehicle area for the passenger decks. Motorcycles should be secured with the kickstand down and may have additional tie-down options available through ferry crew. Operators may not remain on the vehicle deck during the crossing. When arriving at the destination port, wait for crew instructions before returning to the motorcycle.",
    },
    {
      question:
        "Does Delaware's SB 68 hands-free law apply to motorcycle operators?",
      options: [
        "No, it applies only to drivers in enclosed vehicles",
        "Yes, motorcycle operators are prohibited from holding a wireless device while riding",
        "Yes, but only when the motorcycle is moving faster than 25 mph",
        "No, motorcycles are exempt because the operator cannot simultaneously hold a device and steer",
      ],
      correctIndex: 1,
      explanation:
        "Delaware's SB 68 hands-free law applies to all motor vehicle operators in Delaware, including motorcycle riders. Physically holding a wireless device while operating a motorcycle is a primary enforcement offense — an officer can stop a rider solely for this violation. GPS devices mounted to the handlebars and controlled hands-free are generally permitted. The law applies at all times while the motorcycle is in motion.",
    },
    {
      question:
        "What is Delaware's DUI BAC limit for a motorcycle rider who is 20 years old?",
      options: ["0.08%", "0.04%", "0.00%", "0.02%"],
      correctIndex: 3,
      explanation:
        "For motorcycle riders under 21 years old, Delaware's DUI law sets the BAC limit at 0.02% — a near-zero tolerance standard. Any detectable blood alcohol concentration at or above 0.02% results in a DUI charge for an under-21 rider in Delaware. For riders 21 and older, the standard 0.08% limit applies. Penalties for DUI on a motorcycle are the same as for car DUI, including mandatory license revocation.",
    },
    {
      question:
        "On US Route 1 through Rehoboth Beach in summer, what is the most important awareness point for motorcycle riders?",
      options: [
        "Speed limits increase to 50 mph during off-peak hours on US 1",
        "Pedestrian traffic is extremely heavy and Delaware law requires yielding to pedestrians in crosswalks",
        "Motorcycles are prohibited on US 1 during July and August",
        "The road surface on US 1 becomes slick from sunscreen oil during summer",
      ],
      correctIndex: 1,
      explanation:
        "US Route 1 through Delaware's beach resort communities is heavily congested with pedestrians in summer. Delaware law requires all drivers and motorcycle riders to yield to pedestrians who are in, or are entering, marked crosswalks. Law enforcement agencies along the Delaware coast actively enforce crosswalk violations during the summer season. Motorcycle riders should reduce speed, increase alertness for pedestrians crossing mid-block or at crosswalks, and be prepared for sudden stops in slow-moving summer traffic.",
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
      question: "Is a helmet required to ride a motorcycle in Delaware?",
      answer:
        "Yes. Delaware has a universal helmet law under Title 21 § 4185 that requires all motorcycle operators and passengers to wear a DOT-approved helmet regardless of age or riding experience. There are no age-based exceptions in Delaware — unlike states such as Arkansas (under 21 only) or Iowa (no requirement for adults). Riding without a compliant helmet is a traffic violation subject to fines.",
    },
    {
      question: "How do I get a motorcycle endorsement in Delaware?",
      answer:
        "To obtain a motorcycle endorsement in Delaware, you must visit a Delaware DMV office and pass a motorcycle knowledge test. You must then either pass a motorcycle riding skills test at a DMV testing site, or complete an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse, which waives the skills test. The endorsement is added to your Delaware driver's license. If you complete the MSF course, you may also qualify for an insurance discount from some carriers.",
    },
    {
      question: "Can I take my motorcycle on the Cape May-Lewes Ferry?",
      answer:
        "Yes, motorcycles are accepted on the Cape May-Lewes Ferry between Lewes, Delaware and Cape May, New Jersey. After parking in the designated motorcycle area on the vehicle deck, riders must turn off their engines, secure their motorcycles with the kickstand down, and proceed to the passenger areas for the duration of the crossing. Riders may not remain on the vehicle deck. Reservations are recommended during peak summer months as the ferry can fill quickly.",
    },
    {
      question: "What crosswind hazards should Delaware motorcycle riders be aware of?",
      answer:
        "The Delaware Memorial Bridge (I-295/US 40) crossing of the Delaware River is particularly exposed to crosswinds and is one of the most prominent crosswind hazards for Delaware motorcycle riders. The bridge's open span offers no wind protection, and winds that are channeled up the Delaware River can be significantly stronger than what riders experienced on the approach roads. During storm systems or high-wind advisories, DelDOT may restrict high-profile vehicles from the bridge, but motorcycles may still be permitted — riders should exercise extreme caution and consider waiting if winds are strong.",
    },
    {
      question: "What are the DUI consequences for motorcycle riders in Delaware?",
      answer:
        "Delaware DUI law applies fully to motorcycle operators. A rider 21 or older who tests at 0.08% BAC or higher faces DUI charges including mandatory license revocation, fines, possible jail time, and mandatory substance abuse evaluation. For riders under 21, the BAC limit is 0.02%. Delaware has enhanced DUI penalties for high-BAC offenses (0.16% or higher). Alcohol impairs the balance, coordination, and reaction time required for safe motorcycle operation. An ignition interlock device may be required for license reinstatement after a DUI revocation.",
    },
    {
      question: "What documents do I need to bring to the Delaware DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Delaware, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Delaware DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Delaware motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Delaware, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Delaware DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Delaware, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Delaware, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Delaware?",
      answer:
        "In Delaware, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Delaware DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Delaware?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Delaware DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "Delaware DMV Practice Test", href: "/delaware-dmv-practice-test" },
    { label: "Delaware CDL Practice Test", href: "/delaware-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function DelawareMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
