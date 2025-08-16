// Sort = method used to sort elements in an array in place. It accepts a compare function that defines the sort order.
//        Sort elements as strings in lexicographic order, not alphabetical order.
//        Lexicographic = (alphabet + numbers + symbols) as strings.


// Array with strings
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Pineapple", "Grapes"];

console.log(fruits.sort()); // Sorts the array in place and returns the sorted array

// Array with numbers
let numbers = [ 2, 1, 3, 5, 4, 6, 9, 10, 7, 8 ];

numbers.sort((a, b) => a - b); // Sorts the array in place and returns the sorted array

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/// Array with objects
const people = [
    { name: "Spongebob", age: 30, GPA: 3.5 },
    { name: "Patrick", age: 25, GPA: 3.8 },
    { name: "Squidward", age: 35, GPA: 3.2 },
    { name: "Sandy", age: 20, GPA: 3.9 }
];

people.sort((a, b) => a.age - b.age); // Sorts the array in place and returns the sorted array

console.log(people);