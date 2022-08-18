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

function precio_en_cuotas() {
    if (cuota_producto == 3) {
        let porcentaje_en_3_cuotas = 
        (precio_total(precio_producto, cantidad_de_productos) * 15) / 100;
        let precio_final =
         precio_total(precio_producto, cantidad_de_productos) + porcentaje_en_3_cuotas;
        return (
            "El precio final de " +
            producto +
            " es de $" +
            precio_final
        );
    }
}

function precio_en_cuotas() {
    if (cuota_producto == 6) {
        let porcentaje_en_6_cuotas = 
        (precio_total(precio_producto, cantidad_de_productos) * 15) / 100;
        let precio_final =
         precio_total(precio_producto, cantidad_de_productos) + porcentaje_en_6_cuotas;
        return (
            "El precio final de " +
            producto +
            " es de $" +
            precio_final
        );
    }
}

function precio_en_cuotas() {
    if (cuota_producto == 12) {
        let porcentaje_en_12_cuotas = 
        (precio_total(precio_producto, cantidad_de_productos) * 15) / 100;
        let precio_final =
         precio_total(precio_producto, cantidad_de_productos) + porcentaje_en_12_cuotas;
        return (
            "El precio final de " +
            producto +
            " es de $" +
            precio_final
        );
    }
}
console.log(precio_en_cuotas());
