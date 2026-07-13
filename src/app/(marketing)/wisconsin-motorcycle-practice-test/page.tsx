import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Wisconsin Motorcycle Practice Test 2025 – Free WisDOT Class M Endorsement Exam Prep",
  description:
    "Free Wisconsin motorcycle endorsement practice test. Wisconsin's first OWI is civil (not criminal) — same applies to motorcycle operators. Helmet required under 18 only. WisDOT MSF BRC waiver and farm vehicle road-sharing rules.",
  alternates: { canonical: "https://caredmvprep.com/wisconsin-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/wisconsin-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Wisconsin",
  stateAbbr: "WI",
  testLabel: "Motorcycle Endorsement Test",
  slug: "wisconsin-motorcycle-practice-test",
  headline: "Wisconsin Motorcycle Endorsement Practice Test 2025",
  intro:
    "Wisconsin's Division of Motor Vehicles (WisDOT) issues a Class M motorcycle endorsement after passing the motorcycle knowledge test and skills test. Wisconsin's unique OWI law — where a first offense is a civil infraction, not criminal — applies equally to motorcycle operators. Helmets are required only for riders under 18. Wisconsin's rural roads feature farm equipment, sand patches, and severe winter conditions.",
  basedOn: "Wisconsin DOT Motorcycle Operator's Manual (current edition)",
  about: [
    "Wisconsin's Class M endorsement is added to the standard operator's license by WisDOT after passing the motorcycle knowledge test and skills test, or by completing an approved MSF Basic RiderCourse (BRC) which waives the skills test. Wisconsin's helmet law requires helmets only for riders under 18 and for permit holders; riders 18+ with a valid endorsement are not legally required to wear a helmet. Wisconsin's nationally unique OWI law — where a first OWI offense is a civil infraction with no criminal record — applies to motorcycle operators exactly as it does to car drivers. A first OWI on a motorcycle: $150–$300 fine, 6–9 month license revocation, and mandatory alcohol assessment. But no jail and no criminal record unless a passenger under 16 was present.",
    "Wisconsin motorcycle riders face specific road hazards: spring road conditions feature sand and gravel washed onto rural roads from winter, making March–May the highest-risk season for traction loss on corners. Wisconsin's vast agricultural regions mean slow-moving farm equipment is a regular road-sharing hazard — riders should slow significantly when approaching a tractor or combine from behind. Deer crossings are especially concentrated along river corridors in October–November. Wisconsin's cold climate also means fuel can behave differently in colder temperatures, and oil viscosity affects handling in sub-40°F conditions. Riders who continue riding through fall should inspect tire pressure regularly, as cold air reduces tire pressure significantly.",
  ],
  sampleQuestions: [
    {
      question: "Wisconsin's first-offense OWI law applies to motorcycle operators. If a rider is convicted of a first OWI, what is the legal classification of the offense?",
      options: [
        "A Class A misdemeanor with potential jail time",
        "A civil infraction — not a criminal offense — with a fine but no criminal record (unless a passenger under 16 was present)",
        "A felony OWI because operating a motorcycle while intoxicated is inherently more dangerous",
        "A traffic infraction with no license action — first OWI on a motorcycle is treated more leniently than in a car",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin's unique first-offense OWI civil standard (Wis. Stat. 346.63) applies equally to motorcycle operators. A first OWI on a motorcycle (without aggravating factors): civil infraction, $150–$300 fine, 6–9 month license revocation, mandatory alcohol/drug assessment — no criminal record, no jail. The single exception: if a passenger under 16 is on the motorcycle, the offense becomes criminal immediately. Second OWI (within 10 years): criminal misdemeanor. The civil treatment of first OWI makes Wisconsin unique among all 50 states — and this law applies to all motor vehicle operators, not just car drivers.",
    },
    {
      question: "Wisconsin requires motorcycle helmets for which riders?",
      options: [
        "All riders regardless of age — Wisconsin has a universal helmet law",
        "Only riders under 18 and permit holders — adult endorsed riders are not legally required to wear helmets",
        "Riders under 21 and those with less than 2 years of endorsement experience",
        "No riders — Wisconsin removed its helmet requirement entirely",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin's helmet law requires DOT-approved helmets for: (1) all riders under age 18; (2) all motorcycle permit holders regardless of age. Adult riders 18+ with a valid Class M endorsement are not legally required to wear a helmet under Wisconsin law (Wis. Stat. 347.485). However, WisDOT and the MSF strongly recommend helmets for all riders — helmets reduce fatal head injury risk substantially. Wisconsin endorsement holders also riding with passengers under 18 must ensure those passengers are helmeted.",
    },
    {
      question: "A Wisconsin motorcyclist encounters a slow-moving combine harvester on a rural county road during fall harvest. What is the safest approach?",
      options: [
        "Pass quickly on the left to minimize time in the opposing lane — speed is the safest passing strategy",
        "Flash your headlight to signal the combine operator to pull over",
        "Slow down significantly, increase following distance to see around the equipment, wait for a clear straight section with full visibility, and pass wide if safe",
        "Pass on the right shoulder — farm equipment must yield to motorcycles",
      ],
      correctIndex: 2,
      explanation:
        "Slow-moving farm equipment (tractors, combines, planting equipment) is a genuine hazard on Wisconsin rural roads, especially in spring planting and fall harvest. Safe motorcycle approach: reduce speed significantly well before reaching the equipment; increase following distance to 4+ seconds to see around the wide machinery; do not assume the operator sees you or knows you're there; watch for sudden turns into fields or driveways (farm equipment often turns with no warning); pass only on a clear, straight section with full visibility ahead and adequate clearance — farm equipment can be 12–18 feet wide, requiring a full opposite lane for safe passing.",
    },
    {
      question: "Wisconsin's hands-free law (Act 12, 2023) applies to motorcycle riders. How should a Wisconsin motorcyclist legally receive navigation instructions?",
      options: [
        "Motorcyclists may hold a phone in one hand while riding — Wisconsin's Act 12 only covers car drivers",
        "Via a tank bag with a transparent screen cover, handlebar mount, or Bluetooth earpiece — holding the device is prohibited",
        "Wisconsin requires a dedicated GPS unit mounted to the handlebars — phone GPS is illegal even when mounted",
        "GPS use is not addressed by Act 12 — only texting and calling are prohibited",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin's Act 12 (effective April 26, 2023) prohibits holding a wireless device while operating any motor vehicle — motorcycles included. Permitted methods for GPS navigation: handlebar-mounted phone holder, tank bag with screen window, helmet-integrated navigation display, or Bluetooth audio with turn-by-turn directions. The prohibition is on physical hand contact with the device — mounted, non-contact navigation is legal. Wisconsin motorcycle retailers carry a variety of handlebar mount and tank bag accessories. A first Act 12 violation: $100 fine. Subsequent violations: higher fines.",
    },
    {
      question: "What is the correct technique for a Wisconsin motorcyclist riding through a corner when gravel or sand is discovered mid-turn?",
      options: [
        "Apply both brakes immediately and stop within the corner",
        "Straighten the motorcycle completely and exit the turn at a higher speed than planned",
        "Maintain smooth throttle and lean angle, look through the curve to the exit, and ride through the gravel calmly without sudden inputs — abrupt changes are more dangerous than the gravel itself",
        "Shift to a lower gear and increase engine braking to slow quickly through the corner",
      ],
      correctIndex: 2,
      explanation:
        "Encountering gravel, sand, or debris mid-corner is one of the most common Wisconsin motorcycle crash scenarios, especially in spring (road sand from winter). The safest technique: do NOT brake suddenly or change lean angle abruptly — these inputs cause the tire to lose contact with the road. Instead: maintain your current speed and lean angle; keep smooth throttle; look through the curve to the exit (where you look is where the bike goes); let the motorcycle ride through the corner. Abrupt braking or steering changes in a corner on loose gravel creates a skid that is far more dangerous than riding through the gravel at maintained lean.",
    },
    {
      question: "Wisconsin winters end the riding season for most motorcyclists. What inspection should Wisconsin riders perform before the first spring ride?",
      options: [
        "Only check the gas tank — fuel is the only item that degrades over winter storage",
        "A T-CLOCS pre-ride inspection: Tires, Controls, Lights and Electrics, Oil, Chassis, and Stands",
        "Wisconsin law requires a professional motorcycle shop inspection after winter storage before any riding",
        "Only battery and tire pressure — all other systems maintain condition over winter storage",
      ],
      correctIndex: 1,
      explanation:
        "The MSF T-CLOCS inspection (Tires, Controls, Lights and Electrics, Oil, Chassis, and Stands) is the standard pre-ride inspection protocol — and is especially critical after winter storage. After months without use: (1) Tires may have flat spots from sitting and cold may have reduced pressure significantly; (2) Controls — throttle, clutch, and brake cables may have stiffened or corroded; (3) Battery may need charging or replacement; (4) Oil and other fluids should be checked for level and contamination; (5) Chain lubricant may have dried; (6) Brake fluid may have absorbed moisture. Spring post-storage inspection prevents first-ride failures that disproportionately cause crashes among riders returning to riding.",
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
      question: "Does Wisconsin's first-OWI civil rule benefit motorcycle riders the same way it benefits car drivers?",
      answer:
        "Yes. Wisconsin's unique first-offense OWI civil standard applies identically to motorcycle operators: civil infraction, $150–$300 fine, 6–9 month license revocation, alcohol assessment — no criminal record, no jail. The exception (passenger under 16 makes it criminal immediately) applies to motorcycle passengers as well. However, Wisconsin DMV's approach to rider safety education means a first OWI on a motorcycle may trigger additional requirements related to the motorcycle endorsement specifically. The civil nature of a first OWI does not eliminate the license revocation or the practical career and insurance consequences.",
    },
    {
      question: "How do I get a Wisconsin Class M motorcycle endorsement?",
      answer:
        "Wisconsin Class M endorsement process: (1) Pass the motorcycle knowledge test at any WisDOT service center; (2) Complete an approved MSF Basic RiderCourse (BRC) — this waives the road skills test; OR pass WisDOT's motorcycle road skills test. The BRC includes classroom and range exercises. After completing steps 1 and 2, present documentation at a WisDOT service center to have the Class M added to your license. Wisconsin offers MSF BRC courses at multiple locations statewide through approved training sites.",
    },
    {
      question: "What are Wisconsin's spring motorcycle riding hazards?",
      answer:
        "Wisconsin spring riding (March–May) hazards: (1) Road sand and gravel — plowed and sanded winter roads deposit sand at corners and low spots; approach corners at reduced speed; (2) Road damage — frost heaves, potholes, and pavement cracking are maximum in early spring before summer road repairs; (3) Deer in rut — spring deer movement is elevated as whitetails resume foraging after winter; dawn/dusk risk is highest; (4) Cold mornings — tire pressure and traction are reduced in cold temperatures; check tire pressure after the bike warms up. May is statistically the most dangerous month for Wisconsin motorcyclists.",
    },
    {
      question: "Can Wisconsin motorcycle riders split lanes or filter through stopped traffic?",
      answer:
        "Lane splitting (riding between lanes of moving traffic) is illegal in Wisconsin. Lane filtering (moving between stopped cars at a red light) is also not specifically authorized and is generally treated as an illegal lane change under Wisconsin traffic law. Wisconsin motorcyclists must occupy a full lane and may not drive between lanes of traffic or use a single lane simultaneously with another vehicle except when both riders agree to share a lane for formation riding. Wisconsin has not enacted lane-splitting or lane-filtering legislation as of the most recent updates to this content.",
    },
    {
      question: "Does Wisconsin require eye protection for motorcycle riders?",
      answer:
        "Wisconsin law requires eye protection for motorcycle riders unless the motorcycle is equipped with a windscreen. Approved eye protection includes: DOT-approved goggles, a full-face helmet with face shield, or approved safety glasses. Regular sunglasses (not rated as safety glasses) may not meet the standard. Wisconsin's wind, insects, and road debris make eye protection a practical necessity beyond legal compliance. A face shield on a full-face helmet provides the most comprehensive protection and also reduces wind fatigue on longer Wisconsin rides.",
    },
    {
      question: "What documents do I need to bring to the Wisconsin DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Wisconsin, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Wisconsin DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Wisconsin motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Wisconsin, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Wisconsin DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Wisconsin, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Wisconsin, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Wisconsin?",
      answer:
        "In Wisconsin, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Wisconsin DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Wisconsin?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Wisconsin DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "WI Driver's License", href: "/wisconsin-dmv-practice-test" },
    { label: "WI CDL Test", href: "/wisconsin-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function WisconsinMotoPage() {
  return <PracticeTestPage {...data} />;
}
