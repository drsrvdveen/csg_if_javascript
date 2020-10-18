var instructieTekst = "Inleiding objecten. Laat hier F12 console zien.";

function preload() {
  pl = loadImage("../images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
}

function draw() {
    image(pl,50,45);
    // text("breedte = "+pl.width,150,40);
}

/*
Opdracht maak 9 kevertjes op een rij van 50 breed
function draw() {
    for (var x = 0; x < 9;x++) {
        image(pl,50*x,45,50,50);
    }    
    text("breedte = "+pl.width,150,40);
}

*/