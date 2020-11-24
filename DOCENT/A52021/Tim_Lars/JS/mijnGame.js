var v = 0;
var healt = 15;
var schermbreete = 1600;
var level = 1;
var aantal = 3;
var indiane = [];
var nieuwspel = true;
var afstand;
var levelgehaald = false;
var gepakt = false;
var spelgewonen = false;
var spelactief = false;



function preload() {
    avataruiterlijk = loadImage('images/indiana.png')
    indiaanuiterlijk = loadImage('images/indiaan.png')
    achtergrondlvl1 = loadImage('images/pixil-frame-0.png');
    startscherm = loadImage('images/startscherm.png');
    gepaktbg = loadImage('images/dood.png');
    geld = loadImage('images/stacks.png');
    tussenscherm = loadImage('images/tussenscherm.png')
    titel = loadImage('images/title.png');
    hartje = loadImage('images/hartje.png');
    liedje = loadSound('sounds/jones.mp3');
    artifact = loadImage('images/artifact.png')
    voetstappensnel = loadSound('sounds/voetstappensnel.mp3');
}

function setup() {
    createCanvas(schermbreete, 900);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER, CENTER);
    frameRate(50);

    A1 = new Avatar();
    A1.teken();
    A1.beweeg();
    spel = new Spine();
    spel.beginscherm();
    spel.loser();
    spel.levelscherm();



    for (var v = 0; v <= 50; v++) {
        indiane.push(new Indiaan())
    }
}


function draw() {



    if (spelgewonen == true) {
        spel.eindscherm();
    }
    if (nieuwspel == true) {
        spel.beginscherm();
    }

    if (gepakt == true) {
        spel.loser();
    }
    if (levelgehaald == true && level < 11) {
        spel.levelscherm();
    }
    if (spelactief == true) {
        spel.level();
    }
}