# BUD — PO Amendment & Financial Integrity | Test Protocol

**Date:** 2026-10-20  
**Baseline:** BUD Management Reporting v0.7 — PO Aligned (fictional data)  
**Status:** TEST PROTOCOL READY; **new tests NOT RUN**. Earlier 2026-10-16 simulated checks are historical evidence, not re-executed here.

## Control boundary
The administrative model starts with a **customer-approved PO** and its **approved amendments**. Sales owns pre-award quotations. An ERP remains the source of truth for customer PO authorization, supplier PO, receipts, invoices, and recognized costs. A workbook may flag discrepancies but cannot prove approval without documentary evidence.

## Test data contract
Use fictional identifiers and versioned snapshots: `Project_ID`, `Customer_PO_ID`, `Amendment_ID`, `Approval_Reference`, `Approval_Date`, `Approved_Qty`, `Approved_Unit_Price`, `Selling_Entity`, `Currency`, `Supplier_PO_ID`, `Receipt_ID`, `Invoice_ID`, `ERP_Cost_Entry_ID`, `As_Of_Date`. Document grain and source of each value; never count a revised total and the delta as separate order intake.

## Deterministic acceptance cases
| ID | Input / mutation | Expected outcome | Execution |
|---|---|---|---|
| PO-01 | Approved customer PO 10 units × $100 | Authorized value $1,000 | NOT RUN |
| PO-02 | Approved amendment raises total to 12 units at $100 | Net amendment +$200; current authorized value $1,200; original value retained | NOT RUN |
| PO-03 | Approved amendment reduces total from 12 to 9 units | Net amendment −$300; authorized value $900; no double-count | NOT RUN |
| PO-04 | Unapproved request to increase 9 to 15 | Authorized value stays $900; exception and evidence request | NOT RUN |
| PO-05 | Supplier PO 20 units; receipt 12 units | Outstanding supplier quantity 8; receipt quantity 12; no invented delivery | NOT RUN |
| PO-06 | Deliver 12 units, invoice 10 units | Invoice quantity ≤ delivered quantity; remaining delivered-not-invoiced 2 | NOT RUN |
| PO-07 | Duplicate receipt ID or invoice ID | Flag duplicate; exclude double-count from validated totals | NOT RUN |
| FIN-01 | Paid investment $400; month-end unpaid exposure $250; recognized ERP cost $520 | Three distinct metrics; **not** $1,170 total project cost | NOT RUN |
| FIN-02 | Change payment status from unpaid to paid, no new cost entry | Paid and unpaid categories update; recognized ERP cost unchanged unless ERP records change | NOT RUN |
| FIN-03 | Project invoices $1,000, recognized cost $600 in different recognition periods | Do not label $400 definitive profit; timing caveat persists | NOT RUN |
| FIN-04 | MX project purchased through US entity | MX project uses MX-side ERP purchase/import cost; US external purchase not counted again in MX project | NOT RUN |
| FIN-05 | Missing FX rate or policy for MXN transaction | Flag unresolved FX; do not silently convert or present comparable USD totals | NOT RUN |
| FIN-06 | Approved PO amount lower than invoiced amount | Flag commercial exception; no auto-adjustment of PO authorization | NOT RUN |

## Test execution evidence template
For each case record: workbook filename and SHA; sheet/cell inputs; pre-change value; change; expected result; observed value; PASS/FAIL/BLOCKED; Excel/calculation engine and version; tester; timestamp; screenshots or nonconfidential formula references; issue ID if failed.

## Release gate
Do not label the v0.7 workbook as newly validated until these cases are actually executed and their observations recorded. An approved amendment must carry an external approval reference, not merely a changed number in a spreadsheet. Currency normalization requires an explicit FX policy.

## Architecture follow-up
Prepare `FactPOAmendment` at amendment-event grain; `FactSupplierReceipt` at receipt-line grain; `FactProjectMonthlyActivity` at project-month grain; `DimProject`, `DimDate`, and currency metadata. Avoid joining multiple one-to-many facts directly without controlled aggregation.
