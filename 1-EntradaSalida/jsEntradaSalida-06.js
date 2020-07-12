/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numUno = parseInt(txtIdNumeroUno.value);
	let numDos = parseInt(txtIdNumeroDos.value);
	let suma = numUno + numDos;
	alert(`La suma es ${suma}`);
}

