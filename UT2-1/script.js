 'use strict'

document.getElementById("boton").onclick=comprobar;

function comprobar(){
  
// recoje el dato introducido por en usuario
  let numero = document.getElementById("numero").value;
//iprime en consola el dato introducido por el ususario
  console.log(numero);
// valor vacio para refrescar el input numero a cadena vacia
  let inputVacio =  document.getElementById("numero").value=""; 

  // comprobar si el valor es una cadena vacia
if (numero != "") {
//comprobar si es un numero
  if (!isNaN(numero)){

    //comprobar si es numero par 
    if (numero%2==0) {

        document.getElementById("resultado").value = "even";
      } 
    else{

        document.getElementById("resultado").value = "odd";     
    }   
  }else {
     // si no es un numero aparece un alert o aviso
        console.log("introducir valor correcto");
        alert("por favor introduzca un valor correcto ");

  }
}
//si es una cadena vacia aparece un aviso
else{
  console.log("cadena vacia");
  alert("por favor introduzca un numero");
}
}