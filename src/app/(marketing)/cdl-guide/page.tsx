import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Guide – How to Get Your Commercial Driver's License",
  description:
    "Complete CDL guide: Class A vs B vs C licenses, how to get your CDL learner&apos;s permit, the CDL skills test, DOT physical requirements, required endorsements, and disqualifying offenses.",
  alternates: { canonical: "https://caredmvprep.com/cdl-guide" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-guide",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is the highest CDL class?", a: "Class A is the highest CDL class. A Class A CDL qualifies you to drive combination vehicles (tractor-trailers, doubles, triples, tankers, flatbeds, and lowboys) where the towing vehicle weighs over 26,001 lbs and the towed vehicle exceeds 10,000 lbs. Class A holders may also drive Class B and C vehicles." },
  { q: "Do you need a DOT physical to get a CDL?", a: "Yes. To obtain a CDL, you must pass a Department of Transportation (DOT) physical examination performed by a licensed medical examiner listed on the FMCSA National Registry. The physical evaluates vision, hearing, blood pressure, neurological function, and other health factors. A valid medical certificate (typically good for 2 years) must be maintained throughout your CDL career." },
  { q: "How long does it take to get a CDL?", a: "The CDL process typically takes 3 to 7 weeks for CDL school plus testing time. After passing the CDL knowledge tests, you must hold a Commercial Learner&apos;s Permit (CLP) for at least 14 days before taking the skills test. Full-time CDL training programs can have you licensed in 4-8 weeks total." },
  { q: "What disqualifies you from getting or keeping a CDL?", a: "Major disqualifying offenses include: DUI conviction (1-year disqualification for first offense, lifetime ban for second), operating a CMV while impaired, refusing a blood alcohol test, causing a fatality through negligent CMV operation, and using a CMV in the commission of a felony. Losing your regular driver&apos;s license for 60 or more days also disqualifies you." },
  { q: "What endorsements are required?", a: "The endorsements you need depend on what you drive. H (Hazmat) is required for hazardous materials, N (Tanker) for tank vehicles, P (Passenger) for 16+ passengers, S (School Bus) for school buses, T (Doubles/Triples) for pulling multiple trailers. Most truck drivers need only the CDL General Knowledge — endorsements are required for specialized operations." },
];

const cdlClasses = [
  {
    cls: "Class A",
    desc: "Combination Vehicles",
    examples: "Tractor-trailers (semis), tankers, flatbeds, lowboys, doubles, triples, livestock carriers",
    threshold: "Towing vehicle >26,001 lbs AND towed vehicle >10,000 lbs",
    ageIntra: "18",
    ageInter: "21",
  },
  {
    cls: "Class B",
    desc: "Large Single Vehicles",
    examples: "Straight trucks, dump trucks, city buses, transit buses, concrete mixers, delivery trucks",
    threshold: "Single vehicle >26,001 lbs (or towing <10,000 lbs)",
    ageIntra: "18",
    ageInter: "21",
  },
  {
    cls: "Class C",
    desc: "Specialized Small Vehicles",
    examples: "Vehicles for 16+ passengers (not requiring Class B), hazmat vehicles below A/B thresholds",
    threshold: "Below Class A/B thresholds but requires special operation",
    ageIntra: "18",
    ageInter: "21",
  },
];

const processSteps = [
  { step: "1", title: "Pass the DOT Physical", body: "Visit a FMCSA-certified medical examiner. You must have adequate vision (with or without correction), hearing, and blood pressure within acceptable ranges. You&apos;ll receive a medical examiner&apos;s certificate valid for 2 years (shorter if you have certain medical conditions)." },
  { step: "2", title: "Pass CDL Knowledge Tests", body: "Pass the CDL General Knowledge test at your state DMV (100 questions, 80% to pass). If you want endorsements like Air Brakes or Hazmat, take those tests at the same visit. Passing issues you a Commercial Learner&apos;s Permit (CLP)." },
  { step: "3", title: "Hold the CLP for 14 Days", body: "Federal law requires you to hold the CLP for at least 14 calendar days before taking the skills test. Use this time to practice with a CDL holder riding with you." },
  { step: "4", title: "Pass the CDL Skills Test", body: "The CDL skills test has three parts: pre-trip vehicle inspection (identify components and potential defects), basic vehicle control (straight-line backing, offset backing, alley dock), and on-road driving (15-30 minutes on public roads with an examiner)." },
  { step: "5", title: "Receive Your CDL", body: "After passing the skills test, the DMV issues your CDL with the appropriate class. If you completed the Hazmat endorsement, you still need to pass the TSA background check before the H endorsement is added." },
];

export default function CDLGuidePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://caredmvprep.com" },
              { "@type": "ListItem", position: 2, name: "Resources", item: "https://caredmvprep.com/resources" },
              { "@type": "ListItem", position: 3, name: "CDL Guide", item: "https://caredmvprep.com/cdl-guide" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2240] to-[#1a3a5c] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🚛</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Guide</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your complete guide to getting a Commercial Driver&apos;s License. CDL class A vs B vs C, the step-by-step process, DOT physical, skills test, and everything in between.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#1a7f3c]">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li><Link href="/resources" className="hover:text-[#1a7f3c]">Resources</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-800 font-medium">CDL Guide</li>
          </ol>
        </div>
      </nav>

      {/* CDL Classes */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">CDL Classes: A, B, and C</h2>
          <div className="space-y-4">
            {cdlClasses.map((c) => (
              <div key={c.cls} className="rounded-xl border border-gray-100 p-6 bg-gray-50">
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="shrink-0">
                    <span className="inline-block bg-[#0d2240] text-white font-bold text-lg px-4 py-1 rounded-lg">{c.cls}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{c.desc}</h3>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Examples:</span> {c.examples}</p>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Threshold:</span> {c.threshold}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Min. Age:</span> {c.ageIntra} (intrastate) / {c.ageInter} (interstate)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How to Get Your CDL — Step by Step</h2>
          <div className="space-y-4">
            {processSteps.map((item) => (
              <div key={item.step} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="w-8 h-8 rounded-full bg-[#1a7f3c] text-white text-sm font-bold flex items-center justify-center shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsements overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">CDL Endorsements Overview</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#0d2240] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Code</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Required For</th>
                  <th className="px-4 py-3 text-left">Questions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["H", "Hazardous Materials", "Transporting hazmat requiring placards", "30"],
                  ["N", "Tanker", "Tank vehicles ≥1,000 gallons", "25"],
                  ["P", "Passenger", "Vehicles with 16+ passengers", "20"],
                  ["S", "School Bus", "School buses (also requires P)", "20"],
                  ["T", "Doubles/Triples", "Pulling double or triple trailers", "20"],
                  ["X", "Hazmat + Tanker", "Combined H and N endorsement", "Combined"],
                ].map(([code, name, req, q], i) => (
                  <tr key={code} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-[#1a7f3c]">{code}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{name}</td>
                    <td className="px-4 py-3 text-gray-600">{req}</td>
                    <td className="px-4 py-3 text-gray-600">{q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { href: "/dmv-study-tips", label: "DMV Study Tips" },
              { href: "/drivers-license-guide", label: "Driver's License Guide" },
              { href: "/motorcycle-guide", label: "Motorcycle Guide" },
              { href: "/faqs", label: "FAQs" },
              { href: "/resources", label: "All Resources" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#1a7f3c] hover:text-[#1a7f3c] transition">
                {l.label}
              </Link>
            ))}
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Practice Tests</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/cdl-practice-test", label: "CDL Overview" },
              { href: "/cdl-general-knowledge", label: "General Knowledge" },
              { href: "/cdl-air-brakes", label: "Air Brakes" },
              { href: "/cdl-hazmat", label: "Hazmat" },
              { href: "/cdl-combination-vehicles", label: "Combination Vehicles" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#1a7f3c] hover:text-[#1a7f3c] transition">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d2240] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Start Your CDL Journey</h2>
          <p className="text-gray-400 text-sm mb-6">Practice CDL knowledge test questions and get your commercial license.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
