var game = document.querySelector(".game");
var basket = document.querySelector(".basket");
var elements = document.querySelector(".elements");
var basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
var baskeBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));
const scoreContainer = document.getElementById('score');
const formuleContainer = document.getElementById('compounds');
const goalContainer = document.getElementById('goal');
const amountContainer = document.getElementById('amount');
const values = [100, 150, 200, 250];
const compounds = [
<<<<<<< HEAD
    {text: "H2O", value: 800},
=======
    {text: "H2O", value: 100},
>>>>>>> 182d1244d96a17873eca8f8ca3acb692044a6613
    {text: "C3H402", value: 1500},
    {text: "C2H5OH", value: 750}
];
const colorClasses = {
    H2O: "purple",
    C3H402: "orange",
    C2H5OH: "blue",
}
var currentCompound = 0;
var currentAmount = 0;
<<<<<<< HEAD
let score = parseInt(localStorage.getItem("score")) ;


//cambiar nivel
function changeLevel3() {
    window.location.href = '/nivel-3';
}

function saveScore(score) {
    localStorage.setItem("score", score);
}

=======
var score = 0;
>>>>>>> 182d1244d96a17873eca8f8ca3acb692044a6613

function updateDisplayedScore() {
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML = '' + score;
}

function updateDisplayCompounds() {
    formuleContainer.innerHTML = compounds[currentCompound].text;
}

function updateDisplayGoal() {
    goalContainer.innerHTML = compounds[currentCompound].value;
}

function updateDisplaAmount() {
    amountContainer.innerHTML = "" + currentAmount;
}

updateDisplayCompounds();
updateDisplayGoal();
updateDisplaAmount();

function moveBasketLeft(){
    if (basketLeft > 0) {
        basketLeft -= 15;
        basket.style.left = basketLeft + 'px';
    }

}

function moveBasketRight(){
    if (basketLeft < 0) {
        basketLeft += 15;
     basket.style.left = basketLeft + 'px';

    }
    basketLeft += 15;
    basket.style.left = basketLeft + 'px';

}

function control(e){
    if (e.key == "ArrowLeft") {
        moveBasketLeft();
    }
    if (e.key == "ArrowRight") {
        moveBasketRight();
    }
}

//contador de tiemp
var timeoutHandle;
function countdown(minutes, seconds) {
    function tick() {
        var counter = document.getElementById("timer");
        counter.innerHTML =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }
    }
    tick();
}
countdown(5, 10);


function generateElements() {
    const bottomLimit = 1500;
    var elementBottom = 1050;
    var elementLeft = Math.floor(Math.random() * game.clientWidth);
    var element = document.createElement('div');
    const value = values[Math.floor(Math.random() * values.length)];
    const selectedCompound = compounds[Math.floor(Math.random() * compounds.length)].text;
    element.innerHTML = `
        <p>${value}ml</p>
        <p>${selectedCompound}</p>
    `;
    element.style.setProperty('font-size', `${value/10}px`);
    element.classList.add("element", colorClasses[selectedCompound]);
    elements.appendChild(element);
    var fallInterval = setInterval(fallDownElement, 25)
    
 
    function fallDownElement(){
        //Jugador agarra elemento
        if (elementBottom < baskeBottom + 50 && elementBottom > baskeBottom && elementLeft > basketLeft - 30 && elementLeft < basketLeft + 80){
            elements.removeChild(element);
            clearInterval(fallInterval);

            if(selectedCompound === compounds[currentCompound].text) {
                currentAmount += value;
    
                if(currentAmount >= compounds[currentCompound].value) {
                    currentAmount = 0;
<<<<<<< HEAD
                    score += 20;
=======
                    score += 10;
>>>>>>> 182d1244d96a17873eca8f8ca3acb692044a6613

                    if(currentCompound < compounds.length - 1) {
                        currentCompound++;
                        updateDisplayCompounds();
                        updateDisplayGoal();
                    } else {
<<<<<<< HEAD
                        changeLevel3();
=======
                        //Gano
>>>>>>> 182d1244d96a17873eca8f8ca3acb692044a6613
                    }
                }

                updateDisplaAmount();
            } else {
                score -= 10;
                updateDisplayedScore();
            }
        }

        elementBottom -= 5;
        element.style.bottom = elementBottom + 'px';
        element.style.left = elementLeft + 'px';

        if(element.getBoundingClientRect().top > bottomLimit) {
            elements.removeChild(element);
            clearInterval(fallInterval);
        }
    }

    element.style.bottom = elementBottom + 'px';
<<<<<<< HEAD
    setTimeout(generateElements, 700)
=======
    setTimeout(generateElements, 200)
>>>>>>> 182d1244d96a17873eca8f8ca3acb692044a6613
}
generateElements();

document.addEventListener("keydown", control);