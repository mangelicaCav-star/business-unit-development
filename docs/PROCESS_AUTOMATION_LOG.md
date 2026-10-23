# BUD — Bitácora de procesos y preparación para orquestación

**Inicio:** 2026-10-20 · **Estado:** registro complementario de diseño, no implementación de agentes · **Alcance:** preparación documental para integración manual y eventual LLM/tool chaining.

## Propósito y límites

Documentar cada proceso a medida que se implemente o revise, preservando entradas, reglas, actores, resultados, validaciones y excepciones. **No cambia el alcance de los sprints, no valida funcionalidad pendiente y no implica que exista integración ERP, agente o automatización en producción.** Las descripciones siguientes son un **inventario inicial de trabajo** y deben contrastarse con los artefactos funcionales actuales al cerrar cada proceso.

## Plantilla obligatoria por proceso

- **ID, versión, fecha, owner y estado:** diseñado / implementado / validado localmente / validado en Excel 365 / bloqueado / futuro.
- **Evento disparador y alcance:** inicio, fin, condiciones previas y exclusiones.
- **Entradas y contratos de datos:** fuente, ID, granularidad, campos obligatorios, moneda/unidades, frescura y linaje.
- **Transformaciones y reglas:** secuencia, cálculos deterministas, tablas de decisión y supuestos explícitos.
- **Responsabilidades:** dueño del dato, ejecutor, responsable de validación, autoridad de aprobación y segregación de funciones.
- **Salidas y destinos:** registros producidos, esquema, consumidores y evidencias.
- **Excepciones y recuperación:** faltantes, inconsistencias, duplicados, errores y ruta de escalamiento.
- **Control y evidencia:** pruebas, caso reproducible, artefacto/versión y resultado (sin confundir pruebas locales con Excel 365).
- **Potencial de orquestación FUTURA:** pasos fijos, herramientas deterministas, tareas interpretativas candidatas a LLM, aprobaciones humanas, permisos, registros y límites.
- **Dependencias BUD ↔ EVOF:** contrato de interfaz propuesto, sin presumir integración existente.

## Inventario inicial de procesos (hipótesis documentales; validar uno por uno)

| ID | Proceso | Entradas | Reglas o trabajo | Salida | Estado / limitación |
|---|---|---|---|---|---|
| BUD-P01 | Registro de PO aprobada y alta de proyecto | PO autorizada; Project ID ERP; entidad vendedora | Crear/relacionar registro de proyecto dentro del alcance administrativo posterior a PO | Project History / control de proyecto | Aprobación PO auténtica no verificada por prototipo |
| BUD-P02 | Cambios a PO y reconocimiento autorizado | PO base, enmiendas, referencias manuales | Excluir enmiendas pendientes; aceptar solo cambios aprobados según reglas | Monto PO vigente y excepciones | Metadatos de aprobación manuales, sin autenticación |
| BUD-P03 | Consolidación mensual de facturación y costos | Actividad por proyecto-mes, moneda, entidad | Conciliar cifras, distinguir facturas y costos del margen de beneficio | Reporte mensual y conciliaciones | CONS-01/02: pruebas parciales; Excel 365 de último correctivo diferido |
| BUD-P04 | Control de FX y exposición multimoneda | Montos fuente, moneda, supuesto FX y referencias | Preservar montos originales; HOLD cuando falta aprobación de tipo de cambio | Advertencias FX y valores normalizados condicionados | CONS-03A–E: regresión local; no prueba final Excel 365 |
| BUD-P05 | Flujo MX/USA e intercompany | PO intercompany, compras, recepción, facturas por entidad | Mantener identidades separadas; evitar doble conteo y falsa consolidación | Vista segmentada e indicadores de discrepancia | FIN-04 bloqueado sin mapeo transaccional |
| BUD-P06 | Controles transaccionales futuros | Recepciones, entregas, partidas de factura, IDs | Conciliar recepción-entrega-factura y detectar duplicados | Excepciones línea a línea | PO-05/06/07 bloqueados por falta de datos fuente |

## Registro incremental de ejecución

| Fecha | Proceso | Cambio / decisión | Referencia al archivo o prueba | Estado real | Dependencia / siguiente acción |
|---|---|---|---|---|---|
| 2026-10-20 | General | Se crea plantilla transversal para documentar procesos orientados a futura automatización, sin construir agentes | README + esta bitácora | Documentación creada | Completar fichas con la implementación real conforme cierren los sprints |

## Puertas de avance

1. **Baseline individual:** funcionalidad cerrada, reglas y contratos registrados, evidencia de pruebas con limitaciones.
2. **Integración manual BUD–EVOF:** identificadores y conversiones definidos; escenarios end-to-end reproducibles; conciliaciones y excepciones documentadas.
3. **Diseño de orquestación:** separar motores deterministas de LLM, definir permisos, trazas, evaluación y aprobación humana.
4. **Piloto:** ejecución en entorno aislado contra casos de referencia manual, sin escrituras reales al ERP ni aprobaciones automáticas.

## Principios de diseño

- No sustituir cálculo MRP, FX o finanzas por texto generado por LLM.
- No asumir autenticación de aprobaciones ni integridad de datos no disponibles.
- Registrar versión, procedencia y evidencia; preservar la decisión manual cuando corresponda.
- Cualquier decisión sobre agentes se considera **futura** hasta terminar y validar la integración manual.


## Actualización de simulación privada — 2026-10-22

**Artefacto:** simulador BUD 1.0. **Owner de revisión funcional:** Angelica Martinez. **Estado:** implementado y validado en motor JavaScript con datos ficticios; no validación productiva ni integración entre proyectos. [Guía](./BUD_Simulator_Guide.md) y [matriz de 47 casos](./BUD_Simulator_Validation_2026-10-22.md).

| Registro | Disparador / entradas | Reglas / transformación | Responsables y autoridad | Salidas / evidencia | Excepción y recuperación |
|---|---|---|---|---|---|
| BUD-SIM-P01 | PO ERP, base de soporte, cambio, factura, presupuesto y compromisos | Vincular Project ID; conservar vacíos; excluir cambio pendiente; separar estado ERP/control BUD/prioridad | ERP conserva autoridad; Comercial valida soporte; Finanzas revisa exposición; owner valida modelo | Comparativo, diferencia PO, saldo, exposición y acciones | Dato faltante no es cero; revisar soporte o corte; cierre y exención presupuestal siguen incompletos |
| BUD-SIM-P02 | PO única + evidencia identificable, moneda, importe y referencia FX condicional | Casos Sprint 01; no sumar evidencias múltiples; no comparar monedas diferentes | Dueño ERP y responsable documental resuelven la diferencia | Estado BUD y motivo, conservando estado ERP | Sin evidencia: MISSING EVIDENCE; múltiples/duplicados: revisión; falta FX: HOLD; editar solo escenario de prueba |
| BUD-SIM-P03 | Registros históricos proyecto-mes prenormalizados en USD | Separar intake/facturas/pagos/costo/saldo EOM; agrupar BU/entidad; propagar FX | Finanzas es dueño de política y fuente; responsable de gestión revisa cierre | Totales, grupos, diferencia interna MX/US y brecha temporal | Duplicado o dato ausente bloquea agregación; FX no se reconstruye sin linaje; conservar histórico |

**Contrato y procedencia:** escenarios sintéticos, unidades y moneda visibles, versión fuente y corte separados del escenario. Los supuestos editados no constituyen hechos ERP ni autorizaciones autenticadas. 47/47 resultados JavaScript PASS y verificación de interacción en navegador; las pruebas de Excel 365 se registran por separado con su procedencia de usuario.

**Dependencia BUD–EVOF:** no hay interfaz ejecutada. El intercambio manual necesita IDs, moneda, reglas aceptadas y pruebas cruzadas antes de cualquier orquestación. **LLM/agentes:** futuro; ningún motor determinista se sustituye por texto generado. Exportar JSON permite revisar el caso, no crea una bitácora inmutable.

**Siguiente puerta:** comparar escenarios Excel–simulador–criterio operativo, registrar diferencias y aceptar o rechazar las extensiones. No se declara cerrado el backlog pendiente por tener un simulador funcional.


## Operational working-copy closeout — 2026-10-23

This checkpoint supersedes the earlier payment/exposure perspective for the dated workbook only. It does not change the private simulator or implement agents. [Closeout](BUD_Sprint_Closeout_2026-10-23.md) · [Dictionary](BUD_Operational_Data_Dictionary_2026-10-23.md) · [Validation](BUD_Operational_Validation_2026-10-23.md).

| Process | Trigger / inputs | Rules and responsibility | Output / evidence | Exception / boundary |
|---|---|---|---|---|
| BUD-OP-P01 | ERP project budget and authorized supplier-PO total | Owner-reported mandatory-PO policy; matching eligible cost perimeter, currency and tax basis required. ERP owns facts; coordinator follows exceptions | PO-scoped residual and utilization; focused local checks | Missing PO value remains missing. No actual-cost, receipt, liability, payment or full-profit inference |
| BUD-OP-P02 | ERP invoice/project records with actual Invoice date, original amount and currency | Coordinator loads ERP source; formulas validate dates and allocation keys, exclude cancellations and derive the month | Separate original USD/MXN billing by month and YTD; 31-case working-copy record | Invalid inputs remain visible; FX HOLD affects normalization, not otherwise-valid original MXN. No invented historical dates |
| BUD-OP-P03 | Monthly customer-order intake and ERP-recorded costs; dated invoice source | Keep monthly operating inputs distinct from invoice transactions. Preserve prior values; do not sum payments and cost commitments | Management reporting, current 15-page manual, artifact manifest | Current snapshot and project history are not immutable close archives; real ERP reconciliation and full desktop regression remain open |

**Sprint boundary:** close implemented work and documentation only. The independent six-PO harness is not a required operational report. Native Excel evidence from older artifacts and 47 simulator JavaScript cases remain separate. No BUD–EVOF interface or future LLM orchestration was implemented in this session.

