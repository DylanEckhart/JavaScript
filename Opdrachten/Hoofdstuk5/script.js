// Create pictureHolders
pictures = document.getElementById("pictures");
createPictureHolders();
function createPictureHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "driverPicture";
        pictureHolder.id = "picture-holder" + i;
        pictures.appendChild(pictureHolder);
    }
}

