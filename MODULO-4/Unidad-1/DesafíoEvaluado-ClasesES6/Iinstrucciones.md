# Instrucciones para ejecutar Babel

## Empezando 🚀

Inicializar el proyecto con npm y crear el archivo package.json

```bash
npm init -y
```

Instalar Babel y sus dependencias como lo son:

- **@babel/preset-env** que es un conjunto de plugins de Babel que permiten transformar el código de JavaScript moderno (ES6+) a JavaScript compatible con versiones anteriores de JavaScript.
- **@babel/cli** que es una interfaz de línea de comandos para Babel.
- **@babel/core** que es el núcleo de Babel.
- **@babel/polyfill** que es un conjunto de polyfills para replicar las funcionalidades de los nuevos métodos y objetos de JavaScript que no son soportados por todos los navegadores.

```bash
npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill
```

Crear el archivo de configuración de Babel llamado `babel.config.json` y agregar el siguiente contenido:

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.4",
        "forceAllTransforms": true
      }
    ]
  ]
}
```

La librería `core-js` es una dependencia de `@babel/polyfill` que se debe instalar para que Babel pueda usar los polyfills.

```bash
npm i core-js
```

Por ultimo debes correr el siguiente comando para que Babel transforme el código de ES6+ a JavaScript compatible con versiones anteriores de JavaScript.

```bash
npx babel -d dist/ src/ --config-file ./babel.config.json
```
