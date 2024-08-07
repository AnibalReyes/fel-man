---
title: 2.1 Conceptos Básicos
date: 2024-07-22T15:07:00.000Z
sidebar:
  order: 1
---
**Documento Tributario Electrónico (D.T.E.)**

## **Sello de Recepción**

Consiste en un código otorgado por la Administración Tributaria que acredita el carácter de Documento Tributario Electrónico.

## Estados del DTE

1. **Limbo**:
    - Este estado es transitorio y ocurre en dos situaciones específicas:
        1. Durante la migración de FEL 1 a FEL 2. En este caso, los archivos JSON que no tienen un sello de recepción se colocan en este estado temporal antes de ser validados. La revisión de estos archivos determinará si deben ser rechazados, validados, anulados, entre otros.
        2. Cuando el cliente utiliza el API de transmisión por lotes. Aquí, para consultar el estado de un lote, se debe realizar la consulta utilizando el código de generación de lotes. Este estado indica que el documento está en espera de validación.
2. **Pendiente de Validación**:
    - Este estado se aplica cuando un lote ha sido exitosamente recibido por el Ministerio de Hacienda (MH) pero aún no ha sido procesado. Es un estado transitorio manejado automáticamente por el sistema. Indica que el MH tiene el lote, pero se debe consultar el estado del lote hasta recibir una respuesta definitiva del MH.
3. **Pendiente**:
    - Es un estado transitorio que puede requerir intervención manual si persiste por más de 5 minutos. Se presenta antes de intentar enviar el DTE al sistema del MH. En condiciones normales, este estado dura solo milisegundos, pero en situaciones de contingencia, los DTEs pueden marcarse como pendientes hasta que se recupere la conexión con el MH. En casos de caídas inesperadas del sistema del MH o de su sistema de contingencia, el estado "Pendiente" puede mantenerse hasta que se pueda verificar y procesar correctamente.
4. **Validado**:
    - Este estado indica que el DTE ha sido revisado y aprobado como válido por el Ministerio de Hacienda. Significa que el documento cumple con todos los requisitos fiscales y técnicos, incluyendo la estructura del documento, la autenticidad de la firma digital, y la consistencia de la información fiscal.
5. **Fallido**:
    - Un DTE se marca como "Fallido" cuando la transmisión falla debido a varias razones:
        1. La tasa de envíos masivos es bloqueada por el MH, generando un error 401.
        2. Cuando un documento pendiente no es procesado ni recibido por el MH.
        Estos DTEs no se consideran como rechazados, ya que nunca fueron procesados por el MH. Representan fallas en la transmisión inicial.
6. **Rechazado**:
    - Un DTE se marca como "Rechazado" cuando el Ministerio de Hacienda identifica errores en la estructura de los datos JSON o problemas internos. Un ejemplo típico de un mensaje de rechazo es "No se proporcionaron datos para validar". Este estado requiere una revalidación para asegurar el estatus y descartar un "falso positivo".
7. **Invalidado**:
    - Este estado se aplica a DTEs que han sido anulados por un evento de anulación solicitado por el cliente. Indica que el documento, que previamente podría haber sido validado, ha sido oficialmente invalidado y no es considerado válido para propósitos fiscales.

## Subestados del DTE

1. **Recuperado**:
    - Este subestado se aplica cuando un documento ha sido recuperado mediante una validación posterior. Indica que el documento, inicialmente problemático, ha sido corregido y validado.
2. **Necesita Retransmisión**:
    - Este subestado indica que el documento debe ser reenviado al sistema debido a problemas en la transmisión inicial. Sin embargo, actualmente ya no se utiliza activamente.
3. **No Recibido**:
    - Indica que el documento no ha sido recibido por el sistema del Ministerio de Hacienda. Actualmente, este subestado no se utiliza.
4. **Reemplazado**:
    - Este subestado se utiliza cuando un documento ha sido invalidado y sustituido por otro. El nuevo documento reemplaza al anterior, y se marca con este subestado para reflejar el contexto de reemplazo.
5. **Marcado para Invalidación**:
    - Se aplica cuando hubo un intento de invalidación de un DTE, ya sea que la invalidación haya sido exitosa o no. Este subestado ayuda a identificar documentos en proceso de ser invalidados.
6. **Lote Rechazado**:
    - Este subestado se aplica cuando un lote completo de DTEs es rechazado por el Ministerio de Hacienda. Indica que todos los documentos en ese lote no cumplieron con los requisitos necesarios.
7. **Migrados**:
    - Se utiliza para documentos que han sido migrados de FEL 1 a FEL 2. Este subestado ayuda a identificar y gestionar documentos que han sido parte del proceso de migración.
8. **Fallback**:
    - Este subestado se aplica a documentos pendientes que pertenecen a un entorno de contingencia. Indica que el documento está a la espera de ser procesado una vez que se restablezca la normalidad.
9. **Reprocesados**:
    - Este subestado se utiliza cuando un documento inicialmente rechazado pasa a ser validado dentro de las 24 horas mediante un reproceso. Indica que el documento fue revisado y corregido con éxito.
