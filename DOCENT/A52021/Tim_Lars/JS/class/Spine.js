
class Spine {
    constructor() {
        this.indiane = [];
        this.aantal = 10;
    }

    beginscherm() {
        liedje.stop();

        nieuwspel = true;
        gepakt = false;
        spelactief = false;
        levelgehaald = false;
        spelgewonen = false;
        background(startscherm);
        fill(0, 0, 0);
        textSize(140);
        image(titel, 300, 0, 1000, 750);
        fill(0, 0, 0);
        textSize(32);
        text("Het avontuur begint. Ontwijk de Indianen met gebruik van de pijltjestoetsen en bemachtig het artefact: \n\n Druk op enter om te beginen\n", 0, canvas.height * 1 / 2, canvas.width, canvas.height * 1 / 3);
        image(artifact, 900, 588, 50, 50)
        if (keyIsDown(ENTER)) {
            liedje.loop();
            nieuwspel = false;
            gepakt = false;
            healt = 10;
            level = 1;
            A1.X = 10;
            A1.Y = 450;
            spelactief = true;
        }
    }
    eindscherm() {
        spelactief = false;
        background(geld);
        textSize(140);
        text("Je hebt de schat veroverd!!", 0, 0, canvas.width, canvas.height * 2 / 3);
        fill(0, 0, 0);
        textSize(32);
        text("Gefeliciteerd je hebt gewonnen!! \n\n Druk op spatie om nog een keer te spelen.\n", 0, canvas.height * 1 / 2, canvas.width, canvas.height * 1 / 3);
        fill(0, 0, 0);
        if (keyIsDown(32)) {
            spelgewonen = false;
            nieuwspel = true;
            gepakt = false;
            healt = 30;
        }
    }


    loser() {
        spelactief = false;
        background(gepaktbg);
        textSize(140);
        fill(255, 255, 255);
        text("Je hebt verloren", 0, 0, canvas.width, canvas.height * 2 / 3);
        fill(255, 255, 255);
        textSize(32);
        text("Helaas, je bent gepakt. \n\n Druk op spatie om opnieuw te proberen!", 0, canvas.height * 1 / 2, canvas.width, canvas.height * 1 / 3);

        if (keyIsDown(32)) {
            nieuwspel = true;
            gepakt = false;
            spelactief = false;
            levelgehaald = false;
            spelgewonen = false;
        }

    }

    levelscherm() {
        if (level == 10) {
            spelgewonen = true;


        }
        else {
            spelactief = false;
            background(tussenscherm);
            fill(255, 255, 255);
            textSize(140);
            fill('red');
            text("LEVEL " + (level + 1), 0, 0, canvas.width, canvas.height * 2 / 3);
            fill(255, 255, 255);
            textSize(32);
            text("Je hebt level " + (level) + " gehaald en hiermee een leven verdiend! Succes met level " + (level + 1) + "\n\n Druk op enter om door te gaan\n", 0, canvas.height * 1 / 2, canvas.width, canvas.height * 1 / 3);
            if (keyIsDown(ENTER)) {
                A1.X = 10;
                A1.Y = 450;
                gepakt = false;
                level++;
                healt = healt + 10;
                levelgehaald = false;
                if (healt > 50) {
                    healt = 50;
                }
                spelactief = true;
            }
        }

    }

    level() {
       
        background(achtergrondlvl1);
        A1.teken();
        A1.beweeg();
        fill(255, 255, 255);
        text("level " + level, 75, 42);
        //gebruik deze regel om het preciese aantal healt te zien
        //text("healt=" + healt, 300, 42);

        aantal = level * 2 - 1;
        if (keyIsDown(RIGHT_ARROW)) {
            voetstappensnel.playMode('UntilDone');
            voetstappensnel.play();
        }
        if (keyIsDown(LEFT_ARROW)) {
            voetstappensnel.playMode('UntilDone');
            voetstappensnel.play();
        }
        if (keyIsDown(UP_ARROW)) {
            voetstappensnel.playMode('UntilDone');
            voetstappensnel.play();
        }
        if (keyIsDown(DOWN_ARROW)) {
            voetstappensnel.playMode('UntilDone');
            voetstappensnel.play();
        }


        image(artifact, 1500, 400, 100, 100);


        for (v = 0; v < aantal; v++) {
            indiane[v].teken();
            indiane[v].beweeg();
            indiane[v].gevangen(A1.X, A1.Y);

        }

        if (healt <= 14) {
            image(hartje, schermbreete - 300, 0, 100, 100);


        }
        if ((healt > 14) && (healt <= 24)) {
            image(hartje, schermbreete - 300, 0, 100, 100);
            image(hartje, schermbreete - 250, 0, 100, 100);
        }
        if ((healt > 24) && (healt <= 34)) {
            image(hartje, schermbreete - 300, 0, 100, 100);
            image(hartje, schermbreete - 250, 0, 100, 100);
            image(hartje, schermbreete - 200, 0, 100, 100);

        }

        if ((healt > 34) && (healt <= 44)) {
            image(hartje, schermbreete - 300, 0, 100, 100);
            image(hartje, schermbreete - 250, 0, 100, 100);
            image(hartje, schermbreete - 200, 0, 100, 100);
            image(hartje, schermbreete - 150, 0, 100, 100);

        }
        if ((healt > 44)) {
            image(hartje, schermbreete - 300, 0, 100, 100);
            image(hartje, schermbreete - 250, 0, 100, 100);
            image(hartje, schermbreete - 200, 0, 100, 100);
            image(hartje, schermbreete - 150, 0, 100, 100);
            image(hartje, schermbreete - 100, 0, 100, 100);
        }

        if (A1.X > 1425 && A1.Y < 600 - A1.hoogte && A1.Y > 400 - A1.hoogte) {
            levelgehaald = true;
            spelactief = false;

        }
    }
}