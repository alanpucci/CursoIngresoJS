/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var temporizador;
var calculo;
var numeroUno;
var numeroDos;
var operadorRandom;
var operadorMostrado;
var respuesta;

function comenzar()
{
	numeroUno = Math.floor((Math.random() * 10) + 1);
    numeroDos = Math.floor((Math.random() * 10) + 1);
    operadorRandom = Math.floor((Math.random() * 4) + 1);

    txtIdPrimerNumero.value = numeroUno;
    txtIdSegundoNumero.value = numeroDos;

    switch(operadorRandom){
        case 1:
            calculo = numeroUno + numeroDos;
            operadorMostrado = "Suma";
        break;
        case 2:
            calculo = numeroUno - numeroDos;
            operadorMostrado = "Resta";
        break;
        case 3:
            calculo = numeroUno * numeroDos;
            operadorMostrado = "Multiplicacion";
        break;
        default:
            calculo = numeroUno / numeroDos;
            operadorMostrado = "Division";
    }

    txtIdOperador.value = operadorMostrado;

    temporizador = setTimeout(Responder, 4000);

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = txtIdRespuesta.value;
    respuesta = parseInt(respuesta);

    if(respuesta == calculo){
        alert("El resultado es correcto");
    }else{
        alert("El resultado es incorrecto");
    }


}
