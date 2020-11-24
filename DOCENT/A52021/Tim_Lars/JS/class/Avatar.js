class Avatar {
    constructor() {

        this.schermhoogte = 900;
        this.schermbreete = 1600;
        this.X = 100;
        this.Y = 100;
        this.hoogte = 150;
        this.breedte = 75;
        this.speed = 8;
    }
    teken() {
        fill("white");
        image(avataruiterlijk, this.X, this.Y, this.breedte, this.hoogte);
        this.X = constrain(this.X, 0, this.schermbreete - this.breedte);
        this.Y = constrain(this.Y, 0, this.schermhoogte - this.hoogte);

    }
    beweeg() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.X += this.speed;

        }
        if (keyIsDown(LEFT_ARROW)) {
            this.X += -this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.Y += -this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.Y += this.speed;
        }


    }
    voetstappen() {
        if (keyIsDown(RIGHT_ARROW || LEFT_ARROW || UP_ARROW || DOWN_ARROW) ){ 
            voetstappen.play();
        }
           
        }
        
    

}
