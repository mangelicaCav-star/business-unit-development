# BUD — Validation status and evidence boundary | 2026-10-20

**Scope:** fictional local v0.7.1 corrective workbooks. **Published GitHub workbook:** v0.7 PO Aligned, unchanged. **Latest local corrective workbook:** `BUD_Management_Reporting_v0_7_1_FX_Reporting_Corrected_LOCAL.xlsx`, not published.

## Verified behavior by environment

| Test | Excel 365 desktop (prior corrective draft) | Local automated regression (latest FX-corrected copy) | Control demonstrated |
|---|---|---|---|
| PO-02 | PASS | Earlier scenario checks | Approved +500 delta updates authorized project value |
| PO-04 | PASS | Earlier scenario checks | Pending delta does not change authorized value |
| FIN-05 | PASS | Earlier scenario checks | FX HOLD when approval metadata missing |
| FIN-06 | PASS | Earlier scenario checks | Invoice exceeding authorized PO flagged |
| CONS-01 | PASS | PASS | Monthly invoice changes propagate to consolidated reports |
| CONS-02 | PASS | PASS | MX/USA illustrative reconciliation |
| CONS-03A | Not run on latest copy | PASS (reported) | FX pending warning in consolidated reporting |
| CONS-03B | Not run on latest copy | PASS (reported) | Warning changes with simulated FX approval |
| CONS-03C | Not run on latest copy | PASS (reported) | Source amounts preserved |
| CONS-03D | Not run on latest copy | PASS (reported) | Unaffected groups remain correct |
| CONS-03E | Not run on latest copy | PASS (reported) | Reconciliation under simulated approval |

**Evidence boundary:** the seven local consolidated tests were reported PASS in the local test environment; the latest FX-corrected workbook has **not** undergone a complete Microsoft Excel 365 desktop regression. Earlier desktop results concern a prior corrective draft. No tests use production ERP records or authenticated customer/FX approvals. Local regression artifact: `BUD_v0_7_1_Consolidated_Regression_2026-10-20.xlsx` (not uploaded to repository).

## Defect and resolution
**BUD-071-FX-01:** original CONS-03 failed: `Project Control` showed `FX HOLD` but consolidated reports still showed amounts without a warning. The local corrective copy adds FX status and warning propagation through `Monthly Project Activity`, `Monthly BU Close`, `Monthly Trend`, and `BU Entity Matrix`. **Local automated PASS; Excel 365 confirmation deferred.**

## Limitations and blocked controls
- PO/FX approval references are manual metadata, not independently authenticated approval.
- Illustrative USD amounts are pre-normalized; real FX policy, source rate, conversion effective date, and ERP reconciliation are not implemented.
- **PO-05:** receipt-line quantities; **PO-06:** delivery versus invoice quantities; **PO-07:** duplicate transaction IDs; **FIN-04:** intercompany transaction matching — all **BLOCKED** by absent transaction-grain source data.
- No live ERP integration, production Power BI, independently audited financial figures, or intercompany elimination engine.
- Paid investment, unpaid exposure, and ERP-recognized cost are non-additive metrics; invoice less recognized cost is timing-sensitive, not definitive profit.

## Future functionality (not implemented)
1. Versioned PO amendments with externally verified approval evidence.
2. Supplier PO/receipt/delivery/invoice line data and duplicate prevention.
3. Approved FX policy with currency lineage and ERP reconciliation.
4. Controlled intercompany matching and cost treatment.
5. Governed production pipeline and Power BI reporting.

## Release decision
**BUD sprint provisionally closed for portfolio documentation only.** Deferred Excel 365 regression is explicitly accepted for now; it is not a PASS. The corrected v0.7.1 workbook remains local and unpublished. This documentation update does not promote the published v0.7 workbook or claim production readiness.
