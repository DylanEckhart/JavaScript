//Opdracht 4.1

var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid)
    },

    toeteren: function () {
        console.log("Toet!")
    }
}
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();

//Opdracht 4.2

var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('IMG/f1.jpg')";

slideholder.addEventListener("click", function() {
    slideholder.style.backgroundImage = "url('IMG/f" + getDriver() + ".jpg')";
});

function getDriver() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}

//Opdracht 4.3

var crooks = [1,2,3,4,5];
var count = 0;

var crook1 = document.getElementById("Crook1");
crook1.style.backgroundImage = "url('IMGCrook/crookOgen1.png')";
var crook2 = document.getElementById("Crook2");
crook2.style.backgroundImage = "url('IMGCrook/crookNeus1.png')";
var crook3 = document.getElementById("Crook3");
crook3.style.backgroundImage = "url('IMGCrook/crookMond1.png')";

crook1.addEventListener("click", function() {
    crook1.style.backgroundImage = "url('IMGCrook/crookOgen" + getCrook() + ".png')";
});
crook2.addEventListener("click", function() {
    crook2.style.backgroundImage = "url('IMGCrook/crookNeus" + getCrook() + ".png')";
});
crook3.addEventListener("click", function() {
    crook3.style.backgroundImage = "url('IMGCrook/crookMond" + getCrook() + ".png')";
});

function getCrook() {
    if(count >= crooks.length) {
        count = 1;
    } else {
        count++;
    }
    if(count >= crooks.length) {
        count = 1;
    } else {
        count++;
    }
    if(count >= crooks.length) {
        count = 1;
    } else {
        count++;
    }
    return count;
}






