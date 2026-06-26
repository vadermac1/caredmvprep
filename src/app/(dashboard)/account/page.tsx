import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getProfile, getUserSubscriptions } from "@/lib/supabase/queries";

const PRODUCT_LABELS: Record<string, string> = {
  dmv:                 "Driver's License Premium",
  motorcycle:          "Motorcycle Premium",
  cdl:                 "CDL Premium",
  cdl_hazmat:          "CDL HazMat Add-on",
  cdl_tanker:          "CDL Tanker Add-on",
  cdl_doubles_triples: "CDL Doubles & Triples Add-on",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [profile, subscriptions] = await Promise.all([
    getProfile(supabase, user.id),
    getUserSubscriptions(supabase, user.id),
  ]);

  const hasAnyPro = subscriptions.length > 0;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold" style={{ color: '#0f1e3c' }}>Account</h1>
      </div>

      {/* Profile */}
      <div className="bg-white rounded-2xl border border-gray-200 px-6 py-5 mb-4">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Profile</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">Name</dt>
            <dd className="font-medium text-gray-900">{profile?.display_name ?? "—"}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Email</dt>
            <dd className="font-medium text-gray-900">{user.email}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Member since</dt>
            <dd className="font-medium text-gray-900">
              {profile?.created_at
                ? new Date(profile.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })
                : "—"}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Study streak</dt>
            <dd className="font-medium text-gray-900">
              {profile?.streak_current ?? 0} days
              {(profile?.streak_best ?? 0) > 0 && (
                <span className="text-gray-400 font-normal ml-1">
                  (best: {profile?.streak_best})
                </span>
              )}
            </dd>
          </div>
        </dl>
      </div>

      {/* Subscriptions */}
      <div className="bg-white rounded-2xl border border-gray-200 px-6 py-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-900">Subscriptions</h2>
          {!hasAnyPro && (
            <Link
              href="/pricing"
              className="text-xs font-bold px-3 py-1.5 rounded-lg text-white transition hover:opacity-90"
              style={{ backgroundColor: '#1a7f3c' }}
            >
              Upgrade →
            </Link>
          )}
        </div>

        {hasAnyPro ? (
          <div className="space-y-3">
            {subscriptions.map((sub) => (
              <div key={sub.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {PRODUCT_LABELS[sub.product] ?? sub.product}
                  </p>
                  {sub.current_period_end && (
                    <p className="text-xs text-gray-400 mt-0.5">
                      {sub.cancel_at_period_end
                        ? `Cancels ${new Date(sub.current_period_end).toLocaleDateString()}`
                        : `Renews ${new Date(sub.current_period_end).toLocaleDateString()}`}
                    </p>
                  )}
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={
                    sub.status === 'active'
                      ? { backgroundColor: '#f0fdf4', color: '#1a7f3c' }
                      : { backgroundColor: '#fef2f2', color: '#b91c1c' }
                  }
                >
                  {sub.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-sm text-gray-500 mb-3">
              You are on the free plan. Upgrade to unlock full test banks and dashboard analytics.
            </p>
            <div className="space-y-2 text-sm">
              {[
                { label: "Sample questions (6 per test)", included: true },
                { label: "Full question banks (30–500+ questions)", included: false },
                { label: "Progress dashboard & stats", included: false },
                { label: "Weak-topic tracking", included: false },
                { label: "Timed exam mode", included: false },
                { label: "Study streak & readiness score", included: false },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <span
                    className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                    style={f.included ? { backgroundColor: '#f0fdf4', color: '#1a7f3c' } : { backgroundColor: '#f3f4f6', color: '#9ca3af' }}
                  >
                    {f.included ? "✓" : "—"}
                  </span>
                  <span className={f.included ? "text-gray-800" : "text-gray-400"}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl border border-gray-200 px-6 py-5">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Security</h2>
        <Link
          href="/forgot-password"
          className="text-sm font-medium hover:underline"
          style={{ color: '#1a7f3c' }}
        >
          Change password →
        </Link>
      </div>
    </div>
  );
}
