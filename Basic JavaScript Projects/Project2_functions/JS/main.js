function updateParagraph() {
    // Initial message
    var message = "Hello, ";

    // Concatenating the user's name
    var name = "John";

    // Using += operator to add more text to the message
    message += name + "! Welcome to the project.";

    // Find the paragraph element with id 'greeting' and update its content
    document.getElementById("greeting").innerText = message;
}

// A second function that can be triggered by a different button, for example:
function changeColor() {
    // This function changes the background color of the page when called
    document.body.style.backgroundColor = "lightblue";
}