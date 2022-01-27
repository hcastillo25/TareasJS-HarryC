/*
En un estacionamiento cobran $/. 1.500 por hora o fracción. Diseñe un algoritmo que 
determine cuánto debe pagar un cliente por el estacionamiento de su vehículo, 
conociendo el tiempo de estacionamiento en horas y minutos.
*/
var prompt = require('prompt');

var schema = {
    properties: {
      horas: {
        description: 'ingrese las horas',
        type: 'number'
      },
      minutos: {
        description: 'Ingrese los minutos',
        type: 'number'
      }

    }
  };


prompt.get(schema, function(err, result){
    let calculo
    let costoparqueoh = 1500
    calculo = ((result.horas * costoparqueoh) + ((result.minutos/60) * costoparqueoh))
    console.log('El totar a pagar por uso del paque es ' + calculo)
 
})



