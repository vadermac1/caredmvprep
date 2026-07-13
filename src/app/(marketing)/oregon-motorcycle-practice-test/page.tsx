import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Oregon Motorcycle Practice Test 2025 – Free OR ODOT Class M Endorsement Exam Prep",
  description:
    "Free Oregon motorcycle endorsement practice test. 25 questions, 80% passing. Universal helmet law ALL riders, Oregon's Basic Speed Rule applies to motorcycle riders, no per se cannabis DUI limit, studded tire prohibition on motorcycles, and HB 2597 hands-free for riders.",
  alternates: { canonical: "https://caredmvprep.com/oregon-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/oregon-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Oregon",
  stateAbbr: "OR",
  testLabel: "Motorcycle Endorsement Test",
  slug: "oregon-motorcycle-practice-test",
  headline: "Oregon Motorcycle Endorsement Practice Test 2025",
  intro:
    "Oregon DMV (ODOT) issues a motorcycle endorsement (Class M) for your Oregon driver license. The 25-question test requires 80% (20/25) to pass. Oregon has a universal helmet law for all riders. Oregon's Basic Speed Rule (ORS 811.100) applies to motorcyclists and can result in a citation even below the posted limit. Oregon's cannabis DUI law uses an impairment standard without a per se THC level.",
  basedOn: "Oregon DMV Motorcycle Operator Manual (current ODOT edition)",
  about: [
    "Oregon's motorcycle endorsement is issued by Oregon DMV (part of ODOT). Team Oregon is the only approved motorcycle rider education provider in the state, and which course you complete determines what gets waived: the Basic Course (16+) waives BOTH the knowledge and skills tests; the Intermediate Course (21+), the Basic Online Classroom (16+), and the Intermediate Online Classroom (21+) each waive the skills test only, so the knowledge test is still required. Oregon DMV does not administer a motorcycle skills test directly — the skills test is only satisfied through an approved Team Oregon course. Oregon has a universal helmet law (ORS 814.280): all motorcycle operators and passengers must wear an Oregon-approved motorcycle helmet (which meets DOT standards). Oregon's Basic Speed Rule (ORS 811.100) — which allows citation for driving too fast for conditions even below the posted limit — applies equally to motorcycle operators. On Oregon's winding mountain roads, coastal fog routes, and rain-slickened pavement, the Basic Speed Rule has real practical consequences for riders who travel at posted limits in hazardous conditions.",
    "Oregon's cannabis DUI law (ORS 813.010) applies to motorcycle operators without a per se THC blood concentration limit — impairment is assessed by officer observation. This makes Oregon unique compared to Washington (5 ng/mL THC) and Colorado (5 ng/mL THC). Oregon's Coast Range, Cascade Mountains, and High Desert regions each offer dramatically different riding environments: coastal fog and wet pavement on US 101; mountain chain control requirements on Cascades passes; and dry, high-speed desert roads in eastern Oregon. Oregon DMV also issues motorcycle permits (for riders practicing before endorsement) with specific restrictions. Studded tires — permitted in Oregon from November 1 through March 31 — are generally not used on motorcycles (motorcycle tires are not designed for studs), but the seasonal restrictions are relevant for riders to know when roads may have loosened studs shed from other vehicles.",
  ],
  sampleQuestions: [
    {
      question: "Oregon's Basic Speed Rule (ORS 811.100) can result in a citation for a motorcycle rider who is traveling below the posted speed limit. Under what condition?",
      options: [
        "Never — if a rider is below the posted limit, they cannot be cited under Oregon law",
        "When the rider is going exactly at the posted limit — Oregon's Basic Speed Rule applies only at the exact posted speed",
        "When the rider's speed is greater than 'reasonable and prudent' for actual road, weather, and traffic conditions — regardless of the posted limit",
        "Only in construction zones — the Basic Speed Rule has no authority on standard Oregon highways",
      ],
      correctIndex: 2,
      explanation:
        "Oregon's Basic Speed Rule (ORS 811.100) requires all operators, including motorcyclists, to travel at a speed that is 'reasonable and prudent' for actual conditions — even if below the posted limit. Riding at 55 mph on an ice-covered Oregon mountain road posted at 55 mph can result in a Basic Speed Rule citation because 55 mph was not safe for conditions. This rule is particularly relevant for Oregon motorcyclists on: the Coast Range (US 101 coastal fog, rain), Cascade passes (rain, ice, snow), and Columbia River Gorge routes (crosswinds, wet pavement, gravel sections).",
    },
    {
      question: "Oregon's cannabis DUI law for motorcycle operators differs from Washington and Colorado because:",
      options: [
        "Oregon does not criminalize cannabis DUI for motorcycle operators — only alcohol DUI applies",
        "Oregon uses a per se limit of 2 ng/mL THC — stricter than Washington's 5 ng/mL",
        "Oregon has no per se THC limit — cannabis impairment is evaluated by officer observation and field sobriety tests, not a specific blood THC concentration",
        "Oregon only charges cannabis DUI if the motorcycle crashes — impairment while riding without a crash is not illegal",
      ],
      correctIndex: 2,
      explanation:
        "Oregon's DUII law (ORS 813.010) includes cannabis impairment but does not set a specific THC blood concentration threshold. Unlike Washington and Colorado (5 ng/mL per se limit), Oregon evaluates cannabis impairment through officer observation: field sobriety tests, physical indicators (red eyes, dilated pupils, slowed speech), riding behavior, and Drug Recognition Expert (DRE) evaluation when available. This approach is designed to address actual impairment rather than residual THC that may remain in the blood days after impairment has resolved. Oregon cannabis DUI for a motorcycle operator carries the same consequences as alcohol DUII.",
    },
    {
      question: "Oregon's universal helmet law requires motorcycle helmets for which riders?",
      options: [
        "Riders under 18 only",
        "Riders under 21",
        "All riders and passengers of any age",
        "Only permit holders",
      ],
      correctIndex: 2,
      explanation:
        "ORS 814.280 requires all motorcycle operators and passengers to wear an Oregon-approved motorcycle helmet — regardless of age or endorsement status. Oregon's universal helmet law has been in effect for decades. The helmet must be Oregon-approved (meets DOT standards plus Oregon specifications). Eye protection — an approved face shield, goggles, or safety glasses — is also required unless the motorcycle has a windscreen. Oregon's enforcement of helmet requirements is active, and uncertified novelty helmets do not satisfy the legal requirement.",
    },
    {
      question: "An Oregon motorcyclist is riding the Columbia River Gorge route (US 30) in high crosswinds. What is the appropriate technique?",
      options: [
        "Grip the handlebars tightly and lean sharply into the wind at all times",
        "Reduce speed, maintain a relaxed but firm grip, lean slightly into the wind, and be prepared for wind gusts from the narrow gorge sections",
        "Use maximum speed through the gorge — speed creates gyroscopic stability that reduces crosswind effects",
        "Stop immediately if any crosswind is felt — Oregon law requires motorcycle riders to pull over in crosswind conditions",
      ],
      correctIndex: 1,
      explanation:
        "The Columbia River Gorge is one of Oregon's premier motorcycle routes but also one of the windiest — the gorge funnels wind from the plateau through a narrow corridor, creating variable and sometimes powerful gusts. The correct technique: reduce speed to improve handling response; maintain a relaxed but firm grip (death grip prevents natural adjustment); lean slightly into sustained wind; be prepared for sudden gusts from side canyons and bridge crossings; stay centered in the lane with extra margin. The gorge also has wet sections from waterfall mist and spray — look for darkened pavement as a traction warning.",
    },
    {
      question: "Oregon's Cascade mountain passes may have ODOT chain control requirements. Do these requirements apply to motorcyclists?",
      options: [
        "No — motorcycles are exempt from ODOT chain control requirements",
        "Yes — if chain control requires chains, motorcycles that cannot be chained must wait at the chain control station until conditions improve or the restriction lifts",
        "Only 'Chains Required' orders apply to motorcycles — 'Traction Advisory' orders are motorcycle-optional",
        "Motorcycles are banned from all Oregon Cascade mountain passes from November 1 through March 31",
      ],
      correctIndex: 1,
      explanation:
        "ODOT chain control requirements (Chains Required) on Oregon Cascade passes apply to all vehicles including motorcycles. Since motorcycle tires cannot be fitted with traditional tire chains, a motorcycle that encounters an active 'Chains Required' order that it cannot satisfy must wait at the chain control station for the order to be lifted or conditions to improve enough for ODOT to change the requirement. Oregon motorcycle riders planning mountain routes in fall and winter should monitor ODOT TripCheck (tripcheck.com) for chain control status before departing. The Santiam Pass (US 20), McKenzie Pass (OR 242), and Crater Lake Highway are Oregon passes most likely to have chain control.",
    },
    {
      question: "On Oregon's coastal routes (US 101), what is the primary traction hazard for motorcycle riders during autumn?",
      options: [
        "Sand from beach access roads blown onto US 101 — reduces tire grip on curves",
        "Sea spray from Pacific storms that deposits salt on the pavement",
        "Wet fallen leaves on shaded sections of US 101 — fall leaf debris becomes extremely slippery when wet",
        "Coastal fog that deposits moisture on metal bridge surfaces",
      ],
      correctIndex: 0,
      explanation:
        "Sand blown from beach access roads and beaches onto US 101 near Oregon's coast is a genuine traction hazard — particularly on curves where sand concentrates on the outside of the turn from previous traffic. Sand patches on motorcycle tires cause immediate traction reduction. Oregon's coastal sections also have: wet pavement from precipitation and sea spray; shaded sections that stay damp long after rain stops; occasional gravel on road shoulders from erosion. Riders on US 101 should reduce speed through beach access areas and look for sand drifts on curves. Fallen wet leaves in autumn are a secondary concern on wooded inland sections of coastal routes.",
    },
    {
      question: "Alcohol affects a motorcycle rider's ability primarily by:",
      options: ["Improving focus and reducing reaction time", "Reducing balance, coordination, and judgment", "Increasing grip strength on the handlebars", "Having no effect at speeds under 25 mph"],
      correctIndex: 1,
      explanation:
        "Alcohol impairs balance, reduces coordination, slows reaction time, and impairs judgment — all critical skills for motorcycle operation. Even one or two drinks can significantly increase the risk of a crash. Riding under the influence of alcohol is illegal in all 50 states and is a leading cause of fatal motorcycle crashes.",
    },
    {
      question: "When making a turn on a motorcycle, you should:",
      options: ["Slow down after you enter the turn", "Apply the brakes throughout the turn", "Look through the turn toward your exit point", "Lean opposite to the direction of the turn"],
      correctIndex: 2,
      explanation:
        "Look through the turn toward where you want to go — your exit point. Your motorcycle will naturally follow your vision. Slow down before entering the turn (not during), lean in the direction of the turn, and roll on the throttle smoothly as you exit. Never brake hard while leaning in a turn.",
    },
    {
      question: "Which part of the body is injured in the greatest percentage of fatal motorcycle crashes?",
      options: ["Arms and hands", "Legs and feet", "Chest and torso", "Head and neck"],
      correctIndex: 3,
      explanation:
        "Head and neck injuries account for the greatest percentage of fatalities in motorcycle crashes. This is why wearing a DOT-approved helmet is the single most effective protection a rider can use. Full-face helmets provide the most coverage, protecting the chin and face in addition to the skull and brain.",
    },
    {
      question: "When riding at night, which of the following is most important?",
      options: ["Increasing your speed to reduce time on the road", "Using high beams at all times", "Reducing speed and increasing following distance", "Wearing darker clothing to blend with traffic"],
      correctIndex: 2,
      explanation:
        "At night, reduce your speed and increase your following distance to compensate for reduced visibility. Your headlight only illuminates a limited distance ahead, and road hazards — potholes, debris, animals — are much harder to see. Use your high beams when no oncoming traffic is present, and wear reflective gear to improve your visibility to other drivers.",
    },
  ],
  faqs: [
    {
      question: "Does Oregon require helmets for all motorcycle riders regardless of age?",
      answer:
        "Yes. ORS 814.280 requires all motorcycle operators and passengers to wear an Oregon-approved motorcycle helmet — there are no age or experience exceptions. Oregon-approved helmets must meet DOT standards plus Oregon specifications (these are essentially the same as DOT standards). Eye protection is also required unless a windscreen provides equivalent protection. Oregon's universal helmet law is a consistent knowledge test topic.",
    },
    {
      question: "How does Oregon's Basic Speed Rule affect motorcycle riding specifically?",
      answer:
        "For motorcycle riders, the Basic Speed Rule (ORS 811.100) has heightened practical importance because motorcycles are more affected by surface conditions than cars: wet pavement, gravel, sand, and leaves all reduce motorcycle traction more significantly than car traction. A rider at the posted speed limit on wet mountain curves, sand-dusted coastal sections, or leaf-covered Cascade roads may be traveling at an unsafe speed for those conditions — making a Basic Speed Rule citation possible even if no posted limit was exceeded. The rule protects riders from themselves as much as from citations.",
    },
    {
      question: "How does Oregon's DUII law treat cannabis impairment for motorcycle operators?",
      answer:
        "Oregon's DUII law (ORS 813.010) covers cannabis impairment without a per se THC limit. Officer observation of impairment — field sobriety test performance, physical signs, riding behavior — is the standard. A motorcycle rider who consumed cannabis recently may have THC in their blood but may not be impaired; under Oregon law, actual impairment must be demonstrated. However, riders who are actively impaired by cannabis and riding face the same DUII consequences as drunk riders. Oregon strongly discourages any cannabis use before riding — even amounts below impairing levels reduce reaction time and judgment.",
    },
    {
      question: "Can Oregon motorcycle riders use a Team Oregon course to waive the road skills test?",
      answer:
        "Yes — and depending on which course, it may waive the knowledge test too. Team Oregon is the only approved motorcycle rider education provider in the state. The Basic Course (16+) waives BOTH the knowledge and skills tests. The Intermediate Course (21+), the Basic Online Classroom (16+), and the Intermediate Online Classroom (21+) each waive the skills test only — the knowledge test is still required at DMV. Since DMV doesn't administer the skills test itself, a Team Oregon course completion is effectively the only path to satisfying it. Find courses and sign up at team-oregon.org.",
    },
    {
      question: "What should Oregon motorcycle riders know about studded tires on roads from November through March?",
      answer:
        "Oregon permits studded snow tires from November 1 through March 31. Motorcycle tires are not designed for stud installation and are not used with studs. However, Oregon riders should be aware that during studded tire season, other vehicles are shedding metal studs onto road surfaces — particularly on curves and at intersections. Loose studs on pavement reduce motorcycle traction similarly to gravel. Riders should watch for metallic glinting on road surfaces (visible in sunlight) near tire wear zones on curves. Motorway road sweepers clean major routes, but rural and county roads may retain loose studs for weeks.",
    },
    {
      question: "What documents do I need to bring to the Oregon DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Oregon, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Oregon DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Oregon motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Oregon, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Oregon DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Oregon, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Oregon, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Oregon?",
      answer:
        "In Oregon, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Oregon DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Oregon?",
      answer:
        "It depends on the course. Team Oregon's Basic Course (16+) waives both the knowledge and skills tests. The Intermediate Course (21+), Basic Online Classroom (16+), and Intermediate Online Classroom (21+) waive the skills test only — the knowledge test is still required. Team Oregon is the sole approved provider in the state; there is no separate MSF-branded pathway outside of it.",
    },
  ],
  relatedTests: [
    { label: "OR Driver's License", href: "/oregon-dmv-practice-test" },
    { label: "OR CDL Test", href: "/oregon-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OregonMotoPage() {
  return <PracticeTestPage {...data} />;
}
