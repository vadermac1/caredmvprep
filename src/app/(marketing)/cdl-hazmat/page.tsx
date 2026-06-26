import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Hazmat Practice Test 2025 – Hazardous Materials Endorsement Prep",
  description:
    "Free CDL Hazmat practice test for the H endorsement. 30 questions, 80% to pass. Covers 9 hazmat classes, placarding rules, shipping papers, ERG, and TSA background check requirements.",
  alternates: { canonical: "https://caredmvprep.com/cdl-hazmat" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-hazmat",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What does the H endorsement allow you to do?", a: "The H endorsement (Hazardous Materials) allows you to transport hazardous materials as defined by federal regulations. This includes flammable liquids and gases, explosives, poisons, corrosives, radioactive materials, and other dangerous goods in quantities that require placarding." },
  { q: "How many questions are on the CDL Hazmat test?", a: "The CDL Hazmat endorsement test has 30 questions. You must answer at least 24 questions correctly to pass (80%)." },
  { q: "Do you need a background check for the CDL Hazmat endorsement?", a: "Yes. Federal law requires a Transportation Security Administration (TSA) fingerprint-based background check for all CDL Hazmat endorsement applicants. The background check screens for criminal history and immigration status. This check must be completed before the endorsement is added to your CDL." },
  { q: "How long is the CDL Hazmat endorsement valid?", a: "The hazmat endorsement is valid for the same period as your CDL, typically 4 to 8 years depending on your state. However, you must pass the TSA background check every five years to maintain the endorsement." },
  { q: "What are the 9 hazmat classes?", a: "The nine hazmat classes are: Class 1 (Explosives), Class 2 (Gases), Class 3 (Flammable and Combustible Liquids), Class 4 (Flammable Solids, Spontaneously Combustible), Class 5 (Oxidizers and Organic Peroxides), Class 6 (Poisons and Infectious Substances), Class 7 (Radioactive Materials), Class 8 (Corrosives), and Class 9 (Miscellaneous Hazardous Materials)." },
];

const topics = [
  { icon: "☢️", title: "Hazmat Classes", desc: "All 9 classes: explosives, gases, flammable liquids, flammable solids, oxidizers, poisons, radioactive, corrosives, and miscellaneous." },
  { icon: "🚨", title: "Placarding Requirements", desc: "When placards are required (>1,000 lbs of most materials), which placard to use, and correct placement." },
  { icon: "📄", title: "Shipping Papers", desc: "Bills of lading, manifests, and shipping papers — where to keep them and what information they must contain." },
  { icon: "📗", title: "Emergency Response", desc: "Emergency Response Guidebook (ERG), notification requirements, and first responder information." },
  { icon: "🚛", title: "Loading Rules", desc: "Loading and unloading procedures, segregation tables (what can't travel together), and parking rules." },
  { icon: "🔒", title: "Security Plans", desc: "Federal security plan requirements, recognizing security threats, and en-route security measures." },
];

const hazmatClasses = [
  { num: "1", name: "Explosives", example: "Ammunition, fireworks, TNT" },
  { num: "2", name: "Gases", example: "Propane, oxygen, chlorine" },
  { num: "3", name: "Flammable Liquids", example: "Gasoline, ethanol, diesel" },
  { num: "4", name: "Flammable Solids", example: "Matches, metal powders" },
  { num: "5", name: "Oxidizers", example: "Hydrogen peroxide, ammonium nitrate" },
  { num: "6", name: "Poisons", example: "Pesticides, cyanide compounds" },
  { num: "7", name: "Radioactive", example: "Uranium, medical isotopes" },
  { num: "8", name: "Corrosives", example: "Sulfuric acid, battery fluid" },
  { num: "9", name: "Miscellaneous", example: "Dry ice, lithium batteries, magnetized material" },
];

export default function CDLHazmatPage() {
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
              { "@type": "ListItem", position: 3, name: "CDL Hazmat", item: "https://caredmvprep.com/cdl-hazmat" },
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
          <div className="text-5xl mb-4">☢️</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Hazmat Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prepare for the H endorsement exam. 30 questions covering all 9 hazmat classes, placarding, shipping papers, and emergency response. Need 24 correct to pass.
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
            <li className="text-gray-800 font-medium">CDL Hazmat</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the CDL Hazmat Endorsement</h2>
          <p className="text-gray-700 mb-4">
            The H endorsement is required to transport hazardous materials in quantities that require placarding under federal regulations. Hazmat drivers carry some of the most dangerous cargo on the road — from gasoline tankers to chemical shipments — and must demonstrate thorough knowledge of federal safety rules.
          </p>
          <p className="text-gray-700 mb-4">
            The Hazmat endorsement test has <strong>30 questions</strong>; you need at least <strong>24 correct (80%)</strong> to pass. Unlike other CDL tests, obtaining the hazmat endorsement also requires passing a <strong>TSA fingerprint-based background check</strong>, which can take several days to weeks to process.
          </p>
          <p className="text-gray-700">
            Placard rules are especially important: most hazmat placards are required when you carry <strong>1,000 lbs or more</strong> of a material in a single shipment, though some materials (like explosives and poison gases) require placards in ANY quantity.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Questions", value: "30" },
              { label: "Passing Score", value: "80%" },
              { label: "Questions to Pass", value: "24/30" },
              { label: "Background Check", value: "Required" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Hazmat Topics</h2>
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

      {/* 9 Classes Table */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 9 Hazardous Materials Classes</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#0d2240] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Class</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Common Examples</th>
                </tr>
              </thead>
              <tbody>
                {hazmatClasses.map((c, i) => (
                  <tr key={c.num} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-[#1a7f3c]">{c.num}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{c.name}</td>
                    <td className="px-4 py-3 text-gray-600">{c.example}</td>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">All CDL Practice Tests</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/cdl-practice-test", label: "CDL Overview" },
              { href: "/cdl-general-knowledge", label: "General Knowledge" },
              { href: "/cdl-air-brakes", label: "Air Brakes" },
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
          <h2 className="text-2xl font-bold mb-3">Earn Your Hazmat Endorsement</h2>
          <p className="text-gray-400 text-sm mb-6">Practice all 30 hazmat question types and pass the test with confidence.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
