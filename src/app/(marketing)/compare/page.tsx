import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ComparePage() {
  const logos = [
    { file: "/logo-v1-current.png",  label: "1 — Current green (original)" },
    { file: "/logo-v2-16a34a.png",   label: "2 — #16a34a" },
    { file: "/logo-v3-22c55e.png",   label: "3 — #22c55e (preferred)" },
  ];

  return (
    <div style={{ backgroundColor: "#0d2240", minHeight: "100vh", padding: "48px 40px" }}>
      <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "40px", letterSpacing: "0.05em" }}>
        LOGO GREEN COMPARISON — on navy header background #0d2240
      </p>
      {logos.map((l) => (
        <div key={l.file} style={{ marginBottom: "40px" }}>
          <div
            style={{
              backgroundColor: "#0d2240",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              height: "80px",
            }}
          >
            <Image src={l.file} alt={l.label} width={600} height={120}
              style={{ height: "56px", width: "auto", objectFit: "contain" }} />
          </div>
          <p style={{ color: "#64748b", fontSize: "12px", marginTop: "8px" }}>{l.label}</p>
        </div>
      ))}
    </div>
  );
}
