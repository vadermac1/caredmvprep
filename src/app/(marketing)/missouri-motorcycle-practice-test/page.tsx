import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Missouri Motorcycle Practice Test 2025 – Free MO DOR Class M Endorsement Exam Prep",
  description:
    "Free Missouri motorcycle endorsement practice test. 25 questions, 80% passing. Missouri's unique helmet law applies to riders under 26 (not just under 18). MO DOR Class M endorsement, MSF BRC waiver, and flood crossing hazards for riders.",
  alternates: { canonical: "https://caredmvprep.com/missouri-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/missouri-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Missouri",
  stateAbbr: "MO",
  testLabel: "Motorcycle Endorsement Test",
  slug: "missouri-motorcycle-practice-test",
  headline: "Missouri Motorcycle Endorsement Practice Test 2025",
  intro:
    "Missouri's Department of Revenue (DOR) — the only state agency of its kind handling licensing — issues a Class M motorcycle endorsement on your driver's license. Missouri has one of the most unusual helmet laws in the nation: helmets are required for riders under 26 (not just under 18) and for all permit holders. The 25-question endorsement knowledge test requires 80% (20/25) to pass.",
  basedOn: "Missouri DOR Motorcycle Operator Manual (current edition)",
  about: [
    "Missouri's motorcycle endorsement is a Class M designation added to the operator's license through the Department of Revenue (DOR). The endorsement requires passing the motorcycle knowledge test (25 questions, 80%) and the motorcycle skills test, OR completing an MSF Basic RiderCourse which waives the skills test. Missouri's helmet law (RSMo 302.020) is unique nationally: helmets are required for ALL motorcycle riders and passengers under 26 years of age, and for ALL permit holders regardless of age. Riders 26 and over with a valid endorsement are not required to wear a helmet under Missouri law. This age-26 cutoff is higher than any other state's conditional helmet law.",
    "Missouri's geography creates specific motorcycle hazards. The Ozark Plateau — covering much of southern Missouri including the Current River corridor and routes US 60, MO 76, and MO 19 — is a premier motorcycling region with winding two-lane roads, scenic river crossings, and variable road surfaces. Flash flooding in the Ozarks can make river-adjacent roads extremely dangerous within minutes of heavy rain. Missouri's 'Turn Around, Don't Drown' rule applies to motorcyclists with greater urgency than car drivers — a motorcycle has no weatherproofing, and six inches of moving water at a low-water bridge can knock a motorcycle entirely off its path. Missouri has hundreds of low-water crossings on Ozark roads that may be passable in dry conditions but deadly after rain.",
  ],
  sampleQuestions: [
    {
      question: "Missouri's motorcycle helmet law requires helmets for riders under what age?",
      options: [
        "Under 18 — Missouri's standard underage helmet requirement",
        "Under 21 — Missouri's drinking age cutoff aligns with its helmet law",
        "Under 26 — Missouri's unusually high age cutoff is the most distinctive helmet law in the nation",
        "All ages — Missouri has universal helmet coverage",
      ],
      correctIndex: 2,
      explanation:
        "Missouri's helmet law (RSMo 302.020) requires helmets for riders and passengers UNDER 26 years of age. This is the highest age cutoff of any conditional helmet law in the United States — most states with conditional laws use under-18. Additionally, all Missouri motorcycle permit holders must wear a helmet regardless of age. Riders and passengers 26 and over with a valid endorsement are not legally required to wear a helmet under Missouri law. DOT-approved helmets are required when helmet use is mandated — novelty helmets without DOT certification do not satisfy the law.",
    },
    {
      question: "A Missouri motorcyclist approaches a flooded low-water crossing in the Ozarks after recent heavy rain. What does Missouri law and DOR guidance recommend?",
      options: [
        "Proceed slowly through the crossing — motorcycles with engine guards can handle up to 12 inches of water safely",
        "Turn around — Missouri's 'Turn Around, Don't Drown' applies especially to motorcyclists; floodwater at a crossing is far more dangerous on a motorcycle than in a car",
        "Dismount and walk the motorcycle across to assess the depth before riding through",
        "Flash your headlight at other drivers to warn them, then proceed at low speed",
      ],
      correctIndex: 1,
      explanation:
        "Missouri's 'Turn Around, Don't Drown' guidance applies to all vehicles but is especially critical for motorcyclists. A motorcycle has much less ground clearance, no weatherproofing, and relies entirely on two narrow tire contact patches for traction. Six inches of fast-moving water can push a motorcycle off-course; 12 inches can topple it entirely. Low-water crossings (common on Ozark county roads) may be passable in dry conditions but completely impassable — and lethal — hours after rainfall. Missouri law prohibits driving around or through road barricades at flooded crossings. On a motorcycle, crossing flooded roads is additionally dangerous because the rider has no protection if swept off.",
    },
    {
      question: "Missouri's SB 398 hands-free law applies to motorcycle operators. What must a Missouri motorcyclist do to legally use GPS navigation while riding?",
      options: [
        "Motorcyclists are exempt from Missouri's hands-free law — the law only applies to enclosed motor vehicles",
        "Missouri riders may hold a phone in a tank bag that allows them to see the screen — touching is prohibited but viewing is allowed",
        "Use a handlebar mount, tank bag display, or Bluetooth helmet speaker — the device must not be held in the hand while operating the motorcycle",
        "Missouri's hands-free law only bans texting — motorcycle GPS is explicitly permitted with a held device",
      ],
      correctIndex: 2,
      explanation:
        "Missouri's SB 398 (effective August 28, 2023) prohibits all drivers and riders from holding a wireless device while operating a motor vehicle — motorcycles are included. To use GPS legally, Missouri motorcyclists must: mount the phone on the handlebars using a motorcycle-specific holder; use a tank bag with a clear window for the screen; or use Bluetooth audio turn-by-turn navigation through a helmet speaker or earpiece. Holding the phone in hand while riding — even to glance at directions — is a violation.",
    },
    {
      question: "When following a vehicle on a Missouri rural highway, what following distance should a motorcyclist maintain?",
      options: [
        "1 car length — motorcycles stop faster than cars, so less distance is needed",
        "2 seconds — the same following distance as for cars in good conditions",
        "At least 3–4 seconds — more than a car driver needs, because a motorcycle's stopping distance is comparable to a car but reaction time requirements are higher and visibility from behind is worse",
        "Motorcycles should never follow closer than 100 feet on Missouri rural highways",
      ],
      correctIndex: 2,
      explanation:
        "Missouri's motorcycle manual recommends a following distance of at least 3–4 seconds for motorcycle riders — more than the standard 2-second car following distance. Reasons: motorcycles may need to swerve or brake suddenly to avoid road hazards (potholes, debris, gravel patches) that a car would simply drive over; motorcycle braking distances are similar to car braking distances but riders have less margin for error; and following too closely reduces the rider's ability to see road hazards, the vehicle ahead's brake lights, and traffic flow. In wet, foggy, or gravel-strewn Missouri Ozark roads, 4–6 seconds is more appropriate.",
    },
    {
      question: "Missouri's DWI law applies to motorcycle operators. A rider is stopped and found to have a BAC of 0.07% with signs of impairment. What can happen?",
      options: [
        "No action — 0.07% is below Missouri's 0.08% threshold, so no DWI charge is possible",
        "A DWI charge under the per se standard is not possible at 0.07%, but an impaired riding charge may be filed based on observed riding behavior and field sobriety test failure",
        "Missouri automatically charges DWI at 0.06% and higher — the 0.08% standard is only for first offense",
        "At 0.07%, only an administrative license action occurs — no criminal DWI charge is available below 0.08%",
      ],
      correctIndex: 1,
      explanation:
        "Missouri's DWI per se threshold is 0.08% BAC. At 0.07%, the officer cannot charge DWI on the per se standard alone. However, Missouri also has a 'driving while impaired' standard based on observable behavior: if the rider shows signs of impairment (failed field sobriety tests, erratic riding, bloodshot eyes, slurred speech), the officer can charge DWI based on impairment evidence even below 0.08%. Courts can convict on impairment evidence without a BAC above the per se threshold. Alcohol affects motorcycle operation — balance, throttle control, and lean angle judgment — at BAC levels below 0.08%, which is why any alcohol before riding significantly increases crash risk.",
    },
    {
      question: "What makes the Ozark Plateau region in southern Missouri particularly challenging for motorcyclists?",
      options: [
        "Heavy interstate truck traffic on I-44 and I-70 through the Ozarks creates dangerous drafting conditions",
        "The Ozarks have no gas stations — motorcyclists must carry extra fuel for any route longer than 50 miles",
        "Winding two-lane roads with variable surface conditions, seasonal road gravel, flash flooding of low-water crossings, and rural deer hazards — especially at dawn and dusk in autumn",
        "Missouri's Ozarks are closed to motorcycle traffic in summer due to tourist congestion restrictions",
      ],
      correctIndex: 2,
      explanation:
        "The Missouri Ozarks (southern Missouri, the Current River / Eleven Point River region) is a beloved motorcycling destination but presents genuine hazards: (1) Winding two-lane roads where tight curves can surprise riders who enter too fast; (2) Variable surfaces — loose gravel on curves, road damage from winter, seasonal resurfacing; (3) Low-water crossings on county roads that flood rapidly after rain — some Ozark roads can become impassable within an hour of heavy rainfall; (4) White-tailed deer, especially at dawn and dusk in October and November. Missouri has one of the nation's highest deer-vehicle crash rates. Ozark county roads may be miles from cell service, making self-rescue preparation important.",
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
      question: "What is unique about Missouri's motorcycle helmet law compared to other states?",
      answer:
        "Missouri's helmet law (RSMo 302.020) requires helmets for all riders and passengers under 26 — not the more common under-18 threshold. This is the highest age cutoff in any conditional helmet law in the United States. All Missouri motorcycle permit holders must also wear helmets regardless of age. Riders 26+ with a valid Class M endorsement are not legally required to wear a helmet, though DOT-certified helmets are strongly recommended. The 26 age cutoff also applies to passengers — any passenger under 26 must wear a helmet regardless of the operator's age or endorsement status.",
    },
    {
      question: "How does Missouri DOR issue a motorcycle endorsement?",
      answer:
        "Missouri DOR adds a Class M endorsement to your operator license after you: (1) pass the motorcycle knowledge test (25 questions, 80% — administered at any DOR license office); (2) pass the motorcycle skills test at a DOR testing site OR complete an MSF Basic RiderCourse (BRC), which waives the DOR skills test. BRC completion cards are accepted by Missouri DOR in lieu of the road skills test. Missouri offers MSF courses throughout the state from spring through fall. The endorsement fee is paid at the DOR office when the endorsement is added to your license.",
    },
    {
      question: "Can Missouri motorcyclists ride in the rain using the Ozark scenic routes?",
      answer:
        "Yes, but with significant precautions. Missouri's Ozark routes (MO 19, US 160, the Current River area) become substantially more dangerous in rain: (1) Painted road markings become slippery when wet — reduce speed over painted lines and arrows; (2) Metal bridge grating and cattle guard crossings require extra caution; (3) Leaf debris in autumn becomes extremely slippery when wet — especially on shaded Ozark curves; (4) Low-water crossings may be flooded with no warning — never attempt a flooded crossing on a motorcycle. Adjust tire pressure, ride smoothly without sudden inputs, and increase following distance significantly in rain.",
    },
    {
      question: "Does Missouri's flash flood law apply to motorcycle riders approaching a flooded crossing?",
      answer:
        "Yes. Missouri RSMo 304.022 prohibits driving around or through any barricade placed at a flooded road — this applies equally to motorcycles. Additionally, because motorcycles are far more vulnerable to even minor flood flows than enclosed vehicles, the 'Turn Around, Don't Drown' principle is even more urgent for riders. A low-water crossing that looks shallow (3–4 inches) may have current strong enough to push a motorcycle off its path. Missouri's DOR motorcycle manual advises riders to treat any flooded crossing as impassable and turn back regardless of whether a barricade is present.",
    },
    {
      question: "What are Missouri's rules for motorcycle permit holders?",
      answer:
        "A Missouri motorcycle learner's permit allows riding under the following restrictions: (1) Must wear a DOT-approved helmet at all times regardless of age; (2) Must ride only during daylight hours; (3) No passengers may be carried while riding on a permit; (4) The permit is valid for 12 months and cannot be renewed — if you don't progress to endorsement within 12 months, you must retest. Missouri learner's permit holders may practice riding on public roads. The permit is issued after passing the motorcycle knowledge test.",
    },
    {
      question: "What documents do I need to bring to the Missouri DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Missouri, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Missouri DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Missouri motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Missouri, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Missouri DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Missouri, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Missouri, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Missouri?",
      answer:
        "In Missouri, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Missouri DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Missouri?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Missouri DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "MO Driver's License", href: "/missouri-dmv-practice-test" },
    { label: "MO CDL Test", href: "/missouri-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MissouriMotoPage() {
  return <PracticeTestPage {...data} />;
}
