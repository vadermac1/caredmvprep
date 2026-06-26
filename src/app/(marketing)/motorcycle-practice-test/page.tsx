import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle Practice Test 2025 – Free M1/M2 & Endorsement Exam Prep",
  description:
    "Free motorcycle knowledge practice tests to prepare for your state's M1/M2 permit, motorcycle endorsement, and license test. Covers safe riding, road rules, gear, and road signs.",
  alternates: { canonical: "https://caredmvprep.com/motorcycle-practice-test" },
  openGraph: {
    url: "https://caredmvprep.com/motorcycle-practice-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const subPages = [
  {
    href: "/motorcycle-permit-test",
    icon: "📝",
    title: "Permit Test",
    desc: "Pass your M1 written knowledge test to get your motorcycle learner's permit. Covers road rules, signs, and basic riding principles.",
    tag: "Start Here",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    href: "/motorcycle-endorsement-test",
    icon: "🏅",
    title: "Endorsement Test",
    desc: "Add a motorcycle endorsement to your existing driver's license. Written exam plus skills test in most states.",
    tag: "Popular",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    href: "/motorcycle-license-test",
    icon: "🪪",
    title: "License Test",
    desc: "Get a standalone motorcycle-only license (Class M). Requirements vary by state — covers knowledge and riding skills.",
    tag: "Class M",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    href: "/motorcycle-road-signs",
    icon: "🚦",
    title: "Road Signs",
    desc: "Road signs, signals, and pavement markings tested on the motorcycle written exam. Essential for new riders.",
    tag: "Signs",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    href: "/motorcycle-safety-tips",
    icon: "🛡️",
    title: "Safety Tips",
    desc: "ATGATT gear, T-CLOCS inspection, emergency braking, lane positioning, and hazard avoidance — tested on the written exam.",
    tag: "Safety",
    tagColor: "bg-red-100 text-red-700",
  },
];

const topics = [
  "Protective gear and riding attire (ATGATT)",
  "T-CLOCS pre-ride inspection checklist",
  "Braking distance and stopping techniques",
  "Lane positioning and cornering",
  "Riding in groups",
  "Crossing railroad tracks safely",
  "Handling road hazards (gravel, wet surfaces)",
  "Highway and freeway riding",
  "Carrying passengers and cargo",
  "Alcohol and riding impairment",
  "Sharing the road with vehicles",
  "State-specific motorcycle endorsement rules",
];

export default function MotorcyclePracticePage() {
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
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2240] to-[#3a0a0a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🏍️</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Motorcycle Practice Tests</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Prepare for your state motorcycle knowledge test. Questions cover safe riding,
            road rules, and the skills needed to earn your permit or endorsement.
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
            <li className="text-gray-800 font-medium">Motorcycle Tests</li>
          </ol>
        </div>
      </nav>

      {/* Sub-page Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Motorcycle Test</h2>
          <p className="text-gray-500 text-sm mb-8">Select the test that matches where you are in the licensing process.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPages.map((card) => (
              <Link key={card.href} href={card.href} className="group bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#1a7f3c] transition block">
                <div className="text-3xl mb-3">{card.icon}</div>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1a7f3c] transition">{card.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${card.tagColor}`}>{card.tag}</span>
                </div>
                <p className="text-sm text-gray-600">{card.desc}</p>
                <div className="mt-4 text-sm font-medium text-[#1a7f3c]">Study now →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Topics Covered on the Motorcycle Written Test</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {topics.map((topic) => (
              <div key={topic} className="flex items-center gap-3 bg-white rounded-lg border border-gray-100 px-4 py-3 shadow-sm">
                <span className="text-[#1a7f3c] font-bold text-lg">✓</span>
                <span className="text-sm text-gray-700">{topic}</span>
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
              { href: "/motorcycle-guide", label: "Motorcycle Guide" },
              { href: "/motorcycle-safety-tips", label: "Safety Tips" },
              { href: "/motorcycle-road-signs", label: "Road Signs" },
              { href: "/states", label: "All States" },
              { href: "/cdl-practice-test", label: "CDL Practice Tests" },
              { href: "/resources", label: "All Resources" },
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
          <h2 className="text-2xl font-bold mb-3">Ready to Pass Your Motorcycle Test?</h2>
          <p className="text-gray-400 text-sm mb-6">Create a free account and start practicing with state-specific motorcycle questions today.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
