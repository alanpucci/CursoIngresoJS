/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    //Declaracion de variables
    var largo;
    var ancho;
    var perimetro;
    var cantidadAlambre

    //Inicializacion de variables
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    //Parseo de variables
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    //Calculo del area y alambre
    perimetro = (largo + ancho) * 2;
    cantidadAlambre = perimetro * 3;
    
    //Mensaje en pantalla
    alert(`Para ${perimetro}mts de terreno, necesitamos ${cantidadAlambre}mts de alambre`);
}

function Circulo() {

    //Declaracion de variables
    var radio;
    var area;
    var cantidadAlambre;

    //Inicializacion de variables
    radio = txtIdRadio.value;

    //Parseo
    radio = parseInt(radio);

    //Calculo del terreno y alambre
    area = (Math.PI * radio * 2).toFixed(2);
    cantidadAlambre = (area * 3).toFixed(2);

    //Mensaje en pantalla
    alert(`Para ${area}mts de terreno circular, necesitamos ${cantidadAlambre}mts de alambre`);

}
function Materiales() {

    //Declaracion de variables
    var largo;
    var ancho;
    var perimetro;
    var cemento;
    var cal;

    //Inicializacion de variables
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    //Parseo
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    
    //Calculo de perimetro
    perimetro = (largo + ancho) * 2;

    //Calculo de bolsas de cemento y cal
    cemento = perimetro * 2;
    cal = perimetro * 3;

    //Mensaje en pantalla
    alert(`Para un terreno rectangular de ${perimetro}mts necesitamos: ${cemento} bolsas de cemento y ${cal} bolsas de cal`);

}
