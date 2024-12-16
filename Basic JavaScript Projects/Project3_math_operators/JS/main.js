// Function for addition (+)
function addNumbers() {
    let num1 = 10;
    let num2 = 5;
    let result = num1 + num2; // Adds num1 and num2
    document.getElementById("result").innerText = "Addition Result: " + result;
}

// Function for subtraction (-)
function subtractNumbers() {
    let num1 = 10;
    let num2 = 5;
    let result = num1 - num2; // Subtracts num2 from num1
    document.getElementById("result").innerText = "Subtraction Result: " + result;
}

// Function for multiplication (*)
function multiplyNumbers() {
    let num1 = 10;
    let num2 = 5;
    let result = num1 * num2; // Multiplies num1 and num2
    document.getElementById("result").innerText = "Multiplication Result: " + result;
}

// Function for modulo (%)
function moduloOperation() {
    let num1 = 10;
    let num2 = 3;
    let result = num1 % num2; // Finds the remainder of num1 divided by num2
    document.getElementById("result").innerText = "Modulo Result: " + result;
}

// Function for increment (++)
function incrementNumber() {
    let num = 5;
    num++; // Increments num by 1
    document.getElementById("result").innerText = "Incremented Number: " + num;
}

// Function for decrement (--)
function decrementNumber() {
    let num = 5;
    num--; // Decrements num by 1
    document.getElementById("result").innerText = "Decremented Number: " + num;
}

// Function to generate a random number using Math.random()
function generateRandomNumber() {
    let randomNum = Math.random(); // Generates a random number between 0 and 1
    document.getElementById("result").innerText = "Random Number: " + randomNum;
}

// Event listeners for each button to trigger respective functions
document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subtractBtn").addEventListener("click", subtractNumbers);
document.getElementById("multiplyBtn").addEventListener("click", multiplyNumbers);
document.getElementById("moduloBtn").addEventListener("click", moduloOperation);
document.getElementById("incrementBtn").addEventListener("click", incrementNumber);
document.getElementById("decrementBtn").addEventListener("click", decrementNumber);
document.getElementById("randomBtn").addEventListener("click", generateRandomNumber);

