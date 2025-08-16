// Type Conversion = change the data type of a value from one type to another
//                   (e.g., converting a string to a number)

let age = window.prompt("Enter your age:");
age = Number(age); // Convert string to number
age += 1; // Increment the number

console.log(`Your age after incrementing is: ${age}, type: ${typeof age}`);

let x = "10";
let y = "number";
let z = "pizza";

x = Number(x); // Convert string to number
y = String(y); // Convert number to string
z = Boolean(z); // Convert string to boolean (true if string is not empty, false otherwise)

console.log(`x: ${x}, type: ${typeof x}`);

console.log(`y: ${y}, type: ${typeof y}`);

console.log(`z: ${z}, type: ${typeof z}`);
