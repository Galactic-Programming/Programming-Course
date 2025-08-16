// Variables = A container that stores a value.
//             Behaves as if it were the value it contains.

// 1. Declaration: Declare a variable and assign a value => let x;
// 2. Initialization: Assign a value to a declared variable => x = 10;
// 3. Re-assignment: Change the value of a variable => x = 20;


let x;  // Declaration
x = 10;  // Initialization
console.log(x);  // Output: 10

let age1 = 29;
let price = 19.99;
let GPA = 3.8;

console.log(typeof age1);  // Output: number
console.log(`Age: ${age1} years old`);
console.log(`Price: $${price.toFixed(2)}`);
console.log(`GPA: ${GPA.toFixed(1)}`);

let firstName = "John";
let favoriteFood = "Pizza";
let email = "john.doe@example.com";

console.log(typeof firstName);  // Output: string
console.log(`Hello, ${firstName}!`);
console.log(`Your favorite food is ${favoriteFood}.`);
console.log(`Your email address is ${email}.`);

let isStudent = true;

console.log(typeof isStudent);  // Output: boolean
console.log(`Is ${firstName} a student? ${isStudent}`);

let fullName = "John Doe";
let age2 = 29;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}.`;
document.getElementById("p2").textContent = `Your age is ${age2} years old.`;
document.getElementById("p3").textContent = `Enroll: ${student}`;