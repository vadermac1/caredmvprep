import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "South Carolina DMV Practice Test 2025 – Free SCDMV Permit Exam Prep",
  description:
    "Free South Carolina SCDMV practice test based on the SC Driver's Manual. 80% passing score. Emma's Law IID requirement, golf cart road laws, and SC-specific graduated licensing. Pass your South Carolina knowledge test first try.",
  alternates: { canonical: "https://caredmvprep.com/south-carolina-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/south-carolina-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "South Carolina",
  stateAbbr: "SC",
  testLabel: "SCDMV Knowledge Test",
  slug: "south-carolina-dmv-practice-test",
  headline: "South Carolina DMV Practice Test 2025",
  intro:
    "The South Carolina Department of Motor Vehicles (SCDMV) administers a knowledge test requiring a score of 80% or higher to pass, per SCDMV's own practice-exam tool. South Carolina's 'Emma's Law' (2014) was among the first state laws to mandate ignition interlock devices for first-time DUI offenders with high BAC readings. South Carolina also has some of the nation's most detailed golf cart road regulations — a testable topic unique to SC coastal communities.",
  basedOn: "South Carolina Driver's Manual (current SCDMV edition)",
  keyRules: [
    { icon: "🔑", rule: "Emma's Law: IID for first DUI ≥0.15% BAC", detail: "SC's 2014 Emma's Law requires ignition interlock devices for all first DUI offenders with BAC ≥0.15%, and for ALL offenders on second or subsequent DUI regardless of BAC." },
    { icon: "⛳", rule: "Golf carts: legal on roads ≤35 mph", detail: "South Carolina allows golf carts on public roads posted 35 mph or less in authorized communities. Must have registration, lights, and SMV emblem; driver must have valid license." },
    { icon: "🍺", rule: "DUI: 0.08% adults; 0.02% under-21", detail: "0.08% for adults; 0.02% for drivers under 21; implied consent refusal = 6-month suspension (first refusal) or 9-month (subsequent refusal within 10 years)." },
    { icon: "📱", rule: "Hands-free required (Act R-134, May 2023)", detail: "SC Hands-Free Act (Act R-134) effective May 17, 2023 — all drivers prohibited from holding or manually using a wireless device while driving. Primary enforcement." },
    { icon: "🚗", rule: "Beginner's permit at 15 (40 supervised hours)", detail: "Available at age 15; must hold for 180 days and complete 40 supervised hours (10 at night) before a Conditional License can be issued." },
    { icon: "🌙", rule: "Conditional License: 10PM school-night curfew", detail: "Conditional License (ages 15½–17): no driving midnight–6AM; no driving 10PM–6AM on school nights during first 6 months; one non-family passenger under 21 restriction." },
    { icon: "🚨", rule: "Move Over: 25 mph below posted limit", detail: "Must change lanes or reduce speed to 25 mph below the posted speed limit when approaching stopped emergency, utility, or maintenance vehicles — misdemeanor violation." },
    { icon: "💺", rule: "Seatbelt: primary enforcement", detail: "All front-seat occupants required; rear-seat passengers under 18 required. Primary enforcement means police may stop a vehicle solely for a seatbelt violation." },
  ],
  about: [
    "South Carolina's 'Emma's Law' (S.C. Code § 56-1-400, enacted 2014) was a landmark piece of impaired driving legislation. Named for Emma Longstreet, a child killed by a repeat DUI offender, the law mandated ignition interlock devices (IIDs) for DUI offenders with a BAC of 0.15% or higher on a first offense — and for all offenders on a second or subsequent DUI regardless of BAC. An IID requires the driver to blow into a breathalyzer before the vehicle will start, with random retests while driving. South Carolina's DUI threshold is 0.08% for adults, 0.02% for drivers under 21. Implied consent refusal: first refusal results in a 6-month suspension (not a standard 90-day like many states); second or subsequent refusal: 9-month suspension. South Carolina's SCDMV administers the knowledge test at driver's license offices statewide; a score of 80% or higher is required to pass, per SCDMV's own practice-exam tool.",
    "South Carolina is one of a small number of states with detailed, codified golf cart regulations — and the only state where golf cart operation on public roads is a distinct, commonly tested subject on the driver's knowledge exam. Golf carts are especially prevalent in coastal communities such as Hilton Head Island, Myrtle Beach, Pawleys Island, and Kiawah Island, where golf cart transportation is integrated into community infrastructure. Under South Carolina law, golf carts may operate on roads with posted speed limits of 35 mph or less. They must be registered with the SCDMV, equipped with headlights, taillights, brake lights, and turn signals if driven between dusk and dawn, and marked with a slow-moving vehicle (SMV) emblem. The driver must hold a valid South Carolina driver's license. Golf carts may not be driven on roads posted above 35 mph, interstates, or roads with speed limits over 35 mph — even momentarily crossing such roads requires an intersection crossing zone designation by local ordinance.",
    "South Carolina's Hands-Free Act (Act R-134, effective May 17, 2023) prohibits all drivers from using a wireless device unless in hands-free mode. This law applies to all drivers, makes primary enforcement available, and carries fines of $100 for a first offense, $200 for a second, and $300 for a third and subsequent violations. South Carolina's graduated licensing system requires a Beginner's Permit at 15, with at least 180 days of supervised driving and 40 total hours (10 at night) before a Conditional License can be issued. Conditional License holders (ages 15½–17) face a nighttime curfew (midnight–6AM, or 10PM–6AM on school nights) and a passenger restriction (one non-family passenger under 21 during the first 6 months). Full unrestricted licenses are available at 17 for those who completed driver education, or 18 otherwise.",
  ],
  sampleQuestions: [
    {
      question: "South Carolina's 'Emma's Law' (2014) requires ignition interlock devices (IIDs) in which of the following situations?",
      options: [
        "Only for third-time DUI offenders — first and second offense DUI does not trigger an IID requirement",
        "For all first-time DUI offenders with a BAC of 0.15% or higher, AND for all second or subsequent DUI offenders regardless of BAC",
        "For any DUI offender who refuses a breathalyzer test at the time of arrest",
        "Only for DUI offenders who have passengers under 16 in the vehicle at the time of the offense",
      ],
      correctIndex: 1,
      explanation:
        "Emma's Law (SC Code § 56-1-400) was enacted in 2014 and named for a child killed by a repeat DUI offender. It mandates IID installation for: (1) first-time DUI offenders whose BAC was 0.15% or higher; (2) ALL second or subsequent DUI offenders, regardless of BAC level. An IID prevents the vehicle from starting unless the driver provides a clean breath sample. The device also requires random retests while driving to prevent circumvention. South Carolina was among the first states to expand IID requirements to first-time high-BAC offenders, and Emma's Law is a model for similar laws in other states.",
    },
    {
      question: "South Carolina allows golf carts to operate on public roads under what specific conditions?",
      options: [
        "Golf carts may drive on any public road as long as they don't exceed 25 mph",
        "Golf carts are permitted only on private communities' internal roads — public road use requires a special vehicle classification",
        "Golf carts may operate on roads with posted speed limits of 35 mph or less, if registered with SCDMV, equipped with required lights, and driven by a licensed driver",
        "Golf carts may operate on any road in coastal communities without special registration or equipment requirements",
      ],
      correctIndex: 2,
      explanation:
        "South Carolina has detailed golf cart statutes (SC Code § 56-3-115) because golf cart use on public roads is common in coastal communities like Hilton Head, Myrtle Beach, Kiawah, and Pawleys Island. Legal requirements: golf carts may only drive on roads posted 35 mph or less; they must be registered with SCDMV; if operated between dusk and dawn, they must have headlights, taillights, and brake lights; they must display an SMV (slow-moving vehicle) emblem; and the operator must hold a valid SC driver's license. Golf carts cannot be driven on roads posted above 35 mph or on SC interstates. Crossing a road posted above 35 mph requires a designated crossing zone established by local ordinance.",
    },
    {
      question: "A South Carolina driver holds a Conditional License. What is the nighttime curfew for a school night?",
      options: [
        "No curfew on any night — South Carolina Conditional Licenses have no time restrictions",
        "No driving between midnight and 6AM, every night of the week",
        "No driving between 10PM and 6AM on school nights; midnight to 6AM on non-school nights — unless accompanied by a licensed adult",
        "No driving between 9PM and 6AM for the first 90 days, then midnight to 6AM thereafter",
      ],
      correctIndex: 2,
      explanation:
        "South Carolina's Conditional License (the intermediate stage in SC's GDL system) imposes a dual curfew: no driving between 10PM and 6AM on school nights, and midnight to 6AM on non-school nights. Exceptions apply for driving accompanied by a licensed adult 21 or older seated in the front passenger seat, or for documented work, school, or medical emergencies. The 10PM school night curfew is stricter than many states and is designed to align with school start times and sleep health recommendations. This dual-schedule curfew is a South Carolina-specific rule frequently tested on the SCDMV knowledge exam.",
    },
    {
      question: "South Carolina's implied consent law sets the penalty for a FIRST chemical test refusal at:",
      options: [
        "A $250 fine only — no license suspension for a first refusal",
        "A 30-day license suspension — the same as many other states",
        "A 6-month suspension of the driver's license, separate from any DUI conviction",
        "A 1-year suspension — South Carolina treats refusal as equivalent to a second DUI",
      ],
      correctIndex: 2,
      explanation:
        "South Carolina's implied consent law (SC Code § 56-5-2950) provides that drivers who refuse a chemical test face a 6-month suspension for a first refusal — longer than the typical 90-day period used by many states. A second or subsequent refusal: 9-month suspension. These suspensions run separately from any criminal DUI case. The refusal can also be used as evidence in the DUI trial. South Carolina's longer-than-average refusal suspension is designed to discourage drivers from thinking refusal is a way to avoid DUI consequences — the 6-month administrative suspension can be as or more damaging than the standard first-DUI suspension of 6 months.",
    },
    {
      question: "South Carolina's Hands-Free Act (Act R-134) took effect May 17, 2023. What does it permit for drivers?",
      options: [
        "Drivers may hold a phone to make a call as long as they are not texting",
        "Drivers may use a phone in any hands-free mode — including Bluetooth, speakerphone on a mounted device, or a hands-free earpiece",
        "Drivers may hold a phone only at red lights or stop signs",
        "The Act only applies to school and construction zones — regular road use is still permitted",
      ],
      correctIndex: 1,
      explanation:
        "South Carolina's Hands-Free Act (Act R-134, effective May 17, 2023) prohibits manual use of a wireless device while driving but explicitly permits hands-free operation. Allowed: Bluetooth earpieces and speakers, dashboard-mounted phones accessed by voice, built-in vehicle systems, and speakerphone on a mounted device where the driver doesn't need to hold the phone. Prohibited: holding the phone in any hand, typing, reading text messages, or watching video while driving. Primary enforcement applies. Fines: $100 first offense, $200 second, $300 third and subsequent. SC was one of the later southeastern states to pass a comprehensive hands-free law.",
    },
    {
      question: "In South Carolina, what is required of a driver who hits an unattended parked vehicle and cannot locate the owner?",
      options: [
        "The driver may leave the scene without obligation if the damage appears minor",
        "The driver must leave a written note with their name, address, and contact information on or in the parked vehicle, then notify local police",
        "The driver must call 911 and wait for police to arrive regardless of damage amount",
        "South Carolina only requires drivers to report to police if damage exceeds $1,000",
      ],
      correctIndex: 1,
      explanation:
        "South Carolina law (SC Code § 56-5-1230) requires a driver who strikes an unattended vehicle to: (1) immediately stop; (2) make a reasonable effort to find the owner; (3) if the owner cannot be found, leave a written note in a conspicuous place on the vehicle with the driver's name, address, and a statement of the circumstances; (4) notify local law enforcement or the county sheriff. This duty applies regardless of damage amount. Leaving the scene without leaving a note or notifying police is a misdemeanor in South Carolina. The note must provide enough information for the owner to contact the responsible driver.",
    },
    {
      question: "What is South Carolina's BAC threshold for drivers under 21 who are stopped for impaired driving?",
      options: [
        "0.08% — South Carolina uses a uniform adult standard regardless of age",
        "0.04% — South Carolina uses the CDL commercial threshold for underage drivers",
        "0.02% — South Carolina's underage DUI threshold is 0.02% BAC",
        "0.00% — any detectable alcohol is illegal for South Carolina drivers under 21",
      ],
      correctIndex: 2,
      explanation:
        "South Carolina's underage DUI threshold is 0.02% BAC for drivers under 21 (SC Code § 56-5-2933). A reading of 0.02% or higher triggers an underage DUI: 90-day license suspension, mandatory alcohol safety program, and possible additional conditions. If the BAC is 0.08% or higher, the driver is charged under the standard adult DUI statute — not the underage provision — and the full adult penalties apply. South Carolina's 0.02% standard is more permissive than some states (which use 0.00% zero tolerance) but still effectively prohibits any pre-driving alcohol consumption by underage drivers.",
    },
    {
      question: "South Carolina's Move Over Law classifies a violation as what type of offense?",
      options: [
        "A traffic infraction only — no criminal charge regardless of outcome",
        "A misdemeanor — with more serious charges if injury or death results from the violation",
        "A Class A felony if the stopped vehicle is an emergency responder",
        "An administrative violation that affects driver's license points but is not criminal",
      ],
      correctIndex: 1,
      explanation:
        "Violating South Carolina's Move Over Law (SC Code § 56-5-1538) is a misdemeanor — a criminal offense. Required action: move one lane away from stopped emergency, law enforcement, utility, or maintenance vehicles with activated lights when safely possible, OR reduce speed to 25 mph below the posted speed limit if a lane change is unsafe. A misdemeanor conviction carries up to 30 days jail and/or up to $500 fine for a first offense. If injury or death results from a Move Over violation, more serious criminal charges — up to felony reckless homicide — may apply. The criminal classification makes SC's Move Over law one of the stricter versions in the nation.",
    },
    {
      question: "South Carolina requires the Beginner's Permit holder to complete how many supervised driving hours before taking the road skills test?",
      options: [
        "10 hours — 5 daytime and 5 nighttime",
        "20 hours — all daytime, no specific nighttime requirement",
        "40 hours total, including at least 10 hours of nighttime driving",
        "50 hours — one of the highest supervised hour requirements in the Southeast",
      ],
      correctIndex: 2,
      explanation:
        "South Carolina's graduated licensing requires Beginner's Permit holders to complete 40 hours of supervised driving, of which at least 10 hours must be at night, before applying for a Conditional License. This requirement applies to drivers under 17; adult drivers (17+) applying for a first license have a different pathway. The 40 hours must be logged with a licensed adult supervisor (21+) present. SCDMV recommends keeping a written log of hours. South Carolina's requirement is in the mid-range nationally — some states require up to 60 hours, others 30. The nighttime driving requirement ensures new drivers develop skills in reduced-visibility conditions.",
    },
    {
      question: "Under South Carolina's seat belt law, who is required to wear a seat belt?",
      options: [
        "Only the driver — passengers are responsible for their own seatbelt use",
        "The driver and all front-seat passengers — rear-seat passengers are not required by law",
        "All front-seat occupants and all rear-seat passengers under age 18 — primary enforcement",
        "All occupants of any age — South Carolina requires seatbelts for every person in the vehicle",
      ],
      correctIndex: 2,
      explanation:
        "South Carolina's seat belt law (SC Code § 56-5-6520) requires all front-seat occupants to wear seat belts. All rear-seat passengers under 18 must also be buckled. Children under 8 must use an appropriate child safety seat. The law uses primary enforcement — law enforcement can stop a vehicle solely because an occupant is unbelted. Adults in the rear seat are not covered by the primary seat belt law, though many attorneys note they remain at substantial legal and physical risk if unbelted. South Carolina's law is a partial belt coverage law compared to states that require all rear-seat passengers of all ages to be belted.",
    },
  ],
  faqs: [
    {
      question: "What is South Carolina's Emma's Law and how does it compare to similar laws in other states?",
      answer:
        "Emma's Law (SC Code § 56-1-400, enacted 2014) was named for 6-year-old Emma Longstreet, killed by a repeat drunk driver. It mandated IID installation for: first-time DUI offenders whose BAC was 0.15% or higher, and all second+ DUI offenders regardless of BAC. The IID must be installed before driving privileges are restored. South Carolina was among the first states to expand mandatory IID requirements to first-time high-BAC offenders. The law has since been used as a model for similar legislation in other states. Emma's Law costs in SC: drivers pay for IID installation ($70–$150) and monthly monitoring fees ($60–$80) throughout the IID requirement period.",
    },
    {
      question: "Can anyone drive a golf cart on South Carolina roads, or does there need to be a license?",
      answer:
        "A valid South Carolina driver's license is required to operate a golf cart on public roads. Golf carts may only be operated on roads with posted speed limits of 35 mph or less. Requirements: SCDMV registration, proper safety equipment (lights if driven dusk to dawn, SMV emblem), and a licensed driver. Golf carts cannot travel on roads posted above 35 mph. Local municipalities (such as Hilton Head Island, Myrtle Beach, and Kiawah) may have additional local ordinances governing golf cart use, designated crossing zones at higher-speed roads, and operation hours. Check local ordinances in addition to state law.",
    },
    {
      question: "What are South Carolina's graduated licensing stages for new drivers?",
      answer:
        "South Carolina's three-stage GDL: (1) Beginner's Permit at 15 — supervised driving only, adult 21+ in front seat, 180-day minimum hold, 40 hours supervised (10 night); (2) Conditional License at 15½ — curfew 10PM–6AM school nights, midnight–6AM other nights, one non-family passenger under 21 during first 6 months; (3) Unrestricted License at 17 (with driver ed) or 18 (without). Note: drivers who complete a state-approved driver education course can progress faster. Without driver ed, full license eligibility is at 18.",
    },
    {
      question: "What is the penalty for a first DUI conviction in South Carolina?",
      answer:
        "First DUI in South Carolina (BAC 0.08%–0.09%): 48 hours to 30 days in jail (or 48 hours public service) OR $400 fine, 6-month license suspension, completion of ADSAP (Alcohol and Drug Safety Action Program). BAC 0.10%–0.15%: $500–$1,000 fine, 72 hours to 30 days jail. BAC 0.16%+: $1,000 fine, 30–90 days in jail, AND mandatory IID under Emma's Law. All first DUI convictions trigger ADSAP enrollment — the cost is borne by the offender. SCDMV will not reinstate the license until ADSAP is completed.",
    },
    {
      question: "Does South Carolina have a handheld device law for all drivers or just certain groups?",
      answer:
        "South Carolina's Hands-Free Act (Act R-134, effective May 17, 2023) applies to ALL drivers statewide. Primary enforcement: police can stop a driver solely for violation. Prohibited: holding or manually operating a wireless device while driving. Permitted: Bluetooth, hands-free speakerphone on a mounted device, voice commands, and in-vehicle integrated systems. Fines: $100 first offense, $200 second, $300 third+. Previously, South Carolina only prohibited texting while driving for all drivers and had stricter limits for drivers under 18. The 2023 Act represented a major expansion of the law.",
    },
    {
      question: "What are South Carolina's minimum auto insurance requirements?",
      answer:
        "South Carolina requires minimum liability coverage of 25/50/25: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage. South Carolina also requires uninsured motorist coverage equal to these minimums — coverage that many states make optional. If an uninsured driver hits you, your UM coverage applies. SC requires proof of insurance in the vehicle at all times. SCDMV participates in the Insurance Verification System. Uninsured drivers face fines and license suspension. SR-22 insurance certificates are required for license reinstatement after a DUI or certain other convictions.",
    },
    {
      question: "What does SCDMV require before issuing a full unrestricted license to a driver under 17?",
      answer:
        "A driver under 17 can receive a full unrestricted SC license only after completing an SCDMV-approved driver education course AND holding the Conditional License for the required period with no serious violations. Without driver education, the driver must wait until age 18 for full license eligibility. The driver education requirement includes both classroom instruction and behind-the-wheel training. Upon turning 17 and meeting all GDL requirements, the driver may apply for an unrestricted Class D license at any SCDMV office.",
    },
    {
      question: "What are South Carolina's rules for driving through flooded roads?",
      answer:
        "South Carolina does not have a statute identical to Missouri's explicit barricade law, but South Carolina drivers may not drive around or through any road closure established by law enforcement or SCDOT. More importantly, driving into floodwater is treated as reckless endangerment if it requires emergency response. South Carolina averages 40+ flood-related traffic incidents per year, particularly during hurricane season and after Lowcountry rains. SCDMV driver education emphasizes 'Turn Around, Don't Drown' — six inches of moving water can cause loss of vehicle control, and two feet of water can float most vehicles.",
    },
    {
      question: "How does South Carolina handle out-of-state DUI convictions for SC license holders?",
      answer:
        "South Carolina participates in the Driver License Compact (DLC). Out-of-state DUI convictions are reported to SCDMV and treated as equivalent to a South Carolina DUI — same suspension periods, same escalation thresholds (first/second/third offense counting), and same IID requirements under Emma's Law. An out-of-state DUI with a BAC ≥ 0.15% will trigger an Emma's Law IID requirement upon reinstatement even though the conviction occurred outside South Carolina.",
    },
    {
      question: "What is the ADSAP (Alcohol and Drug Safety Action Program) and is it required for all DUI convictions?",
      answer:
        "The Alcohol and Drug Safety Action Program (ADSAP) is a South Carolina state-mandated assessment and education/treatment program for DUI offenders. It is required for ALL first DUI convictions in South Carolina — without exception. ADSAP involves: an evaluation by a certified counselor; mandatory education sessions (length depends on assessment results); possible treatment referrals for ongoing substance issues. SCDMV will not reinstate a DUI-suspended license until the offender produces a certificate of ADSAP completion. Costs range from $500 to $2,500+ depending on the level of service required. ADSAP is available at certified locations throughout South Carolina.",
    },
  ],
  relatedTests: [
    { label: "SC Motorcycle Test", href: "/south-carolina-motorcycle-practice-test" },
    { label: "SC CDL Test", href: "/south-carolina-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function SouthCarolinaDMVPage() {
  return <PracticeTestPage {...data} />;
}
