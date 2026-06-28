import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import AdminNav from "@/components/admin/AdminNav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/myadmin2026/login");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: isAdmin } = await (supabase as any).rpc("is_admin");
  if (!isAdmin) redirect("/myadmin2026/login");

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f0f4f8" }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0"
        style={{ backgroundColor: "#0f1e3c" }}
      >
        <Link href="/myadmin2026">
          <Image src="/logo.png" alt="CAREDMVPrep Admin" width={160} height={64} className="w-[130px] h-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400">{user.email}</span>
          <Link href="/" className="text-xs text-gray-400 hover:text-white transition">← Public site</Link>
        </div>
      </div>

      {/* Tab nav */}
      <AdminNav />

      {/* Content */}
      <main className="flex-1 p-6 lg:p-8 max-w-screen-2xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
