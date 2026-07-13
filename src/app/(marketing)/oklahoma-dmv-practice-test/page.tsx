import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Oklahoma DPS Practice Test 2025 – Free OK Driver's License Exam Prep",
  description:
    "Free Oklahoma driver's license practice test based on the official Oklahoma Driver Manual. 20 questions, 75% passing (15/20). Oklahoma DPS (not DMV), tornado/severe weather driving rules, zero tolerance under-21, and SB 1161 hands-free law. Pass your Oklahoma knowledge test first try.",
  alternates: { canonical: "https://caredmvprep.com/oklahoma-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/oklahoma-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Oklahoma",
  stateAbbr: "OK",
  testLabel: "DPS Knowledge Test",
  slug: "oklahoma-dmv-practice-test",
  headline: "Oklahoma Driver's License Practice Test 2025",
  intro:
    "Oklahoma driver licensing is administered by the Oklahoma Department of Public Safety (DPS) — not a DMV. The knowledge test has 20 questions and requires 15 correct (75%) to pass, per the official Service Oklahoma written-test page. Oklahoma sits at the center of Tornado Alley, and knowing what to do when severe weather strikes while you're driving is both a life-safety skill and a testable exam topic. Oklahoma's SB 1161 (effective November 1, 2023) banned all handheld device use while driving.",
  basedOn: "Oklahoma DPS Driver's Manual (current edition)",
  keyRules: [
    { icon: "🚔", rule: "Agency: Oklahoma DPS (not DMV)", detail: "Oklahoma Department of Public Safety (DPS) administers all driver licensing, testing, and traffic enforcement. Look for DPS Driver License Testing Stations, not DMV offices." },
    { icon: "🌪️", rule: "Tornado: DO NOT shelter under overpass", detail: "If a tornado approaches: do NOT try to outrun it; do NOT shelter under an overpass (venturi effect is deadly). Abandon the vehicle, find a low ditch or culvert, lie flat, cover your head." },
    { icon: "🚫", rule: "Zero tolerance under-21: 0.00% BAC", detail: "Oklahoma has true zero tolerance for drivers under 21: any detectable BAC is a DUI violation. 0.00% is the legal BAC limit — any detectable amount triggers an automatic DUI charge." },
    { icon: "📱", rule: "Hands-free required (SB 1161, November 2023)", detail: "Oklahoma SB 1161 (effective November 1, 2023) bans all drivers from holding a wireless device while operating a motor vehicle. Primary enforcement. First violation: $100 fine." },
    { icon: "🍺", rule: "DUI: 0.08% adults; 0.04% CMV", detail: "0.08% BAC for adults; 0.00% for under-21; 0.04% for CDL holders in a CMV. First DUI = 30-day license suspension + mandatory alcohol assessment." },
    { icon: "🚗", rule: "Learner permit at 15 (with driver ed) or 16", detail: "Oklahoma's Class D Learner Permit is available at 15 if enrolled in or completed an approved driver education course, or at 16 without driver education." },
    { icon: "📋", rule: "180-day permit hold before the drive test", detail: "Under-18 applicants must hold the Learner Permit at least 180 days, log at least 50 hours of behind-the-wheel training (10 at night), have no traffic convictions, and complete the free Work Zone Safe course before taking the drive test — Service Oklahoma does not publish a separate nighttime curfew or passenger cap." },
    { icon: "🧪", rule: "Implied consent: 180-day refusal suspension", detail: "Refusing a chemical test = 180-day suspension (first refusal); second refusal within 3 years = 3-year suspension. Longer than most states' first-refusal penalties." },
  ],
  about: [
    "Oklahoma driver licensing is handled by the Department of Public Safety (DPS) — not a traditional DMV. Oklahoma DPS offices (called 'Driver License Testing Stations' or 'Tag Agent offices') are located throughout the state. Service Oklahoma also offers the knowledge test online (60 minutes, webcam-proctored). The test has 20 questions and requires 15 correct (75%) to pass, per the official Service Oklahoma written-test page. If you fail the knowledge test, you may retest after 1 day. Oklahoma's Learner Permit is issued at age 15 if the applicant is enrolled in or has completed an approved driver education course, or at 16 without driver education. Under-18 applicants must hold the permit at least 180 days, log at least 50 hours of behind-the-wheel training (including 10 hours at night), have no traffic convictions on record, and complete the free Work Zone Safe online course before the drive test — Service Oklahoma does not publish a separate nighttime curfew or passenger-count restriction. Adults 18 and older do not need a Learner Permit at all to take the drive test; if they get one anyway for practice, they must hold it 30 days before applying for an unrestricted license.",
    "Oklahoma is at the heart of Tornado Alley — the geographic region of the central United States where atmospheric conditions create some of the world's most frequent and intense tornadoes. Moore, Oklahoma; El Reno, Oklahoma; and the Oklahoma City metro area have been struck by multiple catastrophic tornadoes in recorded history. For this reason, Oklahoma DPS includes tornado and severe weather driving safety in the driver's manual as a distinct, testable topic. The key rules: (1) Do NOT try to outrun a tornado by driving perpendicular to its path on a highway — most tornadoes move at 30–60 mph and can change direction suddenly, making outrunning them dangerous; (2) Do NOT shelter under an overpass — highway overpasses create a venturi effect (wind accelerates through the confined space), creating deadly flying debris conditions; (3) If caught in the open with no building shelter, abandon the vehicle, get into a low-lying ditch, culvert, or depression in the earth, cover your head, and lie flat. These rules are covered in Oklahoma's driver manual and may appear on the knowledge test.",
    "Oklahoma's zero-tolerance DUI law for drivers under 21 sets a BAC limit of 0.00% — any detectable alcohol is a per se DUI, unlike most states that use a 0.02% 'effective zero' standard. Oklahoma's SB 1161 (hands-free law, effective November 1, 2023) prohibits all drivers from holding a wireless device while operating a motor vehicle — one of the most recently enacted comprehensive handheld bans. Oklahoma's implied consent law carries a 180-day suspension for a first refusal (above the typical 90-day standard of many states), and a 3-year suspension for a second refusal within 10 years. Oklahoma DUI law (47 O.S. § 11-902) provides that adult DUI (BAC 0.08%+) on a first offense results in a minimum 10-day license revocation (with restricted driving privilege available after 30 days) and mandatory alcohol assessment. Oklahoma's Habitual Offender law activates after multiple DUI convictions with escalating revocation and IID requirements.",
  ],
  sampleQuestions: [
    {
      question: "You are driving on an Oklahoma highway when a tornado warning is issued and you can see a funnel cloud approaching. What should you do?",
      options: [
        "Drive perpendicular to the tornado's path — if you drive fast enough, you can outrun any tornado",
        "Pull under the nearest highway overpass and shelter in the lowest part of the structure",
        "Abandon the vehicle, move away from it, and lie flat in the lowest ground available (ditch, culvert) away from trees — cover your head",
        "Stay in your vehicle with the seatbelt fastened — the vehicle provides the best protection from tornado debris",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma DPS explicitly addresses tornado safety in the driver's manual because Oklahoma is in Tornado Alley. The correct actions: (1) Do NOT try to outrun a tornado — most tornadoes can overtake highway speeds, move unpredictably, and change direction; (2) Do NOT shelter under an overpass — overpasses create a venturi wind effect that accelerates debris to lethal speeds through the confined space; (3) Abandon your vehicle: it provides no protection against tornado force. Get out and find the lowest ground — a roadside ditch, culvert, or depression in the earth. Lie flat, face down, cover your head with your arms. Move away from the vehicle (it can be thrown by tornado winds and crush you). This is genuinely life-safety knowledge for Oklahoma drivers.",
    },
    {
      question: "Why do Oklahoma DPS guidelines specifically warn against sheltering under highway overpasses during a tornado?",
      options: [
        "Overpasses are likely to collapse in a tornado — the concrete is not tornado-rated",
        "Overpasses create a venturi effect that accelerates wind and debris to lethal speeds through the confined space beneath the structure",
        "Emergency vehicles cannot reach you under an overpass during a tornado — it delays rescue",
        "Overpass structures are lightning attractors — sheltering under them increases lightning strike risk",
      ],
      correctIndex: 1,
      explanation:
        "Highway overpasses create a venturi effect — the confined tunnel shape beneath the overpass accelerates wind speeds significantly above the surrounding area. Debris (rocks, glass, metal, wood fragments) carried by tornado-force winds becomes even more lethal when channeled through the overpass opening at increased speed. Multiple people have died sheltering under Oklahoma overpasses during tornadoes. Meteorologists and the National Weather Service strongly advise against overpass sheltering. Oklahoma DPS incorporates this guidance because misunderstanding of overpass safety has killed Oklahomans during previous tornado events. The bottom of a low-lying ditch is substantially safer than an overpass.",
    },
    {
      question: "Oklahoma has 'zero tolerance' for drivers under 21 regarding alcohol. What does this mean in practice?",
      options: [
        "Drivers under 21 face a 0.02% BAC limit — any detectable alcohol above trace levels is a violation",
        "Drivers under 21 may not purchase alcohol, but may be in a vehicle with passengers who are drinking",
        "Drivers under 21 face a 0.00% BAC standard — any detectable amount of alcohol is a per se DUI violation",
        "Oklahoma's zero tolerance applies only to commercial drivers under 21 — regular drivers under 21 face the standard 0.08% limit",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma's zero-tolerance law (47 O.S. § 6-107.3) sets the BAC limit for drivers under 21 at 0.00% — any detectable amount of alcohol in the body is a DUI violation. This is stricter than states that use 0.02% (which has a trace threshold allowing for mouthwash or other incidental alcohol exposure). A first under-21 zero-tolerance violation: 6-month license suspension, mandatory alcohol assessment, and potential criminal charges depending on BAC level. If the BAC is 0.08% or higher, the driver is charged under the adult DUI statute with adult penalties. Oklahoma's absolute zero for underage drivers is among the strictest standards in the nation.",
    },
    {
      question: "Oklahoma's SB 1161 (effective November 1, 2023) prohibits which of the following for ALL drivers?",
      options: [
        "Only texting — phone calls with a held handset remain legal for adult drivers in Oklahoma",
        "Using navigation apps on a phone — all GPS must use a dedicated device, not a smartphone",
        "Physically holding or manually using a wireless device while operating a motor vehicle",
        "Any phone use whatsoever — Oklahoma bans both handheld AND hands-free phone use for all drivers",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma's SB 1161 (effective November 1, 2023) prohibits all drivers from physically holding or manually operating a wireless device while driving. This applies to all drivers regardless of age. Hands-free Bluetooth, speakerphone on a mounted device, and voice commands are permitted. Primary enforcement: police can stop a driver solely for this violation. Oklahoma was one of the last states to adopt a comprehensive handheld ban — prior law prohibited only texting for drivers under 18. The expansion to all drivers and all handheld use represents a major shift. Fines: $100 for a first offense, $200 for subsequent violations.",
    },
    {
      question: "Oklahoma administers driver licensing through which state agency?",
      options: [
        "Oklahoma Department of Motor Vehicles (OKDMV) — standard DMV structure",
        "Oklahoma Department of Transportation (ODOT) — Oklahoma integrates licensing with transportation",
        "Oklahoma Department of Public Safety (DPS) — not a DMV, but a law enforcement-based agency",
        "Oklahoma Secretary of State — handles all vehicle registration and driver records",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma driver licensing is administered by the Department of Public Safety (DPS). There is no Oklahoma DMV — DPS handles driver licenses, testing, and traffic safety regulation. Oklahoma DPS operates driver license testing stations across the state, and also works through Oklahoma Tax Commission offices for some vehicle registration functions. The DPS website (dps.ok.gov) is the authoritative source for Oklahoma driver licensing. Because licensing is under a public safety/law enforcement agency, DPS also oversees highway patrol, motor carrier enforcement, and alcohol enforcement under one umbrella.",
    },
    {
      question: "An Oklahoma driver refuses a breathalyzer test after a lawful DUI arrest. What is the consequence for a first refusal?",
      options: [
        "No license action — Oklahoma's implied consent law only applies after a second refusal",
        "A 90-day suspension — the standard refusal penalty in most states",
        "A 180-day suspension — longer than the typical 90-day standard, and separate from any criminal DUI charge",
        "An automatic DUI conviction — Oklahoma treats refusal as a guilty plea in the criminal case",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma's implied consent law (47 O.S. § 753) provides that refusing a chemical test after a lawful DUI arrest results in a 180-day administrative license revocation for a first refusal — double the 90-day standard of many states. A second refusal within 10 years: 3-year revocation. The administrative revocation runs separately from any criminal DUI case. The refusal is also admissible as evidence in the criminal DUI trial. Oklahoma's 180-day first-refusal suspension is designed to make refusal less attractive as a strategy — a driver might calculate that avoiding the BAC evidence justifies a suspension, but 180 days is substantially longer than the minimum first-DUI suspension.",
    },
    {
      question: "Before an Oklahoma applicant under 18 can take the drive test, what must they complete?",
      options: [
        "Nothing beyond passing the written test — Oklahoma has no additional under-18 requirements",
        "Hold the Learner Permit at least 180 days, log at least 50 hours of behind-the-wheel training (10 at night), have no traffic convictions, and complete the free Work Zone Safe course",
        "Hold the Learner Permit at least 12 months with no behind-the-wheel hours requirement",
        "Complete a mandatory driver's education class only — behind-the-wheel hours are optional",
      ],
      correctIndex: 1,
      explanation:
        "Oklahoma requires an under-18 applicant to hold their Learner Permit for at least 180 days, complete at least 50 hours of behind-the-wheel training (including 10 hours at night), have no traffic convictions on their driving record, and complete the free Work Zone Safe online course before taking the drive test — confirmed on the official Service Oklahoma written-test page. Adults 18 and older don't need a Learner Permit at all to take the drive test.",
    },
    {
      question: "Oklahoma's road rules require drivers to use which light in their vehicles when driving in rain that reduces visibility?",
      options: [
        "Hazard lights (four-way flashers) — Oklahoma requires hazard lights in rain for maximum visibility",
        "High beams — maximum light output improves visibility in rain",
        "Headlights (low beam) — Oklahoma requires headlights whenever windshield wipers are in use due to weather",
        "No specific light requirement — Oklahoma leaves headlight use in rain to driver discretion",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma requires headlights to be on whenever windshield wipers are operating due to precipitation (47 O.S. § 12-202). This 'wipers on, lights on' rule applies statewide in any weather that requires wiper use: rain, sleet, snow, or fog. Low beams are required — NOT high beams (which can blind oncoming drivers in rain). Note: Oklahoma DPS specifically warns against using hazard lights in rain while driving — some states permit this, but Oklahoma cautions that hazard lights interfere with turn signal communication and may confuse other drivers. Hazard lights are for stopped vehicles; headlights are for moving vehicles in poor visibility.",
    },
    {
      question: "What is Oklahoma's maximum speed limit on rural interstates?",
      options: [
        "65 mph — Oklahoma maintains a uniform 65 mph limit on all controlled-access highways",
        "70 mph — Oklahoma's standard rural interstate limit",
        "75 mph — Oklahoma raised rural interstates to 75 mph to match neighboring Texas and Kansas",
        "80 mph — Oklahoma has the same limit as Texas on certain rural interstates",
      ],
      correctIndex: 2,
      explanation:
        "Oklahoma's maximum speed limit on rural interstates is 75 mph. Oklahoma raised its rural interstate speed limit to 75 mph (from 70 mph) in 2010 to reflect actual traffic speeds and align with neighboring states. Urban interstates and sections through or near cities are typically posted at 55 or 65 mph. Two-lane state highways in rural areas are generally posted at 65 mph. Oklahoma's basic speed rule still applies: the maximum limit assumes favorable conditions, and drivers must reduce speed in rain, fog, construction zones, or heavy traffic. Speeding in school zones (15–25 mph) carries doubled fines.",
    },
    {
      question: "In Oklahoma, what must a driver do when approaching a school bus that has stopped with flashing red lights and an extended stop arm on an undivided road?",
      options: [
        "Yield to pedestrians but may continue at reduced speed past the bus",
        "Stop completely and remain stopped until the red lights stop flashing and the stop arm retracts, even for vehicles approaching from the opposite direction",
        "Only vehicles behind the bus must stop — oncoming traffic on an undivided road may proceed with caution",
        "Stop only if children are visible crossing the road — the bus stop arm is advisory if no children are present",
      ],
      correctIndex: 1,
      explanation:
        "Oklahoma law (47 O.S. § 11-705) requires ALL vehicles — in both directions — to stop when approaching a school bus that has stopped with flashing red lights and an extended stop arm on an undivided road. Both lanes of traffic must remain stopped until the red lights stop flashing and the stop arm retracts. On a divided highway (with a physical median or barrier), traffic on the opposite side does not need to stop. You must stop at least 15 feet from the bus. Violating Oklahoma's school bus stop law is a misdemeanor with significant fines. A second violation within 5 years results in license suspension.",
    },
  ],
  faqs: [
    {
      question: "What should Oklahoma drivers do if a tornado approaches while they are on the road?",
      answer:
        "Oklahoma DPS guidance for tornado encounters while driving: (1) Do NOT try to outrun the tornado — most tornadoes move at 30–60 mph and can change direction unpredictably; (2) Do NOT shelter under a highway overpass — the venturi effect accelerates wind and debris to lethal speeds under the bridge; (3) If no building shelter is reachable, abandon your vehicle and move away from it; (4) Get into the lowest ground available — a roadside ditch, culvert, or depression; (5) Lie flat, face down, cover your head with your arms. The vehicle can be thrown by tornado winds and crush you if you stay inside or remain near it.",
    },
    {
      question: "Does Oklahoma DPS require a road skills test for first-time adult applicants?",
      answer:
        "Yes. Oklahoma requires a road skills (behind-the-wheel) test for all first-time license applicants, including adults. The test must be taken in the applicant's own vehicle or a borrowed vehicle that is properly registered and insured. The skills test includes: vehicle inspection, lane changes, turning, intersections, parallel parking (or angle parking at some locations), and observing signs and signals. Adult applicants transferring a valid license from another U.S. state may be exempt from the road skills test. Oklahoma DPS testing stations administer skills tests by appointment at most locations.",
    },
    {
      question: "What are Oklahoma's DUI penalties for a first-offense adult DUI?",
      answer:
        "Oklahoma first DUI (BAC 0.08%+, age 21+): 10-day license revocation (restricted driving privilege available after 30 days if an IID is installed), mandatory alcohol and drug assessment, up to 1 year in jail, up to $1,000 fine. Aggravating factors (BAC ≥ 0.15%, child passenger, accident with injury): enhanced penalties including mandatory minimum jail time. Oklahoma's implied consent refusal: 180-day revocation for first refusal. Second DUI: 1-year revocation. Third DUI: 3-year revocation, IID mandatory, felony charges begin at fourth DUI.",
    },
    {
      question: "What is Oklahoma's hands-free law (SB 1161) and when does it apply?",
      answer:
        "Oklahoma's SB 1161 (effective November 1, 2023) prohibits all drivers from physically holding or manually using a wireless device while operating a motor vehicle. Primary enforcement: police can stop you solely for this violation. Hands-free Bluetooth, mounted devices (no touching), and voice commands are permitted. Fines: $100 first offense, $200 subsequent. The law applies to all drivers at all times on public roads, including when stopped at red lights (since the vehicle is still being 'operated'). Oklahoma was one of the last states to adopt a comprehensive handheld ban — prior law only restricted texting for drivers under 18.",
    },
    {
      question: "What documents does Oklahoma DPS require for a learner's permit?",
      answer:
        "Oklahoma uses REAL ID documentation. Required: (1) proof of U.S. citizenship or legal presence (birth certificate, passport, or immigration documents); (2) proof of Social Security Number; (3) two proofs of Oklahoma residency within 60 days (utility bills, bank statements, school records); (4) parental consent form if under 18. Oklahoma DPS requires original documents — photocopies are not accepted. A vision screening is conducted at the testing station. The Learner Permit is available at 15 with an approved driver education course (in progress or completed) or 16 without.",
    },
    {
      question: "What is Oklahoma's minimum auto insurance requirement?",
      answer:
        "Oklahoma requires minimum liability coverage of 25/50/25: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage. Proof of insurance must be in the vehicle at all times. Oklahoma's Insurance Department maintains an electronic verification system. Driving without insurance: fines, license suspension, and vehicle registration suspension. Oklahoma does not require uninsured motorist coverage (it's available but optional). An SR-22 insurance certificate is required for license reinstatement after DUI or other serious violations.",
    },
    {
      question: "How does Oklahoma's graduated licensing work for drivers under 18?",
      answer:
        "Oklahoma's under-18 licensing path: a Learner Permit is available at 15 with an approved driver education course (in progress or completed) or 16 without. Before the drive test, the applicant must have held the permit at least 180 days, logged at least 50 hours of behind-the-wheel training (including 10 at night), have no traffic convictions on record, and completed the free Work Zone Safe online course — confirmed on the official Service Oklahoma written-test page. Adults 18 and older can skip the Learner Permit entirely and go straight to the drive test after passing the written test. Service Oklahoma does not publish a separate nighttime curfew or passenger-count restriction for young drivers once licensed.",
    },
    {
      question: "Are there special rules for Oklahoma drivers during ice and winter weather events?",
      answer:
        "Oklahoma does not require tire chains by law (unlike Oregon or Washington with mountain chain control requirements), but Oklahoma DPS advises winter driving preparation for the state's periodic ice storms: (1) Use all-season or winter tires appropriate for conditions; (2) Slow significantly — posted speed limits assume good conditions; (3) Allow extra following distance on ice (10+ seconds at highway speeds); (4) Avoid sudden steering, braking, or acceleration on ice; (5) Oklahoma's I-40, I-44, and US 270 through the Ouachita Mountains receive significant winter weather. Oklahoma does occasionally use traction advisory signs in the Ouachitas and at Wichita Mountains.",
    },
    {
      question: "What are Oklahoma's rules about driving on unpaved county roads?",
      answer:
        "Oklahoma has thousands of miles of unpaved county roads that are publicly maintained. Oklahoma law applies to these roads the same basic traffic laws as paved roads: speed must be appropriate for conditions (basic speed rule), passing rules apply, and right-of-way rules at intersections without signs are determined by the right-of-way default (yield to vehicles already in the intersection). Oklahoma county roads often lack posted speed limits — the basic speed rule governs. Unpaved roads become particularly hazardous after rain: mud can reduce traction significantly, gravel can reduce stopping ability, and washboarding (corrugated surface from erosion) causes vehicle instability. Oklahoma DPS advises reducing speed substantially on unpaved roads in wet conditions.",
    },
    {
      question: "How does Oklahoma handle license suspension for excessive point accumulation?",
      answer:
        "Oklahoma uses a point system (47 O.S. § 6-205) for moving violations. Point values range from 2 (minor violations like improper turn) to 10 (DUI, manslaughter). Accumulating too many points triggers license suspension: 10 points in 5 years = 30-day suspension; 14 points = 60 days; 18 points = 90 days; 22 points = 180 days. A driver may take a defensive driving course to reduce their point total by up to 2 points (once per 3 years). Points remain on record for 3 years from the conviction date. Oklahoma's point system is separate from the Habitual Offender designation — both can result in license action.",
    },
  ],
  relatedTests: [
    { label: "OK Motorcycle Test", href: "/oklahoma-motorcycle-practice-test" },
    { label: "OK CDL Test", href: "/oklahoma-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OklahomaDMVPage() {
  return <PracticeTestPage {...data} />;
}
