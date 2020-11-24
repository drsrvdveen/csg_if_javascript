var instructieTekst = "Inleiding van object naar klasse";

class Piraat {
    // attributen
    constructor() {
        this.x = random(25,100);
        this.y = random(25,100);
        this.sprite = null;
    }

    //methodes
    beweeg() {
        this.x += random(-5,5);
        this.y += random(-5,5);
    }
    teken() {
        image(this.sprite,this.x,this.y);
    }
}

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
  pirate = loadImage("../images/sprites/pirate.svg");
  ninja = loadImage("../images/sprites/ninja.png");
}

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  piraat.sprite = pirate;
  frameRate(10);
}

function draw() {
    background(255);
    piraat.beweeg();
    piraat.teken();
}