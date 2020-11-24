function hud(s,lvl) {
    var score = s;
    var level = lvl;

    fill('black');
    stroke('white');
    strokeWeight(8);
    textFont(PressStart2P);
    textAlign(CENTER,CENTER);
    textSize(30);
    if (!gameOver && !finish) {
        text('Time:' + tijd, windowWidth * 52/64, 1/2*windowHeight);
    }
    else {
        text('Time:' + tijdGameOver, windowWidth * 52/64, 1/2*windowHeight);
    }

    textAlign(LEFT, BOTTOM);
    text('Score: ' + score, world.x, world.y - 5);

    textAlign(RIGHT, BOTTOM);
    text('Level: ' + level, world.x + world.rij * world.celGrootte, world.y-5);

    textAlign(CENTER, CENTER);
    textSize(100);
    text('Bal-men', windowWidth/2, windowHeight * 1/14);


    textAlign(LEFT, TOP);
    textSize(30);
    text('Spelregels: ', windowWidth * 1/16, windowHeight * 1/8);

    textSize(15);
    text('- A = naar links', windowWidth * 1/16, windowHeight * 1/8 + 60);
    text('- W = naar boven ', windowWidth * 1/16, windowHeight * 1/8 + 90);
    text('- S = naar beneden ', windowWidth * 1/16, windowHeight * 1/8 + 120);
    text('- D = naar rechts ', windowWidth * 1/16, windowHeight * 1/8 + 150);
    text('- F = volgende level ', windowWidth * 1/16, windowHeight * 1/8 + 180);

    textSize(30);
    text('Doel: ', windowWidth * 1/16, windowHeight * 1/2);

    textSize(15);
    text('Eet alle balletjes op \nen haal een zo hoog \nmogelijke score.', windowWidth * 1/16, windowHeight * 1/2 + 60);

    textAlign(CENTER,CENTER);
    textSize(30);
    text('Power-up timer: ', windowWidth * 53/64, windowHeight * 1/2 + 90);

    if(character.powerUp) {
        var powerUp = round((powerUpDuration*1000 - (millis() - startTijd))/1000);

    }
    else {
        powerUp = "No Power up"
    }
    textAlign(CENTER,CENTER);
    text(powerUp, windowWidth * 13/16, windowHeight * 9/16 + 90);


    if (gameOver) {
        push();
        fill('brown');
        rect(windowWidth/4,windowHeight/3,windowWidth/2,2*windowHeight/6)
        textAlign(CENTER, CENTER);
        textSize(70);
        fill('black');
        text('Game Over!', windowWidth/2, windowHeight * 28/64);

        textSize(30);
        textAlign(LEFT, CENTER);
        text('Your score: ' + score, windowWidth * 9/32, windowHeight * 7/16 + 100);
        text('Your time: ' + tijd, windowWidth * 9/32, windowHeight/2 + 100);

        fill('gray');
        rect(9/16*windowWidth, 17/32*windowHeight, 1/8*windowWidth, windowHeight/16);
        fill('black');
        textAlign(CENTER,CENTER);
        text('Restart', 10/16*windowWidth, windowHeight * 18/32);


        pop();


    }




}

function levelCleared(){
    push();
        fill('lightgreen');
        stroke('white');
        strokeWeight(8);
        textFont(PressStart2P);
        rect(windowWidth/4,windowHeight/3,windowWidth/2,2*windowHeight/6)
        textAlign(CENTER, CENTER);
        textSize(62);
        fill('black');
        text('Congratulations', windowWidth/2, windowHeight * 7/16);

        textSize(30);
        textAlign(LEFT, CENTER);
        text('Your score: ' + score, windowWidth * 9/32, windowHeight * 7/16 + 100);
        text('Your time: ' + tijd, windowWidth * 9/32, windowHeight/2 + 100);

        fill('gray');
        rect(9/16*windowWidth, 17/32*windowHeight, 1/8*windowWidth, windowHeight/16);
        fill('black');
        textAlign(CENTER,CENTER);
        text('Restart', 5/8*windowWidth, windowHeight * 9/16);


        pop();
}
