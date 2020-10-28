// Variabelen
var speler1 = "Dylan"
var speler2 = "Timo"
var beurt = " heeft de beurt"
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var random = 0;
var randomnumbers = [];
var pictures;
Boolean; beurtSpeler1 = true;
Boolean; zet = true;

// Functies aanroepen
createPictureHolders();
createDriverPictures();

// DOM argumenten
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("textSpeler1").innerHTML = speler1 + " : " + puntenSpeler1;
document.getElementById("textSpeler2").innerHTML = speler2 + " : " + puntenSpeler2;
/*document.getElementById("button").addEventListener("click", button);*/

// Foto's
function createDriverPictures() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        /* driverFoto = document.createElement("IMG");
        driverFoto.src = "IMG/f" + i + ".png";
         driverFoto.id = i;*/
        // pictureHolders[i].appendChild(driverFoto);
    }
}

// Picture holders
pictures = document.getElementById("pictures");
function createPictureHolders() {
    for (var i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "driverPicture";
        pictureHolder.id = "picture-holder" + i;
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

// Button voor puntenaantal
function button() {
    if (beurtSpeler1 === true) {
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

