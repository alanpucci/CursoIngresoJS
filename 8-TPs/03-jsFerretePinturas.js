/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Declaracion de variable
    var temperaturaFarenheit;
    var temperaturaCentigrados;

    //Inicializacion de variable
    temperaturaFarenheit = txtIdTemperatura.value;

    //Parseo
    temperaturaFarenheit = parseInt(temperaturaFarenheit);

    //Conversion
    temperaturaCentigrados = (temperaturaFarenheit - 32) * 5/9;

    //toFixed
    temperaturaCentigrados = temperaturaCentigrados.toFixed(3);

    //Mensaje en pantalla
    alert(`${temperaturaFarenheit} Farenheit son ${temperaturaCentigrados} grados`);
}

function CentigradosFahrenheit () 
{
    //Declaracion variable
    var temperaturaFarenheit;
    var temperaturaCentigrados;

    //Inicializacion de variable
    temperaturaCentigrados = txtIdTemperatura.value;

    //Parseo
    temperaturaCentigrados = parseInt(temperaturaCentigrados);

    //Conversion
    temperaturaFarenheit = (temperaturaCentigrados * 9/5) + 32;

    //Mensaje en pantalla
    alert(`${temperaturaCentigrados} grados son ${temperaturaFarenheit} Farenheit`);
}
