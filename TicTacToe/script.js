// Get elements
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
const statusDisplay = document.getElementById('status');

let currentPlayer = 'X'; // X starts the game
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Board state

// Function to handle a player's move
function handleCellClick(event) {
  const cellIndex = event.target.getAttribute('data-cell');

  // Ignore click if cell is already filled or game is over
  if (gameBoard[cellIndex] || checkWinner()) return;

  // Update the board
  gameBoard[cellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;

  // Check for a win or draw
  if (checkWinner()) {
    statusDisplay.textContent = `${currentPlayer} Wins!`;
  } else if (gameBoard.every(cell => cell !== '')) {
    statusDisplay.textContent = "It's a Draw!";
  } else {
    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Function to check if there's a winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

// Function to reset the game
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  statusDisplay.textContent = '';
}

// Add event listeners to each cell
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Reset button event listener
resetButton.addEventListener('click', resetGame);
