/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
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

}//FIN DE LA FUNCIÓN
