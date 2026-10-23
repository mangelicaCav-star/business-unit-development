# BUD operational working snapshot — local validation record

**Date:** 2026-10-23. **Engine:** Artifact Tool local spreadsheet recalculation. **Result:** 31/31 focused checks PASS on the final dated working copy. This count is separate from historical Excel 365 reports and private-simulator JavaScript cases.

The checks temporarily load fictional PO and invoice inputs, verify deterministic outcomes, restore the original inputs and remove every synthetic invoice before delivery. New source supplier-PO values and invoice records are empty in the delivered copy. The current data-required messages are expected, not failing formulas.

| # | Check | Cell | Result |
|---|---|---|---|
| 1 | Missing PO total is explicit | `Project Control!L2` | PASS |
| 2 | Budget remaining | `Project Control!J2` | PASS |
| 3 | Preventive threshold | `Project Control!L2` | PASS |
| 4 | Recognized cost not added | `Project Control!J2` | PASS |
| 5 | Over budget on PO total | `Project Control!L2` | PASS |
| 6 | Explicit zero is valid | `Project Control!J2` | PASS |
| 7 | Date validation | `Invoice Register!L2` | PASS |
| 8 | Date-derived September | `Invoice Register!M2` | PASS |
| 9 | October report from invoice date | `Management Report!B6` | PASS |
| 10 | Project-month invoice summary | `Monthly Project Activity!H5` | PASS |
| 11 | Moving date moves monthly amount | `Management Report!B6` | PASS |
| 12 | Unique project count across two invoices | `Management Report!B11` | PASS |
| 13 | No US invoices in loaded month is zero | `Management Report!B16` | PASS |
| 14 | Entity invoice sums reconcile | `Management Report!B17` | PASS |
| 15 | YTD sums dated available months | `Management Report!O6` | PASS |
| 16 | Text date rejected | `Invoice Register!L2` | PASS |
| 17 | Invalid date cannot silently disappear | `Management Report!B6` | PASS |
| 18 | Duplicate allocation rejected | `Invoice Register!L2` | PASS |
| 19 | Cancelled excluded | `Management Report!B6` | PASS |
| 20 | MXN cannot bypass FX approval | `Invoice Register!L3` | PASS |
| 21 | Native MXN remains visible during FX hold | `Management Report!B33` | PASS |
| 22 | Native USD kept separate | `Management Report!B32` | PASS |
| 23 | December date retained | `Management Report!B6` | PASS |
| 24 | January allocated to new year | `Management Report!B6` | PASS |
| 25 | No invented historical dates | `Management Report!B6` | PASS |
| 26 | Prior monthly amounts retained | `Monthly Project Activity!T2` | PASS |
| 27 | Payment metric removed | `Management Report!B7` | PASS |
| 28 | Snapshot MXN sales visible without FX | `Dashboard!F3` | PASS |
| 29 | Explicit zero invoices retain unbilled sale | `Project Control!F5` | PASS |
| 30 | Dashboard unbilled total reconciles | `Dashboard!B5` | PASS |
| 31 | Missing PO data cannot appear as no budget alerts | `Dashboard!B10` | PASS |

## Additional document and preservation checks

- Confirmed that the workbook states owner-reported internal policy, identical eligible cost perimeter, conditional acceptance and no universal/accounting-profit claim. These text checks are not added to the 31 functional count.
- Scanned spreadsheet error markers with no matches in the final local calculation. No claim of a complete release regression follows from this scan.
- Preserved original ERP/monthly source values; moved prior monthly invoice amounts to reference column T without inventing dates or relabeling payments as PO totals.
- Confirmed no synthetic TEST-ERP invoice inputs or source supplier-PO test amounts remain.
- Reviewed the workbook reference images and all 15 rendered PDF pages for layout and field alignment.
- Recorded final artifact hashes in the manifest. Publication hashes identify the exact reviewed deliverables.

## Reproduce the bounded local checks

The script uses the same Artifact Tool spreadsheet engine as the authoring runtime. It is not a generic openpyxl/static-formula check and is not an Excel desktop test. A compatible runtime with `@oai/artifact-tool` is required. Run from a temporary directory with that runtime's dependencies, passing the absolute path of `workbooks/BUD_Operational_Working_2026-10-23.xlsx`. The script does not export or overwrite the workbook.

```bash
task_dir=$(mktemp -d)
ln -s "$CODEX_PRIMARY_RUNTIME_NODE_MODULES" "$task_dir/node_modules"
cp validation/BUD_Checks_2026-10-23.mjs "$task_dir/checks.mjs"
"$CODEX_PRIMARY_RUNTIME_NODE" "$task_dir/checks.mjs" "$PWD/workbooks/BUD_Operational_Working_2026-10-23.xlsx"
```

## Limits and evidence separation

Full Excel 365 desktop regression of this final snapshot was not executed. Earlier six-check Excel evidence belongs to an older workbook; 47 deterministic JavaScript cases belong to the separate private simulator. Today's partial user-observed auxiliary T02 sequence is not a completed desktop case and is not counted here.

Real ERP extraction completeness, invoice authenticity, source allocations, company policy coverage, FX policy, tax basis, native application behavior, full closure rules and receipt/delivery matching were not independently validated. The No-PO-No-Pay premise is user-reported and conditional; local arithmetic cannot prove it covers every cost. No return on investment, complete profitability, real deployment or BUD–EVOF integration is inferred.
