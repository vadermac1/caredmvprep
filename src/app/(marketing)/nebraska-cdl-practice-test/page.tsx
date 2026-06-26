import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Nebraska CDL Practice Test 2025 – Free DMV Commercial License Prep",
  description: "Prepare for the Nebraska DMV CDL knowledge exam with questions on DUI 0.04% BAC for CMV operators, I-80 transcontinental corridor operations, blizzard out-of-service conditions, grain elevator access road weight restrictions, seasonal overweight grain permits, and Union Pacific railroad grade crossings in Omaha.",
  alternates: { canonical: "https://caredmvprep.com/nebraska-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/nebraska-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Nebraska",
  stateAbbr: "NE",
  testLabel: "CDL Practice Test",
  slug: "nebraska-cdl-practice-test",
  headline: "Nebraska CDL Practice Test 2025",
  intro: "The Nebraska Department of Motor Vehicles issues Commercial Driver's Licenses for Class A, B, and C vehicles. The CDL knowledge exam covers FMCSA federal regulations and Nebraska-specific commercial driving rules including DUI at 0.04% BAC for CMV operators, I-80 transcontinental corridor operations, blizzard out-of-service weather conditions, Nebraska grain overweight permit systems, grain elevator access road weight limits, and Union Pacific railroad grade crossings in Omaha and North Platte.",
  basedOn: "Nebraska DMV CDL Manual / FMCSA Federal Motor Carrier Safety Regulations",
  about: [
    "Nebraska's CDL program is administered by the Department of Motor Vehicles. Nebraska's position as a crossroads of transcontinental freight makes I-80 one of the highest-volume commercial vehicle corridors in the United States, running from Omaha through Lincoln, Kearney, North Platte, and into Wyoming. CDL operators on Nebraska's I-80 face the triple weather challenge — Alberta Clipper blizzards in winter that can reduce visibility to near zero, spring tornado season, and summer hail storms — any of which can force out-of-service conditions or require emergency shelter decisions. The DUI threshold for CMV operators in Nebraska is 0.04% BAC under federal FMCSA regulations. Nebraska's LB 918 hands-free law (effective January 1, 2025) applies to CDL holders and may trigger FMCSA serious traffic violation provisions for repeated violations.",
    "Nebraska's agricultural economy creates significant CDL operational requirements beyond I-80 long-haul operations. Nebraska is one of the nation's top corn and soybean producing states, and grain harvest season (August–November) generates enormous volumes of grain truck traffic on state secondary roads and grain elevator access roads. Many of these roads and facilities have specific weight restrictions — grain elevator access lanes may be limited to 80,000 lbs GVW even when state roads nearby permit higher weights under seasonal overweight permits. Union Pacific Railroad's main line through Nebraska — including the major classification yards at Omaha (Bailey Yard, the world's largest railroad classification yard, is in North Platte) — creates numerous at-grade railroad crossing locations that CDL drivers must approach with the required stop-and-check procedure.",
  ],
  sampleQuestions: [
    {
      question: "A Nebraska CDL holder operating a grain truck on a state secondary road during harvest season encounters a sign reading 'Grain Elevator Access — 80,000 lbs GVW Maximum.' The driver's loaded truck weighs 88,000 lbs. What is required?",
      options: ["Continue — grain trucks are exempt from access road weight limits during harvest season", "The driver must not proceed onto the access road with a 88,000 lb truck — the load exceeds the 80,000 lb posted limit for this facility", "Obtain verbal permission from the grain elevator manager to proceed", "Slow to 5 mph on the access road to reduce pavement stress"],
      correctIndex: 1,
      explanation: "Posted weight limits on grain elevator access roads and private facility drives are enforceable weight restrictions. A CDL driver whose vehicle exceeds the posted 80,000 lb limit cannot legally proceed onto the access road. Doing so creates legal liability for pavement damage and can void the carrier's permit authorization. During Nebraska harvest season, CDL drivers must verify their loaded weight against access road limits at each facility. If the load exceeds the limit, the driver must coordinate with the elevator to arrange partial unloading, obtain a specific facility permit, or use an alternate access point."
    },
    {
      question: "An Alberta Clipper blizzard reduces visibility on I-80 near Kearney, Nebraska to less than 100 feet with blowing snow. What FMCSA weather condition protocol applies?",
      options: ["CDL drivers must reduce speed to 45 mph and continue — no other action is required", "Conditions that prevent safe operation constitute an out-of-service weather event — CDL drivers may refuse to drive and have the right to park at a safe location until conditions improve", "CDL drivers must contact dispatch for permission before stopping due to weather", "FMCSA weather protocols only apply in mountain states, not Nebraska's flat terrain"],
      correctIndex: 1,
      explanation: "FMCSA regulations include driver rights provisions that allow CDL operators to refuse to drive when they reasonably believe road or weather conditions are too dangerous for safe operation. An Alberta Clipper blizzard with 100-foot visibility on I-80 is exactly this type of condition. CDL drivers have the right to park safely — at a truck stop, rest area, or other safe location — and wait for conditions to improve without facing employer retaliation. Nebraska's I-80 blizzard conditions are a real operational hazard, and CDL operators must know they have this right and responsibility."
    },
    {
      question: "The Union Pacific Bailey Yard in North Platte, Nebraska is the world's largest railroad classification yard. CDL drivers in the North Platte area frequently encounter at-grade railroad crossings. What is the required CDL procedure at an unmarked railroad crossing?",
      options: ["Yield to trains but do not stop unless a train is visible", "Stop within 15-50 feet of the tracks, look and listen in both directions, and proceed only when safe — stopping is required even without a signal or gate", "CDL vehicles under 10,000 lbs are exempt from railroad crossing stopping requirements", "Slow to 15 mph at all railroad crossings and proceed if no train is visible"],
      correctIndex: 1,
      explanation: "CDL vehicles (commercial motor vehicles over 26,001 lbs GVWR, vehicles carrying hazmat, or passenger vehicles for hire carrying 16 or more passengers) must stop at all railroad crossings — including those without signals or gates — unless the crossing is posted with an exempt sign. The stop must be made between 15 and 50 feet from the nearest rail. The driver must look and listen in both directions before proceeding. Nebraska's extensive Union Pacific rail network, with its major yards at North Platte and Omaha, creates many at-grade crossing situations that CDL drivers must navigate with the proper stopping procedure."
    },
    {
      question: "Nebraska's seasonal grain overweight permits allow CDL vehicles to operate at weights above the standard 80,000 lb federal limit during harvest. What document must the CDL driver carry when operating under such a permit?",
      options: ["Only the standard CDL and vehicle registration — permits are held electronically by NDOT", "The overweight permit must be in the vehicle and available for inspection at any time by law enforcement or weight station officers", "A copy of the cargo's bill of lading as proof of agricultural cargo", "A letter from the shipper confirming the agricultural exemption"],
      correctIndex: 1,
      explanation: "Nebraska Department of Transportation (NDOT) seasonal grain overweight permits must be physically carried in the vehicle at all times during the authorized operation. The permit specifies the maximum authorized GVW, the authorized routes (often excluding certain bridges and road segments), travel time restrictions (some permits restrict travel to daylight hours or specific days), and the permit validity period. Law enforcement at weight stations and on the road can request to see the permit. Operating without the permit in hand — even if the permit was validly issued — can result in the driver being cited for overweight operation."
    },
    {
      question: "Nebraska LB 918 (effective January 1, 2025) bans handheld device use while driving. A CDL driver receives their second violation of LB 918 within three years while operating a commercial vehicle. What is the FMCSA consequence beyond the state fine?",
      options: ["No additional FMCSA consequence — LB 918 violations are only state traffic matters", "Two 'serious traffic violations' within three years result in a mandatory 60-day CDL disqualification under FMCSA regulations", "The carrier company receives a safety rating downgrade but the CDL holder faces no individual disqualification", "A 30-day CDL suspension for the first repeat LB 918 violation"],
      correctIndex: 1,
      explanation: "Under FMCSA regulations, using a handheld mobile phone while driving a CMV is classified as a 'serious traffic violation.' A second serious traffic violation within a three-year period results in a mandatory 60-day CDL disqualification. A third serious traffic violation within three years results in a 120-day disqualification. Nebraska LB 918 violations in a commercial vehicle trigger both the state fine and FMCSA serious violation classification, creating compounding consequences that CDL holders must understand. Two LB 918 violations in a CMV can end a driver's CDL for 60 days — a significant career consequence."
    },
    {
      question: "A CDL driver is crossing a Nebraska county road bridge posted with a 40-ton (80,000 lb) weight limit. The driver's empty tractor-trailer weighs 34,000 lbs. A full load would bring the combined weight to 78,000 lbs. Is the loaded vehicle within the bridge's posted limit?",
      options: ["Yes — 78,000 lbs is under the 80,000 lb limit", "No — bridge limits in Nebraska use gross axle weight, not total GVW", "Yes, but only if the bridge was built after 1995", "No — CDL vehicles must apply a 10% safety margin to bridge weight limits"],
      correctIndex: 0,
      explanation: "A loaded gross vehicle weight of 78,000 lbs is within the 80,000 lb (40-ton) posted bridge limit. CDL drivers must check the bridge weight limit sign and compare it to their actual loaded GVW before proceeding. Nebraska county road bridges — many of which are older and have lower weight limits than state highway bridges — are common on rural routes used during grain harvest season. If the GVW equals or exceeds the posted bridge limit, the driver must find an alternate route. Nebraska DOT maintains bridge weight limit records and NDOT's online permit routing system identifies bridges on authorized overweight permit routes."
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
      question: "What is the DUI BAC threshold for Nebraska CDL holders in a commercial vehicle?",
      answer: "Nebraska CDL holders operating commercial motor vehicles are subject to a 0.04% BAC DUI threshold — half the standard adult limit of 0.08%. Nebraska uses DUI (Driving Under the Influence) terminology. A first DUI conviction (whether in a CMV or personal vehicle) results in mandatory one-year CDL disqualification under FMCSA regulations. If the CMV was transporting hazardous materials, the disqualification is three years for a first offense. A second DUI results in lifetime CDL disqualification. Off-duty DUI in a personal vehicle carries the same CDL disqualification consequences as a DUI in a CMV — a fact many CDL holders are unaware of until it affects their career."
    },
    {
      question: "What makes Nebraska's I-80 corridor a challenging CDL route?",
      answer: "Nebraska's I-80 is one of the most important and most heavily traveled commercial freight corridors in the United States, crossing Nebraska from Omaha to the Wyoming border through flat, open terrain at 75 mph. The open terrain creates unique CDL challenges: crosswinds from Alberta Clipper winter storms can create trailer sway conditions requiring speed reduction; blowing snow reduces visibility to near zero during blizzards; summer hail storms can damage vehicles and force emergency shelter decisions; spring tornado season on I-80 requires CDL operators to understand shelter protocols for large vehicles; and I-80 passes through active railroad crossing zones in Omaha and North Platte where CDL stop requirements apply. Nebraska's I-80 weigh stations operate at various locations, and CDL drivers must comply with weight check requirements."
    },
    {
      question: "What are Nebraska's grain overweight permit rules for CDL drivers?",
      answer: "Nebraska Department of Transportation (NDOT) issues seasonal grain overweight permits that allow CDL vehicles to exceed the standard 80,000 lb federal GVW limit during the grain harvest period, typically August through November. These permits specify maximum authorized weights (which vary by permit type), authorized routes (which exclude certain bridges and road segments that cannot support higher weights), travel time restrictions, and permit validity dates. CDL drivers operating under grain overweight permits must carry the permit in the vehicle at all times, comply with all route restrictions, and ensure loaded weights do not exceed the permit maximum. Fines for overweight violations are assessed per pound over the permitted weight limit. Permit applications are submitted to NDOT's Permit Office."
    },
    {
      question: "What railroad grade crossing rules apply to CDL vehicles at Union Pacific crossings in Nebraska?",
      answer: "CDL vehicles — including combination vehicles over 26,001 lbs GVWR, vehicles carrying hazardous materials, and passenger vehicles carrying 16 or more occupants — must stop at all railroad grade crossings in Nebraska, including those without signals or gates. The stop must be made between 15 and 50 feet from the nearest rail. The driver must look and listen in both directions and must not proceed until it is safe to do so. Nebraska has extensive Union Pacific Railroad grade crossings, particularly in Omaha (near the Union Pacific headquarters and intermodal terminals), North Platte (near Bailey Yard), and throughout the state's agricultural rail network. The only exception to stopping is at crossings posted with an 'Exempt' sign, which applies to certain controlled industrial facility crossings."
    },
    {
      question: "Can Nebraska CDL drivers refuse to drive in blizzard conditions on I-80?",
      answer: "Yes. FMCSA regulations include driver protection provisions that allow CDL operators to refuse to operate a commercial vehicle when they reasonably believe that road or weather conditions make operation unsafe. Nebraska's Alberta Clipper blizzards — which can reduce I-80 visibility to near zero with blowing snow and ice-covered pavement — are exactly the type of condition this protection addresses. CDL drivers may park at a safe location (truck stop, rest area, or other facility) and wait for conditions to improve without fear of retaliation from employers. Employers are prohibited from coercing CDL drivers to operate in conditions the driver reasonably believes are unsafe. Nebraska State Patrol and NDOT issue road closures on I-80 during severe blizzard conditions, which provide additional regulatory authority for drivers to stop."
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Nebraska?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Nebraska?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Nebraska DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Nebraska CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Nebraska DMV for available language options.",
    },
    {
      question: "How long is a Nebraska CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Nebraska CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Nebraska CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Nebraska, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Nebraska DMV Practice Test", href: "/nebraska-dmv-practice-test" },
    { label: "Nebraska Motorcycle Practice Test", href: "/nebraska-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NebraskaCDLPage() {
  return <PracticeTestPage {...data} />;
}
