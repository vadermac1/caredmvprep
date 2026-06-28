import { createClient } from '@/lib/supabase/server';
import { getStripe } from '@/lib/stripe/server';
import { PRODUCT_CONFIG } from '@/lib/stripe/config';
import type { SubscriptionProduct, PaymentType } from '@/types/database';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body        = await request.json();
    const product     = body.product     as SubscriptionProduct;
    const paymentType = body.paymentType as PaymentType;

    const config = PRODUCT_CONFIG[product];
    if (!config) {
      return Response.json({ error: 'Invalid product' }, { status: 400 });
    }

    // Resolve price ID and Stripe checkout mode
    let priceId: string;
    let mode: 'subscription' | 'payment';

    if (paymentType === 'recurring') {
      if (!config.recurring) {
        return Response.json(
          { error: `${product} does not have a monthly subscription option.` },
          { status: 400 }
        );
      }
      if (!config.recurring.priceId) {
        return Response.json(
          { error: `Stripe monthly price not configured for ${product}. Set STRIPE_PRICE env var.` },
          { status: 503 }
        );
      }
      priceId = config.recurring.priceId;
      mode    = 'subscription';
    } else {
      if (!config.oneTime) {
        return Response.json(
          { error: `${product} does not have a one-time purchase option.` },
          { status: 400 }
        );
      }
      if (!config.oneTime.priceId) {
        return Response.json(
          { error: `Stripe one-time price not configured for ${product}. Set STRIPE_PRICE env var.` },
          { status: 503 }
        );
      }
      priceId = config.oneTime.priceId;
      mode    = 'payment';
    }

    const stripe  = getStripe();
    const appUrl  = process.env.NEXT_PUBLIC_APP_URL ?? 'https://caredmvprep.com';

    const sessionParams: Parameters<typeof stripe.checkout.sessions.create>[0] = {
      mode,
      payment_method_types: ['card'],
      line_items:           [{ price: priceId, quantity: 1 }],
      customer_email:       user.email,
      client_reference_id:  user.id,
      metadata: {
        user_id:      user.id,
        product,
        payment_type: paymentType,
      },
      success_url: `${appUrl}/account?checkout=success&product=${encodeURIComponent(product)}&type=${paymentType}`,
      cancel_url:  `${appUrl}/pricing`,
      allow_promotion_codes: true,
    };

    // Subscription-specific: copy metadata so webhook can read it from the subscription object
    if (mode === 'subscription') {
      sessionParams.subscription_data = {
        metadata: { user_id: user.id, product, payment_type: paymentType },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return Response.json({ url: session.url });

  } catch (err) {
    const message = err instanceof Error ? err.message : 'Checkout session creation failed';
    console.error('[stripe/create-checkout]', message);
    return Response.json({ error: message }, { status: 500 });
  }
}
