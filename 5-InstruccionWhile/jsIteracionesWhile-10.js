/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;

	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	respuesta=true;

	while(respuesta)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0){
			sumaPositivos += numeroIngresado;
			cantidadPositivos++;
		}
		else{
			if(numeroIngresado < 0){
				sumaNegativos += numeroIngresado;
				cantidadNegativos++;
			}
			else{
				if(numeroIngresado == 0){
					cantidadCeros++;
				}
			}
		}

		if(numeroIngresado % 2 == 0){
			cantidadPares++;
		}

		respuesta=confirm("Desea continuar?");
	}//fin del while

	document.write("la suma de negativos es : "+sumaNegativos + "<br>");
	document.write("La suma de positivos es : " + sumaPositivos + "<br>");
	document.write("La cantidad de numeros negativos es: " + cantidadNegativos + "<br>");
	document.write("La cantidad de numeros positivos es: " + cantidadPositivos + "<br>");
	document.write("La cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("La cantidad de numeros pares es: " + cantidadPares + "<br>");
	document.write("El promedio de los numeros positivos es: " + sumaPositivos / cantidadPositivos + "<br>");
	document.write("El promedio de los numeros negativos es: " + sumaNegativos / cantidadNegativos + "<br>");
	document.write("La diferencia entre numeros positivos y negativos es: " + (sumaPositivos + sumaNegativos) + "<br>");
}//FIN DE LA FUNCIÓN