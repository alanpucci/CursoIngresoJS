function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngrsado = parseInt(numeroIngresado);
	var cantidadNumerosDivisores = 0;

	for(var i = 0; i <= numeroIngresado; i++){

		if(i % 2 == 0 && i != 0){
			document.write(i + "<br>");
			cantidadNumerosDivisores++;
		}
	}

	document.write("Cantidad numeros divisores: " + cantidadNumerosDivisores);

}