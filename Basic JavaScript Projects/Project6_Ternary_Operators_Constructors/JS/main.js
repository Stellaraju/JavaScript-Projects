// Function that uses a ternary operation to check the user's age
function checkAge() {
    // Get the value of the age input field
    const age = document.getElementById("ageInput").value;
    
    // Use a ternary operation to check if the age is over 18
    const result = (age >= 18) ? "You are an adult." : "You are a minor.";

    // Display the result in the HTML
    document.getElementById("ageResult").innerText = result;
}

// Constructor function to create a Person object
function Person(name, age) {
    this.name = name;  // The 'name' property
    this.age = age;    // The 'age' property

    // Nested function inside the constructor to return a description of the person
    this.getDescription = function() {
        return `${this.name} is ${this.age} years old.`;
    };
}

// Function to create a new Person and display the result in HTML
function createPerson() {
    // Get values from the input fields
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput2").value;

    // Create a new instance of the Person constructor
    const newPerson = new Person(name, age);

    // Display the result using the getDescription method of the Person object
    document.getElementById("personResult").innerText = newPerson.getDescription();
}
