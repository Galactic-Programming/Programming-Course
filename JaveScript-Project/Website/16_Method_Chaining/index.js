// Method Chaining = calling one method after another
//                   (e.g., chaining the .toLowerCase() and .concat() methods)
//                   to perform multiple operations on a string
//                   in one continuous line of code

let userName = window.prompt("Enter your name:");
// ----------------- No Method Chaining Example -----------------
// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;

// console.log(`Your name in uppercase is: ${userName}`);

// ----------------- Method Chaining Example -----------------
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(`Your name in uppercase is: ${userName}`);