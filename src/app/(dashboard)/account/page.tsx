import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Profile, Subscription } from "@/types/database";

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single() as { data: Profile | null; error: unknown };

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .single() as { data: Subscription | null; error: unknown };

  const isPro = profile?.subscription_tier === "pro";

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
        </dl>
      </div>

      {/* Subscription */}
      <div className="bg-white rounded-2xl border border-gray-200 px-6 py-5 mb-4">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Subscription</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {isPro ? "Pro Plan" : "Free Plan"}
            </p>
            {isPro && subscription?.current_period_end && (
              <p className="text-xs text-gray-400 mt-0.5">
                {subscription.status === "canceled"
                  ? `Access until ${new Date(subscription.current_period_end).toLocaleDateString()}`
                  : `Renews ${new Date(subscription.current_period_end).toLocaleDateString()}`}
              </p>
            )}
            {!isPro && (
              <p className="text-xs text-gray-400 mt-0.5">
                Upgrade to unlock full test banks, dashboard stats, and weak-topic tracking.
              </p>
            )}
          </div>
          {!isPro ? (
            <Link
              href="/pricing"
              className="px-4 py-2 rounded-lg text-xs font-bold text-white transition hover:opacity-90"
              style={{ backgroundColor: '#1a7f3c' }}
            >
              Upgrade →
            </Link>
          ) : (
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: '#f0fdf4', color: '#1a7f3c' }}>
              Active
            </span>
          )}
        </div>
      </div>

      {/* What's included */}
      <div className="bg-white rounded-2xl border border-gray-200 px-6 py-5">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Your Plan Includes</h2>
        <ul className="space-y-2 text-sm">
          {[
            { label: "Sample practice questions (6 per test)", included: true },
            { label: "Full question banks (30–50 questions)", included: isPro },
            { label: "Progress dashboard & stats", included: isPro },
            { label: "Weak-topic tracking", included: isPro },
            { label: "Timed exam mode", included: isPro },
            { label: "Unlimited retakes", included: isPro },
          ].map((f) => (
            <li key={f.label} className="flex items-center gap-2">
              <span
                className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                style={f.included ? { backgroundColor: '#f0fdf4', color: '#1a7f3c' } : { backgroundColor: '#f3f4f6', color: '#9ca3af' }}
              >
                {f.included ? "✓" : "—"}
              </span>
              <span className={f.included ? "text-gray-800" : "text-gray-400"}>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
