var positieSpoken = [];
var spoken = [];

class spook {
    constructor(k) {
        this.spookNummer = k;
        this.x = positieSpoken[this.spookNummer].x + world.celGrootte/2;
        this.y = positieSpoken[this.spookNummer].y + world.celGrootte/2;
        this.i = 0;
        this.enabled = false;
        this.dood = false;

        this.kleuren = ['red', 'pink', 'orange', 'blue', 'green', 'purple'];

        this.movement = 0; //0 Right 1 Down  2 Left  3 Up
        this.speed = world.celGrootte;
        this.locatie = 310;
        this.locatieOld = null;
        this.ongeldig = false;
        this.startFrame = frameCount;

        //this.afstand = s;
        //this.stapGroote = 50;
    }

    beweegSpook() {
        //this.movement = 2;
        /*if(world.map[this.locatie+1] != 0 
                && world.map[this.locatie+1] != 2 
                && world.map[this.locatie+1] != 6) {
                    this.x += this.speed;
                    this.locatie += 1;
        }*/
        if (world.map[this.locatie] == 7) {
            this.berekenKeuze();
        }
        switch(this.movement) {
            case 0:
                if(world.map[this.locatie+1] != 0 
                && world.map[this.locatie+1] != 2 
                && world.map[this.locatie+1] != 6) {
                    this.x += this.speed;
                    this.locatieOld = this.locatie;
                    this.locatie += 1;
                }
                else {
                    this.berekenKeuze();
                }

            break;
            case 1:
                if(world.map[this.locatie+world.rij] != 0 
                && world.map[this.locatie+world.rij] != 2 
                && world.map[this.locatie+world.rij] != 6) {
                    this.y += this.speed;
                    this.locatieOld = this.locatie;
                    this.locatie += world.rij;
                }
                else {
                    this.berekenKeuze();
                }
            break;
            case 2:
                if(world.map[this.locatie-1] != 0 
                && world.map[this.locatie-1] != 2 
                && world.map[this.locatie-1] != 6) {
                    this.x -= this.speed;
                    this.locatieOld = this.locatie;
                    this.locatie -= 1;
                }
                else {
                    this.berekenKeuze();
                }
            break;
            case 3: 
                if(world.map[this.locatie-world.rij] != 0 
                && world.map[this.locatie-world.rij] != 2
                && world.map[this.locatie-world.rij] != 6) {
                    this.y -= this.speed;
                    this.locatieOld = this.locatie;
                    this.locatie -= world.rij;
                }    
                else {
                    this.berekenKeuze();
                }   
            }

            if (this.locatie == 404 && this.movement == 0) {

                this.locatie -= world.rij - 2;
                this.x -= (world.rij-2)*world.celGrootte;
            }
            if (this.locatie == 378 && this.movement == 2) {
                this.locatie += world.rij - 2;
                this.x += (world.rij-2)*world.celGrootte;
            }
        }
    
    bevrijdSpook() {

        if (!this.enabled && !this.dood) {

            if((frameCount - this.startFrame)/fr >= 5*this.spookNummer) {
                this.locatie = 310;

                this.x = world.wereld[310].x + world.celGrootte/2;
                this.y = world.wereld[310].y + world.celGrootte/2;
                
                this.enabled = true;
            }
        }
        else if (this.dood) {
            if((frameCount - this.startFrame)/fr >= 3) {
                this.locatie = 310;

                this.x = world.wereld[310].x + world.celGrootte/2;
                this.y = world.wereld[310].y + world.celGrootte/2;
                this.dood = false;
                this.enabled = true;
            }
        }
    }
    spookDood() {
        this.x = positieSpoken[this.spookNummer].x + world.celGrootte/2;
        this.y = positieSpoken[this.spookNummer].y + world.celGrootte/2;
        this.enabled = false;
        this.dood = true;
        this.startFrame = frameCount;

    }

    spookReset() {
        this.x = positieSpoken[this.spookNummer].x + world.celGrootte/2;
        this.y = positieSpoken[this.spookNummer].y + world.celGrootte/2;
        this.enabled = false;
        this.startFrame = frameCount;
    }
    
    eetPacman() {
        if (this.pacmanCollision()) {
            if(character.powerUp) {
                this.spookDood();
                score+=120;
            }
            else {
                gameOver=true;
            }
        } 
    }
    pacmanCollision() {
        if (this.x == character.x
        &&  this.y == character.y) {
            return true;
        }

       else if (this.movement == 0 
            &&  character.movement == 2
            &&  character.locatie == this.locatieOld
            &&  this.y == character.y) {
            return true;
        }
        else if (this.movement == 2 
            &&  character.movement == 0
            &&  character.locatie == this.locatieOld
            &&  this.y == character.y) {
            return true;
        }
        else if (this.movement == 1 
            &&  character.movement == 3
            &&  character.locatie == this.locatieOld
            &&  this.x == character.x) {
            return true;
        }
        else if (this.movement == 3 
            &&  character.movement == 1
            &&  character.locatie == this.locatieOld
            &&  this.x == character.x) {
            return true;
        }
    }
    berekenKeuze() {
        if (ceil(random(100)) < iq || this.ongeldig) { //Logische keuze of random keuze
            if (ceil(random(100) < 50) && !this.ongeldig) { //Random keuze welke kant eerst (X of Y)
                if(character.x < this.x 
                && character.x != this.x
                && world.map[this.locatie-1] != 0 
                && world.map[this.locatie-1] != 2 
                && world.map[this.locatie-1] != 6) {
                    this.movement = 2;
                }
                else if (  character.x > this.x 
                        && character.x != this.x
                        && world.map[this.locatie+1] != 0 
                        && world.map[this.locatie+1] != 2 
                        && world.map[this.locatie+1] != 6) {
                    this.movement = 0;
                }
                else {
                    this.ongeldig = true;
                }
            }
            else {
                this.ongeldig = false;
                if(character.y > this.y 
                    && character.y != this.y
                    && world.map[this.locatie+world.rij] != 0 
                    && world.map[this.locatie+world.rij] != 2 
                    && world.map[this.locatie+world.rij] != 6) {
                    this.movement = 1;
                }
                else if (  character.y < this.y 
                        && character.y != this.y
                        && world.map[this.locatie-world.rij] != 0 
                        && world.map[this.locatie-world.rij] != 2
                        && world.map[this.locatie-world.rij] != 6) {
                    this.movement = 3;
                }
                else {
                    this.movement = round(random(3));
                }
            }
        }
        else {
            this.movement = round(random(3));
        }
    }

    tekenSpook() {
        push();
        stroke('black');
        fill(this.kleuren[this.spookNummer]);
        ellipse(this.x, this.y, 25);
        pop();
        push();
        ellipse(this.x - 7.5, this.y, 10);
        ellipse(this.x + 7.5, this.y, 10);
        ellipse(this.x, this.y + 7.5, 5);
        pop();
    }

    spook() {

        if(this.enabled){
            this.beweegSpook();
        }
        this.eetPacman();

        spoken[this.spookNummer].bevrijdSpook();

        this.tekenSpook();
    }
}
    

    

