# BUD simulator — corrective checkpoint 29 October 2026

Current private version: **1.1-H02**, 65/65 JavaScript cases. The guide below describes base 1.1 and remains applicable, with this addition:

Selecting an invoice displays master entity/unit/brand, snapshot date and reference resolved read-only from its Project ID. Original invoice values remain unchanged beside that reference. Unknown or duplicate master IDs are flagged. A current snapshot does not certify historical classification or authorization. This is a comparison aid, not an ERP integration or automatic import of all original columns.

The owner reported correct Excel comparison and functional behavior within tested scope. [Current review and evidence](BUD_Review_2026-10-29.md). Assistant browser QA remains unavailable in this environment; Node tests and deployment are separate evidence. Source/access remain private.

---

# BUD — guía del simulador privado 1.1

Actualización del 27 de octubre de 2026. [Abrir simulador privado](https://bud-control-simulator.humblerobin2048.chatgpt.site) con la cuenta propietaria. La versión 1.0 y sus 47 casos quedan como evidencia histórica; esta versión usa el corte sintético aceptado del workbook y 60 casos propios.

## 1. Control de proyectos

Seleccione Project ID. Edite solo entradas del corte ficticio: cliente, entidad, unidad/marca, moneda, venta autorizada, facturación acumulada, presupuesto, valor total autorizado de PO de proveedor, costo reconocido, estado y referencia ERP. Importe vacío no significa cero.

La venta autorizada USD y MXN se acumula por separado en las tarjetas del corte actual; no es facturación del mes. Presupuesto menos PO solo se presenta con igual perímetro, moneda y base de impuestos declarados. PO incluye órdenes completadas y revisiones/cancelaciones autorizadas; no solo pendientes. Costo ERP no se suma a PO. El saldo comercial es venta menos facturación acumulada, separado del costo. Las excepciones sintéticas de responsables/fechas se muestran para seguimiento; no modifican ERP.

## 2. Registro de facturas

Cada fila es una asignación factura/proyecto/entidad. Complete:

| Campo | Valor |
|---|---|
| ERP Invoice ID / Project ID | Identificadores de origen; Project ID debe ocurrir exactamente una vez en el catálogo cargado |
| Invoice date | Fecha real; selector nativo del navegador con valor ISO YYYY-MM-DD; determina automáticamente el mes |
| Selling entity / Business Unit / Brand | MX o US; Strategic Services con N/A, o Brands con una marca del catálogo; debe coincidir con el proyecto |
| Original currency / Invoice amount original | USD o MXN y número, incluido cero explícito. Se conserva la condición numérica del workbook, sin inventar una política de notas de crédito |
| Invoice USD from ERP | USD histórico del origen para normalización de MXN; no es tasa de cambio actual |
| ERP export reference | Texto de trazabilidad; TEST en la base sintética |
| ERP invoice status | ISSUED o CANCELLED |

Las validaciones se actualizan al editar. Puede agregar/eliminar filas del escenario. Ninguna acción envía datos a ERP. Un proyecto no encontrado puede indicar un extracto incompleto; no implica inexistencia real. La misma factura puede distribuirse a distintos proyectos, sin repetir su importe total.

## 3. Reporte gerencial

Seleccione año/mes. Se muestran facturación del periodo, acumulado enero–mes, columnas mensuales y agrupación unidad/marca/entidad, siempre con USD/MXN originales separados. Cada exclusión conserva su razón en el registro y su conteo en el reporte. Una fila inválida no elimina importes válidos de los demás proyectos o meses.

- VALID / FX HOLD: originales reportables en su moneda.
- Solo VALID: USD normalizado desde el importe histórico suministrado.
- Sin fuente fechada en un mes: INVOICE DATA REQUIRED, no cero inventado.
- Registros sin fecha/moneda válida: advertencia global de cobertura; no se les asigna periodo/moneda por inferencia.
- Meses faltantes o exclusiones: el acumulado es un subtotal de la fuente cargada, no una certificación de totalidad.

La actividad mensual de intake y costo ERP tiene entradas propias. Edite mes, Project ID, importes USD y referencia del registro existente. Es independiente del snapshot y de las facturas. La base conserva costos de septiembre/octubre; no fabrica costos para mayo.

## 4. Parámetros y fuentes

El umbral preventivo acepta 0–100%. Para factura MXN, la regla heredada exige USD histórico numérico, estado FX APPROVED, referencia y metadato efectivo no vacíos. El último es declarativo: el workbook no autentica una aprobación ni valida ese metadato como fecha en este control. Los valores TEST de la base no constituyen autorización real. No se propone una política FX nueva ni se aplica la tasa actual a la historia.

## 5. Guardar, restaurar y validar

Guardar y cargar son explícitos, en este navegador. Restaurar base restablece el escenario en memoria y mayo 2026; no borra el guardado. Exportar descarga JSON con entradas, versión y resultados. La clave nueva es `bud-simulator-v1.1`; los datos 1.0 se conservan y no se migran automáticamente desde pagos/compromisos a PO/facturas.

Validación ejecuta 60 casos de referencia del motor JavaScript y muestra esperado/obtenido. No evalúa si los datos editados por el usuario son auténticos. No equivale a Excel365, conciliación ERP, proveedor o Finanzas. La revisión visual de esta publicación no pudo ejecutarse por un fallo del navegador/preview; sí pasaron sintaxis y referencias DOM estáticas.

Pagos, tesorería, utilidad contable, arnés independiente de seis PO, líneas de PO, EVOF, nuevos pronósticos y parking lot no forman parte del flujo activo. El acceso sigue privado. El código y los activos del simulador no se publican en GitHub público.

