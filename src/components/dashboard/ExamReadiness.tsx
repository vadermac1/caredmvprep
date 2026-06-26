interface ExamReadinessProps {
  score: number; // 0–100
}

export default function ExamReadiness({ score }: ExamReadinessProps) {
  const label =
    score >= 85 ? "Exam Ready" :
    score >= 70 ? "Almost There" :
    score >= 50 ? "Needs Practice" :
    "Getting Started";

  const color =
    score >= 85 ? "#1a7f3c" :
    score >= 70 ? "#d97706" :
    "#b91c1c";

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference * (1 - score / 100);

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-5 flex items-center gap-5">
      <div className="relative w-24 h-24 shrink-0">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="10" />
          <circle
            cx="50" cy="50" r="40" fill="none"
            stroke={color} strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.6s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-extrabold" style={{ color }}>{score}%</span>
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Exam Readiness</p>
        <p className="text-lg font-bold" style={{ color: '#0f1e3c' }}>{label}</p>
        <p className="text-xs text-gray-400 mt-1 leading-snug">
          {score >= 85
            ? "You're consistently scoring above passing thresholds."
            : score >= 70
            ? "Review your weak topics to push over 85%."
            : "Keep practicing — you'll get there with more sessions."}
        </p>
      </div>
    </div>
  );
}
