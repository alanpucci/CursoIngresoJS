/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	var importe;
	var importeDescontado;
	var descuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	importeDescontado = importe * 0.75;

	descuento = importe - importeDescontado;

	alert('Para el importe ' + importe + ' su descuento sera de: ' + descuento);

	txtIdResultado.value = importeDescontado;


	/*let importe = parseInt(txtIdImporte.value);
	let resultado = importe * 0.75;
	txtIdResultado.value = resultado;*/
}
