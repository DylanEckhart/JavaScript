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
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        driverFoto = document.createElement("IMG");
        driverFoto.src = "IMG/f" + (i + 1) + ".jpg";
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(driverFoto);
    }
}

