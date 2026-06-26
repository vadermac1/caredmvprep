import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getProfile, getUserSubscriptions, hasAnySubscription } from "@/lib/supabase/queries";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const [profile, subscriptions] = await Promise.all([
    getProfile(supabase, user.id),
    getUserSubscriptions(supabase, user.id),
  ]);

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#f0f4f8' }}>
      <DashboardSidebar
        displayName={profile?.display_name ?? user.email ?? "User"}
        isPro={hasAnySubscription(subscriptions)}
        activeProducts={subscriptions.map((s) => s.product)}
      />
      <main className="flex-1 min-w-0 p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
