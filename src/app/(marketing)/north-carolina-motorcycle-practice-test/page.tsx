import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "North Carolina Motorcycle Practice Test 2025 – Free NC DMV Class M License Prep",
  description:
    "Free North Carolina motorcycle practice test based on the official NC Motorcycle Handbook. 25 questions, 80% passing score. Pass your NC NCDMV Class M endorsement knowledge test.",
  alternates: { canonical: "https://caredmvprep.com/north-carolina-motorcycle-practice-test" },
  openGraph: { url: "https://caredmvprep.com/north-carolina-motorcycle-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "North Carolina",
  stateAbbr: "NC",
  testLabel: "Motorcycle Practice Test",
  slug: "north-carolina-motorcycle-practice-test",
  headline: "North Carolina Motorcycle Practice Test (Class M)",
  intro:
    "Prepare for your North Carolina Class M motorcycle license knowledge test with free practice questions based on the official 2025 North Carolina Motorcycle Handbook. Covers riding skills, safety strategies, and NC-specific motorcycle regulations.",
  numToPass: "20 correct (80%)",
  basedOn: "North Carolina Motorcycle Handbook (2025)",
  about: [
    "The NC Division of Motor Vehicles (NCDMV) administers the Class M motorcycle knowledge test, which consists of 25 questions from the North Carolina Motorcycle Handbook. To pass, you must answer at least 20 questions correctly — an 80% passing score. After passing the knowledge test, you receive a motorcycle learner's permit. To obtain a full Class M license or endorsement, you must pass a riding skills test at a NCDMV office or complete an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse.",
    "North Carolina has a universal motorcycle helmet law (G.S. 20-140.4) requiring ALL motorcycle operators and passengers to wear a DOT-compliant helmet at all times — regardless of age or riding experience. There are no age or experience exemptions. North Carolina also requires eye protection for all riders unless the motorcycle is equipped with a windshield. The NC helmet law is one of the longest-standing in the country.",
    "The Motorcycle Safety Foundation (MSF) Basic RiderCourse (BRC) is available through approved providers across North Carolina, including community colleges. Completing the BRC waives the NCDMV riding skills test requirement and is strongly recommended for all new riders. The BRC includes classroom instruction and hands-on range training. Insurance discounts are commonly available to course completers. Advanced courses for experienced riders are also available.",
  ],
  sampleQuestions: [
    {
      question: "North Carolina's motorcycle helmet law requires helmets for:",
      options: [
        "Riders under 21 only",
        "Riders with less than 2 years of experience",
        "All motorcycle operators and passengers regardless of age or experience",
        "Helmets are optional — only recommended in NC",
      ],
      correctIndex: 2,
      explanation:
        "North Carolina General Statute 20-140.4 requires all motorcycle operators and passengers to wear a DOT-compliant helmet at all times. There are no exceptions based on age, experience, or insurance status. NC enacted one of the earliest universal helmet laws in the country. Eye protection is also required for all riders not protected by a windshield.",
    },
    {
      question: "The most effective way to stop a motorcycle quickly in North Carolina traffic is to:",
      options: [
        "Use only the rear brake to maintain steering control",
        "Apply both front and rear brakes simultaneously and progressively",
        "Release the throttle and let engine compression do the stopping",
        "Apply the front brake fully and immediately without the rear",
      ],
      correctIndex: 1,
      explanation:
        "Applying both the front brake (lever) and the rear brake (pedal) simultaneously and progressively provides maximum stopping power. The front brake contributes approximately 70% of braking force. Progressive application — squeeze, don't grab — prevents front-wheel lockup while delivering maximum deceleration. This is the standard emergency stop technique taught in all MSF Basic RiderCourses.",
    },
    {
      question: "What is the recommended following distance for a motorcycle in North Carolina traffic?",
      options: [
        "1 second — same as car standard in heavy traffic",
        "2 seconds — same standard as for automobile drivers",
        "3–4 seconds — greater than the automobile standard",
        "5 car lengths regardless of speed",
      ],
      correctIndex: 2,
      explanation:
        "The North Carolina Motorcycle Handbook recommends a 3 to 4-second following distance — greater than the 2-second standard for cars. Motorcycles can stop quickly in ideal conditions, but wet pavement, gravel, and uneven surfaces extend stopping distances significantly. A larger following distance gives you more time to identify hazards and react, and reduces the consequence of any rear-end collision.",
    },
    {
      question: "When approaching a curve on a North Carolina mountain road, the correct technique is:",
      options: [
        "Accelerate before the curve and lean aggressively into it",
        "Brake hard at the curve's midpoint to control speed",
        "Reduce speed before the curve, enter at a controlled speed, and gradually roll on the throttle through the exit",
        "Stay as close to the centerline as possible to maximize the curve's radius",
      ],
      correctIndex: 2,
      explanation:
        "On North Carolina's mountain roads and curved rural highways, the safe cornering sequence is: slow down before the curve, enter at a controlled speed, look through the curve toward the exit, and gradually roll on the throttle as you progress through the corner. Braking mid-curve reduces traction and can cause a loss of control. Never cross the centerline into oncoming traffic lanes to increase your curve radius.",
    },
    {
      question: "Under North Carolina law, drivers under 18 may not use a mobile phone at all while driving. Does this apply to motorcycle riders under 18?",
      options: [
        "No — motorcycle riders have different rules than car drivers",
        "Yes — all operators of motor vehicles under 18 are covered",
        "Only if riding on highways with speed limits above 45 mph",
        "Only if carrying a passenger",
      ],
      correctIndex: 1,
      explanation:
        "North Carolina General Statute 20-137.3 applies to all motor vehicle operators under 18, including motorcycle riders. Riders under 18 may not use a mobile phone in any form while operating a motorcycle — not even hands-free. For riders 18 and older, texting and manual device interaction is prohibited, but hands-free calling is permitted. No NC rider of any age may wear headphones in both ears while riding.",
    },
    {
      question: "What type of protective clothing is most important for a motorcyclist in North Carolina?",
      options: [
        "A helmet is legally required; all other gear is entirely optional",
        "High-visibility vest only — helmets are not required in NC",
        "DOT helmet plus jacket, gloves, boots, and eye protection for maximum protection",
        "Only a reflective vest during nighttime riding",
      ],
      correctIndex: 2,
      explanation:
        "While only a DOT helmet and eye protection are legally required in North Carolina, the NC Motorcycle Handbook strongly recommends a full set of protective gear: a DOT or Snell-certified helmet, abrasion-resistant jacket (leather or textile), gloves, ankle-covering boots, and full-length pants. In a crash, road rash from unprotected skin contact with pavement is a primary injury. Bright or reflective gear also improves visibility.",
    },
    {
      question: "What does the North Carolina Motorcycle Handbook say about riding in the rain?",
      options: [
        "Riding in rain is prohibited and riders should pull over immediately",
        "Increase following distance, reduce speed, avoid sudden inputs, and watch for oil buildup on the road center",
        "Rain improves traction because it washes debris off the road",
        "Ride in the right tire track of the vehicle ahead for best traction",
      ],
      correctIndex: 1,
      explanation:
        "Rain significantly reduces motorcycle traction. The NC Motorcycle Handbook recommends: increasing your following distance to 4+ seconds, reducing your speed, making all throttle, brake, and steering inputs gradually to avoid slides, and avoiding the center of the lane where oil drippings accumulate and become extremely slippery when wet. The tire tracks of vehicles ahead (left or right portions of the lane) are generally the driest and least oily parts of a lane.",
    },
    {
      question: "A car makes a sudden left turn directly in front of your motorcycle at an intersection. What is the best emergency response?",
      options: [
        "Swerve left to go around the car's front",
        "Apply maximum rear brake only to stop quickly",
        "Apply both brakes progressively and steer to the path of least risk",
        "Accelerate to clear the intersection before the car completes its turn",
      ],
      correctIndex: 2,
      explanation:
        "When facing a sudden left-turning vehicle — the leading cause of motorcycle crash fatalities — the correct response is to apply both brakes progressively (maximizing deceleration without lockup) while looking for an escape path. If a collision appears unavoidable, steer toward the path of least risk (often the gap between the car and the lane edge). Accelerating into the turn path or braking with only one brake is more dangerous. This scenario is why maintaining following distance and scanning intersections is critical.",
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
      question: "How many questions are on the North Carolina motorcycle knowledge test?",
      answer:
        "The North Carolina Class M motorcycle knowledge test has 25 questions. You must answer at least 20 correctly — an 80% passing score — to receive your motorcycle learner's permit.",
    },
    {
      question: "Does North Carolina require helmets for all motorcycle riders?",
      answer:
        "Yes. North Carolina General Statute 20-140.4 requires all motorcycle operators and passengers to wear a DOT-compliant helmet at all times, regardless of age, experience, or insurance status. This is a universal helmet law with no exemptions. Eye protection is also required for all riders unless the motorcycle has a windshield.",
    },
    {
      question: "Can I waive the NC motorcycle skills test by taking a safety course?",
      answer:
        "Yes. Completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse (BRC) waives the NCDMV riding skills test requirement. Courses are available through community colleges and approved providers across North Carolina. Find a course at msf-usa.org or through your local community college's continuing education program.",
    },
    {
      question: "What restrictions apply to a North Carolina motorcycle learner's permit?",
      answer:
        "NC motorcycle learner's permit holders may not carry passengers, may not ride on Interstate highways, and may not ride between sunset and sunrise. The permit is valid for 18 months. To remove all restrictions and get a full Class M license or endorsement, you must pass the NCDMV riding skills test or complete an approved MSF BRC.",
    },
    {
      question: "Does North Carolina's no-phone law apply to motorcycle riders?",
      answer:
        "Yes. Riders under 18 may not use any mobile phone while operating a motorcycle in North Carolina (G.S. 20-137.3). Adult riders 18 and older may not text, email, or manually interact with a device while riding, though hands-free calling is permitted. No rider of any age may wear headphones or earphones in both ears while riding — at least one ear must remain unobstructed.",
    },
    {
      question: "What documents do I need to bring to the North Carolina DMV for my motorcycle knowledge test?",
      answer:
        "For the motorcycle knowledge test in North Carolina, you typically need to bring a valid form of ID (driver's license or ID card), proof of residency (if not already on file), and the application fee. If you are under 18, you may also need a parent or guardian's signature on a minor consent form. Check the North Carolina DMV website before your visit to confirm current requirements, as they can change.",
    },
    {
      question: "How long is the North Carolina motorcycle permit valid, and can I ride alone with it?",
      answer:
        "Motorcycle learner's permit validity varies by state, typically ranging from 90 days to 2 years. With a permit in North Carolina, you are generally restricted from riding at night, on highways, or carrying passengers. These restrictions ensure new riders gain experience safely before obtaining a full license. Check the North Carolina DMV website for specific permit restrictions and validity periods in your state.",
    },
    {
      question: "Is a motorcycle endorsement required in North Carolina, or is it a separate license?",
      answer:
        "The structure varies by state. Some states, including North Carolina, add a motorcycle endorsement (typically marked as 'M') to your existing driver's license, while others issue a separate motorcycle license or permit. Either way, you must pass a motorcycle knowledge test and, in most cases, a riding skills test or approved safety course before you can legally operate a motorcycle on public roads.",
    },
    {
      question: "What types of motorcycles require a motorcycle license in North Carolina?",
      answer:
        "In North Carolina, a motorcycle license or endorsement is generally required to operate any two-wheeled, three-wheeled, or motor-driven cycle above a certain engine displacement or speed threshold. This includes standard motorcycles, sport bikes, cruisers, and most scooters above 50cc. Mopeds (typically under 50cc, max speed 30 mph) may have different requirements — check the North Carolina DMV's specific definitions. Electric motorcycles and e-bikes are subject to separate regulations based on their maximum speed and motor output.",
    },
    {
      question: "Does completing a motorcycle safety course waive the skills test in North Carolina?",
      answer:
        "In many states, completing an approved Motorcycle Safety Foundation (MSF) Basic RiderCourse or an equivalent state-approved program waives the DMV riding skills test requirement. Some states also waive the knowledge test for course graduates. North Carolina DMV policies on course waivers vary — check the DMV website or contact them directly to confirm which approved courses qualify for test waivers and whether any age restrictions apply.",
    },
  ],
  relatedTests: [
    { label: "NC Driver's License", href: "/north-carolina-dmv-practice-test" },
    { label: "NC CDL Test", href: "/north-carolina-cdl-practice-test" },
    { label: "Motorcycle Practice Tests", href: "/motorcycle-practice-test" },
    { label: "Motorcycle Safety Tips", href: "/motorcycle-safety-tips" },
    { label: "Motorcycle Guide", href: "/motorcycle-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function NorthCarolinaMotorcyclePage() {
  return <PracticeTestPage {...data} />;
}
