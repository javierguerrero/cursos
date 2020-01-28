
## Acerca del curso

* Curso: 
	* Nombre: Buenas Prácticas y Entorno de Desarrollo
	* Link: https://platzi.com/clases/prework/
* Profesor: 
	* Nombre: Eduardo Álvarez

## Introducción a la línea de comandos

### Introducción

Te damos la bienvenida al Curso de Prework de la Escuela de JavaScript, tu profesor Eduardo Álvarez, backend developer en Platzi e ingeniero informático, te enseñará todo lo necesario para poder iniciar con la escuela de JavaScript:

* Introducción a la línea de comandos.
* Configurar la terminal y el editor de código.
* Git y GitHub.


### Instalación de Ubuntu Bash en Windows

* Activar "Windows Subsystem for Linux". Es una forma de ejecutar SO basados en Linux sobre Windows.
* Instalar Ubuntu: Microsfot store >> Search >> Instalar la distribución "Ubuntu". Una vez instaldo ya tendremos Ubuntu en Windows.
* ¿Por que tenemos que instalar Ubuntu Bash, si podemos hacer todo nativamente desde windows 10?
	* Porque saber manejar Linux es uno de los skills más importantes hoy en día. Además así mantenemos uniformidad en los comandos e instalaciones que hacemos durante la Escuela de JavaScript entre los diferentes sistemas operativos, y por último, porque la terminal de Linux es mucho más usada y con mejor soporte que la de Windows
* Verificar que tenemos "curl"
```
curl
```
* descargar la versión 12 de node.js
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```
* ahora procedemos a instalar node.js
```
sudo apt-get install -y nodejs
```
* verficar que node.js se instaló correctamente
```
node -v
```
* instalar visual studio code
* en visual studio code instalar la extensión "Remote - WSL". Esto nos permite usar windows para desarrollar en un entorno basado en Linux
* cada vez que iniciemos nuestra terminal hacerlo como administrador
* movernos a una carpeta dentro de Windows
```
cd /mnt/c
```
* crear una aplicacion react
```
npx create-react-app portfolio
```
* ejecutar aplicacion react (dentro de la carpeta donde se encuentra)
```
npm start
```

### Introducción a la terminal

La terminal es la herramienta más poderosa para un desarrollador. Cambia un poco dependiendo del sistema operativo, puede ser:

* Unix: sistema operativo en el que se basa Mac y Linux.
* Windows.

### Manejo archivos y directorios

Vamos a ver diferentes comandos que nos serán de gran utilidad:
* ls: Nos permite listar los archivos y directorios que se encuentren dentro de la carpeta en la que estamos ubicados, podemos pasarle distintos parámetros a este comando:
	* -a podemos ver los archivos ocultos.
	* -l nos lista los contenidos mostrando sus permisos y propietarios.
	* -t nos lista los contenidos según su fecha.
* clear: Nos limpia la pantalla.
* pwd: Nos retorna la ruta absoluta en la cual nos encontramos.
* mkdir: Crea una carpeta.
* cd: Nos mueve a alguna carpeta que le indiquemos, dentro de los archivos ocultos vimos que existe:
	* .: Refiere a la carpeta en la cual estamos ubicados.
	* ..: Se refiere a la carpeta padre en la cual nos encontramos.
* history: Muestra el histórico de todos los comandos que hemos ejecutado.
* touch: Crea un archivo vacío con el nombre que le indiquemos.
* nano: Es un editor dentro de la consola, podemos abrir cualquier archivo y modificarlo.
* mv: Permite mover archivos entre distintas carpetas, solamente debemos indicarle el nombre del archivo y la ruta de destino.
* rm: Elimina únicamente un archivo, añadiendo el parámetro -rf podemos eliminar directorios también.

### Herramientas básicas (Comandos CAT, MORE, TAIL y OPEN)

proximamente

### Crea llaves SSH

Las llaves SSH nos van a ayudar para autentificarnos contra servidores. SSH utiliza criptografía asimétrica, o sea, tenemos dos llaves:
* Pública: la llave pública la podemos compartir por internet.
* Privada: debes tenerla en un sitio seguro y no debe ser compartida.

Tener una llave SSH nos permitirá una conexión fácil y segura con servidores, en el caso de la escuela de JavaScript nos va a servir para conectarnos con GitHub.

¿para qué todo esto?
* Para asegurar nuestros commits en github
* Para realizar despliegues en producción

Para crear una llave SSH utilizamos el siguiente comando:
```
ssh-keygen -t rsa -b 4096 -C "This is a key"
```

	RSA: algoritmo para la creación de la llave. RSA = Rivest - Shamir - Adleman --> son los creados de este algoritmo
	-b indica la cantidad de bits que tendrá la llave
	-C es para espeficar un comentario

si accedemos a la carpeta donde se generó la clave, entonces encontraremos una llave privada y una llave pública




## Configuración entorno de desarrollo

### Configuración de ZSH para Windows con Linux Shell

* Windows 10 nos permite ejecutar linux --> instalar ubuntu
* Instalar hyper
	* Hyper es una terminal multiplataforma
	* https://hyper.is
* Instalar ZSH
```
sudo apt-get install zsh
```

* Hacer que ZSH sea el shell por defecto de nuestro sistema

Zsh = Es un intérprete de comandos para unix
Oh My Zsh = nos permite personalizar y mejorar Zsh con temas, complementos, funciones, etc.


### Cómo instalar Node.js

* Node.js es un entorno de ejeución para JavaScript en el lado del servidor.
* Al escribir el comando `node` se nos abrirá un shell interactivo donde podremos escribir código javascript
* Npm es el manejador de paquetes de Node.js. Con é podemos instalar **dependencias** a nuestro proyecto o instalar programas globalmente en nuestro sistemas.


### Instalación y configuración de VSCode

Si la primera mejor amiga del programador es la línea de comandos, es momento de instalar y configurar el segundo mejor amigo del programador: el editor de código.

Existen multiples editores de código, para la escuela de JavaScript vamos a utilizar Visual Studio Code. Vamos a añadir diferentes plugins para VSCode:

* Git Blame: va a mostrar el autor de la línea de código en la que estemos trabajando.
* ESLint: es una herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript, o sea, nuestro linter. Debemos instalar y configurar eslint para que siga el estilo de código que le indiquemos.
* Color Highlight: resalta el color que estemos escribiendo.
* SASS: es un preprocesador de CSS.

### Google Chrome para desarrollo fronted

pendiente

### Herramientas de desarrollo Backend: JSON Viewer y Postman

pendiente


## Git y GitHub

### ¿Qué es Git, para qué se usa y qué resuelve?

Git es un sistema de control de versiones que nos permite llevar un histórico sobre los cambios de nuestro proyecto, no es el único sistema de control de versiones, pero sí el más usado. Fue creado por Linus Torvalds. Git y GitHub no son lo mismo, uno es el sistema de control de versiones y el otro es la red social de programadores.

Los repositorios son una estructura de datos que almacenan información sobre archivos y directorios. Es el inicio de todo proyecto con Git, dentro de un repositorio encontraremos ramas, no son más que la duplicación de un objeto bajo un repositorio, permite trabajar en paralelo para al final unir los cambios.

### Instalación de Git

Es como instalar una aplicación más en Windows, el instalador lo consigues acá https://gitforwindows.org, debes descargarlo y abrirlo. Allí se te abrirá una ventana de instalación y solo debes seguir los pasos que te diga.
Git nos instala una terminal que se llama git shell esto es una terminal distinta a la que trae el sistema operativo, es muy similar a la que podríamos tener en Unix, incluso puede ser un reemplazo de Hyper o de la terminal de Ubuntu.


### Cómo crear un repositorio, primer commit, reset y logs

Para inicializar un repositorio en una carpeta
```
git init
```
para darnos cuenta que un repositorio fue creado tenemos que verificar que existe una carpeta .git

para ver el estado de nuestro repositorio
```
git status
```

para hacer commit (es la forma en que guardamos un cambio dentro del repo)
```
git commit -m "this is a comment"
```

ver histórica de commits dentro de nuestro repo
```
git log
```

para ignorar los cambios en un archivo
```
git checkout -- readme.md
```

añadir archivo a los cambios
```
git add readme.md
```

reset soft -> regresar al commit anterior pero manteniendo los cambios del commit actual
```
git reset --soft 343ed2b4bcabc1c798153d90e2ac9f5d900a470c
```
reset hard -> regresar al commit y lo que haya en el commit actual se borra
```
git reset --hard 
```

### Ramas, rebase y merge

Recuerda que una rama es la duplicación de un objeto sobre el repositorio y nos va a permitir trabajar en paralelo para después unir los cambios a nuestro proyecto, en este caso a nuestra rama master, los comandos principales son:

* git checkout -b develop: según el commit en el cual ejecutemos este comando va a ser el punto en el cual se va a crear una rama idéntica, en este caso con el nombre de "develop".
* git merge develop: va a añadir los commits a la rama master.
* git rebase develop: va a añadir los commits a la rama master unificando ambas ramas y conservando la historia de la misma.

listar ramas
```
git branch
```

crear una rama
```
git checkout -b develop
```

cambiar de rama
```
git checkout master
```

para hacer un rebase nos cambiamos a la rama master y ejecutamos el siguiente comando (develop es la rama de donde nos queremos traer los commits)
```
git rebase develop
```
para hacer un merge
```
git merge develop
```

para añadir varios archivos a los cambios
```
git add .
```

### Github: configuración, repositorio remoto, push y pull

* Crear cuenta en Github
* Github >> Settings >> SSH and GPG Keys
* Al crear una conexión SSH nos permitirá crear una conexión segura entre Github y nuestra computadora
* Para ver la llave dentro de nuestro sistemas vamos a la terminal de comando y entramos a la carpeta ".ssh". Hacemos cat de la llave pública y la agregamos en Github
* En Github creamos un repositorio y en el botón "Clone or download" usamos la opción "Clone with SSH"
* En la terminal, vamos a la carpeta donde queremos que esté ubicado el proyecto  y colocamos el siguiente comando:
```
git clone git@github.com:javierguerrero/que-cocino-hoy.git
```

### Cómo crear un buen README.md y sintaxis de markdown

* El README sirve para hacer la descripción del proyecto
* Se escribe en formato markdown
	* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
* Editor online markdown
	* https://pandao.github.io/editor.md/en.html
	* https://dillinger.io