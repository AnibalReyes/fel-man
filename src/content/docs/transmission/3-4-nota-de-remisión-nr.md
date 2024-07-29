---
title: 3.4 Nota de Remisión (NR)
date: 2024-07-22T16:35:00.000Z
sidebar:
  order: 4
---
## 3.4.1 Resumen

Una Nota de Remisión es un documento utilizado para registrar y documentar la entrega de bienes o mercancías entre un proveedor y un cliente. Este documento detalla la cantidad y descripción de los productos enviados, permitiendo al receptor verificar que la entrega coincide con lo solicitado y pactado. Aunque no tiene efectos tributarios directos, la Nota de Remisión sirve como respaldo en la gestión de inventarios y facilita el control interno de las transacciones comerciales, asegurando una adecuada administración de los bienes recibidos y enviados.

## 3.4.2 Conceptos básicos

### **Cliente (Receptor)**

| **Campo**             | **Descripción**                                                  |
| --------------------- | ---------------------------------------------------------------- |
| Tipo de Documento     | Tipo de documento de identificación (Receptor)                   |
| Numero Documento      | Número de documento de Identificación (Receptor)                 |
| NRC                   | NRC (Receptor)                                                   |
| Nombre                | Nombre, denominación o razón social del contribuyente (Receptor) |
| Codigo de Actividad   | Código de Actividad Económica (Receptor)                         |
| Descripción Actividad | Actividad Económica (Receptor)                                   |
| Nombre Comercial      | Nombre Comercial (Receptor)                                      |
| Direccion             | Dirección (Receptor)                                             |
| Telefono              | Teléfono (Receptor)                                              |
| Correo                | Correo electrónico (Receptor)                                    |
| Bien Titulo           | Bienes Remitidos a Título de                                     |

### **Documentos Relacionados**

| **Campo**           | **Descripción**                                         |
| ------------------- | ------------------------------------------------------- |
| Tipo de Documento   | Tipo de Documento Tributario Relacionado                |
| Tipo de Generación  | Tipo de Generación del Documento Tributario relacionado |
| Numero de Documento | Número de documento relacionado                         |
| Fecha de Emision    | Fecha de Generación del Documento Relacionado           |

### **Cuerpo de Documento**

| **Campo**           | **Descripción**                           |
| ------------------- | ----------------------------------------- |
| Numero de Item      | N° de ítem                                |
| Tipo de Item        | Tipo de ítem                              |
| Numero de Documento | Número de documento relacionado           |
| Codigo              | Código                                    |
| Codigo de Tributo   | Tributo sujeto a cálculo de IVA           |
| Descripcion         | Descripción                               |
| Cantidad            | Cantidad                                  |
| Unidad de Medida    | Unidad de Medida                          |
| Precio Unitario     | Precio Unitario                           |
| Monto de Descuento  | Descuento, Bonificación, Rebajas por ítem |
| Venta No Sujeta     | Ventas no Sujetas                         |
| Venta Exenta        | Ventas Exentas                            |
| Venta Gravada       | Ventas Gravadas                           |
| Tributos            | Código del Tributo                        |

### **Venta Tercero**

| **Campo** | **Descripción**                                 |
| --------- | ----------------------------------------------- |
| NIT       | NIT por cuenta de Terceros                      |
| Nombre    | Nombre, denominación o razón social del Tercero |

### **Extensión**

| **Campo**         | **Descripción**                                                                    |
| ----------------- | ---------------------------------------------------------------------------------- |
| Nombre Entrega    | Nombre del responsable que Genera el DTE                                           |
| Documento Entrega | Documento de identificación de quien genera el DTE                                 |
| Nombre Recibe     | Nombre del responsable de la operación por parte del receptor                      |
| Documento Recibe  | Documento de identificación del responsable de la operación por parte del receptor |
| Observaciones     | Observaciones                                                                      |

### **Apéndices**

| **Campo** | **Descripción**  |
| --------- | ---------------- |
| Campo     | Nombre del campo |
| Etiqueta  | Descripción      |
| Valor     | Valor/Dato       |

### Resumen

| **Campo**           | **Descripción**                                                              |
| ------------------- | ---------------------------------------------------------------------------- |
| Total No Sujeto     | Total de Operaciones no sujetas                                              |
| Total Exento        | Total de Operaciones exentas                                                 |
| Total Gravado       | Total de Operaciones Gravadas                                                |
| SubTotal Ventas     | Suma de operaciones sin impuestos                                            |
| Descuento no Sujeto | Monto global de Descuento, Bonificación, Rebajas y otros a ventas no sujetas |
| Descuento Exento    | Monto global de Descuento, Bonificación, Rebajas y otros a ventas exentas    |
| Descuento Gravado   | Monto global de Descuento, Bonificación, Rebajas y otros a ventas gravadas   |
| Total Descuento     | Total del monto de Descuento, Bonificación, Rebajas                          |
| subTotal            | Sub-Total                                                                    |
| totalLetras         | Valor en Letras                                                              |

## 3.4.3 Descripción del los Campos



### Cliente (Receptor)

* **Tipo de Documento** Especifica el tipo de documento de identificación del receptor, como DUI, NIT, Pasaporte, etc.

* **Numero Documento** Proporciona el número del documento de identificación del receptor.

* **NRC** Incluye el Número de Registro de Contribuyente del receptor, que identifica a la persona o empresa ante la autoridad fiscal.

* **Nombre** Escribe el nombre completo o la razón social del receptor, ya sea una persona física o jurídica.

* **Codigo de Actividad** Código que representa la actividad económica principal del receptor, según la clasificación oficial.

* **Descripción Actividad** Describe la actividad económica que realiza el receptor.

* **Nombre Comercial** Nombre comercial del receptor, si aplica.

* **Dirección** Detalla la dirección física completa del receptor, incluyendo calle, número, colonia, ciudad, etc.

* **Teléfono** Número de teléfono del receptor para contacto.

* **Correo** Dirección de correo electrónico del receptor.

* **Bien Titulo** Información sobre los bienes remitidos a título de (especificar el tipo de transacción o acuerdo).

* **Documentos Relacionados** Tipo de documento tributario relacionado con la transacción, como una factura, nota de crédito, etc.

* **Tipo de Generación** Tipo de generación del documento tributario relacionado, por ejemplo, original, copia, etc.

* **Número de Documento** Número del documento relacionado, que sirve para identificarlo.

* **Fecha de Emisión** Fecha en que se generó el documento relacionado.

### Cuerpo de Documento

* **Numero de Item** Número secuencial del ítem dentro del documento.

* **Tipo de Item** Tipo de ítem, como bien, servicio, o tributo.

* **Numero de Documento** Número del documento relacionado con el ítem, si aplica.

* **Codigo** Código único del producto o servicio descrito.

* **Codigo de Tributo** Código que identifica el tipo de tributo sujeto a cálculo de IVA.

* **Descripción** Descripción detallada del ítem, producto o servicio.

* **Cantidad** Número de unidades del ítem o servicio.

* **Unidad de Medida** Unidad de medida del ítem, como kilogramos, litros, unidades, etc.

* **Precio Unitario** Precio por unidad del ítem o servicio.

* **Monto de Descuento** Descuento aplicado al ítem, incluyendo bonificaciones o rebajas.

* **Venta No Sujeta** Monto total de ventas no sujetas a impuestos.

* **Venta Exenta** Monto total de ventas exentas de impuestos.

* **Venta Gravada** Monto total de ventas gravadas con impuestos.

* **Tributos** Código del tributo aplicado al ítem.

### Venta Tercero

* **NIT** Número de Identificación Tributaria del tercero involucrado en la venta.

* **Nombre** Nombre completo o razón social del tercero que participa en la venta.

### Extensión

* **Nombre Entrega** Nombre de la persona o entidad responsable de generar el Documento Tributario Electrónico (DTE).

* **Documento Entrega** Documento de identificación de la persona o entidad que genera el DTE.

* **Nombre Recibe** Nombre de la persona o entidad que recibe el producto o servicio.

* **Documento Recibe** Documento de identificación de la persona o entidad que recibe el producto o servicio.

* **Observaciones** Cualquier comentario o detalle adicional relevante sobre la entrega o recepción.

### Apéndices

* **Campo** Nombre del campo adicional o específico incluido en el apéndice del documento.

* **Etiqueta** Descripción o identificación del campo, proporcionando contexto sobre la información contenida.

* **Valor** Valor o dato correspondiente al campo y etiqueta mencionados.

### Resumen

* **Total No Sujeto** Total de operaciones no sujetas a impuestos.

* **Total Exento** Total de operaciones exentas de impuestos.

* **Total Gravado** Total de operaciones gravadas con impuestos.

* **SubTotal Ventas** Suma de operaciones sin impuestos.

* **Descuento no Sujeto** Monto global de descuentos, bonificaciones, rebajas, y otros aplicados a ventas no sujetas a impuestos.

* **Descuento Exento** Monto global de descuentos, bonificaciones, rebajas, y otros aplicados a ventas exentas de impuestos.

* **Descuento Gravado** Monto global de descuentos, bonificaciones, rebajas, y otros aplicados a ventas gravadas con impuestos.

* **Total Descuento** Total del monto de descuentos, bonificaciones, y rebajas aplicadas.

* **SubTotal** Sub-total de la transacción antes de impuestos y descuentos.



## 3.4.4 Importancia del NR

* **Control de Inventarios:** Ayuda a las empresas a llevar un registro preciso de los bienes que entran y salen, facilitando la gestión y el control de inventarios.
* **Verificación de Entregas:** Permite a los receptores comprobar que los productos recibidos coinciden con los detalles del pedido, garantizando la exactitud y la conformidad de las entregas.
* **Respaldo Documental:** Sirve como evidencia documental en casos de disputas o auditorías, proporcionando un registro claro y detallado de las transacciones y movimientos de mercancías.
* **Transparencia Comercial:** Contribuye a la transparencia en las transacciones comerciales, asegurando que tanto proveedores como clientes tengan un registro detallado de las entregas realizadas y recibidas.

## 3.4.5 Componentes del NR

## 3.4.6 Proceso de Emisión del NR

## 3.4.7 Uso y Beneficios del NR
