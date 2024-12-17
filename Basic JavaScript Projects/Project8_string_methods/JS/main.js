// Function to demonstrate the concat() method
function concatStrings() {
    // concat() combines two or more strings
    let str1 = "Hello, ";
    let str2 = "world!";
    let result = str1.concat(str2); // Combine both strings
    
    // Display the result in the HTML
    document.getElementById("concatResult").textContent = result;
}

// Function to demonstrate the slice() method
function sliceString() {
    // slice() extracts a part of a string and returns it
    let str = "JavaScript";
    let result = str.slice(4, 10); // Extract from index 4 to 10
    
    // Display the result in the HTML
    document.getElementById("sliceResult").textContent = result;
}

// Function to demonstrate the toString() method
function toStringExample() {
    // toString() converts other data types to a string
    let num = 123;
    let result = num.toString(); // Convert the number to string
    
    // Display the result in the HTML
    document.getElementById("toStringResult").textContent = result;
}

// Function to demonstrate the toPrecision() method
function toPrecisionExample() {
    // toPrecision() formats a number to a specified precision
    let num = 123.456789;
    let result = num.toPrecision(5); // Format the number to 5 significant digits
    
    // Display the result in the HTML
    document.getElementById("toPrecisionResult").textContent = result;
}