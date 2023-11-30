# LearnYouNode Exercise

Es un paquete de Node.js que contiene una serie de lecciones que muestran los conceptos basicos para escribir aplicaciones Node.js. Las lecciones empiezan con una leccion basica "Hola Mundo" y luego pasan a ejercicios mas avanzados sobre como lidiar con E/S sincronicas y asincronicas, operaciones de sistemas de archivos, redes TCP y HTTP, eventos y transmisiones

## Requisitos previos

1. Necesario [Node.js](https://nodejs.org/) instalado en tu máquina.
2. Ejecute `[npm install -g learnyounode]`. Esto instala el paquete learnyounode Node.js globalmente
3. Los ejercicios estan planteados en Typescript, por tanto deberan ser transpilados para su ejecucion, usando el comando de terminal `tsc`.

## Previo

Inicia learnyounode en el terminal ejecutando el comando `learnyounode`.
Inicia el primer ejercicio usando las teclas de flecha para navegar y la tecla Intro para seleccionar una leccion.
Seguidamente se imprimiran en la consola las instrucciones de la leccion.
Crear un archivo de script y, siguiendo las instrucciones y sugerencias que se imprimieron anteriormente, solucionar el ejercicio.
Verificar la solucion ejecutando el comando `learnyounode verify`.
Si la solucion supera las pruebas, se imprime un mensaje "PASS". En caso contrario, se imprime un mensaje de "FALLO".

## Descripcion del ejercicio

    #hello World

El primer ejercicio trata sobre imprimir un mensaje haciendo uso de "console.log".

    #baby Steps

Se debe escribir un programa que acepte uno o mas numeros como argumentos de la linea de comando y luego imprima la suma de esos argumentos. La sugerencia dice que podemos acceder a los argumentos de la linea de comando desde el objeto de proceso. Una de las propiedades del objeto de proceso es argv, una matriz que contiene la lista completa de argumentos de la linea de comando.

    #my firts io

Se debe escribir un programa que lea un archivo de forma sincronica e imprima el numero de lineas nuevas del archivo en la consola. En este ejercicio importamos el modulo "fs", y usamos el metodo `readFileSync()` para leer el contenido de un archivo. Concretamente, en este ejercicio queremos leer un archivo que se pasa como tercer argumento en la linea de comando. El metodo mencionado, devuelve el objeto del bufer cuando se completa la lectura. El contenido de este objeto de bufer lo convertimos en una cadena con el metodo `toString()`. Seguidamente usamos el metodo `split()`para dividir la cadena en cada nueva linea ('\n') y obtener la longitud con `.length`. Para obtener el recuento correcto, restamos uno a nuestro valor final.

    #my firts io async

En este ejercicio requerimos "fs" al igual que en el anterior ejercicio. Guardamos el tercer indice de la propiedad argv del objeto de proceso en una variable llamada "file". El metodo `fs.readFile()`recibe dos argumentos; un archivo y una funcion de devolucion de llamada. La funcion de devolucion de llamada tambien tiene dos argumentos; err y data. Dentro de la funcion de devolucion de llamada, el contenido se pasa a la variable "lines" y se convierte en una cadena con el metodo toString(). A continuacion la cadena se divide en nuevas lineas con el metodo split(). Seguidamente se obtiene la longitud. Finalmente, console.log() imprime el contenido de las lineas en la consola.

    #ls-Filter

En este ejercicio usaremos los modulos "fs" y "path". Al ejecutarse la funcion de devolucion de llamada, comprobamos si existe algun error(y lo devolvemos). Al mismo tiempo, iteramos los archivos con el metodo forEach(). El metodo files.forEach() acepta una funcion de devolucion de llamada como argumento. Esta, acepta un archivo como argumento. El archivo se pasa desde el metodo files.forEach(), que recibe archivos del metodo fs.readdir(). Si la ruta del archivo es igual a la variable "extension", el archivo se imprime por pantalla

    #main-module-filter

En este ejercicio, similar al anterior, se debe encapsular la solucion en una funcion y asignar la funcion al module.exports para que pueda llamarse desde otro archivo.

    #http-client

En este ejercicio, se debe escribir un programa que realice una solicitud HTTP GET a una url y escriba los datos de respuesta en la consola. Este metodo solo recupera datos del recurso especificado (determinado por la url dada).
En este caso, convertimos la respuesta a `http.get`con el metodo setEncording(), para establecer la codificacion de la respuesta en utf8. El metodo on() se utiliza para registrar los datos o errores de la respuesta en consola.

    #http-collect

Este ejercicio recopila todos los datos de una solicitud de http.get() y regista la cantidad de caracteres y la cadena completa de caracteres recibidos del servidor. Aqui usaremos el modulo de lista de bufer(). La respuesta a la solicitud http se pasa a la lista del bufer(bl) a traves del metodo pipe(). Esta recibe una funcion como argumento con los datos del bufer como argumento. Se controlan los errores y los datos obtenidos se muestran por consola.

    #juggling-async

En este ejercicio, se plantean dos funciones que asignan e iteran a traves de los valores de una matriz. La funcion `print.Results` toma un indice como argumento, que se utiliza cuando se llama a la funcion al final del programa. Se utiliza para iterar a traves de valores en "resultados". Registra los valores en la consola. Este bucle, es secuencial. Los resultados[i] no se pueden registrar en la consola a menos que su valor sea mayor que el valor iterado anterior. Esto dato es importante, ya que asi sabremos que nuestros datos se agregaran al array de resultados.
La segunda funcion `http.get()` se utiliza cuando se llama a la funcion al final del programa. Las url solicitadas se pasan como primer argumento llamando al valor de la propiedad process.argv.
El segundo argumento es una funcion dque acepta la respuesta como argumento. Aqui, el metodo response.pipe() transmite la respuesta al metodo bl(). Esta, a su vez, acepta una funcion callback que acepta como argumento "error"(y se gestiona dentro del metodo), y datos(convertidos a string). Cada vez que se ejecuta la funcion dentro del metodo bl(), el valor del contador aumenta en 1. Al llegar el contador a 3, se llama a la funcion printResults con los datos como argumento.

    #time-server

En este ejercicio, se crea un servidor de hora del TCP para que escriba la fecha y hora actuales en el socket en formato 24 horas. La primera funcion, zeroFill, hace uso de un operador condicional para determinar si se añade un 0 delante de un valor (en funcion de su valor). La segunda funcion, now, formatea correctamente la hora utilizando el objeto Date(). Se obtienen los datos temporales y se concatenan. Seguidamente el metodo `net.createServer()` es asignado a la variable server. Este metodo acepta una devolucion de llamada como argumento, que acepta un socket. Dentro de esta devolucion de llamada, llamammos al metodo socket.end() y pasamos now() mas un salto de linea par escribir la fecha y la hora en el socket.
Escuchamos con el metodo listen(), el puerto pasado como segundo argumento.

    #http-file-server

En este ejercicio, se debe crear un servidor http que proporciones el mismo archivo de texto cada vez que el servior recibe una solicitud.
Despues de llamar al metodo createServer(), se llama al metodo writeHead(), dentro de la funcion que se pasa al metodo createServer() como argumento. Los datos que se escriben son: el codigo de exito http (200), asi como un objeto JSON que contiene el tipo de contenido.

    #http-uppercase

En este ejercicio necesitamos crear un servidor http que solo acepte solicitudes POST. El cuerpo de esta solicitud debe convertirse en una cadena en mayuscula y devolverse al cliente a traves de la respuesta del servidor.

    #http-json-apiServer

En este ejercicio, se debe crear un servidor http que escuche en un puerto especificado para manejar dos rutas diferentes `/api/parsetime`, y `/api/unixtime`.
Primero, creamos el servidor. Seguidamente una funcion manejara las solicitudes, verificando si la solicitud es de tipo GET, para luego analizar la url y determinar la ruta (pathname).
Definimos dos funciones (`handleParseTimeRequest`, y `handleUnixTimeRequest`) para manejar las rutas "/api/parsetime", y "/api/unixtime" respectivamente.
Las funciones `sendJsonResponse`,`send400Response`, y `send404Response`, se utilizaran para enviar respuestas JSON, error 400, y error 404 respectivamente.
Se proporciona, ademas, un puerto de escucha.
