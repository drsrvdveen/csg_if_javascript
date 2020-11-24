class button {
    constructor(x,y,setting) {
    this.x = x;
    this.y = y;
    this.setting = setting; // 0 = start, 1 = options
    this.length = windowWidth/3;
    this.height = windowHeight/8;
    this.color = "lightblue";
    this.cornerAngle = 20;
    }

    drawButton() {
        fill(this.color);
        rectMode(CENTER);
        rect(this.x, this.y, this.length, this.height, this.cornerAngle);
        
        textFont(PressStart2P);
        textAlign(CENTER, CENTER)
        fill('black');
        textSize(50);
        if (this.setting == 0) text('Play', this.x, this.y);
        else text('Options', this.x, this.y);
    }

    buttonFuction() 
    {

        if (mouseX >= this.x - this.length/2 
            && mouseX <= this.x + this.length/2
            && mouseY >= this.y - this.height/2
            && mouseY <= this.y + this.height/2)
        {
            if (mouseIsPressed) {
                if (this.setting == 0)
                {
                    this.color = "pink";
                    gameState = 1; //gameManager.js 
                    
                }
                else this.color = "purple";
            }
        }
    }

    
}

function mainMenu() {
    
    var buttons = [];

    playButton =  new button(windowWidth/2, windowHeight * (3/6), 0);
    //optionsButton =  new button(windowWidth/2, windowHeight * (4/6), 1);

    background(mainMenuBackground);

    if (buttons.length == 0) 
    {
        buttons.push(playButton);
        //buttons.push(optionsButton);
    }

    for (var i = 0; i < buttons.length; i++)
    {
        buttons[i].buttonFuction();
        buttons[i].drawButton();

    }

    //----------------------------------------------------------------
    push();
    textSize(100);
    stroke('white');
    strokeWeight(8);
    text('Bal-men', windowWidth/2, windowHeight * 3/12);
    pop();
}