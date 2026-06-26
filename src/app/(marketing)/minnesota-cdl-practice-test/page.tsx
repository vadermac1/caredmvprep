import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Minnesota CDL Practice Test 2025 – Free MN DVS Commercial License Exam Prep",
  description:
    "Free Minnesota CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your MN Driver and Vehicle Services CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/minnesota-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/minnesota-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Minnesota",
  stateAbbr: "MN",
  testLabel: "CDL General Knowledge Test",
  slug: "minnesota-cdl-practice-test",
  headline: "Minnesota CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Minnesota CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Minnesota CDL Manual. All MN Driver and Vehicle Services (DVS) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Minnesota CDL Manual",
  about: [
    "Minnesota CDL testing is administered by Driver and Vehicle Services (DVS), part of the Minnesota Department of Public Safety (DPS). CDL knowledge tests are available at DVS exam stations; skills tests are conducted at DVS-approved third-party testing sites throughout Minnesota. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Minnesota CDL Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all Minnesota CDL applicants regardless of vehicle class or endorsements.",
    "Minnesota-specific CDL considerations include: Minnesota uses the term DWI (Driving While Intoxicated) rather than DUI. CDL holders in a commercial motor vehicle face the federal 0.04% BAC DWI threshold. Minnesota's zero-tolerance standard for under-21 drivers (any detectable alcohol) applies to personal vehicle operation, but CDL holders in a CMV face the federal 0.04% regardless of age. Minnesota's hands-free law (effective August 1, 2019) applies to CDL operators — commercial drivers also face federal FMCSA penalties up to $2,750 per handheld device violation. Minnesota's implied consent law (DWI test refusal = 1-year license revocation, covering the CDL endorsement) applies to all drivers.",
    "Minnesota's winter climate creates significant CDL challenges that are unique to the state. Spring road restrictions ('spring load restrictions' or 'road restrictions') are posted annually when thawing soil weakens roadbeds — CDL drivers must comply with posted weight restrictions during spring thaw, typically February through May. Minnesota also has county road bridge restrictions that CDL drivers must check before routing through rural areas. After passing General Knowledge, Minnesota CDL applicants must pass endorsement tests and skills tests at DVS-approved sites. Minnesota CDLs are valid for 4 years.",
  ],
  sampleQuestions: [
    { question: "Minnesota CDL holders operating a commercial motor vehicle face what DWI BAC limit?", options: ["0.08% — same as standard DWI", "0.04% — the federal CDL threshold in a CMV", "0.00% — Minnesota's zero-tolerance standard applies to CDL holders", "0.02% — Minnesota uses a stricter standard than federal law"], correctIndex: 1, explanation: "Minnesota CDL holders are subject to the federal 0.04% BAC limit while operating a commercial motor vehicle — half the standard adult DWI threshold of 0.08%. Minnesota uses the term DWI (Driving While Intoxicated) rather than DUI. A DWI conviction in any vehicle (personal or commercial) triggers CDL disqualification: 1 year for a first offense, lifetime for a second. Minnesota's zero-tolerance standard (any detectable alcohol for under-21 drivers) applies to personal vehicles, but CDL holders in a CMV face the federal 0.04% standard regardless of age." },
    { question: "What are Minnesota's spring road restrictions and how do they affect CDL drivers?", options: ["Spring restrictions are only advisory — CDL drivers are not legally required to comply", "Minnesota posts spring load restrictions on certain roads when thawing weakens roadbeds — CDL drivers must comply with posted weight limits", "Spring restrictions only apply to county roads — interstates and state highways are exempt", "Minnesota has no spring road restrictions — weight limits are constant year-round"], correctIndex: 1, explanation: "Minnesota imposes spring load restrictions annually when thawing soil weakens road subgrades, making roads susceptible to damage from heavy vehicles. Posted spring restriction signs reduce the allowable weight on affected roads — typically from standard legal weight to significantly lower limits (sometimes 5-ton axle limits on rural roads). CDL drivers must comply with posted spring restrictions. Overweight violations during spring restrictions carry significant fines. CDL operators should check MnDOT's spring restriction map at roads.dot.state.mn.us." },
    { question: "Minnesota's hands-free law applies to CDL operators. What additional consequence do commercial drivers face?", options: ["No additional consequence beyond Minnesota's $50 first-offense fine", "Federal FMCSA civil penalties up to $2,750 per violation in addition to Minnesota's fine", "A 30-day CDL suspension by DVS for a first Hands-Free violation", "CDL holders are exempt from hands-free law when using navigation in a commercial vehicle"], correctIndex: 1, explanation: "Minnesota's hands-free law (effective August 1, 2019) applies to all drivers including CDL operators. CDL holders in a CMV also face federal FMCSA penalties: civil penalties up to $2,750 per violation and potential CDL disqualification for multiple violations. Both Minnesota's state fine ($50 first, $275 second within 10 years) and the federal penalty apply simultaneously. Violations appear on the driver's PSP record reviewed by employers during pre-employment screening." },
    { question: "Minnesota's implied consent law means CDL drivers who refuse a DWI chemical test face:", options: ["A $200 fine only — no license action for a first refusal", "A 1-year license revocation on a first refusal — which covers the CDL endorsement", "A 30-day suspension followed by restricted CDL driving for 6 months", "No consequence — refusing a test is a constitutional right in Minnesota"], correctIndex: 1, explanation: "Minnesota's implied consent law (Minnesota Statute 169A.52) requires that by driving on Minnesota roads, all drivers consent to chemical testing. Refusing a test results in a 1-year license revocation for a first refusal — which covers BOTH the standard driver's license AND the CDL endorsement. A second refusal within 10 years: 2-year revocation. Prosecutors can also use the refusal as evidence in a DWI trial. CDL drivers should never refuse testing — the revocation of the CDL endorsement can end a career." },
    { question: "What winter CDL hazard is unique to Minnesota's rural county roads?", options: ["County road bridges that close in winter — CDL vehicles must wait until spring", "Frozen lake roads (ice roads) that are sometimes authorized for commercial vehicle use in remote areas", "Snow drifts on county roads require CDL drivers to tow a snow blower at all times", "Minnesota rural county roads are always closed to commercial vehicles in winter"], correctIndex: 1, explanation: "Some of Minnesota's most remote rural areas — particularly in northern Minnesota — use frozen lake ice roads as official transportation routes in winter. The Minnesota DOT and county authorities authorize certain ice roads for commercial vehicle use when ice thickness is sufficient. CDL drivers operating on authorized ice roads must know the posted weight limit for the ice road, drive at the recommended speed to minimize ice flexion waves, and never stop on an ice road. Ice road operations are a uniquely Minnesota CDL knowledge area." },
    { question: "Minnesota requires headlights when windshield wipers are running. How does this apply to commercial vehicles?", options: ["Only passenger cars must follow the wiper-activated headlight rule — CDL vehicles are exempt", "All motor vehicles in Minnesota must have headlights on whenever wipers are operating — including commercial trucks", "CDL vehicles must use headlights only between 30 minutes after sunset and 30 minutes before sunrise", "The headlight-with-wipers rule applies only to vehicles under 26,001 lbs GVWR"], correctIndex: 1, explanation: "Minnesota's headlight-with-wipers law applies to ALL motor vehicles on Minnesota roads — including commercial trucks and buses. Whenever windshield wipers are operating due to precipitation (rain, snow, sleet, or fog), all headlights must be on. For CDL vehicles with multiple sets of lights, all required lights must be operational. In Minnesota's frequent adverse weather, being visible to other vehicles is critical — commercial trucks are especially difficult to see from the rear in heavy precipitation without tail lights and clearance lights." },
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
    { question: "How many questions are on the Minnesota CDL General Knowledge test?", answer: "The Minnesota CDL test has 50 questions. You must answer at least 40 correctly — 80% — to pass. Driver and Vehicle Services (DVS), part of MN DPS, administers CDL testing at exam stations and approved third-party testing sites." },
    { question: "What is Minnesota's DWI standard for CDL holders?", answer: "Minnesota CDL holders operating a commercial motor vehicle face the federal 0.04% BAC limit — half the standard adult DWI threshold of 0.08%. Minnesota uses the term DWI (Driving While Intoxicated). A DWI conviction in any vehicle triggers CDL disqualification: 1 year first offense, lifetime for a second. Minnesota's implied consent law: test refusal = 1-year revocation covering the CDL endorsement." },
    { question: "What are Minnesota's spring road restrictions for CDL drivers?", answer: "Minnesota posts annual spring load restrictions (typically February–May) on roads where thawing weakens the roadbed. CDL drivers must comply with posted weight limits on restricted roads — which may be significantly lower than standard legal weight. Overweight violations during spring restrictions carry high fines. Check MnDOT's spring restriction map at roads.dot.state.mn.us before operating on rural Minnesota roads in spring." },
    { question: "Does Minnesota's headlight law apply to CDL vehicles?", answer: "Yes. Minnesota requires headlights on ALL motor vehicles whenever windshield wipers are operating due to weather — including commercial trucks. All required lights (headlights, taillights, clearance lights, and identification lights) must be on and functional when wipers are running. This law significantly improves CDL vehicle visibility in Minnesota's frequent precipitation and adverse weather conditions." },
    { question: "How long is a Minnesota CDL valid?", answer: "A Minnesota CDL is valid for 4 years. Your DOT medical certificate must remain current throughout the validity period. HazMat endorsements require TSA security clearance renewal every 5 years. Minnesota CDL holders must self-certify their medical status category annually at DVS." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Minnesota?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Minnesota?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Minnesota DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Minnesota CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Minnesota DMV for available language options.",
    },
    {
      question: "How long is a Minnesota CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Minnesota CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Minnesota CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Minnesota, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "MN Driver's License", href: "/minnesota-dmv-practice-test" },
    { label: "MN Motorcycle Test", href: "/minnesota-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL General Knowledge", href: "/cdl-general-knowledge" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MinnesotaCDLPage() {
  return <PracticeTestPage {...data} />;
}
