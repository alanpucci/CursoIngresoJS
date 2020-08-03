/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	respuesta=true;

	banderaDelPrimero = prompt("Ingrese el primer numero");
	banderaDelPrimero = parseInt(banderaDelPrimero);
	numeroMaximo = banderaDelPrimero;
	numeroMinimo = banderaDelPrimero;

	while(respuesta)
	{
		numeroIngresado = prompt("Ingrese otro numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		else{
			if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta=confirm("desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}