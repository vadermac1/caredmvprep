import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Missouri CDL Practice Test 2025 – Free MO DOR Commercial License Exam Prep",
  description:
    "Free Missouri CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Missouri DOR (unique) handles CDL licensing, DWI 0.04% in CMV, SB 398 + FMCSA penalties, and flood route closures affecting CDL freight.",
  alternates: { canonical: "https://caredmvprep.com/missouri-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/missouri-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Missouri",
  stateAbbr: "MO",
  testLabel: "CDL General Knowledge Test",
  slug: "missouri-cdl-practice-test",
  headline: "Missouri CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Missouri CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the Missouri CDL Manual. Missouri's Department of Revenue (DOR) — the only state where the DOR handles driver licensing — administers CDL testing. Missouri uses DWI (not DUI) terminology, and the 0.04% CDL standard applies in a CMV. SB 398 (hands-free) applies to CDL operators with additional FMCSA penalties.",
  basedOn: "FMCSA CDL Manual & Missouri DOR CDL Manual",
  about: [
    "Missouri CDL testing is administered by the Department of Revenue (DOR) — the only state in the U.S. where the Department of Revenue handles driver licensing rather than a traditional DMV, Motor Vehicle Division, or Bureau of Motor Vehicles. Missouri issues CDL knowledge tests at DOR driver license offices and approved Third Party Testers (TPT) statewide. The General Knowledge test is 50 questions requiring 80% (40/50) to pass. Missouri CDL skills tests are administered at TPT locations.",
    "Missouri-specific CDL factors: (1) Missouri uses DWI (Driving While Intoxicated) rather than DUI. The CDL DWI limit is 0.04% BAC in a commercial motor vehicle — a DWI conviction in any vehicle triggers CDL disqualification per FMCSA. (2) SB 398 (hands-free law, August 28, 2023) applies to CDL operators — federal FMCSA penalties up to $2,750 per violation apply in addition to Missouri's state fine. (3) Missouri's 'Turn Around Don't Drown' law (RSMo 304.022) makes it illegal to drive into a flooded road or low-water crossing that is barricaded. CDL drivers operating routes through Missouri's Ozark region must be especially aware: flash floods close low-water crossings used by freight vehicles on county and state routes. (4) Missouri's personal property tax — vehicles, including commercial trailers, are subject to personal property tax assessed annually in Missouri counties. CDL operators based in Missouri should ensure their carrier's trailers are properly registered for Missouri personal property tax assessment.",
  ],
  sampleQuestions: [
    {
      question: "Missouri uses 'DWI' (Driving While Intoxicated) rather than 'DUI.' The federal CDL DWI limit in a commercial motor vehicle in Missouri is:",
      options: [
        "0.08% — Missouri's standard impairment threshold",
        "0.04% — the FMCSA federal CDL BAC limit",
        "0.10% — Missouri's traditional DWI threshold from its older statutes",
        "0.02% — Missouri applies a near-zero standard for CDL holders",
      ],
      correctIndex: 1,
      explanation:
        "Missouri uses 'DWI' (Driving While Intoxicated) instead of 'DUI,' but the substance of the law aligns with federal FMCSA standards. The CDL DWI limit in a commercial motor vehicle is 0.04% BAC — the federal minimum set by FMCSA (49 CFR 392.5). Missouri's standard DWI threshold of 0.08% (RSMo 577.010) does not apply to CDL holders in a CMV — the 0.04% federal limit governs. A DWI conviction in any vehicle results in: 1-year CDL disqualification for first offense, lifetime for second. Missouri DOR reports all DWI convictions to the FMCSA CDL information system within the required 10-day window.",
    },
    {
      question: "Missouri's 'Turn Around Don't Drown' law (RSMo 304.022) prohibits driving through barricaded flood crossings. What is the specific application for CDL drivers in Missouri's Ozark region?",
      options: [
        "CDL vehicles over 26,000 lbs GVWR are exempt from the barricade requirement — commercial vehicles may proceed if the driver judges it safe",
        "CDL drivers who drive through a barricaded flood crossing in Missouri face a criminal misdemeanor and civil liability for emergency response costs, in addition to FMCSA potential violations",
        "The law only applies to county roads — state routes and federal highways may be driven through floods if the CDL driver determines it safe",
        "CDL drivers must contact the Missouri State Highway Patrol for clearance before driving through any flooded crossing, barricaded or not",
      ],
      correctIndex: 1,
      explanation:
        "Missouri's RSMo 304.022 makes it illegal to drive past a barricade at a flooded road or low-water crossing. For CDL drivers, the consequences are compounded: (1) the misdemeanor criminal charge for violating the barricade; (2) civil liability for emergency response costs if the driver requires rescue; (3) FMCSA review of the incident as a potential reckless driving / serious traffic violation. In the Ozark region, flash flooding can close low-water crossings used by delivery trucks on county and state routes — sometimes with very short notice. 'Turn Around Don't Drown' is Missouri's official campaign, and enforcement is active.",
    },
    {
      question: "Under FMCSA regulations, a CDL driver must complete a Driver Vehicle Inspection Report (DVIR) at the end of each day's work. What must the report include?",
      options: [
        "Only defects that render the vehicle unable to move — minor defects are not DVIR-reportable",
        "Any defects or deficiencies that affect safe operation of the vehicle — whether or not the vehicle can still be moved",
        "Only defects discovered during the pre-trip inspection — post-trip discoveries are noted verbally to the carrier",
        "Only repairs completed during the shift — defects not yet repaired are not included",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA (49 CFR 396.11) requires a Driver Vehicle Inspection Report (DVIR) after each day's work if any defect is found. The DVIR must include: the vehicle identification; date; odometer reading; any defects or deficiencies that affect the safe operation of the vehicle; the driver's signature; and the carrier's certification that defects have been repaired or that repair is unnecessary. The DVIR serves as the communication channel between drivers and the fleet maintenance department. Missouri DOR and FMCSA inspection stations use DVIR records to assess maintenance compliance.",
    },
    {
      question: "Missouri's personal property tax applies annually to what commercial equipment for Missouri-based CDL carriers?",
      options: [
        "Only tractors (power units) — trailers are exempt from Missouri personal property tax",
        "Trailers and tractors registered to a Missouri county — carriers must declare commercial vehicles annually for personal property tax assessment",
        "Only CDL vehicles with GVWRs over 80,000 lbs — light commercial vehicles are exempt",
        "Missouri has no personal property tax — this is an outdated law",
      ],
      correctIndex: 1,
      explanation:
        "Missouri is one of a handful of states that levy a personal property tax on vehicles — including commercial trucks and trailers. Missouri county assessors assess commercial vehicles (tractors, trailers, and other equipment) registered to Missouri addresses as of January 1 of each year. This creates a unique compliance consideration for Missouri-based CDL carriers: they must declare fleet assets annually to the county assessor, pay the personal property tax, and retain the tax receipts as proof of assessment (which may be required for registration renewal). CDL operators applying for Missouri Commercial Vehicle permits and registration should be aware of this annual tax obligation.",
    },
    {
      question: "Missouri's SB 398 hands-free law (effective August 28, 2023) applies to CDL operators. What additional federal penalty exists beyond the state fine?",
      options: [
        "No additional federal penalty — FMCSA defers to state law for handheld device violations",
        "A $500 federal fine — FMCSA's minimum penalty",
        "Up to $2,750 per violation for the driver, and up to $11,000 for the carrier if they required or permitted the behavior",
        "CDL operators are exempt from handheld penalties if dispatching systems require device use",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA regulations (49 CFR 392.82) prohibit CDL drivers from using handheld mobile devices in a CMV. The federal penalty is up to $2,750 per violation for the driver. If the carrier required or allowed the behavior, the carrier faces up to $11,000 per violation. A CDL driver with two handheld device violations within 3 years is disqualified from CDL driving for 60 days. Missouri's state fine under SB 398 applies separately. Dispatch systems that require device interaction while moving are prohibited — carriers must provide hands-free alternatives.",
    },
    {
      question: "What is a CDL driver's obligation when discovering a vehicle defect during an en-route inspection stop in Missouri?",
      options: [
        "Continue driving — en-route inspections are not required by FMCSA",
        "Report the defect to the carrier within 24 hours — operation may continue until the end of the shift",
        "If the defect affects safe operation, the driver must stop operating the vehicle until the defect is corrected; if the defect does not affect safety, document it and notify the carrier",
        "En-route defects are the carrier's responsibility — the driver has no obligation to stop for defects discovered after departure",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA (49 CFR 396.13) requires CDL drivers to inspect their vehicles at the start of each trip and to review the DVIR from the previous driver. If a defect affecting safe operation is discovered during the trip (at a fuel stop, rest stop, or inspection station), the driver must cease operation until the defect is corrected. A defect that does not affect safe operation should be documented on the DVIR at the end of the shift. Missouri State Highway Patrol inspection stations conduct Level I-VI inspections — a driver with an unaddressed safety-affecting defect can be placed OOS (out of service) on the spot.",
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
      question: "Why does Missouri's Department of Revenue handle CDL licensing instead of a DMV?",
      answer:
        "Missouri is the only state where the Department of Revenue (DOR) issues driver's licenses and CDLs. This structure dates to Missouri's historical administrative organization — driver licensing was assigned to DOR as part of a broader revenue collection and identification function. All other states use agencies titled DMV, BMV, MVD, SOS, DPS, or similar. For CDL applicants, the DOR functions identically to any other state motor vehicle agency — the administrative difference is in name only.",
    },
    {
      question: "How many questions are on the Missouri CDL General Knowledge test?",
      answer:
        "The Missouri CDL General Knowledge test has 50 questions. You need 40 correct (80%) to pass. Missouri also requires endorsement tests for HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), and Air Brakes (25 questions). Each endorsement test requires 80% to pass.",
    },
    {
      question: "What is Missouri's CDL DWI standard?",
      answer:
        "Missouri CDL holders in a commercial motor vehicle face the federal 0.04% BAC standard — Missouri calls it DWI rather than DUI but the threshold is identical to federal FMCSA requirements. A DWI conviction in any vehicle (including a personal car) triggers FMCSA CDL disqualification: 1 year for first offense, lifetime for second. Missouri DOR reports convictions to FMCSA within 10 days.",
    },
    {
      question: "How does flash flooding affect Missouri CDL freight routes?",
      answer:
        "Missouri's Ozark region has numerous low-water crossings used by freight vehicles on county and state routes. Flash flooding — which can occur within minutes of heavy rain upstream, even on a clear-day road — closes these crossings and can trap vehicles. CDL drivers should: (1) plan alternate routes before entering Ozark regions in rain season (spring, fall); (2) monitor MODOT Traveler Information (1-888-275-6636 or modot.org); (3) never drive through a barricaded flood crossing under RSMo 304.022. The Mississippi River and Missouri River corridors also affect freight routing during annual spring flood events.",
    },
    {
      question: "Where can Missouri CDL applicants take skills tests?",
      answer:
        "Missouri CDL skills tests (pre-trip inspection, basic vehicle control, on-road driving) are administered at DOR-approved Third Party Tester (TPT) locations. TPT sites must use FMCSA-standardized test routes and scoring. Knowledge tests are available at DOR driver license offices statewide. Missouri has TPT sites in Kansas City, St. Louis, Springfield, Columbia, Joplin, and other cities.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Missouri?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Missouri?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Missouri DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Missouri CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Missouri DMV for available language options.",
    },
    {
      question: "How long is a Missouri CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Missouri CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Missouri CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Missouri, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "MO Driver's License", href: "/missouri-dmv-practice-test" },
    { label: "MO Motorcycle Test", href: "/missouri-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MissouriCDLPage() {
  return <PracticeTestPage {...data} />;
}
