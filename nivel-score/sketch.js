let bg;
let score = parseInt(localStorage.getItem("score")) ;

function setup() {

    createCanvas(1535, 742);
    bg = loadImage("final.png");
    bg.resize(1535, 742);
}

function draw() {

    imageMode(CORNER);
    /*bg.resize(1535, 742);
    image(bg, 500, 800);*/
    background(bg);

    fill(0);
    textSize(24);
    textStyle(BOLD);
    text('Tu puntuación final fue: ' +score, 700, 410);
    console.log(score);
    
}