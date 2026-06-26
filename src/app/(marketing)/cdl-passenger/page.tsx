import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Passenger Endorsement Practice Test 2025 – P Endorsement Prep",
  description:
    "Free CDL Passenger endorsement practice test. 20 questions, 80% to pass. Covers bus inspection, loading/unloading, emergency exits, railroad crossing rules, and passenger management.",
  alternates: { canonical: "https://caredmvprep.com/cdl-passenger" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-passenger",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "Who needs a CDL Passenger (P) endorsement?", a: "Any CDL holder who drives a vehicle designed to transport 16 or more passengers, including the driver, must have a P endorsement. This includes transit bus drivers, charter bus drivers, inter-city bus drivers, and paratransit vehicle drivers operating larger vehicles." },
  { q: "How many questions are on the CDL Passenger endorsement test?", a: "The CDL Passenger endorsement test has 20 questions. You must correctly answer at least 16 questions (80%) to pass." },
  { q: "What vehicles require a P endorsement?", a: "Vehicles requiring the P endorsement include city transit buses, charter and tour buses, inter-city motor coaches, and any other commercial vehicle with seating capacity for 16 or more persons including the driver." },
  { q: "Do school bus drivers need a P endorsement?", a: "Yes. School bus drivers must hold both the P (Passenger) and S (School Bus) endorsements on their CDL. The P endorsement alone is not sufficient to drive a school bus." },
  { q: "What are the railroad crossing rules for buses?", a: "Buses must stop at all railroad crossings between 15 and 50 feet from the nearest rail. After stopping, the driver must look and listen in both directions before proceeding. You must not shift gears while crossing the tracks. This rule applies even at crossings with signals or gates." },
];

const topics = [
  { icon: "🔍", title: "Pre-Trip Bus Inspection", desc: "Checking entry/exit doors, emergency exits, fire extinguisher, first aid kit, seats, and floor boards." },
  { icon: "🚶", title: "Loading & Unloading", desc: "Safe passenger boarding and alighting procedures, door operation, kneeling bus features, and passenger count." },
  { icon: "📋", title: "On-Board Rules", desc: "Prohibited items, standing passengers (not allowed on some bus types), and managing disruptive passengers." },
  { icon: "🚪", title: "Emergency Exits", desc: "Number of emergency exits required, how to operate them, and evacuation procedures." },
  { icon: "🚂", title: "Railroad Crossings", desc: "Mandatory stop 15-50 feet before tracks, no gear shifting during crossing, and multiple-track procedures." },
  { icon: "♿", title: "Passenger Management", desc: "Assisting passengers with disabilities, securing wheelchairs, and managing carry-on baggage safely." },
];

export default function CDLPassengerPage() {
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
              { "@type": "ListItem", position: 3, name: "CDL Passenger Endorsement", item: "https://caredmvprep.com/cdl-passenger" },
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
          <div className="text-5xl mb-4">🚌</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Passenger Endorsement Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prepare for the P endorsement exam. 20 questions covering bus inspection, passenger management, emergency exits, and railroad crossings. Need 16 correct to pass.
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
            <li className="text-gray-800 font-medium">CDL Passenger Endorsement</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the P Endorsement</h2>
          <p className="text-gray-700 mb-4">
            The P (Passenger) endorsement is required for CDL holders who drive vehicles designed to carry 16 or more passengers, including the driver. This covers transit buses, motor coaches, charter buses, and similar vehicles. Passenger safety depends on the driver&apos;s knowledge of proper boarding procedures, emergency systems, and special rules like mandatory stops at railroad crossings.
          </p>
          <p className="text-gray-700 mb-4">
            The endorsement test has <strong>20 questions</strong> and requires at least <strong>16 correct answers (80%)</strong> to pass. Topics include pre-trip bus inspection, loading and unloading passengers safely, prohibited conduct on buses, emergency exit procedures, and railroad crossing requirements specific to buses.
          </p>
          <p className="text-gray-700">
            Note that if you plan to drive a school bus, the P endorsement alone is not enough — you also need the S (School Bus) endorsement, which has additional requirements for student safety zones and evacuation procedures.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Questions", value: "20" },
              { label: "Passing Score", value: "80%" },
              { label: "Questions to Pass", value: "16/20" },
              { label: "Passengers Covered", value: "16+" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Passenger Endorsement Topics</h2>
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

      {/* Railroad Crossings */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bus-Specific Rules You Must Know</h2>
          <div className="space-y-4">
            {[
              {
                title: "Railroad Crossings — Mandatory Stop",
                body: "Unlike other vehicles, buses must stop at every railroad crossing regardless of whether signals are active. You must stop between 15 and 50 feet from the nearest rail, open the door (if equipped) or lower the window to listen, look in both directions, and never shift gears while crossing the tracks.",
              },
              {
                title: "Emergency Exit Requirements",
                body: "Buses must be equipped with specific emergency exits depending on the number of passengers. All emergency exits must be clearly marked and unobstructed at all times. Drivers must know how to open every emergency exit on the vehicle — this is tested on both the written exam and the pre-trip skills test.",
              },
              {
                title: "Prohibited Items on Buses",
                body: "Passengers cannot carry certain items on buses, including hazardous materials, firearms (unless permitted by law), and items that would block the aisle or emergency exits. Drivers are responsible for ensuring these rules are enforced before departure.",
              },
              {
                title: "Standees (Standing Passengers)",
                body: "Bus drivers must know when standing passengers are allowed. Standees are generally not permitted on inter-city buses or buses on highways. On urban transit routes, standees may be allowed only when all seats are filled and standing does not exceed the manufacturer&apos;s rated capacity.",
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
          <h2 className="text-2xl font-bold mb-3">Get Your P Endorsement</h2>
          <p className="text-gray-400 text-sm mb-6">Practice passenger endorsement questions and pass the test on your first try.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
