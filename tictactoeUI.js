const game = TicTacToe();
const resetButton = document.querySelector(".reset-button");
const startButton = document.querySelector(".start-button");
resetButton.addEventListener("click", game.resetGame, false);
startButton.addEventListener("click", TicTacToe, false);
/**
 * 
 * 
 */
function TicTacToe() {

    let xName = document.querySelector("#p1-name").value;
    let oName = document.querySelector("#p2-name").value;
    document.getElementById("p1-name").value = '';
    document.getElementById("p2-name").value = '';
    
    let game = Play(xName, oName);
    let turn = 0;
    
    const gameResults = document.querySelector(".game-updates");
    gameResults.innerHTML = "";
    const gameButtons = document.querySelectorAll(".cell");
    gameButtons.forEach(cell => {
        cell.addEventListener("click", boardInput, false);
        cell.setAttribute('id', "inactive");
        cell.innerHTML = "";
    });
    //--------------------------------------------------------------------------->>
    /**
     * This function handles the users interactions with the gameboard. A turn variable is used to check if it was a player one or player two input. 
     * The results from the input are returned and then checked for a game ending condition.
     * @param {*} event Represents what cell was selected. 
     */
    function boardInput(event) {
        
        const gameResults = document.querySelector(".game-updates");
        const row = event.target.getAttribute("data-rowIndex");
        const col = event.target.getAttribute("data-colIndex");
        let results = game.playControl(row, col);

        
        if (results == xName || results == oName) {
            gameResults.setAttribute('id', "game-over");
            gameResults.innerHTML = `Congratualtions ${results.toUpperCase()}, you are a winner!`;
            for (const cell of gameButtons) {
                cell.removeEventListener("click", boardInput, false);
                cell.setAttribute('id', "cell-off")
            }
        }
        
        turn++;
        if (turn == 9) {
            for (const cell of gameButtons) {
                cell.removeEventListener("click", boardInput, false);
            }
            gameResults.setAttribute('id', "game-over");
            gameResults.innerHTML = `Tie`;
        }
        
        for (let cell of gameButtons) {
            if (cell == event.target) {
                cell.removeEventListener("click", boardInput, false);
            }
        }
    }

    return {
        /**
         * This method clears any contents from the last game.
         */
        resetGame: function() {
            const gameBoard = document.querySelector(".game-board");
            gameBoard.setAttribute('id', "deactive");
            for(const cell of gameButtons) {
                cell.innerHTML = "";
                cell.setAttribute('id', "cell-off")
            }
        },
    }
}