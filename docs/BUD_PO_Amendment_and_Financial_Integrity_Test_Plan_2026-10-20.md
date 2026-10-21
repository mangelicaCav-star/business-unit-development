# BUD — PO Amendment & Financial Integrity | Test Protocol

**Date:** 2026-10-20  
**Baseline:** BUD Management Reporting v0.7 — PO Aligned (fictional data)  
**Status:** Protocol initially published with NOT RUN cases; updated execution status below applies to **local v0.7.1 corrective drafts only**, not published v0.7. Earlier 2026-10-16 simulated checks are historical evidence.

## Control boundary
The administrative model starts with a **customer-approved PO** and its **approved amendments**. Sales owns pre-award quotations. An ERP remains the source of truth for customer PO authorization, supplier PO, receipts, invoices, and recognized costs. A workbook may flag discrepancies but cannot prove approval without documentary evidence.

## Test data contract
Use fictional identifiers and versioned snapshots: `Project_ID`, `Customer_PO_ID`, `Amendment_ID`, `Approval_Reference`, `Approval_Date`, `Approved_Qty`, `Approved_Unit_Price`, `Selling_Entity`, `Currency`, `Supplier_PO_ID`, `Receipt_ID`, `Invoice_ID`, `ERP_Cost_Entry_ID`, `As_Of_Date`. Document grain and source of each value; never count a revised total and the delta as separate order intake.

## Deterministic acceptance cases
| ID | Input / mutation | Expected outcome | Execution |
|---|---|---|---|
| PO-01 | Approved customer PO 10 units × $100 | Authorized value $1,000 | See execution status below |
| PO-02 | Approved amendment raises total to 12 units at $100 | Net amendment +$200; current authorized value $1,200; original value retained | See execution status below |
| PO-03 | Approved amendment reduces total from 12 to 9 units | Net amendment −$300; authorized value $900; no double-count | See execution status below |
| PO-04 | Unapproved request to increase 9 to 15 | Authorized value stays $900; exception and evidence request | See execution status below |
| PO-05 | Supplier PO 20 units; receipt 12 units | Outstanding supplier quantity 8; receipt quantity 12; no invented delivery | See execution status below |
| PO-06 | Deliver 12 units, invoice 10 units | Invoice quantity ≤ delivered quantity; remaining delivered-not-invoiced 2 | See execution status below |
| PO-07 | Duplicate receipt ID or invoice ID | Flag duplicate; exclude double-count from validated totals | See execution status below |
| FIN-01 | Paid investment $400; month-end unpaid exposure $250; recognized ERP cost $520 | Three distinct metrics; **not** $1,170 total project cost | See execution status below |
| FIN-02 | Change payment status from unpaid to paid, no new cost entry | Paid and unpaid categories update; recognized ERP cost unchanged unless ERP records change | See execution status below |
| FIN-03 | Project invoices $1,000, recognized cost $600 in different recognition periods | Do not label $400 definitive profit; timing caveat persists | See execution status below |
| FIN-04 | MX project purchased through US entity | MX project uses MX-side ERP purchase/import cost; US external purchase not counted again in MX project | See execution status below |
| FIN-05 | Missing FX rate or policy for MXN transaction | Flag unresolved FX; do not silently convert or present comparable USD totals | See execution status below |
| FIN-06 | Approved PO amount lower than invoiced amount | Flag commercial exception; no auto-adjustment of PO authorization | See execution status below |

## Test execution evidence template
For each case record: workbook filename and SHA; sheet/cell inputs; pre-change value; change; expected result; observed value; PASS/FAIL/BLOCKED; Excel/calculation engine and version; tester; timestamp; screenshots or nonconfidential formula references; issue ID if failed.

## Release gate
Do not label the published v0.7 workbook as newly validated based on local v0.7.1 testing. Record evidence by workbook version and execution environment. An approved amendment must carry an external approval reference, not merely a changed number in a spreadsheet. Currency normalization requires an explicit FX policy.

## Architecture follow-up
Prepare `FactPOAmendment` at amendment-event grain; `FactSupplierReceipt` at receipt-line grain; `FactProjectMonthlyActivity` at project-month grain; `DimProject`, `DimDate`, and currency metadata. Avoid joining multiple one-to-many facts directly without controlled aggregation.

## Execution status update — 2026-10-20

| Test | Latest recorded outcome | Evidence boundary |
|---|---|---|
| PO-01 | Not separately confirmed | No standalone claim |
| PO-02 | PASS — Excel 365 | Approved +500 delta; local corrective draft |
| PO-03 | BLOCKED | Versioned amendment-event chain not implemented |
| PO-04 | PASS — Excel 365 | Pending delta excluded; local corrective draft |
| PO-05 | BLOCKED | No receipt-line source |
| PO-06 | BLOCKED | No linked delivery/invoice quantities |
| PO-07 | BLOCKED | No unique receipt/invoice transaction IDs |
| FIN-01–03 | No new standalone manual confirmation | Business semantics documented, not audited |
| FIN-04 | BLOCKED | No transaction-level intercompany matching |
| FIN-05 | PASS — Excel 365 | FX HOLD / metadata gating; not a real FX approval |
| FIN-06 | PASS — Excel 365 | Invoice above PO exception |

**Added reporting tests:** CONS-01 and CONS-02 PASS in Excel 365 on a prior local corrective draft and PASS in local automated regression on the latest FX-corrected workbook. CONS-03A–E PASS in local automated regression only; Excel 365 confirmation deferred. See [validation status](BUD_Validation_Status_2026-10-20.md).

**Open limitations:** approvals are manual metadata, FX rates/policy and ERP reconciliation are not verified, and the corrected v0.7.1 workbook is not published. **Future functionality:** versioned PO approvals, receipt/delivery/invoice line controls, duplicate detection, real FX policy and intercompany matching. These are not implemented.
