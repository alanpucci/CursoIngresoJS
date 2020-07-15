/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoAumentado;
	var aumentoNeto;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	sueldoAumentado = sueldo * 1.10;

	aumentoNeto = sueldoAumentado - sueldo;

	alert('Para el sueldo ' + sueldo + ' su aumento sera de: ' + aumentoNeto);
	txtIdResultado.value = sueldoAumentado;




	
	/*let sueldo = parseInt(txtIdSueldo.value);
	let resultado = Math.round(sueldo * 1.10);
	txtIdResultado.value = resultado;*/
}
