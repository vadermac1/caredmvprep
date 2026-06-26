import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New Mexico CDL Practice Test 2025 – Free MVD Commercial License Prep",
  description: "Prepare for the New Mexico MVD CDL knowledge exam with questions on DWI 0.04% BAC for CMV operators, haboob dust storm protocol on I-40/I-25, arroyo crossing flash flood risk, Border Patrol checkpoint procedures for CDL vehicles, I-40 Route 66 corridor, and Sunland Park port of entry.",
  alternates: { canonical: "https://caredmvprep.com/new-mexico-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/new-mexico-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New Mexico",
  stateAbbr: "NM",
  testLabel: "CDL Practice Test",
  slug: "new-mexico-cdl-practice-test",
  headline: "New Mexico CDL Practice Test 2025",
  intro: "The New Mexico Motor Vehicle Division (MVD), under the Taxation & Revenue Department, issues Commercial Driver's Licenses. The CDL knowledge exam covers FMCSA regulations and New Mexico-specific rules including DWI at 0.04% BAC for CMV operators, haboob (dust storm) protocol on I-40 and I-25, arroyo flash flooding risk, Border Patrol checkpoint procedures for CDL vehicles (manifest and paperwork inspection), the I-40 Route 66 corridor, and the Sunland Park/Santa Teresa port of entry near El Paso for cross-border CDL operations.",
  basedOn: "New Mexico MVD CDL Manual / FMCSA Federal Motor Carrier Safety Regulations",
  about: [
    "New Mexico's CDL program is administered by the Motor Vehicle Division (MVD) under the Taxation & Revenue Department. CDL holders operating commercial motor vehicles in New Mexico are subject to a 0.04% BAC DWI threshold under federal FMCSA regulations — New Mexico uses DWI (Driving While Intoxicated) rather than DUI terminology. A first DWI conviction at the CMV threshold results in one-year CDL disqualification. The I-40 corridor through New Mexico — following the historic Route 66 alignment from Albuquerque to Gallup and into Arizona — is one of the primary transcontinental freight corridors in the Southwest. I-25 from Albuquerque to Las Cruces and El Paso is the primary north-south commercial corridor, linking New Mexico to the Texas border and the major El Paso distribution hub.",
    "New Mexico CDL operations have specific hazards and procedural requirements not found in most other states. Haboob dust storms on I-40 and I-25 require CDL drivers to know the complete pull-off-and-lights-out protocol — and to understand that at CDL vehicle height, wind-driven debris during a haboob can be even more damaging to vehicle components than in a passenger car. Border Patrol interior checkpoints on US-70, US-54, US-180, and near I-10 near the Texas/Mexico border require all vehicles including CDL to stop — commercial vehicles may also be subject to secondary inspection where cargo manifests and driver documentation are reviewed. The Sunland Park/Santa Teresa port of entry near El Paso serves cross-border commercial traffic between New Mexico/Texas and the Mexican state of Chihuahua.",
  ],
  sampleQuestions: [
    {
      question: "A New Mexico CDL driver is operating a tractor-trailer on I-40 near Albuquerque when a haboob engulfs the highway and visibility drops to near zero. What is the correct CDL response?",
      options: ["Reduce speed to 25 mph and activate hazard lights to warn following traffic", "Pull completely off the roadway, turn off ALL lights (including hazard lights), set the parking brake, and wait for visibility to return", "Continue at reduced speed — CDL vehicles are required to remain on the road to prevent blocking the shoulder", "Pull to the right shoulder with four-way flashers and remain in the vehicle"],
      correctIndex: 1,
      explanation: "The haboob protocol for CDL drivers is the same as for passenger vehicles — pull completely off the roadway (not just to the shoulder), turn off ALL lights including hazard lights, and wait. For CDL vehicles specifically: the larger size of the truck means other vehicles following lights in zero-visibility conditions that strike a CDL vehicle face catastrophic consequences. Turning off lights removes the truck as an 'attractor target' for lost drivers. The CDL driver must also secure the vehicle with parking brake before exiting if necessary. Hazard lights in a haboob create the same dangerous targeting effect for trucks as for cars. This protocol is directly tested on the NM CDL exam."
    },
    {
      question: "A CDL driver on US-70 in New Mexico encounters a Border Patrol interior checkpoint. Can the Border Patrol officer request the CDL driver's cargo manifest and documentation?",
      options: ["No — Border Patrol may only ask citizenship questions and visual inspection of the cab", "Yes — commercial vehicles at Border Patrol interior checkpoints may be directed to secondary inspection where cargo manifests, driver's license, medical certificate, and other documentation may be reviewed", "Only if the vehicle's cargo is food or agricultural products", "CDL vehicles are exempt from checkpoint stops under FMCSA interstate commerce regulations"],
      correctIndex: 1,
      explanation: "Border Patrol interior checkpoints in New Mexico stop all vehicles, including commercial vehicles. CDL vehicles directed to secondary inspection may have their cargo manifests reviewed, driver documentation checked (CDL license, medical examiner's certificate, hours of service records), and in some cases the cargo itself may be subject to inspection. CDL drivers must have all required documentation readily available and must comply fully with Border Patrol officer instructions. Attempting to refuse checkpoint stops or secondary inspection is a federal crime. CDL carriers operating on New Mexico border-region routes should ensure drivers are briefed on checkpoint compliance procedures."
    },
    {
      question: "During New Mexico's monsoon season, a CDL driver on US-285 south of Roswell encounters an arroyo crossing where brown water is moving across the road. The driver cannot see the road surface under the water. What is required?",
      options: ["Proceed at 5 mph — CDL vehicles with high ground clearance can safely cross shallow arroyo flooding", "Turn around — arroyo water depth and current cannot be assessed visually, and the road may have washed out beneath the water surface", "Wait 30 minutes and proceed if the water level appears to have dropped", "Call dispatch for approval before crossing any flooded road"],
      correctIndex: 1,
      explanation: "'Turn Around, Don't Drown' applies to CDL vehicles just as it does to passenger cars — perhaps even more so. A large commercial vehicle crossing a flooded arroyo may prevent it from returning if conditions worsen, creating a situation where the vehicle blocks the road while stranded. The road surface under arroyo water may have washed out — a CDL vehicle breaking through collapsed pavement into an arroyo could become trapped or overturned. Arroyo currents are strong enough to affect CDL vehicle stability at depths that appear safe. CDL drivers must not attempt to cross flooded arroyos regardless of vehicle size or ground clearance."
    },
    {
      question: "The Sunland Park/Santa Teresa port of entry near El Paso, New Mexico is a border crossing for commercial vehicles. What documentation must a CDL driver have when crossing commercially from Mexico into New Mexico?",
      options: ["Only the CDL license — all cargo paperwork is handled electronically by the carrier", "CDL license, vehicle registration, proof of insurance, cargo manifest, customs documentation, medical examiner's certificate, and hours of service records", "A letter from the carrier and the driver's CDL only", "CDL vehicles do not need special documentation at New Mexico border crossings"],
      correctIndex: 1,
      explanation: "CDL drivers crossing at the Sunland Park/Santa Teresa port of entry from Mexico into New Mexico must have a complete set of documentation: their CDL license with appropriate endorsements, current vehicle registration, proof of insurance, cargo manifest and U.S. Customs commercial entry documentation, medical examiner's certificate showing current medical qualification, and hours of service logs showing driving time compliance. Cross-border CDL operations also require that the carrier be registered with FMCSA for international operations. Incomplete documentation can result in the truck being held at the port of entry for hours or days while documentation is obtained."
    },
    {
      question: "What is the DWI BAC threshold for a New Mexico CDL holder operating a commercial motor vehicle?",
      options: ["0.08%", "0.06%", "0.04%", "0.02%"],
      correctIndex: 2,
      explanation: "New Mexico CDL holders operating commercial motor vehicles are subject to a 0.04% BAC DWI threshold — half the standard adult limit. New Mexico uses DWI (Driving While Intoxicated) terminology rather than DUI, but the federal FMCSA 0.04% CMV standard applies regardless of the state's terminology choice. A first DWI conviction at the CMV threshold results in mandatory one-year CDL disqualification (three years if carrying hazardous materials). A second conviction results in lifetime CDL disqualification. DWI in a personal vehicle also triggers CDL disqualification under FMCSA regulations."
    },
    {
      question: "New Mexico's I-40 corridor follows the historic Route 66 alignment across the state. What is the rural speed limit on I-40 in New Mexico, and what weather-related speed considerations apply?",
      options: ["55 mph with no weather-related speed considerations", "75 mph rural limit — but New Mexico's reasonable and prudent standard requires speed reduction in haboob, monsoon rain, and high-wind conditions common on I-40", "80 mph with no specific speed reduction requirements", "65 mph on all sections of I-40 in New Mexico"],
      correctIndex: 1,
      explanation: "New Mexico's rural interstate speed limit on I-40 is 75 mph. However, New Mexico law requires driving at a speed reasonable and prudent for conditions — and I-40 through New Mexico's desert corridor experiences multiple weather conditions that regularly make the posted limit dangerous: haboob dust storms that reduce visibility to zero, monsoon rain that creates surface flooding, high crosswinds that affect CDL vehicle stability (particularly empty trailers), and dust or blowing sand that reduces visibility without a full haboob. CDL drivers on I-40 must actively monitor conditions and reduce speed appropriately regardless of the posted limit."
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
      question: "What is the DWI BAC limit for New Mexico CDL holders in commercial vehicles?",
      answer: "New Mexico CDL holders operating commercial motor vehicles are subject to a 0.04% BAC DWI threshold — federal FMCSA standard, expressed using New Mexico's DWI (Driving While Intoxicated) terminology rather than DUI. A first DWI conviction (in a CMV or personal vehicle) results in mandatory one-year CDL disqualification. If the CMV was transporting hazardous materials, the disqualification extends to three years for a first offense. A second DWI conviction results in lifetime CDL disqualification. New Mexico's Implied Consent Act applies to CDL holders — refusal to submit to chemical testing when lawfully arrested triggers automatic license revocation."
    },
    {
      question: "How does the haboob protocol affect CDL operations in New Mexico?",
      answer: "Haboob dust storms on I-40 and I-25 are a genuine operational hazard for CDL drivers in New Mexico. When a haboob approaches, CDL drivers must pull completely off the roadway — off the travel lanes and beyond the shoulder where possible — turn off all lights including hazard lights (to avoid attracting other drivers lost in the dust), set the parking brake securely, and wait for the storm to pass. For CDL vehicles, the larger vehicle profile means that being struck by a confused driver in zero-visibility conditions creates a catastrophic accident. Wind-driven dust and sand during a haboob can also damage exposed mechanical components, and CDL drivers should check for damage after the storm passes before resuming travel. FMCSA regulations support CDL drivers' right to stop in immediately hazardous conditions."
    },
    {
      question: "What Border Patrol checkpoint procedures apply to CDL vehicles in New Mexico?",
      answer: "All vehicles on New Mexico highways with Border Patrol interior checkpoints — including commercial vehicles — must stop. CDL vehicles may be directed to a 'primary' lane for a brief stop-and-question procedure, or to 'secondary' inspection where cargo manifests, driver documentation (CDL, medical certificate, hours of service records), and sometimes the cargo itself may be inspected. CDL carriers operating on border-region New Mexico routes (US-70 near Las Cruces, US-54, US-180, and I-10 corridor) should ensure drivers have all required documents readily accessible and understand that compliance is legally required. Checkpoint stops may add 15–30 minutes to travel time when secondary inspection is involved, and CDL carriers should factor this into dispatch schedules for border-region routes."
    },
    {
      question: "What cross-border CDL operations exist at the Sunland Park/Santa Teresa port of entry?",
      answer: "The Sunland Park/Santa Teresa port of entry in southern New Mexico (near El Paso, Texas) serves commercial vehicle traffic between New Mexico/Texas and the Mexican state of Chihuahua, particularly for the maquiladora manufacturing industry in Ciudad Juárez. CDL drivers operating at this crossing must hold appropriate CDL endorsements for their cargo type, be registered with FMCSA for international operations if operating under a Mexican carrier authority, have complete U.S. Customs entry documentation for inbound cargo, and comply with both FMCSA and U.S. Customs and Border Protection requirements. The Santa Teresa facility has grown significantly as a commercial crossing point in recent years due to its rail connection and proximity to El Paso's logistics hub."
    },
    {
      question: "What arroyo flash flooding risks must New Mexico CDL operators understand?",
      answer: "Arroyo flash flooding poses significant risks for CDL operations on New Mexico's secondary highways and some primary routes during the monsoon season (July–September). Arroyos cross numerous state and county roads throughout New Mexico, and CDL vehicles that attempt to cross flooded arroyo crossings risk being swept by current (possible even for large trucks in strong arroyo flows), breaking through washed-out pavement hidden under water, or becoming stranded and blocking the road while the water recedes. A stranded CDL vehicle in an arroyo crossing creates a major road blockage and rescue challenge. CDL drivers on New Mexico rural routes during monsoon season must monitor weather conditions, plan routes that avoid known arroyo crossings during active rainfall events, and never attempt to cross any flooded road crossing regardless of vehicle size."
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in New Mexico?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in New Mexico?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your New Mexico DMV website for current fee schedules.",
    },
    {
      question: "Can I take the New Mexico CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the New Mexico DMV for available language options.",
    },
    {
      question: "How long is a New Mexico CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your New Mexico CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the New Mexico CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in New Mexico, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "New Mexico DMV Practice Test", href: "/new-mexico-dmv-practice-test" },
    { label: "New Mexico Motorcycle Practice Test", href: "/new-mexico-motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes Practice Test", href: "/cdl-air-brakes" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NewMexicoCDLPage() {
  return <PracticeTestPage {...data} />;
}
