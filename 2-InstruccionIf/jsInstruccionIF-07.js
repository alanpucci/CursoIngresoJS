function mostrar()
{
	//tomo la edad  
	let edad = txtIdEdad.value;
	let opcion = document.getElementById('estadoCivil');
	let selected = opcion.options[opcion.selectedIndex].text;
	
	if(edad < 13 && selected != "Soltero"){
		alert("Es muy pequeño para NO ser soltero")
	}


}//FIN DE LA FUNCIÓN