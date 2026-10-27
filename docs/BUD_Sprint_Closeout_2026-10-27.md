# BUD - Cierre técnico del sprint

Estado: sprint cerrado. Prueba base y casos acotados H01/H02 confirmados por la usuaria en Excel365. No es una liberación productiva ni una declaración de regresión nativa completa.

## Objetivo y alcance

Depurar integridad del Project ID y de su unidad/marca, conservar los acumulados mensuales/anuales por moneda y resolver los defectos encontrados durante la validación. Se mantuvo un proyecto por unidad y una marca. No se incorporaron líneas de PO, integración EVOF ni asuntos del parking lot.

## Trabajo terminado

- H01: detecta un proyecto no encontrado en el catálogo cargado. No prueba inexistencia en ERP.
- H02: contrasta unidad/marca con el proyecto y el catálogo existente; rechaza asignaciones incompatibles y claves ambiguas.
- Invoice month: reemplaza TEXTO con formato de año dependiente del idioma por una construcción YEAR/MONTH, conservando YYYY-MM.
- Reportes: presentan subtotales de registros válidos y alertas de registros no considerados, por periodo y moneda. No eliminan la factura fuente ni presentan el subtotal como total completo.
- Las fechas completas usan yyyy-mm-dd; se preservaron los textos ISO originales y las claves mensuales.
- Orden de pestañas: validaciones/comentarios internos, información, catálogos y parámetros, hojas operativas y reportes. Settings queda junto al bloque operativo; Dashboard y Management Report quedan a la derecha.
- Se conservaron las 24 hojas y las fórmulas funcionales de la versión de subtotales al ordenar/formatear.

## Evidencia y límites

| Evidencia | Resultado | Alcance |
|---|---|---|
| Controles previos | 31/31 y 46/46, grupos separados | Ejecutados antes del nuevo criterio de subtotal; no se presentan como regresión final de ese criterio |
| Correcciones H01/H02 locales | 20/20 | Candidato anterior al cambio de subtotales |
| Corrección de mes local | 14/14 | Claves, acumulados y fechas inválidas |
| Criterio final de subtotales | 30/30 | Repetidos tras reabrir la versión ordenada y formateada |
| Escaneo local de errores | Sin coincidencias | No sustituye la regresión nativa |
| Excel365: base y mes corregido | Confirmado por la usuaria | Invoice Register M6 y Management Report B32/B33 |
| Excel365: subtotal y alerta H01 | Confirmación de la usuaria: «validacion correcta en 365» | Registrada en el contexto del último caso solicitado; no observación independiente del asistente |
| Excel365: H02 unidad/marca | Confirmado por la usuaria: «ok, validacion correcta» | Caso ejecutado en fila 5, abril USD 1,500; rechazo, efecto mensual/acumulado y restauración reportados correctos. Evidencia observada por la usuaria, no ejecución independiente del asistente |

Los grupos se superponen y no se suman como escenarios independientes. Los resultados locales corresponden a Artifact Tool; no al motor nativo de Excel. Las pruebas son sintéticas; no se ejecutó conciliación real de ERP, proveedor o Finanzas.

## Caso H01 verificado localmente y reportado correcto en Excel365

Con Invoice Register B6 = UNKNOWN-PROJECT: L6 = PROJECT NOT FOUND; mayo USD = 2,500; mayo MXN = 80,000; acumulado USD = 7,000; alerta de un registro USD no considerado. Enero, febrero y abril permanecen visibles. Al restaurar 100245: mayo USD = 6,500, acumulado USD = 11,000 y desaparece la alerta de exclusión.

La copia entregada conserva B6 = 100245, periodo 2026-05 y datos válidos restaurados. La última reorganización y homologación se verificaron localmente; no se atribuyen a una nueva apertura nativa por la usuaria.

## H02 cerrado en Excel365 mediante la fila 5

La captura mostró E5:F5 = Brands / Desoutter y L5 = PROJECT CLASSIFICATION MISMATCH, mientras L6 permanecía correctamente VALID. La usuaria eligió validar la fila 5 en lugar de trasladar el caso a la fila 6.

Secuencia comunicada y posteriormente confirmada por la usuaria: abril USD = 0 como subtotal parcial con alerta de una factura USD 1,500 no considerada; mayo USD conserva 6,500; el acumulado enero-mayo USD baja a 9,500. Al restaurar E5:F5 = Strategic Services / N/A: L5 vuelve a VALID, abril a 1,500 y el acumulado a 11,000. La captura verifica el rechazo; la aceptación final de los demás resultados y de la restauración es reportada por la usuaria.

No quedan pendientes las confirmaciones acotadas de prueba base, H01 y H02 solicitadas en este sprint. Esto permite iniciar la alineación del simulador con el modelo estático, con regresión independiente antes de publicar. No se inicia esa actualización con esta confirmación.

El manual PDF anterior no se declara actualizado con este criterio de subtotales; este cierre documenta el cambio y su límite de evidencia. El simulador BUD sigue separado y no fue actualizado. No se publicaron cambios en GitHub ni en el portafolio durante este sprint de BUD. El maestro publicado quedó intacto.

## Entregable

BUD_Sprint_Cierre_Tecnico_PRUEBA_2026-10-27.xlsx

SHA-256: 5ede299930258af4b280835372e41c33eab6effca341c58278f7b74dc3f50aae

Valor aportado: detección de inconsistencias sin inutilizar los importes válidos, visibilidad de exclusiones y compatibilidad de la clave mensual con el Excel365 de la usuaria. La aceptación de estos casos nativos está registrada. La regresión nativa completa y el uso productivo permanecen fuera de lo demostrado por este cierre.


## Actualización posterior: publicación del 27 de octubre

El estado anterior describe el cierre del sprint antes de actualizar el simulador. Posteriormente, con autorización de la usuaria, se alineó y desplegó el simulador privado 1.1 y se preparó la publicación de esta copia PRUEBA, reglas y evidencia en GitHub. El maestro del 23 de octubre permanece intacto. La evidencia nueva del simulador es 60/60 casos JavaScript, separada de los 30 controles locales del libro y de las confirmaciones acotadas Excel365. Revisión visual no ejecutada por fallo del entorno; no se modificó el portafolio ni EVOF. Véase el reporte de publicación para los identificadores finales.
