-- ================================================================
-- CAREDMVPrep — Migration 005
-- Comprehensive GRANT statements for all application tables.
--
-- Root cause: migrations 002/003 created tables via raw SQL which
-- does NOT auto-apply grants (unlike the Supabase Dashboard UI).
-- Without object-level GRANTs, PostgreSQL rejects queries before
-- RLS policies are even evaluated — even with valid session JWTs.
--
-- Roles:
--   authenticated  — logged-in users (RLS enforces row filtering)
--   anon           — public/unauthenticated visitors
--   service_role   — webhook and server-side admin operations (bypasses RLS)
-- ================================================================

-- ─── Public / read-only tables ────────────────────────────────────────────────
-- anon + authenticated can read; only service_role can write
GRANT SELECT ON public.states             TO anon, authenticated;
GRANT SELECT ON public.categories         TO anon, authenticated;
GRANT SELECT ON public.subcategories      TO anon, authenticated;
GRANT SELECT ON public.subscription_plans TO anon, authenticated;
GRANT SELECT ON public.questions          TO anon, authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.states             TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.categories         TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subcategories      TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subscription_plans TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.questions          TO service_role;

-- ─── User-owned tables ────────────────────────────────────────────────────────
-- RLS policies enforce row-level ownership; GRANTs enable table access
GRANT SELECT, INSERT, UPDATE, DELETE ON public.subscriptions    TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookmarks        TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_sessions   TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.weak_topics      TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flashcard_decks  TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flashcards       TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_plans      TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_answers     TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_roles       TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.subscriptions    TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookmarks        TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_sessions   TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.weak_topics      TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flashcard_decks  TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flashcards       TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_plans      TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_answers     TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_roles       TO service_role;

-- profiles is owned by postgres (Dashboard-created) and already has grants,
-- but add them explicitly here for safety in case of future schema resets.
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO service_role;

-- ─── Function execution ───────────────────────────────────────────────────────
GRANT EXECUTE ON FUNCTION public.is_admin(UUID)               TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.user_active_products(UUID)   TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.refresh_weak_topics(UUID)    TO authenticated, service_role;
