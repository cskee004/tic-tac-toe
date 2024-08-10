
//--------------------------------------------------------------------------->>
/**
 * 
 * @returns 
 */
function playGame() {

    let board = Gameboard();
    const playerX = Player("Player X name", 0);
    const playerO = Player("Player O name", 1);
    let turnOrder = [true, false];

    return {
        input: function(row, col) {

            if (turnOrder[0] == true) {
                let currentMove = board.markBoard(row, col, 0);
                if (currentMove == 0) {
                    this.announceWinner(id);
                }
                turnOrder[0] = false;
                turnOrder[1] = true;
            }
            else if (turnOrder[1] == true) {
                let currentMove = board.markBoard(row, col, 1);
                if (currentMove == 1) {
                    this.announceWinner(id);
                }
                else if(currentMove == -1) {
                    this.announceTie();
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
        }
    }
}

//--------------------------------------------------------------------------->>
/**
 * 
 * @returns 
 */
function Gameboard() {
   
    let totalTurns = 0;
    const rows = 3;
    const columns = 3;
    let board = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];

    // Public API
    return {
        /**
         * 
         * @returns 
         */
        getBoard: function() {
            return board
        },
        /**
         * 
         * @param {*} row 
         * @param {*} col 
         * @param {*} id 
         * @returns 
         */
        markBoard: function(row, col, id) {
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

