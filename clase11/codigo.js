/*
Ejemplo Quokka
 let nombre = "Marcos"
console.log(nombre);
let suma = 2+2
console.log(suma);
 */


/* Inicio: Comentario y escritura en el documento*/
/* console.log("Estoy trabajando con JS"); */
/* Esto es un comentario (no se ejecuta). */

/* Variables: declaración y tipos
let - var const 
*/

/* let - var - const */
let nombre; // Declaración de variable sin valor (undefined por ahora)
let lenguaje = "Javascript"; // String
var edad = "38"; // Var también declara variables, pero con diferente alcance
let lenguajE = "Java"; // Variable distinta por el uso de mayúsculas (case sensitive)

lenguaje = 125; // Se cambia el valor de lenguaje a un número
console.log(lenguajE); // Muestra "Java" por consola (lenguajE != lenguaje)

const DNI = 251081052855; // Constante, no puede cambiar
/* DNI  = 454456456 */ // Esto daría error si se descomenta
/* const DNI ; */


/* Tipos de datos  */

let cadena = "esto es una cadena de texto"; // STRING
let numero = 32; // NUMBER
let num202 = "32"; // STRING (aunque parece número)
let booleano = true; // BOOLEAN (puede ser true o false)


/* INTERACCIONES*/
/* confirm("deseas ingresar") */
/* 
nombre = prompt("decime tu nombre")
let apellido = prompt("decime tu apellido")
alert ("Hola "+nombre+ " " +apellido )
alert(`Hola ${nombre} como estas ${apellido} `) */

/* Interpolación con backticks */
let nombre = "Agostina";
let edad = 38;

console.log(nombre + " como estas" + " tenes " + edad + " Años");
console.log(`${nombre} como estas, tenes ${2 + 2}`); // Backticks con interpolación

/* AltGr+} */
/* Alt+96 */
/* ${variable}
``
`` */

/* ejercicio: pasar todo a Interpolación con backticks*/

/* OPERACIONES BASICAS CON ENTRADAS DE DATOS */
let num1 = parseInt(prompt(nombre + " Decime un numero para sumar ")); // Convierte el string a número
let num2 = parseInt(prompt(nombre + " Decime Otro numero para sumar")); 
let resultado = num1 + num2; // Suma los dos números
alert (`el resultado de tu operacion es ${resultado}`) // Muestra el resultado


/* parseInt("10")
Number("10")
"1010"
 */



/* MULTIPLICAR CON DATOS STRING */

let num3 = prompt(nombre + " Decime un numero para multiplicar");
let num4 = prompt(nombre + " Decime Otro numero para multiplicar");
let result = num3 * num4; // Al usar *, convierte los strings en números automáticamente
alert("el resultado de tu operacion es " + result);


/* OPERADORES MATEMATICOS */
/* + sumar */ // también concatena strings
/* - restar */
/* * multiplicar */
/* / dividir */
/* % modulo (resto de la división) */
/* % ES EL RESTO DE UNA DIVISION */

/* 
Saber el tipo de dato
let nombre2 = true
console.log(typeof nombre2); */


/* COMPARACIONES */
let num1 = 32;
let num2 = 40;
let num3 = "32";
let num4 = 32;

console.log(num1 == num3);  // true (valor igual)
console.log(num1 === num3); // false (tipo diferente)
console.log(num1 != num3);  // false
console.log(num1 !== num3); // true
console.log(num1 > num2);   // false
console.log(num2 < num3);   // false ("32" como string se convierte a número en comparación)
console.log(num1 >= num4);  // true
console.log(num1 <= num2);  // true

console.log(num1 == num3 || num1 > num2); // true || false => true
console.log(num1 == num3 && num1 > num2); // true && false => false

/* ¿Qué hace isNaN()?
isNaN(valor) devuelve true si el valor no es un número válido (Not-A-Number), y false si sí lo es.

 */
isNaN(123);       // false → es un número
isNaN("abc");     // true  → no se puede convertir a número
isNaN("123");     // false → se puede convertir a número
isNaN(NaN);       // true


/* CONDICIONAL */
/* let sucursal = "Caraza";
let anios = 90;

if(anios>=100){
    console.log(`${sucursal} tenes 100 años o mas`);  
} else {
     console.log(`${sucursal} No tenes mas de 100 años`);  
} */
let nombre = prompt("decime tu nombre");
let edad = Number(prompt(nombre + " decime tu edad"));

if (edad >= 18) {
  alert(nombre + " podes pasar"); // Si edad >= 18
} else {
  alert(nombre + " no podes pasar"); // Si no
}

/* OPERADOR TERNARIO */
let edad = 18;
edad >= 18 
  ? console.log(`TENES ${edad} AÑOS, PODES PASAR`) 
  : console.log(`TENES ${edad} AÑOS, NO PODES PASAR`);


/* CONDICIONAL anidada */
var nota = 9;
console.log("He realizado mi examen.");

if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificacion = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else {
  calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);


/* Condicional ternario con varias condiciones */

nota < 5
  ? console.log((calificacion = "Insuficiente"))
  : nota < 6
  ? console.log((calificación = "Suficiente"))
  : nota < 8
  ? console.log((calificacion = "Bien"))
  : console.log((calificacion = "Sobresaliente"));


/* Método .length */
let nombre = "Tobias";
console.log(nombre.length); // Muestra cuántos caracteres tiene el nombre

if (edad >= 18 || nombre.length >= 6) {
  console.log(`${nombre} tu nombre tiene ${nombre.length}, TENES UN REGALO`);
} else {
  console.log(`${nombre} tu nombre tiene ${nombre.length}, NO TENES REGALO`);
}

/*  Switch */
let semaforo = "verde";

switch (semaforo) {
  case "rojo":
    console.log("no podes avanzar");
    break;
  case "amarillo":
    console.log("precaucion");
    break;
  case "verde":
    console.log("Avanzar");
    break;
  default:
    console.log("no pusiste un color correcto");
    break;
}
