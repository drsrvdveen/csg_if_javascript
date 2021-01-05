var instructieTekst = "uitleg functies";

function setup() {
    canvas = createCanvas(450,450);    
    canvas.parent('processing');
    fill('whitesmoke');    
}

function draw() {
    background('silver');
    translate(width/4,height/4);
    tekenIets();  
}

function tekenIets() {
    push();
    noStroke();
    fill('green');
    ellipse(0,0,150);
    translate(0,40);
    fill('orange');
    ellipse(0,0,75);
    pop();
}