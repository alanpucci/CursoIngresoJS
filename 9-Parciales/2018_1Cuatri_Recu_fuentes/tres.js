function mostrar()
{
    var precio;
    var descuento;

    var precioFinal;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);

    descuento = prompt("Ingrese el descuento");
    descuento = parseInt(descuento);

    descuento = descuento - (descuento / 100);

    precioFinal = precio * descuento;

    elPrecioFinal.value = precioFinal;
}
