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

1. **Pendiente de validación**:
    - El DTE ha sido recibido por el sistema del Ministerio de Hacienda pero aún no ha pasado por el proceso de validación. En este estado, el DTE está a la espera de ser revisado para verificar su cumplimiento con los requisitos normativos y técnicos establecidos.
2. **Pendiente**:
    - El DTE está en cola de procesamiento. Este estado indica que el documento ha sido recibido correctamente y está en espera de ser validado o procesado por el sistema.
3. **Validado**:
    - El DTE ha pasado exitosamente el proceso de validación, confirmando que cumple con todos los requisitos fiscales y técnicos definidos por el Ministerio de Hacienda. Esto incluye la verificación de la estructura del documento, la autenticidad de la firma digital y la consistencia de la información fiscal.
4. **Fallido**:
    - El DTE no ha superado el proceso de validación debido a errores o inconsistencias en la información proporcionada. Este estado indica que se encontraron problemas técnicos o fiscales que impiden la aceptación del documento.
5. **Rechazado**:
    - El DTE ha sido examinado y se determinó que no cumple con los criterios necesarios para su aceptación. Este estado puede ser el resultado de errores graves en la información fiscal, incumplimiento de normativas, o inconsistencias no subsanables.
6. **Invalidado**:
    - Un DTE que previamente había sido validado ha sido posteriormente marcado como inválido. Esto puede deberse a la detección de errores graves post-validación o por una solicitud de invalidación justificada y aprobada por el Ministerio de Hacienda.

## Subestados del DTE

1. **Recuperado**:
    - El DTE que había presentado algún error o había sido marcado como fallido ha sido corregido y reintroducido al sistema con éxito. Este subestado indica que el documento ha sido recuperado y está listo para su nueva evaluación o validación.
2. **Necesita retransmisión**:
    - El DTE debe ser enviado nuevamente al sistema debido a fallos en la transmisión inicial. Este subestado indica que el documento no llegó correctamente al sistema de recepción del Ministerio de Hacienda y necesita una retransmisión para ser procesado.
3. **No recibido**:
    - El DTE no ha sido recibido por el sistema del Ministerio de Hacienda. Este subestado puede indicar problemas en la comunicación entre el emisor y el receptor o fallos en la transmisión de datos.
4. **Reemplazado**:
    - El DTE original ha sido sustituido por una versión actualizada o corregida. Este subestado se utiliza cuando un documento válido es reemplazado por otro que corrige o actualiza la información previamente enviada.
5. **No es un error**:
    - El DTE que inicialmente fue marcado como erróneo ha sido revisado y se ha determinado que no presenta errores. Este subestado indica que la marca de error fue incorrecta y el documento es válido.
6. **Marcado para invalidación**:
    - **Definición Técnica**: El DTE está en proceso de ser invalidado. Este subestado indica que el documento ha sido identificado para ser invalidado por alguna razón específica y está en espera de completar el proceso de invalidación.
7. **Lote rechazado**:
    - Un conjunto de DTEs (lote) ha sido rechazado en su totalidad. Este subestado indica que todos los documentos dentro de un lote han fallado en cumplir los requisitos y normativas del Ministerio de Hacienda, resultando en un rechazo colectivo.
