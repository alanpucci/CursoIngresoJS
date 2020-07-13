function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroAzar = Math.round(Math.random()*10);

	if(numeroAzar >= 9){
		alert(`Numero: ${numeroAzar}, por lo tanto: EXCELENTE`);
	}else if(numeroAzar >= 4 && numeroAzar < 9){
		alert(`Numero: ${numeroAzar}, por lo tanto: APROBADO`);
	}else if(numeroAzar < 4){
		alert(`Numero: ${numeroAzar}. Vamos, la proxima se puede`);
	}

}//FIN DE LA FUNCIÓN