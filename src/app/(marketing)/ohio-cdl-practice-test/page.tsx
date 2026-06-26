import type { Metadata } from "next";
import PracticeTestPage, { type PracticeTestPageProps } from "@/components/PracticeTestPage";

export const metadata: Metadata = {
  title: "Ohio CDL Practice Test 2025 – Free OH BMV Commercial Driver's License Exam Prep",
  description:
    "Free Ohio CDL General Knowledge practice test based on the FMCSA CDL Manual. 50 questions, 80% passing score. Pass your OH BMV CDL knowledge test on the first try.",
  alternates: { canonical: "https://caredmvprep.com/ohio-cdl-practice-test" },
  openGraph: { url: "https://caredmvprep.com/ohio-cdl-practice-test", images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }] },
};

const data: PracticeTestPageProps = {
  state: "Ohio",
  stateAbbr: "OH",
  testLabel: "CDL General Knowledge Test",
  slug: "ohio-cdl-practice-test",
  headline: "Ohio CDL General Knowledge Practice Test",
  intro:
    "Prepare for the Ohio CDL General Knowledge exam with free practice questions based on the FMCSA Commercial Driver's License Manual and the Ohio Commercial Driver License Manual. All OH BMV CDL applicants must pass this test before any endorsement exams.",
  basedOn: "FMCSA CDL Manual & Ohio CDL Manual",
  about: [
    "The Ohio Bureau of Motor Vehicles (BMV) administers CDL testing through deputy registrar offices and approved third-party testing sites. The General Knowledge test consists of 50 questions based on the FMCSA CDL Manual and the Ohio Commercial Driver License Manual. A passing score of 80% — at least 40 correct answers — is required. This test is mandatory for all CDL applicants regardless of which vehicle class or endorsements you are seeking.",
    "Ohio-specific CDL considerations include Ohio's OVI law as it applies to commercial vehicles: CDL holders are subject to a 0.04% BAC limit while operating a commercial motor vehicle (half the standard adult limit). An OVI conviction in any vehicle — personal or commercial — triggers CDL disqualification under both FMCSA regulations and Ohio law. Ohio's Move Over law (ORC 4511.213) also applies to CDL operators with enhanced enforcement near highway construction and emergency zones. Ohio's hands-free law (HB 283) prohibits all handheld device use for commercial vehicle operators.",
    "After passing the General Knowledge test, Ohio CDL applicants must pass endorsement-specific knowledge tests and a skills test (pre-trip inspection, basic vehicle control, and on-road driving) in the appropriate vehicle class. Ohio coordinates CDL skills testing at approved third-party testing sites. Applicants must also provide a current DOT medical certificate from a certified medical examiner registered on the FMCSA National Registry.",
  ],
  sampleQuestions: [
    {
      question: "What is the BAC limit for a CDL holder operating a commercial motor vehicle in Ohio?",
      options: ["0.08% — same as the standard adult limit", "0.04%", "0.02%", "0.00% — any alcohol is prohibited"],
      correctIndex: 1,
      explanation:
        "Ohio CDL holders operating a commercial motor vehicle are subject to a 0.04% BAC limit — half the standard adult limit of 0.08%. This applies to all CDL holders while operating any commercial motor vehicle. An OVI conviction in any vehicle (personal or commercial) triggers a 1-year CDL disqualification for a first offense and a lifetime disqualification for a second offense.",
    },
    {
      question: "When must a commercial vehicle driver perform a vehicle inspection under FMCSA rules?",
      options: [
        "Only when the carrier instructs them to",
        "Once per week at the start of the work week",
        "Before each trip, within 50 miles of departure, then every 3 hours or 150 miles",
        "Only after returning from a long-haul run",
      ],
      correctIndex: 2,
      explanation:
        "FMCSA regulations (49 CFR 396.13) require drivers to review the previous Driver Vehicle Inspection Report (DVIR) and conduct a pre-trip inspection before each trip. During the trip, cargo and securement must be checked within the first 50 miles and every 3 hours or 150 miles thereafter. A post-trip inspection report (DVIR) is also required at the end of each duty day for regulated property carriers.",
    },
    {
      question: "Ohio's hands-free law (HB 283) applies to commercial vehicle operators. Which is true for CDL holders?",
      options: [
        "CDL holders are exempt as long as they use a speakerphone",
        "CDL holders face additional federal penalties on top of Ohio's state penalties",
        "Only texting is prohibited for commercial drivers in Ohio",
        "CDL holders may use handheld devices when parked at a delivery location",
      ],
      correctIndex: 1,
      explanation:
        "Ohio's HB 283 hands-free law applies to all drivers including CDL holders. However, CDL holders also face federal FMCSA penalties (49 CFR 392.82) for handheld device use: civil penalties up to $2,750 per violation and driver disqualification for multiple violations. Both sets of penalties apply simultaneously. The federal restriction is even stricter than Ohio's state law and applies to all interstate commercial operations.",
    },
    {
      question: "What does the term 'gross vehicle weight rating' (GVWR) mean for CDL classification purposes?",
      options: [
        "The actual weight of the vehicle when fully loaded",
        "The manufacturer's specified maximum allowable weight of the vehicle including cargo",
        "The weight of the vehicle without any cargo or fuel",
        "The maximum weight allowed on any Ohio road",
      ],
      correctIndex: 1,
      explanation:
        "Gross Vehicle Weight Rating (GVWR) is the maximum allowable loaded weight of a single vehicle as specified by the manufacturer. It includes the vehicle, fuel, passengers, and cargo. GVWR is used to determine CDL class requirements: Class A requires a combination over 26,001 lbs GVWR with a towed unit over 10,000 lbs; Class B requires a single vehicle over 26,001 lbs GVWR. GVWR is different from actual gross weight, which may be lower.",
    },
    {
      question: "A commercial driver discovers a 'defective' condition on their vehicle during a pre-trip inspection. What must happen before driving?",
      options: [
        "The driver can drive if the defect seems minor and the route is short",
        "The defect must be reported on the DVIR and repaired or certified as safe before driving",
        "The driver must call the carrier's safety officer for verbal approval",
        "Only brake-related defects require repair before driving",
      ],
      correctIndex: 1,
      explanation:
        "FMCSA regulations (49 CFR 396.11) require drivers to report defective equipment on a Driver Vehicle Inspection Report (DVIR). If a defect affects safe operation, it must be repaired before the vehicle is driven. A qualified mechanic must certify repairs as completed on the DVIR. Driving a vehicle with known safety-affecting defects is a serious violation that can result in out-of-service orders and civil penalties.",
    },
    {
      question: "What is the proper way to use air brakes when slowing on a long, steep Ohio descent?",
      options: [
        "Hold the brake pedal down continuously until reaching the bottom",
        "Downshift to a lower gear before the descent, use snub braking (apply then release) to control speed",
        "Switch to engine braking only — never use air brakes on descents",
        "Use the trailer brake hand valve only to preserve the drive axle brakes",
      ],
      correctIndex: 1,
      explanation:
        "On a long steep descent, select a low gear before starting down (the same gear you would use to climb). Then use snub braking: apply the brakes to bring your speed below the safe speed, release the brakes until speed builds back up, then apply again. Continuous brake application causes brake fade (overheating) which leads to brake failure. Engine braking alone may not be sufficient on steep grades.",
    },
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
    {
      question: "How many questions are on the Ohio CDL General Knowledge test?",
      answer:
        "The Ohio CDL General Knowledge test has 50 questions. You must answer at least 40 correctly — an 80% passing score — to pass.",
    },
    {
      question: "What CDL classes does Ohio issue?",
      answer:
        "Ohio issues Class A (combination vehicles with GCWR over 26,001 lbs and towed unit over 10,000 lbs GVWR), Class B (single vehicles over 26,001 lbs GVWR, or towing under 10,001 lbs), and Class C (16+ passengers or HazMat requiring placards). Each class requires the General Knowledge test plus endorsement tests and a skills test.",
    },
    {
      question: "What OVI BAC limit applies to Ohio CDL holders in a commercial vehicle?",
      answer:
        "Ohio CDL holders operating a commercial motor vehicle are subject to a 0.04% BAC limit — half the standard adult threshold. An OVI conviction in any vehicle triggers a 1-year CDL disqualification for a first offense. A second offense results in a lifetime CDL disqualification. Ohio's OVI law also interacts with federal CDL disqualification rules under FMCSA regulations.",
    },
    {
      question: "How long is an Ohio CDL valid?",
      answer:
        "An Ohio CDL is valid for 4 years. Your DOT medical certificate must remain current throughout the CDL's validity period. HazMat endorsement holders must renew their TSA security threat assessment every 5 years. Ohio also requires CDL holders to self-certify their medical status category annually.",
    },
    {
      question: "Where can I take the Ohio CDL skills test?",
      answer:
        "Ohio CDL skills tests are conducted at approved third-party testing sites authorized by the Ohio BMV. You must provide your own vehicle (or arrange for one) for the skills test, which includes a pre-trip inspection, basic vehicle control (backing and maneuvering), and an on-road driving test. Contact the Ohio BMV at bmv.ohio.gov for a list of approved testing sites.",
    },
    {
      question: "What is the difference between a Class A, Class B, and Class C CDL in Ohio?",
      answer:
        "A Class A CDL allows you to operate any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 lbs or more, provided the towed unit exceeds 10,000 lbs — this includes tractor-trailers and double/triple trailer rigs. A Class B CDL covers single vehicles with a GVWR of 26,001 lbs or more, or any such vehicle towing a unit not exceeding 10,000 lbs — this includes straight trucks and large buses. A Class C CDL is required for vehicles designed to carry 16 or more passengers (including the driver) or for vehicles transporting hazardous materials that require placarding, when those vehicles do not qualify for Class A or B.",
    },
    {
      question: "How much does it cost to get a CDL in Ohio?",
      answer:
        "CDL fees vary by state and by the class and endorsements you obtain. Most states charge separate fees for the CDL knowledge test ($10–$30 per attempt), the CDL skills test ($50–$150), and the CDL license itself ($50–$100). Additional fees apply for each endorsement (HazMat, Tanker, Passenger, etc.). The HazMat endorsement also requires a TSA security threat assessment fee of approximately $86. Check your Ohio DMV website for current fee schedules.",
    },
    {
      question: "Can I take the Ohio CDL knowledge test in a language other than English?",
      answer:
        "Federal regulations (49 CFR 383.133) require that CDL applicants be able to read and speak the English language sufficiently to understand highway traffic signs and signals and to respond to official inquiries. Many states offer CDL knowledge tests in Spanish and other languages for non-commercial knowledge questions, but the actual CDL test must be taken in a language that allows the driver to meet the English proficiency requirement. Check with the Ohio DMV for available language options.",
    },
    {
      question: "How long is a Ohio CDL valid and how do I renew it?",
      answer:
        "In most states, a CDL is valid for 4–8 years (commonly 4–5 years). To renew your Ohio CDL, you typically need to visit a DMV office, pass a vision test, pay the renewal fee, and update your medical certification (DOT physical). If you hold a HazMat endorsement, your TSA background check must also be current. CDLs cannot generally be renewed online due to federal requirements for in-person verification of medical certification.",
    },
    {
      question: "What happens if I fail the Ohio CDL knowledge test?",
      answer:
        "If you fail the CDL General Knowledge test in Ohio, you are typically required to wait a specified period (commonly 1–7 days) before retaking it. Most states allow 2–3 attempts before requiring additional waiting periods or study requirements. There is usually a retest fee for each attempt. Focus on the areas you missed — most states provide a score sheet showing which topic areas you need to review.",
    },
  ],
  relatedTests: [
    { label: "OH Driver's License", href: "/ohio-dmv-practice-test" },
    { label: "OH Motorcycle Test", href: "/ohio-motorcycle-practice-test" },
    { label: "CDL Practice Tests", href: "/cdl-practice-test" },
    { label: "CDL Air Brakes", href: "/cdl-air-brakes" },
    { label: "CDL Guide", href: "/cdl-guide" },
    { label: "View All States", href: "/states" },
  ],
};

export default function OhioCDLPage() {
  return <PracticeTestPage {...data} />;
}
