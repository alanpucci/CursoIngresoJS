function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado){
		case 'Bariloche':
			alert('Oeste');
			break;
		case 'Ushuaia':
			alert('Sur');
			break;
		case 'Cataratas':
			alert('Norte');
			break;
		case 'Mar del plata':
			alert('Este');
			break;
	}

}//FIN DE LA FUNCIÓN