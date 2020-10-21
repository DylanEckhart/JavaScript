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
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = url()




