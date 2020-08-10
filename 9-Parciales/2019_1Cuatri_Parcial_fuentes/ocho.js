function mostrar()
{
    var letraIngresada;
    var numeroIngresado;
    var contadorNumerosPares;
    var contadorNumerosImpares;
    var contadorNumeroCero;
    var contadorNumerosPositivos;
    var cantidadNumerosPositivos;
    var sumaNumerosNegativos;
    var letraMaxima;
    var letraMinima;
    var numeroMaximo;
    var numeroMinimo;
    var banderaNumero;

    var respuesta;

    respuesta = true;
    contadorNumerosPares = 0;
    contadorNumerosImpares = 0;
    contadorNumeroCero = 0;
    contadorNumerosPositivos = 0;
    cantidadNumerosPositivos = 0;
    sumaNumerosNegativos = 0;
    banderaNumero = true;

    while(respuesta){

        //Obtencion de letra
        letraIngresada = prompt("Ingrese una letra");

        while(!isNaN(letraIngresada)){
            letraIngresada = prompt("Por favor, ingrese una letra");
        }


        //Obtencion de numero
        numeroIngresado = prompt("Ingrese un numero entre -100 y 100");
        numeroIngresado = parseInt(numeroIngresado);

        while(numeroIngresado < -100 || numeroIngresado > 100 || isNaN(numeroIngresado)){
            numeroIngresado = prompt("Por favor, ingrese un numero entre -100 y 100");
            numeroIngresado = parseInt(numeroIngresado);
        }


        //Proceso
        if(numeroIngresado % 2 == 0 || numeroIngresado % 2 == -0){
            contadorNumerosPares++;
            if(numeroIngresado == 0){
                contadorNumeroCero++;
            }
        }
        else{
            contadorNumerosImpares++;
        }

        if(numeroIngresado > 0){
            cantidadNumerosPositivos += numeroIngresado;
            contadorNumerosPositivos++;
        }
        else{
            if(numeroIngresado < 0){
                sumaNumerosNegativos += numeroIngresado;
            }
        }

        if(banderaNumero){
            numeroMaximo = numeroIngresado;
            letraMaxima = letraIngresada;
            numeroMinimo = numeroIngresado;
            letraMinima = letraIngresada;
            banderaNumero = false;
        }
        else{
            if(numeroIngresado > numeroMaximo){
                letraMaxima = letraIngresada;
                numeroMaximo = numeroIngresado;
            }
            else{
                if(numeroIngresado < numeroMinimo){
                    letraMinima = letraIngresada;
                    numeroMinimo = numeroIngresado;
                }
            }
        }
        

        respuesta = confirm("Desea continuar?");
    }

    document.write("La cantidad de numeros pares es: " + contadorNumerosPares + "<br>");
    document.write("La cantidad de numeros impares es: " + contadorNumerosImpares + "<br>");
    document.write("La cantidad de ceros es: " + contadorNumeroCero + "<br>");
    document.write("El promedio de los numeros positivos es: " + cantidadNumerosPositivos / contadorNumerosPositivos + "<br>");
    document.write("La suma de los numeros negativos es: " + sumaNumerosNegativos + "<br>");
    document.write("El menor numero es: " + numeroMinimo + ", que tiene la letra: " + letraMinima + "<br>");
    document.write("El mayor numero es: " + numeroMaximo + ", que tiene la letra: " + letraMaxima);
}
/*
f 50
m 30
a -25
e 89
l -100
h -32
p 0
*/ 