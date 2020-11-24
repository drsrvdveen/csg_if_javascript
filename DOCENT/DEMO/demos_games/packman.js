
/*  **********************************************************
    **                 BEGIN klasse Auto                    **
    ********************************************************** */


class Auto {
  constructor(g) {
    this.schaal = 1;
    this.x = g * (1 - this.schaal)/2;
    this.y = g * (1 - this.schaal)/2;
    this.l = g * this.schaal;
    this.kleur = 'green';
    this.locatie = 0;
  }

  beweeg() {
    if (keyCode == LEFT_ARROW) {
        if (patroon[this.locatie-1] == 1) {
            this.x -= this.l;
            this.locatie -= 1;
        }
    }
    if (keyCode == RIGHT_ARROW) {
        if (patroon[this.locatie+1] == 1) {
            this.x += this.l;
            this.locatie += 1;
        }
    }
    if (keyCode == UP_ARROW) {
        if (patroon[this.locatie-14] == 1) {
            this.y -= this.l;
            this.locatie -= 14;
        }        
    }
    if (keyCode == DOWN_ARROW) {
        if (patroon[this.locatie+14] == 1) {
            this.y += this.l;
            this.locatie += 14;
        }        
    }
    keyCode = null;
    this.x = constrain(this.x,0,canvas.width);
    this.y = constrain(this.y,0,canvas.height - this.l);
  }

  teken() {
      push();
      noStroke();
      translate(this.x,this.y);
      fill(this.kleur);
      rect(0,0,this.l,this.l);
      fill(60);
      rect(this.l/5,0,this.l/5,this.l/10);
      rect(this.l*3/5,0,this.l/5,this.l/10);
      rect(this.l/5,this.l-this.l/10,this.l/5,this.l/10);
      rect(this.l*3/5,this.l-this.l/10,this.l/5,this.l/10);
      fill('yellow');
      text(this.locatie,this.l/2,this.l/2);
      pop();
  }

}
/*  **********************************************************
    **      EINDE klasse Auto         BEGIN klasse Cel      **
    ********************************************************** */


class Cel {
  constructor(x,y,l) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.kleur = 0;
  }

  wordtGeraakt(s) {
    if (s.x + s.l > this.x && s.x < this.x + this.l && s.y + s.l > this.y && s.y < this.y + this.l) {
      if (this.kleur == 0) {
        return true;
      }
    }
    return false;
  }

  teken() {
    push();
    fill(this.kleur);
    noStroke();
    rect(this.x,this.y,this.l,this.l);
    pop();
  }
}

/*  **********************************************************
    **      EINDE klasse Cel        BEGIN klasse Racer      **
    ********************************************************** */


class Racer {
  constructor(speler,patroon,grootte) {
    this.parcours = this.maakParcours(patroon,grootte);
    this.speler = speler;
    this.actief = false;
    this.afgelopen = false;
  }

  maakParcours(patroon,grootte) {
    var rooster = [];
    for (var rij = 0; rij < canvas.height / grootte; rij++) {
      for (var kolom = 0; kolom < canvas.width / grootte; kolom++) {
        rooster.push(new Cel(kolom*grootte,rij*grootte,grootte));
      }
    }
    for (var c = 0; c < rooster.length; c++) {
      if (patroon[c] == 1) {
        rooster[c].kleur = 255;
      }
    }
    return rooster;
  }

  beginScherm() {
    push();
    fill(0);
    text("Dit is een simpel Race-spel. Bestuur je auto met het touchscreen.\n\nBegin het spel door het scherm aan te raken.",0,0,canvas.width,canvas.height)
    pop();
  }

  eindScherm() {
    push();
    fill('yellow');
    stroke('red');
    strokeWeight(10);
    rect(canvas.width/7,canvas.height/3,canvas.width*5/7,canvas.height/3);
    fill(0);
    noStroke();
    if (spel.speler.x == canvas.width) {
      text("GEFELICITEERD!",0,0,canvas.width,canvas.height);
    }
    else {
      text("HELAAS: je bent AF.",0,0,canvas.width,canvas.height);
    }
    pop();
  }

  update() {
      
  }

  teken() {
    background(200);
    textSize(40);
    fill('white');
    if (!this.actief) {
      this.beginScherm();
    }
    else {
      for (var r = 0; r < this.parcours.length; r++) {
        this.parcours[r].teken();
      }
      this.speler.teken();
      if (this.afgelopen) {
        this.eindScherm();
      }
    }
  }
}

/*  **********************************************************
    **      EINDE klasse Racer     BEGIN hoofdprogramma     **
    ********************************************************** */


var rooster = [];
var patroon = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,
               1,1,0,1,1,1,0,0,0,0,1,1,1,0,
               1,1,1,1,0,1,0,1,1,1,1,0,1,0,
               0,0,0,0,0,1,0,1,1,0,0,1,1,0,
               0,1,1,1,0,1,0,1,1,0,0,1,0,0,
               0,1,0,1,1,1,0,1,1,1,0,1,0,0,
               0,1,0,0,0,0,0,0,0,1,0,1,1,1,
               0,1,1,1,1,1,1,1,1,1,0,1,1,0];

var grootte = 50;

function setup() {
  canvas = createCanvas(700,400);
  canvas.parent('processing');
  textFont("Monospace");
  textSize(20);
  textAlign(CENTER,CENTER);
  fill('black');
  frameRate(2);
  speler = new Auto(grootte);
  spel = new Racer(speler,patroon,grootte);
  spel.teken();
}

function draw() {
  speler.beweeg();
  spel.update();
  spel.teken();
}

function keyTyped() {
  if (!spel.actief) {
    spel.actief = true;
    spel.teken();
  }
  else {
    if (spel.afgelopen && keyCode == ENTER) {
      spel.nieuw();
      spel.teken();
    }
  }
}

/*  **********************************************************
    **               EINDE hoofdprogramma                   **
    ********************************************************** */