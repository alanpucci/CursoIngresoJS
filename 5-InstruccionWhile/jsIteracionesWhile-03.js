/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750" && claveIngresada != null){
		claveIngresada = prompt("ERROR! Reingrese el número clave.");
	}

	alert("Ingreso correcto");
	
}//FIN DE LA FUNCIÓN
