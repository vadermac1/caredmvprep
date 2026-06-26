import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Alabama Motorcycle Practice Test 2025 – Free AL ALEA Class M Endorsement Exam Prep",
  description:
    "Free Alabama motorcycle endorsement practice test. 25 questions, 80% passing. Universal helmet law ALL riders (no exceptions), ALEA agency, Hands-Free Act (2024) applies to motorcyclists, and MSF BRC waiver. Pass your Alabama motorcycle test first try.",
  alternates: { canonical: "https://caredmvprep.com/alabama-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/alabama-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Alabama",
  stateAbbr: "AL",
  testLabel: "Motorcycle Endorsement Test",
  slug: "alabama-motorcycle-practice-test",
  headline: "Alabama Motorcycle Endorsement Practice Test 2025",
  intro:
    "Alabama's Law Enforcement Agency (ALEA) issues a motorcycle endorsement (Class M) on your Alabama driver's license. Alabama has a universal helmet law — DOT-approved helmets are required for ALL riders and passengers of any age with no exceptions. The 25-question endorsement test requires 80% (20/25) to pass. Alabama's Hands-Free Act (effective January 1, 2024) applies to all riders.",
  basedOn: "Alabama DPS Motorcycle Operator's Manual (current ALEA edition)",
  about: [
    "Alabama's motorcycle endorsement is a Class M designation issued by the Alabama Law Enforcement Agency (ALEA) Driver License Division. Applicants must pass the motorcycle knowledge test (25 questions, 80%) and the motorcycle skills test, OR complete an approved MSF Basic RiderCourse (BRC), which waives the ALEA skills test. Alabama has a universal helmet law (Code of Ala. 1975 § 32-5A-245): ALL motorcycle riders and passengers must wear a DOT-approved helmet at all times on public roads — no age or experience exceptions. Alabama's Hands-Free Act (Act 2023-382, effective January 1, 2024) applies to motorcycle operators — holding or using a wireless device while riding is prohibited statewide.",
    "Alabama's riding environment spans from the Gulf Coast beaches of Gulf Shores and Orange Beach — with coastal two-lane routes and bridge crossings subject to crosswinds and sea spray — to the Appalachian ridges of northeast Alabama, where US 431 and AL 35 offer mountain roads with variable surface conditions. Alabama's summer heat (frequently exceeding 100°F in July–August) creates specific riding hazards: road surface softening on asphalt increases tire deformation risk; heat mirages obscure road conditions ahead; and rider dehydration becomes a genuine safety issue on longer summer rides. Protective gear worn in summer must balance abrasion protection against heat management.",
  ],
  sampleQuestions: [
    {
      question: "Alabama's helmet law requires DOT-approved helmets for which motorcycle riders?",
      options: [
        "Only riders under 18 — adults may choose whether to wear a helmet",
        "Riders with fewer than 2 years of endorsement experience — experienced riders are exempt",
        "All motorcycle riders and passengers on public roads — Alabama has a universal helmet law with no age or experience exceptions",
        "Only permit holders — endorsed riders are not required to wear helmets under Alabama law",
      ],
      correctIndex: 2,
      explanation:
        "Alabama Code § 32-5A-245 requires ALL motorcycle riders and passengers on public roads to wear a DOT-approved helmet — regardless of age, experience, or endorsement status. Alabama has a universal helmet law with no exceptions based on age or how long you've been riding. Novelty helmets without DOT certification do not satisfy the requirement. Face shields or eye protection are also required (or the motorcycle must have a windscreen). Alabama's universal helmet law is among the strictest nationally and is directly tested on the endorsement knowledge exam.",
    },
    {
      question: "Alabama's Hands-Free Act (2024) applies to motorcycle operators. A rider wants to check their GPS while stopped at a red light. Is this permitted?",
      options: [
        "Yes — vehicles stopped at red lights are not 'operating' and are exempt from hands-free requirements",
        "Yes — motorcyclists are exempt from hands-free laws because they cannot safely use Bluetooth while riding",
        "No — Alabama's Hands-Free Act applies to all motor vehicles including motorcycles, and 'operating' includes being stopped at a traffic control device",
        "Yes — the law only applies to texting, not looking at a GPS map",
      ],
      correctIndex: 2,
      explanation:
        "Alabama's Hands-Free Act (Act 2023-382, effective January 1, 2024) prohibits holding or using a wireless device while operating a motor vehicle — which includes motorcycles. 'Operating' encompasses being stopped at a traffic signal. Looking at a GPS map while stopped at a red light is a violation. Riders who want GPS navigation should use a handlebar-mounted phone holder with voice turn-by-turn navigation, a tank bag with transparent screen, or a Bluetooth helmet speaker. A first violation is a $50 fine; second: $100; subsequent: $150.",
    },
    {
      question: "An Alabama motorcyclist approaches a curve on a mountain road in northeast Alabama and realizes they are going too fast. What is the correct action?",
      options: [
        "Apply both brakes firmly to slow to a safe speed, then lean through the corner",
        "Do not brake in the corner — straighten the bike and ride off the road into the gravel shoulder",
        "Reduce throttle smoothly, add lean angle by pressing on the inside grip (countersteering), and look through the curve to the exit point",
        "Apply only the rear brake to reduce speed while maintaining the lean angle",
      ],
      correctIndex: 2,
      explanation:
        "If you enter a curve too fast, the MSF technique is: (1) Smoothly reduce throttle — do not chop it abruptly; (2) Add lean angle by pressing on the inside grip (countersteering) — a lower lean angle increases the turning radius, requiring even more lean to make the corner; (3) Look through the curve toward the exit — your vision should be directed well ahead of your current position. Abrupt braking while leaned over can cause tire slide. Straightening the bike increases the turning radius (making you exit the curve) — only do this if you have enough room off the road to stop safely. The best approach is to slow to the appropriate entry speed BEFORE the curve begins.",
    },
    {
      question: "What specific summer riding hazard is most prevalent in Alabama's coastal and southern regions?",
      options: [
        "Sea fog — coastal Alabama fog makes highway riding impossible in summer",
        "Extreme heat — road surface temperatures can exceed 140°F in July–August, causing asphalt softening and increased tire deformation risk",
        "Seasonal road closures — Alabama closes beach routes to motorcycles during summer tourist season",
        "Hurricane-force winds — Gulf Coast winds regularly exceed motorcycle operating limits in summer",
      ],
      correctIndex: 1,
      explanation:
        "Alabama's summer temperatures are among the highest in the southeastern United States. Coastal and southern Alabama roads in July and August can have asphalt surface temperatures exceeding 140°F — significantly higher than the ambient air temperature. This extreme heat causes: asphalt softening (tires sink slightly into softened pavement, creating increased rolling resistance); tar strips in road seams becoming extremely slippery (especially when transitioning from dry to wet pavement); and increased tire wear from heat-softened rubber compounds. Riders should also factor in personal heat exhaustion risk — full protective gear in 100°F+ conditions requires diligent hydration and heat management strategy.",
    },
    {
      question: "Alabama requires what eye protection for motorcycle riders?",
      options: [
        "No eye protection requirement — Alabama leaves this to rider discretion",
        "Only a full-face helmet shields — no separate eye protection law exists",
        "An approved face shield, safety glasses, or goggles — or the motorcycle must be equipped with a windscreen",
        "Only riders over 65 are required to wear eye protection in Alabama",
      ],
      correctIndex: 2,
      explanation:
        "Alabama law requires motorcycle riders to use an approved face shield, safety glasses, or goggles — unless the motorcycle is equipped with a windscreen that provides equivalent protection. Regular sunglasses may not meet the 'approved' standard for eye protection (they must meet ANSI Z87.1 or equivalent safety rating). Alabama's requirement for both helmets and eye protection reflects the dual risk: head injury (addressed by helmet) and face/eye injury from wind, debris, and insects (addressed by eye protection). Riders wearing full-face helmets with DOT-approved face shields typically meet both requirements simultaneously.",
    },
    {
      question: "When riding in a group in Alabama, what lane position and spacing technique does the MSF and Alabama DMV recommend?",
      options: [
        "Single file at all times — formation riding is not recommended in any U.S. state",
        "A staggered formation: the leader in the left third of the lane, the second rider in the right third (one second behind), creating 2 seconds of following distance between same-lane-position riders",
        "Side by side — two riders sharing a lane width for maximum visibility to other drivers",
        "The same lane position as the rider ahead, directly behind, at 2-second spacing",
      ],
      correctIndex: 1,
      explanation:
        "The MSF recommends staggered formation for group riding: the lead rider uses the left third of the lane; the second rider uses the right third, 1 second behind; the third rider uses the left third, 1 second behind the second rider — creating a 2-second gap between riders in the same lane position. This maintains good forward visibility, avoids direct tailgating, and gives each rider maneuvering room. Side-by-side riding in a single lane limits each rider's maneuvering space and is not recommended. Alabama law permits formation riding but requires that each rider maintain appropriate following distances and lane position.",
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
      question: "Does Alabama require helmets for all motorcycle riders without exception?",
      answer:
        "Yes. Alabama's helmet law (Code of Ala. 1975 § 32-5A-245) is a universal law with no age or experience exceptions. ALL riders and passengers must wear DOT-approved helmets on public roads — regardless of age, years of experience, or endorsement status. This applies to both operators and passengers. DOT certification (not just 'novelty' or 'novelty helmet' labeling) is required. Alabama's universal helmet law makes it one of the stricter states — about half of U.S. states have universal helmet laws.",
    },
    {
      question: "How does the Alabama ALEA motorcycle endorsement process work?",
      answer:
        "To obtain an Alabama Class M motorcycle endorsement: (1) Pass the motorcycle knowledge test at an ALEA driver license office; (2) Pass the ALEA motorcycle skills test OR complete an approved MSF Basic RiderCourse (BRC) — BRC completion waives the skills test; (3) Pay the endorsement fee to ALEA. The BRC is offered at Alabama community colleges and approved training sites. First-time riders should strongly consider the BRC — it includes range practice that builds foundational skills before any public road riding.",
    },
    {
      question: "Does Alabama's DUI law apply to motorcycle operation?",
      answer:
        "Yes. Alabama's DUI law applies fully to motorcycle operators — the 0.08% adult BAC threshold, the 0.02% underage threshold, and all criminal penalties are identical for motorcyclists. Alabama DUI consequences: first offense — 90-day suspension, mandatory DUI school (ADECA), up to $2,100 fine. An Alabama DUI conviction results in loss of the motorcycle endorsement along with the standard license suspension. Alcohol significantly impairs the balance, reaction time, and lean-angle control that motorcycle riding requires — the impairment-to-crash relationship is stronger for motorcyclists than car drivers.",
    },
    {
      question: "What motorcycle hazards are specific to Alabama's Gulf Coast region?",
      answer:
        "Gulf Coast riding hazards in Alabama: (1) Bridge crossings — the Jubilee Parkway and causeway bridges have crosswinds that can affect motorcycle stability; slow down and maintain firm grip; (2) Sand on road surfaces — coastal roads near beach areas accumulate blown sand, particularly after storms; (3) Extreme summer heat — road surface temperatures can exceed 140°F; (4) Coastal fog in morning hours; (5) Tourist season traffic concentration on Gulf Shores Beach Road (SR-182) from Memorial Day through Labor Day creates stop-and-go conditions unusual for Alabama two-lane routes.",
    },
    {
      question: "Is lane splitting legal for Alabama motorcyclists?",
      answer:
        "No. Lane splitting (riding between lanes of moving or stopped traffic) is illegal in Alabama. Alabama law requires motorcycles to occupy a full travel lane — two motorcycles may share a lane only if they agree to ride side by side and both maintain safe positions within the lane. Motorcyclists may not pass between lines of traffic or use the shoulder as a travel lane. Alabama has not enacted lane-splitting or lane-filtering legislation.",
    },
    {
      question: "What documents do I need to bring to the Alabama DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Alabama, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Alabama DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Alabama motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Alabama, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Alabama DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Alabama, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Alabama, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Alabama?",
      answer:
        "In Alabama, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Alabama DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Alabama?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Alabama DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "AL Driver's License", href: "/alabama-dmv-practice-test" },
    { label: "AL CDL Test", href: "/alabama-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function AlabamaMotoPage() {
  return <PracticeTestPage {...data} />;
}
