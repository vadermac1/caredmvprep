import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL General Knowledge Practice Test 2025 – Free Exam Prep",
  description:
    "Free CDL General Knowledge practice test covering FMCSA regulations, vehicle inspection, shifting, cargo, hours of service, and pre-trip inspection. 100 questions, 80% to pass.",
  alternates: { canonical: "https://caredmvprep.com/cdl-general-knowledge" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-general-knowledge",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "How many questions are on the CDL General Knowledge test?", a: "The CDL General Knowledge test has 100 questions. You need to answer at least 80 correctly (80%) to pass." },
  { q: "How long do you have to take the CDL General Knowledge test?", a: "Most states do not impose a strict time limit on the CDL General Knowledge test. You are typically given as much time as you need to complete the 100 questions." },
  { q: "Is the CDL General Knowledge test the same in every state?", a: "The CDL General Knowledge test is based on FMCSA (Federal Motor Carrier Safety Administration) regulations, so the content is largely the same across all states. Some states may add state-specific questions, but the core material is standardized." },
  { q: "What score do you need to pass the CDL General Knowledge test?", a: "You need a score of at least 80% to pass, which means answering 80 out of 100 questions correctly." },
  { q: "Can you retake the CDL General Knowledge test if you fail?", a: "Yes. Retake policies vary by state, but most states allow you to retake the test the same day or the following business day. Some states require a waiting period after multiple failures. Check your state&apos;s DMV website for specific rules." },
];

const topics = [
  { icon: "🔍", title: "Vehicle Inspection", pct: "25%", desc: "Pre-trip and en-route inspection procedures, identifying defects, and what to check before driving." },
  { icon: "⚙️", title: "Shifting & Backing", pct: "20%", desc: "Proper shifting techniques, backing maneuvers, and handling different transmission types." },
  { icon: "📦", title: "Cargo Handling", pct: "15%", desc: "Securing loads, weight limits, cargo documentation, and preventing cargo shifts." },
  { icon: "🛣️", title: "Driving Safety", pct: "20%", desc: "Safe driving practices, speed management, space management, and adverse conditions." },
  { icon: "🔗", title: "Combination Vehicles", pct: "10%", desc: "Basics of tractor-trailer operation, coupling, and combination vehicle characteristics." },
  { icon: "📋", title: "Pre-trip Procedures", pct: "10%", desc: "Starting engine checks, brake tests, and documentation requirements before any trip." },
];

export default function CDLGeneralKnowledgePage() {
  return (
    <div>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://caredmvprep.com" },
              { "@type": "ListItem", position: 2, name: "CDL Tests", item: "https://caredmvprep.com/cdl-practice-test" },
              { "@type": "ListItem", position: 3, name: "CDL General Knowledge", item: "https://caredmvprep.com/cdl-general-knowledge" },
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
          <div className="text-5xl mb-4">📋</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL General Knowledge Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The foundation of every CDL. Practice all 100 questions covering FMCSA regulations, vehicle inspection, cargo, and safe driving. You need 80% to pass.
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
            <li className="text-gray-800 font-medium">CDL General Knowledge</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the CDL General Knowledge Test?</h2>
          <p className="text-gray-700 mb-4">
            The CDL General Knowledge test is required for every applicant pursuing a Commercial Driver&apos;s License, regardless of the class (A, B, or C) or any endorsements. It tests your understanding of the Federal Motor Carrier Safety Administration (FMCSA) regulations that govern commercial vehicle operation in the United States.
          </p>
          <p className="text-gray-700 mb-4">
            The test consists of <strong>100 questions</strong> drawn from eight major knowledge areas: driving safely, transporting cargo, transporting passengers, pre-trip vehicle inspection, basic vehicle controls, shifting and backing, combination vehicles, and hazardous materials basics. You must answer at least <strong>80 questions correctly (80%)</strong> to pass.
          </p>
          <p className="text-gray-700">
            Unlike some endorsement tests, the General Knowledge exam has no strict time limit in most states, so read each question carefully. This is the single most important CDL exam — everything else builds on this foundation.
          </p>

          {/* Stats bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Questions", value: "100" },
              { label: "Passing Score", value: "80%" },
              { label: "Questions to Pass", value: "80/100" },
              { label: "Time Limit", value: "None" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What the Test Covers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <div key={t.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{t.title}</h3>
                  <span className="text-xs bg-green-100 text-[#1a7f3c] px-2 py-0.5 rounded-full font-semibold">{t.pct}</span>
                </div>
                <p className="text-sm text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Pass the CDL General Knowledge Test</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Read the FMCSA CDL Handbook", body: "Your state&apos;s CDL handbook is based on the FMCSA Commercial Driver&apos;s License Standards. Read it from cover to cover — don&apos;t skip the sections that seem obvious. The test pulls questions from every section." },
              { step: "2", title: "Focus on Vehicle Inspection", body: "The pre-trip inspection section is one of the highest-weighted areas. Memorize the inspection sequence: engine compartment, cab check, external inspection, signal lights, brakes, and trailer coupling." },
              { step: "3", title: "Practice with Realistic Questions", body: "The FMCSA structures questions around specific regulations. Practice tests that mirror the real exam format help you recognize the phrasing of correct answers and avoid trick questions." },
              { step: "4", title: "Review Hours of Service Rules", body: "Hours of Service (HOS) is frequently tested. Know the 11-hour driving limit, 14-hour on-duty window, 30-minute rest break requirement, and the 60/70-hour rules." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <div className="w-8 h-8 rounded-full bg-[#0d2240] text-white text-sm font-bold flex items-center justify-center shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.body}</p>
                </div>
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
              { href: "/cdl-air-brakes", label: "Air Brakes" },
              { href: "/cdl-hazmat", label: "Hazmat" },
              { href: "/cdl-passenger", label: "Passenger" },
              { href: "/cdl-school-bus", label: "School Bus" },
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
          <h2 className="text-2xl font-bold mb-3">Ready to Practice?</h2>
          <p className="text-gray-400 text-sm mb-6">Create a free account and start practicing CDL General Knowledge questions today.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
