---
title: 3.6 Nota de Débito (ND)
date: 2024-07-22T16:39:00.000Z
sidebar:
  order: 6
---


## 3.6.1 Resumen

Una Nota de Débito es un documento comercial utilizado para registrar un aumento en el monto adeudado por un cliente a un proveedor. Este documento se emite cuando hay cargos adicionales por conceptos como intereses por pagos tardíos, ajustes en precios, errores en facturas previas o cualquier otro motivo que justifique un incremento en la deuda del cliente. La Nota de Débito permite a las empresas mantener un registro claro y actualizado de las transacciones y ajustes financieros, asegurando la precisión en la contabilidad y facilitando la gestión de cuentas por cobrar.

## 3.6.2 Conceptos básicos

### **Cliente (Receptor)**

| Campo          | Descripción                                                                                                 |
|----------------|-------------------------------------------------------------------------------------------------------------|
| nit            | NIT (Receptor)                                                                                             |
| nrc            | NRC (Receptor)                                                                                             |
| nombre         | Nombre, denominación o razón social del contribuyente (Receptor)                                           |
| codActividad   | Código de Actividad Económica (Receptor)                                                                    |
| descActividad  | Actividad Económica (Receptor)                                                                             |
| nombreComercial| Nombre Comercial (Receptor)                                                                                  |
| direccion      | Dirección (Receptor)                                                                                       |
| telefono       | Teléfono (Receptor)                                                                                         |
| correo         | Correo electrónico (Receptor)                                                                              |


### **Documentos Relacionados**

| Campo            | Descripción                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| tipoDocumento    | Tipo de Documento Tributario Relacionado                                                          |
| tipoGeneracion   | Tipo de Generación del Documento Tributario relacionado                                           |
| numeroDocumento  | Número de documento relacionado                                                                   |
| fechaEmision     | Fecha de Generación del Documento Relacionado                                                     |


### **Cuerpo de Documento**

| Campo           | Descripción                                             |
|-----------------|---------------------------------------------------------|
| numItem          | N° de ítem                                              |
| tipoItem         | Tipo de ítem                                            |
| numeroDocumento  | Número de documento relacionado                        |
| cantidad         | Cantidad                                                |
| codigo           | Código                                                  |
| codTributo       | Tributo sujeto a cálculo de IVA                         |
| uniMedida        | Unidad de Medida                                        |
| descripcion      | Descripción                                             |
| precioUni        | Precio Unitario                                         |
| montoDescu       | Descuento, Bonificación, Rebajas por ítem               |
| ventaNoSuj       | Ventas No Sujetas                                       |
| ventaExenta      | Ventas Exentas                                          |
| ventaGravada     | Ventas Gravadas                                         |
| tributos         | Código del Tributo                                      |


### **Venta Tercero**

| Campo  | Descripción                                      |
|--------|--------------------------------------------------|
| nit    | NIT por cuenta de Terceros                       |
| nombre | Nombre, denominación o razón social del Tercero  |


### **Extensión**

| Campo         | Descripción                                                          |
|---------------|----------------------------------------------------------------------|
| nombEntrega   | Nombre del responsable que Genera el DTE                              |
| docuEntrega   | Documento de identificación de quien genera el DTE                    |
| nombRecibe    | Nombre del responsable de la operación por parte del receptor          |
| docuRecibe    | Documento de identificación del responsable de la operación por parte del receptor |
| observaciones | Observaciones                                                         |


### **Apéndices**

| Campo   | Descripción                    |
|---------|--------------------------------|
| campo   | Nombre del campo                |
| etiqueta| Descripción                     |
| valor   | Valor/Dato                      |



## 3.6.5 Importancia del ND

* **Ajuste de Facturación:** La Nota de Débito (ND) permite aumentar el monto de una factura previamente emitida debido a cargos adicionales, errores en facturación, intereses por pagos tardíos, o ajustes necesarios.

* **Corrección de Errores:** Facilita la corrección de errores o ajustes en las facturas originales, asegurando que el monto adeudado refleje adecuadamente los cargos adicionales o modificaciones requeridas.

* **Registro de Cargos Adicionales:** Documenta los cargos adicionales que deben ser cobrados al cliente, como intereses, tarifas por servicios adicionales, o correcciones en el precio de los productos o servicios.

* **Facilita la Contabilidad:** Ayuda a mantener una contabilidad precisa al registrar adecuadamente los ajustes en las facturas, mejorando la exactitud en los informes financieros y en la gestión de cuentas por cobrar.

* **Transparencia y Cumplimiento:** Promueve la transparencia en las transacciones comerciales y asegura el cumplimiento de las normativas fiscales, proporcionando un documento oficial que respalda los ajustes en el monto adeudado.
