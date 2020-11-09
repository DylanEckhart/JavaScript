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

// Methode voor gekozen kaart
function opdrachtGeklikteKaart() {
    if (id !== laatstGekilkt && volgendeZet) {
        zetten++;
        laatstGekilkt = id;
        draaiKaart(id);
        if (zetten === 2) {
            zoekVoorOvereenkomst();
            resetSpelEnVariabelen();
        }
    }
}

// Methode voor overlay weghalen
function reageerOpKlik() {
    var alleOverlays = document.getElementsByClassName("overlay");
    for (var i = 0; i < alleOverlays.length ; i++) {
        if (driverArray[i] != null) {
            alleOverlays[i].style.background = "white";
        }
    }
    button.style.display = 'none';
    zetten = 0;
    laatstGekilkt = null;
    volgendeZet = true;
    veranderSpeler();
    toonPlayer();
}

// Plaatjes tonen
    var driverArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    randomize(driverArray);
    for (var i = 1; i <= 18; i++) {
        var blok = document.createElement("div");
        blok.className = "overlay";
        blok.id = i;
        blok.addEventListener('click', reageerOpKlik);
        blok.style.background = 'white';
        document.getElementById("container").appendChild(blok);
    }

// Overlay laten verdwijnen en plaatje tonen
function draaiKaart(id) {
    var blok = document.getElementById(id);
    id = 0;
    blok.style.background = 'url("IMG/f' + driverArray[id] + '.jpg")';
    if (zetten === 1) {
        openKaarten[0] = driverArray[id];
    } else {
        openKaarten[1] = driverArray[id];
    }
    console.log(draaiKaart.toString());
}

// Randomize de kaartjes
function randomize(driverArray) {
    for (var i = 0; i < driverArray.length ; i++) {
        var random = Math.floor(Math.random() * driverArray.length);
        var template = driverArray[i];
        driverArray[i] = driverArray[random];
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
        wieWint();
    }
    button.addEventListener('click', reageerOpKlik);
    openKaarten = [null, null];
}

// Speler aan zet
function toonPlayer() {
    document.getElementById("beurt").innerHTML = spelers[spelerAanZet];
}

// Score van speler
function toonScore() {
    document.getElementById("puntenDylan").innerHTML = puntenDylan;
    document.getElementById("puntenTimo").innerHTML = puntenTimo;
}

// Controleer of het overeenkomt
function zoekVoorOvereenkomst() {
    if (openKaarten[0] === openKaarten[1]) {
        var winnendeDriver = openKaarten[0];
        if (spelerAanZet === 0) {
            puntenDylan++;
        } else {
            puntenTimo++;
        }
        veranderSpeler();
        toonScore();

        var alleOverlays = document.getElementsByClassName("overlay");
        for (var i = 0; i < driverArray.length ; i++) {
            if (driverArray[i] === winnendeDriver) {
                alleOverlays[i].removeEventListener("click",opdrachtGeklikteKaart);
                driverArray[i] = null;
            }
        }
    }
}

// Verander speler
function veranderSpeler() {
    if (spelerAanZet === 0) {
        spelerAanZet = 1;
    } else {
        spelerAanZet = 0;
    }
}

// Winnende speler
function wieWint() {
    if (puntenTimo > puntenDylan) {
        winner = "Timo";
    } else {
        winner = "Dylan";
    }
    var button = document.getElementById("button");
    button.innerHTML = winner + " wint!";
    button.style.display = 'block';
}




