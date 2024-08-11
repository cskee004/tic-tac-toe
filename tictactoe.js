
//--------------------------------------------------------------------------->>
/**
 * The Play class is responsible for controlling the flow of the game. The input method receives coordinates
 * that indicate which of the nine cells was selected. The inputs represent a game button or one of the nine cells that make up the play area. 
 * If playControl receives an input, the turn order is first checked, and then the current player id and cell s sent to Gameboard. 
 * 
 * @return some generic game ending message 
 */
function Play() {

    let board = Gameboard();
    const playerX = Player("Player X name", 0);
    const playerO = Player("Player O name", 1);
    let turnOrder = [true, false];

    return {
        /**
         * The input method receives (row, col) of the selected cell. The move 
         * is passed to the Gameboard class. 
         * If the players id is returned from markBoard, they won. 
         * If -1 is returned, the game ended in a tie.
         * 
         * @param {*} row - The selected cell row 
         * @param {*} col - The selected cell column 
         */
        playControl: function(row, col) {

            if (turnOrder[0] == true) {
                let currentPlayer = board.markCell(row, col, 0);
                if (currentPlayer == 0) {
                    this.announceWinner(id);
                }
                turnOrder[0] = false;
                turnOrder[1] = true;
            }
            else if (turnOrder[1] == true) {
                let currentMove = board.markCell(row, col, 1);
                if (currentMove == 1) {
                    this.announceWinner(id);
                    // Send some return statement with the announcement
                }
                else if(currentMove == -1) {
                    this.announceTie();
                    // Send some return statement with the announcement
                }
                turnOrder[1] = false;
                turnOrder[0] = true;          
            }

            let tempBoard = board.getBoard();
            console.table(tempBoard);
        },

        announceWinner: function(id) {
            // return results to game interface
            console.log("Generic win message")
        },

        annountTie: function() {
            // return results to game interface
            console.log("Generic tie message")
        },

    }
}

//--------------------------------------------------------------------------->>
/**
 * The Gameboard class is responsible for marking the board when a game input is received. The board array represents a 
 * 3x3 matrix. The totalTurns variable is used to check for the game ending tie condition.  
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

    // Public API
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
         * if a tie or winning condtion resulted from the given argument. 
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
                    //console.log("column ",{i}, " won");
                    return id;
                }

                if (board[i][0] == id && board[i][1] == id && board[i][2] == id) {
                    //console.log("row ", {i}, " won")
                    return id;
                }
            }
            
            if (board[0][0] == id && board[1][1] == id && board[2][2] == id) {
                //console.log("1st diagnol win") 
                return id;
            }

            if (board[0][2] == id && board[1][1] == id && board[2][0] == id) {
                //console.log("2nd diagnol win")
                return id;
            }
        },
    }
}
//--------------------------------------------------------------------------->>
function Player(name, id) {
    
    this.name = name;
    this.id = id;
    let wins = 0;

    return {
        /**
         * 
         * @returns 
         */
        getName: function() {
            return name;
        }, 
        /**
         * 
         * @returns 
         */
        getId: function() {
            return id;
        },
    }
}

