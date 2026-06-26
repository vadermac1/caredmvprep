import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Tanker Endorsement Practice Test 2025 – N Endorsement Prep",
  description:
    "Free CDL Tanker endorsement practice test for the N endorsement. 25 questions, 80% to pass. Covers liquid surge, high center of gravity, outage, baffled vs non-baffled tanks, and safe tanker driving.",
  alternates: { canonical: "https://caredmvprep.com/cdl-tanker" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-tanker",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is a tank vehicle for CDL purposes?", a: "For CDL purposes, a tank vehicle is a vehicle designed to transport any liquid or gaseous materials in a tank or tanks with a rated capacity of 1,000 gallons or more that is permanently or temporarily attached to the vehicle." },
  { q: "What causes liquid surge in tanker trucks?", a: "Liquid surge (also called liquid slosh) occurs when the liquid in a non-baffled tank shifts with vehicle movement. When you brake, the liquid continues moving forward, pushing the vehicle. When you accelerate, it surges backward. This can cause loss of control if the driver is not prepared for the delayed braking response." },
  { q: "How many questions are on the CDL Tanker test?", a: "The CDL Tanker endorsement test has 25 questions. You must correctly answer at least 20 questions (80%) to pass." },
  { q: "What is outage in tanker truck operations?", a: "Outage is the space left in a tank to allow for liquid expansion due to temperature increases. Most liquids expand as they warm, and without adequate outage, a full tank could overflow or rupture. The required outage varies by the type of liquid being transported." },
  { q: "Why are tanker trucks considered especially dangerous vehicles?", a: "Tanker trucks have two major hazards: a high center of gravity (which makes them prone to rollovers, especially on curves or in high winds) and liquid surge in partially filled tanks. A partially filled tank is actually more dangerous than a full one because the liquid has more room to move and shift." },
];

const topics = [
  { icon: "🔧", title: "Tank Vehicle Inspection", desc: "Checking for leaks, spills, valves, manhole covers, and the condition of tank shells before every trip." },
  { icon: "💧", title: "Liquid Surge Control", desc: "Understanding baffled vs. non-baffled tanks, how surge affects braking, and driving techniques to minimize it." },
  { icon: "⛽", title: "Loading & Unloading Tanks", desc: "Safe procedures for filling and draining tanks, including checking valves, grounding to prevent static, and spill procedures." },
  { icon: "🔄", title: "Safe Driving with Tanks", desc: "Speed management on curves, smooth braking and acceleration, and never overfilling." },
  { icon: "🚨", title: "Emergency Procedures", desc: "What to do in case of a leak, spill, rollover, or fire involving a tanker vehicle." },
  { icon: "🛢️", title: "Tank Types", desc: "Liquid cargo tanks, compressed gas tanks, cryogenic tanks, and how their hazards differ." },
];

export default function CDLTankerPage() {
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
              { "@type": "ListItem", position: 3, name: "CDL Tanker", item: "https://caredmvprep.com/cdl-tanker" },
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
          <div className="text-5xl mb-4">🛢️</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Tanker Endorsement Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prepare for the N endorsement exam. 25 questions on liquid surge, high center of gravity, tank inspection, and safe driving. Need 20 correct to pass.
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
            <li className="text-gray-800 font-medium">CDL Tanker</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the CDL Tanker (N) Endorsement</h2>
          <p className="text-gray-700 mb-4">
            The N (Tanker) endorsement is required to operate tank vehicles — vehicles designed to transport liquid or gaseous materials in tanks with a capacity of 1,000 gallons or more. Common tanker jobs include fuel transport (petroleum tankers), milk transport (dairy tankers), chemical transport, and water hauling.
          </p>
          <p className="text-gray-700 mb-4">
            The tanker endorsement test has <strong>25 questions</strong>; you must answer at least <strong>20 correctly (80%)</strong>. The test focuses on the unique hazards of tanker vehicles: liquid surge from shifting cargo, the dangerously high center of gravity that increases rollover risk, outage requirements, and the difference between baffled and non-baffled tanks.
          </p>
          <p className="text-gray-700">
            If you also plan to transport hazardous materials in a tank vehicle, you will need both the N endorsement AND the H (Hazmat) endorsement — or you can obtain the combined X endorsement, which covers both.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Questions", value: "25" },
              { label: "Passing Score", value: "80%" },
              { label: "Questions to Pass", value: "20/25" },
              { label: "Min. Tank Capacity", value: "1,000 gal" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Tanker Topics</h2>
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

      {/* Baffled vs Non-Baffled */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Critical Tanker Concepts</h2>
          <div className="space-y-4">
            {[
              {
                title: "Baffled vs. Non-Baffled Tanks",
                body: "Baffled tanks have internal bulkheads with holes that allow liquid to flow through but slow the surge. They reduce the front-to-back surge significantly. Non-baffled tanks (like those used for food products to prevent contamination) have smooth interiors — liquid can surge freely, making them much more difficult to control during braking and acceleration. Non-baffled tanks require extra caution.",
              },
              {
                title: "High Center of Gravity",
                body: "Tanker trucks sit much higher than other commercial vehicles. This means they are far more likely to tip over when taking curves at high speed or making sharp turns. Even at speeds that would be fine for a standard truck, a tanker can roll over. Always take curves and ramps at lower speeds than posted — the posted speed is for passenger cars, not tankers.",
              },
              {
                title: "Partially Filled Tanks Are More Dangerous",
                body: "A full tank has no room for liquid to move. An empty tank is light and stable. But a partially filled tank — especially at 50-75% capacity — allows maximum liquid surge. This is the most dangerous configuration for a tanker. Never assume a partial load is safer than a full one.",
              },
              {
                title: "Outage and Temperature",
                body: "Outage is the empty space left in a tank to allow for liquid expansion as temperature increases. Without outage, a tank could overflow or pressure could build to dangerous levels. The amount of outage required depends on the liquid — some liquids expand more than others when heated. Always check outage requirements for the specific product you are hauling.",
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
          <h2 className="text-2xl font-bold mb-3">Get Your Tanker Endorsement</h2>
          <p className="text-gray-400 text-sm mb-6">Practice all 25 tanker question types and pass the N endorsement test.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
