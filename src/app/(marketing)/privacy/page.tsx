import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CAREDMVPrep",
  description:
    "CAREDMVPrep Privacy Policy. Learn how we collect, use, and protect your personal information when you use our DMV practice test platform.",
  alternates: { canonical: "https://caredmvprep.com/privacy" },
  openGraph: {
    url: "https://caredmvprep.com/privacy",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const LAST_UPDATED = "June 22, 2026";
const EMAIL = "hello@caredmvprep.com";

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d2240] to-[#122d52] text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900">
            <strong>Your privacy matters.</strong> CAREDMVPrep collects only the information necessary to provide you with a useful practice test experience. We do not sell your personal data to third parties.
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CAREDMVPrep (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates CAREDMVPrep.com, an educational platform providing DMV, CDL, and motorcycle knowledge test preparation resources for all 50 U.S. states. For privacy questions, contact us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#1a7f3c] underline">{EMAIL}</a>.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Information We Collect</h2>

          <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Account registration:</strong> Name, email address, and password when you create an account.</li>
            <li><strong>Contact form submissions:</strong> Name, email address, subject, and message content when you contact us.</li>
            <li><strong>Payment information:</strong> If you subscribe to a paid plan, payment details are processed by our third-party payment processor (Stripe). We do not store your full credit card number.</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">Information Collected Automatically</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Usage data:</strong> Pages visited, practice test results, time spent on the Site, and click patterns.</li>
            <li><strong>Device and browser information:</strong> IP address, browser type and version, operating system, and device type.</li>
            <li><strong>Cookies and similar technologies:</strong> Session cookies, preference cookies, and analytics cookies. See Section 5 for details.</li>
            <li><strong>Log data:</strong> Server logs that record requests made to our servers, including the date, time, referring URL, and pages accessed.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-2">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li>Provide, maintain, and improve the Site and its features.</li>
            <li>Personalize your experience, including saving your test progress and scores.</li>
            <li>Process payments and manage your subscription.</li>
            <li>Respond to your comments, questions, and support requests.</li>
            <li>Send you transactional emails (account confirmation, password reset) and, with your consent, product updates.</li>
            <li>Analyze usage patterns to improve content quality and user experience.</li>
            <li>Comply with applicable laws and protect our legal rights.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do <strong>not</strong> use your information to build advertising profiles or sell your data to third-party advertisers.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Legal Basis for Processing (EEA/UK Users)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are located in the European Economic Area or United Kingdom, we process your personal data under the following legal bases: performance of a contract (providing services you signed up for), legitimate interests (improving the Site, preventing fraud), legal obligation (complying with applicable law), and consent (where we ask for it, such as marketing emails).
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed mb-2">We use the following types of cookies:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Essential cookies:</strong> Required for the Site to function (session management, authentication). Cannot be disabled.</li>
            <li><strong>Preference cookies:</strong> Remember your settings and choices (e.g., state selection).</li>
            <li><strong>Analytics cookies:</strong> Collect anonymous information about how visitors use the Site (e.g., Google Analytics). Help us understand which pages are popular and how we can improve.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can control cookie settings through your browser. Disabling certain cookies may affect the functionality of the Site. Most browsers allow you to refuse or delete cookies via your browser settings.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed mb-2">We use the following third-party services that may collect or process your data:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Google Analytics:</strong> Website traffic and usage analysis. Data is anonymized where possible. Google&apos;s privacy policy: <a href="https://policies.google.com/privacy" className="text-[#1a7f3c] underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
            <li><strong>Stripe:</strong> Payment processing for premium subscriptions. Stripe&apos;s privacy policy: <a href="https://stripe.com/privacy" className="text-[#1a7f3c] underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
            <li><strong>Vercel / hosting provider:</strong> Website hosting and deployment. Server logs may be retained for security purposes.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Data Sharing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Service providers:</strong> With trusted vendors who assist us in operating the Site (payment processors, analytics, hosting), under confidentiality agreements.</li>
            <li><strong>Legal requirements:</strong> If required by law, court order, or government regulation.</li>
            <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice to you.</li>
            <li><strong>Protection of rights:</strong> To protect the rights, property, or safety of CAREDMVPrep, our users, or the public.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We retain your account information for as long as your account is active or as needed to provide services. If you close your account, we will delete or anonymize your personal data within 90 days, unless we are required to retain it for legal or regulatory purposes. Analytics data is retained in aggregate form.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use industry-standard security measures — including TLS encryption for data in transit, password hashing, and access controls — to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security and encourage you to use a strong, unique password for your account.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Children&apos;s Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#1a7f3c] underline">{EMAIL}</a> and we will promptly delete it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">11. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
            <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
            <li><strong>Objection / Restriction:</strong> Object to or request restriction of certain processing activities.</li>
            <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw it at any time.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete it, and the right to opt out of sale (we do not sell personal data).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#1a7f3c] underline">{EMAIL}</a>. We will respond within 30 days.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">12. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. For significant changes, we will provide additional notice (such as an email notification or a prominent notice on the Site). Your continued use of the Site after changes are posted constitutes your acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">13. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions, concerns, or requests related to this Privacy Policy, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-sm text-gray-700">
            <p><strong>CAREDMVPrep</strong></p>
            <p>Email: <a href={`mailto:${EMAIL}`} className="text-[#1a7f3c] underline">{EMAIL}</a></p>
            <p className="mt-2">Or use our <Link href="/contact" className="text-[#1a7f3c] underline">Contact page</Link>.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
