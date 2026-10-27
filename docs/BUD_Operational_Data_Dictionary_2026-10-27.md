# BUD — reglas y campos vigentes al 27 de octubre de 2026

Complemento de la copia sintética aceptada. No sustituye un mapeo ERP real. El PDF del 23 de octubre conserva instrucciones de ese corte y no incorpora el criterio final de subtotales.

## Datos de entrada por hoja

| Hoja | Campos de entrada / tipo | Uso y límite |
|---|---|---|
| ERP Snapshot | Project ID, cliente, entidad MX/US, moneda USD/MXN, estado y referencia ERP: texto; venta autorizada original, presupuesto operativo USD, costo reconocido USD, facturación acumulada original, conteos y valor total autorizado de PO de proveedor USD (S): números; fecha del corte: fecha | Una fila por Project ID, una unidad y una marca. Q:R conservan la clasificación. Un ID ausente en este extracto no prueba inexistencia en ERP. No reutilizar H archivado como PO total. |
| PO Authorization | Autorización comercial de cliente y soporte/revisión según campos existentes | Es venta autorizada, distinta de la PO de proveedor. Se mantiene el vínculo y capacidad del libro; no se implementa autorización autenticada. |
| Invoice Register A:K | A ERP Invoice ID: texto; B Project ID: clave ERP; C Invoice date: fecha Excel real entera; D entidad MX/US; E Strategic Services/Brands; F marca o N/A; G USD/MXN; H importe original: número; I USD histórico ERP: número para normalizar MXN; J referencia de exportación: texto; K ISSUED/CANCELLED | Una asignación factura/proyecto/entidad por fila. No repetir el monto completo si una factura se distribuye entre proyectos. Capacidad existente 500 filas. L:O son calculadas. No escribir el mes manualmente. |
| Commercial Catalogs / Selling Entities | Catálogos y alcance configurado: texto/indicadores existentes | Strategic Services → N/A. Brands → una marca válida del catálogo, igual a la del proyecto. Sin ampliación a Automation/Machining ni proyectos multimarca. |
| Settings | Umbral y parámetros existentes; estado FX APPROVED/PENDING, referencia y metadato efectivo | Los campos de la prueba contienen TEST; no son aprobaciones reales. El control existente de factura MXN exige presencia de referencia/metadato e importe USD numérico, no autentica ni valida por sí mismo la fecha efectiva. |
| Monthly Project Activity | Mes YYYY-MM, Project ID y dimensiones, intake de venta USD, costo reconocido del mes USD, referencia ERP | La facturación calculada procede del Invoice Register. Intake y costo mensual siguen siendo fuentes separadas. No inferirlos del snapshot ni inventar costos en meses sin fuente. I:J y T son archivo histórico, excluido de indicadores activos. |
| Exceptions / Update Log | Proyecto, clave, categoría, prioridad, estado, responsable, acción, fechas y evidencia de origen según encabezados | Seguimiento operativo. Una alerta no cambia el estado ERP. |
| Dashboard / Management Report y agrupaciones | Fórmulas; mes de reporte en el selector existente | Corte actual y flujos mensuales son vistas distintas. No sustituir fórmulas con entradas. |

## Reglas de reporte aceptadas

1. Invoice month deriva de YEAR/MONTH con clave YYYY-MM, sin depender del formato de año localizado de TEXT. Fechas completas: yyyy-mm-dd; los textos ISO de origen existentes se preservan. El navegador del simulador puede presentar el selector nativo en su idioma, manteniendo valor ISO.
2. La factura debe vincular a exactamente un Project ID cargado, y su unidad/marca coincidir con ese proyecto y el catálogo. Las claves se tratan literalmente, sin expandir comodines. Una clave repetida es ambigua.
3. Duplicado: misma factura, proyecto y entidad. Se excluyen las asignaciones duplicadas; no se conserva arbitrariamente una. CANCELLED se conserva fuera de sumas.
4. USD/MXN originales suman solo VALID o FX HOLD, por Invoice date. USD normalizado suma solo VALID: USD original o USD histórico suministrado para MXN. No se recalcula la historia con una tasa actual.
5. Una factura cuestionada se excluye, conserva su motivo y genera alerta/conteo. Los demás registros forman un **subtotal**, no un total certificado. Se preservan meses y monedas no afectados.
6. Sin registros fechados en un mes: INVOICE DATA REQUIRED. Con registros excluidos o cancelados puede existir subtotal cero conocido con alerta. Sin fecha asignable, la cobertura global permanece en revisión aunque existan subtotales. Una moneda desconocida tampoco se asigna por inferencia.
7. Acumulado enero–mes seleccionado del mismo año calendario. Enero siguiente reinicia el año; no borra proyectos ni facturas de diciembre.
8. Presupuesto frente a **PO de proveedor total autorizada** en ERP, incluidas completadas, neta de cambios/cancelaciones aprobados. Solo comparable con igual perímetro elegible, moneda y base de impuestos. Costo reconocido se conserva aparte: no sumarlo a PO. Presupuesto menos PO no es utilidad ni gasto pagado.
9. La premisa interna de PO obligatoria para bienes no es una regla contable universal ni prueba de cobertura de horas de ingeniería. No se amplía el modelo para resolver excepciones financieras en este corte.

La copia publicada contiene información PRUEBA. No se incorporaron pagos, líneas de PO, compras por volumen, integración EVOF, nuevos pronósticos ni asuntos del parking lot. La política FX real y conciliación de acumulados ERP siguen pendientes.
