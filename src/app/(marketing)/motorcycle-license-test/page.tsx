import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle License Practice Test 2025 – M1 License Exam Prep",
  description:
    "Free motorcycle license practice test for the M1/M2 exam. Covers California M1 vs M2 license types, written test format (21 questions), skills test requirements, and graduated licensing for riders under 21.",
  alternates: { canonical: "https://caredmvprep.com/motorcycle-license-test" },
  openGraph: {
    url: "https://caredmvprep.com/motorcycle-license-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is an M1 motorcycle license?", a: "An M1 license is a Class M motorcycle license that authorizes the holder to operate any two-wheel motorcycle, motorized scooter, or motorized bicycle. It is the standard motorcycle license in California and some other states. M1 holders can ride any motorcycle of any engine size." },
  { q: "What is an M2 motorcycle license?", a: "An M2 license is a restricted motorcycle license limited to motorized bicycles (mopeds), motorized scooters, and similar low-powered two-wheelers. In California, M2 is for mopeds and motorized bicycles. M2 holders cannot ride standard motorcycles. The M2 is easier to obtain and requires less testing." },
  { q: "How many questions are on the California motorcycle written test?", a: "The California DMV motorcycle knowledge test has 21 questions. You need to answer at least 15 correctly (71%) to pass. The test covers information from the California Motorcycle Handbook." },
  { q: "Do you need a separate license for motorcycles?", a: "It depends on your state. California, Florida, and a few other states issue separate motorcycle license classes (M1, M2). Most other states simply add an M endorsement to your existing driver&apos;s license. The end result is similar — you are legally authorized to ride — but the process differs." },
  { q: "What is the motorcycle skills test?", a: "The motorcycle skills test evaluates your ability to safely control a motorcycle at low speeds in a closed course. Common exercises include: the U-turn (within a defined space without putting your foot down), the quick stop (stopping quickly from 20 mph), figure-8 (tests balance), swerve test (emergency lane change), and cornering. The MSF Basic RiderCourse completion card waives this test in most states." },
];

const topics = [
  { icon: "🪪", title: "M1 vs M2 License Types", desc: "The difference between full M1 and restricted M2 — and which one you need for your bike." },
  { icon: "📝", title: "Written Test Format", desc: "How many questions, what score you need, and what topics are tested in your state." },
  { icon: "🏍️", title: "Skills Test Requirements", desc: "U-turn, quick stop, figure-8, swerve, and cornering — how each exercise is scored." },
  { icon: "🧒", title: "Graduated Licensing for Minors", desc: "Permit restrictions for riders under 21 and how the GDL system works for motorcycle riders." },
  { icon: "🛡️", title: "Insurance Requirements", desc: "Minimum liability insurance required for motorcycles in most states and what it covers." },
  { icon: "⬆️", title: "Upgrading from Permit to License", desc: "When you can test for a full license and what happens at the DMV appointment." },
];

export default function MotorcycleLicenseTestPage() {
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
              { "@type": "ListItem", position: 2, name: "Motorcycle Tests", item: "https://caredmvprep.com/motorcycle-practice-test" },
              { "@type": "ListItem", position: 3, name: "Motorcycle License Test", item: "https://caredmvprep.com/motorcycle-license-test" },
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
          <div className="text-5xl mb-4">🏍️</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Motorcycle License Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prepare for your M1 or M2 motorcycle license exam. California&apos;s test is 21 questions — you need 15 to pass. Learn about M1 vs M2, skills test components, and graduated licensing.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#1a7f3c]">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li><Link href="/motorcycle-practice-test" className="hover:text-[#1a7f3c]">Motorcycle Tests</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-800 font-medium">Motorcycle License Test</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">M1 vs M2: Understanding Motorcycle License Classes</h2>
          <p className="text-gray-700 mb-4">
            In California and several other states, a motorcycle license is a separate class (M) rather than an endorsement added to your existing license. California&apos;s system has two classes: <strong>M1</strong> (full motorcycle license for any motorcycle, motorized scooter, or motorized bicycle) and <strong>M2</strong> (restricted to motorized bicycles and mopeds with engine displacement below 150cc).
          </p>
          <p className="text-gray-700 mb-4">
            Most riders want the <strong>M1 license</strong>, which allows them to ride any motorcycle. To get it, you must pass a 21-question written test (need 15 correct — 71%) and complete either the DMV skills test or an approved MSF RiderCourse. Riders under 21 must complete an approved motorcycle training course before obtaining an M1.
          </p>
          <p className="text-gray-700">
            Even in states that use endorsements rather than separate classes, the knowledge requirements are similar. The key topics — protective gear, pre-ride inspection, lane positioning, safe following distance, and emergency braking — apply everywhere.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "CA Written Questions", value: "21" },
              { label: "CA Passing Score", value: "71%" },
              { label: "Correct to Pass", value: "15/21" },
              { label: "M1 Covers", value: "All bikes" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="text-2xl font-extrabold text-[#1a7f3c]">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* License Comparison */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">M1 vs M2 Quick Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#0d2240] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-left">M1 License</th>
                  <th className="px-4 py-3 text-left">M2 License</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Motorcycles (standard)", "✅ Yes", "❌ No"],
                  ["Motorized scooters", "✅ Yes", "✅ Yes"],
                  ["Mopeds / motorized bicycles", "✅ Yes", "✅ Yes (main use)"],
                  ["Highway riding", "✅ Yes", "❌ No (usually)"],
                  ["Written test required", "✅ Yes", "✅ Yes"],
                  ["Skills test required", "✅ Yes (or MSF)", "✅ Yes (or MSF)"],
                ].map(([feat, m1, m2], i) => (
                  <tr key={feat} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feat}</td>
                    <td className="px-4 py-3 text-gray-700">{m1}</td>
                    <td className="px-4 py-3 text-gray-700">{m2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key License Test Topics</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">All Motorcycle Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/motorcycle-practice-test", label: "Motorcycle Overview" },
              { href: "/motorcycle-permit-test", label: "Permit Test" },
              { href: "/motorcycle-endorsement-test", label: "Endorsement Test" },
              { href: "/motorcycle-road-signs", label: "Road Signs" },
              { href: "/motorcycle-safety-tips", label: "Safety Tips" },
              { href: "/motorcycle-guide", label: "Motorcycle Guide" },
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
          <h2 className="text-2xl font-bold mb-3">Get Your Motorcycle License</h2>
          <p className="text-gray-400 text-sm mb-6">Practice the written test questions and pass the M1 exam your first try.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
