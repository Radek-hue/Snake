const snakeElements = [];
let food;
let snakeDirection = translatenumberToDirection(getRandomInt(0,3));
let gameOver = false;

createBoard();
initSnake();

function initSnake() {
    let xPosytion = getRandomInt(5, 15);
    let yPosytion = getRandomInt(5, 15);

    for (let i = 0; i < 3; i++) {
        if( snakeDirection === "up") yPosytion--;
        if( snakeDirection === "down") yPosytion++;
        if( snakeDirection === "left") xPosytion--;
        if( snakeDirection === "right") xPosytion++;

        


        const snakeElement = document.querySelector(`
        [data-x="${xPosytion}"][data-y="${yPosytion}"]`
        );
        snakeElements.unshift(snakeElement);
        snakeElement.classList.add('snake');
    }
    moveSnake();
    controlSnake();
}

function moveSnake() {
    let gameInterval = setInterval(function () {
        let nextY = snakeElements[0]["dataset"]["y"];
        let nextX = snakeElements[0]["dataset"]["x"];

        if( snakeDirection === "up") nextY--;
        if( snakeDirection === "down") nextY++;
        if( snakeDirection === "left") nextX--;
        if( snakeDirection === "right") nextX++;

        if (isGameover(nextX, nextY)) clearInterval(gameInterval);
        else{
            const nextSnakeElement= document.querySelector(`
            [data-x="${nextX}"][data-y="${nextY}"]`
            );
        
            snakeElements.unshift(nextSnakeElement)
            nextSnakeElement.classList.add("snake")
            snakeElements.pop().classList.remove("snake");
        }    
    }, 1000);
    
    
}

function controlSnake() {
    console.log('wywołuje sie ')
    document.addEventListener("keyup", function (e) {
        if (e.keyCode === 37) { 
            if(snakeDirection !== "right")   snakeDirection = "left";
            console.log('jebsie')
        }
        if (e.keyCode === 38) {
            if(snakeDirection !== "down")   snakeDirection = "up";
        }
        if (e.keyCode  === 39) {
            if(snakeDirection !== "left")   snakeDirection = "right";
        }    
        if (e.keyCode  === 40) {
            if(snakeDirection !== "up")   snakeDirection = "down";
        }    

    });
}

function isGameover(x, y) {
    if (x < 1 || x>20 || y<1 || y>20 || 
        snakeElements.some(({dataset}) => dataset.x == x && dataset.y == y ) 
        )  
            return true;
        else false
}

function createBoard() {
    const board = document.getElementById('root');
    board.className = "board";

    for (let j = 1; j<= 20; j++){
        for (let i = 1; i<= 20; i++){
            const div = document.createElement("div");
            div.className = 'board_element';
            div.dataset.y = j;
            div.dataset.x = i;

            board.appendChild(div);
        }
    }
}

function getRandomInt (min,max){
    return Math.floor(Math.random() *(max - min)) + min;
}

function translatenumberToDirection(number) {
    if (number === 0) return "up";
    if (number === 1) return "right";
    if (number === 2) return "down"
    if (number === 3) return "left"
}
// document.addEventListener('keyup', (e) => console.log(e))