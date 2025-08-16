// function declaration = defined a resuable block of code that performs a specific task, and is hoisted

function greet() {
    console.log("Hello!");
}
greet();

// function expression = a way to define a function as a value or variable, which is not hoisted

// 1. Callbacks in asynchronous operations
// 2. Passing functions as arguments to other functions
// 3. Higher-order functions
// 4. Creating functions dynamically
// 5. Using functions as values
// 6. Closures
// 7. Event listeners
//...

const greetExpression = function() {
    console.log("Hello, World!");
};
greetExpression();

setTimeout(function() {
    console.log("This is a delayed message.");
}, 3000);

// function expression with parameters
const greetWithName = function(name) {
    console.log(`Hello, ${name}!`);
};
greetWithName("Alice");

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(num) {
    return Math.pow(num, 2);
});
const cubedNumbers = numbers.map(function(num) {
    return Math.pow(num, 3);
});
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
const oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(cubedNumbers); // Output: [1, 8, 27, 64, 125]
console.log(evenNumbers); // Output: [2, 4]
console.log(oddNumbers); // Output: [1, 3, 5]
console.log(total); // Output: 15