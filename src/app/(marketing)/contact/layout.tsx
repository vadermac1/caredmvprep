import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CAREDMVPrep – Questions, Errors & Feedback",
  description:
    "Reach out to CAREDMVPrep with questions, content corrections, or feedback. We respond within 48 hours.",
  alternates: { canonical: "https://caredmvprep.com/contact" },
  openGraph: {
    url: "https://caredmvprep.com/contact",
    images: [{ url: "https://caredmvprep.com/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
