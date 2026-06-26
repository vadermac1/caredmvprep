import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "South Dakota CDL Practice Test 2025 – Free SD Commercial License Exam Prep",
  description:
    "Prepare for your South Dakota CDL knowledge test with free practice questions covering Needles Highway and Iron Mountain Road CDL prohibitions, I-90 corridor freight, Black Hills oversize restrictions, Sturgis Rally CDL challenges, and SD DMV CDL requirements.",
  alternates: { canonical: "https://caredmvprep.com/south-dakota-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/south-dakota-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "South Dakota",
  stateAbbr: "SD",
  testLabel: "CDL Practice Test",
  slug: "south-dakota-cdl-practice-test",
  headline: "South Dakota CDL Practice Test 2025",
  intro:
    "The South Dakota Division of Motor Vehicles (Department of Public Safety) issues Commercial Driver's Licenses and administers CDL knowledge and skills testing. This free practice test covers South Dakota CDL topics: Needles Highway and Iron Mountain Road prohibitions for CDL vehicles, I-90 and I-29 freight corridor operations, Black Hills oversize permit requirements, Sturgis Rally August delivery challenges, and the 0.04% CMV BAC threshold.",
  basedOn: "South Dakota CDL Driver's Manual (Department of Public Safety)",
  about: [
    "The South Dakota Division of Motor Vehicles, within the Department of Public Safety, issues Commercial Driver's Licenses and administers all CDL knowledge and skills testing in the state. CDL applicants must pass the General Knowledge test plus all applicable endorsement tests. The BAC limit for CDL operators in a commercial motor vehicle is 0.04% under federal FMCSA regulations — half the standard adult limit. South Dakota's primary CDL freight corridors are I-90 (east-west) and I-29 (north-south), both of which have an 80 mph speed limit — among the highest in the nation for Interstate highways.",
    "South Dakota CDL drivers operating in the Black Hills region face unique routing challenges that do not exist in other states. The Needles Highway (SD-87) is absolutely prohibited for all CDL combination vehicles — the 8'4\" tunnel height and 8'9\" width clearances are far below CDL vehicle dimensions. Iron Mountain Road (US-16A) has a 12'4\" height restriction and Pigtail Bridges that restrict length, also prohibiting standard CDL combinations. CDL drivers delivering to Black Hills destinations (Custer, Hill City, Custer State Park, Mount Rushmore) must use US-16, SD-244, or other approved alternate routes. During the Sturgis Rally in August, CDL delivery trucks serving rally vendors face extremely high traffic volumes and temporary routing restrictions throughout Sturgis and the surrounding Black Hills community.",
  ],
  sampleQuestions: [
    {
      question:
        "A CDL driver in a standard semi-truck combination vehicle is dispatched to deliver supplies to a lodge inside Custer State Park. The driver's GPS routes the vehicle via the Needles Highway (SD-87). What must the driver do?",
      options: [
        "Proceed — CDL vehicles with permits may use the Needles Highway",
        "Reject the GPS route — CDL combination vehicles are prohibited from the Needles Highway due to 8'4\" tunnel height and 8'9\" width restrictions",
        "Use the Needles Highway only if the vehicle height is under 12 feet",
        "Contact the Custer State Park ranger station for a CDL access permit before entering",
      ],
      correctIndex: 1,
      explanation:
        "CDL combination vehicles (semi-trucks) are prohibited from the Needles Highway (SD-87) due to the tunnel clearances of 8'4\" height and 8'9\" width — far below the dimensions of any standard commercial combination vehicle. No permit exists to authorize CDL vehicles through these tunnels. The CDL driver must use an alternate route to reach Custer State Park destinations, such as US-16 from Rapid City or SD-16A from Custer. When GPS directs a CDL vehicle onto a prohibited road, the driver is responsible for recognizing and rejecting the route.",
    },
    {
      question:
        "A CDL truck driver is planning to use US-16A (Iron Mountain Road) to reach Mount Rushmore for a delivery. The driver's vehicle is 13 feet tall. Is this route permitted?",
      options: [
        "Yes — Iron Mountain Road is open to all CDL vehicles with proper permits",
        "No — Iron Mountain Road has a 12'4\" height restriction due to rock tunnel clearances, prohibiting a 13-foot vehicle",
        "Yes — height restrictions on Iron Mountain Road apply only to recreational vehicles",
        "No — CDL vehicles are never permitted within 5 miles of national monuments in South Dakota",
      ],
      correctIndex: 1,
      explanation:
        "Iron Mountain Road (US-16A) has rock tunnel clearances that restrict vehicles to a maximum height of 12'4\". A 13-foot-tall vehicle exceeds this limit and is prohibited from this route. The road also features Pigtail Bridges with tight curves that restrict vehicle length, creating additional restrictions for long combination vehicles. CDL drivers delivering to the Mount Rushmore area must use alternate routes such as US-16 or SD-244, which have standard highway clearances and no length restrictions from tight curves.",
    },
    {
      question:
        "During the Sturgis Motorcycle Rally in August, a CDL delivery truck is scheduled to deliver food and supplies to vendors in downtown Sturgis. What challenge should the carrier and driver anticipate?",
      options: [
        "No special considerations — CDL vehicles have priority routing during the Rally",
        "Extremely high traffic volumes, possible temporary routing restrictions, and officer-controlled intersections that supersede normal traffic control",
        "The Sturgis Rally prohibits all commercial vehicle deliveries within city limits during rally week",
        "CDL vehicles must obtain a special Rally permit from the Meade County Sheriff before any deliveries",
      ],
      correctIndex: 1,
      explanation:
        "The Sturgis Motorcycle Rally creates extraordinary traffic management challenges for CDL delivery drivers. Downtown Sturgis may have officer-controlled intersections, temporary no-truck zones or routing restrictions, extremely high pedestrian and motorcycle traffic volumes, and significant delivery schedule disruptions. CDL drivers and their carriers should coordinate early morning deliveries before peak rally traffic, verify current routing with the Sturgis Police Department, and build significant extra time into delivery schedules during rally week in August.",
    },
    {
      question:
        "What is the federal FMCSA blood alcohol concentration (BAC) limit for a CDL driver operating a commercial motor vehicle in South Dakota?",
      options: ["0.08%", "0.06%", "0.04%", "0.02%"],
      correctIndex: 2,
      explanation:
        "Federal FMCSA regulations set the BAC limit at 0.04% for CDL holders operating a commercial motor vehicle — half the standard 0.08% adult DUI threshold. This applies on all South Dakota roads, including the 80 mph rural interstate corridors on I-90 and I-29. A CDL holder with a BAC between 0.04% and 0.08% in a CMV faces CDL disqualification even if they are below the DUI threshold for personal vehicle operation. South Dakota's implied consent law applies to CDL holders as well.",
    },
    {
      question:
        "South Dakota's rural I-90 and I-29 corridors have an 80 mph speed limit. How must CDL drivers approach operating on these highways?",
      options: [
        "CDL vehicles may operate at 80 mph — the limit applies to all vehicles equally",
        "CDL vehicles must drive no faster than 65 mph on South Dakota interstates regardless of posted limits",
        "CDL drivers must operate at a speed that is safe for their vehicle, load, and current conditions — the 80 mph is a maximum for ideal conditions that may not apply to heavy combination vehicles",
        "CDL vehicles are exempt from speed limits on rural interstates under federal law",
      ],
      correctIndex: 2,
      explanation:
        "While South Dakota's rural interstates have an 80 mph posted limit, CDL drivers must always drive at a speed appropriate for their vehicle's weight, load, braking distance, and current road and weather conditions. A heavily loaded semi-truck has far longer stopping distances than a passenger car and cannot safely operate at 80 mph in all conditions. Federal FMCSA regulations require CDL drivers to always operate within the speed at which they can safely maintain control. In winter, speed may need to be 40–50 mph or less on these same highways.",
    },
    {
      question:
        "A CDL driver is operating a flatbed truck carrying oversized farm equipment through the Black Hills region of South Dakota. What must the carrier obtain before the trip?",
      options: [
        "No special permits are needed for farm equipment transport in South Dakota",
        "An oversize/overweight permit from the South Dakota Department of Transportation, specifying approved routes and travel times",
        "A Black Hills National Forest permit from the US Forest Service",
        "A Custer State Park commercial vehicle access permit",
      ],
      correctIndex: 1,
      explanation:
        "Oversize or overweight loads in South Dakota require an oversize/overweight permit issued by the South Dakota Department of Transportation (SDDOT). These permits specify the approved routes (which avoid restricted roads like the Needles Highway and Iron Mountain Road), permitted travel times (often daylight only, no weekends for some loads), required escort vehicles, and maximum speed limits. The Black Hills region has additional routing considerations due to its many restricted roads. CDL drivers must carry the permit in the vehicle and comply with all permit conditions.",
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
      question: "Which Black Hills roads are prohibited for CDL combination vehicles?",
      answer:
        "Two major Black Hills roads are specifically prohibited for standard CDL combination vehicles. The Needles Highway (SD-87) has tunnel clearances of only 8'4\" in height and 8'9\" in width — no standard commercial combination vehicle can fit through these tunnels. Iron Mountain Road (US-16A) has rock tunnel clearances of 12'4\" and Pigtail Bridges that restrict vehicle length due to tight curves. CDL drivers delivering to Custer State Park, Mount Rushmore, and nearby Black Hills destinations must use US-16, SD-244, or other alternate routes with standard clearances.",
    },
    {
      question: "What are the I-90 freight corridor considerations for South Dakota CDL drivers?",
      answer:
        "I-90 crosses South Dakota east to west from the Minnesota border to Wyoming, passing through Sioux Falls, Mitchell, Chamberlain, Rapid City, and Sturgis. It is South Dakota's primary freight corridor and has an 80 mph speed limit. CDL drivers must manage significant wind exposure on the open plains of central South Dakota, crossing the Missouri River at Chamberlain (bridge can have significant crosswinds for high-profile vehicles), and Black Hills grades approaching Rapid City. Winter operations require reduced speeds and SDDOT road condition monitoring.",
    },
    {
      question: "How does the Sturgis Rally affect CDL delivery operations in August?",
      answer:
        "The Sturgis Motorcycle Rally (first full week of August) creates major disruptions for CDL delivery operations throughout the Black Hills. Traffic volumes can increase by 300-500% in the Sturgis and surrounding area. CDL carriers should plan deliveries for early morning (before 7 AM when possible), verify current routing restrictions with local law enforcement, expect delivery times to be significantly longer, and coordinate with customers on flexible delivery windows. Some roads in Sturgis proper may have temporary restrictions on commercial truck access during peak rally hours.",
    },
    {
      question: "What oversize/overweight permit rules apply to South Dakota CDL operations?",
      answer:
        "South Dakota's oversize/overweight permits are issued by the South Dakota Department of Transportation. Permit requirements include specified routes (which avoid restricted Black Hills roads), travel time restrictions (often daylight hours only), escort vehicle requirements for very wide or long loads, and maximum speed limits. South Dakota also issues seasonal agricultural overweight permits during harvest for grain transport on designated routes. CDL drivers must carry the permit in the vehicle at all times and comply with all conditions — violations can result in significant fines and CDL compliance issues.",
    },
    {
      question: "What CDL endorsements are commonly needed for South Dakota commercial operations?",
      answer:
        "South Dakota's economy drives demand for several CDL endorsements. The Combination (Class A) CDL covers most freight operations on I-90 and I-29. The Tank (N) endorsement is needed for liquid transport including fuel delivery (especially to rural ranch operations and Black Hills resorts). The HazMat (H) endorsement covers fuel and chemical transport. The Doubles/Triples (T) endorsement is used on I-90 for long-haul freight. Agricultural commodity transport (grain, livestock) typically requires a standard Class A or Class B CDL depending on vehicle configuration.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in South Dakota?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in South Dakota?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your South Dakota DMV website for current fee schedules.",
    },
    {
      question: "Can I take the South Dakota CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the South Dakota DMV for available language options.",
    },
    {
      question: "How long is a South Dakota CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your South Dakota CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the South Dakota CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in South Dakota, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "South Dakota DMV Practice Test", href: "/south-dakota-dmv-practice-test" },
    { label: "South Dakota Motorcycle Practice Test", href: "/south-dakota-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function SouthDakotaCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
