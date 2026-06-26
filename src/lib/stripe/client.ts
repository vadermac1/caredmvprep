// Stripe placeholder — connect real keys via .env.local when ready
// Install: npm install stripe @stripe/stripe-js

export const STRIPE_PLANS = {
  pro_monthly: {
    priceId: process.env.STRIPE_PRICE_PRO_MONTHLY ?? "price_placeholder_monthly",
    label: "Pro Monthly",
    price: "$9.99",
    interval: "month",
  },
  pro_annual: {
    priceId: process.env.STRIPE_PRICE_PRO_ANNUAL ?? "price_placeholder_annual",
    label: "Pro Annual",
    price: "$59.99",
    interval: "year",
    savings: "Save 50%",
  },
} as const;

export type StripePlan = keyof typeof STRIPE_PLANS;

// Stub — replace with real Stripe checkout when keys are available
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createCheckoutSession(_plan: StripePlan, _userId: string): Promise<string> {
  throw new Error(
    "Stripe is not yet configured. Add STRIPE_SECRET_KEY to .env.local and install the stripe package."
  );
}
