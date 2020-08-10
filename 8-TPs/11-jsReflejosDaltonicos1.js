/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colorSecreto;
var tiempoInicio;
var colorElegido;

function comenzar()
{
    colorSecreto = Math.floor((Math.random() * 6) + 1);

    switch(colorSecreto){
        case 1:
            colorElegido = "azul";
        break;
        case 2:
            colorElegido = "amarillo";
        break;
        case 3:
            colorElegido = "marron";
        break;
        case 4:
            colorElegido = "verde";
        break;
        case 5:
            colorElegido = "celeste";
        break;
        default:
            colorElegido = "rojo";
    }

    txtIdColorElegido.value = colorElegido;
	

}
function Responder(colorParametro)
{
	if(colorParametro == colorElegido){
        alert("Correcto!");
    }
    else{
        alert("Incorrecto!");
    }

}