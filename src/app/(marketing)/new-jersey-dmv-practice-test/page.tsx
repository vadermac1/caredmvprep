import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New Jersey DMV Practice Test 2025 – Free NJ MVC Knowledge Exam Prep",
  description:
    "Free New Jersey MVC practice test based on the 2025 New Jersey Driver Manual. 50-question knowledge test, 80% (40/50) overall passing score. Prepare for your NJ Motor Vehicle Commission knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/new-jersey-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/new-jersey-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New Jersey",
  stateAbbr: "NJ",
  testLabel: "Driver's License Knowledge Test",
  slug: "new-jersey-dmv-practice-test",
  headline: "New Jersey MVC Driver's License Practice Test",
  intro:
    "Prepare for your New Jersey Motor Vehicle Commission (MVC) knowledge test with free practice questions built around NJ-specific laws — jughandle turns, the no-plea-bargain DWI rule under NJSA 39:4-50, the nation's strictest under-21 BAC threshold (0.01%), and the hands-free law that adds license points starting on a third conviction. New Jersey's 50-question exam is one of the longer knowledge tests nationally; these questions cover the laws that are uniquely New Jersey.",
  basedOn: "2025 New Jersey Driver Manual",
  about: [
    "New Jersey driver's licenses are issued by the New Jersey Motor Vehicle Commission (MVC), not a Department of Motor Vehicles. The MVC was created in 2003 to replace the scandal-plagued NJ DMV after a sweeping overhaul of the state's licensing system, and it operates regional service centers throughout New Jersey. Per the official 2025 Driver Manual, the knowledge test consists of 50 scored questions plus one unscored organ-donor survey question, and requires 80% (40 of the 50 questions) correct to pass — a single overall score, not separate sign/rules sections.",
    "New Jersey DWI law under NJSA 39:4-50 includes a provision found in no other eastern state: New Jersey expressly prohibits plea bargaining on DWI charges. Prosecutors cannot reduce a DWI to a lesser traffic offense through a plea deal — a defendant must either plead guilty to DWI or go to trial. The standard BAC limit is 0.08% for adults. New Jersey's under-21 BAC threshold is 0.01% — effectively any measurable alcohol — which is stricter than most states' 0.02% underage limit. A first under-21 DWI in New Jersey results in a 30–90 day license suspension, $250–$400 in fines, a mandatory Intoxicated Driver Resource Center (IDRC) evaluation, and 15–30 days of community service.",
    "New Jersey's most famous road design is the jughandle turn — and it is not merely a curiosity. Under NJSA 39:4-123, making a direct left turn from the main travel lane when a jughandle is provided is illegal. Jughandles are required on many of New Jersey's divided state highways including Routes 1, 9, 22, and 35: instead of turning left from the main lane, drivers must exit right onto a curved ramp before the intersection, loop around, and cross the main road perpendicularly at a traffic signal. A far-side jughandle (exiting after the intersection) is used for U-turns on these highways. Per the official manual, the NJ hands-free law under NJSA 39:4-97.3 adds three license points, but only starting with a third conviction within 10 years of a second conviction, and all fourth-and-subsequent offenses — the first and second convictions carry fines only, no points. New Jersey's 6-Point ID Verification system is among the strictest document requirements for license applicants nationally.",
  ],
  keyRules: [
    { icon: "🔄", rule: "Jughandle turns — direct left turn illegal when jughandle is present", detail: "Under NJSA 39:4-123, when a jughandle ramp is provided on an NJ highway, making a direct left turn from the main travel lane is illegal. Exit right, loop around, and cross at the jughandle signal." },
    { icon: "⚖️", rule: "DWI: no plea bargaining — NJSA 39:4-50", detail: "New Jersey law expressly prohibits prosecutors from plea-bargaining DWI charges down to a lesser offense. Defendants must plead guilty to DWI or go to trial — no other eastern state has this anti-plea-bargain provision." },
    { icon: "🍺", rule: "Under-21 DWI at 0.01% — strictest in the east", detail: "NJ's under-21 BAC threshold is 0.01% — any measurable alcohol above trace levels. First offense: 30–90 day suspension, $250–$400 fine, mandatory IDRC evaluation, 15–30 days community service." },
    { icon: "📵", rule: "Hands-free law: points apply starting on the third conviction", detail: "Under NJSA 39:4-97.3: first violation $200–$400 fine, no points; second $400–$600 fine, no points; third conviction within 10 years of the second, and all subsequent offenses, add 3 license points plus a possible 90-day suspension." },
    { icon: "🏎️", rule: "Blind intersection: 15 mph when view blocked within 100 feet", detail: "Under NJSA 39:4-90.1, at any intersection where the view is obstructed within 100 feet in any direction, NJ requires a maximum speed of 15 mph even without a posted sign." },
    { icon: "👤", rule: "GDL: 1-passenger restriction for permit/probationary holders", detail: "NJ teen drivers with a Special Learner's Permit or Probationary License may not carry more than 1 additional passenger in the vehicle (other than a parent, guardian, or responsible adult 21+)." },
    { icon: "🌙", rule: "Probationary curfew: 11 PM–5 AM", detail: "NJ Probationary License holders may not drive between 11 PM and 5 AM without a licensed adult 21+ in the front seat — exceptions require written documentation for work, school, or family emergency." },
    { icon: "🆔", rule: "6-Point ID Verification to get a NJ license", detail: "NJ requires documents totaling at least 6 points: primary ID (birth certificate or U.S. passport = 4 pts each), SSN document (1 pt), and secondary ID (utility bill or bank statement = 1 pt each). One of the strictest document requirements nationally." },
  ],
  sampleQuestions: [
    {
      question: "On many New Jersey state highways, you cannot turn left directly from the main travel lane. What must you do instead, and what is the legal consequence of ignoring this?",
      options: [
        "Slow to 15 mph and make a careful direct left — no separate rule applies",
        "Use the dedicated center turn lane — NJ requires all left turns from the center",
        "Exit right onto a jughandle ramp before (or after) the intersection, loop around, and cross the main road at a traffic signal — direct left turn is illegal where a jughandle is provided",
        "Flash your hazard lights and wait for a gap in oncoming traffic before turning left",
      ],
      correctIndex: 2,
      explanation:
        "Under NJSA 39:4-123, when a jughandle ramp is provided on a New Jersey highway, making a direct left turn from the main travel lane is illegal. Jughandles are required on many NJ divided highways (Routes 1, 9, 22, 35, and others). To make a left turn: watch for 'Jughandle' signs, move to the right lane early, take the ramp right, wait at the jughandle signal, then proceed across the main road perpendicularly. A far-side jughandle (exiting after the intersection) is used for U-turns.",
    },
    {
      question: "New Jersey's DWI law under NJSA 39:4-50 has a provision found in no other eastern state. What is it?",
      options: [
        "NJ allows first-offense DWI charges to be expunged after 10 years",
        "NJ prosecutors are expressly prohibited from plea bargaining DWI charges down to a lesser traffic offense",
        "NJ requires IID installation for all DWI convictions regardless of BAC",
        "NJ imposes a mandatory 30-day license suspension before any court hearing",
      ],
      correctIndex: 1,
      explanation:
        "New Jersey's DWI statute (NJSA 39:4-50) expressly prohibits prosecutors from plea bargaining a DWI charge down to a lesser traffic offense. A defendant must either plead guilty to DWI or go to trial — there is no option to negotiate the charge to reckless driving or a similar reduced offense. This anti-plea-bargain provision is unique among eastern states and makes New Jersey DWI convictions effectively unavoidable once charged.",
    },
    {
      question: "New Jersey's under-21 DWI threshold is 0.01% BAC. How does a first under-21 DWI affect the driver's license?",
      options: [
        "A warning letter is issued; no suspension for a first offense",
        "30–90 day license suspension, $250–$400 fine, mandatory IDRC evaluation, and 15–30 days of community service",
        "Automatic 1-year suspension and $1,000 fine",
        "The vehicle is impounded for 30 days; no license suspension applies",
      ],
      correctIndex: 1,
      explanation:
        "New Jersey's under-21 DWI threshold is 0.01% BAC — any measurable alcohol above trace levels. A first offense under this threshold results in a 30–90 day license suspension, $250–$400 fine, mandatory Intoxicated Driver Resource Center (IDRC) evaluation, and 15–30 days of community service. NJ's 0.01% threshold is stricter than most states' 0.02% underage limit and effectively constitutes zero tolerance.",
    },
    {
      question: "Under New Jersey's hands-free law (NJSA 39:4-97.3), what happens on a FIRST violation?",
      options: [
        "$100 fine, no points",
        "$200–$400 fine only — no license points added",
        "$200–$400 fine plus 3 license points",
        "Written warning only for a first violation",
      ],
      correctIndex: 1,
      explanation:
        "New Jersey's hands-free law under NJSA 39:4-97.3 carries a $200–$400 fine for a first violation with no license points. Points (3) are only assessed starting with a third conviction within 10 years of a second conviction, and all fourth-and-subsequent offenses, along with a possible 90-day suspension. Fines step up to $400–$600 for a second offense and $600–$800 for a third or subsequent offense.",
    },
    {
      question: "At an uncontrolled New Jersey intersection where a building, fence, or vegetation blocks the view within 100 feet in any direction, what speed does NJSA 39:4-90.1 require?",
      options: [
        "The posted speed limit applies — no additional restriction",
        "25 mph",
        "No more than 15 mph",
        "Come to a complete stop before entering the intersection",
      ],
      correctIndex: 2,
      explanation:
        "New Jersey's 'blind intersection' provision under NJSA 39:4-90.1 requires a speed of no more than 15 mph at any intersection where the driver's view is obstructed within 100 feet in any direction — even if there is no stop sign or traffic signal. This 15 mph 'blind intersection' speed limit applies regardless of the posted limit on the surrounding road and is a uniquely New Jersey codified provision.",
    },
    {
      question: "New Jersey's MVC replaced the state's old DMV after what major event?",
      options: [
        "A statewide computer system upgrade in 2003",
        "A federal mandate requiring all states to overhaul licensing agencies",
        "A major licensing scandal that exposed widespread fraud in the NJ DMV, prompting a complete overhaul in 2003",
        "A merger with the New Jersey Department of Transportation in 2003",
      ],
      correctIndex: 2,
      explanation:
        "The New Jersey Motor Vehicle Commission (MVC) was created in 2003 to replace the scandal-plagued NJ DMV following investigations that exposed widespread fraud in the driver's license issuance process. The overhaul included new leadership, restructured regional service centers, and the stricter 6-Point ID Verification system for document requirements. The MVC is New Jersey's equivalent of a DMV in every operational sense, but the name change reflects the institutional reform.",
    },
    {
      question: "Under New Jersey's GDL program, how many passengers may a teen with a Special Learner's Permit or Probationary License carry without a supervising adult present?",
      options: [
        "No passengers at all are permitted",
        "One additional passenger",
        "Two additional passengers",
        "Three additional passengers",
      ],
      correctIndex: 1,
      explanation:
        "NJ teen drivers holding a Special Learner's Permit or Probationary License may carry no more than one additional passenger in the vehicle — other than a parent, guardian, or responsible adult 21 or older who is present in the vehicle. This one-passenger restriction applies throughout the permit and probationary stages and is specifically designed to reduce the distraction risk that peer passengers create for inexperienced teen drivers.",
    },
    {
      question: "New Jersey's 6-Point ID Verification system requires applicants to present documents totaling at least 6 points. How many points does a U.S. passport count for?",
      options: ["1 point", "2 points", "3 points", "4 points"],
      correctIndex: 3,
      explanation:
        "Under New Jersey's 6-Point ID Verification system, a U.S. passport counts as 4 points — the same as a certified birth certificate. An applicant with a passport still needs 2 more points, typically a Social Security card (1 point) and a utility bill or bank statement showing NJ residency (1 point each). This system, introduced after the 2003 overhaul, is one of the most rigorous identity verification requirements for driver's license applicants in the country.",
    },
    {
      question: "New Jersey's Probationary License nighttime driving restriction runs from 11 PM to 5 AM. What documentation is required if a probationary driver must travel during those hours for work?",
      options: [
        "No documentation needed — work is always exempt from the curfew",
        "Written documentation of the work schedule or employer letter must be carried in the vehicle",
        "A phone call from the employer to the MVC is sufficient",
        "The probationary license automatically grants a work exemption after 6 months",
      ],
      correctIndex: 1,
      explanation:
        "New Jersey Probationary License holders may drive between 11 PM and 5 AM only with a licensed adult 21 or older in the front seat, OR when traveling to/from work, a school activity, or a documented family emergency. For the work exemption, the driver must carry written documentation — such as a work schedule or employer letter — in the vehicle. Verbal claims of a work exemption are not sufficient if stopped by law enforcement.",
    },
    {
      question: "How many questions are on the New Jersey MVC knowledge test, and what score is required to pass?",
      options: [
        "40 questions, 75% to pass",
        "50 questions, 80% (40 of 50) to pass",
        "50 questions split into two sections, each requiring 80% independently",
        "60 questions, 90% to pass",
      ],
      correctIndex: 1,
      explanation:
        "Per the official 2025 New Jersey Driver Manual, the knowledge test consists of 50 scored questions (plus one unscored organ-donor survey question) and requires a single overall score of 80%, or 40 of the 50 questions correct, to pass.",
    },
  ],
  faqs: [
    {
      question: "Why is it called the MVC in New Jersey instead of a DMV?",
      answer:
        "New Jersey's Motor Vehicle Commission (MVC) was created in 2003 to replace the New Jersey DMV following a major licensing scandal that exposed widespread fraud in the issuance of driver's licenses. The agency was completely restructured under new leadership with a new name, new regional service center system, and the stricter 6-Point ID Verification document requirement. The MVC performs the same functions as a DMV in any other state — licensing, registration, titling — under a different name that reflects the 2003 institutional reform.",
    },
    {
      question: "What makes New Jersey's DWI law unique compared to neighboring states?",
      answer:
        "The most distinctive feature of New Jersey DWI law under NJSA 39:4-50 is that New Jersey expressly prohibits plea bargaining on DWI charges. Prosecutors cannot negotiate a DWI down to reckless driving or another lesser traffic offense — the defendant must either plead guilty to DWI or go to trial. No other eastern state has this explicit anti-plea-bargain provision. Additionally, NJ's under-21 BAC limit of 0.01% is stricter than most states' 0.02% threshold, and all NJ DWI convictions require an IDRC evaluation.",
    },
    {
      question: "How does a jughandle turn work in New Jersey?",
      answer:
        "A jughandle is New Jersey's alternative to a left-turn lane on many divided highways. Instead of turning left from the main travel lane, you watch for a 'Jughandle' sign, move to the right lane well in advance, exit right onto the jughandle ramp before the intersection, curve around, and then wait at a traffic signal to cross the main road perpendicularly. A 'far-side jughandle' exits after the intersection and is used for U-turns. When a jughandle is present, making a direct left turn from the main lane is illegal under NJSA 39:4-123.",
    },
    {
      question: "Why does New Jersey's hands-free law add license points, and how many?",
      answer:
        "New Jersey's hands-free law under NJSA 39:4-97.3 adds three license points, but only starting with a third conviction within 10 years of a second conviction, and all fourth-and-subsequent offenses. The first and second convictions carry fines only ($200–$400 and $400–$600 respectively) with no points. A third or subsequent conviction adds the 3 points plus a $600–$800 fine and a possible 90-day license suspension.",
    },
    {
      question: "What is NJ's 6-Point ID Verification system?",
      answer:
        "New Jersey requires license applicants to present documents that total at least 6 identity verification points: primary ID (certified birth certificate or U.S. passport = 4 points each), proof of Social Security number (SS card or W-2 = 1 point), and secondary ID or residency proof (utility bill or bank statement = 1 point each). For a REAL ID-compliant license, a birth certificate or passport is required along with SSN and two NJ residency documents. The 6-point system was introduced after the 2003 overhaul to prevent the fraudulent license issuance that had plagued the old DMV.",
    },
    {
      question: "What are the stages of New Jersey's GDL program?",
      answer:
        "NJ GDL has three stages: (1) Special Learner's Permit (SLP) — available at 16, supervised driving only with a licensed adult 21+ in the front seat, minimum 12-month hold; (2) Probationary License — available at 17 after passing the road skills test, 11 PM to 5 AM curfew, max 1 non-family passenger, no handheld devices; (3) Basic Driver's License — available at 18 or after 12 months of violation-free probationary driving. The MVC also requires a 6-hour Supervised Driving Program (SDP) course for new provisional drivers.",
    },
    {
      question: "What is NJ's IDRC program and why is it required for DWI?",
      answer:
        "The Intoxicated Driver Resource Center (IDRC) is a mandatory evaluation and referral program for all NJ DWI offenders — a first offense requires 12–48 hours at an IDRC facility. The IDRC assesses alcohol and drug use patterns and can mandate treatment completion as a condition of license restoration. New Jersey is unique in requiring IDRC for all first-offense DWI convictions — no other state has an equivalent mandatory evaluation program for first-time impaired driving offenders.",
    },
    {
      question: "How many questions are on the New Jersey MVC knowledge test and what is the passing score?",
      answer:
        "Per the official 2025 New Jersey Driver Manual, the NJ MVC knowledge test has 50 scored questions (plus one unscored organ-donor survey question), and requires a single overall score of 80%, or 40 of the 50 questions correct, to pass — there is no separate sign/rules section breakdown.",
    },
    {
      question: "Does New Jersey allow right turn on red?",
      answer:
        "Yes, right turn on red is generally permitted in New Jersey after a complete stop and yielding to all pedestrians in the crosswalk and all vehicles with the right of way. However, New Jersey urban areas — particularly in Hudson County (Jersey City, Newark) and near New York City — have many posted 'No Right Turn on Red' signs at high-pedestrian intersections. Always check for posted signs before turning right on red, especially in densely populated NJ areas.",
    },
    {
      question: "Can I take the New Jersey MVC knowledge test online?",
      answer:
        "New Jersey's MVC has expanded online services in recent years, and some license renewal and upgrade transactions can be completed online. First-time applicants for a Special Learner's Permit typically must visit an MVC regional service center in person to verify identity documents (under the 6-Point ID system) and complete the knowledge test. Check nj.gov/mvc for current online testing availability, as options continue to expand.",
    },
    {
      question: "What is New Jersey's 'blind intersection' speed rule?",
      answer:
        "Under NJSA 39:4-90.1, at any intersection where buildings, fences, vegetation, or other obstructions block the driver's view within 100 feet in any direction, New Jersey requires a speed of no more than 15 mph — even without a posted stop sign or speed limit sign. This 'blind intersection' provision is codified in New Jersey law and is distinct from the general speed limit on the surrounding road. It is specifically tested on the NJ MVC knowledge exam.",
    },
  ],
  relatedTests: [
    { label: "NJ Motorcycle Test", href: "/new-jersey-motorcycle-practice-test" },
    { label: "NJ CDL Test", href: "/new-jersey-cdl-practice-test" },
    { label: "All States", href: "/states" },
    { label: "Road Signs", href: "/motorcycle-road-signs" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
  ],
};

export default function NewJerseyDMVPage() {
  return <PracticeTestPage {...data} />;
}
