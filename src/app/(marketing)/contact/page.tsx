"use client";

import { useState } from "react";

const subjects = [
  "General question",
  "Report a content error",
  "Feedback or suggestion",
  "Business inquiry",
  "Other",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:hello@caredmvprep.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d2240] to-[#122d52] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Found an error? Have a question? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Message Ready to Send</h2>
              <p className="text-gray-600 text-sm">
                Your email client should have opened with your message pre-filled. If it didn&apos;t,
                email us directly at{" "}
                <a href="mailto:hello@caredmvprep.com" className="text-[#1a7f3c] font-semibold underline">
                  hello@caredmvprep.com
                </a>
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm text-gray-500 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a7f3c] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a7f3c] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a7f3c] focus:border-transparent"
                  >
                    {subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a7f3c] focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1a7f3c] text-white font-semibold rounded-lg hover:bg-[#158532] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          )}

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: "✉️", label: "Email", value: "hello@caredmvprep.com", href: "mailto:hello@caredmvprep.com" },
              { icon: "⏱️", label: "Response time", value: "Within 48 hours", href: null },
              { icon: "📍", label: "Based in", value: "United States", href: null },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-[#1a7f3c] font-medium mt-1 block hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-800 mt-1">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
            <strong>Reporting a content error?</strong> Please include the page URL and the specific question or fact that needs correction. We review all error reports and update content within 48 hours.
          </div>

        </div>
      </section>
    </div>
  );
}
