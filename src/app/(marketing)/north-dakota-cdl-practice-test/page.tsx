import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Dakota CDL Practice Test 2025 – Free NDDOT Commercial License Prep",
  description:
    "Prepare for your North Dakota CDL knowledge test with free practice questions covering Bakken oilfield county road weight restrictions, blizzard road closure compliance, grain truck permits, and NDDOT CDL requirements.",
  alternates: { canonical: "https://caredmvprep.com/north-dakota-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/north-dakota-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "North Dakota",
  stateAbbr: "ND",
  testLabel: "CDL Practice Test",
  slug: "north-dakota-cdl-practice-test",
  headline: "North Dakota CDL Practice Test 2025",
  intro:
    "The North Dakota Department of Transportation (NDDOT) issues Commercial Driver's Licenses and administers CDL knowledge and skills tests. This free practice test covers North Dakota-specific CDL topics including Bakken oilfield county road weight restrictions under NDCC § 39-12-04, blizzard road closure compliance on I-94 and I-29, grain truck seasonal overweight permits, and winter operations on North Dakota's Interstate system.",
  basedOn: "North Dakota CDL Driver's Manual (NDDOT)",
  about: [
    "The North Dakota Department of Transportation (NDDOT) issues Commercial Driver's Licenses and administers all CDL testing in the state. CDL applicants must pass the General Knowledge test plus any applicable endorsement tests (HazMat, Tank, Passenger, School Bus, Doubles/Triples, or Air Brakes). The BAC limit for CDL operators in a commercial motor vehicle is 0.04% — half the standard adult limit. CDL holders are also subject to federal FMCSA regulations, including hours-of-service rules and mandatory drug and alcohol testing. North Dakota's grain and oilfield industries create unique compliance challenges for CDL drivers operating in the state.",
    "North Dakota's CDL environment is defined by two primary specialized challenges: oilfield road restrictions and blizzard road closures. In the Williston Basin counties of the Bakken Formation, NDCC § 39-12-04 authorizes counties to post reduced weight limits or restrict access on county roads damaged by oilfield truck traffic. CDL drivers operating in Williams, McKenzie, Mountrail, and Dunn counties must check current county road postings before every trip on rural roads — violations can result in significant fines and potential CDL disqualification. Blizzard compliance is equally critical: when NDDOT closes I-94 or I-29, CDL drivers who attempt to drive through a closure commit a Class B misdemeanor. North Dakota also issues seasonal overweight permits for grain trucks during harvest, allowing farmers and trucking companies to move grain more efficiently while road conditions permit.",
  ],
  sampleQuestions: [
    {
      question:
        "A CDL driver is dispatched to haul equipment to an oilfield location in McKenzie County, North Dakota. The county road leading to the site has a posted weight limit sign. What must the driver do?",
      options: [
        "Oilfield vehicles are exempt from county road weight limits under federal law",
        "Comply with the posted weight limit — NDCC § 39-12-04 gives counties legal authority to restrict heavy vehicle access",
        "Proceed cautiously at reduced speed — posted limits are advisory only",
        "Contact the oilfield company to obtain a county road exemption permit before proceeding",
      ],
      correctIndex: 1,
      explanation:
        "NDCC § 39-12-04 gives North Dakota counties legal authority to post reduced weight limits and restrict access on county roads damaged by heavy traffic. These limits are legally enforceable — not advisory. CDL drivers operating in Bakken Formation counties (Williams, McKenzie, Mountrail, Dunn) must check current county road postings before every trip on rural roads. Violating a posted county road weight limit can result in significant fines and potential CDL compliance issues.",
    },
    {
      question:
        "You are a CDL driver on I-94 in North Dakota heading westbound when you see a Road Closed sign with law enforcement turning vehicles around. You are carrying a time-sensitive load. What must you do?",
      options: [
        "Follow the detour — Road Closed signs on North Dakota interstates are legally enforceable orders",
        "Show your CDL to law enforcement — commercial vehicles may proceed through closures",
        "Pull over and wait at the closure point until conditions improve",
        "Turn around and find an alternate county road route",
      ],
      correctIndex: 0,
      explanation:
        "When the NDDOT closes I-94 or I-29 during a blizzard, the closure is a legally enforceable order for all vehicles — including commercial vehicles. Driving on a closed North Dakota highway is a Class B misdemeanor. CDL drivers have no exemption from road closure orders. The carrier must be notified, and the driver must follow the designated detour or wait for the road to reopen. Attempting to bypass a closure can result in criminal charges and CDL disqualification.",
    },
    {
      question:
        "Under federal FMCSA regulations, what is the maximum blood alcohol concentration (BAC) permitted for a CDL holder operating a commercial motor vehicle in North Dakota?",
      options: ["0.08%", "0.06%", "0.04%", "0.02%"],
      correctIndex: 2,
      explanation:
        "Federal FMCSA regulations set the BAC limit for CDL operators in a commercial motor vehicle at 0.04% — half the standard adult limit of 0.08%. This lower threshold applies any time the CDL holder is operating a CMV. Additionally, CDL holders found with a BAC between 0.04% and 0.08% while in a CMV face CDL disqualification even though they are below the standard adult DUI threshold for personal vehicle operation.",
    },
    {
      question:
        "North Dakota issues seasonal overweight permits for grain trucks during harvest season. What is the primary purpose of these permits?",
      options: [
        "To allow grain trucks to exceed maximum speed limits during harvest",
        "To authorize grain trucks to carry loads exceeding standard federal weight limits on designated routes during harvest",
        "To exempt grain trucks from all county road weight restrictions in North Dakota",
        "To allow grain trucks to travel on closed roads during blizzards",
      ],
      correctIndex: 1,
      explanation:
        "North Dakota issues seasonal overweight permits that allow grain trucks to carry loads exceeding standard federal weight limits on designated highway routes during the fall harvest season. This helps farmers and trucking companies move grain efficiently while it is being harvested, before the ground freezes and road conditions change. The permits specify the routes, axle configurations, and time periods during which overweight operation is authorized. County road weight restrictions may still apply separately.",
    },
    {
      question:
        "A CDL driver is planning an I-29 southbound trip from Grand Forks to Fargo in November. Weather reports indicate a potential blizzard. What should the driver do before departing?",
      options: [
        "Depart immediately to arrive before the storm hits",
        "Check NDDOT 511 for real-time road conditions and closure status, and delay departure if closures are likely",
        "Proceed and monitor weather on the radio — blizzard forecasts are frequently wrong",
        "Contact the carrier's dispatcher only — the driver is not responsible for weather monitoring",
      ],
      correctIndex: 1,
      explanation:
        "CDL drivers operating in North Dakota during winter are responsible for checking NDDOT's 511 system for real-time road conditions and closure information before and during trips. I-29 is one of North Dakota's most frequently closed highways during blizzards. Departing into a storm that results in a road closure can strand a driver and cargo, create a Class B misdemeanor violation, and endanger lives. CDL drivers share the professional obligation to make sound go/no-go decisions based on weather and road conditions.",
    },
    {
      question:
        "Under North Dakota law, open range applies to much of western North Dakota. How does this specifically affect CDL drivers operating heavy trucks on rural highways in this region?",
      options: [
        "CDL vehicles are exempt from open range laws — ranchers must fence roads where trucks operate",
        "Open range means cattle and horses may legally be on public roads; CDL drivers must drive defensively and reduce speed near known ranching areas",
        "Open range only applies to private farm roads, not public highways",
        "CDL drivers who strike livestock in open range territory are never liable for damages",
      ],
      correctIndex: 1,
      explanation:
        "Open range law in western North Dakota does not require ranchers to fence livestock away from public roads — including state and county highways. CDL drivers on rural routes through ranching country must drive at speeds that allow them to stop for unexpected livestock in the roadway. At night, cattle are particularly difficult to see and do not reflect headlights well. A CDL truck striking a large animal can cause cargo shifts, rollovers, and significant property damage. CDL drivers may bear some liability in livestock collision situations depending on the circumstances.",
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
      question: "What CDL endorsements are most relevant for North Dakota commercial drivers?",
      answer:
        "North Dakota's agricultural and energy economy makes several endorsements particularly relevant. The Tank Vehicle (N) endorsement is important for oilfield liquid transport. The Doubles/Triples (T) endorsement is needed for pulling multiple trailers on I-94 or I-29. The HazMat (H) endorsement is required for many oilfield chemical and petroleum transport jobs. The Combination (A) endorsement covers most long-haul freight operations. Grain transport typically requires the standard Class A CDL with no special endorsement unless using a tanker configuration.",
    },
    {
      question: "How does NDDOT handle CDL road closures during blizzards?",
      answer:
        "When North Dakota DOT closes I-94, I-29, or other highways during blizzards, the closure applies to all vehicles including commercial trucks. CDL drivers who attempt to drive through a road closure barrier commit a Class B misdemeanor and face potential CDL disqualification actions. Carriers should have established protocols for drivers to shelter at truck stops (located along I-94 and I-29) and wait for road conditions to improve. NDDOT typically reopens roads as soon as conditions allow and provides real-time updates through the 511 system.",
    },
    {
      question: "What are the county road weight restrictions in the Bakken oilfield area?",
      answer:
        "Under NDCC § 39-12-04, counties in the Williston Basin (Williams, McKenzie, Mountrail, Dunn counties) may post reduced weight limits or restrict access on county roads damaged by oilfield truck traffic. These restrictions are legally enforceable and change seasonally — spring thaw periods often trigger the most restrictive limits as weakened road bases cannot support heavy loads. CDL drivers operating in oilfield areas must check county road postings for the specific routes they plan to use before every trip, not just once per season.",
    },
    {
      question: "Does North Dakota have specific CDL requirements for grain transport?",
      answer:
        "Grain transport in North Dakota typically requires a Class A CDL for combination vehicles (semi-truck and grain trailer) or a Class B CDL for single-unit grain trucks exceeding 26,000 lbs GVWR. During fall harvest, the state issues seasonal overweight permits that allow grain trucks to operate above standard federal weight limits on designated highway routes. CDL drivers with grain truck permits must carry the permit documentation in the vehicle and operate only on the authorized routes and within the permitted weight ranges.",
    },
    {
      question: "What winter driving requirements apply to CDL drivers on North Dakota's interstates?",
      answer:
        "CDL drivers on North Dakota's interstates during winter must comply with all NDDOT road condition orders, including speed restrictions and road closures. Federal FMCSA regulations require CDL drivers to be in control of their vehicle at all times, which means adjusting speed for weather and road conditions below posted limits. North Dakota CDL holders are encouraged to equip CMVs with appropriate winter tires or chains as required, carry emergency supplies for potential waits at closures, and pre-plan routes with alternate options when blizzards are forecast.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in North Dakota?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in North Dakota?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your North Dakota DMV website for current fee schedules.",
    },
    {
      question: "Can I take the North Dakota CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the North Dakota DMV for available language options.",
    },
    {
      question: "How long is a North Dakota CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your North Dakota CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the North Dakota CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in North Dakota, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "North Dakota DMV Practice Test", href: "/north-dakota-dmv-practice-test" },
    { label: "North Dakota Motorcycle Practice Test", href: "/north-dakota-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NorthDakotaCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
