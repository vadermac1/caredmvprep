import { createClient } from '@/lib/supabase/server';
import { getStripe } from '@/lib/stripe/server';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: sub } = await (supabase as any)
      .from('subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user.id)
      .not('stripe_customer_id', 'is', null)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle() as { data: { stripe_customer_id: string } | null };

    if (!sub?.stripe_customer_id) {
      return Response.json(
        { error: 'No billing account found for this user.' },
        { status: 404 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://caredmvprep.com';
    const session = await getStripe().billingPortal.sessions.create({
      customer:   sub.stripe_customer_id,
      return_url: `${appUrl}/account`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Could not open billing portal';
    console.error('[stripe/create-portal-session]', message);
    return Response.json({ error: message }, { status: 500 });
  }
}
