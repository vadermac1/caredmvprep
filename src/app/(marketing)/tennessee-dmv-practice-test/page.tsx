import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Tennessee DMV Practice Test 2025 – Free TN Department of Safety Knowledge Exam Prep",
  description:
    "Free Tennessee practice test based on the 2025 Tennessee Driver Handbook. 30 questions, 80% to pass. Covers Hands-Free Act fines, DUI by consent, Leandra's Law equivalent, divided highway school bus rules, and TDOSHS licensing. Pass your TN knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/tennessee-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/tennessee-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Tennessee",
  stateAbbr: "TN",
  testLabel: "Driver's License Knowledge Test",
  slug: "tennessee-dmv-practice-test",
  headline: "Tennessee TDOSHS Practice Test – Driver's License Knowledge Exam",
  intro:
    "Tennessee driver's licenses are issued by the Department of Safety and Homeland Security (TDOSHS) — one of the only U.S. states where the homeland security function is combined with driver licensing. The TDOSHS administers a 30-question test requiring 80% (24/30) to pass. This free practice test focuses on Tennessee-specific content: the Hands-Free Tennessee Act (TCA § 55-8-199) with its escalating fine structure and insurance-reporting provision for third offenses, Tennessee's enhanced DUI at 0.20%+ BAC (mandatory 7 consecutive days in jail), the divided highway school bus exception, the $250 school bus passing fine, and Tennessee's Great Smoky Mountains driving conditions.",
  basedOn: "2025 Tennessee Driver Handbook",
  about: [
    "Tennessee driver's licenses are issued by the Tennessee Department of Safety and Homeland Security (TDOSHS), which operates driver services centers across the state. The combination of 'Homeland Security' functions with driver licensing makes TDOSHS unusual among state licensing agencies nationally. The knowledge test consists of 30 multiple-choice questions covering road signs, traffic laws, and safe driving practices. You must answer at least 24 questions correctly — an 80% passing score. The test is based on the Tennessee Driver Handbook, available at tn.gov/safety.",
    "Tennessee's Hands-Free Tennessee Act (TCA § 55-8-199, effective July 1, 2019) prohibits ALL drivers from holding any wireless device while driving. The fine structure is tiered: $50 plus court costs for a first offense; $100 plus court costs for a second offense within 5 years; $200 plus court costs for a third or subsequent offense within 5 years. Critically, the third offense also triggers reporting to the driver's insurance company — a distinctive provision that can raise insurance rates. Double fines apply in school zones and active emergency zones. Tennessee was among the first states to enact a comprehensive statewide hands-free law.",
    "Tennessee's DUI law (TCA § 55-10-401) includes several provisions specific to the state. A first DUI conviction at standard BAC (0.08%–0.199%) carries a minimum 48 hours in jail. However, a BAC of 0.20% or higher triggers a mandatory minimum 7 consecutive days in jail — substantially longer than in most states at that BAC level. Tennessee's Move Over law (TCA § 55-8-132) was extended in 2022 to include vehicles displaying amber emergency lights, with fines of $200 for a first offense and $500 for subsequent offenses. On divided highways with a raised median or barrier, vehicles on the opposite side from a stopped school bus are not required to stop — the divided highway school bus exception is a specifically tested Tennessee rule.",
  ],
  keyRules: [
    { icon: "📵", rule: "Hands-Free Act: 3rd offense reported to insurance (TCA § 55-8-199)", detail: "TN Hands-Free Act fines: $50 (1st), $100 (2nd within 5 yrs), $200 + insurance company notification (3rd+ within 5 yrs). Double fines in school and emergency zones." },
    { icon: "🍺", rule: "DUI 0.08% / 0.20%+ triggers 7-day mandatory jail", detail: "TN DUI threshold: 0.08% for adults. First DUI at 0.20%+ BAC requires mandatory minimum 7 consecutive days in jail vs. 48 hours for standard first DUI. Under 21: 0.02%." },
    { icon: "🚌", rule: "School bus: $250 fine / divided highway exception", detail: "Passing a stopped school bus carries a $250 fine. On a divided highway with a raised median, only vehicles on the SAME side as the bus must stop — opposite-side traffic need not stop." },
    { icon: "🚨", rule: "Move Over extended to amber lights (2022) — TCA § 55-8-132", detail: "Tennessee's 2022 Move Over expansion covers vehicles with amber emergency lights. First offense: $200. Subsequent offenses: $500. Class B misdemeanor charge is possible for violations." },
    { icon: "⚖️", rule: "DUI by consent — TCA § 55-10-401", detail: "Tennessee's DUI law includes a 'DUI by consent' provision: knowingly allowing an intoxicated person to drive your vehicle can result in charges against you as a co-conspirator." },
    { icon: "👦", rule: "Instruction permit at 15 — 12 months + 50 hours required", detail: "TN learner's permit available at 15. Must hold 12 months and log 50 supervised hours (10 at night) with a licensed adult 21+ before taking the road skills test at 16." },
    { icon: "🔑", rule: "Implied consent: 1-year revocation for first refusal", detail: "TCA § 55-10-406: refusing a breath/blood test in TN = 1-year license revocation for first refusal; 2-year revocation for second refusal within 5 years. A warrant can be obtained for a blood draw after refusal." },
    { icon: "⛰️", rule: "US-441 Newfound Gap / I-40 Gorge seasonal conditions", detail: "US-441 through Great Smoky Mountains National Park and I-40 near the NC border have specific speed limits, wildlife-on-road hazards, and seasonal chain-control requirements tested in TN's manual." },
  ],
  sampleQuestions: [
    {
      question: "Under Tennessee's Hands-Free Act (TCA § 55-8-199), what happens on a driver's third offense within 5 years?",
      options: [
        "The driver faces a $50 fine — same as the first offense",
        "The driver faces a $200 fine plus court costs and the offense is reported to their insurance company",
        "The driver receives only a warning — third offenses are not criminally prosecuted",
        "The driver's license is suspended for 30 days with no fine",
      ],
      correctIndex: 1,
      explanation:
        "Tennessee's Hands-Free Tennessee Act (TCA § 55-8-199) has a tiered fine structure: $50 (1st offense), $100 (2nd offense within 5 years), and $200 plus court costs for a third or subsequent offense within 5 years. The third offense also triggers notification of the driver's insurance company — a provision that can lead to rate increases. Double fines apply in school zones and active emergency zones. This insurance reporting provision for the third offense distinguishes Tennessee's law from most other states' hands-free statutes.",
    },
    {
      question: "Under Tennessee's DUI law (TCA § 55-10-401), what mandatory minimum jail time applies when a first DUI involves a BAC of 0.20% or higher?",
      options: [
        "48 hours — same as any first DUI regardless of BAC",
        "3 days (72 hours)",
        "7 consecutive days in jail",
        "30 days in jail with no alternative sentencing",
      ],
      correctIndex: 2,
      explanation:
        "Tennessee's DUI law mandates a minimum 48 hours in jail for a standard first DUI (BAC 0.08%–0.199%). However, when a first DUI involves a BAC of 0.20% or higher, Tennessee law requires a mandatory minimum of 7 consecutive days in jail — significantly longer than the standard threshold. This enhanced penalty reflects the greater impairment and crash risk associated with very high BAC levels. The 0.20%+ trigger is one of Tennessee's most tested DUI distinctions.",
    },
    {
      question: "What is Tennessee's 'DUI by consent' provision under TCA § 55-10-401?",
      options: [
        "A driver who allows a passenger to drink alcohol in the vehicle is charged with DUI",
        "A driver who knowingly allows an intoxicated person to operate their vehicle can be charged as a co-conspirator",
        "A driver who accepts a ride from a drunk driver becomes liable for any resulting crashes",
        "DUI by consent applies only to commercial vehicle operators who allow drunk employees to drive",
      ],
      correctIndex: 1,
      explanation:
        "Tennessee's DUI law includes a 'DUI by consent' provision: a vehicle owner who knowingly allows an intoxicated person to drive their vehicle can be charged as a co-conspirator in any resulting DUI offense. This is not limited to commercial vehicles — it applies to any Tennessee vehicle owner. The provision creates personal liability for giving your car keys to someone you know is intoxicated, even if you don't drive yourself.",
    },
    {
      question: "On a divided Tennessee highway with a raised median, which vehicles must stop when a school bus has its flashing red lights activated?",
      options: [
        "All vehicles on both sides of the highway must stop — the divided highway exception does not apply in Tennessee",
        "Only vehicles directly behind the school bus on the same side",
        "Only vehicles on the SAME side of the highway as the bus — vehicles on the opposite side of the raised median need not stop",
        "No vehicles need to stop on divided highways — school buses may not use flashing red lights on divided roads",
      ],
      correctIndex: 2,
      explanation:
        "Tennessee's school bus stop law makes a specific exception for divided highways. On an undivided road, all traffic in both directions must stop when a school bus activates flashing red lights. On a divided highway with a raised median or physical barrier, only vehicles on the SAME side of the road as the bus must stop — traffic on the opposite side of the median may proceed. This divided highway exception is directly tested on the Tennessee knowledge exam.",
    },
    {
      question: "What is the fine for illegally passing a stopped school bus with flashing red lights in Tennessee?",
      options: ["$50 fine", "$100 fine", "$150 fine", "$250 fine"],
      correctIndex: 3,
      explanation:
        "Tennessee imposes a $250 fine for passing a stopped school bus with activated flashing lights. This fine is specifically set by Tennessee statute and is among the more precisely calibrated school bus violation penalties in the region. Passing a stopped school bus is also classified as a Class A misdemeanor in Tennessee — one of the most serious traffic-related misdemeanor charges — and can result in points on the driver's record and potential license action.",
    },
    {
      question: "Tennessee's implied consent law (TCA § 55-10-406) provides that refusing a breath or blood test results in what penalty for a first refusal?",
      options: [
        "A $100 fine only — license is not affected for a first refusal",
        "A 6-month license suspension",
        "A 1-year license revocation",
        "A warning — first refusals carry no license consequences in Tennessee",
      ],
      correctIndex: 2,
      explanation:
        "Under TCA § 55-10-406, refusing to submit to a breath or blood test in Tennessee results in a 1-year license revocation for a first refusal. A second refusal within 5 years results in a 2-year revocation. Tennessee also allows law enforcement to obtain a warrant for a blood draw after a driver refuses a test — the refusal does not end the investigation. The 1-year revocation for a first refusal equals the penalty for a first DUI conviction itself.",
    },
    {
      question: "Tennessee's Move Over law (TCA § 55-8-132) was expanded in 2022 to include which additional category of vehicles?",
      options: [
        "All vehicles with any flashing lights, including hazard flashers",
        "Vehicles displaying amber emergency lights, such as utility and road service vehicles",
        "Only law enforcement vehicles — the expansion was limited to police",
        "School buses when loading or unloading students",
      ],
      correctIndex: 1,
      explanation:
        "Tennessee's 2022 expansion of TCA § 55-8-132 extended the Move Over law to cover vehicles displaying amber emergency lights — including road service, utility, and construction vehicles — in addition to emergency responders. First offense: $200 fine. Subsequent offenses: $500 fine. The 2022 amendment reflected a recognition that road workers and utility crews are at serious risk from passing traffic. Tennessee's Move Over violation can also be charged as a Class B misdemeanor.",
    },
    {
      question: "Which agency issues Tennessee driver's licenses, and what makes its name unusual among state licensing agencies?",
      options: [
        "Tennessee Department of Motor Vehicles (DMV) — standard name used by most states",
        "Tennessee Department of Safety and Homeland Security (TDOSHS) — one of the only states combining homeland security with driver licensing",
        "Tennessee Department of Transportation (TDOT) — Tennessee licenses are a transportation function",
        "Tennessee Bureau of Motor Vehicles (BMV) — similar to Indiana's BMV structure",
      ],
      correctIndex: 1,
      explanation:
        "Tennessee driver's licenses are issued by the Tennessee Department of Safety and Homeland Security (TDOSHS), not a DMV. TDOSHS is one of the only state agencies in the U.S. where the homeland security function — which in most states is a separate agency or part of the governor's office — is combined with driver licensing and law enforcement functions. TDOSHS driver services centers are located throughout the state. Visit tn.gov/safety for locations and services.",
    },
    {
      question: "US-441 through Great Smoky Mountains National Park (Newfound Gap Road) is known for which specific driving hazard that Tennessee's manual addresses?",
      options: [
        "Frequent rockslides that close the road without notice",
        "Wildlife on the road — deer, black bear, and other animals frequently cross the highway at dawn and dusk",
        "High-speed traffic — the road is a designated express route for commercial trucks",
        "Bridge weight limits that prevent all vehicles over 5,000 lbs from crossing",
      ],
      correctIndex: 1,
      explanation:
        "US-441 through the Great Smoky Mountains National Park (also called Newfound Gap Road) is famous for wildlife encounters — black bears, white-tailed deer, elk (reintroduced in the park), and other animals frequently cross or stand on the road. The road also has specific speed limits lower than adjacent state highways and seasonal chain-control requirements at higher elevations. Tennessee's manual references Smoky Mountains driving because the region draws tens of millions of annual visitors, many of whom are unfamiliar with mountain driving hazards.",
    },
    {
      question: "What is the minimum age to apply for a Tennessee learner's permit, and how long must it be held before taking the road skills test?",
      options: [
        "14 years old; held for at least 6 months",
        "15 years old; held for at least 12 months with 50 supervised hours (10 at night)",
        "16 years old; held for at least 6 months",
        "15 years old; held for at least 6 months with 30 supervised hours",
      ],
      correctIndex: 1,
      explanation:
        "Tennessee residents may apply for a learner's permit at age 15 after passing the TDOSHS knowledge test. The permit must be held for a minimum of 12 months, during which the teen must log at least 50 hours of supervised driving — including 10 hours at night — with a licensed adult 21 or older. After 12 months with no traffic violations, teens can apply for a full license at age 16 by passing the road skills test. Tennessee's 12-month permit hold is longer than many states' 6-month requirement.",
    },
  ],
  faqs: [
    {
      question: "Does Tennessee have a DMV?",
      answer:
        "No. Tennessee driver's licenses are issued by the Tennessee Department of Safety and Homeland Security (TDOSHS), not a DMV. TDOSHS is distinctive nationally because it combines driver licensing functions with law enforcement and homeland security responsibilities. TDOSHS driver services centers are located throughout Tennessee. Vehicle registrations are handled separately by Tennessee County Clerk offices. Visit tn.gov/safety for driver services locations and appointment scheduling.",
    },
    {
      question: "What is Tennessee's Hands-Free Tennessee Act and what are the specific fines?",
      answer:
        "The Hands-Free Tennessee Act (TCA § 55-8-199, effective July 1, 2019) prohibits ALL Tennessee drivers from holding any wireless device while driving — for calls, texts, navigation, or any app. Fines: $50 plus court costs (first offense), $100 plus court costs (second offense within 5 years), $200 plus court costs (third or subsequent offense within 5 years). The third offense is also reported to the driver's insurance company. Double fines apply in school zones and active emergency zones.",
    },
    {
      question: "What makes Tennessee's enhanced DUI threshold distinctive?",
      answer:
        "Tennessee's DUI law (TCA § 55-10-401) sets the adult threshold at 0.08% BAC. A first DUI conviction carries a minimum 48 hours in jail. However, a BAC of 0.20% or higher triggers a mandatory minimum of 7 consecutive days in jail for a first offense — longer than most states' enhanced BAC penalties. The 0.20%+ mandatory 7-day requirement is one of Tennessee's most tested DUI provisions.",
    },
    {
      question: "What is the Tennessee school bus stop law on divided highways?",
      answer:
        "On an undivided road, all traffic in both directions must stop when a school bus activates flashing red lights. On a divided highway with a raised median or physical barrier, only vehicles on the SAME side of the highway as the bus must stop — vehicles on the opposite side of the median may proceed. The fine for illegally passing a stopped school bus is $250. The violation is also a Class A misdemeanor in Tennessee.",
    },
    {
      question: "What is Tennessee's GDL program for teen drivers?",
      answer:
        "Tennessee GDL: (1) Learner's permit at 15 — must hold 12 months with 50 supervised hours (10 at night); (2) Intermediate license at 16 — no driving 11 PM–6 AM without a licensed parent/guardian for the first 6 months, max 1 non-family passenger under 21; (3) Full unrestricted license at 17 (or after 6 violation-free months on the intermediate license). All stages require no traffic violations to advance.",
    },
    {
      question: "What happens if I refuse a breath test in Tennessee?",
      answer:
        "Tennessee's implied consent law (TCA § 55-10-406) provides that refusing a chemical test results in a 1-year license revocation for a first refusal — the same penalty as a first DUI conviction. A second refusal within 5 years results in a 2-year revocation. Tennessee law enforcement can also obtain a warrant for a blood draw after a driver refuses a test, so refusal does not prevent chemical testing. Prosecutors may use the refusal as evidence in court.",
    },
    {
      question: "What is 'DUI by consent' in Tennessee?",
      answer:
        "Tennessee's DUI law includes a 'DUI by consent' provision under TCA § 55-10-401: a vehicle owner who knowingly allows an intoxicated person to drive their vehicle can be charged as a co-conspirator. This means handing your keys to someone you know is drunk — even if you don't drive yourself — creates potential criminal liability. The provision applies to any Tennessee vehicle owner, not just commercial operators.",
    },
    {
      question: "What are Tennessee's Move Over law penalties after the 2022 expansion?",
      answer:
        "Tennessee's Move Over law (TCA § 55-8-132) requires drivers to move one lane away from stationary emergency vehicles, law enforcement, fire, highway maintenance, tow trucks, and — since the 2022 expansion — any vehicle displaying amber emergency lights. If a lane change is not safely possible, reduce speed to a safe speed below the posted limit. First offense: $200 fine. Subsequent offenses: $500 fine. Serious violations can be charged as Class B misdemeanors.",
    },
    {
      question: "How long is a Tennessee learner's permit valid?",
      answer:
        "A Tennessee learner's permit is valid for 2 years. Most teen applicants complete the 12-month holding period and advance to the intermediate license well within the permit's validity period. The permit must be held for a full 12 months — no early advancement even if the 50 supervised hours are completed sooner. If the permit expires before the applicant advances, they must reapply and pass the knowledge test again.",
    },
    {
      question: "What driving hazards are specific to the Great Smoky Mountains region of Tennessee?",
      answer:
        "US-441 (Newfound Gap Road) through Great Smoky Mountains National Park has: specific posted speed limits lower than adjacent state highways, frequent wildlife crossings (black bears, white-tailed deer, and reintroduced elk commonly appear on the roadway), seasonal chain-control requirements at higher elevations, and large volumes of tourist traffic unfamiliar with mountain driving. I-40 near the North Carolina border (the Pigeon River Gorge section) also has seasonal chain-control advisories during winter storms.",
    },
    {
      question: "What are Tennessee's DUI penalties for drivers under 21?",
      answer:
        "Tennessee's underage DUI law (TCA § 55-10-415) sets the BAC limit at 0.02% for drivers under 21 — effectively zero tolerance. A violation results in a 1-year license revocation. Tennessee enforces this standard strictly. Even prescription medications that impair driving can result in DUI charges regardless of BAC. Under-21 drivers convicted of DUI also face mandatory participation in a DUI school program.",
    },
  ],
  relatedTests: [
    { label: "TN Motorcycle Test", href: "/tennessee-motorcycle-practice-test" },
    { label: "TN CDL Test", href: "/tennessee-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function TennesseeDMVPage() {
  return <PracticeTestPage {...data} />;
}
