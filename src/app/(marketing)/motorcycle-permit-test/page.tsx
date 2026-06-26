import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle Permit Practice Test 2025 – M1/M2 Written Exam Prep",
  description:
    "Free motorcycle permit practice test for your M1/M2 written knowledge exam. Covers protective gear, pre-ride inspection, basic controls, turning, and traffic laws. 70-80% to pass depending on state.",
  alternates: { canonical: "https://caredmvprep.com/motorcycle-permit-test" },
  openGraph: {
    url: "https://caredmvprep.com/motorcycle-permit-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is on the motorcycle permit test?", a: "The motorcycle permit written test covers basic motorcycle controls and operation, protective gear requirements, pre-ride inspection procedures, fundamental riding techniques (turning, braking, stopping), and traffic laws specific to motorcyclists. The content is based on your state&apos;s Motorcycle Operator Manual." },
  { q: "How many questions are on the motorcycle permit test?", a: "The number of questions varies by state. Most states have 25 to 50 questions on the motorcycle permit written test. California has 21 questions for the motorcycle knowledge test. Texas has 25 questions. Always check your specific state&apos;s DMV website for the exact number." },
  { q: "What score do you need to pass the motorcycle permit test?", a: "Passing score requirements vary by state, typically ranging from 70% to 80%. Most states require 70-75% to pass the motorcycle knowledge test for a learner&apos;s permit." },
  { q: "What can you do with a motorcycle learner&apos;s permit?", a: "A motorcycle learner&apos;s permit allows you to practice riding with restrictions. Most states prohibit permit holders from riding at night, carrying passengers, and riding on highways or freeways. You must carry your permit while riding at all times." },
  { q: "How long is a motorcycle learner&apos;s permit valid?", a: "Motorcycle learner&apos;s permit validity varies by state. Most permits are valid for 6 to 12 months. Some states allow renewals if you haven&apos;t yet obtained your full motorcycle license or endorsement. Check your state&apos;s DMV rules for the specific duration." },
];

const topics = [
  { icon: "🏍️", title: "Motorcycle Controls", desc: "Throttle, clutch, front and rear brakes, gear shifter, turn signals, and instrument panel." },
  { icon: "🪖", title: "Protective Gear Requirements", desc: "DOT-approved helmet, riding jacket with armor, gloves, ankle-over boots, and eye protection." },
  { icon: "🔧", title: "Pre-Ride Inspection", desc: "T-CLOCS: Tires, Controls, Lights, Oil, Chassis, Stands — what to check before every ride." },
  { icon: "🔄", title: "Basic Riding Techniques", desc: "Starting, stopping, turning, swerving, and low-speed maneuvering basics." },
  { icon: "🚦", title: "Traffic Laws for Motorcyclists", desc: "Lane positioning, following distance, intersection rules, and right-of-way for motorcyclists." },
  { icon: "📋", title: "Permit Restrictions", desc: "No night riding, no passengers, no highways — what you can and can&apos;t do with a permit." },
];

export default function MotorcyclePermitTestPage() {
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
              { "@type": "ListItem", position: 3, name: "Motorcycle Permit Test", item: "https://caredmvprep.com/motorcycle-permit-test" },
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
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Motorcycle Permit Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pass your state&apos;s motorcycle written knowledge test and get your learner&apos;s permit. Practice questions on gear, controls, and traffic laws. Most states require 70-80% to pass.
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
            <li className="text-gray-800 font-medium">Motorcycle Permit Test</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Your Motorcycle Learner&apos;s Permit</h2>
          <p className="text-gray-700 mb-4">
            Before you can ride a motorcycle legally on public roads, most states require you to pass a written motorcycle knowledge test to obtain a learner&apos;s permit. This test is separate from the standard driver&apos;s license knowledge test — it covers topics specific to motorcycle operation, safety gear, and riding techniques.
          </p>
          <p className="text-gray-700 mb-4">
            The permit test is typically based on your state&apos;s <strong>Motorcycle Operator Manual</strong>, available free from the DMV. Questions cover motorcycle controls (throttle, clutch, gears, brakes), protective gear requirements, pre-ride inspection using the T-CLOCS checklist, basic riding techniques, and traffic laws as they apply to motorcyclists.
          </p>
          <p className="text-gray-700">
            Once you pass the written test, your motorcycle learner&apos;s permit allows you to practice riding on public roads — but with restrictions. Most states prohibit permit holders from riding at night, carrying passengers, and using highways or freeways until you obtain your full license or endorsement.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Typical Questions", value: "25-50" },
              { label: "Passing Score", value: "70-80%" },
              { label: "Permit Valid", value: "6-12 mo" },
              { label: "Night Riding?", value: "No" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="text-2xl font-extrabold text-[#1a7f3c]">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What the Permit Test Covers</h2>
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

      {/* Study Tips */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Pass the Motorcycle Permit Test</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Read the Official Motorcycle Operator Manual",
                body: "Download or pick up your state&apos;s Motorcycle Operator Manual from the DMV — it&apos;s free. Every question on the permit test comes from this manual. Read it cover to cover, paying special attention to sections on protective gear, T-CLOCS inspection, lane positioning, and emergency maneuvers.",
              },
              {
                step: "2",
                title: "Memorize Protective Gear Requirements",
                body: "Questions about gear are almost always on the test. Know the full ATGATT (All The Gear, All The Time) list: DOT-approved helmet, riding jacket with armor (CE Level 1 or 2), gloves designed for riding, ankle-covering boots, and eye protection (even if your helmet has a visor, know what&apos;s required).",
              },
              {
                step: "3",
                title: "Learn the T-CLOCS Pre-Ride Checklist",
                body: "T-CLOCS stands for: Tires and wheels, Controls (levers, cables, throttle), Lights and electrics, Oil and fluids, Chassis (frame, suspension), Stands (kickstand, center stand). The permit test often asks about what to check before riding — T-CLOCS covers everything.",
              },
              {
                step: "4",
                title: "Understand Lane Positioning",
                body: "Motorcyclists should ride in the left third of the lane to maximize visibility to other drivers and to have an escape route. This is one of the most commonly tested topics. Know when to use the center and right positions as well.",
              },
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">All Motorcycle Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/motorcycle-practice-test", label: "Motorcycle Overview" },
              { href: "/motorcycle-endorsement-test", label: "Endorsement Test" },
              { href: "/motorcycle-license-test", label: "License Test" },
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
          <h2 className="text-2xl font-bold mb-3">Ready to Get Your Motorcycle Permit?</h2>
          <p className="text-gray-400 text-sm mb-6">Practice motorcycle permit questions and pass the written test your first try.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
