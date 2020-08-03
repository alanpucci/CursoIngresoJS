function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var informar;

	switch(estacionIngresada){
		case "Invierno":

			switch(destinoIngresado){
				case "Bariloche":
					informar = "Se viaja";
					//alert('Se viaja a ' + destinoIngresado);
					break;
				default:
					informar = "No se viaja";
					//alert("No se viaja a " + destinoIngresado);
					break;
			}
			break;

		case "Verano":

			switch(destinoIngresado){
				case "Mar del plata":
				case "Cataratas":
					informar = "Se viaja";
					//alert("Se viaja a " + destinoIngresado);
					break;
				default:
					informar = "No se viaja";
					//alert("No se viaja a" + destinoIngresado);
					break;

			}
			break;

		case "Otoño":
			informar = "Se viaja";
			//alert('Se viaja a ' + destinoIngresado);
			break;

		default:
			
			switch(destinoIngresado){
				case "Bariloche":
					informar = "No se viaja";
					//alert('No se viaja a ' + destinoIngresado);
					break;
				default:
					informar = "Se viaja";
					//alert('Se viaja a ' + destinoIngresado);
					break;
			}
	}

	alert(informar + " a " + destinoIngresado);

}//FIN DE LA FUNCIÓN