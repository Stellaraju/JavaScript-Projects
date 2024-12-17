// 1. While Loop Example: This function will count down from 10 to 0
function whileLoopExample() {
    let result = "";
    let count = 10;
    
    // While loop will run until count is greater than or equal to 0
    while (count >= 0) {
        result += count + " ";
        count--; // Decrease count by 1 each iteration
    }
    
    // Display the result in the HTML
    document.getElementById("whileLoopResult").textContent = "Countdown: " + result;
}

// 2. For Loop Example: This function will print numbers from 1 to 5
function forLoopExample() {
    let result = "";
    
    // For loop will run 5 times (from 1 to 5)
    for (let i = 1; i <= 5; i++) {
        result += i + " ";
    }
    
    // Display the result in the HTML
    document.getElementById("forLoopResult").textContent = "Numbers: " + result;
}

// 3. Array Example: This function will display the names in an array
function arrayExample() {
    let names = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
    let result = "Names: ";
    
    // Using for loop to iterate over the array
    for (let i = 0; i < names.length; i++) {
        result += names[i] + " ";
    }
    
    // Display the result in the HTML
    document.getElementById("arrayResult").textContent = result;
}

// 4. Object Example: This function will create an object with properties and display it
function objectExample() {
    // Create an object using the 'let' keyword
    let person = {
        name: "John",
        age: 30,
        job: "Developer"
    };
    
    // Display the object's properties in a string format
    let result = `Name: ${person.name}, Age: ${person.age}, Job: ${person.job}`;
    
    // Display the result in the HTML
    document.getElementById("objectResult").textContent = "Person Object: " + result;
}