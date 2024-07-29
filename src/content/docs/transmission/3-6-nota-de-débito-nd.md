---
title: 3.6 Nota de Débito (ND)
date: 2024-07-22T16:39:00.000Z
sidebar:
  order: 6
---


## 3.6.1 Resumen

Una Nota de Débito es un documento comercial utilizado para registrar un aumento en el monto adeudado por un cliente a un proveedor. Este documento se emite cuando hay cargos adicionales por conceptos como intereses por pagos tardíos, ajustes en precios, errores en facturas previas o cualquier otro motivo que justifique un incremento en la deuda del cliente. La Nota de Débito permite a las empresas mantener un registro claro y actualizado de las transacciones y ajustes financieros, asegurando la precisión en la contabilidad y facilitando la gestión de cuentas por cobrar.

## 3.6.2 Conceptos Básicos

### **Cliente (Receptor)**

| Campo          | Descripción                                                                                                 |
|----------------|-------------------------------------------------------------------------------------------------------------|
| NIT            | NIT (Receptor)                                                                                             |
| NRC            | NRC (Receptor)                                                                                             |
| Nombre         | Nombre, denominación o razón social del contribuyente (Receptor)                                           |
| Codigo de Actividad   | Código de Actividad Económica (Receptor)                                                                    |
| Descripción de Actividad  | Actividad Económica (Receptor)                                                                             |
| Nombre Comercial| Nombre Comercial (Receptor)                                                                                  |
| Dirección      | Dirección (Receptor)                                                                                       |
| Teléfono       | Teléfono (Receptor)                                                                                         |
| Correo         | Correo electrónico (Receptor)                                                                              |


### **Documentos Relacionados**

| Campo            | Descripción                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| Tipo de Documento    | Tipo de Documento Tributario Relacionado                                                          |
| Tipo de Generacion   | Tipo de Generación del Documento Tributario relacionado                                           |
| Numero de Documento  | Número de documento relacionado                                                                   |
| Fecha de Emision     | Fecha de Generación del Documento Relacionado                                                     |


### **Cuerpo de Documento**

| Campo           | Descripción                                             |
|-----------------|---------------------------------------------------------|
| Numero de Item          | N° de ítem                                              |
| Tipo de Item         | Tipo de ítem                                            |
| Numero de Documento  | Número de documento relacionado                        |
| Cantidad         | Cantidad                                                |
| Codigo           | Código                                                  |
| Codigo de Tributo       | Tributo sujeto a cálculo de IVA                         |
| Unidad de Medida        | Unidad de Medida                                        |
| Descripcion      | Descripción                                             |
| Precio Unitario        | Precio Unitario                                         |
| Monto de Descuento       | Descuento, Bonificación, Rebajas por ítem               |
| Venta No Sujeta       | Ventas No Sujetas                                       |
| Venta Exenta      | Ventas Exentas                                          |
| Venta Gravada     | Ventas Gravadas                                         |
| Tributos         | Código del Tributo                                      |


### **Venta Tercero**

| Campo  | Descripción                                      |
|--------|--------------------------------------------------|
| NIT    | NIT por cuenta de Terceros                       |
| Nombre | Nombre, denominación o razón social del Tercero  |


### **Extensión**

| Campo         | Descripción                                                          |
|---------------|----------------------------------------------------------------------|
| Nombre Entrega   | Nombre del responsable que Genera el DTE                              |
| Documento Entrega   | Documento de identificación de quien genera el DTE                    |
| Nombre Recibe    | Nombre del responsable de la operación por parte del receptor          |
| Documento Recibe    | Documento de identificación del responsable de la operación por parte del receptor |
| Observaciones | Observaciones                                                         |


### **Apéndices**

| Campo   | Descripción                    |
|---------|--------------------------------|
| Campo   | Nombre del campo                |
| Etiqueta| Descripción                     |
| Valor   | Valor/Dato                      |



## 3.6.3 Importancia del ND

* **Ajuste de Facturación:** La Nota de Débito (ND) permite aumentar el monto de una factura previamente emitida debido a cargos adicionales, errores en facturación, intereses por pagos tardíos, o ajustes necesarios.

* **Corrección de Errores:** Facilita la corrección de errores o ajustes en las facturas originales, asegurando que el monto adeudado refleje adecuadamente los cargos adicionales o modificaciones requeridas.

* **Registro de Cargos Adicionales:** Documenta los cargos adicionales que deben ser cobrados al cliente, como intereses, tarifas por servicios adicionales, o correcciones en el precio de los productos o servicios.

* **Facilita la Contabilidad:** Ayuda a mantener una contabilidad precisa al registrar adecuadamente los ajustes en las facturas, mejorando la exactitud en los informes financieros y en la gestión de cuentas por cobrar.

* **Transparencia y Cumplimiento:** Promueve la transparencia en las transacciones comerciales y asegura el cumplimiento de las normativas fiscales, proporcionando un documento oficial que respalda los ajustes en el monto adeudado.


## 3.6.4 Descripción de los Campos

### **Cliente (Receptor)**

* **NIT**  
  Número de Identificación Tributaria del receptor. Es el identificador fiscal único asignado al receptor por las autoridades fiscales.

* **NRC**  
  Número de Registro de Contribuyente del receptor. Es un número único que identifica al receptor dentro del sistema tributario.

* **Nombre**  
  Nombre, denominación o razón social del contribuyente (Receptor). Es el nombre completo de una persona o la razón social de una empresa.

* **Codigo de Actividad**  
  Código de Actividad Económica del receptor. Un código que clasifica la principal actividad económica del receptor según las normativas fiscales.

* **Descripción de Actividad**  
  Actividad Económica del receptor. Descripción detallada de la actividad o negocio principal del receptor.

* **Nombre Comercial**  
  Nombre Comercial del receptor. El nombre bajo el cual el receptor realiza sus actividades comerciales, que puede ser diferente del nombre legal.

* **Dirección**  
  Dirección del receptor. Incluye todos los detalles necesarios como calle, número, colonia, ciudad y código postal.

* **Teléfono**  
  Número de teléfono del receptor. Debe incluir el código de país y área si corresponde.

* **Correo**  
  Correo electrónico del receptor. Debe ser una dirección válida para la comunicación electrónica.

### **Documentos Relacionados**

* **Tipo de Documento**  
  Tipo de Documento Tributario Relacionado. Especifica el tipo de documento relacionado con la transacción, como una factura o nota de crédito.

* **Tipo de Generación**  
  Tipo de Generación del Documento Tributario relacionado. Indica si el documento relacionado es una factura original, una nota de crédito, etc.

* **Numero de Documento**  
  Número de documento relacionado. El número único del documento que se está referenciando.

* **Fecha de Emisión**  
  Fecha de Generación del Documento Relacionado. La fecha en que se generó el documento relacionado.

### **Cuerpo de Documento**

* **Numero de Item**  
  N° de ítem. Número secuencial que identifica cada ítem en el documento.

* **Tipo de Item**  
  Tipo de ítem. Define si el ítem es un producto, servicio, u otro tipo de bien o servicio.

* **Numero de Documento**  
  Número de documento relacionado. Referencia al número del documento asociado con el ítem.

* **Cantidad**  
  Cantidad. Número de unidades del ítem.

* **Codigo**  
  Código. Código único del ítem.

* **Codigo de Tributo**  
  Tributo sujeto a cálculo de IVA. Código del impuesto aplicado al ítem para el cálculo del IVA.

* **Unidad de Medida**  
  Unidad de Medida. Unidad en la que se mide el ítem, como litros, kilogramos, unidades, etc.

* **Descripción**  
  Descripción. Descripción detallada del ítem.

* **Precio Unitario**  
  Precio Unitario. Precio por unidad del ítem antes de aplicar cualquier descuento o impuesto.

* **Monto de Descuento**  
  Descuento, Bonificación, Rebajas por ítem. Monto descontado del precio unitario del ítem.

* **Venta No Sujeta**  
  Ventas No Sujetas. Ventas que no están sujetas a impuestos.

* **Venta Exenta**  
  Ventas Exentas. Ventas que están exentas de impuestos.

* **Venta Gravada**  
  Ventas Gravadas. Ventas que están sujetas a impuestos.

* **Tributos**  
  Código del Tributo. Código del impuesto que se aplica al ítem.

### **Venta Tercero**

* **NIT**  
  Número de Identificación Tributaria del tercero involucrado en la venta. Identificador fiscal del tercero en la transacción.

* **Nombre**  
  Nombre completo o razón social del tercero que participa en la venta. Puede ser el nombre de una persona o la razón social de una empresa.

### **Extensión**

* **Nombre Entrega**  
  Nombre del responsable que genera el DTE (Documento Tributario Electrónico). Persona que emite o genera el documento.

* **Documento Entrega**  
  Documento de identificación de quien genera el DTE. Número de identificación del emisor del documento.

* **Nombre Recibe**  
  Nombre del responsable de la operación por parte del receptor. Persona que recibe el producto o servicio.

* **Documento Recibe**  
  Documento de identificación del responsable de la operación por parte del receptor. Número de identificación del receptor.

* **Observaciones**  
  Observaciones. Comentarios o detalles adicionales relevantes para la transacción.

### **Apéndices**

* **Campo**  
  Nombre del campo. Nombre del campo adicional o específico en el apéndice.

* **Etiqueta**  
  Descripción. Identificación o descripción del campo.

* **Valor**  
  Valor/Dato. Información específica correspondiente al campo y etiqueta.

## 3.6.5 Componentes del ND
## 3.6.6 Proceso de Emisión de ND
## 3.6.7 Uso y Beneficios del ND

