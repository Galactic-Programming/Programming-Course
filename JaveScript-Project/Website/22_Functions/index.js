// Function = A section of reusable code that performs a specific task.
//           Can be called multiple times with different inputs to achieve different results.
//           Functions can take parameters (input values) and return a result (output value).


function happyBirthday(userName, age) {
  console.log("Happy Birthday to you!");
  console.log("Happy Birthday to you!");
  console.log(`Happy Birthday dear ${userName}!`);
  console.log("Happy Birthday to you!");
  console.log(`You're ${age} years old!`);
}
happyBirthday("John", 30); // Output: Happy Birthday to you! (and the rest of the song)


// Example of a function that calculates the sum of two numbers:
function addNumbers(num1, num2) {
  return num1 + num2;
}
// Example of calling the function:
let sum = addNumbers(5, 10);
console.log(sum); // Output: 15


// Example of a function that checks if a number is prime:
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// Example of calling the function:
let primeCheck = isPrime(7);
console.log(primeCheck); // Output: true


// Example of a function that calculates the factorial of a number:
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}
// Example of calling the function:
let factorialResult = calculateFactorial(5);
console.log(factorialResult); // Output: 120


function isEven(num) {
  return num % 2 === 0 ? true : false;
}
console.log(isEven(4)); // Output: true


function isValidEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidEmail("john.doe@example.com")); // Output: true

