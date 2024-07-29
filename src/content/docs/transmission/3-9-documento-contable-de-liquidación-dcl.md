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
| NIT                    | NIT (Receptor)                                           |
| NRC                    | NRC (Receptor)                                           |
| Nombre                 | Nombre, denominación o razón social del contribuyente (Receptor) |
| Codigo Actividad           | Código de Actividad Económica (Receptor)                 |
| Descripción Actividad          | Actividad Económica (Receptor)                           |
| Nombre Comercial        | Nombre Comercial (Receptor)                              |
| Tipo de Establecimiento    | Tipo de establecimiento (Receptor)                       |
| Dirección              | Dirección (Receptor)                                    |
| Telefono               | Teléfono (Receptor)                                     |
| Correo                 | Correo electrónico (Receptor)                            |
| CodigoMH               | Código del establecimiento asignado por el MH            |
| Punto de VentaMH           | Código del Punto de Venta asignado por el MH             |


### **Cuerpo de Documento**
| Campo                         | Descripción                                             |
|-------------------------------|---------------------------------------------------------|
| Periodo de Liquidacion Fecha de Inicio | Fecha inicio del período de Liquidación                |
| Periodo de Liquidacion Fecha de Fin    | Fecha fin del período de Liquidación                   |
| Codigo de Liquidacion                 | Código de Liquidación                                  |
| Cantidad de Documentos                    | Cantidad de Documentos                                 |
| Valor de la Operaciones               | Valor de las Operaciones a Liquidar                    |
| Monto sin Percepción            | Valores no sujetos a percepción                        |
| Descripción sin Percepción          | Descripción del valor no sujeto a percepción           |
| Subtotal                      | Sub-Total                                              |
| IVA                            | IVA de las Operaciones a liquidar                      |
| Monto Sujeto Percepcion         | Monto sujeto a percepción sin IVA                      |
| IVA Percibido                   | IVA Percibido (2%)                                     |
| Comisión                        | Comisión                                               |
| Porcentaje de Comisión                | Porcentaje de Comisión                                 |
| IVA Comisión                    | IVA de la Comisión                                     |
| Liquido a Pagar                 | Valor líquido a pagar al afiliado                      |
| Total Letras                    | Valor en Letras                                        |
| Observaciones                  | Observaciones por ítems                               |

### **Extensión**

| Campo                        | Descripción                                         |
|------------------------------|-----------------------------------------------------|
| Nombre Entrega                 | Nombre del responsable que Genera el DTE           |
| Documento Entrega                 | Documento de identificación de quien genera el DTE |
| Codigo Empleado                 | Código de empleado responsable de la liquidación   |


### **Apéndices**

| Campo   | Descripción         |
|---------|---------------------|
| Campo   | Nombre del campo    |
| Etiqueta| Descripción         |
| Valor   | Valor/Dato          |


## 3.9.3 Importancia del DCL

- **Registro de Liquidaciones:** El Documento Contable de Liquidación (DCL) se utiliza para registrar detalladamente la liquidación de cuentas, ajustes y saldos pendientes entre las partes involucradas en una transacción o contrato.

- **Control y Seguimiento:** Facilita el control y seguimiento preciso de las liquidaciones financieras, asegurando que todos los ajustes y pagos se documenten correctamente en los registros contables.

- **Evidencia para Auditoría:** Proporciona evidencia clara y oficial para auditorías y revisiones contables, respaldando los ajustes y pagos realizados y ayudando a resolver posibles discrepancias.

- **Transparencia Financiera:** Contribuye a la transparencia en la gestión financiera al documentar de manera exhaustiva todos los aspectos relacionados con la liquidación, promoviendo una gestión ordenada y conforme con las normativas.

- **Cumplimiento Normativo:** Asegura el cumplimiento de las regulaciones contables y fiscales al proporcionar un registro detallado de las liquidaciones, facilitando la verificación y la correcta presentación de la información financiera.

## 3.9.4 Descripción de los Campos

### **Cliente (Receptor)**

* **NIT**  
  Número de Identificación Tributaria (NIT) del receptor.

* **NRC**  
  Número de Registro de Contribuyente (NRC) del receptor.

* **Nombre**  
  Nombre completo, denominación o razón social del receptor.

* **Codigo Actividad**  
  Código de Actividad Económica del receptor.

* **Descripción Actividad**  
  Descripción de la actividad económica del receptor.

* **Nombre Comercial**  
  Nombre comercial bajo el cual opera el receptor, si es diferente de la razón social.

* **Tipo de Establecimiento**  
  Tipo de establecimiento en el que opera el receptor (e.g., tienda, oficina, etc.).

* **Dirección**  
  Dirección física completa del receptor (calle, número, colonia, ciudad, etc.).

* **Telefono**  
  Número de teléfono del receptor para contacto.

* **Correo**  
  Dirección de correo electrónico del receptor para comunicaciones y envío de documentos.

* **CodigoMH**  
  Código del establecimiento asignado por el Ministerio de Hacienda (MH).

* **Punto de VentaMH**  
  Código del Punto de Venta asignado por el Ministerio de Hacienda (MH).

### **Cuerpo de Documento**

* **Periodo de Liquidacion Fecha de Inicio**  
  Fecha de inicio del período de liquidación.

* **Periodo de Liquidacion Fecha de Fin**  
  Fecha de fin del período de liquidación.

* **Codigo de Liquidacion**  
  Código de liquidación.

* **Cantidad de Documentos**  
  Cantidad total de documentos.

* **Valor de la Operaciones**  
  Valor total de las operaciones a liquidar.

* **Monto sin Percepción**  
  Valores no sujetos a percepción.

* **Descripción sin Percepción**  
  Descripción del valor no sujeto a percepción.

* **Subtotal**  
  Subtotal de las operaciones.

* **IVA**  
  Monto de IVA de las operaciones a liquidar.

* **Monto Sujeto Percepcion**  
  Monto sujeto a percepción sin IVA.

* **IVA Percibido**  
  Monto de IVA percibido (generalmente al 2%).

* **Comisión**  
  Monto de la comisión.

* **Porcentaje de Comisión**  
  Porcentaje aplicado a la comisión.

* **IVA Comisión**  
  Monto de IVA aplicado a la comisión.

* **Liquido a Pagar**  
  Valor líquido a pagar al afiliado.

* **Total Letras**  
  Valor total en letras.

* **Observaciones**  
  Comentarios o detalles adicionales sobre los ítems.

### **Extensión**

* **Nombre Entrega**  
  Nombre de la persona responsable de generar el DTE.

* **Documento Entrega**  
  Documento de identificación de la persona que genera el DTE.

* **Codigo Empleado**  
  Código del empleado responsable de la liquidación.

### **Apéndices**

* **Campo**  
  Nombre del campo adicional o específico incluido en el apéndice.

* **Etiqueta**  
  Descripción o identificación del campo adicional.

* **Valor**  
  Valor o dato correspondiente al campo y etiqueta mencionados.

## 3.9.5 Componentes del DCL
## 3.9.6 Proceso de Emisión de DCL
## 3.9.7 Uso y Beneficios del DCL
