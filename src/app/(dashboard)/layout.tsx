import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Profile } from "@/types/database";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single() as { data: Profile | null; error: unknown };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#f0f4f8' }}>
      <DashboardSidebar
        displayName={profile?.display_name ?? user.email ?? "User"}
        subscriptionTier={profile?.subscription_tier ?? "free"}
      />
      <main className="flex-1 min-w-0 p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
