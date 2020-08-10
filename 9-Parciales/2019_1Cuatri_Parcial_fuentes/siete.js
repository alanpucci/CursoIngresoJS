function mostrar()
{
    var altura;
    var sexo;
    var alturaTotal;
    var promedio;
    var alturaBaja;
    var banderaAltura;
    var sexoAlturaBaja;
    var contadorMujeresAltas;

    contadorMujeresAltas = 0;
    banderaAltura = true;
    alturaTotal = 0;
    var i;

    for(i = 0; i < 5; i++){

        //Obtencion de altura
        altura = prompt("Ingrese la altura del jugador");
        altura = parseInt(altura);

        while(altura < 0 || altura > 250 || isNaN(altura)){
            altura = prompt("Ingrese la altura del jugador");
            altura = parseInt(altura);
        }

        
        //Obtencion del sexo
        sexo = prompt("Ingrese su sexo");

        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Ingrese un sexo valido, f o m");
        }
        

        //Procesos
        alturaTotal += altura;
        promedio = alturaTotal / 5;

        if(banderaAltura || altura < alturaBaja){
            alturaBaja = altura;
            sexoAlturaBaja = sexo;
            banderaAltura = false;
        }

        if(sexo == "f" && altura > 190){
            contadorMujeresAltas++;
        }


    }

    document.write("El promedio de las alturas totales es: " + promedio + "<br>");
    document.write("La altura mas baja es: " + alturaBaja + " y el sexo es: " + sexoAlturaBaja + "<br>");
    document.write("La cantidad de mujeres que superan los 190 cm es: " + contadorMujeresAltas);

}
