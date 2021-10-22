'use strict'
// llamada a la funcon a traves de un boton
document.getElementById("boton").onclick = comprobar;

// variables 
let asesino =document.getElementById("asesino");
let sala =document.getElementById("sala");
let arma =document.getElementById("arma");
let articulo = document.getElementById("articulo");
let resuelto =document.getElementById("resuelto");


// funcion 
function comprobar() {
  let valorSala= document.getElementById("valorSala").value ;
  let valorSospechoso = document.getElementById("valorSospechoso").value;

  // muestra por consola los registros y se acumula cada vez que damos al boton 
  console.log("----");
  console.log(valorSala+"-"+valorSospechoso);
  

  if ((valorSala =="salón de baile" && valorSospechoso =="Sr. Kalehoff") ||
      (valorSala =="Galería" && valorSospechoso =="Sra. Van Cleve")||
      (valorSala =="Sala de billar" && valorSospechoso =="Sra. Sparr")||
      (valorSala =="Comedor" && valorSospechoso =="Sr. Parkes")) {

     asesino.innerHTML = valorSospechoso; 
     sala.innerHTML = valorSala; 
     
        // este switch asocia el arma con la sala seleccionada
        switch (valorSala) {
          case "salón de baile":
            arma.innerHTML = "veneno";
            break;
          case "Galería":
            articulo.innerHTML = " la ";
            arma.innerHTML = "trofeo";
            break;
          case "Sala de billar":
            articulo.innerHTML = " la ";
            arma.innerHTML = "palo de billar";
            break;
          case "Comedor":
            arma.innerHTML = "cuclillo";
            break;
        
          default:
            break;
        }

        resuelto.innerHTML = "Resuelto!!!";
        // se muestra en consola si coinciden valorSala con cospechoso
        console.log("el valor coincide")
    }else {

      //valores iniciales al volver a presionar el boton con coincidencia erronea
      asesino.innerHTML = "_________"; 
      sala.innerHTML = "_________"; 
      arma.innerHTML = "_________";
      articulo.innerHTML = " el "
      resuelto.innerHTML="";

      // se muestra en consola si no coinciden valorSala con cospechoso
      console.log("el valor no coincide");

    }


}