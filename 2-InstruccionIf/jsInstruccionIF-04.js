function mostrar()
{
	//Declaracion de variable
	var edad;

	//Inicializacion
	edad = txtIdEdad.value;

	//Parseo
	edad = parseInt(edad);

	//Condicional
	if(edad > 12){

		if(edad < 18){
			alert('Eres un adolescente');
		}

	}


}//FIN DE LA FUNCIÓN