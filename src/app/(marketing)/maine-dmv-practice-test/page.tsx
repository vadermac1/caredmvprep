import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Maine DMV Practice Test 2025 – Free BMV Knowledge Exam Prep",
  description: "Prepare for the Maine BMV knowledge test with 29 state-specific questions covering OUI laws, moose collision risks, studded tire rules, and Maine road conditions. Free practice test for 2025.",
  alternates: { canonical: "https://caredmvprep.com/maine-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/maine-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Maine",
  stateAbbr: "ME",
  testLabel: "DMV Practice Test",
  slug: "maine-dmv-practice-test",
  headline: "Maine BMV Practice Test 2025",
  intro: "The Maine Bureau of Motor Vehicles (BMV), under the Secretary of State, administers a 29-question knowledge exam. You must answer at least 23 questions correctly (80%) to pass. This practice test covers Maine-specific laws including OUI statutes, moose collision hazards, studded tire regulations, and winter driving on Maine roads.",
  basedOn: "Maine Secretary of State BMV Driver's Manual",
  keyRules: [
    { icon: "🫎", rule: "Moose Collision Hazard", detail: "Maine has the highest moose-vehicle collision rate per road mile in the U.S. Moose weigh 800–1,500 lbs and their legs are tall enough that the body clears vehicle headlights — eyes may not reflect and the animal may be invisible until directly in your path. Hitting a moose often shears the vehicle roof. Reduce speed and use high beams on rural roads at dawn, dusk, and night." },
    { icon: "🍺", rule: "OUI – Not DUI", detail: "Maine uses the term OUI (Operating Under the Influence) under 29-A MRSA § 2411 — not DUI. The legal limit is 0.08% BAC for adults. Under-21 drivers face a true zero-tolerance threshold of 0.00% BAC — any detectable alcohol results in an OUI charge for drivers under 21." },
    { icon: "❄️", rule: "Studded Tire Season", detail: "Studded snow tires are permitted in Maine from October 1 through April 30. Using studded tires outside this window damages road surfaces and is prohibited. Maine's long winters and ice storms make studded tires a common and legal choice during the permitted season." },
    { icon: "🧊", rule: "Black Ice (Verglas)", detail: "Black ice, sometimes called verglas, forms on Maine roads when temperatures hover near 32°F with light rain or freezing drizzle. It is nearly invisible and creates extremely low-friction surfaces. Maine DOT uses sand rather than salt on some roads to protect watershed areas, so ice may persist longer on those routes." },
    { icon: "🏍️", rule: "Permit Age: 15", detail: "Maine allows residents to apply for a learner's permit at age 15 — earlier than many states. Permit holders must drive with a licensed supervising driver age 20 or older who has held a license for at least 2 years." },
    { icon: "🛷", rule: "Snowmobile Crossing Signs", detail: "Maine has the highest snowmobile trail density in the eastern United States. Yellow diamond snowmobile crossing signs appear on many Maine rural roads. Drivers must watch for snowmobiles crossing the roadway, particularly at dawn and dusk during winter months." },
    { icon: "🚫", rule: "Zero Tolerance Under 21", detail: "Maine's zero-tolerance law for drivers under 21 means any measurable BAC — even 0.01% — can result in an OUI charge and license suspension. There is no minimum threshold for underage drivers. This is stricter than the 0.02% limit used by many other states." },
    { icon: "🛣️", rule: "Moose Alley – US-201", detail: "The section of US-201 between Jackman and the Quebec border is known as 'Moose Alley' and has some of the highest moose-vehicle collision rates in Maine. Drivers on this route should reduce speed significantly after dark, use high beams when no oncoming traffic is present, and be prepared to stop for moose standing in the road." },
  ],
  about: [
    "The Maine Bureau of Motor Vehicles (BMV) operates under the Maine Secretary of State's office and administers the state's driver licensing program. The knowledge exam consists of 29 questions drawn from the Maine Driver's Manual, and applicants must answer at least 23 correctly to earn an 80% passing score. Maine's permit age of 15 means many first-time test-takers are high school freshmen — the state's graduated driver license (GDL) program requires permit holders to log supervised driving hours before advancing to a full license.",
    "Maine's roads present challenges that are unique among New England states. The state has the highest moose-vehicle collision rate per road mile in the United States. Unlike deer, moose are so tall that their legs place the body above typical headlight beams — the animal's eyes may not catch light and reflect, making a 1,000-pound moose virtually invisible until it is directly in front of a vehicle. Collisions with moose are frequently fatal and often result in the vehicle roof being sheared off. The BMV knowledge exam tests awareness of this hazard, especially on US-201 through the Jackman corridor and on US-2, US-302, and other rural routes.",
    "Maine law uses OUI (Operating Under the Influence) under 29-A MRSA § 2411 rather than the DUI terminology used in most states. The adult threshold is 0.08% BAC, but Maine enforces true zero tolerance for drivers under 21 — any detectable alcohol is a violation. Studded tires are permitted October 1 through April 30, and black ice (verglas) is a specific hazard when temperatures hover near freezing. The BMV knowledge exam frequently tests these winter driving laws, the snowmobile crossing signs common on rural roads, and proper behavior when approaching moose on the roadway.",
  ],
  sampleQuestions: [
    {
      question: "Maine law refers to impaired driving as OUI. What does OUI stand for under Maine statute 29-A MRSA § 2411?",
      options: ["Operating Under Influence", "Operating While Intoxicated", "Operating Under the Influence", "Operating with Impairment"],
      correctIndex: 2,
      explanation: "OUI stands for Operating Under the Influence, which is the exact term used in Maine statute 29-A MRSA § 2411. Maine does not use the DUI or DWI terminology found in other states. This distinction matters on the knowledge exam because Maine-specific OUI questions use the correct statutory name. OUI charges can result from alcohol, drugs, or a combination of both impairing substances."
    },
    {
      question: "A driver under age 21 in Maine is found to have a BAC of 0.01% during a traffic stop. What is the legal consequence under Maine's zero-tolerance law?",
      options: ["No penalty — 0.01% is below the 0.02% threshold", "A warning only", "An OUI charge and potential license suspension", "A fine but no license action"],
      correctIndex: 2,
      explanation: "Maine enforces true zero tolerance for drivers under 21, meaning any detectable alcohol — even 0.01% — can result in an OUI charge and license suspension. Unlike states that set a 0.02% threshold for underage drivers, Maine draws the line at zero. This is one of the strictest underage alcohol policies in the nation and is specifically tested on the Maine BMV knowledge exam."
    },
    {
      question: "Why are moose especially dangerous to drivers on Maine roads compared to deer?",
      options: ["Moose are faster and harder to avoid", "Moose legs are tall enough that the body sits above headlight level, making the animal hard to see at night", "Moose are protected by law and drivers cannot swerve", "Moose only cross roads in daytime hours"],
      correctIndex: 1,
      explanation: "Moose are uniquely dangerous because their long legs position the body above the typical beam of vehicle headlights. Unlike deer, whose eyes reflect headlight beams and provide advance warning, moose eyes may not catch the light — and the dark body blends into the night. A driver may see nothing until the moose is directly in the headlights. Maine has the highest moose-vehicle collision rate per road mile in the United States, and collisions often result in the vehicle roof being sheared off."
    },
    {
      question: "Between which dates are studded snow tires permitted on Maine roads?",
      options: ["November 1 through March 31", "October 15 through April 15", "October 1 through April 30", "December 1 through March 15"],
      correctIndex: 2,
      explanation: "Maine law permits the use of studded snow tires from October 1 through April 30. Using studded tires outside this window is prohibited because studs damage paved road surfaces when temperatures are above freezing. Maine's extended cold season — which can bring ice and snow from October through late April — makes this a longer window than many other northern states allow."
    },
    {
      question: "What is the minimum age to apply for a learner's permit in Maine?",
      options: ["14 years old", "15 years old", "15½ years old", "16 years old"],
      correctIndex: 1,
      explanation: "Maine allows applicants to obtain a learner's permit at age 15, which is earlier than the 15½ or 16 minimum used by many other states. Permit holders must drive only with a supervising licensed driver who is at least 20 years old and has held a license for a minimum of 2 years. Maine's GDL system requires supervised driving hours before the permit holder can advance toward a full license."
    },
    {
      question: "You are driving on a rural Maine road at night and encounter a section of road known as 'Moose Alley' on US-201. What is the recommended action?",
      options: ["Maintain speed and use your horn if you see a moose", "Reduce speed significantly, use high beams when no oncoming traffic is present, and be prepared to stop", "Turn on hazard lights and accelerate past the area quickly", "Only reduce speed near posted moose warning signs"],
      correctIndex: 1,
      explanation: "On Moose Alley (US-201 between Jackman and the Quebec border), the safest approach is to reduce speed substantially, use high beams when there is no oncoming traffic to scan the road margins, and be fully prepared to stop. Moose may be standing in the lane and are nearly invisible at night. Accelerating through the area increases the risk of a fatal collision. Moose warning signs indicate zones of elevated collision risk throughout this corridor."
    },
    {
      question: "Black ice forms on Maine roads when temperatures are near 32°F with light rain or freezing drizzle. Why does it remain on some Maine roads longer than expected?",
      options: ["Maine law prohibits salt use on all roads", "Maine DOT uses sand instead of salt on some roads to protect watershed areas, so ice may not melt as quickly", "Black ice melts immediately when the sun rises", "Maine roads are designed to drain water away from the surface"],
      correctIndex: 1,
      explanation: "On certain Maine roads near sensitive watershed areas, the Maine DOT applies sand rather than salt to control ice. Sand provides traction but does not lower the freezing point of water or accelerate melting the way salt does. As a result, black ice (verglas) may persist on these roads even after temperatures rise slightly. Drivers should be aware that ice conditions can remain hazardous for longer than expected on these treated routes."
    },
    {
      question: "What shape and color is a snowmobile crossing warning sign on Maine roads?",
      options: ["Red octagon", "Yellow diamond", "Orange triangle", "Green rectangle"],
      correctIndex: 1,
      explanation: "Snowmobile crossing signs in Maine are yellow diamond-shaped warning signs, following the standard format for advance warning signs used throughout the United States. Maine has the highest snowmobile trail density in the eastern U.S., so these signs appear frequently on rural roads — particularly in northern and western Maine. Drivers must watch for snowmobiles crossing the roadway, especially during low-light hours in winter."
    },
    {
      question: "A Maine driver is convicted of OUI. Which statute governs this offense?",
      options: ["29-A MRSA § 1312", "29-A MRSA § 2411", "21-A MRSA § 801", "17-A MRSA § 1252"],
      correctIndex: 1,
      explanation: "OUI offenses in Maine are governed by 29-A MRSA § 2411, which is Title 29-A of the Maine Revised Statutes Annotated — the motor vehicle title. This statute sets the 0.08% BAC threshold for adults and establishes the zero-tolerance standard for drivers under 21. Penalties under § 2411 include license suspension, fines, possible imprisonment for repeat offenses, and mandatory participation in substance abuse treatment programs."
    },
    {
      question: "When driving on a rural Maine road at night and a moose is standing in your lane, what is the MOST important reason not to swerve sharply?",
      options: ["Swerving may confuse the moose and cause it to move into your path", "Sharp swerving can cause a rollover or collision with roadside hazards, which may be more dangerous than braking in place", "Maine law requires drivers to maintain their lane when wildlife is present", "Moose always move out of the way if you maintain your lane"],
      correctIndex: 1,
      explanation: "When a large animal like a moose is in the road, sharp swerving at highway speed is extremely dangerous — it can cause a rollover or send the vehicle into a ditch, tree, or guardrail. These secondary outcomes can be just as fatal as a moose collision. The BMV guidance is to brake firmly and in a straight line when possible, reduce speed as much as possible before impact if a collision is unavoidable, and avoid aggressive steering corrections that destabilize the vehicle."
    },
  ],
  faqs: [
    {
      question: "What is the passing score for the Maine BMV knowledge test?",
      answer: "The Maine BMV knowledge exam consists of 29 questions, and you must answer at least 23 correctly to pass. This represents an 80% passing threshold. The exam is administered at Maine BMV offices and covers road signs, traffic laws, OUI statutes, Maine-specific hazards like moose collisions, winter driving rules including studded tire seasons, and general safe driving practices outlined in the Maine Driver's Manual."
    },
    {
      question: "Does Maine call it DUI or OUI?",
      answer: "Maine uses OUI — Operating Under the Influence — under 29-A MRSA § 2411. This is an important distinction because the Maine knowledge exam uses OUI terminology, and understanding the statute matters if you are tested on impaired driving rules. The legal BAC limit is 0.08% for adults and 0.00% (zero tolerance) for drivers under 21. OUI encompasses impairment from alcohol, drugs, or any combination of substances."
    },
    {
      question: "What is the zero-tolerance BAC limit for drivers under 21 in Maine?",
      answer: "Maine enforces true zero tolerance for drivers under 21 — any detectable alcohol in a driver's system constitutes an OUI violation. There is no minimum threshold; even a BAC of 0.01% is sufficient for an OUI charge. This is stricter than the 0.02% used by many other states. Consequences include license suspension and can affect a young driver's ability to advance through Maine's graduated licensing program."
    },
    {
      question: "When can I use studded snow tires in Maine?",
      answer: "Studded snow tires are permitted in Maine from October 1 through April 30. Outside of this date range, studded tires are prohibited because the metal studs damage asphalt road surfaces when temperatures are above freezing. Maine's winter season can extend well into April in northern parts of the state, so the five-month window accommodates Maine's climate. All four tires must be studded if you choose to use them — mixing studded and non-studded tires on the same vehicle is not recommended for vehicle stability."
    },
    {
      question: "Why is moose collision risk so high in Maine?",
      answer: "Maine has the highest moose-vehicle collision rate per road mile in the United States. The state has a large moose population — estimates exceed 60,000 animals — and moose frequently cross rural roads, especially at dawn, dusk, and nighttime. The physical characteristics of moose make them uniquely dangerous: their tall legs position the body above headlight beams, their dark coat provides almost no reflectivity, and their eyes may not catch headlight beams the way deer eyes do. A striking vehicle often hits the moose's legs, sending the massive body through the windshield. US-201 between Jackman and the Canadian border is particularly high-risk and is sometimes called 'Moose Alley.'"
    },
    {
      question: "What age can you get a learner's permit in Maine?",
      answer: "Maine residents may apply for a learner's permit beginning at age 15. Applicants must pass the BMV knowledge exam and vision test. Permit holders must be accompanied at all times by a supervising driver who is at least 20 years old and has held a valid license for a minimum of 2 years. The supervising driver must occupy the front passenger seat. Maine's GDL requirements include supervised driving hours and a waiting period before advancing to the next licensing stage."
    },
    {
      question: "What is black ice and why is it especially dangerous on Maine roads?",
      answer: "Black ice (sometimes called verglas) is a thin, nearly transparent layer of ice that forms on road surfaces when temperatures hover near 32°F with light freezing precipitation. It is called 'black' because it appears to be the same color as the road surface and is virtually invisible. Black ice is particularly treacherous on bridges, overpasses, and shaded road sections. In Maine, some roads near watershed areas are treated with sand rather than salt to protect water quality — these roads may retain ice longer because sand does not lower the freezing point of water. Drivers should reduce speed whenever temperatures are near freezing and precipitation is falling or has recently fallen."
    },
    {
      question: "What is Maine's snowmobile trail network, and why do signs for it appear on roads?",
      answer: "Maine has the highest snowmobile trail density in the eastern United States, with over 14,000 miles of groomed trails operated by the Maine Snowmobile Association and local clubs. Many of these trails cross public roads at designated crossing points, which are marked with yellow diamond-shaped snowmobile crossing warning signs. Drivers must watch for snowmobiles crossing the road and yield appropriately. Snowmobile crossings are especially common in northern and western Maine during winter months, and snowmobiles can travel at high speeds, so advance awareness is essential."
    },
    {
      question: "What road signs are typically tested on the Maine BMV knowledge exam?",
      answer: "The Maine BMV knowledge exam tests both the shape/color conventions for road signs and the specific meaning of signs common in Maine. Standard national sign types — warning signs (yellow diamond), regulatory signs (white rectangle, red circle/octagon), guide signs (green rectangle), and construction signs (orange diamond) — are all tested. Maine-specific signs include snowmobile crossing signs, moose warning signs, logging truck route signs in northern Maine, and seasonal road closure signs. The exam may also test signs for bridge weight limits, which are common on older Maine roads and bridges."
    },
    {
      question: "Does Maine have a hands-free cell phone law for drivers?",
      answer: "Yes. Maine has banned handheld electronic device use while driving. The law prohibits using a handheld phone or device to text, talk, or access apps while operating a motor vehicle. Maine drivers may use hands-free technology (Bluetooth, speakerphone mounted to dash, etc.) but must not hold the device. Violations result in fines, and the behavior is considered a primary offense — meaning officers can pull you over solely for device use, without needing another traffic violation as justification."
    },
  ],
  relatedTests: [
    { label: "Maine Motorcycle Practice Test", href: "/maine-motorcycle-practice-test" },
    { label: "Maine CDL Practice Test", href: "/maine-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function MaineDMVPage() {
  return <PracticeTestPage {...data} />;
}
