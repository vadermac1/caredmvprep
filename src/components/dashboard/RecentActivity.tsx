import Link from "next/link";
import type { QuizSession } from "@/types/database";
import { quizRegistry, MOCK_EXAM_DEFS } from "@/data/questions/index";

// Single source of truth for every live state/license/mock-exam combo — a
// completed session can be either a regular quiz or a mock exam, and each
// lives in a different registry, so both need to be checked.
const TEST_LABELS: Record<string, string> = {
  ...Object.fromEntries(Object.entries(quizRegistry).map(([id, cfg]) => [id, cfg.label])),
  ...Object.fromEntries(MOCK_EXAM_DEFS.map((d) => [d.examId, d.label])),
};

function testLabel(testId: string): string {
  return TEST_LABELS[testId] ?? testId;
}

interface RecentActivityProps {
  sessions: QuizSession[];
  quizHref: string;
}

export default function RecentActivity({ sessions, quizHref }: RecentActivityProps) {
  if (sessions.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 px-5 py-5">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Recent Activity</h3>
        <p className="text-sm text-gray-400">
          No tests taken yet.{" "}
          <Link href={quizHref} className="underline" style={{ color: '#1a7f3c' }}>
            Start your first practice test →
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-5">
      <h3 className="text-sm font-bold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {sessions.slice(0, 5).map((s) => {
          const pct = s.score !== null ? Math.round((s.score / s.total_questions) * 100) : null;
          const passed = s.passed;
          return (
            <div key={s.id} className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {testLabel(s.test_id)}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(s.started_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  {" · "}
                  {s.total_questions} questions
                </p>
              </div>
              {pct !== null ? (
                <span
                  className="shrink-0 text-xs font-bold px-2 py-1 rounded-full"
                  style={
                    passed
                      ? { backgroundColor: '#f0fdf4', color: '#1a7f3c' }
                      : { backgroundColor: '#fef2f2', color: '#b91c1c' }
                  }
                >
                  {pct}% {passed ? "Passed" : "Failed"}
                </span>
              ) : (
                <span className="shrink-0 text-xs text-gray-400">In progress</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
