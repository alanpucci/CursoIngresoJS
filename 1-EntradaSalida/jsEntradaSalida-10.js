/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = parseInt(txtIdImporte.value);
	let resultado = importe * 0.75;
	txtIdResultado.value = resultado;
}
