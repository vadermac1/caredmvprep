import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Alaska DMV Practice Test 2025 – Free AK Driver's License Exam Prep",
  description:
    "Prepare for your Alaska DMV knowledge test with free practice questions covering moose hazards, studded tire rules, extreme cold driving, and AK-specific traffic laws. 20 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/alaska-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/alaska-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "Alaska",
  stateAbbr: "AK",
  testLabel: "DMV Practice Test",
  slug: "alaska-dmv-practice-test",
  headline: "Alaska DMV Practice Test 2025",
  intro:
    "The Alaska Division of Motor Vehicles administers a 20-question knowledge test. You must answer at least 16 questions correctly (80%) to pass. This free practice test covers Alaska-specific hazards including moose on roadways, extreme cold weather driving, studded tire rules, and the unique challenges of driving in the Last Frontier.",
  basedOn: "Alaska Division of Motor Vehicles Driver Manual",
  keyRules: [
    {
      icon: "🦌",
      rule: "Moose Do Not Reflect Headlights",
      detail:
        "Unlike deer, moose eyes are positioned above typical headlight beam height — their eyes do NOT reflect in your headlights at night. Moose weigh 800–1,500 lbs and stand 6–7 feet at the shoulder. A collision is almost always catastrophic. Scan the road edges continuously after dark.",
    },
    {
      icon: "❄️",
      rule: "Studded Tires: Sept 16 – April 30",
      detail:
        "Alaska permits studded snow tires from September 16 through April 30 — the longest allowable season of any U.S. state. Using studded tires outside this window is prohibited and may result in a fine.",
    },
    {
      icon: "🔌",
      rule: "Block Heaters Are Standard Equipment",
      detail:
        "At temperatures below -20°F, vehicle battery capacity drops sharply and diesel fuel can gel. Engine block heaters are standard equipment in Alaska. Plugging in your vehicle before starting in extreme cold is a safety practice, not merely a convenience.",
    },
    {
      icon: "🌫️",
      rule: "Ice Fog Below -20°F",
      detail:
        "Ice fog forms when moisture in exhaust and breath freezes instantly in extremely cold air. In Fairbanks and other Interior Alaska communities, ice fog can reduce road visibility to near zero. Use low-beam headlights and reduce speed significantly when ice fog is present.",
    },
    {
      icon: "🛣️",
      rule: "Dalton Highway: No Services for 240 Miles",
      detail:
        "AK-11 (Dalton Highway) runs 414 miles to Prudhoe Bay and has no services for 240 miles between Coldfoot and Deadhorse. Travelers must carry extra fuel, food, water, and emergency supplies. Commercial trucks have priority on this road.",
    },
    {
      icon: "⛴️",
      rule: "Alaska Marine Highway System",
      detail:
        "Many Alaska communities are not connected by road. The Alaska Marine Highway System ferries transport vehicles between communities including Juneau, Ketchikan, Sitka, and others. Drivers must follow marine boarding procedures when transporting vehicles.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 14 Years Old",
      detail:
        "Alaska issues instruction permits to drivers as young as 14 years old — among the youngest permit ages in the nation. Permit holders at 14–15 must be accompanied by a licensed driver age 21 or older. A provisional license is available at 16, and a full unrestricted license at 18.",
    },
    {
      icon: "🍺",
      rule: "Zero BAC for Under-21 Drivers",
      detail:
        "Alaska enforces a 0.00% blood alcohol limit for drivers under 21 — any detectable alcohol is a violation. Adults 21 and older face a DUI charge at 0.08% BAC. Alaska's DUI penalties include mandatory license revocation, fines, and potential installation of an ignition interlock device.",
    },
  ],
  about: [
    "The Alaska Division of Motor Vehicles (DMV), operating under the Department of Administration, administers driver licensing for Alaska residents. The knowledge test consists of 20 questions drawn from the Alaska Driver Manual, covering road signs, traffic laws, and hazards specific to Alaska's environment. A passing score of 80% — 16 correct answers out of 20 — is required. First-time applicants under 18 must also complete an approved driver education course.",
    "Alaska presents driving hazards that do not exist in any other U.S. state. Moose are the most dangerous large animal collision risk: their eyes sit above headlight beam level, meaning they will NOT create eye-shine the way deer do in your headlights. With body weights up to 1,500 pounds, a moose collision at highway speed is almost always fatal for the vehicle occupants. The state also sees frequent ice fog in Interior communities like Fairbanks when temperatures drop below -20°F, and vehicle block heaters are standard equipment rather than optional accessories for reliable cold-weather starting.",
    "Alaska's road network is uniquely limited — many communities are only accessible by sea via the Alaska Marine Highway System or by air. For communities that are road-connected, unique rules apply: studded snow tires are legal from September 16 through April 30, the Dalton Highway (AK-11) is a gravel-surface road for large portions of its 414-mile length with no fuel available for 240 miles, and extreme weather conditions require drivers to carry survival supplies during long-distance winter travel.",
  ],
  sampleQuestions: [
    {
      question:
        "Why are moose especially dangerous at night compared to deer?",
      options: [
        "Moose are faster and harder to avoid",
        "Moose eyes do not reflect headlight beams because they sit above headlight height",
        "Moose are smaller and easier to miss",
        "Moose travel in large herds that block roads",
      ],
      correctIndex: 1,
      explanation:
        "Unlike deer, whose eyes are at headlight beam level and create a visible eye-shine, moose eyes are positioned 6–7 feet off the ground — well above a typical vehicle's headlight beam. This means you will not see a moose's eyes reflecting in your headlights at night until it is too late to stop. Moose weigh 800–1,500 pounds, and a collision is almost always catastrophic. Alaska has more moose-vehicle collisions than any other state.",
    },
    {
      question:
        "In Alaska, what are the legal dates for using studded snow tires?",
      options: [
        "October 1 through March 31",
        "November 1 through April 15",
        "September 16 through April 30",
        "October 15 through April 15",
      ],
      correctIndex: 2,
      explanation:
        "Alaska allows studded tires from September 16 through April 30 — the longest permitted season of any state in the U.S. This extended period reflects Alaska's long winter conditions, which can bring ice and snow as early as September and as late as April or May. Using studded tires outside this window is a traffic violation.",
    },
    {
      question:
        "What is the minimum age to obtain an instruction permit in Alaska?",
      options: ["15 years old", "15½ years old", "16 years old", "14 years old"],
      correctIndex: 3,
      explanation:
        "Alaska allows residents as young as 14 years old to apply for an instruction permit, making it one of the youngest permit ages in the United States. Permit holders between 14 and 15 must always be accompanied by a licensed driver who is at least 21 years old. A restricted (provisional) license becomes available at age 16, and a full unrestricted license is available at age 18.",
    },
    {
      question:
        "What is the blood alcohol concentration (BAC) limit for a driver under 21 years old in Alaska?",
      options: ["0.02%", "0.04%", "0.08%", "0.00%"],
      correctIndex: 3,
      explanation:
        "Alaska enforces a strict zero-tolerance policy for drivers under 21: the legal BAC limit is 0.00%, meaning any detectable amount of alcohol is a violation. For adult drivers 21 and older, the legal limit is 0.08%. Alaska's DUI laws include mandatory license revocation for first-time offenders and the potential requirement to install an ignition interlock device.",
    },
    {
      question:
        "What should you be aware of when driving in ice fog conditions in Interior Alaska?",
      options: [
        "Ice fog only affects pedestrians, not drivers",
        "Ice fog reduces visibility to near zero and requires reduced speed and low-beam headlights",
        "Ice fog is only dangerous for motorcyclists",
        "Ice fog dissipates immediately when you turn on your high beams",
      ],
      correctIndex: 1,
      explanation:
        "Ice fog forms in Interior Alaska communities such as Fairbanks when temperatures drop below -20°F. Exhaust from vehicles and buildings freezes instantly and lingers at road level, creating near-zero visibility conditions. Drivers should reduce speed significantly, use low-beam headlights (high beams reflect off the ice crystals and make visibility worse), and increase following distance. Ice fog can persist for days during prolonged cold snaps.",
    },
    {
      question:
        "The Dalton Highway (AK-11) is notable for what driving challenge that no other U.S. highway presents?",
      options: [
        "It has the highest speed limit in the nation",
        "It has no services for 240 miles between Coldfoot and Deadhorse",
        "It is entirely unpaved",
        "It is closed to private vehicles year-round",
      ],
      correctIndex: 1,
      explanation:
        "The Dalton Highway stretches 414 miles to Prudhoe Bay on the Arctic Ocean and has a 240-mile gap with absolutely no fuel, food, or emergency services between Coldfoot and Deadhorse. Drivers must carry extra fuel, food, water, a spare tire, and emergency supplies. Portions of the highway are also gravel-surfaced, creating additional hazards from flying rocks. Commercial trucks have legal priority on this road.",
    },
    {
      question:
        "Which organization provides vehicle transport between Alaska communities not connected by road?",
      options: [
        "Alaska Department of Transportation ferry",
        "Alaska Marine Highway System",
        "Alaska Regional Transport Authority",
        "Alaska State Road Service",
      ],
      correctIndex: 1,
      explanation:
        "The Alaska Marine Highway System (AMHS) is a state-operated ferry network that transports vehicles, passengers, and cargo between communities that are not connected to the main road network. Communities served include Juneau (the state capital, which has no road connection to the rest of the highway system), Ketchikan, Sitka, and many Southeast Alaska communities. Drivers using the AMHS must follow specific vehicle loading and safety procedures.",
    },
    {
      question:
        "At -40°F, which of the following correctly describes what happens to a vehicle battery?",
      options: [
        "Battery capacity increases due to cold compression",
        "Battery capacity drops by approximately 60%",
        "Battery capacity is unaffected if the battery is new",
        "Battery capacity drops by 10%",
      ],
      correctIndex: 1,
      explanation:
        "At -40°F, a vehicle battery can lose approximately 60% of its rated capacity. This severe reduction means a battery that starts a vehicle easily in mild weather may be completely unable to start it in extreme cold. Alaska drivers routinely use block heaters (engine heaters plugged into standard electrical outlets) to keep the engine warm overnight, which dramatically reduces the cranking load on the battery in the morning.",
    },
    {
      question:
        "In extreme cold, what happens to diesel fuel that can disable a diesel vehicle?",
      options: [
        "Diesel fuel ignites more easily, causing engine fires",
        "Diesel fuel evaporates quickly from the tank",
        "Diesel fuel gels or waxes, clogging fuel lines and filters",
        "Diesel fuel freezes solid in the fuel injectors",
      ],
      correctIndex: 2,
      explanation:
        "At very low temperatures, diesel fuel can gel or wax — the paraffin molecules in diesel begin to solidify and form a gel-like consistency that clogs fuel filters and fuel lines, preventing the engine from running. Alaska diesel vehicle operators use winter-blend diesel fuel (which has a lower gel point), fuel additives, and fuel tank heaters to prevent gelling. This is a critical operational concern for all diesel-powered vehicles in Alaska's winters.",
    },
    {
      question:
        "When should an Alaska driver use a vehicle block heater?",
      options: [
        "Only when the temperature is below -40°F",
        "Only in diesel-powered vehicles",
        "In cold weather conditions to ensure reliable engine starting and reduce battery strain",
        "Block heaters are not legal for personal vehicle use in Alaska",
      ],
      correctIndex: 2,
      explanation:
        "Block heaters are standard equipment in Alaska and are used in cold weather to keep engine oil and coolant warm overnight, making starting far more reliable and reducing wear on the engine. They also significantly reduce the drain on the battery during starting. Most Alaska homes, parking lots, and public facilities have electrical outlets (often called 'plug-in parking') specifically for block heaters. They are used in both gasoline and diesel vehicles.",
    },
  ],
  faqs: [
    {
      question: "What is the Alaska DMV knowledge test format?",
      answer:
        "The Alaska Division of Motor Vehicles administers a 20-question multiple-choice knowledge test. You must correctly answer at least 16 questions — an 80% passing score — to pass. The test is based on the Alaska Driver Manual and covers traffic laws, road signs, safe driving practices, and Alaska-specific hazards. If you fail, you may retake the test after a waiting period.",
    },
    {
      question: "What agency administers driver licensing in Alaska?",
      answer:
        "The Alaska Division of Motor Vehicles (DMV), part of the Department of Administration, administers all driver licensing in Alaska. DMV offices are located in Anchorage, Fairbanks, Juneau, and other communities throughout the state. Because many Alaska communities lack a nearby DMV office, some services are available online or by mail.",
    },
    {
      question: "What are the graduated licensing stages in Alaska?",
      answer:
        "Alaska's Graduated Driver License (GDL) system has three stages. First, an instruction permit is available at age 14, requiring a licensed driver 21 or older in the vehicle at all times. Second, a provisional (restricted) license is available at age 16 after holding the permit for at least 6 months and completing required supervised driving hours. Third, a full unrestricted license is available at age 18. The provisional license includes restrictions on nighttime driving and passengers.",
    },
    {
      question: "Are studded snow tires legal year-round in Alaska?",
      answer:
        "No. Alaska permits studded snow tires only between September 16 and April 30. This is the longest permitted season of any U.S. state, reflecting Alaska's extended winter conditions. Using studded tires outside this permitted window is a traffic violation. Studded tires provide significant traction improvement on ice but cause increased road wear, which is why the season is regulated.",
    },
    {
      question: "What should I do if I encounter a moose on the road at night?",
      answer:
        "Slow down and stop if possible. Never rely on seeing eye-shine from a moose, because moose eyes are above headlight beam height and do not reflect headlights. Watch both sides of the road because moose often travel in pairs or with calves. If a moose is in the road, wait for it to move — do not try to drive around it in darkness. Honk your horn to encourage the moose to move, but do not accelerate past it. Alaska has more moose-vehicle collisions than any other state, and impacts are almost always catastrophic for the vehicle.",
    },
    {
      question: "What is the DUI/BAC law in Alaska?",
      answer:
        "In Alaska, a blood alcohol concentration (BAC) of 0.08% or higher is a DUI offense for adults 21 and older. For drivers under 21, Alaska enforces zero tolerance — a BAC of 0.00% is the legal limit, meaning any detectable alcohol is a violation. Commercial vehicle drivers face a 0.04% BAC limit. Alaska DUI penalties include mandatory license revocation, fines, possible jail time, and for repeat offenders, mandatory ignition interlock device installation.",
    },
    {
      question: "How does driving on the Dalton Highway differ from other Alaska roads?",
      answer:
        "The Dalton Highway (AK-11) is 414 miles long and runs to Prudhoe Bay on the Arctic Ocean. Approximately 166 miles of the road are gravel-surfaced, requiring slower speeds to avoid windshield damage from flying rocks. There are no services for 240 miles between Coldfoot and Deadhorse, so drivers must carry extra fuel, food, water, and emergency supplies. Commercial trucks have operational priority on the road. The highway is open to the public but is considered a serious backcountry route requiring full preparation.",
    },
    {
      question: "What causes ice fog and how should drivers respond?",
      answer:
        "Ice fog forms when temperatures drop below approximately -20°F and moisture from vehicle exhaust, breathing, and other sources freezes instantly in the air. In Interior Alaska cities like Fairbanks, ice fog can accumulate and create near-zero visibility at road level. Drivers should use low-beam headlights (not high beams, which reflect back off the ice crystals), reduce speed to match visibility, increase following distance significantly, and avoid driving if conditions are severe. Ice fog is distinct from regular fog and can persist for multiple days.",
    },
    {
      question: "Does Alaska have a hands-free cell phone law?",
      answer:
        "Alaska does not have a statewide hands-free law that bans all handheld device use while driving for all drivers as of the most recent Alaska DMV manual update. However, texting while driving is prohibited under Alaska Statute 28.35.161. Some local jurisdictions may have additional ordinances. Drivers are strongly encouraged to avoid all manual interaction with mobile devices while driving regardless of specific law, as distracted driving significantly increases crash risk.",
    },
    {
      question: "What special supplies should Alaska drivers carry in winter?",
      answer:
        "Alaska's Division of Motor Vehicles and state emergency management agencies recommend that drivers — especially those traveling outside urban areas — carry a winter survival kit. This should include a sleeping bag or heavy blankets, extra food and water, a flashlight, jumper cables or a jump starter, a tow rope, a shovel, sand or kitty litter for traction, first aid supplies, extra fuel, and flares or emergency signals. On routes like the Dalton Highway or remote highways between towns, these supplies can be life-saving if a vehicle breaks down in extreme cold.",
    },
  ],
  relatedTests: [
    { label: "Alaska Motorcycle Practice Test", href: "/alaska-motorcycle-practice-test" },
    { label: "Alaska CDL Practice Test", href: "/alaska-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function AlaskaDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
