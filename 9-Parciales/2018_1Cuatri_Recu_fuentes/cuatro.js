function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;

    primerNumero = prompt("Ingrese el primer numero");
    primerNumero = parseInt(primerNumero);

    segundoNumero = prompt("Ingrese el segundo numero");
    segundoNumero = parseInt(segundoNumero);

    if(primerNumero == segundoNumero){
        resultado = primerNumero + "" + segundoNumero;
    }
    else{
        if(primerNumero > segundoNumero){
            resultado = primerNumero / segundoNumero;
        }
        else{
            resultado = primerNumero + segundoNumero;
            if(resultado < 50){
                alert("La suma es " + resultado + " y es menor a 50");
            }
        }
    }


    alert(resultado);
}
