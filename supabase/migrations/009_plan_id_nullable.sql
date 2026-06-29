-- Migration 009: Make plan_id nullable on subscriptions
-- Prevents the webhook from crashing with a NOT NULL violation when a
-- subscription_plans row is missing. The webhook logs a warning but still
-- writes the subscription so the user gets access.

ALTER TABLE public.subscriptions
  ALTER COLUMN plan_id DROP NOT NULL;
