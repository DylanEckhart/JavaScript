// Variabelen
var beurt = " heeft de beurt"
var speler1 = "Dylan"
var speler2 = "Timo"
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
Boolean; beurtSpeler1 = true;
Boolean; zet = true;

// Text in top-bar
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("textSpeler1").innerHTML = speler1 + " : " + puntenSpeler1;
document.getElementById("textSpeler2").innerHTML = speler2 + " : " + puntenSpeler2;
document.getElementById("button").addEventListener("click", button);

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

// Button function
function button() {
    if (beurtSpeler1 == true) {
        puntenSpeler1 += 1;
        document.getElementById("textSpeler1").innerHTML = speler1 + " : " + puntenSpeler1;
    } else {
        puntenSpeler2 += 1;
        document.getElementById("textSpeler2").innerHTML = speler2 + " : " + puntenSpeler2;
    }
    // Bovenstaande functies aanroepen
    zetsysteem()
    beurtsysteem()


}

