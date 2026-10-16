# BUD — Power BI Reporting Roadmap

**Status:** Proposed portfolio extension. No PBIX report or ERP connector has been built.

## Objective
Translate the BUD management-reporting prototype into an interactive executive and operational report while preserving project-level lineage and avoiding double counting.

## Proposed report pages
1. **Executive Overview:** customer PO order intake, invoices, paid investment, month-end outstanding investment and recognized ERP costs.
2. **Business Unit Performance:** Strategic Services and Brands, with out-of-scope units excluded.
3. **MX / USA Operations:** sales by legal selling entity; binational commercial and procurement workflows.
4. **Brand Performance:** configurable manufacturer brands within the Brands BU.
5. **Project Profitability:** authorized customer PO value, invoiced-to-date, recognized cost and project exceptions; distinguish partial from completed projects.
6. **Monthly Trends:** flows over time and separate end-of-month outstanding balances.

## Suggested model
- `FactProjectMonthlyActivity`: project × month, with explicitly named flow and balance measures.
- `DimProject`: official ERP Project ID, customer, BU, brand and selling entity.
- `DimDate`: reporting period.
- Optional lookup dimensions: BU, brand and selling entity.

Use relationships and measures rather than summing already-aggregated Excel reporting sheets. If multiple invoice dates, customer PO amendments or cost events occur within one month, an eventual production model may require transaction-level fact tables rather than relying solely on the illustrative project-month aggregate.

## Measure caveats
- Order intake: new approved customer POs plus net approved revisions in month.
- Invoicing: invoices issued in month.
- Paid investment: disbursement flow in month.
- Outstanding investment: **month-end balance**, never sum over months.
- ERP-recognized cost: separate cost flow; do not add to paid investment.
- Project profitability: compare consistent revenue and cost bases and flag incomplete projects; a monthly invoice-minus-cost difference is not final profit.
- Currency: USD demonstration amounts are assumed normalized; actual FX policy must be agreed before real ERP data is loaded.

## Binational cost attribution
For MX customer sales supplied via the US entity, Mexico's intercompany purchase/import records form the MX project-cost basis. Do not add the original US external supplier purchase again to that MX project. The report is **operational**, not a statutory financial consolidation.

## Validation and confidentiality
Use fictional data in the portfolio. A real deployment would require source-to-target mapping, refresh controls, month-end snapshots, reconciliation, access permissions and anonymization. No verified ERP integration or historical financial result is asserted.
