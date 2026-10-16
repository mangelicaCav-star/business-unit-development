# BUD v0.7 — Workbook Guide and Reporting Methodology

## Purpose
Demonstrate an internal, ERP-aligned project management and monthly reporting model. It is **not** an accounting system, statutory financial statement model, or live ERP integration.

## Workbook
`BUD_Management_Reporting_v0_7_review.xlsx` — 21 worksheets; two illustrative months; fictional customers, projects and financial amounts.

## Suggested walkthrough
1. Start with **Guide**, **Settings** and **Reporting Methodology**.
2. Review **Project History** for the ERP-assigned Project ID, customer, BU, brand and selling entity.
3. Inspect **Quotation Register** and **Pricing & Margin** for brand-specific pre-award commercial decisions.
4. Review **ERP Snapshot**, **Project Control** and **Exceptions** for weekly project management.
5. Inspect **Monthly Project Activity** for project-month inputs.
6. Open **Monthly BU Close** and **Monthly Brand Detail** to see groupings.
7. On **Management Report**, choose a sample period in B2, then review **Monthly Trend** and **BU Entity Matrix**.

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
The documentation can be published independently of the workbook binary. Until the .xlsx is uploaded to the repository, avoid presenting it as a GitHub-hosted downloadable asset.
