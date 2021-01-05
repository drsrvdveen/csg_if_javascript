var instructieTekst = "uitleg if-else en dubbele voorwaarden";

function setup() {
    canvas = createCanvas(450,450);    
    canvas.parent('processing');
}

function draw() {
    background('silver');
    // if (mouseX > width*7/8 || mouseX < width*1/8) {
    if (mouseX > width/2) {
        background('gold'); // of mouseX / 2
    }
    /*
    else {
        background(mouseX/2);
    }
    */
    fill(0);
    rect(mouseX - 10,height/2 - 5,20,10);
}