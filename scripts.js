let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
let nextLabel = document.getElementById('next-lbl');
nextLabel.innerText = " " + nextPlayer;
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let gameBoard = document.getElementsByTagName('td');
    for (count = 0; count < gameBoard.length; count++) {
        let button1 = document.createElement('button');
        button1.innerText = "[ ]";
        gameBoard[count].appendChild(button1);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let button2 = event.target;
    button2.innerText = "[" + nextPlayer + "]";
    button2.disabled = true;
    if (nextPlayer == 'X') {
        nextPlayer = 'O';
    } 
    else if (nextPlayer == 'O') {
        nextPlayer = 'X';
    }
    nextLabel.innerText = " " + nextPlayer;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let h1 = document.createElement("h1");
        let words = document.createTextNode("Game Over!");
        h1.appendChild(words);
        let gameOver = document.getElementById('game-over-lbl');
        gameOver.appendChild(h1);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let count = 0;
    for (let i = 0; i < btns.length; i++) {
        if (btns[count].disabled == true) {
            count++;
        }
    }
    if (count == btns.length) {
        return true;
    }
    return false;
}
