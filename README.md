# BUD — Business Unit Development & Operational Project Control

**Professional portfolio | Procurement · Operational Coordination · Management Reporting · Mexico–U.S.**

BUD combines daily project follow-up with monthly management reporting using ERP-sourced information. It documents an operating design informed by experience developing Strategic Services and Brands within an established industrial company. ERP remains the official system of record.

## Current artifacts — 27 October 2026

| Artifact | Status | Evidence boundary |
|---|---|---|
| [Accepted synthetic workbook](workbooks/BUD_Sprint_Cierre_Tecnico_PRUEBA_2026-10-27.xlsx) | New dated PRUEBA copy; source values restored | 30/30 saved-file local subtotal checks from sprint closeout; scoped base/H01/H02 acceptance reported by the user in Excel365 |
| [Current operational rules and field delta](docs/BUD_Operational_Data_Dictionary_2026-10-27.md) | Accepted cutoff and reporting behavior | Includes exclusions, missing data, original USD/MXN and PO perimeter |
| [Workbook validation](docs/BUD_Operational_Validation_2026-10-27.md) | Evidence separated by engine | Not full native regression or real ERP reconciliation |
| [Private simulator 1.1](https://bud-control-simulator.humblerobin2048.chatgpt.site) | Updated and deployed; owner-only | 60/60 JavaScript reference cases; browser QA unavailable in this run |
| [Previous 23 October working copy](workbooks/BUD_Operational_Working_2026-10-23.xlsx) | Preserved unchanged | Previous 31-case evidence is historical; not a substitute for final subtotal checks |
| [Illustrated PDF manual — 23 October](docs/BUD_User_Guide_2026-10-23.pdf) | Historical manual, not updated by this release | Read the current field/rule delta and simulator guide; no claim that the PDF reflects final subtotal behavior |

**[Sprint closeout](docs/BUD_Sprint_Closeout_2026-10-27.md)** · **[Publication / simulator validation](docs/BUD_Simulator_Validation_2026-10-27.md)** · **[Artifact manifest](docs/BUD_Artifact_Manifest_2026-10-27.json)**.

All records are fictional and explicitly marked PRUEBA / TEST. This is a bounded validated synthetic working copy, not a data-free operational master or a production deployment. The original 23 October workbook is retained. Pending full Excel365 regression, real ERP field mapping, coverage and accumulated-total reconciliation remain open; no portfolio Site was changed.

## Operating purpose and conditional acceptance

The modeled scenario is **sale of goods**, after an approved customer PO. BUD supports authorized-sale and invoicing visibility, project-budget monitoring, purchase-order follow-up and actionable exceptions with responsibilities and deadlines. It is not accounts payable, treasury, receipt-line processing or an accounting-profit model.

The owner's **mandatory project-PO policy is an internal operating premise**, not a universal accounting rule or verified ERP configuration. A budget/PO comparison is complete only when budget and authorized supplier POs cover the **same eligible cost perimeter, currency and tax basis**. Budget less PO value is available for new commitments only within that perimeter. A cost without a PO is not automatically financial overhead or unrelated to a project. PO authorization measures a commitment; it does not prove receipt, actual cost, a liability, payment or realized profitability.

## What the dated workbook demonstrates

- **Daily operational control:** current ERP project snapshot, authorized operating budget, current authorized supplier-PO value, residual relative to POs, utilization alerts and exception follow-up. ERP-recorded costs remain separate.
- **Dated billing source:** `Invoice Register` imports one invoice/project allocation per row. `Invoice date` is validated, and the reporting month is derived from the date. Issued and cancelled records, duplicate allocation keys and missing data are treated explicitly.
- **Monthly and calendar-year reporting:** January through the selected month, with YTD totals and incomplete-source warnings. Original **USD and MXN billing remain separate**, including during FX HOLD; normalized USD is a distinct view.
- **Source preservation:** prior monthly invoice values remain in `Monthly Project Activity!T`; former payment/open-balance values are archived and excluded from active operational metrics.
- **Current-snapshot currencies:** Dashboard original USD/MXN authorized sale, invoicing and remaining billing are distinct from the selected reporting month.

## Data flow

1. **ERP Snapshot + PO Authorization** supply the current project/commercial view. The new supplier-PO amount is `ERP Snapshot!S`; customer POs and supplier POs are different measures.
2. **Exceptions + Update Log** record management actions and update provenance.
3. **Invoice Register** supplies billing dates, allocated amounts, currencies, classifications and source status. Original amounts are preserved. Historical normalized USD must come from ERP/Finance, not a newly applied current FX rate.
4. **Monthly Project Activity** retains monthly authorized customer-PO intake and ERP-recorded costs; billing is calculated from dated invoices. It is not generated automatically from the current snapshot.
5. **Management Report / Monthly Trend / BU and brand groupings** present period and year-to-date views. `Project History` is a linked current view, not an immutable archive of closed periods.

## Validation and limits

The historical 23 October [31-case record](docs/BUD_Operational_Validation_2026-10-23.md) covers focused local behavior, including month/year changes, invalid dates, cancellations, duplicate invoice/project keys, original currencies during FX HOLD, zero-versus-missing values and budget/PO alerts. It is not a full release regression, an independent ERP audit or proof that the company's purchase policy covers every project cost. A reproducible local check script and JSON results are included under `validation/`.

No live ERP connection, authenticated approval workflow, complete receipt/delivery matching, closure-lock workflow, full project-lifecycle archive, comprehensive profitability model or BUD–EVOF integration is claimed. The existing row capacities and position-based customer-PO linkage are documented in the manual. Real ERP field mapping and accumulated-total reconciliation remain in the parking lot until actual exports are available.

The independent six-PO reconciliation harness was reviewed as an auxiliary test and removed from the active operational workflow. Its calculated PASS cells are not proof of a documented Excel execution. The 23 October partial user-observed T02 evidence is not counted among the 31 local checks.

## Separate simulator evidence

[Current simulator guide](docs/BUD_Simulator_Guide.md) · [60-case expected/obtained evidence](validation/BUD_Simulator_1_1_Results_2026-10-27.json) · [Validation and deployment limits](docs/BUD_Simulator_Validation_2026-10-27.md) · [Private simulator — owner account required](https://bud-control-simulator.humblerobin2048.chatgpt.site).

Simulator 1.1 replaces the earlier active exposure/payment perspective with budget versus total authorized supplier-PO value. Dated invoices now drive original-currency monthly/YTD subtotals and exclusions. The independent six-PO harness is removed from active views. Current snapshot and historical activity stay separate. Old browser-local 1.0 scenarios are retained without automatic migration.

The source and assets remain private; this public repository contains documentation, workbook and results only. The [47-case record](docs/BUD_Simulator_Validation_2026-10-22.md) belongs to version 1.0 and is retained as history. It is not added to the new 60 cases. Browser QA was attempted but not executed because the CUA kernel and preview readiness failed; JavaScript tests and static DOM-reference checks passed. Excel365 evidence is user-reported and separate.

## Historical case and attribution

Operational Management initiated the business-unit concept. The administrator designed and coordinated the practical structure with management and independently evaluated quotations, selling prices, project-specific cost components and delivery terms. Purchasing, Warehouse, Invoicing and Finance retained their ERP responsibilities. Pre-award pricing work belongs to the historical experience, not current BUD administrative KPIs.

Business Unit, Brand and Selling Entity are distinct dimensions; brands subdivide the Brands unit. Strategic Services and Brands are in scope. Automation and Machining remain outside the administrator's attributable scope. For MX sales sourced through the US entity, the MX-side project purchase is used without adding the original US supplier acquisition again. No statutory consolidation or intercompany elimination is implemented.

[Mandate](docs/01_Business_Mandate_and_Scope.md) · [Operating model](docs/02_Operating_Model_and_Process_Architecture.md) · [Roles](docs/03_Roles_and_Responsibilities.md) · [Business rules](docs/04_Business_Rules_and_Controls.md) · [Case study](docs/BUD_v0_7_Portfolio_Case_Study.md) · [Process log](docs/PROCESS_AUTOMATION_LOG.md) · [CHANGELOG](CHANGELOG.md).

## Sprint boundary

The 23 October session closes the work already performed and its documentation. Projection of future invoicing, project start/delivery dates, new ERP integrations, Power BI, agents and company-wide financial scope are not added to this cut. The original one-hour minimum-change plan expanded and was not achieved as a tightly bounded sprint; see the closeout for the plan-versus-actual assessment. No EVOF implementation work was performed in this BUD session.

[EVOF — Procurement Operations Framework](https://github.com/mangelicaCav-star/procurement-operations-framework) remains a separate portfolio project. Historical practices are reconstructed from firsthand experience, not independently audited. No confidential business data, verified ROI or production deployment is claimed.

