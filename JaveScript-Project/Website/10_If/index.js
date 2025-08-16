// If statement = If a condition is true, then a block of code is executed,
//                If the condition is false, then the code inside the else block is executed.

// If statement syntax:
// if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }

let hour = 0;
let greeting = "";

const myHour = document.getElementById("myHour");
const myHourSubmit = document.getElementById("myHourSubmit");
const greetingResult = document.getElementById("greetingResult");

myHourSubmit.onclick = function () {
  hour = Number(myHour.value);

  if (hour < 0 || hour > 23) {
    greeting = "Please enter a valid hour (0-23).";
  } else if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  greetingResult.textContent = greeting;
};

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age = 0;

mySubmit.onclick = function () {
  age = Number(myText.value);

  if (age >= 18 && age < 100) {
    result.textContent = "You are old enough to enter this site!";
  } else if (age >= 100) {
    result.textContent = "You are too old to enter this site!";
  } else if (age < 0) {
    result.textContent = "You can't be negative years old!";
  } else if (age == 0) {
    result.textContent = "You are 0 years old!";
  } else {
    result.textContent = "You are too young to enter this site!";
  }
};
