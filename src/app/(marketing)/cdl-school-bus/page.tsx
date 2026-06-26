import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL School Bus Practice Test 2025 – S Endorsement Exam Prep",
  description:
    "Free CDL School Bus practice test for the S endorsement. 20 questions, 80% to pass. Covers student danger zones, loading/unloading, railroad crossings, and emergency evacuation.",
  alternates: { canonical: "https://caredmvprep.com/cdl-school-bus" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-school-bus",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What endorsements does a school bus driver need?", a: "School bus drivers must hold both the P (Passenger) endorsement and the S (School Bus) endorsement on their CDL. The P endorsement alone is not sufficient to legally operate a school bus with students." },
  { q: "How many questions are on the CDL School Bus test?", a: "The CDL School Bus endorsement test has 20 questions. You must correctly answer at least 16 questions (80%) to pass." },
  { q: "What is the danger zone around a school bus?", a: "The danger zone is the area within 30 feet surrounding the school bus where children are at the greatest risk of being struck by other vehicles or by the bus itself. The most dangerous zone is the area directly in front of the bus where the driver cannot see. Children must cross at least 10 feet in front of the bus." },
  { q: "When must a school bus stop at railroad crossings?", a: "School buses must stop at all railroad crossings, every time, without exception. The driver must stop between 15 and 50 feet before the nearest rail, turn off all noisy equipment, open the door, and listen and look in both directions before crossing. You must never shift gears while crossing the tracks." },
  { q: "What are the loading and unloading signal procedures?", a: "When approaching a school bus stop, the driver activates flashing amber lights to warn traffic to slow down (typically 200 feet before the stop in most states). When stopped, the red lights flash and the stop arm extends. All traffic in both directions must stop (except where a physical barrier separates lanes). Students may not board or exit until the driver signals it is safe." },
];

const topics = [
  { icon: "🔍", title: "School Bus Inspection", desc: "Pre-trip checklist unique to school buses: crossing control arm, strobe light, stop arm, and emergency equipment." },
  { icon: "🧒", title: "Student Loading Zones", desc: "Proper stop location, distance from curb, and procedures for students walking to and from the bus." },
  { icon: "⚠️", title: "Danger Zone", desc: "The 30-foot zone surrounding the bus where students are at greatest risk — and how to ensure it is clear." },
  { icon: "🚂", title: "Railroad Crossings", desc: "Mandatory stop for ALL school buses at ALL RR crossings — no exceptions, ever." },
  { icon: "🚨", title: "Emergency Evacuation", desc: "When to evacuate, how to direct students, assigning helpers, and accounting for all students." },
  { icon: "📚", title: "Student Management", desc: "Keeping students seated, preventing dangerous distractions, and managing student conduct safely." },
];

export default function CDLSchoolBusPage() {
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
              { "@type": "ListItem", position: 3, name: "CDL School Bus", item: "https://caredmvprep.com/cdl-school-bus" },
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
          <div className="text-5xl mb-4">🚍</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL School Bus Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Earn your S endorsement and drive safely with students on board. 20 questions covering danger zones, loading procedures, and railroad crossings. Need 16 correct to pass.
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
            <li className="text-gray-800 font-medium">CDL School Bus</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the School Bus (S) Endorsement</h2>
          <p className="text-gray-700 mb-4">
            The S endorsement is required to drive a school bus transporting students to and from school or school-related activities. Because school buses carry children — one of the most vulnerable groups of passengers — the rules are more detailed and strictly enforced than for any other passenger vehicle.
          </p>
          <p className="text-gray-700 mb-4">
            To legally drive a school bus, you need <strong>both the P (Passenger) endorsement and the S (School Bus) endorsement</strong>. The S endorsement test has <strong>20 questions</strong>; you must answer at least <strong>16 correctly (80%)</strong> to pass. The exam covers school bus-specific inspection items, student danger zones, loading and unloading procedures, mandatory railroad crossing stops, and emergency evacuation.
          </p>
          <p className="text-gray-700">
            Many states also require background checks, first aid certification, and state-specific training before you can begin work as a school bus driver — check your state&apos;s requirements in addition to the CDL endorsements.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Questions", value: "20" },
              { label: "Passing Score", value: "80%" },
              { label: "Questions to Pass", value: "16/20" },
              { label: "Also Need", value: "P + S" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key School Bus Topics</h2>
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

      {/* Key Rules */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Critical School Bus Rules to Know</h2>
          <div className="space-y-4">
            {[
              {
                title: "The 30-Foot Danger Zone",
                body: "Children must always walk at least 10 feet in front of the bus so the driver can see them. The area within 30 feet of the school bus in all directions is considered the danger zone. Drivers must check mirrors to ensure the danger zone is clear before moving the bus — never assume children are visible.",
              },
              {
                title: "Stop Signal Sequence",
                body: "Approaching a stop: activate flashing amber lights at least 200 feet before the stop. At the stop: activate red flashing lights, extend the stop arm, and open the door. All traffic in both directions must stop and wait until the red lights stop flashing. Do NOT move the bus until all students have cleared the danger zone.",
              },
              {
                title: "Emergency Evacuation Procedures",
                body: "You must evacuate the bus when: it is on or near railroad tracks, in the path of an approaching fire, or when continuing the route poses a greater risk than evacuating. When evacuating, appoint student helpers at each exit, direct students at least 100 feet away from the bus (upwind from fuel or hazmat), and conduct a roll call once all students are off.",
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
              { href: "/cdl-tanker", label: "Tanker" },
              { href: "/cdl-doubles-triples", label: "Doubles & Triples" },
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
          <h2 className="text-2xl font-bold mb-3">Earn Your School Bus Endorsement</h2>
          <p className="text-gray-400 text-sm mb-6">Practice all 20 school bus question types and pass with confidence.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
