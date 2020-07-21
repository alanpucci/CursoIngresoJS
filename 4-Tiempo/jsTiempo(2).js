var miIntervalo ;


function inicio()
{
	alert("Bienvenido a la UTN FRA");
	miIntervalo = setInterval(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

    alert("Bienvenido a la UTN FRA");
    
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("Fin de la funcion");
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin