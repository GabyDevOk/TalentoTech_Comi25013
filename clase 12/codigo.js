/* Estructuras de control */
/* WHILE - (BUCLES SIMPLES) */

//USAMOS UN BUCLE WHILE PARA CONTAR DE 1 A 5
/* let contador = 1 */

/* while (contador<=5){
    console.log(`contador : ${contador}`);  */// muestra el valor actual del contador
  /*   contador++; */ /* incrementa el calor del contador */
    
/* } */

// ejercicio : Escribi un programa que calcula la suma de todos los numeros pares entre 1 y 100 usando un bucle while

// DO WHILE
// ejemplo do -while que asegura ejecutar al menos una vez
/* let numero = 0 */
/* 
do {
    console.log(`Numero Actual: ${numero}`);
    numero++;
    
} while (numero<3) */

    /* ejercicio: pedirle a la persona un numero positivo , repetir mientras el numero sea negativo */


/* Ejercicio do-While */

/* Solicitar datos a la persona */
/* let password;

do{
    password =prompt("ingresa por favor tu contraseña (Minimo 6 caracteres)")
} while (password.length<6)

alert("Contraseña Aceptada"); */

/* bucle for */

/* 1: INICIALIZACION
punto de partida del bucle, aca declaramos e inicializacmos    
una variable (i) que servira de contador
let i = 1 significa que el contador comienza en  1 
2 CONDICION:
Antes de ejecutar la iteracion, javascript evalua ésta condicion.
true, se ejecuta el bloque dentro false, se termina
3 INCREMENTO i++
seejecuta al final de cada ieracion
incrementa el valor de i en 1
i++ 
es igual que poner 
i = i+1
*/

// 1 INICIALIZACION ;2 CONDICION; 3INCREMENTO i++
// iterar del 1 al 10 y mostrar si el numero es par o impar
/* for (let i=1;i<=10;i++){
if (i%2===0){
    console.log(`${i} es par`);  
} else {
    console.log(`${i} es impar`);
}
} */

/* ejercicio :escribi un bucle for que nos de una tabla de multiplicar (hasta 10)  */

// Funciones
/* bloques reutilizables
realizan una tarea especifica
aceptan parametros de entrada
devuelve un resultado */

               //parametros
/* function saludar () {
console.log("hola soy una funcion");
}
saludar () */
           //parametros
/* function saludo2 (nombre,edad){
alert(`Hola ${nombre} tu edad es ${edad}`);

} */
     // argumentos
/* saludo2(prompt("Decime tu nombre"),parseInt(prompt("decime tu edad"))) */

/* funcion que devuelve el mayor de 2 numeros */
/* function mayor (num1,num2){
    if (num1>num2){
        return num1
    }
    return  num2
}
console.log( mayor (10,20));
 */
/* SCOPE = alcance  */
/* let num2 = 3
console.log(num2); */

/* function ejemploScope (){
    let local = "estoy dentro de la funcion" // variable local
    console.log(local);
    
} */
/* 
ejemploScope ()
console.log(local) */

/* let y var */
 
/* var tiene alcance de funcion
no tiene alcance de bloque */

/* let : tiene alcance de bloque.alcancesolo esta 
disponible dentro del bloque {} donde se declaro */

/* 1- alcance */
/* if (true){
    var x = 10 
    let y = 20
}
console.log(x);
console.log(y); */

/* 2- Re-declarado */

/* var : permite volver a declarar la misma variable dentro del mismo ambito
let : no permite volver a declarar la misma variable dentro del mismo ambito
. Esto ayuda a evitar errores al sobreescribir variables accidentalmente */


/*  let apellido = "Garcia"
apellido = "lopez"
console.log(apellido);
 */
/* var nombre = "Juan";
var nombre = "Pedro";
console.log(nombre);
 */

function sumar (num1,num2){
    return num1+num2
}
console.log(sumar(10,2));


// arrow function o funciones flecha


/* const sumar2 = (num1,num2)=>{
return num1+num2
}
console.log( sumar2(10,2)); */

const sumar2=(num1,num2)=>num1+num2;console.log( sumar2(10,2));

/* const saludar =(nombre)=>{
    return  `hola ${nombre}`
}
 */
const saludar = nombre=>`hola ${nombre}`;console.log(saludar("pepe"));




