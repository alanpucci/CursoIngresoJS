/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/


function mostrar()
{
	var productoIngresado;
	var precioIngresado;
	var unidadesIngresado;
	var marcaIngresado;
	var fabricanteIngresado;

	var jabonMasCaro;
	var precioJabonMasCaro;
	var cantidadJabonMasCaro;
	var banderaJabon;
	var cantidadJabonCaro;

	var cantidadJabon;
	var cantidadAlcohol;
	var cantidadBarbijo;
	var productoMayorCantidad;
	var cantidadProductoMayorCantidad;
	var promedio;

	cantidadJabon = 0;
	cantidadBarbijo = 0;
	cantidadAlcohol = 0;

	banderaJabon = true;

	var i;

	for(i = 0; i < 5; i++){

		//Obtencion del producto
		productoIngresado = prompt("Ingrese un producto");

		while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol"){
			productoIngresado = prompt("Por favor, ingrese alcohol, jabon o barbijo");
		}


		//Obtencion del precio
		precioIngresado = prompt("Ingrese el precio del producto");
		precioIngresado = parseInt(precioIngresado);

		while(precioIngresado < 100 || precioIngresado > 300){
			precioIngresado = prompt("Por favor, ingrese el precio del producto entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}


		//Obtencion de las unidades
		unidadesIngresado = prompt("Ingrese la cantidad de unidades");
		unidadesIngresado = parseInt(unidadesIngresado);

		while(unidadesIngresado < 0 || unidadesIngresado > 1000){
			unidadesIngresado = prompt("Ingrese la cantidad de unidades entre 0 y 1000");
			unidadesIngresado = parseInt(unidadesIngresado);
		}

		
		//Obtencion de marca y fabricante
		//marcaIngresado = prompt("Ingrese la marca");

		fabricanteIngresado = prompt("Ingrese el fabricante");
		

		//Switch para acumular cantidades y condicional de jabon
		switch(productoIngresado){
			case "alcohol":
				cantidadAlcohol += unidadesIngresado;
			break;
			case "barbijo":
				cantidadBarbijo += unidadesIngresado;
			break;
			case "jabon":
				cantidadJabon += unidadesIngresado;
				if(banderaJabon == true){
					jabonMasCaro = fabricanteIngresado;
					precioJabonMasCaro = precioIngresado;
					cantidadJabonCaro = unidadesIngresado;
					banderaJabon = false;
				}
				else{
					if(precioIngresado > precioJabonMasCaro){
						precioJabonMasCaro = precioIngresado;
						jabonMasCaro = fabricanteIngresado;
						cantidadJabonCaro = unidadesIngresado;
					}
				}
			break;
		}

	}

	//Condicional para saber cual producto es el de mayor cantidad
	if(cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon){
		productoMayorCantidad = "alcohol";
		cantidadProductoMayorCantidad = cantidadAlcohol;
	}
	else{
		if(cantidadJabon > cantidadAlcohol && cantidadJabon > cantidadBarbijo){
			productoMayorCantidad = "jabon";
			cantidadProductoMayorCantidad = cantidadJabon;
		}
		else{
			productoMayorCantidad = "barbijo";
			cantidadProductoMayorCantidad = cantidadBarbijo;
		}
	}

	//Promedio producto con mas cantidad
	promedio = cantidadProductoMayorCantidad / i;

	console.log("El jabon mas caro es del fabricante: " + jabonMasCaro + " con una cantidad de: " + cantidadJabonCaro);
	console.log("El producto con mayor cantidad es: " + productoMayorCantidad + " y su promedio es: " + promedio);
	console.log("La cantidad de barbijos comprados en total es: " + cantidadBarbijo);

}

/*
	jabon 140 500 jorge
	alcohol 300 200 johnson
	jabon 270 100 tuvieja
	barbijo 250 600 barbipeola
	barbijo 100 200 barbipeola2
*/