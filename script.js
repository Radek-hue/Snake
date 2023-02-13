const snakeElement = [];
let food;
let snakeDirection = translatenumberToDirection(getRandomInt(0,3));
let gameOver = false;

createBoard();

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