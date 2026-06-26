import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Kentucky Motorcycle Practice Test 2025 – Free KY KYTC Class M Endorsement Exam Prep",
  description:
    "Free Kentucky motorcycle endorsement practice test. 25 questions, 80% passing. Universal helmet ALL riders, Brent's Law applies to motorcycle DUI with child passenger, horse-drawn vehicle road-sharing in KY, and SB 332 hands-free for riders.",
  alternates: { canonical: "https://caredmvprep.com/kentucky-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/kentucky-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Kentucky",
  stateAbbr: "KY",
  testLabel: "Motorcycle Endorsement Test",
  slug: "kentucky-motorcycle-practice-test",
  headline: "Kentucky Motorcycle Endorsement Practice Test 2025",
  intro:
    "Kentucky's Transportation Cabinet (KYTC) Division of Driver Licensing issues a Class M motorcycle endorsement. The 25-question test requires 80% (20/25) to pass. Kentucky has a universal helmet law — all riders and passengers must wear DOT-approved helmets. Brent's Law (2020) elevated DUI penalties for motorcycle operators carrying child passengers. Kentucky Appalachian mountain roads and horse-drawn vehicle encounters are unique riding considerations.",
  basedOn: "Kentucky Transportation Cabinet Motorcycle Operator's Manual (current KRS edition)",
  about: [
    "Kentucky's Class M motorcycle endorsement is issued by the Division of Driver Licensing (part of KYTC). Applicants must pass the knowledge test (25 questions, 80%) and skills test, OR complete an approved MSF BRC (which waives the skills test). Kentucky has a universal helmet law (KRS 189.285): all motorcycle operators and passengers must wear DOT-approved helmets regardless of age or experience. Brent's Law (HB 452, 2020) applies to motorcycle DUI with a child passenger — if a child under 12 is on the motorcycle when the operator is impaired, the charge escalates to a minimum Class D felony, the same as for car drivers. Kentucky's SB 332 (hands-free law, effective July 8, 2022) applies to all motorcycle operators.",
    "Kentucky's Appalachian mountain region offers world-class motorcycle touring: the Pine Mountain Road (US 119), the Kingdom Come state park approach, and the Red River Gorge access roads (KY 77, KY 715) feature tight curves, elevation changes, and forested environments that create authentic challenge for skilled riders. However, these roads also have: occasional loose surface material from rockfalls; sections with reduced banking (flat curves that require careful line selection); and significant wildlife crossing activity (deer, turkey, fox) especially at dawn and dusk. Kentucky is also home to the Daniel Boone National Forest network of riding roads in the eastern half of the state. Unique to Kentucky: horse-drawn vehicles from Amish communities — particularly in northern and south-central Kentucky — appear on county roads and require motorcyclists to approach with extra caution, reduced speed, and without horn use.",
  ],
  sampleQuestions: [
    {
      question: "A Kentucky motorcyclist approaching an Amish horse-drawn buggy from behind should do which of the following?",
      options: [
        "Honk to alert the buggy operator of the approaching motorcycle, then pass quickly",
        "Flash headlights to signal the buggy to pull over before passing",
        "Slow significantly, avoid using the horn (which can startle horses), approach gradually, and pass with extra lateral clearance only when it is safe and the horse is not reacting to the motorcycle",
        "Maintain speed — horse-drawn vehicles must yield to motorcycles under Kentucky traffic law",
      ],
      correctIndex: 2,
      explanation:
        "Kentucky has one of the United States' largest Amish populations, particularly in the northern counties (Ohio, Breckinridge, Grayson, Logan) and parts of south-central Kentucky. Horse-drawn buggies on county roads are a genuine motorcycle hazard — not because of speed but because of horse behavior. Horses can be startled by motorcycle engine sounds even from 200+ feet away. A startled horse can bolt into the road or into the motorcycle. Correct approach: reduce speed well in advance; do NOT use the horn (the sudden loud noise is more alarming to horses than engine noise); approach slowly on the left side; observe the horse's ears and body posture for signs of anxiety; pass with maximum available clearance. KRS 189.050 requires horse-drawn vehicles to have appropriate lighting, but rider behavior around them is governed by general caution requirements.",
    },
    {
      question: "Kentucky's Brent's Law applies to motorcycle DUI. If a motorcyclist is impaired while carrying a child passenger under 12, the charge becomes:",
      options: [
        "An enhanced misdemeanor with double fines — but still a misdemeanor",
        "A Class D felony with a minimum of 1–5 years imprisonment",
        "A traffic infraction only — the motorcycle's inherent danger creates a different legal standard",
        "Brent's Law only applies to enclosed vehicles — it does not cover motorcycle passengers",
      ],
      correctIndex: 1,
      explanation:
        "Kentucky's Brent's Law (HB 452, 2020) explicitly applies to all DUI offenses where a passenger under 12 is present — including motorcycle passengers. A motorcycle operator with a child passenger under 12 who is convicted of DUI faces a minimum Class D felony charge (1–5 years imprisonment) — not a misdemeanor. Additionally, an ignition interlock device (IID) is required upon reinstatement after a Brent's Law conviction. The law was designed to eliminate any calculation that riding with a child somehow makes a DUI 'worse by degree' — it makes it a felony from the first occurrence.",
    },
    {
      question: "What is the Kentucky Appalachian mountain motorcycle rider's recommended technique for descending a steep grade?",
      options: [
        "Apply both brakes continuously throughout the descent to maintain controlled speed",
        "Accelerate to the bottom quickly — speed provides gyroscopic stability on descents",
        "Choose an appropriate lower gear before the descent, use engine braking as the primary speed control, and apply brakes briefly and intermittently if needed",
        "Use only the rear brake on steep grades — front brake use on descents causes front-wheel dive",
      ],
      correctIndex: 2,
      explanation:
        "For steep mountain descents (such as those on Kentucky's Pine Mountain, the Appalachian ridges on US 119, or Red River Gorge access roads), the correct technique mirrors the MSF's recommendation: (1) Choose the appropriate low gear before the descent begins — downshift BEFORE the grade, not on it; (2) Rely on engine compression braking as the primary speed control — it reduces heat buildup in brakes; (3) Apply brakes briefly and intermittently when needed (snub braking) — short firm applications followed by release; (4) Do not ride with the brake lever continuously pressed — this causes brake fade from heat buildup. Continuous brake application on a long descent can cause brake fade, leading to loss of stopping ability.",
    },
    {
      question: "Kentucky's universal helmet law requires helmets for which motorcycle riders?",
      options: [
        "Only riders under 18 — Kentucky allows adult discretion on helmet use",
        "All riders under 21 — Kentucky's age-based cutoff",
        "All riders and passengers of any age — Kentucky has a universal helmet law with no exceptions",
        "Only permit holders — endorsed riders may choose to ride without a helmet",
      ],
      correctIndex: 2,
      explanation:
        "KRS 189.285 requires all motorcycle operators and passengers on public roads to wear a DOT-approved helmet — regardless of age or endorsement status. Kentucky's universal helmet law applies to all riders including adults with decades of riding experience. Eye protection (face shield, goggles, or approved safety glasses) is also required unless the motorcycle has an adequate windscreen. The universal requirement is tested on the Kentucky motorcycle endorsement knowledge exam.",
    },
    {
      question: "Kentucky's SB 332 hands-free law (effective July 8, 2022) applies to motorcycle operators. What was the change from prior Kentucky law?",
      options: [
        "Prior law banned all phone use — SB 332 loosened the law to allow Bluetooth calls",
        "Prior law had no restriction on phone use for motorcyclists; SB 332 was Kentucky's first rider phone law",
        "Prior law prohibited only texting for drivers under 18; SB 332 extended the handheld ban to ALL drivers and riders regardless of age",
        "SB 332 only applies to school zones — general road phone use for motorcycle riders remains unrestricted",
      ],
      correctIndex: 2,
      explanation:
        "Before SB 332, Kentucky prohibited texting while driving for all drivers but only banned all phone use for drivers under 18. Adult drivers and riders could legally hold a phone for a call. SB 332 (effective July 8, 2022) extended the handheld ban to ALL drivers and riders of any age — no one may hold or manually use a wireless device while operating a motor vehicle, including motorcycles. Hands-free Bluetooth, mounted devices with no touch contact, and voice commands are permitted. Kentucky motorcycle riders typically use Bluetooth helmet communication systems for both GPS audio and phone calls.",
    },
    {
      question: "What technique does the MSF recommend for Kentucky motorcycle riders when swerving to avoid a road hazard?",
      options: [
        "Apply brakes first, then swerve — always slow before changing direction",
        "Swerve, THEN brake — do not brake while swerving; complete the directional change first, then apply brakes if needed",
        "Use only engine braking while swerving — brake levers may not be used during a swerve maneuver",
        "Swerving and braking simultaneously is the fastest way to avoid a hazard",
      ],
      correctIndex: 1,
      explanation:
        "The MSF Quick Stop and swerve technique teaches: when a hazard must be avoided by swerving, the sequence is SWERVE, then BRAKE — not both simultaneously. Applying brakes during a swerve creates the risk of the tire washing out under the combination of lateral and longitudinal force. To swerve: push the handlebar on the side you want to turn toward (countersteering); complete the swerve; straighten the motorcycle; then apply brakes if needed. In Kentucky, road hazards include deer, rockfall on mountain roads (Red River Gorge area), and gravel at the exit of turns on county roads — quick swerve avoidance is a critical survival skill.",
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
      question: "Does Kentucky require helmets for all motorcycle riders?",
      answer:
        "Yes. Kentucky's helmet law (KRS 189.285) is universal — all riders and passengers must wear DOT-approved helmets on public roads, regardless of age or experience. Eye protection is also required unless the motorcycle has a windscreen. Kentucky's universal law is one of approximately 18 states with this standard. The MSF endorses helmet use for all riders regardless of legal requirement, citing data showing significant reduction in fatal head injuries.",
    },
    {
      question: "What makes Kentucky's Appalachian motorcycle roads uniquely challenging?",
      answer:
        "Kentucky's eastern Appalachian roads (Pine Mountain, Red River Gorge, Kingdom Come State Park) feature: steep grades requiring gear selection and engine braking on descents; tight curves with reduced sight distance (hairpin corners are common on KY 77 in Red River Gorge); rockfall debris on road surfaces in spring and after rain events; limited guardrails on cliff-edge sections; strong white-tailed deer populations crossing at dawn and dusk; and remote location where cell service may be limited. The region is beautiful but requires appropriate speed management, defensive riding, and preparation for self-rescue if needed.",
    },
    {
      question: "How does the Kentucky KYTC motorcycle endorsement work?",
      answer:
        "Kentucky Class M endorsement: (1) Pass the motorcycle knowledge test (25 questions, 80%) at a Division of Driver Licensing regional office; (2) Pass the motorcycle skills test OR complete an MSF BRC (waives skills test); (3) Pay endorsement fee. The MSF BRC is offered at multiple Kentucky sites from spring through fall. Kentucky permit holders may practice riding while supervised by an endorsed adult on a public road with a permit in their possession.",
    },
    {
      question: "What is the horse-drawn vehicle risk for motorcycle riders in Kentucky?",
      answer:
        "Kentucky has a substantial Amish population (northern Kentucky counties: Ohio, Breckinridge, Grayson, Logan; south-central Kentucky: Munfordville area) whose members use horse-drawn buggies as primary transportation. Motorcycle encounters with horse-drawn vehicles require: significantly reduced speed well before reaching the buggy; NO horn use; approach from behind slowly; maximum lateral clearance when passing; watching the horse's body language (raised tail, flattened ears indicate anxiety). Horses can bolt suddenly if startled, creating a direct collision risk. KRS requires appropriate lighting on horse-drawn vehicles after dark.",
    },
    {
      question: "Is lane splitting or lane filtering legal in Kentucky?",
      answer:
        "No. Lane splitting (riding between lanes of moving traffic) and lane filtering (moving between stopped vehicles at a red light) are not legal in Kentucky. Motorcycles must occupy a full travel lane. Two motorcycles may share a lane by mutual agreement, but a single motorcycle may not share a lane with another vehicle unless both are motorcycles. Kentucky has not enacted lane-splitting or lane-filtering legislation as of the most recent updates.",
    },
    {
      question: "What documents do I need to bring to the Kentucky DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Kentucky, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Kentucky DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Kentucky motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Kentucky, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Kentucky DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Kentucky, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Kentucky, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Kentucky?",
      answer:
        "In Kentucky, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Kentucky DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Kentucky?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Kentucky DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "KY Driver's License", href: "/kentucky-dmv-practice-test" },
    { label: "KY CDL Test", href: "/kentucky-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function KentuckyMotoPage() {
  return <PracticeTestPage {...data} />;
}
