import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMV Practice Test Pricing – Free & Premium Plans | CAREDMVPrep",
  description:
    "Start free with unlimited state DMV practice tests. Upgrade for full question banks, progress tracking, and timed exam mode across all 50 states.",
  alternates: { canonical: "https://caredmvprep.com/pricing" },
  openGraph: { url: 'https://caredmvprep.com/pricing', images: [{ url: 'https://caredmvprep.com/opengraph-image', width: 1200, height: 630 }] },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "A great way to start preparing with no commitment.",
    features: [
      "Sample practice questions per test",
      "All available states",
      "Instant answer feedback",
      "Detailed explanations",
      "Mobile friendly",
    ],
    cta: "Get Started Free",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "Everything you need to pass with confidence.",
    features: [
      "Full question banks (30–50 per test)",
      "All states + CDL + Motorcycle",
      "Progress tracking dashboard",
      "Weak-topic identification",
      "Timed exam mode",
      "Unlimited test retakes",
    ],
    cta: "Join the Waitlist",
    href: "/signup",
    highlight: true,
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2240] to-[#122d52] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Simple, Honest Pricing</h1>
          <p className="text-gray-300 text-lg">
            Start free. Upgrade when you&apos;re ready. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 bg-white shadow-sm flex flex-col ${
                  plan.highlight ? "border-[#1a7f3c] ring-2 ring-[#1a7f3c] relative" : "border-gray-100"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a7f3c] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-400 mb-1">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#1a7f3c] font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition ${
                    plan.highlight
                      ? "bg-[#1a7f3c] text-white hover:bg-[#158532]"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Pricing is subject to change. No card required to start.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Is the free version really free?", a: "Yes. You can take practice tests for free, with no credit card required. The free plan covers a limited number of questions per session." },
              { q: "Can I try before I subscribe?", a: "Yes. The free plan gives you full access to practice questions with no credit card required. Upgrade anytime for the full question bank and tracking." },
              { q: "Are these the actual DMV test questions?", a: "No. Our questions are based on each state's official driver's manual but are written independently for practice purposes. We are not affiliated with any DMV or government agency." },
              { q: "Which states are covered?", a: "All 50 U.S. states are planned. We'll launch with the most-requested states first." },
            ].map((item) => (
              <div key={item.q} className="border border-gray-100 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
