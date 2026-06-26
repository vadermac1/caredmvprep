import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Oklahoma Motorcycle Practice Test 2025 – Free OK DPS Class M Endorsement Exam Prep",
  description:
    "Free Oklahoma motorcycle endorsement practice test. 25 questions, 80% passing. Universal helmet ALL riders, Oklahoma DPS agency, tornado/severe weather on a motorcycle, zero-tolerance under-21, and SB 1161 hands-free for riders.",
  alternates: { canonical: "https://caredmvprep.com/oklahoma-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/oklahoma-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Oklahoma",
  stateAbbr: "OK",
  testLabel: "Motorcycle Endorsement Test",
  slug: "oklahoma-motorcycle-practice-test",
  headline: "Oklahoma Motorcycle Endorsement Practice Test 2025",
  intro:
    "Oklahoma's Department of Public Safety (DPS) issues a Class M motorcycle endorsement. The 25-question test requires 80% (20/25) to pass. Oklahoma has a universal helmet law — all riders and passengers must wear DOT-approved helmets. Tornado Alley location creates life-safety riding scenarios unique to Oklahoma. Oklahoma's zero-tolerance under-21 BAC (0.00%) applies to motorcycle operators.",
  basedOn: "Oklahoma DPS Motorcycle Operator Manual (current edition)",
  about: [
    "Oklahoma's motorcycle endorsement (Class M) is issued by the Department of Public Safety (DPS). Applicants must pass the knowledge test (25 questions, 80%) and the motorcycle skills test, OR complete an approved MSF BRC which waives the skills test. Oklahoma has a universal helmet law (47 O.S. § 12-609): all motorcycle riders and passengers must wear DOT-approved helmets on public roads — no age or experience exceptions. Oklahoma's zero-tolerance DUI law for riders under 21 (0.00% BAC) applies to motorcycle operators. SB 1161 (effective November 1, 2023) applies to motorcycle operators — holding a device while riding is prohibited.",
    "Oklahoma's position in Tornado Alley creates a unique safety consideration that the Oklahoma DPS motorcycle manual addresses: what should a motorcycle rider do when severe weather or a tornado threatens? Because motorcycles provide zero weather protection, severe weather encounters create extreme life-safety risk for riders. Oklahoma's Ouachita Mountain region in southeast Oklahoma offers scenic riding on US 270, US 271, and state routes through Talimena Scenic Drive — with tight curves, forest-shaded surfaces, and varying road conditions. Oklahoma's Red Dirt country roads in the northwest can have crosswind conditions from open-plain weather patterns. Oklahoma's spring and fall are the safest riding seasons; summer heat in the 100–110°F range across western Oklahoma requires heat management strategies.",
  ],
  sampleQuestions: [
    {
      question: "An Oklahoma motorcyclist on the open highway sees a tornado forming in the distance. The motorcycle cannot outrun the tornado. What is the correct action?",
      options: [
        "Accelerate to maximum speed perpendicular to the tornado's path — motorcycles can outrun tornadoes under ideal conditions",
        "Shelter under the nearest highway overpass — the concrete structure provides adequate tornado protection",
        "Get off the motorcycle immediately, move away from it, and lie flat in the lowest ground available (a ditch or depression) — cover your head",
        "Stay on the motorcycle in a stopped position with the wheels aligned into the tornado — this reduces the motorcycle's drag profile",
      ],
      correctIndex: 2,
      explanation:
        "On a motorcycle, a tornado encounter is an extreme emergency. Unlike car drivers, motorcycle riders cannot shelter inside their vehicle. The correct action is identical to the Oklahoma DPS guidance for drivers, but even more urgent: (1) Get off the motorcycle — motorcycles can be thrown by tornado winds, potentially landing on the rider; (2) Abandon the motorcycle and move away from it; (3) Find the lowest available ground — a roadside ditch, culvert, or low depression; (4) Lie flat face-down, cover your head with your arms. Do NOT shelter under an overpass — the venturi effect is lethal for anyone under a bridge in tornado conditions, and a motorcycle rider has zero structural protection.",
    },
    {
      question: "Oklahoma has zero tolerance for drivers and riders under 21. What BAC level is legal for a motorcycle operator under 21 in Oklahoma?",
      options: [
        "0.02% — a near-zero standard that accounts for trace alcohol",
        "0.04% — the CDL commercial vehicle standard applied to underage riders",
        "0.00% — any detectable amount of alcohol is a DUI violation for Oklahoma riders under 21",
        "0.08% — Oklahoma uses a uniform adult standard regardless of age",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma's zero-tolerance law (47 O.S. § 6-107.3) sets the BAC limit at 0.00% for all operators under 21 — including motorcycle riders. Any detectable amount of alcohol is a per se DUI violation. This is stricter than states that use 0.02% (which allows for trace amounts from non-beverage sources). A first under-21 DUI on a motorcycle: 6-month license suspension, mandatory alcohol assessment, and potential criminal charges. Alcohol significantly impairs the balance and fine motor control that motorcycle operation requires — even at very low BAC levels below the adult 0.08% threshold.",
    },
    {
      question: "Oklahoma's universal helmet law requires DOT-approved helmets for which motorcycle riders?",
      options: [
        "Riders under 18 only",
        "Riders under 21 — Oklahoma's drinking age mirrors its helmet requirement",
        "All riders and passengers of any age — Oklahoma has universal helmet coverage",
        "Only permit holders — endorsed riders 18+ have a choice",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma Statute 47 O.S. § 12-609 requires all motorcycle riders and passengers on public roads to wear a DOT-approved helmet — regardless of age, endorsement status, or experience. Oklahoma's universal helmet law has no exceptions. The helmet must be DOT-certified, not a novelty helmet. Oklahoma also requires eye protection — an approved face shield, safety glasses, or goggles — unless the motorcycle has an adequate windscreen. Oklahoma's knowledge test covers both the helmet and eye protection requirements.",
    },
    {
      question: "Oklahoma's Talimena Scenic Drive in the Ouachita Mountains offers challenging motorcycle riding. What specific hazard is most common on this route?",
      options: [
        "Extreme traffic congestion during summer tourist season",
        "Debris from rockfall, shaded road sections with extended wetness, and deer crossing at dawn and dusk",
        "Tollbooths that motorcycles cannot use — Talimena requires cash payment which riders may not carry",
        "Oil pipeline crossings that create slippery road surfaces near Talimena Drive",
      ],
      correctIndex: 1,
      explanation:
        "Oklahoma's Talimena Scenic Drive (connecting Talihina, OK to Mena, AR) runs along the ridgeline of the Ouachita Mountains and is a premier motorcycle route. Specific hazards: (1) Fallen rock and debris from cut faces alongside the road — especially after rain or freeze-thaw cycles; (2) Forest-shaded sections that remain wet and potentially icy hours after rain or near freezing temperatures; (3) White-tailed deer crossings — particularly at dawn and dusk in October–November; (4) Curves with limited sight distance due to forested ridgeline; (5) Limited cell service for most of the route. Riders should also note that fuel is not available for most of the scenic drive's length — fill up in Talihina or Mena before starting.",
    },
    {
      question: "Oklahoma's SB 1161 (hands-free law, November 2023) applies to motorcycle operators. How should an Oklahoma rider receive navigation instructions legally?",
      options: [
        "Oklahoma motorcycle riders are exempt from SB 1161",
        "Using a phone GPS held in one hand — Oklahoma's law only prohibits texting, not GPS viewing",
        "Via a handlebar-mounted phone holder, Bluetooth helmet speaker, or tank bag display — holding the device while riding is prohibited",
        "Oklahoma requires a dedicated motorcycle GPS unit — phone GPS apps are banned even when mounted",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma's SB 1161 (effective November 1, 2023) prohibits all drivers and riders from physically holding or manually using a wireless device while operating a motor vehicle — motorcycles are included. To legally use GPS navigation, riders must use a handlebar mount, tank bag with a screen window, or Bluetooth helmet audio. The device must not be held in hand or manually touched while moving. Voice-activated navigation through a Bluetooth speaker or earpiece is fully permitted. First violation: $100 fine. Subsequent violations: $200.",
    },
    {
      question: "What type of road surface hazard should Oklahoma motorcycle riders be especially alert for in western Oklahoma during spring and summer?",
      options: [
        "Ice-covered roads — western Oklahoma has extreme winter ice conditions year-round",
        "Gravel roads that look paved from a distance — a significant number of western Oklahoma roads are unpaved",
        "Cattle guards on range roads — crossing cattle guards at speed requires specific technique",
        "Seasonal wildfire smoke that reduces visibility on open-range roads",
      ],
      correctIndex: 2,
      explanation:
        "Western Oklahoma's ranch and range land is accessed by thousands of miles of county roads — many of which have cattle guards (metal grid crossings used to prevent livestock from crossing road boundaries). Motorcycle tires can become trapped in cattle guard gaps if not crossed correctly. The correct technique: approach at reduced speed; line up perpendicular to the guard (not at an angle); maintain steady throttle through the crossing; avoid sudden braking or acceleration on the guard surface. Some cattle guards on Oklahoma county roads lack adequate signage — riders should watch for approaching grazing land that may indicate an upcoming cattle guard.",
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
      question: "Does Oklahoma require helmets for all motorcycle riders?",
      answer:
        "Yes. Oklahoma's universal helmet law (47 O.S. § 12-609) requires all motorcycle riders and passengers to wear DOT-approved helmets on public roads — no age or experience exceptions. Eye protection (face shield, goggles, or approved safety glasses) is also required unless the motorcycle has a windscreen. Oklahoma's universal requirement applies to both residents and visitors riding in the state.",
    },
    {
      question: "What should Oklahoma motorcycle riders do when a tornado warning is issued?",
      answer:
        "Oklahoma DPS tornado guidance for motorcycle riders: (1) Immediately seek a substantial building with a basement or interior room; (2) If no building is available, get off the motorcycle (it can be thrown by tornado winds), abandon it, and move away; (3) Find the lowest depression in the ground — ditch, culvert, or low area; (4) Lie flat face-down, cover your head with your arms; (5) Do NOT shelter under a highway overpass — the venturi effect there is lethal. Tornado Alley conditions can develop with 15–30 minutes notice — carrying a weather radio or using a weather alert app is strongly recommended for Oklahoma riders.",
    },
    {
      question: "How does Oklahoma DPS issue a motorcycle endorsement?",
      answer:
        "Oklahoma Class M endorsement: (1) Pass the motorcycle knowledge test (25 questions, 80%) at an Oklahoma DPS testing station; (2) Pass the DPS motorcycle skills test OR complete an MSF BRC — BRC completion waives the skills test; (3) Pay the fee and have the endorsement added to the license. Oklahoma motorcycle permit holders may practice riding while supervised by an endorsed rider 21+. Oklahoma's endorsement process is handled at DPS testing stations statewide.",
    },
    {
      question: "Is lane splitting legal in Oklahoma?",
      answer:
        "No. Lane splitting and lane filtering are not legal in Oklahoma. Motorcycles must occupy a full travel lane. Two motorcycles may share a single lane by mutual agreement, but a motorcycle cannot ride between lanes of traffic. Oklahoma has not enacted lane-splitting or lane-filtering legislation.",
    },
    {
      question: "What equipment does Oklahoma require on motorcycles beyond the DOT helmet?",
      answer:
        "Oklahoma requires all motorcycle operators to wear eye protection — an approved face shield (on the helmet), safety glasses, or goggles — unless the motorcycle is equipped with a windscreen that provides equivalent protection. Oklahoma also requires motorcycles to have functional headlights (including when parked/standing at night), taillights, brake lights, mirrors (at least one), horn, and appropriate tires. Turn signals are required on motorcycles manufactured after 1973. Oklahoma motorcycles must be registered and display current license plates.",
    },
    {
      question: "What documents do I need to bring to the Oklahoma DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Oklahoma, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Oklahoma DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Oklahoma motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Oklahoma, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Oklahoma DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Oklahoma, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Oklahoma, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Oklahoma?",
      answer:
        "In Oklahoma, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Oklahoma DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Oklahoma?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Oklahoma DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "OK Driver's License", href: "/oklahoma-dmv-practice-test" },
    { label: "OK CDL Test", href: "/oklahoma-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OklahomaMotoPage() {
  return <PracticeTestPage {...data} />;
}
