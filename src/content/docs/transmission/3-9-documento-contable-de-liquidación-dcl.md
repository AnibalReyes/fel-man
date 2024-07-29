---
title: 3.9 Documento Contable de Liquidación (DCL)
date: 2024-07-22T16:45:00.000Z
sidebar:
  order: 9
---
## 3.9.1 Resumen

Un Documento Contable de Liquidación (DCL) es un registro financiero utilizado para documentar la liquidación de cuentas y ajustes finales en una transacción o contrato. Este documento detalla los montos pagados, los saldos pendientes, y cualquier ajuste necesario para cerrar las cuentas entre las partes involucradas. El DCL asegura que todos los aspectos financieros de la transacción estén claramente registrados y que ambas partes tengan un entendimiento preciso de los términos de la liquidación. Además, este documento es fundamental para mantener la transparencia y precisión en la contabilidad, facilitando la auditoría y el control financiero.

## 3.9.2 Conceptos básicos

### **Cliente (Receptor)**

| Campo                  | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| nit                    | NIT (Receptor)                                           |
| nrc                    | NRC (Receptor)                                           |
| nombre                 | Nombre, denominación o razón social del contribuyente (Receptor) |
| codActividad           | Código de Actividad Económica (Receptor)                 |
| descActividad          | Actividad Económica (Receptor)                           |
| nombreComercial        | Nombre Comercial (Receptor)                              |
| tipoEstablecimiento    | Tipo de establecimiento (Receptor)                       |
| direccion              | Dirección (Receptor)                                    |
| telefono               | Teléfono (Receptor)                                     |
| correo                 | Correo electrónico (Receptor)                            |
| codigoMH               | Código del establecimiento asignado por el MH            |
| puntoVentaMH           | Código del Punto de Venta asignado por el MH             |


### **Cuerpo de Documento**
| Campo                         | Descripción                                             |
|-------------------------------|---------------------------------------------------------|
| periodo liquidacion fecha inicio | Fecha inicio del período de Liquidación                |
| periodo liquidacion fecha fin    | Fecha fin del período de Liquidación                   |
| cod liquidacion                 | Código de Liquidación                                  |
| cantidad doc                    | Cantidad de Documentos                                 |
| valor operaciones               | Valor de las Operaciones a Liquidar                    |
| monto sin percepcion            | Valores no sujetos a percepción                        |
| descrip sin percepcion          | Descripción del valor no sujeto a percepción           |
| sub total                      | Sub-Total                                              |
| iva                            | IVA de las Operaciones a liquidar                      |
| monto sujeto percepcion         | Monto sujeto a percepción sin IVA                      |
| iva percibido                   | IVA Percibido (2%)                                     |
| comision                        | Comisión                                               |
| porcent comision                | Porcentaje de Comisión                                 |
| iva comision                    | IVA de la Comisión                                     |
| liquido a pagar                 | Valor líquido a pagar al afiliado                      |
| total letras                    | Valor en Letras                                        |
| observaciones                  | Observaciones por ítems                               |

### **Extensión**

| Campo                        | Descripción                                         |
|------------------------------|-----------------------------------------------------|
| nomb entrega                 | Nombre del responsable que Genera el DTE           |
| docu entrega                 | Documento de identificación de quien genera el DTE |
| cod empleado                 | Código de empleado responsable de la liquidación   |


### **Apéndices**

| Campo   | Descripción         |
|---------|---------------------|
| campo   | Nombre del campo    |
| etiqueta| Descripción         |
| valor   | Valor/Dato          |


## 3.9.5 Importancia del DCL

- **Registro de Liquidaciones:** El Documento Contable de Liquidación (DCL) se utiliza para registrar detalladamente la liquidación de cuentas, ajustes y saldos pendientes entre las partes involucradas en una transacción o contrato.

- **Control y Seguimiento:** Facilita el control y seguimiento preciso de las liquidaciones financieras, asegurando que todos los ajustes y pagos se documenten correctamente en los registros contables.

- **Evidencia para Auditoría:** Proporciona evidencia clara y oficial para auditorías y revisiones contables, respaldando los ajustes y pagos realizados y ayudando a resolver posibles discrepancias.

- **Transparencia Financiera:** Contribuye a la transparencia en la gestión financiera al documentar de manera exhaustiva todos los aspectos relacionados con la liquidación, promoviendo una gestión ordenada y conforme con las normativas.

- **Cumplimiento Normativo:** Asegura el cumplimiento de las regulaciones contables y fiscales al proporcionar un registro detallado de las liquidaciones, facilitando la verificación y la correcta presentación de la información financiera.
