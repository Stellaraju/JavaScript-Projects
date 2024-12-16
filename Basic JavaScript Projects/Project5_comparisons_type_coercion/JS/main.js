// 1. Utilize document.write() and typeof operator to display the data type of a variable.
var myVar = 42; // Choosing a number variable
document.write("<h2>1. Type of myVar: " + typeof myVar + "</h2>");

// 2. Write an expression combining a string and a number.
var myString = "The answer is: ";
var result = myString + 42; // Combining string and number
document.write("<h2>2. Combined string and number: " + result + "</h2>");

// 3. Comparison and logical operators:

// == operator (loose equality)
var isEqual = (5 == "5"); // == compares value only, not type
document.write("<h2>3. == operator (loose equality): " + isEqual + "</h2>");

// === operator (strict equality)
var isStrictEqual = (5 === "5"); // === compares both value and type
document.write("<h2>4. === operator (strict equality): " + isStrictEqual + "</h2>");

// > operator (greater than)
var isGreaterThan = (10 > 5); // 10 is greater than 5
document.write("<h2>5. > operator (greater than): " + isGreaterThan + "</h2>");

// < operator (less than)
var isLessThan = (3 < 7); // 3 is less than 7
document.write("<h2>6. < operator (less than): " + isLessThan + "</h2>");

// && operator (AND)
var andCondition = (true && false); // true AND false is false
document.write("<h2>7. && operator (AND): " + andCondition + "</h2>");

// || operator (OR)
var orCondition = (true || false); // true OR false is true
document.write("<h2>8. || operator (OR): " + orCondition + "</h2>");

// ! operator (NOT)
var notCondition = !(5 > 3); // NOT (5 > 3) is false
document.write("<h2>9. ! operator (NOT): " + notCondition + "</h2>");
