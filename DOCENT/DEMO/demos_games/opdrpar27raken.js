var instructieTekst = "gebruik de piraat/cirkel van de vorige opdracht";

var piraat = {
 // attribuut
 x: 225,
 y: 225,
 kleur: 'navy',
 diameter: 75,

 // methode
 beweeg() {
     if(keyIsDown(DOWN_ARROW)) {
         this.y++;
     }
     if(keyIsDown(UP_ARROW)) {
         this.y--;
     }
     if(keyIsDown(LEFT_ARROW)) {
         this.x--;
     }
     if(keyIsDown(RIGHT_ARROW)) {
         this.x++;
     }               
 },
 teken() {
    fill(this.kleur);
    noStroke();
    ellipse(this.x,this.y,this.diameter);
 }
};

var eiland = {
 // attribuut
 x: null,
 y: 0,
 diameter: 200,
 kleur: null,

 // methode
 wordtBezocht(bezoeker) {
     if (dist(this.x,this.y,bezoeker.x,bezoeker.y) <= (this.diameter + bezoeker.diameter) / 2)
     {
         this.kleur = 'moccasin';
     }
     else {
         this.kleur = 'darkgreen';
     }
 },
 teken() {
    fill(this.kleur);
    noStroke();
    ellipse(this.x,this.y,this.diameter);
 }
};

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  eiland.x = canvas.width;
}

function draw() {
    background('steelblue');
    piraat.beweeg();
    eiland.wordtBezocht(piraat);
    eiland.teken();    
    piraat.teken();
}