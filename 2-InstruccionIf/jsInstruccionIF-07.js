/* Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/ 

function mostrar()
{
	//Declaracion de variable
	var edad;
	var opcion;
	var seleccion;

	//Inicializacion
	edad = txtIdEdad.value;
	opcion = estadoCivil.value;

	//Parseo
	edad = parseInt(edad);

	//Condicional
	if(edad < 13 && opcion != "Soltero"){
		alert("Es muy pequeño para NO ser soltero")
	}

}//FIN DE LA FUNCIÓN