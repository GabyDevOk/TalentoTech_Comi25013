let nombre = "Agostina";
let edad = 24;
/* CONDICIONALES */
if (edad >= 18) {
    console.log(`${nombre} podes entrar`);
} else {
    console.log(`${nombre} NO podes entrar`);
}

/*    true/false */
/* si (condicion){
   true = ejecuta esto
} sino {
  false=  ejecuta esto
} */

/* IF TERNARIO */
/* CONDICION ?                   TRUE                : FALSE           */
edad >= 18 ? console.log(`${nombre} podes entrar`) : console.log(`${nombre} NO podes entrar`);

/*  ANIDADOS */
let nota = 10;

if (nota < 5) {
    console.log("Insuficiente");
} else if (nota < 6) {
    console.log("Suficiente");
} else if (nota < 8) {
    console.log("Bien");
} else {
    console.log("Sobresaliente");
}

/* if ternario anidado */

nota < 5 ? console.log("Insuficiente")
    : nota < 6
        ? console.log("Suficiente")
        : nota < 8
            ? console.log("Bien")
            : console.log("Sobresaliente");

// Switch

/* switch (variable) {
    case "valor1": */
/*      codigo si variable es === "valor1" */
/*       break;
  case "valor2" : */
/* codigo si variable es === "valor2" */
/*         break;    
    default: */
/*       codigo si no se cumple ningun caso */
/*         break;
}
 */

let semaforo = "ROJO";
/* semaforo.toUpperCase  convierte a mayuscula
semaforo.toLowerCase  convierte a minuscula */

switch (semaforo.toLowerCase()) {
    case "rojo":
        console.log("No podes avanzar");
        break;
    case "amarillo":
        console.log("Precaución");
        break;
    case "verde":
        console.log("Podes Avanzar");
        break;
    default:
        console.log("no es dato valido");
        break;
}

/*
pedir a users en el navegador que elija (pelicula, libro o serie)
en el caso que elija cualquiera de esas opciones , le recomendamos una pelicula, libro o serie
sino le respondemos por default 
*/

/* .length */
/* Agostina tiene 8 caracteres */
console.log(nombre.length);

let nombre2 = "batman";
console.log(nombre2.length); // 6 - propiedad (no lleva ()) pedimos un dato
console.log(nombre2.toUpperCase()) /* BATMAN - metodo si lleva () ejecutamos una accion */


 

