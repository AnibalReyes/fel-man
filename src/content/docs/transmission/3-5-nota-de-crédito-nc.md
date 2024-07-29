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
| nit                | NIT (Receptor)                                                    |
| nrc                | NRC (Receptor)                                                    |
| nombre             | Nombre, denominación o razón social del contribuyente (Receptor)  |
| codActividad       | Código de Actividad Económica (Receptor)                          |
| descActividad      | Actividad Económica (Receptor)                                    |
| nombreComercial    | Nombre Comercial (Receptor)                                       |
| direccion          | Dirección (Receptor)                                              |
| telefono           | Teléfono (Receptor)                                               |
| correo             | Correo electrónico (Receptor)                                     |

### **Documentos Relacionados**
| **Campo**           | **Descripción**                                                 |
|---------------------|-----------------------------------------------------------------|
| tipoDocumento       | Tipo de Documento Tributario Relacionado                        |
| tipoGeneracion      | Tipo de Generación del Documento Tributario relacionado           |
| numeroDocumento     | Número de documento relacionado                                  |
| fechaEmision        | Fecha de Generación del Documento Relacionado                    |


### **Cuerpo de Documento**
| **Campo**           | **Descripción**                                           |
|---------------------|-----------------------------------------------------------|
| numItem             | N° de ítem                                                |
| tipoItem            | Tipo de ítem                                              |
| numeroDocumento     | Número de documento relacionado                           |
| cantidad            | Cantidad                                                  |
| codigo              | Código                                                    |
| codTributo          | Tributo sujeto a cálculo de IVA                           |
| uniMedida           | Unidad de Medida                                          |
| descripcion         | Descripción                                               |
| precioUni           | Precio Unitario                                           |
| montoDescu          | Descuento, Bonificación, Rebajas por ítem                 |
| ventaNoSuj          | Ventas no Sujetas                                         |
| ventaExenta         | Ventas Exentas                                            |
| ventaGravada        | Ventas Gravadas                                           |
| tributos            | Código del Tributo                                        |

### **Venta Tercero**
| **Campo** | **Descripción**                                         |
|-----------|---------------------------------------------------------|
| nit       | NIT por cuenta de Terceros                              |
| nombre    | Nombre, denominación o razón social del Tercero         |


### **Extensión**
| **Campo**       | **Descripción**                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------|
| nombEntrega     | Nombre del responsable que Genera el DTE                                                        |
| docuEntrega     | Documento de identificación de quien genera el DTE                                              |
| nombRecibe      | Nombre del responsable de la operación por parte del receptor                                    |
| docuRecibe      | Documento de identificación del responsable de la operación por parte del receptor               |
| observaciones   | Observaciones                                                                                   |


### **Apéndices**
| Campo    | Descripción           |
|----------|-----------------------|
| campo    | Nombre del campo       |
| etiqueta | Descripción           |
| valor    | Valor/Dato            |


## 3.5.3 Importancia de la Nota de Crédito Electrónica

* **Ajuste de Facturación:** La Nota de Crédito (NC) permite ajustar el monto de una factura previamente emitida, ya sea por errores en la facturación, devoluciones de productos o descuentos aplicados después de la emisión de la factura original.

* **Corrección de Errores:** Facilita la corrección de errores en las facturas, como cantidades incorrectas, precios erróneos o cualquier otro ajuste necesario, asegurando la exactitud en la contabilidad y en el registro de transacciones.

* **Registro de Devoluciones:** Documenta las devoluciones de bienes o mercancías, proporcionando un registro claro de los productos devueltos y los ajustes correspondientes en el crédito del cliente.

* **Facilita la Contabilidad:** Ayuda en la gestión y conciliación de cuentas por cobrar al registrar correctamente las modificaciones en las facturas emitidas, mejorando la precisión en los informes financieros y las declaraciones fiscales.

* **Transparencia y Cumplimiento:** Promueve la transparencia en las transacciones comerciales y asegura el cumplimiento de las normativas fiscales, proporcionando un documento oficial que respalda los ajustes realizados en las facturas.

## 3.5.4 Descripción de los Campos
## 3.5.5 Componentes del NC

## 3.5.6 Proceso de Emisión de NC

1. Referencia a la factura original.
2. Generación y transmisión electrónica.
3. Conservación en formato electrónico.


## 3.5.7 Uso y Beneficios del NC
