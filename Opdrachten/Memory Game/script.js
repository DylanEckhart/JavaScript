// Variabelen
var speler1 = "Dylan"
var speler2 = "Timo"
var beurt = " heeft de beurt"
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var pictures;
var aantalFoto = [1,2,3,4,5,6,7,8,9];
var aantal = 0;
var i = 1;

Boolean; beurtSpeler1 = true;
Boolean; zet = true;


// DOM argumenten
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("textSpeler1").innerHTML = speler1 + " : " + puntenSpeler1;
document.getElementById("textSpeler2").innerHTML = speler2 + " : " + puntenSpeler2;

// Overlay

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


