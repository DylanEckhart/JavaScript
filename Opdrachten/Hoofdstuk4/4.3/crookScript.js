//Opdracht 4.3

var crooksOgen = [1,2,3,4,5];
var crooksNeus = [1,2,3,4,5];
var crooksMond = [1,2,3,4,5];
var count = 0;

var crook1 = document.getElementById("Crook1");
crook1.style.backgroundImage = "url('4.3/IMGCrook/crookOgen1.jpg')";
var crook2 = document.getElementById("Crook2");
crook2.style.backgroundImage = "url('4.3/IMGCrook/crookNeus1.jpg')";
var crook3 = document.getElementById("Crook3");
crook3.style.backgroundImage = "url('4.3/IMGCrook/crookMond1.jpg')";

crook1.addEventListener("click1", function() {
    crook1.style.backgroundImage = "url('4.3/IMGCrook/crookOgen" + getCrookOgen() + ".jpg')";
});
crook2.addEventListener("click2", function() {
    crook2.style.backgroundImage = "url('4.3/IMGCrook/crookNeus" + getCrookNeus() + ".jpg')";
});
crook3.addEventListener("click3", function() {
    crook3.style.backgroundImage = "url('4.3/IMGCrook/crookMond" + getCrookMond() + ".jpg')";
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


