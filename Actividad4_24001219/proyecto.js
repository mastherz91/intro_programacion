//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if ("SI" == casado.toUpperCase()) {
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if ("SI" == casado.toUpperCase()) {
    edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
/**
 * 1. convierta la cantidad de hijos a numero
  */
if ("SI" == hijos.toUpperCase()) {
    cantidad_hijos = prompt("¿Cuantos hijos o hijas tiene?")
}

var cantidad_hijos_numero = parseInt(cantidad_hijos)

//Aquí debe calcular el recargo total basado en las respuestas ingresadas


//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if (edad_numero >= 18 && edad_numero < 25) {
    recargo_total += precio_base * edad_18;
} else if (edad_numero >= 25 && edad_numero < 50) {
    recargo_total += precio_base * edad_25;
} else if (edad_numero >= 50) {
    recargo_total += precio_base * edad_50;
}
//aqui puede colocar un else if() con el siguiente rango

/** 
 * 2. Recargo por la edad del conyuge
 */
if (casado.toUpperCase() === "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        recargo_total += precio_base * casado_18;
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        recargo_total += precio_base * casado_25;
    } else if (edad_conyuge_numero >= 50) {
        recargo_total += precio_base * casado_50;
    }
}

/**
 * 3. Recargo por la cantidad de hijos 
 */
recargo_total += cantidad_hijos_numero * (precio_base * hijos_recargo);

precio_final = precio_base + recargo_total
//Resultado
console.log("Para el asegurado " + nombre);
console.log("El recargo total será de: " + recargo_total);
console.log("El precio será de: " + precio_final);

