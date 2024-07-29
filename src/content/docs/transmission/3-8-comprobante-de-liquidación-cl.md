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
| NIT                | NIT (Receptor)                                                           |
| NRC                | NRC (Receptor)                                                           |
| Nombre             | Nombre, denominación o razón social del contribuyente (Receptor)         |
| Codigo Actividad       | Código de Actividad Económica (Receptor)                                 |
| Descripción Actividad      | Actividad Económica (Receptor)                                           |
| Nombre Comercial    | Nombre Comercial (Receptor)                                              |
| Dirección          | Dirección (Receptor)                                                     |
| Teléfono           | Teléfono (Receptor)                                                      |
| Correo             | Correo electrónico (Receptor)                                             |


### Cuerpo del Documento

| Campo             | Descripción                                              |
|-------------------|----------------------------------------------------------|
| Numero de Item           | N° de ítem                                               |
| Tipo DTE           | Tipo de ítem                                             |
| Tipo De Generación    | Tipo de generación del documento                        |
| Numero de Documento   | Número de documento relacionado                         |
| Fecha de Generacion   | Fecha de generación del documento relacionado           |
| Venta No Sujeta        | Ventas no Sujetas                                       |
| Venta Exenta       | Ventas Exentas                                          |
| Venta Gravada      | Ventas Gravadas                                         |
| Exportaciones     | Ventas Exportaciones                                    |
| Tributos          | Tributo sujeto a cálculo de IVA                          |
| IVA Item           | IVA por ítem                                             |
| Observaciones Item           | Observaciones por ítem                                  |


### Extensión

| Campo         | Descripción                                                             |
|---------------|-------------------------------------------------------------------------|
| Nombre Entrega   | Nombre del responsable que Genera el DTE                                |
| Documento Entrega   | Documento de identificación de quien genera el DTE                      |
| Nombre Recibe    | Nombre del responsable de la operación por parte del receptor            |
| Documento Recibe    | Documento de identificación del responsable de la operación por parte del receptor |
| Observaciones | Observaciones                                                           |


### Apendice

| Campo    | Descripción     | Longitud Máxima |
|----------|-----------------|-----------------|
| Campo    | Nombre del campo | 25              |
| Etiqueta | Descripción     | 50              |
| Valor    | Valor/Dato      | 150             |


### Resumen

| Campo                  | Descripción                            |
|------------------------|----------------------------------------|
| Total No Sujeto             | Total de Operaciones no sujetas         |
| Total Exenta            | Total de Operaciones exentas            |
| Total Gravada           | Total de Operaciones Gravadas           |
| Total Exportación       | Total de Operaciones Exportación        |
| SubTotal Ventas         | Suma de operaciones sin impuestos       |
| Tributos               | Resumen de Tributos                     |
| Monto Total Operación    | Monto Total de la Operación             |
| IVA Percibido               | IVA Percibido liquidado                 |
| Total                  | Total a Pagar                           |
| Condición de la Operación     | Condición de la Operación               |



## 3.8.3 Importancia del CL
- **Cierre de Transacciones:** Documenta el cierre y la finalización de cuentas entre partes, detallando los pagos realizados, los saldos pendientes y los ajustes necesarios para liquidar una transacción o contrato.

- **Registro Detallado:** Facilita un registro claro y preciso de todos los aspectos financieros relacionados con la liquidación, asegurando que ambas partes tengan un entendimiento común de los términos de la liquidación.

- **Control Financiero:** Ayuda a mantener el control financiero y a garantizar que todas las operaciones se registren adecuadamente, evitando errores y discrepancias en los informes contables.

- **Evidencia Documental:** Proporciona evidencia documental en caso de disputas o auditorías, respaldando los ajustes y pagos realizados, y facilitando la verificación de la correcta liquidación de las cuentas.

- **Transparencia y Cumplimiento:** Contribuye a una mayor transparencia en las transacciones financieras y asegura el cumplimiento de los acuerdos y regulaciones, promoviendo una gestión financiera ordenada y conforme a las normativas.

## 3.8.4 Descripción de los Campos
## 3.8.5 Componentes del CL
## 3.8.6 Proceso de Emisión de CL
## 3.8.7 Uso y Beneficios del CL


