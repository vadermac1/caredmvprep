import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Ohio Driver's License Practice Test 2025 – Free OH BMV Exam Prep",
  description:
    "Free Ohio driver's license practice test based on the official Ohio Driver's Manual. 40 questions, 75% passing score, detailed explanations. Pass your OH BMV knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/ohio-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/ohio-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Ohio",
  stateAbbr: "OH",
  testLabel: "Driver's License Practice Test",
  slug: "ohio-dmv-practice-test",
  headline: "Ohio BMV Driver's License Practice Test",
  intro:
    "Prepare for your Ohio Bureau of Motor Vehicles (BMV) knowledge test with free practice questions built around Ohio-specific laws — including OVI (not DUI), the 2023 statewide handheld device ban (HB 283), Ohio's ultra-high OVI tier, and ODOT's roundabout right-of-way rules. Ohio's 40-question test at 75% allows the most wrong answers of any major state — but knowing the correct answers still matters.",
  numToPass: "30 correct (75%)",
  basedOn: "Ohio Driver's Manual (2025)",
  about: [
    "Ohio driver's licenses are issued by the Ohio Bureau of Motor Vehicles (BMV), which sits within the Ohio Department of Public Safety. The BMV operates through county-level deputy registrar agencies — not a statewide DMV network. Ohio's knowledge test is 40 questions, passing at 75% (30 of 40 correct). The combination of a long test and a lower passing threshold means you can miss up to 10 questions and still pass — but Ohio tests deeply on state-specific law, particularly Ohio's OVI terminology, the 2023 handheld ban, and ODOT roundabout rules. Ohio calls all impaired driving offenses 'OVI' (Operating a Vehicle while Impaired) under ORC § 4511.19 — test-takers who expect 'DUI' questions will be caught off guard.",
    "Ohio's OVI law under ORC § 4511.19 is more nuanced than most states' DUI statutes. Standard OVI applies at 0.08% BAC for adults. Ohio also has an 'ultra-high' OVI tier that kicks in at 0.17% BAC — this triggers enhanced first-offense mandatory penalties including three days of mandatory jail (or a 72-hour Driver Intervention Program), higher fines, and longer license suspensions, compared to the standard 72-hour DIP for a regular first-offense OVI. Under-21 OVI applies at 0.02% BAC — not the zero-tolerance level found in states like Arizona and Texas. Ohio also legalized recreational cannabis via Issue 2 in November 2023 (effective December 7, 2023). Ohio OVI law covers cannabis impairment, but unlike alcohol, there is no per se THC nanogram limit — conviction requires evidence of actual impairment rather than a specific blood THC level.",
    "Ohio enacted its Distracted Driving Law (HB 283) effective April 4, 2023, prohibiting all handheld electronic device use while driving for every Ohio driver — not just teens. Prior to full enforcement, Ohio issued warnings only from April 2023 through April 2024; full enforcement with fines began April 2024. Ohio's bicycle-passing law under ORC § 4511.27 requires at least three feet of clearance when overtaking a bicyclist, and Ohio's version of the Vulnerable Road Users law (effective March 23, 2017) also requires giving motorcycles a full lane width when passing — not merely three feet. ODOT has aggressively installed roundabouts across Ohio; ORC § 4511.65 requires vehicles entering a roundabout to yield to all circulating traffic, a rule specifically tested because many older Ohio drivers learned at traditional intersections.",
  ],
  keyRules: [
    { icon: "⚠️", rule: "OVI — not DUI: 0.08% adult, ultra-high at 0.17%", detail: "Ohio uses OVI (Operating a Vehicle while Impaired) under ORC § 4511.19. Standard OVI: 0.08% BAC. Ultra-high OVI at 0.17%+ triggers enhanced first-offense penalties including mandatory jail. Under-21 OVI: 0.02% BAC." },
    { icon: "📵", rule: "Handheld ban for ALL drivers — HB 283 (April 2023)", detail: "Ohio's Distracted Driving Law bans all handheld device use while driving statewide. First offense: $150 minor misdemeanor. First offense in school or construction zone: misdemeanor with steeper penalties. Hands-free Bluetooth is permitted." },
    { icon: "🔄", rule: "Roundabout right-of-way: yield to circulating traffic", detail: "Under ORC § 4511.65, vehicles entering a roundabout must yield to all traffic already circulating inside. Ohio has aggressively installed roundabouts statewide as ODOT's preferred intersection design — expect this on the test." },
    { icon: "🚲", rule: "3-foot bicycle passing clearance + full lane for motorcycles", detail: "ORC § 4511.27 requires at least 3 feet when passing a bicyclist. Ohio's Vulnerable Road Users law (2017) also requires giving motorcycles a full lane width — not just 3 feet — when overtaking." },
    { icon: "🌧️", rule: "Headlights required when wipers are in use", detail: "Ohio law requires full headlights whenever windshield wipers are operating due to precipitation, in addition to 30 minutes after sunset to 30 minutes before sunrise and when visibility drops below 1,000 feet." },
    { icon: "🎓", rule: "TIPIC at 15½: 24 hrs classroom + 50 supervised hours", detail: "Ohio teens can get a TIPIC (learner permit) at 15½ after 24 hours of classroom driver education. They must hold it at least 6 months, log 50 supervised hours (10 at night), and complete 8 hours of behind-the-wheel training." },
    { icon: "🌿", rule: "Cannabis OVI: impairment-based, no per se THC limit", detail: "Ohio legalized recreational cannabis December 7, 2023. OVI applies to cannabis impairment but Ohio has no specific THC nanogram threshold — conviction requires evidence of actual impairment, not just a blood THC reading." },
    { icon: "🌙", rule: "Teen curfew: midnight–6 AM, 1 non-family passenger limit", detail: "Ohio probationary license holders under 17 may not drive midnight–6 AM and may carry no more than one non-family passenger under 21. After turning 17, curfew shifts to 1 AM. Restrictions fully lift at 18." },
  ],
  sampleQuestions: [
    {
      question: "Ohio uses a specific term for impaired driving that differs from most states. What is the correct Ohio term under ORC § 4511.19?",
      options: [
        "DUI — Driving Under the Influence",
        "DWI — Driving While Intoxicated",
        "OVI — Operating a Vehicle while Impaired",
        "DUII — Driving Under the Influence of Intoxicants",
      ],
      correctIndex: 2,
      explanation:
        "Ohio uses the term OVI — Operating a Vehicle while Impaired — for all impaired driving offenses under ORC § 4511.19. OVI covers impairment by alcohol, controlled substances, or a combination. The adult legal BAC limit is 0.08%; commercial drivers face 0.04%; drivers under 21 face 0.02%. Using 'DUI' on the Ohio BMV test is technically incorrect — the Ohio-specific terminology is OVI.",
    },
    {
      question: "Ohio's 'ultra-high' OVI tier under ORC § 4511.19 triggers enhanced first-offense penalties at what BAC level?",
      options: ["0.10%", "0.12%", "0.15%", "0.17%"],
      correctIndex: 3,
      explanation:
        "Ohio's ultra-high OVI tier applies when a driver's BAC reaches 0.17% or higher. At this level, a first-offense OVI carries mandatory minimum jail time of three days (or a 72-hour Driver Intervention Program), steeper fines, and a longer license suspension than a standard first-offense OVI (which only requires a 72-hour DIP). This tiered system within Ohio's OVI law is specifically tested on the BMV knowledge exam.",
    },
    {
      question: "Ohio's Distracted Driving Law (HB 283) effective April 2023 — who does it apply to?",
      options: [
        "Only drivers under 18",
        "Only drivers in active school and construction zones",
        "All Ohio drivers statewide for any handheld device use",
        "Only commercial vehicle drivers on interstate highways",
      ],
      correctIndex: 2,
      explanation:
        "Ohio HB 283 bans all handheld electronic device use while driving for ALL Ohio drivers on all roads. This includes talking, texting, navigation, and browsing while holding the device. Hands-free via Bluetooth or voice commands is permitted. A first offense is a minor misdemeanor ($150 fine). In school and construction zones, a first offense is elevated to a misdemeanor with steeper penalties. Ohio issued only warnings from April 2023 through April 2024; full enforcement began in April 2024.",
    },
    {
      question: "Under ORC § 4511.65, who must yield at an Ohio roundabout?",
      options: [
        "Vehicles already circulating inside must yield to entering vehicles",
        "The vehicle that arrives at the entry point first proceeds first",
        "Vehicles entering the roundabout must yield to all traffic already circulating inside",
        "The driver on the right always has the right-of-way at a roundabout",
      ],
      correctIndex: 2,
      explanation:
        "Under ORC § 4511.65, vehicles entering a roundabout must yield to all traffic that is already circulating inside the roundabout. Do not enter until there is a safe gap in circulating traffic. Ohio has been installing roundabouts statewide as ODOT's preferred intersection design, which is why the roundabout right-of-way rule is specifically tested on the Ohio BMV knowledge exam — many Ohio drivers trained at traditional signalized intersections and find roundabout rules unfamiliar.",
    },
    {
      question: "Ohio legalized recreational cannabis in December 2023. How does Ohio handle cannabis OVI charges?",
      options: [
        "Ohio has a per se limit of 5 nanograms of THC per milliliter of blood",
        "Cannabis impairment cannot be the basis of an OVI charge in Ohio",
        "Ohio OVI applies to cannabis impairment, but there is no per se THC nanogram limit — conviction requires evidence of actual impairment",
        "Cannabis OVI only applies to drivers under 21",
      ],
      correctIndex: 2,
      explanation:
        "Ohio legalized recreational cannabis via Issue 2 effective December 7, 2023. Ohio's OVI law covers cannabis impairment, but unlike alcohol's 0.08% BAC threshold, Ohio has no specific nanogram-per-milliliter THC limit that automatically constitutes OVI. Instead, prosecution requires evidence of actual impairment — such as field sobriety test results, officer observations, or other behavioral evidence. This lack of a per se THC limit is a notable feature of Ohio's cannabis OVI law.",
    },
    {
      question: "Ohio law requires drivers passing a bicyclist on the road to maintain at least how much clearance under ORC § 4511.27?",
      options: ["2 feet", "3 feet", "4 feet", "5 feet"],
      correctIndex: 1,
      explanation:
        "ORC § 4511.27 requires Ohio drivers to maintain at least 3 feet of clearance when overtaking a bicyclist. Additionally, Ohio's Vulnerable Road Users law (effective March 23, 2017) requires giving motorcycles a full lane width — not merely 3 feet — when passing. These Ohio-specific passing-distance requirements are tested on the BMV knowledge exam.",
    },
    {
      question: "When does Ohio law specifically require headlights to be turned on?",
      options: [
        "Only between 10 PM and 6 AM",
        "Only during rain or snow",
        "From 30 minutes after sunset to 30 minutes before sunrise, when visibility is under 1,000 feet, AND whenever windshield wipers are in use due to precipitation",
        "Only in tunnels and during fog",
      ],
      correctIndex: 2,
      explanation:
        "Ohio requires headlights in three specific situations: (1) from 30 minutes after sunset to 30 minutes before sunrise, (2) when visibility drops below 1,000 feet due to weather, and (3) whenever windshield wipers are in use due to precipitation. The wiper-activated headlight rule is Ohio-specific and frequently tested. Daytime running lights do not satisfy the headlight requirement in any of these situations.",
    },
    {
      question: "At what age may an Ohio resident obtain a TIPIC (learner permit), and what training must be completed first?",
      options: [
        "15 years old — no prior training required",
        "15½ years old — after completing 24 hours of classroom driver education",
        "16 years old — after completing 30 hours of classroom and behind-the-wheel training",
        "16 years old — no prior training required",
      ],
      correctIndex: 1,
      explanation:
        "Ohio allows teens to obtain a TIPIC (Temporary Instruction Permit Identification Card) at age 15½ (15 years, 6 months) after passing the BMV knowledge test. Before applying, the teen must have completed 24 hours of classroom driver education from an Ohio-approved program. The TIPIC must be held for at least 6 months; during that period, the teen must log 50 hours of supervised driving (10 at night) and complete 8 hours of instructor-led behind-the-wheel training before taking the road skills test at 16.",
    },
    {
      question: "Ohio's school zone speed limit applies during school hours AND for how long before and after school?",
      options: [
        "Only when children are visibly present in the zone",
        "15 minutes before and after school",
        "30 minutes before and after school",
        "1 hour before and after school",
      ],
      correctIndex: 2,
      explanation:
        "Ohio school zones operate at reduced speed limits during school hours AND for 30 minutes before and after school — not merely 'when children are present.' This expanded window (compared to some states that only require reduced speed when children are actually visible) is specifically tested on the Ohio BMV exam. Always look for the posted school zone speed limit and its hours, and allow the full 30-minute buffer.",
    },
    {
      question: "An Ohio probationary license holder under age 17 may carry how many non-family passengers under 21?",
      options: ["Zero", "One", "Two", "Three"],
      correctIndex: 1,
      explanation:
        "Ohio probationary license holders under 17 may carry no more than one passenger under 21 who is not an immediate family member. This restriction applies during the first year of the probationary license (until age 17 or after 12 months of violation-free driving). The restriction exists because peer passenger presence significantly increases crash risk for inexperienced teen drivers. After turning 17 or completing 12 violation-free months, the passenger restriction is lifted.",
    },
  ],
  faqs: [
    {
      question: "Why does Ohio call it OVI instead of DUI, and does it matter on the knowledge test?",
      answer:
        "OVI stands for Operating a Vehicle while Impaired — it is Ohio's statutory term under ORC § 4511.19 for all impaired driving offenses. It matters on the knowledge test because Ohio's BMV exam uses OVI exclusively. The term covers impairment by alcohol, drugs (including cannabis), or a combination. The adult BAC limit is 0.08%; under-21 is 0.02%; the ultra-high tier begins at 0.17%. If a test question asks about 'DUI' in Ohio, it is likely a distractor — the correct Ohio term is always OVI.",
    },
    {
      question: "What is Ohio's ultra-high OVI tier and how does it differ from a standard first-offense OVI?",
      answer:
        "Ohio's ultra-high OVI tier under ORC § 4511.19 applies when a driver's BAC is 0.17% or higher. A standard first-offense OVI (0.08%–0.169%) requires a 72-hour Driver Intervention Program or three days jail, plus fines and suspension. The ultra-high tier at 0.17%+ requires three days mandatory jail (nine days can be suspended if an IID is installed and treatment completed), higher minimum fines, and a longer mandatory license suspension — all on a first offense.",
    },
    {
      question: "How does Ohio's 2023 handheld device ban (HB 283) work, and when did full enforcement begin?",
      answer:
        "Ohio HB 283, effective April 4, 2023, bans all handheld electronic device use while driving statewide for every driver. Ohio issued warnings only from April 2023 through April 2024 as a grace period; full enforcement with fines began in April 2024. First offense: minor misdemeanor with a $150 fine. First offense in school or construction zone: elevated to a misdemeanor with steeper fines. Hands-free Bluetooth, voice commands, and dashboard-mounted devices remain permitted.",
    },
    {
      question: "What is an Ohio TIPIC and how does it differ from a regular learner permit?",
      answer:
        "A TIPIC (Temporary Instruction Permit Identification Card) is Ohio's learner permit for new drivers. It can be obtained at age 15½ after passing the BMV knowledge test and completing 24 hours of classroom driver education. The TIPIC must be held for at least 6 months. Unlike some states' paper permits, the TIPIC also serves as a photo identification card for Ohio teens. It is valid for two years. After 6 months with 50 supervised hours (10 at night), teens can take the road skills test for a probationary license.",
    },
    {
      question: "Does Ohio have a roundabout right-of-way rule, and why is it on the knowledge test?",
      answer:
        "Yes. Under ORC § 4511.65, vehicles entering a roundabout must yield to all traffic already circulating inside the roundabout. Ohio has been aggressively installing roundabouts statewide — ODOT prefers them over traditional intersections for their safety record and traffic flow benefits. Because many Ohio drivers were trained before roundabouts became common, the BMV specifically tests this rule to ensure new drivers understand modern intersection designs they will encounter on Ohio roads.",
    },
    {
      question: "How does Ohio OVI law handle cannabis impairment now that recreational cannabis is legal?",
      answer:
        "Ohio legalized recreational cannabis via Issue 2 (effective December 7, 2023). Ohio OVI law still applies to cannabis impairment, but Ohio has no per se nanogram-per-milliliter THC limit that automatically constitutes OVI — unlike the BAC thresholds for alcohol. Cannabis OVI conviction in Ohio requires evidence of actual impairment: field sobriety test failures, officer observations, or Drug Recognition Expert (DRE) evaluations. This evidence-based (rather than per se) standard is a notable and tested feature of Ohio's OVI law.",
    },
    {
      question: "What are Ohio's teen driving restrictions under the probationary license?",
      answer:
        "Ohio probationary license holders under 17: no driving midnight–6 AM; no more than one non-family passenger under 21. After turning 17, the curfew shifts to 1 AM. Restrictions fully lift at 18 or after 12 months of violation-free driving. Violations of GDL restrictions can extend the probationary period. Ohio's probationary license (not a TIPIC) is issued after passing the road skills test at 16.",
    },
    {
      question: "What is Ohio's bicycle and motorcycle passing distance requirement?",
      answer:
        "ORC § 4511.27 requires Ohio drivers to maintain at least 3 feet of clearance when overtaking a bicyclist. Ohio's Vulnerable Road Users law (effective March 23, 2017) goes further for motorcycles: drivers must provide a full lane width when passing a motorcycle — not merely 3 feet. Failure to provide adequate passing distance can be charged as a VRU violation with enhanced penalties if the motorcyclist or cyclist is injured.",
    },
    {
      question: "How does Ohio's school zone speed limit work compared to other states?",
      answer:
        "Ohio school zone reduced speed limits apply during school hours AND for 30 minutes before and after school — a broader window than states that only reduce limits 'when children are present.' Posted school zone signs in Ohio specify both the speed limit and the time periods it applies. Always observe the posted signs. Fines for speeding in Ohio school zones are doubled, and violations can result in license suspension.",
    },
    {
      question: "Can I take the Ohio BMV knowledge test in a language other than English?",
      answer:
        "Yes — the Ohio BMV offers the knowledge test in multiple languages. Contact your local deputy registrar office to confirm language availability and schedule. The Ohio Driver's Manual is available in several languages at bmv.ohio.gov. Ohio's network of deputy registrar offices (county-level agencies, not state DMV offices) vary in language support, so calling ahead is recommended.",
    },
    {
      question: "What does Ohio's headlight-with-wipers law require?",
      answer:
        "Ohio law requires drivers to use full headlights whenever windshield wipers are operating due to precipitation — not just during heavy rain or poor visibility. Daytime running lights do not satisfy this requirement. The rule also applies 30 minutes after sunset to 30 minutes before sunrise, and whenever visibility drops below 1,000 feet. Ohio's wiper-activated headlight rule is Ohio-specific and a common knowledge test question.",
    },
  ],
  relatedTests: [
    { label: "OH Motorcycle Test", href: "/ohio-motorcycle-practice-test" },
    { label: "OH CDL Test", href: "/ohio-cdl-practice-test" },
    { label: "IL Permit Test", href: "/illinois-dmv-practice-test" },
    { label: "Driver's License Guide", href: "/drivers-license-guide" },
    { label: "DMV Study Tips", href: "/dmv-study-tips" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OhioDMVPage() {
  return <PracticeTestPage {...data} />;
}
