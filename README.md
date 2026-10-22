# BUD — Business Unit Development & Operational Implementation

**Professional portfolio | Business Operations · Procurement · Commercial Development · Global Sourcing · Management Reporting**

## Overview
BUD documents the historical operationalization of **Strategic Services** and **Brands** business units within an established industrial company, and presents a separate **v0.7 management-reporting workbook prototype** informed by that experience.

Operational Management initiated the business-unit concept. The administrator designed and coordinated the practical operating structure in consultation with management, while independently evaluating quotations, selling prices, project-specific cost components, and delivery terms. Existing Purchasing, Warehouse, Invoicing, and Finance departments retained ownership of their ERP transactions.

**Confirmed administrative scope (16 October 2026):** BUD begins upon receipt of an approved customer PO. Pre-award sales tracking and pricing decisions remain part of the historical experience but outside the BUD administrative KPI model. The PO-aligned 20-sheet workbook is now uploaded as the current prototype. The original 21-sheet workbook remains archived in the repository for comparison.

The workbook is a **portfolio prototype with fictional data**. It has **no live ERP connection**, no reconciliation to real ERP exports, and is **not** an accounting system or a statutory financial reporting model.

## Sprint closeout — 16 October 2026
The v0.7 PO-aligned prototype is published as the current portfolio workbook. Three fictional functional scenarios were reported as passed: approved PO amount change, additional partial invoicing, and cost exposure exceeding PO. These demonstrate arithmetic and alert behavior only; no real ERP data or documentary approval workflow was validated. The workbook does **not** independently verify approval of PO amendments. This limitation and the future production control requirements are documented in the [Workbook Guide](docs/BUD_v0_7_Workbook_Guide.md). Next-phase items: Power BI v0.8, ERP field mapping/reconciliation, approved-amendment evidence, and FX policy. See [CHANGELOG](CHANGELOG.md) and [Sprint activity log / plan-versus-actual closeout](docs/BUD_Sprint_Activity_Log_2026-10-16.md).


## Validation workstream — 20 October 2026

**Version boundary (historical validation as of 20 October):** v0.7 PO Aligned was then the published baseline, while corrective v0.7.1 remained local. **Publication was subsequently completed on 21 October 2026**, as documented below. Results from earlier drafts do not certify the final published v0.7.1 workbook.

**Controls validated in the local prototype:** PO-02 (approved PO delta), PO-04 (pending amendment excluded), FIN-05 (FX HOLD), and FIN-06 (above-PO invoicing exception) passed manual Excel 365 checks on an earlier corrective draft. CONS-01 (monthly invoice propagation) and CONS-02 (MX/USA reconciliation) passed those earlier Excel 365 checks and local automated regression on the latest FX-corrected copy. CONS-03A–E (FX warnings, simulated approval, source amount preservation, unaffected groups and reconciliation) passed **local automated regression only**; full Excel 365 testing of the latest copy is deferred.

**Limitations:** approval references and FX approval are manually entered metadata, not authenticated evidence. Sample USD figures are illustrative and pre-normalized; no real FX policy, ERP reconciliation, accounting audit or live BI pipeline exists. PO-05 (receipts), PO-06 (delivery versus invoice), PO-07 (duplicate IDs) and FIN-04 (intercompany matching) are **BLOCKED** by absent transaction-grain source data. The monthly invoice/cost difference is not definitive profit.

**Future functionality — not implemented:** externally verified versioned PO amendments; transaction-line receipt/delivery/invoice controls and duplicate detection; approved FX policy with currency lineage; reconciled intercompany mapping; governed ERP ingestion and Power BI deployment.

**Sprint disposition:** provisionally closed for portfolio documentation, not production release. The corrected v0.7.1 workbook **was published on 21 October 2026**; final Excel 365 desktop regression remains deferred. See [validation status](docs/BUD_Validation_Status_2026-10-20.md), [test protocol](docs/BUD_PO_Amendment_and_Financial_Integrity_Test_Plan_2026-10-20.md), and [sprint closeout](docs/BUD_Sprint_Update_2026-10-20.md).

## Portfolio deliverables
- **[Management-reporting case study](docs/BUD_v0_7_Portfolio_Case_Study.md)** — historical context, responsibilities, design decisions and evidence boundaries
- **[Data dictionary and reporting controls](docs/BUD_v0_7_Data_Dictionary.md)** — metric definitions, reporting grain, expected ERP mapping and quality controls
- **[Workbook user guide and reporting methodology](docs/BUD_v0_7_Workbook_Guide.md)** — navigation, limitations and reporting rules

**Current workbook:** [BUD Management Reporting v0.7 — PO Aligned](BUD_Management_Reporting_v0_7_PO_Aligned%20(1).xlsx) (20 sheets; fictional data; PO-based administrative scope). **Historical workbook:** [original v0.7 review](BUD_Management_Reporting_v0_7_review%20(1).xlsx) (21 sheets, includes legacy pre-award content). The historical workbook is retained for reference; it is not the current reporting baseline.

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

## Process documentation for future orchestration (2026-10-20)

[Process & Automation Readiness Log](docs/PROCESS_AUTOMATION_LOG.md) records process-level inputs, rules, responsibilities, outputs, validation evidence, exceptions, and possible future agent/tool orchestration. This is **documentation only**: it does not introduce AI agents, replace functional testing, or claim completed manual integration with the other project. Process records will be refined as functional sprints close.

### Corrective workbook publication — 2026-10-21

**BUD v0.7.1 FX Reporting Corrected** is published at [BUD_Management_Reporting_v0_7_1_FX_Reporting_Corrected_LOCAL.xlsx](BUD_Management_Reporting_v0_7_1_FX_Reporting_Corrected_LOCAL.xlsx) (original `_LOCAL` filename retained). Prior v0.7 files remain in the repository unchanged. The correction propagates provisional FX status to consolidated reporting; see [validation status](docs/BUD_Validation_Status_2026-10-20.md). Local automated consolidated checks passed in the modeled scenarios, but the final v0.7.1 workbook has **not** completed an Excel 365 desktop regression. Transaction-grain receipt/invoice matching and real ERP/finance reconciliation remain outside verified scope. This is a portfolio prototype, **not a production-approved financial control**.

## ERP authority and management-control design — sprint decisions (2026-10-21)

**BUD-ARCH-01:** The ERP is the authoritative System of Record for official project statuses and transactional records. BUD is a **complementary management-control and discrepancy follow-up layer**, not a replacement ERP or an independent second approval system. Under applicable company policy, a customer PO registered through an approved ERP workflow may support authorization; projects without a customer PO may require documented management approval. Whether a particular ERP status proves completion of approvals must be confirmed against the actual ERP workflow.

The planned model separates **ERP Project Status**, **BUD Control Status**, and **Follow-up Priority**. An ERP project may remain `OPEN` while BUD flags `REVIEW REQUIRED`; BUD must not silently change official ERP status or erase unresolved exceptions. `PO Authorization` will be redesigned as PO evidence, amendment, and reconciliation control rather than duplicative authorization. Missing source data must not be treated as zero or as proof of full invoicing.

Project closure requires documented checks against the **final approved scope** (receipt, delivery/acceptance, invoicing), plus financial and administrative reconciliation; BUD can indicate `READY TO CLOSE` but official `CLOSED` belongs to ERP. A reconciled closed project at 100% budget utilization should not raise a budget-only warning. Separate compliance exceptions remain visible.

**Validation boundary:** dropdown selection and priority/exception color alerts were user-tested in a **local capture-testing copy**, not in the published v0.7.1 workbook. The full Excel 365 desktop regression of the published final corrective version remains deferred. The Copilot five-minute summary is an exploratory audit artifact, not certified financial reporting. No new workbook version has been published for these decisions.

**Next planned version:** v0.7.2 (requirements defined; **not implemented or released**). See the [21 October sprint decision log](docs/BUD_Sprint_Decisions_2026-10-21.md) for detailed rules, defects, test scope and planning estimates. Power BI and agent orchestration remain future work.
