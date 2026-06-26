import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Louisiana CDL Practice Test 2025 – Free LA OMV Commercial License Exam Prep",
  description:
    "Free Louisiana CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Louisiana OMV CDL testing, DWI 0.04% in CMV, HB 15 + FMCSA penalty, hurricane contraflow for CDL, Mississippi River bridge weight restrictions.",
  alternates: { canonical: "https://caredmvprep.com/louisiana-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/louisiana-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Louisiana",
  stateAbbr: "LA",
  testLabel: "CDL General Knowledge Test",
  slug: "louisiana-cdl-practice-test",
  headline: "Louisiana CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Louisiana CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the Louisiana CDL Manual. The Louisiana Office of Motor Vehicles (OMV) administers CDL testing. Louisiana uses DWI (not DUI) terminology, and the 0.04% CDL standard applies in a CMV. HB 15 (hands-free) applies to CDL operators with additional FMCSA penalties. Hurricane evacuation contraflow and Mississippi River bridge weight restrictions are unique Louisiana CDL operational factors.",
  basedOn: "FMCSA CDL Manual & Louisiana OMV CDL Manual",
  about: [
    "Louisiana CDL testing is administered by the Office of Motor Vehicles (OMV), part of the Louisiana Department of Public Safety and Corrections (DPSC). CDL knowledge tests (50 questions, 80% required) are available at OMV field offices statewide. CDL skills tests are administered at OMV-approved Third Party Testing sites. Louisiana issues CDL Class A, B, and C licenses with standard FMCSA endorsements.",
    "Louisiana-specific CDL factors: (1) Louisiana uses DWI (Driving While Intoxicated) rather than DUI. CDL DWI standard: 0.04% BAC in a commercial motor vehicle. A DWI conviction in any vehicle triggers FMCSA CDL disqualification. (2) HB 15 (hands-free law, effective August 1, 2023) applies to CDL operators — FMCSA penalties up to $2,750 per violation apply in addition to Louisiana's state fine. (3) Louisiana's hurricane evacuation contraflow system activates on major interstate routes — CDL drivers must know contraflow participation rules, directional protocols, and fuel planning requirements. (4) Mississippi River crossings in the New Orleans area — including the Crescent City Connection (US 90) and I-10 Mississippi River Bridge — have posted weight limits that affect heavy CDL combinations; the Huey P. Long Bridge on US 90 has specific lane configuration requirements for wide loads.",
  ],
  sampleQuestions: [
    {
      question: "Louisiana uses 'DWI' (Driving While Intoxicated) rather than 'DUI.' The CDL DWI BAC limit in a commercial motor vehicle in Louisiana is:",
      options: [
        "0.08% — Louisiana's standard impaired driving threshold",
        "0.04% — the federal FMCSA CDL limit in a CMV",
        "0.05% — Louisiana's intermediate CDL threshold",
        "0.02% — Louisiana applies extra restriction to CDL holders in CMVs",
      ],
      correctIndex: 1,
      explanation:
        "Louisiana's DWI law uses 0.04% BAC as the CDL limit in a commercial motor vehicle — the federal FMCSA standard. Louisiana's standard DWI threshold of 0.08% (La. R.S. 14:98) applies to regular drivers; CDL holders in a CMV are out-of-service at 0.04%. The state calls the offense DWI rather than DUI, but the legal consequences mirror FMCSA requirements: 1-year CDL disqualification for a first offense DWI in any vehicle, lifetime for a second. Louisiana OMV reports DWI convictions to the FMCSA CDL information system within 10 days.",
    },
    {
      question: "Louisiana hurricane evacuation contraflow activates on major interstates during hurricane emergencies. What must CDL drivers know about participating in contraflow?",
      options: [
        "CDL vehicles over 80,000 lbs GCVW are prohibited from contraflow routes — they must use secondary state highways",
        "CDL vehicles may use contraflow routes following the same directional rules (outbound only), designated entry points, and no-U-turn protocols; drivers should pre-fill fuel tanks before joining contraflow as standard fuel access is limited",
        "CDL drivers need a Louisiana DPS evacuation transport permit to use contraflow routes",
        "Contraflow is for passenger vehicles only — CDL vehicles participate in a separate staged movement coordinated by Louisiana State Police",
      ],
      correctIndex: 1,
      explanation:
        "Louisiana's contraflow evacuation system — which reverses inbound interstate lanes to outbound during hurricane evacuation — is accessible to CDL vehicles. The rules for CDL drivers on contraflow: all traffic moves outbound only; no U-turns; entry at designated contraflow entry points only; standard on-ramps and exits are closed. CDL-specific considerations: (1) fill the fuel tank to maximum capacity before joining contraflow — no standard fuel stations are accessible on contraflow routes; (2) plan for extended travel times (contraflow can slow 80-mile trips to 8-10 hours during mass evacuations); (3) bridge crossings on contraflow routes may have reduced clearance or weight postings — know vehicle height and weight before departing.",
    },
    {
      question: "The Crescent City Connection (Mississippi River crossing in New Orleans on US 90) and I-10 Mississippi River Bridge have specific CDL weight considerations. What should Louisiana CDL drivers know?",
      options: [
        "Louisiana Mississippi River bridges have no weight restrictions — all legal federal weight combinations are permitted",
        "The Crescent City Connection and I-10 bridge have posted weight limits that may be lower than 80,000 lbs GCVW — CDL drivers must check posted limits for their specific route and load",
        "All Mississippi River bridge crossings in Louisiana require a state bridge weight permit regardless of load",
        "CDL vehicles over 5 axles are prohibited from all Mississippi River bridge crossings in Louisiana",
      ],
      correctIndex: 1,
      explanation:
        "Mississippi River bridge crossings in the New Orleans area have individual posted weight limits that CDL drivers must check. The Crescent City Connection (CCC) and I-10 Mississippi River Bridge carry high traffic volumes and have been subject to weight restriction studies. The Huey P. Long Bridge (US 90/US 90 Business) has specific lane configuration requirements for wide loads due to its historic deck width. Louisiana DOTD (Department of Transportation and Development) publishes bridge weight and clearance information. CDL drivers operating heavy combinations through New Orleans must verify the posted weight limits for their specific route before crossing.",
    },
    {
      question: "Louisiana HB 15 (hands-free law, August 2023) applies to CDL operators. Two handheld device violations within 3 years result in what FMCSA consequence?",
      options: [
        "A $5,000 fine — no license action",
        "30-day CDL disqualification",
        "60-day CDL disqualification",
        "1-year CDL disqualification — same as a DWI",
      ],
      correctIndex: 2,
      explanation:
        "Under FMCSA (49 CFR 383.51), two serious traffic violations within 3 years triggers a 60-day CDL disqualification. Handheld mobile device violations in a CMV are classified as 'serious traffic violations' under FMCSA rules. Two violations within 3 years: 60-day disqualification. Three or more within 3 years: 120-day disqualification. Each violation also carries the civil penalty up to $2,750 for the driver. This makes repeated handheld device violations a severe professional risk for Louisiana CDL operators — the disqualification period prevents any CDL employment during the 60 or 120 days.",
    },
    {
      question: "Louisiana's bayou region and elevated roadways (such as the Atchafalaya Basin Bridge on I-10) present specific CDL driving hazards. Which hazard is most relevant to CDL safety on Louisiana's elevated causeways?",
      options: [
        "Alligators on the roadway — Louisiana law requires commercial vehicles to stop for alligator crossings",
        "Crosswinds on long elevated sections, limited breakdown lanes, and no median barrier on some older elevated sections",
        "The Atchafalaya Basin Bridge has a 55 mph maximum speed limit for CDL vehicles — violations are automatic out-of-service conditions",
        "Louisiana elevated roadways require CDL drivers to stop at weigh stations at each end of the causeway",
      ],
      correctIndex: 1,
      explanation:
        "The Atchafalaya Basin Bridge (approximately 18 miles of elevated I-10 through the Atchafalaya Swamp) and other Louisiana elevated causeways present specific CDL hazards: (1) crosswinds — open elevated sections have no windbreak, and high-profile CMVs (box trucks, flatbeds with tall loads) are significantly affected by side winds; (2) limited breakdown/emergency lanes on some elevated sections; (3) no opportunity for emergency turnaround on a bridge of this length; (4) debris from fishing activities and wildlife on some sections. CDL drivers on Louisiana's elevated causeways should: reduce speed in high winds, maintain extra following distance, know that breakdowns on elevated sections require Louisiana State Police notification.",
    },
    {
      question: "Under FMCSA HOS regulations, a property-carrying CDL driver who has been on duty for 14 hours must do what before driving again?",
      options: [
        "Take a 30-minute break — then continue driving",
        "Stop driving immediately and take at least 10 consecutive hours off-duty before the next driving period",
        "Stop driving and wait 8 hours — the 8-hour reset rule applies after the 14-hour window",
        "Contact the carrier for a 2-hour extension authorization — FMCSA allows 16-hour on-duty periods with carrier approval",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA's 14-hour rule: a property-carrying CDL driver may not drive after being on duty for 14 consecutive hours following a minimum 10-hour off-duty period. Once the 14-hour clock starts (from the moment on-duty begins), it does not stop for breaks or sleeper berth time below 10 hours. After reaching the 14-hour window, the driver must take at least 10 consecutive hours off-duty before starting the next driving period. Louisiana CDL drivers on freight routes (New Orleans, Baton Rouge, Port of New Orleans cargo) must comply with federal HOS — Louisiana has no state-specific exception to the 14-hour rule except for agricultural operations during planting and harvest.",
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
      question: "How many questions are on the Louisiana CDL General Knowledge test?",
      answer:
        "The Louisiana CDL General Knowledge test has 50 questions requiring 40 correct (80%) to pass. Louisiana endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), Air Brakes (25 questions). All require 80%. Contact Louisiana OMV for current testing fees.",
    },
    {
      question: "What is Louisiana's CDL DWI standard?",
      answer:
        "Louisiana CDL holders operating a CMV face the federal 0.04% BAC DWI limit. Louisiana calls the offense DWI (not DUI) but the CDL consequences are identical to federal FMCSA requirements. A DWI conviction in any vehicle triggers CDL disqualification: 1 year for first offense, lifetime for second. OMV reports all DWI convictions to FMCSA within 10 days.",
    },
    {
      question: "What should Louisiana CDL drivers know about hurricane season operations?",
      answer:
        "Louisiana CDL hurricane season (June–November) considerations: (1) monitor National Hurricane Center and Louisiana Governor's Office for evacuation orders; (2) know contraflow activation timing and entry points before hurricane season begins; (3) ensure adequate fuel before any evacuation — contraflow has no standard fuel access; (4) know bridge weight and clearance limits on your regular routes in case contraflow uses alternate crossings; (5) carriers serving essential supplies during evacuation may be designated as emergency carriers — contact Louisiana DOTD for emergency vehicle exemptions during declared disasters.",
    },
    {
      question: "Where can Louisiana CDL applicants take skills tests?",
      answer:
        "Louisiana CDL skills tests are administered at OMV-approved Third Party Testing sites. Knowledge tests are available at OMV field offices statewide. Louisiana has CDL testing in New Orleans, Baton Rouge, Shreveport, Lafayette, Lake Charles, and other cities. Contact OMV for current Third Party Tester locations and scheduling.",
    },
    {
      question: "What New Orleans area routing challenges do Louisiana CDL drivers face?",
      answer:
        "New Orleans CDL routing considerations: (1) Lake Pontchartrain Causeway — check posted height limits; (2) Mississippi River bridge (I-10) — check posted weight limits for your load; (3) Crescent City Connection (CCC, US 90) — toll collection, check weight limits; (4) elevated causeway crosswind exposure; (5) streetcar track crossings on surface streets (cross at 45° angle); (6) narrow French Quarter/warehouse district streets with tight turn radius requirements; (7) post-rain flooding on lower-elevation streets requiring route detours.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Louisiana?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Louisiana?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Louisiana DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Louisiana CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Louisiana DMV for available language options.",
    },
    {
      question: "How long is a Louisiana CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Louisiana CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Louisiana CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Louisiana, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "LA Driver's License", href: "/louisiana-dmv-practice-test" },
    { label: "LA Motorcycle Test", href: "/louisiana-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function LouisianaCDLPage() {
  return <PracticeTestPage {...data} />;
}
