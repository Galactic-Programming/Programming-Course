// String Slicing = creating a new string by extracting a part of an existing string

const fullName = "John Doe";

// let firstName = fullName.slice(0, 4); // Extracts the first four characters
// let lastName = fullName.slice(5); // Extracts the rest of the characters
// let firstChar = fullName.slice(0, 1); // Extracts the first character
// let lastChar = fullName.slice(-2); // Extracts the last character

// console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe
// console.log(firstChar); // Output: J
// console.log(lastChar); // Output: e.log(lastChar); // Output: e

let firstName = fullName.slice(0, fullName.indexOf(" ")); // Extracts the first name
let lastName = fullName.slice(fullName.indexOf(" ") + 1); // Extracts the last name

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe

const email = "john.doe@example.com";

let username = email.slice(0, email.indexOf("@")); // Extracts the username
let extension = email.slice(email.indexOf("@") + 1); // Extracts the extension

console.log(username); // Output: john.doe
console.log(extension); // Output: example.com
