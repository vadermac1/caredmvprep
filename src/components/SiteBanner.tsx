"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Banner { id: string; content: string; color: string }

export default function SiteBanner() {
  const [banner,    setBanner]    = useState<Banner | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const key = "dismissed_banner";
    const lastDismissed = sessionStorage.getItem(key);

    const supabase = createClient();
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await (supabase as any)
        .from("banners")
        .select("id, content, color")
        .eq("active", true)
        .limit(1)
        .maybeSingle() as { data: Banner | null };

      if (data) {
        if (lastDismissed === data.id) { setDismissed(true); return; }
        setBanner(data);
      }
    })();
  }, []);

  if (!banner || dismissed) return null;

  function dismiss() {
    sessionStorage.setItem("dismissed_banner", banner!.id);
    setDismissed(true);
  }

  return (
    <div
      className="w-full flex items-center justify-between gap-4 px-5 py-2.5 text-white text-sm"
      style={{ backgroundColor: banner.color }}
    >
      <div
        className="flex-1 text-center text-xs sm:text-sm leading-snug"
        dangerouslySetInnerHTML={{ __html: banner.content }}
      />
      <button
        onClick={dismiss}
        className="shrink-0 opacity-70 hover:opacity-100 transition text-lg leading-none"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  );
}
