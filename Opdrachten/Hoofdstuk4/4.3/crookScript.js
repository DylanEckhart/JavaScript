//Opdracht 4.3

var crooksOgen = [1,2,3,4,5];
var crooksNeus = [1,2,3,4,5];
var crooksMond = [1,2,3,4,5];
var count = 0;

var crook1 = document.getElementById("crook1");
crook1.style.Image = "url('IMG/Ogen/crookOgen1.jpg')";
var crook2 = document.getElementById("crook2");
crook2.style.Image = "url('IMG/Neuzen/crookNeus1.jpg')";
var crook3 = document.getElementById("crook3");
crook3.style.Image = "url('IMG/Monden/crookMond1.jpg')";

crook1.addEventListener("click", function() {
    crook1.style.backgroundImage = "url('IMG/Ogen/crookOgen" + getCrookOgen() + ".jpg')";
});
crook2.addEventListener("click", function() {
    crook2.style.backgroundImage = "url('IMG/Neuzen/crookNeus" + getCrookNeus() + ".jpg')";
});
crook3.addEventListener("click", function() {
    crook3.style.backgroundImage = "url('IMG/Monden/crookMond" + getCrookMond() + ".jpg')";
});

    function getCrookOgen() {
        if (count >= crooksOgen.length) {
            count = 1;
        } else {
            count++;
        }
        return count;
    }

    function getCrookNeus() {
        if (count >= crooksNeus.length) {
            count = 1;
        } else {
            count++;
        }
        return count;
    }

    function getCrookMond() {
        if (count >= crooksMond.length) {
            count = 1;
        } else {
            count++;
        }
        return count;
    }


