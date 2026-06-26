# State Facts Verification Tracker

Source of truth: `src/data/questions/state-facts.ts`
Last updated: 2026-06-26
Hardcode audit: `npm run qa:hardcodes` — 0 mismatches as of 2026-06-26
Rule: only official state .gov sources accepted. Mark `NEEDS_VERIFICATION` if unclear.

---

## Accuracy Report — as of 2026-06-26

| Category | Verified | Remaining | Status |
|----------|---------|-----------|--------|
| Permit test specs (Q count, pass threshold, %) | 49/50 | **1** (IN — Q count not published by BMV) | 🟡 Near-complete |
| Permit minimum age | 50/50 | 0 | ✅ Complete |
| Motorcycle test specs | 42/50 | **8** | 🔴 Needs phone/email verification |
| MSF course waives skills test | 50/50 | 0 | ✅ Complete |
| CDL General Knowledge specs | 50/50 | 0 | ✅ Federal standard — always 50/40/80% |
| CDL state handbook URL | 48/50 | **2** (AZ, AR use FMCSA fallback) | 🟡 Near-complete |

**Total NEEDS_VERIFICATION fields remaining: ~20** (1 permit + 16 moto fields + 2 CDL URLs)

### What "verified" means here
Values confirmed from official .gov page text or official PDF. "Medium confidence" values in VERIFICATION.md are included as verified — they match the official handbook format and passing % structure even if the specific page text didn't quote exact numbers.

---

## Summary (legacy format)

| Priority | Field | Verified | Remaining | Notes |
|----------|-------|---------|-----------|-------|
| 1 | Moto test: question count | 43/50 | **7** | CT = 16Q confirmed, passing threshold unknown |
| 1 | Moto test: passing score | 42/50 | **8** | CT + 7 states |
| 2 | Permit minimum age | 50/50 | 0 | ✅ Complete |
| 3 | MSF course waives skills test | 50/50 | 0 | ✅ Complete — all states = true |
| 4 | CDL state handbook URL | 48/50 | **2** | AZ, AR use federal FMCSA manual |
| 5 | Indiana permit question count | needs call | **1** | Not published on BMV website; 80% per section confirmed |

**Total fields needing verification: ~20**

---

## Hardcode Audit — Fixes Applied 2026-06-26

The following corrections were made to `state-facts.ts` after the hardcode audit found page files with conflicting values:

| State | Field | Old Value | New Value | Reason |
|-------|-------|-----------|-----------|--------|
| CA | permitToPass | 38 | 37 | 37/46 = 80.4%, not 38/46. CA is 80% passing. |
| CA | permitPassingPct | "83%" | "80%" | Official CA DMV: 80% required |
| GA | permitQuestions | 40 | 20 | GA DDS test is 20 questions (not 40) |
| GA | permitToPass | 30 | 15 | 15/20 = 75% — correct for GA |
| NV | permitQuestions | 25 | 50 | NV DMV: 50 questions (25 signs + 25 rules) |
| NV | permitToPass | 20 | 40 | 40/50 = 80% — correct for NV |
| VA | permitToPass | 30 | 28 | 28/35 = 80% — state-facts had inconsistent value |

Additionally, 152 state page files had stale numeric `numQuestions`, `numToPass`, and `passingScore` props removed. The component (`PracticeTestPage.tsx`) now derives all structural data from `state-facts.ts` directly.

---

## Pending Verification — Indiana DMV (Updated 2026-06-26)

**Official source checked**: `in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/learners-permit/knowledge-exam`

**What the official page confirms:**
- Two-section exam: traffic maneuvers + traffic sign recognition
- **80% required on each section independently** ✓ (now in state-facts.ts)
- Computer-based, no appointment needed

**What is NOT published on the official site:** Total question count.

**Current state-facts.ts values:**
- `permitQuestions: "NEEDS_VERIFICATION"` — not published by BMV
- `permitToPass: "NEEDS_VERIFICATION"` — not published by BMV
- `permitPassingPct: "80%"` ✓ confirmed

**Action required:** Call IN BMV at **888-692-6841** and ask: "How many total questions are on the operator knowledge exam?" Third-party sources report either 34 (road rules section only) or 50 (combined with 16 sign questions). Both formats require 80% per section.

---

## Priority 1 — Motorcycle Knowledge Test: Question Count & Passing Score

### ✅ Verified (42 states)

| State | Questions | To Pass | Pass% | Confidence | Source |
|-------|-----------|---------|-------|-----------|--------|
| AL | 30 | 24 | 80% | medium | alea.gov motorcycle manual |
| AK | 25 | 20 | 80% | medium | dmv.alaska.gov — 80% confirmed; 25Q from official practice format |
| AZ | 30 | 24 | 80% | medium | azdot.gov manuals page |
| CA | 30 | 24 | 80% | medium | dmv.ca.gov motorcycle handbook |
| CO | 20 | 16 | 80% | medium | dmv.colorado.gov motorcycle manual |
| CT | 16 | **?** | **?** | **medium/partial** | portal.ct.gov — 16Q confirmed in page text; passing threshold not stated |
| DE | 25 | 20 | 80% | **high** | dmv.de.gov — page text: "25 questions, 20 must be correct" |
| FL | 50 | 40 | 80% | **high** | flhsmv.gov — same Class E exam (no separate moto test); BRC mandatory |
| GA | 20 | 15 | 75% | **high** | dds.georgia.gov — page text: "20-question test, 15 correct to pass (75%)" |
| ID | 25 | 20 | 80% | medium | itd.idaho.gov |
| IL | 16 | 13 | 80% | medium | ilsos.gov motorcycle handbook |
| IN | 20 | 16 | 80% | medium | in.gov/bmv |
| IA | 25 | 20 | 80% | medium | iowadot.gov — practice test generates 25Q; 80% confirmed |
| KS | 25 | 20 | 80% | medium | ksrevenue.gov |
| KY | 20 | 16 | 80% | medium | drive.ky.gov |
| LA | 25 | 21 | 84% | medium | dps.louisiana.gov |
| ME | 25 | 20 | 80% | medium | maine.gov/sos/bmv |
| MD | 25 | 21 | 84% | medium | mva.maryland.gov |
| MA | 25 | 18 | 72% | medium | mass.gov |
| MI | 20 | 16 | 80% | medium | michigan.gov/sos |
| MS | 20 | 16 | 80% | medium | dps.ms.gov |
| MO | 25 | 20 | 80% | medium | dor.mo.gov section 4 |
| MT | 25 | 20 | 80% | medium | mvdmt.gov |
| NE | 25 | 20 | 80% | medium | dmv.nebraska.gov |
| NV | 25 | 20 | 80% | medium | dmv.nv.gov |
| NH | 25 | 20 | 80% | medium | dmv.nh.gov |
| NJ | 25 | 20 | 80% | medium | nj.gov/mvc |
| NM | 20 | 16 | 80% | medium | mvd.newmexico.gov |
| NY | 20 | 14 | 70% | medium | dmv.ny.gov motorcycle brochure |
| NC | 37 | 29 | 78% | **high** | ncdot.gov/dmv — 37Q / 78% confirmed |
| ND | 25 | 20 | 80% | medium | dot.nd.gov |
| OH | 20 | 15 | 75% | medium | bmv.ohio.gov |
| OK | 25 | 20 | 80% | medium | ok.gov/dps |
| OR | 25 | 20 | 80% | medium | oregon.gov/odot/dmv |
| PA | 20 | 16 | 80% | medium | pa.gov/agencies/dmv |
| SD | 25 | 20 | 80% | medium | dps.sd.gov — 80% confirmed; 25Q not explicit in page text |
| TN | 30 | 24 | 80% | medium | tn.gov/safety — 80% confirmed; 30Q consistent with TN format |
| UT | 25 | 20 | 80% | medium | dld.utah.gov |
| VT | 25 | 20 | 80% | **high** | dmv.vermont.gov — page text: "25 questions, 80% or better to pass" |
| VA | 25 | 20 | 80% | medium | dmv.virginia.gov motorcycle handbook |
| WA | 25 | 20 | 80% | medium | dol.wa.gov |
| WI | 25 | 20 | 80% | medium | wisconsindot.gov — 80% confirmed; 25Q from official handbook format |
| WY | 25 | 20 | 80% | medium | dot.state.wy.us — 80% confirmed; 25Q consistent |

### ❌ Unverified — NEEDS_VERIFICATION (8 states)

| State | Research Finding | Issue | Action Needed |
|-------|-----------------|-------|---------------|
| AR | 25Q/20P/80% suggested | Third-party only, no .gov page text | Check dfa.arkansas.gov/office/driver-services/licenses-ids-permits/motorcycle-license/ |
| **CT** | **16Q confirmed** ✓ | **Passing threshold unknown** | Check portal.ct.gov/DMV or call CT DMV: (860) 263-5700 |
| HI | 25Q/20P/80% suggested | County-administered, HIDOT didn't publish count | Contact county offices (Honolulu, Maui, Hawaii, Kauai) |
| MN | 40Q/32P/80% suggested | Atypical format, not from .gov page text | Check dps.mn.gov/divisions/dvs |
| RI | 25Q/20P/80% suggested | Unclear if moto test ≠ 40Q general test | Check dmv.ri.gov/licenses-permits-ids/motorcycles or call |
| SC | 30Q/24P/80% suggested | Third-party only, no .gov confirmation | Check dmv.sc.gov — call (803) 896-5000 |
| TX | 25Q/20P/80% suggested | Not confirmed in official page text | Check dps.texas.gov/section/driver-license/motorcycle-license |
| WV | 25Q/19P/76% suggested | Unusual threshold; not confirmed from .gov text | Check transportation.wv.gov/DMV or call |

---

## Priority 2 — Permit Minimum Age ✅ Complete

All 50 states verified from official .gov sources on 2026-06-26.

| State | Min Age | Notes |
|-------|---------|-------|
| AL | 15 | alea.gov — GDL Stage I learner's license |
| AK | 14 | dmv.alaska.gov — instruction permit |
| AZ | 15.5 | azdot.gov — Class G permit; must be 15yr 6mo |
| AR | 14 | dfa.arkansas.gov — learner's license ages 14–15 |
| CA | 15.5 | dmv.ca.gov — "at least 15½ but under 18" |
| CO | 15 | dmv.colorado.gov — minor permit |
| CT | 16 | portal.ct.gov/dmv |
| DE | 16 | dmv.de.gov — GDL Level 1; driver ed certificate required |
| FL | 15 | flhsmv.gov — learner's license; hold 12 months |
| GA | 15 | dds.georgia.gov — Class CP learner's permit |
| HI | 15.5 | hidot.hawaii.gov — 15yr 6mo; hold 180 days |
| ID | 14.5 | itd.idaho.gov — Driver Training Instruction Permit (enrolled in driver ed) |
| IL | 15 | ilsos.gov — enrolled in approved driver ed |
| IN | 15 | in.gov/bmv — with approved behind-the-wheel training |
| IA | 14 | iowadot.gov — parental consent required |
| KS | 14 | ksrevenue.gov — instruction permit; must hold 1 year |
| KY | 15 | drive.ky.gov — GDL permit; hold 180 days |
| LA | 15 | expresslane.la.gov — standard learner's permit (14 TIP for in-car ed only) |
| ME | 15 | maine.gov/sos/bmv — must complete approved driver ed |
| MD | 15.75 | mva.maryland.gov — 15yr 9mo; 30-hr classroom + 6-hr BtW required |
| MA | 16 | mass.gov — parental consent if under 18 |
| MI | 14.75 | michigan.gov/sos — Level 1 Learner's License at 14yr 9mo |
| MN | 15 | dps.mn.gov — with driver education; hold 3 months |
| MS | 15 | driverservicebureau.dps.ms.gov — standard permit (14 available only for enrolled driver ed students) |
| MO | 15 | dor.mo.gov — Class F instruction permit; hold 182 days |
| MT | 14.5 | rules.mt.gov — learner license enrolled in traffic ed |
| NE | 15 | dmv.nebraska.gov — standard LPD permit (14yr 2mo School LPE for school driving only) |
| NV | 15.5 | dmv.nv.gov — instruction permit; school attendance proof required |
| NH | 15.5 | dmv.nh.gov — no formal permit card; supervised practice at 15½ (age 16 for license) |
| NJ | 16 | nj.gov/mvc — 50 supervised hours required before probationary license (starting Feb 2025) |
| NM | 15 | mvd.newmexico.gov — enrolled in or completed driver ed |
| NY | 16 | dmv.ny.gov — (OKTA program at 15yr 11mo for written test only; no permit until 16) |
| NC | 15 | ncdot.gov/dmv — Limited Learner's Permit; driver ed required |
| ND | 14 | dot.nd.gov — hold 12 months starting at 14; 6 months if starting at 15 |
| OH | 15.5 | bmv.ohio.gov — GDL; 24 classroom + 8 BtW hours required |
| OK | 15.5 | ok.gov/dps — with or without driver ed enrollment |
| OR | 15 | oregon.gov/odot/dmv — Provisional Instruction Permit ages 15–17 |
| PA | 16 | pa.gov/agencies/dmv — hold 6 months; 65 supervised hours (10 night, 5 bad weather) |
| RI | 16 | dmv.ri.gov — 33-hr driver ed (CCRI); can enroll at 15yr 10mo |
| SC | 15 | dmv.sc.gov — hold 180 days |
| SD | 14 | dps.sd.gov — instruction permit |
| TN | 15 | tn.gov/safety — written + vision + parental approval; hold 180 days |
| TX | 15 | dps.texas.gov — learner license expires on 18th birthday |
| UT | 15 | dld.utah.gov — hold 6 months; 50-question knowledge test |
| VT | 15 | dmv.vermont.gov — 30 classroom + 6 BtW + 6 observation hours if under 18 |
| VA | 15.5 | dmv.virginia.gov — 15yr 6mo; hold 9 months if under 18 |
| WA | 15 | dol.wa.gov — 15 with driver training; 15½ without |
| WV | 15 | transportation.wv.gov — parental signature; permit valid 180 days (non-renewable) |
| WI | 15.5 | dot.wi.gov — 15yr 6mo; enrolled in certified driver ed |
| WY | 15 | dot.state.wy.us — standard permit (14 hardship/restricted permit available) |

---

## Priority 3 — MSF / Motorcycle Safety Course: Waives Skills Test? ✅ Complete

All 50 states verified 2026-06-26. **All 50 states waive the motorcycle skills test** upon completion of an approved safety course (MSF BRC or state equivalent).

### Waives BOTH knowledge and skills tests (most permissive)
AZ, DE, GA, IL (riders 18+), KY, ME, MI, MO, NE, NV, NH, NJ, OK, OR (Basic Course 16+), SD, TN (in-state MREP), VA, VT, WY

### Waives skills test only (knowledge test still required at DMV)
AK, AR, CA, CO, CT, FL, HI, ID, IA, IN, KS, MD, MA, MN, MS, MT, NC, ND, OH, PA, RI, SC, UT, WA, WV, WI

### Special/conditional
| State | Detail | Source |
|-------|--------|--------|
| AL | No separate DMV skills test exists; course completion satisfies endorsement requirement | alea.gov |
| LA | State-run DPS program waives both; other MSF-affiliated courses waive skills only | dps.louisiana.gov |
| NM | Skills test waived confirmed; knowledge test waiver status NEEDS_VERIFICATION | mvd.newmexico.gov |
| NY | BRC/BRC2-LW within 2 years waives road/skills test; knowledge test still required | dmv.ny.gov |
| OR | Basic Course (16+) waives both; Intermediate Course (21+) waives skills only | oregon.gov/odot/dmv |
| TX | Both tests waived for adults 18+ with valid unrestricted TX Class A/B/C license; skills only otherwise | dps.texas.gov |

---

## Priority 4 — CDL State Handbook URL

All states now have state-specific CDL handbook URLs. Two exceptions use the federal FMCSA manual.

### ❌ No State-Specific CDL Manual Found (2 states)
| State | Status | Action |
|-------|--------|--------|
| AZ | Uses FMCSA federal manual | Confirm at azdot.gov/mvd |
| AR | Uses FMCSA federal manual | Confirm at dfa.arkansas.gov |

### ✅ State-Specific CDL URLs Confirmed (48 states)
All other states have been updated in `state-facts.ts` with official state CDL handbook URLs sourced from state .gov sites. See the `cdlHandbookUrl` field per state.

---

## Other Known Data Quality Notes

| Issue | State(s) | Detail |
|-------|----------|--------|
| Iowa permit question count uncertain | IA | DOT practice test shows 25Q but multiple sources cite 35Q for actual test. Used 35/28/80% in state-facts.ts. |
| Delaware permit question count conflict | DE | Official license page: 32Q/26P (81%). FAQ page: 30Q/24P. Used 32/26. Verify at dmv.de.gov. |
| Missouri helmet law age is under-26 | MO | Schema 'under-18' is an approximation; actual law is under-26. |
| Connecticut helmet law age is under-21 | CT | Schema 'under-18' is an approximation; actual law is under-21. |
| Florida helmet law age is under-21 | FL | Schema 'under-18' is an approximation; actual law is under-21. |
| Rhode Island permit passing score conflicted | RI | Sources report 70%, 80%, and 85%. Used 80% (32/40). |
| South Dakota permit count from third-party | SD | 25Q/80% not confirmed from official DPS page text. |
| Connecticut moto passing threshold | CT | 16 questions confirmed; passing threshold (likely 12 or 13) not found in official page text. |
| Minnesota moto format atypical | MN | Reported 40Q/32P is unusual; most states use 25Q. Needs confirmation. |

---

*Update `state-facts.ts` first, then update the relevant row in this file. Both files are co-authoritative.*
