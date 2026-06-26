import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Practice Test 2025 – Free Commercial Driver's License Exam Prep",
  description:
    "Free CDL practice tests for General Knowledge, Air Brakes, Hazmat, Passenger, School Bus, Tanker, Doubles & Triples, and Combination Vehicles. Based on official FMCSA guidelines.",
  alternates: { canonical: "https://caredmvprep.com/cdl-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const subPages = [
  {
    href: "/cdl-general-knowledge",
    icon: "📋",
    title: "General Knowledge",
    desc: "Required for all CDL applicants. 100 questions covering FMCSA regulations, vehicle inspection, cargo, shifting, and safe driving. 80% to pass.",
    tag: "Required",
    tagColor: "bg-blue-100 text-blue-700",
    questions: 100,
  },
  {
    href: "/cdl-air-brakes",
    icon: "🛑",
    title: "Air Brakes",
    desc: "Removes the air brake restriction from your CDL. 25 questions on dual air systems, brake inspection, stopping distance, and emergency braking.",
    tag: "Restriction Removal",
    tagColor: "bg-red-100 text-red-700",
    questions: 25,
  },
  {
    href: "/cdl-hazmat",
    icon: "☢️",
    title: "Hazmat",
    desc: "Federal hazmat endorsement. 30 questions on placarding, shipping papers, loading/unloading, and emergency response procedures.",
    tag: "Endorsement",
    tagColor: "bg-yellow-100 text-yellow-700",
    questions: 30,
  },
  {
    href: "/cdl-passenger",
    icon: "🚌",
    title: "Passenger",
    desc: "Bus and passenger vehicle endorsement. 20 questions covering safe passenger transport, on-board procedures, and emergency exits.",
    tag: "Endorsement",
    tagColor: "bg-yellow-100 text-yellow-700",
    questions: 20,
  },
  {
    href: "/cdl-school-bus",
    icon: "🚍",
    title: "School Bus",
    desc: "School bus endorsement. 20 questions on student loading zones, railroad crossings, emergency evacuation, and school bus-specific rules.",
    tag: "Endorsement",
    tagColor: "bg-yellow-100 text-yellow-700",
    questions: 20,
  },
  {
    href: "/cdl-tanker",
    icon: "⛽",
    title: "Tanker Vehicles",
    desc: "Tanker endorsement. 20 questions covering liquid surge, high center of gravity, tank inspections, and safe tanker operation.",
    tag: "Endorsement",
    tagColor: "bg-yellow-100 text-yellow-700",
    questions: 20,
  },
  {
    href: "/cdl-doubles-triples",
    icon: "🔗",
    title: "Doubles & Triples",
    desc: "T endorsement for pulling multiple trailers. 20 questions on coupling/uncoupling, handling, and safe operation of double and triple combinations.",
    tag: "Endorsement",
    tagColor: "bg-yellow-100 text-yellow-700",
    questions: 20,
  },
  {
    href: "/cdl-combination-vehicles",
    icon: "🚛",
    title: "Combination Vehicles",
    desc: "Section 6 of the CDL exam. 20 questions on coupling, uncoupling, and safe operation of tractor-trailer combination vehicles.",
    tag: "Knowledge",
    tagColor: "bg-green-100 text-green-700",
    questions: 20,
  },
];

export default function CDLPracticePage() {
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
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2240] to-[#1a3a5c] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🚛</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Practice Tests</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Free Commercial Driver&apos;s License practice tests for all 8 knowledge areas — General Knowledge, Air Brakes, Hazmat, and every major endorsement. Based on official FMCSA guidelines.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-bold text-white text-lg transition"
          >
            Start Practicing Free
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#1a7f3c]">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-800 font-medium">CDL Tests</li>
          </ol>
        </div>
      </nav>

      {/* Sub-page Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your CDL Test</h2>
          <p className="text-gray-500 text-sm mb-8">Every CDL applicant must pass General Knowledge first. Add endorsements based on the vehicle types you will operate.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subPages.map((card) => (
              <Link key={card.href} href={card.href} className="group bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#1a7f3c] transition flex gap-4 items-start">
                <div className="text-3xl shrink-0">{card.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#1a7f3c] transition">{card.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${card.tagColor}`}>{card.tag}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{card.desc}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">{card.questions} questions</span>
                    <span className="text-xs text-gray-300">|</span>
                    <span className="text-xs font-medium text-[#1a7f3c]">Study now →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">CDL Test At a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Knowledge Tests", value: "8" },
              { label: "General Knowledge Qs", value: "100" },
              { label: "Passing Score", value: "80%" },
              { label: "FMCSA Based", value: "✓" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <div className="text-2xl font-extrabold text-[#1a7f3c]">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/cdl-guide", label: "CDL Guide" },
              { href: "/states", label: "All States" },
              { href: "/motorcycle-practice-test", label: "Motorcycle Tests" },
              { href: "/resources", label: "All Resources" },
              { href: "/pricing", label: "View Pricing" },
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
          <h2 className="text-2xl font-bold mb-3">Starting Your CDL Journey?</h2>
          <p className="text-gray-400 text-sm mb-6">Create a free account and start practicing CDL knowledge questions today.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
