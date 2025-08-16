// Math = built-in object in JavaScript for mathematical operations
//        and provide a collection of properties and methods

// console.log(Math.PI); // Output the value of PI (3.141592653589793)
// console.log(Math.E); // Output the value of Euler's number (2.718281828459045)
// console.log(Math.SQRT2); // Output the square root of 2 (1.4142135623730951)

// Example of using Math methods
// Uncomment the lines below to see the results of different Math operations
let x = 5.21;
let y = 3;
let z;

z = Math.round(x); // Round x to the nearest whole number
console.log(z); // Output the rounded value of x

z = Math.floor(x); // Round x down to the nearest whole number
console.log(z); // Output the floored value of x

z = Math.ceil(x); // Round x up to the nearest whole number
console.log(z); // Output the ceiled value of x

z = Math.trunc(x); // Truncate x to the nearest whole number
console.log(z); // Output the truncated value of x

z = Math.random(); // Generate a random number between 0 (inclusive) and 1 (exclusive)
console.log(z); // Output the random number

z = Math.pow(x, y); // Raise x to the power of y
console.log(z); // Output the result of x^y

z = Math.sqrt(x); // Calculate the square root of x
console.log(z); // Output the square root of x

z = Math.log(x); // Calculate the natural logarithm of x
console.log(z); // Output the natural logarithm of x

z = Math.abs(x); // Calculate the absolute value of x
console.log(z); // Output the absolute value of x

z = Math.sin(x); // Calculate the sine of x in radians
console.log(z); // Output the sine of x

z = Math.cos(x); // Calculate the cosine of x in radians
console.log(z); // Output the cosine of x

z = Math.tan(x); // Calculate the tangent of x in radians
console.log(z); // Output the tangent of x

z = Math.sign(x); // Determine the sign of x (-1 for negative, 0 for zero, 1 for positive)
console.log(z); // Output the sign of x

// Finding the maximum and minimum values
// Using Math.max() and Math.min() to find the maximum and minimum of multiple numbers
let max = Math.max(x, y); // Find the maximum of x and y
let min = Math.min(x, y); // Find the minimum of x and y

console.log(max);
console.log(min);