'use strict'
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    

function Sumar () 
{
    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    //Inicializacion de variables
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //Parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //Suma
    suma = precioUno + precioDos + precioTres;

    //Mensaje en pantalla
    alert('La suma de los tres productos es: ' + suma);
}
function Promedio () 
{
    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    //Inicializacion de variables
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //Parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //Promedio de los productos
    promedio = (precioUno + precioDos + precioTres) / 3;

    //Mensaje en pantalla
    alert('El promedio de los tres productos es: ' + promedio);

}
function PrecioFinal () 
{
    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var precioConIva;

    //Inicializacion de variables
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //Parseo
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //Precio con IVA
    precioConIva = (precioUno + precioDos + precioTres) * 1.21;

    precioConIva = precioConIva;

    //Mensaje en pantalla
    alert('El precio final de los tres productos con el IVA incluido es: ' + precioConIva);

}
