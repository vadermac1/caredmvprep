"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "Dashboard",     href: "/myadmin2026" },
  { label: "Users",         href: "/myadmin2026/users" },
  { label: "Subscriptions", href: "/myadmin2026/subscriptions" },
  { label: "Revenue",       href: "/myadmin2026/revenue" },
  { label: "Coverage",      href: "/myadmin2026/coverage" },
  { label: "Coupons",       href: "/myadmin2026/coupons" },
  { label: "Banners",       href: "/myadmin2026/banners" },
  { label: "Activity",      href: "/myadmin2026/activity" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <div
      className="flex gap-1 overflow-x-auto px-6 border-b border-white/10 shrink-0"
      style={{ backgroundColor: "#0f1e3c" }}
    >
      {TABS.map((t) => {
        const isActive =
          t.href === "/myadmin2026"
            ? pathname === "/myadmin2026"
            : pathname.startsWith(t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            className="px-4 py-3 text-sm font-medium whitespace-nowrap transition border-b-2"
            style={
              isActive
                ? { color: "#fff", borderColor: "#1a7f3c" }
                : { color: "#9ca3af", borderColor: "transparent" }
            }
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
