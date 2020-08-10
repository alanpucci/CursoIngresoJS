/*
    Enunciado  a)”bandera a full”
    de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
    sexo
    altura
    edad
    nombre
    se debe informar:

    1-el nombre de la más alta de las mujeres
    2-el nombre del  más viejo de los hombres 
    3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
    NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/

function mostrar()
{
    var sexo;
    var altura;
    var edad;
    var nombre;

    var banderaMujerAlta;
    var alturaMujerAlta;
    var nombreMujerAlta;

    var banderaHombreViejo;
    var edadHombreViejo;
    var nombreHombreViejo;

    var banderaAdolescente;
    var nombreAdolescente;

    banderaMujerAlta = true;
    banderaHombreViejo = true;
    banderaAdolescente = true;

    var respuesta;
    respuesta = true;

    while(respuesta == true){

        //Obtencion del nombre
        nombre = prompt("Ingrese su nombre");


        //Obtencion del sexo
        sexo = prompt("Ingrese su sexo");

        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Por favor, ingrese un sexo valido (f o m)");
        }


        //Obtencion de la altura
        altura = prompt("Ingrese su altura");
        altura = parseInt(altura);

        while(altura < 1){
            altura = prompt("Por favor, ingrese una altura valida");
            altura = parseInt(altura);
        }


        //Obtencion de edad
        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);

        while(edad < 1 || isNaN(edad)){
            edad = prompt("Por favor, ingrese una edad valida");
            edad = parseInt(edad);
        }

    
        switch(sexo){
            case "f":
                if(banderaMujerAlta){
                    alturaMujerAlta = altura;
                    nombreMujerAlta = nombre;
                    banderaMujerAlta = false;
                }
                else{
                    if(alturaMujerAlta < altura){
                        alturaMujerAlta = altura;
                        nombreMujerAlta = nombre; 
                    }
                }
            break;
            case "m":
                if(banderaHombreViejo){
                    edadHombreViejo = edad;
                    nombreHombreViejo = nombre;
                    banderaHombreViejo = false;
                }
                else{
                    if(edadHombreViejo < edad){
                        edadHombreViejo = edad;
                        nombreHombreViejo = nombre;
                    }
                }
            break;
        }

        if(banderaAdolescente == true && edad > 12 && edad < 18 ){
            nombreAdolescente = nombre;
            banderaAdolescente = false;
        }

        respuesta = confirm("Desea ingresar otros datos?");
    }

    console.log("El nombre de la mujer mas alta es: " + nombreMujerAlta);
    console.log("El hombre mas viejo es: " + nombreHombreViejo);
    if(banderaAdolescente == false){
        console.log("El nombre del primer adolescente es: " + nombreAdolescente);
    }
}