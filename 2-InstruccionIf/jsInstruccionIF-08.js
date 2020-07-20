/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	//Declaracion de variables
	var edad;
	var opcion;
	var seleccionado;

	//Inicializacion
	edad = txtIdEdad.value;
	opcion = document.getElementById('estadoCivil').value;
	
	
	//seleccionado = opcion.options[opcion.selectedIndex].text;

	//Parseo
	edad = parseInt(edad);

	//Condicional
	if(edad > 17 && opcion == 'Soltero'){
		alert('Es soltero y no es menor');
	}


}//FIN DE LA FUNCIÓN