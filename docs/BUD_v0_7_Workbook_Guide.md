# BUD v0.7 — Workbook Guide and Reporting Methodology

## Purpose
Demonstrate an internal, ERP-aligned project management and monthly reporting model. It is **not** an accounting system, statutory financial statement model, or live ERP integration.

## Workbook
`BUD_Management_Reporting_v0_7_PO_Aligned (1).xlsx` — current 20-sheet workbook; fictional customers, projects and financial amounts. The 21-sheet `BUD_Management_Reporting_v0_7_review (1).xlsx` is retained as a historical prototype.

## Suggested walkthrough
1. Start with **Guide**, **Settings** and **Reporting Methodology**.
2. Review **Project History** for the ERP-assigned Project ID, customer, BU, brand and selling entity.
3. Establish the approved **Customer PO** and approved amendments as the authorized commercial baseline. The current workbook replaces the legacy pre-award control with **PO Value & Cost Control**; do not use quotation metrics for management KPIs.
4. Review **ERP Snapshot**, **Project Control** and **Exceptions** for weekly project management.
5. Inspect **Monthly Project Activity** for project-month inputs.
6. Open **Monthly BU Close** and **Monthly Brand Detail** to see groupings.
7. On **Management Report**, choose a sample period in B2, then review **Monthly Trend** and **BU Entity Matrix**.

## Scope correction — 16 October 2026
BUD administrative monitoring starts only after an approved customer PO is received. Sales owns prospecting, quotations, pricing proposals, negotiations, and pre-award margin analysis. Administrative reporting must use authorized PO value and amendments, invoices, ERP-recognized cost, paid disbursements and unpaid exposure. PO value is not invoicing or realized profit. The current PO-aligned workbook removes the legacy quotation register and replaces the pre-award pricing sheet; the historical workbook retains them.

## Definitions
- **Order intake:** customer POs received plus net approved revisions in the reporting month; not invoicing.
- **Invoicing:** customer invoices issued in the reporting month.
- **Investment 1:** paid disbursements in the period.
- **Investment 2:** unpaid exposure at month end, a balance rather than a monthly flow.
- **ERP recognized costs:** separately recorded costs; may overlap with paid disbursements.
- **Invoice–cost gap:** timing-sensitive operational indicator, not definitive profitability.

## Boundaries
MX and USA are selling entities, not business units. Brands are a subdivision of the Brands BU, not separate BUs. For MX customer sales purchased through the US entity, the MX-side intercompany purchase is used for MX project cost attribution; do not duplicate the US external supplier purchase.

**Assumptions:** Sample values are already in USD. Actual FX policy, real ERP field mapping, completeness controls and real-data reconciliation remain outside the current prototype.

## Publication note
The current workbook is `BUD_Management_Reporting_v0_7_PO_Aligned (1).xlsx`; `BUD_Management_Reporting_v0_7_review (1).xlsx` remains a historical reference only.

## Functional validation limitation — 16 October 2026
PO-based control was tested with fictional scenarios for an authorized PO value change, partial invoicing, and cost exposure above the PO. These tests assess arithmetic and alert behavior only. **The prototype does not independently verify documentary approval, authenticity, effective date, or authorization trail of a customer PO amendment.** An amended PO amount must therefore be treated as an externally verified input, not evidence that an amendment was approved. A future production design should capture amendment reference, approval status, effective date, source-document link, authorized approver, and an audit trail, and prevent unapproved amendments from changing the reporting baseline. No ERP integration, approval workflow, or real-document audit has been validated.

**Version distinction:** The GitHub-hosted `BUD_Management_Reporting_v0_7_review (1).xlsx` is the earlier 21-sheet prototype. The revised 20-sheet PO-aligned workbook is published on GitHub as the current version; the two files must not be presented as equivalent.
