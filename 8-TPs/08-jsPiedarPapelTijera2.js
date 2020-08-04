var eleccionMaquina;
var mensaje;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);

}//FIN DE LA FUNCIÓN
function piedra()
{
	// if(eleccionMaquina == 1){
    //     mensaje = "Empate";
    // }
    // else{
    //     if(eleccionMaquina == 2){
    //         mensaje = "Perdiste";
    //     }
    //     else{
    //         mensaje = "Ganaste!";
    //     }
    // }

    switch(eleccionMaquina){
        case 1:
			//mensaje = "Empate";
			contadorDeEmpates++;
        break;
        case 2:
			//mensaje = "Perdiste";
			contadorDePerdidas++;
        break;
        default:
			//mensaje = "Ganaste!";
			contadorDeGanadas++;
    }

	//alert(mensaje);
	
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	// if(eleccionMaquina == 1){
    //     mensaje = "Ganaste!"
    // }
    // else{
    //     if(eleccionMaquina == 2){
    //         mensaje = "Empate";
    //     }
    //     else{
    //         mensaje = "Perdiste";
    //     }
    // }

    switch(eleccionMaquina){
        case 1:
			//mensaje = "Ganaste!";
			contadorDeGanadas++;
        break;
        case 2:
			//mensaje = "Empate";
			contadorDeEmpates++;
        break;
        default:
			//mensaje = "Perdiste";
			contadorDePerdidas++;
    }

	//alert(mensaje);
	
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	// if(eleccionMaquina == 1){
    //     mensaje = "Perdiste";
    // }
    // else{
    //     if(eleccionMaquina == 2){
    //         mensaje = "Ganaste!";
    //     }
    //     else{
    //         mensaje = "Empate";
    //     }
    // }

    switch(eleccionMaquina){
        case 1:
			//mensaje = "Perdiste";
			contadorDePerdidas++;
        break;
        case 2:
			//mensaje = "Ganaste!";
			contadorDeGanadas++;
        default:
			//mensaje = "Empate";
			contadorDeEmpates++;
    }

	//alert(mensaje);

	mostrarResultado();
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	txtIdGanadas.value = contadorDeGanadas;
	txtIdPerdidas.value = contadorDePerdidas;
	txtIdEmpatadas.value = contadorDeEmpates;
}