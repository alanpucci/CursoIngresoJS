/*
Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/

function mostrar()
{
    var razaIngresado;
    var pesoIngresado;
    var temperaturaIngresada;
    var edadIngresada;
    var peligroExtincion;

    var sumaEdadTotal;
    var contador;
    var promedioEdad;

    var nombreRazaPesado;
    var pesoRazaPesado;

    var banderaExtincion;
    var temperaturaMaximaExtincion;

    contador = 0;
    sumaEdadTotal = 0;
    promedioEdad = 0;
    banderaExtincion = true;

    var respuesta;
    respuesta = true;

    while(respuesta == true){

        //Obtencion de raza
        razaIngresado = prompt("Ingrese la raza del animal");


        //Obtencion de peso
        pesoIngresado = prompt("Ingrese el peso");
        pesoIngresado = parseInt(pesoIngresado);

        while(pesoIngresado < 0 || isNaN(pesoIngresado) == true){
            pesoIngresado = prompt("Por favor, ingrese un peso valido");
            pesoIngresado = parseInt(pesoIngresado);
        }

    
        //Obtencion de temperatura
        temperaturaIngresada = prompt("Ingrese la temperatura del lugar");
        temperaturaIngresada = parseInt(temperaturaIngresada);

        while(isNaN(temperaturaIngresada)){
            temperaturaIngresada = prompt("Por favor, ingrese una temperatura valida");
        }


        //Obtencion de edad
        edadIngresada = prompt("Ingrese la edad");
        edadIngresada = parseInt(edadIngresada);

        while(isNaN(edadIngresada) == true || edadIngresada < 0){
            edadIngresada = prompt("Por favor, ingrese una edad valida");
            edadIngresada = parseInt(edadIngresada);
        }

        
        //Obtencion de extincion
        peligroExtincion = prompt("Esta en peligro de extincion? responda 'si' o 'no'")

        while(peligroExtincion != "si" && peligroExtincion != "no"){
            peligroExtincion = prompt("Esta en peligro de extincion? responda 'si' o 'no'")
        }

        

        if(contador == 0){
            nombreRazaPesado = razaIngresado;
            pesoRazaPesado = pesoIngresado;
        }
        else{
            if(pesoRazaPesado < pesoIngresado){
                nombreRazaPesado = razaIngresado;
                pesoRazaPesado = pesoIngresado;
            }
        }

        if(banderaExtincion == true){
            temperaturaMaximaExtincion = temperaturaIngresada;
            banderaExtincion = false;
        }
        else{
            if(temperaturaMaximaExtincion < temperaturaIngresada){
                temperaturaMaximaExtincion = temperaturaIngresada;
            }
        }
        
        //Promedio de edad
        sumaEdadTotal += edadIngresada;
        contador++;

        respuesta = confirm("Desea continuar?");
    }

    //Promedio edad
    promedioEdad = sumaEdadTotal / contador;

    console.log("El promedio de la edad total es: " + promedioEdad);
    console.log("La raza mas pesada es: " + nombreRazaPesado);
    console.log("La temperatura maxima ingresada en animales en extincion es: " + temperaturaMaximaExtincion);

}