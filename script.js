// Function to append digits or operators to the display
function appendToDisplay(value) {
    const display = document.getElementById('output');
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('output').value = '';
  }
  
  // Function to calculate the result of the expression
  function calculateResult() {
    const display = document.getElementById('output');
    try {
      // Evaluate the expression in the display using the built-in eval() function
      display.value = eval(display.value); 
    } catch (error) {
      // If there is an error (e.g., invalid expression), show an error message
      display.value = 'Error';
    }
  }