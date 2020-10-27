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

var ID1 = "";
var ID2 = "";

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
            testGame(this.id, this.className);
        });

        holder.src = "IMG/";
        pictureHolder[a].appendChild(holder);
    }
}

function testGame(id, klasse) {
    if (turn == false) {
        turn = true;

        switch (teller) {
            case 1:
                ID1 = id;
                speler1 = klasse;
                document.getElementById(ID1).src = "IMG/f" + ID1 + ".jpg";

                turn = false;
                teller++;
                break;

            case 2:
                ID2 = id;
                speler2 = klasse;

                if (speler1 == speler2) {
                    if (ID1 !== ID2) {
                        document.getElementById(ID2).src = "IMG/f" + ID2 + ".jpg";
                        goed++;
                        document.getElementById("goed").innerHTML = goed;
                        turn = false;
                    } else {
                        document.getElementById(ID2).src = "IMG/f" + ID2 + ".jpg";
                    }
                }


        }
    }
}





