// = assignment operator
// == comparison operator (loose equality) compares two values for equality, ignoring data types
// === strict equality operator (strict equality) compares two values for equality, including data types
// != inequality operator (loose equality) compares two values for inequality, ignoring data types
// !== strict inequality operator (strict equality) compares two values for inequality, including data types

const PI = 3.14;
if (PI == 3.14) {
  console.log("PI is approximately 3.14");
}
else {
  console.log("PI is not approximately 3.14");
}

let num1 = 5;
let num2 = "5";

console.log(num1 == num2); // true (loose equality)
console.log(num1 === num2); // false (strict equality)

if (num1 == num2) {
  console.log("The numbers are equal");
} else {
  console.log("The numbers are not equal");
}
if (num1 === num2) {
  console.log("The numbers are equal (strict)");
} else {
  console.log("The numbers are not equal (strict)");
}
