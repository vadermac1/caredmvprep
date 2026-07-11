# CARE DMV — Launch-Readiness Completion Record

**Status: Complete.** 2026-07-10.

This document is the permanent record for the CARE DMV launch-readiness initiative. Do not reopen this work unless a real customer problem, a verified content issue, or a law/regulation change is reported — see "Do not reopen unless" at the bottom.

## What was completed

1. **Initial launch-readiness audit and fixes** — a full review of the customer journey (purchase flow, dashboard, progress tracking, quiz/mock-exam engine, entitlements, content accuracy, navigation, messaging) with the highest-priority verified issues fixed: a working Stripe Billing Portal (none existed before, despite the app promising one), past-due subscription visibility, a dead-end "Practice All" click, mock-exam length integrity, and several state-coverage messaging inconsistencies across the homepage, About, and FAQ pages.
2. **State activation**: Michigan, Missouri, Tennessee, Virginia, and Washington were verified against their existing question banks and `state-facts.ts` metadata, then wired into the quiz registry, mock exams, onboarding, and checkout — including making the motorcycle product state-picker product-aware so a state is never sold a product it has no content for. Indiana was deliberately **not** activated (see below).
3. **Second-pass targeted fixes** covering dashboard accuracy, progress tracking, study reliability, content completeness, broken links, inconsistent messaging, and mobile usability — including multi-product (DMV + CDL/motorcycle) correctness fixes for weak-topic tracking and study plans, a Recently Missed de-duplication fix, quiz session persistence, and a fix for the Contact form silently losing customer messages when no mail client is configured.
4. **Live end-to-end browser verification** of the complete customer journey, run against a real (test-mode) Stripe account with actual webhook forwarding — not mocked or code-reviewed only. This surfaced and fixed several bugs that were invisible on inspection, including one that broke the previous batch's own fix (a Zustand hydration race in the quiz-resume logic) and a hardcoded testId that silently sent every non-California customer to the wrong state's test when practicing a weak topic.

## Number of verified fixes

| Phase | Fixes | Commit |
|---|---|---|
| 1 — Initial launch-readiness audit | 20 | `a0a8942` |
| 2 — State activation (+ 2 content-duplicate fixes, 1 QA-tooling gap fix) | 5 states activated, 3 fixes | `a8a74a7` |
| 3 — Second-pass targeted fixes | 29 | `76b05b4` |
| 4 — Live browser-verified fixes | 8 | `76b05b4` |

**Total: ~57 verified, customer-facing launch-readiness fixes**, plus 5 states activated with real, verified content. Every phase was confirmed with a full `tsc` typecheck, a production build, and the existing QA suite (`npm run qa:all`) before being counted — no regressions introduced at any point.

## Current live state coverage

**15 states** with a full practice-test bank, timed mock exams, and progress tracking after signup:

California, Texas, Florida, New York, Pennsylvania, Illinois, Ohio, Georgia, North Carolina, Arizona, Michigan, Missouri, Tennessee, Virginia, Washington.

- **Motorcycle**: available in 12 of these 15 (all except Michigan, Tennessee, Washington — no verified motorcycle question bank exists yet for those three). The motorcycle checkout flow and onboarding are both product-aware and cannot sell or route a customer into a state with no motorcycle content.
- **CDL General Knowledge**: available in all 15 (federally standardized content, state-agnostic).
- **Free sample questions**: available on marketing landing pages for all 50 states, clearly distinguished from full-test availability in all customer-facing copy.
- **Indiana**: question content exists (59 verified questions) but is **not activated**. The state's official permit-test question count and pass threshold are still marked `NEEDS_VERIFICATION` in `VERIFICATION.md` — the real DMV question-bank length is unknown, so a mock exam or "Test at a Glance" card can't be built honestly. Activating it requires a phone call to the Indiana BMV (888-692-6841) to confirm the real number.

## Customer journey verified

Verified live, in a real browser, against a production build:

Signup → email confirmation → onboarding (state + license selection, with correct per-state motorcycle gating) → real Stripe Checkout purchase (test-mode card, real webhook) → instant entitlement grant → dashboard (empty and populated states) → practice test (answer, explain, bookmark) → mock exam (timed and untimed) → "Practice All" personalized session → flashcards (create from weak topic, study session, SM-2 scheduling) → weak-topic review → resume-after-refresh mid-quiz → Recently Missed (de-duplicated across multiple sessions) → Study Plan (exam date, daily goal) → Account page → Stripe Billing Portal → mobile layout (dashboard, quiz, account, 390px viewport).

## Known intentionally deferred items

- **Admin coupon → Stripe integration gap**: codes created in the internal admin panel don't create a matching Stripe Promotion Code, so they won't work at checkout. The admin-panel copy was corrected to say so honestly; the real fix needs live Stripe credentials to build and test safely, which wasn't done blind in this initiative.
- **Pre-existing cross-state duplicate content** (17 instances) and **pre-existing answer-length/position bias** in the question banks — both predate this initiative and were already accepted for the original 10-state launch. Two *new* instances of each, introduced by the newly-activated states, were found and fixed; the pre-existing 17/bias were left alone as out of scope for a launch-readiness pass (not a new regression).
- **UTC-timezone bucketing** for streaks and weekly-activity charts — a real correctness bug for any customer whose evening study session crosses a UTC day boundary, but fixing it needs a stored user-timezone field (a schema change), not a same-session fix.
- **Indiana activation** — see state coverage above.

## Do not reopen unless

- A real customer reports a problem, or
- A verified content issue is found (a fact-check reveals a question, state fact, or citation is wrong), or
- A law or regulation changes in a way that affects DMV, CDL, or motorcycle test content or requirements.

Routine "nice to have" requests (more states before Indiana is verified, new features, cosmetic polish) should be evaluated as new, separately-scoped work — not as a reason to reopen this record.
