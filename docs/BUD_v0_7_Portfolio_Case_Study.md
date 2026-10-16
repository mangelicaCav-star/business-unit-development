# BUD — Business Unit Development and Management Reporting

## Business problem
An industrial business needed repeatable project-based commercial operations spanning quotation, sourcing, purchasing coordination, cross-border logistics, delivery, invoicing, and cost monitoring. The management challenge was to gain project visibility without duplicating the ERP records maintained by existing departments.

## Historical responsibility
Operational Management originated the business-unit initiative. The administrator built the practical operating structure in consultation with management, coordinated cross-functional work and independently decided quotations, final selling prices, integration of project-specific cost variables and delivery terms. Pricing began with a reference markup, then was adjusted based on actual project economics; the reference was not a fixed margin or a post-award cost authorization.

The historical monthly management close comprised **two accumulations**: a consecutive project history including invoiced projects, customer and business unit; and a monthly business-unit accumulation distinguishing invoicing and investment.

## Prototype solution (v0.7)
The proposed workbook combines weekly ERP-sourced project summaries and exceptions with a preserved project-month ledger and monthly management reports. Reporting dimensions include:
- Business unit: **Strategic Services** and **Brands** (in scope)
- Brand within Brands: configurable manufacturer catalog
- Selling entity: **Mexico** or **USA**

Automation and Machining were other company business units but were not managed by the administrator and are excluded from attributed results.

## Key design choices
1. The ERP remains the source of truth and assigns official Project IDs.
2. Brand-specific quotations simplify commercial attribution; combined customer POs are cross-referenced without duplicating order intake.
3. Monthly customer PO intake, invoices, paid investment, outstanding investment, and ERP-recognized costs remain distinct.
4. When Mexico sells goods sourced through the US company, USA functions as the supplier to Mexico; the MX-side ERP purchase/import records determine the MX project's cost, avoiding duplicate attribution of the original US external supplier purchase.
5. The model supports **internal project profitability and operating decisions**, not accounting statements, statutory consolidation or tax reporting.
6. Reporting history is retained by period rather than overwritten by weekly project snapshots.

## Portfolio artifacts
- Management Reporting workbook v0.7: project history, quotations, exceptions, monthly activity, business-unit and brand close, MX/USA reporting, trends, and reporting methodology.
- Data dictionary, scope and reporting controls.

## Evidence and limitations
The model is informed by historical operational experience, but its workbook data are **fictional**. It is not deployed, connected to an ERP, or reconciled to actual corporate data. The sample includes two illustrative months, not a full fiscal year. No audited outcomes, savings or financial performance metrics are asserted. FX translation policy remains an open implementation decision.

## Competencies demonstrated
Business-unit operationalization, cross-functional project coordination, procurement and international sourcing, commercial pricing judgment, profitability monitoring, management reporting design, data governance, and exception management.
