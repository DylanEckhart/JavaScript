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
            resetVariabelen();
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

// Randomize de kaarten
var driverArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
shuffleDeck(ponyArray);
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




