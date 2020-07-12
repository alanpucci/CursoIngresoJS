/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numUno = parseInt(txtIdNumeroUno.value);
	let numDos = parseInt(txtIdNumeroDos.value);
	let suma = numUno + numDos;
	alert(`La suma es ${suma}`);
}

function restar()
{
	let numUno = parseInt(txtIdNumeroUno.value);
	let numDos = parseInt(txtIdNumeroDos.value);
	let resta = numUno - numDos;
	alert(`La resta es ${resta}`);
}

function multiplicar()
{ 
	let numUno = parseInt(txtIdNumeroUno.value);
	let numDos = parseInt(txtIdNumeroDos.value);
	let multi = numUno * numDos;
	alert(`La multiplicacion es ${multi}`);
}

function dividir()
{
	let numUno = parseInt(txtIdNumeroUno.value);
	let numDos = parseInt(txtIdNumeroDos.value);
	let div = numUno / numDos;
	alert(`La division es ${div}`);
}

