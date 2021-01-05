var instructieTekst = "uitleg randomfunctie";

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    background('silver');
    noStroke();
    frameRate(8);
}

var teller = 0;

function draw() {
    if (mouseIsPressed) {
        tekenVormOpWillekeurigePlek();
    }
}

function tekenVormOpWillekeurigePlek() {
    var diameter = 100;
    var x = random(0,width);
    var y = random(0,height);

    // hieronder wordt de vorm echt getekend
    push();
    fill('palegoldenrod');    
    ellipse(x,y,diameter);
    fill('thistle');
    rect(x-diameter/2,y-diameter/2,diameter/2,diameter/2);
    fill('lavender');
    rect(x,y,diameter/2,diameter/2);
    pop();
}




/*
function tekenVormOpWillekeurigePlek() {
    push();
    fill('palegoldenrod');
    var diameter = 100;
    var diameter = random(10,150);
    var x = random(diameter/2,width-diameter/2);
    var y = random(diameter/2,width-diameter/2);
    ellipse(x,y,diameter);
    fill('thistle');
    rect(x-diameter/2,y-diameter/2,diameter/2,diameter/2);
    fill('lavender');
    rect(x,y,diameter/2,diameter/2);
    pop();
}
*/