import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { QuizSession } from "@/types/database";
import StatsCard from "@/components/dashboard/StatsCard";
import ExamReadiness from "@/components/dashboard/ExamReadiness";
import WeakTopics from "@/components/dashboard/WeakTopics";
import RecentActivity from "@/components/dashboard/RecentActivity";

const AVAILABLE_TESTS = [
  { id: "california-permit",    label: "CA Permit Test",    questions: 36 },
  { id: "california-motorcycle",label: "CA Motorcycle",     questions: 30 },
  { id: "california-cdl-general",label:"CA CDL General",    questions: 50 },
  { id: "texas-permit",         label: "TX Permit Test",    questions: 30 },
  { id: "texas-motorcycle",     label: "TX Motorcycle",     questions: 25 },
  { id: "texas-cdl-general",    label: "TX CDL General",    questions: 50 },
  { id: "florida-permit",       label: "FL Permit Test",    questions: 50 },
  { id: "florida-motorcycle",   label: "FL Motorcycle",     questions: 50 },
  { id: "florida-cdl-general",  label: "FL CDL General",    questions: 50 },
  { id: "new-york-permit",      label: "NY Permit Test",    questions: 20 },
  { id: "new-york-motorcycle",  label: "NY Motorcycle",     questions: 20 },
  { id: "new-york-cdl-general", label: "NY CDL General",    questions: 50 },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: sessions } = await supabase
    .from("quiz_sessions")
    .select("*")
    .eq("user_id", user.id)
    .not("completed_at", "is", null)
    .order("started_at", { ascending: false })
    .limit(20) as { data: QuizSession[] | null; error: unknown };

  // Compute aggregate stats
  const sessionList: QuizSession[] = sessions ?? [];
  const totalAnswered = sessionList.reduce((sum, s) => sum + (s.total_questions ?? 0), 0);
  const totalCorrect = sessionList.reduce((sum, s) => sum + (s.score ?? 0), 0);
  const avgPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const passCount = sessionList.filter((s) => s.passed).length;

  // Weak topics require a user_answers join — placeholder until RPC is wired up
  const weakTopics: { category: string; correct: number; total: number }[] = [];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: '#0f1e3c' }}>Your Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Track your progress and identify where to focus next.</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard label="Tests Taken" value={sessionList.length} sub="completed attempts" />
        <StatsCard label="Questions Answered" value={totalAnswered.toLocaleString()} sub="across all sessions" />
        <StatsCard label="Correct Rate" value={`${avgPct}%`} sub={`${totalCorrect} correct`} accent={avgPct >= 70} />
        <StatsCard label="Tests Passed" value={passCount} sub={`of ${sessionList.length} taken`} accent={passCount > 0} />
      </div>

      {/* Readiness + Weak Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <ExamReadiness score={avgPct} />
        <WeakTopics topics={weakTopics} />
      </div>

      {/* Recent activity */}
      <div className="mb-8">
        <RecentActivity sessions={sessionList} />
      </div>

      {/* Test picker */}
      <div>
        <h2 className="text-base font-bold mb-4" style={{ color: '#0f1e3c' }}>Start a Practice Test</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {AVAILABLE_TESTS.map((t) => (
            <Link
              key={t.id}
              href={`/dashboard/quiz/${t.id}`}
              className="flex flex-col items-start p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition group"
            >
              <p className="text-sm font-semibold text-gray-900 group-hover:underline leading-snug mb-1">{t.label}</p>
              <p className="text-xs text-gray-400">{t.questions} questions</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
