
/* Arrays: es una lista ordenada de elementos que pueden ser cualquier tipo de dato */

     //             0         1       2      3
let animales = ["Gato", "Perro", "Tigre"];

/* Asignar un nuevo valor */
animales[1] = "Tortuga"

// recorremos y buscamos la primer coincidencia
let felino = animales.find(animal=>animal=="Gato")

    console.log(felino);
    
//Recorrer un array
animales.forEach((animal,indice)=>{
    console.log(`Animal:${animal}, se encuentra en el indice ${indice}`);
    
});


/* Metodos de array */
//agregar elementos AL FINAL = .push
animales.push("Loro","Raton")

//eliminar elementos al FINAL = .pop
animales.pop()


/* acceder : indice [] */
/* cantidad = 3  (.length)*/

console.log(animales);
console.log(animales.length);
console.log(animales[0]);
console.log(animales[animales.length-1]);





