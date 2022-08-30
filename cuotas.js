let producto = prompt ("Ingrese el producto");
let  precio_producto = parseInt(prompt("Ingrese el costo de " + producto));
let cantidad_de_productos = parseInt(
    prompt ("Indique la cantidad que desea comprar")
);
let cuota_producto = parseInt(
    prompt("Indique la cantidad de cuotas, 3/6/12")
);

function precio_total(precio_producto, cantidad_de_productos) {
    let costo = precio_producto * cantidad_de_productos;
    return costo;
}

function precio_en_cuotas(precio_producto, cantidad_de_productos){
    let porcentaje_en_cuotas =
        (precio_total(precio_producto, cantidad_de_productos));
    let precio_final =
        precio_total(precio_producto, cantidad_de_productos) + porcentaje_en_cuotas;

    if(cuota_producto == 3) {
        return (
            "El precio final de " +
            producto +
            "es de $" +
            precio_final * 1.15
        );
    }
    else if(cuota_producto == 6 ) {
        return (
            "El precio final de " +
            producto +
            " es de $" +
            precio_final * 1.30
        );
    }
    else if (cuota_producto == 12 ) {
        return (
        "El precio final de " +
        producto +
        " es de $" +
        precio_final * 1.60
        );
    }
}

console.log(precio_en_cuotas(precio_producto, cantidad_de_productos));

console.log(precio_total(precio_producto, cantidad_de_productos))