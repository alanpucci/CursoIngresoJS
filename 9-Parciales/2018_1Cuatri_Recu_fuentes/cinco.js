function mostrar()
{
    var diaIngresado;
    var mensaje;

    diaIngresado = prompt("Ingrese un dia de la semana");

    switch(diaIngresado){
        case "sabado":
        case "domingo":
            mensaje = "Buen finde";
        break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "a trabajar";
        break;
        default:
            mensaje = "No es un dia valido";
    }

    alert(mensaje);
}
