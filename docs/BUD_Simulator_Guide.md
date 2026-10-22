# BUD — Private Management-Control Simulator 1.0

**Updated:** 22 October 2026. **Status:** deployed, owner-only prototype with fictional data. This is a separate browser implementation, not a release of the planned v0.7.2 workbook.

[Open the private simulator](https://bud-control-simulator.humblerobin2048.chatgpt.site) · [Scenario validation](BUD_Simulator_Validation_2026-10-22.md) · [Published v0.7.1 workbook](../BUD_Management_Reporting_v0_7_1_FX_Reporting_Corrected_LOCAL.xlsx)

This documentation is public; the simulator remains restricted to the owner's account. Its private source and assets are not published here. Visitors can inspect the public documentation and the earlier bounded management example on the [portfolio](https://angelica-martinez.humblerobin2048.chatgpt.site).

## Purpose and scope

BUD begins after an approved customer PO and complements the ERP's official transactional records. Its three working views connect project financial exposure, PO/evidence reconciliation and monthly reporting. Pre-award quotations, markup and pricing are outside these administrative KPIs.

| View | Editable inputs | Review output |
|---|---|---|
| Project control | Proposed PO delta and support, new commitments, additional billing, simulated source amounts, overlap assumption | Supported versus ERP PO, uninvoiced balance, cost exposure, budget alert, BUD control status and follow-up |
| ERP–BUD reconciliation | Six independent sample POs, linked documentary references, amounts, currencies and required FX reference | RECONCILED / REVIEW REQUIRED / MISSING EVIDENCE / FX HOLD, with reasons |
| Monthly close | Project-month activity, business unit, selling entity, source currency, paid flow, outstanding balance and recognized cost | Period totals, BU/entity groups, FX warnings, entity grouping check and timing gap |

Business Unit, Brand and Selling Entity remain independent dimensions. Scope is Strategic Services and Brands; Automation and Machining are excluded.

## Source lineage and known gaps

Project and monthly inputs were read from `BUD_v0_7_1_Captura_Controlada_PRUEBAS 21.10.2026 2(1).xlsx`: seven fictional projects and seven historical project-month records. This capture is not the published baseline workbook and is not uploaded by this documentation change. The published FX-corrected v0.7.1 workbook and the 20–21 October decision/validation records supply the business definitions. The six PO cases come from the independent `BUD_Sprint01_Contrato_ERP_Conciliacion_2026-10-22.xlsx` harness.

The capture lacks authorization rows for **100249, 100250 and 100251**, and their cumulative invoice source cells are blank. The simulator preserves these missing values. It does not accept formula-generated zeros as evidence of authorization or full invoicing, and does not silently substitute the ERP PO value for a missing support record.

The project cut-off shown in the source is distinct from the editable scenario date. An edit to the current project scenario never rewrites the historical monthly ledger.

## Project financial rules

- Supported PO = documented baseline plus a net delta with declared approval and reference. Pending changes stay outside that supported value.
- The official ERP snapshot PO is shown separately. A difference against the supported revised amount remains a reconciliation issue; BUD does not overwrite ERP or act as a second transactional approval authority.
- Exposure = ERP-recognized cost + open **unrecognized** commitments + the proposed additional commitment. If overlap cannot be excluded, exposure is unavailable for review rather than potentially double counted.
- Budget utilization compares exposure with approved cost budget, not sale value. Above-budget and exhausted-budget conditions remain visible. Additional invoicing can produce a negative unbilled balance and an above-PO exception; it never expands PO authorization automatically.
- ERP lifecycle status, BUD control status and follow-up priority are distinct. Reconciliation does not close an ERP project or clear an operational delivery exception.

Default project 100245 has USD 50,000 supported PO, USD 28,000 invoiced, USD 22,000 unbilled, USD 35,000 exposure (24,000 + 11,000), and USD 38,000 cost budget. An extra USD 5,000 commitment produces USD 40,000 exposure and a USD 2,000 budget overrun. A pending +500 PO delta leaves the supported value unchanged; a documented declared approval produces 50,500 and a difference from an unchanged 50,000 ERP snapshot.

## PO evidence contract

The six sample POs are an independent harness, not supplier records linked to the seven financial projects. Match by PO_ID, require one complete evidence record, compare amounts only in the same original currency, and apply an absolute tolerance of 0.01. No evidence means MISSING EVIDENCE. Multiple linked records or duplicate identities require review; they are not automatically summed as valid partial invoices. A currency mismatch has no comparable delta.

When REQUIRES_FX is true, this harness checks for a positive numeric FX reference. **It does not convert currency or authenticate an approved FX policy.** This is separate from the project conversion gate. An OPEN or CLOSED ERP PO can be RECONCILED, and CANCELLED can coexist with REVIEW REQUIRED.

## FX and monthly semantics

Project conversion preserves original MXN amounts and divides by the illustrative MXN-per-USD rate only with complete declared approval metadata: positive rate, reference and a valid application date no later than the scenario cut-off. The date boundary is a disclosed simulator adaptation, not a settled real-world FX policy.

Monthly inputs are already normalized USD amounts in the source workbook. The simulator preserves them. A rate change does not reconstruct historical conversion without transaction-level lineage. Missing approval propagates FX HOLD to affected rows/groups and provisional totals; supplied approval metadata changes the warning but is not audited source evidence.

Paid investment is a period cash flow. Outstanding investment is an EOM balance, not a sum across months. Recognized cost is another measure that may overlap with paid cash. October defaults: intake 24,000; invoices 34,500; paid 43,000; outstanding 20,000; recognized cost 43,000. Invoice less recognized cost is a **−8,500 timing gap**, not final profit. MX invoices 30,500 plus US 4,000 equal 34,500 as an internal grouping check, not external ERP reconciliation.

## Adaptations and validation boundary

Explicit adaptations include Project ID joins, null commercial values, supported/current-ERP PO comparison, simulated commitments and billing, overlap disclosure, FX effective-date gating, duplicate PO/project-month rejection and editable evidence records. **47/47 JavaScript reference checks passed**, with browser checks for edits, evidence correction, currency mismatch, monthly propagation, FX metadata, invalid inputs and local save/load.

Prior workbook evidence is separate: **six Excel 365 FX checks were reported PASS by the user on 21 October**, plus earlier local automated and selected draft checks. This does not mean end-to-end release validation or authentic finance approval.

**Known implementation gap:** the simulator has no complete closure-readiness workflow and does not yet implement the agreed budget-only alert exemption for a genuinely closed, reconciled project at 100% budget utilization. Its generic exhausted-budget warning is not evidence that this closure rule is complete. See the [21 October decisions](BUD_Sprint_Decisions_2026-10-21.md). Transaction-line receipts, deliveries, partial payments, real intercompany matching, authenticated approvals and ERP ingestion remain outside verified scope. The bounded evidence-ID controls do not close the blocked receipt/invoice transaction-grain cases.

Save/load is explicit browser-local storage; JSON export captures the scenario and results. It is not a shared or immutable audit ledger. The next gate is functional comparison against Excel and owner review of rule adaptations, missing-data treatment and the remaining v0.7.2 closure/exception requirements. Power BI, agents and BUD–EVOF integration remain future phases.
