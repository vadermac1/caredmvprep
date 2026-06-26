import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps, type SplitTest } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Pennsylvania Driver's License Practice Test 2025 – Free PA PennDOT Exam Prep",
  description:
    "Free Pennsylvania driver's license practice test based on the official PA Driver's Manual. 18 sign questions + 67 road rules, 85 total. Pass your PA PennDOT knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/pennsylvania-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/pennsylvania-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Pennsylvania",
  stateAbbr: "PA",
  testLabel: "Driver's License Practice Test",
  slug: "pennsylvania-dmv-practice-test",
  headline: "Pennsylvania PennDOT Driver's License Practice Test",
  intro:
    "Prepare for your Pennsylvania PennDOT knowledge test with free practice questions built around the laws, penalties, and road situations unique to the Commonwealth. Pennsylvania's 85-question, two-section exam — administered by PennDOT, not a DMV — covers everything from the state's three-tier DUI system under 75 Pa.C.S. § 3802 to the 65-hour supervised driving requirement for junior drivers. Master the PA-specific rules before you walk in.",
  splitTests: [
    { label: "Traffic Signs", questions: 18, toPass: 15, passingPct: "83%" },
    { label: "Road Rules", questions: 67, toPass: 53, passingPct: "79%" },
  ] satisfies SplitTest[],
  about: [
    "Pennsylvania driver's licenses are issued by PennDOT — the Pennsylvania Department of Transportation, Driver and Vehicle Services division — not a DMV. PennDOT is nationally unusual in that the same agency both maintains all state roads and issues driver's licenses. The knowledge test is split into two mandatory sections: 18 questions on traffic signs and 67 questions on road rules, totaling 85 questions. You must pass each section independently — at least 15 of 18 (83%) on signs and at least 53 of 67 (roughly 79%) on road rules. Failing either section requires a retake of that section, and a strong score in one section cannot offset a weak score in the other.",
    "Pennsylvania's three-tier DUI system under 75 Pa.C.S. § 3802 is more granular than the standard first/second/third-offense structure used in most states. Tier one, called General Impairment, applies at 0.08%–0.099% BAC; Tier two, High BAC, applies at 0.10%–0.159%; and Tier three, Highest BAC, applies at 0.160% and above. Each tier carries progressively heavier mandatory fines, license suspensions, and treatment requirements. Pennsylvania separately prohibits texting while driving for all drivers under 75 Pa.C.S. § 3316, but — unlike most neighboring states — Pennsylvania has no statewide hands-free law for adult drivers. A licensed adult may legally hold a phone to their ear while driving; only texting is prohibited.",
    "Pennsylvania's Junior Driver License program requires permit holders under 18 to hold their learner's permit for at least 6 months (180 days) and to accumulate 65 hours of supervised driving — 10 of those hours must occur at night and 10 must occur in adverse weather such as rain, snow, or fog. The 65-hour requirement, including the adverse-conditions component, is one of the most extensive teen supervised-driving mandates in the nation. Junior license holders face a nighttime curfew of 11 PM to 5 AM for the first six months, tightening to 10 PM to 5 AM for the second six months. Pennsylvania also mandates helmets for motorcycle riders under 21 and for any rider with fewer than two full years of motorcycle licensure under 75 Pa.C.S. § 3525.",
  ],
  keyRules: [
    { icon: "⚖️", rule: "Three-tier DUI: General / High / Highest BAC", detail: "Under 75 Pa.C.S. § 3802, PA DUI is categorized as General Impairment (0.08–0.099%), High BAC (0.10–0.159%), or Highest BAC (0.160%+). Penalties escalate sharply at each tier. Under-21 drivers face a 0.02% limit." },
    { icon: "📱", rule: "Texting banned for all; no adult hands-free mandate", detail: "75 Pa.C.S. § 3316 prohibits texting for all PA drivers. However, Pennsylvania has no statewide handheld ban for adults — a licensed adult may hold a phone for a call. Drivers under 18 may not use any electronic device." },
    { icon: "🚨", rule: "Move Over: 20 mph below limit or change lanes", detail: "Under 75 Pa.C.S. § 3325(a.1), when a police, fire, EMS, or highway maintenance vehicle is stopped on the roadside, PA drivers must move to the adjacent lane OR reduce speed to 20 mph below the posted limit — a specific threshold unique to Pennsylvania." },
    { icon: "🏍️", rule: "Helmet required under 21 or under 2 years licensed", detail: "Pennsylvania requires helmets for all riders under age 21 and for any rider — of any age — who has held a motorcycle license for fewer than two full years (75 Pa.C.S. § 3525)." },
    { icon: "🎓", rule: "Junior license: 180-day permit + 65 supervised hours", detail: "Teen drivers must hold their learner's permit for at least 6 months and log 65 hours of supervised driving including 10 at night and 10 in adverse weather before qualifying for a Pennsylvania Junior Driver License." },
    { icon: "🌙", rule: "Junior curfew: 11 PM–5 AM (months 1–6)", detail: "Junior license holders may not drive between 11 PM and 5 AM during the first six months. The curfew shifts to 10 PM–5 AM for months 7–12 and is enforced unless a licensed adult 18+ is in the vehicle." },
    { icon: "🛣️", rule: "PA Turnpike tunnel speed and height limits", detail: "The Pennsylvania Turnpike's five tunnels — Blue Mountain, Tuscarora, Kittatinny, Lehigh, and Allegheny — impose specific vehicle-height restrictions and posted speed reductions. No parking on traveled lanes and no reversing at interchange areas are Turnpike-specific rules." },
    { icon: "🔵", rule: "Annual safety inspection required", detail: "All Pennsylvania-registered vehicles must pass an annual state safety inspection at a licensed station. Emissions inspections are additionally required in designated counties. An expired inspection sticker is a primary moving violation." },
  ],
  sampleQuestions: [
    {
      question: "Pennsylvania's DUI law under 75 Pa.C.S. § 3802 establishes three BAC tiers. What BAC marks the start of the 'Highest BAC' tier — the one carrying the most severe mandatory penalties?",
      options: ["0.10%", "0.12%", "0.15%", "0.16%"],
      correctIndex: 3,
      explanation:
        "Pennsylvania's three-tier DUI system begins at General Impairment (0.08%–0.099%), rises to High BAC (0.10%–0.159%), and reaches Highest BAC at 0.160% and above. The Highest BAC tier triggers the steepest mandatory penalties — heavier fines, longer license suspensions, and more intensive mandatory treatment requirements — even for a first offense. This tiered framework is more granular than the basic first/second/third-offense structure used in most other states.",
    },
    {
      question: "Pennsylvania has a statewide texting-while-driving ban. Which of the following is also true about Pennsylvania's phone laws for adult drivers?",
      options: [
        "All handheld phone use is banned for adults statewide",
        "Adults may legally hold a phone to their ear while driving — only texting is prohibited",
        "Hands-free use is required on all limited-access highways",
        "Phone use is only restricted in active school zones",
      ],
      correctIndex: 1,
      explanation:
        "Unlike most neighboring states, Pennsylvania has no statewide hands-free law for adult drivers. Under 75 Pa.C.S. § 3316, texting while driving is prohibited for all PA drivers, but a licensed adult may still hold a phone to their ear for a call. Drivers under 18 may not use any electronic device while driving, even hands-free. The distinction between the teen ban and the adult texting-only ban frequently appears on the PennDOT knowledge test.",
    },
    {
      question: "Pennsylvania's Move Over law (75 Pa.C.S. § 3325(a.1)) requires drivers approaching a police vehicle stopped on the roadside to do what if moving over one lane is not safely possible?",
      options: [
        "Come to a complete stop",
        "Maintain the posted speed and activate hazard lights",
        "Reduce speed to 20 mph below the posted speed limit",
        "Reduce speed to 15 mph regardless of the posted limit",
      ],
      correctIndex: 2,
      explanation:
        "Pennsylvania's Move Over law gives drivers two options when a police, fire, EMS, or highway maintenance vehicle is stopped on the roadside: (1) move to an adjacent lane, or (2) if a lane change is not safe, reduce speed to 20 mph below the posted speed limit. The '20 mph below' specific reduction threshold is Pennsylvania's distinctive version of Move Over law — many other states simply say 'safe and reasonable speed' without specifying a numerical reduction.",
    },
    {
      question: "A teen driver in Pennsylvania holds a Junior Driver License. How many total hours of supervised driving must they have logged before receiving it — and how many of those must be at night?",
      options: [
        "40 hours total, 5 at night",
        "50 hours total, 10 at night",
        "65 hours total, 10 at night",
        "65 hours total, 15 at night",
      ],
      correctIndex: 2,
      explanation:
        "Pennsylvania's Junior Driver License program requires 65 hours of supervised driving practice: at least 10 hours must be at night, and at least 10 hours must be in adverse weather conditions such as rain, snow, or fog. The 65-hour total — including the adverse-conditions component — is one of the most comprehensive teen supervised-driving requirements in the United States. All practice hours must be logged while accompanied by a licensed adult.",
    },
    {
      question: "The Pennsylvania Turnpike (I-76) has five mountain tunnels. Which of the following is a specific rule that applies inside those tunnels?",
      options: [
        "Speed must be reduced to 45 mph and hazard lights activated",
        "Vehicles over 8 feet wide must take alternate routes",
        "Specific height restrictions and posted speed reductions apply; parking on traveled lanes and reversing at interchanges are prohibited",
        "All drivers must use low-beam headlights only",
      ],
      correctIndex: 2,
      explanation:
        "The Pennsylvania Turnpike's five tunnels — Blue Mountain, Tuscarora, Kittatinny, Lehigh, and Allegheny — impose vehicle-height restrictions and specific posted speed reductions inside the tunnels. Turnpike regulations also prohibit parking on traveled lanes and reversing at interchange areas statewide. These Turnpike-specific rules are part of Pennsylvania's driving laws and can appear on the PennDOT knowledge test.",
    },
    {
      question: "In Pennsylvania, who is legally required to wear a helmet when operating a motorcycle?",
      options: [
        "All riders at all times",
        "Riders under 21 and any rider with fewer than two full years of motorcycle licensure",
        "Only riders under 18",
        "Helmets are optional for all riders 18 and older",
      ],
      correctIndex: 1,
      explanation:
        "Under 75 Pa.C.S. § 3525, Pennsylvania requires helmets for two categories of riders: (1) anyone under 21 years of age, and (2) any rider of any age who has held a motorcycle license for fewer than two full years. A rider who is 21 or older AND has more than two years of motorcycle licensure may legally ride without a helmet, though the Pennsylvania Driver's Manual strongly recommends helmets for all riders.",
    },
    {
      question: "Under Pennsylvania's T-intersection right-of-way rule, who must yield?",
      options: [
        "The driver on the through road (the top of the T) must yield to the driver on the stem",
        "The driver on the road ending (the stem of the T) must yield to all traffic on the through road",
        "Both drivers must stop and the one who arrived first proceeds first",
        "The driver turning left must always yield regardless of which road they are on",
      ],
      correctIndex: 1,
      explanation:
        "Pennsylvania's Vehicle Code specifically addresses T-intersections: the driver on the road that ends (the stem of the T) must yield to all traffic on the through road (the top of the T). The through-road driver has the right of way and does not yield. This PA-specific codification of T-intersection priority is tested on the PennDOT knowledge exam.",
    },
    {
      question: "Pennsylvania's Junior Driver License nighttime curfew during the FIRST six months prohibits driving between what hours?",
      options: [
        "10 PM and 5 AM",
        "11 PM and 5 AM",
        "Midnight and 6 AM",
        "9 PM and 5 AM",
      ],
      correctIndex: 1,
      explanation:
        "During the first six months of a Pennsylvania Junior Driver License, the holder may not drive between 11 PM and 5 AM unless accompanied by a licensed adult 18 or older. During the second six months, the curfew tightens to 10 PM to 5 AM. After 12 consecutive months without violations, the junior license converts to a full Class C license at age 17 or 18.",
    },
    {
      question: "Which agency issues Pennsylvania driver's licenses, and what makes it unusual compared to most state licensing agencies?",
      options: [
        "PA DMV — it only handles driver licensing",
        "PennDOT (Pennsylvania Department of Transportation) — it administers both driver licensing AND maintains all state roads, an unusual dual function",
        "The Pennsylvania Department of Safety — it combines highway patrol and licensing",
        "County clerks — each Pennsylvania county issues its own licenses",
      ],
      correctIndex: 1,
      explanation:
        "Pennsylvania driver's licenses are issued by PennDOT — the Pennsylvania Department of Transportation, Driver and Vehicle Services division. What makes PennDOT nationally unusual is that the same agency both maintains all Pennsylvania state roads and issues driver's licenses. Most states separate these functions between a transportation agency and a dedicated DMV or motor vehicle office.",
    },
    {
      question: "Pennsylvania requires all registered vehicles to pass an annual inspection. What type is required in addition to the safety inspection in certain Pennsylvania counties?",
      options: [
        "A brake-and-tire-only inspection",
        "An emissions inspection",
        "A digital odometer certification",
        "A VIN verification inspection",
      ],
      correctIndex: 1,
      explanation:
        "All Pennsylvania-registered vehicles must pass an annual state safety inspection at a licensed inspection station. In designated counties — primarily in the southeastern and southwestern parts of the state — a separate emissions inspection is also required. Driving with an expired inspection sticker is a primary moving violation in Pennsylvania. Inspections cover brakes, steering, suspension, tires, lights, horn, and other safety systems.",
    },
  ],
  faqs: [
    {
      question: "Why does Pennsylvania have a two-section knowledge test instead of a single 18-question exam?",
      answer:
        "Pennsylvania's 85-question test is split into 18 traffic-sign questions and 67 road-rules questions because PennDOT treats sign recognition and road-law knowledge as separate competencies. You must pass each section at its own threshold — 83% on signs and 79% on road rules. This format prevents a strong road-rules score from masking poor sign recognition, which is a direct safety concern. If you fail one section, you retake only that section; a passing score in the other carries over.",
    },
    {
      question: "What exactly is PennDOT and why doesn't Pennsylvania have a DMV?",
      answer:
        "PennDOT stands for the Pennsylvania Department of Transportation. Its Driver and Vehicle Services (DVS) division handles all driver licensing, vehicle registration, and titling. Pennsylvania chose to consolidate transportation and licensing under one agency rather than creating a standalone DMV. Practically, this means you visit a PennDOT Driver License Center — not a DMV — to apply for a permit or license. Visit dmv.pa.gov to find locations and schedule appointments.",
    },
    {
      question: "How does Pennsylvania's three-tier DUI system work, and what BAC triggers the most severe penalties?",
      answer:
        "Under 75 Pa.C.S. § 3802, PA DUI has three tiers: General Impairment (0.08%–0.099%), High BAC (0.10%–0.159%), and Highest BAC (0.160%+). Each tier carries progressively heavier mandatory penalties. The Highest BAC tier — starting at 0.16% — triggers the steepest fines, longest license suspensions, and most intensive mandatory treatment, even on a first offense. First-offense General Impairment cases may qualify for Pennsylvania's ARD (Accelerated Rehabilitative Disposition) program, allowing expungement.",
    },
    {
      question: "Is it legal for an adult Pennsylvania driver to hold a phone while driving?",
      answer:
        "Yes — Pennsylvania does NOT have a statewide hands-free law for adults. Under 75 Pa.C.S. § 3316, only texting while driving is prohibited for adult PA drivers. A licensed adult may legally hold a phone to their ear for a call while driving. However, drivers under 18 may not use any electronic device while driving, even hands-free. This makes Pennsylvania an outlier compared to most neighboring northeastern states.",
    },
    {
      question: "What is the specific threshold in Pennsylvania's Move Over law?",
      answer:
        "Under 75 Pa.C.S. § 3325(a.1), when a police, fire, EMS, or highway maintenance vehicle is stopped on the roadside with lights activated, PA drivers must either (1) move to an adjacent lane, or (2) reduce speed to 20 mph below the posted speed limit if a lane change is not safely possible. The specific '20 mph below' numerical threshold is Pennsylvania's distinctive Move Over standard — many other states only require 'a safe speed' without specifying the exact reduction.",
    },
    {
      question: "Why does Pennsylvania require 65 hours of supervised driving for teen drivers when many states require only 40–50?",
      answer:
        "Pennsylvania's 65-hour requirement (including 10 hours at night and 10 in adverse weather) is among the most comprehensive in the nation because PennDOT's data showed that teen crash rates are disproportionately high in nighttime and low-visibility conditions. The adverse-weather component specifically prepares Pennsylvania teens for the state's winter driving conditions. The 6-month minimum permit holding period runs concurrently with the hours requirement.",
    },
    {
      question: "How long is a Pennsylvania learner's permit valid, and what happens if it expires?",
      answer:
        "A Pennsylvania learner's permit is valid for one year from the date of issue. If a teen permit holder does not obtain their Junior Driver License within that year, they must reapply and pass the knowledge test again. There is no grandfather of the supervised hours already logged — the 65-hour requirement clock resets with a new permit. Teen applicants should plan their timeline carefully to avoid permit expiration.",
    },
    {
      question: "What passenger restrictions apply to Pennsylvania Junior Driver License holders?",
      answer:
        "During the first six months of a Pennsylvania Junior Driver License, the holder may not drive with more than one non-family passenger under 18 unless a licensed adult 18 or older is in the vehicle. After six months of violation-free driving, the passenger restriction is lifted. The nighttime curfew (11 PM–5 AM for months 1–6, then 10 PM–5 AM for months 7–12) remains in place throughout the junior license period.",
    },
    {
      question: "Does Pennsylvania require driver education before a teen can get a learner's permit?",
      answer:
        "Yes. Pennsylvania requires drivers under 18 to complete an approved driver education program or to be enrolled in one before applying for a learner's permit. Driver education can be completed through a licensed driving school or through an approved home-study course. After passing the knowledge test and receiving the permit, the teen must hold the permit for at least 6 months and complete 65 supervised hours before applying for a Junior Driver License.",
    },
    {
      question: "What is Pennsylvania's motorcycle helmet law, and at what point does it no longer apply?",
      answer:
        "Pennsylvania's motorcycle helmet law under 75 Pa.C.S. § 3525 requires helmets for (1) all riders under 21, and (2) any rider — regardless of age — who has held a motorcycle license for fewer than two full years. Once a rider turns 21 AND has held a motorcycle license for two full years, the helmet requirement no longer legally applies. The Pennsylvania Driver's Manual notes that helmets are strongly recommended for all riders regardless of the legal requirement.",
    },
  ],
  relatedTests: [
    { label: "PA Motorcycle Test", href: "/pennsylvania-motorcycle-practice-test" },
    { label: "PA CDL Test", href: "/pennsylvania-cdl-practice-test" },
    { label: "NY Permit Test", href: "/new-york-dmv-practice-test" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "View All States", href: "/states" },
  ],
};

export default function PennsylvaniaDMVPage() {
  return <PracticeTestPage {...data} />;
}
