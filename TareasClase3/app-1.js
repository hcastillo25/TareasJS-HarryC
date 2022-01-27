// 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

//Declarar el prompt objeto
const prompt = require('prompt');

//Declarar el schema, para que muestre Ingrese Su edad en la captura para la variable 'edad'
var schema = {
    properties: {
      edad: {
        description: 'Ingrese Su Edad'
      }

    }
  };
//Inicializamos el prompt
prompt.start();

//Usamos el objeto, con las variables ya declaradas para su captura
prompt.get(schema, function(err,result){
    //Condicionamos la variable edad para saber si es mayor a 18 el dato capturado
    if (result.edad > 18){
        console.log('Ya puede Conducir')

    }

});
