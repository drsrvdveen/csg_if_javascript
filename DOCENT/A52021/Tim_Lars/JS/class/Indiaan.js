class Indiaan {
    constructor() {
        this.schermhoogte = 900;
        this.schermbreete = 1600;
        this.X = random(350, this.schermbreete);
        this.Y = random(0, this.schermhoogte);
        this.hoogte = 125;
        this.breedte = 100;
        this.speed = 10;
        this.afstand;
        this.variabel5 = 0;
        this.gepakt;
    }
    teken() {
        image (indiaanuiterlijk, this.X, this.Y, this.breedte, this.hoogte);
        this.X = constrain(this.X, 150, this.schermbreete - this.breedte*2);
        this.Y = constrain(this.Y, 0, this.schermhoogte - this.hoogte);

    }
    beweeg() {
        if (this.variabel5 == 0) {
            this.variabel1 = random(-8, 0);
            this.variabel2 = random(0, 8);
            this.variabel3 = random(-15, 0);
            this.variabel4 = random(0, 15);
        }
        this.X += random(this.variabel1, this.variabel2);
        this.Y += random(this.variabel3, this.variabel4);

        this.variabel5++;
        if (this.variabel5 == 20) { this.variabel5 = 0; }
    }


    gevangen(x, y) {
        this.afstandgepakt = dist(x + 50, y + 60, this.X + 25, this.Y + 50);

        if (this.afstandgepakt <= 80) {
            healt--;
            if (healt <= 0) { gepakt = true; }
        }

    }
}
