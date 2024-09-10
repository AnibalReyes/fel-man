---
title: 12.2 Eventos
date: 2024-09-10T16:50:00.000Z
sidebar:
  order: 2
---
## DTE URL
Nosotros enviaremos la siguiente estructura a la URL especificada en este campo. Actualmente el evento del webhook es activado cuando se actualiza uno o varios DTEs emitidos en contingencia o cuando se actualiza un lote de DTEs transmitidos por el API de lotes.  La URL es lo minimo requerido para hacer una integracion con nuestro sistema de webhooks. 

Este es un ejemplo de la estructura representada en el lenguaje "Go" :
```go
type WebhookDteRequest struct {
	WebHookDte          []WebHookDte `json:"dtes"`
	BatchGenerationCode *string      `json:"batchGenerationCode"`
}
type WebhookDte struct {
	Environment       string   `json:"ambiente"`
	GenerationCode    string   `json:"codigoGeneracion"`
	MhCode            string   `json:"codigoMh"`
	MhDescription     string   `json:"descripcionMh"`
	Status            string   `json:"estado"`
	DatetimeProcessed *string  `json:"fechaProcesado,omitempty"`
	DatetimeReceived  string   `json:"fechaRecibido"`
	ControlNumber     string   `json:"numeroControl"`
	SealOfReception   *string  `json:"selloRecibido,omitempty"`
	ExternalDteId     *string  `json:"externalDteId"`
	Observations      []string `json:"observaciones"`
	Version           int32    `json:"version"`
	ExternalOriginId  *string  `json:"externalOriginId"`
}
```
Si no estan familiarizados con el lenguaje Go, pueden interpretar los valores con * como opcionales, es decir podrian estar o no estar incluidos en el mensaje recibido dependiendo de ciertas condiciones de la transmision.

Y este es un ejemplo de una posible representacion json de la anterior estructura:

```json
{
  "dtes": [
    {
      "ambiente": "00",
      "codigoGeneracion": "C8104738-E2E4-4658-85B4-7354123F1ACD",
      "codigoMh": "004",
      "descripcionMh": "[identificacion.numeroControl] YA EXISTE UN REGISTRO CON ESE VALOR",
      "estado": "RECHAZADO",
      "fechaProcesado": "10/09/2024 11:25:45",
      "fechaRecibido": "10/09/2024 11:25:43",
      "numeroControl": "DTE-03-M001P001-000000000000298",
      "externalDteId": "CCF00102",
      "observaciones": [
        
      ],
      "version": 2,
      "externalOriginId": "0001"
    }
  ],
  "batchGenerationCode": null
}
```
