import type { SubscriptionProduct } from '@/types/database';

// ─── Per-product config ───────────────────────────────────────────────────────
// recurring: monthly Stripe subscription (cancel anytime)
// oneTime:   single Stripe payment with a fixed access window

export interface RecurringOption {
  priceCents: number;
  priceId:    string;   // STRIPE_PRICE_*_MONTHLY env var
}

export interface OneTimeOption {
  priceCents:     number;
  priceId:        string;   // STRIPE_PRICE_*_ONETIME (or just STRIPE_PRICE_*) env var
  durationMonths: number;
}

export interface ProductConfig {
  label:       string;
  description: string;
  recurring?:  RecurringOption;
  oneTime?:    OneTimeOption;
}

export const PRODUCT_CONFIG: Record<SubscriptionProduct, ProductConfig> = {
  dmv: {
    label:       "Driver's License",
    description: "Full state DMV permit question bank + 3 timed mock exams",
    recurring: {
      priceCents: 1200,
      priceId:    process.env.STRIPE_PRICE_DMV_MONTHLY   ?? '',
    },
    oneTime: {
      priceCents:     2900,
      priceId:        process.env.STRIPE_PRICE_DMV_ONETIME ?? '',
      durationMonths: 3,
    },
  },

  motorcycle: {
    label:       "Motorcycle License",
    description: "Full state motorcycle endorsement question bank",
    recurring: {
      priceCents: 1200,
      priceId:    process.env.STRIPE_PRICE_MOTO_MONTHLY   ?? '',
    },
    oneTime: {
      priceCents:     2900,
      priceId:        process.env.STRIPE_PRICE_MOTO_ONETIME ?? '',
      durationMonths: 3,
    },
  },

  cdl: {
    label:       "CDL Core",
    description: "General Knowledge, Air Brakes, Combination Vehicles, Passenger, and School Bus banks",
    recurring: {
      priceCents: 1900,
      priceId:    process.env.STRIPE_PRICE_CDL_MONTHLY   ?? '',
    },
    oneTime: {
      priceCents:     4900,
      priceId:        process.env.STRIPE_PRICE_CDL_ONETIME ?? '',
      durationMonths: 6,
    },
  },

  cdl_hazmat: {
    label:       "HazMat Endorsement",
    description: "CDL HazMat (H) endorsement question bank — requires CDL Core",
    oneTime: {
      priceCents:     1900,
      priceId:        process.env.STRIPE_PRICE_HAZMAT ?? '',
      durationMonths: 6,
    },
  },

  cdl_tanker: {
    label:       "Tank Vehicles Endorsement",
    description: "CDL Tank Vehicles (N) endorsement question bank — requires CDL Core",
    oneTime: {
      priceCents:     1500,
      priceId:        process.env.STRIPE_PRICE_TANKER ?? '',
      durationMonths: 6,
    },
  },

  cdl_doubles_triples: {
    label:       "Doubles & Triples Endorsement",
    description: "CDL Doubles & Triples (T) endorsement question bank — requires CDL Core",
    oneTime: {
      priceCents:     1500,
      priceId:        process.env.STRIPE_PRICE_DOUBLES ?? '',
      durationMonths: 6,
    },
  },

  // Bundled into CDL Core — not sold separately; DB enum values must remain.
  cdl_school_bus: {
    label:       "School Bus",
    description: "CDL School Bus (S) endorsement question bank — included with CDL Core",
  },

  cdl_passenger: {
    label:       "Passenger",
    description: "CDL Passenger (P) endorsement question bank — included with CDL Core",
  },
};

// ─── Quiz → required subscription product ────────────────────────────────────

// States with a live Driver's License (permit) bank, mock exams, and CDL
// General Knowledge (federal bank, so it's free to enable everywhere a state
// goes live). Motorcycle is tracked separately below since not every live
// state has a motorcycle question bank yet.
const LIVE_STATE_SLUGS = [
  'california',
  'texas',
  'florida',
  'new-york',
  'pennsylvania',
  'illinois',
  'ohio',
  'georgia',
  'north-carolina',
  'arizona',
  'michigan',
  'missouri',
  'tennessee',
  'virginia',
  'washington',
  'new-jersey',
  'maryland',
  'massachusetts',
  'wisconsin',
  'oregon',
  'oklahoma',
  'connecticut',
  'nevada',
  'utah',
  'south-carolina',
  'indiana',
  'alabama',
  'colorado',
  'kentucky',
  'louisiana',
  'minnesota',
  // Batch 2 — remaining 19 states
  'alaska',
  'arkansas',
  'delaware',
  'hawaii',
  'idaho',
  'iowa',
  'kansas',
  'maine',
  'mississippi',
  'montana',
  'nebraska',
  'new-hampshire',
  'new-mexico',
  'north-dakota',
  'rhode-island',
  'south-dakota',
  'vermont',
  'west-virginia',
  'wyoming',
] as const;

// Subset of LIVE_STATE_SLUGS that also has a motorcycle question bank wired
// into the quiz registry. Keep in sync with src/data/questions/index.ts —
// do not add a state here until its motorcycle bank is actually registered.
export const LIVE_MOTORCYCLE_STATE_SLUGS = [
  'california',
  'texas',
  'florida',
  'new-york',
  'pennsylvania',
  'illinois',
  'ohio',
  'georgia',
  'north-carolina',
  'arizona',
  'missouri',
  'virginia',
  'maryland',
  'massachusetts',
  'oregon',
  'indiana',
  'alabama',
  'colorado',
  'minnesota',
  'south-carolina',
  // Batch 2 — all 50 states
  'alaska',
  'arkansas',
  'connecticut',
  'delaware',
  'hawaii',
  'idaho',
  'iowa',
  'kansas',
  'kentucky',
  'louisiana',
  'maine',
  'michigan',
  'mississippi',
  'montana',
  'nebraska',
  'nevada',
  'new-hampshire',
  'new-jersey',
  'new-mexico',
  'north-dakota',
  'oklahoma',
  'rhode-island',
  'south-dakota',
  'tennessee',
  'utah',
  'vermont',
  'washington',
  'west-virginia',
  'wisconsin',
  'wyoming',
] as const;

// Abbr-keyed equivalents for callers (checkout, onboarding, pricing state
// pickers) that work with two-letter state codes instead of URL slugs.
export const LIVE_STATE_ABBRS = new Set<string>([
  'CA', 'TX', 'FL', 'NY', 'PA', 'IL', 'OH', 'GA', 'NC', 'AZ', 'MI', 'MO', 'TN', 'VA', 'WA', 'NJ', 'MD', 'MA', 'WI', 'OR', 'OK', 'CT', 'NV', 'UT', 'SC', 'IN', 'AL', 'CO', 'KY', 'LA', 'MN',
  // Batch 2 — remaining 19 states
  'AK', 'AR', 'DE', 'HI', 'ID', 'IA', 'KS', 'ME', 'MS', 'MT', 'NE', 'NH', 'NM', 'ND', 'RI', 'SD', 'VT', 'WV', 'WY',
]);
export const LIVE_MOTORCYCLE_STATE_ABBRS = new Set<string>([
  'CA', 'TX', 'FL', 'NY', 'PA', 'IL', 'OH', 'GA', 'NC', 'AZ', 'MO', 'VA', 'MD', 'MA', 'OR',
  'IN', 'AL', 'CO', 'MN', 'SC',
  // Batch 2 — all 50 states
  'AK', 'AR', 'CT', 'DE', 'HI', 'ID', 'IA', 'KS', 'KY', 'LA', 'ME', 'MI', 'MS', 'MT',
  'NE', 'NV', 'NH', 'NJ', 'NM', 'ND', 'OK', 'RI', 'SD', 'TN', 'UT', 'VT', 'WA', 'WV', 'WI', 'WY',
]);

function buildStateQuizProductMap(): Partial<Record<string, SubscriptionProduct>> {
  const map: Partial<Record<string, SubscriptionProduct>> = {};
  const motoSlugs = new Set<string>(LIVE_MOTORCYCLE_STATE_SLUGS);
  for (const slug of LIVE_STATE_SLUGS) {
    map[`${slug}-permit`] = 'dmv';
    map[`${slug}-cdl-general`] = 'cdl';
    map[`${slug}-permit-mock-1`] = 'dmv';
    map[`${slug}-permit-mock-2`] = 'dmv';
    map[`${slug}-permit-mock-3`] = 'dmv';
    if (motoSlugs.has(slug)) {
      map[`${slug}-motorcycle`] = 'motorcycle';
    }
  }
  return map;
}

export const QUIZ_PRODUCT_MAP: Partial<Record<string, SubscriptionProduct>> = {
  ...buildStateQuizProductMap(),
  // CDL endorsements (federal — state-agnostic)
  'cdl-hazmat':               'cdl_hazmat',
  'cdl-tank-vehicles':        'cdl_tanker',
  'cdl-doubles-triples':      'cdl_doubles_triples',
  'cdl-air-brakes':           'cdl',
  'cdl-combination-vehicles': 'cdl',
  'cdl-passenger':            'cdl',
  'cdl-school-bus':           'cdl',
};

// Formats cents as "$12" or "$29" (no trailing .00)
export function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2).replace(/\.00$/, '')}`;
}
