import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMV Resources & Study Guides – Driver's License, CDL, and Motorcycle",
  description:
    "Free DMV study resources for every type of license. Driver's license guides, CDL prep, motorcycle guides, study tips, and FAQs — everything you need to pass your test the first time.",
  alternates: { canonical: "https://caredmvprep.com/resources" },
  openGraph: {
    url: "https://caredmvprep.com/resources",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "How do I use these resources most effectively?",
    a: "Start with the guide that matches your license type (driver's license, CDL, or motorcycle). Read the guide to understand what the test covers, then use the practice tests to identify areas where you need more study. Focus extra time on your weak areas before exam day.",
  },
  {
    q: "Are the study guides based on official DMV materials?",
    a: "Yes. All guides and practice questions are based on official state DMV handbooks and FMCSA regulations. We review them regularly to ensure accuracy. However, always read your state's official handbook as well — it is the primary source for your specific test.",
  },
  {
    q: "How long does it take to prepare for a DMV test?",
    a: "Most people who study consistently for 5-7 days pass their first attempt. Use the resources and practice tests to study 30-60 minutes per day. Focus on practice tests in the last two days before your exam to reinforce what you have learned.",
  },
];

const popularResources = [
  {
    href: "/dmv-study-tips",
    icon: "📚",
    title: "DMV Study Tips",
    desc: "Proven strategies for passing your knowledge test the first time. Includes when to study, how to use practice tests, and what to bring on test day.",
    tag: "Most Popular",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    href: "/drivers-license-guide",
    icon: "🪪",
    title: "Driver's License Guide",
    desc: "Complete guide: license classes, graduated licensing, REAL ID requirements, knowledge test tips, and out-of-state license transfers.",
    tag: "Beginners",
    tagColor: "bg-blue-100 text-blue-700",
  },
];

const allResources = [
  {
    href: "/cdl-guide",
    icon: "🚛",
    title: "CDL Guide",
    desc: "How to get your CDL: Class A vs B vs C, DOT physical, endorsements, Hours of Service, and disqualifying offenses.",
    tag: "CDL",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    href: "/motorcycle-guide",
    icon: "🏍️",
    title: "Motorcycle Guide",
    desc: "Step-by-step guide to your motorcycle permit and license: MSF course, M endorsement, helmet laws, and insurance requirements.",
    tag: "Motorcycle",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    href: "/faqs",
    icon: "❓",
    title: "DMV FAQs",
    desc: "Answers to the most common questions about test formats, passing scores, retake policies, CDL requirements, and motorcycle endorsements.",
    tag: "Reference",
    tagColor: "bg-gray-100 text-gray-700",
  },
];

const relatedTests = [
  { href: "/states", label: "All 50 States", icon: "🗺️" },
  { href: "/california-dmv-practice-test", label: "California Test", icon: "🌊" },
  { href: "/texas-dmv-practice-test", label: "Texas Test", icon: "⭐" },
  { href: "/florida-dmv-practice-test", label: "Florida Test", icon: "🌴" },
  { href: "/new-york-dmv-practice-test", label: "New York Test", icon: "🗽" },
  { href: "/cdl-practice-test", label: "CDL Tests", icon: "🚛" },
  { href: "/cdl-general-knowledge", label: "CDL General Knowledge", icon: "📋" },
  { href: "/motorcycle-practice-test", label: "Motorcycle Tests", icon: "🏍️" },
  { href: "/motorcycle-permit-test", label: "Motorcycle Permit", icon: "📝" },
];

export default function ResourcesPage() {
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
          <div className="text-5xl mb-4">📖</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">DMV Resources &amp; Study Guides</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to prepare for your DMV test — driver&apos;s license, CDL, or motorcycle. Free guides, study tips, and practice questions all in one place.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#1a7f3c]">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-800 font-medium">Resources</li>
          </ol>
        </div>
      </nav>

      {/* Most Popular */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">🔥 Most Popular</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Start With These</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularResources.map((card) => (
              <Link key={card.href} href={card.href} className="group bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-200 p-6 hover:border-[#1a7f3c] hover:from-green-50 transition block">
                <div className="text-3xl mb-3">{card.icon}</div>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1a7f3c] transition text-lg">{card.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${card.tagColor}`}>{card.tag}</span>
                </div>
                <p className="text-sm text-gray-600">{card.desc}</p>
                <div className="mt-4 text-sm font-semibold text-[#1a7f3c]">Read guide →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Study Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResources.map((card) => (
              <Link key={card.href} href={card.href} className="group bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#1a7f3c] transition block">
                <div className="text-3xl mb-3">{card.icon}</div>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1a7f3c] transition">{card.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${card.tagColor}`}>{card.tag}</span>
                </div>
                <p className="text-sm text-gray-600">{card.desc}</p>
                <div className="mt-4 text-sm font-medium text-[#1a7f3c]">Read guide →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tests */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Practice Tests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {relatedTests.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-[#1a7f3c] hover:bg-green-50 transition text-center group"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-[#1a7f3c] transition">{t.label}</span>
              </Link>
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

      {/* CTA */}
      <section className="bg-[#0d2240] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Practicing?</h2>
          <p className="text-gray-400 text-sm mb-6">Create a free account and start practicing with real DMV-style questions today.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
