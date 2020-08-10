function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var temperaturaMayor;
	var nombreTemperaturaMayor;
	var contadorMayorEdad;
	var contadorSolteroViudo;
	var contadorMayoresConTemperatura;
	var cantidadEdadSolteros;
	var contadorEdadSolteros;

	temperaturaMayor = 0;
	contadorMayorEdad = 0;
	contadorSolteroViudo = 0;
	contadorMayoresConTemperatura = 0;
	cantidadEdadSolteros = 0;
	contadorEdadSolteros = 0;

	var respuesta;
	respuesta = true;

	while(respuesta){

		//Obtencion de nombre
		nombre = prompt("Ingrese su nombre");

		while(!isNaN(nombre)){
			nombre = prompt("Por favor, ingrese un nombre valido");
		}

		
		//Obtencion de edad;
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		
		while(edad < 1 || isNaN(edad)){
			edad = prompt("Por favor, ingrese una edad valida");
			edad = parseInt(edad);
		}


		//Obtencion del sexo
		sexo = prompt("Ingrese su sexo");

		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Por favor, ingrese un sexo valido (f o m)");
		}


		//Obtencion del estado civil
		estadoCivil = prompt("Ingrese su estado civil");

		while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo"){
			estadoCivil = prompt("Por favor, ingrese un estado civil valido (soltero, casado, viudo)");
		}

		
		//Obtencion de temperatura
		temperatura = prompt("Ingrese su temperatura");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura)){
			temperatura = prompt("Por favor, ingrese una temperatura valida");
			temperatura = parseInt(temperatura);
		}

		if(temperaturaMayor < temperatura){
			temperaturaMayor = temperatura;
			nombreTemperaturaMayor = nombre;
		}

		if(edad > 17 && estadoCivil == "viudo"){
			contadorMayorEdad++;
		}

		if(sexo == "m"){

			if(estadoCivil == "soltero"){
				contadorSolteroViudo++;
				cantidadEdadSolteros += edad;
				contadorEdadSolteros++;
			}
			else{
				if(estadoCivil == "viudo"){
					contadorSolteroViudo++;
				}
			}

		}

		if(edad > 60 && temperatura > 38){
			contadorMayoresConTemperatura++;
		}





		respuesta = confirm("Desea ingresar los datos de otra persona");
	}


	document.write(nombreTemperaturaMayor + " es quien tiene la mayor temperatura <br>");
	document.write("Hay " + contadorMayorEdad + " mayores de edad viudos <br>");
	document.write("Hay " + contadorSolteroViudo + " hombres solteros o viudos <br>");
	document.write("Hay " + contadorMayoresConTemperatura + " mayores con mas de 38 de temperatura <br>");
	document.write("El promedio de edad de los hombres solteros es de: " + cantidadEdadSolteros / contadorEdadSolteros);
}