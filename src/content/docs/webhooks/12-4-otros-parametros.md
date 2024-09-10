---
title: 12.4 Otros parametros
date: 2024-09-10T16:53:00.000Z
sidebar:
  order: 4
---
Tenemos otros parametros que afectan el comportamiento de los webhook
## Recibir unicamente DTEs con codigo externo
Esta bandera reducira los eventos transmitidos a este webhook a unicamente los DTE que fueron enviados hacia nuestro sistema con un valor valido en el campo ``externalData.externalDteId``. Esto es particularmente util si utiliza los endpoints de transmision por lotes y quiere hacer algun match con los valores ya contenidos dentro de su sistema, ya que a diferencia del comportamiento de la transmision 1-1 sencilla, los codigos de generacion de cada DTE no son devueltos en la respuesta inmediata.

## Codigo de Origen de Datos
En caso que su integracion contemple varios origenes de datos/sistemas que pertenecen a un solo emisor, y desea que estas notificaciones viajen a puntos separados segun su sistema origen, podemos colocar un codigo que debe de hacer match *exacto* con el valor contenido en `externalData.externalOriginId` de cada DTE. Para dar un ejemplo practico de esto, asumamos dos webhooks, ``http://webhook1.com`` y ``http//webhook2.com``, ``webhook1`` con valor ``0001`` en este campo de configuracion, y ``webhook2`` con valor ``0002``:

Todo DTE  transmitido con ``externalData: { externalOriginId: '0001' }`` sera notificado **unicamente** a ``http://webhook1.com`` (y cualquier otro webhook que utilize el mismo codigo de origen de datos)

Todo DTE que transmitido con ``externalData: { externalOriginId: '0002' }`` sera notificado **unicamente** a ``http://webhook2.com`` (y cualquier otro webhook que utilize el mismo codigo de origen de datos)

**IMPORTANTE**: Si este campo es dejado vacio, solo se le notificaran los DTEs transmitidos _sin_ ``externalOriginId``

 
