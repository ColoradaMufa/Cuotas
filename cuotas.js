let objeto = [
    {
        nombre: "moños",
        precio: 450,
        cantidad: 0,
        cuotas: '',
        total: '',
    },
    {
        nombre: "buzo",
        precio: 2350,
        cantidad: 0,
        cuotas: '',
        total: '',
    },
    {
        nombre: "ruana",
        precio: 1700,
        cantidad: 0,
        cuotas: '',
        total: '',
    }
]

let producto = prompt(`Ingrese el producto - Moño - Buzo Ruana`);
for (let i = 0; i < objeto.length; i++) {
    if (objeto[i].nombre == producto) {
        let cantidad_de_productos = parseInt(prompt("Indique la cantidad que desea comprar"));
        objeto[i].cantidad = cantidad_de_productos;
        let cuota_producto = parseInt(prompt("Indique la cantidad de cuotas, 3/6/12"));
        if (cuota_producto == 0) {
            alert(precio_total(objeto[i].precio, objeto[i].cantidad));
        } else {
            precio_cuotas(objeto[i].cantidad, objeto[i].precio, cuota_producto, objeto[i].nombre)
        }
    }
}

function precio_total(precio, cantidad) {
    return precio * cantidad;
}

function precio_cuotas(cantidad, precio, cuota, nombre) {
    if (cuota == 3) {
        return (alert("El precio final de " + nombre + " es de $ " + ((cantidad * precio) * 1.15) / cuota))
    } else if (cuota == 6) {
        return (alert("El precio final de " + nombre + " es de $ " + ((cantidad * precio) * 1.30) / cuota))
    } else if (cuota == 12) {
        return (alert("El precio final de " + nombre + " es de $ " + ((cantidad * precio) * 1.60) / cuota))
    }
}