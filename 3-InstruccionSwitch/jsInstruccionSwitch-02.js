function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("Falta para el invierno");
			break;
		case "Septiembre":
		case "Octubre":
			alert("Abrigate que hace frio");
			break;
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor");
			break;
	}




}//FIN DE LA FUNCIÓN