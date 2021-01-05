var instructieTekst = "uitleg functies";

function setup() {
    canvas = createCanvas(450,450);    
    canvas.parent('processing');
    fill('whitesmoke');    
}

function draw() {
    background('silver');
    tekenIets(mouseX);
    fill(0);
    text("invoer = "+mouseX+" uitvoer="+berekenIets(mouseX),25,25);
    textSize(25);
}

function tekenIets(invoer) {
    var schaal = invoer / width;
    push();
    translate(width/2,height/2);
    noStroke();
    fill('green');
    ellipse(0,0,schaal * width/2);
    fill('lightgreen');
    ellipse(0,0,schaal * width/3);
    pop();
}

function berekenIets(invoer) {
    var uitvoer = invoer*invoer - invoer;
    return uitvoer;
}