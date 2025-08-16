// String methods = allow us to manipulate strings and work with text (strings)

let greeting = "Hello, World!";

// length property = returns the number of characters in a string
console.log(greeting.length); // Output: 13

// toUpperCase() method = converts all lowercase letters in a string to uppercase
console.log(greeting.toUpperCase()); // Output: HELLO, WORLD!

// toLowerCase() method = converts all uppercase letters in a string to lowercase
console.log(greeting.toLowerCase()); // Output: hello, world!

// concat() method = combines two or more strings and returns a new string
console.log(greeting.concat(" How are you?")); // Output: Hello, World! How are you?

console.log(greeting.charAt(5)); // Output: o
console.log(greeting.indexOf("World")); // Output: 7
console.log(greeting.lastIndexOf("o")); // Output: 4
console.log(greeting.startsWith("Hello")); // Output: true
console.log(greeting.endsWith("!")); // Output: true
console.log(greeting.repeat(2)); // Output: Hello, World!Hello, World!

// includes() method = checks if a string contains a specified substring
console.log(greeting.includes("World")); // Output: true
console.log(greeting.includes("world")); // Output: false

let userName = "John Doe    ";

// trim() method = removes whitespace from both ends of a string
console.log(userName.trim()); // Output: John Doe

let result1 = greeting.replace("World", "Universe"); // Replaces "World" with "Universe"
let result2 = userName.startsWith("John"); // Checks if the string starts with "John"
let result3 = userName.endsWith("Doe"); // Checks if the string ends with "Doe"

console.log(result1); // Output: Hello, Universe! How are you?

console.log(result2); // Output: true

console.log(result3); // Output: true

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber); // Output: 1234567890

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber); // Output: 000000001234567890

phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber); // Output: 123456789000000

// split() method = splits a string into an array of substrings based on a specified delimiter
let sentence = "This is a sample sentence.";
let words = sentence.split(" ");
console.log(words); // Output: ["This", "is", "a", "sample", "sentence."]

// join() method = joins an array of strings into a single string with a specified delimiter
let joinedWords = words.join("-");
console.log(joinedWords); // Output: This-is-a-sample-sentence.

// slice() method = extracts a section of a string and returns it as a new string
let slicedString = greeting.slice(0, 5);
console.log(slicedString); // Output: Hello
