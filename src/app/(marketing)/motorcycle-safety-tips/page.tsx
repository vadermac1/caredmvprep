import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle Safety Tips – How to Ride Safer and Pass Your Test",
  description:
    "Comprehensive motorcycle safety tips covering ATGATT gear, T-CLOCS pre-ride inspection, proper riding position, space management, emergency braking, and avoiding road hazards. Pass your test and ride safely.",
  alternates: { canonical: "https://caredmvprep.com/motorcycle-safety-tips" },
  openGraph: {
    url: "https://caredmvprep.com/motorcycle-safety-tips",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What gear should motorcyclists always wear?", a: "The recommended gear for every ride is: a DOT-approved helmet, a riding jacket with armor (CE Level 1 or 2 impact protection at shoulders and elbows), riding gloves, ankle-covering boots with non-slip soles, and riding pants with knee and hip armor. This is often called ATGATT — All The Gear, All The Time." },
  { q: "What is T-CLOCS?", a: "T-CLOCS is a pre-ride inspection checklist: T = Tires and wheels (check pressure, tread depth, and condition), C = Controls (check levers, cables, throttle, and handlebars), L = Lights and electrics (check headlight, tail light, turn signals, and battery), O = Oil and fluids (check engine oil, brake fluid, coolant), C = Chassis (check frame, suspension, and drive chain or belt), S = Stands (check kickstand and center stand if equipped)." },
  { q: "What is the proper following distance for motorcyclists?", a: "Motorcyclists should maintain a minimum following distance of 3 to 4 seconds — more in adverse weather, at night, or behind large trucks. Use the 3-second rule: when the vehicle ahead passes a fixed point, count 1-1000, 2-1000, 3-1000. If you reach the same point before finishing, you are too close." },
  { q: "What is the safest lane position for a motorcycle?", a: "The left third of the lane (near the left tire track) is generally the safest position because it maximizes your visibility to drivers ahead and oncoming traffic, gives you the best view of the road, and positions you to be seen in rearview mirrors. Move to other positions depending on the situation — never ride in the center of the lane where oil and debris accumulate." },
  { q: "What should you do if your motorcycle starts to skid?", a: "If the rear wheel skids, do NOT brake suddenly. Gradually release the rear brake while keeping the front brake applied smoothly. Keep the motorcycle in a straight line if possible. If the front wheel skids, immediately release the front brake — front wheel lock-up at any speed can cause a crash. Always practice progressive, smooth brake application to avoid skids." },
];

const topics = [
  {
    icon: "🪖",
    title: "Protective Gear (ATGATT)",
    items: [
      "DOT-approved helmet (full-face or modular)",
      "Riding jacket with CE Level 1/2 armor at shoulders and elbows",
      "Riding gloves (leather or textile with palm sliders)",
      "Ankle-covering boots with non-slip soles",
      "Riding pants with CE Level 1/2 knee and hip armor",
    ],
  },
  {
    icon: "🔧",
    title: "Pre-Ride Inspection (T-CLOCS)",
    items: [
      "Tires: Check pressure and tread depth",
      "Controls: Test throttle, levers, and cables",
      "Lights: Verify headlight, tail light, signals",
      "Oil: Check engine oil and brake fluid levels",
      "Chassis: Inspect chain, suspension, frame",
      "Stands: Confirm kickstand retracts properly",
    ],
  },
  {
    icon: "🏍️",
    title: "Proper Riding Position",
    items: [
      "Sit upright with weight balanced",
      "Elbows slightly bent, relaxed grip on bars",
      "Feet on pegs, toes pointing forward",
      "Eyes up, scanning 12 seconds ahead",
      "Knees close to tank for stability",
    ],
  },
  {
    icon: "📏",
    title: "Space & Following Distance",
    items: [
      "Maintain 3-4 second following distance minimum",
      "Increase to 5-6 seconds in rain or at night",
      "Keep extra space on highways (wind buffet from trucks)",
      "Scan intersections before entering",
    ],
  },
  {
    icon: "🛑",
    title: "Emergency Braking Techniques",
    items: [
      "Apply both brakes simultaneously",
      "Squeeze front brake progressively — don&apos;t grab",
      "Press rear brake firmly but not to lockup",
      "Keep the motorcycle upright while braking",
      "Look where you want to go, not at the hazard",
    ],
  },
  {
    icon: "⚠️",
    title: "Road Hazards",
    items: [
      "Gravel: Slow down before entering, don&apos;t brake on it",
      "Wet roads: Reduce speed 25-50%, avoid painted lines",
      "Railroad tracks: Cross at 90° angle always",
      "Road debris: Scan far ahead to avoid suddenly",
      "Blind spots: Never ride in truck blind spots",
    ],
  },
];

export default function MotorcycleSafetyTipsPage() {
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
              { "@type": "ListItem", position: 3, name: "Motorcycle Safety Tips", item: "https://caredmvprep.com/motorcycle-safety-tips" },
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
          <div className="text-5xl mb-4">🛡️</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Motorcycle Safety Tips</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to ride safely — and pass your motorcycle written test. ATGATT gear, T-CLOCS inspection, emergency braking, lane positioning, and hazard avoidance.
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
            <li className="text-gray-800 font-medium">Motorcycle Safety Tips</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Foundation of Motorcycle Safety</h2>
          <p className="text-gray-700 mb-4">
            Motorcyclists are significantly more vulnerable than occupants of enclosed vehicles. In crashes, motorcyclists are about 29 times more likely to die per mile traveled than passenger car occupants. But most serious injuries and fatalities are preventable with the right preparation, gear, and riding habits.
          </p>
          <p className="text-gray-700 mb-4">
            The motorcycle written test covers many of the same safety principles in this guide — gear requirements, T-CLOCS inspection, proper lane positioning, following distance, and emergency braking. Studying this material doesn&apos;t just help you pass the test; it could save your life on the road.
          </p>
          <p className="text-gray-700">
            The most important principle is ATGATT: <strong>All The Gear, All The Time</strong>. Every crash you survive without serious injury is one where your gear did its job. No ride is too short for a helmet and jacket.
          </p>
        </div>
      </section>

      {/* Safety Topics Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Motorcycle Safety Essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <div key={t.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-gray-900 mb-3">{t.title}</h3>
                <ul className="space-y-1.5">
                  {t.items.map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a7f3c] inline-block shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Hazards */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Avoiding the Most Common Motorcycle Hazards</h2>
          <div className="space-y-4">
            {[
              {
                title: "Intersections — The #1 Danger Zone",
                body: "More than half of all motorcycle crashes occur at or near intersections. The most common scenario: a car turns left across your path. Always assume you are invisible to drivers making turns. Slow down before intersections even if you have a green light, cover the brake, and position yourself to be seen. Avoid riding in a driver&apos;s blind spot near intersections.",
              },
              {
                title: "Wet and Slippery Surfaces",
                body: "Reduce your speed by 25-50% on wet roads. Allow double the normal following distance. Avoid painted road markings, metal grates, and manhole covers — these become extremely slippery when wet. The first rain after a dry spell is especially dangerous as it brings oil and debris to the surface before washing it away.",
              },
              {
                title: "Truck Wind Blast and Turbulence",
                body: "Large trucks create significant wind turbulence as you pass or are passed. Anticipate the wind push as you come alongside a truck and grip the handlebars firmly with relaxed arms. Pass trucks quickly — don&apos;t ride alongside them. Never ride in a truck&apos;s blind spot (directly beside or just behind the cab).",
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
              { href: "/motorcycle-road-signs", label: "Road Signs" },
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
          <h2 className="text-2xl font-bold mb-3">Practice Safety Questions for Your Test</h2>
          <p className="text-gray-400 text-sm mb-6">Gear, T-CLOCS, braking, and hazards are all on the motorcycle written test. Start practicing free.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
