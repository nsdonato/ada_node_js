// Leer archivo sincronicamente
/* const fs = require('fs');
const textoLeido = fs.readFileSync("./assets/texto.txt", "utf-8");
const nuevoTxt = "Soy un nuevo texto";
const nuevoText = fs.writeFileSync("./assets/nuevoTexto.txt", nuevoTxt);
console.log(textoLeido); */

// leer archivo asincronicamente:
/*
const fs = require('fs');
const textoLeido = fs.readFile("./assets/texto.txt", "utf-8", (err,data) => {
    // ver la clase.
});
*/
//console.log("Hola chicas");
// single threaded
// callbacks, una función que retorna otra función.

// Creamos un servidor en el puerto 3000, leemos un archivo json.
const fs = require("fs");
const http = require("http");
const url = require('url');

const readFile = (req, res, file) => {
    // parsea la url del request y la convierte en un objeto
    console.log(url.parse(req.url));
    fs.readFile(`./assets/${file}.json`, "utf-8", (err, data) => {
        res.end(data);
    })
}
const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/peliculas') {
        readFile(req, res, 'movies');
    } else if (req.url === '/series') {
        readFile(req, res, 'series');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });

        // server side rendering -> en vez de tener un front, hacemos todo el rendering desde el back, es mas rapido
        //
        res.end('<h1>Estás en la página equivocada.</h1>');
    }
});

server.listen(3000);

// creamos nuestro propio modulo.

const jsonAEnviar = () => {

}

module.exports = jsonAEnviar;

/* versiones de modulos:
si no tiene nada toma la versión que está ahí, si tiene
~
^
instlar una versión especifica: npm i is-odd@1.0.0

packaje.json

packaje-lock.json
    toda la información de cada uno de los aspectos y dependencias de mi proyecto. garantiza que la otra persona tenga exactamente las mismas dependencias que tengo yo.


*/