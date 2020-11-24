let fr = 5;


function preload() {
    PressStart2P = loadFont("assets/fonts/PressStart2P-Regular.ttf");

    mainMenuTheme = loadSound("assets/sounds/pacman_theme.mp3");
    belly = loadSound("assets/sounds/get_in_my_belly.wav");
    marioStar = loadSound("assets/sounds/mario_star_theme.wav");
    pwned = loadSound("assets/sounds/pwned.wav");
    nggyu8bit = loadSound("assets/sounds/NGGYU8bit.ogg");
    allStar = loadSound("assets/sounds/AllStar.ogg");
    tetris = loadSound("assets/sounds/tetris8bit.ogg");



    mainMenuBackground = loadImage("assets/backgrounds/background.jpg"); // https://wallpapercave.com/pacman-background
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    frameRate(fr);
    angleMode(DEGREES);
    canvas.parent('processing');


    gameSetup()
    //world.setupCollectables();


    //noLoop();
    }

function draw() {
    background('black')
    gameManager();

}
