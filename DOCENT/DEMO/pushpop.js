var instructieTekst = "demo push en pop #stack";

function setup() {
    canvas = createCanvas(450,450);
    background('silver');
    canvas.parent('processing');
    fill('whitesmoke');    
}

function draw() {
    translate(45,10);
    rect(0,0,100,430);
    
    translate(130,0);
    // push();
    fill('salmon');
    noStroke();
    rect(0,0,100,430);
    // pop();

    translate(130,0);
    rect(0,0,100,430);
}