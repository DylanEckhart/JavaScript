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



