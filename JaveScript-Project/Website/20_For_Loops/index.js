// For loops = repeat a block of code a certain number of times (limited by a counter)

let myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Example with a function:
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(myArray);

// Example with a string:
let myString = "Hello, World!";
for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

// Example with a nested loop:
let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    console.log(nestedArray[i][j]);
  }
}

// Skipping items
for (let i = 1; i <= 20; i++) {
  if(i == 13) {
    console.log("Skipping 13");
    continue; // Skip the rest of the loop when i is 13
  }
  else {
    console.log(i);
  }
}

// Breaking out of a loop
for (let i = 1; i <= 20; i++) {
  if(i == 13) {
    console.log("Breaking out of the loop");
    break; // Break out of the loop when i is 13
  }
  console.log(i);
}