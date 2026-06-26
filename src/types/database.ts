// Auto-maintained types matching supabase/migrations/001_initial_schema.sql
// When you connect a real Supabase project, replace with:
//   npx supabase gen types typescript --project-id <id> > src/types/database.ts

export type SubscriptionTier = 'free' | 'pro';
export type SubscriptionPlan = 'free' | 'pro_monthly' | 'pro_annual';
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing';
export type LicenseType =
  | 'permit'
  | 'motorcycle'
  | 'cdl_general'
  | 'cdl_hazmat'
  | 'cdl_passenger'
  | 'cdl_school_bus'
  | 'cdl_air_brakes'
  | 'cdl_tanker'
  | 'cdl_doubles_triples';

export interface Profile {
  id: string;
  display_name: string | null;
  subscription_tier: SubscriptionTier;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
  created_at: string;
  updated_at: string;
}

export interface QuizSession {
  id: string;
  user_id: string;
  test_id: string;
  state: string;
  license_type: LicenseType;
  total_questions: number;
  score: number | null;
  passed: boolean | null;
  time_limit_secs: number | null;
  started_at: string;
  completed_at: string | null;
}

export interface UserAnswer {
  id: string;
  session_id: string;
  question_id: string;
  selected_index: number;
  correct_index: number;
  is_correct: boolean;
  category: string;
  time_spent_ms: number | null;
  created_at: string;
}

type TableDef<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      profiles: TableDef<Profile, Omit<Profile, 'created_at' | 'updated_at'>>;
      subscriptions: TableDef<Subscription, Omit<Subscription, 'id' | 'created_at' | 'updated_at'>>;
      quiz_sessions: TableDef<QuizSession, Omit<QuizSession, 'id' | 'started_at'>>;
      user_answers: TableDef<UserAnswer, Omit<UserAnswer, 'id' | 'created_at'>>;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
