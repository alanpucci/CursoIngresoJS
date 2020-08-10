function mostrar()
{
    var paisIngresado;
    var habitantesIngresado;
    var temperaturaIngresada;
    var contadorTemperatura;
    var cantidadHabitantesMenor;
    var nombrePaisMenorHabitantes;
    var contadorPaisesTemperatura;
    var cantidadTotalHabitantes;
    var contadorPaises;
    var banderaTemperatura;
    var paisMenorTemperatura;
    var menorTemperaturaRegistrada;    

    contadorTemperatura = 0;
    cantidadHabitantesMenor = 7000;
    contadorPaisesTemperatura = 0;
    contadorPaises = 0;
    cantidadTotalHabitantes = 0;
    banderaTemperatura = true;

    var respuesta;
    respuesta = true;

    while(respuesta){

        //Obtencion de nombre
        paisIngresado = prompt("Ingrese el nombre de su pais");


        //Obtencion de cantidad de habitantes (en millones)
        habitantesIngresado = prompt("Ingrese la cantidad de habitantes en millones");
        habitantesIngresado = parseInt(habitantesIngresado);

        while(habitantesIngresado < 1 || habitantesIngresado > 7000){
            habitantesIngresado = prompt("Por favor, ingrese una cantidad de habitantes en millones valida");
            habitantesIngresado = parseInt(habitantesIngresado);
        }


        //Obtencion de temperatura
        temperaturaIngresada = prompt("Ingrese la temperatura");
        temperaturaIngresada = parseInt(temperaturaIngresada);

        while(temperaturaIngresada < -50 || temperaturaIngresada > 50){
            temperaturaIngresada = prompt("Por favor, ingrese una temperatura entre -50 y 50");
            temperaturaIngresada = parseInt(temperaturaIngresada);
        }


        //Procesos
        cantidadTotalHabitantes += habitantesIngresado;
        contadorPaises++;

        if(temperaturaIngresada % 2 == 0){
            contadorTemperatura++;
        }
        
        if(habitantesIngresado < cantidadHabitantesMenor){
            nombrePaisMenorHabitantes = paisIngresado;
            cantidadHabitantesMenor = habitantesIngresado;
        }

        if(temperaturaIngresada > 40){
            contadorPaisesTemperatura++;
        }

        if(banderaTemperatura){
            paisMenorTemperatura = paisIngresado;
            menorTemperaturaRegistrada = temperaturaIngresada;
            banderaTemperatura = false;
        }
        else{
            if(temperaturaIngresada < menorTemperaturaRegistrada){
                paisMenorTemperatura = paisIngresado;
                menorTemperaturaRegistrada = temperaturaIngresada;
            }
        }

        respuesta = confirm("Desea ingresar otra persona?");
    }


    document.write("La cantidad de temperaturas pares es: " + contadorTemperatura + "<br>");
    document.write("El pais con menores habitantes es: " + nombrePaisMenorHabitantes + "<br>");
    document.write("La cantidad de paises con mas de 40 grados es: " + contadorPaisesTemperatura + "<br>");
    document.write("El promedio de habitantes entre los paises es: " + cantidadTotalHabitantes / contadorPaises + "<br>");
    document.write("El pais con la menor temperatura es: " + paisMenorTemperatura + " con una temperatura de " + menorTemperaturaRegistrada + " grados");
}
