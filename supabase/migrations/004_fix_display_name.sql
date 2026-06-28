-- ================================================================
-- CAREDMVPrep — Migration 004
-- Fix display_name: update the on_auth_user_created trigger to
-- read both 'full_name' and 'display_name' from auth metadata
-- (handles both the Supabase default key and our signup form key),
-- then backfill existing profiles where display_name is NULL.
-- ================================================================

-- 1. Update trigger function — COALESCE reads whichever key is present
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'full_name',
      NEW.raw_user_meta_data->>'display_name'
    )
  );
  RETURN NEW;
END;
$$;

-- 2. Backfill existing profiles where display_name is NULL but auth metadata has a name
UPDATE public.profiles p
SET    display_name = COALESCE(
         (SELECT u.raw_user_meta_data->>'full_name'    FROM auth.users u WHERE u.id = p.id),
         (SELECT u.raw_user_meta_data->>'display_name' FROM auth.users u WHERE u.id = p.id)
       )
WHERE  p.display_name IS NULL
  AND  COALESCE(
         (SELECT u.raw_user_meta_data->>'full_name'    FROM auth.users u WHERE u.id = p.id),
         (SELECT u.raw_user_meta_data->>'display_name' FROM auth.users u WHERE u.id = p.id)
       ) IS NOT NULL;
