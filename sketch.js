let puntaje;

let pantalla2;
let pantalla = 1;

let bgCompound1;
let bgCompound2;
let bgCompound3;
let bgCompound4;
let bgCompound5;



let matraz;

answerList = [];

function changeLevel() {
    window.location.href = '/nivel-3';
}

function saveScore(score) {
    localStorage.setItem("score", score);
}

function setup() {
    createCanvas(1535, 742);
    imageMode(CENTER);
    rectMode(CENTER);
    textAlign(CENTER);

    bgCompound1 = loadImage("./img/Agua.png");
    bgCompound2 = loadImage("./img/Glicerina.png");
    bgCompound3 = loadImage("./img/Carbomero.png");
    bgCompound4 = loadImage("./img/Trietanolamina.png");
    bgCompound5 = loadImage("./img/Alcohol.png");
    //prueba = loadImage("./img/prueba.png");

    matraz = loadImage("./img/matraz.png");
    carbono = loadImage("./img/carbono.png");
    hidrogeno = loadImage("./img/hidrogeno.png");
    nitrogeno = loadImage("./img/nitrogeno.png");
    oxigeno = loadImage("./img/oxigeno.png");


}


function draw() {
    //background(220);
    switch (pantalla) {
        case 1:
            imageMode(CORNER);
            background(bgCompound1);
            //if(answerList.length > 0){
                fill(0);                
                text((getFormattedValue(answerList)),246, 695);


            break;
        case 2:

            bgCompound2.resize(1920, 1080);
            image(bgCompound2, 640, 370);

            break;
        case 3:
            bgCompound3.resize(1920, 1080);
            image(bgCompound3, 640, 370);
            break;

        case 4:
            bgCompound4.resize(1920, 1080);
            image(bgCompound4, 640, 370);
            break;

        case 5:
            bgCompound5.resize(1920, 1080);
            image(bgCompound5, 640, 370);
            break;
    }



}

function clearAnswerList(){
    answerList = [];
}

function mousePressed() {
    saveScore(100);
    //changeLevel();

    if (mouseX > 801 && mouseX < 946 && mouseY > 664 && mouseY < 716) {
        console.log("borrar");
        clearAnswerList();
    }

    switch (pantalla) {

        case 1:

            console.log(mouseX + "," + mouseY)

            if (mouseX > 101 && mouseX < 167 && mouseY > 410 && mouseY < 641) {
                answerList.push('C');
            }
            if (mouseX > 294 && mouseX < 359 && mouseY > 410 && mouseY < 641) {
                answerList.push('H');
            }
            if (mouseX > 485 && mouseX < 552 && mouseY > 410 && mouseY < 641) {
                answerList.push('N');
            }
            if (mouseX > 678 && mouseX < 744 && mouseY > 410 && mouseY < 641) {
                answerList.push('O');
            }


            break;
        case 2:
            console.log(mouseX + "," + mouseY)
            if (mouseX > 128 && mouseX < 198 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono C");
            }
            if (mouseX > 282 && mouseX < 348 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono H");
            }
            if (mouseX > 436 && mouseX < 501 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono N");
            }
            if (mouseX > 590 && mouseX < 655 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono O");
            }
            break;

        case 3:

            if (mouseX > 128 && mouseX < 198 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono C");
            }
            if (mouseX > 282 && mouseX < 348 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono H");
            }
            if (mouseX > 436 && mouseX < 501 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono N");
            }
            if (mouseX > 590 && mouseX < 655 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono O");
            }
            break;

        case 4:

            if (mouseX > 128 && mouseX < 198 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono C");
            }
            if (mouseX > 282 && mouseX < 348 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono H");
            }
            if (mouseX > 436 && mouseX < 501 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono N");
            }
            if (mouseX > 590 && mouseX < 655 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono O");
            }
            break;

        case 5:

            if (mouseX > 128 && mouseX < 198 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono C");
            }
            if (mouseX > 282 && mouseX < 348 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono H");
            }
            if (mouseX > 436 && mouseX < 501 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono N");
            }
            if (mouseX > 590 && mouseX < 655 && mouseY > 461 && mouseY < 692) {
                console.log("Selecciono O");
            }
            break;


    }

}

function checkUserAnswer(){
    switch (pantalla) {
        case 1:
           if (getFormattedValue(array) == 'H2O'){
            puntaje += 5;
           }
            break;
        case 2:

            break;

        case 3:

            break;

        case 4:

            break;

        case 5:

            break;


    }

}

function getFormattedValue(array) {
    const reduced = array.reduce((prev, current, index) => {
      if(index === 0) return current;
    
      if(array[index - 1] === current) {
        if(prev.charAt(prev.length - 1) === current) return prev + '2';
    
        const amount = parseInt(prev.charAt(prev.length - 1));
        const newVal = prev.slice(-1) + (amount + 1);
        return newVal;
      }
    
      return prev + current
    }, '');
  
    return reduced.toUpperCase();
  }

function mouseDragged() {


}

function mouseReleased() {


}