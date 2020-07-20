function mostrar()
{
	//Declaracion de variable
	var edad;

	//Inicializacion de variable
	edad = txtIdEdad.value;

	//Parseo
	edad = parseInt(edad);

	//Condicional
	if(edad > 17){
		alert('Eres mayor de edad');
	}else{
		alert('Eres menor de edad');
	}

}//FIN DE LA FUNCIÓN