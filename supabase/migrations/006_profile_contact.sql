-- ================================================================
-- CAREDMVPrep — Migration 006
-- Add contact/address fields to profiles.
-- ================================================================

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS phone          TEXT,
  ADD COLUMN IF NOT EXISTS address_line1  TEXT,
  ADD COLUMN IF NOT EXISTS address_line2  TEXT,
  ADD COLUMN IF NOT EXISTS city           TEXT,
  ADD COLUMN IF NOT EXISTS address_state  TEXT,
  ADD COLUMN IF NOT EXISTS postal_code    TEXT;
