-- ================================================================
-- CAREDMVPrep — Migration 007
-- Coupons and Banners tables for admin management.
-- ================================================================

-- ─── Coupons ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.coupons (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code         TEXT UNIQUE NOT NULL,
  label        TEXT,
  discount_pct INT NOT NULL CHECK (discount_pct BETWEEN 1 AND 100),
  active       BOOLEAN NOT NULL DEFAULT true,
  expires_at   TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
-- Admins can do everything; authenticated users can read active codes (for validation)
CREATE POLICY "coupons_admin_all"    ON public.coupons FOR ALL     USING (public.is_admin());
CREATE POLICY "coupons_read_active"  ON public.coupons FOR SELECT  USING (active = true AND (expires_at IS NULL OR expires_at > now()));

GRANT SELECT ON public.coupons TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.coupons TO service_role;

-- ─── Banners ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.banners (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content    TEXT NOT NULL,
  color      TEXT NOT NULL DEFAULT '#1a7f3c',
  active     BOOLEAN NOT NULL DEFAULT false,
  starts_at  TIMESTAMPTZ,
  ends_at    TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "banners_admin_all"   ON public.banners FOR ALL    USING (public.is_admin());
CREATE POLICY "banners_read_active" ON public.banners FOR SELECT USING (
  active = true
  AND (starts_at IS NULL OR starts_at <= now())
  AND (ends_at   IS NULL OR ends_at   >  now())
);

GRANT SELECT ON public.banners TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.banners TO service_role;
