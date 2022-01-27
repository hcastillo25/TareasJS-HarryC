/*
2. Pide una nota (número). Muestra la calificación según la nota:
0-2: Muy deficiente
3-4: Insuficiente
5-5: Suficiente
6-6: Bien
7-8: Notable
9-10: Sobresaliente
*/
//Declarar el prompt objeto
const prompt = require('prompt');

//Declarar el schema, para que muestre Ingrese Su su calificacion en la captura para la variable 
//'calificacion' la cual es declarada como tipo numerica
var schema = {
    properties: {
      calificacion: {
        description: 'Ingrese Su Calificacion: ',
        type: 'number'
      }

    }
  };
//Usamos el objeto, con las variables ya declaradas para su captura
  prompt.get(schema, function(err, result){
    //Condiciones Compuestas haciendo uso los operadores logicos and (&&)
    //9-10: Sobresaliente
    if (result.calificacion > 8 && result.calificacion < 11){
        console.log('Calificacion Sobresaliente')
    }
    //7-8: Notable
    else if (result.calificacion > 6  && result.calificacion < 11) {
        console.log('Calificacion Notable')
    }
    //6-6: Bien
    else if (result.calificacion > 5  && result.calificacion < 11) {
        console.log('Calificacion Normal')
    }
    //5-5: Suficiente
    else if (result.calificacion > 4  && result.calificacion < 11){
        console.log('Calificacion Insuficiente')
    }
    //3-3: Insuficiente
    else if (result.calificacion > 2  && result.calificacion < 11){
        console.log('Calificacion Insuficiente')
    }
    //0-2: Muy deficiente
    else if (result.calificacion >= 0  && result.calificacion < 11){
        console.log('Calificacion Muy Deficiente')

    }
    else {
        console.log('Valor No Permitido, la calificacion solo puede ser entre 0 - 10')
    }
  })

