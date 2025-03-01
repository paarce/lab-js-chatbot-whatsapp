# WhatsApp MVP Extractor

Este proyecto es un extractor de mensajes de WhatsApp utilizando la librería **Baileys** en TypeScript. Extrae mensajes de grupos de WhatsApp y los guarda en un archivo JSON, identificando aquellos que contienen fechas o días de la semana.

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

## Instalación

1. Clona este repositorio en tu máquina local:
   ```sh
   git clone https://github.com/tu-usuario/whatsapp-mvp-extractor.git
   cd whatsapp-mvp-extractor
   ```

2. Instala las dependencias del proyecto:
   ```sh
   npm install
   ```
   o si usas yarn:
   ```sh
   yarn install
   ```

## Configuración

1. Asegúrate de reemplazar los **GROUP_IDS** en el código con los IDs reales de los grupos de los que deseas extraer mensajes.
2. El proyecto utiliza **Baileys** para conectarse a WhatsApp Web, por lo que la primera vez que ejecutes el script, se abrirá un código QR que deberás escanear con tu cuenta de WhatsApp.

## Uso

Para ejecutar el extractor de mensajes:
```sh
npm run start
```
O con yarn:
```sh
yarn start
```

Para obtener la lista de todos los grupos a los que estás unido y guardarlos en `groups.json`:
```sh
npm run groups
```
O con yarn:
```sh
yarn groups
```

## Archivos Generados

- `messages.json`: Contiene todos los mensajes extraídos, indicando si contienen fechas o días de la semana.
- `groups.json`: Lista con el nombre e ID de todos los grupos a los que perteneces.

## Notas

- Este es un **MVP**, por lo que aún no se ejecuta de forma automática.
- Asegúrate de estar conectado a Internet y tener acceso a WhatsApp Web durante la ejecución.
- Si encuentras errores, asegúrate de que estás utilizando la última versión de **Baileys**.

## Futuras Mejoras

- Automatización de la extracción cada hora.
- Persistencia en base de datos en lugar de JSON.
- Interfaz de usuario para visualizar los mensajes extraídos.

¡Disfruta del desarrollo! 🚀

