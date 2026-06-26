import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Mississippi CDL Practice Test 2025 – Free DPS Commercial License Prep",
  description: "Prepare for the Mississippi DPS CDL knowledge exam with questions on DUI 0.04% BAC for CMV operators, HB 1283 FMCSA implications, Mississippi River bridge weight restrictions, I-20 freight corridor, Port of Gulfport routing, and agricultural truck operations.",
  alternates: { canonical: "https://caredmvprep.com/mississippi-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/mississippi-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Mississippi",
  stateAbbr: "MS",
  testLabel: "CDL Practice Test",
  slug: "mississippi-cdl-practice-test",
  headline: "Mississippi CDL Practice Test 2025",
  intro: "The Mississippi Department of Public Safety (DPS) issues Commercial Driver's Licenses for Class A, B, and C vehicles. The CDL knowledge exam covers FMCSA federal regulations and Mississippi-specific rules including DUI at 0.04% BAC for CMV operators, HB 1283 handheld device ban implications for CDL holders, Mississippi River bridge weight restrictions, I-20 and I-55 freight corridor operations, Port of Gulfport routing, and Mississippi Delta agricultural truck operations.",
  basedOn: "Mississippi DPS CDL Manual / FMCSA Federal Motor Carrier Safety Regulations",
  about: [
    "Mississippi's CDL program is administered by the Department of Public Safety (DPS). Mississippi CDL holders operating commercial motor vehicles are subject to a 0.04% BAC DUI threshold — half the standard adult limit — under federal FMCSA regulations adopted in Mississippi. DPS issues CDLs for Class A (combination vehicles over 26,001 lbs GVWR), Class B (single vehicles over 26,001 lbs), and Class C (vehicles carrying 16+ passengers or hazardous materials). Mississippi House Bill 1283, effective January 1, 2025, applies to CDL holders operating commercial vehicles — holding a handheld device while driving a CMV is a primary offense under state law and may also trigger FMCSA serious traffic violation provisions that can affect CDL status if multiple violations occur.",
    "Mississippi's commercial transportation network centers on the I-20 east-west corridor and I-55 north-south corridor, both passing through Jackson. The Port of Gulfport on the Gulf Coast is one of the top banana-importing ports in the United States and a significant general cargo facility, generating substantial CDL freight routing through southern Mississippi on US-49 and I-10. Mississippi Delta agricultural operations — particularly cotton, soybeans, and poultry — involve overweight permit operations on state secondary roads. Mississippi River bridge weight restrictions at Vicksburg (I-20), Natchez (US-84), and Greenville (US-82) affect CDL routing for oversized and overweight loads. CDL drivers must understand how to obtain MDOT oversize and overweight permits and the routes they authorize.",
  ],
  sampleQuestions: [
    {
      question: "A Mississippi CDL holder is found to have a BAC of 0.05% while operating a tractor-trailer on I-20. What applies under Mississippi DUI law and FMCSA regulations?",
      options: ["0.05% is below the CMV threshold of 0.08% — no violation", "0.05% is above the 0.04% CMV threshold — the driver is in violation of both Mississippi DUI law and FMCSA regulations", "Only FMCSA regulations apply, not Mississippi state law", "A warning is issued for a first offense below 0.08%"],
      correctIndex: 1,
      explanation: "The BAC threshold for CDL holders operating commercial motor vehicles is 0.04% — not the standard 0.08% adult limit. A reading of 0.05% exceeds this CMV threshold, making the driver in violation of both Mississippi DUI law and FMCSA regulations. A first DUI conviction at the CMV threshold results in mandatory one-year CDL disqualification. If the driver was transporting hazardous materials, the disqualification extends to three years. A second conviction results in lifetime disqualification."
    },
    {
      question: "Mississippi House Bill 1283 (effective January 1, 2025) bans handheld device use while driving. How does this affect a CDL holder driving a commercial vehicle?",
      options: ["HB 1283 applies only to personal vehicle drivers, not CDL holders in CMVs", "CDL holders are subject to HB 1283 and may also face FMCSA serious traffic violation consequences for multiple handheld device violations", "CDL holders may use handheld devices in CMVs if the vehicle is a Class B or C", "HB 1283 does not take effect for CDL holders until 2026"],
      correctIndex: 1,
      explanation: "HB 1283 applies to all drivers on Mississippi public roads, including CDL holders operating commercial vehicles. A CDL holder cited under HB 1283 faces the same state fine as any other driver. Additionally, under FMCSA regulations, using a handheld mobile phone while driving a CMV is a 'serious traffic violation.' Two serious traffic violations within three years can result in a 60-day CDL disqualification; three violations within three years result in 120-day disqualification. CDL holders face compounding consequences for handheld device violations."
    },
    {
      question: "A CDL driver is routing an oversized load from Jackson, MS to Vicksburg via I-20. The load requires crossing the I-20 Mississippi River bridge at Vicksburg. What must the driver obtain?",
      options: ["No special permit — bridges on interstates accept all standard CDL loads", "An MDOT oversize/overweight permit that specifically authorizes the I-20 bridge crossing and the planned route", "A verbal authorization from the Vicksburg bridge authority", "Only a wide load flag vehicle escort"],
      correctIndex: 1,
      explanation: "Oversized and overweight loads crossing Mississippi River bridges require a Mississippi Department of Transportation (MDOT) oversize/overweight permit that specifically identifies the authorized crossing point. The I-20 bridge at Vicksburg has specific weight and dimension restrictions, and the permit must confirm the load is within those limits or receive a specific bridge crossing authorization. The permit must be carried in the vehicle during the move and must match the actual load dimensions and weight. Unauthorized oversized crossings can result in permit revocation, heavy fines, and civil liability for any bridge damage."
    },
    {
      question: "CDL drivers operating in the Mississippi Delta for agricultural cargo (cotton, soybeans) frequently travel on secondary state roads under overweight permits during harvest season. What condition may restrict these operations in spring?",
      options: ["Delta roads close entirely for spring flooding from February through April", "Mississippi's spring weight restriction periods limit legal axle weights on secondary roads during the thaw season", "Delta secondary roads switch to one-way traffic in spring", "Agricultural overweight permits are suspended statewide in spring months"],
      correctIndex: 1,
      explanation: "Mississippi's secondary roads, particularly in the Delta, are subject to spring weight restrictions when ground conditions are susceptible to road damage from heavy vehicles. These restrictions reduce the maximum legal axle weights on affected roads and are posted as seasonal regulatory signs. CDL operators running under agricultural overweight permits must verify that their permits cover the spring restriction period or reduce loads to comply. Operating overweight under a standard permit during a weight restriction period results in fines calculated per pound over the legal limit, which can be substantial for agricultural loads."
    },
    {
      question: "The Port of Gulfport is a major import facility on Mississippi's Gulf Coast. CDL drivers routing from Gulfport inland typically use which primary routes, and what should they know about hurricane season?",
      options: ["CDL drivers use I-59 north exclusively; hurricane season is June–November", "CDL drivers commonly use US-49 north to I-20 and I-10 east-west; hurricane evacuations may require route compliance with Mississippi's contraflow plan", "CDL drivers use US-90 exclusively during hurricane season", "The Port of Gulfport is only accessible to Class B vehicles"],
      correctIndex: 1,
      explanation: "Port of Gulfport freight commonly routes via US-49 north through Hattiesburg to I-20 at Hattiesburg/Magee, or via I-10 east-west for coastal distribution. During hurricane season (June–November), Mississippi's Gulf Coast may activate contraflow evacuation plans on I-10, I-59, and US-49, reversing inbound lanes to outbound flow. CDL drivers operating during an evacuation must understand contraflow entry/exit points and are typically directed around the evacuation zone or to designated commercial vehicle routes to avoid conflicts with evacuating civilian traffic. MDOT and the Mississippi Emergency Management Agency publish CDL-specific guidance for hurricane operations."
    },
    {
      question: "A Mississippi CDL holder commits a first-offense DUI while operating a personal (non-commercial) vehicle on a Saturday. What happens to their CDL?",
      options: ["CDL is unaffected because the DUI occurred in a personal vehicle", "CDL is disqualified for one year, even though the DUI was in a personal vehicle", "CDL is suspended for 90 days (matching the personal license suspension)", "CDL is only affected if the conviction involves a commercial vehicle"],
      correctIndex: 1,
      explanation: "FMCSA regulations require CDL disqualification for a first DUI conviction regardless of whether the offense occurred in a commercial vehicle or a personal vehicle. A first DUI in a personal vehicle results in a one-year CDL disqualification. This is a critical distinction many CDL holders are unaware of — their off-duty behavior in a personal vehicle directly affects their CDL. A second DUI conviction (in any vehicle) results in lifetime CDL disqualification. Mississippi DUI law applies the same standard whether the vehicle is commercial or personal."
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
      question: "What is the DUI BAC limit for Mississippi CDL holders operating a commercial vehicle?",
      answer: "Mississippi CDL holders operating a commercial motor vehicle are subject to a 0.04% BAC DUI threshold — half the standard adult limit of 0.08%. Mississippi uses DUI (Driving Under the Influence) terminology. A first DUI conviction at the CMV threshold results in a mandatory one-year CDL disqualification (three years if hauling hazardous materials). A second DUI conviction results in lifetime CDL disqualification. Importantly, a DUI in a personal vehicle also triggers CDL disqualification under FMCSA regulations — the offense does not have to occur in a commercial vehicle."
    },
    {
      question: "How does HB 1283 affect Mississippi CDL holders?",
      answer: "Mississippi House Bill 1283, effective January 1, 2025, applies to CDL holders operating commercial vehicles just as it applies to all other drivers. Holding a handheld electronic device while driving a CMV is a primary offense under Mississippi law. Under FMCSA regulations, using a handheld mobile phone in a CMV is classified as a 'serious traffic violation.' A CDL holder with two serious traffic violations within three years faces a 60-day CDL disqualification; three within three years results in 120-day disqualification. The compounded state and federal consequences make HB 1283 violations particularly significant for CDL holders."
    },
    {
      question: "What CDL permits are needed for oversized loads crossing Mississippi River bridges?",
      answer: "Oversized or overweight loads crossing Mississippi River bridges in Mississippi — including the I-20 bridge at Vicksburg, the US-84 bridge at Natchez, and the US-82 bridge near Greenville — require Mississippi Department of Transportation (MDOT) oversize/overweight permits that specifically authorize the bridge crossing. Bridge permits are separate from standard oversize corridor permits. CDL drivers must carry the permit in the vehicle, comply with any escort vehicle, lighting, and travel time requirements specified in the permit, and must not exceed the authorized dimensions or weight. MDOT's Permit Office issues these permits and maintains a database of bridge restrictions."
    },
    {
      question: "What are the key CDL freight corridors in Mississippi?",
      answer: "Mississippi's primary CDL freight corridors are I-20 (east-west through Jackson and Vicksburg — major freight link between Texas and the Southeast), I-55 (north-south connecting Memphis, Jackson, and Hammond, LA — a primary food distribution and retail freight corridor), US-49 (connecting the Gulf Coast port at Gulfport with I-20 at Hattiesburg/Magee), and US-61 (the historic Delta highway connecting Natchez to Memphis along the Mississippi River). I-10 serves the Gulf Coast corridor from Pascagoula to the Louisiana border. Understanding these corridors, their rest area locations, weigh station positions, and weather vulnerability (I-10 and US-49 during hurricane season) is important for Mississippi CDL operators."
    },
    {
      question: "What agricultural CDL operations are common in the Mississippi Delta?",
      answer: "The Mississippi Delta is one of the most intensively farmed agricultural regions in the United States, producing cotton, soybeans, corn, rice, and catfish — as well as being a major poultry production area. CDL operations in the Delta include grain truck operations during corn and soybean harvest (August–November), cotton module trucks transporting harvested cotton modules from fields to gins, poultry live-haul operations (which require special biosecurity protocols and may have weight permit requirements), and anhydrous ammonia transport for fertilizer application (requiring hazardous materials endorsement). Delta secondary roads are subject to spring weight restrictions and may flood during periods of high Mississippi River levels, requiring CDL operators to plan alternate routes."
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Mississippi?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Mississippi?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Mississippi DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Mississippi CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Mississippi DMV for available language options.",
    },
    {
      question: "How long is a Mississippi CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Mississippi CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Mississippi CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Mississippi, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Mississippi DMV Practice Test", href: "/mississippi-dmv-practice-test" },
    { label: "Mississippi Motorcycle Practice Test", href: "/mississippi-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function MississippiCDLPage() {
  return <PracticeTestPage {...data} />;
}
