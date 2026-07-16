import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Dakota DMV Practice Test 2025 – Free ND Driver's License Exam Prep",
  description:
    "Free North Dakota DMV practice test. Covers DUI law (0.08% adult, 0.02% under-21, aggravated at 0.16%), implied consent, GDL permit at 14, 50 supervised hours, cell phone ban, speed limits (80 mph interstate), seat belt, and child restraint laws. Based on NDCC.",
  alternates: { canonical: "https://caredmvprep.com/north-dakota-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/north-dakota-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "North Dakota",
  stateAbbr: "ND",
  testLabel: "DMV Practice Test",
  slug: "north-dakota-dmv-practice-test",
  headline: "North Dakota DMV Practice Test 2025",
  intro:
    "The North Dakota Department of Transportation Driver License Division administers the driver knowledge test for all license applicants. This free practice test is based on verified North Dakota Century Code (NDCC) statutes, covering DUI and implied consent law, graduated driver licensing (GDL), speed limits, headlight requirements, cell phone restrictions, seat belt and child restraint laws, and right-of-way rules. Study these North Dakota-specific laws to prepare confidently for the real 25-question exam.",
  basedOn: "North Dakota Century Code (NDCC) / North Dakota DOT Driver's Manual",
  keyRules: [
    {
      icon: "🍺",
      rule: "DUI — Adult 0.08%; Under-21 0.02%; Aggravated at 0.16% and 0.18%",
      detail:
        "NDCC § 39-08-01 sets 0.08% BAC as the adult per se DUI threshold. Drivers under 21 face a 0.02% limit under zero-tolerance law. CDL holders in commercial vehicles face 0.04%. A BAC at or above 0.16% triggers aggravated DUI with enhanced criminal penalties. A BAC at or above 0.18% on a first offense triggers the longer 180-day administrative license suspension — below that level, the first-offense suspension is 91 days.",
    },
    {
      icon: "🚫",
      rule: "Implied Consent — 180 Days for 1st Refusal; 365 Days for 2nd Within 7 Years",
      detail:
        "By driving in North Dakota, you consent to breath, blood, or urine testing if an officer has reasonable grounds to believe you are impaired. A first refusal triggers a 180-day administrative license suspension. A second refusal within 7 years results in a 365-day (1-year) suspension. Refusing does not prevent DUI prosecution — police may seek a warrant for a blood draw.",
    },
    {
      icon: "📋",
      rule: "GDL Permit at 14 — Under-16 Hold 12 Months; 16-17 Hold 6 Months",
      detail:
        "NDCC § 39-06-04 allows instruction permit applications as young as 14 — one of the lowest permit ages in the country. Permit holders under 16 must hold the permit for at least 12 months and complete 50 supervised driving hours. Permit holders aged 16–17 must hold the permit for at least 6 months. A supervising driver must be at least 18 years old with 3+ years of licensed experience, seated beside the permit holder at all times.",
    },
    {
      icon: "📱",
      rule: "Cell Phone: Texting Ban for All Drivers; Full Wireless Ban for Under-18",
      detail:
        "NDCC § 39-08-23 prohibits all drivers from composing, reading, or sending electronic messages on any wireless device while driving. Hands-free voice calls are permitted for adult drivers. NDCC § 39-08-24 extends the ban further for drivers under 18: no wireless device use of any kind while driving — even hands-free — except to report a genuine emergency.",
    },
    {
      icon: "🚗",
      rule: "Speed Limits: 80 mph Interstate / 70 mph 4-Lane Divided / 65 mph 2-Lane Hwy",
      detail:
        "NDCC § 39-09-01 establishes North Dakota's statewide default limits: 80 mph on interstate highways (one of the highest in the country); 70 mph on four-lane divided multilane highways; 65 mph on two-lane state highways; 55 mph on paved rural county and township roads; 25 mph in residential areas. School zones are posted at 20 mph when children are present.",
    },
    {
      icon: "💡",
      rule: "Headlights: Required Within 1,000 ft Visibility; Dim Within 500 ft / 300 ft",
      detail:
        "Headlights are required from 30 minutes after sunset until 30 minutes before sunrise and whenever visibility is reduced to 1,000 feet or less. High beams must be dimmed to low beam within 500 feet of an oncoming vehicle and within 300 feet of a vehicle you are following. High-beam glare can temporarily blind other drivers and is a significant crash risk.",
    },
    {
      icon: "🪑",
      rule: "Seat Belt: All Occupants Required; Child Restraint Under Age 8",
      detail:
        "NDCC § 39-21-41.4 requires all occupants of a passenger vehicle equipped with seat belts to wear a properly adjusted and fastened belt. NDCC § 39-21-41.2 requires children under 8 years old to be secured in an approved child restraint device (car seat or booster seat) unless the child is 57 inches or taller, in which case a standard seat belt may be used.",
    },
    {
      icon: "🚌",
      rule: "School Bus: Stop for Flashing Red; Railroad: Stop Within 15 Feet",
      detail:
        "When a school bus activates its flashing red lights and stop arm, all vehicles in all lanes must stop before reaching the bus and remain stopped until the lights stop flashing. At railroad crossings, stop at least 15 feet from the nearest rail and do not cross until the track is completely clear on all tracks.",
    },
  ],
  about: [
    "North Dakota's graduated driver licensing (GDL) program allows some of the youngest permit holders in the nation. Under NDCC § 39-06-04, applicants as young as 14 may obtain a Class D instruction permit. The permit holder under age 16 must hold the permit for a full 12 months and complete at least 50 hours of supervised practice driving before taking the road skills test. Permit holders aged 16–17 must hold the permit for a minimum of 6 months. In both cases, the supervising driver must be at least 18 years old with at least 3 years of licensed driving experience, and must be seated in the seat directly beside the permit holder at all times. Permit holders under 16 may only operate vehicles owned by a parent, guardian, grandparent, sibling, aunt, or uncle — a family-vehicle restriction designed to limit exposure to unfamiliar vehicles. No other person may be in the front seat besides the permit holder and the supervisor, unless the vehicle has only a front seat.",
    "North Dakota's DUI law (NDCC § 39-08-01) establishes a comprehensive system of BAC thresholds with escalating penalties. The adult per se threshold is 0.08% BAC. Drivers under 21 are subject to zero-tolerance rules and face DUI consequences at 0.02% BAC. CDL holders operating commercial vehicles face a 0.04% threshold under federal FMCSA standards. When a driver's BAC reaches 0.16%, aggravated DUI charges apply with enhanced criminal consequences. A first-offense DUI with a BAC below 0.18% results in a 91-day administrative license suspension; a first-offense BAC at or above 0.18% triggers a 180-day suspension. North Dakota's 24/7 Sobriety Program may be required as a condition of a restricted driving license — it involves twice-daily breath testing or continuous alcohol monitoring. An ignition interlock device may also be required for eligible offenders seeking early reinstatement.",
    "North Dakota has several distinctive traffic laws that frequently appear on the knowledge test. The state's interstate speed limit of 80 mph is among the highest in the country, reflecting the state's vast rural distances and high-quality divided highways. Cell phone law has a two-tier structure: all drivers are banned from composing, reading, or sending electronic messages (NDCC § 39-08-23), while drivers under 18 face a total wireless device ban including hands-free calls (NDCC § 39-08-24). The child restraint law protects children under 8 years old, with an exception for children who are at least 57 inches tall. North Dakota also has a 'dead red' law permitting motorcyclists to proceed through an unresponsive sensor-triggered red light after stopping and yielding. The Move Over law requires drivers to move one lane away from stopped emergency vehicles with activated lights, or to slow significantly when a lane change is not possible.",
  ],
  sampleQuestions: [
    {
      question: "What is the adult per se DUI BAC threshold in North Dakota under NDCC § 39-08-01?",
      options: ["0.10% or more", "0.06% or more", "0.05% or more", "0.08% or more"],
      correctIndex: 3,
      explanation:
        "NDCC § 39-08-01 sets 0.08% BAC as the adult per se DUI threshold in North Dakota. A driver at or above this level is guilty of DUI regardless of apparent impairment. The aggravated tier triggers at 0.16%, and the extra-aggravated tier triggers at 0.18%.",
    },
    {
      question: "What is the BAC limit for North Dakota drivers under 21?",
      options: ["0.08% or more", "0.05% or more", "0.02% or more", "0.04% or more"],
      correctIndex: 2,
      explanation:
        "North Dakota's zero-tolerance law sets the under-21 BAC limit at 0.02% — far below the adult 0.08% threshold. Even a small amount of alcohol triggers DUI consequences for drivers under 21. This strict limit is designed to deter underage drinking and driving.",
    },
    {
      question: "How long is the license suspension for a first-time refusal to take a chemical test under North Dakota's implied consent law?",
      options: ["90 days", "30 days", "365 days", "180 days"],
      correctIndex: 3,
      explanation:
        "A first-time refusal to submit to a chemical test in North Dakota results in a 180-day administrative license suspension. A second refusal within 7 years doubles the suspension to 365 days (1 year). Refusing does not prevent DUI prosecution and police may seek a blood-draw warrant.",
    },
    {
      question: "What is the maximum speed limit on North Dakota's interstate highways?",
      options: ["65 mph", "70 mph", "75 mph", "80 mph"],
      correctIndex: 3,
      explanation:
        "NDCC § 39-09-01 sets North Dakota's interstate speed limit at 80 mph — one of the highest in the United States. This limit applies on divided limited-access interstate routes under ideal conditions. The limit on four-lane divided non-interstate highways is 70 mph.",
    },
    {
      question: "Under NDCC § 39-08-23, what is prohibited for ALL North Dakota drivers on a wireless device while driving?",
      options: [
        "Using a mounted GPS navigation device",
        "Listening to music through Bluetooth speakers",
        "Composing, reading, or sending electronic messages",
        "Talking on a hands-free phone",
      ],
      correctIndex: 2,
      explanation:
        "NDCC § 39-08-23 prohibits all drivers from composing, reading, or sending electronic messages on a wireless device while operating a moving vehicle. Hands-free voice calls and GPS navigation are explicitly exempt for adult drivers. Drivers under 18 face a total wireless ban under a separate statute (§ 39-08-24).",
    },
    {
      question: "What is the minimum age to apply for a Class D instruction permit in North Dakota?",
      options: ["15 years old", "16 years old", "15½ years old", "14 years old"],
      correctIndex: 3,
      explanation:
        "NDCC § 39-06-04 allows applicants as young as 14 to obtain a Class D instruction permit in North Dakota — one of the lowest minimum permit ages in the country. Permit holders under 16 must hold the permit for 12 months and complete 50 supervised driving hours before taking the skills test.",
    },
    {
      question: "Under North Dakota law, children under what age must use an approved child restraint device?",
      options: ["Under 13", "Under 6", "Under 10", "Under 8"],
      correctIndex: 3,
      explanation:
        "NDCC § 39-21-41.2 requires that children under 8 years old be properly secured in an approved child restraint device (car seat or booster seat). The exception: if the child is at least 57 inches (about 4'9\") tall, a standard seat belt may be used instead.",
    },
    {
      question: "Within how many feet of an oncoming vehicle must you dim your high-beam headlights in North Dakota?",
      options: ["200 feet", "1,000 feet", "300 feet", "500 feet"],
      correctIndex: 3,
      explanation:
        "NDCC § 39-21-03 requires dimming to low beams within 500 feet of an oncoming vehicle. When following another vehicle, you must dim within 300 feet. High beams directed at oncoming drivers can cause temporary blindness and serious crash risk.",
    },
    {
      question: "What must you do when approaching a school bus with flashing red lights and a stop arm extended in North Dakota?",
      options: [
        "Slow to 15 mph and proceed carefully",
        "Stop and remain stopped until the lights go off and the bus moves or signals you",
        "Yield and pass when no children are visible",
        "Stop only if you are directly behind the bus",
      ],
      correctIndex: 1,
      explanation:
        "When a school bus displays flashing red lights and extends its stop arm, all vehicles in all lanes must stop before reaching the bus. You must remain stopped until the lights stop flashing and the stop arm is retracted, or until the bus driver signals you to proceed.",
    },
    {
      question: "Under North Dakota's GDL law, how many supervised driving hours must a permit holder under 16 complete?",
      options: ["25 hours", "75 hours", "100 hours", "50 hours"],
      correctIndex: 3,
      explanation:
        "NDCC § 39-06-04 requires permit holders under 16 to complete at least 50 hours of supervised practice driving before taking the road skills test. This requirement ensures new teen drivers gain experience in a variety of real-world driving situations under adult supervision.",
    },
  ],
  faqs: [
    {
      question: "What are North Dakota's DUI BAC limits?",
      answer:
        "NDCC § 39-08-01 sets the adult per se DUI threshold at 0.08% BAC. Drivers under 21 face a zero-tolerance limit of 0.02%. CDL holders operating commercial vehicles face a 0.04% threshold under federal FMCSA standards. A BAC of 0.16% or more triggers aggravated DUI with enhanced criminal penalties. A BAC of 0.18% or more on a first offense triggers the longer 180-day administrative license suspension (below 0.18%, the first-offense suspension is 91 days).",
    },
    {
      question: "What are North Dakota's implied consent refusal penalties?",
      answer:
        "North Dakota's implied consent law requires drivers to submit to chemical testing (breath, blood, or urine) when an officer has reasonable grounds to believe they are impaired. A first refusal triggers a 180-day administrative license suspension. A second refusal within 7 years results in a 365-day (1-year) suspension. Refusing does not prevent criminal DUI prosecution — police may obtain a warrant for a blood draw.",
    },
    {
      question: "What are North Dakota's GDL permit requirements?",
      answer:
        "Under NDCC § 39-06-04, applicants as young as 14 may obtain a Class D instruction permit. Permit holders under 16 must hold the permit for at least 12 months and complete 50 supervised driving hours. Permit holders aged 16–17 must hold the permit for at least 6 months. The supervising driver must be at least 18 years old with 3+ years of licensed experience, seated directly beside the permit holder. Permit holders under 16 may only drive vehicles owned by a parent, guardian, grandparent, sibling, aunt, or uncle.",
    },
    {
      question: "What are North Dakota's speed limits?",
      answer:
        "NDCC § 39-09-01 establishes: 80 mph on interstate highways; 70 mph on four-lane divided multilane highways; 65 mph on two-lane state highways; 55 mph on paved rural county and township roads; 25 mph in residential areas (default). School zones are posted at 20 mph when children are present. Always obey the posted limit — conditions may require driving slower than the posted maximum.",
    },
    {
      question: "What are North Dakota's cell phone driving laws?",
      answer:
        "NDCC § 39-08-23 prohibits all drivers from composing, reading, or sending electronic messages on a wireless device while driving. Hands-free voice calls are permitted for adult drivers. NDCC § 39-08-24 imposes an additional restriction for drivers under 18: no wireless device use of any kind while driving — including hands-free calls — except to report a genuine emergency.",
    },
    {
      question: "What is North Dakota's child restraint law?",
      answer:
        "NDCC § 39-21-41.2 requires children under 8 years old to be secured in an approved child restraint device — a rear-facing car seat, forward-facing car seat, or booster seat as appropriate for the child's age, height, and weight — per the manufacturer's instructions. Exception: if the child is at least 57 inches (4'9\") tall, a standard seat belt may be used.",
    },
    {
      question: "When must North Dakota drivers use headlights during the day?",
      answer:
        "Headlights are required during daylight when visibility is reduced to 1,000 feet or less due to fog, rain, snow, dust, or other conditions. Headlights are also required from 30 minutes after sunset until 30 minutes before sunrise. High beams must be dimmed within 500 feet of an oncoming vehicle and within 300 feet of a vehicle you are following.",
    },
    {
      question: "What is the North Dakota knowledge test format?",
      answer:
        "The North Dakota driver knowledge test consists of 25 multiple-choice questions. Applicants must correctly answer at least 20 questions (80%) to pass. The test covers traffic laws, road signs, GDL rules, DUI and implied consent, vehicle safety, right-of-way rules, and special driving conditions. The test is administered at North Dakota DOT driver license offices.",
    },
    {
      question: "What are North Dakota's seat belt requirements?",
      answer:
        "NDCC § 39-21-41.4 requires all occupants of a passenger vehicle equipped with seat belts to wear a properly adjusted and fastened belt. This applies to the driver and all passengers, regardless of seating position. Children under 8 must use an approved child restraint device unless they are at least 57 inches tall.",
    },
    {
      question: "What is North Dakota's school bus stop law?",
      answer:
        "When a school bus activates its flashing red warning lights and extends its stop arm, all vehicles approaching from either direction must stop before reaching the bus and remain stopped until the lights stop flashing and the stop arm is retracted. Failure to stop for a school bus is a serious violation and can result in significant fines and license points.",
    },
  ],
  relatedTests: [
    { label: "North Dakota Motorcycle Practice Test", href: "/north-dakota-motorcycle-practice-test" },
    { label: "North Dakota CDL Practice Test", href: "/north-dakota-cdl-practice-test" },
    { label: "South Dakota DMV Practice Test", href: "/south-dakota-dmv-practice-test" },
    { label: "Montana DMV Practice Test", href: "/montana-dmv-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NorthDakotaDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
