function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioFinal;

	var precioFinal = 15000;
	
	switch(estacionIngresada){
		case 'Invierno':

			switch(destinoIngresado){
				case 'Bariloche':
					precioFinal *= 1.20;
					break;
				case 'Cordoba':
				case 'Cataratas':
					precioFinal *= 0.9;
					break;
				case 'Mar del plata':
					precioFinal *= 0.8;
					break;
			}
			break;
		
		case 'Verano':

			switch(destinoIngresado){
				case 'Bariloche':
					precioFinal *= 0.8;
					break;
				case 'Cordoba':
				case 'Cataratas':
					precioFinal *= 1.1;
					break;
				case 'Mar del plata':
					precioFinal *= 1.2;
					break;
			}
			break;

		default:

			switch(destinoIngresado){
				case 'Bariloche':
				case 'Cataratas':
				case 'Mar del plata':
					precioFinal *= 1.1;
					break;
			}
			break;
	}

	alert('El precio final es de: ' + precioFinal);

}//FIN DE LA FUNCIÓN