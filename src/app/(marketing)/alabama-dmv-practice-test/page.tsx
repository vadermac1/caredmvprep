import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Alabama ALEA Practice Test 2025 – Free AL Driver's License Exam Prep",
  description:
    "Free Alabama driver's license practice test based on the AL DPS Driver Manual. 40 questions, 80% passing. Covers ALEA agency terminology, Alabama's Hands-Free Act (2024), DUI consequences, and state-specific road laws. Pass your Alabama knowledge test first try.",
  alternates: { canonical: "https://caredmvprep.com/alabama-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/alabama-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Alabama",
  stateAbbr: "AL",
  testLabel: "Driver License Knowledge Test",
  slug: "alabama-dmv-practice-test",
  headline: "Alabama Driver's License Practice Test 2025",
  intro:
    "Alabama driver licensing is administered by the Alabama Law Enforcement Agency (ALEA), Driver License Division — not a traditional DMV. The 40-question knowledge test requires 80% (32/40) to pass. Alabama's Hands-Free Act (Act 2023-382, effective January 1, 2024) applies to all drivers, and Alabama's DUI consequences — including mandatory DUI school and ignition interlock requirements — are among the most comprehensive in the Southeast.",
  basedOn: "Alabama DPS Driver Manual (current ALEA edition)",
  keyRules: [
    { icon: "🚔", rule: "Agency: ALEA (not a DMV)", detail: "Alabama Law Enforcement Agency (ALEA), Driver License Division handles all licensing — Alabama has no traditional DMV. ALEA is a law enforcement agency." },
    { icon: "📱", rule: "Hands-free required (January 1, 2024)", detail: "Act 2023-382: all drivers banned from physically holding or using a handheld device while driving. Primary enforcement. First violation: $50 fine; second: $100; third+: $150." },
    { icon: "🍺", rule: "DUI: 0.08% adults; 0.02% under-21", detail: "0.08% for adults; 0.02% for drivers under 21; 0.04% for CDL holders in a CMV. First DUI = minimum 90-day license suspension." },
    { icon: "🏫", rule: "ADECA DUI school required for reinstatement", detail: "All Alabama DUI convictions require mandatory completion of the ADECA (Alabama DUI school) program before license reinstatement — regardless of vehicle type." },
    { icon: "⚖️", rule: "3 DUIs = Habitual Offender felony", detail: "Three DUI convictions result in a Habitual Offender designation, Class C felony charge on the third DUI, and minimum 5-year license revocation." },
    { icon: "🧪", rule: "Implied consent: 90-day refusal suspension", detail: "Refusing a chemical test = 90-day suspension (first refusal) or 1-year (second refusal) — in addition to any criminal charges." },
    { icon: "🚗", rule: "Learner's permit at 16 only", detail: "Alabama does not issue learner's permits before age 16. Permit must be held for a minimum supervised period before a Restricted License is issued." },
    { icon: "🚨", rule: "Move Over: reduce 15 mph below posted limit", detail: "Must move over one lane or reduce speed by at least 15 mph below the posted speed limit when passing stopped emergency, utility, or tow truck vehicles with lights activated." },
  ],
  about: [
    "Alabama's driver licensing is handled by the Alabama Law Enforcement Agency (ALEA), specifically the Driver License Division. This is distinct from a traditional DMV — the agency is part of Alabama's law enforcement structure, which is why driver licensing offices are often co-located with state trooper posts and law enforcement facilities. The ALEA Driver License Division issues all Class D (standard) operator licenses, learner permits, motorcycle endorsements, and CDL credentials. The knowledge test has 40 questions and requires 32 correct answers (80%) to pass. Alabama allows applicants to test on a computer at driver license examining offices. Applicants who fail may retest after 24 hours. After five failures within a calendar year, ALEA may require a waiting period and proof of additional driver education before retesting is permitted.",
    "Alabama's Hands-Free Act (Act 2023-382, effective January 1, 2024) is one of the most recently enacted comprehensive hands-free laws in the nation. The law prohibits all drivers from physically holding or using a handheld wireless device while operating a motor vehicle. This includes making calls, texting, browsing, watching video, or any other manual interaction with the device. Hands-free Bluetooth, speakerphone on a mounted device, and in-vehicle integrated systems are all permitted. Primary enforcement means law enforcement can stop a driver solely for this violation without needing another traffic violation as a basis. Fines begin at $50 for a first offense, $100 for a second, and $150 for subsequent violations. The Alabama knowledge test has incorporated questions about the Hands-Free Act beginning in 2024.",
    "Alabama's DUI enforcement system is notable for its mandatory education component. Any driver convicted of DUI in Alabama must complete the Alabama DUI school — a program operated through the Alabama Department of Economic and Community Affairs (ADECA) — as a condition of license reinstatement. This DUI school involves assessment, education, and in some cases, treatment referral. Ignition interlock devices (IIDs) are required for certain DUI offenders, including those with high BAC readings and repeat offenders. Alabama's third DUI conviction results in a Class C felony charge, a minimum 5-year revocation, and a Habitual Offender designation. Alabama's implied consent law requires that drivers submit to chemical testing or face an immediate 90-day license suspension for a first refusal — longer than the suspension from many first-offense DUI convictions. This creates a strong legal incentive to submit to testing.",
  ],
  sampleQuestions: [
    {
      question: "Alabama driver licensing is administered by which state agency?",
      options: [
        "The Alabama Department of Motor Vehicles (ALDMV)",
        "The Alabama Department of Transportation (ALDOT)",
        "The Alabama Law Enforcement Agency (ALEA), Driver License Division",
        "The Alabama Secretary of State's Office",
      ],
      correctIndex: 2,
      explanation:
        "Alabama does not have a traditional Department of Motor Vehicles. Driver licensing is administered by the Alabama Law Enforcement Agency (ALEA), Driver License Division. Because licensing is under the law enforcement umbrella, ALEA driver license offices are sometimes co-located with state trooper facilities and share administrative infrastructure. The ALEA website (alea.gov) is the authoritative source for driver license requirements, office locations, fees, and testing information. This unique structure means that applicants interact with ALEA — not a 'DMV' — throughout the licensing process.",
    },
    {
      question: "Alabama's Hands-Free Act (Act 2023-382) took effect on January 1, 2024. What does it prohibit for ALL drivers?",
      options: [
        "Using any phone for navigation — all GPS apps are banned under the Act",
        "Talking on a phone using a Bluetooth earpiece or vehicle speaker system",
        "Physically holding or manually interacting with a wireless device while operating a motor vehicle",
        "Only texting — phone calls using a held device remain legal under the Alabama Act",
      ],
      correctIndex: 2,
      explanation:
        "Alabama's Hands-Free Act (Act 2023-382, effective January 1, 2024) prohibits physically holding or manually using a wireless device while operating a motor vehicle. This covers calls, texting, browsing, video, and any other manual interaction. Hands-free Bluetooth, voice-activated systems, and dashboard-mounted devices (where the driver doesn't need to hold or touch the phone) are permitted. The law uses primary enforcement — police can stop a driver solely for this violation. Fines: $50 first offense, $100 second, $150+ for subsequent violations. Alabama was one of the last southeastern states to adopt a comprehensive hands-free law.",
    },
    {
      question: "A driver is convicted of DUI in Alabama for the first time. What does Alabama require BEFORE the driver can have their license reinstated?",
      options: [
        "Payment of all fines and court costs only — no additional requirements",
        "A 30-day mandatory suspension followed by automatic reinstatement",
        "Completion of the Alabama DUI school (ADECA program), in addition to any suspension period",
        "Retaking the Alabama knowledge test and road skills test",
      ],
      correctIndex: 2,
      explanation:
        "All Alabama DUI convictions require mandatory completion of the Alabama DUI school (operated by ADECA, the Alabama Department of Economic and Community Affairs) as a condition of license reinstatement. The DUI school includes assessment, education sessions, and in some cases treatment referrals. The school must be completed and documentation submitted to ALEA before a license can be reinstated. This requirement applies regardless of whether the suspension is for a first or subsequent conviction. Many Alabama DUI offenders are also required to install an ignition interlock device (IID) as an additional reinstatement condition.",
    },
    {
      question: "An Alabama driver refuses a chemical test (breathalyzer or blood test) after a lawful DUI arrest. What is the consequence for a first refusal?",
      options: [
        "A $200 fine only — ALEA cannot suspend a license without a DUI conviction",
        "A 90-day suspension of the driver's license — separate from and in addition to any criminal DUI charges",
        "A 30-day suspension, which runs concurrently with the DUI suspension if convicted",
        "No immediate suspension — the refusal is only evidence used in the DUI criminal trial",
      ],
      correctIndex: 1,
      explanation:
        "Alabama's Implied Consent Law requires all drivers on Alabama roads to submit to chemical testing when lawfully arrested for DUI. Refusing a breathalyzer or blood test results in a 90-day license suspension for a first refusal — a suspension entirely separate from any criminal DUI charge. A second refusal within 5 years results in a 1-year suspension. The refusal can also be used as evidence in the criminal DUI trial. Alabama's 90-day refusal suspension is notable because it equals or exceeds the suspension from a first DUI conviction itself — creating a strong incentive to comply with testing.",
    },
    {
      question: "Alabama's DUI law designates a third DUI conviction as what level of criminal offense?",
      options: [
        "A Class B misdemeanor — the same as a second DUI but with higher fines",
        "A Class A misdemeanor — the most serious misdemeanor level",
        "A Class C felony — a criminal felony with a minimum 5-year license revocation",
        "An infraction only — Alabama does not criminalize DUI beyond two convictions",
      ],
      correctIndex: 2,
      explanation:
        "Alabama's third DUI conviction within 10 years is a Class C felony (Code of Ala. 1975 § 32-5A-191). Consequences include: minimum 5-year license revocation, up to 10 years in prison, up to $10,100 in fines, mandatory ignition interlock device upon reinstatement, and Habitual Offender designation. The felony level conviction results in a permanent criminal record, loss of certain civil rights, and significant employment consequences. Alabama takes this escalation seriously — a third DUI means an end to standard driving privileges and major restrictions on future license eligibility.",
    },
    {
      question: "Alabama's graduated licensing system issues learner's permits at age 16. What supervision requirement applies to permit holders?",
      options: [
        "Permit holders may drive unsupervised after completing 10 hours of supervised driving",
        "Permit holders must always be accompanied by a licensed driver 21 or older who is seated in the front passenger seat",
        "Alabama permits holders aged 16 may drive unsupervised during daylight hours only",
        "The supervising driver must be a parent or legal guardian — no other adults can supervise",
      ],
      correctIndex: 1,
      explanation:
        "Alabama learner's permit holders must be supervised at all times by a licensed driver who is at least 21 years old and seated in the front passenger seat. Unlike some states that allow older teenagers or any licensed adult to supervise, Alabama sets the age at 21. The supervising driver does not need to be a parent — any licensed adult 21 or older qualifies. Alabama requires permit holders to accumulate at least 30 hours of supervised driving (including 10 hours at night) before applying for the restricted license, though this is a practical guideline reinforced by licensing timelines rather than a separately verified state mandate.",
    },
    {
      question: "Alabama's Move Over law requires drivers approaching a stopped emergency vehicle, utility vehicle, or tow truck with activated lights to:",
      options: [
        "Stop completely until the vehicle's lights are turned off",
        "Slow to 15 mph and continue without changing lanes",
        "Move over one lane away from the stopped vehicle, OR reduce speed by at least 15 mph below the posted speed limit if a lane change is not safely possible",
        "Flash their headlights and honk to alert the stopped vehicle's operator before passing",
      ],
      correctIndex: 2,
      explanation:
        "Alabama's Move Over Law (Code of Ala. 1975 § 32-5A-58.2) requires drivers to move over one lane away from stopped emergency vehicles, law enforcement vehicles, utility service vehicles, and tow trucks with activated warning lights when safely possible. If a lane change cannot be made safely, drivers must reduce speed to at least 15 mph below the posted speed limit. Alabama's law is notable for its explicit 15 mph below posted limit requirement — many states simply say 'reasonable speed.' Violations are a Class A traffic infraction. If injury or death results from a Move Over violation, criminal charges may apply.",
    },
    {
      question: "Alabama requires new drivers to carry which type of financial responsibility documentation in their vehicle?",
      options: [
        "Alabama does not require proof of insurance to be carried in the vehicle — it only needs to be on file with ALEA",
        "Proof of liability insurance meeting Alabama's minimum coverage requirements",
        "A cash bond of $25,000 or a surety bond from an approved Alabama insurer",
        "Alabama's e-VERIFY code from the DMV's online system — no physical insurance card is required",
      ],
      correctIndex: 1,
      explanation:
        "Alabama requires all drivers to carry proof of liability insurance in their vehicle and present it upon request by law enforcement. Alabama's minimum required liability coverage: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage (25/50/25). Driving without proof of insurance is a violation — ALEA cross-references vehicle registration with insurance databases, and uninsured vehicles may be flagged during registration renewal. Alabama participates in the Insurance Verification System (IVS), which allows law enforcement to check insurance status electronically, but physical proof is still legally required to be present in the vehicle.",
    },
    {
      question: "What does Alabama law require of a driver who is involved in an accident resulting in injury or death?",
      options: [
        "The driver must remain at the scene, provide assistance, and notify law enforcement as soon as possible",
        "The driver must immediately drive the vehicle to the nearest hospital — leaving the scene is not a crime if medical emergency exists",
        "The driver only needs to leave insurance information on the other vehicle if the other driver is not present",
        "Alabama requires reporting only if the damage exceeds $1,000 — minor injury accidents are the drivers' private matter",
      ],
      correctIndex: 0,
      explanation:
        "Alabama law (Code of Ala. 1975 § 32-10-1) requires any driver involved in an accident resulting in injury, death, or significant property damage to: (1) immediately stop at or near the scene; (2) render reasonable assistance to injured persons (including calling for medical help); (3) provide name, address, vehicle registration, and insurance information to the other involved parties and law enforcement; (4) notify local police or the county sheriff. Leaving the scene of an accident with injury or death (hit and run) is a Class C felony in Alabama. Even if the driver did not cause the accident, the duty to stop, identify, and render aid applies.",
    },
    {
      question: "Alabama law sets the speed limit on interstate highways through urban areas at what maximum?",
      options: [
        "55 mph through all Alabama urban areas regardless of posted signs",
        "65 mph as the maximum for any Alabama urban interstate section",
        "The posted speed limit controls — Alabama urban interstates vary and may be up to 65 mph in some sections",
        "Alabama sets no specific urban interstate speed limit — it is determined by county ordinance",
      ],
      correctIndex: 2,
      explanation:
        "Alabama's urban interstate speed limits are determined by the Alabama Department of Transportation (ALDOT) based on traffic studies and safety analysis, and posted signs control. Alabama's rural interstate highways are typically posted at 70 mph; urban sections through cities such as Birmingham, Montgomery, Mobile, and Huntsville are often posted at 55–65 mph. Alabama law requires drivers to obey posted speed limit signs regardless of the state's default rules. The posted limit is the legal maximum under favorable conditions — Alabama's basic speed rule also requires reducing speed when conditions (weather, traffic, visibility) demand it even if below the posted limit.",
    },
  ],
  faqs: [
    {
      question: "What is the Alabama Law Enforcement Agency (ALEA) and why does Alabama use it for driver licensing instead of a DMV?",
      answer:
        "The Alabama Law Enforcement Agency (ALEA) was created in 2015 by consolidating multiple Alabama law enforcement and public safety agencies under one umbrella. Driver licensing, which was previously under the Alabama Department of Public Safety, was brought under ALEA because licensing is closely tied to law enforcement functions: license suspension for DUI, traffic enforcement, commercial vehicle compliance, and identity verification. ALEA's Driver License Division (alea.gov/driver-license) handles all licensing functions. There is no separate 'Alabama DMV' — ALEA driver license examining offices are the equivalent.",
    },
    {
      question: "What are the exact penalties for a first DUI conviction in Alabama?",
      answer:
        "First-offense DUI in Alabama (BAC ≥ 0.08%): up to 1 year in jail (minimum 24 hours if BAC ≥ 0.15%), $600–$2,100 fine plus court costs, 90-day license suspension, mandatory completion of the Alabama DUI school (ADECA program), and possible ignition interlock device (IID) requirement. If the BAC is 0.15% or higher, or if a minor was in the vehicle, penalties escalate including mandatory minimum jail time. DUI school completion is non-negotiable — reinstatement requires documentary proof of completion regardless of other conditions being met.",
    },
    {
      question: "Is Alabama's Hands-Free Act (2024) primary or secondary enforcement?",
      answer:
        "Alabama's Hands-Free Act (Act 2023-382, effective January 1, 2024) is primary enforcement — law enforcement can stop and cite a driver solely for violating the hands-free law, without needing another traffic violation as a basis. Fines: $50 first offense, $100 second offense, $150 for third and subsequent violations. The law applies to all drivers of all ages. Hands-free Bluetooth, dashboard-mounted navigation, and vehicle integrated systems are all permitted. Manual interaction with a held device is what's prohibited — holding the phone in your hand while touching the screen or speaking into it.",
    },
    {
      question: "What happens if a minor under 21 is found driving with a BAC above 0.02% in Alabama?",
      answer:
        "Alabama's DUI law for drivers under 21 sets a BAC threshold of 0.02% — effectively creating a near-zero-tolerance standard. A reading of 0.02%–0.079% results in: 30-day license suspension (first offense), mandatory DUI school, and possible additional conditions. If the BAC is 0.08% or higher, the driver is charged under the standard DUI statute, not the underage provision — the full adult DUI penalties apply including the 90-day suspension. Multiple DUI convictions as a minor carry forward into adulthood and count toward the Habitual Offender threshold.",
    },
    {
      question: "What documents does Alabama ALEA require to obtain a learner's permit?",
      answer:
        "Alabama uses a REAL ID documentation system. Required documents: (1) proof of identity — a certified birth certificate (not a photocopy) or U.S. passport; (2) proof of Social Security Number; (3) two proofs of Alabama residency (utility bills, bank statements, school records within 90 days); (4) parental or guardian consent form if under 18; (5) proof of legal presence for non-citizens. All documents must be originals or certified copies. Alabama ALEA offices can verify documents digitally at the point of service at many locations. Visit alea.gov for current documentation requirements.",
    },
    {
      question: "What is Alabama's Habitual Offender designation and how does it affect driving privileges?",
      answer:
        "Alabama's Habitual Offender law (Code of Ala. 1975 § 32-5A-195) provides for license revocation for drivers who accumulate a certain number of serious convictions within 5 years. Three major violations (DUI, reckless driving causing injury, leaving the scene) within 5 years triggers Habitual Offender revocation of at least 5 years. Three DUI convictions in 10 years results in a Class C felony. The Habitual Offender designation typically requires a reinstatement hearing with ALEA and may require proof of treatment completion, IID installation, and SR-22 insurance for extended periods after reinstatement.",
    },
    {
      question: "Does Alabama require a road skills test for all new license applicants?",
      answer:
        "Yes. After passing the knowledge test and holding a learner's permit for the required period, applicants must pass a road skills test administered by an ALEA examiner. The road skills test evaluates: vehicle control, lane changing, turning, parking (parallel and angle), observing traffic signs and signals, and overall safety behaviors. The test is conducted in the applicant's own vehicle, which must be properly registered and insured. Applicants under 18 must complete at least 30 hours of supervised driving (including 10 hours at night) before taking the road test, per Alabama law.",
    },
    {
      question: "What are Alabama's minimum auto insurance requirements?",
      answer:
        "Alabama requires minimum liability coverage of 25/50/25: $25,000 bodily injury per person, $50,000 bodily injury per accident, and $25,000 property damage per accident. Proof of insurance must be carried in the vehicle and presented to law enforcement upon request. Alabama participates in the Insurance Verification System (IVS), which allows real-time insurance status checks. Driving without insurance is a traffic violation with fines and potential license suspension. Alabama does not require uninsured/underinsured motorist coverage, though it is highly recommended given the financial risk of being struck by an uninsured driver.",
    },
    {
      question: "How does Alabama handle traffic violations from other states on an Alabama driving record?",
      answer:
        "Alabama participates in the Driver License Compact (DLC) and the Non-Resident Violator Compact. Out-of-state traffic convictions are reported to Alabama ALEA and added to the Alabama driving record. Alabama assigns its own point values — the equivalent Alabama violation points apply, not the other state's points. DUI convictions from other states count toward Alabama's DUI escalation thresholds (second offense, felony third, Habitual Offender). Alabama ALEA also tracks out-of-state license suspensions through the DLC — a driver suspended in another state may face Alabama license action as well.",
    },
    {
      question: "What is Alabama's 'Points System' for traffic violations?",
      answer:
        "Alabama's point system (Code of Ala. 1975 § 32-5A-195) assigns demerit points for moving violations. Examples: speeding 1–25 mph over = 2 points; speeding 26+ mph over = 5 points; reckless driving = 6 points; DUI = 6 points (in addition to criminal penalties). Accumulating 12–14 points in 2 years = 60-day suspension; 15–17 points = 90 days; 18–20 points = 120 days; 21–23 points = 180 days; 24+ points = 1-year suspension. A driver may avoid suspension by completing a defensive driving course (once every 3 years to remove 3 points). Points remain on record for 2 years from the conviction date.",
    },
  ],
  relatedTests: [
    { label: "AL Motorcycle Test", href: "/alabama-motorcycle-practice-test" },
    { label: "AL CDL Test", href: "/alabama-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function AlabamaDMVPage() {
  return <PracticeTestPage {...data} />;
}
