// Invocations
pictures = document.getElementById("pictures");
createPictureHolders();
createDriverPictures();

// Create pictureHolders
function createPictureHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "driverPicture";
        pictureHolder.id = "picture-holder-" + i;
        pictures.appendChild(pictureHolder);
    }
}

// Plaatjes in pictureHolders zetten
function createDriverPictures() {
    pictureHolders = document.getElementsByClassName("driverPicture");
    for (var i = 0; 9 < pictureHolders.length; i++) {
        driverFoto = document.createElement("img");
        driverFoto.src = "url('IMG/f" + (i + 1) + ".jpg')";
        pictureHolders[i].appendChild(driverFoto);
    }
}

