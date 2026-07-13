import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Colorado DMV Practice Test 2025 – Free CO Division of Motor Vehicles Knowledge Exam Prep",
  description:
    "Free Colorado DMV practice test based on the 2025 Colorado Driver Handbook. Covers DWAI criminal charge at 0.05%–0.079% BAC, 5 ng/mL cannabis DUI, I-70 mountain corridor chain law, traction law, and hands-free ban (effective Jan 2025).",
  alternates: { canonical: "https://caredmvprep.com/colorado-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/colorado-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Colorado",
  stateAbbr: "CO",
  testLabel: "Driver's License Knowledge Test",
  slug: "colorado-dmv-practice-test",
  headline: "Colorado DMV Practice Test – Division of Motor Vehicles Knowledge Exam",
  intro:
    "Colorado's Division of Motor Vehicles (DMV) sits within the Colorado Department of Revenue (CDOR) — an unusual national placement. This free practice test targets Colorado's most distinctive laws: the DWAI criminal charge at 0.05%–0.079% BAC (CRS § 42-4-1301), the 5 ng/mL delta-9 THC per se DUI limit (first recreational cannabis state to set this threshold), I-70 mountain corridor traction law and Eisenhower Tunnel speed limits, the mandatory turnout rule when 5 or more vehicles queue behind a slow vehicle, and Colorado's hands-free ban effective January 1, 2025 (HB 23-1094).",
  basedOn: "2025 Colorado Driver Handbook",
  about: [
    "Colorado driver's licenses are issued by the Division of Motor Vehicles (DMV), which is part of the Colorado Department of Revenue (CDOR), Revenue Online division. Most states house their licensing agency within a transportation or public safety department — Colorado's placement within Revenue is nationally unusual. DMV offices are located throughout Colorado in both urban and rural areas. The knowledge test consists of multiple-choice questions covering road signs, traffic laws, and safe driving practices, and can be taken in person or through the @Home online testing option.",
    "Colorado has a two-tier alcohol impairment system that is one of the most distinctive in the nation. DUI (Driving Under the Influence) applies at 0.08%+ BAC and is treated as DUI per se under CRS § 42-4-1301 — no additional evidence of impairment is needed. DWAI (Driving While Ability Impaired) is Colorado's unique lower tier: at 0.05%–0.079% BAC, a driver can be charged with DWAI — a Class 2 traffic misdemeanor and an actual criminal charge. Most states treat BAC below 0.08% as a civil matter at most; Colorado makes it criminal. DWAI requires the officer to show the driver was 'affected to the slightest degree' by alcohol. Cannabis DUI uses a 5 ng/mL delta-9 THC per se limit — Colorado legalized recreational cannabis via Amendment 64 in 2012 and was the first state to establish this specific per se threshold.",
    "Colorado's mountain driving laws are some of the most specific in the country. The I-70 mountain corridor runs through the Eisenhower-Johnson Tunnel at 11,013 feet elevation — the speed limit inside the tunnel is 55 mph and is strictly enforced. Colorado's Traction Law requires all vehicles in designated mountain areas (activated during adverse conditions) to have either all-wheel drive or chains/cables on drive tires. The mandatory turnout law requires slower vehicles on mountain roads to pull into a designated turnout when 5 or more vehicles are following behind them. On US-34 (Trail Ridge Road through Rocky Mountain National Park), US-285, and other mountain routes, turnout signs are posted and compliance is legally required. Two vehicles meeting on a narrow mountain road where only one can pass follow a specific rule: the downhill vehicle must yield to the uphill vehicle.",
  ],
  keyRules: [
    { icon: "🍺", rule: "DWAI: 0.05%–0.079% BAC is a criminal misdemeanor in Colorado", detail: "CRS § 42-4-1301: Colorado DWAI at 0.05%–0.079% BAC is a Class 2 traffic misdemeanor — an actual criminal charge. Most states treat below-0.08% BAC as civil only. DUI per se starts at 0.08%." },
    { icon: "🌿", rule: "Cannabis DUI: 5 ng/mL THC per se limit", detail: "CRS § 42-4-1301(6): 5 ng/mL delta-9 THC in whole blood creates a permissible inference of DUI. Colorado was the first recreational cannabis state (2012) to establish this specific THC per se limit." },
    { icon: "⛰️", rule: "I-70 Traction Law + 55 mph in Eisenhower Tunnel", detail: "Colorado's Traction Law requires AWD or chains/cables when activated in the I-70 mountain corridor. Eisenhower-Johnson Tunnel (elev. 11,013 ft) is posted 55 mph — strictly enforced. Glenwood Canyon and Vail Pass have specific closures." },
    { icon: "🚗", rule: "Mandatory turnout: pull over when 5+ vehicles queue behind you", detail: "Colorado law requires slow-moving vehicles on mountain roads to pull into designated turnouts when 5 or more vehicles accumulate behind them. Turnouts are clearly signed on US-34, US-285, and other mountain routes." },
    { icon: "📵", rule: "Hands-Free Law effective January 1, 2025 (HB 23-1094)", detail: "Colorado's updated hands-free ban took effect January 1, 2025 — one of the later states to enact a full handheld ban. All handheld phone use prohibited while driving. Fines: $75 (1st), $150 (2nd), $300 (3rd+)." },
    { icon: "👦", rule: "Instruction permit at 15 — 12 months + 50 hours required", detail: "CO instruction permit available at 15. Must hold 12 months and log 50 supervised hours (10 at night) with a licensed adult 21+ before taking the road skills test." },
    { icon: "🌙", rule: "Restricted license curfew: midnight–5 AM for 12 months", detail: "CO restricted license holders cannot drive midnight to 5 AM for 12 months. Also limited to 1 non-family passenger under 21 for the first 6 months. Violations restart the restricted period." },
    { icon: "🦌", rule: "Wildlife crossing hazards — dawn and dusk on state highways", detail: "Deer, elk, and other wildlife frequently cross Colorado state highways and mountain roads, especially at dawn and dusk. Colorado's manual specifically tests wildlife awareness as a mountain driving safety topic." },
  ],
  sampleQuestions: [
    {
      question: "Colorado's DWAI charge (CRS § 42-4-1301) applies at what BAC level, and is it a criminal offense?",
      options: [
        "0.08%+ BAC — same as DUI; both are criminal in Colorado",
        "0.05%–0.079% BAC — and yes, it is a criminal misdemeanor, not just a civil infraction",
        "0.04%–0.07% BAC — a civil administrative action with no criminal record",
        "Any measurable BAC — Colorado has zero tolerance for all drivers",
      ],
      correctIndex: 1,
      explanation:
        "Colorado's DWAI (Driving While Ability Impaired) charge applies when a driver's BAC is between 0.05% and 0.079%. This makes Colorado unusual nationally: where most states treat below-0.08% BAC as a civil matter at most, Colorado makes 0.05%–0.079% a criminal charge (Class 2 traffic misdemeanor). The officer must show the driver was 'affected to the slightest degree' by alcohol. DUI at 0.08%+ is per se under CRS § 42-4-1301 — no additional impairment evidence needed.",
    },
    {
      question: "Colorado's per se cannabis DUI threshold under CRS § 42-4-1301(6) is set at:",
      options: [
        "Any detectable THC — even residual amounts from prior use",
        "2 ng/mL delta-9 THC in whole blood",
        "5 ng/mL delta-9 THC in whole blood — creating a permissible inference of DUI",
        "10 ng/mL delta-9 THC in whole blood",
      ],
      correctIndex: 2,
      explanation:
        "Colorado law at CRS § 42-4-1301(6) establishes 5 ng/mL delta-9 THC in whole blood as the per se threshold that creates a 'permissible inference' of DUI. Unlike a per se alcohol limit (which is nearly automatic), the 5 ng/mL cannabis threshold creates an inference the driver can rebut — but prosecutors can use it without additional impairment evidence. Colorado legalized recreational cannabis via Amendment 64 in 2012 and was the first recreational-cannabis state to set a specific THC per se limit.",
    },
    {
      question: "What is the speed limit inside the Eisenhower-Johnson Tunnel on I-70 in Colorado?",
      options: ["65 mph — same as the surrounding I-70 corridor", "60 mph", "55 mph — strictly enforced inside the tunnel", "45 mph — reduced due to altitude and confined space"],
      correctIndex: 2,
      explanation:
        "The Eisenhower-Johnson Tunnel on I-70 — situated at 11,013 feet elevation, the highest vehicular tunnel in the world — has a posted speed limit of 55 mph, which is strictly enforced. The tunnel has specific safety rules including no stopping, no passing, and no lane changes inside. During adverse weather, the I-70 mountain corridor may activate the Traction Law requiring all-wheel drive or chains on drive tires. The tunnel speed limit is a specifically tested Colorado driving rule.",
    },
    {
      question: "Colorado's mandatory turnout law on mountain roads requires a slow-moving vehicle to pull into a designated turnout when:",
      options: [
        "Any vehicle behind it flashes its lights",
        "It is traveling more than 15 mph below the posted speed limit",
        "Five or more vehicles have accumulated behind it and cannot safely pass",
        "It enters a posted 'Slow Vehicle Zone' regardless of following traffic",
      ],
      correctIndex: 2,
      explanation:
        "Colorado law requires slow-moving vehicles on mountain roads to pull into designated turnouts when 5 or more vehicles have accumulated behind them. The law applies on narrow two-lane mountain roads where passing is dangerous or impossible, such as US-34 (Trail Ridge Road), US-285, and similar routes. Turnouts are clearly marked with signs. Failure to pull off when legally required can result in a traffic citation. This law is part of Colorado's mountain driving safety regulations.",
    },
    {
      question: "When two vehicles meet on a narrow Colorado mountain road where only one can pass at a time, which must yield?",
      options: [
        "The larger vehicle — trucks always yield to passenger cars on mountain roads",
        "The vehicle going downhill must yield to the vehicle going uphill",
        "The vehicle going uphill must yield — gravity makes stopping harder for uphill drivers",
        "The vehicle arriving first at the narrow section has the right of way",
      ],
      correctIndex: 1,
      explanation:
        "Colorado's mountain driving rule: when two vehicles meet on a narrow road where only one can pass, the vehicle traveling downhill must yield to the vehicle going uphill. This is because it is generally easier and safer for the downhill vehicle to back up to a wider spot — braking control and maneuverability are better when heading downhill. The uphill vehicle is also losing momentum that is harder to regain on a steep grade. This rule is part of Colorado's mountain driving section and is tested on the knowledge exam.",
    },
    {
      question: "Colorado's Traction Law — activated on the I-70 mountain corridor during adverse conditions — requires vehicles to have:",
      options: [
        "Snow tires only — all-season tires are not acceptable under the Traction Law",
        "All-wheel drive OR chains/cables on all four tires",
        "All-wheel drive OR tire chains/cables on drive tires",
        "Four-wheel drive vehicles only — all-wheel drive does not satisfy the Traction Law",
      ],
      correctIndex: 2,
      explanation:
        "Colorado's Traction Law, when activated on the I-70 mountain corridor (and other designated mountain roads), requires all vehicles to have either all-wheel drive or four-wheel drive, OR to have chains or cables installed on the drive tires. All-wheel drive vehicles are typically compliant without chains; front-wheel or rear-wheel drive vehicles may need chains. When the more stringent 'Chain Law' (versus Traction Law) is in effect, even AWD vehicles may require chains. Signs and CDOT alerts indicate which level of traction requirement is active.",
    },
    {
      question: "Colorado's hands-free driving law (HB 23-1094) took effect when, and what does it prohibit?",
      options: [
        "Effective April 2023 — bans only texting, not calls",
        "Effective January 1, 2024 — bans all handheld use for drivers under 21",
        "Effective January 1, 2025 — bans all handheld phone use for all drivers statewide",
        "Effective July 2022 — Colorado was an early adopter of the full handheld ban",
      ],
      correctIndex: 2,
      explanation:
        "Colorado's comprehensive hands-free ban (HB 23-1094) took effect January 1, 2025 — making Colorado one of the later states to enact a full handheld phone prohibition. The law prohibits ALL drivers from holding or manually using a wireless device while driving — calls, texts, navigation, and social media. Hands-free Bluetooth or a dash-mounted device is permitted. Fines: $75 (first offense), $150 (second), $300 (third or subsequent). Distracted driving violations that affect driving behavior can draw additional charges.",
    },
    {
      question: "Colorado's instruction permit is available at what age, and how long must it be held before taking the road skills test?",
      options: [
        "14 years old; held for at least 6 months with 30 supervised hours",
        "15 years old; held for at least 12 months with 50 supervised hours (10 at night)",
        "15 years, 6 months; held for at least 9 months",
        "16 years old; held for at least 6 months with 50 supervised hours",
      ],
      correctIndex: 1,
      explanation:
        "Colorado residents may apply for an instruction permit at age 15 after passing the DMV knowledge test. The permit must be held for a minimum of 12 months, during which the applicant must log at least 50 hours of supervised driving — including 10 hours at night — with a licensed adult 21 or older. After 12 months, the teen can apply for a restricted license by passing the road skills test.",
    },
    {
      question: "Colorado's DWAI at 0.05%–0.079% BAC requires the officer to show what, unlike DUI per se at 0.08%?",
      options: [
        "Nothing additional — DWAI is also per se in Colorado, with no further evidence required",
        "That the driver's ability was 'affected to the slightest degree' by alcohol",
        "That the driver failed a field sobriety test AND had a BAC above 0.05%",
        "That the vehicle was being operated in a school zone or construction zone",
      ],
      correctIndex: 1,
      explanation:
        "Colorado's DWAI at 0.05%–0.079% is not per se — the officer or prosecutor must demonstrate that the driver's ability to operate the vehicle was 'affected to the slightest degree' by alcohol. By contrast, DUI at 0.08%+ is 'per se' — the BAC reading alone is sufficient for conviction without additional evidence of impairment. DWAI prosecutions typically rely on field sobriety test results, driving behavior, and officer observations in addition to the BAC reading.",
    },
    {
      question: "At what age can Colorado's GDL restricted license holders drive without the midnight–5 AM curfew restriction?",
      options: [
        "After 6 months on the restricted license, regardless of age",
        "After 12 months on the restricted license, regardless of age",
        "At age 17, when all restrictions automatically lift",
        "At age 18, when all restrictions automatically lift",
      ],
      correctIndex: 1,
      explanation:
        "Colorado's restricted license nighttime curfew (midnight–5 AM) runs for 12 months from the date the restricted license is issued. After 12 months of violation-free driving on the restricted license, the curfew and passenger restrictions lift. If a traffic violation occurs during the restricted period, the 12-month clock may restart. Exceptions for employment, school, or emergencies require documentation. Most restricted license holders complete the period before turning 17.",
    },
  ],
  faqs: [
    {
      question: "Why is Colorado's DMV housed within the Department of Revenue instead of Transportation?",
      answer:
        "Colorado's Division of Motor Vehicles (DMV) is a division of the Colorado Department of Revenue (CDOR), which collects taxes and fees for the state. Driver's license fees, vehicle registration fees, and related charges are revenue-generating functions — placing them within CDOR made administrative sense in Colorado's government structure. Most states place licensing within a transportation or public safety department. The CDOR placement is an unusual arrangement nationally and is reflected in Colorado's DMV website being at revenue.colorado.gov.",
    },
    {
      question: "What makes Colorado's DWAI law different from other states?",
      answer:
        "Colorado is one of the only states where driving with a BAC between 0.05% and 0.079% is a criminal offense. In most states, sub-0.08% BAC results in a civil administrative action at most — not a criminal charge. Colorado's DWAI (Driving While Ability Impaired, CRS § 42-4-1301) at 0.05%–0.079% is a Class 2 traffic misdemeanor, appearing on the criminal record. It requires proof that the driver was 'affected to the slightest degree' by alcohol. First-offense DWAI carries fines, up to 180 days in jail (with probation common), and 8 license points.",
    },
    {
      question: "How does Colorado's cannabis DUI law work with recreational cannabis being legal?",
      answer:
        "Colorado legalized recreational cannabis via Amendment 64 in 2012. The state simultaneously set a 5 ng/mL delta-9 THC per se DUI limit (CRS § 42-4-1301(6)) in whole blood. Drivers at or above 5 ng/mL are presumed DUI — the prosecution can use this without additional impairment evidence, though it's a 'permissible inference' rather than an absolute per se rule. Drivers can still present evidence they were not actually impaired. Cannabis DUI carries the same penalties as alcohol DUI. Recreational cannabis is legal; driving while impaired by it is not.",
    },
    {
      question: "What are Colorado's I-70 mountain corridor driving requirements?",
      answer:
        "The I-70 mountain corridor has specific rules tested on the knowledge exam: Traction Law (when activated, requires AWD or chains on drive tires), chain law (stricter requirement that may require chains even for AWD), speed limit of 55 mph in the Eisenhower-Johnson Tunnel (elevation 11,013 ft), specific speed limits on Vail Pass and Glenwood Canyon, and potential closures in Glenwood Canyon during flooding. MHD (maximum height and dimension) restrictions apply to large vehicles on steep grades. Downshifting before descending long grades is required to prevent brake fade.",
    },
    {
      question: "What is Colorado's GDL program for teen drivers?",
      answer:
        "Colorado GDL stages: (1) Instruction permit at 15 — 12-month minimum hold, 50 supervised hours (10 at night) with a licensed adult 21+; (2) Restricted license — midnight to 5 AM curfew for 12 months, max 1 non-family passenger under 21 for first 6 months; (3) Full unrestricted license after completing the restricted period. Any traffic violation during the restricted period may restart the 12-month clock.",
    },
    {
      question: "When did Colorado's hands-free law take effect and what does it cover?",
      answer:
        "Colorado HB 23-1094 took effect January 1, 2025 — one of the later states to enact a comprehensive hands-free ban. The law prohibits all drivers from holding or manually using a wireless device while driving — calls, texts, GPS navigation, and social media. Hands-free Bluetooth or a dashboard-mounted device is permitted. Fines: $75 (first offense), $150 (second), $300 (third+). Double fines in school zones and construction zones. A distracted driving charge can accompany the device violation if driving behavior is affected.",
    },
    {
      question: "What is Colorado's mountain road turnout law?",
      answer:
        "Colorado law requires slow-moving vehicles on mountain roads to pull into designated turnouts when 5 or more vehicles accumulate behind them. Turnouts are marked with signs on major mountain routes including US-34 (Trail Ridge Road through Rocky Mountain National Park), US-285, and other Colorado mountain highways. Failure to use turnouts when required can result in a traffic citation. When two vehicles meet on a narrow mountain road where only one can pass, the downhill vehicle must yield to the uphill vehicle.",
    },
    {
      question: "What is right on red in Colorado?",
      answer:
        "Colorado permits right turns on red after a complete stop and yielding to all pedestrians and cross traffic, unless a 'No Right Turn on Red' sign is posted. Left on red is only permitted when turning from a one-way street onto another one-way street after a complete stop and yield. Colorado's mountain pass intersections and some urban intersections may have 'No Turn on Red' signs due to sight-distance limitations.",
    },
    {
      question: "How does Colorado handle wildlife on mountain highways?",
      answer:
        "Colorado's knowledge exam specifically addresses wildlife on roadways. Deer, elk, and other wildlife frequently cross Colorado state highways and mountain roads, particularly at dawn and dusk. Colorado has numerous wildlife crossing corridors on US-6, US-40, US-160, and other mountain routes. When you see a wildlife crossing sign, reduce speed and be prepared to stop — animals often travel in groups, and a second animal may follow seconds after the first crosses. If a collision with a large animal is unavoidable, brake firmly and try not to swerve off the road.",
    },
    {
      question: "What are Colorado's vehicle registration fees — and why does the DMV operate within Revenue?",
      answer:
        "Colorado vehicle registration fees are calculated based on vehicle type, weight, age, and county of residence. The fees are collected by the Colorado Division of Motor Vehicles, which is part of the Department of Revenue (CDOR) because registration fees represent state revenue. Specific fee schedules are available at dmv.colorado.gov. Colorado's unusual placement of the DMV within Revenue reflects a government structure where revenue collection is consolidated — including both tax administration and motor vehicle fee collection.",
    },
  ],
  relatedTests: [
    { label: "CO Motorcycle Test", href: "/colorado-motorcycle-practice-test" },
    { label: "CO CDL Test", href: "/colorado-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function ColoradoDMVPage() {
  return <PracticeTestPage {...data} />;
}
