"use client";

import { useState } from "react";
import Link from "next/link";
import { startCheckout } from "@/lib/stripe/client";
import type { SubscriptionProduct, PaymentType } from "@/types/database";

interface Props {
  product:      SubscriptionProduct;
  paymentType:  PaymentType;
  label?:       string;
  variant?:     "primary" | "secondary";
  className?:   string;
  style?:       React.CSSProperties;
}

const VARIANT_CLASS: Record<string, string> = {
  primary:   "w-full py-2.5 rounded-lg text-sm font-semibold text-white transition hover:opacity-90 bg-[#1a7f3c]",
  secondary: "w-full py-2.5 rounded-lg text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition",
};

export default function CheckoutButton({
  product,
  paymentType,
  label    = "Unlock Access →",
  variant  = "primary",
  className,
  style,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      await startCheckout(product, paymentType);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed. Try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={className ?? VARIANT_CLASS[variant]}
        style={style}
      >
        {loading ? "Redirecting to checkout…" : label}
      </button>
      {error && (
        <p className="mt-2 text-xs text-red-600">
          {error}
          {error.toLowerCase().includes("complete onboarding") && (
            <>
              {" "}
              <Link href="/onboarding" className="underline font-semibold">
                Finish onboarding →
              </Link>
            </>
          )}
        </p>
      )}
    </div>
  );
}
