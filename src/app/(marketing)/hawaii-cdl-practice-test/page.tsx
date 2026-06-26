import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Hawaii CDL Practice Test 2025 – Free HI Commercial Driver's License Prep",
  description:
    "Prepare for your Hawaii CDL knowledge test with free practice questions covering Young Brothers inter-island cargo procedures, Honolulu port congestion routing, Big Island lava hazards, and FMCSA requirements as applied in Hawaii.",
  alternates: { canonical: "https://caredmvprep.com/hawaii-cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/hawaii-cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Hawaii",
  stateAbbr: "HI",
  testLabel: "CDL Practice Test",
  slug: "hawaii-cdl-practice-test",
  headline: "Hawaii CDL Practice Test 2025",
  intro:
    "Hawaii CDL applicants must pass FMCSA-compliant knowledge tests administered through county licensing offices under the Hawaii Department of Transportation. Hawaii CDL operations include unique island-specific challenges: Young Brothers and Matson inter-island cargo ferry loading and unloading, Honolulu port congestion and routing, Big Island lava hazard road closures, and the fact that Hawaii's road networks are completely separate on each island. This free practice test covers those Hawaii-specific CDL topics.",
  basedOn: "FMCSA CDL Manual – Hawaii DOT CDL Supplement",
  about: [
    "Hawaii CDLs are issued through county licensing offices operating under the Hawaii Department of Transportation (DOT). CDL knowledge tests follow FMCSA requirements with an 80% passing score required. Hawaii's CDL environment is unique nationally: commercial drivers may operate CMVs only on the island where the vehicle is registered, as there are no roads between islands. Inter-island cargo vehicle and equipment transport is handled by Matson Navigation and Young Brothers cargo vessels. CDL drivers involved in inter-island cargo operations at Honolulu's Pier 51 and other island ports must be familiar with port loading and unloading procedures. The FMCSA OVUII (OUI) 0.04% BAC limit applies to all Hawaii CDL drivers operating a CMV.",
    "Hawaii Island (Big Island) CDL operations face additional hazards from Kilauea's volcanic activity. Active lava flows can close roads on the Big Island with minimal warning, requiring CDL drivers to monitor Hawaii County Civil Defense alerts for route changes. Vog (volcanic smog) from Kilauea reduces visibility and requires headlight use and speed reduction. The Honolulu metropolitan area presents CDL routing challenges: Nimitz Highway and the downtown Honolulu street network near the Port of Honolulu have height restrictions and weight limitations. CDL drivers serving agricultural operations in Hawaii — including pineapple, sugarcane (historically), and diversified agriculture — must be aware of Hawaii's unique agricultural vehicle rules.",
  ],
  sampleQuestions: [
    {
      question:
        "What is the FMCSA blood alcohol concentration (BAC) limit for a CDL driver operating a CMV in Hawaii?",
      options: ["0.08%", "0.02%", "0.04%", "0.00%"],
      correctIndex: 2,
      explanation:
        "The FMCSA sets a BAC limit of 0.04% for CDL drivers operating a commercial motor vehicle — half the standard 0.08% limit for non-commercial drivers. This limit applies in Hawaii whenever the driver is behind the wheel of a CMV. Hawaii uses OVUII (Operating a Vehicle Under the Influence of an Intoxicant) terminology, but the FMCSA 0.04% limit applies regardless. A CDL driver who tests at 0.04% BAC or higher is placed out of service and faces CDL disqualification.",
    },
    {
      question:
        "What operational challenge is unique to CDL drivers working in Hawaii's inter-island cargo industry?",
      options: [
        "CDL drivers must hold a maritime endorsement to operate near ports",
        "Commercial vehicles must be transported by cargo ship between islands because there are no inter-island roads",
        "All inter-island cargo is carried by air — no ship-based vehicle cargo exists in Hawaii",
        "CDL vehicles are prohibited from within 1 mile of all Hawaii ports",
      ],
      correctIndex: 1,
      explanation:
        "Hawaii's islands are not connected by roads — each island's road network is completely independent. Commercial vehicles must be transported between islands by cargo ship (Matson Navigation or Young Brothers). CDL drivers working in Hawaii's inter-island cargo industry are involved in the loading and unloading of vehicles and equipment at port facilities. This makes Hawaii CDL operations unique nationally: a CDL driver can only operate their CMV on the island where it is located, as driving it between islands is physically impossible.",
    },
    {
      question:
        "A CDL driver on Hawaii Island (Big Island) receives a Hawaii County Civil Defense alert that a lava flow has crossed a road on their planned route. What must the driver do?",
      options: [
        "Proceed slowly, as lava flows move slowly enough to drive around",
        "Continue the planned route since Civil Defense alerts are advisories only",
        "Do not proceed — follow the road closure instructions and use an alternate route or wait for clearance",
        "Use four-wheel drive to cross the cooled lava surface",
      ],
      correctIndex: 2,
      explanation:
        "When Hawaii County Civil Defense issues a road closure due to lava flow activity, CDL drivers must comply immediately. Active lava flows are extremely dangerous and can move at varying speeds. Road surfaces may be blocked, destroyed, or structurally compromised from heat. Attempting to drive around a lava closure barrier is illegal under Hawaii emergency management law and extremely hazardous. CDL drivers should contact dispatch to report the closure, obtain an alternate route, and document the delay for hours-of-service records.",
    },
    {
      question:
        "When routing a large CMV through Honolulu to access the Port of Honolulu, what is the primary CDL routing concern?",
      options: [
        "Honolulu requires all CMVs to use Pearl Harbor Freeway exclusively",
        "Downtown Honolulu streets and port approach routes may have low-clearance structures and weight-restricted roads requiring advance route planning",
        "The Port of Honolulu is accessible directly from H-1 without any street routing",
        "CMVs are prohibited from Honolulu streets during all daylight hours",
      ],
      correctIndex: 1,
      explanation:
        "Routing large CMVs through Honolulu to the Port of Honolulu on Pier 51/52 requires careful advance planning. Nimitz Highway (HI-92) is the primary port access route, but the surrounding downtown Honolulu street network has low-clearance bridges, weight-restricted streets, and narrow turns that may not accommodate large CMVs. CDL drivers should use commercial vehicle navigation tools, verify all bridge clearances and weight limits for their planned route, and comply with any port authority routing instructions.",
    },
    {
      question:
        "A CDL driver transporting hazardous materials in Hawaii must stop at all railroad crossings. What is the required stopping procedure?",
      options: [
        "Stop only if automatic gates are in the lowered position",
        "Slow to 5 mph and proceed without stopping if no train is visible",
        "Stop within 50 feet but not less than 15 feet of the nearest rail, look and listen, then proceed when safe",
        "Hazmat vehicles are exempt from stopping at railroad crossings in Hawaii because train traffic is minimal",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA regulations require CDL drivers transporting hazardous materials to stop at all railroad crossings regardless of whether gates are up or a train is visible. The stop must be made within 50 feet but not less than 15 feet from the nearest rail. The driver must look and listen in both directions before proceeding. Hawaii does have railroad crossings — the Hawaii Railway Society operates historically, and industrial operations in some areas have rail infrastructure. The rule applies to all railroad crossings in Hawaii.",
    },
    {
      question:
        "How does vog (volcanic smog) from Kilauea affect CDL operations on Hawaii Island?",
      options: [
        "Vog has no effect on CDL operations and requires no driving adjustments",
        "Vog reduces visibility and may require headlight use, reduced speed, and increased following distance",
        "Vog affects CDL operations only when the driver has an existing respiratory condition",
        "Vog triggers a mandatory CMV shutdown until Civil Defense gives the all-clear",
      ],
      correctIndex: 1,
      explanation:
        "Vog from Kilauea's sulfur dioxide emissions reduces visibility on Hawaii Island roads, particularly in leeward areas and during Kona wind events. CDL drivers operating in heavy vog conditions must use headlights (low beam), reduce speed to match visibility conditions, and increase following distance. For CDL drivers with large CMVs that have longer stopping distances than passenger cars, these adjustments are especially important. Heavy vog may also trigger Civil Defense advisories that CDL dispatchers and drivers should monitor.",
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
      question: "What agency issues CDLs in Hawaii?",
      answer:
        "Hawaii CDLs are issued through county-level licensing offices operating under the Hawaii Department of Transportation (DOT), Highways Division. The specific offices are: City and County of Honolulu (for Oahu residents), Maui County (for Maui, Molokai, and Lanai residents), Hawaii County (for Big Island residents), and Kauai County (for Kauai residents). CDL applicants must visit the county licensing office for their island to take knowledge tests, submit a DOT medical certificate, and complete the CDL skills test.",
    },
    {
      question: "What CDL knowledge tests are required in Hawaii?",
      answer:
        "All Hawaii CDL applicants must pass the General Knowledge test. Additional tests depend on the vehicle class and endorsements required: Combination Vehicles (Class A), Air Brakes (if the vehicle has air brakes), Passenger Transport, Hazardous Materials (plus TSA security threat assessment), Tank Vehicles, Doubles/Triples, and School Bus. Each test requires an 80% minimum score. Hawaii CDL applicants should also familiarize themselves with island-specific operational requirements covered in Hawaii DOT CDL supplements.",
    },
    {
      question: "What is the OVUII BAC limit for CDL drivers in Hawaii?",
      answer:
        "The FMCSA BAC limit of 0.04% applies to CDL drivers operating a CMV in Hawaii. Hawaii uses OVUII terminology (Operating a Vehicle Under the Influence of an Intoxicant) for all impaired driving offenses. A CDL driver who refuses a chemical test or tests at 0.04% or above is immediately placed out of service and faces CDL disqualification. The standard OVUII limit of 0.08% applies when the CDL holder is driving a personal (non-CMV) vehicle.",
    },
    {
      question: "How does inter-island cargo work for Hawaii CDL drivers?",
      answer:
        "Hawaii's islands have no road connections between them. CDL drivers involved in inter-island cargo work at port facilities where vehicles and cargo are loaded onto cargo ships operated by Matson Navigation or Young Brothers. CDL drivers operate roll-on/roll-off vehicles and equipment at the port, following port authority safety procedures. A CMV registered on Oahu cannot be driven to Maui — it must be shipped. CDL drivers on each island can only operate their CMV on that island's road network.",
    },
    {
      question: "What should Hawaii Island CDL drivers do if a lava flow threatens their route?",
      answer:
        "Hawaii Island CDL drivers should continuously monitor Hawaii County Civil Defense alerts and Hawaii Emergency Management Agency (HI-EMA) notifications when active volcanic activity is occurring on the Big Island. If a lava flow road closure is issued, CDL drivers must comply immediately — do not attempt to cross or circumvent a closure barrier. Notify dispatch of the route change requirement. Document the delay in the driver's log (hours-of-service records allow for delays caused by emergency road closures). Use alternate routes as designated by Civil Defense.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Hawaii?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Hawaii?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Hawaii DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Hawaii CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Hawaii DMV for available language options.",
    },
    {
      question: "How long is a Hawaii CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Hawaii CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Hawaii CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Hawaii, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "Hawaii DMV Practice Test", href: "/hawaii-dmv-practice-test" },
    { label: "Hawaii Motorcycle Practice Test", href: "/hawaii-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function HawaiiCdlPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
