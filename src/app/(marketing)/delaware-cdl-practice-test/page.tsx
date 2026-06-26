import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Delaware CDL Practice Test 2025 – Free DE Commercial Driver's License Prep",
  description:
    "Prepare for your Delaware CDL knowledge test with free practice questions covering Delaware Memorial Bridge weight restrictions, I-95 Turnpike E-ZPass, Port of Wilmington routing, and DelDOT CDL requirements.",
  alternates: { canonical: "https://caredmvprep.com/delaware-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/delaware-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Delaware",
  stateAbbr: "DE",
  testLabel: "CDL Practice Test",
  slug: "delaware-cdl-practice-test",
  headline: "Delaware CDL Practice Test 2025",
  intro:
    "Delaware CDL applicants must pass FMCSA-compliant knowledge tests administered by the Delaware Division of Motor Vehicles (DelDOT). Delaware CDL operations include specific considerations: Delaware Memorial Bridge weight restrictions and high-wind closures, I-95 Delaware Turnpike E-ZPass requirements, Port of Wilmington routing for container freight, and Delaware's DUI 0.04% CMV standard. This free practice test covers Delaware-specific CDL topics.",
  basedOn: "FMCSA CDL Manual – Delaware DMV CDL Supplement",
  about: [
    "Delaware CDLs are issued by the Delaware Division of Motor Vehicles (DMV), operating under the Delaware Department of Transportation (DelDOT). CDL knowledge tests follow FMCSA requirements with an 80% passing score required. Delaware's position as a mid-Atlantic corridor state means a high volume of commercial traffic on I-95 (the Delaware Turnpike / JFK Memorial Highway) passing through the state. CDL drivers on the Delaware Turnpike must understand E-ZPass lane requirements and commercial vehicle toll rates. The Delaware Memorial Bridge (I-295/US 40) spans the Delaware River and has weight restrictions for commercial vehicles along with high-wind operational closures for high-profile CMVs.",
    "The Port of Wilmington is a major cold-storage maritime terminal on the Christina River, handling refrigerated cargo including bananas, citrus, and canned goods. CDL drivers routing to and from the Port of Wilmington must understand the specific approach routes through Wilmington's downtown street network, which has bridge height restrictions and weight-limited routes. Delaware's DUI BAC limit for CDL drivers operating a CMV is 0.04%, consistent with FMCSA standards. Delaware's SB 68 hands-free law applies to CDL drivers operating CMVs in Delaware.",
  ],
  sampleQuestions: [
    {
      question:
        "What is the FMCSA blood alcohol concentration (BAC) limit for a CDL driver operating a CMV in Delaware?",
      options: ["0.08%", "0.02%", "0.04%", "0.00%"],
      correctIndex: 2,
      explanation:
        "The FMCSA sets a BAC limit of 0.04% for CDL drivers operating a commercial motor vehicle — half the standard 0.08% limit for non-commercial drivers. This limit applies in Delaware whenever the driver is behind the wheel of a CMV. A Delaware CDL driver who tests at 0.04% BAC or higher is placed out of service immediately and faces CDL disqualification proceedings. Delaware also prohibits consuming alcohol within 4 hours of operating a CMV.",
    },
    {
      question:
        "Before routing a high-profile CMV across the Delaware Memorial Bridge (I-295) during a storm, what must a CDL driver do?",
      options: [
        "Proceed slowly across the bridge at reduced speed without checking conditions",
        "Check DelDOT bridge status for high-wind restrictions or closures affecting high-profile vehicles before attempting the crossing",
        "Use the center lane of the bridge for maximum distance from edge barriers",
        "High-profile CMVs are always permitted on the Delaware Memorial Bridge in any weather",
      ],
      correctIndex: 1,
      explanation:
        "The Delaware Memorial Bridge is subject to high-wind restrictions and operational closures specifically for high-profile commercial vehicles — box trucks, enclosed trailers, RVs, and empty flatbeds — during strong wind events. CDL drivers operating these vehicle types must check DelDOT traffic advisories and bridge status alerts before traveling during storm conditions. Attempting to cross a suspension bridge in a high-profile CMV during a high-wind advisory is extremely dangerous and may be restricted by law enforcement.",
    },
    {
      question:
        "On the Delaware Turnpike (I-95), what is the correct E-ZPass procedure for CDL vehicles?",
      options: [
        "CDL vehicles must always use cash toll lanes — E-ZPass is not available for commercial trucks",
        "CDL vehicles with E-ZPass transponders must use designated commercial E-ZPass lanes and slow to the posted speed through the toll plaza",
        "CDL vehicles are exempt from Delaware Turnpike tolls",
        "Any lane on the Delaware Turnpike can be used by CDL vehicles regardless of payment method",
      ],
      correctIndex: 1,
      explanation:
        "Commercial vehicles with E-ZPass transponders on the Delaware Turnpike (I-95) must use designated commercial E-ZPass lanes and reduce speed to the posted limit — typically 35 mph — through the toll plaza. Commercial vehicle toll rates differ from passenger car rates and are billed to the registered E-ZPass account. CDL drivers operating without a valid E-ZPass transponder in an E-ZPass-only lane face toll violations billed by mail with penalty fees.",
    },
    {
      question:
        "What routing consideration is critical for CDL drivers accessing the Port of Wilmington?",
      options: [
        "The Port of Wilmington is accessible directly from I-95 without street navigation",
        "CDL drivers must plan routes through Wilmington streets that accommodate the vehicle's height and weight — some city bridges and routes have restrictions",
        "The Port of Wilmington prohibits all CMVs over 26,000 GVWR",
        "CDL drivers accessing the Port of Wilmington must use only the Delaware Memorial Bridge approach",
      ],
      correctIndex: 1,
      explanation:
        "The Port of Wilmington is located on the Christina River in downtown Wilmington and is accessed through city streets that may have low-clearance bridges, weight-restricted routes, and narrow turns. CDL drivers must plan their routing to the port in advance, verifying bridge height clearances and weight limits on the specific streets they will use. Using a navigation system programmed for commercial vehicles (not standard GPS) is recommended to avoid routing onto streets that cannot accommodate the CMV's dimensions.",
    },
    {
      question:
        "Delaware's SB 68 hands-free law applies to CDL drivers. What device-related action is prohibited for a CMV operator in Delaware?",
      options: [
        "Using a CB radio mounted in the cab",
        "Using a GPS device mounted on the dashboard",
        "Physically holding a wireless device (cell phone) while operating the CMV",
        "Using a Bluetooth headset for dispatch communication",
      ],
      correctIndex: 2,
      explanation:
        "Delaware SB 68 prohibits all motor vehicle operators — including CDL drivers operating CMVs — from physically holding a wireless device while driving. CB radios, dash-mounted GPS devices, and Bluetooth headsets are not prohibited. FMCSA regulations also separately prohibit CDL drivers from texting or using a hand-held mobile telephone while operating a CMV in interstate commerce. Delaware SB 68 provides additional state-level enforcement for in-state CDL operations.",
    },
    {
      question:
        "When a CDL driver transporting hazardous materials approaches a railroad crossing in Delaware, what is required?",
      options: [
        "Slow to 15 mph and proceed if no train is visible and the gates are up",
        "Stop within 50 feet but not less than 15 feet of the nearest rail, then proceed when safe",
        "Hazmat vehicles must use a Delaware State Police escort through all railroad crossings",
        "Stop only if the automatic gates are in the lowered position",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA regulations require CDL drivers transporting hazardous materials to stop at all railroad crossings — even if the gates are up, the lights are not flashing, and no train is visible. The stop must be made within 50 feet but not less than 15 feet from the nearest rail. The driver must look and listen in both directions before proceeding. This requirement applies at all railroad crossings in Delaware regardless of whether the crossing has active warning devices.",
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
      question: "What agency issues CDLs in Delaware?",
      answer:
        "CDLs in Delaware are issued by the Delaware Division of Motor Vehicles (DMV), which operates under the Delaware Department of Transportation (DelDOT). This is somewhat unusual nationally — in most states, the DMV is a standalone agency or part of a separate administrative department, but Delaware's DMV is part of its transportation department. CDL applicants visit DelDOT/DMV offices in Dover, Newark, Wilmington, or Georgetown to complete the CDL application process.",
    },
    {
      question: "What CDL knowledge tests are required in Delaware?",
      answer:
        "All Delaware CDL applicants must pass the General Knowledge test. Depending on the license class and endorsements sought, additional tests include: Combination Vehicles (Class A), Air Brakes (if the vehicle has air brakes), Passenger Transport, Hazardous Materials (plus TSA security threat assessment), Tank Vehicles, Doubles/Triples, and School Bus. Each test requires a minimum score of 80%. CDL applicants must also pass a DOT physical examination and submit a current medical certificate.",
    },
    {
      question: "What are the Delaware Memorial Bridge rules for commercial vehicles?",
      answer:
        "The Delaware Memorial Bridge (I-295/US 40) has standard federal weight limits for commercial vehicles. During high-wind events, DelDOT may impose restrictions or closures specifically for high-profile commercial vehicles — box trucks, enclosed trailers, empty flatbeds, and similar vehicles that present large surface areas to crosswinds. CDL drivers of high-profile vehicles should monitor DelDOT traffic alerts before crossing during storm conditions. The bridge also has standard toll collection at the Delaware end of the crossing.",
    },
    {
      question: "What is the BAC limit for CDL drivers in Delaware?",
      answer:
        "The FMCSA BAC limit of 0.04% applies to CDL drivers operating a CMV in Delaware. Additionally, Delaware law and FMCSA regulations prohibit consuming alcohol within 4 hours before operating a CMV. A CDL driver who refuses a chemical test or tests at 0.04% or above is placed out of service and faces CDL disqualification. Delaware's standard DUI BAC limit of 0.08% applies to CDL holders driving personal vehicles.",
    },
    {
      question: "What should CDL drivers know about the Port of Wilmington?",
      answer:
        "The Port of Wilmington is Delaware's primary maritime cargo terminal, specializing in refrigerated (reefer) cargo including tropical fruits and other perishables. CDL drivers frequently access the port for loading and unloading container and break-bulk cargo. Routes to the Port of Wilmington pass through parts of Wilmington's city street network, which has low-clearance bridges and weight-restricted roads. CDL drivers should pre-plan their routing using commercial vehicle navigation tools and verify all bridge clearances and weight limits before entering Wilmington city streets with a large CMV.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Delaware?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Delaware?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Delaware DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Delaware CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Delaware DMV for available language options.",
    },
    {
      question: "How long is a Delaware CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Delaware CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Delaware CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Delaware, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Delaware DMV Practice Test", href: "/delaware-dmv-practice-test" },
    { label: "Delaware Motorcycle Practice Test", href: "/delaware-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function DelawareCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
