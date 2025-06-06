// Recuperar el carrito del almacenamiento local
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Muestra los productos en el carrito
const mostrarCarrito = () => {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = '<p>Tu carrito está vacio</p>';
        actualizarResumen();
        return;
    }

    carrito.forEach((item, indice) => {
        const producto = document.createElement("article");
        producto.classList.add("producto");
        producto.innerHTML = `
            <h2>${item.nombre}</h2>
            <p class="precio">$${item.precio}</p>
            <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
        `;
        lista.appendChild(producto);
    });

    actualizarResumen();
};

// Actualiza el resumen del carrito
const actualizarResumen = () => {
    // Obtén el elemento donde se mostrará el total de productos
    const totalProductos = document.getElementById("total-productos");
    
    // Obtén el elemento donde se mostrará el importe total
    const importeTotal = document.getElementById("importe-total");

    // Calcula el importe total del carrito
    // `carrito` es un array que contiene los productos seleccionados.
    // `reduce` suma los precios de todos los productos del carrito.
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);

    // Actualiza el texto del elemento `total-productos` con la cantidad de productos en el carrito
    totalProductos.textContent = carrito.length;

    // Actualiza el texto del elemento `importe-total` con el total calculado (formateado a 2 decimales)
    importeTotal.textContent = total.toFixed(2);

    // Encuentra el botón de compra en el DOM que tiene el atributo `onclick='realizarCompra()'`
    const botonCompra = document.querySelector("button[onclick='realizarCompra()']");

    // Encuentra el contenedor del resumen del carrito en el DOM
    const resumenCarrito = document.getElementById("resumen-carrito");

    // Aseguramos de que el botón de compra esté incluido dentro del resumen del carrito
    // Esto asegura que el botón esté visible junto con el resumen
    resumenCarrito.appendChild(botonCompra);
};


// Elimina un producto del carrito
const eliminarDelCarrito = (indice) => {
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

// Simula la compra
const realizarCompra = () => {
    alert("Compra realizada con éxito");
    localStorage.removeItem("carrito");
    window.location.href = "index.html";
};

// Inicializa el carrito al cargar la página
mostrarCarrito();
