var collectableScorePosities = [];
var collectablePowerUpPosities = [];
var collectables = [];
var startTijd = null;
class collectable {
    constructor(x,y,t){
        this.x = x;
        this.y = y;
        this.diameter = null;
        this.diameterPowerUp = world.celGrootte;
        this.diameterScore = world.celGrootte/2.5;

        this.straal = this.diameter/2;
        this.color = 'white';
        this.character = 0;
        this.eaten = false;

        this.type = t; // 0 = powerUp 1 = score 
    }

    drawCollectable() {
        if (this.type == 0) {
            this.diameter = this.diameterPowerUp;
        }
        else {
            this.diameter = this.diameterScore;
        }

        if (this.eaten == false) {
            fill(this.color);
            noStroke();
            ellipse(this.x, this.y, this.diameter); 
        }    
    }

    eetCollectable() {
        
        if(!this.eaten){
            if (   this.x == this.character.x
                && this.y == this.character.y) {
                if (this.type == 0) {
                    this.character.powerUp = true;
                    startTijd = millis();
                    belly.play();
                    score+=50;
                }
                else {
                    score+=10;
                }
                this.eaten = true;
                collected+=1;
            }    
        }
        if (this.character.powerUp && this.eaten ) 
        {
            
            if ((millis() - startTijd) >= powerUpDuration*1000 )
            {
                this.character.powerUp = false;
            }
        
        }
        

    }

}

