import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "New Jersey CDL Practice Test 2025 – Free NJ MVC Commercial License Exam Prep",
  description:
    "Free New Jersey CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your NJ Motor Vehicle Commission CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/new-jersey-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/new-jersey-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "New Jersey",
  stateAbbr: "NJ",
  testLabel: "CDL General Knowledge Test",
  slug: "new-jersey-cdl-practice-test",
  headline: "New Jersey CDL General Knowledge Practice Test",
  intro:
    "Prepare for the New Jersey CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the New Jersey CDL Manual. All NJ Motor Vehicle Commission (MVC) CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & New Jersey CDL Manual",
  about: [
    "The New Jersey Motor Vehicle Commission (MVC) administers CDL testing at regional MVC service centers and approved third-party testing sites throughout New Jersey. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the New Jersey CDL Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all NJ CDL applicants regardless of vehicle class or endorsements.",
    "New Jersey-specific CDL considerations include: NJ's handheld wireless device ban (in effect since 2008) applies to CDL operators — commercial drivers also face federal FMCSA penalties up to $2,750 per handheld device violation. NJ's DUI law applies at 0.04% BAC for CDL holders in a CMV. New Jersey's Move Over law (N.J.S.A. 39:4-92.2) applies to commercial vehicles. NJ's unique jug handle turn system requires CDL drivers to understand and correctly execute jug handle turns on NJ divided highways — a wrong-lane positioning mistake by a large truck can create serious traffic hazards. New Jersey is also a major corridor state for I-95 and NJ Turnpike traffic.",
    "New Jersey's location on the I-95 corridor means CDL drivers frequently navigate the NJ Turnpike, Garden State Parkway, and other major arterials with weight restrictions, lane restrictions, and specific height/width limits under bridges and in tunnels. After passing General Knowledge, NJ CDL applicants must pass endorsement tests and skills tests at MVC-approved sites. NJ CDLs are valid for 4 years; DOT medical certificates must remain current.",
  ],
  sampleQuestions: [
    { question: "New Jersey CDL holders in a commercial motor vehicle face a BAC limit of:", options: ["0.08% — same as standard DUI", "0.04%", "0.01% — NJ's under-21 threshold applies to commercial drivers too", "0.00% — any alcohol in a CMV is prohibited in NJ"], correctIndex: 1, explanation: "NJ CDL holders operating a commercial motor vehicle are subject to the federal 0.04% BAC limit — half NJ's standard adult DUI threshold of 0.08%. NJ's ultra-strict under-21 threshold of 0.01% applies to personal vehicle driving but does not change the CDL-in-CMV limit of 0.04% (federal minimum). A DUI conviction in any vehicle triggers CDL disqualification: 1 year for a first offense, lifetime for a second." },
    { question: "What does New Jersey's jug handle road design require CDL drivers to do when turning left on a divided highway?", options: ["Turn left from the center lane after yielding to oncoming traffic", "Signal left and wait in the center median for a gap in traffic", "Move to the right lane before the intersection and exit via the jug handle ramp to make the left turn", "Jug handles only apply to passenger vehicles — trucks can turn left from the main road"], correctIndex: 2, explanation: "New Jersey's jug handle turns apply to all vehicles including commercial trucks. CDL drivers must move to the RIGHT lane well before the intersection when they see a 'Jug Handle' sign, exit the main road via the ramp to the right, and then wait at the jug handle traffic signal to cross the main road. For CDL drivers, this requires planning: a large truck that misses the jug handle exit must travel significantly further to find a legal U-turn opportunity." },
    { question: "The New Jersey Turnpike has specific truck restrictions. Which lane are commercial trucks generally required to use?", options: ["Only the left (fast) lane to maintain traffic flow", "The truck lanes (outer lanes) — heavy commercial vehicles are typically prohibited from inner lanes", "Any available lane — NJ Turnpike has no specific truck lane requirements", "Only the exit and entrance ramps — trucks are prohibited from through lanes"], correctIndex: 1, explanation: "The NJ Turnpike has separate inner and outer roadways in many sections. Commercial trucks (vehicles over a certain width or weight) are generally required to use the outer lanes and are prohibited from the inner lanes. Posted signs at Turnpike entrances specify truck restrictions. CDL drivers on the NJ Turnpike should review current NJ Turnpike Authority truck restrictions at state.nj.us/turnpike or with their employer's route planning resources." },
    { question: "Under FMCSA Hours of Service regulations, a property-carrying CDL driver's on-duty window is:", options: ["11 hours from the start of work", "12 hours from the start of driving", "14 hours from the start of the first on-duty period after 10 consecutive hours off", "16 hours on a single day if the driver was held at a shipper"], correctIndex: 2, explanation: "FMCSA's 14-hour window rule limits property-carrying drivers to a 14-hour period from the start of the first on-duty or driving period after 10 consecutive hours off duty. Within this 14-hour window, drivers may drive a maximum of 11 hours. When the 14-hour window closes — or after 11 hours of driving, whichever comes first — the driver must take 10 consecutive hours off. The 14-hour clock cannot be extended by taking rest breaks during the on-duty period (unlike some other HOS rules)." },
    { question: "When a CDL driver approaches an active construction zone on the NJ Turnpike, what is required?", options: ["Maintain normal highway speed to minimize time in the work zone", "Reduce speed to the posted work zone speed limit — fines are doubled in NJ work zones", "Use the left lane only — it's the safest lane through construction zones", "Activate hazard lights and stop if workers are visible near the road"], correctIndex: 1, explanation: "New Jersey doubles fines in highway construction zones — CDL drivers face both the doubled fine and potential CDL record implications. CDL drivers must reduce speed to the posted work zone speed limit, maintain increased following distance (larger trucks need more stopping distance), and be prepared for sudden lane narrowing, lane shifts, and workers close to the travel lanes. NJ's dense highway infrastructure means construction zones are common on the Turnpike and Garden State Parkway." },
    { question: "New Jersey's handheld device ban applies to CDL drivers in a commercial vehicle. What is the consequence of a second violation within 3 years?", options: ["A written warning only for a second offense", "A $400–$600 fine from NJ in addition to federal FMCSA penalties", "License suspension only — no additional fine", "CDL disqualification for 30 days by the NJ MVC"], correctIndex: 1, explanation: "NJ's handheld device ban imposes: first offense $200–$400; second offense within 3 years $400–$600; third and subsequent offense $600–$800 plus 90-day license suspension. CDL drivers in a CMV also face federal FMCSA penalties (up to $2,750 per violation) on top of NJ's state fines. A 90-day suspension from NJ would result in a CDL suspension affecting the driver's livelihood." },
    {
      question: "Under FMCSA hours-of-service rules, how many hours may a property-carrying driver drive after 10 consecutive hours off duty?",
      options: ["8 hours", "10 hours", "11 hours", "14 hours"],
      correctIndex: 2,
      explanation:
        "Property-carrying drivers may drive a maximum of 11 hours after taking 10 consecutive hours off duty. This is the 11-Hour Driving Limit. You must stop driving at the earlier of: after 11 hours of driving, or after the 14th hour since coming on duty.",
    },
    {
      question: "At 55 mph, how much distance does a fully loaded 80,000-lb tractor-trailer need to stop compared to a car?",
      options: ["About the same", "About 25% more", "Nearly twice as much", "Three to four times as much"],
      correctIndex: 2,
      explanation:
        "A fully loaded tractor-trailer traveling at 55 mph needs approximately 400 feet to stop — nearly twice the stopping distance of a passenger car at the same speed. Wet roads, worn brakes, or improper brake adjustment can dramatically increase this distance. Always maintain a large following distance.",
    },
    {
      question: "When must a vehicle display hazardous materials placards?",
      options: ["Only when carrying more than 1,000 lbs of hazmat", "Whenever any amount of a placard-required material is being transported", "Only on interstate highways", "Only when the material is in liquid form"],
      correctIndex: 1,
      explanation:
        "Hazardous materials placards must be displayed whenever you are transporting any quantity of a material that requires placarding under 49 CFR Part 172. There is no minimum weight threshold for placards — even small amounts of certain hazmat categories require placarding.",
    },
    {
      question: "Before backing under a trailer to couple, you should check that the trailer kingpin is:",
      options: ["Greased and at a 45-degree angle", "Straight and at the correct height for the fifth wheel", "Retracted into the trailer frame", "Centered over the rear axle"],
      correctIndex: 1,
      explanation:
        "Before coupling, ensure the trailer kingpin is straight (not bent or damaged) and that the trailer is at the correct height — low enough that the fifth wheel will contact the trailer plate and ride under the kingpin, but not so low that the tractor frame hits the trailer. Always check the kingpin and fifth wheel visually before coupling.",
    },
  ],
  faqs: [
    { question: "How many questions are on the New Jersey CDL General Knowledge test?", answer: "The NJ CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — 80% — to pass and advance to endorsement tests and the skills test." },
    { question: "What is New Jersey's MVC and where do I take CDL tests?", answer: "The New Jersey Motor Vehicle Commission (MVC) administers CDL testing at regional service centers across NJ. CDL knowledge tests are taken at MVC offices; skills tests are conducted at approved third-party testing sites. Visit nj.gov/mvc for CDL testing information and locations." },
    { question: "How do jug handle turns affect CDL drivers in New Jersey?", answer: "CDL drivers must understand and follow jug handle turn requirements on NJ divided highways — moving to the right lane well in advance of a 'Jug Handle' sign, exiting via the ramp, and proceeding at the jug handle signal. Missing a jug handle with a large truck creates hazardous situations. Route planning for CDL operators in NJ should account for jug handle locations on planned routes." },
    { question: "How long is a New Jersey CDL valid?", answer: "A New Jersey CDL is valid for 4 years. Your DOT medical certificate must remain current. HazMat endorsement requires TSA security clearance renewal every 5 years. NJ CDL holders must self-certify their medical status annually. NJ CDLs may be renewed online for eligible drivers at nj.gov/mvc." },
    { question: "Are there weight restrictions on NJ roads for commercial vehicles?", answer: "Yes. New Jersey has posted weight limits on many state and county roads, especially older bridges. The NJ Turnpike and Garden State Parkway have specific truck restrictions on inner roadways. CDL drivers must know the GVWR and axle weights of their vehicle and loads, and plan routes to comply with posted limits. Overweight violations in NJ carry significant fines and can result in out-of-service orders." },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in New Jersey?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in New Jersey?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your New Jersey DMV website for current fee schedules.",
    },
    {
      question: "Can I take the New Jersey CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the New Jersey DMV for available language options.",
    },
    {
      question: "How long is a New Jersey CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your New Jersey CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the New Jersey CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in New Jersey, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "NJ Driver's License", href: "/new-jersey-dmv-practice-test" },
    { label: "NJ Motorcycle Test", href: "/new-jersey-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL General Knowledge", href: "/cdl-general-knowledge" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function NewJerseyCDLPage() {
  return <PracticeTestPage {...data} />;
}
