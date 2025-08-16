// Spread operator (...) is used to combine the contents of one or more arrays into a new array.

let numbers = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let combinedArray = [...numbers, ...numbers2];

let maxNumber = Math.max(...combinedArray);
let minNumber = Math.min(...combinedArray);

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(maxNumber); // Output: 10
console.log(minNumber); // Output: 1

let userName = "John Doe";
let letters = [...userName].join("-");

console.log(letters); // Output: ["J", "o", "h", "n", " ", "D", "o", "e"]

// Spread operator can also be used to copy an array
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Spread operator can be used to merge objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Spread operator can also be used to create a new object with additional properties
let newObject = { ...obj1, e: 5 };
console.log(newObject); // Output: { a: 1, b: 2, e: 5 }

// Spread operator can be used to pass an array as arguments to a function
function sum(a, b, c) {
  return a + b + c;
}

let numbers3 = [1, 2, 3];
let result = sum(...numbers3); 
console.log(result); // Output: 6

// Spread operator can also be used to create a new array with additional elements
let newArray = [...numbers3, 6, 7, 8];
console.log(newArray); // Output: [1, 2, 3, 6, 7, 8]
