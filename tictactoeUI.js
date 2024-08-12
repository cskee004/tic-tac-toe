const start = TicTacToe()
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", start.gameState, false);


/**
 * 
 * @param {*} event - 
 */
function TicTacToe(event) {

    //const startButton = document.querySelector(".start-button");
    const resetButton = document.querySelector(".reset-button");
    const gameButtons = document.querySelectorAll("#cell");

    //startButton.addEventListener("click", gameState, false);
    resetButton.addEventListener("click", gameReset, false);
    gameButtons.forEach(element => {
        element.addEventListener("click", boardInput, false);
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

        let currentGame = this.createGame;
        
        currentGame.playControl(row, col);
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
    function gameStart(event) {
        
        const playerOne = document.querySelector("#p1-name").value;
        const playerTwo = document.querySelector("#p2-name").value;
        console.log({playerOne});
        console.log({playerTwo});
        let game = this.createGame;
        turn = 0;     
    }

    function gameReset(event) {
        game = null;
        turn = 0;
    }

    return {
        createGame: function() {
            let game = Play();
            return game;
        },

        setGame: function(game) {
            this.game = game;
        }
    }

}










