"use client";

// Polls Supabase every 2 seconds after a successful checkout until the webhook
// has written the subscription row, then navigates away from the checkout URL
// so the page re-renders with live subscription data.
// Returns null — no visible UI.

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SubscriptionPoller({ product }: { product?: string }) {
  const router   = useRouter();
  const done     = useRef(false);
  const attempts = useRef(0);

  useEffect(() => {
    if (done.current) return;

    const supabase = createClient();
    let timer: ReturnType<typeof setTimeout>;

    async function poll() {
      if (done.current) return;
      attempts.current++;

      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let q = (supabase as any)
          .from("subscriptions")
          .select("id")
          .eq("user_id", user.id)
          .eq("status", "active");

        if (product) q = q.eq("product", product);

        const { data } = await q.maybeSingle() as { data: { id: string } | null };

        if (data) {
          done.current = true;
          // Navigate to /account (drops checkout params) — the page re-renders
          // with fresh subscription data from the Server Component.
          router.replace("/account");
          return;
        }
      } catch { /* network / RLS error — just retry */ }

      if (attempts.current < 15) { // 30 s max
        timer = setTimeout(poll, 2000);
      }
    }

    timer = setTimeout(poll, 1500); // first check after 1.5 s
    return () => clearTimeout(timer);
  }, [product, router]);

  return null;
}
