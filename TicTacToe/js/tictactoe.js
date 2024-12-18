// Initialize the board with empty strings for each cell
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Set the current player to 'X' and the game over flag to false
let currentPlayer = 'X';
let gameOver = false;

// Get references to the game board and status elements in the HTML
const boardElement = document.getElementById('game-board');
const statusElement = document.getElementById('status');

// Function to handle the click event when a player clicks on a cell
function handleCellClick(row, col) {
    // If the game is over or the cell is already filled, do nothing
    if (gameOver || board[row][col] !== '') return;

    // Update the board with the current player's move
    board[row][col] = currentPlayer;

    // Find the clicked cell and update its text content to show the current player's symbol
    const cell = boardElement.children[row * 3 + col];
    cell.textContent = currentPlayer;

    // Check if the current player has won after making the move
    if (checkWinner()) {
        // Update the status to announce the winner
        statusElement.textContent = `Player ${currentPlayer} wins!`;
        gameOver = true;  // Set the game over flag to true
    } 
    // Check if the game is a draw (i.e., no more empty cells left)
    else if (board.flat().every(cell => cell !== '')) {
        statusElement.textContent = "It's a draw!";
        gameOver = true;  // Set the game over flag to true
    } 
    // If no winner and the game is not a draw, switch to the next player
    else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusElement.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Function to check if the current player has won the game
function checkWinner() {
    // Check rows for a winning combination
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) return true;
    }

    // Check columns for a winning combination
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) return true;
    }

    // Check diagonals for a winning combination
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) return true;
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) return true;

    // If no winning combination, return false
    return false;
}

// Function to initialize the game board by creating clickable cells
function initializeBoard() {
    // Loop through each row and column of the board
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            // Create a div for each cell
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');  // Add the 'cell' class to each cell

            // Add a click event listener to handle player moves
            cellElement.addEventListener('click', () => handleCellClick(row, col));

            // Append the cell to the game board container
            boardElement.appendChild(cellElement);
        }
    }
}

// Start the game by initializing the board
initializeBoard();
