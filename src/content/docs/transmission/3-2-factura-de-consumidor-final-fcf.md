---
title: 3.2 Factura de Consumidor Final (FCF)
date: 2024-07-22T16:11:00.000Z
sidebar:
    order: 2
---
## 3.2.1 Resumen

El documento tributario Factura de Consumidor Final es utilizado en las transacciones comerciales entre un proveedor de bienes o servicios y un consumidor final que no requiere crédito fiscal. Este tipo de factura está destinada principalmente a ventas al por menor y servicios dirigidos al consumidor final, quien no puede acreditar el IVA pagado en dicha transacción.

## 3.2.2 Conceptos básicos

**Cliente (Receptor)**

![Pantalla Cliente (Receptor)](/images/uploads/fcf1.png "Cliente (Receptor)")

Información del comprador o destinatario de los bienes o servicios que se detallan en el documento. Estos datos son necesarios para identificar al receptor de la transacción.

| Campo               | Definición                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| Nombre              | El nombre completo de la persona o la razón social de la empresa que recibe la factura.                         |
| NRC                 | Número de Registro de Contribuyente, que identifica al receptor ante la autoridad fiscal.                       |
| Tipo de Documento   | Tipo de documento de identificación presentado (número de DUI, NIT, Pasaporte, Carnet de Residente, u Otro).    |
| Número de Documento | Número del documento de identificación presentado (número de DUI, NIT, Pasaporte, Carnet de Residente, u Otro). |
| Correo Electrónico  | Dirección de correo electrónico del receptor.                                                                   |
| Teléfono            | Número de teléfono del receptor para contacto.                                                                  |
| Actividad Económica | La principal actividad comercial o industrial del receptor.                                                     |
| Departamento        | El departamento de El Salvador donde se encuentra ubicado el receptor.                                          |
| Municipio           | El municipio dentro del departamento donde se encuentra el receptor.                                            |
| Dirección           | Dirección física completa del receptor (calle, número, colonia, ciudad, etc.).                                  |

**Cuerpo de Documento**

![Cuerpo de Documento](/images/uploads/fcf2.png "Ventana modal Cuerpo de Documento")

El "Cuerpo de Documento" es la sección principal de una factura donde se detallan los bienes o servicios vendidos. Esta sección incluye información específica sobre cada ítem de la transacción para asegurar claridad y precisión en el registro de la venta. A continuación se describen los campos comunes que se encuentran en el Cuerpo de Documento:

**Campos**

| Campo                        | Definición                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Código                       | Código único del producto o servicio.                                                                         |
| Descripción (requerido)      | Descripción detallada del producto o servicio.                                                                |
| Unidad de Medida (requerido) | Unidad de medida del producto o servicio (por ejemplo, kilogramos, litros, unidades, etc.).                   |
| Tipo de Item (requerido)     | Tipo de producto o servicio (bien, servicio, ambos, otros tributos por item).                                 |
| Cantidad (requerido)         | Número de unidades del producto o servicio.                                                                   |
| Tipo de Monto (requerido)    | Indica si el monto es antes o después de impuestos (No Sujeto, Exento, Gravado, No Gravado).                  |
| Tributos                     | Impuestos aplicables al producto o servicio, como el IVA.                                                     |
| Precio Unitario (requerido)  | Precio por unidad del producto o servicio.                                                                    |
| IVA Calculado                | Monto del Impuesto al Valor Agregado calculado para el producto o servicio.                                   |
| Monto Descuento              | Monto del descuento aplicado al producto o servicio.                                                          |
| Precio Sugerido de Venta     | Precio sugerido de venta del producto o servicio.                                                             |
| Total                        | Monto total de la línea, calculado como (Cantidad x Precio Unitario) menos Monto Descuento más IVA Calculado. |

**Documentos Relacionados**

![Documentos Relacionados](/images/uploads/fcf3.png "Pantalla Documentos Relacionados")

La sección de "Documentos Relacionados" en una factura o documento tributario se utiliza para hacer referencia a otros documentos que están vinculados a la transacción actual. Esta referencia ayuda a mantener un registro claro y completo de las transacciones comerciales y cualquier ajuste o modificación que se haya realizado.

| Campo               | Definición                                                                         |
| ------------------- | ---------------------------------------------------------------------------------- |
| Tipo de documento   | Tipo de documento relacionado con la transacción (factura, nota de crédito, etc.). |
| Fecha de Emisión    | Fecha en la que fue emitido el documento relacionado.                              |
| Número de documento | Número único o identificador del documento relacionado.                            |
| Monto               | Monto total indicado en el documento relacionado.                                  |

**Venta Tercero**

![Venta Tercero](/images/uploads/fcf4.png "Pantalla Venta Tercero")

La sección "Venta Tercero" en una factura se utiliza para registrar transacciones donde la venta de los bienes o servicios involucra a un tercero. Este tercero puede actuar como intermediario, distribuidor o cualquier otra entidad que participe en la cadena de suministro o distribución, pero no es el consumidor final del producto o servicio.

| Campo  | Definición                                                                  |
| ------ | --------------------------------------------------------------------------- |
| Nombre | Nombre completo o razón social de la tercera parte involucrada en la venta. |
| NIT    | Número de Identificación Tributaria del tercero involucrado en la venta.    |

**Extensión**

![Extensión](/images/uploads/fcf5.png "Pantalla Extensión")

La sección "Extensión" de una factura suele contener información adicional que extiende o complementa los datos básicos del documento. Esta información puede incluir detalles específicos que no encajan en las secciones estándar de la factura, proporcionando así una mayor claridad y detalles adicionales relevantes para la transacción.

| Campo             | Definición                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| Nombre Entrega    | Nombre de la persona que realiza la entrega del producto o servicio.                                                |
| Documento Entrega | Número del documento de identificación de la persona que realiza la entrega (DUI, NIT, pasaporte, Otro.).           |
| Nombre Recibe     | Nombre de la persona que recibe el producto o servicio.                                                             |
| Documento Recibe  | Número del documento de identificación de la persona que recibe el producto o servicio (DUI, NIT, pasaporte, etc.). |
| Observaciones     | Cualquier comentario o detalle adicional relevante sobre la entrega o recepción del producto o servicio.            |
| Placa Vehículo    | Número de placa del vehículo utilizado para la entrega del producto o servicio, si aplica.                          |

**Apéndices**

![Apéndices](/images/uploads/fcf6.png "Apéndices")

La sección de "Apéndices" está destinada a incluir información adicional que complementa y detalla aún más la transacción principal documentada en la factura. Los apéndices suelen contener datos que no encajan en las secciones estándar del documento pero que son esenciales para una comprensión completa y precisa de la transacción.

| Campo    | Definición                                                                                      |
| -------- | ----------------------------------------------------------------------------------------------- |
| Campo    | Nombre del campo adicional o específico que se está incluyendo en el apéndice del documento.    |
| Etiqueta | Identificación o descripción del campo, proporcionando contexto sobre la información contenida. |
| Valor    | El valor o la información específica correspondiente a la etiqueta y campo mencionados.         |

**Observaciones**

![Observaciones](/images/uploads/fcf7.png "Pantalla Observaciones")

Comentarios adicionales o notas relevantes sobre la transacción.

**Otros Documentos**

![Otros Documentos](/images/uploads/fcf8.png "Pantalla Otros Documentos")

La sección de "Otros Documentos" en una factura se utiliza para registrar y referenciar documentos adicionales que están relacionados con la transacción principal. Estos documentos pueden proporcionar información complementaria o detallada que no se incluye en las secciones estándar de la factura, asegurando una comprensión completa y precisa de la transacción.

| Campo                             | Definición                                                              |
| --------------------------------- | ----------------------------------------------------------------------- |
| Código de documento asociado      | Código único o identificador del documento asociado a la transacción.   |
| Descripción de documento          | Descripción detallada del documento asociado.                           |
| Detalle de documento              | Información adicional relevante sobre el documento asociado.            |
| Nombre del Médico                 | Nombre completo del médico, si aplica.                                  |
| NIT del Médico                    | Número de Identificación Tributaria del médico, si aplica.              |
| Doc. de Identificación del Médico | Número de documento de identificación del médico, si aplica.            |
| Tipo de Servicio                  | Tipo de servicio proporcionado relacionado con el documento, si aplica. |

### Resumen de documento

![Resumen de documento](/images/uploads/fcf9.png "Pantalla Resumen de documento")
