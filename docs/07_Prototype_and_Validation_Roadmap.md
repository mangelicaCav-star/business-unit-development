# Prototype and Validation Roadmap

## Operational Management Model — Excel v0.1

An initial **12-sheet simulated Excel prototype** has been created separately from this repository. The workbook is available as a ChatGPT conversation attachment; **the binary .xlsx file has not yet been uploaded to GitHub**.

### Workbook structure
- Guide
- Settings
- Projects
- Budgets (versioned; markup and margin formulas)
- Supplier POs (quantity reconciliation)
- Receipts
- Deliveries
- Invoices (USD/MXN normalization)
- Costs (ERP cost review)
- Exceptions
- Project Control
- Dashboard

### Demonstrated scenarios
Four fictional projects model domestic transactions, US-dollar transactions, scope revisions, partial receipts and disputed ERP costs.

### Implementation limits
- Financial figures are illustrative and not audited.
- Statuses are manually maintained and are not synchronized to an ERP.
- Formula and cross-sheet integration testing is preliminary; a full test report is pending.
- The dashboard is a proposed tool, not a historical management KPI dashboard.

### Next steps
1. Upload the workbook under `prototype/BUD_Operational_Management_Model_v0_1.xlsx`.
2. Validate formula outputs, quantity checks and project state transitions in desktop Excel.
3. Add automated controls and documented test evidence.
4. Update the README to link the workbook after upload.
