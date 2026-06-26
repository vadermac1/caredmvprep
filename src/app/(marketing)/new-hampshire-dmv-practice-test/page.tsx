import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New Hampshire DMV Practice Test 2025 – Free NH DMV Knowledge Exam Prep",
  description: "Prepare for the New Hampshire DMV 40-question knowledge test with 75% passing score. Covers the no-adult-seatbelt law, no adult helmet law, OUI statute (RSA 265-A:2), Franconia Notch 2-lane interstate, Kancamagus Highway hazards, and NH toll road rules.",
  alternates: { canonical: "https://caredmvprep.com/new-hampshire-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/new-hampshire-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New Hampshire",
  stateAbbr: "NH",
  testLabel: "DMV Practice Test",
  slug: "new-hampshire-dmv-practice-test",
  headline: "New Hampshire DMV Practice Test 2025",
  intro: "The New Hampshire Division of Motor Vehicles administers a 40-question knowledge exam with a unique 75% passing threshold — only 30 correct answers are required, unlike the 80% standard in most states. This practice test covers New Hampshire's most distinctive laws: no mandatory adult seatbelt, no mandatory adult motorcycle helmet, OUI terminology under RSA 265-A:2, the unique 2-lane Franconia Notch Interstate (I-93/NH 18), Kancamagus Highway hazards, and NH toll road procedures.",
  basedOn: "New Hampshire Division of Motor Vehicles Driver's Manual",
  keyRules: [
    { icon: "🪑", rule: "No Adult Seatbelt Law", detail: "New Hampshire is the ONLY state in the United States with no mandatory seatbelt law for adults. Adults in the front and rear seats are not required by law to wear a seatbelt. This reflects New Hampshire's 'Live Free or Die' philosophy. Children under 18 are required to be buckled. This law is directly tested on the NH knowledge exam." },
    { icon: "🪖", rule: "No Adult Helmet Law", detail: "New Hampshire also has no mandatory helmet law for motorcycle riders and passengers 18 and older. Adults may legally operate a motorcycle without a helmet in New Hampshire. Riders under 18 must wear helmets. Combined with the no-seatbelt law, New Hampshire has the most permissive personal protection requirements in the nation." },
    { icon: "🍺", rule: "OUI – RSA 265-A:2", detail: "New Hampshire uses OUI (Operating Under the Influence) under RSA 265-A:2 — not DUI. The legal BAC limit is 0.08% for adults. Drivers under 21 face a 0.02% BAC threshold. NH's Implied Consent law is part of RSA 265-A. Understanding OUI terminology and the specific statute is tested on the NH exam." },
    { icon: "🏔️", rule: "Franconia Notch – 2-Lane Interstate", detail: "I-93 through Franconia Notch State Park narrows to 2 lanes and is designated NH Route 18 — the only section of the U.S. Interstate Highway System that was permanently reduced to 2 lanes due to environmental constraints (protecting Franconia Notch State Park). Normal interstate passing rules still apply, but the narrow design requires extra caution." },
    { icon: "🌲", rule: "Kancamagus Highway (NH-112)", detail: "The Kancamagus Highway (NH-112) is a 34.5-mile scenic road through the White Mountains with no gas stations, no food services, no cell service, and is sometimes closed in winter. It crosses several mountain passes with deer and moose crossing zones. Drivers must enter with adequate fuel and be prepared for no services." },
    { icon: "💳", rule: "F.E. Everett Turnpike / NH Toll Roads", detail: "New Hampshire's toll road system includes the F.E. Everett Turnpike and I-293. E-ZPass is available for contactless toll payment. Cash toll lanes also operate. Some interchanges have moved to all-electronic tolling (AET) where no cash option exists. Drivers should have E-ZPass or be prepared to receive a bill-by-mail toll notice." },
    { icon: "🪪", rule: "Permit Age: 15½", detail: "New Hampshire allows residents to apply for a learner's permit at age 15½. Permit holders must drive with a licensed adult (25 or older, not just 21) in the front passenger seat. NH's GDL program is among the stricter in New England, requiring the supervising driver to be 25+." },
    { icon: "🫎", rule: "Moose and Wildlife Crossings", detail: "New Hampshire, like Maine, has significant moose-vehicle collision risks on rural roads. NH-112 (Kancamagus), NH-16 (Conway to Gorham), and US-3 through the North Country are active moose corridors. Moose legs are tall enough that the body clears headlights — the animal may be invisible until directly in front of the vehicle." },
  ],
  about: [
    "The New Hampshire Division of Motor Vehicles administers a 40-question knowledge exam, but with a unique 75% passing threshold — requiring only 30 correct answers. This is one of the few states that requires less than 80% to pass the knowledge exam, making New Hampshire's test distinctive in its lower passing bar. However, the exam covers New Hampshire's unusually distinctive traffic laws, including the fact that New Hampshire is the only state in the United States without a mandatory seatbelt law for adults. This law directly reflects the state motto 'Live Free or Die' and is one of the most frequently tested facts on the NH DMV exam.",
    "New Hampshire also has no mandatory helmet law for motorcycle riders and passengers age 18 and older, making it one of very few states that exempts adults from both seatbelt and helmet requirements. OUI (Operating Under the Influence) under RSA 265-A:2 is the terminology New Hampshire uses — not DUI. The adult BAC limit is 0.08% and the under-21 threshold is 0.02%. Permit applicants must be at least 15½ years old, and New Hampshire's GDL program requires the supervising driver to be 25 or older — stricter than most states' 21-year minimum.",
    "New Hampshire's White Mountains create unique driving conditions tested on the DMV exam. Franconia Notch on I-93 has the only permanently narrowed section of the U.S. Interstate Highway System — reduced to 2 lanes and designated NH Route 18 because the park's environmental constraints prevented standard interstate construction. The Kancamagus Highway (NH-112) is a 34.5-mile mountain road with no services, no cell service, and seasonal closures — entering without adequate fuel is a significant driving hazard. Moose crossings on NH-112, NH-16, and US-3 in the North Country are tested because New Hampshire, like Maine, has significant moose-vehicle collision risk.",
  ],
  sampleQuestions: [
    {
      question: "New Hampshire is the only state in the United States without a mandatory seatbelt law for which group of people?",
      options: ["Children under age 8", "Adults in front seats only", "Adults in any seating position in the vehicle", "Drivers over age 65"],
      correctIndex: 2,
      explanation: "New Hampshire is the only U.S. state that does not require adults to wear seatbelts, regardless of whether they are in the front or rear seat. Children under 18 are required to be buckled. This exemption for adults reflects New Hampshire's 'Live Free or Die' philosophy on personal choice. Despite the legal exemption, safety experts note that seatbelts reduce the risk of death in a crash by approximately 45%. This law is one of the most commonly tested facts on the New Hampshire DMV knowledge exam."
    },
    {
      question: "New Hampshire uses OUI rather than DUI for impaired driving. Under which statute is OUI defined?",
      options: ["RSA 265-A:2", "RSA 259:55", "RSA 265:79", "RSA 21-J:1"],
      correctIndex: 0,
      explanation: "New Hampshire's OUI (Operating Under the Influence) offense is defined under RSA 265-A:2. This statute sets the 0.08% BAC threshold for adults and establishes the 0.02% standard for drivers under 21. OUI in New Hampshire covers impairment from alcohol, drugs, or any combination of substances. Understanding the OUI designation (as opposed to DUI or DWI) and the RSA 265-A statute reference is directly tested on the New Hampshire knowledge exam."
    },
    {
      question: "The Franconia Notch section of I-93 in New Hampshire is unique in the U.S. Interstate Highway System because:",
      options: ["It is the only toll section of I-93 in New Hampshire", "It is the only section of the U.S. Interstate System permanently reduced to 2 lanes, designated NH Route 18, due to environmental constraints protecting Franconia Notch State Park", "It has no posted speed limit in the park section", "It is closed to commercial vehicles year-round"],
      correctIndex: 1,
      explanation: "I-93 through Franconia Notch State Park narrows from its standard multi-lane interstate configuration to 2 lanes in each direction — making it the only section of the U.S. Interstate Highway System that was permanently reduced to 2 lanes. This was required by federal and state environmental agreements to protect the resources of Franconia Notch State Park, which include the former Old Man of the Mountain formation site, Echo Lake, and unique scenic and ecological features. The road is designated NH Route 18 through this section. Standard interstate rules (including 65 mph speed limit and no-stopping rules) still apply."
    },
    {
      question: "The Kancamagus Highway (NH-112) runs 34.5 miles through the White Mountains. What critical preparation must drivers make before entering the Kancamagus from either end?",
      options: ["Obtain a White Mountains National Forest vehicle permit for the Kancamagus", "Ensure the vehicle has adequate fuel, as there are no gas stations, restaurants, or cell phone service anywhere along NH-112", "Reduce tire pressure to improve traction on the mountain grades", "Check for active construction closures on the NH DOT website"],
      correctIndex: 1,
      explanation: "The Kancamagus Highway (NH-112) has no gas stations, no food services, no cell phone service, and no emergency call boxes along its entire 34.5-mile length through the White Mountain National Forest. A vehicle that runs out of fuel on the Kancamagus faces a serious situation — the nearest fuel is at Conway (eastern end) or Lincoln (western end), and cell phone calls to request assistance are not possible in most of the corridor. Drivers should enter with a full tank of fuel. The road is also subject to seasonal closure in winter and may have reduced speed limits during fall foliage season when traffic volume is highest."
    },
    {
      question: "New Hampshire's motorcycle helmet law requires helmets for which riders?",
      options: ["All riders regardless of age", "Riders under age 21 only", "Riders under age 18 only", "Helmets are optional for all NH motorcycle riders"],
      correctIndex: 2,
      explanation: "New Hampshire requires motorcycle helmets only for riders and passengers under age 18. Adults 18 and older are not legally required to wear a helmet while operating or riding as a passenger on a motorcycle in New Hampshire. Combined with the no-adult-seatbelt law, New Hampshire has the most permissive personal protection requirements for vehicle occupants in the United States. The NH DMV exam tests the helmet law's 18-years-old threshold specifically, as it is one of the most distinctive aspects of New Hampshire traffic law."
    },
    {
      question: "In New Hampshire's GDL program, what is the minimum age of the supervising driver who must accompany a learner's permit holder?",
      options: ["18 years old", "21 years old", "25 years old", "There is no minimum age for the supervisor"],
      correctIndex: 2,
      explanation: "New Hampshire's GDL program requires that the supervising driver accompanying a learner's permit holder be at least 25 years old — stricter than most states, which require only that the supervisor be 18 or 21 years old. The supervisor must be a licensed driver and must occupy the front passenger seat. New Hampshire's 25-year minimum age for supervisors reflects the state's emphasis on experienced adult oversight for new young drivers, even as the state takes a more permissive approach to adult personal safety choices like seatbelts and helmets."
    },
    {
      question: "A New Hampshire driver approaches the F.E. Everett Turnpike toll at an all-electronic tolling (AET) plaza without E-ZPass. What will happen?",
      options: ["The driver must stop and pay cash to a toll collector", "The vehicle's license plate will be photographed and the driver will receive a bill-by-mail invoice for the toll amount", "The driver may proceed without paying — AET plazas have no enforcement mechanism", "The driver must pull to a designated cash lane to pay"],
      correctIndex: 1,
      explanation: "New Hampshire's toll road system includes all-electronic tolling (AET) plazas where no cash option exists — there is no stopping and no toll collector. Vehicles without E-ZPass transponders pass through at highway speed, and overhead cameras photograph the license plate. The registered owner of the vehicle then receives a bill-by-mail (Pay-by-Plate) invoice for the toll amount. Unpaid toll invoices accumulate and can eventually result in collections action or registration renewal issues. New Hampshire drivers are encouraged to use E-ZPass to avoid bill-by-mail administrative fees."
    },
    {
      question: "What is the BAC limit for adult drivers (21 and older) under New Hampshire's OUI law (RSA 265-A:2)?",
      options: ["0.10%", "0.08%", "0.06%", "0.04%"],
      correctIndex: 1,
      explanation: "New Hampshire's OUI statute (RSA 265-A:2) sets the BAC limit at 0.08% for adult drivers 21 and older. Despite using OUI (Operating Under the Influence) rather than DUI terminology, the actual BAC threshold matches the standard used by most states. New Hampshire's Implied Consent law is codified in RSA 265-A and requires drivers who are lawfully arrested for OUI to submit to chemical testing. Refusal triggers administrative license suspension under RSA 265-A:30. The exam tests both the OUI terminology and the 0.08% threshold."
    },
    {
      question: "Why is the moose crossing hazard on New Hampshire's NH-112 (Kancamagus) particularly serious?",
      options: ["Moose always cross the road in groups, making avoidance impossible", "Moose legs are tall enough that the body sits above headlight beams, making the animal nearly invisible in darkness until it is directly in front of the vehicle", "Moose are protected species and drivers cannot swerve to avoid them", "The Kancamagus has a 45 mph speed limit that makes stopping for moose impossible"],
      correctIndex: 1,
      explanation: "Moose are uniquely dangerous on NH-112 and other White Mountain roads because their long legs position the body above the typical headlight beam. Unlike deer, whose eyes reflect headlight beams at significant distance, moose may not catch the light — and the dark body blends into the night. The combination of the Kancamagus Highway's curves, complete absence of cell service, and active moose population creates a high-risk corridor. New Hampshire sees significant moose-vehicle collisions annually, and the NH DMV exam includes this information because it is both life-threatening and highly specific to New Hampshire's geography."
    },
    {
      question: "What is the minimum age to apply for a New Hampshire learner's permit?",
      options: ["15 years old", "15½ years old", "16 years old", "14 years old"],
      correctIndex: 1,
      explanation: "New Hampshire allows residents to apply for a learner's permit at age 15½ (15 years and 6 months old). The applicant must pass the NH DMV 40-question knowledge exam (30 correct answers, 75% passing) and a vision test. A parent or guardian must provide consent. After obtaining the permit, the holder must drive only with a licensed supervising driver who is at least 25 years old in the front seat. The permit must be held for a minimum period before the holder can advance to the next GDL stage."
    },
  ],
  faqs: [
    {
      question: "Is New Hampshire really the only state with no seatbelt law for adults?",
      answer: "Yes. New Hampshire is currently the only state in the United States that does not require adults to wear seatbelts. The law reflects New Hampshire's state motto — 'Live Free or Die' — and its strong tradition of individual liberty over government mandate. Adults in both front and rear seats are not legally required to buckle up. Children under 18 are required to be properly restrained. Despite the legal exemption, safety data shows that seatbelts reduce the risk of death in a crash by approximately 45% for front-seat occupants and 60% for pickup truck occupants. The New Hampshire DMV exam tests this fact directly as a key state-specific law."
    },
    {
      question: "What passing score does the New Hampshire DMV knowledge test require?",
      answer: "New Hampshire's DMV knowledge exam consists of 40 questions, and applicants must answer at least 30 correctly to pass — a 75% passing threshold. This is lower than the 80% passing score required in most other states. The exam covers New Hampshire traffic laws, road signs, OUI statutes (RSA 265-A:2), the no-adult-seatbelt law, the no-adult-helmet law, the Franconia Notch interstate situation, White Mountain driving hazards, and New Hampshire's toll road system."
    },
    {
      question: "What does OUI mean in New Hampshire and how is it different from DUI?",
      answer: "New Hampshire uses OUI — Operating Under the Influence — under RSA 265-A:2. The actual conduct and penalties are essentially the same as DUI in other states — the difference is terminology. OUI in New Hampshire applies to impairment from alcohol, drugs, or any combination of substances. The adult BAC threshold is 0.08%; the under-21 threshold is 0.02%. New Hampshire's Implied Consent law (RSA 265-A:30) requires submission to chemical testing when lawfully arrested for OUI. The knowledge exam uses OUI terminology throughout, so understanding the correct term is essential for New Hampshire test preparation."
    },
    {
      question: "What is the Franconia Notch 2-lane interstate and why is it unique?",
      answer: "Franconia Notch on I-93 is the only section of the entire U.S. Interstate Highway System that was permanently reduced to 2 lanes rather than the minimum 4-lane divided highway standard. When I-93 was being extended through Franconia Notch, federal and state environmental negotiations determined that a standard 4-lane interstate would be too environmentally destructive to Franconia Notch State Park — home to scenic features, hiking trails, and the former Old Man of the Mountain site. The compromise was a 2-lane parkway designated as both I-93 and NH Route 18. It operates under standard interstate rules (65 mph limit), but the narrow profile requires extra caution, particularly for overtaking, and there are limited pullout areas."
    },
    {
      question: "What should drivers know before entering the Kancamagus Highway?",
      answer: "The Kancamagus Highway (NH-112) runs 34.5 miles from Lincoln to Conway through the White Mountain National Forest. There are no gas stations, restaurants, rest stops with services, cell phone towers, or emergency call boxes anywhere along the road's length. Key facts: Enter with a full tank of fuel — the nearest stations are at Lincoln (west end) and Conway (east end). In winter, the Kancamagus is sometimes closed entirely due to snow and ice — check NH DOT road conditions before attempting the crossing. Active moose and deer crossing zones exist throughout the road. Fall foliage season (late September to mid-October) brings extremely heavy traffic. Speed limits on the Kancamagus are 45 mph in most sections. Pull-outs are available for stopping to view scenery."
    },
    {
      question: "Does New Hampshire have a mandatory helmet law for adult motorcycle riders?",
      answer: "No. New Hampshire does not require motorcycle helmets for riders or passengers who are 18 or older. The law requires helmets only for riders and passengers under 18. Combined with the no-adult-seatbelt law, New Hampshire has the most permissive personal protection requirements in the United States for vehicle occupants. The New Hampshire DMV exam tests the helmet law's 18-year threshold explicitly. Despite the legal exemption, the NH DMV motorcycle manual notes that helmets dramatically reduce the severity of head injuries in crashes and recommends their use for all riders regardless of the legal requirement."
    },
    {
      question: "What are New Hampshire's toll roads and how do they work?",
      answer: "New Hampshire's toll road system includes the F.E. Everett Turnpike (I-293 and NH-101 in the southern tier), I-93, and toll plazas at several highway entry points. E-ZPass electronic transponders allow contactless payment through designated lanes at reduced or no stopping speed. Some New Hampshire toll plazas have converted to all-electronic tolling (AET), where vehicles without E-ZPass are photographed by license plate cameras and billed by mail (Pay-by-Plate). Unpaid toll bills accumulate fees and can eventually result in registration renewal issues. New Hampshire toll rates are among the higher per-mile rates in New England, particularly on the Turnpike system."
    },
    {
      question: "What moose crossing hazards exist on New Hampshire roads?",
      answer: "New Hampshire has a significant moose population concentrated in the White Mountain and North Country regions. The most active moose crossing roads include NH-112 (Kancamagus Highway), NH-16 (from Conway north to Gorham and Berlin), US-3 through the North Country, and NH-302 through the Crawford Notch area. Moose are most active at dawn, dusk, and nighttime — periods of low visibility. Their distinctive physical characteristic that makes them so dangerous: their legs are tall enough that the body sits above standard headlight beams, making them nearly invisible at night until directly in front of a vehicle. Moose do not have highly reflective eyes like deer. The NH DMV exam tests moose awareness as a genuine and life-threatening driving hazard."
    },
    {
      question: "What are the rules for supervising drivers in New Hampshire's GDL program?",
      answer: "New Hampshire's GDL (graduated driver license) program requires that the adult supervising a learner's permit holder be at least 25 years old — one of the stricter requirements in the nation. The supervisor must hold a valid New Hampshire driver's license (or a valid out-of-state license) and must sit in the front passenger seat while the permit holder drives. New Hampshire's 25-year minimum is notably stricter than the 18 or 21 minimum required in most states. The reasoning behind this requirement is that older supervisors have more driving experience and are more likely to provide stable, calm supervision for new drivers learning in New Hampshire's challenging winter road conditions."
    },
    {
      question: "What is the under-21 OUI BAC threshold in New Hampshire?",
      answer: "New Hampshire's OUI law (RSA 265-A:2) sets a 0.02% BAC threshold for drivers under 21. This is a near-zero-tolerance standard — any meaningful alcohol consumption before driving can trigger an OUI charge for a driver under 21. An OUI conviction under the 0.02% standard carries similar consequences to adult OUI, including license suspension, fines, and mandatory completion of an impaired driver intervention program. Under-21 OUI can also affect participation in New Hampshire's GDL program, potentially extending the period before full license eligibility."
    },
  ],
  relatedTests: [
    { label: "New Hampshire Motorcycle Practice Test", href: "/new-hampshire-motorcycle-practice-test" },
    { label: "New Hampshire CDL Practice Test", href: "/new-hampshire-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function NewHampshireDMVPage() {
  return <PracticeTestPage {...data} />;
}
