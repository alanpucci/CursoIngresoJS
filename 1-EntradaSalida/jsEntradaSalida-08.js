/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	var numeroDos;
	var ecuacion;

	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	ecuacion = numeroUno % numeroDos;

	alert('El resto entre ' + numeroUno + ' y ' + numeroDos + ' es de: ' + ecuacion);






	/*let numUno = parseInt(txtIdNumeroDividendo.value);
	let numDos = parseInt(txtIdNumeroDivisor.value);
	let ecuacion = numUno % numDos;
	alert(`El resto es ${ecuacion}`);*/
}
