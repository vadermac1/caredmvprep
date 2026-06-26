import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Kentucky DMV Practice Test 2025 – Free KY Driver's License Exam Prep | Road Signs & Traffic Laws",
  description:
    "Free Kentucky driver's license practice test based on the KY TC Driver Manual. 40 questions in two sections (road signs + traffic laws) — must pass each section at 80%. Horse-drawn vehicle laws, Brent's Law DUI provisions, and SB 332 hands-free rules.",
  alternates: { canonical: "https://caredmvprep.com/kentucky-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/kentucky-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Kentucky",
  stateAbbr: "KY",
  testLabel: "Driver Knowledge Test",
  slug: "kentucky-dmv-practice-test",
  headline: "Kentucky Driver's License Practice Test 2025",
  intro:
    "Kentucky's driver knowledge test is administered by the Kentucky Transportation Cabinet (KYTC) / Division of Driver Licensing. The test has 40 questions split into two independent sections — 20 road sign questions and 20 traffic law questions — and you must score at least 80% (16/20) on EACH section separately. Kentucky also has unique laws for horse-drawn vehicles and Amish community traffic, and 'Brent's Law' (2020) — enhanced DUI penalties when a child is in the vehicle.",
  passingScore: "80% on EACH section (16/20 road signs AND 16/20 traffic laws)",
  basedOn: "Kentucky Transportation Cabinet Driver Manual (current KRS edition)",
  keyRules: [
    { icon: "📝", rule: "Two-section test: 80% on EACH section", detail: "40 questions split into two independent sections (20 road signs + 20 traffic laws). Must score 80% (16/20) on EACH section independently — passing one does not offset a failing score on the other." },
    { icon: "🐴", rule: "Horse-drawn vehicles need lights after dark", detail: "KRS 189.050 requires horse-drawn vehicles and riders on horseback to display lights or reflective material after dark. Kentucky's Amish community roads are specifically tested." },
    { icon: "👶", rule: "Brent's Law: DUI + child under 12 = felony", detail: "Brent's Law (HB 452, 2020): DUI with a passenger under 12 in the vehicle elevates the charge to a minimum Class D felony (1–5 years) and requires an IID upon license reinstatement." },
    { icon: "📱", rule: "Hands-free required (SB 332, July 2022)", detail: "Effective July 8, 2022 — all drivers banned from holding a wireless device while operating a vehicle. Hands-free Bluetooth and single-button earpieces are permitted." },
    { icon: "🍺", rule: "DUI: 0.08% adults; 0.02% under-21", detail: "0.08% for adults; 0.02% for drivers under 21; 0.04% for CDL holders in a CMV. Kentucky is a no-fault insurance state — CDL commercial insurance follows federal FMCSA standards." },
    { icon: "🧪", rule: "Implied consent: 90-day refusal suspension", detail: "Chemical test refusal = 90-day suspension (first refusal); prior refusals within 5 years = 12-month suspension. Suspension is in addition to any criminal DUI charges." },
    { icon: "🚗", rule: "Instruction permit at 16 (60 supervised hours)", detail: "Instruction permit at 16; must hold for 180 days and complete at least 60 hours supervised driving (10 at night) before an Intermediate License can be issued." },
    { icon: "🌙", rule: "Intermediate: midnight–6AM curfew", detail: "Under 18: no driving midnight–6AM unless accompanied by adult 21+; maximum 1 non-family passenger under 20 for the first 6 months of the Intermediate License." },
  ],
  about: [
    "Kentucky's knowledge test is split into two independently scored sections: 20 road sign questions and 20 traffic law questions. You must answer at least 16 questions correctly in EACH section — a high score on one section does not compensate for a low score on the other. If you fail one section but pass the other, you will need to retake only the failed section at the next attempt (within the same testing visit). This two-section structure is shared by Virginia and New Jersey and is more demanding than a single-pool test because it requires balanced competence in both sign recognition and legal knowledge. The Division of Driver Licensing (part of the Kentucky Transportation Cabinet, or KYTC) administers tests at driver licensing regional offices statewide. Tests are available on computer at most locations. The permit application fee and knowledge test fee are paid at the time of application.",
    "Kentucky is the thoroughbred horse capital of the world, and this reality is reflected in its traffic laws. Kentucky Revised Statutes (KRS 189.050) specifically address horse-drawn vehicles, riders on horseback, and the movement of livestock and farm animals on public roads. After dark, horse-drawn vehicles must display a white or amber light visible from the front and a red light or reflective material visible from the rear. Riders on horseback at night must similarly use reflective gear or lights. These rules are particularly relevant in central Kentucky (the Bluegrass region) and in rural communities where Amish residents use horse-drawn buggies as primary transportation. Kentucky's Amish population is among the largest in the United States, concentrated in northern and south-central Kentucky, and horse-drawn buggies on county roads are a genuine traffic hazard that the knowledge test directly addresses. Drivers must slow, signal, and give wide berth to horse-drawn vehicles — horses can be startled by vehicles even when not at close range.",
    "Kentucky's 'Brent's Law' (HB 452, 2020) was named for Brent Souder, a 9-year-old killed by a drunk driver. The law elevated DUI penalties when a passenger under 12 years old is in the vehicle: what would otherwise be a DUI misdemeanor becomes a minimum Class D felony, carrying 1–5 years in prison. Upon reinstatement, an ignition interlock device (IID) is mandatory. Kentucky SB 332 (hands-free law, effective July 8, 2022) prohibits all drivers from holding a wireless device while driving. Prior to this law, Kentucky had a texting ban for drivers under 18 but no general adult handheld ban. The full adult hands-free law was a significant change. Kentucky DUI law (KRS Chapter 189A) sets the standard at 0.08% for adults, 0.02% for drivers under 21, and 0.04% for CDL holders in a commercial vehicle. Implied consent refusal carries a 90-day administrative suspension for a first refusal.",
  ],
  sampleQuestions: [
    {
      question: "Kentucky's knowledge test is divided into two independent sections. What is the passing requirement for each section?",
      options: [
        "You need a combined score of 80% across all 40 questions — section scores don't matter individually",
        "You must score at least 75% on each section — road signs and traffic laws are scored separately",
        "You must score at least 80% (16 out of 20) on EACH section independently — failing one section requires retaking only that section",
        "You must answer all 20 road sign questions correctly; traffic laws require only 70%",
      ],
      correctIndex: 2,
      explanation:
        "Kentucky's knowledge test has two independently scored sections: 20 road sign questions and 20 traffic law questions. You must answer at least 16 correctly (80%) in EACH section. A perfect score on the traffic law section cannot compensate for failing the road sign section — both must meet the 80% minimum. If you pass one section but fail the other in the same testing session, Kentucky typically allows you to retake only the failed section at the next attempt. This structure requires broad competence in both sign recognition and legal knowledge — study both thoroughly before testing.",
    },
    {
      question: "Under Kentucky law (KRS 189.050), what must a horse-drawn buggy display when traveling on a public road after dark?",
      options: [
        "No specific requirement — horse-drawn vehicles are exempt from Kentucky's lighting laws",
        "Only a slow-moving vehicle (SMV) emblem — no lights are required",
        "A white or amber light visible from the front and a red light or reflective material visible from the rear",
        "Two amber flashing lights on both sides and a 'CAUTION: SLOW VEHICLE' sign on the rear",
      ],
      correctIndex: 2,
      explanation:
        "KRS 189.050 requires horse-drawn vehicles traveling on public roads after dark to display: a white or amber light visible from the front, and a red light or red reflective material visible from the rear. This requirement is enforced statewide and is especially relevant in Kentucky's significant Amish communities — northern Kentucky, Breckinridge County, and the western Pennyrile region all have large horse-and-buggy-using Amish populations. During daylight, a slow-moving vehicle (SMV) emblem must be displayed on the rear of the horse-drawn vehicle. Kentucky drivers approaching horse-drawn vehicles must slow down, pass with extra clearance, and avoid loud noises that could startle the animal.",
    },
    {
      question: "What did Kentucky's 'Brent's Law' (2020) change about DUI charges?",
      options: [
        "It eliminated the 90-day license suspension for first-offense DUI and replaced it with a 180-day suspension",
        "It required all DUI offenders to complete 200 hours of community service regardless of BAC",
        "A DUI with a passenger under 12 years old in the vehicle is elevated to a minimum Class D felony, with mandatory IID upon reinstatement",
        "It created a new 'DUI endangering a minor' charge that runs concurrent with DUI as an add-on misdemeanor",
      ],
      correctIndex: 2,
      explanation:
        "Brent's Law (HB 452, signed 2020) was enacted after 9-year-old Brent Souder was killed in a DUI crash. The law dramatically increased penalties for DUI when a child under 12 is a passenger: what would otherwise be a DUI misdemeanor (first offense) becomes a minimum Class D felony — carrying 1–5 years in the state penitentiary. Upon completion of the sentence and reinstatement, an ignition interlock device (IID) is mandatory. Kentucky's Brent's Law was championed by Brent's family and is now cited as one of the strongest child-passenger DUI laws in the nation.",
    },
    {
      question: "Kentucky's SB 332 hands-free law took effect July 8, 2022. What change did it represent from prior Kentucky law?",
      options: [
        "Prior law banned all phone use while driving — SB 332 loosened the law to allow hands-free calls",
        "Prior law prohibited only texting for drivers under 18; SB 332 extended the handheld device ban to ALL drivers regardless of age",
        "Prior law had no restrictions on phone use — SB 332 was Kentucky's first phone/device law of any kind",
        "SB 332 only applies to school and construction zones — general highway phone use is still unrestricted",
      ],
      correctIndex: 1,
      explanation:
        "Before SB 332, Kentucky prohibited texting while driving for all drivers (primary enforcement) and banned all phone use for drivers under 18. Adult drivers could legally hold a phone for a call. SB 332 (effective July 8, 2022) extended the handheld ban to ALL drivers — no driver may hold or manually operate a wireless device while driving, regardless of age. Hands-free Bluetooth, speakerphone on a mounted device, and voice commands are permitted. SB 332 primary enforcement: police may stop a driver solely for a hands-free violation. Fines: $25 for a first offense, escalating with subsequent violations.",
    },
    {
      question: "A Kentucky driver encounters an Amish horse and buggy on a two-lane rural road. What should the driver do?",
      options: [
        "Flash headlights to signal the buggy to pull over, then pass quickly at normal speed",
        "Honk to alert the horse before passing — horses need audio warning to avoid being startled",
        "Slow down, avoid sudden noises (honking), and give extra lateral clearance before passing — horses can be startled even by vehicles that don't seem close",
        "Maintain normal speed and distance — horse-drawn vehicles must yield to motor vehicle traffic under Kentucky law",
      ],
      correctIndex: 2,
      explanation:
        "Kentucky's Amish communities are among the largest in the United States, making horse-buggy traffic a regular road-sharing reality. When approaching a horse-drawn vehicle, Kentucky DMV guidance instructs drivers to: reduce speed significantly; approach slowly and without sudden acceleration; avoid honking — horses can be startled by horn sounds even at a distance; give extra lateral space (a full lane width if possible) when passing; watch for the horse to react unexpectedly. Kentucky drivers must also be aware that on narrow roads, buggies may not be able to pull fully off the road surface. The knowledge test covers appropriate driver behavior around horse-drawn vehicles.",
    },
    {
      question: "What is Kentucky's DUI consequence for a first offense where the driver's BAC is measured at 0.18%?",
      options: [
        "Standard first DUI: 48 hours to 30 days in jail, $200–$500 fine — BAC above 0.08% has a single tier in Kentucky",
        "Aggravated DUI: 4 days mandatory jail (not just 48 hours), higher mandatory fines, and the BAC enters the enhancement tier for sentencing",
        "Felony DUI: any BAC above 0.15% on a first offense is a felony in Kentucky",
        "First offense at 0.18% is treated identically to 0.08% — enhancements only kick in on a second offense",
      ],
      correctIndex: 1,
      explanation:
        "Kentucky DUI law (KRS Chapter 189A) includes aggravating circumstances that increase mandatory minimum penalties. A BAC of 0.15% or higher is an aggravating factor: on a first DUI, the mandatory minimum jail time increases from 48 hours to 4 days (96 hours). Other aggravating factors include: excessive speeding (30 mph over limit), wrong-way driving on a limited-access highway, causing an accident with injury, and having a passenger under 12 (Brent's Law). When aggravating circumstances are present, the fine range and mandatory alcohol treatment conditions also increase. A first DUI without aggravating factors: 48 hours to 30 days jail, $200–$500 fine, 90-day license suspension.",
    },
    {
      question: "Kentucky's implied consent law: what is the suspension for a first refusal to submit to chemical testing?",
      options: [
        "30 days — the same period as a minor traffic suspension in Kentucky",
        "60 days — a moderate refusal penalty designed to deter refusal without being too punitive",
        "90 days — a first-refusal administrative suspension separate from any DUI criminal case",
        "180 days — Kentucky has one of the longer first-refusal suspension periods nationally",
      ],
      correctIndex: 2,
      explanation:
        "Kentucky's implied consent law (KRS 189A.103) provides that a driver who refuses a chemical test after a lawful DUI arrest faces a 90-day administrative license suspension for a first refusal. A prior refusal within 5 years results in a 12-month suspension. The administrative suspension runs separately from any criminal DUI case — even if the DUI charges are dismissed, the refusal suspension remains. Kentucky courts allow the prosecution to present the refusal as evidence in a DUI trial. The 90-day refusal suspension is the same length as the typical first-DUI conviction suspension in Kentucky, so drivers who think refusal is strategically advantageous are often mistaken.",
    },
    {
      question: "Kentucky's instruction permit for new drivers requires a minimum 180-day hold before the Intermediate License. How many supervised driving hours are required?",
      options: [
        "20 hours — 10 daytime, 10 nighttime",
        "30 hours — Kentucky's requirement is below the national average",
        "60 hours total, including at least 10 hours at night",
        "80 hours — Kentucky is among the states with the highest supervised hours requirement",
      ],
      correctIndex: 2,
      explanation:
        "Kentucky's graduated licensing requires permit holders to complete at least 60 supervised driving hours, including a minimum of 10 hours driven at night, before applying for the Intermediate License. The 60-hour total is among the higher requirements nationally — many states require 40–50 hours. Kentucky's high supervised-hour requirement reflects research showing that new drivers with more practice experience have significantly lower crash rates in the first years of independent driving. The hours should be logged in a Driver Log documenting date, location, conditions, and time. The Division of Driver Licensing recommends practicing in a variety of conditions: rain, night, highway, and heavy traffic.",
    },
    {
      question: "In Kentucky, what is the maximum speed limit on rural two-lane state highways when no sign is posted?",
      options: [
        "45 mph — Kentucky's conservative rural default for two-lane roads",
        "55 mph — Kentucky's default rural highway speed limit",
        "65 mph — Kentucky matches higher-speed western states on rural two-lanes",
        "60 mph — Kentucky splits the difference between 55 and 65 mph defaults",
      ],
      correctIndex: 1,
      explanation:
        "Kentucky's default speed limit on rural two-lane state highways when no speed limit sign is posted is 55 mph. Rural interstates are typically posted at 65 mph. Urban areas and residential streets have lower defaults — 35 mph for most urban arterials. Kentucky's basic speed rule (KRS 189.390) also requires driving at a reasonable and prudent speed for actual road and weather conditions, regardless of posted limits. Kentucky's terrain varies significantly — the Appalachian region in eastern Kentucky has winding mountain roads where 55 mph would be unsafe even if posted, and the law requires speed appropriate to actual conditions.",
    },
    {
      question: "Kentucky law requires which vehicle equipment to be used when making a turn?",
      options: [
        "Only hand signals — turn signals are not required by Kentucky law on non-controlled roads",
        "Turn signals must be activated at least 100 feet before beginning the turn",
        "Turn signals must be activated at least 200 feet before beginning the turn — stricter than most states",
        "Turn signals are required only at intersections with traffic control signals, not at stop signs",
      ],
      correctIndex: 1,
      explanation:
        "Kentucky law (KRS 189.380) requires turn signals to be activated at least 100 feet before beginning a turn — the standard shared by most U.S. states. In Kentucky cities where the speed limit is 50 mph or less, 100 feet is the minimum signaling distance. On higher-speed roads (above 50 mph), additional advance signaling is recommended for safety. Signaling must begin BEFORE the actual turn, not during. Turning without signaling or signaling at the last second violates KRS 189.380 and is a moving violation. The 100-foot rule is one of the few signal questions that has a consistent state-specific numeric answer — and while it appears similar across many states, the Kentucky KRS chapter and value are directly testable.",
    },
  ],
  faqs: [
    {
      question: "Why does Kentucky's knowledge test have two separate sections, and what happens if I fail one?",
      answer:
        "Kentucky's two-section structure (20 road signs + 20 traffic laws) ensures drivers demonstrate competency in both sign recognition and legal knowledge independently. A driver who knows all traffic laws but can't identify signs is genuinely unsafe — and vice versa. If you fail one section but pass the other, the Division of Driver Licensing typically records the passing section and requires you to retake only the failed section. However, policies on same-day retesting and scheduling the partial retest vary by office. Ask the examiner specifically about next steps when you receive your results. Both sections must be passed within the same application cycle.",
    },
    {
      question: "What does Kentucky law require for horse-drawn vehicles on public roads?",
      answer:
        "KRS 189.050 requires horse-drawn vehicles traveling on public roads: (1) during daylight — must display a slow-moving vehicle (SMV) emblem (the orange-red reflective triangle) on the rear; (2) after dark — must display a white or amber light visible from the front AND a red light or red reflective material visible from the rear. Riders on horseback after dark must wear or carry reflective gear or lights. These rules apply throughout Kentucky but are especially relevant in Amish-concentrated counties (Ohio, Breckinridge, Logan, Grayson, etc.). Drivers must slow, give space, and never honk at horse-drawn vehicles — horses can panic and cause fatal accidents.",
    },
    {
      question: "What exactly is Kentucky's 'Brent's Law' and does it apply to first-time DUI offenders?",
      answer:
        "Brent's Law (HB 452, enacted 2020) applies to ALL DUI offenses where a passenger under 12 is in the vehicle — including first-time offenders. Without a child passenger, a first DUI is a misdemeanor. With a passenger under 12, it becomes a minimum Class D felony (1–5 years imprisonment). This makes the charge felony-level from the very first offense — not just for repeat offenders. Additionally, IID installation is required upon any reinstatement after a Brent's Law conviction. The law has been praised by child safety advocates and cited in similar legislation in other states.",
    },
    {
      question: "What are Kentucky's graduated licensing stages and requirements?",
      answer:
        "Kentucky's three-stage GDL: (1) Instruction Permit at 16 — supervised by licensed adult 21+ in front seat at all times, 180-day minimum hold, 60 hours supervised (10 night); (2) Intermediate License — curfew midnight–6AM without adult 21+ (except work/school/emergency), max 1 non-family passenger under 20 for first 6 months; (3) Full license at 18. Violations during intermediate stage can extend the restriction period. If a permit holder is convicted of a moving violation, the 180-day clock may restart depending on the severity of the violation.",
    },
    {
      question: "Does the Kentucky hands-free law (SB 332) apply to hands-free GPS navigation?",
      answer:
        "Kentucky's SB 332 (effective July 8, 2022) permits hands-free GPS navigation. A phone mounted on the dashboard or windshield in a holder where the driver doesn't need to hold or touch it is legal. Voice-activated navigation apps are fully permitted. The law prohibits only physically holding the device or manually touching the screen while driving. Using a mounted phone as a GPS (looking at the map, not touching the screen while moving) is legal. The key question is: is the driver touching or holding the device? If yes, it's prohibited. Mounted, hands-free use for GPS: permitted.",
    },
    {
      question: "What are Kentucky's minimum auto insurance requirements?",
      answer:
        "Kentucky requires minimum liability coverage of 25/50/25: $25,000 bodily injury per person, $50,000 per accident, and $25,000 property damage. Kentucky is also a no-fault state — drivers are required to carry Personal Injury Protection (PIP) of at least $10,000. PIP covers your own medical expenses regardless of who caused the accident. Kentucky drivers may choose to opt out of the no-fault system with a signed form, accepting the right to sue and be sued. This opt-out is a significant decision — drivers who stay in the no-fault system cannot sue for pain and suffering in minor accidents. Proof of insurance must be in the vehicle at all times.",
    },
    {
      question: "What does Kentucky require for license reinstatement after a DUI suspension?",
      answer:
        "Kentucky DUI reinstatement requires: (1) serving the full suspension period (90 days for first DUI, longer for subsequent); (2) completing a court-ordered alcohol treatment or education program; (3) filing an SR-22 certificate of financial responsibility with the Division of Driver Licensing; (4) paying reinstatement fees; (5) IID installation if required by Brent's Law or aggravating factors. SR-22 must be maintained for 3 years. A second DUI in Kentucky requires a minimum 18-month license revocation and mandatory IID upon reinstatement. Third DUI: 3-year revocation.",
    },
    {
      question: "Does Kentucky have any special driving laws for the Appalachian mountain regions?",
      answer:
        "Kentucky's Appalachian region (eastern Kentucky, including the Cumberland and Pine Mountains) presents specific driving challenges that the DMV test addresses. Kentucky law requires drivers to: (1) use lower gears on steep downgrades to reduce brake reliance; (2) use pullouts when 5 or more vehicles are backed up behind you on mountain roads; (3) drive at speeds appropriate for mountain road conditions (basic speed rule applies — posted limit may not reflect safe speed on curves). Kentucky doesn't have as many runaway truck ramps as Colorado, but the mountain driving principles are addressed in the driver manual because eastern Kentucky highways include grades on US 23, US 119, and KY 15 that require specific driving technique.",
    },
    {
      question: "How does Kentucky's 'no-fault' insurance system affect drivers in an accident?",
      answer:
        "Kentucky is a choice no-fault state. If you remain in the no-fault system (default), your own PIP coverage pays for your medical expenses up to $10,000 regardless of who caused the accident — you cannot sue the other driver for pain and suffering unless the accident causes death, permanent injury, or medical bills exceeding $1,000. If you file to opt out of no-fault (by signing a form with the state), you keep the right to sue and be sued for any accident. The opt-out is irrevocable for 3 years. Drivers who opt out face greater litigation risk but retain full tort rights. The knowledge test may include basic questions about Kentucky's no-fault insurance requirement.",
    },
    {
      question: "What vision standards does Kentucky require for a driver's license?",
      answer:
        "Kentucky requires a minimum visual acuity of 20/200 in at least one eye (with or without corrective lenses) for a standard Class D license. If your best-corrected vision is 20/60 or better in at least one eye, no restriction is placed on the license. If vision is 20/60 to 20/200 in the better eye, a daylight-only restriction is placed on the license. Kentucky also requires adequate field of vision. The vision screening is conducted at the Division of Driver Licensing office when applying for a permit or renewing a license. If you wear glasses or contacts, bring them to the vision test — your prescription may determine whether a corrective lens restriction is noted on your license.",
    },
  ],
  relatedTests: [
    { label: "KY Motorcycle Test", href: "/kentucky-motorcycle-practice-test" },
    { label: "KY CDL Test", href: "/kentucky-cdl-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function KentuckyDMVPage() {
  return <PracticeTestPage {...data} />;
}
