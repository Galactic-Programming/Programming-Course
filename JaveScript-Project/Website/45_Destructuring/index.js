// Destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// ------ Example 1: -------
// Swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ------ Example 2: -------
// Swap 2 values in an array

let colors = ['red', 'blue', 'green', 'yellow', 'purple'];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ------ Example 3: -------
// Assign values from an array to variables

const numbers = [10, 20, 30, 40, 50];

const [first, second, third, ...extraNumbers] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(extraNumbers);

// ------ Example 4: -------
// Extract values from an object

function displayPerson({ firstName, lastName, age, occupation = "Unemployed", city }) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Occupation: ${occupation}`);
    console.log(`City: ${city}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 20,
    occupation: "Fry Cook",
    city: "Bikini Bottom"
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 21,
    city: "Bikini Bottom"
};

const { firstName, lastName, age, occupation = "Unemployed", city } = person1;

displayPerson(person1);
displayPerson(person2);