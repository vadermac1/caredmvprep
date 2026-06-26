import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Oregon CDL Practice Test 2025 – Free OR ODOT Commercial License Exam Prep",
  description:
    "Free Oregon CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Oregon ODOT CDL testing, DUII 0.04% in CMV, HB 2597 + FMCSA penalty, Cascades chain control for trucks, Portland bridge restrictions, oversize permits from ODOT.",
  alternates: { canonical: "https://caredmvprep.com/oregon-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/oregon-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Oregon",
  stateAbbr: "OR",
  testLabel: "CDL General Knowledge Test",
  slug: "oregon-cdl-practice-test",
  headline: "Oregon CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Oregon CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the Oregon CDL Manual. Oregon DMV (part of ODOT) administers CDL testing. Oregon uses DUII (Driving Under the Influence of Intoxicants) terminology, and the 0.04% CDL standard applies in a CMV. HB 2597 (one of the nation's earliest hands-free laws) applies to CDL operators with FMCSA penalties. Cascade chain control requirements and Portland bridge restrictions are key Oregon CDL operational factors.",
  basedOn: "FMCSA CDL Manual & Oregon DMV CDL Manual",
  about: [
    "Oregon CDL testing is administered by Oregon DMV, part of the Oregon Department of Transportation (ODOT). CDL knowledge tests (50 questions, 80% required) are available at Oregon DMV driver license offices statewide. CDL skills tests are administered at ODOT-approved Third Party Testing sites. Oregon issues CDL Class A, B, and C licenses with standard FMCSA endorsements.",
    "Oregon-specific CDL factors: (1) Oregon uses DUII (Driving Under the Influence of Intoxicants) rather than DUI. The CDL DUII BAC limit in a CMV is 0.04%. A DUII conviction in any vehicle triggers FMCSA CDL disqualification. Oregon's DUII law also covers cannabis impairment without a per se THC limit — an officer observation standard applies. (2) HB 2597 (Oregon's hands-free law, effective 2017 — one of the earliest in the U.S.) applies to CDL operators, with FMCSA penalties up to $2,750 per violation in addition to Oregon's state fine. (3) ODOT's Cascade mountain pass chain control requirements apply to all commercial vehicles, including CDL trucks — chains required conditions cannot be bypassed. Mandatory truck check stations are stationed on both sides of major Cascade passes. (4) Portland's Burnside Bridge, Broadway Bridge, and other Willamette River crossings have specific weight limits and clearance restrictions that CDL drivers must know.",
  ],
  sampleQuestions: [
    {
      question: "Oregon uses 'DUII' (Driving Under the Influence of Intoxicants) rather than 'DUI.' The CDL DUII BAC limit in a commercial motor vehicle in Oregon is:",
      options: [
        "0.08% — Oregon's standard DUII threshold",
        "0.04% — the federal FMCSA CDL BAC limit in a CMV",
        "0.05% — Oregon's intermediate commercial threshold",
        "0.00% — Oregon applies zero tolerance to CDL holders in all vehicles",
      ],
      correctIndex: 1,
      explanation:
        "Oregon's DUII law uses 'intoxicants' instead of 'impaired' or 'intoxicated,' and uses DUII instead of DUI. The CDL DUII standard in a commercial motor vehicle is 0.04% BAC — the federal FMCSA minimum (49 CFR 392.5). Oregon's standard DUII threshold of 0.08% (ORS 813.010) does not apply in a CMV — the 0.04% federal limit governs CDL holders. Oregon DUII law is also notable for covering cannabis impairment without a per se THC level — impairment from intoxicants other than alcohol (including cannabis) is evaluated by officer observation. A DUII in any vehicle triggers: 1-year CDL disqualification for first offense, lifetime for second.",
    },
    {
      question: "ODOT requires chain control on Cascade mountain passes when conditions warrant. A CDL truck driver approaching a 'Chains Required' sign cannot fit chains on the truck's tires. What must the driver do?",
      options: [
        "Proceed carefully at reduced speed — 'Chains Required' is advisory for CDL vehicles with all-weather tires",
        "Stop at the mandatory truck check station and wait until conditions improve or the chain control requirement is lifted",
        "Contact the carrier for authorization to proceed — carrier authorization supersedes ODOT chain control on federal highways",
        "Take an alternate route using secondary state roads — chain control only applies to interstate highways",
      ],
      correctIndex: 1,
      explanation:
        "ODOT's 'Chains Required' designation on Cascade passes applies to ALL commercial vehicles — including CDL trucks that cannot be physically fitted with traditional tire chains. When chain control is in effect and the vehicle cannot comply (e.g., specialized low-profile truck tires that cannot accept chains), the driver must stop at the mandatory truck check station and wait for conditions to improve or the requirement to be modified. Oregon chain control requirements are legally enforceable — proceeding past a closed check station in violation of chain control is a citable offense. CDL drivers planning Cascade routes from November through April should monitor ODOT TripCheck (tripcheck.com) for chain control status before departing.",
    },
    {
      question: "Portland's Willamette River crossing options for CDL vehicles include the Steel Bridge, Burnside Bridge, and others. What specific CDL weight consideration applies?",
      options: [
        "All Portland Willamette River bridges have identical 80,000 lb weight limits matching federal FMCSA standards",
        "Portland Willamette River bridges have individual posted weight limits — some historic bridges are posted below 80,000 lbs GCVW, requiring CDL drivers to verify bridge capacity for their specific load",
        "CDL vehicles over 40,000 lbs are prohibited from all Portland bridge crossings — they must use the Columbia River Crossing on I-205",
        "Portland's bridges have no weight restrictions — ODOT maintains all Portland bridges to federal CDL weight standards",
      ],
      correctIndex: 1,
      explanation:
        "Portland's Willamette River bridges include a mix of ages and construction types — several historic bridges (built in the early 20th century) have posted weight limits below federal CDL maximums. The Broadway Bridge, Burnside Bridge, Morrison Bridge, Hawthorne Bridge, and others each have individual weight postings. CDL drivers must check the posted weight limit for any Portland bridge on their planned route before crossing with a loaded combination. ODOT and Portland's bridge maintenance program publishes current weight postings. The I-5 and I-205 Willamette River crossings are built to full freeway standards and carry normal CDL legal loads.",
    },
    {
      question: "Oregon's Basic Speed Rule (ORS 811.100) — which can result in a citation even below the posted limit — applies to CDL drivers. In what Oregon CDL scenario does this matter most?",
      options: [
        "Only in residential neighborhoods — the Basic Speed Rule does not apply to interstate and highway CDL operations",
        "On wet mountain passes, icy Cascade roads, or fog-reduced Coast Range roads — where CDL drivers traveling at the posted speed limit may still be cited for exceeding conditions",
        "The Basic Speed Rule does not apply to CDL vehicles — federal FMCSA speed regulations supersede Oregon's state rule",
        "Only for CDL vehicles over 80,000 lbs — lighter commercial vehicles are exempt from Oregon's Basic Speed Rule",
      ],
      correctIndex: 1,
      explanation:
        "Oregon's Basic Speed Rule (ORS 811.100) applies to all drivers and vehicles — including CDL operators. A CDL truck traveling at the posted 55 mph on a Cascade pass in icy conditions, through coastal fog on US 101, or in construction zone dust can be cited under the Basic Speed Rule if conditions require a lower speed. For CDL operators, the Basic Speed Rule has enhanced significance: a commercial vehicle's stopping distance is far longer than a car's at the same speed; weather conditions that marginally reduce car traction can severely reduce truck traction; and cargo shift from sudden braking creates additional risk. ODOT and Oregon State Police apply Basic Speed Rule citations to CMV operators who appear to be traveling faster than conditions allow.",
    },
    {
      question: "Oregon ODOT issues oversize/overweight (OS/OW) permits for loads exceeding standard legal dimensions. What is Oregon's standard legal vehicle height limit?",
      options: [
        "14 feet",
        "13 feet 6 inches (13'6\")",
        "15 feet",
        "12 feet",
      ],
      correctIndex: 1,
      explanation:
        "Oregon's standard legal vehicle height limit is 14 feet (4.27 m) for most roads — one of the higher state height limits in the U.S. (many states use 13'6\"). However, specific Oregon roads, bridges, and overpasses may have lower clearances. The Portland area has some historically low bridges that restrict high-profile loads to alternate routing. Oregon ODOT's oversize permit system covers loads over 14 feet tall, 8'6\" wide, or exceeding weight limits. OS/OW permits are issued by ODOT and specify permitted routes, travel time windows (typically daylight hours only, avoiding rush hour in Portland metro), and escort vehicle requirements based on load dimensions.",
    },
    {
      question: "Under FMCSA regulations, what is the CDL driver's obligation when approaching a grade crossing (railroad crossing) in a commercial vehicle?",
      options: [
        "CDL vehicles are required to slow to 5 mph at all grade crossings — they need not stop unless a train is actively passing",
        "CDL vehicles must stop between 15 and 50 feet from the nearest rail track and may proceed only when certain it is safe — required for all CDL vehicles unless exempt",
        "Only school buses and HazMat vehicles must stop at grade crossings — other CDL vehicles follow the same rules as cars",
        "CDL vehicles must stop only when gates are activated — without gate activation, a slow roll at 10 mph satisfies the requirement",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA (49 CFR 392.10) requires specific CDL vehicle types to stop at all public grade crossings before crossing: vehicles carrying passengers (buses), vehicles marked with HazMat placards, and specific cargo tank vehicles. For these vehicles, the driver must stop between 15 and 50 feet from the nearest rail, look both ways, listen, and proceed only when safe. Other CMVs (standard freight trucks, flatbeds) that are not in these categories may slow and proceed if the crossing is clear — they are not required to stop. However, all CDL drivers must be able to clear the grade crossing without stopping in the middle — CMVs must never stop on a grade crossing. Oregon has numerous grade crossings on industrial routes, particularly in the Portland and Willamette Valley areas.",
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
      question: "How many questions are on the Oregon CDL General Knowledge test?",
      answer:
        "The Oregon CDL General Knowledge test has 50 questions requiring 40 correct (80%) to pass. Endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), Air Brakes (25 questions). All require 80%. Contact Oregon DMV for current testing fees and schedules.",
    },
    {
      question: "What is Oregon's CDL DUII standard?",
      answer:
        "Oregon CDL holders in a CMV face the federal 0.04% BAC DUII limit. Oregon calls the offense DUII and covers cannabis impairment without a per se THC level — officer observation of impairment is the standard. A DUII conviction in any vehicle triggers FMCSA CDL disqualification: 1 year for first offense, lifetime for second. Oregon DMV reports DUII convictions to FMCSA within the required 10-day window.",
    },
    {
      question: "What should Oregon CDL drivers know about Cascade mountain pass chain control?",
      answer:
        "ODOT's chain control on Cascade passes (Santiam Pass US 20, McKenzie Pass OR 242, Diamond Lake Jct OR 138, Crater Lake access): (1) 'Chains Required' signs are legally enforceable — all CMVs must comply; (2) mandatory truck check stations on both sides of major passes verify compliance; (3) CDL trucks that cannot be fitted with chains must wait at the check station; (4) monitor ODOT TripCheck at tripcheck.com before any Cascade mountain route in fall/winter/spring; (5) chain control is separate from road closures — a closed road means no vehicles, while chain control means chains required for compliance.",
    },
    {
      question: "Where can Oregon CDL applicants take skills tests?",
      answer:
        "Oregon CDL skills tests are administered at ODOT-approved Third Party Testing sites. Knowledge tests are available at Oregon DMV driver license offices statewide. Oregon has CDL testing in Portland, Salem, Eugene, Medford, Bend, Klamath Falls, and other cities. Contact Oregon DMV for current Third Party Tester locations and scheduling.",
    },
    {
      question: "How does Oregon's ODOT oversize permit system work for CDL operations?",
      answer:
        "Oregon OS/OW permits are issued by ODOT for loads exceeding: 14 feet tall, 8'6\" wide, 75 feet long (combination), or 80,000 lbs GCVW. Oregon's permit system specifies: approved routes (not all Oregon roads are approved for all oversize loads); travel time windows (typically daylight hours only; no travel during rush hour in the Portland Metro or Salem); escort vehicle requirements (one front escort for widths 12-14 feet, two escorts for 14+ feet); and flagger requirements for some moves. Oregon's coast, mountain, and valley regions each have specific bridge clearance and weight restrictions that affect OS/OW route planning.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Oregon?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Oregon?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Oregon DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Oregon CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Oregon DMV for available language options.",
    },
    {
      question: "How long is a Oregon CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Oregon CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Oregon CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Oregon, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "OR Driver's License", href: "/oregon-dmv-practice-test" },
    { label: "OR Motorcycle Test", href: "/oregon-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OregonCDLPage() {
  return <PracticeTestPage {...data} />;
}
