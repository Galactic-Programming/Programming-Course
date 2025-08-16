// Arrow functions = a concise way to write function expressions good for simple functions that you use only once.
// They are not hoisted, so you cannot use them before they are defined.
// They do not have their own 'this' context, so they cannot be used as methods or constructors.
// They cannot be used as generators, so you cannot use the 'yield' keyword inside them.

const hello = (name, age) => {
  console.log(`Hello ${name}, you are ${age} years old.`);
};
hello("John", 30);

setTimeout(() => console.log("This is an arrow function"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squaredNumbers = numbers.map((number) => Math.pow(number, 2));
console.log(squaredNumbers); // [1, 4, 9, 16, 25, 36]

const cubedNumbers = numbers.map( (number) => Math.pow(number,3) );
console.log(cubedNumbers); // [1, 8, 27, 64, 125, 216]

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]

const total = numbers.reduce( (accumulator, number) => accumulator + number, 0);
console.log(total); // 21