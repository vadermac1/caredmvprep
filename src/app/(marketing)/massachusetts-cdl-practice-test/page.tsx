import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Massachusetts CDL Practice Test 2025 – Free MA RMV Commercial License Exam Prep",
  description:
    "Free Massachusetts CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your MA Registry of Motor Vehicles CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/massachusetts-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/massachusetts-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Massachusetts",
  stateAbbr: "MA",
  testLabel: "CDL General Knowledge Test",
  slug: "massachusetts-cdl-practice-test",
  headline: "Massachusetts CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Massachusetts CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Massachusetts CDL Manual. All MA Registry of Motor Vehicles (RMV) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Massachusetts CDL Manual",
  about: [
    "Massachusetts CDL testing is administered by the Registry of Motor Vehicles (RMV) at service centers and approved third-party testing sites throughout the state. The CDL General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Massachusetts CDL Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all Massachusetts CDL applicants regardless of vehicle class or endorsements.",
    "Massachusetts-specific CDL considerations include: Massachusetts uses the term OUI (Operating Under the Influence) rather than DUI — CDL holders in a CMV face a 0.04% BAC OUI threshold. An OUI conviction in any vehicle triggers CDL disqualification under both FMCSA regulations and Massachusetts law. Massachusetts's Hands-Free Law (effective February 2020) applies to CDL operators — commercial drivers also face federal FMCSA penalties up to $2,750 per handheld device violation. Massachusetts's Move Over law requires commercial vehicles to move over or reduce speed for stationary emergency vehicles. Massachusetts rotaries (traffic circles) on state highways present challenges for CDL drivers in large vehicles.",
    "After passing the General Knowledge test, Massachusetts CDL applicants must pass endorsement-specific knowledge tests and a skills test at an RMV-approved testing site. Massachusetts is a significant freight corridor state — commercial vehicles frequently operate on I-90 (Mass Pike), I-93, I-95, and Routes 3 and 128. CDL drivers must be aware of the various weight and height restrictions on Massachusetts roads and bridges, including the older infrastructure in Boston's urban core. Massachusetts CDLs are valid for 4 years.",
  ],
  sampleQuestions: [
    { question: "Massachusetts CDL holders in a commercial motor vehicle face what OUI/BAC limit?", options: ["0.08% — same as standard OUI", "0.04%", "0.02%", "Massachusetts OUI law does not apply to commercial drivers"], correctIndex: 1, explanation: "Massachusetts CDL holders are subject to the federal 0.04% BAC limit while operating a commercial motor vehicle — half the standard adult OUI (Operating Under the Influence) threshold of 0.08%. Massachusetts uses the term OUI rather than DUI. An OUI conviction in any vehicle (personal or commercial) triggers CDL disqualification: 1 year for a first offense, lifetime for a second, under both FMCSA regulations and Massachusetts law." },
    { question: "Massachusetts's Hands-Free Law applies to CDL operators. What additional federal penalty applies?", options: ["No federal penalty — only MA's Hands-Free Law fine applies", "FMCSA civil penalties up to $2,750 per violation for handheld device use in a CMV", "A mandatory 30-day CDL suspension from the MA RMV", "CDL holders are exempt from the Hands-Free Law when using navigation software"], correctIndex: 1, explanation: "Massachusetts's Hands-Free Law (effective February 23, 2020) applies to all drivers including CDL holders. CDL drivers in a CMV also face federal FMCSA penalties (49 CFR 392.82): civil penalties up to $2,750 per violation and potential CDL disqualification for multiple violations. Massachusetts fines ($100 first, $250 second, $500 third+) apply simultaneously with federal penalties. Violations appear on the driver's PSP record viewed by future employers." },
    { question: "Massachusetts rotaries (traffic circles) create a unique challenge for CDL drivers because:", options: ["Rotaries give entering traffic the right of way — trucks must yield to entering cars", "Inside traffic has the right of way — CDL drivers in large vehicles must yield to circulating traffic and plan lane choice before entering", "CDL vehicles over 40 feet are prohibited from using Massachusetts rotaries", "Rotary speeds are posted at 45 mph for commercial vehicles"], correctIndex: 1, explanation: "Massachusetts rotary rules give right of way to traffic INSIDE the rotary — entering vehicles must yield. For CDL drivers: large trucks require careful lane selection before entering a rotary because it's difficult to change lanes inside. Identify your exit before entering, choose the appropriate lane, and yield to all circulating traffic before merging. Massachusetts has some large multi-lane rotaries (like the one in Braintree on Route 128) that require CDL drivers to plan their approach carefully." },
    { question: "Under FMCSA regulations, what is the 34-hour restart provision?", options: ["A driver may add 34 hours to their available driving time by resting for 34 hours", "After a 34-consecutive-hour off-duty period, a driver's 60/70-hour clock resets to zero", "After 34 hours on-duty, a driver must rest for 8 hours", "The 34-hour restart allows 34 hours of off-duty time spread over multiple days"], correctIndex: 1, explanation: "The 34-hour restart (49 CFR 395.3) allows property-carrying drivers to reset their 60-hour/7-day or 70-hour/8-day limit by taking at least 34 consecutive hours off duty (or in the sleeper berth). After the 34-hour off-duty period, the driver's accumulated on-duty time resets to zero for the weekly limit calculation. The restart must include two periods from 1 AM to 5 AM home terminal time." },
    { question: "What Massachusetts bridge or road restriction is most important for CDL drivers operating in the Boston metropolitan area?", options: ["All bridges in Boston are rated for unlimited commercial vehicle weight", "Massachusetts has many older bridges with posted weight and height restrictions that CDL drivers must check before routing through urban areas", "Only the Tobin Bridge has weight restrictions — all other MA bridges allow full commercial vehicle weights", "Massachusetts has no height restrictions — all CDL vehicles are permitted under any Massachusetts overpass"], correctIndex: 1, explanation: "Massachusetts has significant older infrastructure — particularly in Boston and surrounding communities — with weight restrictions (posted tonnage limits on older bridges) and height restrictions (low bridges and tunnels). CDL drivers must know their vehicle's weight (axle weights and GVWR) and height, and plan routes to avoid overweight or overheight violations. The MassDOT provides bridge weight restriction information. Hitting a restricted bridge or tunnel is a serious safety and legal violation." },
    { question: "What is the proper pre-trip inspection order for a Massachusetts CDL driver operating a tractor-trailer?", options: ["Begin at the back of the trailer and work forward to the cab", "Complete a systematic walk-around covering the engine compartment, cab, front of tractor, driver side, rear of tractor, passenger side, and trailer", "Check only safety-critical items: brakes, tires, and lights — other components are checked monthly", "Inspection order doesn't matter as long as all 7 areas are covered"], correctIndex: 1, explanation: "The FMCSA-required pre-trip inspection follows a systematic walk-around in a specific order to ensure nothing is missed: (1) engine compartment — fluid levels, belts, hoses; (2) cab — controls, emergency equipment, documents; (3) front of tractor — lights, mirrors, windshield; (4) left (driver) side — tires, wheels, fuel, suspension; (5) rear of tractor — axles, brakes, coupling; (6) passenger side — mirror side; (7) rear of trailer — lights, doors, cargo. Massachusetts CDL inspectors expect drivers to follow this systematic approach." },
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
    { question: "How many questions are on the Massachusetts CDL General Knowledge test?", answer: "The Massachusetts CDL test has 50 questions. You must answer at least 40 correctly — 80% — to pass. Massachusetts uses the RMV (Registry of Motor Vehicles) for CDL testing, not a DMV. CDL knowledge tests are administered at RMV service centers and approved third-party sites." },
    { question: "What is Massachusetts's OUI and how does it affect CDL holders?", answer: "Massachusetts uses OUI (Operating Under the Influence) rather than DUI or DWI. CDL holders operating a commercial motor vehicle face the federal 0.04% BAC OUI threshold — half the standard 0.08% adult limit. An OUI conviction in any vehicle — personal car or commercial vehicle — triggers CDL disqualification under FMCSA regulations: 1 year for a first offense, lifetime for a second." },
    { question: "Are there specific road or bridge restrictions for CDL drivers in Massachusetts?", answer: "Yes. Massachusetts has older infrastructure with posted weight limits on many bridges and height restrictions on tunnels and underpasses, especially in greater Boston. CDL drivers should use MassDOT's truck route maps and know their vehicle's GVWR, axle weights, and total height before routing through the Boston metro area. Violations of posted weight limits carry significant fines." },
    { question: "How do Massachusetts rotaries affect CDL drivers?", answer: "Massachusetts rotaries (traffic circles) give right of way to traffic already circulating inside the rotary — entering vehicles yield. CDL drivers in large trucks must: select the correct lane before entering (difficult to change inside), yield to all circulating traffic, and ensure the truck can safely maneuver the rotary's radius. Large rotaries like the one at Route 128 in Braintree require careful approach planning for CDL operators." },
    { question: "How long is a Massachusetts CDL valid?", answer: "A Massachusetts CDL is valid for 4 years. Your DOT medical certificate must remain current throughout the CDL's validity. HazMat endorsements require TSA security clearance renewal every 5 years. Massachusetts CDL holders must self-certify their medical status category annually at the RMV." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Massachusetts?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Massachusetts?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Massachusetts DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Massachusetts CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Massachusetts DMV for available language options.",
    },
    {
      question: "How long is a Massachusetts CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Massachusetts CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Massachusetts CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Massachusetts, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "MA Driver's License", href: "/massachusetts-dmv-practice-test" },
    { label: "MA Motorcycle Test", href: "/massachusetts-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL General Knowledge", href: "/cdl-general-knowledge" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function MassachusettsCDLPage() {
  return <PracticeTestPage {...data} />;
}
