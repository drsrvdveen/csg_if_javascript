var instructieTekst = "Inleiding Array + Console";

var getallen = new Array(50,100,75);
var namen = new Array("Aap","Noot");
var leeg = [];

var teller = 0;

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
  namen.push('VIS');
  namen[2]='Mies';
  //noLoop();
}

function draw() {
    text("aantal elementen "+namen.length,10,30);
    teller++;
}