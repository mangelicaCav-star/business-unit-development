# BUD — Business Unit Development & Operational Implementation

**Professional portfolio | Business Operations · Procurement · Commercial Development · Global Sourcing · Management Reporting**

## Overview
BUD documents the historical operationalization of **Strategic Services** and **Brands** business units within an established industrial company, and presents a separate **v0.7 management-reporting workbook prototype** informed by that experience.

Operational Management initiated the business-unit concept. The administrator designed and coordinated the practical operating structure in consultation with management, while independently evaluating quotations, selling prices, project-specific cost components, and delivery terms. Existing Purchasing, Warehouse, Invoicing, and Finance departments retained ownership of their ERP transactions.

**Confirmed administrative scope (16 October 2026):** BUD begins upon receipt of an approved customer PO. Pre-award sales tracking and pricing decisions remain part of the historical experience but outside the BUD administrative KPI model. The uploaded v0.7 workbook is a historical prototype and may still contain legacy pre-award sheets; it is not yet a fully aligned implementation of this scope.

The workbook is a **portfolio prototype with fictional data**. It has **no live ERP connection**, no reconciliation to real ERP exports, and is **not** an accounting system or a statutory financial reporting model.

## Portfolio deliverables
- **[Management-reporting case study](docs/BUD_v0_7_Portfolio_Case_Study.md)** — historical context, responsibilities, design decisions and evidence boundaries
- **[Data dictionary and reporting controls](docs/BUD_v0_7_Data_Dictionary.md)** — metric definitions, reporting grain, expected ERP mapping and quality controls
- **[Workbook user guide and reporting methodology](docs/BUD_v0_7_Workbook_Guide.md)** — navigation, limitations and reporting rules

**Workbook:** [BUD Management Reporting v0.7 — Excel prototype](BUD_Management_Reporting_v0_7_review%20(1).xlsx) (21 sheets, two illustrative reporting months; fictional data). The filename includes `(1)` because of the uploaded filename; this does not change the model's status or validation limitations.

## Binational operating model (Mexico–USA)
The historical operating context included two selling entities, Mexico and USA, and cross-border procurement. When Mexico sold goods purchased through the US company, the US entity bought from the external supplier and acted as a supplier to Mexico. Mexico issued an intercompany purchase order, imported and received the goods, and used its own ERP records for project cost tracking.

The portfolio demonstrates **binational commercial and supply-chain coordination**, intercompany purchasing workflow awareness, import-related process visibility, and management reporting segmented by selling entity. It **does not** claim ownership of corporate accounting, legal consolidation, or intercompany eliminations.

## Power BI reporting opportunity
The v0.7 Excel model is a suitable **conceptual source for a future Power BI report**, but **no Power BI dashboard or validated data pipeline has been built**.

Recommended semantic model:
- **FactProjectMonthlyActivity:** project-month commercial and cost movements, with separate month-end outstanding balances
- **DimProject:** ERP Project ID, customer, business unit, brand, selling entity
- **DimDate:** reporting calendar and fiscal periods
- Optional controlled dimensions for **Business Unit**, **Brand**, and **Selling Entity**

Proposed report pages: Executive Overview; Business Unit Performance; MX/USA Operations; Brand Performance; Project Profitability; Monthly Trends. Import the underlying project/month activity and dimensions, **not** all workbook summary sheets as independent fact tables. Actual deployment requires ERP extract mapping, FX policy, unique identifiers, and internal reconciliation checks.

## Reporting architecture
1. **ERP Snapshot / Project Control / Exceptions** — weekly management monitoring and critical-incident updates; the ERP assigns official Project IDs.
2. **Customer PO authorization boundary** — BUD administration begins with an approved customer purchase order. Sales owns pre-award quotations, negotiation and pricing; quotation KPIs are excluded from BUD operational reporting.
3. **Project History** — historical project master: customer, business unit, brand and selling entity.
4. **Monthly Project Activity** — period-level customer order intake, invoices, paid investment, outstanding investment and ERP-recognized costs.
5. **Monthly BU Close / Monthly Brand Detail** — management consolidation by business unit, brand and selling entity (Mexico or USA).
6. **Management Report / Monthly Trend / BU Entity Matrix** — monthly reporting and illustrative trends.

**Scope:** Strategic Services and Brands. Automation and Machining existed in the company but are **outside the administrator's operational scope** in this case study.

## Critical business rules
- Brands are **subdivisions of the Brands business unit**, not separate business units. One brand per quotation is the operating design; a customer may still combine quotations in a single PO, requiring careful cross-referencing without double counting.
- **Business Unit**, **Brand**, and **Selling Entity (MX/USA)** are distinct reporting dimensions.
- **Scope boundary:** pre-award quotation, proposed price, target/effective markup and quotation margin are Sales activities, not BUD administrative KPIs. The approved customer PO and approved amendments establish authorized project value.
- Customer PO **order intake** is separate from invoicing. Net approved PO revisions are attributed to the applicable period.
- **Investment 1** (paid disbursements), **Investment 2** (month-end unpaid exposure) and **ERP recognized costs** are separate metrics; they must not be summed as independent costs.
- Where Mexico sells goods sourced through the US entity, the US company acts as Mexico's supplier. The MX-side ERP purchase/import record supports the MX project cost; the original US external supplier purchase is not counted again in that project.
- Monthly invoicing less monthly ERP recognized costs is **timing-sensitive** and is **not definitive project profit**.
- Sample USD amounts are assumed pre-normalized; the actual exchange-rate policy is unresolved.

## Original case documentation
- [Business mandate and scope](docs/01_Business_Mandate_and_Scope.md)
- [Operating model and architecture](docs/02_Operating_Model_and_Process_Architecture.md)
- [Roles and responsibilities](docs/03_Roles_and_Responsibilities.md)
- [Business rules and controls](docs/04_Business_Rules_and_Controls.md)
- [Data model and governance](docs/05_Data_Model_and_Governance.md)
- [Outcomes and evidence](docs/06_Outcomes_and_Evidence.md)
- [Prototype and validation roadmap](docs/07_Prototype_and_Validation_Roadmap.md)
- [Ohtake manufacturer development](cases/Ohtake_Manufacturer_Development.md)
- [Rittal opportunity assessment](cases/Rittal_Opportunity_Assessment.md)
- [China international sourcing](cases/China_International_Sourcing.md)
- [Fictional validation scenarios](examples/Simulated_Project_Scenarios.md)

## Evidence and attribution
Historical practices are reconstructed from firsthand experience, not independently audited. The portfolio makes no unsupported claims about revenue, ROI, savings or deployment. No confidential employer, customer, supplier or ERP records are published. The prototype demonstrates a proposed reporting architecture rather than verified production performance.

## Related project
[EVOF — Procurement Operations Framework](https://github.com/mangelicaCav-star/procurement-operations-framework) is an independent procurement-improvement and data-governance portfolio project, not a historical deployment of BUD.
