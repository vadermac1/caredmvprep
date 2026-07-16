import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Delaware Motorcycle Practice Test 2025 – Free DE Endorsement Exam Prep",
  description:
    "Prepare for your Delaware motorcycle endorsement test. Covers helmet law (under 19 + newly-endorsed 2 years), eye protection, lane splitting illegal, one-hand rule, high-beam at 200 ft following, DUI 0.08%/0.02%, based on 21 Del. C. § 4185.",
  alternates: { canonical: "https://caredmvprep.com/delaware-motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/delaware-motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Delaware",
  stateAbbr: "DE",
  testLabel: "Motorcycle Practice Test",
  slug: "delaware-motorcycle-practice-test",
  headline: "Delaware Motorcycle Practice Test 2025",
  intro:
    "Delaware requires a motorcycle endorsement on your driver's license to legally operate any motorcycle on public roads. The endorsement knowledge test covers Delaware-specific statutes under Title 21, including the 2023 amended helmet law (§ 4185), eye protection requirements, the lane-splitting prohibition, handlebar rules, passenger equipment requirements, and DUI BAC limits. Study these verified Delaware laws to prepare for the real endorsement exam.",
  basedOn: "Delaware Code Title 21 § 4185 / Delaware DMV Motorcycle Operator Information",
  keyRules: [
    {
      icon: "🪖",
      rule: "Helmet Law: Under-19 AND Newly-Endorsed Riders for First 2 Years (§ 4185, amended July 30, 2023)",
      detail: "Delaware § 4185 requires helmets for two groups: (1) operators and passengers age 19 and under, and (2) 'newly-endorsed' riders who obtained their motorcycle endorsement after July 30, 2023, who must wear a helmet for their first 2 years regardless of age. Riders outside these groups are not legally required to wear a helmet, though safety experts universally recommend it. The civil penalty for a violation is $25–$50.",
    },
    {
      icon: "👓",
      rule: "Eye Protection: Same Groups as Helmet",
      detail: "Eye protection is required for the same two groups as the helmet requirement: riders under 19 and newly-endorsed riders in their first 2 years (§ 4185). Eye protection prevents wind, debris, and insects from impairing vision during operation.",
    },
    {
      icon: "🚫",
      rule: "Lane Splitting: Not Authorized in Delaware",
      detail: "Delaware Code Title 21 contains no provision authorizing lane splitting (riding between lanes of slow or stopped traffic). Without explicit statutory authorization, lane splitting is not a permitted practice. Motorcyclists must occupy a full lane (§ 4185).",
    },
    {
      icon: "✋",
      rule: "One Hand on Handlebars at All Times While Moving",
      detail: "Delaware § 4185 requires the operator to keep at least one hand on the handgrip of the handlebars at all times when moving. This allows one hand off for hand signals or gear adjustment, but the rider must always maintain at least one hand on the bars for steering control.",
    },
    {
      icon: "🎒",
      rule: "No Packages Preventing Two-Handed Control (§ 4185(e))",
      detail: "Section 4185(e) prohibits carrying any package, bundle, or article that prevents the operator from keeping both hands on the handlebars when needed. Cargo that restricts arm movement is prohibited regardless of its size or weight.",
    },
    {
      icon: "👫",
      rule: "Passengers Allowed Only on Multi-Rider Motorcycles With Proper Equipment",
      detail: "Delaware § 4185 permits passengers only on motorcycles designed for multiple riders, equipped with proper seating and footrests for the passenger. A single-seat motorcycle cannot legally carry a passenger — there must be engineered accommodation for the additional rider.",
    },
    {
      icon: "💡",
      rule: "High-Beam Dim at 200 ft When Following (Distinctive)",
      detail: "Delaware § 4350 requires dimming high beams within 200 feet when following another vehicle — most states use 300 feet. When approaching an oncoming vehicle, dim within 500 feet (same as most states). Motorcycles must comply with the same headlight rules as cars.",
    },
    {
      icon: "🍺",
      rule: "DUI: Adult 0.08%; Under-21 Rider 0.02%",
      detail: "Delaware § 4177 applies fully to motorcycle operators. The adult DUI threshold is 0.08% BAC. Under-21 motorcycle riders face a 0.02% limit under § 4177L. Alcohol impairs the balance, coordination, and reaction time that are essential for safe motorcycle operation.",
    },
  ],
  about: [
    "Delaware's motorcycle helmet law underwent a significant change effective July 30, 2023, when § 4185 was amended to add a second mandatory helmet category. Previously, only riders and passengers age 19 and under were required to wear helmets. The 2023 amendment added a 'newly-endorsed' category: any person who received their motorcycle endorsement after July 30, 2023 must wear an approved helmet and eye protection for their first 2 years of operation, regardless of their age. This means a 40-year-old rider who got their endorsement in August 2023 is legally required to wear a helmet until August 2025. After that 2-year period expires, they are no longer required to wear one by law (though safety organizations strongly recommend all riders wear helmets on every ride). The civil penalty for a helmet or eye protection violation is $25 to $50, with no motor vehicle points assessed.",
    "Delaware § 4185 contains several operator rules worth knowing for the endorsement exam. Riders must be seated astride the permanent seat, facing forward, with one leg on each side of the motorcycle — no non-standard riding positions. At least one hand must be on the handgrip at all times while moving. Passengers are only permitted on motorcycles designed for multiple riders with proper seating and footrests — improvised seating arrangements are illegal. Operators may not carry cargo that prevents keeping both hands on the handlebars when needed. Passengers must not position themselves in a way that interferes with the operation, control, or the operator's view (§ 4185(f)).",
    "Lane splitting — riding a motorcycle between lanes of slow-moving or stopped traffic — is not authorized in Delaware. Delaware Code Title 21 contains no provision permitting it, and without explicit statutory authorization, the practice is not legal. Motorcyclists are required to occupy a full lane. Delaware's headlight laws (§ 4350) have a distinctive following-vehicle rule: high beams must be dimmed when following a vehicle within 200 feet — compared to 300 feet in most other states. Delaware also permits modulating headlights on motorcycles under § 4349, which allows pulsing headlights as a presence warning device to improve conspicuity to other drivers.",
  ],
  sampleQuestions: [
    {
      question: "Under Delaware § 4185 (amended July 30, 2023), which motorcycle riders are legally required to wear a helmet?",
      options: [
        "All riders regardless of age — universal helmet law",
        "Riders and passengers aged 19 and under, plus newly-endorsed riders for their first 2 years",
        "Only passengers — operators are exempt if licensed more than 2 years",
        "Only riders under 16 years old",
      ],
      correctIndex: 1,
      explanation:
        "Section 4185 creates two mandatory helmet groups: (1) operators and passengers age 19 and under, and (2) 'newly-endorsed persons' who obtained their motorcycle endorsement after July 30, 2023, who must wear helmets and eye protection for their first 2 years. Riders outside these groups may choose whether to wear a helmet.",
    },
    {
      question: "A Delaware rider who received their motorcycle endorsement after July 30, 2023 must wear a helmet and eye protection for how long regardless of their age?",
      options: ["Until age 21", "6 months", "1 year", "2 years"],
      correctIndex: 3,
      explanation:
        "Section 4185 creates a 'newly-endorsed' category — anyone who received a motorcycle endorsement after July 30, 2023 must wear an approved helmet and eye protection for their first 2 years of operation. This applies regardless of the rider's age, making it a distinct requirement from the age-based under-19 mandate.",
    },
    {
      question: "Is lane splitting — riding a motorcycle between lanes of slow-moving or stopped traffic — permitted in Delaware?",
      options: [
        "Yes — lane splitting is allowed during rush-hour congestion only",
        "No — Delaware has no law authorizing lane splitting, so it is not permitted",
        "Yes — Delaware explicitly authorizes lane splitting at speeds under 10 mph",
        "No — lane splitting is a felony in Delaware",
      ],
      correctIndex: 1,
      explanation:
        "Delaware Code Title 21 does not contain any provision authorizing lane splitting. Without explicit statutory authorization, lane splitting is not a permitted practice in Delaware. Lane splitting is illegal in Delaware and most other U.S. states. Motorcyclists in Delaware must occupy a full lane and may not pass between lanes of traffic.",
    },
    {
      question: "Delaware § 4185 requires a motorcycle operator to keep how many hands on the handlebars at all times while moving?",
      options: [
        "Both hands at all times except when signaling",
        "At least 1 hand at all times",
        "Both hands at all times with no exceptions",
        "No minimum — one hand is sufficient",
      ],
      correctIndex: 1,
      explanation:
        "Section 4185 requires the operator to 'keep at least 1 hand on a handgrip of the handlebars at all times when moving.' While this allows one hand off for signaling or adjusting gear, the requirement to always maintain at least one hand on the bars ensures the rider retains steering control.",
    },
    {
      question: "When following another vehicle in Delaware, a motorcycle rider must dim high beams when within what distance?",
      options: ["200 feet", "500 feet", "1,000 feet", "300 feet"],
      correctIndex: 0,
      explanation:
        "Delaware § 4350 requires dimming high beams within 200 feet when following another vehicle — this is distinctive because most states use a 300-foot threshold. For oncoming vehicles, dim within 500 feet. On a motorcycle, high beams directed into another driver's mirrors create intense glare.",
    },
    {
      question: "What blood alcohol concentration limit applies to a motorcycle rider who is under 21 years old in Delaware?",
      options: [".00 — any detectable alcohol is prohibited", ".04 or more", ".02 or more", ".08 or more"],
      correctIndex: 2,
      explanation:
        "Delaware § 4177L sets a .02 BAC limit for all operators under 21, including motorcycle riders. A reading of .02 or more constitutes per se evidence of unlawful operation. This is far lower than the adult .08 limit and reflects Delaware's zero-tolerance approach to underage impaired riding.",
    },
    {
      question: "Delaware § 4185(e) prohibits a motorcycle operator from carrying which type of load?",
      options: [
        "Any load over 50 pounds attached to the rear",
        "Any cargo that extends beyond the width of the handlebars",
        "Packages or articles that prevent the operator from keeping both hands on the handlebars",
        "Loads that add more than 15% to the motorcycle's total weight",
      ],
      correctIndex: 2,
      explanation:
        "Section 4185(e) states that no person may operate a motorcycle 'while carrying any package, bundle or other article which prevents the person from keeping both hands on the handlebars.' Maintaining full two-hand control capability is essential — cargo that restricts arm movement is prohibited regardless of its size or weight.",
    },
    {
      question: "Under Delaware § 4185, when is a motorcycle operator legally permitted to carry a passenger?",
      options: [
        "At any time — passengers are always permitted regardless of motorcycle design",
        "Only if the passenger is wearing a DOT-approved helmet, regardless of age",
        "Only on motorcycles designed for multiple riders, equipped with appropriate seating and footrests for the passenger",
        "Only when the operator has held a full endorsement for at least 1 year",
      ],
      correctIndex: 2,
      explanation:
        "Section 4185 permits passengers only on motorcycles designed for multiple riders and equipped with proper seating and footrests for the passenger. A single-seat motorcycle cannot legally carry a passenger — there must be engineered accommodation for the additional rider, not improvised seating.",
    },
    {
      question: "Delaware's motorcycle helmet law was amended effective July 30, 2023. What new category of riders must now wear helmets regardless of age?",
      options: [
        "Newly-endorsed riders for the first 2 years after obtaining their endorsement",
        "All riders on highways with a speed limit of 55 mph or higher",
        "All riders until age 25 under the new extended provision",
        "All riders transporting passengers regardless of the passenger's age",
      ],
      correctIndex: 0,
      explanation:
        "The 2023 amendment to § 4185 added 'newly-endorsed persons' — those who obtained their motorcycle endorsement after July 30, 2023 — to the mandatory helmet group for their first 2 years of operation. This is Delaware-specific law that applies regardless of the rider's age, adding a skills-based criterion alongside the existing age-based criterion.",
    },
    {
      question: "What is the civil penalty range for violating Delaware's motorcycle helmet or eye protection requirement (§ 4185)?",
      options: ["$50–$150", "$100–$250", "$25–$50", "$10–$25"],
      correctIndex: 2,
      explanation:
        "Section 4185 imposes a civil assessment of $25 to $50 for helmet or eye protection violations, with no additional court costs permitted. The violation is not classified as a criminal offense. No motor vehicle points are assessed — enforcement is purely monetary for this protective equipment requirement.",
    },
  ],
  faqs: [
    {
      question: "Who must wear a helmet under Delaware's motorcycle helmet law?",
      answer:
        "Delaware § 4185 requires helmets for two groups: (1) motorcycle operators and passengers age 19 and under, and (2) 'newly-endorsed' riders who received their endorsement after July 30, 2023, who must wear a helmet for their first 2 years regardless of age. Riders outside these groups are not legally required to wear a helmet, though all safety organizations recommend wearing one on every ride. The civil penalty for a violation is $25–$50.",
    },
    {
      question: "What did Delaware's 2023 helmet law amendment change?",
      answer:
        "Effective July 30, 2023, Delaware amended § 4185 to add a 'newly-endorsed' category: any person who received their motorcycle endorsement after that date must wear an approved helmet and eye protection for their first 2 years of operation, regardless of their age. This is in addition to the pre-existing under-19 requirement. The purpose is to ensure new riders — who face the highest crash risk in their first two years — are protected during the highest-risk period.",
    },
    {
      question: "Is eye protection required for motorcycle riders in Delaware?",
      answer:
        "Eye protection is required for the same two groups as the helmet requirement under § 4185: operators and passengers age 19 and under, and newly-endorsed riders in their first 2 years. Approved eye protection includes goggles, a face shield, or a full-face helmet visor. Riders not in those groups are not legally required to wear eye protection, but it is strongly recommended to prevent vision impairment from wind, debris, and insects.",
    },
    {
      question: "Is lane splitting legal in Delaware?",
      answer:
        "No. Lane splitting is not authorized in Delaware. Delaware Code Title 21 contains no provision permitting motorcycles to ride between lanes of slow-moving or stopped traffic. Without explicit statutory authorization, the practice is not legal. Motorcyclists in Delaware must occupy a full lane. Lane splitting is illegal in Delaware and most other U.S. states.",
    },
    {
      question: "What are Delaware's DUI BAC limits for motorcycle riders?",
      answer:
        "Delaware's DUI law (§ 4177) applies fully to motorcycle operators. Adult riders (21 and older): 0.08% BAC. Riders under 21: 0.02% BAC under § 4177L. Commercial vehicle operators (including motorcycles used commercially): 0.04% under § 4177M. Delaware also has aggravated DUI tiers at 0.15% and 0.20% BAC with enhanced mandatory sentencing.",
    },
    {
      question: "How do I get a motorcycle endorsement in Delaware?",
      answer:
        "To obtain a motorcycle endorsement in Delaware, you must pass a motorcycle knowledge test at a Delaware DMV office. You then either pass a motorcycle riding skills test at a DMV testing site, or complete an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse, which waives both the knowledge and skills tests when completed through the DMV. The endorsement is added as an 'M' designation to your Delaware driver's license.",
    },
    {
      question: "What is the following-distance headlight rule for motorcycles in Delaware?",
      answer:
        "Delaware § 4350 requires motorcycle riders (and all drivers) to dim high beams when following another vehicle within 200 feet. This is distinctive — most states use a 300-foot threshold for the following-vehicle rule. For oncoming vehicles, the dimming requirement applies within 500 feet, which is standard. Failing to dim creates dangerous glare in another driver's mirrors.",
    },
    {
      question: "What are the handlebar rules for Delaware motorcycle operators?",
      answer:
        "Under § 4185: (1) At least one hand must be on the handgrip at all times while moving; (2) Operators must ride astride the permanent seat, facing forward, with one leg on each side; (3) No packages may be carried that prevent the operator from keeping both hands on the handlebars when needed (§ 4185(e)); (4) Passengers must not be positioned in a way that interferes with operation, control, or the operator's view (§ 4185(f)).",
    },
    {
      question: "Can motorcycles use modulating headlights in Delaware?",
      answer:
        "Yes. Delaware's lighting code permits modulating headlights on motorcycles as a presence warning device. The pulsing light draws the attention of other drivers who might otherwise fail to notice a motorcycle. Conspicuity is a major motorcycle safety concern since motorcycles are frequently struck because car drivers did not see them.",
    },
  ],
  relatedTests: [
    { label: "Delaware DMV Practice Test", href: "/delaware-dmv-practice-test" },
    { label: "Delaware CDL Practice Test", href: "/delaware-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function DelawareMotorcyclePracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
