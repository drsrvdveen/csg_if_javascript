var level = 0;
var teller = 0;
var sprites = [];
var bommenteller = 0;
var gameover = false;
var gamestart = false;
var played = 0;
var levens = 3;
var kogelpositiex;
var kogelduur = 1;



function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent('processing');
    frameRate(60);

}

var level1 = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [100,500,400,300,400,1240,931,477,1075,1253,772,1237,1268,566,1292,1193,570,1295,1191,936,1398],
    [0,0,1700,0,200,0,0,0,0,700,0,800,0,0,0,0,500,0,1400,0,0],
    1.3,
    25,
]
var level2 = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,2,1,1,2,2],
    [904,802,986,672,1036,1091,364,1163,979,1067,825,493,856,820,340,1121,479,786,1064,318,781,1003,875,795,682,462,389,441,528,370],
    [1159,365,920,662,1058,456,646,651,350,853,1108,726,821,916,858,495,705,1140,691,953,672,735,812,496,620,1120,391,1009,836,433],
    1.3,
    34,
]
var level3 = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    [2,2,1,1,2,1,2,1,2,1,2,1,2,1,1,2,1,1,1,2,2,2,2,2,2,2,2,1,2,1],
    [100,500,800,300,400,1240,931,477,1075,1253,772,1237,1268,566,1292,1193,570,1295,1191,936,1398],
    [1092,625,1166,920,516,817,1000,864,1089,631,687,1068,355,1036,1142,475,301,502,616,1054,409,339,562,724,1172,989,820,751,326,823],
    1,
    34,
]
var levels = [0,level1,level2,level3];
var stap = 0;
var einde = 3;




class car {
    constructor() {
        this.x = 100;
        this.y = 550;
        this.height = 350;
        this.width = 350;
    }
    teken() {
        if(round(bommenteller/5,0) % 2){
            image(tank[0], this.x, this.y, this.width, this.height);
        }
        else{
            image(tank[1], this.x, this.y, this.width, this.height);
        }

    }
    movement() {
        if (keyIsDown(39)) {
            this.x += 10;
        }
        if (keyIsDown(37)) {
            this.x -= 10;
        }
        this.x = constrain(this.x, 150, 1000);
    }
}


class boom {
    constructor() {
        this.x = -500;
        this.y = 1300;
        this.animationstate = 0;
        this.x = -500;
        this.y = 1300;

    }
    teken() {
        tint(255, 255 - (this.animationstate * 1.39));
        image(sprites[0], this.x, this.y, 170, 350);
        noTint();
    }
    updatepositie() {
        this.x += 6;
        this.y -= 6;
        this.animationstate++;
        if (this.animationstate == 184) {
            bomen.shift();
        }
    }
}

class bom {
    constructor() {
        if(levels[level][1][stap] == 2){
           this.x = levels[level][3][stap];
        }
        else{
            this.x = levels[level][2][stap];
        }
            this.y = -300;
            this.time = levels[level][4];
            this.height = 80;
            this.width = 80;
            this.explosiewidth = 200;
    }
    teken() {
        image(bullet, this.x-this.width/2, this.y, this.width, this.height);
        stroke("red");
        //fill("#3b3010");
        fill(0,0,0,0);
        ellipse(this.x, canvas.height - 250, this.explosiewidth, 30);
        noStroke();
    }
    updatepositie() {
        this.y += ((canvas.height-250) / (this.time * 60));
    }
    explosiecheck() {
        if (this.y + 70 > canvas.height - 250) {
            bommen.shift();
            image(boem, this.x - this.width * 2, this.y - this.width * 2, this.width * 4, this.height * 4);
            knal.play();
            if (this.x + this.explosiewidth / 2 > waggi.x && this.x - this.explosiewidth / 2 < waggi.x + waggi.width) {
                gameover = true;
                levens--;
            }
        }
    }
}



class weg {
    constructor() {
        this.bomen = 1;
    }
    teken() {
        fill("#967c33");
        ellipse(canvas.width / 2, canvas.height, 3000, 1310);
        fill("#3b3010");
        quad(250, canvas.height, canvas.width - 50, canvas.height, canvas.width / 2 + 200, 500, canvas.width / 2 - 200, 500);
    }
}

class spel {
    constructor (){
        this.n = 0;
    }
    startscherm() {
        background(tankkapot);
        textSize(40);
        fill("white");
        text("Ontwijk de kogels",canvas.width/2-150,canvas.height/2-200);
        text("Gebruik ← → om te bewegen en zorg dat je niet geraakt wordt.",canvas.width/2-500,canvas.height/2-150);
        text("Druk op spatie om te beginnen",canvas.width/2-250,canvas.height/2-100);
        if (keyIsDown(32)) {
            level++;
            gamestart = true;
        }
        
    }
    gehaald(){
        if(level != 3){
        gamestart = false;
        background(tankkapot);
        textSize(40);
        fill("white");
        text("Geweldig!",canvas.width/2-150,canvas.height/2-200);
        text("Level " + level + " Gehaald!!",canvas.width/2-220,canvas.height/2-150);
        text("Druk op spatie om te verder te gaan",canvas.width/2-350,canvas.height/2-100);
        text("Je hebt nog " + levens + " leven(s) over",canvas.width/2-280,canvas.height/2-50);
        if (keyIsDown(32)) {
            gamestart = true;
            level++;
            stap = 0;
        }
        bommenteller = 0;
        teller = 0;
        bommen = [];
           }
        else{
        gamestart = false;
        background(tankkapot);
        textSize(40);
        fill("white");
        text("Geweldig!",canvas.width/2-150,canvas.height/2-200);
        text("Je hebt het spel uitgespeeld",canvas.width/2-270,canvas.height/2-150);
        text("Druk op spatie om opnieuw te spelen",canvas.width/2-350,canvas.height/2-100);
        text("en je hebt nog " + levens + " leven(s) over",canvas.width/2-320,canvas.height/2-50);
        if (keyIsDown(32)) {
            level = 1;
            gamestart = true;
            levens = 3;
            waggi.x = 100;
            waggi.y = 550;
            stap = 0;
            teller = 0;
            bommen = [];
        }
        bommenteller = 0;
        teller = 0;
        bommen = [];
        }
    }
    gefaald(){
        gamestart = false;
        background(tankkapot);
        textSize(40);
        fill("white");
        text("Jammer!",canvas.width/2-150,canvas.height/2-200);
        text("Volgende keer beter",canvas.width/2-220,canvas.height/2-150);
        text("Druk op spatie om opnieuw te spelen",canvas.width/2-350,canvas.height/2-100);
        if (keyIsDown(32)) {
            level = 1;
            gamestart = true;
            levens = 3;
            waggi.x = 100;
            waggi.y = 550;
            stap = 0;
            teller = 0;
            bommen = [];
        }
    }

}

var waggi = new car();
var achtergrond = new weg();
var bomen = [];
var bommen = [];
var game = new spel();
var kogels = 0;
var tank = [];

function preload() {
    //foto's laden
    sprites.push(loadImage("assets/boom.png"));
    tank.push(loadImage("assets/tank.png"));
    tank.push(loadImage("assets/tank1.png"));
    bullet = loadImage("assets/bullet.png");
    boem = loadImage("assets/boem.png");
    knal = loadSound("assets/knal.mp3");
    hart = loadImage("assets/hart.png");
    tankkapot = loadImage("assets/tankkapot.jpg");
    oorloggeluid = loadSound("assets/achtergrond.mp3");
    achtersjonk = loadImage("assets/background.jpg");
}

function draw() {
    if(played == 0){
       played = 1;
        oorloggeluid.play();
       }
    if(gamestart == false && level == 0){
            game.startscherm();
       }
    else if (level >= 1 && gamestart == true) {
        background(achtersjonk);
        teller++;
        achtergrond.teken();

        for (var x = 0; x < bomen.length; x++) {
            bomen[x].teken();
            bomen[x].updatepositie();
        }
        for (var x = 0; x < levens; x++) {
            image(hart,canvas.width-300+40*x, 30, 30,30);
        }
        if (teller == 150) {
            bomen.push(new boom());
            teller = 0;
        }
        waggi.teken();
        waggi.movement();
        for (var x = 0; x < bommen.length; x++) {
            bommen[x].teken();
            bommen[x].updatepositie();
            bommen[x].explosiecheck();
        }
    for (var x = 0; x < 3; x++) {
        if (round(bommenteller/60,1) == levels[level][0][stap]) {
            if(levels[level][1][stap] == 2){
                bommen.push(new bom());
                levels[level][1][stap]--;
            }
            bommen.push(new bom());
            stap++;
        }
    }
    if(bommenteller == levels[level][5]*60){
           game.gehaald();
            bommenteller = 0;
           }

        bommenteller++;
    }
    else{
        game.gehaald();
        stap = 0;
    }
    if(levens <= 0){
       game.gefaald();
    }
}

