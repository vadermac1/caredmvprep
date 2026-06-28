import { createAdminClient } from "@/lib/supabase/admin";
import type { Metadata } from "next";
import CouponsPanel from "@/components/admin/CouponsPanel";

export const metadata: Metadata = { title: "Coupons | Admin", robots: { index: false, follow: false } };

export default async function AdminCouponsPage() {
  const admin = createAdminClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: coupons = [] } = await (admin as any)
    .from("coupons")
    .select("*")
    .order("created_at", { ascending: false }) as { data: any[] };

  return <CouponsPanel initialCoupons={coupons} />;
}
