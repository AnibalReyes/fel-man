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

### **Receptor**

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

* **Dirección**  
  Dirección física completa del receptor (calle, número, colonia, ciudad, etc.).

* **Teléfono**  
  Número de teléfono del receptor para contacto.

* **Correo**  
  Dirección de correo electrónico del receptor para comunicaciones y envío de documentos.

### **Cuerpo del Documento**

* **Numero de Item**  
  Número de ítem en el documento.

* **Tipo DTE**  
  Tipo de documento tributario electrónico (DTE) asociado al ítem.

* **Tipo De Generación**  
  Tipo de generación del documento relacionado (e.g., emisión, anulación).

* **Numero de Documento**  
  Número del documento relacionado.

* **Fecha de Generacion**  
  Fecha de generación del documento relacionado.

* **Venta No Sujeta**  
  Ventas que no están sujetas a impuestos.

* **Venta Exenta**  
  Ventas que están exentas de impuestos.

* **Venta Gravada**  
  Ventas que están sujetas a impuestos.

* **Exportaciones**  
  Ventas realizadas con destino a exportación.

* **Tributos**  
  Tributo sujeto a cálculo de IVA.

* **IVA Item**  
  Monto de IVA aplicado al ítem.

* **Observaciones Item**  
  Comentarios o detalles adicionales sobre el ítem.

### **Extensión**

* **Nombre Entrega**  
  Nombre de la persona responsable de generar el DTE.

* **Documento Entrega**  
  Documento de identificación de la persona que genera el DTE.

* **Nombre Recibe**  
  Nombre de la persona que recibe el producto o servicio.

* **Documento Recibe**  
  Documento de identificación de la persona que recibe el producto o servicio.

* **Observaciones**  
  Cualquier comentario o detalle adicional relevante sobre la entrega o recepción.

### **Apendice**

* **Campo**  
  Nombre del campo adicional o específico que se está incluyendo en el apéndice del documento. Longitud máxima: 25 caracteres.

* **Etiqueta**  
  Descripción o identificación del campo adicional. Longitud máxima: 50 caracteres.

* **Valor**  
  Valor o dato correspondiente al campo y etiqueta mencionados. Longitud máxima: 150 caracteres.

### **Resumen**

* **Total No Sujeto**  
  Total de operaciones no sujetas a impuestos.

* **Total Exenta**  
  Total de operaciones exentas de impuestos.

* **Total Gravada**  
  Total de operaciones gravadas con impuestos.

* **Total Exportación**  
  Total de operaciones relacionadas con exportación.

* **SubTotal Ventas**  
  Suma de operaciones sin impuestos.

* **Tributos**  
  Resumen de los tributos aplicados.

* **Monto Total Operación**  
  Monto total de la operación, incluyendo todos los ítems y ajustes.

* **IVA Percibido**  
  Monto de IVA percibido o liquidado en la operación.

* **Total**  
  Total a pagar después de aplicar impuestos y descuentos.

* **Condición de la Operación**  
  Estado o condición de la operación (e.g., pagado, pendiente).

## 3.8.5 Componentes del CL
## 3.8.6 Proceso de Emisión de CL
## 3.8.7 Uso y Beneficios del CL


