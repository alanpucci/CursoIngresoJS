function mostrar()
{
	//tomo la edad  
	let edad = txtIdEdad.value;
	let opcion = document.getElementById('estadoCivil');
	let seleccionado = opcion.options[opcion.selectedIndex].text;

	if(edad >= 18 && seleccionado == "Soltero"){
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN