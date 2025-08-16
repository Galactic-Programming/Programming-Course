// .filter() = creates a new array with all elements that pass the test implemented by the provided function.
// It does not execute the function for empty elements.
// The filter() method returns a new array, and does not change the original array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Filter out odd numbers
let oddNumbers = numbers.filter(function(number) {
    return number % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

// Example with numbers
const ages = [12, 15, 18, 20, 25, 30, 35, 40];

function isAdult(age) {
    return age >= 18;
}
function isMinor(age) {
    return age < 18;
}

const adults = ages.filter(isAdult);
console.log(adults); // Output: [18, 20, 25, 30, 35, 40]

const minors = ages.filter(isMinor);
console.log(minors); // Output: [12, 15]

// Example with strings
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const longWords = words.filter(function(word) {
    return word.length > 6;
});
console.log(longWords); // Output: ["banana", "cherry", "elderberry"]

const shortWords = words.filter(function(word) {
    return word.length <= 6;
});
console.log(shortWords); // Output: ["apple", "date"]

// Example with objects
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mobile", price: 500 },
    { id: 3, name: "Tablet", price: 800 },
];

const expensiveProducts = products.filter(function(product) {
    return product.price > 600;
});
console.log(expensiveProducts); // Output: [{ id: 1, name: "Laptop", price: 1000 }, { id: 3, name: "Tablet", price: 800 }]

const affordableProducts = products.filter(function(product) {
    return product.price <= 600;
});
console.log(affordableProducts); // Output: [{ id: 2, name: "Mobile", price: 500 }]