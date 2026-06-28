import { createAdminClient } from "@/lib/supabase/admin";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Revenue | Admin", robots: { index: false, follow: false } };

const PRODUCT_LABELS: Record<string, string> = {
  dmv: "Driver's License", motorcycle: "Motorcycle", cdl: "CDL Core",
  cdl_hazmat: "HazMat", cdl_tanker: "Tanker", cdl_doubles_triples: "Doubles/Triples",
  cdl_school_bus: "School Bus", cdl_passenger: "Passenger",
};

export default async function AdminRevenuePage() {
  const admin = createAdminClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: subs = [] } = await (admin as any)
    .from("subscriptions")
    .select("*, subscription_plans(price_cents, interval)")
    .order("created_at", { ascending: false }) as { data: any[] };

  const activeSubs   = subs.filter((s: any) => s.status === "active");
  const recurringActive = activeSubs.filter((s: any) => s.payment_type === "recurring");
  const oneTimePaid  = subs.filter((s: any) => s.payment_type === "one_time");

  const mrrCents     = recurringActive.reduce((sum: number, s: any) => sum + (s.subscription_plans?.price_cents ?? 0), 0);
  const arrCents     = mrrCents * 12;
  const oneTimeCents = oneTimePaid.reduce((sum: number, s: any) => sum + (s.subscription_plans?.price_cents ?? 0), 0);

  // Per-product breakdown
  interface ProductRevRow { recurring: number; oneTime: number; count: number }
  const byProduct: Record<string, ProductRevRow> = {};
  for (const s of subs) {
    if (!byProduct[s.product]) byProduct[s.product] = { recurring: 0, oneTime: 0, count: 0 };
    const cents = s.subscription_plans?.price_cents ?? 0;
    if (s.payment_type === "recurring" && s.status === "active") byProduct[s.product].recurring += cents;
    if (s.payment_type === "one_time") byProduct[s.product].oneTime += cents;
    byProduct[s.product].count++;
  }

  const maxRevenue = Math.max(...Object.values(byProduct).map((r) => r.recurring + r.oneTime), 1);

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {[
          { label: "Est. MRR",        value: `$${(mrrCents / 100).toFixed(0)}`,     color: "#1a7f3c" },
          { label: "Ann. Run Rate",   value: `$${(arrCents / 100).toFixed(0)}`,     color: "#1a7f3c" },
          { label: "One-Time (all)",  value: `$${(oneTimeCents / 100).toFixed(0)}`, color: "#0f1e3c" },
          { label: "Active Subs",     value: activeSubs.length,                     color: "#0f1e3c" },
          { label: "Monthly Subs",    value: recurringActive.length,                color: "#0f1e3c" },
        ].map((c) => (
          <div key={c.label} className="bg-white rounded-xl border border-gray-200 px-5 py-4">
            <p className="text-xs text-gray-500 mb-1">{c.label}</p>
            <p className="text-2xl font-bold" style={{ color: c.color }}>{c.value}</p>
          </div>
        ))}
      </div>

      {/* Revenue by product */}
      <div className="bg-white rounded-xl border border-gray-200 px-5 py-5">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Revenue by Plan</h2>
        <div className="space-y-4">
          {Object.entries(byProduct)
            .sort(([, a], [, b]) => (b.recurring + b.oneTime) - (a.recurring + a.oneTime))
            .map(([product, rev]) => {
              const total = rev.recurring + rev.oneTime;
              const pct   = Math.round((total / maxRevenue) * 100);
              return (
                <div key={product}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-800">{PRODUCT_LABELS[product] ?? product}</span>
                    <span className="text-gray-500">
                      ${(total / 100).toFixed(0)} · {rev.count} sub{rev.count !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: "#1a7f3c" }} />
                  </div>
                  <div className="flex gap-4 text-xs text-gray-400 mt-0.5">
                    <span>MRR: ${(rev.recurring / 100).toFixed(0)}</span>
                    <span>One-time: ${(rev.oneTime / 100).toFixed(0)}</span>
                  </div>
                </div>
              );
            })}
          {Object.keys(byProduct).length === 0 && (
            <p className="text-sm text-gray-400">No revenue data yet.</p>
          )}
        </div>
      </div>

      {/* Subscription log */}
      <div className="bg-white rounded-xl border border-gray-200 px-5 py-5">
        <h2 className="text-sm font-bold text-gray-900 mb-4">All Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead style={{ backgroundColor: "#f8fafc" }}>
              <tr className="text-xs text-gray-400 border-b border-gray-100">
                <th className="text-left px-3 py-2 font-semibold">Product</th>
                <th className="text-left px-3 py-2 font-semibold">Type</th>
                <th className="text-left px-3 py-2 font-semibold">Amount</th>
                <th className="text-left px-3 py-2 font-semibold">Status</th>
                <th className="text-left px-3 py-2 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {subs.slice(0, 50).map((s: any) => (
                <tr key={s.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-3 py-2 text-gray-700">{PRODUCT_LABELS[s.product] ?? s.product}</td>
                  <td className="px-3 py-2 text-xs text-gray-500">{s.payment_type === "recurring" ? "Monthly" : "One-time"}</td>
                  <td className="px-3 py-2 text-gray-700 font-medium">
                    {s.subscription_plans?.price_cents ? `$${(s.subscription_plans.price_cents / 100).toFixed(2)}` : "—"}
                  </td>
                  <td className="px-3 py-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      s.status === "active" ? "bg-green-50 text-green-700" :
                      s.status === "past_due" ? "bg-red-50 text-red-700" : "bg-gray-100 text-gray-500"
                    }`}>{s.status}</span>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-400">
                    {new Date(s.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
