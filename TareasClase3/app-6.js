/*
6. Crea un script que pida al usuario el diámetro de una rueda y su grosor 
(en metros) y a través de condicionales if realice las siguientes operaciones:
 
a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un 
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el 
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
 condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un 
 vehículo pequeño”.
b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el 
diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior 
a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior 
al recomendado”
*/

const prompt = require('prompt');
const colors = require("colors/safe");
//
// Setting these properties customizes the prompt.
//
prompt.message = colors.rainbow("Atencion!");
prompt.delimiter = colors.green(":");

let schema = {
    properties: {
      diametro: {
        description: colors.red("Ingrese el Diametro de la rueda?"),
        type: 'number'
      },
      grosor: {
        description: colors.red('Ingrese el grosor?'),
        type: 'number'
      }
    }
  };

  prompt.get(schema, function(err, result){
    if (result.diametro > 1.4  ){
        console.log('La rueda es para un vehículo grande')
    }
    else if (result.diametro <= 1.4 && result.diametro > 0.8 ){

        console.log('La rueda es para un vehículo mediano')
    }
    else {
        console.log('La rueda es para un vehículo pequeño')
    }

    if ((result.diametro > 1.4 && result.grosor < 0.4 ) || (result.diametro <= 1.4 && result.diametro > 0.8 && result.grosor < 0.4 )){
        console.log('El grosor para esta rueda es inferior al recomendado')
    }

  })