---
title: 3.8 Comprobante de Liquidación (CL)
date: 2024-07-22T16:44:00.000Z
sidebar:
  order: 8
---
## 3.8.1 Resumen

Un Comprobante de Liquidación es un documento financiero utilizado para registrar y documentar la liquidación de cuentas entre partes. Este documento se emite al finalizar una transacción, contrato o acuerdo, detallando los montos pagados, los saldos pendientes y cualquier ajuste necesario. El Comprobante de Liquidación asegura que ambas partes tengan un registro claro y preciso de los términos de la liquidación, facilitando la transparencia y el control financiero. Además, este comprobante es esencial para cerrar contablemente las operaciones y evitar futuros conflictos o discrepancias.

## 3.8.2 Conceptos Básicos 

### Receptor

| Campo              | Descripción                                                             |
|--------------------|-------------------------------------------------------------------------|
| nit                | NIT (Receptor)                                                           |
| nrc                | NRC (Receptor)                                                           |
| nombre             | Nombre, denominación o razón social del contribuyente (Receptor)         |
| codActividad       | Código de Actividad Económica (Receptor)                                 |
| descActividad      | Actividad Económica (Receptor)                                           |
| nombreComercial    | Nombre Comercial (Receptor)                                              |
| direccion          | Dirección (Receptor)                                                     |
| telefono           | Teléfono (Receptor)                                                      |
| correo             | Correo electrónico (Receptor)                                             |


### Cuerpo del Documento

| Campo             | Descripción                                              |
|-------------------|----------------------------------------------------------|
| numItem           | N° de ítem                                               |
| tipoDte           | Tipo de ítem                                             |
| tipoGeneracion    | Tipo de generación del documento                        |
| numeroDocumento   | Número de documento relacionado                         |
| fechaGeneracion   | Fecha de generación del documento relacionado           |
| ventaNoSuj        | Ventas no Sujetas                                       |
| ventaExenta       | Ventas Exentas                                          |
| ventaGravada      | Ventas Gravadas                                         |
| exportaciones     | Ventas Exportaciones                                    |
| tributos          | Tributo sujeto a cálculo de IVA                          |
| ivaItem           | IVA por ítem                                             |
| obsItem           | Observaciones por ítem                                  |


### Extensión

| Campo         | Descripción                                                             |
|---------------|-------------------------------------------------------------------------|
| nombEntrega   | Nombre del responsable que Genera el DTE                                |
| docuEntrega   | Documento de identificación de quien genera el DTE                      |
| nombRecibe    | Nombre del responsable de la operación por parte del receptor            |
| docuRecibe    | Documento de identificación del responsable de la operación por parte del receptor |
| observaciones | Observaciones                                                           |


### Apendice

| Campo    | Descripción     | Longitud Máxima |
|----------|-----------------|-----------------|
| campo    | Nombre del campo | 25              |
| etiqueta | Descripción     | 50              |
| valor    | Valor/Dato      | 150             |


### Resumen

| Campo                  | Descripción                            |
|------------------------|----------------------------------------|
| totalNoSuj             | Total de Operaciones no sujetas         |
| totalExenta            | Total de Operaciones exentas            |
| totalGravada           | Total de Operaciones Gravadas           |
| totalExportacion       | Total de Operaciones Exportación        |
| subTotalVentas         | Suma de operaciones sin impuestos       |
| tributos               | Resumen de Tributos                     |
| montoTotalOperacion    | Monto Total de la Operación             |
| ivaPerci               | IVA Percibido liquidado                 |
| total                  | Total a Pagar                           |
| totalLetras            | Total en Letras                         |
| condicionOperacion     | Condición de la Operación               |



## 3.8.5 Importancia del CL
- **Cierre de Transacciones:** Documenta el cierre y la finalización de cuentas entre partes, detallando los pagos realizados, los saldos pendientes y los ajustes necesarios para liquidar una transacción o contrato.

- **Registro Detallado:** Facilita un registro claro y preciso de todos los aspectos financieros relacionados con la liquidación, asegurando que ambas partes tengan un entendimiento común de los términos de la liquidación.

- **Control Financiero:** Ayuda a mantener el control financiero y a garantizar que todas las operaciones se registren adecuadamente, evitando errores y discrepancias en los informes contables.

- **Evidencia Documental:** Proporciona evidencia documental en caso de disputas o auditorías, respaldando los ajustes y pagos realizados, y facilitando la verificación de la correcta liquidación de las cuentas.

- **Transparencia y Cumplimiento:** Contribuye a una mayor transparencia en las transacciones financieras y asegura el cumplimiento de los acuerdos y regulaciones, promoviendo una gestión financiera ordenada y conforme a las normativas.


