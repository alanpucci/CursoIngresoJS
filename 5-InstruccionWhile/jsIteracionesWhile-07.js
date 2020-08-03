/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta=true;


	while(respuesta){
		numeroIngresado = prompt('Ingrese un numero');
		numeroIngresado = parseInt(numeroIngresado);

		acumulador += numeroIngresado;
		contador++;

		respuesta = confirm('Desea continuar?');
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN