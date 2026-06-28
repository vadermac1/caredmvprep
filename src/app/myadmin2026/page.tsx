import { createAdminClient } from "@/lib/supabase/admin";
import type { Metadata } from "next";

// Question bank imports for coverage stats
import caDmvQuestions         from "@/data/questions/dmv/california";
import caMotoQuestions        from "@/data/questions/motorcycle/california";
import cdlFederalQuestions    from "@/data/questions/cdl/federal";
import cdlHazmatQuestions     from "@/data/questions/cdl/hazmat";
import cdlTankerQuestions     from "@/data/questions/cdl/tank-vehicles";
import cdlDoublesTriplesQ     from "@/data/questions/cdl/doubles-triples";
import cdlPassengerQuestions  from "@/data/questions/cdl/passenger";
import cdlSchoolBusQuestions  from "@/data/questions/cdl/school-bus";
import cdlAirBrakesQuestions  from "@/data/questions/cdl/air-brakes";
import cdlCombinationQ        from "@/data/questions/cdl/combination-vehicles";

export const metadata: Metadata = { title: "Admin Dashboard | CAREDMVPrep", robots: { index: false, follow: false } };

const PRODUCT_LABELS: Record<string, string> = {
  dmv: "Driver's License", motorcycle: "Motorcycle", cdl: "CDL Core",
  cdl_hazmat: "HazMat", cdl_tanker: "Tanker", cdl_doubles_triples: "Doubles/Triples",
  cdl_school_bus: "School Bus", cdl_passenger: "Passenger",
};

function StatCard({ label, value, sub, color }: { label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
      <p className="text-xs text-gray-500 font-medium mb-1">{label}</p>
      <p className="text-2xl font-bold" style={{ color: color ?? "#0f1e3c" }}>{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

export default async function AdminDashboard() {
  const admin = createAdminClient();

  // ── Users ──────────────────────────────────────────────────────────────────
  const { data: { users: authUsers = [] } } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  const totalUsers = authUsers.length;

  // ── Subscriptions ──────────────────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: allSubs = [] } = await (admin as any)
    .from("subscriptions")
    .select("*, subscription_plans(price_cents, interval, label)") as { data: any[] };

  const activeSubs  = allSubs.filter((s) => s.status === "active");
  const pastDueSubs = allSubs.filter((s) => s.status === "past_due");
  const canceledSubs = allSubs.filter((s) => s.status === "canceled");

  const mrrCents = activeSubs
    .filter((s) => s.payment_type === "recurring")
    .reduce((sum: number, s: any) => sum + (s.subscription_plans?.price_cents ?? 0), 0);

  const oneTimeCents = allSubs
    .filter((s) => s.payment_type === "one_time")
    .reduce((sum: number, s: any) => sum + (s.subscription_plans?.price_cents ?? 0), 0);

  // Per-product active counts
  const productCounts: Record<string, number> = {};
  for (const s of activeSubs) {
    productCounts[s.product] = (productCounts[s.product] ?? 0) + 1;
  }

  // ── Coverage ───────────────────────────────────────────────────────────────
  const BANKS = [
    { qs: caDmvQuestions, target: 200 },
    { qs: caMotoQuestions, target: 150 },
    { qs: cdlFederalQuestions, target: 250 },
    { qs: cdlHazmatQuestions, target: 80 },
    { qs: cdlTankerQuestions, target: 60 },
    { qs: cdlDoublesTriplesQ, target: 60 },
    { qs: cdlPassengerQuestions, target: 60 },
    { qs: cdlSchoolBusQuestions, target: 60 },
    { qs: cdlAirBrakesQuestions, target: 60 },
    { qs: cdlCombinationQ, target: 60 },
  ];
  const totalQ     = BANKS.reduce((s, b) => s + b.qs.length, 0);
  const targetQ    = BANKS.reduce((s, b) => s + b.target, 0);
  const verifiedQ  = BANKS.reduce((s, b) => s + b.qs.filter((q) => q.status === "verified").length, 0);
  const warnQ      = BANKS.reduce((s, b) => s + b.qs.filter((q) => !q.sourceSection?.match(/p\.\s*[\d]/)).length, 0);
  const coveragePct = targetQ > 0 ? Math.round((verifiedQ / targetQ) * 100) : 0;

  // ── Recent signups ─────────────────────────────────────────────────────────
  const recentUsers = authUsers
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 8);

  // ── Recent purchases ───────────────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: recentSubs = [] } = await (admin as any)
    .from("subscriptions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8) as { data: any[] };

  // Build user email map
  const emailMap: Record<string, string> = {};
  for (const u of authUsers) emailMap[u.id] = u.email ?? "—";

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatCard label="Total Users"       value={totalUsers}                                              />
        <StatCard label="Active Subs"       value={activeSubs.length}       color="#1a7f3c"                />
        <StatCard label="Est. MRR"          value={`$${(mrrCents / 100).toFixed(0)}`} color="#1a7f3c"      />
        <StatCard label="One-Time Sales"    value={`$${(oneTimeCents / 100).toFixed(0)}`}                  />
        <StatCard label="Past Due"          value={pastDueSubs.length}      color={pastDueSubs.length > 0 ? "#b91c1c" : "#0f1e3c"} />
        <StatCard label="Coverage"          value={`${coveragePct}%`}       sub={`${warnQ} warnings`}      />
      </div>

      {/* Two-column: active by plan + recent signups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Active by plan */}
        <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Active by Plan</h2>
          {Object.keys(PRODUCT_LABELS).map((product) => {
            const count = productCounts[product] ?? 0;
            const maxCount = Math.max(...Object.values(productCounts), 1);
            return (
              <div key={product} className="flex items-center gap-3 mb-2.5">
                <div className="w-32 text-xs text-gray-500 truncate">{PRODUCT_LABELS[product]}</div>
                <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(count / maxCount) * 100}%`, backgroundColor: "#1a7f3c" }}
                  />
                </div>
                <div className="text-xs font-bold text-gray-700 w-5 text-right">{count}</div>
              </div>
            );
          })}
          <div className="mt-3 pt-3 border-t border-gray-100 flex gap-6 text-xs text-gray-500">
            <span>Canceled: <strong className="text-gray-800">{canceledSubs.length}</strong></span>
            <span>Past due: <strong className="text-red-600">{pastDueSubs.length}</strong></span>
          </div>
        </div>

        {/* Recent signups */}
        <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Recent Signups</h2>
          <div className="space-y-2">
            {recentUsers.map((u) => (
              <div key={u.id} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 truncate max-w-[200px]">{u.email}</span>
                <span className="text-xs text-gray-400 shrink-0 ml-2">
                  {new Date(u.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent purchases */}
      <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Recent Purchases</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-gray-100">
                <th className="text-left pb-2 font-medium">Email</th>
                <th className="text-left pb-2 font-medium">Product</th>
                <th className="text-left pb-2 font-medium">Type</th>
                <th className="text-left pb-2 font-medium">Status</th>
                <th className="text-left pb-2 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentSubs.map((s: any) => (
                <tr key={s.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-2 text-gray-700 truncate max-w-[200px]">{emailMap[s.user_id] ?? "—"}</td>
                  <td className="py-2 text-gray-700">{PRODUCT_LABELS[s.product] ?? s.product}</td>
                  <td className="py-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      s.payment_type === "recurring" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"
                    }`}>
                      {s.payment_type === "recurring" ? "Monthly" : "One-time"}
                    </span>
                  </td>
                  <td className="py-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      s.status === "active" ? "bg-green-50 text-green-700" :
                      s.status === "past_due" ? "bg-red-50 text-red-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="py-2 text-gray-400 text-xs">
                    {new Date(s.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Question bank summary */}
      <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
        <h2 className="text-sm font-bold text-gray-900 mb-2">Question Bank Health</h2>
        <p className="text-xs text-gray-500 mb-4">{totalQ.toLocaleString()} total questions · {verifiedQ.toLocaleString()} verified · {targetQ - verifiedQ} still needed · {warnQ} missing source ref</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${coveragePct}%`, backgroundColor: coveragePct >= 80 ? "#22c55e" : coveragePct >= 50 ? "#f59e0b" : "#ef4444" }} />
          </div>
          <span className="text-sm font-bold" style={{ color: coveragePct >= 80 ? "#22c55e" : "#f59e0b" }}>{coveragePct}%</span>
        </div>
      </div>
    </div>
  );
}
