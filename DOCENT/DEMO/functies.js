var instructieTekst = "uitleg loop-functie";

var x = 450;

function setup() {
    canvas = createCanvas(450,450);    
    canvas.parent('processing');
    fill('whitesmoke');    
    // noLoop();
    // x = width;
}

function draw() {
    background('silver');
    fill('orange');
    ellipse(x,225,250);
    // x--;
}