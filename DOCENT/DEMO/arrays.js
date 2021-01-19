var instructieTekst = "arrays en objecteigenschappen";

var hoogteLijst = new Array(312,78,192,425);

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
    fill('gold');
    noStroke();
    frameRate(5);
}

function draw() {
    background('silver');
    rect(0,0,90,312);
    translate(120,0);
}

/*
function draw() {
    background('silver');
    for (var i = 0;i < hoogteLijst.length;i++) {
        rect(0,0,90,hoogteLijst[i]);
        translate(120,0);
    }
}
*/

/*
    voeg aan eind toe:
    hoogteLijst.shift();
    hoogteLijst.push(random(10,440));
*/