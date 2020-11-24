class Spel {
    constructor() {
        this.level = null;
        this.maxLevel = 50;
        this.actief = null;
        this.regels = null;
        this.levelGehaald = null;
        this.afgelopen = null;
        this.gewonnen = null;
        this.alfa = 0.5;
    }

    nieuwSpel() {
        this.level = 0;
        this.actief = false;
        this.gewonnen = false;
        this.afgelopen = false;
        this.regels = false;
        this.nieuwLevel();
    }

    nieuwLevel() {
        this.level++;
        this.levelGehaald = false;
        bol = new Bol(); 
        eiland = new Eiland();
    }

    update() {
        this.alfa += random(-3, 3) / 100;
        if (this.alfa <= 0 || this.alfa >= 1) {
            this.alfa = 0.8;
        }
    }

    tekenScorebord() {
        push();
        fill(0, 0, 0, .8);
        noStroke();
        textSize(20);
        var marge = 10;
        var hoogte = 50;
        rect(marge, canvas.height - marge - hoogte, 400, hoogte, 100);
        fill(255);
        text("Level " + this.level, marge, canvas.height - marge - hoogte, 400, hoogte, 100);
        pop();
    }

    beginScherm() {
        push();
        noStroke();
        fill('#ACECE5');
        ellipse(705,300,125);
        fill(0, 0, 0, 0.75);
        stroke(150, 200, 255, .7);
        strokeWeight(2);
        textSize(65);
        text("Zoek dit rondje:", 0, 0, canvas.width, canvas.height * 2 / 5);
        textSize(32);
        strokeWeight(2);
        fill(0, 0, 0, 0.75);
        text("In dit spel ben je op zoek naar het rondje hierboven.\n Kun jij binnen de tijd het juiste rondje vinden?\n\nDruk op enter om naar de spelregels te gaan.\n\n !FLASHWARNING!", 0, canvas.height * 1 / 2, canvas.width, canvas.height * 1 / 3);
        pop();
    }

    spelRegelScherm() {
        push();
        fill(0, 0, 0, 10);
        stroke(150, 200, 255, .7);
        strokeWeight(3);
        textSize(32);
        strokeWeight(2);
        fill(50, 50, 50, 100);
        text('Spelregels\n \n Het doel van het spel is om het goede rondje te vinden. Doordat er meerdere soorten rondjes in zitten is het moeilijk om het juiste rondje te vinden. \n Je beweegt met behulp van de pijltjes toetsen. Als je het juiste rondje geraakt hebt ben je door naar het volgende level. \n Het is spel is oneindig en je kunt niet af, wel steeds naar een verder level.\nDruk ENTER om naar level\n !FLASHWARNING!"' + (this.level) + ' te gaan.', 0, 0, canvas.width, canvas.height / 2);
        pop();
    }

    levelScherm() {
        push();
        fill(50, 80, 80, 0.5);
        stroke(150, 200, 255, 0.7);
        strokeWeight(3);
        text('Gefeliciteerd!\nJe hebt level ' + this.level + ' gehaald!\n\nDruk ENTER om naar level ' + (this.level + 1) + ' te gaan.', 0, 0, canvas.width, canvas.height / 2);
        pop();
    }

    eindScherm() {
        push();
        fill(10);
        stroke(100, 75, 50, 0.8);
        strokeWeight(3);
        text('Je bent tot level ' + (this.level) + ' gekomen.', 0, 0, canvas.width, canvas.height / 2);
        text('Druk SPATIE voor nieuw spel.', 0, 0, canvas.width, canvas.height);
        pop();
    }

    teken() {
        background('lightblue');
        if (!this.actief) {
            if (this.afgelopen) {
                this.eindScherm();

            }
            else {
                if (this.regels) {
                    this.spelRegelScherm();
                }
                else {
                    this.beginScherm();
                }
            }
            if (this.beginscherm) {
                this.spelRegelScherm();
            }
        }
        else {
            if (this.levelGehaald) {
                this.levelScherm();

            }
            else {
                this.tekenScorebord();

            }

        }
    }
}

class Timer {
    constructor(x, y, b, h, ag, tk, ak, tkl, verticaal, tekst) {
        this.beginTijd = null;
        this.ingesteldeTijd = null;
        this.t = null;
        this.resterendeTijd = null;
        this.verlopenTijd = null;
        this.x = x;
        this.y = y;
        this.b = b;
        this.h = h;
        this.achtergrond = ag;
        this.timerKleur = tk;
        this.alarmKleur = ak;
        this.tekstKleur = tkl;
        this.loopt = null;
        this.verticaal = verticaal;
        this.toonTekst = tekst;
    }

    stelIn(t) {
        this.t = t;
        this.ingesteldeTijd = this.t * 1000;
        this.resterendeTijd = this.ingesteldeTijd;
        this.verlopenTijd = 0;
        this.beginTijd = millis();
        this.loopt = false;
        this.alarm = false;
    }

    start() {
        this.loopt = true;
        if (this.alarm) {
            this.stelIn(this.t);
        }
        else {
            this.beginTijd = millis() - this.verlopenTijd;
        }
    }

    stop() {
        this.loopt = false;
        if (this.verlopenTijd = this.ingesteldeTijd) {
        if (this.afgelopen = true) {
            spel.eindscherm
        }

        }
    }

    reageer() {
        if (this.loopt) {
            this.stop();
        }
        else {
            this.start();
        }
    }
    
    verwerktTijd() {
        if (this.loopt) {
            this.resterendeTijd = this.ingesteldeTijd - (millis() - this.beginTijd);
            this.verlopenTijd = this.ingesteldeTijd - this.resterendeTijd;
            if (this.resterendeTijd <= 0) {
                this.resterendeTijd = 0;
                this.alarm = true;
                this.loopt = false;
            }
        }
    }

    teken() {
        this.verwerktTijd();
        push();
        var th = this.resterendeTijd / this.ingesteldeTijd * this.h;
        var tb = this.resterendeTijd / this.ingesteldeTijd * this.b;
        if (this.alarm && round(millis() / 100) % 10 <= 4) {
            fill(this.alarmKleur);
        }
        else {
            fill(this.achtergrond);
        }
        rect(this.x, this.y, this.b, this.h);
        fill(this.timerKleur);
        if (this.verticaal) {
            rect(this.x, this.y + (this.h - th), this.b, th);
        }
        else {
            rect(this.x + (this.b - tb), this.y, tb, this.h);
        }
        if (this.toonTekst && this.loopt) {
            textAlign(CENTER, CENTER);
            fill(this.tekstKleur);
            text(round(this.resterendeTijd / 100) / 10, this.x, this.y, this.b, this.h);
        }
        pop();
    }
}

class Bol {
    constructor() {
        this.x = 950;
        this.y = 500;
        this.kleur = 'blue';
        this.diameter = 100;
        this.snelheid = 5;
    }

    beweeg() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.snelheid;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.snelheid;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.snelheid;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.snelheid;
        }

        this.x = constrain(this.x, 50, canvas.width - 50);
        this.y = constrain(this.y, 50, canvas.height - 50);
    }
    teken() {
        fill('red');
        noStroke();
        ellipse(this.x, this.y, this.diameter); 
    }
}

var bol = new Bol();

class Eiland {
    constructor() {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.kleur = '#AFECE7';
        this.diameter = null;
    }

    teken() {
        noStroke();
        fill(this.kleur);
        ellipse(this.x, this.y, this.diameter);
        this.x = constrain(this.x, 50, canvas.width - 50);
        this.y = constrain(this.y, 50, canvas.height - 50);
   
    }
    
    wordtBezocht(bezoeker) {
        if (dist(this.x, this.y, bezoeker.x, bezoeker.y) <= (this.diameter + bezoeker.diameter) / 2) {
            this.kleur = 'pink';
            spel.levelGehaald = true;
        }
    }
}

var eiland = new Eiland();

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    colorMode(RGB, 255, 255, 255, 1);
    textFont("Monospace")
    textSize(44);
    textAlign(CENTER, CENTER);
    frameRate(60);
    spel = new Spel();
    spel.nieuwSpel();
    timer = new Timer(canvas.width * 1 / 3, 10, canvas.width / 3 - 10, 50, '#2F2F2F', 'salmon', 'red', 'yellow', false, true);
    timer.stelIn(10);
    eiland.diameter = random(50,200);
}


 function draw() {
    spel.update();
    spel.teken();
    if (spel.actief == true) {
        timer.teken();
        timer.start();
        bol.teken();
        eiland.teken();

        if (eiland.wordtbezocht == true) {
            spel.levelGehaald = true;
        }
        if (spel.levelGehaald == true) {
            timer.stop();
        }
    }
  
    eiland.wordtBezocht(bol);
    bol.beweeg();

    for (var n = 1;n <= 5;n++) {
    tekenRondje1(n);
    tekenRondje2(n);
    tekenRondje3(n);
    tekenRondje4(n);
    tekenRondje5(n);
    tekenRondje6(n);
    translate(200,0);
  }
} 

function tekenEiland() {
    if(spel.actief == true) {
        eiland.teken();
    }
}

function tekenRondje1() {
    if(spel.actief == true) {
  push();
  noStroke();
  fill('black');
  ellipse(random(0,1800),random(0,900),random(50,130));
  pop(); }
}

function tekenRondje2() {
    if(spel.actief == true) {
  push();
  noStroke();
  fill('blue');
  ellipse(random(0,1800),random(0,900),random(50,130));
  pop(); }
}

function tekenRondje3() {
    if(spel.actief == true) {
  push();
  noStroke();
  fill('#C2FAFF');
  ellipse(random(0,1800),random(0,900),random(50,130));
  pop(); }
}

function tekenRondje4() {
    if(spel.actief == true) {
  push();
  noStroke();
  fill('white');
  ellipse(random(0,1800),random(0,900),random(50,200));
  pop(); }
}

function tekenRondje5() {
    if(spel.actief == true) {
  push();
  noStroke();
  fill('#85F5FF');
  ellipse(random(0,1800),random(0,900),random(50,200));
  pop(); }
}

function tekenRondje6() {
    if(spel.actief == true) {
  push();
  noStroke();
  fill('#C5FCE3');
  ellipse(random(0,1800),random(0,900),random(50,200));
  pop(); }
}

function keyTyped() {
    if (!spel.actief && !spel.levelGehaald) {

        if (spel.regels) {
            spel.actief = true;
        }
        spel.regels = true;
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
        spel.nieuwLevel();
    }
    if ((spel.afgelopen) && keyCode == 32) {
        spel.nieuwSpel();
    }
}