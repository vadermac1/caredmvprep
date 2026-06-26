import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New Hampshire CDL Practice Test 2025 – Free DMV Commercial License Prep",
  description: "Prepare for the New Hampshire DMV CDL knowledge exam with questions on OUI 0.04% BAC for CMV operators, Franconia Notch 2-lane interstate commercial vehicle access, I-93 corridor freight operations, NH Turnpike E-ZPass CDL toll procedures, and White Mountain winter driving for commercial vehicles.",
  alternates: { canonical: "https://caredmvprep.com/new-hampshire-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/new-hampshire-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New Hampshire",
  stateAbbr: "NH",
  testLabel: "CDL Practice Test",
  slug: "new-hampshire-cdl-practice-test",
  headline: "New Hampshire CDL Practice Test 2025",
  intro: "The New Hampshire Division of Motor Vehicles issues Commercial Driver's Licenses for Class A, B, and C vehicles. The CDL knowledge exam covers FMCSA regulations and New Hampshire-specific rules including OUI at 0.04% BAC for CMV operators (RSA 265-A terminology), Franconia Notch 2-lane interstate commercial vehicle access, I-93 Boston-to-Montreal freight corridor operations, New Hampshire Turnpike E-ZPass CDL toll procedures, and White Mountain winter driving conditions for commercial vehicles.",
  basedOn: "New Hampshire DMV CDL Manual / FMCSA Federal Motor Carrier Safety Regulations",
  about: [
    "New Hampshire's CDL program is administered by the Division of Motor Vehicles. New Hampshire uses OUI (Operating Under the Influence) terminology under RSA 265-A — CDL holders operating commercial motor vehicles are subject to the federal 0.04% BAC threshold, which New Hampshire applies using OUI rather than DUI language. I-93 is the primary CDL freight corridor through New Hampshire, running from the Massachusetts border north through Manchester, Concord, and the White Mountains before connecting to I-91 in Vermont (via the Franconia Notch section) and continuing toward Montreal. CDL operators on I-93 must understand the unique Franconia Notch 2-lane section (NH Route 18) and its specific implications for commercial vehicles.",
    "The Franconia Notch 2-lane interstate section is the only such section in the U.S. Interstate System. Commercial vehicles ARE permitted on this section — the narrowed roadway did not exclude commercial traffic. However, CDL operators must exercise particular caution: the narrower lanes (typically 11 feet rather than the standard 12-foot interstate lane), reduced sight distances at curves, and the higher traffic volume during summer tourist season create specific CDL operational challenges. New Hampshire Turnpike toll procedures also matter for CDL operations — the F.E. Everett Turnpike and I-293 system uses E-ZPass, and some plazas have converted to all-electronic tolling (AET) where CDL drivers must use E-ZPass or receive bill-by-mail invoices. CDL carriers should ensure their vehicles have registered fleet E-ZPass accounts to avoid accumulating toll invoices.",
  ],
  sampleQuestions: [
    {
      question: "A New Hampshire CDL holder is found to have a BAC of 0.05% while operating a Class A combination vehicle on I-93. What applies under NH's OUI statute (RSA 265-A) and FMCSA regulations?",
      options: ["0.05% is below the commercial CMV threshold — no violation", "0.05% exceeds the 0.04% CMV OUI threshold — the driver is in violation of both RSA 265-A and FMCSA regulations", "NH's OUI terminology means the 0.04% threshold does not apply to CDL holders", "A warning is issued for first-time readings between 0.04% and 0.07%"],
      correctIndex: 1,
      explanation: "The BAC threshold for CDL holders operating commercial motor vehicles is 0.04% — federal FMCSA standard adopted in New Hampshire under RSA 265-A OUI terminology. A reading of 0.05% exceeds this CMV OUI threshold. New Hampshire's use of OUI rather than DUI terminology does not change the applied BAC standard for CDL holders — the federal FMCSA 0.04% requirement supersedes any variation in state terminology. A first OUI conviction at the CMV threshold results in mandatory one-year CDL disqualification (three years if hauling hazardous materials)."
    },
    {
      question: "Franconia Notch on I-93 (NH Route 18) is a 2-lane interstate section. Are CDL commercial vehicles permitted on this section?",
      options: ["No — all commercial vehicles must use an alternate route bypassing Franconia Notch", "Yes — commercial vehicles are permitted on the Franconia Notch 2-lane section, but CDL drivers must exercise extra caution due to narrower lanes and reduced sight distances", "Only Class B and C vehicles are permitted — Class A combination vehicles are prohibited", "CDL vehicles may only use the Franconia Notch section between midnight and 6 AM to reduce traffic conflicts"],
      correctIndex: 1,
      explanation: "Commercial vehicles are permitted on the Franconia Notch 2-lane I-93 section (NH Route 18). The road carries the standard interstate 65 mph speed limit. However, CDL drivers must be aware that this section has narrower lanes than a standard interstate (approximately 11 feet), reduced sight distances in curves through the notch, and higher tourist traffic during summer months. Wide loads or oversize permits may have specific restrictions on this section — CDL operators with oversize loads should verify that their permit authorizes the Franconia Notch route or use an alternate if required."
    },
    {
      question: "A CDL driver operating on the NH Turnpike (F.E. Everett Turnpike / I-293) approaches an all-electronic tolling (AET) plaza without an E-ZPass transponder. What will happen?",
      options: ["The driver must stop at a toll booth and pay cash", "The vehicle's license plate is photographed and the registered owner/carrier receives a bill-by-mail invoice", "The AET plaza raises the gate automatically for commercial vehicles — billing is handled through the carrier's IFTA account", "CDL vehicles are exempt from NH Turnpike tolls under FMCSA interstate commerce regulations"],
      correctIndex: 1,
      explanation: "New Hampshire Turnpike all-electronic tolling (AET) plazas photograph license plates of vehicles without E-ZPass transponders and send bill-by-mail (Pay-by-Plate) invoices to the registered owner or carrier. For commercial vehicles, the invoice goes to the carrier's registered address. Unpaid toll invoices accumulate fees and can result in collections actions. CDL carriers operating regularly on NH Turnpike routes should have fleet E-ZPass accounts for their vehicles to avoid administrative fees from Pay-by-Plate billing. Some NH toll plazas still have manned cash lanes — AET applies specifically at those converted to all-electronic operation."
    },
    {
      question: "A CDL driver on I-93 south of Franconia Notch encounters an early November ice storm that coats the roadway with black ice. The driver has a scheduled delivery appointment. What is the correct FMCSA-compliant decision?",
      options: ["Continue at reduced speed of 45 mph to make the delivery appointment", "The driver may invoke the FMCSA weather/hazard condition right to refuse to drive when road conditions are imminently hazardous — pull to a safe location and wait for conditions to improve", "Continue at 55 mph — FMCSA considers I-93 in NH to be an all-weather route", "Contact dispatch for permission before stopping due to weather"],
      correctIndex: 1,
      explanation: "FMCSA regulations protect CDL drivers' right to refuse to operate a commercial vehicle when they reasonably believe road conditions present an imminent hazard. Black ice on I-93 through the White Mountain region is exactly this type of hazard — a fully loaded commercial vehicle on black ice at speed has severely compromised braking and steering control. The driver may park safely at the nearest rest area, truck stop, or safe location and wait for conditions to improve without employer retaliation. Delivery appointment urgency does not override this driver right. New Hampshire winter road conditions can deteriorate rapidly in mountain areas."
    },
    {
      question: "A CDL carrier operating a fleet on I-93 between Massachusetts and Quebec must pass through New Hampshire's two major population centers. What are the primary weigh station compliance points CDL drivers should know on this I-93 corridor?",
      options: ["CDL vehicles on I-93 in NH are exempt from weigh stations during overnight hours", "CDL drivers must comply with all New Hampshire portable and fixed weigh station operations on I-93 — typically located south of Concord and in the North Country — and must not bypass operating weigh stations", "Weigh stations on I-93 in NH only apply to Class A vehicles", "CDL weigh station compliance in NH is handled through the PrePass system only — no physical stops are required"],
      correctIndex: 1,
      explanation: "CDL operators on I-93 in New Hampshire must comply with all weigh station operations — both fixed stations and portable inspection sites. New Hampshire uses the PrePass screening system, which allows pre-certified carriers to bypass fixed weigh stations when the PrePass transponder signals a green light. However, carriers without PrePass or those flagged for inspection must exit at operating weigh stations. Bypassing an operating weigh station is a serious violation that can result in out-of-service orders and CDL action. CDL operators new to the NH I-93 corridor should not assume PrePass bypass applies to their vehicle until they have confirmed their carrier's PrePass enrollment status."
    },
    {
      question: "A CDL driver in New Hampshire is convicted of OUI for the first time — the offense occurred while driving their personal car on a Sunday. What happens to their CDL?",
      options: ["No CDL consequence — the offense was in a personal vehicle, not a commercial vehicle", "Mandatory one-year CDL disqualification regardless of vehicle type at time of offense", "90-day CDL suspension matching the personal license action", "CDL probation for 18 months with mandatory alcohol treatment"],
      correctIndex: 1,
      explanation: "Under FMCSA regulations, a first OUI conviction — whether in a personal vehicle or a commercial vehicle — results in mandatory one-year CDL disqualification. New Hampshire uses OUI terminology under RSA 265-A, but the federal CDL disqualification triggers on any OUI/DUI conviction regardless of state terminology variation. A second OUI conviction (in any vehicle) results in lifetime CDL disqualification. New Hampshire CDL holders must understand that their off-duty behavior in personal vehicles directly and permanently affects their commercial driving career."
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
      question: "What OUI BAC limit applies to New Hampshire CDL holders in a commercial vehicle?",
      answer: "New Hampshire CDL holders operating commercial motor vehicles are subject to a 0.04% BAC OUI threshold — half the standard adult limit of 0.08%. New Hampshire uses OUI (Operating Under the Influence) terminology under RSA 265-A rather than DUI, but the federal FMCSA 0.04% standard applies regardless of the state's terminology. A first OUI conviction (in any vehicle) results in mandatory one-year CDL disqualification — three years if the CMV was carrying hazardous materials. A second conviction results in lifetime CDL disqualification. New Hampshire's Implied Consent law (RSA 265-A:30) applies to CDL holders — refusal to submit to chemical testing triggers administrative license suspension."
    },
    {
      question: "Can CDL vehicles use the Franconia Notch 2-lane I-93 section?",
      answer: "Yes. Commercial vehicles are permitted on the Franconia Notch 2-lane section of I-93 (NH Route 18). The road carries the standard 65 mph interstate speed limit. The Franconia Notch section does present specific CDL challenges: narrower lanes (approximately 11 feet rather than the standard 12-foot interstate lane) require wider vehicles to be more careful with lane positioning; reduced sight distances at some curves require speed management; and heavy summer tourist traffic creates following distance management challenges. CDL drivers with oversize or overweight loads should verify that their NHDOT permit authorizes use of the Franconia Notch section — some oversize loads may be directed via alternate routes."
    },
    {
      question: "How does the NH Turnpike E-ZPass system work for CDL carriers?",
      answer: "The New Hampshire Turnpike system (F.E. Everett Turnpike, I-293, and NH Turnpike) uses both traditional manned toll lanes and all-electronic tolling (AET) plazas. CDL carriers regularly operating on NH Turnpike routes should enroll their vehicles in fleet E-ZPass accounts, which provide transponders for each vehicle in the fleet and bill tolls to the account automatically. Without E-ZPass, vehicles at AET plazas are photographed (Pay-by-Plate) and the carrier receives bill-by-mail invoices with potential additional administrative fees. For CDL carriers with regular NH Turnpike routes, the E-ZPass commercial fleet program provides detailed toll records for IFTA accounting and avoids Pay-by-Plate billing complications."
    },
    {
      question: "What are the White Mountain winter driving challenges for CDL operators in New Hampshire?",
      answer: "New Hampshire's White Mountain region — traversed by I-93 through Franconia Notch and US-302 through Crawford Notch — presents severe winter CDL driving challenges. The mountain geography creates rapid weather changes: clear driving conditions south of the mountains can give way to heavy snow, freezing rain, or black ice within the notches where elevation and wind funneling concentrate precipitation effects. NH DOT issues chain advisory and traction tire requirements for mountain passes during severe conditions. CDL operators should monitor 511 NH (the state's road conditions system) before and during White Mountain crossings in winter. Jackknife risk on I-93's grades through Franconia Notch requires careful speed management and trailer brake use on descents."
    },
    {
      question: "What is the I-93 CDL freight corridor significance in New Hampshire?",
      answer: "I-93 through New Hampshire is the primary commercial freight and travel corridor connecting the Boston metropolitan area with northern New England and ultimately Montreal, Quebec (via I-93 to I-91 in Vermont, continuing north into Canada). Major CDL freight generators on the NH I-93 corridor include Boston-area distribution centers shipping to Vermont, New Hampshire, and Canadian destinations; NH's manufacturing economy along the Merrimack Valley (Manchester and Concord); and the White Mountain tourism economy that generates significant freight deliveries to hotels, ski resorts, and retail establishments. NH's weigh station system, Turnpike toll compliance, and the Franconia Notch section are all specific to I-93 CDL operations in the state."
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in New Hampshire?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in New Hampshire?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your New Hampshire DMV website for current fee schedules.",
    },
    {
      question: "Can I take the New Hampshire CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the New Hampshire DMV for available language options.",
    },
    {
      question: "How long is a New Hampshire CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your New Hampshire CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the New Hampshire CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in New Hampshire, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "New Hampshire DMV Practice Test", href: "/new-hampshire-dmv-practice-test" },
    { label: "New Hampshire Motorcycle Practice Test", href: "/new-hampshire-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NewHampshireCDLPage() {
  return <PracticeTestPage {...data} />;
}
