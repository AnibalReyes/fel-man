---
title: 3.5 Nota de Crédito (NC)
date: 2024-07-22T16:37:00.000Z
sidebar:
  order: 5
---
## 3.5.1 Resumen

Una Nota de Crédito Electrónica (NCE) es un documento fiscal digital utilizado para anular total o parcialmente una factura electrónica previamente emitida, ya sea por devoluciones, descuentos, o errores.

## 3.5.2 Conceptos básicos

### **Cliente (Receptor)**

| **Campo**          | **Descripción**                                                   |
|--------------------|-------------------------------------------------------------------|
| NIT                | NIT (Receptor)                                                    |
| NRC                | NRC (Receptor)                                                    |
| Nombre             | Nombre, denominación o razón social del contribuyente (Receptor)  |
| Codigo de Actividad       | Código de Actividad Económica (Receptor)                          |
| Descripció Actividad      | Actividad Económica (Receptor)                                    |
| Nombre Comercial    | Nombre Comercial (Receptor)                                       |
| Dirección          | Dirección (Receptor)                                              |
| Telefono           | Teléfono (Receptor)                                               |
| Correo             | Correo electrónico (Receptor)                                     |

### **Documentos Relacionados**
| **Campo**           | **Descripción**                                                 |
|---------------------|-----------------------------------------------------------------|
| Tipo de Documento       | Tipo de Documento Tributario Relacionado                        |
| Tipo de Generación      | Tipo de Generación del Documento Tributario relacionado           |
| Numero de Documento     | Número de documento relacionado                                  |
| Fecha de Emisión        | Fecha de Generación del Documento Relacionado                    |


### **Cuerpo de Documento**
| **Campo**           | **Descripción**                                           |
|---------------------|-----------------------------------------------------------|
| Numero de Item             | N° de ítem                                                |
| Tipo Item            | Tipo de ítem                                              |
| Numero de Documento     | Número de documento relacionado                           |
| Cantidad            | Cantidad                                                  |
| Codigo              | Código                                                    |
| Codigo de Tributo          | Tributo sujeto a cálculo de IVA                           |
| Unidad de Medida           | Unidad de Medida                                          |
| Descripción         | Descripción                                               |
| Precio Unitario           | Precio Unitario                                           |
| Monto de Descuento          | Descuento, Bonificación, Rebajas por ítem                 |
| Venta No Sujeta          | Ventas no Sujetas                                         |
| Venta Exenta         | Ventas Exentas                                            |
| Venta Gravada        | Ventas Gravadas                                           |
| Tributos            | Código del Tributo                                        |

### **Venta Tercero**
| **Campo** | **Descripción**                                         |
|-----------|---------------------------------------------------------|
| NIT       | NIT por cuenta de Terceros                              |
| Nombre    | Nombre, denominación o razón social del Tercero         |


### **Extensión**
| **Campo**       | **Descripción**                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------|
| Nombre Entrega     | Nombre del responsable que Genera el DTE                                                        |
| Documento Entrega     | Documento de identificación de quien genera el DTE                                              |
| Nombre Recibe      | Nombre del responsable de la operación por parte del receptor                                    |
| Documento Recibe      | Documento de identificación del responsable de la operación por parte del receptor               |
| Observaciones   | Observaciones                                                                                   |


### **Apéndices**
| Campo    | Descripción           |
|----------|-----------------------|
| Campo    | Nombre del campo       |
| Etiqueta | Descripción           |
| Valor    | Valor/Dato            |


## 3.5.3 Importancia de la Nota de Crédito Electrónica

* **Ajuste de Facturación:** La Nota de Crédito (NC) permite ajustar el monto de una factura previamente emitida, ya sea por errores en la facturación, devoluciones de productos o descuentos aplicados después de la emisión de la factura original.

* **Corrección de Errores:** Facilita la corrección de errores en las facturas, como cantidades incorrectas, precios erróneos o cualquier otro ajuste necesario, asegurando la exactitud en la contabilidad y en el registro de transacciones.

* **Registro de Devoluciones:** Documenta las devoluciones de bienes o mercancías, proporcionando un registro claro de los productos devueltos y los ajustes correspondientes en el crédito del cliente.

* **Facilita la Contabilidad:** Ayuda en la gestión y conciliación de cuentas por cobrar al registrar correctamente las modificaciones en las facturas emitidas, mejorando la precisión en los informes financieros y las declaraciones fiscales.

* **Transparencia y Cumplimiento:** Promueve la transparencia en las transacciones comerciales y asegura el cumplimiento de las normativas fiscales, proporcionando un documento oficial que respalda los ajustes realizados en las facturas.

## 3.5.4 Descripción de los Campos

### **Cliente (Receptor)**

* **NIT**  
  Número de Identificación Tributaria del receptor. Debe ser un número único que identifica al receptor ante las autoridades fiscales.

* **NRC**  
  Número de Registro de Contribuyente del receptor. Este número sirve para registrar al receptor en el sistema tributario.

* **Nombre**  
  Nombre, denominación o razón social del contribuyente (Receptor). Puede ser el nombre completo de una persona o la razón social de una empresa.

* **Codigo de Actividad**  
  Código de Actividad Económica del receptor. Un código que clasifica la actividad económica principal del receptor según el sistema tributario.

* **Descripción Actividad**  
  Actividad Económica del receptor. Descripción detallada de la actividad económica o comercial que realiza el receptor.

* **Nombre Comercial**  
  Nombre Comercial del receptor. Nombre bajo el cual el receptor realiza su actividad comercial, si es diferente del nombre legal.

* **Dirección**  
  Dirección completa del receptor. Debe incluir todos los detalles necesarios como calle, número, colonia, ciudad y código postal.

* **Teléfono**  
  Número de teléfono del receptor. Debe incluir el código de país y área si aplica.

* **Correo**  
  Correo electrónico del receptor. Debe ser una dirección válida para enviar comunicaciones electrónicas.

### **Documentos Relacionados**

* **Tipo de Documento**  
  Tipo de Documento Tributario Relacionado. Indica el tipo de documento que está relacionado con la transacción, como una factura o una nota de crédito.

* **Tipo de Generación**  
  Tipo de Generación del Documento Tributario relacionado. Especifica si el documento relacionado es una factura original, nota de crédito, entre otros.

* **Numero de Documento**  
  Número de documento relacionado. El número único del documento que está siendo referenciado.

* **Fecha de Emisión**  
  Fecha de Generación del Documento Relacionado. La fecha en la que se emitió el documento relacionado.

### **Cuerpo de Documento**

* **Numero de Item**  
  N° de ítem. Número secuencial que identifica cada línea o ítem en el documento.

* **Tipo Item**  
  Tipo de ítem. Indica si el ítem es un producto, servicio, o cualquier otro tipo de bien o servicio.

* **Numero de Documento**  
  Número de documento relacionado. Referencia al número del documento que está asociado con el ítem.

* **Cantidad**  
  Cantidad. Número de unidades del ítem descrito.

* **Codigo**  
  Código. Código único del ítem, generalmente un SKU o código de barras.

* **Codigo de Tributo**  
  Tributo sujeto a cálculo de IVA. Código del tributo que se aplica al ítem para calcular el IVA.

* **Unidad de Medida**  
  Unidad de Medida. La unidad en la que se mide el ítem, como litros, kilogramos, unidades, etc.

* **Descripción**  
  Descripción. Descripción detallada del ítem.

* **Precio Unitario**  
  Precio Unitario. Precio por unidad del ítem antes de aplicar cualquier descuento o impuesto.

* **Monto de Descuento**  
  Descuento, Bonificación, Rebajas por ítem. Monto descontado del precio unitario del ítem.

* **Venta No Sujeta**  
  Ventas no Sujetas. Ventas que no están sujetas a impuestos.

* **Venta Exenta**  
  Ventas Exentas. Ventas que están exentas de impuestos.

* **Venta Gravada**  
  Ventas Gravadas. Ventas que están sujetas a impuestos.

* **Tributos**  
  Código del Tributo. Código del impuesto que se aplica al ítem.

### **Venta Tercero**

* **NIT**  
  Número de Identificación Tributaria del tercero involucrado en la venta. Es el identificador fiscal del tercero en la transacción.

* **Nombre**  
  Nombre completo o razón social del tercero que participa en la venta. Puede ser el nombre de una persona o la razón social de una empresa que actúa como intermediario.

### **Extensión**

* **Nombre Entrega**  
  Nombre del responsable que genera el DTE (Documento Tributario Electrónico). La persona que emite o genera el documento.

* **Documento Entrega**  
  Documento de identificación de quien genera el DTE. Puede ser un número de identificación, como un DUI o NIT.

* **Nombre Recibe**  
  Nombre del responsable de la operación por parte del receptor. La persona que recibe el producto o servicio.

* **Documento Recibe**  
  Documento de identificación del responsable de la operación por parte del receptor. Número de identificación de la persona que recibe.

* **Observaciones**  
  Observaciones. Cualquier comentario o detalle adicional relevante sobre la transacción.

### **Apéndices**

* **Campo**  
  Nombre del campo. Nombre del campo adicional o específico incluido en el apéndice.

* **Etiqueta**  
  Descripción. Identificación o descripción del campo.

* **Valor**  
  Valor/Dato. Información específica correspondiente a la etiqueta y campo mencionados.
## 3.5.5 Componentes del NC

## 3.5.6 Proceso de Emisión de NC

1. Referencia a la factura original.
2. Generación y transmisión electrónica.
3. Conservación en formato electrónico.


## 3.5.7 Uso y Beneficios del NC
