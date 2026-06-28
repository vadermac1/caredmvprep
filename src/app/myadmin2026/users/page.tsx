import { createAdminClient } from "@/lib/supabase/admin";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Users | Admin", robots: { index: false, follow: false } };

const LICENSE_LABELS: Record<string, string> = {
  permit: "Driver's License", motorcycle: "Motorcycle", cdl_general: "CDL",
};
const STATE_LABELS: Record<string, string> = {
  CA: "California", TX: "Texas", FL: "Florida", NY: "New York", PA: "Pennsylvania", IL: "Illinois",
};
const PRODUCT_LABELS: Record<string, string> = {
  dmv: "DMV", motorcycle: "Moto", cdl: "CDL", cdl_hazmat: "HazMat",
  cdl_tanker: "Tanker", cdl_doubles_triples: "D&T", cdl_school_bus: "School Bus", cdl_passenger: "Passenger",
};

export default async function AdminUsersPage() {
  const admin = createAdminClient();
  const { data: { users: authUsers = [] } } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: profiles = [] } = await (admin as any).from("profiles").select("*") as { data: any[] };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: subs = [] } = await (admin as any).from("subscriptions").select("*").eq("status", "active") as { data: any[] };

  const profileMap: Record<string, any> = {};
  for (const p of profiles) profileMap[p.id] = p;

  const subMap: Record<string, any[]> = {};
  for (const s of subs) {
    if (!subMap[s.user_id]) subMap[s.user_id] = [];
    subMap[s.user_id].push(s);
  }

  const rows = authUsers
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((u) => ({
      id:           u.id,
      email:        u.email ?? "—",
      name:         profileMap[u.id]?.display_name ?? "—",
      phone:        profileMap[u.id]?.phone ?? "—",
      state:        profileMap[u.id]?.target_state ?? null,
      license:      profileMap[u.id]?.target_license ?? null,
      city:         profileMap[u.id]?.city ?? null,
      address_state: profileMap[u.id]?.address_state ?? null,
      plans:        (subMap[u.id] ?? []).map((s: any) => s.product),
      joined:       u.created_at,
      lastSeen:     u.last_sign_in_at,
    }));

  const totalUsers  = rows.length;
  const proUsers    = rows.filter((r) => r.plans.length > 0).length;
  const freeUsers   = totalUsers - proUsers;

  return (
    <div className="space-y-5">
      {/* Summary strip */}
      <div className="flex gap-4 flex-wrap">
        {[
          { label: "Total Users", value: totalUsers },
          { label: "Subscribers", value: proUsers },
          { label: "Free / Trial", value: freeUsers },
        ].map((c) => (
          <div key={c.label} className="bg-white rounded-xl border border-gray-200 px-5 py-3 flex gap-4 items-center">
            <span className="text-2xl font-bold" style={{ color: "#0f1e3c" }}>{c.value}</span>
            <span className="text-xs text-gray-500">{c.label}</span>
          </div>
        ))}
        <a
          href="/myadmin2026/users?export=csv"
          className="ml-auto px-4 py-2 text-xs font-bold text-white rounded-lg transition hover:opacity-90"
          style={{ backgroundColor: "#1a7f3c" }}
        >
          Export CSV
        </a>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead style={{ backgroundColor: "#f8fafc" }}>
              <tr className="text-xs text-gray-400 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold">Name</th>
                <th className="text-left px-4 py-3 font-semibold">Email</th>
                <th className="text-left px-4 py-3 font-semibold">Phone</th>
                <th className="text-left px-4 py-3 font-semibold">State</th>
                <th className="text-left px-4 py-3 font-semibold">License</th>
                <th className="text-left px-4 py-3 font-semibold">Plans</th>
                <th className="text-left px-4 py-3 font-semibold">Joined</th>
                <th className="text-left px-4 py-3 font-semibold">Last Seen</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50 transition last:border-0">
                  <td className="px-4 py-3 font-medium text-gray-900">{r.name}</td>
                  <td className="px-4 py-3 text-gray-600">{r.email}</td>
                  <td className="px-4 py-3 text-gray-500">{r.phone}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {r.state ? (STATE_LABELS[r.state] ?? r.state) : "—"}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {r.license ? (LICENSE_LABELS[r.license] ?? r.license) : "—"}
                  </td>
                  <td className="px-4 py-3">
                    {r.plans.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {r.plans.map((p: string) => (
                          <span key={p} className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "#f0fdf4", color: "#1a7f3c" }}>
                            {PRODUCT_LABELS[p] ?? p}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">Free</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400">
                    {new Date(r.joined).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400">
                    {r.lastSeen ? new Date(r.lastSeen).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Never"}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-gray-400 text-sm">No users yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
