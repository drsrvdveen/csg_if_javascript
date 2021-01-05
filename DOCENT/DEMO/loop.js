var instructieTekst = "uitleg loop-functie";

var x = 450;

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    background('silver');
    // noLoop();
    // x = width;
}

function draw() {   
    fill('orange');
    ellipse(x,225,250);
    // x--;
}