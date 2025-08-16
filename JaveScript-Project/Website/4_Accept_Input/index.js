/*
How to accept user input
    1. Easy way = Window prompt() function
    2. Professional way = Using 'inquirer' module for interactive prompts
    3. Better way = Node.js built-in 'readline' module
    4. More secure way = Using 'crypto' module for secure password input
    5. Most secure way = Using 'bcrypt' module for secure password hashing
*/

let userName;

// let userName = window.prompt("Enter your name:");
// console.log(`Hello, ${userName}!`);

document.getElementById("mySubmit").onclick = function() {
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${userName}!`;
}