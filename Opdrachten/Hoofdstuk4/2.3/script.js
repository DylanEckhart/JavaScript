var crooks = [1,2,3,4,5];
var count = 0;

var crook1 = document.getElementById("Crook1");
crook1.style.backgroundImage = "url('IMGCrook/crookOgen1.jpg')";
var crook2 = document.getElementById("Crook2");
crook2.style.backgroundImage = "url('IMGCrook/crookNeus1.jpg')";
var crook3 = document.getElementById("Crook3");
crook3.style.backgroundImage = "url('IMGCrook/crookMond1.jpg')";

crook1.addEventListener("click", function() {
    crook1.style.backgroundImage = "url('IMGCrook/crookOgen" + getCrook() + ".jpg')";
});
crook2.addEventListener("click", function() {
    crook2.style.backgroundImage = "url('IMGCrook/crookNeus" + getCrook() + ".jpg')";
});
crook3.addEventListener("click", function() {
    crook3.style.backgroundImage = "url('IMGCrook/crookMond" + getCrook() + ".jpg')";
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