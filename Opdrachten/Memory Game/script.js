// Variabelen
var speler1 = "Dylan"
var speler2 = "Timo"
var beurt = " heeft de beurt"
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var pictures;
var aantal = 0;
var i = 1;
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
    for (i = 1; i < pictureHolders.length; i++) {
        driverFoto = document.createElement("IMG");
        driverFoto.src = "IMG/f" + (i) + ".png";
        driverFoto.id = (i);
        pictureHolders[i].appendChild(driverFoto);
    }
    console.log(pictureHolders.length)
}

// Picture holders
function createPictureHolders() {
    pictures = document.getElementById("pictures");
    for (aantal = 0; aantal < 2; aantal++) {
        for (i = 0; i < 9; i++) {
            pictureHolder = document.createElement("div");
            pictureHolder.className = "picture-holder";
            pictureHolder.id = "picture-holder" + i;
            pictures.appendChild(pictureHolder);
        }
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

