/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var mensaje;

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
            mensaje = "Empate";
        break;
        case 2:
            mensaje = "Perdiste";
        break;
        default:
            mensaje = "Ganaste!";
    }

    alert(mensaje);

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
            mensaje = "Ganaste!";
        break;
        case 2:
            mensaje = "Empate";
        break;
        default:
            mensaje = "Perdiste";
    }

    alert(mensaje);

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
            mensaje = "Perdiste";
        break;
        case 2:
            mensaje = "Ganaste!";
        default:
            mensaje = "Empate";
    }

    alert(mensaje);

}//FIN DE LA FUNCIÓN