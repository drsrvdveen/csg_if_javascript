var instructieTekst = "Inleiding objectnotatie (gebruik console)";

var piraat = {
 // attribuut
 x: 75,
 y: 50,
 sprite: null,

 // methode
 beweeg() {
    this.x += random(-5,5);
    this.y += random(-5,5);
 },
 teken() {
    image(this.sprite,this.x,this.y);
 }
};

function preload() {
  sprite = loadImage("../images/sprites/pirate.svg");
}

var piraatX = 75;
var piraatY = 50;

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  piraat.sprite = sprite;
  frameRate(2);
}

/*
function draw() {
    background('silver');
    piraatX += random(-5,5);
    piraatY += random(-5,5);    
    image(sprite,piraatX,piraatY);
}
*/


function draw() {
    piraat.beweeg();
    piraat.teken();
}