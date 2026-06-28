/**
 * Production smoke test — validates external service wiring before launch.
 *
 * Usage:
 *   npx tsx scripts/smoke-test.ts
 *
 * Requires real values in .env.local (not placeholders).
 * Run with the app server also running (npm run dev) for the webhook test.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

// ─── Colour helpers ───────────────────────────────────────────────────────────

const G = (s: string) => `\x1b[32m${s}\x1b[0m`;
const R = (s: string) => `\x1b[31m${s}\x1b[0m`;
const Y = (s: string) => `\x1b[33m${s}\x1b[0m`;
const B = (s: string) => `\x1b[1m${s}\x1b[0m`;

// ─── Load .env.local ──────────────────────────────────────────────────────────

const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.error(R('✗ .env.local not found. Copy .env.example and fill it in.'));
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
function getEnv(key: string): string | undefined {
  const match = envContent.match(new RegExp(`^${key}=(.+)`, 'm'));
  const val = match?.[1]?.trim();
  return val && !val.includes('...') && !val.includes('placeholder') && val !== '' ? val : undefined;
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Result {
  name:    string;
  status:  'PASS' | 'FAIL' | 'MANUAL';
  detail:  string;
}

const results: Result[] = [];

function pass(name: string, detail = '') { results.push({ name, status: 'PASS', detail }); }
function fail(name: string, detail = '') { results.push({ name, status: 'FAIL', detail }); }
function manual(name: string, detail = '') { results.push({ name, status: 'MANUAL', detail }); }

// ─── Helpers ──────────────────────────────────────────────────────────────────

function httpsGet(url: string, headers: Record<string, string> = {}): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers }, res => {
      let body = '';
      res.on('data', (d: Buffer) => { body += d.toString(); });
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body }));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => { req.destroy(new Error('timeout')); });
  });
}

function httpsPost(url: string, body: string, headers: Record<string, string> = {}): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      port:     parsed.port || (url.startsWith('https') ? 443 : 80),
      path:     parsed.pathname + parsed.search,
      method:   'POST',
      headers:  { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body), ...headers },
    };
    const req = lib.request(options, res => {
      let data = '';
      res.on('data', (d: Buffer) => { data += d.toString(); });
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => { req.destroy(new Error('timeout')); });
    req.write(body);
    req.end();
  });
}

// ─── Check 1: Required env vars ───────────────────────────────────────────────

async function checkEnvVars() {
  const required: Record<string, string> = {
    NEXT_PUBLIC_SUPABASE_URL:       'Supabase',
    NEXT_PUBLIC_SUPABASE_ANON_KEY:  'Supabase',
    SUPABASE_SERVICE_ROLE_KEY:      'Supabase',
    STRIPE_SECRET_KEY:              'Stripe',
    STRIPE_WEBHOOK_SECRET:          'Stripe',
    STRIPE_PRICE_DMV_MONTHLY:       'Stripe prices',
    STRIPE_PRICE_DMV_ANNUAL:        'Stripe prices',
    STRIPE_PRICE_MOTO_MONTHLY:      'Stripe prices',
    STRIPE_PRICE_MOTO_ANNUAL:       'Stripe prices',
    STRIPE_PRICE_CDL_MONTHLY:       'Stripe prices',
    STRIPE_PRICE_CDL_ANNUAL:        'Stripe prices',
    STRIPE_PRICE_HAZMAT_MONTHLY:    'Stripe prices',
    STRIPE_PRICE_HAZMAT_ANNUAL:     'Stripe prices',
    STRIPE_PRICE_TANKER_MONTHLY:    'Stripe prices',
    STRIPE_PRICE_TANKER_ANNUAL:     'Stripe prices',
    STRIPE_PRICE_DOUBLES_MONTHLY:   'Stripe prices',
    STRIPE_PRICE_DOUBLES_ANNUAL:    'Stripe prices',
    STRIPE_PRICE_SCHOOL_BUS_MONTHLY:'Stripe prices',
    STRIPE_PRICE_SCHOOL_BUS_ANNUAL: 'Stripe prices',
    STRIPE_PRICE_PASSENGER_MONTHLY: 'Stripe prices',
    STRIPE_PRICE_PASSENGER_ANNUAL:  'Stripe prices',
  };

  const optional: Record<string, string> = {
    RESEND_API_KEY:           'email (optional for launch)',
    NEXT_PUBLIC_POSTHOG_KEY:  'analytics (optional)',
    NEXT_PUBLIC_SENTRY_DSN:   'error monitoring (optional)',
    SENTRY_AUTH_TOKEN:        'Sentry source maps (optional)',
  };

  const missing: string[] = [];
  for (const [k] of Object.entries(required)) {
    if (!getEnv(k)) missing.push(k);
  }

  if (missing.length === 0) {
    pass('ENV: All required variables set');
  } else {
    fail('ENV: Missing required variables', missing.join(', '));
  }

  const missingOpt: string[] = [];
  for (const [k] of Object.entries(optional)) {
    if (!getEnv(k)) missingOpt.push(k);
  }
  if (missingOpt.length > 0) {
    manual('ENV: Optional variables not set (non-blocking)', missingOpt.join(', '));
  }

  // Stripe key mode
  const sk = getEnv('STRIPE_SECRET_KEY');
  if (sk?.startsWith('sk_live_')) {
    manual('STRIPE: Live mode key detected — ensure Stripe products are in LIVE mode too');
  } else if (sk?.startsWith('sk_test_')) {
    pass('STRIPE: Test mode key');
  }
}

// ─── Check 2: Supabase reachable ─────────────────────────────────────────────

async function checkSupabase() {
  const url    = getEnv('NEXT_PUBLIC_SUPABASE_URL');
  const anon   = getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  const svcKey = getEnv('SUPABASE_SERVICE_ROLE_KEY');

  if (!url || !anon) {
    fail('SUPABASE: URL or anon key not set — skipping connectivity check');
    return;
  }

  try {
    const res = await httpsGet(`${url}/rest/v1/`, { apikey: anon });
    if (res.status === 200) {
      pass('SUPABASE: REST endpoint reachable');
    } else {
      fail('SUPABASE: REST returned ' + res.status, res.body.slice(0, 200));
    }
  } catch (e: unknown) {
    fail('SUPABASE: Cannot reach REST endpoint', (e as Error).message);
  }

  if (!svcKey) {
    fail('SUPABASE: SUPABASE_SERVICE_ROLE_KEY not set — webhooks will fail');
    return;
  }

  // Check subscriptions table exists
  try {
    const res = await httpsGet(`${url}/rest/v1/subscriptions?limit=0`, {
      apikey:        svcKey,
      Authorization: `Bearer ${svcKey}`,
    });
    if (res.status === 200) {
      pass('SUPABASE: subscriptions table accessible');
    } else if (res.status === 404) {
      fail('SUPABASE: subscriptions table not found — run migrations');
    } else {
      fail('SUPABASE: subscriptions table returned ' + res.status, res.body.slice(0, 200));
    }
  } catch (e: unknown) {
    fail('SUPABASE: Cannot query subscriptions', (e as Error).message);
  }

  // Check subscription_plans table has rows
  try {
    const res = await httpsGet(`${url}/rest/v1/subscription_plans?select=id,product,interval`, {
      apikey:        svcKey,
      Authorization: `Bearer ${svcKey}`,
    });
    if (res.status === 200) {
      const rows = JSON.parse(res.body);
      if (Array.isArray(rows) && rows.length >= 16) {
        pass(`SUPABASE: subscription_plans seeded (${rows.length} rows)`);
      } else {
        fail(`SUPABASE: subscription_plans has only ${rows.length} rows — run migration 002`);
      }
    } else {
      fail('SUPABASE: subscription_plans returned ' + res.status);
    }
  } catch (e: unknown) {
    fail('SUPABASE: Cannot query subscription_plans', (e as Error).message);
  }
}

// ─── Check 3: Stripe keys valid ───────────────────────────────────────────────

async function checkStripe() {
  const sk = getEnv('STRIPE_SECRET_KEY');
  if (!sk) {
    fail('STRIPE: STRIPE_SECRET_KEY not set');
    return;
  }

  try {
    const res = await httpsGet('https://api.stripe.com/v1/products?limit=1', {
      Authorization: `Bearer ${sk}`,
    });
    if (res.status === 200) {
      pass('STRIPE: API key valid, products endpoint reachable');
    } else if (res.status === 401) {
      fail('STRIPE: API key rejected (401) — check STRIPE_SECRET_KEY');
    } else {
      fail('STRIPE: Unexpected status ' + res.status);
    }
  } catch (e: unknown) {
    fail('STRIPE: Cannot reach API', (e as Error).message);
  }
}

// ─── Check 4: Stripe price IDs exist ─────────────────────────────────────────

async function checkStripePrices() {
  const sk = getEnv('STRIPE_SECRET_KEY');
  if (!sk) {
    fail('STRIPE PRICES: Skipped — no API key');
    return;
  }

  const priceVars: { label: string; monthly: string; annual: string }[] = [
    { label: "Driver's License",  monthly: 'STRIPE_PRICE_DMV_MONTHLY',       annual: 'STRIPE_PRICE_DMV_ANNUAL'       },
    { label: 'Motorcycle',        monthly: 'STRIPE_PRICE_MOTO_MONTHLY',       annual: 'STRIPE_PRICE_MOTO_ANNUAL'      },
    { label: 'CDL Core',          monthly: 'STRIPE_PRICE_CDL_MONTHLY',        annual: 'STRIPE_PRICE_CDL_ANNUAL'       },
    { label: 'HazMat',            monthly: 'STRIPE_PRICE_HAZMAT_MONTHLY',     annual: 'STRIPE_PRICE_HAZMAT_ANNUAL'    },
    { label: 'Tank Vehicles',     monthly: 'STRIPE_PRICE_TANKER_MONTHLY',     annual: 'STRIPE_PRICE_TANKER_ANNUAL'    },
    { label: 'Doubles/Triples',   monthly: 'STRIPE_PRICE_DOUBLES_MONTHLY',    annual: 'STRIPE_PRICE_DOUBLES_ANNUAL'   },
    { label: 'School Bus',        monthly: 'STRIPE_PRICE_SCHOOL_BUS_MONTHLY', annual: 'STRIPE_PRICE_SCHOOL_BUS_ANNUAL'},
    { label: 'Passenger',         monthly: 'STRIPE_PRICE_PASSENGER_MONTHLY',  annual: 'STRIPE_PRICE_PASSENGER_ANNUAL' },
  ];

  for (const p of priceVars) {
    const monthlyId = getEnv(p.monthly);
    const annualId  = getEnv(p.annual);

    if (!monthlyId || !annualId) {
      fail(`STRIPE PRICES [${p.label}]: ${!monthlyId ? p.monthly : p.annual} not set`);
      continue;
    }

    // Verify monthly price exists in Stripe
    try {
      const res = await httpsGet(`https://api.stripe.com/v1/prices/${monthlyId}`, {
        Authorization: `Bearer ${sk}`,
      });
      const data = JSON.parse(res.body);
      if (res.status === 200 && data.active) {
        pass(`STRIPE PRICES [${p.label}]: monthly ${monthlyId} ✓`);
      } else if (res.status === 404) {
        fail(`STRIPE PRICES [${p.label}]: monthly ${monthlyId} not found in Stripe`);
      } else {
        fail(`STRIPE PRICES [${p.label}]: monthly returned ${res.status}`);
      }
    } catch (e: unknown) {
      fail(`STRIPE PRICES [${p.label}]: monthly check failed`, (e as Error).message);
    }

    // Verify annual price exists in Stripe
    try {
      const res = await httpsGet(`https://api.stripe.com/v1/prices/${annualId}`, {
        Authorization: `Bearer ${sk}`,
      });
      const data = JSON.parse(res.body);
      if (res.status === 200 && data.active) {
        pass(`STRIPE PRICES [${p.label}]: annual ${annualId} ✓`);
      } else if (res.status === 404) {
        fail(`STRIPE PRICES [${p.label}]: annual ${annualId} not found in Stripe`);
      } else {
        fail(`STRIPE PRICES [${p.label}]: annual returned ${res.status}`);
      }
    } catch (e: unknown) {
      fail(`STRIPE PRICES [${p.label}]: annual check failed`, (e as Error).message);
    }
  }
}

// ─── Check 5: App webhook endpoint responds ───────────────────────────────────

async function checkWebhookEndpoint() {
  const appUrl = process.env.APP_URL ?? 'http://localhost:3000';
  try {
    const res = await httpsPost(`${appUrl}/api/stripe/webhook`, '{}', {
      'content-type': 'application/json',
    });
    // We expect 400 (bad signature) — that proves the route is alive and running sig check
    if (res.status === 400) {
      pass(`WEBHOOK: /api/stripe/webhook alive (returned 400 on unsigned request — expected)`);
    } else if (res.status === 500) {
      fail('WEBHOOK: returned 500 — check STRIPE_WEBHOOK_SECRET is set');
    } else if (res.status === 404) {
      fail('WEBHOOK: route not found (404) — is the app running?', `Try: APP_URL=https://your-url npx tsx scripts/smoke-test.ts`);
    } else {
      manual(`WEBHOOK: returned ${res.status}`, res.body.slice(0, 100));
    }
  } catch (e: unknown) {
    fail('WEBHOOK: Cannot reach app', `Is the app running at ${appUrl}? Error: ${(e as Error).message}`);
  }
}

// ─── Checks 6-10: Require manual human verification ──────────────────────────

function addManualChecks() {
  manual(
    'CHECKOUT: Driver\'s License test purchase',
    'Use card 4242 4242 4242 4242, exp any future date, CVC 123'
  );
  manual('CHECKOUT: Motorcycle test purchase',    'Same test card');
  manual('CHECKOUT: CDL Core test purchase',      'Same test card');
  manual('CHECKOUT: HazMat add-on test purchase', 'Same test card');
  manual('CHECKOUT: Tanker add-on test purchase', 'Same test card');
  manual('CHECKOUT: Doubles/Triples test purchase','Same test card');
  manual('CHECKOUT: School Bus test purchase',    'Same test card');
  manual('CHECKOUT: Passenger test purchase',     'Same test card');
  manual(
    'WEBHOOK: Subscription activates in Supabase',
    'After checkout, check subscriptions table: status=active, product=dmv (or correct product)'
  );
  manual(
    'ACCESS: Locked quiz unlocks after purchase',
    'Visit /quiz/california-permit before and after buying Driver\'s License plan'
  );
  manual(
    'ACCESS: Wrong product stays locked',
    'Buy Driver\'s License only; verify /quiz/california-motorcycle still shows SubscriptionGate'
  );
  manual(
    'ACCESS: Cancellation relocks',
    'Cancel subscription in Stripe test dashboard; verify quiz shows SubscriptionGate again'
  );
  manual(
    'POSTHOG: Events fire',
    'Open PostHog dashboard → Live Events; start a quiz and confirm quiz_started appears'
  );
  manual(
    'SENTRY: Test error captured',
    'Run: throw new Error("Sentry smoke test") in a server action; confirm it appears in Sentry Issues'
  );
}

// ─── Run all checks ───────────────────────────────────────────────────────────

async function run() {
  console.log(B('\n╔══════════════════════════════════════════════╗'));
  console.log(B('║   CAREDMVPrep Production Smoke Test          ║'));
  console.log(B('╚══════════════════════════════════════════════╝\n'));

  console.log('Running automated checks...\n');

  await checkEnvVars();
  await checkSupabase();
  await checkStripe();
  await checkStripePrices();
  await checkWebhookEndpoint();
  addManualChecks();

  // ── Summary ────────────────────────────────────────────────────────────────

  const passed = results.filter(r => r.status === 'PASS');
  const failed = results.filter(r => r.status === 'FAIL');
  const manual = results.filter(r => r.status === 'MANUAL');

  console.log(B('─'.repeat(62)));

  if (passed.length) {
    console.log(G(`\n✓ PASSED (${passed.length})`));
    passed.forEach(r => console.log(G(`  ✓ ${r.name}`) + (r.detail ? ` — ${r.detail}` : '')));
  }

  if (failed.length) {
    console.log(R(`\n✗ FAILED (${failed.length})`));
    failed.forEach(r => console.log(R(`  ✗ ${r.name}`) + (r.detail ? ` — ${r.detail}` : '')));
  }

  if (manual.length) {
    console.log(Y(`\n⊙ NEEDS MANUAL ACTION (${manual.length})`));
    manual.forEach(r => console.log(Y(`  ⊙ ${r.name}`) + (r.detail ? `\n    ${r.detail}` : '')));
  }

  console.log(B('\n─'.repeat(62)));
  console.log(`Total: ${passed.length} passed, ${R(failed.length + ' failed')}, ${Y(manual.length + ' manual')}\n`);

  if (failed.length > 0) {
    console.log(R('Resolve all FAILED items before going live.\n'));
    process.exit(1);
  } else {
    console.log(G('All automated checks passed. Complete the manual steps above, then go live.\n'));
  }
}

run().catch(e => {
  console.error(R('Smoke test crashed: ' + e.message));
  process.exit(1);
});
