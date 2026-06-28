import Link from "next/link";
import type { SubscriptionProduct } from "@/types/database";
import { PRODUCT_CONFIG, formatCents } from "@/lib/stripe/config";
import CheckoutButton from "./CheckoutButton";

interface Props {
  product: SubscriptionProduct;
}

export default function SubscriptionGate({ product }: Props) {
  const config  = PRODUCT_CONFIG[product];
  const hasRec  = !!config.recurring;
  const hasOne  = !!config.oneTime;

  return (
    <div className="max-w-lg mx-auto mt-12 text-center">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-10">

        {/* Lock icon */}
        <div
          className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#f0fdf4" }}
        >
          <svg
            className="w-7 h-7"
            style={{ color: "#1a7f3c" }}
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <h1 className="text-xl font-bold mb-2" style={{ color: "#0f1e3c" }}>
          {config.label}
        </h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          {config.description}
        </p>

        {/* Both options available — core products */}
        {hasRec && hasOne && (
          <div className="space-y-3">
            {/* Best Value — one-time (shown first / highlighted) */}
            <div
              className="rounded-xl border px-5 py-4 relative"
              style={{ borderColor: "#1a7f3c", backgroundColor: "#f0fdf4" }}
            >
              <span
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                style={{ backgroundColor: "#1a7f3c" }}
              >
                Best Value
              </span>
              <div className="flex items-center justify-between mb-3">
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color: "#0f1e3c" }}>
                    {formatCents(config.oneTime!.priceCents)} — {config.oneTime!.durationMonths}-Month Pass
                  </p>
                  <p className="text-xs text-gray-500">One-time payment, no recurring charges</p>
                </div>
              </div>
              <CheckoutButton
                product={product}
                paymentType="one_time"
                label={`Buy ${config.oneTime!.durationMonths}-Month Pass — ${formatCents(config.oneTime!.priceCents)}`}
                style={{ backgroundColor: "#1a7f3c", color: "#fff" }}
              />
            </div>

            {/* Monthly option */}
            <div className="rounded-xl border border-gray-200 px-5 py-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color: "#0f1e3c" }}>
                    {formatCents(config.recurring!.priceCents)}/month
                  </p>
                  <p className="text-xs text-gray-500">Cancel anytime</p>
                </div>
              </div>
              <CheckoutButton
                product={product}
                paymentType="recurring"
                label={`Subscribe Monthly — ${formatCents(config.recurring!.priceCents)}/mo`}
                variant="secondary"
              />
            </div>
          </div>
        )}

        {/* One-time only — endorsements */}
        {!hasRec && hasOne && (
          <div className="rounded-xl border px-5 py-4"
            style={{ borderColor: "#1a7f3c", backgroundColor: "#f0fdf4" }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: "#0f1e3c" }}>
              {formatCents(config.oneTime!.priceCents)} — {config.oneTime!.durationMonths}-Month Access
            </p>
            <p className="text-xs text-gray-500 mb-3">One-time payment</p>
            <CheckoutButton
              product={product}
              paymentType="one_time"
              label={`Unlock — ${formatCents(config.oneTime!.priceCents)}`}
              style={{ backgroundColor: "#1a7f3c", color: "#fff" }}
            />
          </div>
        )}

        <p className="mt-5 text-xs text-gray-400">
          Charged in USD.{" "}
          <Link href="/pricing" className="underline hover:text-gray-600">
            See all plans
          </Link>
        </p>
      </div>
    </div>
  );
}
