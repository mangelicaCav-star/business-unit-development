# BUD — evidence and publication review, 29 October 2026

## Decision and value

The owner reported correct BUD results against Excel and that the simulator functions within agreed scope. This records scoped functional acceptance, not full native regression or real ERP reconciliation. The private 1.1-H02 corrective candidate adds read-only master entity/unit/brand lookup by Project ID while preserving the original invoice classification and H02 discrepancy gate. It was reviewed and deployed; no effective-dated V2 authorization or silent reclassification is introduced.

## Version and results

- Previous published source: `cb7b4270871ac1c828c8438e18b8b7960c21d807`, 60-case simulator 1.1.
- Corrective source: `4e9c7e0e872bbe1ddf47816c6dc7eded7281ff14`, semantic version 1.1-H02, hosting version 3.
- Deployment `appgdep_6ae3a4a6826c8191ae0e540bc5c19b51`: `succeeded`; https://bud-control-simulator.humblerobin2048.chatgpt.site.
- Local current regression: **65/65 PASS** (the 60 prior cases plus five master-lookup checks), rerun on the candidate copied into the deployed checkout. [Case record](../validation/BUD_Simulator_1_1_H02_Results_2026-10-29.json).
- Workbook remains the accepted dated synthetic 27 October copy, unchanged SHA-256 `5ede299930258af4b280835372e41c33eab6effca341c58278f7b74dc3f50aae`. Its archived 30 local subtotal checks and scoped user-reported Excel365 cases remain separate. No new workbook authoring or native execution occurred.

The candidate input was the owner-provided file named BUD_Simulador_Candidato_Correctivo_1_1_H02_2026-10-28(1).zip. Its explanatory note is specific: master lookup is a comparison aid, not import automation for every field. Export README/manifest inside that ZIP still describe the original unmodified export; the corrective note and changed source take precedence. Those stale wrappers were not promoted as evidence of unchanged source. Only actual tracked application files were copied, preserving hosting identity.

The user's acceptance statements do not themselves name an archive hash. They are preserved as reported acceptance of tested behavior, not an independent assertion that every byte of the deployed candidate was tested by the owner. Node tests and deployment provenance identify the released source explicitly.

## Retained operational contract

Invoice date drives original USD/MXN monthly/YTD subtotals. Invalid assignments remain visible and excluded with warnings, without blocking unaffected source records. Snapshot classification lookup neither overwrites source invoices nor proves historical authorization. Budget versus total supplier PO requires comparable perimeter, currency and tax basis; recognized cost stays separate. Missing-month and unassigned-date coverage warnings remain active. No payment/profit workflow was reintroduced.

The prior 27 October guide is supplemented by the H02 note in the current guide. The PDF manual dated 23 October remains historical; it was not regenerated here.

## Cross-project publication and scope

The existing public portfolio was refreshed: https://angelica-martinez.humblerobin2048.chatgpt.site, source commit `c1243bc0a6aaa3a373bf0a33fa60b59819b5ef28`, hosting version 5. Both full simulators retain owner-only access. No simulator source/assets were added to public GitHub.

The BUD public example now distinguishes current authorized sale, total supplier PO/budget and original-currency dated invoices. Its 16 Node model/markup checks (including unchanged public EVOF decision checks) passed. Static IDs/local links and syntax passed. Counts are separate from private-simulator suites. Browser QA attempted on 29 October failed at CUA kernel startup (read-only session-directory error), so no fresh visual or interaction execution is claimed. Historical browser evidence remains dated and separate. Public example is deliberately smaller than either private simulator.

No ERP/provider/Finance real-data validation, full native regression, authenticated approval, production certification, EVOF–BUD integration, multi-entity purchasing, agents or parked functions were added. The next development action is a bounded correction/verification of an identified discrepancy, not expansion of functionality. Naming/version convention and a modification/correction memory remain methodology parking-lot items; reuse the existing decision record and avoid parallel logs. No renaming policy was implemented.

Review was advanced with explicit user authorization on 29 October; no recurring automation was created or rescheduled.

