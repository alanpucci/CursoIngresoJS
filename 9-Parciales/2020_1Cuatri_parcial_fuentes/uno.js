function mostrar()
{
	var producto;
	var precioProducto;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var banderaAlcohol;
	var precioAlcohol;
	var cantidadAlcohol;
	var fabricanteAlcohol;
	var contadorAlcohol;
	var cantidadAlcoholTotal;
	var contadorBarbijo;
	var cantidadBarbijo;
	var contadorJabon;
	var cantidadJabon;
	var productoMayorUnidades;
	var promedioProductoMayorUnidades;

	var i;

	banderaAlcohol = true;
	precioAlcohol = 0;
	cantidadAlcohol = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	promedioProductoMayorUnidades = 0;
	

	for(i = 0; i < 2; i++){
		
		//Obtencion de productos
		producto = prompt("Ingrese el producto");

		while(producto != "barbijo" && producto != "alcohol" && producto != "jabon"){
			producto = prompt("Por favor, ingrese un producto valido (barbijo, alcohol, jabon");
		}


		//Obtencion del precio
		precio = prompt("Ingrese el precio del producto");
		precio = parseInt(precio);

		while(precio < 100 || precio > 300){
			precio = prompt("Por favor, ingrese un precio valido comprendido entre 100 y 300");
			precio = parseInt(precio);
		}


		//Obtencion de la cantidad de unidades
		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000 || isNaN(cantidadUnidades)){
			cantidadUnidades = prompt("Por favor, ingrese una cantidad valida comprendida entre 1 y 1000");
			cantidadUnidades = parseInt(cantidadUnidades);
		}


		//Obtencion de marca y fabricante
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");

		switch(producto){
			case "alcohol":
				if(banderaAlcohol || precio < precioAlcohol){
					precioAlcohol = precio;
					cantidadAlcohol = cantidadUnidades;
					fabricanteAlcohol = fabricante;
					banderaAlcohol = false;
				}
				cantidadAlcoholTotal += cantidadUnidades;
				contadorAlcohol++;

			break;
			case "barbijo":
				cantidadBarbijo += cantidadUnidades;
				contadorBarbijo++;
			break;
			case "jabon":
				cantidadJabon += cantidadUnidades;
				contadorJabon++;
			break;
		}

		if(banderaAlcohol || precio < precioAlcohol){
			precioAlcohol = precio;
			cantidadAlcohol = cantidadUnidades;
			fabricanteAlcohol = fabricante;
			banderaAlcohol = false;
		}

	}

	if(cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon){
		productoMayorUnidades = "alcohol";
		promedioProductoMayorUnidades = cantidadAlcoholTotal / contadorAlcohol;
	}
	else{
		if(cantidadJabon > cantidadBarbijo && cantidadJabon > cantidadAlcohol){
			productoMayorUnidades = "jabon";
			promedioProductoMayorUnidades = cantidadJabon / contadorJabon;
		}
		else{
			productoMayorUnidades = "barbijo";
			promedioProductoMayorUnidades = cantidadBarbijo / contadorBarbijo;
		}
	}

	document.write("El alcohol mas barato es: " + fabricanteAlcohol + " con un precio de: " + precioAlcohol + " y una cantidad de: " + cantidadAlcohol + "<br>");
	document.write("El producto con mas unidades es: " + productoMayorUnidades + " y su promedio por compra es: " + promedioProductoMayorUnidades + "<br>");
	document.write("Hay un total de " + cantidadJabon + " unidades de jabon");
}
