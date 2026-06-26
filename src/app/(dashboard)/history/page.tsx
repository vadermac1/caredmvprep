import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { QuizSession } from "@/types/database";

export default async function HistoryPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: sessions } = await supabase
    .from("quiz_sessions")
    .select("*")
    .eq("user_id", user.id)
    .not("completed_at", "is", null)
    .order("started_at", { ascending: false })
    .limit(50) as { data: QuizSession[] | null; error: unknown };

  const TEST_LABELS: Record<string, string> = {
    "california-permit": "CA Permit Test",
    "california-motorcycle": "CA Motorcycle",
    "california-cdl-general": "CA CDL General",
    "texas-permit": "TX Permit Test",
    "texas-motorcycle": "TX Motorcycle",
    "texas-cdl-general": "TX CDL General",
    "florida-permit": "FL Permit Test",
    "florida-motorcycle": "FL Motorcycle",
    "florida-cdl-general": "FL CDL General",
    "new-york-permit": "NY Permit Test",
    "new-york-motorcycle": "NY Motorcycle",
    "new-york-cdl-general": "NY CDL General",
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ color: '#0f1e3c' }}>Test History</h1>
        <p className="text-sm text-gray-500 mt-1">All your completed practice test sessions.</p>
      </div>

      {(!sessions || sessions.length === 0) ? (
        <div className="bg-white rounded-2xl border border-gray-200 px-6 py-12 text-center">
          <p className="text-gray-500 mb-4">No tests completed yet.</p>
          <Link href="/dashboard" className="text-sm font-semibold hover:underline" style={{ color: '#1a7f3c' }}>
            Start a practice test →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {sessions.map((s) => {
              const pct = s.score !== null ? Math.round((s.score / s.total_questions) * 100) : null;
              return (
                <div key={s.id} className="flex items-center justify-between px-5 py-4 gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {TEST_LABELS[s.test_id] ?? s.test_id}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(s.started_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      {" · "}{s.total_questions} questions
                    </p>
                  </div>
                  {pct !== null && (
                    <span
                      className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={
                        s.passed
                          ? { backgroundColor: '#f0fdf4', color: '#1a7f3c' }
                          : { backgroundColor: '#fef2f2', color: '#b91c1c' }
                      }
                    >
                      {pct}% — {s.passed ? "Passed" : "Failed"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
