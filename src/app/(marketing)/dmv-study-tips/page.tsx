import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMV Study Tips – How to Pass Your Driver's License Test the First Time",
  description:
    "Proven DMV study tips to pass your driver&apos;s license knowledge test the first time. Learn how to use the official handbook, practice tests, study schedules, common mistakes, and day-of-test strategies.",
  alternates: { canonical: "https://caredmvprep.com/dmv-study-tips" },
  openGraph: {
    url: "https://caredmvprep.com/dmv-study-tips",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "How long should I study for the DMV written test?", a: "Most people who study consistently for 5 to 7 days pass their first attempt. Study for at least 30 minutes per day, focusing on reading the official handbook in the first few days and shifting to practice tests in the last 2-3 days before the exam." },
  { q: "What is the hardest part of the DMV test?", a: "The most commonly missed questions involve right-of-way rules at uncontrolled intersections, proper following distances, speed limits in special zones (school zones, construction zones, residential areas), and when you must use your turn signal. These topics deserve extra practice." },
  { q: "Do practice tests actually help?", a: "Yes — research on test preparation consistently shows that practice testing significantly improves performance on the real exam. Studies on the testing effect show that practicing retrieval (answering questions) leads to better long-term retention than re-reading notes or the handbook. People who take practice tests regularly score 30%+ higher than those who only re-read materials." },
  { q: "Can I retake the DMV test if I fail?", a: "Yes. Most states allow you to retake the written test, though policies vary. Many states allow a retake the same day or the next business day after a first failure. After multiple failures, some states require a waiting period of a week or more. Check your state&apos;s specific policy on the DMV website." },
  { q: "What should I bring to the DMV for the written test?", a: "Requirements vary by state, but typically you need: a valid government-issued ID (passport, birth certificate, or current ID), proof of residency (utility bill, bank statement), Social Security card or number, and payment for the license fee. If you are under 18, you may also need a parent or guardian signature. Check your state&apos;s DMV website for the exact document list." },
];

const commonMistakes = [
  { mistake: "Following Distance", detail: "The correct following distance is at least 3 seconds behind the vehicle ahead — not a fixed number of car lengths or feet." },
  { mistake: "School Zone Speeds", detail: "Speed limits in school zones during active hours are typically 15-25 mph. Many people default to 25 when the correct answer depends on posted signs." },
  { mistake: "Uncontrolled Intersections", detail: "At intersections with no signs or signals, the driver on the right has right of way. If you arrive simultaneously, yield to the vehicle on your right." },
  { mistake: "Turn Signal Timing", detail: "You must signal at least 100 feet before turning in most states (200 feet in some). Starting your signal too late is both a test mistake and a traffic violation." },
  { mistake: "DUI Blood Alcohol Limits", detail: "The legal limit for most adults is 0.08% BAC. For commercial drivers it is 0.04%. For drivers under 21 it is 0.01% or 0.02% (zero tolerance in most states)." },
];

export default function DMVStudyTipsPage() {
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
              { "@type": "ListItem", position: 3, name: "DMV Study Tips", item: "https://caredmvprep.com/dmv-study-tips" },
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
          <div className="text-5xl mb-4">📚</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">DMV Study Tips</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            How to pass your driver&apos;s license knowledge test the first time. Proven strategies, a study schedule, common test mistakes, and everything to bring on test day.
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
            <li className="text-gray-800 font-medium">DMV Study Tips</li>
          </ol>
        </div>
      </nav>

      {/* Study Strategy */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Study for the DMV Written Test</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Start with the Official Handbook — All of It",
                body: "Your state&apos;s official driver&apos;s handbook is the source of every question on the test. Download it free from your state&apos;s DMV website and read it from start to finish — not just skimming the bold text. Pay special attention to chapters on right-of-way, speed limits, signs and signals, traffic laws, and penalties (DUI, reckless driving). Most handbooks are 50-100 pages and take 3-5 hours to read thoroughly.",
              },
              {
                step: "2",
                title: "Take Practice Tests — Lots of Them",
                body: "After reading the handbook, shift to practice tests. The testing effect is real: answering questions forces your brain to recall information and strengthens memory far better than passive re-reading. Take multiple practice tests, review the explanations for every wrong answer, then repeat the test until you can score 90%+ consistently. A passing score on your practice tests should be well above the real test threshold (usually 70-80%).",
              },
              {
                step: "3",
                title: "Identify and Attack Weak Areas",
                body: "Track which topic areas you miss most often. Common weak areas for DMV test takers: right-of-way at intersections, speed limits in special zones, following distance rules, when to use headlights, and DUI penalties. Spend extra study time on your weak areas rather than re-reading chapters you already know well.",
              },
              {
                step: "4",
                title: "Study 30+ Minutes Per Day for 5-7 Days",
                body: "Spacing out your studying over multiple days is far more effective than cramming the night before. Your brain needs time to consolidate new information during sleep. A schedule of 5-7 days, with 30-60 minutes of focused studying each day, gives most people enough exposure to pass on the first try.",
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

      {/* Common Mistakes */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5 Most Common DMV Test Mistakes</h2>
          <div className="space-y-3">
            {commonMistakes.map((item, i) => (
              <div key={item.mistake} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.mistake}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day of Test */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Day-of-Test Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "😴", tip: "Sleep well the night before", body: "Fatigue impairs memory recall. A well-rested brain retrieves information faster and more accurately." },
              { icon: "⏰", tip: "Arrive early", body: "Rushing causes anxiety. Arrive 15-20 minutes early so you have time to settle and mentally prepare." },
              { icon: "📖", tip: "Read every question carefully", body: "DMV questions often have tricky wording. Read the question and all answer choices before selecting." },
              { icon: "❌", tip: "Eliminate wrong answers", body: "If you&apos;re unsure, eliminate the obviously wrong choices first. This improves your odds significantly." },
              { icon: "✅", tip: "Trust your first instinct", body: "Your first answer is usually right. Only change your answer if you recall a specific fact that changes it." },
              { icon: "🧘", tip: "Stay calm", body: "If you feel anxious, take a breath. You&apos;ve prepared — trust your studying." },
            ].map((item) => (
              <div key={item.tip} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.tip}</h3>
                  <p className="text-xs text-gray-600">{item.body}</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { href: "/drivers-license-guide", label: "Driver's License Guide" },
              { href: "/cdl-guide", label: "CDL Guide" },
              { href: "/motorcycle-guide", label: "Motorcycle Guide" },
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
              { href: "/states", label: "All 50 States" },
              { href: "/california-dmv-practice-test", label: "California Test" },
              { href: "/texas-dmv-practice-test", label: "Texas Test" },
              { href: "/florida-dmv-practice-test", label: "Florida Test" },
              { href: "/new-york-dmv-practice-test", label: "New York Test" },
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
          <h2 className="text-2xl font-bold mb-3">Put These Tips to Work</h2>
          <p className="text-gray-400 text-sm mb-6">Create a free account and start taking practice tests today — the most effective way to prepare.</p>
          <Link href="/signup" className="px-7 py-3 bg-[#1a7f3c] hover:bg-green-700 rounded-lg font-semibold text-white transition">
            Start Practicing Free
          </Link>
        </div>
      </section>
    </div>
  );
}
