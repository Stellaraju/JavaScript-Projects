// Global variable declaration
let globalVariable = "I am a global variable!";

// Local variable inside a function (initially undefined)
function testScope() {
    let localVariable = "I am a local variable!";
    // Display global and local variables
    document.getElementById("scopeResult").innerText = `Global: ${globalVariable}, Local: ${localVariable}`;
}

// Function with an if statement
function checkCondition() {
    const age = 20;
    
    // If statement to check the value of age
    if (age >= 18) {
        document.getElementById("ifResult").innerText = "You are an adult.";
    } else {
        document.getElementById("ifResult").innerText = "You are a minor.";
    }
}

// Function with an intentional error (undefined variable)
function debugFunction() {
    let num1 = 5;
    let num2 = 10;
    
    // Intentional error: 'num3' is not defined, but it's being used in the expression
    console.log("Debugging the error...");
    console.log("The sum is: " + (num1 + num2 + num3)); // Error: num3 is not defined
    
    // The following line will never execute because of the error
    document.getElementById("timeResult").innerText = "Error in the function.";
}

// The Time_function that will display current date and time
function Time_function() {
    const currentDate = new Date();  // Get the current date and time
    const formattedTime = currentDate.toLocaleString();  // Format the time in a readable format
    document.getElementById("timeResult").innerText = `Current time: ${formattedTime}`;
}