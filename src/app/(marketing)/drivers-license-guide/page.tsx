import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Driver's License Guide – Types, Requirements, and How to Get One",
  description:
    "Complete driver&apos;s license guide: license classes A, B, C, teen graduated licensing (GDL), knowledge test requirements, road test tips, REAL ID requirements, and how to transfer from another state.",
  alternates: { canonical: "https://caredmvprep.com/drivers-license-guide" },
  openGraph: {
    url: "https://caredmvprep.com/drivers-license-guide",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is the difference between a Class A, B, and C license?", a: "Class A licenses allow driving combination vehicles (tractor-trailers, doubles, triples) over 26,001 lbs where the towed vehicle exceeds 10,000 lbs — this is the standard CDL for truck drivers. Class B licenses allow single vehicles over 26,001 lbs such as dump trucks, straight trucks, and city buses. Class C is the standard driver&apos;s license for most passenger vehicles, SUVs, and light trucks — required for vehicles designed for fewer than 16 passengers that are under 26,001 lbs." },
  { q: "What age can you get a learner&apos;s permit?", a: "The minimum age for a learner&apos;s permit varies by state, typically ranging from 15 to 16 years old. Most states set the minimum at 15 or 15 and a half. A few states allow permits as young as 14 in rural areas. Check your specific state&apos;s DMV website for the exact age requirement." },
  { q: "What is REAL ID?", a: "REAL ID is a federal security standard for state-issued identification cards and driver&apos;s licenses, established by the REAL ID Act of 2005. Starting May 7, 2025, a REAL ID-compliant license or ID (marked with a star) is required to board domestic flights and access federal facilities. To get a REAL ID, you must provide proof of identity, Social Security number, and two proofs of state residency at the DMV." },
  { q: "How long does a driver&apos;s license last?", a: "License validity periods vary by state, typically ranging from 4 to 8 years. Many states issue 8-year licenses to adults. Some states have shorter renewal cycles for older drivers. Your license expiration date is printed on the card." },
  { q: "How do I transfer my license from another state?", a: "To transfer your driver&apos;s license to a new state, visit the DMV in your new state, surrender your old license, provide proof of identity and residency in the new state, and pay the license fee. Most states will accept your out-of-state license and issue a new one without requiring you to retake the knowledge test, though some states may require a vision test and written exam. Check the DMV in your new state for specific requirements." },
];

const licenseClasses = [
  {
    cls: "Class C",
    desc: "Standard license for most drivers",
    vehicles: "Passenger cars, SUVs, light trucks, vans under 26,001 lbs, vehicles carrying fewer than 16 passengers",
    minAge: "16-18 (varies by state)",
    color: "bg-blue-50 border-blue-200",
  },
  {
    cls: "Class B",
    desc: "Large single commercial vehicles",
    vehicles: "Straight trucks, dump trucks, city buses, concrete mixers — any single vehicle over 26,001 lbs",
    minAge: "18 (21 for interstate)",
    color: "bg-green-50 border-green-200",
  },
  {
    cls: "Class A",
    desc: "Combination vehicles (CDL required)",
    vehicles: "Tractor-trailers, doubles, triples, flatbeds — combination vehicles where towed portion exceeds 10,000 lbs",
    minAge: "18 (21 for interstate)",
    color: "bg-orange-50 border-orange-200",
  },
];

const gdlSteps = [
  { phase: "Phase 1", name: "Learner&apos;s Permit", age: "15-16", desc: "Pass the knowledge test. Adult supervision required at all times. Usually no night driving, no highway driving." },
  { phase: "Phase 2", name: "Restricted License", age: "16-17", desc: "Pass the driving skills test after holding permit minimum time (3-12 months). Restrictions: no passengers under 20 (except family), no night driving (typically after 9-11 pm)." },
  { phase: "Phase 3", name: "Full License", age: "17-18", desc: "After holding restricted license for 6-12 months with no violations. All restrictions removed. Full driving privileges." },
];

export default function DriversLicenseGuidePage() {
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
              { "@type": "ListItem", position: 3, name: "Driver&apos;s License Guide", item: "https://caredmvprep.com/drivers-license-guide" },
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
          <div className="text-5xl mb-4">🪪</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Driver&apos;s License Guide</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about getting your driver&apos;s license — from permit to full license. License classes, teen GDL, REAL ID, knowledge tests, and more.
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
            <li className="text-gray-800 font-medium">Driver&apos;s License Guide</li>
          </ol>
        </div>
      </nav>

      {/* License Classes */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">License Classes Explained</h2>
          <div className="space-y-4">
            {licenseClasses.map((l) => (
              <div key={l.cls} className={`rounded-xl border p-6 ${l.color}`}>
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="font-extrabold text-xl text-gray-900 w-24 shrink-0">{l.cls}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">{l.desc}</div>
                    <div className="text-sm text-gray-700 mb-1"><span className="font-medium">Vehicles:</span> {l.vehicles}</div>
                    <div className="text-sm text-gray-700"><span className="font-medium">Minimum Age:</span> {l.minAge}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teen GDL */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Teen Graduated Driver Licensing (GDL)</h2>
          <p className="text-gray-700 mb-8">Every state has a Graduated Driver Licensing system for teen drivers that phases in driving privileges over time. The three phases are:</p>
          <div className="space-y-4">
            {gdlSteps.map((s) => (
              <div key={s.phase} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0 text-center">
                  <div className="text-xs font-medium text-gray-500">{s.phase}</div>
                  <div className="text-sm font-bold text-[#0d2240]">Age {s.age}</div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL ID */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">REAL ID Requirements</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-yellow-900">As of May 7, 2025, a REAL ID-compliant license or ID is required to board domestic flights and access federal facilities.</p>
          </div>
          <p className="text-gray-700 mb-4">
            To get a REAL ID driver&apos;s license, you must bring the following documents to the DMV:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Proof of identity (U.S. passport, birth certificate, or permanent resident card)",
              "Proof of Social Security number (Social Security card, W-2, or pay stub with SSN)",
              "Two proofs of state residency (utility bill, bank statement, lease agreement, or similar)",
              "Name change documents if applicable (marriage certificate, court order)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a7f3c] inline-block shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            REAL ID licenses are marked with a star symbol (usually in the upper right corner). If your current license does not have the star, you will need to visit the DMV in person with these documents to upgrade.
          </p>
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
              { href: "/cdl-guide", label: "CDL Guide" },
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
              { href: "/states", label: "All 50 States" },
              { href: "/california-dmv-practice-test", label: "California Test" },
              { href: "/texas-dmv-practice-test", label: "Texas Test" },
              { href: "/florida-dmv-practice-test", label: "Florida Test" },
              { href: "/new-york-dmv-practice-test", label: "New York Test" },
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
          <h2 className="text-2xl font-bold mb-3">Ready to Get Your License?</h2>
          <p className="text-gray-400 text-sm mb-6">Practice with real DMV-style questions for your state — free to start.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
