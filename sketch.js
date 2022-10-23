let puntaje;

let pantalla2;
let pantalla = 1;

let bgCompound1;
let bgCompound2;
let bgCompound3;
let bgCompound4;
let bgCompound5;

let instructions;

let showInstructions;

let spriteGoodResult = [];

let level;
let matraz;

answerList = [];


  let sec = 0;
  let min = 5;
  let timer;

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
    frameRate(30);
    puntaje = 0;
    showInstructions = false;
    level = 0;



    bgCompound1 = loadImage("./img/Agua.png");
    bgCompound2 = loadImage("./img/Glicerina.png");
    bgCompound3 = loadImage("./img/Carbomero.png");
    bgCompound4 = loadImage("./img/Trietanolamina.png");
    bgCompound5 = loadImage("./img/Alcohol.png");
    instructions = loadImage("./img/cuadernoIns.png");
    //prueba = loadImage("./img/prueba.png");

    matraz = loadImage("./img/matraz.png");
    carbono = loadImage("./img/carbono.png");
    hidrogeno = loadImage("./img/hidrogeno.png");
    nitrogeno = loadImage("./img/nitrogeno.png");
    oxigeno = loadImage("./img/oxigeno.png");


}


function draw() {

    time();

    //console.log(timer);

    /*if (showInstructions == true){
                imageMode(CORNER);
                instructions.resize(1214, 683);
                image(instructions, 100, 100);
                //console.log(showInstructions);
    }else{
        imageMode(CORNER);
                instructions.resize(1214, 683);
                image(instructions, 100, 100);
    }*/

    

    switch (pantalla) {


        case 1:

            level = 1;
            imageMode(CORNER);
            background(bgCompound1);
            //if(answerList.length > 0){
            fill(0);
            text((getFormattedValue(answerList)), 246, 695);


            break;
        case 2:
            level = 2;
            imageMode(CORNER);
            background(bgCompound2);

            fill(0);
            text((getFormattedValue(answerList)), 246, 695);

            break;
        case 3:

            level = 3;
            imageMode(CORNER);
            background(bgCompound3);

            fill(0);
            text((getFormattedValue(answerList)), 246, 695);

            break;

        case 4:

            level = 4;
            imageMode(CORNER);
            background(bgCompound4);

            fill(0);
            text((getFormattedValue(answerList)), 246, 695);

            break;

        case 5:
            level = 5;
            imageMode(CORNER);
            background(bgCompound5);

            fill(0);
            text((getFormattedValue(answerList)), 246, 695);

            break;

        case 6:
                imageMode(CORNER);
                //background(bgCompound5);
                instructions.resize(1214, 683);
                image(instructions, 100, 50);
    
                //fill(0);
                //text((getFormattedValue(answerList)), 246, 695);
    
        break;
    }



}

function time() {

    if (frameCount % 30 == 0) {

        sec--;
    }

    if (sec == 0) {
        min--;
        sec = 59;
    }

    if (sec < 10) {
        timer = `${min}:0${sec}`
    } else {
        timer = `${min}:${sec}`
    }


    if (min == 0 && sec == 1) {
        //this.calcularPuntajePorTiempo();
        //this.nivel = 11;
    } 
}


function clearAnswerList() {
    answerList = [];
    image(spriteGoodResult[frameCount % 15], 200, 200, 400, 400);
}

function mousePressed() {
    saveScore(100);
    //changeLevel();

    if (mouseX > 801 && mouseX < 946 && mouseY > 664 && mouseY < 716) {
        //console.log("borrar");
        clearAnswerList();
    }

    if (mouseX > 1188 && mouseX < 1385 && mouseY > 384 && mouseY < 685) {
        checkUserAnswer();
        console.log(puntaje);

    }

    if (mouseX > 1267 && mouseX < 1381 && mouseY > 67 && mouseY < 160) {
        pantalla = 6;
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

        case 3:

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

        case 4:

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

        case 5:

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

            case 6:
                console.log(mouseX + "," + mouseY)
            if (mouseX > 196 && mouseX < 240 && mouseY > 117 && mouseY < 159) {
                //answerList.push('C');
                pantalla = level;
            }
            
            break;


    }

}

function checkUserAnswer() {
    switch (pantalla) {
        case 1:

            if (getFormattedValue(answerList) == 'H2O') {
                puntaje += 10;
                pantalla++;
            } else {
                puntaje -= 2;
            }
            clearAnswerList();

            break;
        case 2:

            if (getFormattedValue(answerList) == 'C3H8O3') {
                puntaje += 10;
                pantalla++;
            } else {
                puntaje -= 2;
            }
            clearAnswerList();

            break;

        case 3:

            if (getFormattedValue(answerList) == 'C3H8O3') {
                puntaje += 10;
                pantalla++;
            } else {
                puntaje -= 2;
            }
            clearAnswerList();

            break;

        case 4:

            if (getFormattedValue(answerList) == 'C6H15NO3') {
                puntaje += 10;
                pantalla++;
            } else {
                puntaje -= 2;
            }
            clearAnswerList();

            break;

        case 5:

            if (getFormattedValue(answerList) == 'C2H5NO3') {
                puntaje += 10;
                pantalla++;
            } else {
                puntaje -= 2;
            }
            clearAnswerList();

            break;


    }

}

function getFormattedValue(array) {
    const reduced = array.reduce((prev, current, index) => {
        if (index === 0) return current;
        if (array[index - 1] === current) {
            if (prev.charAt(prev.length - 1) === current) return prev + '2';

            const amount = parseInt(prev.charAt(prev.length - 1));
            const newVal = prev.slice(0, -1) + (amount + 1);
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