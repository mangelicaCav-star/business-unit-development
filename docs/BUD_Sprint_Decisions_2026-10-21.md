# BUD — Sprint decision log (2026-10-21)

**Status:** Design decisions agreed; implementation and full Excel 365 regression pending. This document does not certify production readiness.

## Purpose and authority
**BUD-ARCH-01 — ERP as authoritative System of Record.** The ERP is the official source for project identity and lifecycle status, purchase orders, approved budgets, expenses, invoicing, and operational transactions insofar as these are maintained in that ERP. BUD is a complementary management-control and exception-follow-up layer, not a replacement ERP or a second transactional approval system. Actual ERP integration and reconciliation have not been built or verified.

The approved customer PO may be evidence of commercial authorization under company policy. Projects without a customer PO may proceed under documented management authorization where company policy allows. Whether ERP status `OPEN/ACTIVE` itself evidences completed internal approvals depends on actual ERP workflow configuration; **do not assume it without verifying the workflow**.

## Distinct status fields
- **ERP Project Status:** official source status, e.g. OPEN, ON HOLD, CLOSED, CANCELLED; values must be mapped to the actual ERP.
- **BUD Control Status:** derived verification result, e.g. RECONCILED, REVIEW REQUIRED, MISSING EVIDENCE, FX HOLD. This does not override the ERP status.
- **Follow-up Priority:** separate risk/urgency classification with documented triggers and precedence.

A project may legitimately be OPEN in ERP and REVIEW REQUIRED in BUD. Exceptions must retain ownership, evidence, timestamps, and resolution history; an ERP status change alone must not silently clear an unresolved exception.

## PO reconciliation redesign — planned, not implemented
The current `PO Authorization` workbook logic needs revision so it does not require a redundant second approval for ERP-validated projects. Reframe as PO evidence, amendment tracking, and reconciliation, preserving original-currency amounts and independently identifying conversion/FX status. Identify missing project mappings and avoid turning missing values into zero or `FULLY INVOICED`. Pending/approved/rejected amendments must follow documented ERP/company authorization rules. The ERP value, authorized baseline, amendment evidence, and variance should be separately traceable.

## Project closure and budget
Operational completion checks: 100% received, 100% delivered/accepted as applicable, and 100% invoiced **against the final approved scope**, with documented exceptions for authorized partial closure or cancellation. Financial closure requires cost/commitment reconciliation; administrative closure requires appropriate confirmation. `READY TO CLOSE` is a BUD verification result; official `CLOSED` remains an ERP status. If ERP says CLOSED but BUD checks fail, flag the discrepancy rather than changing ERP.

100% budget utilization is **not inherently a warning** for an officially closed, reconciled project. Under-budget completion is valid; overspend may require a separate variance/approval review. Budget exposure (recognized costs plus open commitments) is distinct from cash paid or actual budget spent. Any other unresolved compliance or reconciliation alert remains visible regardless of closure.

## Functional validation and limitations
User confirmed in Excel 365 desktop that allowed-value dropdown selection and color alerts for priority/exceptions operate in the **local capture-testing copy**. This is not an end-to-end regression. During synthetic-data testing, missing PO authorization mappings, missing-versus-zero invoice treatment, potentially misleading FULLY INVOICED status, exception counting, and FX status propagation were identified as items requiring review/correction. A Copilot-generated five-minute summary was evaluated as an exploratory second-pass audit, **not an independently certified financial audit**; its static narrative may become stale.

The local capture-testing copy and fictional scenarios are **not published as the current GitHub workbook**. The published v0.7.1 FX-corrected workbook remains the repository baseline; full desktop Excel 365 regression of that final corrective version is still deferred. No real ERP data or production authorization evidence has been verified.

## Planned delivery — v0.7.2 (not released)
1. ERP source field mapping, authority and project coverage checks; PO reconciliation and amendment rules.
2. Separate ERP status, BUD control status, and follow-up priority; correct missing/null and invoicing classification.
3. Closure and budget-alert logic; open exception lifecycle and ownership.
4. Regression scenarios with expected/actual outcomes and Excel 365 testing; documentation of controls and unresolved limits.
5. Monthly closing snapshot and export-ready dataset design. Power BI and autonomous agents remain future phases.

**Planning estimate:** 28–49 focused hours for core corrections, controls, and testing; another 7–12 hours for monthly-close dataset design and audit review. These are estimates, not measured time or delivery commitments.

## Change control
This entry documents decisions and outstanding work only. No Excel workbook, formula, source dataset, or Power BI model is changed by this documentation update.
