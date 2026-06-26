import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New York DMV Practice Test 2025 – Free NY Class D Driver's License Exam Prep",
  description:
    "Free New York DMV practice test based on the official NY Driver's Manual. 20 questions, 70% to pass. Covers Leandra's Law, NYC congestion pricing, DWAI vs DWI, and the mandatory sign section. Pass your NY permit test the first time.",
  alternates: { canonical: "https://caredmvprep.com/new-york-dmv-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/new-york-dmv-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New York",
  stateAbbr: "NY",
  testLabel: "Permit Practice Test",
  slug: "new-york-dmv-practice-test",
  headline: "New York DMV Practice Test – Class D Knowledge Exam",
  intro:
    "The New York DMV Class D knowledge test is one of the most distinctive in the nation: 20 questions at a 70% threshold, with a mandatory road signs section that can cause an automatic failure even if your overall score passes. This free practice test focuses on content unique to New York — Leandra's Law felony DWI, the DWAI traffic infraction at 0.05%–0.079% BAC, NYC's 25 mph citywide speed limit, the June 2024 congestion pricing zone south of 60th Street in Manhattan, and the 5-point handheld phone penalty under Vehicle and Traffic Law § 1225-d.",
  numToPass: "14 correct (70%)",
  basedOn: "New York Driver's Manual (2025)",
  about: [
    "The New York DMV Class D knowledge test has exactly 20 questions divided into two scored sections: 4 questions on traffic signs and 16 questions on road rules. To pass, you must answer at least 2 of the 4 sign questions correctly AND at least 12 of the 16 road-rules questions correctly — a combined minimum of 14 out of 20 (70%). Crucially, if you answer fewer than 2 sign questions correctly, you fail automatically regardless of your road-rules score. New York's split-section scoring and 70% threshold make it structurally unlike most state tests, which use a single 80% cutoff.",
    "New York has two distinct alcohol-related driving offenses under the Vehicle and Traffic Law. Driving While Intoxicated (DWI, VTL § 1192(2)) applies at a BAC of 0.08% or higher and is a criminal misdemeanor. Driving While Ability Impaired (DWAI, VTL § 1192(1)) applies at a BAC of 0.05%–0.079% and is a traffic infraction for a first offense — not a criminal conviction, but still subject to license suspension and fines. New York's Leandra's Law (VTL § 1192(2-a)(b)) makes it an automatic Class E felony to drive drunk with a child 15 or younger in the vehicle. Leandra Rosado, age 11, was killed in a DUI crash in 2009, and New York enacted this felony-enhancement law in her name.",
    "New York City enforces several traffic rules that differ from the rest of New York State. The citywide default speed limit in the five boroughs is 25 mph on streets without posted signs — lower than the statewide default of 30 mph, enacted under the Vision Zero initiative. Right turns on red are prohibited throughout New York City by default under NYC Traffic Rules § 4-07(b). As of June 2024, New York City became the first city in the United States to implement congestion pricing: vehicles entering the Central Business District south of 60th Street in Manhattan are subject to a toll. New York's 5-point addition to a driving record per handheld phone violation (VTL § 1225-d) is among the most severe in the nation — accumulating 11 points within 18 months triggers a mandatory license suspension.",
  ],
  keyRules: [
    { icon: "📋", rule: "20 questions / 70% passing / split sign section", detail: "NY's test is 20 questions at 70% (14/20). 4 of those are road signs — you need at least 2/4 sign answers correct or you fail automatically regardless of your total score." },
    { icon: "🚔", rule: "Leandra's Law: drunk driving with a child is a felony", detail: "VTL § 1192(2-a)(b): driving intoxicated with a child 15 or younger in the vehicle is a Class E felony on a first offense. Named for 11-year-old Leandra Rosado, killed in a DUI crash in 2009." },
    { icon: "🍺", rule: "DWI 0.08%+ / DWAI 0.05%–0.079% / Under-21 at 0.02%", detail: "NY has two tiers: DWI (criminal misdemeanor) at 0.08%+ and DWAI (traffic infraction) at 0.05%–0.079%. Under 21: any BAC 0.02%–0.07% is a Zero Tolerance violation." },
    { icon: "📱", rule: "Handheld phone: 5 points + fine per offense", detail: "VTL § 1225-d bans all handheld device use while driving. Each violation adds 5 points to your record. Fines: $50–$200 (1st); $50–$250 (2nd within 18 months); $50–$450 (3rd+)." },
    { icon: "🚗", rule: "NYC speed limit: 25 mph citywide default", detail: "New York City's default speed limit is 25 mph on all streets without posted signs — lower than the statewide 30 mph default — enacted under the Vision Zero initiative." },
    { icon: "🔴", rule: "No right on red in New York City by default", detail: "Right turns on red are prohibited throughout the five boroughs under NYC Traffic Rules § 4-07(b). Outside NYC, right on red is permitted after a full stop unless posted." },
    { icon: "💰", rule: "Congestion pricing zone: Manhattan south of 60th St", detail: "Since June 2024 — the first such program in the U.S. — vehicles entering Manhattan's Central Business District south of 60th Street pay a congestion toll. NY's manual addresses this as a driving context." },
    { icon: "🎓", rule: "5-hour pre-licensing course required for all first-time applicants", detail: "All first-time Class D applicants regardless of age must complete a DMV-approved 5-hour pre-licensing course before scheduling a road test. A completion certificate is required at scheduling." },
  ],
  sampleQuestions: [
    {
      question: "Under New York's Vehicle and Traffic Law, what is DWAI by alcohol, and at what BAC does it apply?",
      options: [
        "A criminal misdemeanor applying at 0.08% BAC or higher",
        "A traffic infraction applying at 0.05%–0.079% BAC, lesser than DWI",
        "A felony applying whenever a child is in the vehicle",
        "A violation applying only to commercial drivers at 0.04% BAC",
      ],
      correctIndex: 1,
      explanation:
        "New York's Driving While Ability Impaired (DWAI) by alcohol under VTL § 1192(1) applies at a BAC of 0.05%–0.079%. It is a traffic infraction — not a criminal conviction — for a first offense, carrying fines of $300–$500 and up to 15 days in jail. It is distinct from DWI (criminal misdemeanor at 0.08%+). New York's two-tier system is unique: DWAI is specifically tested because many drivers confuse it with the standard DWI threshold.",
    },
    {
      question: "What makes New York's Leandra's Law (VTL § 1192(2-a)(b)) distinct from a standard DWI charge?",
      options: [
        "It applies only to repeat offenders with three or more prior DWI convictions",
        "It reduces the DWI threshold to 0.05% when school zones are nearby",
        "It makes driving drunk with a child 15 or younger in the vehicle an automatic Class E felony on a first offense",
        "It requires ignition interlock only after a second DWI conviction",
      ],
      correctIndex: 2,
      explanation:
        "Leandra's Law (VTL § 1192(2-a)(b)) makes it an automatic Class E felony to operate a motor vehicle while intoxicated when a child 15 or younger is in the vehicle — even for a first offense. The law was enacted in 2009 and named for Leandra Rosado, an 11-year-old girl killed when the driver of a vehicle she was a passenger in drove drunk. Under standard DWI law, a first offense is typically a misdemeanor.",
    },
    {
      question: "What is unique about the New York DMV knowledge test's road signs section?",
      options: [
        "Road signs count double — each sign question is worth two points",
        "You must answer at least 2 of the 4 sign questions correctly or you automatically fail",
        "Road sign questions are optional and do not count toward the passing score",
        "The sign section is a separate 10-question test taken on a different day",
      ],
      correctIndex: 1,
      explanation:
        "New York's Class D knowledge test includes 4 road sign questions and 16 road-rules questions. To pass, you need at least 2 of the 4 sign questions correct AND at least 12 of the 16 road-rules questions correct. Failing the sign section — even if you score above 70% overall — results in automatic failure. This split-section scoring system is one of the most distinctive knowledge test structures in the United States.",
    },
    {
      question: "As of June 2024, what is new about driving into Manhattan south of 60th Street?",
      options: [
        "Vehicles must use HOV-3 lanes only — single-occupancy vehicles are banned",
        "A congestion pricing toll applies for entering the Central Business District — the first such charge in U.S. history",
        "Speed limits in lower Manhattan were reduced to 15 mph under Vision Zero",
        "Right turns on red were newly extended to lower Manhattan intersections",
      ],
      correctIndex: 1,
      explanation:
        "New York City launched the first congestion pricing program in the United States in June 2024. Vehicles entering Manhattan's Central Business District — defined as the area south of 60th Street — are subject to a toll. The program is designed to reduce traffic congestion and generate funding for MTA public transit improvements. The NY Driver's Manual addresses the congestion zone as part of New York City's evolving traffic laws.",
    },
    {
      question: "How many points does a single handheld phone violation add to a New York driver's license under VTL § 1225-d?",
      options: ["3 points", "2 points", "5 points", "4 points"],
      correctIndex: 2,
      explanation:
        "Each conviction for using a handheld electronic device while driving in New York adds 5 points to the driver's record under VTL § 1225-d. New York's 5-point addition per offense is among the most severe in the nation. Accumulating 11 points within any 18-month period triggers a mandatory license suspension. The fine structure also escalates: $50–$200 for a first offense, $50–$250 for a second within 18 months, and $50–$450 for a third or more within 18 months.",
    },
    {
      question: "New York's reckless driving statute (VTL § 1212) defines reckless driving as:",
      options: [
        "Driving more than 25 mph over the posted speed limit on any road",
        "Driving in a manner that unreasonably interferes with the free and proper use of the public highway — a criminal misdemeanor",
        "Following another vehicle within 2 car lengths at any speed above 40 mph",
        "Failing to signal for at least 100 feet before any turn",
      ],
      correctIndex: 1,
      explanation:
        "New York VTL § 1212 defines reckless driving broadly as operating a vehicle 'in a manner which unreasonably interferes with the free and proper use of the public highway.' This language is intentionally wide and has been applied to high-speed driving, red light running, and aggressive maneuvers. Reckless driving in New York is a criminal misdemeanor — not a mere traffic infraction — and carries 5 points on the driver's record.",
    },
    {
      question: "New York is a no-fault insurance state. What does this mean for vehicle registration?",
      options: [
        "Drivers do not need any insurance — the state self-insures all crashes",
        "All registered vehicles must carry PIP (Personal Injury Protection) coverage under the Comprehensive Motor Vehicle Insurance Reparations Act",
        "No-fault only applies to commercial vehicles — passenger cars use standard tort liability",
        "No-fault insurance is optional; drivers may opt out by paying a fee to the DMV",
      ],
      correctIndex: 1,
      explanation:
        "New York is a no-fault state under the Comprehensive Motor Vehicle Insurance Reparations Act. All vehicles registered in New York must carry PIP (Personal Injury Protection) insurance. PIP covers medical expenses and lost wages for injured parties regardless of fault — up to the policy limit — before tort claims can be filed. Failing to maintain no-fault insurance is grounds for vehicle registration suspension and license suspension in New York.",
    },
    {
      question: "On a divided highway in New York, which vehicles must stop when a school bus displays flashing red lights?",
      options: [
        "All vehicles on both sides of the highway regardless of a median",
        "Only vehicles directly behind the bus",
        "Only vehicles on the same side of the highway as the bus — vehicles on the opposite side of a physical median need not stop",
        "No vehicles on a divided highway — school buses may not stop on divided roads",
      ],
      correctIndex: 2,
      explanation:
        "On a divided highway with a raised or physical median, only vehicles on the same side as the stopped school bus must stop. On an undivided road, vehicles traveling in both directions must stop. This distinction is commonly tested on the New York knowledge exam. The school bus stop law requires stopping at least 20 feet from the bus when red lights are flashing.",
    },
    {
      question: "Under New York's Zero Tolerance law, what BAC range triggers a violation for a driver under 21?",
      options: ["0.00% — any detectable alcohol is a violation", "0.02%–0.07%", "0.04%–0.07%", "0.05%–0.07%"],
      correctIndex: 1,
      explanation:
        "New York's Zero Tolerance law applies to drivers under 21 with a BAC of 0.02% to 0.07%. It is a separate civil proceeding — not a criminal DWI or DWAI charge — but results in license suspension and a $125 civil penalty for a first finding. A BAC of 0.08%+ triggers the standard DWI criminal charge regardless of age. New York's 0.02% threshold is one of the most commonly tested details on the NY knowledge exam.",
    },
    {
      question: "What is the mandatory requirement before any first-time New York Class D applicant can schedule a road test?",
      options: [
        "Completion of a 10-hour behind-the-wheel driver education course",
        "Filing a DMV-approved log showing 50 hours of supervised driving",
        "Completion of a DMV-approved 5-hour pre-licensing course with a certificate presented at scheduling",
        "Completion of a defensive driving course approved by the Insurance Department",
      ],
      correctIndex: 2,
      explanation:
        "All first-time New York Class D applicants — regardless of age — must complete a DMV-approved 5-hour pre-licensing course before they can schedule a road test. The course covers defensive driving, DWI awareness, the effects of alcohol and drugs, and sharing the road with pedestrians and cyclists. The completion certificate must be presented when scheduling the road test. This requirement applies to adults 18 and older as well as teens — it is not limited to new young drivers.",
    },
  ],
  faqs: [
    {
      question: "Why does New York's knowledge test pass at 70% when most states require 80%?",
      answer:
        "New York's 70% threshold (14/20 correct) is one of the lowest passing scores in the nation. However, NY's test is harder to pass than the raw score suggests because of the split-section rule: you must answer at least 2 of 4 sign questions correctly AND at least 12 of 16 road-rules questions. A single weak section can cause failure even if your total is above 70%. The road signs section requires focused preparation.",
    },
    {
      question: "What is the difference between DWI and DWAI in New York?",
      answer:
        "DWI (Driving While Intoxicated, VTL § 1192(2)) applies at 0.08%+ BAC and is a criminal misdemeanor. DWAI by alcohol (VTL § 1192(1)) applies at 0.05%–0.079% BAC and is a traffic infraction for a first offense — not a criminal conviction, but carries fines of $300–$500 and up to 15 days in jail. A second DWAI within 5 years becomes a misdemeanor. The DWAI distinction is unique to New York and directly tested on the knowledge exam.",
    },
    {
      question: "What is Leandra's Law and what does it charge?",
      answer:
        "Leandra's Law (VTL § 1192(2-a)(b)) makes it an automatic Class E felony to drive intoxicated with a child 15 or younger in the vehicle — even on a first offense. Named for 11-year-old Leandra Rosado, who was killed in 2009 when the driver of the vehicle she was in drove drunk. A felony charge means potential state prison time, not just county jail.",
    },
    {
      question: "Can I make a right turn on red anywhere in New York City?",
      answer:
        "No — right turns on red are prohibited throughout New York City's five boroughs by default under NYC Traffic Rules § 4-07(b). Outside New York City, right on red after a full stop is permitted unless a sign prohibits it. Some NYC intersections have signs explicitly permitting right on red, but those are exceptions to the default citywide ban.",
    },
    {
      question: "What is the NY DMV's 11-point suspension system?",
      answer:
        "New York's Driver Violation Point System automatically suspends a license when 11 or more points accumulate within any 18-month period. Points are assigned per conviction: reckless driving = 5 points; speeding 11–20 mph over = 4 points; speeding 1–10 mph over = 3 points; handheld phone use = 5 points. Drivers can reduce their total by 4 points by completing a NY DMV-approved Point and Insurance Reduction Program (PIRP) course — but only once every 18 months.",
    },
    {
      question: "What are the GDL requirements for NY drivers under 18?",
      answer:
        "New York's GDL for drivers under 18 requires: (1) Learner permit at 16 — held for at least 6 months; (2) 5-hour pre-licensing course completed; (3) 50 hours of supervised driving logged, including 15 at night; (4) Road test passed. The resulting Junior Driver's License carries nighttime restrictions: in upstate NY, no driving 9 PM–5 AM; in NYC and downstate, 9 PM–5 AM without a licensed adult. All restrictions lift at age 18.",
    },
    {
      question: "What does NYC's congestion pricing toll cover?",
      answer:
        "Since June 2024, vehicles entering the Manhattan Central Business District — defined as the area south of 60th Street — pay a congestion pricing toll. New York became the first U.S. city to implement such a program. The toll varies by vehicle type and time of day. Revenue funds MTA capital improvements. NY DMV's manual includes the congestion zone as a driving context for NYC-area drivers.",
    },
    {
      question: "How many languages is the NY DMV knowledge test available in?",
      answer:
        "The New York DMV knowledge test is offered in multiple languages including Spanish, Chinese (Traditional and Simplified), French, Haitian Creole, Italian, Korean, Polish, Russian, and others. Contact your local NY DMV office or check dmv.ny.gov for the current list of available languages and formats.",
    },
    {
      question: "What is New York's no-fault insurance requirement?",
      answer:
        "Under New York's Comprehensive Motor Vehicle Insurance Reparations Act, all registered vehicles must carry Personal Injury Protection (PIP) insurance. PIP pays medical expenses and lost wages for injured parties up to the policy minimum regardless of who caused the crash. New York's minimum liability coverage is 25/50/10 ($25,000 per person, $50,000 per accident bodily injury, $10,000 property damage). Driving without insurance in NY triggers immediate license and registration suspension.",
    },
    {
      question: "How long is a New York learner permit valid?",
      answer:
        "A New York learner permit is valid for 5 years from the date of issue. If you are under 18, you must hold the permit for at least 6 months before taking the road test. You must also complete the 5-hour pre-licensing course and log 50 supervised hours (15 at night) regardless of when the permit was issued. Adults 18+ must also complete the 5-hour course before scheduling the road test.",
    },
  ],
  relatedTests: [
    { label: "NY Motorcycle Test", href: "/new-york-motorcycle-practice-test" },
    { label: "NY CDL Test", href: "/new-york-cdl-practice-test" },
    { label: "CA Permit Test", href: "/california-dmv-practice-test" },
    { label: "TX Permit Test", href: "/texas-dmv-practice-test" },
    { label: "FL Permit Test", href: "/florida-dmv-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function NewYorkDMVPage() {
  return <PracticeTestPage {...data} />;
}
