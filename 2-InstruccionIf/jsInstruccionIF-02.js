function mostrar() {
	//Declaracion de variable
	var edad;

	//Inializacion de variable
	edad = txtIdEdad.value;

	//Parseo
	edad = parseInt(edad);

	//Condicional
	if (edad >= 18) {
		alert("Eres mayor de edad");
	}
} //FIN DE LA FUNCIÓN
