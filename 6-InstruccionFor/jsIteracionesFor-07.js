function mostrar()
{
	var numeroIngresado;
	numeroIngresado = parseInt(prompt("Ingrese un numero"));
	var cantidadNumerosDivisores = 0;

	for(var i = 0; i <= numeroIngresado; i++){
		if(numeroIngresado % i == 0){
			document.write(i + "<br>");
			cantidadNumerosDivisores++;
			 
		}
	}

	document.write("Cantidad numeros divisores: " + cantidadNumerosDivisores);

}