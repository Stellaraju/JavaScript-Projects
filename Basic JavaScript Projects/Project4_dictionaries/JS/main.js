const myDictionary = {
    name: "John",
    age: 30,
    profession: "Developer"
  };
  
  // Function to display key-value pairs on the webpage
  function displayDictionary() {
    const outputDiv = document.getElementById("dictionary-output");
    outputDiv.innerHTML = ""; // Clear previous output if any
  
    // Loop through the dictionary and display each key-value pair
    for (const key in myDictionary) {
      if (myDictionary.hasOwnProperty(key)) {
        const para = document.createElement("p");
        para.textContent = `${key}: ${myDictionary[key]}`;
        outputDiv.appendChild(para);
      }
    }
  }
  
  // Function to delete a key from the dictionary before displaying
  function deleteKey() {
    // Delete the 'age' key
    delete myDictionary.age;
  
    // Refresh the displayed dictionary after deletion
    displayDictionary();
  }
  
  // Call the displayDictionary function to show the initial content
  displayDictionary();