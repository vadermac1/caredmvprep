import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle License Guide – How to Get Your Motorcycle Permit and License",
  description:
    "Complete motorcycle license guide: step-by-step permit process, MSF Basic RiderCourse benefits, skills test requirements, M endorsement vs M license, helmet laws by state, and insurance requirements.",
  alternates: { canonical: "https://caredmvprep.com/motorcycle-guide" },
  openGraph: {
    url: "https://caredmvprep.com/motorcycle-guide",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "Do I need to take an MSF course to get a motorcycle license?", a: "The MSF Basic RiderCourse is not required in most states, but it is highly recommended. In nearly every state, completing the MSF course earns you a completion card that waives the DMV skills test entirely. You still need to pass the written knowledge test. The course also teaches you skills that significantly reduce your risk of crashing — especially in your first year of riding." },
  { q: "How much does the MSF Basic RiderCourse cost?", a: "The MSF Basic RiderCourse typically costs $200 to $350, depending on your state and provider. The course includes classroom instruction and range (on-bike) practice. Some states subsidize the cost, bringing it lower. Many motorcycle insurance providers also offer discounts of 5-15% to riders who complete the course." },
  { q: "What age can you get a motorcycle permit?", a: "The minimum age for a motorcycle learner&apos;s permit varies by state, typically 15 to 16 years old. Some states have different age requirements for motorcycles than for automobile permits. Check your state&apos;s DMV website for the exact minimum age." },
  { q: "Do I need a separate motorcycle license or just an endorsement?", a: "It depends on your state. California issues separate motorcycle license classes (M1 for full motorcycles, M2 for mopeds/motorized bicycles). Most other states add an M endorsement to your existing driver&apos;s license rather than issuing a separate license. Both routes authorize you to ride — the process just differs." },
  { q: "Is a motorcycle permit enough to ride on the street?", a: "A motorcycle learner&apos;s permit allows you to ride on public roads with restrictions. Most states prohibit permit holders from riding at night, carrying passengers, and using highways or freeways. The permit is meant for supervised practice, not unrestricted riding. Restrictions vary by state — check your state&apos;s specific permit conditions." },
];

const steps = [
  {
    step: "Step 1",
    title: "Get Your Motorcycle Learner&apos;s Permit",
    desc: "Visit the DMV and pass the motorcycle written knowledge test. The test covers motorcycle controls, protective gear, pre-ride inspection (T-CLOCS), basic riding techniques, and traffic laws. Most states have 25-50 questions and require 70-80% to pass. With a permit, you can ride with restrictions (no night riding, no passengers, no highways in most states).",
  },
  {
    step: "Step 2",
    title: "Take the MSF Basic RiderCourse (Highly Recommended)",
    desc: "The MSF Basic RiderCourse is a 2-day training program: Day 1 includes classroom instruction on safety, gear, and riding theory. Day 2 is range riding — you practice on motorcycles provided by the course (usually small bikes). At the end, you take a riding evaluation. Completing the course earns you a completion card that waives the DMV skills test in most states and qualifies you for insurance discounts.",
  },
  {
    step: "Step 3",
    title: "Pass the Skills Test (If Not Taking MSF)",
    desc: "If you skip the MSF course, you must pass the DMV motorcycle skills test. This is a closed-course evaluation where you perform low-speed maneuvers: figure-8 within a marked box, quick stop from 20 mph, U-turn, and sometimes a swerve test. The evaluator watches for smooth clutch and throttle control, proper braking, and keeping feet on pegs.",
  },
  {
    step: "Step 4",
    title: "Add Your M Endorsement (or Get M Class License)",
    desc: "Bring your MSF completion card (or your DMV skills test pass certificate) to the DMV, show your passing written test record, and pay the endorsement fee ($5-35 depending on state). The M endorsement is added to your existing driver&apos;s license. In states like California, you instead receive a Class M license. Either way, you are now legally authorized to ride.",
  },
];

const helmetLaws = [
  { state: "California", law: "Required for ALL riders and passengers, regardless of age" },
  { state: "Texas", law: "Required for riders under 21; riders 21+ may opt out with proof of insurance and safety course" },
  { state: "Florida", law: "Required for riders under 21; riders 21+ may opt out with $10,000 insurance coverage" },
  { state: "New York", law: "Required for ALL riders and passengers, regardless of age" },
  { state: "Illinois", law: "No helmet law — helmets not required by law (though strongly recommended)" },
  { state: "Iowa", law: "No helmet law — helmets not required by law (though strongly recommended)" },
];

export default function MotorcycleGuidePage() {
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
              { "@type": "ListItem", position: 3, name: "Motorcycle Guide", item: "https://caredmvprep.com/motorcycle-guide" },
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
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Motorcycle License Guide</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to get your motorcycle permit and license — step by step. MSF course, skills test, endorsement process, helmet laws, and insurance requirements.
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
            <li className="text-gray-800 font-medium">Motorcycle Guide</li>
          </ol>
        </div>
      </nav>

      {/* Steps */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How to Get Your Motorcycle License — Step by Step</h2>
          <div className="space-y-6">
            {steps.map((item, i) => (
              <div key={item.step} className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#1a7f3c] text-white text-sm font-bold flex items-center justify-center">{i + 1}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-[#1a7f3c] uppercase tracking-wide mb-1">{item.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MSF Course */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why the MSF Basic RiderCourse Is Worth It</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "✅", title: "Waives Skills Test", body: "In most states, your MSF completion card means you skip the DMV riding evaluation entirely. Just show the card at the DMV." },
              { icon: "📉", title: "Lowers Insurance", body: "Many motorcycle insurers offer 5-15% premium discounts to riders who complete an approved safety course." },
              { icon: "🏍️", title: "Teaches Real Skills", body: "The course includes hands-on range riding on course-provided bikes — you learn clutch control, braking, and low-speed maneuvers in a safe environment." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helmet Laws */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helmet Laws by State (Examples)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#0d2240] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">State</th>
                  <th className="px-4 py-3 text-left">Helmet Law</th>
                </tr>
              </thead>
              <tbody>
                {helmetLaws.map((h, i) => (
                  <tr key={h.state} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{h.state}</td>
                    <td className="px-4 py-3 text-gray-600">{h.law}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Helmet laws change — always verify with your state&apos;s DMV. Even where not required by law, wearing a helmet is strongly recommended.</p>
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
              { href: "/drivers-license-guide", label: "Driver's License Guide" },
              { href: "/cdl-guide", label: "CDL Guide" },
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
              { href: "/motorcycle-practice-test", label: "Motorcycle Overview" },
              { href: "/motorcycle-permit-test", label: "Permit Test" },
              { href: "/motorcycle-endorsement-test", label: "Endorsement Test" },
              { href: "/motorcycle-safety-tips", label: "Safety Tips" },
              { href: "/motorcycle-road-signs", label: "Road Signs" },
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
          <h2 className="text-2xl font-bold mb-3">Ready to Ride?</h2>
          <p className="text-gray-400 text-sm mb-6">Practice motorcycle written test questions and pass on your first try.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
