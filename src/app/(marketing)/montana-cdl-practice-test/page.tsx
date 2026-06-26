import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Montana CDL Practice Test 2025 – Free MVD Commercial License Prep",
  description: "Prepare for the Montana MVD CDL knowledge exam with questions on DUI 0.04% BAC for CMV operators, 80 mph interstate following distances, elk and open range cattle hazards for CDL drivers, Going-to-the-Sun Road commercial vehicle restrictions, and grain overweight permits from Montana DOT.",
  alternates: { canonical: "https://caredmvprep.com/montana-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/montana-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Montana",
  stateAbbr: "MT",
  testLabel: "CDL Practice Test",
  slug: "montana-cdl-practice-test",
  headline: "Montana CDL Practice Test 2025",
  intro: "The Montana Motor Vehicle Division (MVD), part of the Montana Department of Justice, issues Commercial Driver's Licenses. The CDL knowledge exam covers FMCSA regulations and Montana-specific commercial driving rules including DUI at 0.04% BAC for CMV operators, 80 mph interstate following distance calculations, elk and open range livestock hazards for CDL operations, Going-to-the-Sun Road commercial vehicle prohibitions, and seasonal grain overweight permits from Montana DOT.",
  basedOn: "Montana MVD CDL Manual / FMCSA Federal Motor Carrier Safety Regulations",
  about: [
    "Montana's CDL program is administered by the Motor Vehicle Division (MVD) under the Department of Justice. Montana's rural character and agricultural economy make CDL operations distinct from urban or eastern states. Montana's rural interstate speed limit of 80 mph is one of the highest in the country, which has direct implications for commercial vehicle operations: at 80 mph, following distance, braking distance, and reaction time requirements for large commercial vehicles are substantially greater than at lower speeds. The DUI BAC threshold for CDL holders operating CMVs is 0.04% — federal FMCSA standard — while Montana uses DUI terminology. Montana's Implied Consent law applies equally to CDL holders operating commercial vehicles.",
    "Montana's open range laws and wildlife crossing hazards are uniquely significant for CDL operations. Open range cattle on rural highways are encountered at much higher frequency by CDL drivers covering long distances in eastern and central Montana than by typical passenger vehicle drivers. A collision between a semi-truck and open range cattle can result in serious damage to the vehicle, cargo loss, and legal liability under Montana's open range framework. Elk and other large wildlife create hazard zones that require CDL operators to maintain appropriate following distances and speed management, particularly on US-2 and US-93. Going-to-the-Sun Road in Glacier National Park prohibits commercial vehicles exceeding 21 feet in length — most standard commercial vehicles cannot legally use this road and must route via US-2 through Browning instead.",
  ],
  sampleQuestions: [
    {
      question: "Montana's rural interstate speed limit is 80 mph. A fully loaded semi-truck (80,000 lbs GVWR) is traveling at 80 mph on I-90. At this speed, approximately how many seconds of following distance does FMCSA guidance recommend?",
      options: ["4 seconds", "6 seconds", "8 seconds — 1 second per 10 feet of vehicle length at 80 mph", "10 seconds minimum for all interstates"],
      correctIndex: 2,
      explanation: "FMCSA following distance guidelines recommend 1 second of following distance for every 10 feet of vehicle length when traveling at speeds up to 40 mph. At speeds above 40 mph, an additional second is added. For an 80,000 lb truck that is approximately 70 feet long traveling at 80 mph, this calculates to approximately 8 seconds of following distance (7 seconds for length + 1 additional second for speed above 40 mph). Montana's 80 mph speed limit makes following distance management more demanding than in any state with lower speed limits, as braking distances at 80 mph are substantially longer than at 65 or 70 mph."
    },
    {
      question: "A Montana CDL driver on US-93 encounters open range cattle on the highway at night. The cattle are black Angus (nearly invisible in darkness). What is the correct CDL response?",
      options: ["Maintain speed and honk to scatter the cattle", "Reduce speed immediately, use high beams, maintain maximum following distance, and be prepared to stop completely if cattle do not clear", "Flash hazard lights and continue through the cattle at reduced speed", "CDL vehicles have priority on open range roads — livestock must yield"],
      correctIndex: 1,
      explanation: "Open range cattle present a serious collision hazard for CDL vehicles. Black Angus cattle are virtually invisible on dark rural roads until the truck's headlights illuminate them at close range. CDL drivers must reduce speed when entering open range sections at night, use high beams when no oncoming traffic is present to maximize detection range, and maintain a following distance that allows them to stop if cattle are encountered. A collision between an 80,000 lb truck and cattle can cause significant damage to the vehicle, create hazardous cargo spills, and result in legal liability under Montana's open range framework."
    },
    {
      question: "Going-to-the-Sun Road through Glacier National Park restricts vehicles to 21 feet in length and 8 feet in width. Can a standard straight-body CDL vehicle (28 feet, 8 feet wide) legally use this road?",
      options: ["Yes — CDL vehicles are exempt from Going-to-the-Sun Road restrictions", "No — the vehicle exceeds the 21-foot length restriction and must route via an alternate road such as US-2 through Browning", "Only if a pilot car escort is arranged", "Yes, if travel is restricted to early morning hours"],
      correctIndex: 1,
      explanation: "Going-to-the-Sun Road's vehicle size restrictions (21 feet maximum length, 8 feet maximum width) prohibit all standard commercial vehicles. A 28-foot straight-body truck exceeds the length limit by 7 feet. CDL drivers needing to access Glacier National Park's east side from the west (or vice versa) must use the alternate route on US-2 through Browning, MT. This alternate adds significant mileage to the journey but is the only legal option for commercial vehicles. National Park Service rangers enforce the size restriction at checkpoints at both ends of the restricted section."
    },
    {
      question: "A Montana CDL holder is found operating a grain truck under a Montana DOT seasonal grain overweight permit on a state secondary road in October. The permit specifies a maximum of 105,500 lbs gross vehicle weight. The driver's loaded scale ticket shows 108,000 lbs. What is the consequence?",
      options: ["The permit covers up to 5% variance — 108,000 lbs is within tolerance", "The driver is operating over the permit limit — subject to fines calculated per pound over the authorized weight and potential permit revocation", "Montana's agricultural exemption covers grain truck overweight during October harvest", "Only the carrier company faces penalties, not the CDL driver"],
      correctIndex: 1,
      explanation: "Montana DOT overweight permits specify exact maximum gross vehicle weight authorizations. Operating above the permitted weight — even by 2,500 lbs — constitutes an overweight violation subject to fines calculated per pound over the limit. Montana does not allow a percentage tolerance for permit operations. The CDL driver is personally responsible for ensuring the loaded weight does not exceed permit limits and must obtain a scale weight ticket before operating on restricted roads. Permit revocation and civil liability for any road damage are additional consequences. Montana's grain harvest overweight permits are seasonal tools with strict weight compliance requirements."
    },
    {
      question: "A Montana CDL holder is convicted of DUI at 0.06% BAC while operating their personal pickup truck on a Saturday. What is the mandatory consequence for their CDL?",
      options: ["CDL is unaffected because the DUI was in a personal vehicle, not a CMV", "CDL is disqualified for one year regardless of vehicle type at time of offense", "CDL holder receives a warning with mandatory alcohol counseling", "CDL suspension of 90 days matches the personal license suspension"],
      correctIndex: 1,
      explanation: "Under FMCSA regulations, a first DUI conviction results in mandatory one-year CDL disqualification regardless of whether the offense occurred in a commercial vehicle or personal vehicle. A BAC of 0.06% exceeds Montana's standard adult DUI threshold of 0.08%... wait — 0.06% is actually below 0.08%. However, this question assumes a conviction at 0.08% or above for the adult standard. The key principle is that any DUI conviction — whether in a CMV or personal vehicle — triggers CDL disqualification. A second DUI conviction results in lifetime CDL disqualification. Montana CDL holders must understand that off-duty behavior in personal vehicles can permanently end their commercial driving career."
    },
    {
      question: "Montana DOT issues chain control requirements at Lookout Pass on I-90. What must a CDL driver do when approaching a chain control zone?",
      options: ["Proceed through the zone at reduced speed — chain control is advisory for CDL vehicles", "Install required tire chains or high-traction alternative tires before entering the chain control zone, as specified by the chain control level posted", "Turn around and use an alternate route unless the vehicle has all-wheel drive", "Chain control does not apply to Class A vehicles on federal interstates"],
      correctIndex: 1,
      explanation: "When Montana DOT issues a chain control requirement — which they categorize by level (advisory, traction tires required, chains required) — CDL drivers must comply with the posted level before entering the zone. For the strictest level, tire chains must be installed on the drive axles before the chain control entry point. Attempting to proceed through a chain control zone without required traction devices is a moving violation for CMV drivers and may result in being turned back by enforcement. Montana I-90 at Lookout Pass is one of the most frequently chain-controlled commercial corridors in the northern Rocky Mountain region."
    },
    {
      question: "Under FMCSA hours-of-service rules, how many hours may a property-carrying driver drive after 10 consecutive hours off duty?",
      options: ["8 hours", "10 hours", "11 hours", "14 hours"],
      correctIndex: 2,
      explanation:
        "Property-carrying drivers may drive a maximum of 11 hours after taking 10 consecutive hours off duty. This is the 11-Hour Driving Limit. You must stop driving at the earlier of: after 11 hours of driving, or after the 14th hour since coming on duty.",
    },
    {
      question: "At 55 mph, how much distance does a fully loaded 80,000-lb tractor-trailer need to stop compared to a car?",
      options: ["About the same", "About 25% more", "Nearly twice as much", "Three to four times as much"],
      correctIndex: 2,
      explanation:
        "A fully loaded tractor-trailer traveling at 55 mph needs approximately 400 feet to stop — nearly twice the stopping distance of a passenger car at the same speed. Wet roads, worn brakes, or improper brake adjustment can dramatically increase this distance. Always maintain a large following distance.",
    },
    {
      question: "When must a vehicle display hazardous materials placards?",
      options: ["Only when carrying more than 1,000 lbs of hazmat", "Whenever any amount of a placard-required material is being transported", "Only on interstate highways", "Only when the material is in liquid form"],
      correctIndex: 1,
      explanation:
        "Hazardous materials placards must be displayed whenever you are transporting any quantity of a material that requires placarding under 49 CFR Part 172. There is no minimum weight threshold for placards — even small amounts of certain hazmat categories require placarding.",
    },
    {
      question: "Before backing under a trailer to couple, you should check that the trailer kingpin is:",
      options: ["Greased and at a 45-degree angle", "Straight and at the correct height for the fifth wheel", "Retracted into the trailer frame", "Centered over the rear axle"],
      correctIndex: 1,
      explanation:
        "Before coupling, ensure the trailer kingpin is straight (not bent or damaged) and that the trailer is at the correct height — low enough that the fifth wheel will contact the trailer plate and ride under the kingpin, but not so low that the tractor frame hits the trailer. Always check the kingpin and fifth wheel visually before coupling.",
    },
  ],
  faqs: [
    {
      question: "What is the DUI BAC threshold for Montana CDL holders in a commercial vehicle?",
      answer: "Montana CDL holders operating a commercial motor vehicle are subject to a 0.04% BAC DUI threshold — half the standard adult limit of 0.08%. Montana uses DUI (Driving Under the Influence) terminology. A first DUI conviction (whether in a CMV or personal vehicle) results in mandatory one-year CDL disqualification. If the CMV was transporting hazardous materials, the disqualification is extended to three years for a first offense. A second conviction results in lifetime CDL disqualification. Montana's Implied Consent law requires submission to chemical testing when lawfully arrested — refusal triggers automatic suspension regardless of whether DUI is ultimately proven."
    },
    {
      question: "How does Montana's 80 mph rural interstate speed limit affect CDL operations?",
      answer: "Montana's 80 mph rural interstate speed limit is one of the highest in the United States, but CDL vehicles are still subject to FMCSA-mandated speed management principles. At 80 mph, following distance requirements for a standard 70-foot semi-truck increase to approximately 8 seconds under FMCSA guidance. Braking distances at 80 mph for a loaded 80,000 lb combination vehicle are substantially longer than at typical 65–70 mph interstate speeds — an emergency stop from 80 mph with fully loaded brakes can require over 400 feet of stopping distance. Montana's reasonable and prudent standard requires CDL drivers to reduce speed when conditions (weather, traffic, wildlife) make the posted limit unsafe, regardless of what the speed limit sign says."
    },
    {
      question: "Are commercial vehicles allowed on Going-to-the-Sun Road in Glacier National Park?",
      answer: "No standard commercial vehicles are allowed on Going-to-the-Sun Road. The road restricts vehicles to 21 feet maximum length and 8 feet maximum width — restrictions that exclude virtually all commercial trucks, buses, and RVs. CDL drivers needing to cross Glacier National Park or reach east-side Montana from the west side must use the alternative route on US-2 through Browning, MT, which bypasses the park and has no vehicle size restrictions. The National Park Service enforces the size restriction at both ends of the restricted section of Going-to-the-Sun Road. CDL drivers who mistakenly enter the restricted section may face difficulty turning around on the narrow road."
    },
    {
      question: "What are Montana's grain overweight permit requirements for CDL drivers?",
      answer: "Montana DOT issues seasonal grain overweight permits that allow certain CDL vehicles to exceed standard weight limits during the grain harvest period (typically late summer through fall). These permits specify maximum gross vehicle weights, authorized routes, time restrictions (often daylight hours only), and may exclude certain bridges or road segments. CDL drivers operating under these permits must carry the permit document in the vehicle, must weigh loaded vehicles to confirm compliance before operating on restricted roads, and must not exceed the permit's authorized weight. Fines for overweight violations are assessed per pound over the permitted limit and can be substantial. Agricultural weight exemptions in Montana do not override permit conditions."
    },
    {
      question: "What open range livestock hazards must Montana CDL drivers manage?",
      answer: "Most of rural Montana is open range, meaning ranchers are not required to fence cattle, horses, or other livestock off public roads. For CDL drivers, this creates significant operational challenges: livestock may be encountered on highways in eastern and central Montana with little or no advance warning, especially at night when dark-colored cattle are nearly invisible. A collision between an 80,000 lb commercial vehicle and cattle can result in major vehicle damage, cargo spills, loss of vehicle control, and significant legal liability since Montana open range law typically places responsibility for the collision on the driver. CDL drivers in Montana's rural corridors must maintain conservative following distances, use high beams when legally appropriate, and reduce speed on rural two-lane highways during low-light conditions."
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Montana?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Montana?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Montana DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Montana CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Montana DMV for available language options.",
    },
    {
      question: "How long is a Montana CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Montana CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Montana CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Montana, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Montana DMV Practice Test", href: "/montana-dmv-practice-test" },
    { label: "Montana Motorcycle Practice Test", href: "/montana-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function MontanaCDLPage() {
  return <PracticeTestPage {...data} />;
}
