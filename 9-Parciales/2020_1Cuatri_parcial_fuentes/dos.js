function mostrar()
{
    var producto;
    var cantidadBolsas;
    var precioBolsa;
    var descuento;
    var precioBruto;
    var precioDescuento;
    var cantidadTotalBolsas;
    var cantidadArena;
    var cantidadCemento;
    var cantidadCal;
    var productoMasCaro;
    var precioProductoMasCaro;
    var productoMayorBolsas;

    var respuesta;

    descuento = 1;
    precioBruto = 0;
    precioDescuento = 0;
    cantidadTotalBolsas = 0;
    cantidadArena = 0;
    cantidadCemento = 0;
    cantidadCal = 0;
    precioProductoMasCaro = 0;

    respuesta = true;

    while(respuesta){

        //Obtencion de producto
        producto = prompt("Ingrese un producto");

        while(producto != "cal" && producto != "cemento" && producto != "arena"){
            producto = prompt("Por favor, ingrese un producto valido (cemento, cal, arena)");
        }


        //Obtencion de cantidad de bolsas
        cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
        cantidadBolsas = parseInt(cantidadBolsas);


        while(cantidadBolsas < 1 || isNaN(cantidadBolsas)){
            cantidadBolsas = prompt("Por favor, ingrese una cantidada valida");
            cantidadBolsas = parseInt(cantidadBolsas);
        }

        cantidadTotalBolsas += cantidadBolsas;


        //Obtencion del precio por bolsa
        precioBolsa = prompt("Ingrese el precio por bolsa");
        precioBolsa = parseInt(precioBolsa);

        while(precioBolsa < 1 || isNaN(precioBolsa)){
            precioBolsa = prompt("Por favor, ingrese un precio valido");
            precioBolsa = parseInt(precioBolsa);
        }
        

        switch(producto){
            case "cal":
                cantidadCal += cantidadBolsas;
            break;
            case "cemento":
                cantidadCemento += cantidadBolsas;
            break;
            case "arena":
                cantidadArena += cantidadBolsas;
            break;
        }

        if(precioBolsa > precioProductoMasCaro){
            precioProductoMasCaro = precioBolsa;
            productoMasCaro = producto;
        }


        //Precio total
        precioBruto += precioBolsa * cantidadBolsas;


        respuesta = confirm("Desea cargar otro producto?");
    }

    //Condicional de cantidad de bolsas
    if(cantidadTotalBolsas > 30){
        descuento = 0.75;
    }
    else{
        if(cantidadTotalBolsas > 10){
            descuento = 0.85;
        }
    }

    //Precio con descuento
    precioDescuento += precioBruto * descuento;


    if(cantidadCal > cantidadArena && cantidadCal > cantidadCemento){
        productoMayorBolsas = "cal";
    }
    else{
        if(cantidadArena > cantidadCal && cantidadArena > cantidadCemento){
            productoMayorBolsas = "arena";
        }
        else{
            productoMayorBolsas = "cemento";
        }
    }


    document.write("El precio bruto total a pagar es: " + precioBruto + "<br>");
    if(cantidadTotalBolsas > 10){
        document.write("El importe total a pagar con descuento es: " + precioDescuento + "<br>");
    }
    document.write("El producto con mayor cantidad de bolsas es: " + productoMayorBolsas + "<br>");
    document.write("El producto mas caro es: " + productoMasCaro);
}

// cal 9 15 135
// cemento 10 25 250
// arena 5 20 100
