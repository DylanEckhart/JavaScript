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
AddID()

// DOM argumenten
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("textSpeler1").innerHTML = speler1 + " : " + puntenSpeler1;
document.getElementById("textSpeler2").innerHTML = speler2 + " : " + puntenSpeler2;

// Overlay
overlay = document.getElementsByClassName("overlay");

// Laden van foto's
let pictureholders = document.getElementsByClassName("picture-holder");
for (let i = 0; i < pictureholders.length; i++) {
    pictureholders[i].style.background = 'url("IMG/2.png")';
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


