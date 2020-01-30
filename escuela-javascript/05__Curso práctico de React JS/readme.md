
## Acerca del curso

* Curso: 
	* Nombre: Curso Práctico de React JS
	* Link: https://platzi.com/clases/react-ejs/
* Profesor: 
	* Nombre: Oscar Barajas


## MODULO 1: React JS

### ¿Qué es React JS?

React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: web, móviles o de escritorio.
Cada pequeña parte de nuestra página web la conoceremos como “Componente”. Cada componente se encargará de una función en específico. Además, podremos reutilizar nuestros componentes siempre que lo necesitemos.

Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.


### DOM, Virtual DOM y React DOM

El DOM es el código HTML que se transforma en páginas web.

Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.

Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.


## MODULO 2: Crear una Aplicación con React JS

### Crear una Aplicación con React JS

* npx es un ejecutador de paquetes binarios de npm, es decir, que ejecuta entre otras cosas, una CLI.
```
npx create-react-app holamundo
```
* ejecutar proyecto react
```
npm run start
``` 
* Estructura del proyecto:
	* node_modules: contiene todas las dependencias que react necesita para funcionar. Es importante que esté ignorada porque nunca lo vamos a subir a nuestro repositorio
	* src: aqui está nuestra aplicación
		* serviceWorker.js: estará atento a los cambios de nuestra aplicación
	* package.json contiene toda la configuración de nuestro proyecto
* Creación y Tipos de Componentes
	* Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.
	* Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).
	* También tenemos componentes Stateless o Presentacionales. Los usamos creando funciones que devuelvan código en formato JSX (del cual hablaremos en la próxima clase).

### JSX: JavaScript + HTML

* Estamos acostumbrados a escribir código HTML en archivos .html y la lógica de JavaScript en archivos .js.
* React usa JSX: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.

### Props: Comunicación entre Componentes

* Las Props son la forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

### ¿Qué son los métodos del ciclo de vida

* Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

https://platzi.com/clases/1651-react-ejs/22576-que-son-los-metodos-del-ciclo-vida/


### State - Events

"React nos permite responder a las interacciones de los usuarios con propiedades como onClick, onChange, onKeyPress, onFocus, onScroll, entre otras.
Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios. Seguramente, esta función usará la función this.setState para actualizar el estado de nuestro componente.

Recuerda que los nombres de estos eventos deben seguir la nomenclatura camelCase: primera palabra en minúsculas, iniciales de las siguientes palabras en mayúsculas y el resto también en minúsculas."



## MODULO 3: Configurar un entorno de trabajo profesional

### Instalación y configuración de entorno

* crear carpeta de proyecto
* inicializar git 
```
git init
```
* inicilizar proyecto con información básica --> package.json
```
npm init -y
```
* estructurar proyecto
```
/public
	index.html
/src
	/components
	index.js
package.json
```
* instalar react en nuestro proyecto para tern la base iniciales. Se instala:
	* package-lock.json: maneja el versionado de los paquetes que estamos instalando
	* Se agregan las dependencias para el proyecto. Ver package.json
```
npm install react react-dom
```

### Compatibilidad con todos los navegadores usando Babel

Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.
Instalación de Babel y otras herramientas para que funcione con React:

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

Configuración de Babel (.babelrc):
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
}
```

### Webpack: Empaquetando nuestros módulos

"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:
```
npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
```

Configuración de Webpack (webpack.config.js):
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
```

Script para ejecutar las tareas de Webpack (package.json):
```
{
  "scripts": {
    "build": "webpack --mode production"
  },
}
```

compilar nuestro proyecto
```
npm run build
```


### Webpack Dev Server: Reporte de errores y Cambios en tiempo real

Instalación de Webpack Dev Server:
```
npm install --save-dev webpack-dev-server
```

Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):
```
{
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"
  },
}
``` 

ejecutar servidor de webpack
```
npm run start
```

### Estilos con SASS

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:
```
npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
```

Configuración de Sass en Webpack (webpack.config.js):
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// ...
module: {
  rules: [
    {
      test: /\.(s*)css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader',
        'sass-loader',
      ],
    }, 
  ],
},
// ...
plugins: [
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
  }),
],
```

### Configuración final: ESLint y Git Ignore

El Git Ignore es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.

Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.

Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.

Instalación de ESLint:
```
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
``` 
Podemos configurar las reglas de ESLint en el archivo .eslintrc.

https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a




### Arquitectura de componentes para Platzi Video

componentinizar...

## MODULO 4: Llevar un diseño de HTML y CSS a React

### Estructura del Header

Repositorio: https://github.com/platzi/curso-frontend-escuelajs
codigo

### Estilos del Header

codigo

### Estructura y Estilos del Buscador

codigo

### Estructura y Estilos de Carousel y Carousel Item

codigo

### Estructura y Estilos del Footer

codigo

### Añadiendo imágenes con Webpack

Vamos a usar File Loader para acceder a las imágenes de nuestro proyecto desde el código.
Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero al momento de compilar, Webpack guardará las imágenes en una nueva carpeta junto al código para producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres y rutas de los archivos.
Instalación de File Loader:

```
npm install --save-dev file-loader
```

Configuración de File Loader en Webpack (webpack.config.js):

```js
rules: [
  {
    test: /\.(png|gif|jpg)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'assets/[hash].[ext]' },
      }
    ],
  },
],
```

Uso de File Loader con React:

```js
import React from 'react';
import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

const Component = () => (
  <img src={nombreDeLaImagen} />
);

export default Component;
```

### Imports, Variables y Fuentes de Google en Sass

Así como JavaScript, Sass nos permite almacenar valores en variables que podemos usar en cualquier otra parte de nuestras hojas de estilo.

```css
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

body {
  background: $main-color;
  font-family: $theme-font;
}
```

Podemos guardar nuestras variables en un archivo especial e importarlo desde los archivos de estilo donde queremos usar estas variables.

```css
# Vars.scss
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

# App.scss
@import ""./Vars.scss""

`body {
  background: $main-color;
  font-family: $theme-font;
}
```

También podemos importar hojas de estilo externas a nuestra aplicación. Por ejemplo: las fuentes de Google.

```css
@import url(https://fonts.googleapis.com/css?family=Muli&display-swap)
```

cursos SASS --> https://platzi.com/clases/sass/


## MODULO 5

## MODULO 6







