//Opdracht 4.3

var crooksOgen = [1,2,3,4,5];
var crooksNeus = [1,2,3,4,5];
var crooksMond = [1,2,3,4,5];
var count = 0;

var crook1 = document.getElementById("crook1");
crook1.style.Image = "url('IMGCrook/crookOgen1.jpg')";
var crook2 = document.getElementById("crook2");
crook2.style.Image = "url('IMGCrook/crookNeus1.jpg')";
var crook3 = document.getElementById("crook3");
crook3.style.Image = "url('IMGCrook/crookMond1.jpg')";

crook1.addEventListener("click1", function() {
    crook1.style.backgroundImage = "url('IMGCrook/crookOgen" + getCrookOgen() + ".jpg')";
});
crook2.addEventListener("click2", function() {
    crook2.style.backgroundImage = "url('IMGCrook/crookNeus" + getCrookNeus() + ".jpg')";
});
crook3.addEventListener("click3", function() {
    crook3.style.backgroundImage = "url('IMGCrook/crookMond" + getCrookMond() + ".jpg')";
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


