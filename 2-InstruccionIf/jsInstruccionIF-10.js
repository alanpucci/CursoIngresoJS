/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	//Declaracion de variable
	var nota;

	//Generacion de numero RANDOM entre 1 y 10
	nota = (Math.random(nota) * 10).toFixed(2);

	//Condicional
	if(nota > 8.99 && nota < 11){
		alert('Su nota es: ' + nota + '. EXCELENTE!');
	}else if(nota > 3.99 && nota < 9){
		alert('Su nota es: ' + nota + '. APROBO!');
	}else if(nota < 4){
		alert('Su nota es: ' + nota + '. Vamos, la proxima se puede!');
	}
	
}//FIN DE LA FUNCIÓN