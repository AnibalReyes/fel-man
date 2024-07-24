---
title: 3.3 Comprobante de Crédito Fiscal (CCF)
date: 2024-07-22T16:29:00.000Z
sidebar:
    order: 3
---
## 3.3.1 Resumen

Un Comprobante de Crédito Fiscal (CCF) es un documento tributario utilizado para documentar la transferencia de bienes o la prestación de servicios entre contribuyentes registrados en el sistema del Impuesto al Valor Agregado (IVA). Este comprobante permite al comprador acreditar el IVA pagado en sus compras como crédito fiscal, lo que puede ser deducido del IVA a pagar en sus declaraciones fiscales.

## 3.3.2 Conceptos básicos

**Cliente (Receptor)**

El Receptor de un Comprobante de Crédito Fiscal es la entidad que recibe los bienes o servicios y que podrá utilizar el comprobante para acreditar el IVA pagado en sus compras contra el IVA cobrado en sus ventas. Esta sección debe contener información detallada y precisa sobre el receptor para asegurar el cumplimiento de las normativas fiscales.

| Campo | Descripción |
| --- | --- |
| Nombre | Nombre completo de la persona o razón social de la empresa que recibe el comprobante. |
| Nombre Comercial | Nombre comercial bajo el cual opera el receptor, si es diferente de la razón social. |
| NIT (Número de Identificación Tributaria) | Número de Identificación Tributaria del receptor, esencial para fines fiscales. |
| NRC (Número de Registro de Contribuyente) | Número de Registro de Contribuyente, que identifica al receptor ante la autoridad fiscal. |
| Correo Electrónico | Dirección de correo electrónico del receptor para comunicaciones y envío de documentos. |
| Teléfono | Número de teléfono del receptor para contacto. |
| Actividad Económica | La principal actividad comercial o industrial del receptor. |
| Departamento | El departamento de El Salvador donde se encuentra ubicado el receptor. |
| Municipio | El municipio dentro del departamento donde se encuentra el receptor. |
| Dirección | Dirección física completa del receptor (calle, número, colonia, ciudad, etc.). |

**Documentos Relacionados**

| Campo | Descripción |
| --- | --- |
| Tipo de documento | Tipo de documento relacionado con la transacción (factura, nota de crédito, etc.). |
| Fecha de Emisión | Fecha en la que fue emitido el documento relacionado. |
| Número de documento | Número único o identificador del documento relacionado. |
| Monto | Monto total indicado en el documento relacionado. |

**Cuerpo de Documento**

| Campo | Descripción |
| --- | --- |
| Número de Documento | Número único o identificador del documento relacionado a la transacción. |
| Código | Código único o identificador del producto o servicio. |
| Descripción (requerido) | Descripción detallada del producto o servicio. |
| Unidad de Medida (requerido) | Unidad de medida del producto o servicio (por ejemplo, kilogramos, litros, unidades, etc.). |
| Cantidad (requerido) | Cantidad de unidades del producto o servicio vendido. |
| Tipo de Item | Categoría del ítem (producto, servicio, etc.). |
| Tipo de Monto | Tipo de monto que se está especificando (por ejemplo, precio unitario, monto total, etc.). |
| Tributos | Impuestos aplicables al producto o servicio, como el IVA. |
| Precio Unitario | Precio de venta por unidad del producto o servicio, sin incluir impuestos. |
| Monto Descuento | Descuento aplicado al producto o servicio, si corresponde. |
| Total | Monto total de la transacción para el ítem, después de aplicar impuestos y descuentos. |

**Venta Tercero**

La sección "Venta Tercero" en una factura se utiliza para registrar transacciones donde la venta de los bienes o servicios involucra a un tercero. Este tercero puede actuar como intermediario, distribuidor o cualquier otra entidad que participe en la cadena de suministro o distribución, pero no es el consumidor final del producto o servicio.

| Campo | Definición |
| --- | --- |
| Nombre | Nombre completo o razón social de la tercera parte involucrada en la venta. |
| NIT | Número de Identificación Tributaria del tercero involucrado en la venta. |

**Extensión**

| Campo | Definición |
| --- | --- |
| Nombre Entrega | Nombre de la persona que realiza la entrega del producto o servicio. |
| Documento Entrega | Número del documento de identificación de la persona que realiza la entrega (DUI, NIT, pasaporte, Otro.). |
| Nombre Recibe | Nombre de la persona que recibe el producto o servicio. |
| Documento Recibe | Número del documento de identificación de la persona que recibe el producto o servicio (DUI, NIT, pasaporte, etc.). |
| Observaciones | Cualquier comentario o detalle adicional relevante sobre la entrega o recepción del producto o servicio. |
| Placa Vehículo | Número de placa del vehículo utilizado para la entrega del producto o servicio, si aplica. |

**Apéndices**

La sección de "Apéndices" está destinada a incluir información adicional que complementa y detalla aún más la transacción principal documentada en la factura. Los apéndices suelen contener datos que no encajan en las secciones estándar del documento pero que son esenciales para una comprensión completa y precisa de la transacción.

| Campo | Definición |
| --- | --- |
| Campo | Nombre del campo adicional o específico que se está incluyendo en el apéndice del documento. |
| Etiqueta | Identificación o descripción del campo, proporcionando contexto sobre la información contenida. |
| Valor | El valor o la información específica correspondiente a la etiqueta y campo mencionados. |

**Otros Documentos**

| Campo | Definición |
| --- | --- |
| Código de documento asociado | Código único o identificador del documento asociado a la transacción. |
| Descripción de documento | Descripción detallada del documento asociado. |
| Detalle de documento | Información adicional relevante sobre el documento asociado. |
| Nombre del Médico | Nombre completo del médico, si aplica. |
| NIT del Médico | Número de Identificación Tributaria del médico, si aplica. |
| Doc. de Identificación del Médico | Número de documento de identificación del médico, si aplica. |
| Tipo de Servicio | Tipo de servicio proporcionado relacionado con el documento, si aplica. |

### 3.3.4 Descripción de los Campos

1. **Nombre**: Este campo identifica el nombre completo de la persona o la razón social de la empresa que recibe el comprobante. Es crucial para la identificación precisa del receptor.
2. **Nombre Comercial**: Nombre bajo el cual opera el receptor, que puede ser diferente de la razón social. Este campo es útil para identificar a la empresa en el mercado.
3. **NIT (Número de Identificación Tributaria)**: Número único asignado al receptor para su identificación fiscal. Es esencial para el registro y control tributario.
4. **NRC (Número de Registro de Contribuyente)**: Número que identifica al receptor ante la autoridad fiscal, especialmente importante para la declaración y pago de impuestos.
5. **Correo Electrónico**: Dirección de correo electrónico del receptor. Este campo facilita la comunicación y el envío de documentos fiscales y comerciales.
6. **Teléfono**: Número de teléfono de contacto del receptor. Es útil para cualquier consulta o comunicación directa.
7. **Actividad Económica**: Describe la principal actividad económica del receptor. Este dato es importante para entender el contexto de las operaciones comerciales del receptor.
8. **Departamento**: El departamento donde se encuentra ubicado el receptor. Este campo ayuda a localizar geográficamente al receptor.
9. **Municipio**: El municipio dentro del departamento donde se encuentra el receptor. Proporciona una ubicación más específica del receptor.
10. **Dirección**: Dirección física completa del receptor. Incluye detalles como calle, número, colonia, y ciudad, asegurando una identificación y localización precisa.

### 3.3.5 Importancia del CCF

- **Control Fiscal:** Permite a las autoridades fiscales mantener un control riguroso sobre las transacciones comerciales y el cumplimiento de las obligaciones tributarias.
- **Crédito Fiscal:** Facilita a los contribuyentes el derecho de deducir el IVA pagado en sus compras, reduciendo así su carga fiscal.
- **Transparencia Comercial:** Asegura una mayor transparencia en las transacciones comerciales entre contribuyentes, fomentando una economía más formal y organizada.

### 3.3.6 Importancia del Receptor de Comprobante de Crédito Fiscal

La correcta identificación y documentación del receptor del comprobante de crédito fiscal es crucial por varias razones:

- **Cumplimiento Normativo**: Asegura que se cumplen todas las normativas fiscales y legales, evitando sanciones y problemas con la autoridad tributaria.
- **Transparencia**: Facilita la transparencia en las transacciones comerciales, proporcionando información detallada y precisa sobre las partes involucradas.
- **Rastreo y Verificación**: Permite el rastreo y la verificación de las transacciones, facilitando auditorías y revisiones fiscales.
- **Acreditación del IVA**: Permite al receptor acreditar el IVA pagado en sus compras contra el IVA cobrado en sus ventas, optimizando su carga tributaria.

### 3.3.7 Componentes del CCF

1. **Datos del Emisor y Receptor:**
    - **Emisor:** Información del vendedor o proveedor, incluyendo el Nombre, Dirección y Número de Identificación Tributaria (NIT).
    - **Receptor:** Información del comprador o cliente, incluyendo el Nombre, Dirección y NIT.
2. **Detalle de la Transacción:**
    - Descripción detallada de los bienes o servicios vendidos.
    - Cantidad de los productos o servicios.
    - Precio unitario y valor total de cada ítem.
3. **Información del IVA:**
    - Monto del IVA calculado sobre el valor total de la transacción.
    - Subtotal antes del IVA y el total incluyendo el IVA.
4. **Detalles Administrativos:**
    - Fecha de emisión del comprobante.
    - Número correlativo del comprobante, asegurando la unicidad y rastreabilidad.

### 3.3.8 Proceso de Emisión del CCF

1. **Registro:** Tanto el emisor como el receptor deben estar registrados como contribuyentes del IVA.
2. **Generación:** El comprobante se genera en el momento de la venta o prestación del servicio, utilizando un formato autorizado por la administración tributaria.
3. **Transmisión:** El comprobante se puede transmitir electrónicamente a las autoridades fiscales y se entrega una copia al cliente.
4. **Conservación:** Tanto el emisor como el receptor deben conservar copias de los CCF por un período determinado para efectos de auditoría.

### 3.3.9 Uso y Beneficios del CCF

- **Acreditación del IVA:** Permite a los compradores deducir el IVA pagado en sus compras, reduciendo así el monto del IVA a pagar.
- **Formalización de la Economía:** Fomenta la formalización de las transacciones comerciales, contribuyendo a una economía más regulada y menos informal.
- **Facilidad de Auditoría:** Simplifica las auditorías fiscales al proporcionar un registro claro y detallado de las transacciones comerciales.
