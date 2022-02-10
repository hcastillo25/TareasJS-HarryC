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
    response.send('<!DOCTYPE html><html><head><title></title><meta charset="UTF-8"></head><body><p><a href="http://localhost:3000/index">Vista HTML</a></p><p><a href="http://localhost:3000/tarjeta">Tarjeta</a></p> </body></html>')

   // response.sendFile(path.join(__dirname, '/vistas/index.html'));
    
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




