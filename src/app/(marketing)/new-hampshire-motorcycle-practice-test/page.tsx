import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New Hampshire Motorcycle Practice Test 2025 – Free DMV Endorsement Prep",
  description: "Study for the New Hampshire DMV motorcycle endorsement exam with state-specific questions on the no-helmet law for adults 18+, OUI under RSA 265-A:2, Kancamagus Highway riding challenges, moose crossing techniques, and Franconia Notch narrow interstate motorcycle access.",
  alternates: { canonical: "https://caredmvprep.com/new-hampshire-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/new-hampshire-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New Hampshire",
  stateAbbr: "NH",
  testLabel: "Motorcycle Practice Test",
  slug: "new-hampshire-motorcycle-practice-test",
  headline: "New Hampshire Motorcycle Endorsement Practice Test 2025",
  intro: "New Hampshire requires a motorcycle endorsement on your NH DMV driver's license. New Hampshire has no mandatory helmet law for adult riders 18 and older — making it one of two states where adults may legally ride without a helmet. The endorsement exam tests OUI under RSA 265-A:2, the 18-year helmet threshold, moose crossing techniques on White Mountain roads, Kancamagus Highway riding hazards (no cell service, no fuel), and Franconia Notch 2-lane interstate motorcycle access.",
  basedOn: "New Hampshire Division of Motor Vehicles Motorcycle Operator Manual",
  about: [
    "New Hampshire motorcycle law has two key features that distinguish it from most states. First, there is no mandatory helmet law for riders and passengers who are 18 or older — adults may legally choose to ride without a helmet. Only riders under 18 must wear helmets. Second, OUI (Operating Under the Influence) under RSA 265-A:2 applies equally to motorcycle operators, with an 0.08% BAC adult threshold and 0.02% for riders under 21. The endorsement knowledge exam tests both of these laws directly. The NH endorsement exam follows the same 75% passing threshold as the main DMV knowledge test — requiring 19 correct answers out of 25 — which is lower than the 80% required in most states.",
    "New Hampshire is one of the most popular motorcycle touring destinations in New England, with the White Mountains providing dramatic scenery on roads like the Kancamagus Highway (NH-112), NH-302 through Crawford Notch, and I-93 through Franconia Notch. The Kancamagus presents specific motorcycle hazards: no fuel for 34.5 miles, no cell service, deer and moose crossing zones, tight curves with gravel and leaf debris in fall, and seasonal closures in winter. Franconia Notch's 2-lane I-93 (designated NH Route 18) is legal for motorcycles but requires careful lane positioning on a narrower-than-standard interstate with limited sight distances at some curves. Moose crossings on NH-16, NH-2, and NH-3 in the North Country are a seasonal life-threatening hazard for motorcyclists.",
  ],
  sampleQuestions: [
    {
      question: "New Hampshire's motorcycle helmet law requires helmets for which riders?",
      options: ["All riders regardless of age — NH has a universal helmet law", "Riders under age 21 only", "Riders and passengers under age 18 only", "Helmets are optional for all NH motorcycle riders"],
      correctIndex: 2,
      explanation: "New Hampshire requires motorcycle helmets only for riders and passengers under age 18. Adults who are 18 or older are not legally required to wear a helmet when operating or riding as a motorcycle passenger in New Hampshire. This adult exemption, combined with New Hampshire's no-adult-seatbelt law, makes New Hampshire the most permissive state in the nation for personal protection choices in vehicles. The NH DMV endorsement exam tests the 18-year-old helmet threshold specifically, as it is one of the most distinctive aspects of New Hampshire motorcycle law."
    },
    {
      question: "A motorcycle rider on the Kancamagus Highway (NH-112) is 12 miles from the Conway end of the road and realizes the fuel gauge is near empty. There is no cell service. What is the safest response?",
      options: ["Continue at speed to reach Conway before running out of fuel", "Coast with the engine off to conserve fuel, and if the bike runs dry, walk or wait for the next passing vehicle since there are no services anywhere on NH-112", "Pull over and attempt to call 911 — NH-112 has emergency cell towers every 5 miles", "Turn around and head back toward the Lincoln end — the town of Woodstock is just a few miles back"],
      correctIndex: 1,
      explanation: "The Kancamagus Highway has absolutely no services — no gas stations, no emergency call boxes, no cell towers — for its entire 34.5-mile length. A rider running out of fuel 12 miles from Conway has two options: continue (coasting where possible to maximize range) hoping to reach Conway, or stop and wait for another vehicle that may be able to provide assistance or notify emergency services at either end of the road. There is no cell service to call for help anywhere on NH-112. This is exactly why the NH DMV exam and the motorcycle manual emphasize entering the Kancamagus with a full tank — the consequences of fuel depletion are serious and there is no easy rescue option."
    },
    {
      question: "What is the OUI BAC threshold for a motorcycle rider who is 23 years old under New Hampshire RSA 265-A:2?",
      options: ["0.10%", "0.08%", "0.04%", "0.02%"],
      correctIndex: 1,
      explanation: "New Hampshire's OUI statute (RSA 265-A:2) sets a 0.08% BAC threshold for motorcycle operators (and all motor vehicle operators) who are 21 or older. New Hampshire uses OUI (Operating Under the Influence) rather than DUI terminology. The same statute sets a 0.02% threshold for operators under 21. OUI applies equally to motorcycle operators — being on a motorcycle rather than a car does not change the legal standard. An OUI conviction results in license suspension, fines, and mandatory completion of an impaired driver intervention program."
    },
    {
      question: "Franconia Notch on I-93 (designated NH Route 18) is a 2-lane interstate. Motorcycles are permitted. What specific challenge does this section present for motorcycle riders compared to a standard multi-lane interstate?",
      options: ["Motorcycles are restricted to 35 mph on the 2-lane Franconia Notch section", "The narrower 2-lane road has reduced sight distances at curves and less margin for error in lane positioning, requiring more conservative speed and more careful position within the lane", "Motorcycles must use the breakdown lane as a travel lane through Franconia Notch", "The 2-lane section prohibits overtaking for all vehicles including motorcycles"],
      correctIndex: 1,
      explanation: "Franconia Notch's 2-lane I-93 (NH Route 18) is legal for motorcycles and carries the standard interstate 65 mph speed limit. However, the narrower lane design, tighter curves than a standard interstate, and scenic cut sections through the notch require motorcycle riders to be more conservative with speed and lane positioning than on a typical wide, straight multi-lane interstate. Traction challenges (sand at road edges, road seams, wet road from waterfall mist) require lane position awareness. The road's curves reduce sight distances at some points, requiring riders to reduce speed from the posted limit in conditions where the full sight distance is needed."
    },
    {
      question: "A motorcycle rider on NH-16 near Gorham sees a moose warning sign. It is dusk. What specific characteristic of moose makes them so dangerous for motorcyclists at dusk?",
      options: ["Moose are attracted to motorcycle headlights and move toward them", "Moose eyes do not reflect headlight beams the way deer eyes do, and their legs place the body above headlight level — they may be nearly invisible until directly in front of the rider", "Moose are more aggressive toward motorcycles than cars", "Moose always cross in groups, making avoidance impossible"],
      correctIndex: 1,
      explanation: "Moose are uniquely hazardous for motorcycle riders because of their physical characteristics. Unlike deer, whose eyes are highly reflective and can be seen at significant distance when headlights catch them, moose eyes do not reflect as strongly or reliably. More critically, moose legs are so long that the body sits above standard motorcycle headlight beam height — the rider may see nothing in the headlights until the moose's dark legs and belly are directly in the beam at very close range. For a motorcyclist, this distance may be shorter than the stopping distance at dusk-speed riding. A collision between a motorcycle and an 800–1,200 lb moose is almost invariably fatal for the rider."
    },
    {
      question: "A 25-year-old New Hampshire motorcycle rider who does not wear a helmet is stopped by a NH State Trooper during a routine traffic stop. Can the trooper issue a citation for helmet non-use?",
      options: ["Yes — NH law requires helmets at all speeds above 35 mph", "No — NH law does not require helmets for riders 18 and older, so no citation is possible for this adult rider's helmet choice", "Yes, but only if the rider is on an interstate highway", "Only if the rider does not have a motorcycle endorsement"],
      correctIndex: 1,
      explanation: "New Hampshire does not require motorcycle helmets for riders and passengers who are 18 or older. A 25-year-old rider without a helmet is operating legally under NH law, and no citation can be issued solely for helmet non-use. The officer cannot enforce a requirement that does not exist in New Hampshire statute. This is a direct and testable aspect of New Hampshire motorcycle law. The endorsement exam tests this rule explicitly because it is one of the most distinctive aspects of riding legally in New Hampshire — riders from states with universal helmet laws (like Maine or Nevada) must understand that NH law is different."
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
      question: "Does New Hampshire require helmets for adult motorcycle riders?",
      answer: "No. New Hampshire does not require motorcycle helmets for riders or passengers who are 18 years of age or older. The NH helmet law requires helmets only for riders and passengers under 18. This adult exemption makes New Hampshire one of a small number of states (alongside Montana and a few others) where adults have a legal choice about helmet use. The NH DMV motorcycle manual strongly recommends helmet use for all riders regardless of the legal exemption, noting that DOT-approved helmets significantly reduce the severity of head injuries and the risk of fatality in crashes. Out-of-state riders visiting New Hampshire from states with universal helmet laws should understand that NH law is more permissive — though their home state's law may theoretically still apply to them."
    },
    {
      question: "What are the unique motorcycle riding challenges on the Kancamagus Highway?",
      answer: "The Kancamagus Highway (NH-112) is one of New England's most scenic motorcycle roads, but it presents specific hazards. There are no gas stations, restaurants, rest areas with services, cell phone towers, or emergency call boxes anywhere along the 34.5-mile route — riders must enter with a full tank and be self-sufficient. The road has active moose and deer crossing zones, particularly at dawn and dusk. Fall foliage season (late September to mid-October) brings wet leaves and maple tree sap on road surfaces that can reduce traction in curves. Sand and gravel washed onto the road from mountain streams creates traction hazards at road crossings. The road may be closed in winter. The 45 mph speed limit sections require conservative speed in curves due to reduced sight distances."
    },
    {
      question: "What is the motorcycle endorsement process in New Hampshire?",
      answer: "New Hampshire motorcycle endorsement (Class M) is added to an existing NH driver's license by passing the NH DMV motorcycle knowledge exam and a skills road test, or by completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse, which may waive the road test. The NH motorcycle knowledge exam follows the same 75% passing threshold as the main DMV exam — 19 correct out of 25 questions. The exam tests NH-specific motorcycle laws (no-helmet law for 18+, OUI under RSA 265-A:2), White Mountain riding hazards, and motorcycle operation techniques. New riders are strongly encouraged to complete the MSF course for the structured safety training it provides beyond what any written or road test evaluates."
    },
    {
      question: "What OUI rules apply to motorcycle operators in New Hampshire?",
      answer: "New Hampshire's OUI statute (RSA 265-A:2) applies equally to motorcycle operators. The BAC threshold is 0.08% for operators 21 and older and 0.02% for operators under 21. New Hampshire uses OUI (Operating Under the Influence) terminology — not DUI. New Hampshire's Implied Consent law (RSA 265-A:30) requires motorcycle operators who are lawfully arrested for OUI to submit to chemical testing — refusal triggers administrative license suspension. First-offense OUI penalties include license suspension, fines, and mandatory completion of an impaired driver intervention program. Operating a motorcycle while impaired is particularly dangerous because motorcycle balance and control require fine motor skills that are among the first impaired by alcohol."
    },
    {
      question: "What makes Franconia Notch significant for New Hampshire motorcycle riders?",
      answer: "Franconia Notch is the only section of the U.S. Interstate Highway System where a standard interstate has been permanently reduced to 2 lanes. I-93 through Franconia Notch State Park operates as NH Route 18 in this section — motorcycles are permitted. The 65 mph speed limit applies. For motorcycle riders, Franconia Notch's significance includes: the narrower lane profile compared to a standard interstate; scenic cut sections through the notch's rock walls where traction can be affected by moisture and debris; the elevated viewpoints that attract gawking while riding (a distraction risk); and the fact that the notch compresses high tourist traffic onto a 2-lane road, creating lane-change and following-distance situations that require more conservative technique than standard multi-lane highway riding."
    },
    {
      question: "What documents do I need to bring to the New Hampshire DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in New Hampshire, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the New Hampshire DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the New Hampshire motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in New Hampshire, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the New Hampshire DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in New Hampshire, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including New Hampshire, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in New Hampshire?",
      answer:
        "In New Hampshire, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the New Hampshire DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in New Hampshire?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. New Hampshire DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "New Hampshire DMV Practice Test", href: "/new-hampshire-dmv-practice-test" },
    { label: "New Hampshire CDL Practice Test", href: "/new-hampshire-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NewHampshireMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
