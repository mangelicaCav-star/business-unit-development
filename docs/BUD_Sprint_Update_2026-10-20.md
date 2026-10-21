# BUD — Sprint closeout | 2026-10-20

## Objective
Improve auditability of post-approved-customer-PO administration, PO amendment controls, FX exception handling and consolidated reporting in a **fictional portfolio prototype**.

## Plan versus actual
| Planned | Actual | Disposition |
|---|---|---|
| Define deterministic PO and financial tests | 13-case protocol created | COMPLETE |
| Test PO authorization | PO-02 and PO-04 PASS in Excel 365 on local corrective draft | SELECTED CONTROLS PASS |
| Test financial exceptions | FIN-05 and FIN-06 PASS in Excel 365 on local corrective draft | SELECTED CONTROLS PASS |
| Check monthly consolidation | CONS-01 and CONS-02 PASS in Excel 365 on earlier corrective draft | PASS, EARLIER DRAFT |
| Check FX reporting integrity | Original CONS-03 FAIL: reports lacked FX warning despite FX HOLD | DEFECT IDENTIFIED |
| Correct FX warning propagation | Local FX-corrected v0.7.1 workbook created; CONS-03A–E local automated PASS reported | PROVISIONAL; EXCEL 365 DEFERRED |
| Repeat consolidated regression | CONS-01/02 + CONS-03A–E: seven local automated PASS reported | PROVISIONAL |
| Publish corrected workbook | Not performed | CORRECTIVE FILE REMAINS LOCAL |

## Verified controls and evidence
The published GitHub workbook is **v0.7 PO Aligned** and remains unchanged. Later test results apply to **local v0.7.1 corrective workbooks only**. Manual Excel 365 checks on an earlier corrective draft and local automated checks on the latest FX-corrected workbook are different evidence levels. Neither verifies customer authorization, an approved FX policy or actual ERP financial data. See [validation matrix](BUD_Validation_Status_2026-10-20.md).

## Open limitations
- Latest FX-corrected workbook has **not** undergone full Excel 365 desktop regression; deferred by decision, not counted as PASS.
- PO and FX approvals are manual metadata; no authenticated documents, real exchange-rate policy, or ERP reconciliation.
- PO-05, PO-06, PO-07 and FIN-04 remain **BLOCKED** because receipt, delivery, invoice, duplicate-ID and intercompany matching require transaction-level data.
- No production ERP integration, audited financial consolidation, Power BI deployment or intercompany elimination.

## Future functionality (not implemented)
Versioned approved PO amendments; transaction-line receipt/delivery/invoice controls; duplicate prevention; real FX source-to-USD lineage and effective-date policy; reconciled intercompany costs; governed BI ingestion.

## Sprint decision
**Provisionally close the BUD prototype sprint for portfolio documentation and move focus to EVOF.** This is not a production release, external financial validation or permission to publish the corrected workbook. Full Excel 365 regression remains a later release gate.
