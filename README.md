### CHATBOT Whatsapp (Meta Provider)

<p align="center">
  <img width="300" src="https://i.imgur.com/Oauef6t.png">
</p>


**Con esta librería, puedes construir flujos automatizados de conversación de manera agnóstica al proveedor de WhatsApp,** configurar respuestas automatizadas para preguntas frecuentes, recibir y responder mensajes de manera automatizada, y hacer un seguimiento de las interacciones con los clientes.  Además, puedes configurar fácilmente disparadores que te ayudaran a expandir las funcionalidades sin límites. **[Ver más informacion](https://bot-whatsapp.netlify.app/)**

```js
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])

    const adapterProvider = createProvider(MetaProvider, {
        accountSid: process.env.ACC_SID,
        authToken: process.env.ACC_TOKEN,
        vendorNumber: process.env.ACC_VENDOR,
    })

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}
```
### Run
- Run these commands
```
npm install
npm start
ngrok http 3000
```
- Setup [webhook](#webhook)

## Initial Setup

- Crear cuenta empresarial https://business.facebook.com/
- Crear app usando el mismo correo -> Otros -> Empresa
- Configurar "Whatsapp", generar token de acceso, registrar tlf de prueba y exportar Postman collection


#### Webhook
- Intall and config ngrok

##### Setup
- Run the app
- Create a public url to setup the Webohook 
```
brew install ngrok
ngrok config add-authtoken <token>
ngrok http 3000
```
- Build the webhook url (find the similar URL in the logs):
https://{----}.ngrok-free.app/webhook
- Go to the Meta app website (and left panel): Whatsapp > Configuration
- Fill up the form:
    * Webhook URL
    * verifyToken: Look for it in the .env file
    * Press "Verify and save" and you should recive a "Webhook verified" message in the logs
- Scroll down and find the "message" row under "Webhook's fields" and subscribe

NOW YOUR ARE READY to use the chat in Whatsapp

### Docs
https://bot-whatsapp.netlify.app/docs/providers/meta/



---
## Recursos
- [📄 Documentación](https://bot-whatsapp.netlify.app/)
- [🚀 Roadmap](https://github.com/orgs/codigoencasa/projects/1)
- [💻 Discord](https://link.codigoencasa.com/DISCORD)
- [👌 Twitter](https://twitter.com/leifermendez)
- [🎥 Youtube](https://www.youtube.com/watch?v=5lEMCeWEJ8o&list=PL_WGMLcL4jzWPhdhcUyhbFU6bC0oJd2BR)