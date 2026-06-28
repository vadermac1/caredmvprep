-- ================================================================
-- CAREDMVPrep — Migration 003: One-time payment support
--
-- Adds a second payment model alongside recurring subscriptions:
--   - recurring: active while Stripe subscription is live
--   - one_time:  active until access_expires_at
--
-- No data is destroyed. All recurring rows keep working as-is.
-- The UNIQUE(user_id, product) constraint is preserved.
-- ================================================================

-- ─── 1. Extend subscription_interval enum ────────────────────────────────────

ALTER TYPE subscription_interval ADD VALUE IF NOT EXISTS 'one_time';

-- ─── 2. Update subscription_plans catalog ────────────────────────────────────

-- Add duration column (NULL for recurring, 3 or 6 months for one-time)
ALTER TABLE public.subscription_plans
  ADD COLUMN IF NOT EXISTS duration_months INT;

-- Remove annual rows — no longer sold
DELETE FROM public.subscription_plans WHERE interval = 'annual';

-- Remove monthly rows for endorsements — they are one-time only
DELETE FROM public.subscription_plans
  WHERE product IN ('cdl_hazmat', 'cdl_tanker', 'cdl_doubles_triples',
                    'cdl_school_bus', 'cdl_passenger')
    AND interval = 'monthly';

-- Update monthly prices for core products to new amounts
UPDATE public.subscription_plans SET price_cents = 1200, label = 'Driver''s License — Monthly'
  WHERE product = 'dmv'        AND interval = 'monthly';
UPDATE public.subscription_plans SET price_cents = 1200, label = 'Motorcycle — Monthly'
  WHERE product = 'motorcycle' AND interval = 'monthly';
UPDATE public.subscription_plans SET price_cents = 1900, label = 'CDL Core — Monthly'
  WHERE product = 'cdl'        AND interval = 'monthly';

-- Insert one-time plan rows
INSERT INTO public.subscription_plans
  (product, interval, price_cents, duration_months, label)
VALUES
  ('dmv',                 'one_time', 2900, 3, 'Driver''s License — 3-Month Pass'),
  ('motorcycle',          'one_time', 2900, 3, 'Motorcycle — 3-Month Pass'),
  ('cdl',                 'one_time', 4900, 6, 'CDL Core — 6-Month Pass'),
  ('cdl_hazmat',          'one_time', 1900, 6, 'CDL HazMat — 6-Month Pass'),
  ('cdl_tanker',          'one_time', 1500, 6, 'CDL Tank Vehicles — 6-Month Pass'),
  ('cdl_doubles_triples', 'one_time', 1500, 6, 'CDL Doubles & Triples — 6-Month Pass')
ON CONFLICT (product, interval) DO UPDATE
  SET price_cents     = EXCLUDED.price_cents,
      duration_months = EXCLUDED.duration_months,
      label           = EXCLUDED.label;

-- ─── 3. Extend subscriptions table ───────────────────────────────────────────

ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS payment_type TEXT NOT NULL DEFAULT 'recurring'
    CHECK (payment_type IN ('recurring', 'one_time')),
  ADD COLUMN IF NOT EXISTS access_expires_at        TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS stripe_payment_intent_id TEXT;

-- Index for efficient expiration queries
CREATE INDEX IF NOT EXISTS idx_subscriptions_expires
  ON public.subscriptions(user_id, access_expires_at)
  WHERE payment_type = 'one_time';

-- ─── 4. Update user_active_products function ──────────────────────────────────
-- Now handles both access models:
--   recurring: status = 'active' (Stripe manages lifecycle)
--   one_time:  status = 'active' AND access_expires_at > now()

CREATE OR REPLACE FUNCTION public.user_active_products(uid UUID DEFAULT auth.uid())
RETURNS TEXT[] LANGUAGE sql SECURITY DEFINER STABLE AS $$
  SELECT COALESCE(ARRAY_AGG(product::TEXT), '{}')
  FROM public.subscriptions
  WHERE user_id = uid
    AND status = 'active'
    AND (
      payment_type = 'recurring'
      OR (payment_type = 'one_time' AND access_expires_at > now())
    );
$$;
