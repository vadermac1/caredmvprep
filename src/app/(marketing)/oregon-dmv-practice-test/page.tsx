import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Oregon DMV Practice Test 2025 – Free OR ODOT Driver's License Exam Prep",
  description:
    "Free Oregon driver's license practice test based on the OR DMV Driver Manual. 35 questions, 80% passing. Oregon's Basic Speed Rule, studded tire season, cannabis DUI without a per se limit, and HB 2597 hands-free law — state-specific questions only.",
  alternates: { canonical: "https://caredmvprep.com/oregon-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/oregon-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Oregon",
  stateAbbr: "OR",
  testLabel: "Oregon DMV Knowledge Test",
  slug: "oregon-dmv-practice-test",
  headline: "Oregon Driver's License Practice Test 2025",
  intro:
    "Oregon's DMV — part of the Oregon Department of Transportation (ODOT) — administers the 35-question knowledge test requiring 80% (28/35) to pass. Oregon has several legally unique characteristics: the Basic Speed Rule (ORS 811.100) that allows citation below the posted speed limit, a cannabis DUI law with no per se THC limit (unlike Washington or Colorado), studded tire season restrictions, and HB 2597 (2017) — one of the first state laws to ban even holding a device while driving.",
  basedOn: "Oregon DMV Driver Manual (current ODOT edition)",
  keyRules: [
    { icon: "⚡", rule: "Basic Speed Rule: cited below posted limit", detail: "ORS 811.100: you may be cited for driving too fast for conditions even if below the posted limit. Speed must be 'reasonable and prudent' for actual road, weather, and traffic conditions." },
    { icon: "🌿", rule: "Cannabis DUI: no per se THC limit", detail: "Oregon's cannabis DUI uses an 'under the influence' standard — no specific THC ng/mL threshold. Impairment is assessed by officer field sobriety evaluation, not blood THC level." },
    { icon: "❄️", rule: "Studded tires: November 1 – March 31", detail: "Studded snow tires permitted November 1 through March 31. Mountain passes may require chains via ODOT chain control orders. Remove studs outside the permitted season." },
    { icon: "📱", rule: "Hands-free required since 2017 (HB 2597)", detail: "Oregon banned physically holding a wireless device while driving in 2017 — one of the earliest states. Any physical contact with a held device while moving is prohibited." },
    { icon: "🍺", rule: "DUII: 0.08% adults; 0.00% under-21", detail: "Oregon uses DUII (Driving Under the Influence of Intoxicants). 0.08% BAC for adults; 0.00% per se impairment for drivers under 21; 0.04% for CDL holders in a CMV." },
    { icon: "🚗", rule: "Instruction permit at 15, license at 16", detail: "Instruction permit at 15; must hold for at least 6 months, then complete 100 hours of supervised driving (or 50 hours plus an ODOT-approved traffic safety course), supervised only by a licensed driver 21+ with at least 3 years of driving experience, before applying for a license at 16." },
    { icon: "📋", rule: "Under-18 licensing is application-based, not a separate stage", detail: "Oregon's Driver Manual doesn't describe a distinct 'Provisional License' stage with its own curfew or passenger cap — the requirement is a one-time permit-hold-and-hours gate before the regular license is issued." },
    { icon: "🚨", rule: "Move Over: covers amber flashing vehicles too", detail: "Oregon's Move Over law (ORS 811.147) applies to emergency, utility, tow trucks, AND vehicles with amber flashing lights — broader than most state Move Over laws." },
  ],
  about: [
    "Oregon's Basic Speed Rule (ORS 811.100) is the most legally significant and frequently misunderstood driving law in the state. The rule states that a driver commits the offense of driving too fast for conditions if their speed is 'greater than is reasonable and prudent, having due regard for the traffic, surface, and width of the highway, the hazard at intersections, weather and visibility conditions.' The crucial implication: a driver can be cited for traveling too fast even while traveling below the posted speed limit. If you are driving at 55 mph on an ice-covered road posted at 55 mph and lose control, you may be cited for violating the Basic Speed Rule — because 55 mph was not reasonable and prudent for icy conditions. Oregon courts and law enforcement take this rule seriously, and it is a consistently tested topic on the Oregon DMV knowledge exam. Drivers must always assess actual conditions — not just check against the posted limit.",
    "Oregon legalized recreational cannabis in 2014, but Oregon's impaired driving law for cannabis is distinctly different from Washington and Colorado, which use specific THC blood concentration thresholds (5 ng/mL). Oregon has no per se THC limit. Instead, Oregon's cannabis DUI (ORS 813.010) uses an 'under the influence' standard — meaning that an officer's observation of impairment (field sobriety test performance, physical signs, driving behavior) determines impairment rather than a measured THC level. This matters because THC metabolites can remain in the bloodstream for days or weeks after the effects of cannabis wear off; a per se limit would criminalize sober drivers who simply consumed cannabis previously. Oregon instead relies on actual impairment evidence. Oregon's DUI threshold is 0.08% BAC for adults; drivers under 21 face a per se standard of 0.00% for alcohol (any detectable amount is a per se DUI). HB 2597 (2017) banned holding a wireless device while driving — earlier than most states.",
    "Oregon's studded tire rules are specific and seasonal. Studded snow tires are permitted from November 1 through March 31 throughout the state. ODOT may extend or adjust these dates in certain areas based on weather conditions. Studded tires improve traction on ice but cause accelerated pavement wear — which is why their use is restricted to the winter season. ODOT occasionally posts chain control requirements on mountain passes (Santiam, McKenzie, Crater Lake Highway) during severe winter events — chain control postings supersede personal judgment. Oregon's Cascades, Coast Range, and Blue Mountains all see significant winter weather requiring appropriate tire and chain preparation. Oregon DMV also tests drivers on appropriate use of headlights in rain and fog — Oregon's coastal regions experience some of the densest fog in the United States, and driving with headlights in fog (not high beams, which reflect off fog) is covered in the driver manual.",
  ],
  sampleQuestions: [
    {
      question: "Oregon's Basic Speed Rule (ORS 811.100) means a driver can be cited for driving too fast even if they are below the posted speed limit. Under what conditions does this rule apply?",
      options: [
        "Only when visibility is less than 100 feet — the Basic Speed Rule only applies in severe fog",
        "Only on unpaved county roads where posted limits may not reflect actual conditions",
        "Whenever a driver's speed is greater than 'reasonable and prudent' for the actual road, traffic, weather, and visibility conditions — regardless of the posted limit",
        "The Basic Speed Rule only applies to commercial vehicles over 26,000 lbs GVWR",
      ],
      correctIndex: 2,
      explanation:
        "Oregon's Basic Speed Rule (ORS 811.100) requires that all drivers travel at a speed that is 'reasonable and prudent' for the actual conditions of the road, traffic, weather, and visibility — regardless of the posted limit. This means: driving at the posted 55 mph on an icy mountain road can result in a citation if 55 mph is not safe for conditions. Driving at 35 mph in dense fog on a highway posted at 65 mph is the legally correct choice under Oregon law. The Basic Speed Rule is a genuine legal authority — not just a guideline. Oregon courts have upheld citations issued to drivers traveling below the posted limit when actual conditions required a lower speed.",
    },
    {
      question: "Oregon's cannabis DUI law differs from Washington and Colorado in which critical way?",
      options: [
        "Oregon permits cannabis use while driving in designated areas — Washington and Colorado do not",
        "Oregon sets a 2 ng/mL THC blood limit — stricter than Washington's 5 ng/mL and Colorado's 5 ng/mL",
        "Oregon has NO per se THC limit — cannabis impairment is evaluated using field sobriety tests and officer observation, not blood THC concentration",
        "Oregon only prosecutes cannabis DUI if the driver is also over the 0.08% alcohol BAC limit",
      ],
      correctIndex: 2,
      explanation:
        "Oregon's cannabis DUI law (ORS 813.010) uses an 'under the influence' standard without a specific THC blood concentration threshold. Washington and Colorado use a per se limit (5 ng/mL THC in blood). Oregon opted not to set a per se THC limit because THC metabolites remain in the bloodstream for days or weeks after impairment has fully resolved — a per se limit would result in sober drivers with residual THC being convicted of DUI. Instead, Oregon law enforcement evaluates actual impairment: field sobriety tests, physical indicators, driving behavior, and in some cases Drug Recognition Expert (DRE) evaluation. This makes Oregon's cannabis DUI law more subjective but arguably more aligned with actual impairment.",
    },
    {
      question: "Oregon's studded tire rules allow use from November 1 through March 31. What happens if a driver uses studded tires outside this period?",
      options: [
        "No consequence — studded tires are permitted year-round in Oregon, with no seasonal restriction",
        "A warning on the first offense — studded tire restrictions are not actively enforced in Oregon",
        "A traffic infraction — using studded tires outside the permitted season (November 1–March 31) is a violation in Oregon",
        "Studded tires are prohibited entirely in Oregon — tire chains are the only winter traction device permitted",
      ],
      correctIndex: 2,
      explanation:
        "Using studded tires outside Oregon's permitted season (November 1 – March 31) is a traffic infraction under ORS 815.215. Studded tires cause significant pavement wear — the reason for the seasonal restriction is protecting road surfaces, not just weather appropriateness. ODOT may extend the season by proclamation in severe weather years. In the portion of Oregon east of the Cascades, the dates may differ — check ODOT's current proclamation each year. Tire chains are separate from studs and have no year-round ban — they may be required by ODOT chain control postings on mountain passes regardless of whether studs are in season.",
    },
    {
      question: "Oregon's HB 2597 (2017) made Oregon one of the first states to ban what driving behavior?",
      options: [
        "Using any GPS navigation device while driving — Oregon was the first state to ban GPS use entirely",
        "Physically holding a wireless device while driving — even just holding the phone without using it",
        "Talking on the phone through a hands-free earpiece while driving",
        "Texting only — Oregon's 2017 law focused exclusively on text messaging prohibition",
      ],
      correctIndex: 1,
      explanation:
        "Oregon's HB 2597 (effective October 1, 2017) was among the earliest state laws to prohibit physically holding a wireless device while driving — regardless of what the driver is doing with the device. Just holding the phone (even without looking at it or pressing anything) is a violation. This went further than texting bans, which prohibited a specific activity, by making physical possession of a held device illegal while driving. Hands-free Bluetooth, mounted devices, and voice commands are all permitted. Oregon's 2017 law was stricter than most states' laws at that time and remains one of the clearest examples of a 'hold prohibition' rather than just an 'activity prohibition.'",
    },
    {
      question: "Oregon's DUI law applies what BAC standard to drivers who are under 21?",
      options: [
        "0.02% — same as many states that use a near-zero standard for underage drivers",
        "0.04% — Oregon uses the CDL commercial vehicle standard for underage drivers",
        "0.00% — Oregon uses a per se zero tolerance for drivers under 21; any detectable alcohol is a DUI",
        "0.08% — Oregon uses a uniform adult standard regardless of age",
      ],
      correctIndex: 2,
      explanation:
        "Oregon's DUI law for drivers under 21 is a true zero tolerance standard (ORS 813.100): any detectable alcohol in the blood, breath, or urine of a driver under 21 constitutes a per se DUI. There is no minimum threshold — 0.01% triggers the violation. This differs from states like Indiana (0.02%) or California (0.01% is technically a lower measurable amount). Oregon's zero-tolerance approach for under-21 drivers contrasts with its cannabis DUI approach (no per se THC limit) — the distinction is that alcohol testing is objective and standardized, while THC testing for impairment remains scientifically contested for a per se standard.",
    },
    {
      question: "Oregon's Move Over law (ORS 811.147) is broader than most states because it covers which additional category of vehicles beyond emergency responders?",
      options: [
        "Only standard emergency vehicles (police, fire, ambulance) — Oregon's law is not broader than other states",
        "Emergency vehicles AND mail carriers when delivering mail — Oregon's unique mail delivery extension",
        "Emergency vehicles, utility service vehicles, tow trucks, AND any vehicle displaying flashing amber lights stopped on the roadside",
        "Any vehicle stopped on the highway shoulder — Oregon requires moving over for ALL stopped vehicles",
      ],
      correctIndex: 2,
      explanation:
        "Oregon's Move Over law (ORS 811.147) requires drivers to move over or reduce speed for: law enforcement vehicles, fire engines, ambulances, hazmat responders, tow trucks, and any vehicle displaying flashing amber lights that is stopped on the roadside — including utility service vehicles, highway maintenance vehicles, and any other vehicle using amber warning lights. The amber light extension is broader than many states, which limit Move Over requirements to blue/red emergency lights and yellow/white tow truck lights. In Oregon, a utility truck with amber flashers performing road maintenance is afforded the same Move Over protection as a police car. This broader scope is directly tested on the Oregon DMV knowledge exam.",
    },
    {
      question: "When driving in Oregon's coastal fog zones, which headlight setting should drivers use?",
      options: [
        "High beams — maximum visibility requires maximum light output in fog",
        "No headlights — fog reduces the value of headlights and other drivers can see your vehicle without them",
        "Low beams only — high beams reflect off fog particles and reduce visibility; low beams project below the fog layer",
        "Fog lights only — all other lights should be turned off when fog lights are in use",
      ],
      correctIndex: 2,
      explanation:
        "Oregon's coast is among the foggiest in the nation, and Oregon DMV addresses fog driving explicitly. In fog, low beams should be used — NOT high beams. High beam light projects upward into the fog, reflects off water droplets, and creates a 'wall of white' that reduces visibility significantly. Low beams project downward and illuminate the road surface without the same fog reflection. If the vehicle has separate fog lights, those are designed specifically for low-visibility conditions. Oregon law requires headlights when visibility is reduced below 1,000 feet (ORS 811.515) — which means Oregon's headlight requirement kicks in earlier than many states' 500-foot threshold.",
    },
    {
      question: "Oregon's chain control requirement on mountain passes: what must drivers do when ODOT posts a 'Chains Required' order?",
      options: [
        "Chains Required is advisory — drivers may continue without chains if they have all-wheel drive",
        "All vehicles except those with 4WD or AWD must install chains — passenger vehicles are generally exempt",
        "All vehicles without adequate snow traction must have tire chains installed and must stop if chain control is active and they lack chains",
        "Only commercial vehicles must comply with chain control — passenger vehicles may proceed at their discretion",
      ],
      correctIndex: 2,
      explanation:
        "When Oregon ODOT posts a 'Chains Required' order on a mountain pass, all vehicles without adequate traction (deep-tread snow tires or AWD/4WD with M+S rated tires) must have tire chains installed before proceeding. Passenger vehicles are not exempt — if your vehicle lacks the required traction, chains are mandatory. Oregon's chain stations operate on highway approaches to the major Cascades passes (Santiam Pass on US 20, McKenzie Pass, Crater Lake Highway). A driver who proceeds past a 'Chains Required' sign without chains can be stopped and turned back by law enforcement or the Oregon National Guard. Studded tires do not satisfy chain control requirements.",
    },
    {
      question: "An Oregon instruction permit holder under 18 wants to apply for a license at 16. What must they show before DMV will issue it?",
      options: [
        "Nothing beyond passing the knowledge and road tests — Oregon has no separate supervised-hours requirement",
        "Held the permit at least 6 months AND completed 100 hours of supervised driving (or 50 hours plus an ODOT-approved traffic safety course), supervised by someone 21+ with at least 3 years of driving experience",
        "Held the permit at least 12 months with no supervised-hours requirement at all",
        "Completed a mandatory driver's education class — supervised driving hours are optional in Oregon",
      ],
      correctIndex: 1,
      explanation:
        "Oregon requires an under-18 first-time applicant to have held an instruction permit for at least 6 months and to have completed 100 hours of supervised driving experience — or 50 hours plus an ODOT-approved traffic safety education course (with proof of completion) — before applying for a license. The supervising driver must be at least 21 years old and must have held valid driving privileges for at least 3 years; a parent or general adult doesn't automatically qualify if they don't meet the experience requirement. This is a real gate on issuance, not a recommendation.",
    },
    {
      question: "In Oregon, what is the required minimum following distance when driving on highways posted above 45 mph?",
      options: [
        "1 second per 10 mph of speed",
        "At least 1 car length for every 10 mph of speed (a 60 mph driver needs 6 car lengths)",
        "The 3-second rule — at least 3 seconds of following distance at all highway speeds",
        "Oregon has no specific following distance law — 'reasonable distance' based on conditions applies",
      ],
      correctIndex: 2,
      explanation:
        "Oregon DMV recommends the 3-second rule for following distance: at highway speeds, allow at least 3 seconds of distance between your vehicle and the vehicle ahead. To measure: when the vehicle ahead passes a fixed point, count '1-Mississippi, 2-Mississippi, 3-Mississippi' — your vehicle should not reach that point until you reach 3. In bad weather, increase to 4–6 seconds. Oregon law (ORS 811.485) prohibits following too closely, defined as following at a distance not 'reasonable and prudent' for speed and conditions. The 3-second rule gives you approximately 264 feet of following distance at 60 mph — sufficient for average braking in dry conditions.",
    },
  ],
  faqs: [
    {
      question: "What makes Oregon's Basic Speed Rule different from just following posted speed limits?",
      answer:
        "Oregon's Basic Speed Rule (ORS 811.100) creates a legal standard that goes beyond the posted limit: you must drive at a speed that is 'reasonable and prudent' for actual road and weather conditions — even if that means driving below the posted limit. A driver going 65 mph on an ice-covered road can be cited for the Basic Speed Rule even if 65 mph is the posted limit. Conversely, driving at 50 mph in dense fog on a 65 mph highway is the legally correct choice. The Basic Speed Rule means Oregon law holds drivers accountable for judgment, not just rule-following.",
    },
    {
      question: "Oregon legalized cannabis — does that make it legal to drive with cannabis in the car?",
      answer:
        "Oregon permits adults 21+ to possess and transport cannabis in a vehicle, but it must be in a sealed, child-resistant container if the packaging has been opened. Open cannabis containers visible to passengers are not permitted while driving. And most critically: driving while impaired by cannabis is a DUI — regardless of legal purchase or use. Oregon's DUI law has no per se THC limit, but impairment is assessed by officer observation and DRE (Drug Recognition Expert) evaluation. Cannabis DUI carries the same penalties as alcohol DUI in Oregon.",
    },
    {
      question: "What are Oregon's studded tire rules and how do they differ from chains?",
      answer:
        "Studded snow tires are permitted in Oregon from November 1 through March 31. Using them outside this season is a traffic infraction. Chains are separate — they may be required by ODOT chain control postings on mountain passes at any point during winter and are not subject to the studded tire seasonal restriction. During chain control, studded tires do NOT satisfy the chain requirement. Many Oregon mountain drivers carry chains in the trunk from October through April even if they're using studs, because ODOT can post chain control requirements that mandate chains specifically.",
    },
    {
      question: "What does Oregon actually require for drivers under 18 to get licensed?",
      answer:
        "Oregon's Driver Manual describes a permit-and-hours requirement rather than a multi-stage program with its own curfew or passenger limits. To apply for a license, an applicant must be at least 16, must have held an instruction permit (available at 15) for at least 6 months, and must complete 100 hours of supervised driving experience — or 50 hours plus an ODOT-approved traffic safety education course, with proof of completion. The supervising driver must be at least 21 years old and must have held valid driving privileges for at least 3 years. There is no separate nighttime curfew or passenger-count restriction documented for young Oregon drivers once licensed.",
    },
    {
      question: "What is Oregon's DUI penalty for a first offense?",
      answer:
        "Oregon first DUI: Class A misdemeanor (if BAC is between 0.08% and 0.14%): minimum 48 hours in jail (or 80 hours community service), $1,000 fine, 1-year license suspension. If BAC is 0.15% or higher ('aggravated DUI'): minimum 48 hours jail (less reduction for community service), $2,000 minimum fine, same 1-year suspension. Ignition interlock device: required for reinstatement after any DUI in Oregon. Oregon uses 'DUII' (Driving Under the Influence of Intoxicants) as the official term — covering alcohol, controlled substances, and cannabis under one charge category.",
    },
    {
      question: "What does Oregon law require at railroad crossings?",
      answer:
        "Oregon requires drivers to stop when flashing red lights are activated, a train is visible or close enough to be hazardous, a stop sign is posted at the crossing (even with no visible train), or a flagger signals to stop. Stop at the stop line if there is one; otherwise stop at least 15 feet from the nearest rail. Never stop on the tracks, and never drive around or under a crossing gate while it's down, or while it's being raised or lowered. School buses, hazmat vehicles, and some school activity vehicles are required to stop at railroad tracks regardless of signals — be ready to stop behind one.",
    },
    {
      question: "Does Oregon require a road skills test for all new drivers?",
      answer:
        "Oregon requires a road skills (driving) test for all new applicants — including adults who have never held a license in any state. The road test must be taken in the applicant's own or a borrowed vehicle, which must be properly registered and insured. Oregon DMV schedules road tests by appointment at driver licensing offices. The test evaluates vehicle control, lane use, intersection navigation, parking (parallel park in some offices), and observance of traffic signs and signals. Adult applicants who transfer a valid out-of-state license may be exempt from the Oregon road test; adults from countries without driver license reciprocity must take the full road test.",
    },
    {
      question: "What are Oregon's minimum auto insurance requirements?",
      answer:
        "Oregon requires minimum liability coverage of 25/50/20: $25,000 bodily injury per person, $50,000 per accident, and $20,000 property damage. Oregon also requires Personal Injury Protection (PIP) of at least $15,000 per person and uninsured motorist coverage of at least 25/50. Oregon's mandatory uninsured motorist coverage protects you if you're hit by an uninsured driver. PIP covers your medical expenses regardless of fault. Proof of insurance must be carried in the vehicle. Oregon DMV participates in electronic insurance verification — insurance companies report coverage directly to Oregon DMV.",
    },
    {
      question: "What is Oregon's policy for drivers with medical conditions that may affect safe driving?",
      answer:
        "Oregon DMV has a Medical Advisory Board that reviews license applications and renewals from drivers with medical conditions that may impair safe driving — including seizure disorders, certain cardiac conditions, vision impairments, and cognitive conditions. A driver or their physician may report a potentially impairing medical condition to Oregon DMV. The DMV may require medical clearance (physician certification of safe driving ability) before issuing or renewing a license. Oregon also accepts reports from law enforcement and courts about medical fitness to drive. Drivers who disagree with a medical restriction or suspension decision may request a hearing.",
    },
    {
      question: "How does Oregon's Open Container law work?",
      answer:
        "Oregon prohibits open alcoholic beverage containers in the passenger area of a motor vehicle while on a public road (ORS 811.170). Unlike Louisiana, Oregon's prohibition applies to both driver and passengers — no one in the passenger compartment may have an open container. 'Open' means the container has been opened (seal broken) or a portion has been consumed. Closed, sealed containers may be transported. Wine from a restaurant may be transported if the bottle is resealed with the original cork, placed in a bag, and kept out of the driver's reach. Violations are Class B traffic infractions.",
    },
  ],
  relatedTests: [
    { label: "OR Motorcycle Test", href: "/oregon-motorcycle-practice-test" },
    { label: "OR CDL Test", href: "/oregon-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OregonDMVPage() {
  return <PracticeTestPage {...data} />;
}
