/*

Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edadIngresada(0 y 115)
alturaIngresado(30 y 230)
sexoIngresado
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de alturaIngresado de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos

*/

function mostrar()
{
    var nombreIngresado;
    var edadIngresada;
    var alturaIngresado;
    var sexoIngresado;
    var dineroIngresado;
    var cantidadHijosIngresado;

    var contadorPersonaVieja;
    var nombrePersonaVieja;
    var edadPersonaVieja;

    var promedioAlturaMujeres;
    var alturaTotalMujeres;
    var contadorMujeres;

    var nombreMujerJoven;
    var contadorMujerJoven;
    var edadMujerJoven;

    var i;
    contadorPersonaVieja = 0;
    alturaTotalMujeres = 0;
    contadorMujeres = 0;
    contadorMujerJoven = 0;

    for(i = 0; i < 3; i++){

        //Obtencion de nombre
        nombreIngresado = prompt("Ingrese su nombre");


        //Obtencion de edadIngresada
        edadIngresada = prompt("Ingrese su edadIngresada");
        edadIngresada = parseInt(edadIngresada);

        while(edadIngresada < 0 || edadIngresada > 115){
            edadIngresada = prompt("Por favor, ingrese una edadIngresada entre 0 y 115");
            edadIngresada = parseInt(edadIngresada);
        }

        
        //Obtencion de alturaIngresado en cm
        alturaIngresado = prompt("Ingrese su alturaIngresado");
        alturaIngresado = parseInt(alturaIngresado);

        while(alturaIngresado < 30 || alturaIngresado > 230){
            alturaIngresado = prompt("Por favor, ingrese una alturaIngresado valida");
            alturaIngresado = parseInt(alturaIngresado);
        }


        //Obtencion de sexoIngresado
        sexoIngresado = prompt("Ingrese su sexoIngresado");

        while(sexoIngresado != "f" && sexoIngresado != "m"){
            sexoIngresado = prompt("Por favor, ingrese un sexoIngresado valido (f o m)");
        }


        //Obtencion de dinero
        dineroIngresado = prompt("Ingrese su dinero");
        dineroIngresado = parseInt(dineroIngresado);

        while(isNaN(dineroIngresado) == true){
            dineroIngresado = prompt("Ingrese un dinero valido");
            dineroIngresado = parseInt(dineroIngresado);
        }


        //Obtencion de cantidad de hijos
        cantidadHijosIngresado = prompt("Ingrese su cantidad de hijos");
        cantidadHijosIngresado = parseInt(cantidadHijosIngresado);

        while(cantidadHijosIngresado < 0 || cantidadHijosIngresado > 10 || isNaN(cantidadHijosIngresado) == true){
            cantidadHijosIngresado = prompt("Por favor, ingrese una cantidad de hijos entre 0 y 10");
            cantidadHijosIngresado = parseInt(cantidadHijosIngresado);
        }

        if(contadorPersonaVieja == 0){
            edadPersonaVieja = edadIngresada;
            nombrePersonaVieja = nombreIngresado;
            contadorPersonaVieja++;
        }
        else{
            if(edadPersonaVieja < edadIngresada){
                edadPersonaVieja = edadIngresada;
                nombrePersonaVieja = nombreIngresado;
            }    
        }

        if(sexo == "f"){
            alturaTotalMujeres += alturaIngresado;
            contadorMujeres++;

            if(contadorMujerJoven == 0){
                nombreMujerJoven = nombreIngresado;
                edadMujerJoven = edadIngresada;
                contadorMujerJoven++;
            }
            else{
                if(edadMujerJoven > edadIngresada){
                    nombreMujerJoven = nombreIngresado;
                    edadMujerJoven = edadIngresada;
                }
            }
        }
    }

    console.log("La persona con la edad mas vieja es: " + nombrePersonaVieja);
    console.log("El promedio de altura de las mujeres es: " + alturaTotalMujeres / contadorMujeres);
    console.log("El nombre de la mujer mas joven es: " + nombreMujerJoven);
}
