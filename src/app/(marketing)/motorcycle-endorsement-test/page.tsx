import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle Endorsement Practice Test 2025 – M Endorsement Exam Prep",
  description:
    "Free motorcycle endorsement practice test for adding an M endorsement to your driver&apos;s license. Covers MSF course benefits, skills test components, written exam topics, and how to upgrade your license.",
  alternates: { canonical: "https://caredmvprep.com/motorcycle-endorsement-test" },
  openGraph: {
    url: "https://caredmvprep.com/motorcycle-endorsement-test",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is an M endorsement?", a: "An M endorsement is an addition to your existing driver&apos;s license that authorizes you to operate a motorcycle. Unlike some states that issue a separate motorcycle license class, states using the endorsement system add an &apos;M&apos; notation to your current license after you pass the required tests." },
  { q: "Does completing the MSF course waive the skills test?", a: "Yes, in most states. Completing the Motorcycle Safety Foundation (MSF) Basic RiderCourse earns you a completion card that the DMV accepts in place of the skills test. This means you only need to pass the written knowledge test — not the on-road skills evaluation — to get your endorsement. Check your specific state&apos;s rules, as a few states have different arrangements." },
  { q: "What is tested in the motorcycle skills test?", a: "The motorcycle skills test evaluates low-speed maneuvering in a closed course. Common exercises include the figure-8 (tests balance and control at slow speed), quick stop (tests emergency braking), cornering (tests smooth curve negotiation), and the U-turn (tests slow-speed turning). You must complete each exercise without putting your foot down or going outside the marked boundaries." },
  { q: "Can you ride any motorcycle with an M endorsement?", a: "Yes. A standard M endorsement allows you to operate any motorcycle, including sport bikes, cruisers, touring bikes, and scooters over 50cc. Some states have an M2 restriction for mopeds only — make sure you get the full M endorsement if you want to ride larger bikes." },
  { q: "How much does getting an M endorsement cost?", a: "The fee for adding an M endorsement to your license varies by state, typically ranging from $5 to $35. The MSF Basic RiderCourse typically costs $200 to $350 and is offered through local providers. Many employers and insurance companies offer discounts for completing the MSF course." },
];

const topics = [
  { icon: "📋", title: "Endorsement Requirements", desc: "Age requirements, permit prerequisite, and whether you need to hold your permit for a set time before testing." },
  { icon: "🏫", title: "MSF Basic RiderCourse", desc: "What the MSF course covers (classroom + range riding), how long it takes, and how it can waive the skills test." },
  { icon: "📝", title: "Written Knowledge Test", desc: "Topics on the written test: safe riding practices, gear, pre-ride inspection, and traffic laws." },
  { icon: "🏍️", title: "Skills Test Components", desc: "Figure-8, quick stop, cornering, and U-turn exercises — how they are scored and what fails you." },
  { icon: "🪪", title: "License Upgrade Process", desc: "How to visit the DMV, what to bring, and how long the endorsement takes to appear on your license." },
  { icon: "🗺️", title: "State-Specific Rules", desc: "How endorsement rules differ by state and where to find your state&apos;s specific requirements." },
];

export default function MotorcycleEndorsementTestPage() {
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
              { "@type": "ListItem", position: 3, name: "Motorcycle Endorsement Test", item: "https://caredmvprep.com/motorcycle-endorsement-test" },
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
          <div className="text-5xl mb-4">🪖</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Motorcycle Endorsement Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Add an M endorsement to your driver&apos;s license. Learn how the MSF course, written test, and skills test work — and practice the questions you&apos;ll see on exam day.
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
            <li className="text-gray-800 font-medium">Motorcycle Endorsement Test</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get Your Motorcycle Endorsement</h2>
          <p className="text-gray-700 mb-4">
            Most states add a motorcycle endorsement to your existing driver&apos;s license rather than issuing a separate license. To earn the M endorsement, you typically need to pass both a <strong>written knowledge test</strong> and a <strong>skills test</strong> (or present a Motorcycle Safety Foundation course completion card, which waives the skills test in most states).
          </p>
          <p className="text-gray-700 mb-4">
            The written knowledge test covers everything on the motorcycle permit test plus more advanced topics like risk management, collision avoidance, group riding, and riding in adverse conditions. If you haven&apos;t yet gotten your permit, you&apos;ll take the knowledge test first — then practice riding before returning for the skills evaluation.
          </p>
          <p className="text-gray-700">
            The MSF Basic RiderCourse is highly recommended even if it&apos;s not required in your state. It provides hands-on riding practice on a closed course, professional instruction, and in most states eliminates the DMV skills test requirement. Many insurance companies also offer premium discounts to riders who complete it.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "MSF Course Cost", value: "$200-350" },
              { label: "Endorsement Fee", value: "$5-35" },
              { label: "Skills Test Waived?", value: "Yes*" },
              { label: "Bikes Covered", value: "All" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="text-2xl font-extrabold text-[#1a7f3c]">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">*MSF course completion waives skills test in most states. Check your state&apos;s DMV for specifics.</p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Endorsement Process Topics</h2>
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

      {/* Skills Test Detail */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Motorcycle Skills Test Explained</h2>
          <div className="space-y-4">
            {[
              {
                title: "Figure-8",
                body: "You must ride a figure-8 pattern within a marked box without putting your foot down. This tests your balance, slow-speed control, clutch friction zone use, and ability to make tight turns. Keep your eyes up and look through the turn.",
              },
              {
                title: "Quick Stop (Emergency Braking)",
                body: "You ride at a set speed (usually 20 mph) and stop as quickly as possible within a marked zone without locking the wheels or skidding. Use both brakes simultaneously — apply the rear brake first, then the front — and stop before the line. Locking the front brake and falling is an automatic fail.",
              },
              {
                title: "Cornering",
                body: "You approach a corner at a set speed and negotiate it smoothly while maintaining your lane position. The evaluator looks for smooth throttle control through the curve, proper lean angle, and no lane departure.",
              },
              {
                title: "U-Turn",
                body: "You must make a U-turn within a marked area without putting your foot down or going outside the boundaries. Use the clutch friction zone to maintain slow, smooth speed, and look in the direction you want to go — not at the ground.",
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">All Motorcycle Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/motorcycle-practice-test", label: "Motorcycle Overview" },
              { href: "/motorcycle-permit-test", label: "Permit Test" },
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
          <h2 className="text-2xl font-bold mb-3">Get Your Motorcycle Endorsement</h2>
          <p className="text-gray-400 text-sm mb-6">Practice the written knowledge test questions and pass with confidence.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
