var instructieTekst = "demo parameter, argument, variabele";

function setup() {
    canvas = createCanvas(450,450);
    background('silver');
    canvas.parent('processing');
    noLoop();
    noStroke();
}

var afstand = 150;

function draw() {
    fill('indianred');
    triangle(afstand,0,2*afstand,2*afstand,0,2*afstand);
    fill('silver');
    translate(afstand/2,afstand);
    rect(0,0,afstand,afstand);
    
}

/*
    triangle(afstand,0,2*afstand,2*afstand,0,2*afstand);
    fill('silver');
    translate(afstand/2,afstand);
    rect(0,0,afstand,afstand);
*/