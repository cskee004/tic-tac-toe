let game = playGame();

const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const gameButtons = document.querySelectorAll("#cell");

startButton.addEventListener("click", gameState, false);
resetButton.addEventListener("click", gameState, false);
gameButtons.forEach(element => {
    element.addEventListener("click", boardInput, false);
});

function boardInput(event) {
    
    let row = event.target.getAttribute("data-rowIndex");
    let col = event.target.getAttribute("data-colIndex");
    
    game.input(row, col);
    
    for (let cell of gameButtons) {
        if (cell == event.target) {
            cell.removeEventListener("click", boardInput, false);
        }
    }
}

function gameState(event) {
    let state = event.target.getAttribute("class");

    if (state == "reset-button") {
        // reset 
    }
    else {
        // start game
    }
}
