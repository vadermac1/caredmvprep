import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Maryland CDL Practice Test 2025 – Free MD MVA Commercial License Exam Prep",
  description:
    "Free Maryland CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your MD Motor Vehicle Administration CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/maryland-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/maryland-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Maryland",
  stateAbbr: "MD",
  testLabel: "CDL General Knowledge Test",
  slug: "maryland-cdl-practice-test",
  headline: "Maryland CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Maryland CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Maryland CDL Manual. All MD Motor Vehicle Administration (MVA) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Maryland CDL Manual",
  about: [
    "The Maryland Motor Vehicle Administration (MVA) administers CDL testing at full-service MVA offices and approved third-party testing sites throughout Maryland. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Maryland CDL Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all Maryland CDL applicants regardless of vehicle class or endorsements.",
    "Maryland-specific CDL considerations include: Maryland's two-tier DUI/DWI law applies to CDL holders in a CMV at the federal 0.04% BAC threshold — Maryland's DWI (0.07%) and DUI (0.08%) are the personal vehicle standards, but CDL holders in a CMV face the stricter federal 0.04% threshold. A DUI or DWI conviction in any vehicle triggers CDL disqualification under both FMCSA regulations and Maryland law. Maryland's handheld device ban applies to CDL operators — commercial drivers also face federal FMCSA penalties up to $2,750 per violation. Maryland's Chesapeake Bay area and I-95 corridor create significant CDL routing considerations.",
    "Maryland is a major freight corridor state — I-95, I-70, I-270, and the Baltimore Beltway (I-695) are major commercial trucking routes. CDL drivers must be aware of Maryland's I-95 Fort McHenry Tunnel and the Baltimore Harbor Tunnel, which have specific restrictions on hazardous material loads. The Chesapeake Bay Bridge (US 50) also has CDL vehicle restrictions during high winds. After passing General Knowledge, Maryland CDL applicants must pass endorsement tests and skills tests at MVA-approved sites. Maryland CDLs are valid for 8 years.",
  ],
  sampleQuestions: [
    { question: "Maryland CDL holders operating a commercial motor vehicle face what BAC limit?", options: ["0.08% — Maryland's standard DUI limit", "0.07% — Maryland's DWI limit", "0.04% — the federal CDL threshold in a CMV", "0.00% — no alcohol permitted while holding a CDL in Maryland"], correctIndex: 2, explanation: "Maryland CDL holders in a commercial motor vehicle are subject to the federal 0.04% BAC limit — not Maryland's standard DUI threshold (0.08%) or DWI threshold (0.07%). The federal 0.04% in-CMV limit is stricter than both Maryland thresholds. A DUI or DWI conviction in any vehicle (even a personal car) triggers CDL disqualification: 1 year for a first offense, lifetime for a second, under both FMCSA regulations and Maryland law." },
    { question: "Maryland's I-95 Fort McHenry Tunnel and the Baltimore Harbor Tunnel have specific restrictions for:", options: ["All commercial vehicles over 10,000 lbs GVWR", "Vehicles transporting certain hazardous materials — some HazMat loads are prohibited in these tunnels", "Only Class A CDL vehicles — Class B trucks can use both tunnels without restriction", "Tunnel restrictions apply only during peak traffic hours"], correctIndex: 1, explanation: "Maryland's Fort McHenry Tunnel (I-95) and Baltimore Harbor Tunnel (US 1) have specific restrictions on hazardous material loads — particularly Placards 1 (explosives), 1.1, 1.2, and certain other HazMat categories that are prohibited in the tunnels. CDL HazMat drivers routing through Baltimore must know their material's placard class and check current Maryland DOT tunnel restrictions. The Baltimore Beltway (I-695) or the Chesapeake Bay Bridge may be required alternates for prohibited loads." },
    { question: "Under Maryland's two-tier impaired driving system, which charge adds 12 points to a driver's record?", options: ["DWI (Driving While Impaired) at 0.07% BAC — the lesser charge", "DUI (Driving Under the Influence) at 0.08%+ BAC — the more serious charge", "Both DUI and DWI add 12 points equally in Maryland", "Neither — Maryland CDL convictions are only reported to FMCSA, not the state driving record"], correctIndex: 1, explanation: "Maryland's DUI (Driving Under the Influence) conviction at 0.08%+ BAC adds 12 points to the driver's record — which by itself triggers automatic revocation (12 points = revocation). Maryland's DWI (Driving While Impaired) at 0.07% adds 6 points — serious, but not automatic revocation on its own. For CDL holders, either conviction in any vehicle triggers FMCSA CDL disqualification regardless of the point count." },
    { question: "The Chesapeake Bay Bridge (US 50) has special CDL vehicle considerations because:", options: ["CDL vehicles over 10 feet wide are prohibited from the Bay Bridge at all times", "High crosswinds on the Bay Bridge can affect commercial vehicle stability — MDTA has a weather-call service for CDL drivers needing assistance crossing", "CDL vehicles must cross the Bay Bridge on the lower deck only", "The Bay Bridge weight limit of 26,001 lbs prohibits most Class A trucks from crossing"], correctIndex: 1, explanation: "The Chesapeake Bay Bridge (US 50/301) is susceptible to strong crosswinds that can affect commercial vehicle stability — particularly box trailers and tankers with high wind resistance profiles. MDTA Police operates a weather-call service where CDL drivers can request an escort vehicle when crossing in severe wind conditions. CDL drivers with high-profile loads should monitor MDTA wind advisories at mdta.maryland.gov and contact MDTA Police if needed." },
    { question: "What is the FMCSA cargo securement standard for a load that can shift sideways?", options: ["Any single tie-down with a working load limit of over 5,000 lbs is sufficient", "Cargo must be secured with a minimum of 2 tie-downs with a combined working load limit of at least half the cargo weight, plus blocking or bracing for sideways movement", "Sideways securement is not required by federal law — only forward and backward securement", "The driver is only responsible for vertical securement — the shipper is responsible for sideways"], correctIndex: 1, explanation: "FMCSA cargo securement (49 CFR Part 393) requires that cargo be prevented from moving in all directions: forward, rearward, lateral (sideways), and vertical. Sideways movement prevention typically requires blocking, bracing, or transverse tie-downs. The minimum number of tie-downs depends on cargo length and weight — cargo under 5 feet long and under 1,100 lbs needs 1 tie-down; longer/heavier cargo needs 2 or more. The total working load limit of all tie-downs must be at least half the cargo's weight." },
    { question: "Under FMCSA regulations, how often must cargo securement be checked during a Maryland trip?", options: ["Only at the beginning of the trip — re-checking is not required", "Within 50 miles of departure, then every 3 hours or 150 miles, and after every change in duty status", "Every 30 minutes — Maryland has a stricter cargo check requirement than federal standards", "Only when the driver gets a new load at a distribution center"], correctIndex: 1, explanation: "FMCSA cargo securement check intervals (49 CFR 392.9): (1) before departure (pre-trip); (2) after the first 50 miles; (3) after every duty status change; (4) every 3 hours or 150 miles thereafter — whichever comes first. Maryland's I-95 and I-70 have frequent construction zones and traffic stops where cargo can shift from abrupt braking. Regular cargo checks catch shifted loads before they become dangerous. Unsecured cargo is a primary cause of fatal accidents on Maryland highways." },
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
    { question: "How many questions are on the Maryland CDL General Knowledge test?", answer: "The Maryland CDL test has 50 questions. You must answer at least 40 correctly — 80% — to pass. The MVA (Motor Vehicle Administration) administers CDL testing at full-service MVA offices and approved third-party sites throughout Maryland." },
    { question: "How does Maryland's DUI/DWI system apply to CDL holders?", answer: "Maryland's two-tier system: DUI at 0.08%+ and DWI at 0.07% apply to personal vehicle driving. CDL holders in a commercial motor vehicle face the stricter federal 0.04% threshold. Either a DUI or DWI conviction in any vehicle triggers FMCSA CDL disqualification: 1 year for a first offense, lifetime for a second. The 12 points from a DUI conviction also triggers immediate Maryland license revocation." },
    { question: "Are there HazMat restrictions on Maryland tunnels for CDL drivers?", answer: "Yes. Maryland's Fort McHenry Tunnel (I-95) and Baltimore Harbor Tunnel (US 1) prohibit certain hazardous material loads including some explosives and other high-risk materials. CDL HazMat drivers must verify their load's placard classification against current Maryland DOT tunnel restrictions before routing through Baltimore. Prohibited HazMat loads must use alternate routes such as the I-695 Beltway or Chesapeake Bay Bridge." },
    { question: "How long is a Maryland CDL valid?", answer: "A Maryland CDL is valid for 8 years for drivers ages 21–64. Your DOT medical certificate must remain current. HazMat endorsements require TSA security clearance renewal every 5 years. Maryland CDL holders must self-certify their medical status category annually at the MVA." },
    { question: "What is Maryland's CDL skills test process?", answer: "Maryland CDL skills tests are conducted at MVA-approved third-party testing sites. You must provide the appropriate commercial vehicle for the class being tested. The test includes pre-trip inspection, basic vehicle control (backing maneuvers), and an on-road driving test. Contact the Maryland MVA at mva.maryland.gov for a list of approved CDL skills testing locations." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Maryland?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Maryland?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Maryland DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Maryland CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Maryland DMV for available language options.",
    },
    {
      question: "How long is a Maryland CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Maryland CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Maryland CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Maryland, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "MD Driver's License", href: "/maryland-dmv-practice-test" },
    { label: "MD Motorcycle Test", href: "/maryland-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Hazmat", href: "/cdl-hazmat" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MarylandCDLPage() {
  return <PracticeTestPage {...data} />;
}
