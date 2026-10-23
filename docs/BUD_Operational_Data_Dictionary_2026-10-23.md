# BUD operational working snapshot — data dictionary and accepted boundary

**Date:** 2026-10-23. **Artifact:** `workbooks/BUD_Operational_Working_2026-10-23.xlsx`. This supersedes earlier payment/exposure definitions for this working copy only. It does not amend the private simulator or certify a v0.7.2 release.

## Accepted operational premise

BUD covers operational coordination of goods-sale projects after an approved customer PO. The budget includes operating expenses attributable to that project. The owner's mandatory-project-PO policy is a scenario premise, not an independently verified configuration or a universal rule. Budget and supplier PO totals must have the same eligible cost perimeter, currency and tax basis for a complete comparison. A missing PO does not, by itself, classify a cost as financial overhead.

| Measure | Source / field | Meaning and boundary |
|---|---|---|
| Authorized customer sale | ERP Snapshot E; PO Authorization F | Customer PO plus modeled approved amendments; not invoicing |
| Authorized operating budget USD | ERP Snapshot F → Project Control G | Operating budget attributable to the project; completeness relative to supplier POs must be confirmed |
| Supplier PO authorized value USD | ERP Snapshot S → Project Control I | Current authorized value issued in ERP, including completed POs and net approved amendments/cancellations; not only open balances |
| Budget not committed via POs | Project Control J | Budget minus supplier PO authorized value. Full availability only within matching cost coverage |
| Budget committed via POs % | Project Control K | Supplier PO authorized value / positive authorized budget. Missing source stays missing |
| ERP recognized costs | ERP Snapshot G / Monthly Project Activity K | Separately imported source information; not added to supplier PO totals |
| Billing at current snapshot | ERP Snapshot I, original currency D | Current cumulative view; distinct from dated monthly billing |
| Original monthly USD/MXN billing | Management Report rows 32/33; Monthly Trend L/M | Issued invoice amounts grouped by validated Invoice date, in original currency; currencies are not summed together |
| Normalized monthly USD billing | Management Report row 6 | USD invoices plus source-provided normalized USD for MXN, subject to approval metadata; a separate view |
| Customer PO intake | Monthly Project Activity G with period A | Authorized new orders/net revisions in the month; not re-dated to Invoice date |
| Active exception | Exceptions A:K | Project, issue ID, category, priority, Open status, responsibility, action, dates and evidence |

## Invoice Register contract

**Grain:** one ERP invoice/project allocation. **Inputs:** A:K, rows 2:501. **Derived:** L:O. No source invoice records were fabricated for publication.

| Column | Field | Type / rule |
|---|---|---|
| A | ERP Invoice ID | Required ERP identifier |
| B | Project ID (ERP) | Required project identifier, preserving source type |
| C | Invoice date | Required real Excel date; numeric date serial, permitted range and whole day; text dates rejected |
| D | Selling entity | MX or US |
| E | Business Unit | Strategic Services or Brands |
| F | Brand / Line | Brand or N/A |
| G | Original currency | USD or MXN |
| H | Invoice amount original | Numeric allocated amount, with source adjustment sign |
| I | Invoice USD from ERP | Conditional historical USD source amount for MXN normalization; not a current-rate recalculation |
| J | ERP export reference | Required traceable source reference |
| K | ERP invoice status | ISSUED or CANCELLED; cancelled records excluded |
| L | Input validation | Formula status; duplicate key is invoice + project + selling entity |
| M | Invoice month | Derived YYYY-MM from C |
| N | Reportable invoiced USD | Formula; valid source USD or approved normalized USD |
| O | First project/month flag | Formula for monthly unique-project count, not invoice count |

Invoices spanning projects require ERP allocations; repeating their full amount per project is not valid. The model checks the declared key, not the business authenticity of the allocation. Invalid/missing source dates or duplicate keys remain visible in totals; FX HOLD blocks normalized USD but original MXN remains reportable when the underlying inputs are otherwise valid.

## Preservation and retirement

- Monthly Project Activity H is now calculated from dated records. Previous monthly amounts remain in T as date-unverified reference, not fallback billing data.
- Former paid/open-investment inputs remain archived in I/J; former snapshot unrecognized commitments remain archived in H. Active payment metrics and invoice-minus-cost profit-gap displays are retired.
- Invoice month is not a project start date, delivery date, payment date or order-authorization date.
- Snapshot is current. Project History is linked to it, not an immutable store. Monthly values and invoice records preserve periods through source loading; no close-lock feature exists.

## Capacities and unresolved boundaries

Main project/month formulas use rows 2:101. Invoice source formulas use 2:501. PO Authorization has only four prepared project rows (2:5) and links positionally; expansion/reordering requires controlled maintenance. Report grouping rows and the sample B2 dropdown do not expand automatically. Month/year arithmetic was locally checked, but that does not establish native Excel desktop behavior for all expanded configurations.

Real ERP accumulated-total mapping/reconciliation, final FX policy, policy coverage evidence, complete desktop regression, closure readiness and transaction-line receipt/delivery matching remain open. No general-ledger, payment or complete profitability determination is performed.
