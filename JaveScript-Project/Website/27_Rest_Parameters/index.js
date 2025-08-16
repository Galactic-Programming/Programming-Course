// Rest parameters = a special type of parameter in JavaScript that allows
//                   a function to accept any number of arguments.

function openFridge(...items) {
  console.log("Items in the fridge:", items);
}

const food1 = "apple";
const food2 = "banana";
const food3 = "cherry";
const food4 = "orange";
const food5 = "kiwi";

openFridge(food1, food2, food3, food4, food5);

function getFood(...foods) {
  return foods;
}
const foodItems = getFood(food1, food2, food3, food4, food5);
console.log("Food items:", foodItems); // Output: ["apple", "banana", "cherry", "orange", "kiwi"]

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log("Total:", total); // Output: 15

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}
const average = getAverage(1, 2, 3, 4, 5);
console.log("Average:", average); // Output: 3

function combineStrings(...strings) {
  return strings.join(" ");
}
const combinedString = combineStrings("Hello", "World", "from", "JavaScript");
console.log("Combined String:", combinedString); // Output: "Hello World from JavaScript"