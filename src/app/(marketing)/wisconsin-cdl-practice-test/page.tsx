import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Wisconsin CDL Practice Test 2025 – Free WI DOT Commercial License Exam Prep",
  description:
    "Free Wisconsin CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Wisconsin DOT CDL testing, first OWI is civil but FMCSA still disqualifies CDL, Act 12 + FMCSA penalty, spring road weight restrictions, and farm overwidth permits.",
  alternates: { canonical: "https://caredmvprep.com/wisconsin-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/wisconsin-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Wisconsin",
  stateAbbr: "WI",
  testLabel: "CDL General Knowledge Test",
  slug: "wisconsin-cdl-practice-test",
  headline: "Wisconsin CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Wisconsin CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the Wisconsin CDL Manual. Wisconsin DMV (part of WisDOT) administers CDL testing. Wisconsin's first OWI is a civil infraction under state law — but FMCSA CDL disqualification still applies for OWI in a CMV regardless of state civil/criminal classification. Wisconsin's Act 12 (hands-free) applies to CDL operators with federal FMCSA penalties.",
  basedOn: "FMCSA CDL Manual & Wisconsin DMV CDL Manual",
  about: [
    "Wisconsin CDL testing is administered by the Division of Motor Vehicles (DMV), part of the Wisconsin Department of Transportation (WisDOT). CDL knowledge tests (50 questions, 80% required) are available at DMV service centers statewide. Wisconsin CDL skills tests are administered at WisDOT-approved Third Party Testing sites. Wisconsin issues Class A, B, and C CDLs with standard FMCSA endorsements.",
    "Wisconsin-specific CDL factors: (1) Wisconsin's first OWI (Operating While Intoxicated) is a civil infraction under state law, not a criminal offense. However, FMCSA CDL regulations do not follow the state's civil/criminal classification — a CDL holder in a commercial motor vehicle with a BAC at or above 0.04% is out-of-service and subject to FMCSA CDL disqualification, regardless of whether Wisconsin treats the OWI as civil. A CDL holder cannot escape FMCSA consequences by arguing the OWI was 'only civil.' (2) Wisconsin's Act 12 (hands-free, effective April 26, 2023) applies to CDL operators — additional FMCSA penalties up to $2,750 per violation apply. (3) Wisconsin's spring road weight restrictions ('Spring Thaw Restrictions') are imposed by WisDOT annually from approximately late February through April, reducing axle weight limits to protect frost-weakened pavement. CDL carriers must monitor WisDOT's spring restriction maps. (4) Wisconsin issues farm overwidth permits for agricultural equipment that exceeds standard width limits — CDL drivers transporting farm equipment on Wisconsin roads must carry the appropriate permits.",
  ],
  sampleQuestions: [
    {
      question: "Wisconsin's first OWI is a civil infraction under state law. How does this civil classification affect FMCSA CDL disqualification consequences?",
      options: [
        "FMCSA follows Wisconsin's classification — a civil OWI in a CMV does not trigger federal CDL disqualification",
        "A civil first OWI in a CMV triggers a reduced CDL disqualification period of 6 months instead of the standard 1 year",
        "FMCSA CDL disqualification applies regardless of whether the state classifies the OWI as civil or criminal — the 0.04% threshold in a CMV triggers federal consequences",
        "Wisconsin CDL holders are exempt from FMCSA disqualification for the first civil OWI under a special Wisconsin-FMCSA memorandum",
      ],
      correctIndex: 2,
      explanation:
        "Wisconsin's classification of a first OWI as a civil infraction (not a crime) is a state-level distinction that has no effect on federal FMCSA CDL consequences. FMCSA regulations (49 CFR 383.51) trigger CDL disqualification based on the conduct — operating a CMV with a BAC at or above 0.04%, refusing BAC testing, or being convicted of operating under the influence — not on whether the state classifies the offense as civil or criminal. A Wisconsin CDL holder in a CMV found at 0.04%+ BAC will be placed out-of-service for 24 hours and faces a 1-year CDL disqualification for a first offense, regardless of Wisconsin's civil classification.",
    },
    {
      question: "Wisconsin's spring road weight restrictions (Spring Thaw Restrictions) affect CDL freight operations. When are these restrictions typically in effect?",
      options: [
        "January 1 through March 31 — Wisconsin's winter road restrictions",
        "Approximately late February through April — restrictions protect frost-weakened pavement during the freeze-thaw cycle",
        "Wisconsin imposes no seasonal weight restrictions — standard federal limits apply year-round",
        "Only in northern Wisconsin above the Northwoods line — southern Wisconsin has no spring restrictions",
      ],
      correctIndex: 1,
      explanation:
        "WisDOT imposes spring road weight restrictions annually when frost begins to thaw — typically late February through April, varying by year and region. Spring restrictions reduce allowable axle weights below normal legal limits because frost-thaw cycles weaken pavement subgrade, making roads more susceptible to rutting and cracking under heavy loads. Wisconsin publishes spring restriction start and end dates and affected roads on the WisDOT website. CDL drivers and carriers operating heavy loads in Wisconsin during spring must check WisDOT's current restriction map before route planning. Operating over spring weight limits is a CDL violation and can result in significant fines and weight violations on the CDL record.",
    },
    {
      question: "Wisconsin Act 12 (hands-free, April 2023) applies to CDL operators. What is the FMCSA penalty structure for handheld device use in a CMV?",
      options: [
        "Wisconsin's Act 12 fine — no additional FMCSA penalty",
        "Up to $2,750 per violation for the driver; up to $11,000 per violation for the carrier",
        "$500 per violation for first offense; $1,000 for subsequent violations",
        "CDL operators face no phone penalties if they are parked in a rest area or truck stop",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA (49 CFR 392.82) prohibits CDL drivers from using handheld mobile devices in a CMV with a maximum penalty of $2,750 per violation for the driver. Carriers that require or allow drivers to use handheld devices face up to $11,000 per violation. Two handheld violations within 3 years trigger a 60-day CDL disqualification. Wisconsin's Act 12 state fine applies separately. 'Using' a handheld device includes: holding a phone to talk, texting, emailing, viewing maps, and any manual interaction. Fully voice-activated operation with no physical contact is permitted while moving.",
    },
    {
      question: "Wisconsin's dairy and agricultural sector generates overwidth farm equipment movements on Wisconsin roads. CDL drivers transporting farm equipment that exceeds standard width limits must carry what?",
      options: [
        "No permit is required for farm equipment under 12 feet wide in Wisconsin",
        "A WisDOT overwidth farm equipment permit — specific to the equipment width and movement route",
        "Only a flag vehicle is required — no permit is needed for farm equipment movements on Wisconsin county roads",
        "Farm equipment overwidth permits are issued by Wisconsin counties, not WisDOT, and only cover county roads",
      ],
      correctIndex: 1,
      explanation:
        "Wisconsin issues farm equipment overwidth permits through WisDOT for agricultural machinery that exceeds the standard 8.5-foot width limit. Permit requirements vary based on equipment width: equipment 8.5–10 feet wide may qualify for automatic permit provisions; equipment over 10 feet requires a specific WisDOT overwidth permit. CDL drivers transporting farm equipment on Wisconsin public roads must carry the appropriate permit documentation. Wisconsin's agricultural county roads (particularly in the dairy-intensive central and western regions) see significant farm equipment movement during planting (April–May) and harvest (September–October) seasons. Escort vehicle and warning sign requirements increase with equipment width.",
    },
    {
      question: "Under FMCSA regulations, what is the maximum hours-of-service (HOS) for a property-carrying CDL driver in a 24-hour period?",
      options: [
        "10 hours of driving after 8 consecutive off-duty hours",
        "11 hours of driving after 10 consecutive off-duty hours",
        "12 hours of driving after 8 consecutive off-duty hours",
        "14 hours of driving — there is no 10-hour reset requirement",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA Hours of Service (HOS) rules for property-carrying drivers: (1) 11-hour driving limit per day — a driver may drive a maximum of 11 hours after 10 consecutive off-duty hours; (2) 14-hour on-duty limit — a driver may not drive after having been on duty for 14 cumulative hours following the 10-hour break; (3) 30-minute rest break required if 8 or more hours have passed since the last break; (4) 60/70 hour weekly limit — 60 hours in 7 days or 70 hours in 8 days. Wisconsin CDL drivers on interstate freight routes must comply with federal HOS rules. Wisconsin has no state-specific HOS rules that are more lenient than federal; certain agricultural exemptions apply during planting and harvest.",
    },
    {
      question: "A Wisconsin CDL driver's pre-trip inspection reveals that the trailer's ABS (antilock braking system) warning lamp on the dashboard stays on after startup. What action is required?",
      options: [
        "ABS faults are advisory only — operate the vehicle but report the fault on the DVIR",
        "ABS warning lamps are not part of the CDL pre-trip inspection — only service brakes are checked",
        "Note the ABS fault on the DVIR; operating with a non-functional ABS is permitted as long as the service brakes function — but notify the carrier immediately",
        "An illuminated ABS warning lamp is an automatic out-of-service condition — the vehicle may not be operated",
      ],
      correctIndex: 2,
      explanation:
        "ABS failure is not an automatic out-of-service condition under current FMCSA regulations. ABS is a secondary braking enhancement system — its failure does not eliminate service braking capability. The vehicle's service brakes must still function correctly. However, the ABS fault must be noted on the DVIR, and the carrier must arrange for repair. The driver should notify the carrier immediately. FMCSA requires trailers manufactured after March 1, 1998, to be equipped with ABS — operating with a failed ABS system is a maintenance violation that will be noted on a DOT inspection, but it is not a Level I or II out-of-service condition as long as the service brakes are functional.",
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
      question: "How many questions are on the Wisconsin CDL General Knowledge test?",
      answer:
        "The Wisconsin CDL General Knowledge test has 50 questions. You need 40 correct (80%) to pass. Wisconsin also offers endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), and Air Brakes (25 questions). All endorsement tests require 80% to pass.",
    },
    {
      question: "Does Wisconsin's civil first OWI protect CDL holders from federal disqualification?",
      answer:
        "No. Wisconsin's classification of a first OWI as a civil infraction does not affect federal FMCSA CDL consequences. FMCSA disqualifies CDL holders based on the conduct (0.04%+ BAC in a CMV, refusing testing, or impaired CMV operation) regardless of the state's civil/criminal classification. A Wisconsin CDL holder faces 1-year CDL disqualification for a first CMV OWI offense, just as in any other state.",
    },
    {
      question: "What are Wisconsin's spring weight restrictions and how do they affect CDL freight?",
      answer:
        "WisDOT's spring road weight restrictions (late February through April) reduce allowable axle weights on Wisconsin roads during the freeze-thaw season. Affected roads are published annually on WisDOT's website with specific weight reduction percentages (typically 20–40% reductions from legal limits). CDL carriers must check restriction maps before route planning. Operating over spring limits results in significant fines and appears on CDL driver records.",
    },
    {
      question: "Where can Wisconsin CDL applicants take skills tests?",
      answer:
        "Wisconsin CDL skills tests are administered at WisDOT-approved Third Party Testing sites. Knowledge tests are available at DMV service centers statewide. Wisconsin Third Party Testers include trucking companies, trade schools, and private testing businesses. Use Wisconsin DMV's website to find approved testing locations near you.",
    },
    {
      question: "What is Wisconsin's CDL OWI standard?",
      answer:
        "Wisconsin CDL holders operating a commercial motor vehicle face the federal 0.04% BAC limit. The state's first OWI civil designation does not change this — FMCSA disqualification applies at 0.04% in a CMV regardless of state classification. Off-duty OWI in a personal vehicle: a first OWI conviction still triggers FMCSA CDL disqualification (1 year) even though the offense is civil in Wisconsin, because the FMCSA system uses conviction data regardless of offense classification.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Wisconsin?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Wisconsin?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Wisconsin DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Wisconsin CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Wisconsin DMV for available language options.",
    },
    {
      question: "How long is a Wisconsin CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Wisconsin CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Wisconsin CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Wisconsin, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "WI Driver's License", href: "/wisconsin-dmv-practice-test" },
    { label: "WI Motorcycle Test", href: "/wisconsin-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function WisconsinCDLPage() {
  return <PracticeTestPage {...data} />;
}
