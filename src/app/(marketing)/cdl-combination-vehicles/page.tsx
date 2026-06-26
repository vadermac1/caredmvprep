import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Combination Vehicles Practice Test 2025 – Section 6 Exam Prep",
  description:
    "Free CDL Combination Vehicles practice test based on FMCSA Section 6. Covers 5th wheel coupling, jackknife prevention, offtracking, rearward amplification, and landing gear. Essential for Class A CDL.",
  alternates: { canonical: "https://caredmvprep.com/cdl-combination-vehicles" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-combination-vehicles",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is a combination vehicle?", a: "A combination vehicle is any vehicle consisting of a power unit (tractor) towing one or more trailers. The most common example is a tractor-trailer (semi-truck). Doubles and triples are also combination vehicles. Class A CDL holders are qualified to drive combination vehicles." },
  { q: "What causes jackknifing in a tractor-trailer?", a: "Jackknifing occurs when the trailer pushes the tractor sideways, causing the combination to fold at the coupling point like a jackknife. The most common cause is braking too hard on slippery surfaces, which locks the drive axle wheels while the trailer continues moving forward. Proper brake application and maintaining adequate speed control can prevent jackknifing." },
  { q: "How many questions cover combination vehicles on the CDL test?", a: "Combination vehicles are primarily covered in the CDL General Knowledge test (100 questions) and in the separate combination vehicles knowledge section required for Class A applicants. The combination vehicles section has approximately 20 questions and requires 80% to pass." },
  { q: "What is offtracking?", a: "Offtracking is the difference in path between the front wheels and the rear wheels of a combination vehicle. When a tractor-trailer turns, the rear wheels of the trailer follow a tighter, inner path and cut the corner more than the front wheels. Longer combinations have greater offtracking and need more room when turning." },
  { q: "What is the 5th wheel?", a: "The 5th wheel is the coupling device mounted on the tractor that connects to the trailer&apos;s kingpin. It is a large, horseshoe-shaped plate with a locking jaw that grabs and holds the kingpin. The 5th wheel must be properly lubricated and positioned over the rear axles for correct weight distribution." },
];

const topics = [
  { icon: "🔗", title: "Coupling Systems", desc: "5th wheel, kingpin, coupling procedure, checking the connection, and locking the jaws." },
  { icon: "⚙️", title: "5th Wheel & Kingpin", desc: "How the coupling works, proper 5th wheel position, locking mechanism, and inspection checklist." },
  { icon: "⚠️", title: "Jackknife Prevention", desc: "What causes jackknifing, braking technique on slippery roads, and anti-jackknife braking systems." },
  { icon: "↩️", title: "Offtracking", desc: "Why rear wheels cut corners and how to allow extra clearance when turning tractor-trailers." },
  { icon: "🏗️", title: "Landing Gear", desc: "Raising and lowering the trailer landing gear, crank operation, and checking height before coupling." },
  { icon: "🌀", title: "Rearward Amplification", desc: "How trailer sway amplifies from front to rear on doubles and triples — a major rollover risk." },
];

export default function CDLCombinationVehiclesPage() {
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
              { "@type": "ListItem", position: 2, name: "CDL Tests", item: "https://caredmvprep.com/cdl-practice-test" },
              { "@type": "ListItem", position: 3, name: "CDL Combination Vehicles", item: "https://caredmvprep.com/cdl-combination-vehicles" },
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
          <div className="text-5xl mb-4">🚚</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Combination Vehicles Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Master tractor-trailer fundamentals for your Class A CDL. Covers FMCSA Section 6: 5th wheel coupling, jackknife prevention, offtracking, and rearward amplification.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#1a7f3c]">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li><Link href="/cdl-practice-test" className="hover:text-[#1a7f3c]">CDL Tests</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-800 font-medium">CDL Combination Vehicles</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Combination Vehicles Section</h2>
          <p className="text-gray-700 mb-4">
            Combination vehicles — tractor-trailers, doubles, and triples — are the backbone of freight transportation in the United States. The FMCSA Combination Vehicles section (Section 6) is one of the most important parts of the CDL knowledge exam for Class A applicants because combination vehicles behave very differently from other commercial vehicles.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding how the 5th wheel and kingpin work together, why jackknifing happens and how to prevent it, how offtracking affects turns, and what rearward amplification means for your braking and steering decisions is essential for safe operation.
          </p>
          <p className="text-gray-700">
            This content is tested within the CDL General Knowledge test and the Class A combination vehicles knowledge section. Every Class A CDL applicant must demonstrate mastery of these concepts before getting behind the wheel of a tractor-trailer.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "CDL Class Required", value: "Class A" },
              { label: "FMCSA Section", value: "Section 6" },
              { label: "Passing Score", value: "80%" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="text-2xl font-extrabold text-[#1a7f3c]">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Combination Vehicle Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <div key={t.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coupling Procedure */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Critical Combination Vehicle Concepts</h2>
          <div className="space-y-4">
            {[
              {
                title: "The Coupling Procedure",
                body: "Inspect the 5th wheel for cracks, proper lubrication, and that the jaws are open. Position the 5th wheel slightly below the trailer kingpin height. Back slowly under the trailer until the 5th wheel jaws lock around the kingpin. Tug test: pull forward with the trailer brakes set to confirm a locked connection. Then connect the air lines (blue for service brakes, red for emergency/supply) and the electrical connector.",
              },
              {
                title: "Preventing Jackknifes",
                body: "Jackknifing most commonly happens when the drive wheels lock up during hard braking on slippery surfaces. As the rear end of the tractor slides forward, the trailer pushes the tractor sideways. Prevent this by braking smoothly and progressively, never locking wheels, using engine braking on downgrades, and slowing to a safe speed before curves. Anti-lock brakes (ABS) help but are not a guarantee against jackknifing.",
              },
              {
                title: "Rearward Amplification",
                body: "In a doubles or triples combination, a movement of the lead tractor is amplified progressively as it passes to the rear trailer. A 1-foot swerve of the tractor might become a 3-foot swerve of the second trailer and a 5-foot swerve of the third. This rearward amplification greatly increases rollover risk for rear trailers, especially when the driver makes sudden steering corrections.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">All CDL Practice Tests</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/cdl-practice-test", label: "CDL Overview" },
              { href: "/cdl-general-knowledge", label: "General Knowledge" },
              { href: "/cdl-air-brakes", label: "Air Brakes" },
              { href: "/cdl-hazmat", label: "Hazmat" },
              { href: "/cdl-passenger", label: "Passenger" },
              { href: "/cdl-school-bus", label: "School Bus" },
              { href: "/cdl-tanker", label: "Tanker" },
              { href: "/cdl-doubles-triples", label: "Doubles & Triples" },
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
          <h2 className="text-2xl font-bold mb-3">Master Combination Vehicles</h2>
          <p className="text-gray-400 text-sm mb-6">Practice tractor-trailer knowledge questions and earn your Class A CDL.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
