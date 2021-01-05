function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    noStroke();
    background('silver');
}

function draw() {
    translate(0,width/2);
    for (var v = 0; v < 5; v++) {
        if (v == 2) {
            fill('blue')
        }
        else {
            fill('red');
        }
        rect(0,0,75,75);
        translate(95,0);
    }
}