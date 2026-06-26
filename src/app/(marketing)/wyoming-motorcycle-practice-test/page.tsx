import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Wyoming Motorcycle Practice Test 2025 – Free WYDOT Endorsement Exam Prep",
  description:
    "Prepare for your Wyoming motorcycle endorsement test with free practice questions covering I-80 wind restrictions for riders, open range livestock hazards, Yellowstone wildlife, Snowy Range Pass seasonal closure, and Wyoming's adult no-helmet law.",
  alternates: { canonical: "https://caredmvprep.com/wyoming-motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/wyoming-motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Wyoming",
  stateAbbr: "WY",
  testLabel: "Motorcycle Practice Test",
  slug: "wyoming-motorcycle-practice-test",
  headline: "Wyoming Motorcycle Practice Test 2025",
  intro:
    "Earning a Wyoming motorcycle endorsement requires passing a knowledge test at a WYDOT Driver Services office and a skills test, or completing an approved MSF course. This free practice test covers Wyoming-specific motorcycle topics: I-80 wind restrictions that are especially dangerous for motorcycle riders, open range livestock on rural Wyoming roads, Yellowstone wildlife encounters, Snowy Range Pass seasonal closure, and Wyoming's adult helmet exemption.",
  basedOn: "Wyoming Motorcycle Operator Manual (WYDOT Driver Services)",
  about: [
    "Wyoming Department of Transportation (WYDOT) Driver Services requires all motorcycle operators to hold a valid motorcycle endorsement. To earn the endorsement, applicants must pass a knowledge test based on the Wyoming Motorcycle Operator Manual and a skills test, or complete an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse to waive the skills test. Wyoming does not require helmets for adult motorcycle riders 18 and older — Wyoming is a no-helmet state for adult riders. Riders under 18 must wear a helmet. Eye protection is required for all riders unless the motorcycle has a windshield.",
    "Wyoming offers some of the most spectacular motorcycle riding in the United States — through Yellowstone National Park, the Bighorn Mountains (US-14A), Snowy Range (WY-130 when open), and along the Continental Divide. However, Wyoming presents extreme hazards for motorcycle riders that are unlike those in most other states. Wyoming's I-80 wind advisories and restrictions are specifically life-threatening for motorcycles: a wind advisory that merely requires caution for a passenger car can make motorcycle operation impossible. The I-80 section from Laramie to Rawlins through the Elk Mountain area produces sustained winds that have pushed motorcycles off the road. Open range livestock across virtually all of Wyoming means that cattle, horses, and pronghorn antelope may be on any rural highway at any time. Yellowstone wildlife encounters, particularly with bison, require complete stops and patient waiting — never riding through or around a bison herd.",
  ],
  sampleQuestions: [
    {
      question:
        "Wyoming law requires motorcycle helmets for which riders?",
      options: [
        "All riders regardless of age",
        "Riders under 21 only",
        "Riders under 18 only",
        "No helmet requirement exists in Wyoming for any riders",
      ],
      correctIndex: 2,
      explanation:
        "Wyoming requires helmets only for motorcycle riders under 18 years old. Adult riders 18 and older are not required by Wyoming law to wear a helmet. Wyoming is a no-helmet state for adult riders. Despite this legal exemption, safety organizations and WYDOT strongly recommend helmets for all riders — head injuries are the leading cause of motorcycle fatalities. Wyoming's road conditions (wind, livestock, wildlife, gravel) make helmets especially valuable protective equipment.",
    },
    {
      question:
        "WYDOT issues a High-Profile Vehicle Restriction on I-80 near the Elk Mountain area. You are approaching on your motorcycle. What must you do?",
      options: [
        "Proceed at reduced speed — motorcycles are not 'high-profile vehicles' and are not covered by this restriction",
        "Exit at the next exit immediately and wait — wind advisory levels that restrict high-profile vehicles are typically extremely dangerous or impossible for motorcycle riders",
        "Reduce speed to 45 mph and ride in the left wheel track to avoid the worst turbulence",
        "Motorcycles are required to exit only under a full Road Closure, not a High-Profile Vehicle Restriction",
      ],
      correctIndex: 1,
      explanation:
        "A High-Profile Vehicle Restriction formally applies to vehicles 6 feet or wider, but for motorcycle riders, the underlying wind conditions that trigger the restriction are extremely dangerous — often making motorcycle riding effectively impossible due to wind forces pushing the motorcycle sideways. Experienced Wyoming riders recognize that Wind Advisories and High-Profile Vehicle Restrictions on I-80 are effectively mandatory stops for motorcycles due to safety (not just the formal restriction width threshold). A motorcycle rider who continues into restricted-level wind conditions on Wyoming I-80 is risking being blown off the highway. Exit immediately and monitor WYDOT 511 for improvement.",
    },
    {
      question:
        "You are riding your motorcycle on US-287 in Wyoming at dusk when you see cattle near the right shoulder of the road. Under Wyoming's open range law, what action should you take?",
      options: [
        "Sound your horn to scare the cattle away before passing",
        "Maintain speed and track the cattle with your eyes — they typically avoid vehicles",
        "Significantly reduce speed, be prepared to stop, and watch for cattle entering the road from both sides",
        "Move to the center line to maximize clearance from cattle on the right shoulder",
      ],
      correctIndex: 2,
      explanation:
        "Wyoming's open range law applies to virtually all areas outside city and town limits — ranchers are not required to fence livestock away from public roads. For a motorcycle rider, a collision with a 1,000–1,500 pound steer or horse at any significant speed is almost certainly fatal. When cattle are visible near the road at dusk (when they are most active near road edges), motorcycle riders must significantly reduce speed, scan both sides of the road for additional animals, and be fully prepared to stop. Never sound the horn aggressively near cattle, as this can startle them onto the road.",
    },
    {
      question:
        "You are riding in Yellowstone National Park when a large bull bison walks onto the road directly in front of you from the right. What is the correct action?",
      options: [
        "Accelerate and pass the bison on the left before it can react",
        "Stop completely and wait — bison are unpredictable and a charging bison is fatal for a motorcycle rider",
        "Slowly ride in low gear to the right of the bison in the road shoulder area",
        "Use your horn to signal the bison to step back off the road",
      ],
      correctIndex: 1,
      explanation:
        "Bison in Yellowstone are wild animals that can weigh 2,000 pounds and can charge at 35 mph. For a motorcycle rider, a bison charge or collision is almost certainly fatal. The only correct response when a bison is on the road is to stop immediately and wait for the animal to move on its own. Do not use the horn aggressively (which can provoke a charge), do not try to ride around the bison (which may follow or charge), and do not get off the motorcycle near the animal. Yellowstone rangers enforce wildlife protection rules strictly, and attempting to herd or move wildlife with a vehicle is illegal in the park.",
    },
    {
      question:
        "Snowy Range Pass (WY-130) is typically closed from approximately November through late May. You want to ride from Laramie to Saratoga in late April. What should you check?",
      options: [
        "WY-130 is always open by April 15 — the closure dates are fixed by law",
        "Check WYDOT 511 for the current open/closed status of WY-130 — the pass may still be closed in late April depending on snowpack",
        "Wyoming law allows motorcycles to use closed roads during daylight hours",
        "The Snowy Range Pass restriction only applies to vehicles over 10,000 lbs — motorcycles may use it year-round",
      ],
      correctIndex: 1,
      explanation:
        "Snowy Range Pass (WY-130) closure and opening dates vary each year based on snowpack and spring weather conditions. The pass typically closes in November and reopens in late May, but late April can be well within the closed period depending on that year's snow conditions. Motorcycle riders planning to use the Snowy Range route must check WYDOT 511 for the current open/closed status before departing. A closed Snowy Range Pass requires the significantly longer alternate route through Rawlins on US-30.",
    },
    {
      question:
        "Wyoming's I-80 has an 80 mph speed limit in ideal conditions. As a motorcycle rider approaching a section with posted variable message signs showing 'Wind Advisory — Reduce Speed,' what should you do?",
      options: [
        "Maintain 80 mph — wind advisories are informational only and do not change the speed limit",
        "Reduce speed to 45 mph as a general advisory speed reduction in wind conditions",
        "Reduce speed significantly below the posted limit, evaluate whether conditions allow safe motorcycle riding, and consider exiting if wind conditions make control difficult",
        "Move to the center lane where wind effects are reduced by surrounding truck traffic",
      ],
      correctIndex: 2,
      explanation:
        "A Wind Advisory on Wyoming I-80 means conditions are deteriorating and dangerous. For a motorcycle rider, wind forces that are merely uncomfortable for a passenger car can make motorcycle riding extremely difficult or impossible to do safely. The correct response is to reduce speed significantly, assess whether conditions are safe for motorcycle operation, and exit the highway if wind gusts make controlling the motorcycle difficult. Riding in a group or tucked behind a semi-truck does not adequately protect against Wyoming wind gusts — gusts can be sudden and severe.",
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
      question: "Does Wyoming require motorcycle helmets for adult riders?",
      answer:
        "No. Wyoming does not require helmets for adult motorcycle riders 18 and older. Wyoming is a no-helmet state for adults. Riders under 18 must wear a DOT-approved helmet. Eye protection (goggles or face shield) is required for all riders unless the motorcycle has a windshield. Despite the legal exemption for adults, WYDOT and safety experts strongly recommend helmets for all riders — Wyoming's specific hazards (extreme winds, livestock, wildlife, gravel roads) make head protection especially valuable.",
    },
    {
      question: "How do Wyoming's I-80 wind restrictions affect motorcycle riders specifically?",
      answer:
        "Wyoming's I-80 wind restriction system — Wind Advisory, High-Profile Vehicle Restriction, and Road Closure — is specifically relevant to motorcycle riders because wind conditions dangerous enough to trigger advisories often make motorcycle riding effectively impossible for safety reasons before the formal restriction would require stopping. Wyoming I-80 has recorded sustained winds of 60–80+ mph in the Elk Mountain area. At these wind speeds, a motorcycle can be pushed entirely out of a traffic lane. Experienced Wyoming riders treat Wind Advisories as a serious warning to consider stopping, and High-Profile Vehicle Restrictions as a mandatory exit, regardless of the formal 6-foot width threshold.",
    },
    {
      question: "What are the open range livestock hazards for motorcycle riders in Wyoming?",
      answer:
        "Open range law applies throughout virtually all of Wyoming outside incorporated areas. Cattle, horses, sheep, and other livestock may be on public roads at any time. For motorcycle riders, a collision with a large animal at highway speed is almost always fatal. Key practices: scan road edges continuously at dawn and dusk (when livestock are most active), reduce speed when livestock are visible near the road, never accelerate to pass near animals, and use high beams after dark to maximize detection range. Cattle in particular are dark-colored and do not reflect headlights well at night.",
    },
    {
      question: "What is required to get a motorcycle endorsement in Wyoming?",
      answer:
        "To earn a Wyoming motorcycle endorsement, you must hold a valid Wyoming driver's license, pass a motorcycle knowledge test at a WYDOT Driver Services office, and pass a motorcycle skills test on a closed course. Completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse can waive the skills test requirement. Riders under 18 must complete an approved motorcycle safety course. The knowledge test covers the Wyoming Motorcycle Operator Manual, with particular emphasis on Wyoming-specific hazards including wind conditions, livestock, wildlife, and mountain road technique.",
    },
    {
      question: "What makes Wyoming's Yellowstone Park roads especially challenging for motorcycle riders?",
      answer:
        "Yellowstone National Park roads present unique motorcycle challenges: low speed limits (25–45 mph) that are strictly enforced by park rangers; bison and other wildlife in or near the road that require complete stops; road surfaces that may have sand, gravel, or debris from park maintenance; narrow sections with limited passing opportunities; unpredictable weather (Yellowstone can have snow at any month at high elevations); and high tourist traffic volumes from RVs and vehicles driven by people unfamiliar with the park's roads. Wildlife encounters, especially bison, are the most critical safety issue — a bison on the road requires a full stop and patient waiting, regardless of time pressure.",
    },
    {
      question: "What documents do I need to bring to the Wyoming DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Wyoming, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Wyoming DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Wyoming motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Wyoming, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Wyoming DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Wyoming, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Wyoming, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Wyoming?",
      answer:
        "In Wyoming, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Wyoming DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Wyoming?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Wyoming DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "Wyoming DMV Practice Test", href: "/wyoming-dmv-practice-test" },
    { label: "Wyoming CDL Practice Test", href: "/wyoming-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function WyomingMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
