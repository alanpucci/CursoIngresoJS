/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var legajoIngresado;
	var nacionalidadIngresada;
	
	//Validacion edad
	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90 || isNaN(edadIngresada)){
		edadIngresada = prompt("Por favor, ingrese una edad entre 18 y 90 años");
		edadIngresada = parseInt(edadIngresada);
	}

	txtIdEdad.value = edadIngresada;

	//Validacion sexo
	sexoIngresado = prompt("Ingrese su sexo");
	sexoIngresado = sexoIngresado.toLowerCase();

	while(sexoIngresado != "m" && sexoIngresado != "f" ){
		sexoIngresado = prompt("Por favor, ingrese un sexo valido");
	}

	txtIdSexo.value = sexoIngresado;

	//Validacion estado civil
	estadoCivilIngresado = prompt("Ingrese su estado civil");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4){
		estadoCivilIngresado = prompt("Por favor, ingrese un estado civil valido");
	}

	switch(estadoCivilIngresado){
		case 1:
			estadoCivilIngresado = "Soltero";
		break;
		case 2:
			estadoCivilIngresado = "Casado";
		break;
		case 3:
			estadoCivilIngresado = "Divorciado";
		break;
		default:
			estadoCivilIngresado = "Viudo";
		break;
	}

	txtIdEstadoCivil.value = estadoCivilIngresado;

	//Validacion sueldo bruto
	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

	while(sueldoBrutoIngresado < 8000){
		sueldoBrutoIngresado = prompt("Por favor, reingrese su sueldo bruto");
	}

	txtIdSueldo.value = sueldoBrutoIngresado;

	//Validacion legajo
	legajoIngresado = prompt('Ingrese su numero de legajo');
	legajoIngresado = parseInt(legajoIngresado);

	while(!(legajoIngresado>=1000 && legajoIngresado<=9999)){
		legajoIngresado = prompt('Por favor, reingrese su numero de legajo');
	}

	txtIdLegajo.value = legajoIngresado;

	//Validacion nacionalidad
	nacionalidadIngresada = prompt("Ingrese su nacionalidad");

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N"){
		nacionalidadIngresada = prompt("Por favor, reingrese su nacionalidad");
	}

	txtIdNacionalidad.value = nacionalidadIngresada;
	
}
