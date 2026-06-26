import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Alabama CDL Practice Test 2025 – Free AL ALEA Commercial License Exam Prep",
  description:
    "Free Alabama CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Alabama ALEA CDL licensing, DUI school (ADECA) required for CDL reinstatement, Hands-Free Alabama Act + FMCSA, Port of Mobile routing.",
  alternates: { canonical: "https://caredmvprep.com/alabama-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/alabama-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Alabama",
  stateAbbr: "AL",
  testLabel: "CDL General Knowledge Test",
  slug: "alabama-cdl-practice-test",
  headline: "Alabama CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Alabama CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the Alabama CDL Manual. Alabama Law Enforcement Agency (ALEA) Driver License Division administers CDL testing. Alabama mandates ADECA DUI school for all DUI convictions — including CDL holder DUI — as a condition of license reinstatement. The Hands-Free Alabama Act applies to CDL operators with additional FMCSA penalties.",
  basedOn: "FMCSA CDL Manual & Alabama ALEA CDL Manual",
  about: [
    "Alabama CDL testing is administered by the Alabama Law Enforcement Agency (ALEA) Driver License Division — not a traditional DMV. ALEA's Driver License Division issues all driver's licenses and CDLs in Alabama. CDL knowledge tests (50 questions, 80% required) are available at ALEA Driver License examination sites statewide. CDL skills tests are administered at ALEA-approved testing locations.",
    "Alabama-specific CDL factors: (1) All Alabama DUI convictions — including DUI involving a CDL holder in a personal vehicle — require completion of ADECA (Alabama Department of Economic and Community Affairs) alcohol and drug education DUI school as a condition of license reinstatement. This applies regardless of whether the CDL holder was operating a CMV. (2) Alabama's Habitual Offender law (3 DUIs = Class C felony) creates exponential consequences for CDL holders: a Class C felony DUI triggers lifetime CDL disqualification under FMCSA's recidivism rules. (3) The Hands-Free Alabama Act (effective January 1, 2024) applies to CDL operators — FMCSA penalties up to $2,750 per violation apply in addition to Alabama's state fine. (4) Alabama's Port of Mobile (Alabama State Port Authority) is the primary deep-water port; CDL drivers serving port freight face specific Port Authority routing requirements, bridge clearance restrictions on US 90/98, and Mobile Bay Tunnel height restrictions.",
  ],
  sampleQuestions: [
    {
      question: "Alabama ALEA is the agency that issues CDLs in Alabama. What does ALEA stand for?",
      options: [
        "Alabama Licensing and Enforcement Administration",
        "Alabama Law Enforcement Agency",
        "Alabama Licensed Examiner Authority",
        "Alabama License Examination Administration",
      ],
      correctIndex: 1,
      explanation:
        "ALEA stands for Alabama Law Enforcement Agency. ALEA's Driver License Division administers all Alabama driver licensing including CDLs. ALEA was created in 2015 when the Alabama legislature consolidated several state public safety agencies into a single law enforcement entity. Unlike states where driver licensing is handled by a DMV, BMV, DPS, or SOS, Alabama's CDL testing and issuance is formally part of a law enforcement agency — the same agency that includes the Alabama State Troopers and State Bureau of Investigation. This has no practical effect on the CDL testing process, but understanding the agency name is important for CDL applicants in Alabama.",
    },
    {
      question: "Alabama requires all DUI conviction holders to complete ADECA DUI school before license reinstatement. Does this apply to CDL holders whose DUI was in a personal vehicle?",
      options: [
        "No — ADECA DUI school is only required for DUI while operating a commercial motor vehicle",
        "Yes — ALL Alabama DUI convictions require ADECA DUI school completion, regardless of vehicle type, as a condition of reinstatement",
        "Only for first-time DUI — subsequent DUIs have a different reinstatement pathway",
        "ADECA DUI school is required only if the driver's BAC was above 0.15%",
      ],
      correctIndex: 1,
      explanation:
        "Alabama's ADECA DUI school requirement applies to ALL DUI convictions — including when a CDL holder receives a DUI while driving a personal vehicle. The DUI school must be completed as a condition of reinstating any Alabama driver's license, including a CDL. This creates a specific timeline consideration for CDL holders: the FMCSA CDL disqualification (1 year minimum for first offense) runs concurrently, but the Alabama reinstatement process requires ADECA DUI school completion in addition to the disqualification period. CDL holders should factor in ADECA school scheduling when planning CDL reinstatement.",
    },
    {
      question: "Alabama's Port of Mobile (Alabama State Port Authority) is a key CDL freight destination. What routing restriction affects CDL vehicles serving the Port of Mobile?",
      options: [
        "Port-serving CDL vehicles must use US 431 south — I-65 is off-limits to port trucks",
        "Mobile Bay Tunnel (I-10) height restrictions and bridge clearances on port approach routes require CDL drivers to know vehicle height and plan accordingly",
        "CDL vehicles serving the Port of Mobile are restricted to night-only operations due to daytime congestion",
        "Port of Mobile CDL vehicles must carry a special Alabama State Port Authority permit regardless of cargo type",
      ],
      correctIndex: 1,
      explanation:
        "Mobile Bay area CDL routing includes height-restricted infrastructure: the Wallace Tunnel (I-10 under Mobile River) has a posted clearance of 14 feet — below the standard 13'6\" many trucks assume is safe. Additionally, some Port of Mobile approach roads have specific turn radius requirements, weight-posted bridges, and surface conditions (some port roads have rail crossings, crane clearance requirements, and terminal gate configurations). CDL drivers serving Port of Mobile terminals must confirm vehicle height, know the route from the I-10/I-65 interchange, and understand port terminal entry procedures including gate weight scales.",
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
    {
      question: "The Hands-Free Alabama Act (effective January 1, 2024) applies to CDL operators. What additional FMCSA consequence exists for handheld device use in a CMV?",
      options: [
        "No FMCSA consequence — Alabama's state fine is the only penalty for CDL handheld device violations",
        "A $500 FMCSA administrative fine per violation",
        "Up to $2,750 per violation for the driver and up to $11,000 for the carrier; two violations within 3 years triggers 60-day CDL disqualification",
        "CDL operators are exempt from FMCSA handheld penalties if the device is mounted to the dashboard",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA (49 CFR 392.82) prohibits CDL drivers from using handheld mobile devices in a CMV. The federal penalty structure: up to $2,750 per violation for the driver; up to $11,000 per violation for a carrier that required or allowed the device use. Two handheld device violations within 3 years result in 60-day CDL disqualification. Alabama's Hands-Free Act state fine and FMCSA's federal penalties are separate and both apply. A mounted device operated with a single button press for answering calls is permitted; manual typing, holding the phone, or visual interaction while moving are all prohibited.",
    },
    {
      question: "Under FMCSA HazMat regulations, what endorsement is required to transport Class 1 (explosive) materials as a CDL driver?",
      options: [
        "No special endorsement beyond a standard CDL is required for Class 1 materials",
        "An HazMat (H) endorsement — which requires TSA security threat assessment background check and fingerprinting",
        "A Class 1 Explosives endorsement (E) — separate from the standard HazMat endorsement",
        "A tanker (N) endorsement is required when transporting liquid explosives in addition to HazMat",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA requires an HazMat (H) endorsement for all CDL drivers who transport hazardous materials requiring placarding — including Class 1 (explosives). The HazMat endorsement requires: (1) passing the HazMat knowledge test (30 questions, 80%); (2) TSA security threat assessment (STA), which includes fingerprinting and a background check; (3) TSA approval. The TSA STA for HazMat endorsement renewal must be completed every 5 years. Alabama has several military installations (Redstone Arsenal, Fort Rucker) and chemical manufacturing facilities that generate HazMat CDL cargo — understanding HazMat placard requirements and routes is relevant for Alabama CDL holders.",
    },
    {
      question: "A CDL driver must use the emergency signal (warning triangles, flares, or reflective devices) when stopping a commercial vehicle on the road. Within how many minutes must the driver display the devices after stopping?",
      options: [
        "Within 5 minutes of stopping",
        "Within 10 minutes of stopping",
        "Within 30 minutes of stopping",
        "Immediately — before the driver exits the vehicle for any reason",
      ],
      correctIndex: 0,
      explanation:
        "FMCSA (49 CFR 392.22) requires a CMV driver who stops on a highway to place warning devices within 10 minutes of stopping. However, the regulation specifies 'within 10 minutes' for the standard placement — but also requires that while placing devices, the driver must use a hand-held warning device (flashlight or warning triangle) immediately upon stopping. Alabama roads — including rural I-65 and US-231 corridors — have sections with limited shoulder space where stopped vehicles create significant hazard. Warning triangles must be placed at: 10 feet toward approaching traffic, 100 feet behind the vehicle, and 100 feet ahead of the vehicle on highways; adjusted for curves and hills.",
    },
  ],
  faqs: [
    {
      question: "How many questions are on the Alabama CDL General Knowledge test?",
      answer:
        "The Alabama CDL General Knowledge test has 50 questions. You need 40 correct (80%) to pass. Alabama endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), Air Brakes (25 questions). All require 80% to pass. Contact ALEA for current testing fee schedules.",
    },
    {
      question: "What is Alabama's CDL DUI standard and reinstatement process?",
      answer:
        "Alabama CDL holders in a CMV face the federal 0.04% BAC limit. A DUI in any vehicle triggers FMCSA disqualification: 1 year for first offense, lifetime for second. Alabama requires ALL DUI conviction holders to complete ADECA DUI school before license reinstatement — regardless of whether the DUI was in a CMV or personal vehicle. CDL holders must also complete the FMCSA reinstatement process and wait out the disqualification period before returning to CDL employment.",
    },
    {
      question: "Where can Alabama CDL applicants take tests?",
      answer:
        "Alabama CDL knowledge tests are available at ALEA Driver License examination sites statewide. CDL skills tests are administered at ALEA-approved testing locations. Alabama has CDL testing available in Birmingham, Montgomery, Huntsville, Mobile, Tuscaloosa, and other cities. Contact ALEA Driver License Division for current testing locations and scheduling procedures.",
    },
    {
      question: "What Port of Mobile routing knowledge do Alabama CDL drivers need?",
      answer:
        "Alabama CDL drivers serving Port of Mobile terminals should know: (1) I-10 Wallace Tunnel height clearance (14 feet posted); (2) Port Authority terminal entry procedures including gate scales; (3) US 90/98 approach routes; (4) rail crossing locations on port access roads; (5) restricted turn movements near terminal gates due to crane clearance zones; (6) Alabama State Port Authority's hazardous cargo handling areas. Heavy rains can create temporary road flooding on some Mobile Bay approach routes.",
    },
    {
      question: "What is the process for Alabama CDL skills testing?",
      answer:
        "Alabama CDL skills tests (pre-trip inspection, basic vehicle control, on-road driving) are administered at ALEA-approved testing locations. Applicants must pass the knowledge test first. ALEA coordinates with approved Third Party Testers for skills test administration. Skills tests must use vehicles appropriate for the CDL class being tested (Class A test requires a combination vehicle, Class B requires a straight truck, etc.).",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Alabama?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Alabama?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Alabama DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Alabama CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Alabama DMV for available language options.",
    },
    {
      question: "How long is a Alabama CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Alabama CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Alabama CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Alabama, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "AL Driver's License", href: "/alabama-dmv-practice-test" },
    { label: "AL Motorcycle Test", href: "/alabama-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function AlabamaCDLPage() {
  return <PracticeTestPage {...data} />;
}
