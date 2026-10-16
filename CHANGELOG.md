# Changelog

## v0.1 — 2026-10-15
- Initial historical reconstruction and case-study documentation.
- No software or spreadsheet prototype implemented or validated.

## v0.7 PO Aligned — 2026-10-16
- Published `BUD_Management_Reporting_v0_7_PO_Aligned (1).xlsx` as the current 20-sheet fictional management-reporting prototype; retained the original 21-sheet v0.7 review for history.
- Confirmed BUD administration starts at an approved customer PO; Sales owns pre-award quotations, pricing, markup and pre-award margin, which are excluded from BUD operational KPIs.
- Replaced legacy pre-award workbook controls with PO value and cost monitoring; preserved separate authorized PO value, invoicing, paid investment, outstanding exposure and ERP-recognized cost metrics.
- Functional tests reported passed using fictional inputs: approved PO value change, partial invoice update and cost exposure above PO. Scope: arithmetic/alert behavior only; not ERP or audit validation.
- Recorded limitation: workbook does not authenticate or verify documentary approval, dates, approvers or audit trail for PO amendments; these require upstream control and future production workflow.
- Confirmed GitHub upload of PO-aligned workbook, removed an exact duplicate upload, and updated README and guide to distinguish current and historical versions.
- Deferred to future development: Power BI v0.8, ERP integration and reconciliation, amendment approval evidence and FX policy.
