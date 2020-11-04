// Variabelen
var winner = null;
var zetten = 0;
var laatstGekilkt = null;
var volgendeZet = true;

var puntenDylan = 0;
var puntenTimo = 0;
var spelers = ["Dylan", "Timo"];

var openKaarten = [null, null];
var spelerAanZet = Math.floor(Math.random() * 2);

// Aanroepen Methodes
toonPlayer();
toonScore();
opdrachtGeklikteKaart();

// Methode voor gekozen kaart
function opdrachtGeklikteKaart() {
    if (this.id !== laatstGekilkt && volgendeZet) {
        zetten++;
        laatstGekilkt = this.id;
        draaiKaart(this.id);
        if (zetten === 2) {
            zoekVoorMatch();
            resetSpelEnVariabelen();
        }
    }
}

// Methode voor overlay weghalen
function reageerOpKlik() {
    var alleOverlays = document.getElementsByClassName("overlay");
    for (let a = 0; a < allBlocks.length ; a++) {
        if (driverArray[a] !== null) {
            alleOverlays[a].style.background = "white";
        }
    }
    button.style.display = 'none';
    zetten = 0;
    laatstGekilkt = null;
    volgendeZet = true;
}

// Plaatjes tonen
var driverArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
randomize(driverArray);
for (var b = 1; b <= 18 ; b++) {
    var blok = document.createElement("div");
    blok.className = "overlay";
    blok.id = b;
    blok.addEventListener('click', reageerOpKlik);
    blok.style.background = 'white';
    document.getElementById("container").appendChild(blok);
}

// Overlay laten verdwijnen en plaatje tonen
function draaiKaart(id) {
    var blok = document.getElementById(id);
    blok.style.background = 'url("IMG/f0' + driverArray[id - 1] + '.png")';
    if (zetten === 1) {
        openKaarten[0] = driverArray[id - 1];
    } else {
        openKaarten[1] = driverArray[id - 1];
    }
}

// Randomize de kaartjes
function randomize(driverArray) {
    for (var c = 0; c < driverArray.length ; c++) {
        var random = Math.floor(Math.random() * driverArray.length);
        var template = driverArray[c];
        driverArray[c] = driverArray[random];
        driverArray[random] = template;
    }
}

// Reset het spel en variabelen
function resetSpelEnVariabelen() {
    volgendeZet = false;
    var button = document.getElementById("button");
    if (pointsDylan + pointTimo < 9) {
        button.style.display = "block";
    } else {
        //determineWinner();
    }
    button.addEventListener('click', reageerOpKlik);
    openKaarten = [null, null];
}




