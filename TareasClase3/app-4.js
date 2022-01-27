//4. Diseñe un algoritmo que determine si un número es o no es, par positivo.
const prompt = require('prompt');

var schema = {
    properties: {
      var1: {
        description: 'ingrese un numero para determinar si es par positivo',
        type: 'number'
      }
    }
  };
prompt.get(schema, function(err, result){

    if (result.var1%2 == 0 && result.var1 >1){

        console.log('El numero es par positivo ')

    }
    else {
        console.log('El numero no es par o es negativo')
    }
})