// Type-safe data-fetching helpers for server components.
// All functions accept a Supabase server client created by createClient().

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database, Profile, QuizSession, WeakTopic, Subscription } from '@/types/database';

type Client = SupabaseClient<Database>;

// ─── PROFILE ─────────────────────────────────────────────────────────────────

export async function getProfile(supabase: Client, userId: string): Promise<Profile | null> {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return data;
}

// ─── SUBSCRIPTIONS ───────────────────────────────────────────────────────────

export async function getUserSubscriptions(
  supabase: Client,
  userId: string
): Promise<Subscription[]> {
  const { data } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active');
  return data ?? [];
}

export function hasActiveProduct(
  subscriptions: Subscription[],
  product: string
): boolean {
  return subscriptions.some((s) => s.product === product && s.status === 'active');
}

export function hasAnySubscription(subscriptions: Subscription[]): boolean {
  return subscriptions.length > 0;
}

// ─── DASHBOARD STATS ─────────────────────────────────────────────────────────

export interface DashboardStats {
  sessions:       QuizSession[];
  totalAnswered:  number;
  totalCorrect:   number;
  avgPct:         number;
  passCount:      number;
  totalTimeMs:    number;
}

export async function getDashboardStats(
  supabase: Client,
  userId: string
): Promise<DashboardStats> {
  const { data } = await supabase
    .from('quiz_sessions')
    .select('*')
    .eq('user_id', userId)
    .not('completed_at', 'is', null)
    .order('started_at', { ascending: false })
    .limit(100);

  const sessions: QuizSession[] = data ?? [];
  const totalAnswered = sessions.reduce((sum, s) => sum + (s.total_questions ?? 0), 0);
  const totalCorrect  = sessions.reduce((sum, s) => sum + (s.score ?? 0), 0);
  const avgPct        = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const passCount     = sessions.filter((s) => s.passed).length;

  return { sessions, totalAnswered, totalCorrect, avgPct, passCount, totalTimeMs: 0 };
}

// ─── WEAK TOPICS ─────────────────────────────────────────────────────────────

export async function getWeakTopics(
  supabase: Client,
  userId: string,
  limit = 8
): Promise<WeakTopic[]> {
  const { data } = await supabase
    .from('weak_topics')
    .select('*')
    .eq('user_id', userId)
    .gte('total', 3)   // ignore categories with < 3 answers (too little signal)
    .order('accuracy_pct', { ascending: true })
    .limit(limit);
  return data ?? [];
}

// ─── STUDY STREAK ────────────────────────────────────────────────────────────

export interface StreakData {
  current: number;
  best:    number;
}

export function getStreak(profile: Profile | null): StreakData {
  return {
    current: profile?.streak_current ?? 0,
    best:    profile?.streak_best ?? 0,
  };
}

// ─── RECENT SESSIONS (for history page) ──────────────────────────────────────

export async function getRecentSessions(
  supabase: Client,
  userId: string,
  limit = 20
): Promise<QuizSession[]> {
  const { data } = await supabase
    .from('quiz_sessions')
    .select('*')
    .eq('user_id', userId)
    .not('completed_at', 'is', null)
    .order('completed_at', { ascending: false })
    .limit(limit);
  return data ?? [];
}
