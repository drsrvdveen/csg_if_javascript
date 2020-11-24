var gameState = 0; // 0 = mainMenu, 1 = playing

var score = 0;
var collected = 0; // aantal collectable gepakt

var maxSpoken = 2;
var aantalSpoken = 6;
var iq = 85; // percentage kans dat logische keuze wordt gekozen
var powerUpDuration = 10; // in seconden

var level = 1;

var floatTijd = 0; //Tijd onafgerond
var tijd = 0;
var tijdGameOver = 69; //Easter Egg

var gameOver = false;
var joke = false;

var win = false;
var finish = false;


function gameManager () {
        masterVolume(0.5);
    if (gameState == 0) {
        push();
        mainMenu();
        pop();
        mainMenuTheme.play();
        mainMenuTheme.setVolume(0.5);
        mainMenuTheme.playMode('untilDone');
    }

    else if (gameState == 1 && level != 4) {
        mainMenuTheme.stop();

        world.tekenWereld();

        if (!gameOver && !finish) {
            tetris.playMode('untilDone')
            tetris.play();
            pwned.stop();
            allStar.stop();
            nggyu8bit.stop();
            character.controlCharacter();
            character.drawCharacter();

            for(j=0; j<maxSpoken; j++) {
                spoken[j].spook();
            }

        }
        else {
            tetris.stop();
            marioStar.stop();
            if (finish) {
                allStar.playMode('untilDone');
                allStar.play();
            }
            else if (!joke) {
                pwned.playMode('untilDone');
                pwned.play();
            }
            else {
                nggyu8bit.playMode('untilDone');
                nggyu8bit.play();
            }

            if(mouseX > 9/16*windowWidth // restart knop
            && mouseY > 17/32*windowHeight
            && mouseX < 11/16*windowWidth
            && mouseY < windowHeight * 19/32
            && mouseIsPressed){
                if (finish) {
                  win = false;
                  finish = false;
                }

                if(joke) {
                  joke = false;
                }
                gameOver = false;
                level = 1;
                maxSpoken = 2;
                score = 0;
                floatTijd = 0;
                for (var i = 0; i < maxSpoken; i++) {
                    spoken[i].spookReset();
                }
                character.resetCharacter();
                collected = 0;
                for (var n = 0; n<collectables.length; n++) {
                    collectables[n].eaten = false;
                }

            }

        }
        if(collected == collectables.length) {
            win = true;
        }

        push();
        hud(score,level);
        pop();

        if (win) {
            if (level == 1) {
                win = false;
                gameOver = false;
                level = 2;
                maxSpoken = 4;
                for (var i = 0; i < maxSpoken; i++) {
                    spoken[i].spookReset();
                }
                character.resetCharacter()
                collected = 0;
                for (var n = 0; n<collectables.length; n++) {
                    collectables[n].eaten = false;
                }
            }
            else if (level == 2) {
                win = false;
                gameOver = false;
                level = 3;
                maxSpoken = 6;
                //score = 0;
                for (var i = 0; i < maxSpoken; i++) {
                    spoken[i].spookReset();
                }
                character.resetCharacter()
                collected = 0;
                for (var n = 0; n<collectables.length; n++) {
                    collectables[n].eaten = false;
                }
            }
            else {
                marioStar.stop();
                finish = true;
                levelCleared();

            }
        }

        timeManager();

        if (keyIsDown(70)) { //Druk op F om game over te gaan (Als joke)
            joke = true;
            gameOver = true;
        }

    }

}

function timeManager() {
    if(gameState == 1 && !gameOver && !finish) {
        floatTijd += 1/fr;
        tijd = floor(floatTijd);
    }
}

function gameSetup() {
    world = new Wereld(windowHeight/6);
    world.maakWereld();

    character = new bal(25);

    for(var u = 0; u < collectables.length; u++) {
        collectables[u].character = this.character;
    }

    for(s=0; s<aantalSpoken; s++) {
        ghost = new spook(s);
        spoken.push(ghost);
    }
}
