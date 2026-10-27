# BUD — validación de la copia aceptada

Archivo: `workbooks/BUD_Sprint_Cierre_Tecnico_PRUEBA_2026-10-27.xlsx`.
SHA-256: `5ede299930258af4b280835372e41c33eab6effca341c58278f7b74dc3f50aae`.

| Evidencia | Resultado | Atribución y límite |
|---|---|---|
| Recálculo local tras reabrir la copia final | 30/30 controles de subtotales | Resultado conservado del cierre del sprint, motor Artifact Tool; no se reejecutó ni se convirtió en Excel365 en esta publicación |
| Excel365: base y mes | Confirmado por la usuaria | M6 = 2026-05, Management Report B32 USD 6500 / B33 MXN 80000; aceptación reportada, no observación independiente del asistente |
| Excel365: H01 subtotal/exclusión/restauración | Confirmado por la usuaria en el caso acotado | Aceptación registrada: «validacion correcta en 365» |
| Excel365: H02 fila 5, clasificación y restauración | Confirmado por la usuaria | Aceptación: «ok, validacion correcta»; abril USD 1500, no fila 6 de mayo |
| Integridad del entregable durante publicación | Hash y estructura comprobados sin modificar | Lectura con openpyxl/ZIP; no recálculo nativo |
| Simulador | 60/60 casos JavaScript nuevos | Evidencia independiente en su propio reporte; no se suma a los 30 del libro |

## Referencias esperadas

- Base mayo: USD 6500, MXN 80000; enero–mayo: USD 11000, MXN 140000. Normalizado de mayo USD 10500 solo con metadatos FX ficticios completos y valores históricos de origen.
- H01: B6 = UNKNOWN-PROJECT → L6 PROJECT NOT FOUND; mayo USD 2500, MXN 80000; YTD USD 7000; un USD excluido. Enero, febrero y abril intactos. Restauración: mayo USD 6500, YTD USD 11000.
- H02 probado por la usuaria en fila 5: Brands/Desoutter para proyecto Strategic Services → PROJECT CLASSIFICATION MISMATCH; abril USD 0 parcial con un excluido; mayo USD 6500; YTD USD 9500. Restauración a Strategic Services/N/A: abril 1500, YTD 11000.
- Enero 2027: USD 8000, MXN 20000, reinicio de acumulado anual.

La evidencia JSON de los 30 controles reproduce sus esperados/obtenidos originales. Su antigua etiqueta genérica «native Excel365 pending» se aclara en esta publicación: **la regresión nativa completa sigue pendiente**, mientras los casos acotados arriba sí fueron reportados correctos. No se atribuye a la usuaria una nueva validación de la reorganización final de hojas o una regresión completa.

Los 31/31 y 46/46 previos pertenecen a candidatos anteriores al criterio final de subtotales. No son la regresión final, ni se suman como escenarios independientes. El archivo final conserva 24 hojas, fórmulas y entradas válidas restauradas; el maestro del 23 de octubre no se sobrescribe.

No hubo datos reales ERP, proveedor o Finanzas; no se verificaron mapeo productivo, recepciones, pasivos, pagos ni aprobación humana auténtica. Este documento no declara liberación productiva.
