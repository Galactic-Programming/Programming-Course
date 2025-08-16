// For Each = Method used to iterate over the elements of
//            an array and apply a specific function to each element (callback)
//            Array.forEach(callback);

let numbers1 = [1, 2, 3, 4, 5];
function displayNumber(number) {
  console.log(number);
}
numbers1.forEach(displayNumber); // Output: 1, 2, 3, 4, 5

let numbers2 = [1, 2, 3, 4, 5];
function double(element, index, array) {
    array[index] = element * 2;
}
numbers2.forEach(double);
console.log(numbers2);

let numbers3 = [1, 2, 3, 4, 5];
function triple(element, index, array) {
    array[index] = element * 3;
}
numbers3.forEach(triple);
console.log(numbers3);

let numbers4 = [1, 2, 3, 4, 5];
function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}
numbers4.forEach(square);
console.log(numbers4);

let numbers5 = [1, 2, 3, 4, 5];
function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}
numbers5.forEach(cube);
console.log(numbers5);

let fruits = ["Apple", "Banana", "Cherry", "Orange", "Grapes"];

function displayFruit(fruit) {
    console.log(fruit);
}
fruits.forEach(displayFruit);

function uppercaseFruit(fruit, index, array) {
    array[index] = fruit.toUpperCase();
}
fruits.forEach(uppercaseFruit);
console.log(fruits);
function lowercaseFruit(fruit, index, array) {
    array[index] = fruit.toLowerCase();
}
fruits.forEach(lowercaseFruit);
console.log(fruits);

function capitalizeFruit(fruit, index, array) {
    array[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
}
fruits.forEach(capitalizeFruit);
console.log(fruits);