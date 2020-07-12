/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let largo = parseInt(txtIdLargo.value);
  let ancho = parseInt(txtIdAncho.value);
  let ecuacion = largo * ancho * 3;
  alert(`El alambre que se necesita es ${ecuacion}`);
}
function Circulo() {
  let radio = parseInt(txtIdRadio.value);
  let ecuacion = Math.round(Math.PI * radio * 3);
  alert(`El alambre que se necesita es ${ecuacion}`);
}
function Materiales() {
  let largo = parseInt(txtIdLargo.value);
  let ancho = parseInt(txtIdAncho.value);
  let area = largo * ancho;
  let cemento = area * 2;
  let cal = area * 3;
  alert(
    `Para un area de ${area} mts se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`
  );
}
