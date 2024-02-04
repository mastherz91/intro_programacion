//Variable random

var random_user1 = Math.floor(Math.random() * 10) + 1;
var random_user2 = Math.floor(Math.random() * 10) + 1;
var random_pc3 = Math.floor(Math.random() * 10) + 1;
var random_pc4 = Math.floor(Math.random() * 10) + 1;
var sum_user = random_user1 + random_user2;
var sum_pc = random_pc3 + random_pc4;


var texto = document.getElementById("parrafo");
var texto2 = document.getElementById("parrafo2");
var texto3 = document.getElementById("parrafo3");
var texto4 = document.getElementById("parrafo4");

while (true) {
    texto2.innerHTML = "la suma de sus cartas son: " + sum_user;
    texto3.innerHTML = "La suma de las cartas de la computadora es: " + sum_pc;

    var carta = prompt("¿Desea otra carta?, Actualmente el valor de sus cartas suma:" + sum_user + " ",)

    if (carta == "si") {
        var random_user3 = Math.floor(Math.random() * 10) + 1;
        texto.innerHTML = "Su nueva carta es: " + random_user3;
        sum_user = sum_user + random_user3;

        if (sum_user > 21) {
            texto4.innerHTML = "Perdiste";
            break
        }

    } else if (carta == "no") {

        if (sum_user > sum_pc) {
            texto4.innerHTML = "Ganaste";
            break
        } else if (sum_user < sum_pc) {
            texto4.innerHTML = "Perdiste";
            break
        } else if (sum_user == sum_pc) {
            texto4.innerHTML = "Empate";
            break
        }

    } else {
        texto.innerHTML = "ingrese si o no";
    }
}

texto2.innerHTML = "la suma de sus cartas son: " + sum_user;
texto3.innerHTML = "La suma de las cartas de la computadora es: " + sum_pc;
