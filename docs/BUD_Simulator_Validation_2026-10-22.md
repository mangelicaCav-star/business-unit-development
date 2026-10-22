# BUD Simulator 1.0 — Validation record | 2026-10-22

**Result:** 47/47 PASS. Fixed expectations were evaluated against the same JavaScript engine used by the private simulator. These are deterministic regression checks, not independently audited business outcomes.

**Private deployment:** [BUD simulator](https://bud-control-simulator.humblerobin2048.chatgpt.site). **Private source revision:** `52921855fdf39324a926bd87bd23c164763a006f`. Source code remains outside this public repository. The revision identifies the deployed implementation; it is not a public GitHub commit link. The test definitions were rerun during this documentation update on 22 October 2026 without changing the engines.

## Reference cases

| ID | Flow | Expected behavior | Engine result |
|---|---|---|---|
| BUD-SIM-01 | Valor soportado base | $50,000 de PO soportada y $28,000 facturados | PASS |
| BUD-SIM-02 | Exposición de costo | $24,000 reconocidos + $11,000 abiertos = $35,000 | PASS |
| BUD-SIM-03 | Umbral preventivo | 35,000 / 38,000 activa alerta preventiva | PASS |
| BUD-SIM-04 | Saldo por facturar | $50,000 − $28,000 = $22,000 | PASS |
| BUD-SIM-05 | Cambio pendiente | Un aumento de $500 sin aprobación no modifica la PO soportada | PASS |
| BUD-SIM-06 | Aprobación sin referencia | APPROVED sin referencia deja el cambio fuera del valor | PASS |
| BUD-SIM-07 | Cambio aprobado | $500 se incorpora una sola vez y queda diferencia con ERP | PASS |
| BUD-SIM-08 | Revisión conciliada | La revisión soportada y el corte simulado coinciden en $50,500 | PASS |
| BUD-SIM-09 | Disminución aprobada | Una revisión −$500 deja valor soportado en $49,500 | PASS |
| BUD-SIM-10 | PO negativa | Una disminución superior a la base bloquea el cálculo | PASS |
| BUD-SIM-11 | Nuevo compromiso | $5,000 adicionales llevan exposición a $40,000 y exceden $2,000 | PASS |
| BUD-SIM-12 | Revisión presupuestal | Un exceso de presupuesto queda en REVIEW REQUIRED aunque la PO coincida | PASS |
| BUD-SIM-13 | Presupuesto agotado | Exposición igual al presupuesto se distingue del sobrepresupuesto | PASS |
| BUD-SIM-14 | Presupuesto cero | Un presupuesto faltante no produce una utilización saludable | PASS |
| BUD-SIM-15 | Solapamiento de costo | Sin confirmar separación, no se suma una exposición potencialmente duplicada | PASS |
| BUD-SIM-16 | Sobrefacturación | 28,000 + 23,000 supera PO 50,000 y conserva saldo −1,000 | PASS |
| BUD-SIM-17 | FX pendiente | 820,000 MXN se conserva y no se presenta como cero USD | PASS |
| BUD-SIM-18 | FX incompleto | APPROVED sin fecha ni referencia no habilita conversión | PASS |
| BUD-SIM-19 | Tasa ausente | Una tasa vacía mantiene FX HOLD en MXN y conserva proyectos USD | PASS |
| BUD-SIM-20 | Conversión simulada | 820,000 MXN / 20 = 41,000 USD con metadatos completos | PASS |
| BUD-SIM-21 | FX con fecha futura | Una fecha de aplicación posterior al corte mantiene FX HOLD | PASS |
| BUD-SIM-22 | Base ausente | 100250 no hereda un cero autorizado ni se declara conciliado | PASS |
| BUD-SIM-23 | Facturación vacía | Una factura acumulada vacía no se interpreta como cero | PASS |
| BUD-SIM-24 | Independencia de estados | Una revisión BUD conserva el estado CLOSED del ERP | PASS |
| BUD-SIM-25 | T01 · PO coincidente | PO-1001 OPEN / RECONCILED | PASS |
| BUD-SIM-26 | T02 · Diferencia de importe | PO-1002 conserva diferencia de −30 MXN | PASS |
| BUD-SIM-27 | T03 · Evidencia ausente | PO-1003 ON HOLD / MISSING EVIDENCE | PASS |
| BUD-SIM-28 | T04 · Referencia FX | PO-1004 OPEN / FX HOLD sin convertir importes | PASS |
| BUD-SIM-29 | T05 · ERP cerrado | PO-1005 CLOSED / RECONCILED sin cambiar su estado | PASS |
| BUD-SIM-30 | T06 · Evidencia múltiple | PO-1006 CANCELLED / REVIEW REQUIRED sin sumar documentos | PASS |
| BUD-SIM-31 | Monedas distintas | No se calcula diferencia entre USD y MXN | PASS |
| BUD-SIM-32 | Tolerancia exacta | Una diferencia de 0.01 se acepta con tolerancia 0.01 | PASS |
| BUD-SIM-33 | Fuera de tolerancia | Una diferencia de 0.02 requiere revisión | PASS |
| BUD-SIM-34 | ID ERP duplicada | Una PO repetida bloquea la conciliación de ambas filas | PASS |
| BUD-SIM-35 | Documento huérfano | La evidencia sin PO vinculada permanece visible como huérfana | PASS |
| BUD-SIM-36 | FX de conciliación | Una tasa positiva satisface solo el control de referencia FX del arnés | PASS |
| BUD-SIM-37 | Cierre de octubre | Facturado 34,500 / pagado 43,000 / costo 43,000 / saldo 20,000 | PASS |
| BUD-SIM-38 | Intake separado | PO intake de octubre 24,000 difiere de facturación 34,500 | PASS |
| BUD-SIM-39 | Brecha temporal | 34,500 − 43,000 = −8,500; no se etiqueta utilidad final | PASS |
| BUD-SIM-40 | Conciliación por entidad | MX 30,500 + US 4,000 = 34,500, diferencia cero | PASS |
| BUD-SIM-41 | FX visible en cierre | El total y Brands/MX conservan FX HOLD; Strategic Services/MX queda sin alerta FX | PASS |
| BUD-SIM-42 | Entradas USD preservadas | Cambiar tasa 20 → 25 no reconvierte un libro ya normalizado a USD | PASS |
| BUD-SIM-43 | No aditividad financiera | Modificar pagos no aumenta el costo reconocido | PASS |
| BUD-SIM-44 | Saldo de cierre | Septiembre 23,000 y octubre 20,000 se conservan como saldos separados | PASS |
| BUD-SIM-45 | Project ID + mes único | Un duplicado bloquea la consolidación en lugar de duplicar importes | PASS |
| BUD-SIM-46 | Dato mensual faltante | Un importe mensual ausente no se oculta como cero | PASS |
| BUD-SIM-47 | Preservación de entradas | Los cálculos no modifican estados ni datos de la fuente | PASS |

## What this evidence establishes

The outcomes above exercise scenario arithmetic, explicit missing-data/confirmation gates, boundary conditions and the bounded decisions implemented in this simulator. Expected values are fixed test assertions; the report records PASS/FAIL rather than claiming independent source-document reconciliation. The owner can rerun these fixed checks in the simulator's Validation view. Scenario save/load and user-input behavior were checked separately through browser interaction before deployment.

## Evidence layers remain separate

- Simulator: 47 current JavaScript regression checks and scoped browser interaction QA.
- Workbook: [6 Excel 365 FX checks reported by the user](BUD_Excel365_Validation_2026-10-21.md), plus earlier local/draft evidence. Selected desktop checks do not establish a complete release regression.
- Still open: real ERP mapping, authenticated approvals, transaction-line reconciliation, full closure readiness and the closed/reconciled budget-exemption rule. Bounded evidence-ID checks do not validate the blocked receipt/delivery/intercompany cases.

No workbook binary is replaced or released by this report. No production readiness, realized savings, authoritative financial reporting or BUD–EVOF integration is claimed. The next functional gate is the owner's scenario review and cross-artifact reconciliation, with differences resolved or explicitly accepted.

## Engine file fingerprints

These SHA-256 values identify the privately retained engine and case definitions without publishing their code.

| Private source file | SHA-256 |
|---|---|
| `dist/model.js` | `42591698b6ac1b6b3534e435a7012de5e6708d0400444297bcff4b216afb17a9` |
| `dist/validation.js` | `b75bb9cbfdfc6becbb310b650cdd4bfc6bb8f6063e6d1e4ce2fda39b82327dd6` |
| `dist/data.js` | `51f3da55fd7f775e9f402e59f16fc6ae2cfd5f1fc1377d2a141393492fb861c7` |
