import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Montana DMV Practice Test 2025 – Free MVD Knowledge Exam Prep",
  description: "Prepare for the Montana MVD knowledge test with 33 state-specific questions covering the 80 mph rural interstate speed limit, no mandatory adult helmet law, open range livestock rules, DUI thresholds, Going-to-the-Sun Road restrictions, and Montana wildlife crossing hazards.",
  alternates: { canonical: "https://caredmvprep.com/montana-dmv-practice-test" },
  openGraph: { url: "https://caredmvprep.com/montana-dmv-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Montana",
  stateAbbr: "MT",
  testLabel: "DMV Practice Test",
  slug: "montana-dmv-practice-test",
  headline: "Montana MVD Practice Test 2025",
  intro: "The Motor Vehicle Division (MVD) of the Montana Department of Justice administers a 33-question knowledge exam. You must answer 26 questions correctly (80%) to pass. This practice test covers Montana-specific laws including the 80 mph rural interstate speed limit, open range livestock rules, DUI statutes, elk and wildlife crossing hazards, Going-to-the-Sun Road vehicle restrictions, and Montana's winter chain control requirements.",
  basedOn: "Montana Department of Justice MVD Driver Education Manual",
  keyRules: [
    { icon: "🚗", rule: "80 MPH Rural Interstate", detail: "Montana's rural interstate speed limit is 80 mph — tied for the highest legal speed limit in the United States alongside Wyoming, South Dakota, Utah, Texas, and Nevada. This limit applies on rural sections of I-90 and I-15. Urban and suburban interstate sections have lower posted limits. Despite the high speed limit, Montana law still requires driving at a speed 'reasonable and prudent' for current conditions." },
    { icon: "🦌", rule: "Open Range – Livestock on Roads", detail: "Most of Montana is open range — ranchers are not legally required to fence livestock away from public roads. If you strike a cow or horse on an open range road, the driver is typically held legally responsible, not the rancher. Watch for cattle crossing signs and livestock on rural Montana roads at all times, especially at night when animals are hardest to see." },
    { icon: "🍺", rule: "DUI Threshold", detail: "Montana uses DUI (Driving Under the Influence) terminology. The legal BAC limit is 0.08% for adults 21 and older. Drivers under 21 face a 0.02% BAC threshold. Montana has an Implied Consent law — refusing a chemical test (BAC test) results in automatic license suspension, which may be longer than the suspension for a DUI conviction." },
    { icon: "🏔️", rule: "Going-to-the-Sun Road Restrictions", detail: "Going-to-the-Sun Road through Glacier National Park limits vehicles to 21 feet in length and 8 feet in width. Motorhomes, RVs, trailers, and oversized vehicles are prohibited on the road during the summer season. The road features extreme grades and tight switchbacks with no guardrails on many sections. The vehicle size restriction is strictly enforced at entry stations." },
    { icon: "🪪", rule: "Permit Age: 14½", detail: "Montana allows residents to apply for a learner's permit at age 14½ — one of the youngest permit ages in the nation. Permit holders must drive with a licensed adult 18 or older in the front passenger seat. Montana's GDL program includes nighttime restrictions and passenger limitations for minor drivers." },
    { icon: "🦌", rule: "Elk Crossing Hazard", detail: "Elk are among Montana's most dangerous road hazards. A bull elk can weigh 600–900 lbs — nearly as heavy as a smaller moose. Elk are most active at dawn and dusk and congregate along US-93, US-2, and US-89 near Glacier and Yellowstone areas. Unlike deer, elk do not typically bound across roads — they walk slowly and may stop in traffic lanes." },
    { icon: "⛓️", rule: "Chain Control – Mountain Passes", detail: "Montana DOT issues chain requirements on I-90 at Lookout Pass (near the Idaho border), US-2, and other mountain passes during winter storms. When chain control is in effect, commercial vehicles and some passenger vehicles must install tire chains or high-traction tires before proceeding. Driving through a chain control zone without required traction devices is a moving violation." },
    { icon: "🌾", rule: "Agricultural Vehicles on Roads", detail: "Montana's rural economy means farm equipment — combines, tractors, grain wagons — frequently travels on public roads during planting and harvest seasons. Drivers must anticipate slow-moving farm vehicles and give them adequate following distance. Passing farm equipment on narrow Montana rural roads requires care — many routes have no shoulder and limited sight distance." },
  ],
  about: [
    "The Montana Motor Vehicle Division (MVD) operates under the Montana Department of Justice and administers the state's driver knowledge exam. The test consists of 33 questions — more than most states — and requires 26 correct answers (80%) to pass. Montana's minimum permit age is 14½, among the youngest in the nation, reflecting the state's rural geography where young people often need to drive for agricultural and ranch work. Montana's speed limits are among the highest in the country: rural interstates are posted at 80 mph, which requires test takers to demonstrate awareness that even at legal speeds, following distance, braking distance, and reaction time requirements increase dramatically.",
    "Montana's open range laws are among the most tested topics on the MVD exam. Because most of Montana operates under open range rules — meaning ranchers are not required to fence livestock off public roads — drivers are legally responsible when they collide with cattle or horses on designated open range roads. This reverses the liability assumption that car drivers from most states expect. Elk and mule deer are also significant hazards, particularly on US-93 in western Montana and US-2 in the northern tier. An elk weighing 600–900 lbs at highway speed is a life-threatening collision hazard comparable to a small car.",
    "Montana's mountain geography creates unique driving challenges tested on the MVD exam. Going-to-the-Sun Road in Glacier National Park restricts vehicles to 21 feet in length and 8 feet in width — no RVs, trailers, or oversized vehicles are permitted during summer operation. Winter chain control requirements apply on I-90 at Lookout Pass, US-2, and other mountain passes. Montana also has significant seasonal road conditions including spring frost heave on secondary roads. The MVD exam tests understanding of all these Montana-specific conditions alongside standard traffic law knowledge.",
  ],
  sampleQuestions: [
    {
      question: "What is the posted speed limit on rural interstate highways in Montana?",
      options: ["65 mph", "70 mph", "75 mph", "80 mph"],
      correctIndex: 3,
      explanation: "Montana's rural interstate speed limit is 80 mph — one of the highest in the United States, tied with Wyoming, South Dakota, Utah, Texas, and Nevada. This limit applies on rural sections of I-90 and I-15. However, Montana law requires drivers to operate at a speed 'reasonable and prudent' for conditions — meaning that even at the 80 mph limit, a driver must reduce speed for weather, traffic, road conditions, or visibility. The higher speed limit means Montana drivers must calculate significantly longer following distances and braking distances compared to states with lower limits."
    },
    {
      question: "Most of rural Montana operates under open range law. If a driver strikes a cow standing in the road on an open range highway, who is typically legally responsible?",
      options: ["The rancher, for failing to fence cattle away from the road", "The driver, because open range law does not require ranchers to fence livestock off public roads", "Liability is split 50/50 between driver and rancher", "The state of Montana, for inadequate road design"],
      correctIndex: 1,
      explanation: "In open range areas — which include most of rural Montana — ranchers are not legally required to fence cattle, horses, or other livestock away from public roads. If a driver hits livestock on an open range road, the driver is typically held responsible for any damage to the animal and for their own vehicle damage. This is the opposite of what drivers from eastern states may expect. Montana's MVD exam tests this open range liability rule because it directly affects how carefully drivers must monitor road margins for livestock in rural Montana."
    },
    {
      question: "A vehicle is 22 feet long and 8.5 feet wide. Can it legally travel on Going-to-the-Sun Road in Glacier National Park during the summer season?",
      options: ["Yes — there are no vehicle size restrictions on Going-to-the-Sun Road", "No — Going-to-the-Sun Road limits vehicles to 21 feet in length and 8 feet in width", "Only if the driver has a Montana oversize permit", "Yes, but only between 6 AM and 10 AM"],
      correctIndex: 1,
      explanation: "Going-to-the-Sun Road through Glacier National Park restricts vehicles to a maximum of 21 feet in length and 8 feet in width (including mirrors, loads, and equipment). A vehicle that is 22 feet long and 8.5 feet wide exceeds both limits and is prohibited. The restrictions apply to motorhomes, RVs, vehicles with trailers, and any oversized vehicle. The road's tight switchbacks, extreme grades, and narrow lanes with minimal barriers make these restrictions necessary for public safety. Vehicle size is checked at park entry stations."
    },
    {
      question: "What is the minimum age for a learner's permit in Montana?",
      options: ["15 years old", "15½ years old", "14½ years old", "14 years old"],
      correctIndex: 2,
      explanation: "Montana allows residents to apply for a learner's permit at age 14½ — one of the youngest permit ages in the United States. This early permit age reflects Montana's rural character, where young people in farming and ranching communities often need to drive for practical work purposes at younger ages than teenagers in urban states. Permit holders must drive with a licensed adult supervisor (18 or older) in the front seat at all times. Montana's GDL program includes nighttime driving restrictions and passenger limitations for younger drivers."
    },
    {
      question: "A Montana driver refuses to take a chemical test (breathalyzer or blood test) during a DUI stop. What is the consequence under Montana's Implied Consent law?",
      options: ["Refusal results in no legal consequence unless a DUI is proven", "Refusal results in automatic license suspension, which may exceed the suspension for a DUI conviction", "Refusal means the driver cannot be charged with DUI", "Refusal results in a $50 fine only"],
      correctIndex: 1,
      explanation: "Montana's Implied Consent law holds that any driver who operates a vehicle on Montana roads has implicitly consented to chemical testing (breath, blood, or urine) if lawfully arrested for DUI. Refusing the test triggers automatic administrative license suspension regardless of whether a DUI conviction follows. The refusal suspension may be longer than the suspension resulting from a DUI conviction itself. Montana law enforcement can also seek a warrant for a blood draw if a driver refuses, so refusal does not prevent testing in all circumstances."
    },
    {
      question: "You are driving on US-93 in western Montana at dusk and see a bull elk (estimated 700 lbs) standing in your lane 200 feet ahead. What is the safest response?",
      options: ["Honk your horn and flash your lights to scare the elk off the road, maintaining speed", "Brake firmly in a straight line, reduce speed as much as possible, and watch for additional elk near the road margins", "Swerve into the oncoming lane to pass the elk quickly", "Turn off your headlights so you do not startle the elk"],
      correctIndex: 1,
      explanation: "A 700-pound elk is an extremely dangerous road hazard. The safest response is to brake firmly in a straight line — reducing speed as much as possible before reaching the animal — while watching the road margins for additional elk (elk travel in groups). Unlike deer, elk often walk slowly or stop in the road rather than bounding away quickly. Sharp swerving at speed can cause a rollover or a head-on collision with oncoming traffic, which may be more dangerous than a reduced-speed elk collision. Do not attempt to pass closely — the animal may move into your path."
    },
    {
      question: "Montana DOT issues chain control requirements at Lookout Pass on I-90. When chain control is in effect, what must affected vehicles do?",
      options: ["Slow to 45 mph and proceed without chains", "Install approved tire chains or high-traction tires before entering the chain control zone", "Use the alternate route on US-12 instead", "Chain control applies only to vehicles over 10,000 lbs GVWR"],
      correctIndex: 1,
      explanation: "When Montana DOT issues a chain control requirement at Lookout Pass or other mountain corridors, affected vehicles must install approved tire chains or qualifying high-traction alternative tires (such as those meeting the Washington state traction tire standard) before proceeding through the zone. Attempting to drive through a chain control zone without the required traction devices is a moving violation subject to fines and may result in being turned back. Chain control requirements are posted on dynamic message signs and announced on the 511 Montana travel information system."
    },
    {
      question: "The Montana DUI BAC limit for drivers under 21 is:",
      options: ["0.08%", "0.04%", "0.02%", "0.00%"],
      correctIndex: 2,
      explanation: "Montana sets a 0.02% BAC threshold for drivers under 21 under its DUI law. This is effectively a near-zero-tolerance standard for underage drivers — any meaningful alcohol consumption before driving can result in a DUI charge for drivers under 21. Montana uses DUI (Driving Under the Influence) terminology. The adult threshold is 0.08% BAC. Underage DUI violations result in license suspension and may affect a minor's ability to advance through Montana's GDL program."
    },
    {
      question: "A farm combine harvesting wheat on a Montana state highway travels at 15 mph. Approaching the combine on a two-lane road with limited sight distance, what should the driver do?",
      options: ["Honk to alert the farm operator and pass immediately", "Follow at a safe distance and wait for a passing zone with adequate sight distance before overtaking", "Flash high beams to signal the combine operator to pull over", "Pass on the right shoulder if the left lane is obstructed"],
      correctIndex: 1,
      explanation: "Farm equipment such as combines and grain wagons routinely uses Montana rural roads during harvest season, operating legally at slow speeds. Drivers approaching this equipment should maintain a safe following distance — the combine's wide body and slow speed make passing dangerous unless there is a long, straight passing zone with adequate sight distance and no oncoming traffic. Montana's two-lane rural roads often have no shoulder, limited passing zones, and curves that conceal oncoming traffic. Patience is required — attempting a hasty pass is a leading cause of head-on collisions on Montana rural roads."
    },
    {
      question: "Montana historically had no daytime speed limit until 1999. What does the current 'reasonable and prudent' driving standard require, even on an 80 mph rural interstate?",
      options: ["Drivers must always drive at exactly the posted limit", "Drivers must drive at a speed that is reasonable and prudent given actual road, weather, traffic, and visibility conditions — even if that means less than 80 mph", "The 80 mph limit overrides all other speed considerations", "Reasonable and prudent applies only in school zones and construction zones"],
      correctIndex: 1,
      explanation: "Montana's speed statutes include a 'reasonable and prudent' standard in addition to the posted limits. This means that even if the posted limit is 80 mph, a driver must reduce speed when weather conditions (snow, ice, fog), traffic density, road conditions (construction, debris), or limited visibility make the posted limit unsafe. Driving at 80 mph on an icy Montana interstate could itself constitute a 'speed too fast for conditions' violation even if the driver is at or below the posted limit. Montana adopted this standard from its pre-1999 'reasonable and prudent' era, which it retained as an overlay to numeric speed limits."
    },
  ],
  faqs: [
    {
      question: "What is the Montana MVD knowledge exam structure and passing score?",
      answer: "The Montana Motor Vehicle Division (MVD), part of the Montana Department of Justice, administers a 33-question knowledge exam. Applicants must answer at least 26 questions correctly to achieve the 80% passing threshold. The exam covers Montana traffic laws, road signs, open range rules, wildlife hazards, mountain driving conditions, speed limits (including the 80 mph rural interstate limit), and DUI statutes. The exam is administered at MVD offices and, in some counties, through County Treasurer offices that handle vehicle and driver services on behalf of the state."
    },
    {
      question: "Is Montana really an open range state, and what does that mean for drivers?",
      answer: "Yes — the vast majority of rural Montana is legally designated open range. Under open range law, ranchers are not required to fence cattle, horses, sheep, or other livestock off public roads. When a vehicle strikes livestock on an open range road, the legal presumption typically holds the driver responsible — not the rancher — for damages to the animal and the rancher's property. This is a significant departure from the 'fence in' livestock laws of eastern states. Montana drivers must treat livestock on rural roads as a constant possibility, especially at night when animals are difficult to see. Cattle and horses on paved roads are a serious collision hazard given their size."
    },
    {
      question: "What is Going-to-the-Sun Road and what vehicles are prohibited?",
      answer: "Going-to-the-Sun Road is a 50-mile scenic road through Glacier National Park in northwestern Montana that crosses the Continental Divide at Logan Pass (6,646 feet elevation). The road is subject to vehicle size restrictions of 21 feet maximum length and 8 feet maximum width, including mirrors, cargo, and equipment. Prohibited vehicles include most motorhomes, RVs, vehicles towing trailers, and any vehicle exceeding these dimensions. The restriction applies because the road has tight switchbacks, extreme grades exceeding 10%, and many sections with no guardrails over steep drop-offs. The vehicle size restriction is enforced at checkpoints at both park entrances."
    },
    {
      question: "Does Montana require helmets for motorcycle riders?",
      answer: "Montana requires helmets only for motorcycle riders and passengers under age 18. Riders and passengers who are 18 or older are not required by Montana law to wear a helmet — Montana is one of a small number of states without a universal or adult partial helmet law. The Montana MVD motorcycle manual nonetheless strongly recommends helmet use for all riders. Riders from states with universal helmet laws who are traveling through Montana on road trips should be aware that Montana's helmet law is more permissive but that their home state's law may still technically apply to them (though enforcement of home-state laws for out-of-state riders is practically uncommon)."
    },
    {
      question: "What is the Montana rural interstate speed limit and how does it compare to other states?",
      answer: "Montana's rural interstate speed limit is 80 mph — tied for the highest in the United States along with Wyoming, South Dakota, Utah (on specific sections), Texas (I-10 and I-20 in west Texas), and Nevada (I-80). Montana's high-speed tradition dates to its pre-1999 'reasonable and prudent' era when there was no numeric daytime speed limit on rural roads. Even at 80 mph, Montana's 'reasonable and prudent' standard requires drivers to reduce speed for actual conditions. At 80 mph, braking distances are significantly longer and reaction time requirements are more demanding — the MVD exam tests these physics-based relationships."
    },
    {
      question: "What wildlife crossing hazards are most dangerous on Montana roads?",
      answer: "Montana's roads pass through habitat for several large animal species that pose serious collision hazards. Elk (600–900 lbs) are common along US-93 in the Flathead Valley, US-2 along the Hi-Line, and US-89 near Glacier and Yellowstone — they move slowly and often travel in groups, so one visible elk may mean many more on the road margin. Mule deer and white-tailed deer are widespread and more likely to make sudden unpredictable road crossings. Pronghorn antelope travel open prairie areas in central and eastern Montana. Bighorn sheep cross US-2 near Glacier, often descending cliff faces directly onto the roadway. White-tailed deer are most active at dawn and dusk. Reducing speed in wildlife crossing zones, especially at low light, is the primary safety measure."
    },
    {
      question: "What is Montana's DUI law and penalty structure?",
      answer: "Montana uses DUI (Driving Under the Influence) terminology. The BAC threshold is 0.08% for adults 21 and older and 0.02% for drivers under 21. Montana's Implied Consent law means that any driver on Montana roads has implicitly agreed to chemical testing if lawfully arrested for DUI — refusal triggers automatic license suspension. First-offense DUI penalties in Montana include fines, potential jail time, license suspension, and mandatory completion of a Chemical Dependency Assessment. Montana has an enhanced penalty (Aggravated DUI) for BAC of 0.16% or higher, which carries mandatory minimum jail time even for a first offense."
    },
    {
      question: "What chain control areas should Montana drivers know about?",
      answer: "Montana DOT issues chain requirements at several mountain pass locations during winter storms. The most significant for general motorists is Lookout Pass on I-90 near the Idaho border — this pass receives heavy snowfall and is one of the most frequently chain-controlled interstate points in the state. Other chain control or traction advisory areas include Homestake Pass on I-90 near Butte, and various passes on US-2 through the Rocky Mountain Front and the Glacier-area mountains. Chain control status is broadcast on 511 Montana and posted on dynamic message signs. Montana also uses the tiered traction advisory system (No Traction Tires → Chains Required) that matches most western states' systems."
    },
    {
      question: "What is Montana's permit age, and what restrictions apply?",
      answer: "Montana's learner's permit is available at age 14½ — among the youngest in the nation. To apply, the minor must pass the MVD knowledge exam and vision test. Permit holders must drive exclusively with a licensed adult supervisor (18 or older) in the front passenger seat. Montana's GDL program then progresses to a Restricted License at age 15 (after 6 months of permit holding with no serious violations), with nighttime driving restrictions (no driving between 11 PM and 5 AM) and passenger limitations (only immediate family members as passengers during the restricted period). Full license eligibility typically begins at age 16 after meeting all GDL requirements."
    },
    {
      question: "How does Montana's weather affect driving in spring and winter?",
      answer: "Montana experiences significant seasonal road condition challenges. Winter brings extreme cold (temperatures as low as -40°F in eastern Montana), heavy snow, blizzards, and black ice on all road types. Spring brings frost heave on secondary and rural roads — freeze-thaw cycles buckle and crack pavement surfaces, creating sudden pavement failures that can damage tires and suspension. Spring weight restrictions apply on affected secondary roads. Summer thunderstorms in eastern Montana can cause flash flooding on low-water crossings. The Montana DOT travel information system (511 Montana) provides current road condition reports by route, and Montana drivers should check 511 before driving through mountain passes or during any precipitation event."
    },
  ],
  relatedTests: [
    { label: "Montana Motorcycle Practice Test", href: "/montana-motorcycle-practice-test" },
    { label: "Montana CDL Practice Test", href: "/montana-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function MontanaDMVPage() {
  return <PracticeTestPage {...data} />;
}
