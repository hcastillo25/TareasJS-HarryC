const express = require('express');
const app = express();
const path = require('path');

// Agregar archivos estaticos
app.use(express.static('assets'))


// Rutas: 
// 1 - index
// 2 - usuarios

// Metodos HTTP: GET, POST, PUT, PATCH y DELETE

// Funcion de respuesta 
function respuesta(request, response) {
    response.send('Hellow World')
    request.links({
        next: 'http://demo.com?page=2',
        middle: 'http://demo.com?page=4',
        last: 'http://demo.com?page=6'
    });
    console.log(request.get('link'));
}


 


// Crear ruta en nuestro servidor web
app.get('/', respuesta)

// Crear ruta que retorna una vista HTML
app.get('/index', function(request, response) {
    response.sendFile(path.join(__dirname, '/vistas/index.html'));
})


app.get('/tarjeta', function(request, response) {
    response.sendFile(path.join(__dirname, '/vistas/tarjeta.html'));
})

// Asignar el puerto de red que la app estara corriendo
app.listen(3000)
console.log('Applicacion corriendo en el puerto 3000')




