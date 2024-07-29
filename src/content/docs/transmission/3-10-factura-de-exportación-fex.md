---
title: 3.10 Factura de Exportación (FEX)
date: 2024-07-22T16:46:00.000Z
sidebar:
  order: 10
---
## 3.10.1 Resumen

Una Factura de Exportación es un documento comercial utilizado para registrar y detallar la venta de bienes a clientes en el extranjero. Este documento incluye información clave como la descripción de los productos, cantidades, precios, términos de venta, y condiciones de envío. La Factura de Exportación es esencial para cumplir con las regulaciones aduaneras y fiscales del país exportador y del país importador, y facilita el despacho aduanero al proporcionar una declaración precisa del valor y contenido de la mercancía. Además, este documento sirve como respaldo para el cobro de la venta y para la reclamación de beneficios fiscales relacionados con la exportación.

## 3.10.2 Conceptos básicos

### **Emisor**

| Campo                  | Descripción                                                                                     |
|------------------------|-------------------------------------------------------------------------------------------------|
| NIT                    | NIT (Emisor)                                                                                   |
| NRC                    | NRC (Emisor)                                                                                   |
| Nombre                 | Nombre, denominación o razón social del contribuyente (Emisor)                                |
| Codigo Actividad          | Código de Actividad Económica (Emisor)                                                        |
| Desc Actividad         | Actividad Económica (Emisor)                                                                   |
| Nombre Comercial       | Nombre Comercial (Emisor)                                                                      |
| Tipo Establecimiento  | Tipo de establecimiento (Emisor)                                                               |
| Dirección              | Dirección (Emisor)                                                                           |
| Teléfono               | Teléfono (Emisor)                                                                             |
| Correo                 | Correo electrónico (Emisor)                                                                    |
| Codigo EstablecimientoMH         | Código del establecimiento asignado por el MH                                                   |
| Codigo Establecimiento            | Código del establecimiento asignado por el contribuyente                                        |
| Codigo de Punto de Venta MH     | Código del Punto de Venta (Emisor) Asignado por el MH                                          |
| Codigo Punto Venta        | Código del Punto de Venta (Emisor) asignado por el contribuyente                                |
| Tipo de Item Expor        | Tipo de ítem                                                                                   |
| Recinto Fiscal         | Recinto fiscal                                                                                |
| Regimen                | Régimen de exportación                                                                         |


### **Cliente (Receptor)**

| Campo                  | Descripción                                                                                      |
|------------------------|--------------------------------------------------------------------------------------------------|
| Nombre                 | Nombre, denominación o razón social del contribuyente (Receptor)                                |
| Tipo Documento         | Tipo de documento de identificación (Receptor)                                                   |
| Numero de Documento          | Número de documento de Identificación (Receptor)                                                 |
| Nombre Comercial       | Nombre, denominación o razón social del contribuyente (Receptor)                                |
| Codigo de Pais               | Código de país (receptor)                                                                        |
| Nombre de Pais            | País destino de la exportación (receptor)                                                         |
| Complemento            | Colocar las especificaciones de la dirección                                                      |
| Tipo Persona           | Tipo de persona jurídica o persona natural                                                        |
| Descripción de Actividad         | Actividad Económica (Receptor)                                                                   |
| Teléfono               | Teléfono (Receptor)                                                                             |
| Correo                 | Correo electrónico (Receptor)                                                                    |


### **Cuerpo de Documento**
| Campo                | Descripción                                                                     |
|----------------------|---------------------------------------------------------------------------------|
| Numero de Item             | N° de ítem                                                                       |
| Cantidad             | Cantidad                                                                         |
| Código               | Código                                                                           |
| Unidad de Medida           | Unidad de Medida                                                                  |
| Descripción          | Descripción                                                                      |
| Precio Unitario           | Precio Unitario                                                                   |
| Monto Descu          | Descuento, Bonificación, Rebajas por ítem                                        |
| Venta Gravada        | Ventas Gravadas                                                                   |
| Tributos             | Código del Tributo                                                                |
| No Gravado           | Cargos / Abonos que no afectan la base imponible                                 |


### **Venta Tercero**

| Campo  | Descripción                                   |
|--------|-----------------------------------------------|
| nit    | NIT por cuenta de Terceros                    |
| nombre | Nombre, denominación o razón social del Tercero |



### **Apéndices**

| Campo   | Descripción  |
|---------|--------------|
| campo   | Nombre del campo |
| etiqueta | Descripción  |
| valor   | Valor/Dato   |


### **Otros Documentos**

| Campo               | Descripción                                     |
|---------------------|-------------------------------------------------|
| Codigo de Documento Asociado      | Documento asociado                              |
| Descripción del Documento       | Identificación del documento asociado           |
| Detalle del Documento    | Descripción de documento asociado               |
| Placa de Transporte          | Número de identificación del transporte         |
| Modo de Transporte          | Modo de transporte                              |
| Numero de Conductor        | N documento de identificación del Conductor     |
| Nombre del Conductor     | Nombre y apellidos del Conductor                |


## 3.10.3 Importancia del FEX

- **Documentación de Exportaciones:** La Factura de Exportación (FEX) documenta las ventas de bienes o servicios realizadas a clientes en el extranjero, detallando los productos o servicios, cantidades, precios y términos de la transacción.

- **Cumplimiento Aduanero:** Facilita el cumplimiento de las regulaciones aduaneras y fiscales tanto en el país exportador como en el país importador, proporcionando la información necesaria para el despacho aduanero.

- **Registro de Ventas Internacionales:** Sirve como registro oficial de las ventas internacionales, ayudando en la gestión y control de las operaciones comerciales y en la contabilidad de la empresa.

- **Evidencia para el Cobro:** Proporciona un documento formal para la reclamación del pago por parte del exportador, asegurando que la venta esté debidamente registrada y respaldada.

- **Beneficios Fiscales:** Permite la reclamación de beneficios fiscales relacionados con la exportación, como exenciones de impuestos o deducciones, facilitando una correcta gestión fiscal de las transacciones internacionales.

## 3.10.4 Descripción de los Campos

Aquí está la descripción de cada campo en formato Markdown:

### **Emisor**

* **NIT**  
  Número de Identificación Tributaria (NIT) del emisor.

* **NRC**  
  Número de Registro de Contribuyente (NRC) del emisor.

* **Nombre**  
  Nombre completo, denominación o razón social del contribuyente (emisor).

* **Codigo Actividad**  
  Código de Actividad Económica del emisor.

* **Desc Actividad**  
  Descripción de la actividad económica del emisor.

* **Nombre Comercial**  
  Nombre comercial bajo el cual opera el emisor, si es diferente de la razón social.

* **Tipo Establecimiento**  
  Tipo de establecimiento en el que opera el emisor (e.g., tienda, oficina, etc.).

* **Dirección**  
  Dirección física completa del emisor (calle, número, colonia, ciudad, etc.).

* **Teléfono**  
  Número de teléfono del emisor para contacto.

* **Correo**  
  Dirección de correo electrónico del emisor para comunicaciones y envío de documentos.

* **Codigo EstablecimientoMH**  
  Código del establecimiento asignado por el Ministerio de Hacienda (MH).

* **Codigo Establecimiento**  
  Código del establecimiento asignado por el contribuyente.

* **Codigo de Punto de Venta MH**  
  Código del Punto de Venta asignado por el Ministerio de Hacienda (MH).

* **Codigo Punto Venta**  
  Código del Punto de Venta asignado por el contribuyente.

* **Tipo de Item Expor**  
  Tipo de ítem relacionado con la exportación.

* **Recinto Fiscal**  
  Recinto fiscal donde se realiza la operación.

* **Regimen**  
  Régimen de exportación aplicable.

### **Cliente (Receptor)**

* **Nombre**  
  Nombre completo, denominación o razón social del receptor.

* **Tipo Documento**  
  Tipo de documento de identificación del receptor (e.g., DUI, NIT, pasaporte).

* **Numero de Documento**  
  Número del documento de identificación del receptor.

* **Nombre Comercial**  
  Nombre comercial del receptor, si es diferente de la razón social.

* **Codigo de Pais**  
  Código del país del receptor.

* **Nombre de Pais**  
  Nombre del país destino de la exportación.

* **Complemento**  
  Especificaciones adicionales de la dirección del receptor.

* **Tipo Persona**  
  Tipo de persona jurídica o natural del receptor.

* **Descripción de Actividad**  
  Descripción de la actividad económica del receptor.

* **Teléfono**  
  Número de teléfono del receptor para contacto.

* **Correo**  
  Dirección de correo electrónico del receptor.

### **Cuerpo de Documento**

* **Numero de Item**  
  Número de ítem en el documento.

* **Cantidad**  
  Cantidad del ítem.

* **Código**  
  Código del ítem.

* **Unidad de Medida**  
  Unidad de medida del ítem.

* **Descripción**  
  Descripción del ítem.

* **Precio Unitario**  
  Precio unitario del ítem.

* **Monto Descu**  
  Monto de descuento, bonificación o rebajas aplicadas al ítem.

* **Venta Gravada**  
  Ventas sujetas a impuestos (gravadas).

* **Tributos**  
  Código del tributo aplicado.

* **No Gravado**  
  Cargos o abonos que no afectan la base imponible.

### **Venta Tercero**

* **nit**  
  NIT por cuenta de terceros.

* **nombre**  
  Nombre, denominación o razón social del tercero.

### **Apéndices**

* **Campo**  
  Nombre del campo adicional o específico incluido en el apéndice.

* **Etiqueta**  
  Descripción o identificación del campo adicional.

* **Valor**  
  Valor o dato correspondiente al campo y etiqueta mencionados.

### **Otros Documentos**

* **Codigo de Documento Asociado**  
  Código del documento asociado.

* **Descripción del Documento**  
  Identificación del documento asociado.

* **Detalle del Documento**  
  Descripción del documento asociado.

* **Placa de Transporte**  
  Número de placa del vehículo de transporte.

* **Modo de Transporte**  
  Modo de transporte utilizado.

* **Numero de Conductor**  
  Número de documento de identificación del conductor.

* **Nombre del Conductor**  
  Nombre y apellidos del conductor.

## 3.10.5 Componentes del FEX
## 3.10.6 Proceso de Emisión de FEX
## 3.10.7 Uso y Beneficios del FEX
