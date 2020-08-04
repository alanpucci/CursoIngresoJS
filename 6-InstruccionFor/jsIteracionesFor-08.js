function mostrar()
{

	var numeroIngresado = parseInt(prompt("Ingrese un numero"));
	var contador = 0;

	for(var i = 0; i <= numeroIngresado; i++){

		if(numeroIngresado % i == 0){
			contador++;
		}
	}

	if(contador == 2){
		alert("Es primo");
	}

}