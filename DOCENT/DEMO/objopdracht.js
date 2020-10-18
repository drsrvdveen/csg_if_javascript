var instructieTekst = "oefenopdracht";

var piraat = {
 // attribuut
 x: 225,
 y: 225,
 diameter: 100,

 // methode
 beweeg() {
     if(keyIsDown(DOWN_ARROW)) {
         this.y++;
     }
     if(keyIsDown(UP_ARROW)) {
         this.y--;
     }
     if(keyIsDown(LEFT_ARROW)) {
         this.x--;
     }
     if(keyIsDown(RIGHT_ARROW)) {
         this.x++;
     }               
 },
 teken() {
    fill('red');
    noStroke();
    ellipse(this.x,this.y,this.diameter);
    //ellipse(40,180,360,300);
 }
};

var piraatX = 75;
var piraatY = 50;

function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
}

function draw() {
    background(200);
    piraat.beweeg();
    piraat.teken();
}