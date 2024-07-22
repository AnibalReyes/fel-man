---
title: 3.11 Factura de Sujeto Excluido (FSE)
date: 2024-07-22T16:47:00.000Z
---
## 3.11.1 Resumen

## 3.11.2 Conceptos básicos

**Sujeto Excluido (Receptor)**

| Campo | Definición |
| --- | --- |
| Nombre | El nombre completo de la persona o la razón social de la empresa que recibe la factura. |
| Tipo de Documento | Tipo de documento de identificación presentado (número de DUI, NIT, Pasaporte, Carnet de Residente, u Otro). |
| Número de Documento | Número del documento de identificación presentado (número de DUI, NIT, Pasaporte, Carnet de Residente, u Otro). |
| Correo Electrónico | Dirección de correo electrónico del receptor. |
| Teléfono | Número de teléfono del receptor para contacto. |
| Actividad Económica | La principal actividad comercial o industrial del receptor. |
| Departamento | El departamento de El Salvador donde se encuentra ubicado el receptor. |
| Municipio | El municipio dentro del departamento donde se encuentra el receptor. |
| Dirección | Dirección física completa del receptor (calle, número, colonia, ciudad, etc.). |

**Cuerpo de Documento**

| Campo | Descripción |
| --- | --- |
| Código | Código único o identificador del producto o servicio. |
| Descripción | Descripción detallada del producto o servicio. |
| Unidad de Medida | Unidad de medida del producto o servicio (por ejemplo, kilogramos, litros, unidades, etc.). |
| Cantidad | Cantidad de unidades del producto o servicio vendido. |
| Precio Unitario | Precio de venta por unidad del producto o servicio, sin incluir impuestos. |
| Monto Descuento | Descuento aplicado al producto o servicio, si corresponde. |
| Total | Monto total de la transacción para el ítem, después de aplicar descuentos. |

**Venta Tercero**

La sección "Venta Tercero" en una factura se utiliza para registrar transacciones donde la venta de los bienes o servicios involucra a un tercero. Este tercero puede actuar como intermediario, distribuidor o cualquier otra entidad que participe en la cadena de suministro o distribución, pero no es el consumidor final del producto o servicio.

| Campo | Definición |
| --- | --- |
| Nombre | Nombre completo o razón social de la tercera parte involucrada en la venta. |
| NIT | Número de Identificación Tributaria del tercero involucrado en la venta. |

**Apéndices**

La sección de "Apéndices" de una factura está destinada a incluir información adicional que complementa y detalla aún más la transacción principal documentada en la factura. Los apéndices suelen contener datos que no encajan en las secciones estándar del documento pero que son esenciales para una comprensión completa y precisa de la transacción.

| Campo | Definición |
| --- | --- |
| Campo | Nombre del campo adicional o específico que se está incluyendo en el apéndice del documento. |
| Etiqueta | Identificación o descripción del campo, proporcionando contexto sobre la información contenida. |
| Valor | El valor o la información específica correspondiente a la etiqueta y campo mencionados. |
