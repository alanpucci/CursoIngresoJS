function mostrar()
{
	//tomo la edad  
	let edad = txtIdEdad.value;
	if(edad < 13){
		alert("Sos un ninño")
	}else if(edad >= 13 && edad <= 17){
		alert("Sos adolescente");
	}else{
		alert("Sos mayor");
	}



}//FIN DE LA FUNCIÓN