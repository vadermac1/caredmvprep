import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Colorado CDL Practice Test 2025 – Free CO Division of Motor Vehicles Commercial License Exam Prep",
  description:
    "Free Colorado CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your CO Division of Motor Vehicles CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/colorado-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/colorado-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Colorado",
  stateAbbr: "CO",
  testLabel: "CDL General Knowledge Test",
  slug: "colorado-cdl-practice-test",
  headline: "Colorado CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Colorado CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Colorado CDL Manual. All CO Division of Motor Vehicles (DMV) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Colorado CDL Manual",
  about: [
    "Colorado CDL testing is administered by the Division of Motor Vehicles (DMV), part of the Colorado Department of Revenue (CDOR). The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Colorado CDL Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all Colorado CDL applicants regardless of vehicle class or endorsements. CDL skills tests are conducted at DMV-approved third-party testing sites.",
    "Colorado-specific CDL considerations include: Colorado's DWAI law (0.05%–0.079% BAC) creates a lower impaired-driving threshold than most states. CDL holders in a CMV face the federal 0.04% BAC limit — stricter than even Colorado's DWAI threshold. Colorado's cannabis DUI law (5 ng/mL THC) also applies to CDL operators — cannabis impairment while operating a CMV is a CDL disqualifying offense under FMCSA regulations. Colorado's hands-free law (HB 22-1247, effective April 2023) applies to CDL drivers — commercial operators also face federal FMCSA penalties up to $2,750 per handheld device violation.",
    "Colorado's mountainous terrain is the most significant CDL-specific challenge in the state. Interstate highways I-70, I-25, US 6, and US 40 pass through major mountain passes with steep, extended grades. Colorado has a system of mandatory truck inspection stations and 'Truck Ramps Required' signs that CDL drivers must follow. Chain control requirements during winter weather are strictly enforced on mountain passes. Runaway truck ramps are located on critical downgrades — CDL drivers must know how to use them. Colorado CDLs are valid for 4 years.",
  ],
  sampleQuestions: [
    { question: "Colorado CDL holders in a commercial motor vehicle face what BAC limit?", options: ["0.08% — same as standard DUI", "0.05% — Colorado's DWAI threshold", "0.04% — the federal CDL threshold in a CMV", "0.00% — any alcohol prohibited while holding a CDL in Colorado"], correctIndex: 2, explanation: "Colorado CDL holders operating a commercial motor vehicle are subject to the federal 0.04% BAC limit — below both Colorado's DUI threshold (0.08%) and the DWAI threshold (0.05%). Colorado's cannabis DUI law (5 ng/mL THC) also applies to CDL operators in a CMV. A DUI, DWAI, or cannabis DUI conviction in any vehicle triggers CDL disqualification: 1 year for a first offense, lifetime for a second." },
    { question: "Colorado has mandatory truck inspection stations on I-70. What must CDL drivers do?", options: ["Inspection stations are optional for vehicles under 80,000 lbs", "All commercial vehicles must pull into open weigh and inspection stations — bypass is only permitted via PrePass for cleared vehicles", "Only vehicles with HazMat loads must stop at Colorado inspection stations", "Inspection stations are only staffed during weekday business hours — CDL drivers can bypass at night and weekends"], correctIndex: 1, explanation: "Colorado's weigh and inspection stations on I-70 and other major corridors are mandatory for all commercial motor vehicles over 10,000 lbs GVWR when the station is open. PrePass electronic bypass is available for carriers with clean safety records — a green light from PrePass sensors allows bypass. Bypassing an open station without PrePass authorization is a serious violation in Colorado and can result in being turned around, fined, and placed out of service." },
    { question: "Colorado's I-70 mountain corridor has 'Trucks Restricted in Left Lane' signs on steep grades. What does this mean?", options: ["Trucks must use the left lane only on all Colorado mountain passes", "Commercial vehicles are prohibited from using the left lane on designated steep grade sections — they must use the right lane", "Only trucks under 30,000 lbs may use the left lane on CO mountain passes", "The sign is advisory only — CDL drivers may use any lane at their discretion"], correctIndex: 1, explanation: "Colorado's 'Trucks Restricted in Left Lane' signs on steep I-70 grades (such as Eisenhower Tunnel approach and Floyd Hill) require commercial vehicles to use only the right travel lane on those sections. These signs are posted to prevent slow-moving trucks from blocking passing traffic and to reduce collision risk on steep grades. Violation of lane restriction signs for commercial vehicles is a traffic citation in Colorado and a violation for CDL holders." },
    { question: "What is a runaway truck ramp and when should a Colorado CDL driver use one?", options: ["A runaway ramp is a dedicated truck rest area on mountain highways — use it whenever fatigued", "A runaway ramp is a gravel or sand escape path used when a truck's brakes have failed or become insufficient to safely control speed on a steep downgrade", "A runaway ramp is only for use by trucks that have mechanical failures unrelated to brakes", "Runaway ramps are provided as an option — CDL drivers should try to stop in the travel lane first"], correctIndex: 1, explanation: "A runaway truck ramp (escape ramp) is a gravel or sand-filled emergency lane designed to safely stop a commercial vehicle that has lost braking effectiveness on a steep downgrade. Colorado has numerous runaway ramps on I-70, US 6, and other mountain passes. CDL drivers who feel brakes losing effectiveness MUST use the ramp — attempting to continue will result in loss of vehicle control at high speed. Using the ramp is always the right choice. Ramps can be reset after use by emergency crews." },
    { question: "Colorado's chain control requirements for CDL drivers on mountain passes:", options: ["Chain controls are optional — CDL drivers decide whether chains are needed", "When Colorado DOT posts chain control, commercial vehicles must have chains installed or have traction tires meeting the stated requirement", "Chain controls only apply to passenger vehicles — CDL trucks have no chain requirement in Colorado", "Chain controls apply only on I-70 at Eisenhower Tunnel — other Colorado mountain passes are exempt"], correctIndex: 1, explanation: "Colorado DOT posts chain control requirements at mountain passes when conditions require it. For commercial vehicles: when Level 1 chain control is posted, CDL vehicles must have chains installed or have all-wheel drive with approved traction tires. When Level 2 chain control is posted, all commercial vehicles must have chains regardless of drive configuration. CDL drivers must carry chains when mountain travel is planned and must monitor CDOT road conditions at cotrip.org. Driving through chain control without chains is a serious violation." },
    { question: "Colorado's DWAI law (0.05%–0.079% BAC) affects CDL drivers because:", options: ["DWAI is below the CDL threshold of 0.04%, so it doesn't apply to CDL holders", "A DWAI conviction in a personal vehicle is still a criminal conviction that must be reported to FMCSA and can affect CDL employment", "DWAI is not a disqualifying offense for CDL holders in Colorado", "DWAI only applies to recreational cannabis — it doesn't affect CDL holders who drink alcohol"], correctIndex: 1, explanation: "A DWAI conviction (Driving While Ability Impaired, 0.05%–0.079% BAC) is a criminal conviction in Colorado. While DWAI is below the CDL-in-CMV threshold of 0.04%, a DWAI conviction in a personal vehicle: (1) must be reported to FMCSA; (2) appears on the driver's MVR; (3) can be grounds for CDL disqualification if the driver's employer's safety policy prohibits criminal impaired-driving convictions; (4) may affect the driver's insurability. CDL drivers should treat any BAC above 0.04% while operating their personal vehicles as a serious employment risk." },
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
    { question: "How many questions are on the Colorado CDL General Knowledge test?", answer: "The Colorado CDL test has 50 questions. You must answer at least 40 correctly — 80% — to pass. The Division of Motor Vehicles (DMV, part of CDOR) administers CDL testing at DMV offices and approved third-party testing sites throughout Colorado." },
    { question: "What makes Colorado CDL driving unique?", answer: "Colorado's mountain terrain is the defining CDL challenge: I-70 and other mountain highways have mandatory truck inspection stations, chain control requirements, 'Trucks in Right Lane Only' sections on steep grades, and runaway truck ramps for brake failures. CDL drivers must downshift before steep descents, use engine braking, and use snub braking — never ride the brakes continuously. Colorado also has strict chain control enforcement during winter weather." },
    { question: "Does Colorado's DWAI or cannabis DUI affect CDL holders?", answer: "Yes. Colorado's DWAI (0.05%–0.079% BAC) and cannabis DUI (5 ng/mL THC) in a personal vehicle are criminal convictions that must be reported to FMCSA and can affect CDL employment. CDL holders in a CMV face the federal 0.04% BAC threshold. Cannabis DUI triggers CDL disqualification under FMCSA regulations. Both DWAI and cannabis DUI are criminal records that employers review." },
    { question: "What is Colorado's chain control requirement for CDL drivers?", answer: "Colorado DOT posts chain control at mountain passes during winter weather. CDL drivers must have chains installed when required by the posted chain control level. CDL drivers should always carry chains when planning mountain routes in Colorado from approximately October through April. Monitor Colorado road conditions at cotrip.org. Driving through chain control without chains results in fines and possible out-of-service orders." },
    { question: "How long is a Colorado CDL valid?", answer: "A Colorado CDL is valid for 4 years. Your DOT medical certificate must remain current. HazMat endorsements require TSA security clearance renewal every 5 years. Colorado CDL holders must self-certify their medical status category annually at the DMV." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Colorado?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Colorado?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Colorado DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Colorado CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Colorado DMV for available language options.",
    },
    {
      question: "How long is a Colorado CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Colorado CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Colorado CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Colorado, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "CO Driver's License", href: "/colorado-dmv-practice-test" },
    { label: "CO Motorcycle Test", href: "/colorado-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function ColoradoCDLPage() {
  return <PracticeTestPage {...data} />;
}
