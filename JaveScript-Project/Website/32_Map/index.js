// .map() = accepts a callback function and applies it to each element in the array, returning a new array with the results
// Array.map(callback);
// callback = function(currentValue, index, array)

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(square);

function square(number) {
    return Math.pow(number, 2);
}
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Example with objects
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
const userNames = users.map(getUserName);

function getUserName(user) {
    return user.name;
}
console.log(userNames); // ["Alice", "Bob", "Charlie"]

// Example with strings
const fruits = ["apple", "banana", "cherry"];
const uppercasedFruits = fruits.map(uppercaseFruit);

function uppercaseFruit(fruit) {
    return fruit.toUpperCase();
}
console.log(uppercasedFruits); // ["APPLE", "BANANA", "CHERRY"]

// Example with nested arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.map(flatten);

function flatten(array) {
    return array.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// Example with complex objects
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];
const productNames = products.map(getProductName);

function getProductName(product) {
    return product.name;
}
console.log(productNames); // ["Laptop", "Phone", "Tablet"]

// Example with conditional logic
const numbers2 = [1, 2, 3, 4, 5];
const evenOrOdd = numbers2.map(checkEvenOrOdd);

function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd); // ["Odd", "Even", "Odd", "Even", "Odd"]

// Example with arrow functions
const numbers3 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers3.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Example with chaining
const numbers4 = [1, 2, 3, 4, 5];
const result = numbers4.map(number => number * 2).filter(number => number > 5);
console.log(result); // [6, 8, 10]

// Example with formatting dates
const dates = ["2023-01-01", "2023-02-01", "2023-03-01"];
const formattedDates = dates.map(formatDate);

function formatDate(dateString) {
    const parts = dateString.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
console.log(formattedDates); // ["01/01/2023", "02/01/2023", "03/01/2023"]

// Example with extracting properties from objects
const employees = [
    { id: 1, name: "John", department: "HR" },
    { id: 2, name: "Jane", department: "IT" },
    { id: 3, name: "Bob", department: "Finance" }
];
const employeeNames = employees.map(getEmployeeName);

function getEmployeeName(employee) {
    return employee.name;
}
console.log(employeeNames); // ["John", "Jane", "Bob"]