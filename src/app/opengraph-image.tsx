import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CAREDMVPrep – Free DMV Practice Tests for All 50 States";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0a1628 0%, #0f2444 50%, #0d3060 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Road perspective lines */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "350px solid transparent",
            borderRight: "350px solid transparent",
            borderBottom: "420px solid rgba(255,255,255,0.03)",
          }}
        />
        {/* Center dashes */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: 40 + i * 90,
              left: "50%",
              transform: "translateX(-50%)",
              width: 6 - i * 1,
              height: 40,
              background: "rgba(255,255,255,0.15)",
              borderRadius: 3,
            }}
          />
        ))}

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#1a7f3c",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "60px 80px",
            gap: 0,
          }}
        >
          {/* Logo row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 36,
            }}
          >
            {/* Icon mark */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: "#1a7f3c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              🚗
            </div>
            {/* Wordmark */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
              <span style={{ color: "#ffffff", fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>
                CARE
              </span>
              <span style={{ color: "#1a7f3c", fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>
                DMV
              </span>
              <span style={{ color: "#ffffff", fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>
                Prep
              </span>
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 60,
              fontWeight: 900,
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: -2,
              marginBottom: 20,
            }}
          >
            Pass Your DMV Test
          </div>
          <div
            style={{
              color: "#1a7f3c",
              fontSize: 60,
              fontWeight: 900,
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: -2,
              marginBottom: 28,
            }}
          >
            The First Time
          </div>

          {/* Subtext */}
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 26,
              textAlign: "center",
              fontWeight: 400,
              letterSpacing: 0.2,
            }}
          >
            Free practice tests for all 50 states · Car · CDL · Motorcycle
          </div>

          {/* Badge row */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
            }}
          >
            {["Based on Official Manuals", "Instant Feedback", "Free to Start"].map((badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 50,
                  padding: "10px 22px",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom green bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #1a7f3c, #22a44f, #1a7f3c)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
