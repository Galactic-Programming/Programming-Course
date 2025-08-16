// Reduce is a method that executes a reducer function on each element of the array, resulting in a single output value.
// It takes two arguments: a callback function and an initial value.

const prices = [10, 20, 30, 40, 50];
const total = prices.reduce(sum);

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}
console.log(`Total: $${total.toFixed(2)}`); // Output: Total: 150.00 (10 + 20 + 30 + 40 + 50)

// The callback function takes two parameters: the accumulator and the current value.
// The accumulator is the accumulated value returned by the last execution of the callback, or the initial value if provided.
// The current value is the current element being processed in the array.

const grades = [90, 80, 70, 60, 50];
const maximunGrade = grades.reduce(getMax);
const minimunGrade = grades.reduce(getMin);

function getMax(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}

function getMin(accumulator, currentValue) {
    return Math.min(accumulator, currentValue);
}

console.log(`Maximum Grade: ${maximunGrade}`); // Output: Maximum Grade: 90
console.log(`Minimum Grade: ${minimunGrade}`); // Output: Minimum Grade: 50

// Reduce can also take an initial value as the second argument.
const numbers = [1, 2, 3, 4, 5];
const sumWithInitialValue = numbers.reduce(sum, 10);
console.log(`Sum with initial value: ${sumWithInitialValue}`); // Output: Sum with initial value: 25

