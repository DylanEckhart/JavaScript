memoryGame = document.getElementById("memory-game");
var pictures = [1,2,3,4,5,6,7,8,9,12,22,32,42,52,62,72,82,92];

for (var a = 0; a < pictures.length; a++) {
    var randomCard = Math.floor(Math.random() * 18 + 1);
    var templates = pictures[a];
    pictures[a] = pictures[randomCard];
    pictures[randomCard] = templates;
}

var aanzet = false;
var speler1 = "";
var speler2 = "";

var fotoId = "";

var goed = 0;
var fout = 0;
var teller = 1;

PictureCreate();
PictureHolder();

function PictureHolder() {
    for (var a = 0; a < 18; a++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder"
        pictureHolder.id = "pictureHolder" + a;

        memoryGame.appendChild(pictureHolder);
    }
}

function PictureCreate() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (var a = 0; a < 18; a++) {
        holder = document.createElement("IMG");
        holder.id = "driver" + pictures[a];

        if (pictures[a] < 9) {
            pictures[a] = 2 + pictures[a] * 9;
        }

        holder.className = "holder" + pictures[a];
        holder.addEventListener("click", function () {
            (this.id, this.className);
        });

        holder.src = "IMG/";
        pictureHolder[a].appendChild(holder);
    }
}

function testGame(id, klasse) {
    if (turn == false) {
        turn = true;

        switch (teller) {


        }
    }
}





