import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Kentucky CDL Practice Test 2025 – Free KY KYTC Commercial License Exam Prep",
  description:
    "Free Kentucky CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing. Kentucky KYTC CDL testing, DUI 0.04% in CMV, Brent's Law applies to CDL holders, SB 332 + FMCSA penalty, Appalachian grade descents on I-64, Louisville distribution hub.",
  alternates: { canonical: "https://caredmvprep.com/kentucky-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/kentucky-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Kentucky",
  stateAbbr: "KY",
  testLabel: "CDL General Knowledge Test",
  slug: "kentucky-cdl-practice-test",
  headline: "Kentucky CDL General Knowledge Practice Test 2025",
  intro:
    "Prepare for the Kentucky CDL General Knowledge exam with practice questions based on the FMCSA CDL Manual and the Kentucky CDL Manual. Kentucky Transportation Cabinet (KYTC) Division of Driver Licensing administers CDL testing. Brent's Law (2020) applies to CDL holders with child passengers. Kentucky's SB 332 (hands-free) applies with FMCSA penalties. Appalachian mountain grades on I-64 and I-75 and Louisville's major distribution hub make Kentucky CDL operations uniquely demanding.",
  basedOn: "FMCSA CDL Manual & Kentucky KYTC CDL Manual",
  about: [
    "Kentucky CDL testing is administered by the Division of Driver Licensing, part of the Kentucky Transportation Cabinet (KYTC). CDL knowledge tests (50 questions, 80% required) are available at KYTC Driver Licensing Regional Offices statewide. CDL skills tests are administered at KYTC-approved Third Party Testing sites. Kentucky issues CDL Class A, B, and C licenses with standard FMCSA endorsements.",
    "Kentucky-specific CDL factors: (1) Brent's Law (HB 452, 2020) applies to CDL holders: if a CDL operator is convicted of DUI while carrying a child passenger under 12 — whether in a CMV or personal vehicle — the charge escalates to a minimum Class D felony. A Class D felony DUI triggers lifetime CDL disqualification under FMCSA's rules for disqualifying offenses. (2) Kentucky's SB 332 (hands-free law, effective July 8, 2022) applies to CDL operators — FMCSA penalties up to $2,750 per violation apply in addition to Kentucky's state fine. (3) Kentucky's Appalachian mountain grades on I-64 (eastern Kentucky) and I-75 (Corbin area) require specific CDL brake management techniques — runaway truck ramps are posted on steep descents. (4) Louisville is home to one of the largest UPS air hub operations in the world (Worldport at Louisville Airport) and major Amazon/automotive distribution centers — making Louisville a significant CDL employment market.",
  ],
  sampleQuestions: [
    {
      question: "Kentucky's Brent's Law (2020) affects CDL holders who carry a child passenger under 12 while DUI. What is the minimum charge under Brent's Law?",
      options: [
        "An enhanced misdemeanor with double fines",
        "A Class D felony — minimum 1–5 years imprisonment",
        "A traffic infraction only — Brent's Law does not apply to vehicle operators in Kentucky",
        "Brent's Law only applies to DUI while operating a school bus — not general CDL vehicles",
      ],
      correctIndex: 1,
      explanation:
        "Kentucky's Brent's Law (HB 452, 2020) applies to all motor vehicle operators — including CDL holders — who operate any vehicle (CMV or personal) while DUI with a child passenger under 12. The minimum charge is a Class D felony (1–5 years imprisonment). For CDL holders, a Class D felony DUI conviction triggers lifetime FMCSA CDL disqualification — because it is a 'disqualifying offense' under federal CDL rules that applies to felony convictions using a motor vehicle. The law applies equally whether the CDL operator is driving a commercial truck or a personal vehicle at the time of the DUI.",
    },
    {
      question: "Kentucky I-64 through the Appalachian mountains has steep grade descents. A CDL driver approaching a long downgrade should:",
      options: [
        "Build speed at the top of the grade to generate momentum for the descent",
        "Select a lower gear BEFORE starting the descent and use engine braking as primary speed control — do not downshift on the grade",
        "Apply the service brake continuously throughout the descent at moderate pressure",
        "Use only the trailer brakes on long grades — front axle brakes should be reserved for emergencies",
      ],
      correctIndex: 1,
      explanation:
        "CDL brake management for long downgrades: downshift BEFORE the grade — not on the descent — to select the appropriate gear that provides engine braking at the planned descent speed. Engine braking as the primary speed control prevents brake heat buildup. Apply service brakes briefly and intermittently if needed to reduce speed below the target (never continuously). Continuous brake application on a long descent causes brake fade from heat — rendering the brakes ineffective at the bottom of the grade. Kentucky I-64 east of Lexington has mountain grades that have caused runaway truck incidents historically — runaway truck ramps are provided on major descents for CDL vehicles.",
    },
    {
      question: "Kentucky SB 332 (hands-free, July 2022) applies to CDL operators. What FMCSA consequence applies to a CDL driver who accumulates three handheld device violations within 3 years?",
      options: [
        "30-day CDL disqualification",
        "60-day CDL disqualification for the second violation; 120-day for the third",
        "CDL revocation — three violations results in permanent disqualification",
        "No CDL disqualification — only financial penalties accumulate",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA (49 CFR 383.51) disqualification for handheld device violations in a CMV: (1) Two serious traffic violations within 3 years = 60-day CDL disqualification; (2) Three or more serious traffic violations within 3 years = 120-day CDL disqualification. Handheld device violations in a CMV are 'serious traffic violations' under FMCSA classification. Disqualification periods prevent any CDL driving — the driver cannot work in CDL employment during the disqualification period. Kentucky's state fines under SB 332 apply separately.",
    },
    {
      question: "Louisville is one of the largest logistics and distribution hubs in the United States. UPS Worldport at Louisville Airport processes millions of packages daily. What CDL operational factor is most relevant to CDL drivers in Louisville?",
      options: [
        "Louisville CDL vehicles must use airport-specific CDL licenses endorsed for airport ramp operations",
        "Louisville's I-264/I-265 Gene Snyder Freeway and I-71 interchange create high-density freight traffic requiring CDL drivers to know local interchange routing and weight-posted bridges over local streets",
        "Louisville's distribution hub requires CDL operators to complete a Jefferson County freight permit application before entering the city",
        "UPS Worldport operations prohibit CDL vehicles from using I-65 through Louisville during peak hours",
      ],
      correctIndex: 1,
      explanation:
        "Louisville's position as a logistics hub — UPS Worldport, Amazon Air Hub, Toyota Motor Manufacturing, Ford Truck Assembly, and the I-64/I-65/I-71 freight interchange — creates high CDL operational density. CDL-specific considerations for Louisville: (1) I-264/I-265 (Gene Snyder Freeway) and I-65 interchange — high-volume interchange traffic requires lane planning well in advance; (2) US 31W, US 60, and local Louisville streets have bridge weight postings below 80,000 lbs — CDL drivers must know their load weight and the posted capacity of bridges on the delivery route; (3) downtown Louisville has older infrastructure with turn radius limitations; (4) CSX and Norfolk Southern rail crossings in Louisville's industrial districts require CDL attention to grade crossing compliance.",
    },
    {
      question: "Under FMCSA regulations, a CDL driver must perform a pre-trip inspection before each trip. What must the inspection include regarding the coupling between a tractor and trailer?",
      options: [
        "Visual check only — no physical testing is required for the fifth wheel coupling",
        "The fifth wheel must be physically pulled against the kingpin lock while the trailer brakes are set to verify the coupling is secure — a visual-only check is insufficient",
        "Coupling inspection is only required for Class A CDL vehicles with trailers over 26,000 lbs",
        "The coupling inspection requires the carrier's mechanic to verify the connection — CDL drivers are not qualified to check couplings",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA pre-trip inspection requirements for the fifth wheel coupling: (1) visually verify the kingpin is locked in the fifth wheel — the locking jaws should be around the shank, not the head of the kingpin; (2) physically test the coupling by attempting to pull the tractor forward with the trailer service brakes applied — a properly coupled trailer will not pull free; (3) check for proper fifth wheel plate clearance; (4) verify the coupling pin (if equipped) and safety chain connections. Kentucky KYTC and FMCSA inspectors check coupling integrity on Level I inspections. A trailer that separates due to improper coupling is a catastrophic accident with immediate driver and carrier liability.",
    },
    {
      question: "A Kentucky CDL driver on I-75 near Corbin encounters a 'Runaway Truck Ramp Ahead' sign. What should the driver do?",
      options: [
        "Ignore it — runaway truck ramps are for trucks that have already lost control; a driver in control need not consider them",
        "Note the ramp location as a last-resort option if brake fade occurs on the descent and the driver loses the ability to control speed",
        "Slow to 25 mph before passing the ramp sign — Kentucky law requires all CDL vehicles to reduce speed near runaway ramps",
        "Activate the ramp regardless — using a runaway ramp when not strictly necessary improves CDL safety scores",
      ],
      correctIndex: 1,
      explanation:
        "Runaway truck ramps (also called truck escape ramps) are emergency facilities placed on steep downgrades where brake failure or overheating can cause a commercial vehicle to lose speed control. CDL drivers should: (1) note the ramp location before beginning the descent — knowing it's there reduces panic if needed; (2) if experiencing brake fade or loss of speed control, use the ramp immediately rather than attempting to continue; (3) the ramp is not a sign to slow down — it's a backup plan. Runaway ramps on Kentucky I-75 (Corbin area, Jellico Mountain) are designed to stop a vehicle at speeds above the normal travel speed. Using a runaway ramp when not necessary is inadvisable — recovery from the gravel/sand bed is difficult and requires carrier assistance.",
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
      question: "How many questions are on the Kentucky CDL General Knowledge test?",
      answer:
        "The Kentucky CDL General Knowledge test has 50 questions requiring 40 correct (80%) to pass. Endorsement tests: HazMat (30 questions), Tanker (30 questions), Passenger (20 questions), School Bus (20 questions), Doubles/Triples (20 questions), Air Brakes (25 questions). All require 80%. Contact KYTC for current testing fees and locations.",
    },
    {
      question: "What is Kentucky's CDL DUI standard?",
      answer:
        "Kentucky CDL holders in a CMV face the federal 0.04% BAC DUI limit. A DUI conviction in any vehicle triggers FMCSA CDL disqualification: 1 year for first offense, lifetime for second. Brent's Law escalates a DUI with a child passenger under 12 to a minimum Class D felony — which triggers lifetime CDL disqualification under FMCSA rules. Kentucky is a no-fault auto insurance state, but CDL commercial insurance follows federal standards.",
    },
    {
      question: "What are the Appalachian grade CDL hazards on Kentucky I-64 and I-75?",
      answer:
        "Kentucky I-64 (eastern Kentucky) and I-75 (Corbin/Jellico Mountain area) have significant Appalachian mountain grades with long descents. CDL hazards: (1) brake fade if brakes overheat from continuous application; (2) runaway situations if brake fade occurs; (3) fog in mountain cuts that reduces visibility suddenly; (4) deer crossing activity on forested grade sections; (5) seasonal ice on shaded north-facing cuts. Runaway truck ramps are provided on major descents. CDL drivers should downshift before the grade begins and use engine braking as primary speed control.",
    },
    {
      question: "Where can Kentucky CDL applicants take skills tests?",
      answer:
        "Kentucky CDL skills tests are administered at KYTC-approved Third Party Testing sites. Knowledge tests are available at KYTC Driver Licensing Regional Offices statewide. Kentucky has CDL testing in Louisville, Lexington, Bowling Green, Owensboro, Covington, and other cities. Contact KYTC Division of Driver Licensing for current approved testing site lists.",
    },
    {
      question: "What makes Louisville significant for Kentucky CDL employment?",
      answer:
        "Louisville is one of the U.S.'s most important logistics cities: UPS Worldport (world's largest air package sorting facility), Amazon Air Hub, Toyota Motor Manufacturing Kentucky (Georgetown), Ford Truck Assembly, and major rail (CSX, Norfolk Southern) interchange points. CDL Class A freight employment in Louisville is concentrated around the I-64/I-65/I-71 interchange ('Spaghetti Junction') and the Louisville Metro Industrial areas west of downtown. CDL skills in this environment include tight maneuvering in warehouse dock configurations and navigating the complex I-64/I-65 interchange.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Kentucky?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Kentucky?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Kentucky DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Kentucky CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Kentucky DMV for available language options.",
    },
    {
      question: "How long is a Kentucky CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Kentucky CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Kentucky CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Kentucky, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "KY Driver's License", href: "/kentucky-dmv-practice-test" },
    { label: "KY Motorcycle Test", href: "/kentucky-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "View All States", href: "/states" },
  ],
};

export default function KentuckyCDLPage() {
  return <PracticeTestPage {...data} />;
}
