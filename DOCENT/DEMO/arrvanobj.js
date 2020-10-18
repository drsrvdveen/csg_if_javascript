var instructieTekst = "druppelende kraan + Console";

class Kraan {
    // attributen
    constructor() {
        this.amplitude = canvas.width / 3;
        this.freq = 500;
        this.b = 35;
        this.x = -this.b / 2 + canvas.width / 2;        
        this.y = 5;
        this.druppels = [];
    }

    //methodes
    beweeg() {
        this.x = -this.b / 2 + canvas.width / 2 + (this.amplitude - this.b / 2)*sin(2*3.1415*this.freq*frameCount);
    }
    stroom() {
        this.druppels.push(new Druppel(this.x + this.b / 2,this.y));
    }
    teken() {
        push();
        noStroke();
        for (var d = 0; d < this.druppels.length; d++) {
            this.druppels[d].val();
            this.druppels[d].teken();
        }
        fill('black');
        rect(this.x,this.y,this.b,this.b);        
        pop();
    }
}

class Druppel {
    // attributen
    // constructor() {
    constructor(xPositieKraan,yPositieKraan) {
        this.straal = 15;
        // this.x = random(this.straal,canvas.width - this.straal);
        this.x = xPositieKraan;
        // this.y = -1*this.straal;
        this.y = yPositieKraan + this.straal;
        this.snelheid = 0;
    }

    //methodes
    val() {
        this.snelheid += 0.0981;
        this.y += this.snelheid;
    }
    teken() {
        push();
        noStroke();
        fill('slategrey');
        ellipse(this.x,this.y,2*this.straal);
        pop();
    }
}

function setup() {
    canvas = createCanvas(450,450);
    textSize(30);
    canvas.parent('processing');
    k1 = new Kraan();
    frameRate(30);
}

function draw() {
    background('silver');
    /*
    regen.push(new Druppel());
    for (var d = 0; d < regen.length; d++) {
        regen[d].val();
        regen[d].teken();
    }
    */
    k1.beweeg();
    if (frameCount % 8 == 0) {
        k1.stroom();
    }
    k1.teken();
}