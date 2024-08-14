
/**
 * The Play class is responsible for controlling the flow of the game. The input method receives coordinates
 * that indicate which of the nine cells was selected. If playControl receives an input, the turn order is first checked, 
 * and then the current player id and cell is passed to the Gameboard object.  
 * 
 * @return The winning players name or if a tie condition was met 
 */
function Play(xName, oName) {

    let board = Gameboard();
    const turnOrder = [true, false];
    
    return {
        /**
         * The input method receives (row, col) of the selected cell. The move 
         * is passed to the Gameboard class. 
         * 
         * @param {*} row - The selected cell row 
         * @param {*} col - The selected cell column 
         */
        playControl: function(row, col) {

            const r = row;
            const c = col;
            const cell = document.querySelector(`[data-rowIndex="${r}"][data-colIndex="${c}"]`);
            
            if (turnOrder[0] == true) {
                console.log(xName)
                let currentPlayer = board.markCell(row, col, 0);
                cell.innerHTML = "X";
                cell.setAttribute('id', "X");
                
                if (currentPlayer == 0) {
                    board = null;
                    return xName;
                }
                
                turnOrder[0] = false;
                turnOrder[1] = true;
            }
            else if (turnOrder[1] == true) {
                console.log(oName)
                let currentMove = board.markCell(row, col, 1);
                cell.innerHTML = "O"
                cell.setAttribute('id', "O");
                
                if (currentMove == 1) {
                    board = null;
                    return oName;
                    
                }
                else if(currentMove == -1) {
                    board = null;
                    return "Tie";
                }

                turnOrder[1] = false;
                turnOrder[0] = true;          
            }

            let tempBoard = board.getBoard();
            console.table(tempBoard);
        },
    }
}
//--------------------------------------------------------------------------->>
/**
 * The Gameboard class is responsible for marking the board when a game input is received. The board array represents a 
 * 3x3 matrix. The totalTurns variable is used to check for a game ending tie condition.  
 * @returns The board object
 * @returns The inputs id if the call to markBoard resulted in a winning contion or if the game ended in a tie. 
 * 
 */
function Gameboard() {
   
    let totalTurns = 0;
    let board = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];

    return {
        /**
         *  
         * @returns The current game board
         */
        getBoard: function() {
            return board
        },
        /**
         * The markCell method is responsible for keeping track of what cells have been selected, and
         * if a tie or winning condtion resulted from that given input. 
         * @param {*} row - The selected cell row
         * @param {*} col - The selected cell column
         * @param {*} id - id of player attached to chosen cell 
         * @returns id of player if winning condition is met
         * @returns -1 if the game ended in a tie
         */
        markCell: function(row, col, id) {
            board[row][col] = id;

            totalTurns++;
            if (totalTurns == 9) {
                console.log("Tie")
                return -1;
            }
            
            for (let i = 0; i < 3; i++) {
                if (board[0][i] == id && board[1][i] == id && board[2][i] == id) {
                    return id;
                }
                if (board[i][0] == id && board[i][1] == id && board[i][2] == id) {
                    return id;
                }
            }
            if (board[0][0] == id && board[1][1] == id && board[2][2] == id) {
                return id;
            }
            if (board[0][2] == id && board[1][1] == id && board[2][0] == id) {
                return id;
            }
            

        },
    }
}
//--------------------------------------------------------------------------->>
function Player(name, id) {
    
    return {
        playerName: name,
        playerId: id,
  
        getName: function() {
            return {playerName};
        }, 

        getId: function() {
            return {playerId};
        },
    }
}


