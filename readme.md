# backend de la aplicacion

# como crear el proyecto
- Se para dentro de la carpeta, lo abre con el visual y en la consola ejecuta npm init y le crea el package json, ya solo es que empiece a descargar las dependencias, 

- crear el scafolding para trabajar MVS (Modelo Vista Servicio) 

- carpetas: 
    src
    dentro de src va 
    config
    dentro de config va dbconexion
    docs
    libs
    modules
    dentro de modules van cada modulo a realizar y para los tokens crear la carpeta de helpers

- Descargo los paquetes basicos 
    nodemon:
    express:
    cors:
    mysql:

- comando para descargarlos 
    npm i express nodemon cors mysql2  

- creo el archivo .env para insertar los datos para conectar con la base de datos 
- importo las librerias en el index.js

- Descargo el dotenv para manejar las variables globales para conectar con la base de datos

- instancio las librerias en el index.js

- Asigno el puerto que será 4100

- Creo el archivo dentro de src llamado dbConexion para crear la conexion a la base de datos e importo la librera de mysql2

- Especifico los parametro de la conexion

- pruebo la conexion y la exporto

- No me servia pero la solucion era que me faltaba importar la conexion a la base de datos en el index

# Creo lo modulos aprendices, auth que son los usuario y las fichas, usando MVS (Modelo Vista Servicio)

1. Configuro los modelos para hacer las consultas en la base de datos en los 3 modulos
- En los modelos uso el async para que sea asincronico y tambien debo exportar cada funcion
- Tambien debo importar la conexion en la base de datos

2. Creo los controladores para recibir la informacion del usuario, y devolver las respuestas del servidor y ejecutar las consultas.
- Se importa cada funcion de los modelos en los controladores para poder llamarlas en el endpoint correspondiente y usarlo
- utilizar el req, res para que no genere error a la hora de probar el endpoint en el postman

3. Configuro las rutas para poder acceder al endpoint para utilizarlo en el postman
- Se importan las funciones que hay en el controlador y a su vez crear el router que se hace de esta manera (const router = express.Router();)
- Después se configuran las rutas, usando el router creado, asignadole como se accede a este y posterior asignarle el metodo o la funcion


- Ahora descargo el paquete jsonwebtoken para la autenticacion en dos factores con el 
    npm i jsonwebtoken

# Creo una carpeta llamada helpers, para administrar los tokens
1. Creo el archvio llamado administrarToken.js
- importo la libreria jsonwebtoken