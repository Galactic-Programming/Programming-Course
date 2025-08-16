// Variables Scope = Where a variable is accessible and modifiable (local, global, or both).

let globalVariable = "Hello, World!"; // Global variable

function myFunction() {
  let localVariable = "Hello, Local!"; // Local variable

  console.log(globalVariable); // Output: Hello, World!
  console.log(localVariable); // Output: Hello, Local!
}
myFunction();

let x = 10; // Global variable

function myFunction2() {
  let x = 20; // Local variable
  console.log(x); // Output: 20
}
function myFunction3() {
  let x = 30; // Local variable
  console.log(x); // Output: 30
}

myFunction2();
myFunction3();
