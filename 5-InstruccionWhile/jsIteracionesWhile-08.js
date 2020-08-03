/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;

	while(respuesta){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0){
			sumaPositivos += numeroIngresado;
		}else{
			if(numeroIngresado < 0){
				multiplicacionNegativos *= numeroIngresado;
			}
		}

		respuesta = confirm("Desea continuar?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN