/*
Alan Pucci
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente
 (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	//Declaracion de variable
	var edad;

	//Inicializacion
	edad = txtIdEdad.value;

	//Parseo
	edad = parseInt(edad);

	//Condicional
	if(edad > 17)
	{
		alert('Sos mayor de edad');
	}
	else 
	{

		if(edad > 12)
		{
			alert('Sos adolescente');
		}
		
		else
		{
			alert('Sos menor de edad');
		}

	}
	
}//FIN DE LA FUNCIÓN