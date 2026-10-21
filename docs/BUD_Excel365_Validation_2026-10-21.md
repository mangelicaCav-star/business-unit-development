# BUD v0.7.1 — User-reported Excel 365 validation | 2026-10-21

**Workbook:** `BUD_Management_Reporting_v0_7_1_FX_Reporting_Corrected_LOCAL.xlsx`.
**Environment:** Microsoft Excel 365 desktop, as reported by tester. No screenshots, observed values or workbook test copy provided. Results below are user-reported, not independently reproduced.

| Test | Status |
|---|---|
| BU-01: open/recalculate and inspect evaluated areas for formula errors | PASS (reported) |
| BU-02: Project Control FX status | PASS (reported) |
| BU-03: Monthly Project Activity FX status | PASS (reported) |
| BU-04: Monthly BU Close FX warning propagation | PASS (reported) |
| BU-05: Monthly Trend FX warning propagation | PASS (reported) |
| BU-06: BU Entity Matrix FX warning propagation | PASS (reported) |

**Summary:** 6 PASS, 0 FAIL, 0 BLOCKED among the six submitted checks. Tester supplied no observations.

**Disposition:** Excel 365 checks corroborate the corrected FX-warning propagation within tested scenarios, but do not establish full end-to-end release validation. PO-05, PO-06, PO-07 and FIN-04 remain blocked due to missing transaction-grain data; FX approval is simulated metadata, not authenticated. No real ERP/finance reconciliation. Production release not approved.

**EVOF is a separate project:** EV-01 through EV-07 were all NOT RUN in Excel 365; earlier 13/13 local checks do not replace desktop validation.

## Confirmation — 2026-10-21

The tester resubmitted the complete combined Excel 365 checklist, confirming **BU-01 through BU-06: 6/6 PASS** with no observations. No additional BUD defects reported. The corrected FX status/warning behavior is accepted for these six tested scenarios; blocked transaction-grain controls and real finance/ERP reconciliation remain outside the acceptance scope. No independent Excel 365 run or screenshots supplied.
