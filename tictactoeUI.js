let game = Play();

let turn = 0;

const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const gameButtons = document.querySelectorAll("#cell");
//--------------------------------------------------------------------------->>
startButton.addEventListener("click", gameState, false);
resetButton.addEventListener("click", gameState, false);
gameButtons.forEach(element => {
    element.addEventListener("click", boardInput, false);
});
//--------------------------------------------------------------------------->>
/**
 * This function handles the game boards inputs. A turn variable is used to check if the input was an X or O move. 
 * After the input is passed to the game logic, that cell is removed from the active play area. 
 * @param {*} event Represents the current player's selection choice. 
 */
function boardInput(event) {
    
    let row = event.target.getAttribute("data-rowIndex");
    let col = event.target.getAttribute("data-colIndex");
    
    game.input(row, col);
    turn++;
    
    for (let cell of gameButtons) {
        if (cell == event.target) {
            cell.removeEventListener("click", boardInput, false);
            event.target.setAttribute('id', "off");
            if (turn % 2 == 1) {
                // X
                event.target.innerHTML = "X";
            }
            else {
                // O
                event.target.innerHTML = "O";
            }
        }
    }
}
//--------------------------------------------------------------------------->>
/**
 * 
 * @param {*} event Represents the start or reset button being clicked by the user.
 */
function gameState(event) {
    let state = event.target.getAttribute("class");

    if (state == "reset-button") {
        // reset 
    }
    else {
        // start game
    }
}
