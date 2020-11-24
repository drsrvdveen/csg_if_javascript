class bal
{
    constructor(d) {
    this.diameter = d;
    this.straal = this.diameter/2;
    this.kleur = 'yellow';

    this.x = world.wereld[445].x + world.celGrootte/2;
    this.y = world.wereld[445].y + world.celGrootte/2;
    this.locatie = 445;

    this.balMondBegin = -30; //begin hoek van mond, in graden
    this.balMondEinde = 30; // eind hoek van mond, in graden

    this.movement = 0; //0 Right 1 Down  2 Left  3 Up
    this.speed = 25;


    this.powerUp = false;
    }

    drawCharacter() {
        switch(this.movement) {
            case 0:
                this.balMondBegin = -30;
                this.balMondEinde = 30;
            break;
            case 1:
                this.balMondBegin = 60;
                this.balMondEinde = 120;
            break;
            case 2:
                this.balMondBegin = 150;
                this.balMondEinde = 210;
            break;
            case 3:
                this.balMondBegin = 240;
                this.balMondEinde = 300;
        }

        if (this.powerUp == true) {
            this.kleur = '#00ff00';
            if (!marioStar.isPlaying()){
            marioStar.loop();
            }

        }
        else {
            this.kleur = 'yellow';
            marioStar.stop();
        }
        fill(this.kleur);
        ellipse(this.x, this.y, this.diameter);
        noStroke();
        fill('black');
        arc(this.x, this.y, this.diameter+2, this.diameter, this.balMondBegin, this.balMondEinde);
        noStroke();
    }
    resetCharacter() {
        this.x = world.wereld[445].x + world.celGrootte/2;
        this.y = world.wereld[445].y + world.celGrootte/2;
        this.locatie = 445;
        this.powerUp = false;
        this.movement = 0;
    }

    controlCharacter(){
        switch(keyCode) {
            case 87:
                if(world.map[this.locatie-world.rij] != 0
                && world.map[this.locatie-world.rij] != 2
                && world.map[this.locatie-world.rij] != 6) {
                    this.movement = 3;
                }
            break;
            case 65:
                if(world.map[this.locatie-1] != 0
                && world.map[this.locatie-1] != 2
                && world.map[this.locatie-1] != 6) {
                    this.movement = 2;
                }
            break;
            case 68:
                if(world.map[this.locatie+1] != 0
                && world.map[this.locatie+1] != 2
                && world.map[this.locatie+1] != 6) {
                    this.movement = 0;
                }
            break;
            case 83:
                if(world.map[this.locatie+world.rij] != 0
                && world.map[this.locatie+world.rij] != 2
                && world.map[this.locatie+world.rij] != 6) {
                    this.movement = 1
                }
        }

       switch(this.movement) {
            case 0:
                if(world.map[this.locatie+1] != 0
                && world.map[this.locatie+1] != 2
                && world.map[this.locatie+1] != 6) {
                    this.x += this.speed;
                    this.locatie += 1;
                }


            break;
            case 1:
                if(world.map[this.locatie+world.rij] != 0
                && world.map[this.locatie+world.rij] != 2
                && world.map[this.locatie+world.rij] != 6) {
                    this.y += this.speed;
                    this.locatie += world.rij;
                }
            break;
            case 2:
                if(world.map[this.locatie-1] != 0
                && world.map[this.locatie-1] != 2
                && world.map[this.locatie-1] != 6) {
                    this.x -= this.speed;
                    this.locatie -= 1;
                }
            break;
            case 3:
                if(world.map[this.locatie-world.rij] != 0
                && world.map[this.locatie-world.rij] != 2
                && world.map[this.locatie-world.rij] != 6) {
                    this.y -= this.speed;
                    this.locatie -= world.rij;
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
}
