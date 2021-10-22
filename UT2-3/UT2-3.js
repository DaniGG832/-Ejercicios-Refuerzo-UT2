'use strict'

let valorSala = document.getElementById("valorSala").value ;
let valorSospechoso = document.getElementById("valorSospechoso").value ;



let asesino =document.getElementById("asesino");
let sospechoso =document.getElementById("sospechoso");
let arma =document.getElementById("arma");

document.getElementById("boton").onclick = comprobar;

function comprobar() {
  if (valorSala==valorSospechoso) {
     document.getElementById("asesino").innerHTML= document.getElementById("valorSala").value.innerHTML; 
    }
}