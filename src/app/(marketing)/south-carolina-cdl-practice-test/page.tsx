import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "South Carolina CDL Practice Test 2025 – Free SC DMV Commercial License Exam Prep",
  description:
    "Free South Carolina CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. SCDMV CDL testing, Emma's Law IID requirement affects CDL employment, SC Hands-Free Act + FMCSA penalty, Port of Charleston routing.",
  alternates: { canonical: "https://caredmvprep.com/south-carolina-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/south-carolina-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "South Carolina",
  stateAbbr: "SC",
  testLabel: "CDL General Knowledge Test",
  slug: "south-carolina-cdl-practice-test",
  headline: "South Carolina CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the South Carolina CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the South Carolina CDL Manual. The South Carolina Department of Motor Vehicles (SCDMV) administers CDL testing. South Carolina's Emma's Law IID requirement creates a CDL employment obstacle even for first-offense DUI. The SC Hands-Free Act applies to CDL operators with additional FMCSA penalties. Port of Charleston freight routing is a key CDL operational area.",
  basedOn: "FMCSA CDL Manual & SCDMV CDL Manual",
  about: [
    "South Carolina CDL testing is administered by the South Carolina Department of Motor Vehicles (SCDMV). CDL knowledge tests (50 questions, 80% required) are available at SCDMV branch offices and approved Third Party Testing (TPT) sites statewide. CDL skills tests are administered at SCDMV-approved TPT locations. South Carolina issues CDL Class A, B, and C licenses with standard FMCSA endorsements.",
    "South Carolina-specific CDL factors: (1) Emma's Law (Act 255, 2014) requires an ignition interlock device (IID) for all first-offense DUI convictions where BAC is 0.15% or greater. For CDL holders, the IID requirement creates a practical CDL employment problem: the IID is installed on the driver's personal vehicle, but the driver's license status and DUI record make the driver uninsurable under commercial fleet policies even after the IID period. Additionally, a CDL holder with an Emma's Law IID conviction has a DUI record that must be disclosed on CDL employment applications. (2) South Carolina Hands-Free Act (Act R-134, effective May 17, 2023) applies to CDL operators — federal FMCSA penalties up to $2,750 per violation apply in addition to the SC fine. (3) Port of Charleston (South Carolina Ports Authority) is one of the East Coast's busiest ports — CDL drivers serving port terminals must understand I-26/I-526 interchange routing, the Mark Clark Expressway approaches, and terminal gate procedures.",
  ],
  sampleQuestions: [
    {
      question: "South Carolina's Emma's Law (2014) requires an IID for first-offense DUI with BAC ≥0.15%. How does an Emma's Law conviction affect CDL employment prospects?",
      options: [
        "Emma's Law IID is only installed on personal vehicles and has no effect on CDL employment",
        "Emma's Law is only relevant for drivers under 21 — adult CDL holders are not subject to the IID requirement",
        "A DUI conviction with an Emma's Law IID requirement means the CDL holder has a DUI record, creating FMCSA disqualification and making the driver uninsurable under commercial fleet policies — a practical employment barrier even after the IID period ends",
        "Emma's Law provides a pathway for CDL holders to maintain their CDL during the IID period by operating a CMV under carrier supervision",
      ],
      correctIndex: 2,
      explanation:
        "Emma's Law creates a multi-layer CDL employment problem for South Carolina CDL holders. First, a DUI conviction (the trigger for Emma's Law) triggers FMCSA CDL disqualification: 1 year for a first offense in any vehicle, regardless of whether the vehicle was a CMV. Second, the DUI conviction appears permanently on the CDL holder's motor vehicle record (MVR) — accessible to all CDL employers in background checks. Third, commercial fleet insurance carriers typically will not insure drivers with DUI convictions for a period of 5–7 years after conviction. The Emma's Law IID itself affects the personal vehicle — not the CMV — but the underlying DUI conviction creates all of these employment barriers.",
    },
    {
      question: "South Carolina CDL applicants must pass the General Knowledge test at SCDMV. What is the passing score?",
      options: [
        "75% — 37 of 50 questions",
        "80% — 40 of 50 questions",
        "85% — 42 of 50 questions",
        "70% — 35 of 50 questions",
      ],
      correctIndex: 1,
      explanation:
        "South Carolina's CDL General Knowledge test requires 80% to pass — 40 correct answers out of 50 questions. This is the FMCSA minimum standard that all states must apply. South Carolina CDL knowledge tests are administered at SCDMV branch offices and approved Third Party Testing sites. The General Knowledge test covers: safe driving practices, vehicle inspection, basic vehicle control, shifting and backing, coupling/uncoupling, pre-trip and post-trip inspection, and hours of service. It is mandatory for all South Carolina CDL applicants regardless of vehicle class.",
    },
    {
      question: "Port of Charleston CDL freight routing: CDL drivers accessing the Wando Welch Terminal in North Charleston should be aware of what routing consideration?",
      options: [
        "The Port of Charleston is only accessible via I-95 — no other CDL approach routes are permitted",
        "I-26 and I-526 (Mark Clark Expressway) are the primary approach corridors; CDL drivers must know bridge clearances on I-526 and port access roads, and follow port terminal gate appointment systems",
        "Port of Charleston has a blanket 65,000 lb weight limit on all port access roads — standard 80,000 lb combinations must take a special route",
        "All CDL vehicles serving Port of Charleston must carry a South Carolina Ports Authority port vehicle permit in addition to their CDL",
      ],
      correctIndex: 1,
      explanation:
        "The Port of Charleston's primary terminal (Wando Welch) is accessed via I-26 to I-526 (Mark Clark Expressway). CDL drivers should know: the I-526 bridge over the Cooper River has a 15-foot clearance (below some high-profile loads requiring alternate routing); port terminal gate appointment systems (port terminals operate by appointment or trucker turn time systems to manage congestion); International Blvd and port area industrial road configurations with truck-specific turn restrictions; and hazardous cargo terminal access procedures. The North Charleston port area has active rail crossings on approach routes that can delay CDL drivers.",
    },
    {
      question: "South Carolina's Hands-Free Act (May 2023) applies to CDL operators. What constitutes a legal hands-free use of a device in a CMV in South Carolina?",
      options: [
        "Using a device while stopped at a red light — South Carolina law permits device use when the vehicle is not moving",
        "Wearing a single Bluetooth earpiece and pressing one button on the device to answer a call — without holding the device",
        "Any speakerphone use — South Carolina only prohibits physically holding the device for a call",
        "Texting while waiting in a drive-through line — stopped but not technically in traffic",
      ],
      correctIndex: 1,
      explanation:
        "South Carolina's Hands-Free Act and FMCSA regulations both permit single-button press operations for CDL drivers: pressing one button on a Bluetooth earpiece or headset to answer an incoming call (without holding the phone) is permitted. Fully voice-activated phone interactions are also permitted. What is prohibited for CDL operators: holding the phone; manually dialing; texting; viewing maps manually; any physical interaction with the device beyond the single button press. Device use while stopped at a red light is not automatically permitted under FMCSA rules — the prohibition applies any time the CMV is in operation, including at traffic lights.",
    },
    {
      question: "Under FMCSA regulations, what is the CDL driver's obligation when a roadside inspection reveals the vehicle is placed out of service (OOS)?",
      options: [
        "The driver may continue to the nearest repair facility — OOS placement is advisory only",
        "The driver must contact the carrier and may move the vehicle to a safe parking area if the OOS condition does not prevent safe movement to parking",
        "The driver must remain with the vehicle until the carrier's mechanic arrives — the vehicle cannot be moved under any circumstances",
        "OOS vehicles must be immediately towed — the CDL driver may not drive OOS vehicles under any federal law",
      ],
      correctIndex: 1,
      explanation:
        "When a CMV is placed out of service (OOS) by a federal or state inspector, the driver must not operate the vehicle in interstate commerce until the OOS conditions are corrected and signed off by authorized personnel. The driver may move the vehicle to a safe parking area if the OOS condition does not prevent safe movement to that parking area (e.g., a tire defect may prevent highway driving but not slow parking lot movement). The carrier must be notified immediately. South Carolina State Transport Police conduct Level I-VI CDL inspections; OOS violations become part of the carrier's safety rating record. CDL drivers should never argue with an inspector about OOS placement — contest the violation through the proper administrative process.",
    },
    {
      question: "FMCSA requires CDL drivers to complete a Vehicle Inspection Report (DVIR) report after each driving day. When is a DVIR required?",
      options: [
        "Only when a defect is found — if no defects, no DVIR is required",
        "After every driving day, whether or not defects were found — the driver must certify the vehicle's condition",
        "Only for interstate operations — intrastate South Carolina CDL drivers are exempt from DVIR requirements",
        "Only for Class A CDL vehicles — Class B operators are exempt from daily DVIR",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA (49 CFR 396.11) requires a Driver Vehicle Inspection Report (DVIR) after every driving day — not just when defects are found. If no defects are found, the driver certifies that fact on the DVIR. If defects are found, the driver reports them and the carrier must certify repair or that repair was unnecessary before the next driver takes the vehicle. The next driver must review the previous DVIR before operating. This system creates a continuous chain of vehicle condition documentation. South Carolina commercial vehicle inspectors may request DVIRs as part of Level III or IV inspections — missing or incomplete DVIRs are recordable violations.",
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
      question: "How many questions are on the South Carolina CDL General Knowledge test?",
      answer:
        "The SCDMV CDL General Knowledge test has 50 questions requiring 40 correct (80%) to pass. Endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), Air Brakes (25 questions). All endorsements require 80%. HazMat also requires TSA security clearance.",
    },
    {
      question: "What is South Carolina's CDL DUI standard?",
      answer:
        "South Carolina CDL holders in a CMV face the federal 0.04% BAC limit. South Carolina's standard DUI threshold is 0.08%. A DUI conviction in any vehicle triggers FMCSA CDL disqualification: 1 year for first offense, lifetime for second. Emma's Law's IID requirement applies to personal vehicles — but the underlying DUI conviction creates long-term CDL employment barriers regardless of the IID itself.",
    },
    {
      question: "Where can South Carolina CDL applicants take tests?",
      answer:
        "SCDMV CDL knowledge tests are available at SCDMV branch offices and approved Third Party Testing sites statewide. CDL skills tests are administered at SCDMV-approved TPT locations. South Carolina has CDL testing in Columbia, Charleston, Greenville, Spartanburg, Florence, and other cities. Contact SCDMV for current testing schedules and fee information.",
    },
    {
      question: "What does South Carolina's ADSAP program require of DUI offenders?",
      answer:
        "South Carolina's Alcohol and Drug Safety Action Program (ADSAP) is required for all DUI convictions as a condition of license reinstatement. ADSAP is an assessment and education/treatment program administered through county ADSAP programs. CDL holders convicted of DUI must complete ADSAP in addition to the FMCSA CDL disqualification period. ADSAP completion is a condition of both standard driver's license AND CDL reinstatement in South Carolina.",
    },
    {
      question: "What CDL documentation must drivers carry while operating in South Carolina?",
      answer:
        "South Carolina CDL drivers must carry: (1) a valid CDL; (2) current medical certificate (DOT physical) on file with SCDMV if operating a vehicle requiring CDL medical certification; (3) registration and proof of insurance for the vehicle; (4) HazMat shipping papers and placards if carrying hazardous materials; (5) DVIR from the previous driver; (6) for interstate operations, Hours of Service records (logs or ELD data). South Carolina Transport Police conduct roadside inspections and may request all of these documents.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in South Carolina?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in South Carolina?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your South Carolina DMV website for current fee schedules.",
    },
    {
      question: "Can I take the South Carolina CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the South Carolina DMV for available language options.",
    },
    {
      question: "How long is a South Carolina CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your South Carolina CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the South Carolina CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in South Carolina, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "SC Driver's License", href: "/south-carolina-dmv-practice-test" },
    { label: "SC Motorcycle Test", href: "/south-carolina-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function SouthCarolinaCDLPage() {
  return <PracticeTestPage {...data} />;
}
