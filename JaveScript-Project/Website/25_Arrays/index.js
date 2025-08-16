// Array = A variable that can hold multiple values in a specific order.

let fruits = ["apple", "banana", "cherry"]; // Declaration and initialization

// Accessing elements of an array:
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry

// Adding elements to an array:
fruits.push("orange"); // Adds an element at the end of the array
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]

fruits.unshift("kiwi"); // Adds an element at the beginning of the array
console.log(fruits); // Output: ["kiwi", "apple", "banana", "cherry", "orange"]

fruits.splice(2, 0, "grape"); // Adds "grape" at index 2, shifting subsequent elements
console.log(fruits); // Output: ["kiwi", "apple", "grape", "banana", "cherry", "orange"]

// Replacing elements in an array:
fruits[1] = "mango"; // Replaces the element at index 1
console.log(fruits); // Output: ["kiwi", "mango", "grape", "banana", "cherry", "orange"]

// Slicing an array:
let slicedFruits = fruits.slice(1, 4); // Creates a new array with elements from index 1 to 3
console.log(slicedFruits); // Output: ["mango", "grape", "banana"]

// Finding the index of an element:
let index = fruits.indexOf("banana");
console.log(index); // Output: 3

// Checking if an element exists in the array:
let exists = fruits.includes("cherry");
console.log(exists); // Output: true

// Finding the last index of an element:
let lastIndex = fruits.lastIndexOf("banana");
console.log(lastIndex); // Output: 3

// Concatenating arrays:
let moreFruits = ["pear", "peach"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["kiwi", "apple", "banana", "cherry", "orange", "pear", "peach"]

// Removing elements from an array:
fruits.pop(); // Removes the last element from the array
console.log(fruits); // Output: ["kiwi", "apple", "banana", "cherry"]

fruits.shift(); // Removes the first element from the array
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// Iterating through an array:
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {
  console.log(fruit);
}
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

fruits.sort(); // Sorts the elements in alphabetical order
fruits.sort().reverse(); // Sorts the elements in reverse alphabetical order
