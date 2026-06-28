"use client";

import { useEffect, useState } from "react";
import CheckoutButton from "@/components/ui/CheckoutButton";
import { PRODUCT_CONFIG, formatCents } from "@/lib/stripe/config";
import { createClient } from "@/lib/supabase/client";
import type { SubscriptionProduct } from "@/types/database";

// Products shown on pricing page — School Bus and Passenger omitted until banks are ready
const CORE_PRODUCTS: SubscriptionProduct[] = ["dmv", "motorcycle", "cdl"];
const ENDORSEMENT_PRODUCTS: SubscriptionProduct[] = [
  "cdl_hazmat",
  "cdl_tanker",
  "cdl_doubles_triples",
];

type AccessState =
  | { kind: "loading" }
  | { kind: "none" }
  | { kind: "recurring" }
  | { kind: "one_time"; expiresAt: string };

function useProductAccess(product: SubscriptionProduct): AccessState {
  const [state, setState] = useState<AccessState>({ kind: "loading" });

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { setState({ kind: "none" }); return; }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await (supabase as any)
        .from("subscriptions")
        .select("payment_type, status, access_expires_at")
        .eq("user_id", user.id)
        .eq("product", product as string)
        .eq("status", "active")
        .maybeSingle() as {
          data: { payment_type: string; status: string; access_expires_at: string | null } | null
        };
      const data = result.data;

      if (!data) { setState({ kind: "none" }); return; }

      if (data.payment_type === "recurring") {
        setState({ kind: "recurring" });
      } else {
        const now = new Date().toISOString();
        if (data.access_expires_at && data.access_expires_at > now) {
          setState({ kind: "one_time", expiresAt: data.access_expires_at });
        } else {
          setState({ kind: "none" });
        }
      }
    });
  }, [product]);

  return state;
}

function formatExpiry(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

// ─── Core product card (dmv / motorcycle / cdl) ───────────────────────────────

function CoreProductCard({ product }: { product: SubscriptionProduct }) {
  const config = PRODUCT_CONFIG[product];
  const access = useProductAccess(product);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
      <div className="mb-5">
        <h2 className="text-base font-bold text-gray-900 mb-1">{config.label}</h2>
        <p className="text-xs text-gray-500">{config.description}</p>
      </div>

      {/* Active-access states */}
      {access.kind === "recurring" && (
        <div className="flex-1 flex flex-col justify-end">
          <div
            className="rounded-xl px-4 py-3 text-center"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #1a7f3c" }}
          >
            <p className="text-sm font-semibold" style={{ color: "#1a7f3c" }}>
              ✓ Active Monthly Plan
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Manage in{" "}
              <a href="/account" className="underline">Account settings</a>
            </p>
          </div>
        </div>
      )}

      {access.kind === "one_time" && (
        <div className="flex-1 flex flex-col justify-end">
          <div
            className="rounded-xl px-4 py-3 text-center"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #1a7f3c" }}
          >
            <p className="text-sm font-semibold" style={{ color: "#1a7f3c" }}>
              ✓ Access Active
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Until {formatExpiry(access.expiresAt)}
            </p>
          </div>
        </div>
      )}

      {/* No access — show both options */}
      {(access.kind === "none" || access.kind === "loading") && (
        <div className="flex-1 flex flex-col justify-end space-y-3">
          {/* Best Value — one-time */}
          <div
            className="rounded-xl border px-4 py-3 relative"
            style={{ borderColor: "#1a7f3c", backgroundColor: "#f0fdf4" }}
          >
            <span
              className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white whitespace-nowrap"
              style={{ backgroundColor: "#1a7f3c" }}
            >
              Best Value
            </span>
            <div className="flex items-baseline justify-between mb-2 mt-1">
              <span className="text-xl font-extrabold text-gray-900">
                {formatCents(config.oneTime!.priceCents)}
              </span>
              <span className="text-xs text-gray-500">
                {config.oneTime!.durationMonths} months
              </span>
            </div>
            <CheckoutButton
              product={product}
              paymentType="one_time"
              label={`Buy ${config.oneTime!.durationMonths}-Month Pass`}
              style={{
                width: "100%", padding: "8px", borderRadius: "8px",
                fontSize: "13px", fontWeight: 600,
                backgroundColor: "#1a7f3c", color: "#fff",
              }}
            />
          </div>

          {/* Monthly */}
          <div className="rounded-xl border border-gray-200 px-4 py-3">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xl font-extrabold text-gray-900">
                {formatCents(config.recurring!.priceCents)}
                <span className="text-xs font-normal text-gray-400">/mo</span>
              </span>
              <span className="text-xs text-gray-500">Cancel anytime</span>
            </div>
            <CheckoutButton
              product={product}
              paymentType="recurring"
              label="Subscribe Monthly"
              variant="secondary"
              className="w-full py-2 rounded-lg text-xs font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Endorsement card (hazmat / tanker / doubles) — one-time only ─────────────

function EndorsementCard({ product }: { product: SubscriptionProduct }) {
  const config = PRODUCT_CONFIG[product];
  const access = useProductAccess(product);

  return (
    <div className="border border-gray-100 rounded-xl bg-white p-4 flex flex-col gap-3">
      <div>
        <p className="text-sm font-semibold text-gray-900">{config.label}</p>
        <p className="text-xs text-gray-500 mt-0.5">
          {config.description.split(" — ")[0]}
        </p>
      </div>

      {access.kind === "recurring" || access.kind === "one_time" ? (
        <div className="text-xs font-semibold" style={{ color: "#1a7f3c" }}>
          {access.kind === "one_time"
            ? `✓ Access until ${formatExpiry(access.expiresAt)}`
            : "✓ Active"}
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <span className="text-base font-extrabold text-gray-900">
            {formatCents(config.oneTime!.priceCents)}
            <span className="text-xs font-normal text-gray-400">
              {" "}/ {config.oneTime!.durationMonths} mo
            </span>
          </span>
          <CheckoutButton
            product={product}
            paymentType="one_time"
            label="Buy"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          />
        </div>
      )}
    </div>
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

export default function PricingCards() {
  return (
    <div>
      {/* Core products */}
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {CORE_PRODUCTS.map((p) => (
          <CoreProductCard key={p} product={p} />
        ))}
      </div>

      {/* CDL Endorsements */}
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-gray-900">CDL Endorsements</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            One-time purchase · 6 months access · Requires CDL Core
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {ENDORSEMENT_PRODUCTS.map((p) => (
            <EndorsementCard key={p} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
