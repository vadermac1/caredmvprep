import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | CAREDMVPrep",
  description:
    "Read the CAREDMVPrep Terms of Service. Learn about permitted use, intellectual property, disclaimers, and limitations of liability for our DMV practice test platform.",
  alternates: { canonical: "https://caredmvprep.com/terms" },
  openGraph: {
    url: "https://caredmvprep.com/terms",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const LAST_UPDATED = "June 22, 2026";
const EFFECTIVE_DATE = "June 22, 2026";
const EMAIL = "hello@caredmvprep.com";

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0d2240] to-[#122d52] text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED} · Effective: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm text-amber-900">
            <strong>Summary:</strong> CAREDMVPrep provides free educational practice tests to help you prepare for your DMV, CDL, or motorcycle knowledge exam. We are not affiliated with any government agency. Our content is for educational purposes only and is not a guarantee of passing any real exam.
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using CAREDMVPrep.com (the &ldquo;Site&rdquo;) or any of its services, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Site. These Terms apply to all visitors, users, and others who access or use the Site.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Description of Services</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CAREDMVPrep provides free and paid online practice tests, study guides, and educational resources designed to help individuals prepare for state DMV written knowledge tests, Commercial Driver&apos;s License (CDL) exams, and motorcycle knowledge tests.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Important disclaimer:</strong> CAREDMVPrep is an independent educational resource and is not affiliated with, endorsed by, or operated by any state Department of Motor Vehicles (DMV), the Federal Motor Carrier Safety Administration (FMCSA), or any other government agency. Our practice questions are written independently based on publicly available state driver&apos;s manuals for educational purposes. We do not guarantee that completing our practice tests will result in passing any official examination.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. User Accounts</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Some features of the Site require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Update your information to keep it accurate and complete.</li>
            <li>Not share your account credentials with any third party.</li>
            <li>Notify us immediately at <a href={`mailto:${EMAIL}`} className="text-[#1a7f3c] underline">{EMAIL}</a> if you suspect unauthorized use of your account.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            We reserve the right to terminate accounts that violate these Terms.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Permitted Use</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Subject to these Terms, you are granted a limited, non-exclusive, non-transferable license to access and use the Site for your personal, non-commercial educational purposes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Prohibited Use</h2>
          <p className="text-gray-700 leading-relaxed mb-2">You may not:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm mb-4">
            <li>Copy, reproduce, distribute, or resell any content from the Site without written permission.</li>
            <li>Use automated tools (bots, scrapers, crawlers) to access or collect content from the Site in a manner that exceeds normal use.</li>
            <li>Attempt to reverse engineer, decompile, or otherwise extract the source code of any software associated with the Site.</li>
            <li>Use the Site for any unlawful purpose or in violation of any local, state, national, or international law.</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
            <li>Transmit any material that is defamatory, offensive, or otherwise objectionable.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on the Site — including text, practice questions, explanations, images, logos, and software — is the property of CAREDMVPrep or its content suppliers and is protected by applicable copyright, trademark, and other intellectual property laws. State driver&apos;s manual content is based on publicly available government publications; our original presentation, questions, and explanations are proprietary.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Subscription and Payments</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certain premium features may require a paid subscription. Subscription pricing, billing cycles, and cancellation policies will be disclosed at the time of purchase. All fees are stated in U.S. dollars unless otherwise indicated. We reserve the right to change pricing at any time with reasonable notice. Refunds, if applicable, will be issued in accordance with our refund policy as posted on the pricing page.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            THE SITE AND ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT WARRANT THAT PRACTICE TEST CONTENT IS IDENTICAL TO THE OFFICIAL STATE EXAM OR THAT COMPLETING OUR TESTS WILL RESULT IN PASSING THE OFFICIAL EXAM.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, CAREDMVPREP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Site may contain links to third-party websites or resources. We do not endorse and are not responsible for the content, products, or services on those sites. Accessing third-party sites is at your own risk.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">11. Indemnification</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless CAREDMVPrep, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of the Site, your violation of these Terms, or your violation of any rights of a third party.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">12. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms are governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in the United States.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">13. Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We reserve the right to update or modify these Terms at any time. Changes will be effective when posted on this page with an updated &ldquo;Last Updated&rdquo; date. Your continued use of the Site after any changes constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">14. Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions about these Terms, please contact us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#1a7f3c] underline">{EMAIL}</a> or visit our{" "}
            <Link href="/contact" className="text-[#1a7f3c] underline">Contact page</Link>.
          </p>

        </div>
      </section>
    </div>
  );
}
