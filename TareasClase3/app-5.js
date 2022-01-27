/*
5.  Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, 
ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso 
contrario. Además por la compra de más de 3 docenas se obsequia una unidad del 
producto por cada docena en exceso sobre 3. 
Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, 
el monto a pagar y el número de unidades de obsequio por la compra de cierta 
cantidad de docenas del producto. 
*/
const prompt = require('prompt');

let schema = {
    properties: {
      cantidad: {
        description: 'Ingrese la cantidad del producto con descuanto a comprar',
        type: 'number'
      }
    }
  };
  prompt.get(schema, function(err, result){
    let precio = 500
    let cantidadregaladas = 0
    let descuento, montocompra,montopagar,contador,porciento
    if (result.cantidad >= 48){
        contador = result.cantidad - 48
        cantidadregaladas = cantidadregaladas + 1
       
        while (contador >= 12) {
            contador = contador - 12 
            cantidadregaladas = cantidadregaladas + 1   
        }                         
        montocompra = result.cantidad * precio 
        descuento = montocompra * .15 
        montopagar = montocompra - descuento
        porciento = 15
    }
    else if (result.cantidad > 36){
        montocompra = result.cantidad * precio
        descuento = montocompra * .15
        montopagar = montocompra - descuento
        porciento = 15
    }
    else {
        montocompra = result.cantidad * precio
        descuento = montocompra * .10
        montopagar = montocompra - descuento
        porciento = 10
    }
    console.log('Cantidad Compradas = ' + result.cantidad )
    console.log('Monto de la compra = ' + montocompra )
    console.log('Descuento %'+porciento +' = ' + descuento  )
    console.log('Cantidad Regaladas = ' + cantidadregaladas )
    console.log('Monto a Pagar = ' + montopagar )
  })