function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio

	contador=0;
	acumulador=0;
	
	while(contador < 5){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador++;
	}
	
	promedio = acumulador / contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN