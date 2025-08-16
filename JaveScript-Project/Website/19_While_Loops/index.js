// While Loops = repeat a block of code a certain number of times while some condition is true

let i = 0;

while (i < 5) {
  console.log(`The number is: ${i}`);
  i++;
}

// let userName1 = "";
// while (userName1 === "") {
//   userName1 = window.prompt("Please enter your name:");
// }

// do {
//   userName1 = window.prompt("Please enter your name:");
// } while (userName1 === "" || userName1 === null);

// console.log(`Hello, ${userName1}!`);

// let loggedIn = false;
// let userName2 = "";
// let password;

// while (!loggedIn) {
//   userName2 = window.prompt("Enter your name:");
//   password = window.prompt("Enter your password:");

//   if (userName2 === "admin" && password === "password") {
//     loggedIn = true;
//     console.log("You are logged in!");
//   } else {
//     console.log("Invalid credentials. Please try again.");
//   }
// }

// let loggedIn = true;
// let userName;
// let password;

do {
  userName = window.prompt("Enter your name:");
  password = window.prompt("Enter your password:");

  if (userName === "admin" && password === "password") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credentials. Please try again.");
  }
} while (!loggedIn);
