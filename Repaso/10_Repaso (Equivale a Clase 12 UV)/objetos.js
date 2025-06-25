//Objetos 
/* los objetos en JS son colecciones de propiedades, definidos en pares Clave-valor */

//definicion de un objeto

const robot = {
/*     clave : valor */
nombre : "Buzz ligth Year",
peso : 320,
encendido : true,
//metodo
saludar : function (){
return (`Hola, mi nombre es ${this.nombre}`);
},
encender : ()=> `Robot ${robot.nombre} encendido`
}

console.log(robot.nombre);
console.log(robot.saludar());
console.log(robot.encender());





