---
title: 12.3 Seguridad
date: 2024-09-10T16:52:00.000Z
sidebar:
  order: 3
---
La implementacion de webhooks requiere exponer un endpoint de su sistema a internet, por lo cual es recomendable implementar uno o ambas de las siguientes opciones de seguridad:

#### Usar Secreto

Es el metodo de seguridad mas sencillo. El valor ingresado aqui sera enviado en todo evento transmitido hacia el webhook en la cabezera http ``X-Webhook-Secret`` asi verificando que es una transmision que viene de nuestro sistema.

#### Usar Endpoint de Autenticacion

Este metodo consiste en proporcionarnos con un endpoint de autenticacion, al cual enviaremos los siguientes parametros segun lo configurado

**Usuario del Webhook** sera el valor enviado en ``client_id``
**Contraseña para el Webhook** sera el valor enviado en ``client_secret``

El tipo de contenido enviado es de tipo ``application/x-www-form-urlencoded`` y se adiciona un parametro de query de tipo ``?grant_type=client_credentials``. Ejemplo en Go:

```go
type WebhookAuthRequest struct {
	ClientID     string `form:"client_id" json:"clientId"`
	ClientSecret string `form:"client_secret" json:"clientSecret"`
}
```

Factured espera recibir una respuesta de este endpoint que contenga esta estructura como minimo, con contenido ``application/json``:

```go
type WebhookAuthResponse struct {
	AcessToken string `json:"access_token"`
	TokenType  string `json:"token_type"`
	ExpiresIn  int32  `json:"expires_in"`
}
```

serializado en json:

```json
{
	"access_token": "su-token-aqui",
	"token_type": "Bearer",
	"expires_in": 1
}
```

El ``access_token`` devuelto sera posteriormente utilizado en toda notificacion enviada en la cabezera ``Authorization`` con formato ``Bearer <token>``. El ``expires_in`` representa el tiempo de expiracion del token en segundos, nuestro sistema no volvera a hacer una peticion para recuperar el token hasta que el mismo este expirado.
