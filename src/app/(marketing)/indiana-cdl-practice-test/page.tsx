import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Indiana CDL Practice Test 2025 – Free IN BMV Commercial License Exam Prep",
  description:
    "Free Indiana CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Indiana BMV CDL testing, HTV law disqualifies CDL employment, HEA 1070 + FMCSA hands-free penalty, and I-65/I-70 freight corridor.",
  alternates: { canonical: "https://caredmvprep.com/indiana-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/indiana-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Indiana",
  stateAbbr: "IN",
  testLabel: "CDL General Knowledge Test",
  slug: "indiana-cdl-practice-test",
  headline: "Indiana CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Indiana CDL General Knowledge exam with practice questions based on the FMCSA Commercial Driver's License Manual and the Indiana BMV CDL Manual. The Indiana Bureau of Motor Vehicles (BMV) administers CDL testing. Indiana's Habitual Traffic Violator (HTV) law can permanently disqualify individuals from CDL-based employment even without a federal CDL disqualification. HEA 1070 (hands-free) applies to CDL operators with additional FMCSA penalties.",
  basedOn: "FMCSA CDL Manual & Indiana BMV CDL Manual",
  about: [
    "Indiana CDL testing is administered by the Bureau of Motor Vehicles (BMV). CDL General Knowledge tests consist of 50 questions requiring 80% (40/50) to pass. The BMV administers CDL knowledge tests at BMV branches statewide and at approved Third Party Testing (TPT) sites. Indiana CDL skills tests are administered at TPT locations. Indiana issues CDL Class A, B, and C licenses along with endorsements (H, N, P, S, T, X).",
    "Indiana-specific CDL factors: (1) The Habitual Traffic Violator (HTV) law (IC 9-30-10) designates drivers with 10 major violations in 10 years as Habitual Traffic Violators, subject to lifetime license suspension. HTV status is a CDL employment disqualifier because CDL carriers' insurance carriers and safety ratings will not cover HTV-designated drivers — even if the federal CDL itself has not been suspended by FMCSA. (2) HEA 1070 (hands-free law, July 1, 2020) applies to CDL operators; however, CDL operators face an additional federal FMCSA penalty up to $2,750 per handheld device violation while operating a CMV. (3) Indiana's 0.04% BAC CDL standard applies — a DUI in any vehicle results in CDL disqualification. (4) Indiana's I-65, I-70, I-74, I-80/90 corridors make it a major interstate freight hub — knowledge of weight limits, oversize permit requirements (Indiana Department of Transportation INDOT), and construction zone compliance is essential.",
  ],
  sampleQuestions: [
    {
      question: "Indiana's Habitual Traffic Violator (HTV) law designates a driver with 10 major violations in 10 years. Why is HTV status relevant to CDL employment even if the FMCSA has not separately disqualified the driver?",
      options: [
        "HTV status automatically triggers FMCSA CDL disqualification by federal law",
        "Indiana BMV reports all HTV designations to FMCSA within 30 days",
        "HTV-designated drivers are uninsurable under commercial fleet policies — most CDL employers cannot hire HTV drivers even if their CDL is technically valid",
        "HTV status is only relevant to motorcycle operators in Indiana — CDL holders are excluded from the HTV designation",
      ],
      correctIndex: 2,
      explanation:
        "Indiana's HTV designation (IC 9-30-10) creates a practical CDL employment barrier beyond the FMCSA disqualification system. Commercial vehicle insurance carriers typically exclude HTV-designated drivers from fleet coverage. A CDL carrier without insurance coverage for a specific driver cannot legally put that driver in a CMV. Additionally, safety-sensitive employer background checks routinely identify HTV status through motor vehicle record (MVR) checks. A driver with a technically valid CDL but HTV status will find CDL employment extremely difficult in Indiana. The pathway out of HTV status requires petition to the court after the suspension period.",
    },
    {
      question: "Indiana CDL operators face FMCSA penalty for handheld device use in a CMV under HEA 1070 plus federal regulations. What is the maximum FMCSA penalty per violation?",
      options: [
        "$500 — the same as Indiana's standard HEA 1070 fine",
        "$1,000",
        "$2,750 per violation for the driver, and up to $11,000 for the carrier if they allowed or required the behavior",
        "CDL operators are exempt from phone penalties if the CMV is equipped with a Bluetooth system",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA regulations (49 CFR 392.82) prohibit CDL drivers from using handheld mobile devices in a CMV. The federal maximum penalty is $2,750 per violation for the driver. If the carrier required or allowed the behavior, the carrier faces a maximum penalty of $11,000. Indiana's HEA 1070 fine applies separately as a state traffic violation. CDL holders who accumulate two handheld device violations within 3 years are disqualified from CDL driving for 60 days. Hands-free communication, voice-activated devices, and earpieces that require only one button press to answer are permitted.",
    },
    {
      question: "An Indiana CDL driver on I-70 encounters a construction zone with reduced lanes. Federal regulations require what following distance at highway speed in a construction zone?",
      options: [
        "1 second for every 10 feet of vehicle length — the standard CDL following distance rule applies",
        "50 feet minimum following distance regardless of speed",
        "The standard CDL following distance rule (1 second per 10 feet of vehicle length + 1 second for speeds above 40 mph) applies, but construction zones warrant additional following distance due to reduced sight distance and erratic traffic merging",
        "Construction zones have no specific FMCSA following distance requirement — use judgment",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA's CDL following distance rule: 1 second for every 10 feet of vehicle length for speeds below 40 mph; add 1 additional second for speeds above 40 mph. A 60-foot tractor-trailer at highway speed needs at least 7 seconds of following distance. Indiana construction zones on I-70 and I-65 frequently have: sudden lane reductions with short merge distances; variable speed limits that change within the zone; concrete barriers that reduce escape options; and end-of-queue conditions where traffic stops suddenly. Additional following distance beyond the minimum is strongly advised. Indiana construction zone fines are doubled, and CDL violations in construction zones are recorded on the CDL record.",
    },
    {
      question: "Under FMCSA regulations, what blood alcohol concentration (BAC) results in an Indiana CDL driver being placed out of service (OOS) while operating a CMV?",
      options: [
        "0.08% — same as Indiana's standard DUI limit",
        "0.04% — the federal CDL BAC limit for CMV operation",
        "0.10% — Indiana's pre-2001 standard DUI threshold",
        "Any detectable amount — 0.00% tolerance applies to all CDL operators",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA regulations (49 CFR 392.5) set the CDL BAC out-of-service limit at 0.04% for CMV operation — half the standard Indiana DUI limit of 0.08%. A CDL driver found at or above 0.04% BAC in a CMV is placed out of service for 24 hours minimum. A DUI conviction in any vehicle (whether a CMV or personal car) results in: 1-year CDL disqualification for a first offense; lifetime disqualification for a second. Indiana BMV reports all DUI convictions to FMCSA's CDL information system within 10 days.",
    },
    {
      question: "Indiana's I-80/I-90 Toll Road (Indiana East-West Toll Road) operates under what weight restrictions for commercial vehicles?",
      options: [
        "Indiana's Toll Road has no independent weight restrictions — it uses FMCSA limits only",
        "The standard Indiana legal weight limits apply (80,000 lbs gross combined), with overweight permits available from INDOT",
        "The Toll Road has a blanket 60,000 lb limit — all commercial vehicles over 60,000 lbs must use I-80 through northern Ohio instead",
        "Indiana Toll Road weight limits are set by the private concessionaire (IEW) independently of INDOT",
      ],
      correctIndex: 1,
      explanation:
        "Indiana's Toll Road (I-80/I-90) uses standard Indiana weight limits: 80,000 lbs gross combined weight on standard 5-axle combinations. Overweight permits for loads exceeding 80,000 lbs are issued by INDOT (not by the Toll Road operator). Indiana's Toll Road operator (Indiana-Michigan Power/IEW Transportation Group) enforces INDOT weight restrictions. CDL drivers operating on the I-80/90 corridor should also be aware of seasonal spring weight restrictions (typically in effect February–April), which reduce axle weight limits to prevent damage to frost-thawed road beds on Indiana roads including portions of the Toll Road area.",
    },
    {
      question: "A CDL driver's pre-trip inspection in Indiana reveals that one of the trailer's rear mud flaps is cracked but still in place. Is this an out-of-service condition?",
      options: [
        "Yes — any damaged mud flap is an automatic out-of-service condition",
        "No — mud flaps are not a safety-critical component. Drive the vehicle but note the defect on the DVIR for repair",
        "Only if the mud flap is completely detached — cracked mud flaps do not affect safe operation",
        "Only if the mud flap is missing entirely — partial damage is not a DVIR-reportable defect",
      ],
      correctIndex: 1,
      explanation:
        "A cracked but functional mud flap is not an out-of-service condition. It is, however, a defect that must be noted on the Driver Vehicle Inspection Report (DVIR) so it can be repaired. Federal OOS conditions under 49 CFR 396.9 and the North American Standard OOS Criteria cover structural defects that directly affect safety: brake performance, steering, lighting, tires, fuel system integrity, coupling security, and load securement. A cracked mud flap does not impair braking, steering, or any safety-critical function. Note it on the DVIR, operate the vehicle, and have it repaired at the next opportunity.",
    },
    {
      question: "Under FMCSA hours-of-service rules, how many hours may a property-carrying driver drive after 10 consecutive hours off duty?",
      options: ["8 hours", "10 hours", "11 hours", "14 hours"],
      correctIndex: 2,
      explanation:
        "Property-carrying drivers may drive a maximum of 11 hours after taking 10 consecutive hours off duty. This is the 11-Hour Driving Limit. You must stop driving at the earlier of: after 11 hours of driving, or after the 14th hour since coming on duty.",
    },
    {
      question: "At 55 mph, how much distance does a fully loaded 80,000-lb tractor-trailer need to stop compared to a car?",
      options: ["About the same", "About 25% more", "Nearly twice as much", "Three to four times as much"],
      correctIndex: 2,
      explanation:
        "A fully loaded tractor-trailer traveling at 55 mph needs approximately 400 feet to stop — nearly twice the stopping distance of a passenger car at the same speed. Wet roads, worn brakes, or improper brake adjustment can dramatically increase this distance. Always maintain a large following distance.",
    },
    {
      question: "When must a vehicle display hazardous materials placards?",
      options: ["Only when carrying more than 1,000 lbs of hazmat", "Whenever any amount of a placard-required material is being transported", "Only on interstate highways", "Only when the material is in liquid form"],
      correctIndex: 1,
      explanation:
        "Hazardous materials placards must be displayed whenever you are transporting any quantity of a material that requires placarding under 49 CFR Part 172. There is no minimum weight threshold for placards — even small amounts of certain hazmat categories require placarding.",
    },
    {
      question: "Before backing under a trailer to couple, you should check that the trailer kingpin is:",
      options: ["Greased and at a 45-degree angle", "Straight and at the correct height for the fifth wheel", "Retracted into the trailer frame", "Centered over the rear axle"],
      correctIndex: 1,
      explanation:
        "Before coupling, ensure the trailer kingpin is straight (not bent or damaged) and that the trailer is at the correct height — low enough that the fifth wheel will contact the trailer plate and ride under the kingpin, but not so low that the tractor frame hits the trailer. Always check the kingpin and fifth wheel visually before coupling.",
    },
  ],
  faqs: [
    {
      question: "How many questions are on the Indiana CDL General Knowledge test?",
      answer:
        "The Indiana CDL General Knowledge test has 50 questions. You need 40 correct (80%) to pass. The BMV also offers endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), and Air Brakes (25 questions). Each endorsement test has its own 80% passing requirement.",
    },
    {
      question: "What is Indiana's CDL DUI standard?",
      answer:
        "Indiana CDL holders in a commercial motor vehicle face the federal 0.04% BAC limit. Indiana's standard DUI threshold is 0.08%, but CDL holders in a CMV are out-of-service at 0.04%. A DUI conviction in any vehicle — a CMV or personal vehicle — triggers FMCSA CDL disqualification: 1 year for first offense, lifetime for second. Indiana BMV reports all DUI convictions to the national CDL database within 10 days.",
    },
    {
      question: "Where can Indiana CDL applicants take skills tests?",
      answer:
        "Indiana CDL skills tests (pre-trip inspection, basic vehicle control, on-road driving) are administered at BMV-approved Third Party Testing (TPT) sites. TPT sites must use FMCSA-standardized test routes and scoring criteria. Knowledge tests can be taken at most BMV branches. Indiana has TPT sites in Indianapolis, Fort Wayne, South Bend, Evansville, and other major cities.",
    },
    {
      question: "How does Indiana's HTV law affect CDL employment prospects?",
      answer:
        "Indiana's Habitual Traffic Violator designation (10 major violations in 10 years) creates serious CDL employment barriers. Most commercial insurance carriers exclude HTV-designated drivers from fleet coverage — making them uninsurable in a CMV. Even if the FMCSA has not separately disqualified the driver, HTV status appears on motor vehicle record (MVR) checks and disqualifies the driver from most CDL jobs. The only path out of HTV status is a successful petition to the court after serving the suspension period.",
    },
    {
      question: "What oversize permit requirements apply to Indiana CDL drivers?",
      answer:
        "Indiana oversize/overweight (OS/OW) permits are issued by INDOT. Standard legal dimensions: 8.5 feet wide, 13.5 feet tall, 53 feet long (trailer), 80,000 lbs GCVW. Loads exceeding these require INDOT permits. Indiana's I-70/I-65/I-74 freight corridors have specific curfews for wide loads during peak traffic hours. Some Indiana bridge weight postings are below federal legal limits — CDL drivers must know the weight capacity of bridges on their planned route.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Indiana?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Indiana?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Indiana DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Indiana CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Indiana DMV for available language options.",
    },
    {
      question: "How long is a Indiana CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Indiana CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Indiana CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Indiana, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "IN Driver's License", href: "/indiana-dmv-practice-test" },
    { label: "IN Motorcycle Test", href: "/indiana-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function IndianaCDLPage() {
  return <PracticeTestPage {...data} />;
}
