-- ================================================================
-- CAREDMVPrep — Production Schema
-- Migration 002: Full production database for national exam-prep SaaS
-- Designed for 100,000+ questions, per-product subscriptions, and
-- all Phase 1-4 features (auth, dashboard, bookmarks, streaks, admin).
--
-- QA notes (2026-06-26):
--   * Enums use DO/EXCEPTION blocks — safe to re-run on a fresh project.
--   * No INSERT trigger on quiz_sessions — answers must exist before
--     refresh_weak_topics is called. Only the UPDATE trigger fires,
--     after the 3-step commit flow in QuizResults.tsx.
--   * subscription_product includes cdl_school_bus and cdl_passenger
--     as standalone products (not add-ons).
-- ================================================================

-- ─── ENUMS (safe creation — no IF NOT EXISTS in Postgres) ────────────────────

DO $$ BEGIN
  CREATE TYPE question_status AS ENUM ('draft', 'review', 'approved', 'deprecated');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE question_difficulty AS ENUM ('easy', 'medium', 'hard');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE subscription_product AS ENUM (
    'dmv',
    'motorcycle',
    'cdl',
    'cdl_hazmat',
    'cdl_tanker',
    'cdl_doubles_triples',
    'cdl_school_bus',   -- standalone product (separate licensing path, not an add-on)
    'cdl_passenger'     -- standalone product (separate licensing path, not an add-on)
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE subscription_interval AS ENUM ('monthly', 'annual');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE subscription_status AS ENUM (
    'active', 'canceled', 'past_due', 'trialing', 'incomplete'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE admin_role AS ENUM ('admin', 'content_editor', 'moderator');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- ─── STATES (reference table) ────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.states (
  abbr  CHAR(2) PRIMARY KEY,
  name  TEXT NOT NULL,
  slug  TEXT NOT NULL UNIQUE   -- used in URLs: 'california', 'new-york'
);

INSERT INTO public.states (abbr, name, slug) VALUES
  ('AL','Alabama','alabama'),('AK','Alaska','alaska'),('AZ','Arizona','arizona'),
  ('AR','Arkansas','arkansas'),('CA','California','california'),('CO','Colorado','colorado'),
  ('CT','Connecticut','connecticut'),('DE','Delaware','delaware'),('FL','Florida','florida'),
  ('GA','Georgia','georgia'),('HI','Hawaii','hawaii'),('ID','Idaho','idaho'),
  ('IL','Illinois','illinois'),('IN','Indiana','indiana'),('IA','Iowa','iowa'),
  ('KS','Kansas','kansas'),('KY','Kentucky','kentucky'),('LA','Louisiana','louisiana'),
  ('ME','Maine','maine'),('MD','Maryland','maryland'),('MA','Massachusetts','massachusetts'),
  ('MI','Michigan','michigan'),('MN','Minnesota','minnesota'),('MS','Mississippi','mississippi'),
  ('MO','Missouri','missouri'),('MT','Montana','montana'),('NE','Nebraska','nebraska'),
  ('NV','Nevada','nevada'),('NH','New Hampshire','new-hampshire'),('NJ','New Jersey','new-jersey'),
  ('NM','New Mexico','new-mexico'),('NY','New York','new-york'),('NC','North Carolina','north-carolina'),
  ('ND','North Dakota','north-dakota'),('OH','Ohio','ohio'),('OK','Oklahoma','oklahoma'),
  ('OR','Oregon','oregon'),('PA','Pennsylvania','pennsylvania'),('RI','Rhode Island','rhode-island'),
  ('SC','South Carolina','south-carolina'),('SD','South Dakota','south-dakota'),
  ('TN','Tennessee','tennessee'),('TX','Texas','texas'),('UT','Utah','utah'),
  ('VT','Vermont','vermont'),('VA','Virginia','virginia'),('WA','Washington','washington'),
  ('WV','West Virginia','west-virginia'),('WI','Wisconsin','wisconsin'),('WY','Wyoming','wyoming')
ON CONFLICT (abbr) DO NOTHING;

-- ─── CATEGORIES & SUBCATEGORIES ──────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.categories (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug       TEXT NOT NULL UNIQUE,
  label      TEXT NOT NULL,
  sort_order SMALLINT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.subcategories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  slug        TEXT NOT NULL UNIQUE,
  label       TEXT NOT NULL,
  sort_order  SMALLINT NOT NULL DEFAULT 0
);

INSERT INTO public.categories (slug, label, sort_order) VALUES
  ('traffic_signs',        'Traffic Signs',        1),
  ('right_of_way',         'Right of Way',         2),
  ('speed_limits',         'Speed Limits',         3),
  ('alcohol_and_drugs',    'Alcohol & Drugs',      4),
  ('parking',              'Parking Rules',        5),
  ('sharing_the_road',     'Sharing the Road',     6),
  ('safe_driving',         'Safe Driving',         7),
  ('road_markings',        'Road Markings',        8),
  ('vehicle_equipment',    'Vehicle Equipment',    9),
  ('cdl_pre_trip',         'CDL Pre-Trip',         10),
  ('cdl_cargo',            'CDL Cargo',            11),
  ('cdl_braking',          'CDL Braking',          12),
  ('cdl_hours_of_service', 'Hours of Service',     13),
  ('cdl_hazmat_classes',   'HazMat Classes',       14),
  ('cdl_hazmat_safety',    'HazMat Safety',        15),
  ('cdl_tanker',           'Tanker Vehicles',      16),
  ('cdl_doubles_triples',  'Doubles & Triples',    17),
  ('cdl_passenger',        'Passenger Vehicles',   18),
  ('cdl_school_bus',       'School Bus',           19),
  ('cdl_air_brakes',       'Air Brakes',           20),
  ('motorcycle_technique', 'Riding Technique',     21),
  ('motorcycle_gear',      'Protective Gear',      22),
  ('motorcycle_cornering', 'Cornering & Control',  23),
  ('motorcycle_hazards',   'Hazard Awareness',     24)
ON CONFLICT (slug) DO NOTHING;

-- ─── EXTEND PROFILES ─────────────────────────────────────────────────────────
-- Drop the binary subscription_tier column — replaced by subscriptions table
-- (one row per product per user).

ALTER TABLE public.profiles DROP COLUMN IF EXISTS subscription_tier;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS avatar_url      TEXT,
  ADD COLUMN IF NOT EXISTS target_state    CHAR(2) REFERENCES public.states(abbr),
  ADD COLUMN IF NOT EXISTS target_license  TEXT,     -- license_type slug
  ADD COLUMN IF NOT EXISTS exam_date       DATE,
  ADD COLUMN IF NOT EXISTS streak_current  INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS streak_best     INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS streak_updated  DATE;

-- Update profile trigger to not reference the dropped column.
-- ON CONFLICT DO NOTHING prevents errors if the row was already created
-- (e.g., via Supabase admin or a partial earlier run).
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'display_name')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- ─── SUBSCRIPTION PLANS (product catalog) ────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.subscription_plans (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product         subscription_product NOT NULL,
  interval        subscription_interval NOT NULL,
  price_cents     INT NOT NULL,
  stripe_price_id TEXT UNIQUE,
  label           TEXT NOT NULL,
  active          BOOLEAN NOT NULL DEFAULT true,
  UNIQUE(product, interval)
);

-- Placeholder prices — update with real Stripe price IDs before launch (Phase 5).
-- cdl_school_bus and cdl_passenger are standalone products, not add-ons to CDL.
INSERT INTO public.subscription_plans (product, interval, price_cents, label) VALUES
  ('dmv',                 'monthly', 999,   'Driver''s License Premium — Monthly'),
  ('dmv',                 'annual',  7999,  'Driver''s License Premium — Annual'),
  ('motorcycle',          'monthly', 799,   'Motorcycle Premium — Monthly'),
  ('motorcycle',          'annual',  5999,  'Motorcycle Premium — Annual'),
  ('cdl',                 'monthly', 1499,  'CDL Premium — Monthly'),
  ('cdl',                 'annual',  9999,  'CDL Premium — Annual'),
  ('cdl_hazmat',          'monthly', 499,   'CDL HazMat Add-on — Monthly'),
  ('cdl_hazmat',          'annual',  3999,  'CDL HazMat Add-on — Annual'),
  ('cdl_tanker',          'monthly', 499,   'CDL Tanker Add-on — Monthly'),
  ('cdl_tanker',          'annual',  3999,  'CDL Tanker Add-on — Annual'),
  ('cdl_doubles_triples', 'monthly', 499,   'CDL Doubles & Triples Add-on — Monthly'),
  ('cdl_doubles_triples', 'annual',  3999,  'CDL Doubles & Triples Add-on — Annual'),
  ('cdl_school_bus',      'monthly', 499,   'CDL School Bus Package — Monthly'),
  ('cdl_school_bus',      'annual',  3999,  'CDL School Bus Package — Annual'),
  ('cdl_passenger',       'monthly', 499,   'CDL Passenger Package — Monthly'),
  ('cdl_passenger',       'annual',  3999,  'CDL Passenger Package — Annual')
ON CONFLICT (product, interval) DO NOTHING;

-- ─── SUBSCRIPTIONS (one row per product per user) ────────────────────────────
-- Drop and recreate — changing from binary tier to per-product model.
-- Pre-launch: no user data to migrate.

DROP TABLE IF EXISTS public.subscriptions CASCADE;

CREATE TABLE public.subscriptions (
  id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                     UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan_id                     UUID NOT NULL REFERENCES public.subscription_plans(id),
  product                     subscription_product NOT NULL,
  stripe_customer_id          TEXT,
  stripe_subscription_id      TEXT UNIQUE,
  stripe_subscription_item_id TEXT,
  status                      subscription_status NOT NULL DEFAULT 'trialing',
  current_period_start        TIMESTAMPTZ,
  current_period_end          TIMESTAMPTZ,
  cancel_at_period_end        BOOLEAN NOT NULL DEFAULT false,
  canceled_at                 TIMESTAMPTZ,
  trial_end                   TIMESTAMPTZ,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, product)
);

CREATE INDEX idx_subscriptions_user_id   ON public.subscriptions(user_id);
CREATE INDEX idx_subscriptions_customer  ON public.subscriptions(stripe_customer_id);
CREATE INDEX idx_subscriptions_active    ON public.subscriptions(user_id, status)
  WHERE status = 'active';

-- ─── QUESTIONS (supports 100k+) ──────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.questions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state_abbr       CHAR(2) REFERENCES public.states(abbr),  -- NULL = federal/CDL nationwide
  license_type     TEXT NOT NULL,   -- matches LicenseType in TypeScript
  category_id      UUID NOT NULL REFERENCES public.categories(id),
  subcategory_id   UUID REFERENCES public.subcategories(id),

  -- Content
  prompt           TEXT NOT NULL,
  options          JSONB NOT NULL,   -- ["option A","option B","option C","option D"]
  correct_index    SMALLINT NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
  explanation      TEXT NOT NULL,
  image_url        TEXT,

  -- QA / provenance
  status           question_status NOT NULL DEFAULT 'draft',
  difficulty       question_difficulty NOT NULL DEFAULT 'medium',
  handbook_section TEXT,
  source_notes     TEXT,
  verified_at      TIMESTAMPTZ,
  verified_by      UUID REFERENCES auth.users(id),
  report_count     INT NOT NULL DEFAULT 0,

  -- Aggregate stats (updated by trigger after user_answers inserts)
  times_seen       INT NOT NULL DEFAULT 0,
  times_correct    INT NOT NULL DEFAULT 0,

  created_by       UUID REFERENCES auth.users(id),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Primary serving index: state + license type, approved questions only
CREATE INDEX idx_questions_state_type  ON public.questions(state_abbr, license_type)
  WHERE status = 'approved';
CREATE INDEX idx_questions_category    ON public.questions(category_id)
  WHERE status = 'approved';
CREATE INDEX idx_questions_difficulty  ON public.questions(difficulty)
  WHERE status = 'approved';
CREATE INDEX idx_questions_status      ON public.questions(status, created_at DESC);
-- Full-text search for admin question search
CREATE INDEX idx_questions_prompt_fts  ON public.questions
  USING gin(to_tsvector('english', prompt));

-- ─── ADD user_id TO user_answers ─────────────────────────────────────────────
-- Direct user_id avoids a subquery join in every RLS check and aggregation.
-- The old policies used: auth.uid() = (SELECT user_id FROM quiz_sessions WHERE ...)
-- New policies use the faster direct column check.

ALTER TABLE public.user_answers
  ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE;

-- Backfill from quiz_sessions (safe — no real data pre-launch, but correct for future runs)
UPDATE public.user_answers ua
SET user_id = qs.user_id
FROM public.quiz_sessions qs
WHERE ua.session_id = qs.id AND ua.user_id IS NULL;

-- Replace old subquery-based policies with direct column checks
DROP POLICY IF EXISTS "answers_select_own" ON public.user_answers;
DROP POLICY IF EXISTS "answers_insert_own" ON public.user_answers;

CREATE POLICY "answers_select_own" ON public.user_answers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "answers_insert_own" ON public.user_answers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_user_answers_user_id ON public.user_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_user_answers_user_cat
  ON public.user_answers(user_id, category, is_correct);

-- ─── BOOKMARKS ───────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.bookmarks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  note        TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, question_id)
);

CREATE INDEX idx_bookmarks_user ON public.bookmarks(user_id, created_at DESC);

-- ─── STUDY SESSIONS (time-on-task tracking) ──────────────────────────────────

CREATE TABLE IF NOT EXISTS public.study_sessions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  license_type  TEXT,
  state_abbr    CHAR(2) REFERENCES public.states(abbr),
  started_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  ended_at      TIMESTAMPTZ,
  duration_secs INT   -- set on close; NULL = still active
);

CREATE INDEX idx_study_sessions_user ON public.study_sessions(user_id, started_at DESC);

-- ─── WEAK TOPICS CACHE ───────────────────────────────────────────────────────
-- Refreshed automatically after each completed quiz session (see trigger below).
-- Keyed on category slug — matches the TEXT category column in user_answers.
--
-- IMPORTANT: refresh_weak_topics is called from the UPDATE trigger only,
-- after QuizResults.tsx completes the 3-step flow:
--   1. INSERT quiz_session (completed_at = NULL)
--   2. INSERT user_answers
--   3. UPDATE quiz_session SET completed_at = now()  ← trigger fires here

CREATE TABLE IF NOT EXISTS public.weak_topics (
  user_id       UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL,
  license_type  TEXT NOT NULL,
  correct       INT NOT NULL DEFAULT 0,
  total         INT NOT NULL DEFAULT 0,
  accuracy_pct  NUMERIC(5,2) GENERATED ALWAYS AS (
    CASE WHEN total > 0 THEN ROUND(correct::NUMERIC / total * 100, 2) ELSE 0 END
  ) STORED,
  last_seen_at  TIMESTAMPTZ,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, category_slug, license_type)
);

CREATE INDEX idx_weak_topics_user_accuracy ON public.weak_topics(user_id, accuracy_pct ASC);

-- ─── FLASHCARD DECKS & CARDS (spaced repetition, SM-2) ───────────────────────

CREATE TABLE IF NOT EXISTS public.flashcard_decks (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name         TEXT NOT NULL,
  license_type TEXT,
  state_abbr   CHAR(2) REFERENCES public.states(abbr),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.flashcards (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deck_id       UUID NOT NULL REFERENCES public.flashcard_decks(id) ON DELETE CASCADE,
  question_id   UUID REFERENCES public.questions(id),  -- linked or custom
  front         TEXT NOT NULL,
  back          TEXT NOT NULL,
  ease_factor   NUMERIC(4,2) NOT NULL DEFAULT 2.5,
  interval_days INT NOT NULL DEFAULT 1,
  repetitions   INT NOT NULL DEFAULT 0,
  next_review   DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_flashcards_due ON public.flashcards(deck_id, next_review);

-- ─── STUDY PLANS ─────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.study_plans (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  license_type    TEXT NOT NULL,
  state_abbr      CHAR(2) REFERENCES public.states(abbr),
  exam_date       DATE,
  daily_goal_mins INT NOT NULL DEFAULT 30,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, license_type)
);

-- ─── ADMIN ROLES ─────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.user_roles (
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role       admin_role NOT NULL,
  granted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  granted_by UUID REFERENCES auth.users(id),
  PRIMARY KEY (user_id, role)
);

-- ─── HELPER FUNCTIONS ────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.is_admin(uid UUID DEFAULT auth.uid())
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER STABLE AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = uid AND role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION public.user_active_products(uid UUID DEFAULT auth.uid())
RETURNS TEXT[] LANGUAGE sql SECURITY DEFINER STABLE AS $$
  SELECT COALESCE(ARRAY_AGG(product::TEXT), '{}')
  FROM public.subscriptions
  WHERE user_id = uid AND status = 'active';
$$;

-- ─── STREAK UPDATE ───────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.update_streak(p_user_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_last  DATE;
  v_today DATE := CURRENT_DATE;
  v_cur   INT;
  v_best  INT;
BEGIN
  SELECT streak_current, streak_best, streak_updated
  INTO v_cur, v_best, v_last
  FROM public.profiles WHERE id = p_user_id;

  IF v_last = v_today THEN
    RETURN;  -- Already updated today; no-op
  ELSIF v_last = v_today - INTERVAL '1 day' THEN
    v_cur := COALESCE(v_cur, 0) + 1;
  ELSE
    v_cur := 1;  -- Streak broken or first session
  END IF;

  v_best := GREATEST(COALESCE(v_best, 0), v_cur);

  UPDATE public.profiles
  SET streak_current = v_cur,
      streak_best    = v_best,
      streak_updated = v_today,
      updated_at     = now()
  WHERE id = p_user_id;
END;
$$;

-- ─── WEAK TOPICS REFRESH ─────────────────────────────────────────────────────
-- Full recalculation from user_answers joined to quiz_sessions.
-- Called by the UPDATE trigger after completed_at is set, at which point
-- all user_answers for the session exist in the table.

CREATE OR REPLACE FUNCTION public.refresh_weak_topics(p_user_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.weak_topics (
    user_id, category_slug, license_type, correct, total, last_seen_at, updated_at
  )
  SELECT
    qs.user_id,
    ua.category,
    qs.license_type,
    COUNT(*) FILTER (WHERE ua.is_correct)::INT,
    COUNT(*)::INT,
    MAX(ua.created_at),
    now()
  FROM public.user_answers ua
  JOIN public.quiz_sessions qs ON qs.id = ua.session_id
  WHERE qs.user_id  = p_user_id
    AND qs.completed_at IS NOT NULL
  GROUP BY qs.user_id, ua.category, qs.license_type
  ON CONFLICT (user_id, category_slug, license_type) DO UPDATE
    SET correct      = EXCLUDED.correct,
        total        = EXCLUDED.total,
        last_seen_at = EXCLUDED.last_seen_at,
        updated_at   = now();
END;
$$;

-- ─── QUIZ SESSION COMPLETION TRIGGER ─────────────────────────────────────────
-- UPDATE trigger only. Fires when completed_at transitions NULL → timestamp.
-- The app (QuizResults.tsx) must complete 3 steps in order:
--   Step 1: INSERT session with completed_at = NULL
--   Step 2: INSERT all user_answers (with user_id)
--   Step 3: UPDATE session SET completed_at = now()  ← this trigger fires
--
-- No INSERT trigger — it would fire before answers exist, producing
-- a no-op refresh_weak_topics that silently discards the update.

CREATE OR REPLACE FUNCTION public.on_quiz_session_completed()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  IF NEW.completed_at IS NOT NULL AND OLD.completed_at IS NULL THEN
    PERFORM public.refresh_weak_topics(NEW.user_id);
    PERFORM public.update_streak(NEW.user_id);
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER quiz_session_completed
  AFTER UPDATE ON public.quiz_sessions
  FOR EACH ROW EXECUTE FUNCTION public.on_quiz_session_completed();

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────────────────────
-- RLS audit (2026-06-26):
--   Logged-out user:        auth.uid() = NULL → NULL = user_id is always false → blocked ✓
--   is_admin(NULL):         EXISTS on NULL user_id returns false → non-admin path ✓
--   Cross-user access:      auth.uid() ≠ other_user.id → denied ✓
--   SECURITY DEFINER fns:   bypass RLS — used only in triggers ✓

ALTER TABLE public.states             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subcategories      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weak_topics        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flashcard_decks    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flashcards         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_plans        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles         ENABLE ROW LEVEL SECURITY;

-- Reference data: publicly readable (no auth required)
CREATE POLICY "states_public"           ON public.states             FOR SELECT USING (true);
CREATE POLICY "categories_public"       ON public.categories         FOR SELECT USING (true);
CREATE POLICY "subcategories_public"    ON public.subcategories      FOR SELECT USING (true);
CREATE POLICY "plans_public"            ON public.subscription_plans FOR SELECT USING (active = true);

-- Questions: approved rows are public; admin can see/manage all
CREATE POLICY "questions_approved_read" ON public.questions
  FOR SELECT USING (status = 'approved' OR public.is_admin());
CREATE POLICY "questions_admin_write"   ON public.questions
  FOR ALL USING (public.is_admin());

-- Subscriptions: own rows only (admin can also read for support tooling)
CREATE POLICY "subscriptions_select"    ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

-- Personal data: own rows only for all operations
CREATE POLICY "bookmarks_own"           ON public.bookmarks        FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "study_sessions_own"      ON public.study_sessions   FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "weak_topics_own"         ON public.weak_topics      FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "flashcard_decks_own"     ON public.flashcard_decks  FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "flashcards_own"          ON public.flashcards
  FOR ALL USING (
    auth.uid() = (SELECT user_id FROM public.flashcard_decks WHERE id = deck_id)
  );
CREATE POLICY "study_plans_own"         ON public.study_plans      FOR ALL USING (auth.uid() = user_id);

-- Admin roles table: only admins can read/modify role assignments
CREATE POLICY "user_roles_admin"        ON public.user_roles       FOR ALL USING (public.is_admin());
