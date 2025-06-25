// Eventos
/* los eventos en js permiten interactuar con elementos de una pagina web */


// por id
/* const boton = document.getElementById("miBoton") */
// por class
/* const boton = document.getElementsByClassName ("nombreClase") */
// por tag
/* const boton = document.getElementsByTagName("p") */

// por  CSS 
//# = id - . = clase

const boton = document.querySelector(".miBoton") 
const parrafo = document.querySelector("#mensaje")

/* DOM 
el dom permite permite manipular elementos del HTML */

boton.addEventListener("click",()=>{
 parrafo.textContent = "Hiciste Click"
})



//seleccionar elementos (capturarlo)

const entrada = document.querySelector("#entrada")
const botonMostrar = document.querySelector("#mostrar")
const salida = document.querySelector("#salida")

// agregar evento :

botonMostrar.addEventListener("click",()=>{
  /*   tomamos el valor del campo texto */
  const texto = entrada.value ;

/*   cambiamos el contenido del parrafo */
salida.textContent =`escribiste ${texto}`

})

botonMostrar.onClick = ()=>{
     /*   tomamos el valor del campo texto */
  const texto = entrada.value ;

  /*   cambiamos el contenido del parrafo */
  salida.textContent =`escribiste ${texto}` 
}

/* eventos de Mouse, de Teclado */

/* seleccionamos el contenedor */
const caja = document.querySelector("#caja")

/* caja.innerHTML = "<p>agrego un parrafo al div</p>"
 */
 /* creamos el elemento p */
const parrafoDiv = document.createElement ("p")

const textoParrafo = "agrego un parrafo al div"

/* creamos el nodo de texto */
const nodoTexto = document.createTextNode(textoParrafo)

//agregamos el texto al parrafo

parrafoDiv.appendChild (nodoTexto)

caja.appendChild(parrafoDiv)



