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
