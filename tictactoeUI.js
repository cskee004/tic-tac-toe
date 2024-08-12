const resetButton = document.querySelector(".reset-button");
const startButton = document.querySelector(".start-button");
resetButton.addEventListener("click", TicTacToe, false);
startButton.addEventListener("click", TicTacToe, false);

/**
 * 
 * 
 */
function TicTacToe(event) {
    
    let p1 = document.querySelector("#p1-name").value;
    let p2 = document.querySelector("#p2-name").value;
    document.getElementById("p1-name").value = '';
    document.getElementById("p2-name").value = '';
    console.log(p1, p2);

    let game = Play(p1, p2);
    let turn = 0;

    const gameButtons = document.querySelectorAll(".cell");
    gameButtons.forEach(element => {
        element.addEventListener("click", boardInput, false);
        element.setAttribute('id', "on");
    });
    //--------------------------------------------------------------------------->>
    /**
     * This function handles the game boards inputs. A turn variable is used to check if the input was an X or O move. 
     * After the input is passed to the game logic, that cell is removed from the node list of active cells. 
     * @param {*} event Represents the current player's selection choice. 
     */
    function boardInput(event) {
    
        const row = event.target.getAttribute("data-rowIndex");
        const col = event.target.getAttribute("data-colIndex");
        let results = game.playControl(row, col);
        turn++;

        if (results == "Game over") {
            console.log("Game over signal");
            // Prompt with results
            // Once clicked, reload page. 

        }
        
        for (let cell of gameButtons) {
            if (cell == event.target) {
                cell.removeEventListener("click", boardInput, false);
                event.target.setAttribute('id', "off");
                if (turn % 2 == 1) {
                    event.target.innerHTML = "X";
                }
                else {
                    event.target.innerHTML = "O";
                }
            }
        }
    }
}










