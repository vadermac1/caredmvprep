import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Auth callback route — required for PKCE flow (@supabase/ssr).
 *
 * Supabase redirects here after:
 *   - Email confirmation (signup)
 *   - Password reset ("forgot password" link)
 *   - Magic link login
 *   - OAuth provider return
 *
 * The URL carries a one-time `code` param. This route exchanges it for a
 * session cookie, then redirects the user onward.
 *
 * The `next` search param (optional) controls where the user lands after
 * a successful exchange. Defaults to /dashboard.
 *
 * To protect against open redirects, `next` must be a relative path.
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  // `next` must be a relative path — strip any leading hostname to prevent
  // open-redirect attacks.
  const rawNext = searchParams.get("next") ?? "/dashboard";
  const next = rawNext.startsWith("/") ? rawNext : "/dashboard";

  // Supabase returned an error (e.g. expired link, already-used token)
  if (error) {
    console.error("[auth/callback] Supabase error:", error, errorDescription);
    const url = new URL("/login", origin);
    url.searchParams.set("error", "link_expired");
    return NextResponse.redirect(url);
  }

  if (!code) {
    // No code and no error — stale or malformed URL
    return NextResponse.redirect(new URL("/login", origin));
  }

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    console.error("[auth/callback] exchangeCodeForSession failed:", exchangeError.message);
    const url = new URL("/login", origin);
    url.searchParams.set("error", "link_expired");
    return NextResponse.redirect(url);
  }

  // If next is explicitly set (e.g. /onboarding from emailRedirectTo), honour it.
  // Otherwise check whether the user has completed onboarding; if not, send them there.
  if (next !== '/dashboard') {
    return NextResponse.redirect(new URL(next, origin));
  }

  const { data: { user: sessionUser } } = await supabase.auth.getUser();
  if (sessionUser) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: profile } = await (supabase as any)
      .from('profiles')
      .select('target_state')
      .eq('id', sessionUser.id)
      .maybeSingle() as { data: { target_state: string | null } | null };

    if (!profile?.target_state) {
      return NextResponse.redirect(new URL('/onboarding', origin));
    }
  }

  return NextResponse.redirect(new URL('/dashboard', origin));
}
