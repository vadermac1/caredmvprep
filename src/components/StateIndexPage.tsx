import Link from "next/link";
import {
  getStateFactsByAbbr,
  getTestTypeFromSlug,
  getQuestionCount,
  getPassingPct,
} from "@/lib/state-facts-lookup";

export interface StateIndexLink {
  label: string;
  href: string;
  description: string;
  /** Optional editorial override — derived from state-facts.ts when omitted. */
  numQuestions?: number | string;
  /** Optional editorial override — derived from state-facts.ts when omitted. */
  passingScore?: string;
}

export interface StateIndexPageProps {
  state: string;
  stateAbbr: string;
  slug: string;
  intro: string;
  tests: StateIndexLink[];
  faqs: { question: string; answer: string }[];
}

export default function StateIndexPage({
  state,
  stateAbbr,
  slug,
  intro,
  tests,
  faqs,
}: StateIndexPageProps) {
  const canonical = `https://caredmvprep.com/${slug}`;

  // Look up state facts once for all test cards on this page
  const sf = getStateFactsByAbbr(stateAbbr);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://caredmvprep.com" },
      { "@type": "ListItem", position: 2, name: `${state} DMV Practice Tests`, item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-gray-100" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-gray-800 transition">Home</Link></li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-700 font-medium">{state} DMV Practice Tests</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-white py-14 lg:py-20" style={{ backgroundColor: '#0f1e3c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-5" style={{ backgroundColor: 'rgba(26,127,60,0.25)', color: '#4ade80' }}>
            {stateAbbr} · All Practice Tests
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            {state} DMV Practice Tests
          </h1>
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Test cards — numQuestions and passingScore derived from state-facts.ts */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#0d1a2d' }}>
            Choose a {stateAbbr} Practice Test
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tests.map((t) => {
              const testType = getTestTypeFromSlug(t.href);
              const sfQ = sf ? getQuestionCount(sf, testType) : undefined;
              const sfPct = sf ? getPassingPct(sf, testType) : undefined;
              const displayQ = t.numQuestions ?? sfQ ?? "—";
              const displayPct = t.passingScore ?? sfPct ?? "—";

              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className="block rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition group"
                >
                  <h3 className="text-lg font-bold mb-2 group-hover:underline" style={{ color: '#0f1e3c' }}>
                    {t.label}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{t.description}</p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span><span className="font-semibold text-gray-700">{displayQ}</span> questions</span>
                    <span><span className="font-semibold" style={{ color: '#1a7f3c' }}>{displayPct}</span> to pass</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ backgroundColor: '#f0f4f8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#0d1a2d' }}>
            Frequently Asked Questions — {state} DMV Tests
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer select-none list-none bg-white hover:bg-gray-50 transition">
                  <span className="font-semibold text-gray-900 text-sm">{faq.question}</span>
                  <svg
                    className="shrink-0 w-4 h-4 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-white py-12" style={{ backgroundColor: '#1a7f3c' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-1">Ready to start your {stateAbbr} practice test?</h2>
            <p className="text-green-100 text-sm">Full test banks, progress tracking, and detailed explanations.</p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded hover:bg-gray-100 transition whitespace-nowrap"
              style={{ backgroundColor: '#fff', color: '#1a7f3c' }}
            >
              START FULL TEST →
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-white/40 font-semibold rounded hover:bg-white/10 transition whitespace-nowrap text-white"
            >
              ← All States
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
