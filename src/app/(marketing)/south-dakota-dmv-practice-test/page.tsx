import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "South Dakota DMV Practice Test 2025 – Free SD Driver's License Exam Prep",
  description:
    "Prepare for your South Dakota DMV knowledge test with free practice questions covering Needles Highway tunnel clearances, 80 mph interstate limits, open range laws, Sturgis Rally traffic, and SD-specific driving rules. 25 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/south-dakota-dmv-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/south-dakota-dmv-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const data: PracticeTestPageProps = {
  state: "South Dakota",
  stateAbbr: "SD",
  testLabel: "DMV Practice Test",
  slug: "south-dakota-dmv-practice-test",
  headline: "South Dakota DMV Practice Test 2025",
  intro:
    "The Division of Motor Vehicles (DMV), South Dakota Department of Public Safety, administers a 25-question knowledge test. You must answer at least 20 questions correctly (80%) to pass. This free practice test covers South Dakota-specific topics including Needles Highway tunnel clearances, the 80 mph rural interstate speed limit, open range livestock laws, Sturgis Rally traffic management, and Iron Mountain Road restrictions.",
  basedOn: "South Dakota Driver's License Manual (Department of Public Safety)",
  keyRules: [
    {
      icon: "⛰️",
      rule: "Needles Highway: No RVs, Buses, or Large Vehicles",
      detail:
        "SD-87 (Needles Highway) in Custer State Park has tunnels as low as 8'4\" tall and 8'9\" wide. RVs, buses, and any vehicle exceeding these dimensions CANNOT use the Needles Highway. Drivers must check their vehicle's height and width before entering. Attempting to enter with an oversized vehicle can result in the vehicle being stuck in a tunnel.",
    },
    {
      icon: "🚗",
      rule: "80 MPH Rural Interstate Speed Limit",
      detail:
        "South Dakota's rural Interstate highways (I-90 and I-29) have an 80 mph speed limit — one of the highest in the continental United States. This limit applies only in ideal conditions. Always adjust speed for weather, traffic, and road conditions, which in South Dakota can change rapidly.",
    },
    {
      icon: "🐄",
      rule: "Open Range: Livestock on Roads",
      detail:
        "Most of western South Dakota (and significant portions of central SD) is open range. Livestock owners are not legally required to fence cattle and horses away from public roads. If you strike livestock in an open range area, the driver may bear financial liability. Scan rural roads constantly for animals, especially at night.",
    },
    {
      icon: "🏍️",
      rule: "Sturgis Rally: Temporary Traffic Regulations",
      detail:
        "The Sturgis Motorcycle Rally (held annually in August in Meade County) brings 500,000–750,000 riders and spectators. Temporary traffic rules, officer-controlled intersections, and specific parking regulations apply throughout Sturgis and surrounding communities. Follow all officer and signage directions during the rally period.",
    },
    {
      icon: "🧒",
      rule: "Permit Age: 14 Years Old",
      detail:
        "South Dakota issues instruction permits at age 14, one of the youngest ages in the nation. Permit holders between 14 and 16 must be accompanied by a licensed driver at least 18 years old. A restricted license is available at 16 after meeting GDL requirements, and a full license is available at 16 years and 6 months.",
    },
    {
      icon: "🍺",
      rule: "DUI: 0.08% Adults, 0.02% Under-21",
      detail:
        "South Dakota's DUI threshold is 0.08% BAC for adults and 0.02% for drivers under 21. South Dakota uses 'DUI' terminology. Implied consent applies — refusing a chemical test results in automatic license revocation. South Dakota has administrative revocation for DUI arrest even before conviction.",
    },
    {
      icon: "🏔️",
      rule: "Iron Mountain Road: 12'4\" Height Limit",
      detail:
        "US-16A (Iron Mountain Road) near Mount Rushmore has rock tunnel clearances of 12'4\" — no vehicles taller than 12'4\" may use this route. Pigtail bridges on this road also restrict long vehicles. Check all vehicle dimensions before approaching the Mount Rushmore area.",
    },
    {
      icon: "🦬",
      rule: "Badlands and Wildlife on Road",
      detail:
        "South Dakota's Badlands (SD-240) and Black Hills parks have prairie dogs, bison, pronghorn, and other wildlife on roadways. Never accelerate to pass wildlife on a park road — animals are unpredictable, and a bison weighing 2,000 lbs can destroy a vehicle. Park speed limits are strictly enforced.",
    },
  ],
  about: [
    "The Division of Motor Vehicles (DMV), within the South Dakota Department of Public Safety, administers all driver licensing and testing in South Dakota. The knowledge test consists of 25 multiple-choice questions drawn from the South Dakota Driver's License Manual, covering traffic laws, road signs, and the unique driving conditions of the Mount Rushmore State. A passing score of 80% — 20 correct answers out of 25 — is required. Like neighboring North Dakota, South Dakota issues instruction permits at age 14, reflecting the state's agricultural and rural heritage.",
    "South Dakota's most distinctive and consistently tested vehicle restriction is the Needles Highway (SD-87) in Custer State Park. The famous scenic route features granite needle rock formations and, critically, tunnels with clearances as low as 8'4\" tall and 8'9\" wide. RVs, buses, and any vehicle exceeding these dimensions absolutely cannot use the Needles Highway. This restriction is not always prominently marked at the highway's entrance points, meaning drivers must proactively check their vehicle dimensions. A related restriction exists on US-16A (Iron Mountain Road) near Mount Rushmore, where Pigtail Bridges and rock tunnels limit vehicle height to 12'4\" — again, requiring advance planning for any large vehicle.",
    "Western South Dakota presents open range conditions across most of the region, requiring drivers to remain vigilant for livestock at all times. The state's rural Interstate highways — I-90 (crossing the state east to west) and I-29 (along the eastern border) — have an 80 mph speed limit, one of the highest in the continental United States. Every August, the Sturgis Motorcycle Rally transforms Meade County and the Black Hills region into one of the world's largest temporary gatherings, with 500,000 to 750,000 motorcyclists and visitors creating temporary traffic management protocols that all drivers in the region must follow. South Dakota's Badlands National Park (SD-240), Mount Rushmore National Memorial (US-16A), and Custer State Park (SD-87) each have specific vehicle and wildlife rules that drivers must know before entering.",
  ],
  sampleQuestions: [
    {
      question:
        "What is the minimum vehicle clearance required to legally drive through the tunnels on South Dakota's Needles Highway (SD-87) in Custer State Park?",
      options: [
        "Height: 11'6\", Width: 10'0\"",
        "Height: 8'4\", Width: 8'9\"",
        "Height: 12'4\", Width: 9'0\"",
        "Height: 9'8\", Width: 9'4\"",
      ],
      correctIndex: 1,
      explanation:
        "The Needles Highway (SD-87) has tunnels with minimum clearances of 8'4\" in height and 8'9\" in width — the smallest road tunnels on a major U.S. scenic highway. RVs, buses, box trucks, trailers, and any vehicle exceeding these dimensions are prohibited from using the Needles Highway. Motorcycles and standard passenger vehicles can typically navigate these tunnels. Drivers who attempt to enter with an oversized vehicle risk becoming stuck inside the tunnel, causing a major traffic disruption in a location with extremely limited emergency access.",
    },
    {
      question:
        "What is the maximum rural interstate speed limit on South Dakota's I-90 and I-29?",
      options: ["70 mph", "75 mph", "80 mph", "65 mph"],
      correctIndex: 2,
      explanation:
        "South Dakota's rural Interstate highways — I-90 (crossing the state east to west, passing through Rapid City, the Badlands, and Sioux Falls) and I-29 (running north-south along the Minnesota border) — have an 80 mph speed limit. This is one of the highest rural Interstate speed limits in the continental United States. As always, the posted limit is a maximum in ideal conditions — South Dakota's spring blizzards, summer thunderstorms, and fall fog can require driving well below 80 mph to maintain safety.",
    },
    {
      question:
        "During the annual Sturgis Motorcycle Rally in August, traffic management in and around Sturgis, South Dakota includes:",
      options: [
        "No special rules — normal traffic laws apply during the rally",
        "Temporary traffic rules, officer-controlled intersections, and specific parking regulations throughout Sturgis and surrounding communities",
        "Mandatory detour routes for non-motorcycle vehicles only",
        "Speed limit increases on US-14 through Sturgis to accommodate increased traffic volume",
      ],
      correctIndex: 1,
      explanation:
        "The Sturgis Motorcycle Rally, held annually in August in Meade County, is one of the world's largest motorcycle rallies, attracting 500,000–750,000 attendees. During the rally, law enforcement implements temporary traffic management including officer-controlled intersections (where officer hand signals override normal traffic signals), temporary no-parking zones, alternate routing instructions, and special parking regulations in Sturgis and surrounding Black Hills communities. All drivers — not just motorcyclists — must follow these temporary instructions, which supersede normal traffic rules.",
    },
    {
      question:
        "In western South Dakota's open range territory, a driver strikes a steer that walked onto US-16 at night. What does South Dakota's open range law say about liability?",
      options: [
        "The rancher is always liable for cattle on public roads",
        "Liability is split 50/50 between the driver and rancher under comparative fault",
        "In open range areas, the driver may bear financial liability — ranchers are not required to fence livestock away from roads",
        "The South Dakota Department of Transportation compensates drivers who hit livestock on state highways",
      ],
      correctIndex: 2,
      explanation:
        "Most of western South Dakota is open range territory, where livestock owners have no legal obligation to fence animals away from public roads. When a driver strikes livestock in an open range area, the driver may bear the financial liability for damage to the animal — not the rancher. This makes vigilant scanning for cattle, horses, and other livestock on rural roads absolutely critical, especially at night. Cattle have dark coats and low eye placement, making them difficult to see in headlights until very close.",
    },
    {
      question:
        "US-16A (Iron Mountain Road) near Mount Rushmore has what maximum vehicle height restriction due to rock tunnel clearances?",
      options: ["8'4\"", "10'6\"", "12'4\"", "14'0\""],
      correctIndex: 2,
      explanation:
        "Iron Mountain Road (US-16A) near Mount Rushmore has rock tunnel clearances that limit vehicles to a maximum height of 12'4\". The road also features Pigtail Bridges (spiral wooden bridges that gain elevation in a small horizontal distance) that restrict long vehicles. Any vehicle taller than 12'4\" — including many RVs, box trucks, and vans with roof accessories — is prohibited from this route. Drivers approaching the Mount Rushmore area should verify their vehicle's height before choosing a route through the Black Hills.",
    },
    {
      question:
        "What is the minimum age to obtain an instruction permit in South Dakota?",
      options: ["15 years old", "15½ years old", "16 years old", "14 years old"],
      correctIndex: 3,
      explanation:
        "South Dakota issues instruction permits at age 14 — one of the youngest permit ages in the United States. Permit holders between 14 and 15 must be accompanied by a parent, guardian, or licensed driver who is at least 18 years old. This young permit age reflects South Dakota's agricultural heritage, where young people have operated farm equipment for generations. A restricted license becomes available at 16 after meeting all GDL requirements, and a full unrestricted license is available at 16½.",
    },
    {
      question:
        "While driving on SD-240 (Badlands Loop Road), you see a small herd of bison on the road ahead. What is the correct action?",
      options: [
        "Sound your horn repeatedly to move the bison off the road",
        "Drive slowly and carefully through the herd — bison generally ignore vehicles",
        "Stop and wait for the bison to move — never try to pass through or around wildlife on park roads",
        "Turn around immediately and exit the park by a different route",
      ],
      correctIndex: 2,
      explanation:
        "Bison and other large wildlife encountered on Badlands Loop Road (SD-240) and other Black Hills and Badlands park roads must be treated with extreme caution. The correct response is to stop and wait for the animals to move on their own. Never sound your horn repeatedly (which can provoke aggressive behavior) and never try to drive through a bison herd. A bison can weigh up to 2,000 pounds and can charge a vehicle if provoked. Park roads have strictly enforced low speed limits, and wildlife encounters are a known and expected part of the driving experience.",
    },
    {
      question:
        "What is the DUI blood alcohol concentration (BAC) limit for a driver under 21 in South Dakota?",
      options: ["0.00%", "0.02%", "0.04%", "0.08%"],
      correctIndex: 1,
      explanation:
        "South Dakota enforces a 0.02% BAC limit for drivers under 21 — effectively prohibiting any meaningful alcohol consumption before driving. This near-zero tolerance policy means that a single standard drink can result in a DUI charge for an underage driver. For adult drivers 21 and older, the standard 0.08% threshold applies. South Dakota's implied consent law means that refusing a chemical test triggers automatic license revocation separate from criminal DUI charges.",
    },
    {
      question:
        "You are driving a standard passenger vehicle and want to drive the Needles Highway (SD-87). Which vehicle would be prohibited from using this road?",
      options: [
        "A standard four-door sedan with a rooftop cargo carrier adding 4 inches of height",
        "A Honda Gold Wing motorcycle",
        "A 30-foot Class A motorhome (RV)",
        "A compact SUV with factory roof rails",
      ],
      correctIndex: 2,
      explanation:
        "A 30-foot Class A motorhome is definitively prohibited from the Needles Highway because its height (typically 12–13+ feet) far exceeds the 8'4\" tunnel clearance, and its length would make navigating the tight switchbacks impossible. Standard motorcycles, sedans, and compact SUVs can typically navigate the Needles Highway. A rooftop cargo carrier adding a small amount of height may potentially approach the limit — drivers should carefully measure total vehicle height before entering. When in doubt, use an alternate route.",
    },
    {
      question:
        "South Dakota's Badlands National Park is located primarily along which state route?",
      options: ["SD-44", "SD-240", "SD-87", "US-16A"],
      correctIndex: 1,
      explanation:
        "SD-240 (Badlands Loop Road) is the primary scenic road through Badlands National Park, running approximately 30 miles through the eroded butte formations of the South Dakota Badlands. The road has unique driving characteristics: dust can reduce visibility, many sections have no guardrails, and prairie dogs create burrow hazards at road edges. Wildlife including prairie dogs, pronghorn, bighorn sheep, and bison are commonly encountered on the road. Speed limits in the park are strictly enforced and are lower than South Dakota's rural highway limits.",
    },
  ],
  faqs: [
    {
      question: "What agency administers driver licensing in South Dakota?",
      answer:
        "The Division of Motor Vehicles (DMV), within the South Dakota Department of Public Safety, administers all driver licensing, knowledge testing, and skills testing in South Dakota. Driver's license exam stations are located at Highway Patrol offices throughout the state. The Department of Public Safety also oversees the Highway Patrol, which enforces traffic laws on South Dakota's roads.",
    },
    {
      question: "What is the South Dakota DMV knowledge test format?",
      answer:
        "The South Dakota knowledge test consists of 25 multiple-choice questions drawn from the South Dakota Driver's License Manual. A passing score of 80% — at least 20 correct answers — is required. The test covers South Dakota traffic laws, road signs, and state-specific driving rules. If you fail, a waiting period applies before you can retake the test. The manual is available online from the South Dakota Department of Public Safety.",
    },
    {
      question: "Why can't RVs and large vehicles use the Needles Highway?",
      answer:
        "The Needles Highway (SD-87) in Custer State Park was carved through the famous Needles granite rock formations in the 1920s, creating a scenic route with tunnels as low as 8'4\" in height and 8'9\" in width. These dimensions are far too small for RVs (typically 10–13+ feet tall), buses, box trucks, and most towed trailers. There are no alternative routes once you are inside the tunnel sections — a vehicle that is stuck in a Needles Highway tunnel cannot back out easily due to the curves. Drivers of any large vehicle must use alternate routes through the Black Hills.",
    },
    {
      question: "What are the graduated driver licensing stages in South Dakota?",
      answer:
        "South Dakota's GDL program begins with an instruction permit at age 14 (one of the youngest in the nation). Permit holders must be accompanied by a licensed driver at least 18 years old. A restricted license (Stage 2) is available at 16 after holding the permit for 6 months and completing required supervised driving hours. Stage 2 restricts nighttime driving (no driving between midnight and 6 AM for the first 6 months) and limits passengers. A full unrestricted license (Stage 3) is available at 16 years and 6 months.",
    },
    {
      question: "What driving rules apply during the Sturgis Motorcycle Rally?",
      answer:
        "During the annual Sturgis Motorcycle Rally (typically the first full week of August), all drivers in Sturgis and surrounding communities in the Black Hills must follow temporary traffic management rules. These include officer-controlled intersections where hand signals from law enforcement officers override traffic signals, no-parking zones on rally routes, temporary one-way streets in Sturgis proper, and alternate routing suggestions. The South Dakota Highway Patrol and local police departments coordinate rally traffic management. Even non-motorcycle drivers visiting the area must be prepared for extremely high traffic volumes and follow all temporary instructions.",
    },
    {
      question: "What are South Dakota's open range laws and how do they affect drivers?",
      answer:
        "Open range law applies to most of western South Dakota and significant portions of central and eastern South Dakota outside of cities and towns. Under open range law, ranchers and farmers are not legally required to fence their livestock away from public roads. If a driver strikes cattle, horses, or other livestock on a road in an open range area, the driver may bear financial liability for injury to the animal. This makes scanning for livestock on rural roads — especially at night — a life-safety practice. Cattle in particular are very difficult to see at night as they have dark coats and relatively low-positioned eyes.",
    },
    {
      question: "What is South Dakota's DUI law and penalties?",
      answer:
        "South Dakota's DUI law sets the BAC threshold at 0.08% for adults 21 and older and 0.02% for drivers under 21. South Dakota uses 'DUI' (Driving Under the Influence) terminology. First DUI offense penalties include mandatory license revocation (30 days or more), a fine of at least $1,000, mandatory DUI program completion, and possible jail time of up to one year. South Dakota's implied consent law means refusing a chemical test triggers immediate license revocation — separate from any criminal DUI charge.",
    },
    {
      question: "What height restrictions apply to Iron Mountain Road (US-16A)?",
      answer:
        "Iron Mountain Road (US-16A) near Mount Rushmore has rock tunnel clearances that restrict vehicles to a maximum height of 12'4\". The road also features three Pigtail Bridges — wooden spiral bridges that restrict vehicle length due to their tight curves. RVs, buses, and trucks that exceed 12'4\" in height cannot use Iron Mountain Road. Drivers in any large vehicle approaching the Mount Rushmore area should check their vehicle dimensions and plan alternate routes (typically US-16 or SD-244) if their vehicle exceeds the height limit.",
    },
    {
      question: "Can motorcycles legally drive through the Needles Highway tunnels?",
      answer:
        "Yes — motorcycles are among the vehicles for which the Needles Highway was essentially designed. The tunnels' 8'4\" height and 8'9\" width clearances are not a problem for standard motorcycles. In fact, the Needles Highway is one of South Dakota's most famous motorcycle destinations. During the Sturgis Rally in August, the Needles Highway sees very high motorcycle traffic. Motorcycle riders should still be aware of the tight switchbacks, limited guardrails, and blind curves on the route.",
    },
    {
      question: "What should I know about driving in Badlands National Park?",
      answer:
        "Driving on SD-240 (Badlands Loop Road) through Badlands National Park requires awareness of several unique hazards. The road has sections with no guardrails adjacent to steep drop-offs into eroded butte formations. Dust kicked up by wind or passing vehicles can suddenly reduce visibility. Prairie dog colonies create burrow hazards at road edges — driving over prairie dog towns can damage tires. Wildlife including bison, pronghorn, bighorn sheep, and prairie dogs frequently cross the road. Speed limits within the park are strictly enforced. Fuel is not available inside the park, so fill up in Interior, Wall, or other surrounding towns before entering.",
    },
  ],
  relatedTests: [
    { label: "South Dakota Motorcycle Practice Test", href: "/south-dakota-motorcycle-practice-test" },
    { label: "South Dakota CDL Practice Test", href: "/south-dakota-cdl-practice-test" },
    { label: "Motorcycle Practice Test", href: "/motorcycle-practice-test" },
    { label: "CDL Practice Test", href: "/cdl-practice-test" },
    { label: "All State Tests", href: "/states" },
  ],
};

export default function SouthDakotaDmvPracticeTestPage() {
  return <PracticeTestPage {...data} />;
}
