import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle Road Signs Guide – Traffic Signs Every Rider Must Know",
  description:
    "Complete motorcycle road signs guide. Warning signs, speed limit signs, construction zone signs, pavement markings, and railroad crossing rules every motorcyclist must know to ride safely and pass the test.",
  alternates: { canonical: "https://caredmvprep.com/motorcycle-road-signs" },
  openGraph: {
    url: "https://caredmvprep.com/motorcycle-road-signs",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "Why are road signs especially important for motorcyclists?", a: "Motorcyclists have far less protection than occupants of enclosed vehicles, so reaction time is critical. Warning signs that give advance notice of hazards — slippery roads, sharp curves, uneven pavement — allow riders to adjust speed and position before reaching the danger. A car driver might handle a surprise hazard by braking hard; a motorcyclist may crash." },
  { q: "What does a slippery road sign look like?", a: "The slippery road sign is a yellow diamond-shaped sign with a black image of a car with wavy lines under the tires (representing a skidding car). When you see this sign, reduce your speed, avoid sudden braking or steering, and be especially cautious if the road is wet." },
  { q: "Can motorcyclists use HOV (carpool) lanes?", a: "Yes, in most states motorcycles are permitted to use High Occupancy Vehicle (HOV) lanes regardless of the number of occupants (usually just the solo rider). This is because motorcycles reduce overall traffic congestion. Check your state&apos;s laws — a few states have different rules for HOV lane access." },
  { q: "What does a yellow diamond sign mean?", a: "Yellow diamond-shaped signs are warning signs. They alert drivers and riders to hazards ahead: curves, intersections, pedestrian crossings, school zones, road work, railroad crossings, and more. You should always slow down when you see a yellow warning sign and be prepared to stop or change course." },
  { q: "How should motorcyclists cross railroad tracks?", a: "Motorcyclists should always cross railroad tracks as close to a 90-degree (perpendicular) angle as possible. Crossing at a shallow angle risks getting the front tire caught in the groove between the rail and the pavement, which can cause the tire to slide sideways and the rider to crash. Shift to a straight path before reaching the tracks, cross perpendicular, and avoid braking on the tracks." },
];

const signTypes = [
  {
    icon: "⚠️",
    title: "Warning Signs (Yellow Diamond)",
    desc: "Alert riders to upcoming hazards.",
    examples: ["Slippery When Wet", "Curve Ahead", "Uneven Pavement", "Motorcycle Crossing Zone", "Deer Crossing", "Loose Gravel"],
  },
  {
    icon: "🚫",
    title: "Regulatory Signs (White Rectangle)",
    desc: "Laws riders must follow.",
    examples: ["Speed Limit", "No Passing Zone", "One Way", "Do Not Enter", "No U-Turn", "Keep Right"],
  },
  {
    icon: "🔶",
    title: "Construction Signs (Orange Diamond)",
    desc: "Temporary signs in work zones — fines doubled.",
    examples: ["Road Work Ahead", "Flagger Ahead", "Lane Ends", "Detour", "Reduced Speed Ahead"],
  },
  {
    icon: "🚂",
    title: "Railroad Crossing Signs",
    desc: "Railroad advance warning (yellow circle with X) and crossbuck at tracks.",
    examples: ["Railroad Advance Warning", "Crossbuck at Tracks", "Multiple Tracks Sign", "Stop Line at Tracks"],
  },
  {
    icon: "🛣️",
    title: "Pavement Markings",
    desc: "Lane lines, arrows, and text painted on the road.",
    examples: ["Solid Yellow = No Passing", "Broken White = Lane Change OK", "Diamond = HOV Lane", "Bike Lane Markings"],
  },
  {
    icon: "ℹ️",
    title: "Guide Signs (Green Rectangle)",
    desc: "Direction, distance, and route information.",
    examples: ["Highway Numbers", "Exit Numbers", "Distance to City", "Service Area Signs"],
  },
];

export default function MotorcycleRoadSignsPage() {
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
              { "@type": "ListItem", position: 3, name: "Motorcycle Road Signs", item: "https://caredmvprep.com/motorcycle-road-signs" },
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
          <div className="text-5xl mb-4">🚦</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Motorcycle Road Signs Guide</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Every road sign a motorcyclist must know — from yellow warning diamonds to railroad crossings. Learn what each sign means and how riders should respond.
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
            <li className="text-gray-800 font-medium">Motorcycle Road Signs</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Road Signs Matter More for Motorcyclists</h2>
          <p className="text-gray-700 mb-4">
            Every driver needs to know road signs — but for motorcyclists, signs are literally life-saving information. A car driver who misses a &quot;Slippery When Wet&quot; warning and brakes hard in wet conditions might slide a few feet. A motorcyclist doing the same thing risks laying the bike down entirely.
          </p>
          <p className="text-gray-700 mb-4">
            Warning signs give you advance notice to adjust your speed and lane position <em>before</em> you reach the hazard. Regulatory signs tell you what the law requires — speed limits, passing rules, and turn restrictions you must follow. Pavement markings show you where your lane is, when you can change lanes, and special areas like HOV lanes and bike lanes.
          </p>
          <p className="text-gray-700">
            The motorcycle written test always includes road sign questions. This guide covers all major sign categories with special attention to signs and markings that are especially relevant to motorcycle riders.
          </p>
        </div>
      </section>

      {/* Sign Types Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Road Sign Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signTypes.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{s.desc}</p>
                <ul className="space-y-1">
                  {s.examples.map((e) => (
                    <li key={e} className="text-xs text-gray-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a7f3c] inline-block shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Rules */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Rules for Motorcyclists</h2>
          <div className="space-y-4">
            {[
              {
                title: "HOV Lanes and Motorcycles",
                body: "In most U.S. states, motorcycles are allowed in HOV (High Occupancy Vehicle) lanes even with just the rider — no passenger required. Look for the diamond symbol painted in the lane and the HOV signs indicating the required number of occupants. Motorcycles are typically exempt from the occupancy requirement as an incentive to reduce car congestion.",
              },
              {
                title: "Railroad Crossings — Cross at 90°",
                body: "Never approach railroad tracks at a shallow angle. The metal rail and the groove next to it can catch a motorcycle tire and cause a crash. Always position yourself to cross the tracks perpendicularly — as close to a right angle as possible. This may mean moving within your lane before the crossing. Do not brake on the tracks; maintain a steady, moderate speed through the crossing.",
              },
              {
                title: "Lane Positioning and Visibility",
                body: "Motorcyclists should ride in the left third of their lane in most situations to maximize their visibility to drivers ahead and to give themselves a better view of the road. The center of the lane often has an oil drip strip from vehicles — avoid this slippery zone. Move to the right third when being passed by large trucks to allow extra space from the wind blast.",
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
              { href: "/motorcycle-endorsement-test", label: "Endorsement Test" },
              { href: "/motorcycle-license-test", label: "License Test" },
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
          <h2 className="text-2xl font-bold mb-3">Practice Road Sign Questions</h2>
          <p className="text-gray-400 text-sm mb-6">Road signs are on every motorcycle written test. Practice now and get them right on exam day.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
