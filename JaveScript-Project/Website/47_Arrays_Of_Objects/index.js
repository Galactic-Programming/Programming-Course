// Arrays of Objects = Arrays that contain objects as their elements.

const students = [
  { name: 'Alice', age: 20, grade: 'A' },
  { name: 'Bob', age: 22, grade: 'B' },
  { name: 'Charlie', age: 21, grade: 'C' },
  { name: 'Diana', age: 23, grade: 'A' },
  { name: 'Ethan', age: 19, grade: 'B' }
];

// console.log(students[0].name); // Output: Alice
// console.log(students[1].age); // Output: 22
// console.log(students[2].grade); // Output: C

// ------ forEach ------
students.forEach(student => {
  console.log(`${student.name} is ${student.age} years old and has grade ${student.grade}.`);
});

// ------ map ------
const studentNames = students.map(student => student.name);
console.log(studentNames); // Output: ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan']

const studentAges = students.map(student => student.age);
console.log(studentAges); // Output: [20, 22, 21, 23, 19]

const studentGrades = students.map(student => student.grade);
console.log(studentGrades); // Output: ['A', 'B', 'C', 'A', 'B']

// ------ filter ------
const studentsWithGradeA = students.filter(student => student.grade === 'A');
console.log(studentsWithGradeA); 
// Output: [{ name: 'Alice', age: 20, grade: 'A' }, { name: 'Diana', age: 23, grade: 'A' }]
const studentsOlderThan21 = students.filter(student => student.age > 21);
console.log(studentsOlderThan21); 
// Output: [{ name: 'Bob', age: 22, grade: 'B' }, { name: 'Diana', age: 23, grade: 'A' }]

// ------ find ------
const studentNamedCharlie = students.find(student => student.name === 'Charlie');
console.log(studentNamedCharlie); // Output: { name: 'Charlie', age: 21, grade: 'C' }

// ------ reduce ------
const maxAge = students.reduce( (max, student) => student.age > max ? student.age : max, 0);
console.log(maxAge); // Output: 23

const totalAge = students.reduce((sum, student) => sum + student.age, 0);
console.log(totalAge); // Output: 105

// ------ sort ------
const sortedByAge = students.slice().sort((a, b) => a.age - b.age);
console.log(sortedByAge); 
// Output: Sorted array by age  

// ------ push ------
students.push({ name: 'Frank', age: 24, grade: 'B' });
console.log(students); 
// Output: Array with new student Frank added