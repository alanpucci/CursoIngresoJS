'use strict'
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    

function Sumar () 
{
    let precioUno = parseInt(txtIdPrecioUno.value);
    let precioDos = parseInt(txtIdPrecioDos.value);
    let precioTres = parseInt(txtIdPrecioTres.value);
    let suma = precioUno + precioDos + precioTres;
    alert(`La suma de los productos es ${suma}`);
}
function Promedio () 
{
    let precioUno = parseInt(txtIdPrecioUno.value);
    let precioDos = parseInt(txtIdPrecioDos.value);
    let precioTres = parseInt(txtIdPrecioTres.value);
    let promedio = (precioUno + precioDos + precioTres) / 3;
    alert(`El promedio de los productos es ${promedio}`);
}
function PrecioFinal () 
{
    let precioUno = parseInt(txtIdPrecioUno.value);
    let precioDos = parseInt(txtIdPrecioDos.value);
    let precioTres = parseInt(txtIdPrecioTres.value);
    let precioFinal = (precioUno + precioDos + precioTres) * 1.21;
    alert(`El precio final es ${precioFinal}`);
}
