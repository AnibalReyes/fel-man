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

| **Campo**         | **Descripción**                                          |
|-------------------|----------------------------------------------------------|
| tipoDocumento     | Tipo de documento de identificación (Receptor)          |
| numDocumento      | Número de documento de Identificación (Receptor)        |
| nrc               | NRC (Receptor)                                          |
| nombre            | Nombre, denominación o razón social del contribuyente (Receptor) |
| codActividad      | Código de Actividad Económica (Receptor)                |
| descActividad     | Actividad Económica (Receptor)                          |
| nombreComercial   | Nombre Comercial (Receptor)                             |
| direccion         | Dirección (Receptor)                                    |
| telefono          | Teléfono (Receptor)                                     |
| correo            | Correo electrónico (Receptor)                           |
| bienTitulo        | Bienes Remitidos a Título de                            |


### **Documentos Relacionados**

| **Campo**         | **Descripción**                                         |
|-------------------|---------------------------------------------------------|
| tipoDocumento     | Tipo de Documento Tributario Relacionado               |
| tipoGeneracion    | Tipo de Generación del Documento Tributario relacionado |
| numeroDocumento   | Número de documento relacionado                        |
| fechaEmision      | Fecha de Generación del Documento Relacionado           |


### **Cuerpo de Documento**

| **Campo**         | **Descripción**                                         |
|-------------------|---------------------------------------------------------|
| numItem           | N° de ítem                                              |
| tipoItem          | Tipo de ítem                                           |
| numeroDocumento   | Número de documento relacionado                        |
| codigo            | Código                                                  |
| codTributo        | Tributo sujeto a cálculo de IVA                        |
| descripcion       | Descripción                                             |
| cantidad          | Cantidad                                                |
| uniMedida         | Unidad de Medida                                        |
| precioUni         | Precio Unitario                                         |
| montoDescu        | Descuento, Bonificación, Rebajas por ítem               |
| ventaNoSuj        | Ventas no Sujetas                                      |
| ventaExenta       | Ventas Exentas                                         |
| ventaGravada      | Ventas Gravadas                                        |
| tributos          | Código del Tributo                                     |


### **Venta Tercero**

| **Campo**         | **Descripción**                                          |
|-------------------|----------------------------------------------------------|
| nit               | NIT por cuenta de Terceros                              |
| nombre            | Nombre, denominación o razón social del Tercero         |


### **Extensión**

| **Campo**         | **Descripción**                                          |
|-------------------|----------------------------------------------------------|
| nombEntrega       | Nombre del responsable que Genera el DTE                |
| docuEntrega       | Documento de identificación de quien genera el DTE      |
| nombRecibe        | Nombre del responsable de la operación por parte del receptor |
| docuRecibe        | Documento de identificación del responsable de la operación por parte del receptor |
| observaciones     | Observaciones                                           |

### **Apéndices**

| **Campo** | **Descripción**                |
|-----------|--------------------------------|
| campo     | Nombre del campo                |
| etiqueta  | Descripción                     |
| valor     | Valor/Dato                      |


## 3.4.5 Importancia del NR
 * **Control de Inventarios:** Ayuda a las empresas a llevar un registro preciso de los bienes que entran y salen, facilitando la gestión y el control de inventarios.

 * **Verificación de Entregas:** Permite a los receptores comprobar que los productos recibidos coinciden con los detalles del pedido, garantizando la exactitud y la conformidad de las entregas.

 * **Respaldo Documental:** Sirve como evidencia documental en casos de disputas o auditorías, proporcionando un registro claro y detallado de las transacciones y movimientos de mercancías.

 * **Transparencia Comercial:** Contribuye a la transparencia en las transacciones comerciales, asegurando que tanto proveedores como clientes tengan un registro detallado de las entregas realizadas y recibidas.
