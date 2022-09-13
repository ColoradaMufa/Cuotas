const productos = [
    {
        id: 1,
        nombre: "Buzos",
        precio: 2350,
        cantidad: 1,
        imagen: "/img/buzo4.jpg",
        cuotas: '',
        total: '',
    },
    {
        id: 2,
        nombre: "Ruana",
        precio: 1700,
        cantidad: 1,
        imagen: "/img/RUANA5.jpeg",
        cuotas: '',
        total: '',
    },
    {
        id: 3,
        nombre: "Moño",
        precio: 450,
        cantidad: 1,
        imagen: "/img/MONIO6.jpeg",
        cuotas: '',
        total: '',
    }
]
//------------------------Declaracion de array------------------------
let carrito = [];
//------------------------Llamado para cargar los productos-----------
mostrarProductos(productos);
//--------------------------Selecciones-------------------------------
const muestraCarrito = document.querySelectorAll('button#anadirAlCarritoId')

// ------------------------ Eventos------------------------------------

for (const muestra of muestraCarrito) {
    muestra.addEventListener("click", mostrandoCarrito);
}

//------------------------- Funcionalidades----------------------------

function mostrarProductos(productos) {
    productos.forEach((producto) => {
        let div = ` <div class="producto_general">
        <h3>${producto.nombre}</h3>
            <img class="" src="${producto.imagen}"" alt="">
            <div>
                <button onclick="agregarAlCarrito(${producto.id})" class="anadirAlCarrito" id="anadirAlCarritoId">Añadir</button>
                <p>$ ${producto.precio}</p>
            </div>
        </div>
    `
        contenedorProductos.innerHTML += div;
    });
}

function agregarAlCarrito(itemId) {
    const prod = productos.find((prod) => prod.id === itemId)
    carrito.length === 0 ? carrito.push(prod) : null;
    let cont = 0;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id == prod.id) {
            cont = cont + 1;
        }
    }
    if (cont == 0) {
        carrito.push(prod)
    } else {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == prod.id) {
                carrito[i].cantidad += 1;
            }
        }
    }
}

function mostrandoCarrito() {
    carrito.forEach(carrito => {
        let mostrar = `<p>${carrito.nombre}</p>
        <p>$ ${carrito.precio} </p>
        <div class="cantidad">
        <button class="boton_incremento" id="boton_incremento">-</button>
        <p class="" id="">${carrito.cantidad}</p>
        <button class="boton_decremento" id="boton_decremento">+</button>
        </div>`
        muestra_carrito.innerHTML += mostrar;
    })
}


function actualizarPrecioFinal() {
    precioFinal.innertText = carrito.reduce((acc, producto) => acc += producto.precio * producto.cantidad, 0);

};