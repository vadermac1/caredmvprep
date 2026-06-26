import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Ohio Motorcycle Practice Test 2025 – Free OH BMV Motorcycle Endorsement Prep",
  description:
    "Free Ohio motorcycle practice test based on the official Ohio Motorcycle Operator Manual. 40 questions, 75% passing score. Pass your OH BMV motorcycle endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/ohio-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/ohio-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Ohio",
  stateAbbr: "OH",
  testLabel: "Motorcycle Practice Test",
  slug: "ohio-motorcycle-practice-test",
  headline: "Ohio Motorcycle Practice Test",
  intro:
    "Prepare for your Ohio motorcycle endorsement knowledge test with free practice questions based on the official 2025 Ohio Motorcycle Operator Manual. Covers riding techniques, safety strategies, and Ohio-specific motorcycle regulations.",
  numToPass: "30 correct (75%)",
  basedOn: "Ohio Motorcycle Operator Manual (2025)",
  about: [
    "The Ohio Bureau of Motor Vehicles (BMV) administers the motorcycle endorsement knowledge test, which consists of 40 questions drawn from the Ohio Motorcycle Operator Manual. To pass, you must answer at least 30 questions correctly — a 75% passing score. Passing the knowledge test, combined with completing the Motorcycle Ohio program or a BMV riding skills test, earns you the motorcycle endorsement added to your Ohio driver's license.",
    "Ohio's motorcycle helmet law is conditional. Helmets are required for: (1) all riders and passengers under 18 years of age, (2) riders of any age within the first year of receiving their motorcycle endorsement, and (3) riders who cannot provide proof of adequate insurance coverage. Riders who are 18 or older, have held their motorcycle endorsement for more than 1 year, and have proof of insurance may legally ride without a helmet — though the Ohio Motorcycle Operator Manual strongly recommends helmets for all riders.",
    "The Motorcycle Ohio program provides rider training at approved sites across the state. Completing the Basic Rider SkillS (BRSS) or Basic Rider Course (BRC) through Motorcycle Ohio waives the BMV riding skills test and is the preferred path for most new Ohio motorcyclists. The program also offers an advanced course and a course specifically for experienced riders returning to motorcycling after a break. Insurance companies frequently offer discounts to course completers.",
  ],
  sampleQuestions: [
    {
      question: "Ohio's motorcycle helmet law requires helmets for which riders?",
      options: [
        "All riders regardless of age or experience",
        "Only riders under 16 years of age",
        "Riders under 18, riders within their first year of endorsement, and riders without adequate insurance",
        "No helmet requirement — it is entirely optional in Ohio",
      ],
      correctIndex: 2,
      explanation:
        "Ohio's conditional helmet law (ORC 4511.53) requires helmets for: (1) riders and passengers under 18, (2) any rider within the first year of their motorcycle endorsement regardless of age, and (3) riders who cannot prove adequate insurance coverage. Riders who are 18+, have more than 1 year of endorsement history, and carry adequate insurance may ride without a helmet. Helmets are always recommended.",
    },
    {
      question: "When riding in curves on Ohio rural roads, what is the most common mistake made by new riders?",
      options: [
        "Leaning too far over into the curve",
        "Entering the curve too fast and braking in the middle of the turn",
        "Riding too slowly through the curve",
        "Keeping the throttle fully closed throughout the entire curve",
      ],
      correctIndex: 1,
      explanation:
        "The most common mistake in curve riding is entering too fast and then braking mid-curve. Braking while leaned over dramatically reduces traction and can cause the tires to slide. The correct technique is to reduce speed before the curve, enter at a manageable speed, look through the curve toward the exit, and roll on the throttle smoothly through the corner. If you find yourself going too fast in a curve, counter-steer further into the lean rather than braking.",
    },
    {
      question: "What does 'counter-steering' mean for motorcycle riders traveling at speeds above 15 mph?",
      options: [
        "Turning the handlebars sharply in the opposite direction of the turn",
        "Pushing forward on the handlebar grip on the side you want to turn toward",
        "Using body weight only — no handlebar input needed at speed",
        "Braking to force the front wheel to track in the desired direction",
      ],
      correctIndex: 1,
      explanation:
        "Counter-steering is the technique used to initiate turns on a motorcycle at speeds above approximately 15 mph: push forward on the right grip to turn right, push forward on the left grip to turn left. This causes the motorcycle to lean in the desired direction. Counter-steering is the primary steering mechanism at highway speeds and is a critical skill taught in the Motorcycle Ohio BRC.",
    },
    {
      question: "Ohio's hands-free law applies to motorcycle riders. Which of the following is permitted while riding a motorcycle in Ohio?",
      options: [
        "Holding a GPS device in one hand to view the route",
        "Answering a call by pressing a button on a handlebar-mounted Bluetooth device",
        "Texting at a red light since you are technically stopped",
        "Using a handheld phone in speakerphone mode in your lap",
      ],
      correctIndex: 1,
      explanation:
        "Ohio's hands-free law (HB 283, effective April 2023) applies to all motor vehicle operators including motorcyclists. Handheld use of any electronic device while riding is prohibited. However, using a handlebar-mounted device that you operate with a single button press or voice command — such as answering a Bluetooth call — is considered hands-free and is permitted. Viewing a mounted GPS device that does not require manual interaction is also permitted.",
    },
    {
      question: "What is the safest following distance for a motorcyclist behind another vehicle?",
      options: [
        "1 second — the same as recommended for cars",
        "2 seconds — the same as the car standard",
        "3–4 seconds — longer than car recommendations due to motorcycle stopping dynamics",
        "10 car lengths regardless of speed",
      ],
      correctIndex: 2,
      explanation:
        "The Ohio Motorcycle Operator Manual recommends a minimum 3 to 4-second following distance — greater than the 2-second standard recommended for car drivers. This additional distance accounts for the longer stopping distances of motorcycles on slippery surfaces, the difficulty of stopping while leaned in a corner, and the higher consequence of a rear-end collision for an unprotected rider.",
    },
    {
      question: "When a motorcyclist encounters a large vehicle passing from behind, what should the rider do?",
      options: [
        "Speed up to maintain distance from the larger vehicle",
        "Move to the left or right portion of the lane and maintain speed",
        "Grip the handlebars tightly and fight any buffeting caused by the air wake",
        "Be prepared for the buffeting, hold the motorcycle steady, and avoid overreacting to turbulence",
      ],
      correctIndex: 3,
      explanation:
        "When a large truck passes a motorcycle, the air turbulence (buffeting) can feel alarming. The correct response is to be prepared, hold the motorcycle steady without fighting the handlebars, and avoid sudden steering inputs. Gripping too tightly makes control harder — a relaxed but firm grip allows the motorcycle to respond naturally. The buffeting is temporary and manageable if you stay calm and maintain your lane position.",
    },
    {
      question: "What is a 'wobble' on a motorcycle and how should a rider respond?",
      options: [
        "A wobble is normal weaving at low speeds — no action needed",
        "A sudden oscillation of the front wheel; grip the handlebars hard and brake immediately",
        "A sudden oscillation of the handlebars; roll off the throttle gradually and hold grips firmly without fighting the movement",
        "Any side-to-side movement; immediately apply both brakes fully",
      ],
      correctIndex: 2,
      explanation:
        "A tank slapper or wobble is a rapid back-and-forth oscillation of the handlebars, often caused by a tire imbalance, worn steering components, or hitting a bump at speed. The correct response is to roll off the throttle gradually (do not brake suddenly), hold the grips firmly without fighting the oscillation, and allow the motorcycle to stabilize. Applying the brakes or fighting the handlebars during a wobble can make it worse.",
    },
    {
      question: "Before riding, what does Ohio safety guidance say you should check first?",
      options: [
        "Whether your music is queued up and volume is set",
        "T-CLOCS: Tires, Controls, Lights, Oil, Chassis, and Stands",
        "Whether your mirrors are folded in from the last ride",
        "That your phone is in your jacket pocket (not mounted)",
      ],
      correctIndex: 1,
      explanation:
        "The Ohio Motorcycle Operator Manual recommends T-CLOCS before every ride: Tires and Wheels (pressure, tread depth, damage), Controls (levers, pedals, cables, throttle), Lights and Electrics (headlight, brake light, turn signals, battery), Oil and Other Fluids (engine oil, coolant, brake fluid), Chassis (frame, suspension, chain/belt), and Stands (kickstand, center stand). Finding a mechanical problem before you ride prevents crashes.",
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
      question: "How many questions are on the Ohio motorcycle endorsement knowledge test?",
      answer:
        "The Ohio motorcycle endorsement knowledge test has 40 questions. You must answer at least 30 correctly — a passing score of 75% — to receive your motorcycle learner's permit.",
    },
    {
      question: "What is the Motorcycle Ohio program?",
      answer:
        "Motorcycle Ohio is the state-sponsored rider training program that offers Basic Rider SkillS (BRSS), Basic Rider Course (BRC), and advanced courses at approved training sites across Ohio. Completing the BRC or BRSS waives the BMV riding skills test. The program is open to all experience levels. Find courses and schedule at motorcycle.ohio.gov.",
    },
    {
      question: "Does Ohio require helmets for all motorcycle riders?",
      answer:
        "No — Ohio's helmet law is conditional. Helmets are required for riders under 18, riders within their first year of a motorcycle endorsement, and riders who cannot provide proof of adequate insurance. Riders who are 18+, have 1+ years of endorsement history, and have insurance proof may legally ride without a helmet, but helmets are always recommended.",
    },
    {
      question: "Can a motorcycle learner's permit holder in Ohio carry passengers?",
      answer:
        "No. Ohio motorcycle learner's permit holders may not carry passengers. The permit also restricts riding at night and on highways. Once you receive the full motorcycle endorsement by passing the skills test or completing an approved course, all permit restrictions are removed.",
    },
    {
      question: "Does Ohio's hands-free driving law apply to motorcyclists?",
      answer:
        "Yes. Ohio House Bill 283 (effective April 2023) applies to all motor vehicle operators, including motorcyclists. Handheld use of any electronic device while riding is prohibited. You may use a handlebar-mounted device operated by voice command or a single button press. A first violation is a minor misdemeanor ($150 fine); violations in school or construction zones carry steeper penalties.",
    },
    {
      question: "What documents do I need to bring to the Ohio DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in Ohio, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the Ohio DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the Ohio motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in Ohio, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the Ohio DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in Ohio, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including Ohio, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in Ohio?",
      answer:
        "In Ohio, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the Ohio DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in Ohio?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. Ohio DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "OH Driver's License", href: "/ohio-dmv-practice-test" },
    { label: "OH CDL Test", href: "/ohio-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Safety Tips", href: "/motorcycle-safety-tips" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OhioMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
