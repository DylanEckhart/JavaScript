// Variabelen
var speler1 = "Dylan"
var speler2 = "Timo"
var beurt = " heeft de beurt"

var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var pictures;
var aantal = 0;

Boolean; beurtSpeler1 = true;
Boolean; zet = true;

// Aanroepen Functies
FotoLader()
AddID()

// DOM argumenten
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("textSpeler1").innerHTML = speler1 + " : " + puntenSpeler1;
document.getElementById("textSpeler2").innerHTML = speler2 + " : " + puntenSpeler2;

// Overlay
overlay = document.getElementsByClassName("overlay");

// Laden van foto's
function FotoLader () {
    var container = document.getElementById("container");
    var images = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"];
    for (aantal = 0; aantal < 2; aantal++) {
        for (var i = 0; i < 9; i++) {
            var fmg = document.createElement("img");
            fmg.setAttribute("src", "IMG/" + images[i]);
            fmg.setAttribute("class", "foto");
            fmg.setAttribute("alt", images[i]);
            console.log(i);
            console.log("IMG/" + images[i]);
            container.appendChild(fmg);
        }
    }
}

function AddID() {
    var cls = document.getElementsByClassName("foto");
    for (var i = 0; i < 18; i++) {
        cls[i].id = "img_" + (i + 1);
        console.log(cls[i])
    }
}

// Puntensysteem, zetsysteem & beurtsysteem
function beurtsysteem() {
    if (puntenSpeler1 % 5 === 0) {
        beurtSpeler1 = false;
        zet = false;
    } else if (puntenSpeler2 % 5 === 0) {
        beurtSpeler1 = true;
        zet = true;
    }
}

function zetsysteem () {
    beurtsysteem()
    if (zet === true) {
        document.getElementById("tekstbeurt").innerHTML = speler1 + beurt;
    } else if (zet === false) {
        document.getElementById("tekstbeurt").innerHTML = speler2 + beurt;
    }
}


