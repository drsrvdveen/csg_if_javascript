class Cel {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.zijde = z;
        this.kleur = null;
        //this.character = character;
    }

    tekenCel() {
        push();
        fill(this.kleur);
        rect(this.x,this.y,this.zijde,this.zijde);
        stroke('black');
        pop();
    }

}

class Wereld {
    constructor(y) {
        this.rij = 27;
        this.kolom = 30;
        this.celGrootte = 25;
        this.x = (windowWidth/2 - (this.rij*this.celGrootte)/2);
        this.y = y;
        this.charX = null;
        this.charY = null;
        this.wereld = [];

        this.map = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,  //Map van http://projects.richardmiddleton.me/pacman/
                    0,1,1,1,1,1,7,1,1,1,1,1,1,0,1,1,1,1,1,1,7,1,1,1,1,1,0,
                    0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
                    0,4,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,4,0,
                    0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
                    0,7,1,1,1,1,7,1,1,7,1,1,7,1,7,1,1,7,1,1,7,1,1,1,1,7,0,
                    0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,
                    0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,
                    0,1,1,1,1,1,7,0,0,1,1,1,1,0,1,1,1,1,0,0,7,1,1,1,1,1,0,
                    0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,
                    0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,
                    0,0,0,0,0,0,1,0,0,1,1,1,7,1,7,1,1,1,0,0,1,0,0,0,0,0,0,
                    0,0,0,0,0,0,1,0,0,1,0,0,0,6,0,0,0,1,0,0,1,0,0,0,0,0,0,
                    0,0,0,0,0,0,1,0,0,1,0,0,2,2,2,0,0,1,0,0,1,0,0,0,0,0,0,
                    5,1,1,1,1,1,7,1,1,7,0,0,2,2,2,0,0,7,1,1,7,1,1,1,1,1,5,
                    0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,
                    0,0,0,0,0,0,1,0,0,7,1,1,1,3,1,1,1,7,0,0,1,0,0,0,0,0,0,
                    0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,
                    0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,
                    0,1,1,1,1,1,7,1,1,7,1,1,1,0,1,1,1,7,1,1,7,1,1,1,1,1,0,
                    0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
                    0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
                    0,4,1,1,0,0,7,1,1,7,1,1,7,1,7,1,1,7,1,1,7,0,0,1,1,4,0,
                    0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,
                    0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,
                    0,1,1,7,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,7,1,1,0,
                    0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,
                    0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,
                    0,1,1,1,1,1,1,1,1,1,1,1,7,1,7,1,1,1,1,1,1,1,1,1,1,1,0,
                    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    }

    maakWereld() {
        //var wereld = [];
        for (var kolom = 0; kolom < this.kolom; kolom++) {
            for (var rij = 0; rij < this.rij; rij++) {
                this.wereld.push(new Cel(rij*this.celGrootte + this.x, kolom*this.celGrootte + this.y, this.celGrootte));
            }
        }

        for (var w=0; w < this.wereld.length; w++) {
            if (this.map[w] == 0) {
                this.wereld[w].kleur = 'blue';
            }

            if (this.map[w] == 1 || this.map[w] == 7)
            {
                this.wereld[w].kleur = 'black';
                collectableScorePosities.push(world.wereld[w]);
                collectables.push(new collectable(this.wereld[w].x + this.celGrootte/2, this.wereld[w].y + this.celGrootte/2,  1));
            }

            if (this.map[w] == 2 || this.map[w] == 3 ||this.map[w] == 5) {
                this.wereld[w].kleur = 'black';

                if (this.map[w] == 2) {
                    positieSpoken.push(world.wereld[w]);
                }
            }
            if (this.map[w] == 4) {
                this.wereld[w].kleur = 'black';
                collectablePowerUpPosities.push(world.wereld[w]);
                collectables.push(new collectable(this.wereld[w].x + this.celGrootte/2, this.wereld[w].y + this.celGrootte/2,  0));
            }
            if (this.map[w] == 5) {
                this.wereld[w].kleur = 'green';
            }
            if (this.map[w] == 6) {
                this.wereld[w].kleur = 255,255,255,0.2;
            }
        }
        //ellipse(this.wereld[28], )
       // return wereld;
    }

    tekenWereld() {
        for (var r = 0; r < this.wereld.length; r++) {
            this.wereld[r].tekenCel();

        }

        for (var q = 0; q < collectables.length ; q++)
        {
            collectables[q].eetCollectable();
            collectables[q].drawCollectable();
        }
        /*push()
        stroke('white');
        strokeWeight(2);
        line(this.wereld[1].x + this.celGrootte/2, this.wereld[1].y + this.celGrootte/2, character.x, character.y);
        pop();*/
    }

    /*setupCollectables() {
        for (var o = 0; o < collectableScorePosities.length; o++) {
            collectables.push(new collectable(this.wereld[o].x + this.celGrootte/2, this.wereld[o].y + this.celGrootte/2, character, 1));
        }

        for (var p = 0; p < collectableScorePosities.length; p++) {
            collectables.push(new collectable(this.wereld[p].x + this.celGrootte/2, this.wereld[p].y + this.celGrootte/2, character, 0));
        }

    }*/

}
