// Client-side Stripe utilities (no secret key — safe to import in client components).
// Checkout sessions are created server-side via /api/stripe/create-checkout.

import type { SubscriptionProduct, PaymentType } from '@/types/database';

export type { PaymentType };

/**
 * Redirects to Stripe Checkout.
 * paymentType 'recurring' → subscription mode ($12 or $19/mo)
 * paymentType 'one_time'  → payment mode (one-time pass, fixed access window)
 */
export async function startCheckout(
  product:     SubscriptionProduct,
  paymentType: PaymentType,
  extra?:      { target_state?: string; target_license?: string }
): Promise<void> {
  const res = await fetch('/api/stripe/create-checkout', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ product, paymentType, ...extra }),
  });

  if (!res.ok) {
    const { error } = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error ?? `Checkout failed (${res.status})`);
  }

  const { url } = await res.json();
  if (!url) throw new Error('No checkout URL returned from server.');
  window.location.href = url;
}
