var instructieTekst = "afbeeldingen en eigenschappen van objecten";

var achtergrond,boy;

function preload() {
  achtergrond = loadImage("../images/toren.jpg");
  boy = loadImage("../images/sprites/flatboy/Idle(5).png");
}

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
}

function draw() {
  background(achtergrond); // background('red');
  image(boy,mouseX,mouseY,307,282); // welk_plaatje?,x,y

  fill(0);
  text("breedte="+boy.width+" en hoogte="+boy.height,5,15);
}



 /* 
  var schaalFactor = 3.5;
  breedte = boy.width / schaalFactor;
  hoogte = boy.height / schaalFactor;
  image(boy,0,0,breedte,hoogte);
}
*/
