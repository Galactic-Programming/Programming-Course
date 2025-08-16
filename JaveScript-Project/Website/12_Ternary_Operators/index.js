// Ternary operator = a shorthand conditional operator if or else statement
//                (used for a single line of code)  => condition ? true_value : false_value

// Example with logical operators:

let myAge = 20;
let isAdult = myAge >= 18 ? true : false;
console.log(`Is the person an adult? ${isAdult}`); // Output: Is the person an adult? true

// Example with multiple conditions:

let myScore = 85;
let grade =
  myScore >= 90
    ? "A"
    : myScore >= 80
    ? "B"
    : myScore >= 70
    ? "C"
    : myScore >= 60
    ? "D"
    : "F";
console.log(`Grade: ${grade}`); // Output: Grade: C

// Example with nested ternary operators:

let myName = "John Doe";
let greeting =
  myName.length > 5 ? "Hello, " : myName.length > 3 ? "Hey, " : "Hi, ";
console.log(greeting + myName); // Output: Hello, John Doe

// Example with ternary operator and function calls:

let myNumber = 10;
let result =
  myNumber > 5 ? "Number is greater than 5" : "Number is not greater than 5";
console.log(result); // Output: Number is greater than 5

function getResult(number) {
  return number > 5
    ? "Number is greater than 5"
    : "Number is not greater than 5";
}

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 0.1 : purchaseAmount;
console.log(
  `Discounted amount: $${
    purchaseAmount - (purchaseAmount * discount).toFixed(2)
  }`
); // Output: Discounted amount: $125.00
