# BUD simulator 1.1 — publication and validation, 27 October 2026

## Published scope

Updated the existing owner-private BUD simulator to match the accepted static operational workbook. Invoice date drives monthly/calendar-year original USD/MXN billing. Invalid project/classification assignments are excluded with visible reasons/counts while valid subtotals remain usable. Budget compares with total authorized supplier-PO value under matching cost perimeter/currency/tax basis; ERP recognized cost remains separate. Current sale authorization is displayed in original USD/MXN separately from monthly billing.

The earlier payment/exposure perspective and independent six-PO harness are removed from active views. Seven synthetic project snapshots, eleven invoice allocations and seven independent monthly activity rows are retained/loaded from the accepted fixture. Synthetic operational exceptions are displayed. No PO-line tracking, EVOF integration, volume purchases, new forecast, architecture expansion or parking-lot functionality was added.

## Evidence matrix

| Evidence | Obtained | Boundary |
|---|---|---|
| JavaScript reference cases | **60/60 PASS** | [Expected and obtained results](../validation/BUD_Simulator_1_1_Results_2026-10-27.json); independently stated constants; Node test runner |
| JavaScript syntax | PASS | app.js and model.js parsed; module imports also exercised by tests |
| Static DOM-reference inspection | PASS | 28 literal application ID references found; no duplicate HTML IDs; not browser execution |
| Browser QA | **NOT EXECUTED** | CUA failed twice: kernel exited; read-only session-directory error. Preview startup readiness timed out; status reported stopped. No browser installation or sandbox workaround attempted |
| Hosted deployment | **SUCCEEDED** | Native deployment confirms exact pushed source/archive and URL; not a visual/functionality browser check |
| Workbook final subtotal checks | 30/30, archived sprint evidence | Artifact Tool local; not reexecuted during this publication and not part of JavaScript count |
| Excel365 | Scoped base/H01/H02 accepted, user-reported | Separate [workbook record](BUD_Operational_Validation_2026-10-27.md); no independent assistant execution or full native regression |
| Real ERP / provider / Finance | **NOT EXECUTED** | No real exports, authenticated approvals or production certification |

The old 47 cases apply to simulator 1.0 and are not added to the new 60. Cases overlap with workbook behavior conceptually but use a separate engine and separately recorded results.

## Core reproducible references

| Case | Input modification | Expected and obtained |
|---|---|---|
| Base May 2026 | Restored PRUEBA fixture | USD 6500; MXN 80000; YTD USD 11000 / MXN 140000 |
| H01 | TEST-MAY-A Project ID → UNKNOWN-PROJECT | PROJECT NOT FOUND; May USD 2500; MXN 80000; YTD USD 7000; one USD exclusion |
| H02 April | TEST-APR unit/brand → Brands/Desoutter | PROJECT CLASSIFICATION MISMATCH; April USD 0 partial / one excluded; May USD 6500; YTD USD 9500 |
| Restoration | Restore original IDs/classification | Baseline totals and VALID return |
| FX HOLD | Set FX status PENDING | Original May MXN 80000 remains; normalized May USD subtotal 6500; one FX HOLD |
| Calendar year | December 2026 → January 2027 | December USD 7000 / 2026 YTD USD 18000; January YTD USD 8000 and MXN 20000 |
| Budget/PO | Project 100245 budget 38000, total supplier PO 24000 | Available within confirmed perimeter USD 14000; changing recognized cost does not alter PO comparison |
| Missing date / month | Remove Invoice date / select June | Unassigned-date coverage warning; valid May subtotal retained. June without dated records is unknown, not zero |
| Legacy persistence | Load schema 1.0 as 1.1 | Rejected; old storage key untouched and no invented migration |

## Version and publication identifiers

- Simulator version: **1.1** (hosting saved version 2; hosting numbering differs from semantic simulator version).
- Private URL: https://bud-control-simulator.humblerobin2048.chatgpt.site
- Source commit (private repository): `cb7b4270871ac1c828c8438e18b8b7960c21d807`.
- Saved version: `appgprj_6ada8606b3a48191b7786e39ed3c13c9~appgver_f0daf45c1a748191b0ed4731eb43b2b9`.
- Deployment: `appgdep_6ae0ca77359c81918b09553aaa919917`; terminal status `succeeded`.
- Source workbook SHA-256: `5ede299930258af4b280835372e41c33eab6effca341c58278f7b74dc3f50aae`.

Public GitHub publication contains the synthetic workbook, rules, guides and results only. Private simulator code/assets are deliberately absent. The portfolio website was not modified. The original 23 October workbook is retained unchanged.

## Remaining limits

Browser visual/interactions QA remains open because the environment failed. The current source contract accepts numeric signed invoice values and checks FX metadata presence rather than authenticating effective dates; no credit-note policy or stronger FX approval mechanism is invented here. Browser date-picker display is locale-dependent, while values are strict ISO. Real project-data coverage, ERP mapping/accumulated-total reconciliation, authentic approvals and full native Excel365 regression remain unproven. These are evidence limits, not a new feature sprint.

The historical PDF manual was not regenerated: current field/rule changes are documented in the [operational delta](BUD_Operational_Data_Dictionary_2026-10-27.md) and [simulator guide](BUD_Simulator_Guide.md).

