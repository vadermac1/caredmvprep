import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Florida DMV Practice Test 2025 – Free FL Class E Driver's License Exam Prep",
  description:
    "Free Florida DHSMV practice test based on the official Florida Driver Handbook. 50 questions, detailed explanations, and real test format. Pass your FL Class E knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/florida-dmv-practice-test" },
  openGraph: { url: 'https://caredmvprep.com/florida-dmv-practice-test', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Florida",
  stateAbbr: "FL",
  testLabel: "Permit Practice Test",
  slug: "florida-dmv-practice-test",
  headline: "Florida DHSMV Class E Driver's License Practice Test",
  intro:
    "Prepare for your Florida DHSMV Class E knowledge test with free practice questions built around Florida-specific laws — including the mandatory PIP no-fault insurance requirement, the tiered DUI penalties under FS § 316.193 with an enhanced tier at 0.15%+ BAC, the limited hands-free law (texting banned, but handheld calls allowed on open roads), and the 500-foot emergency vehicle trigger unique to Florida. Florida's licenses are issued through county Tax Collector offices — not DHSMV service centers — in most of the state.",
  numToPass: "40 correct (80%)",
  basedOn: "Florida Driver Handbook (2025)",
  about: [
    "The Florida Department of Highway Safety and Motor Vehicles (DHSMV) administers the Class E knowledge test, which consists of 50 questions based on the official Florida Driver Handbook. To pass, you must answer at least 40 questions correctly — an 80% passing score. Florida's standard driver's license is called a Class E — equivalent to a Class C in most other states. What makes Florida's licensing system uniquely unusual is the delivery mechanism: in most Florida counties, driver's license services are provided through county Tax Collector offices rather than DHSMV service centers directly. This means the same office that handles property taxes and vehicle tags also issues your Florida driver's license — a structure found in no other large state.",
    "Florida is one of a shrinking number of true no-fault insurance states, and its mandatory coverage requirements are specifically tested on the Class E exam. All Florida vehicle owners must carry Personal Injury Protection (PIP) of at least $10,000 and Property Damage Liability (PDL) of at least $10,000 as a condition of vehicle registration. PIP pays 80% of medical expenses and 60% of lost wages after a crash regardless of who caused it — up to the $10,000 limit. Driving without PIP and PDL coverage results in license and registration suspension. Florida's DUI statute (FS § 316.193) has a two-tier BAC structure: a standard tier at 0.08%–0.149% and an enhanced tier at 0.15%+ (or if a minor is in the vehicle) with mandatory minimum fines of $1,000–$2,000 (vs. $500–$1,000 standard) and a 6-month IID requirement.",
    "Florida's Wireless Communications While Driving Law (FS § 316.305 and § 316.306) is frequently misunderstood and is tested specifically for this reason. Florida does NOT have a full handheld ban for adult drivers on open roads — texting while driving is prohibited for all drivers under FS § 316.305, but handheld phone calls are only prohibited in active school zones and active work zones under FS § 316.306. An adult driver may legally hold a phone to their ear for a call on a regular Florida roadway. Florida's hit-and-run law (FS § 316.061) is also notably tested: leaving the scene of a property-damage-only crash is a second-degree misdemeanor; leaving the scene of a crash involving injury is a third-degree felony; leaving the scene of a crash involving death is a first-degree felony. The escalating felony classification is one of the starkest in the country.",
  ],
  keyRules: [
    { icon: "🏥", rule: "No-fault PIP: $10,000 required for vehicle registration", detail: "Florida requires Personal Injury Protection (PIP) of $10,000 and Property Damage Liability (PDL) of $10,000 to register a vehicle. PIP pays 80% of medical expenses and 60% of lost wages after any crash regardless of fault." },
    { icon: "🍺", rule: "DUI enhanced tier at 0.15%+ BAC: fines double, IID required", detail: "Florida DUI (FS § 316.193): standard tier 0.08%–0.149% carries $500–$1,000 fine. Enhanced tier at 0.15%+ (or minor in vehicle): $1,000–$2,000 fine + 6-month IID mandatory on first offense." },
    { icon: "📱", rule: "Texting banned statewide; handheld calls legal on open roads", detail: "FS § 316.305 bans texting for all drivers statewide. FS § 316.306 bans ALL handheld devices in school zones and active work zones only. Outside those zones, adult handheld calls are legal in Florida." },
    { icon: "🚨", rule: "Emergency vehicle: pull over within 500 feet with sirens/lights", detail: "FS § 316.126 requires FL drivers to pull immediately to the right edge and stop — and REMAIN STOPPED until the emergency vehicle passes — when it is within 500 feet with activated sirens and lights." },
    { icon: "🚗", rule: "Hit-and-run: leaving injury scene is a 3rd-degree felony", detail: "Under FS § 316.061: leaving the scene of a property-damage crash = 2nd-degree misdemeanor; leaving when someone is injured = 3rd-degree felony; leaving when someone dies = 1st-degree felony." },
    { icon: "🏦", rule: "Licenses issued at county Tax Collector offices in most counties", detail: "Unlike most states, most Florida counties issue driver's licenses through the county Tax Collector's office — not a DHSMV service center. The same office handling property taxes issues your Class E license." },
    { icon: "🎓", rule: "Teen: 12-month permit + 50 supervised hours (10 at night)", detail: "Florida drivers under 18 must hold a learner's license for 12 full months and log 50 hours of supervised driving including 10 at night before qualifying for a Class E license." },
    { icon: "🌿", rule: "Basic speed rule: safe speed required even below the posted limit", detail: "Under FS § 316.187, Florida's 'basic speed rule' requires drivers to reduce speed to what is safe during rain, fog, or other hazardous conditions — regardless of the posted speed limit." },
  ],
  sampleQuestions: [
    {
      question: "Florida is a no-fault insurance state. What minimum insurance coverage must all Florida vehicle owners carry as a condition of registration?",
      options: [
        "Bodily Injury Liability ($25,000) and Uninsured Motorist coverage ($25,000)",
        "Personal Injury Protection (PIP) of $10,000 and Property Damage Liability (PDL) of $10,000",
        "Comprehensive and collision coverage with a $500 deductible",
        "Medical Payments coverage ($5,000) and Liability coverage ($15,000)",
      ],
      correctIndex: 1,
      explanation:
        "Florida's no-fault system requires all registered vehicle owners to carry Personal Injury Protection (PIP) of at least $10,000 and Property Damage Liability (PDL) of at least $10,000. PIP pays 80% of medical expenses and 60% of lost wages after a crash regardless of who caused it. Driving without PIP and PDL results in license and registration suspension. Florida does NOT require Bodily Injury Liability insurance for a standard Class E license, which is another Florida-specific distinction.",
    },
    {
      question: "Florida's DUI statute (FS § 316.193) has an enhanced penalty tier. At what BAC does the enhanced tier activate on a first offense?",
      options: ["0.10%", "0.12%", "0.15%", "0.20%"],
      correctIndex: 2,
      explanation:
        "Florida's enhanced DUI tier activates at 0.15% BAC (or if a minor is in the vehicle at the time of the offense). A first-offense standard DUI (0.08%–0.149%) carries $500–$1,000 in fines. The enhanced tier (0.15%+) increases the mandatory minimum fine to $1,000–$2,000 and also requires a 6-month ignition interlock device (IID) installation. Florida DUI manslaughter is a second-degree felony under the same statute.",
    },
    {
      question: "Which of the following is true about Florida's wireless communications while driving laws?",
      options: [
        "All handheld phone use is banned for every Florida driver on all roads",
        "Texting is banned statewide; handheld calls are only prohibited in school zones and active work zones — not on open roads",
        "Only drivers under 18 are prohibited from using handheld devices",
        "Florida has no restrictions on phone use while driving",
      ],
      correctIndex: 1,
      explanation:
        "Florida's law has two layers: FS § 316.305 bans texting while driving for all drivers statewide at all times. FS § 316.306 bans ALL handheld device use in active school zones and active work zones. Outside those zones, adult Florida drivers may legally hold a phone to their ear for a call on a regular roadway. This limited law — texting-only ban on open roads — is frequently misunderstood and specifically tested on the DHSMV exam.",
    },
    {
      question: "Under FS § 316.126, when an authorized emergency vehicle is approaching with sirens and lights activated, how close must it be before Florida drivers are required to pull over and stop?",
      options: [
        "200 feet",
        "300 feet",
        "400 feet",
        "500 feet",
      ],
      correctIndex: 3,
      explanation:
        "Under FS § 316.126, when an authorized emergency vehicle with activated sirens and lights comes within 500 feet, Florida drivers must immediately pull to the right edge of the roadway and stop — and must REMAIN STOPPED until the emergency vehicle passes. The '500 feet' proximity trigger is Florida's specific standard and is more generous (requires earlier action) than many states that only require yielding when the vehicle is immediately behind you.",
    },
    {
      question: "Under Florida's hit-and-run law (FS § 316.061), what is the criminal classification for leaving the scene of a crash in which someone was injured?",
      options: [
        "Second-degree misdemeanor",
        "First-degree misdemeanor",
        "Third-degree felony",
        "Second-degree felony",
      ],
      correctIndex: 2,
      explanation:
        "Florida's hit-and-run law under FS § 316.061 escalates in severity based on the outcome of the crash: leaving the scene of a property-damage-only crash is a second-degree misdemeanor; leaving when someone was injured is a third-degree felony; and leaving when someone died is a first-degree felony. This escalating felony classification is one of the most severe hit-and-run penalty structures in the country and is specifically tested on the Florida Class E knowledge exam.",
    },
    {
      question: "In most Florida counties, where do applicants go to obtain a driver's license?",
      options: [
        "A Florida DHSMV service center",
        "A county Tax Collector's office",
        "A Florida Highway Patrol station",
        "Any Florida Department of Revenue office",
      ],
      correctIndex: 1,
      explanation:
        "Unlike most states, Florida delivers driver's license services through county Tax Collector offices in the majority of Florida's 67 counties. The county Tax Collector — the same office that handles property tax payments and vehicle registrations — issues Class E driver's licenses. In some counties, DHSMV service centers handle licensing directly. This county-based delivery system is unique among large states and means applicants should check whether their county uses the Tax Collector or a DHSMV office.",
    },
    {
      question: "Florida's basic speed law (FS § 316.187) requires drivers to do what during rain or fog?",
      options: [
        "Maintain the posted speed limit — it is set to be safe in all conditions",
        "Reduce speed to 20 mph below the posted limit",
        "Reduce speed to whatever is safe and reasonable for the actual conditions — even if below the posted limit",
        "Stop and wait for conditions to clear before proceeding",
      ],
      correctIndex: 2,
      explanation:
        "Florida's basic speed rule under FS § 316.187 requires drivers to travel at a speed that is 'reasonable and prudent' for the actual conditions — not simply at or below the posted limit. During rain, fog, smoke, or other reduced-visibility conditions, a driver must slow to whatever speed is genuinely safe for those conditions, even if that means traveling significantly below the posted limit. Driving at the posted limit in hazardous conditions can still be a traffic violation if an officer determines the speed was unreasonable.",
    },
    {
      question: "Florida DUI law considers 'actual physical control' of a vehicle. What does this mean for an intoxicated person sitting in a parked car with the engine running?",
      options: [
        "There is no DUI risk — the vehicle must be moving for DUI to apply",
        "DUI only applies if the car is in 'Drive' gear, not 'Park'",
        "An intoxicated person in actual physical control of a vehicle — including sitting in a parked car with the engine running — can be charged with DUI under FS § 316.193",
        "This applies only if another person is in the vehicle",
      ],
      correctIndex: 2,
      explanation:
        "Florida DUI under FS § 316.193 applies to anyone who 'drives or is in actual physical control' of a vehicle while impaired. Florida courts have held that sitting in the driver's seat of a parked car with the engine running constitutes 'actual physical control.' This broad interpretation means an intoxicated person can be charged with DUI without ever moving the vehicle — a Florida-specific application of DUI law that is tested on the Class E exam.",
    },
    {
      question: "Florida's implied consent law requires drivers to submit to chemical testing when law enforcement has reasonable cause to suspect impairment. What is the consequence of a FIRST refusal?",
      options: [
        "No penalty — refusal is a protected right in Florida",
        "A 6-month license suspension",
        "A 1-year automatic license suspension",
        "An immediate 48-hour jail hold",
      ],
      correctIndex: 2,
      explanation:
        "Florida's implied consent law means that by operating a motor vehicle on Florida roads, a driver automatically consents to chemical testing (breath, blood, or urine) when law enforcement has reasonable cause to suspect impairment. A first refusal results in an automatic 1-year license suspension. A second refusal is a first-degree misdemeanor and results in an 18-month suspension. The refusal can also be used as evidence of consciousness of guilt in a DUI prosecution.",
    },
    {
      question: "Florida's Move Over Act requires drivers to do what when approaching a stationary law enforcement vehicle with activated lights on a multi-lane highway?",
      options: [
        "Activate hazard lights and maintain normal speed",
        "Come to a complete stop in the travel lane",
        "Move over one lane away from the stopped vehicle if safe, or slow to 20 mph below the posted speed limit if a lane change is not possible",
        "Move over only if a law enforcement officer waves you over",
      ],
      correctIndex: 2,
      explanation:
        "Florida's Move Over Act (FS § 316.126) requires drivers to move over at least one lane away from any stopped authorized emergency vehicle, law enforcement vehicle, wrecker, or utility service vehicle displaying activated lights on a multi-lane road — when it is safe and possible to do so. If a lane change cannot be made safely, drivers must reduce speed to 20 mph below the posted limit. Violating the Move Over Act is a moving violation with fines starting at $158.",
    },
  ],
  faqs: [
    {
      question: "Why do most Florida counties issue driver's licenses through the Tax Collector's office instead of a DHSMV office?",
      answer:
        "Florida's driver's license delivery system evolved historically through county government infrastructure. In the majority of Florida's 67 counties, the elected county Tax Collector operates the local service center that issues driver's licenses, processes vehicle registrations, and handles property tax payments under one roof. DHSMV maintains oversight of standards and the licensing database but delegates service delivery to county Tax Collectors in most areas. This system is unique among large states. Before visiting, check whether your Florida county uses the Tax Collector or a direct DHSMV service center — they are different locations.",
    },
    {
      question: "How does Florida's PIP no-fault insurance system work, and why does it matter for the knowledge test?",
      answer:
        "Florida's Personal Injury Protection (PIP) system requires all registered vehicle owners to carry $10,000 in PIP coverage. After any crash — regardless of who caused it — your own PIP pays 80% of your medical bills and 60% of your lost wages up to the $10,000 limit. The no-fault system means you generally do not sue the at-fault driver for minor injuries — your own PIP pays first. Florida law also requires $10,000 in Property Damage Liability (PDL). Driving without both coverages results in license and registration suspension. PIP and the no-fault system are tested because they directly affect how crash claims are handled in Florida.",
    },
    {
      question: "Florida's DUI law has an enhanced penalty tier. What triggers it and what are the differences from a standard first DUI?",
      answer:
        "Florida's enhanced DUI tier under FS § 316.193 is triggered by a BAC of 0.15% or higher, or by having a minor in the vehicle at the time of the offense. Standard first DUI (0.08%–0.149%): $500–$1,000 fine, up to 6 months jail, up to 1 year probation, 180 days–1 year license revocation. Enhanced first DUI (0.15%+): $1,000–$2,000 minimum fine, mandatory 6-month IID installation, same jail and probation exposure. DUI manslaughter under the same statute is a second-degree felony.",
    },
    {
      question: "Can a Florida adult driver legally make a phone call while holding the phone while driving?",
      answer:
        "Yes — on regular open roadways in Florida, adult drivers may legally hold a phone to their ear for a call. Florida's Wireless Communications While Driving Law bans texting for all drivers statewide (FS § 316.305), and bans ALL handheld device use in active school zones and active work zones (FS § 316.306). But outside those restricted zones, there is no statewide handheld ban for adult drivers making calls. This limited law is a common source of confusion and is specifically tested because it contrasts with stricter laws in neighboring and northern states.",
    },
    {
      question: "What is Florida's 'actual physical control' concept in DUI law?",
      answer:
        "Florida DUI under FS § 316.193 applies to any person who 'drives or is in actual physical control' of a vehicle while impaired. 'Actual physical control' has been interpreted broadly by Florida courts to include sitting in the driver's seat of a parked car with the engine running. A person does not need to be moving the vehicle to be charged with DUI in Florida — the ability and position to operate the vehicle is sufficient. This is an important Florida-specific concept tested on the Class E exam.",
    },
    {
      question: "What are Florida's hit-and-run criminal penalties under FS § 316.061?",
      answer:
        "Florida's hit-and-run penalties escalate based on crash severity: (1) property damage only — leaving the scene is a second-degree misdemeanor; (2) someone was injured — leaving is a third-degree felony (up to 5 years prison); (3) someone died — leaving is a first-degree felony (up to 30 years prison). Florida's felony-level penalties for injury and death hit-and-run are among the most severe in the country and are specifically highlighted in the Florida Driver Handbook.",
    },
    {
      question: "How many questions are on the Florida DHSMV Class E knowledge test and how many do I need to pass?",
      answer:
        "The Florida Class E knowledge test has 50 questions. You must answer at least 40 correctly — an 80% passing score — to receive your learner's permit or driver's license. The test covers traffic signs and signals, right-of-way rules, Florida-specific laws (PIP insurance, DUI, hit-and-run, Move Over), and safe driving practices. There is no separate sign section — all 50 questions are mixed.",
    },
    {
      question: "What is Florida's zero-tolerance law for under-21 drivers?",
      answer:
        "Florida's zero-tolerance law makes it illegal for drivers under 21 to operate a motor vehicle with a BAC of 0.02% or higher. A first violation results in an automatic 6-month license suspension. A second violation within 12 months of the first carries a 12-month suspension. Under 21 drivers are also subject to the implied consent law — refusing a chemical test results in a 1-year suspension on the first refusal.",
    },
    {
      question: "How long must a Florida teen hold a learner's permit before getting a Class E license?",
      answer:
        "Florida drivers under 18 must hold a learner's license (learner's permit) for a minimum of 12 full months before applying for a Class E driver's license. During that period, they must also log at least 50 hours of supervised driving — with at least 10 of those hours occurring at night. The supervising driver must be a licensed adult 21 or older. The learner's license is valid for 1 year; if it expires before the Class E is obtained, the teen must reapply and retake the knowledge test.",
    },
    {
      question: "What is Florida's basic speed rule and how does it affect driving below the posted limit?",
      answer:
        "Florida's basic speed rule under FS § 316.187 requires all drivers to travel at a speed 'reasonable and prudent' for the actual conditions — not merely at or below the posted limit. During rain, fog, smoke, or other hazardous conditions, a driver must slow to whatever speed is genuinely safe, even significantly below the posted limit. Driving at the posted limit while conditions are dangerous can still result in a traffic citation if law enforcement determines the speed was unreasonable for those conditions.",
    },
  ],
  relatedTests: [
    { label: "FL Motorcycle Test", href: "/florida-motorcycle-practice-test" },
    { label: "FL CDL Test", href: "/florida-cdl-practice-test" },
    { label: "CA Permit Test", href: "/california-dmv-practice-test" },
    { label: "TX Permit Test", href: "/texas-dmv-practice-test" },
    { label: "NY Permit Test", href: "/new-york-dmv-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function FloridaDMVPage() {
  return <PracticeTestPage {...data} />;
}
