/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno;
	var numDos;
	var suma;
	numUno = parseInt(txtIdNumeroUno.value);
	numDos = parseInt(txtIdNumeroDos.value);
	suma = numUno + numDos;
	alert('La suma es ' + suma);
}

