-- ============================================================
-- CAREDMVPrep – Initial Schema
-- Run this in: Supabase Dashboard → SQL Editor
-- ============================================================

-- ─── PROFILES ────────────────────────────────────────────────
-- Extends auth.users (created automatically by Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id                UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name      TEXT,
  subscription_tier TEXT NOT NULL DEFAULT 'free', -- 'free' | 'pro'
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'display_name');
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ─── SUBSCRIPTIONS ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id                       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                  UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  stripe_customer_id       TEXT UNIQUE,
  stripe_subscription_id   TEXT UNIQUE,
  plan                     TEXT NOT NULL DEFAULT 'free', -- 'free' | 'pro_monthly' | 'pro_annual'
  status                   TEXT NOT NULL DEFAULT 'active', -- 'active' | 'canceled' | 'past_due' | 'trialing'
  current_period_end       TIMESTAMPTZ,
  cancel_at_period_end     BOOLEAN NOT NULL DEFAULT false,
  created_at               TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at               TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─── QUIZ SESSIONS ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.quiz_sessions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  test_id          TEXT NOT NULL, -- e.g. 'california-permit', 'texas-motorcycle'
  state            TEXT NOT NULL, -- 'california' | 'texas' | ...
  license_type     TEXT NOT NULL, -- 'permit' | 'motorcycle' | 'cdl_general' | ...
  total_questions  INT NOT NULL,
  score            INT,           -- correct answer count (NULL until completed)
  passed           BOOLEAN,       -- NULL until completed
  time_limit_secs  INT,           -- NULL = no timer
  started_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at     TIMESTAMPTZ
);

-- ─── USER ANSWERS ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_answers (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id       UUID NOT NULL REFERENCES public.quiz_sessions(id) ON DELETE CASCADE,
  question_id      TEXT NOT NULL,  -- matches Question.id in TypeScript
  selected_index   INT NOT NULL,
  correct_index    INT NOT NULL,
  is_correct       BOOLEAN NOT NULL,
  category         TEXT NOT NULL,  -- for weak-topic analysis
  time_spent_ms    INT,            -- per-question timer data
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────
ALTER TABLE public.profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_sessions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_answers   ENABLE ROW LEVEL SECURITY;

-- Profiles: users read/update only their own row
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Subscriptions: users read only their own
CREATE POLICY "subscriptions_select_own" ON public.subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Quiz sessions: users CRUD their own
CREATE POLICY "sessions_select_own" ON public.quiz_sessions
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "sessions_insert_own" ON public.quiz_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "sessions_update_own" ON public.quiz_sessions
  FOR UPDATE USING (auth.uid() = user_id);

-- User answers: users CRUD their own (via session ownership)
CREATE POLICY "answers_select_own" ON public.user_answers
  FOR SELECT USING (
    auth.uid() = (SELECT user_id FROM public.quiz_sessions WHERE id = session_id)
  );
CREATE POLICY "answers_insert_own" ON public.user_answers
  FOR INSERT WITH CHECK (
    auth.uid() = (SELECT user_id FROM public.quiz_sessions WHERE id = session_id)
  );

-- ─── INDEXES ─────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_id    ON public.quiz_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_test_id    ON public.quiz_sessions(test_id);
CREATE INDEX IF NOT EXISTS idx_user_answers_session_id  ON public.user_answers(session_id);
CREATE INDEX IF NOT EXISTS idx_user_answers_category    ON public.user_answers(category);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id    ON public.subscriptions(user_id);
