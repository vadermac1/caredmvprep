import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Doubles & Triples Practice Test 2025 – T Endorsement Prep",
  description:
    "Free CDL Doubles & Triples practice test for the T endorsement. 20 questions, 80% to pass. Covers coupling/uncoupling, crack-the-whip effect, converter dollies, and braking distances.",
  alternates: { canonical: "https://caredmvprep.com/cdl-doubles-triples" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-doubles-triples",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is the T endorsement?", a: "The T (Doubles/Triples) endorsement allows CDL holders to pull double or triple trailers — combinations with two or three trailers attached in a train. Without this endorsement, you are restricted to single-trailer combinations only." },
  { q: "How many questions are on the CDL Doubles & Triples test?", a: "The CDL Doubles & Triples endorsement test has 20 questions. You must correctly answer at least 16 (80%) to pass." },
  { q: "Can you back up a double or triple trailer combination?", a: "No — doubles and triples cannot be backed effectively. When you attempt to back a double or triple trailer, the combination will jackknife immediately. If you need to reverse direction, you must find a way to turn around rather than back up." },
  { q: "What is the crack-the-whip effect with doubles and triples?", a: "The crack-the-whip effect occurs when rear trailers in a multiple-trailer combination swing out farther and faster than the front trailer when the driver takes evasive action, brakes hard, or takes a curve too fast. The rear trailer can swing wide enough to roll over or jackknife, even if the front of the combination appears stable." },
  { q: "How much longer does it take to stop a double trailer compared to a single?", a: "Double and triple trailer combinations take significantly longer to stop than single-trailer combinations because of the greater mass and the increased potential for trailer sway and brake imbalance. Always increase your following distance and plan ahead for stops when pulling doubles or triples." },
];

const topics = [
  { icon: "🔗", title: "Coupling & Uncoupling", desc: "Step-by-step procedure for connecting and disconnecting double and triple trailer combinations safely." },
  { icon: "🔧", title: "Converter Dollies", desc: "What a converter dolly is, how it connects trailers, the safety chain, and dolly inspection." },
  { icon: "🌀", title: "Crack-the-Whip Effect", desc: "Why rear trailers swing out farther than front trailers and how to drive to avoid this dangerous effect." },
  { icon: "🛑", title: "Braking & Stopping", desc: "The greatly increased stopping distances with doubles and triples, and techniques for controlled stops." },
  { icon: "↩️", title: "Turning & Offtracking", desc: "How rear trailers cut corners more than single trailers and how to allow extra clearance." },
  { icon: "⚠️", title: "Safety Restrictions", desc: "No backing up doubles/triples, avoiding high winds, and speed restrictions in many states." },
];

export default function CDLDoublesTriplesPage() {
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
              { "@type": "ListItem", position: 3, name: "CDL Doubles & Triples", item: "https://caredmvprep.com/cdl-doubles-triples" },
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
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Doubles &amp; Triples Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get your T endorsement to pull double and triple trailers. 20 questions on coupling, crack-the-whip, converter dollies, and stopping distances. Need 16 correct to pass.
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
            <li className="text-gray-800 font-medium">CDL Doubles &amp; Triples</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the CDL Doubles &amp; Triples (T) Endorsement</h2>
          <p className="text-gray-700 mb-4">
            The T endorsement allows Class A CDL holders to operate vehicles pulling double or triple trailers. These combinations — sometimes called &quot;Rocky Mountain doubles&quot; or &quot;turnpike doubles&quot; — are common in freight transport and require specialized knowledge because their handling characteristics differ dramatically from single-trailer combinations.
          </p>
          <p className="text-gray-700 mb-4">
            The T endorsement test has <strong>20 questions</strong>; you need at least <strong>16 correct (80%)</strong>. Key topics include coupling and uncoupling procedures, converter dollies, the crack-the-whip effect, increased braking distances, offtracking on turns, and the important limitation that <strong>doubles and triples cannot be backed up effectively</strong>.
          </p>
          <p className="text-gray-700">
            Note that triple trailers are prohibited in some states. Even in states that permit them, they may be restricted to certain highways. Always check your state&apos;s regulations before operating triple combinations.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Questions", value: "20" },
              { label: "Passing Score", value: "80%" },
              { label: "Questions to Pass", value: "16/20" },
              { label: "Can Back Up?", value: "No" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Doubles &amp; Triples Topics</h2>
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

      {/* Key Concepts */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes Doubles &amp; Triples Different</h2>
          <div className="space-y-4">
            {[
              {
                title: "Converter Dolly Inspection",
                body: "The converter dolly is the device that connects the rear trailer(s) to the combination. You must inspect the dolly&apos;s pintle hook (latch), the safety chains, air and electrical connections, and the 5th wheel (if present). The dolly must be positioned so the trailer is level and the coupling is secure before moving.",
              },
              {
                title: "Coupling a Double — Step by Step",
                body: "Start with the tractor and first trailer (which you already know how to couple). Then position the converter dolly: connect it to the first trailer&apos;s rear, then back the first trailer up to the second trailer and connect. Connect the safety chains in an X pattern, connect air lines (glad hands), and check that all connections are tight before pulling forward.",
              },
              {
                title: "Why You Cannot Back a Double or Triple",
                body: "When you back a multi-trailer combination, even small steering inputs cause the rear trailer to jackknife immediately. There is no way to steer a double or triple while backing up. If you get into a position where you would need to back, the only solution is to disconnect the trailers, reposition individually, and reconnect.",
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
          <h2 className="text-2xl font-bold mb-3">Get Your T Endorsement</h2>
          <p className="text-gray-400 text-sm mb-6">Practice doubles and triples questions and pass the test on your first try.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
