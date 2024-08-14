# Tic Tac Toe

The Tic Tac Toe project is a simple implementation of the classic game, designed to learn JavaScript factory functions. Two players can enter their names, press the start button, and then take turns selecting cells. The game checks for winning and tie conditions, and updates the players with the result in the upper right-hand corner. The game can be reset by clicking the reset button.

**Link to project:** https://cskee004.github.io/tic-tac-toe/

![alt text](https://github.com/cskee004/tic-tac-toe/screenshot.jpeg?raw=true)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, [npm](https://www.npmjs.com/)

### Backend
My first goal was to create a function that could detect a winning board condition. I achieved this by creating a two-dimensional array and filling it with '-1'. For testing, I created three boards with different outcomes: winning, losing, and tying. 'X' and 'O' are represented by 0 and 1, respectively. The algorithm checks for winning rows, columns, and diagonals by examining each cell’s ID (0 or 1). The board array and markCell function were then refactored into a GameBoard factory function. My next goal was to create a separate factory function for communicating with the front end that could accept board inputs. The playControl factory function accepts a coordinate pair, which is used to update the DOM with either an 'X' or 'O'. Additionally, this coordinate pair is passed to the GameBoard factory function to update the index with either a 0 or 1.

### Frontend
This phase of the project began with creating a 3x3 grid of elements and attaching an event listener to each element. This event was set to the boardInput function, which handled all communication with the playControl function. Each of the nine cells was assigned a row and column pair, which was used to mark the actual board and check if that mark resulted in a game-ending condition. This logic was then refactored into the TicTacToe factory function, the main driver for setting up the game, handling player inputs, and managing the teardown when the reset button is clicked.

## Future Goals

- Add the ability to play against a computer 
- Add a Player class that can track names and id
- Add best out of 3 or 5 game modes
- Add a running scoreboard for multi game mode

## Lessons Learned:

Seeing my code in an actual working interactive application was cool. This project built on the foundation I already had with JavaScript and gave me more tools to create new things.