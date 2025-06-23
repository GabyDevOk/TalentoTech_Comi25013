
// reemplaza `null` por la respuesta o el dato requerido

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Talento Tech";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

/* Te daremos las funciones prearmadas
tienes que completar lo que retorna cada funcion e invocarla dentro de un console.log
*/



/* Ejemplo */
function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
console.log(devolverString("Cadena de texto")); 
console.log(devolverString("Otro dato"));

const devolverString2 = str2 => str2
console.log(devolverString2("hola"));

const suma = (x, y) => x+y     // Ejemplo resuelto con funcion flecha
console.log(suma(10,10));

/* function resta(x, y) { */
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
/* return y-x
}
console.log(resta(10,1)); */

const resta = (x,y)=> y-x
console.log(resta(10,1));

const multiplica = (x, y) => x*y
console.log(multiplica(20,5));

const divide = (x, y) => x/y
console.log(divide(21,7));

/* const divide2 = (x,y) => y===0? "error " :x/y  */

const sonIguales = (x, y)=>x===y
console.log(sonIguales(2,3));



const tienenMismaLongitud = (str1, str2) => str1.length === str2.length
console.log(tienenMismaLongitud("Agostina", "Gabriela"));



const menosQueNoventa = num => num<90;
console.log(menosQueNoventa(99));

const mayorQueCincuenta = num => num > 50
console.log(mayorQueCincuenta(49));


const obtenerResto = (x, y)=> x%y;
console.log(obtenerResto(22,3));

const esPar =num  => num%2==0 
console.log(esPar(9));

const esImpar=num => num%2!=0 
console.log(esImpar(9));


const elevarAlCuadrado = num => Math.pow (num,2)
console.log(elevarAlCuadrado(5));

const elevarAlCubo = num => Math.pow (num,3)
console.log( elevarAlCubo(3));

const elevar = (num, exponent)=> Math.pow(num,exponent)
console.log(elevar(2,3));

const redondearNumero = num => Math.round(num)
  console.log(redondearNumero(4.4));
  
const redondearHaciaArriba = num => Math.ceil(num)
console.log(redondearHaciaArriba(4.6));

const numeroRandom =() => Math.round(Math.random()*10) 
  console.log(numeroRandom());
    console.log(numeroRandom());
      console.log(numeroRandom());
       console.log(numeroRandom());
  
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
const esPositivo =numero =>numero===0? false: numero>0?"Es Positivo": "Es Negativo"
console.log(esPositivo(-1));

/* if(numero>0){
  return "Es positivo"
}else if (numero<0){
    return "Es Negativo"
}else{
  return false
} */

const agregarSimboloExclamacion = str => `${str}!`
console.log(agregarSimboloExclamacion("Hola"));

const combinarNombres = (nombre, apellido) => `Mi nombre es ${nombre} ${apellido}`
console.log(combinarNombres("Bruce", "Wayne") );
  
const obtenerSaludo = nombre => `Hola ${nombre}`
console.log(obtenerSaludo("Nicolino"));

const obtenerAreaRectangulo = (alto, ancho) => ancho *alto
console.log(obtenerAreaRectangulo(4,4));

const retornarPerimetro =(lado)=> lado*4
console.log(retornarPerimetro(5));

const areaDelTriangulo = (base, altura) => (base*altura)/2
console.log(areaDelTriangulo(4,5));

const deEuroAdolar =euro => euro*1.2
console.log(deEuroAdolar(100));

  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

function esVocal(letra){
  letra = letra.toLowerCase()
  if (letra.length!=1){
    return "Escribiste mas de un Caracter"
  }else if (letra =="a"||letra =="e"||letra =="i"||letra =="o"||letra =="u"){
    return `ingresaste ${letra} ES VOCAL`
  }else {
        return `ingresaste ${letra} NO ES Vocal`
  }

}
console.log(esVocal("A"));

