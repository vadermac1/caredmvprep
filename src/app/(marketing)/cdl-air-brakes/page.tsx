import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDL Air Brakes Practice Test 2025 – Section 5 Knowledge Exam Prep",
  description:
    "Free CDL Air Brakes practice test based on FMCSA Section 5. 25 questions, 80% to pass. Avoid the air brake restriction on your CDL — study dual air systems, brake inspection, and emergency braking.",
  alternates: { canonical: "https://caredmvprep.com/cdl-air-brakes" },
  openGraph: {
    url: "https://caredmvprep.com/cdl-air-brakes",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What is the air brakes restriction on a CDL?", a: "If you do not take (or pass) the air brakes knowledge test, your CDL will have an air brake restriction. This restriction means you are not permitted to operate any commercial vehicle equipped with air brakes." },
  { q: "How many questions are on the CDL Air Brakes test?", a: "The CDL Air Brakes endorsement test has 25 questions. You must answer at least 20 correctly to pass." },
  { q: "What is the passing score for the CDL Air Brakes test?", a: "You need an 80% score to pass, which means answering 20 out of 25 questions correctly." },
  { q: "Who needs to take the CDL Air Brakes test?", a: "Any CDL applicant who wants to operate commercial vehicles equipped with air brakes must pass this test. This includes most Class A and Class B vehicles such as tractor-trailers, dump trucks, and transit buses." },
  { q: "What happens if you fail the CDL Air Brakes test?", a: "If you fail, an air brake restriction (code L) will be placed on your CDL. You may be able to retake the test after a waiting period determined by your state. Until you remove the restriction, you cannot legally drive vehicles with air brakes." },
];

const topics = [
  { icon: "💨", title: "Dual Air Brake System", desc: "How the primary and secondary air circuits work together for redundancy and safety." },
  { icon: "🔧", title: "Air Brake Inspection", desc: "Pre-trip checks: slack adjusters, air pressure build-up rate, brake fade, and drum wear." },
  { icon: "🛑", title: "Stopping Distance", desc: "How stopping distance changes with speed, load weight, and brake condition." },
  { icon: "⚠️", title: "Emergency Braking", desc: "Controlled braking techniques, avoiding wheel lockup, and brake failure procedures." },
  { icon: "🔥", title: "Brake Fading", desc: "Why brakes fade on long downgrades and how to use engine braking to prevent it." },
  { icon: "🔔", title: "Low Pressure Warning", desc: "When the warning buzzer/light activates (typically 60 PSI) and what to do immediately." },
];

export default function CDLAirBrakesPage() {
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
              { "@type": "ListItem", position: 3, name: "CDL Air Brakes", item: "https://caredmvprep.com/cdl-air-brakes" },
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
          <div className="text-5xl mb-4">🛑</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">CDL Air Brakes Practice Test</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pass the FMCSA Section 5 air brakes exam and remove the restriction from your CDL. 25 questions — you need 20 correct to pass.
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
            <li className="text-gray-800 font-medium">CDL Air Brakes</li>
          </ol>
        </div>
      </nav>

      {/* Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Air Brakes Knowledge Test</h2>
          <p className="text-gray-700 mb-4">
            The CDL Air Brakes test (FMCSA Section 5) is a separate knowledge exam you take in addition to the General Knowledge test. It is not technically an &ldquo;endorsement&rdquo; — rather, it removes a default restriction. If you skip this test, a code L restriction goes on your CDL, preventing you from operating any vehicle with air brakes.
          </p>
          <p className="text-gray-700 mb-4">
            Most Class A and Class B commercial vehicles — including tractor-trailers, dump trucks, transit buses, and school buses — use air brake systems. Without passing this test, your CDL career options are severely limited.
          </p>
          <p className="text-gray-700">
            The exam covers dual air brake system components (primary and secondary circuits, compressor, governor, air dryer, reservoirs), slack adjusters, brake drums, stopping distances, brake fade on downgrades, emergency braking, parking brake systems, and the low air pressure warning system.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Questions", value: "25" },
              { label: "Passing Score", value: "80%" },
              { label: "Questions to Pass", value: "20/25" },
              { label: "FMCSA Section", value: "Sec. 5" },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Air Brakes Topics</h2>
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

      {/* Key Concepts */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Critical Concepts You Must Know</h2>
          <div className="space-y-4">
            {[
              {
                title: "The Dual Air Brake System",
                body: "Modern air brake systems have two independent circuits: the primary circuit controls the rear brakes and the secondary circuit controls the front brakes. Both must be working for safe operation. If one circuit fails, you still have braking on the other set of wheels — but stopping distance increases significantly.",
              },
              {
                title: "Slack Adjusters and Brake Drums",
                body: "Slack adjusters link the brake chamber push rods to the brake camshafts. They automatically or manually adjust the distance between the brake shoe and brake drum. Worn brake drums and out-of-adjustment slack adjusters dramatically reduce braking effectiveness and are common causes of brake failure.",
              },
              {
                title: "Brake Fade on Downgrades",
                body: "Repeated or prolonged braking on long downgrades heats the brake drums and causes brake fade — a condition where the brakes become progressively less effective. The correct technique is to use engine braking (downshift) and apply brakes in short, controlled applications rather than riding them continuously.",
              },
              {
                title: "Low Air Pressure Warning",
                body: "Air brake systems must have a warning device that activates when air pressure drops to between 55 and 75 PSI (typically 60 PSI). At this point, you should bring the vehicle to a controlled stop immediately. Do not attempt to continue driving — the spring brakes will apply automatically at around 20-45 PSI.",
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
              { href: "/cdl-hazmat", label: "Hazmat" },
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
          <h2 className="text-2xl font-bold mb-3">Remove the Air Brake Restriction</h2>
          <p className="text-gray-400 text-sm mb-6">Practice air brakes questions and pass the test the first time. Sign up free.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
