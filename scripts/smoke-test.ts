/**
 * Production smoke test — validates external service wiring before launch.
 *
 * Usage:
 *   npx tsx scripts/smoke-test.ts
 *   APP_URL=https://caredmvprep.com npx tsx scripts/smoke-test.ts
 *
 * Requires real values in .env.local (not placeholders).
 */

import * as fs   from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http  from 'http';

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
  const val   = match?.[1]?.trim();
  return val && !val.includes('...') && !val.includes('placeholder') && val !== '' ? val : undefined;
}

// ─── Result tracking ──────────────────────────────────────────────────────────

interface Result { name: string; status: 'PASS' | 'FAIL' | 'MANUAL'; detail: string; }
const results: Result[] = [];

function pass(name: string, detail = '')   { results.push({ name, status: 'PASS',   detail }); }
function fail(name: string, detail = '')   { results.push({ name, status: 'FAIL',   detail }); }
function manual(name: string, detail = '') { results.push({ name, status: 'MANUAL', detail }); }

// ─── HTTP helpers ─────────────────────────────────────────────────────────────

function httpsGet(url: string, headers: Record<string, string> = {}): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers }, res => {
      let body = '';
      res.on('data', (d: Buffer) => { body += d.toString(); });
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body }));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => req.destroy(new Error('timeout')));
  });
}

function httpsPost(url: string, body: string, headers: Record<string, string> = {}): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const lib    = url.startsWith('https') ? https : http;
    const parsed = new URL(url);
    const opts   = {
      hostname: parsed.hostname,
      port:     parsed.port || (url.startsWith('https') ? 443 : 80),
      path:     parsed.pathname + parsed.search,
      method:   'POST',
      headers:  { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body), ...headers },
    };
    const req = lib.request(opts, res => {
      let data = '';
      res.on('data', (d: Buffer) => { data += d.toString(); });
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => req.destroy(new Error('timeout')));
    req.write(body); req.end();
  });
}

// ─── Check 1: Required env vars ───────────────────────────────────────────────

async function checkEnvVars() {
  const required: string[] = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
    'STRIPE_SECRET_KEY',
    'STRIPE_WEBHOOK_SECRET',
    // Monthly (recurring)
    'STRIPE_PRICE_DMV_MONTHLY',
    'STRIPE_PRICE_MOTO_MONTHLY',
    'STRIPE_PRICE_CDL_MONTHLY',
    // One-time — core products
    'STRIPE_PRICE_DMV_ONETIME',
    'STRIPE_PRICE_MOTO_ONETIME',
    'STRIPE_PRICE_CDL_ONETIME',
    // One-time — endorsements
    'STRIPE_PRICE_HAZMAT',
    'STRIPE_PRICE_TANKER',
    'STRIPE_PRICE_DOUBLES',
  ];

  const optional: string[] = [
    'RESEND_API_KEY',
    'NEXT_PUBLIC_POSTHOG_KEY',
    'NEXT_PUBLIC_SENTRY_DSN',
    'SENTRY_AUTH_TOKEN',
  ];

  const missing = required.filter(k => !getEnv(k));
  if (missing.length === 0) {
    pass('ENV: All 14 required variables set');
  } else {
    fail('ENV: Missing required variables', missing.join(', '));
  }

  const missingOpt = optional.filter(k => !getEnv(k));
  if (missingOpt.length > 0) {
    manual('ENV: Optional variables not set (non-blocking)', missingOpt.join(', '));
  }

  const sk = getEnv('STRIPE_SECRET_KEY');
  if (sk?.startsWith('sk_live_')) {
    manual('STRIPE: Live mode key — confirm all price IDs are also LIVE mode');
  } else if (sk?.startsWith('sk_test_')) {
    pass('STRIPE: Test mode key');
  }
}

// ─── Check 2: Supabase connectivity ──────────────────────────────────────────

async function checkSupabase() {
  const url    = getEnv('NEXT_PUBLIC_SUPABASE_URL');
  const anon   = getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  const svcKey = getEnv('SUPABASE_SERVICE_ROLE_KEY');

  if (!url || !anon) {
    fail('SUPABASE: URL or anon key not set — skipping');
    return;
  }

  try {
    const res = await httpsGet(`${url}/rest/v1/`, { apikey: anon });
    if (res.status === 200) pass('SUPABASE: REST reachable');
    else fail('SUPABASE: REST returned ' + res.status, res.body.slice(0, 200));
  } catch (e: unknown) {
    fail('SUPABASE: Cannot reach REST', (e as Error).message);
  }

  if (!svcKey) { fail('SUPABASE: SUPABASE_SERVICE_ROLE_KEY not set'); return; }

  // subscriptions table
  try {
    const res = await httpsGet(`${url}/rest/v1/subscriptions?limit=0`, {
      apikey: svcKey, Authorization: `Bearer ${svcKey}`,
    });
    if (res.status === 200) pass('SUPABASE: subscriptions table accessible');
    else if (res.status === 404) fail('SUPABASE: subscriptions table missing — run migrations');
    else fail('SUPABASE: subscriptions returned ' + res.status);
  } catch (e: unknown) {
    fail('SUPABASE: Cannot query subscriptions', (e as Error).message);
  }

  // Confirm migration 003 columns exist (payment_type, access_expires_at)
  try {
    const res = await httpsGet(
      `${url}/rest/v1/subscriptions?select=payment_type,access_expires_at&limit=0`,
      { apikey: svcKey, Authorization: `Bearer ${svcKey}` }
    );
    if (res.status === 200) {
      pass('SUPABASE: migration 003 columns present (payment_type, access_expires_at)');
    } else {
      fail('SUPABASE: migration 003 columns missing — run migration 003');
    }
  } catch (e: unknown) {
    fail('SUPABASE: Cannot check migration 003 columns', (e as Error).message);
  }

  // subscription_plans seeded
  try {
    const res = await httpsGet(`${url}/rest/v1/subscription_plans?select=id,product,interval`, {
      apikey: svcKey, Authorization: `Bearer ${svcKey}`,
    });
    if (res.status === 200) {
      const rows = JSON.parse(res.body) as Array<{ product: string; interval: string }>;
      const hasOneTime = rows.some(r => r.interval === 'one_time');
      const hasMonthly = rows.some(r => r.interval === 'monthly');
      if (hasOneTime && hasMonthly) {
        pass(`SUPABASE: subscription_plans has both monthly and one_time rows (${rows.length} total)`);
      } else {
        fail(`SUPABASE: subscription_plans missing rows — hasMonthly=${hasMonthly} hasOneTime=${hasOneTime}`);
      }
    } else {
      fail('SUPABASE: subscription_plans returned ' + res.status);
    }
  } catch (e: unknown) {
    fail('SUPABASE: Cannot query subscription_plans', (e as Error).message);
  }
}

// ─── Check 3: Stripe key valid ────────────────────────────────────────────────

async function checkStripe() {
  const sk = getEnv('STRIPE_SECRET_KEY');
  if (!sk) { fail('STRIPE: STRIPE_SECRET_KEY not set'); return; }

  try {
    const res = await httpsGet('https://api.stripe.com/v1/products?limit=1', {
      Authorization: `Bearer ${sk}`,
    });
    if (res.status === 200) pass('STRIPE: API key valid');
    else if (res.status === 401) fail('STRIPE: API key rejected (401)');
    else fail('STRIPE: Unexpected status ' + res.status);
  } catch (e: unknown) {
    fail('STRIPE: Cannot reach API', (e as Error).message);
  }
}

// ─── Check 4: All Stripe price IDs exist ─────────────────────────────────────

async function checkStripePrices() {
  const sk = getEnv('STRIPE_SECRET_KEY');
  if (!sk) { fail('STRIPE PRICES: Skipped — no API key'); return; }

  const prices: { label: string; envKey: string }[] = [
    { label: "Driver's License Monthly",    envKey: 'STRIPE_PRICE_DMV_MONTHLY'   },
    { label: "Driver's License One-Time",   envKey: 'STRIPE_PRICE_DMV_ONETIME'   },
    { label: "Motorcycle Monthly",          envKey: 'STRIPE_PRICE_MOTO_MONTHLY'  },
    { label: "Motorcycle One-Time",         envKey: 'STRIPE_PRICE_MOTO_ONETIME'  },
    { label: "CDL Core Monthly",            envKey: 'STRIPE_PRICE_CDL_MONTHLY'   },
    { label: "CDL Core One-Time",           envKey: 'STRIPE_PRICE_CDL_ONETIME'   },
    { label: "HazMat (one-time)",           envKey: 'STRIPE_PRICE_HAZMAT'        },
    { label: "Tank Vehicles (one-time)",    envKey: 'STRIPE_PRICE_TANKER'        },
    { label: "Doubles/Triples (one-time)",  envKey: 'STRIPE_PRICE_DOUBLES'       },
  ];

  for (const p of prices) {
    const id = getEnv(p.envKey);
    if (!id) { fail(`STRIPE PRICES [${p.label}]: ${p.envKey} not set`); continue; }

    try {
      const res  = await httpsGet(`https://api.stripe.com/v1/prices/${id}`, {
        Authorization: `Bearer ${sk}`,
      });
      const data = JSON.parse(res.body) as { active?: boolean };
      if (res.status === 200 && data.active) {
        pass(`STRIPE PRICES [${p.label}]: ${id} ✓`);
      } else if (res.status === 404) {
        fail(`STRIPE PRICES [${p.label}]: ${id} not found in Stripe`);
      } else {
        fail(`STRIPE PRICES [${p.label}]: ${id} returned ${res.status}`);
      }
    } catch (e: unknown) {
      fail(`STRIPE PRICES [${p.label}]: check failed`, (e as Error).message);
    }
  }
}

// ─── Check 5: Webhook endpoint alive ─────────────────────────────────────────

async function checkWebhookEndpoint() {
  const appUrl = process.env.APP_URL ?? 'http://localhost:3000';
  try {
    const res = await httpsPost(`${appUrl}/api/stripe/webhook`, '{}', {
      'content-type': 'application/json',
    });
    if (res.status === 400) {
      pass('WEBHOOK: /api/stripe/webhook alive (400 on unsigned request — expected)');
    } else if (res.status === 500) {
      fail('WEBHOOK: 500 — check STRIPE_WEBHOOK_SECRET');
    } else if (res.status === 404) {
      fail('WEBHOOK: 404 — is the app running?', `APP_URL=${appUrl}`);
    } else {
      manual(`WEBHOOK: returned ${res.status}`, res.body.slice(0, 100));
    }
  } catch (e: unknown) {
    fail('WEBHOOK: Cannot reach app', `Running at ${appUrl}? ${(e as Error).message}`);
  }
}

// ─── Manual test protocol ─────────────────────────────────────────────────────

function addManualChecks() {
  const card = 'Use test card: 4242 4242 4242 4242, any future exp, any CVC';

  // Recurring (monthly)
  manual("CHECKOUT [Monthly] Driver's License",
    `Pricing page → Subscribe Monthly ($12/mo). ${card}. Confirm sub in Stripe dashboard.`);
  manual("CHECKOUT [Monthly] Motorcycle",
    `Pricing page → Subscribe Monthly ($12/mo). ${card}.`);
  manual("CHECKOUT [Monthly] CDL Core",
    `Pricing page → Subscribe Monthly ($19/mo). ${card}.`);

  // One-time passes — core products
  manual("CHECKOUT [One-Time] Driver's License 3-Month Pass",
    `Pricing page → Buy 3-Month Pass ($29). ${card}. Confirm payment in Stripe; no subscription created.`);
  manual("CHECKOUT [One-Time] Motorcycle 3-Month Pass", `Pricing page → Buy 3-Month Pass ($29). ${card}.`);
  manual("CHECKOUT [One-Time] CDL Core 6-Month Pass",  `Pricing page → Buy 6-Month Pass ($49). ${card}.`);

  // Endorsements
  manual("CHECKOUT [One-Time] HazMat",           `Pricing page → HazMat → Buy ($19). ${card}.`);
  manual("CHECKOUT [One-Time] Tank Vehicles",    `Pricing page → Tank Vehicles → Buy ($15). ${card}.`);
  manual("CHECKOUT [One-Time] Doubles/Triples",  `Pricing page → Doubles & Triples → Buy ($15). ${card}.`);

  // Webhook / DB
  manual("WEBHOOK: Recurring sub activates",
    "After monthly purchase: Supabase subscriptions table → status=active, payment_type=recurring");
  manual("WEBHOOK: One-time pass activates",
    "After pass purchase: Supabase subscriptions table → status=active, payment_type=one_time, access_expires_at set");

  // Access control
  manual("ACCESS: Monthly unlock",
    "Buy Driver's License monthly → /quiz/california-permit loads (no gate)");
  manual("ACCESS: One-time unlock",
    "Buy Driver's License 3-month pass → /quiz/california-permit loads");
  manual("ACCESS: Wrong product stays locked",
    "Buy Driver's License only → /quiz/california-motorcycle still shows gate");
  manual("ACCESS: Cannot replace recurring with one-time from UI",
    "Have active monthly sub → pricing page shows 'Active Monthly Plan', no one-time button");
  manual("ACCESS: Subscription cancellation relocks",
    "Cancel monthly sub in Stripe dashboard → quiz shows gate again after period ends");
  manual("ACCESS: One-time expiration relocks",
    "Manually set access_expires_at to a past date in Supabase → quiz shows gate");

  // Mixed purchases
  manual("ACCESS: Mixed purchases (CDL Core monthly + HazMat one-time)",
    "Subscribe CDL Core monthly → buy HazMat one-time → both /quiz/california-cdl-general and /quiz/cdl-hazmat unlock");

  // Analytics + monitoring
  manual("POSTHOG: Events fire",
    "PostHog dashboard → Live Events → start quiz → see quiz_started. Buy product → see subscription_checkout_started");
  manual("SENTRY: Error captured",
    "Sentry dashboard → Issues → confirm at least one test error appears after triggering one manually");
}

// ─── Run ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log(B('\n╔══════════════════════════════════════════════╗'));
  console.log(B('║   CAREDMVPrep Production Smoke Test          ║'));
  console.log(B('╚══════════════════════════════════════════════╝\n'));

  await checkEnvVars();
  await checkSupabase();
  await checkStripe();
  await checkStripePrices();
  await checkWebhookEndpoint();
  addManualChecks();

  const passed = results.filter(r => r.status === 'PASS');
  const failed = results.filter(r => r.status === 'FAIL');
  const man    = results.filter(r => r.status === 'MANUAL');

  console.log(B('\n' + '─'.repeat(62)));

  if (passed.length) {
    console.log(G(`\n✓ PASSED (${passed.length})`));
    passed.forEach(r => console.log(G(`  ✓ ${r.name}`) + (r.detail ? ` — ${r.detail}` : '')));
  }
  if (failed.length) {
    console.log(R(`\n✗ FAILED (${failed.length})`));
    failed.forEach(r => console.log(R(`  ✗ ${r.name}`) + (r.detail ? ` — ${r.detail}` : '')));
  }
  if (man.length) {
    console.log(Y(`\n⊙ NEEDS MANUAL ACTION (${man.length})`));
    man.forEach(r => {
      console.log(Y(`  ⊙ ${r.name}`));
      if (r.detail) console.log(`    ${r.detail}`);
    });
  }

  console.log(B('\n' + '─'.repeat(62)));
  console.log(`\nTotal: ${passed.length} passed · ${R(failed.length + ' failed')} · ${Y(man.length + ' manual')}\n`);

  if (failed.length > 0) {
    console.log(R('Resolve all FAILED items before going live.\n'));
    process.exit(1);
  } else {
    console.log(G('All automated checks passed. Complete manual steps above, then go live.\n'));
  }
}

run().catch(e => {
  console.error(R('Smoke test crashed: ' + e.message));
  process.exit(1);
});
