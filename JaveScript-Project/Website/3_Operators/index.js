// Arithmetical operations = operands (values, variables, or expressions) 
//                           and operators (+, -, *, /, %)
//                           Example: let result = 5 + 3;

let student = 30;
// Add 10 to the student's number
// student = student + 10;
// student += 10;

// Subtract 5 from the student's number
// student = student - 5;
// student -= 5;

// Multiply the student's number by 2
// student = student * 2;
// student *= 2;

// Divide the student's number by 3
// student = student / 3;
// student /= 3;

// Calculate the remainder when student's number is divided by 7
//student = student % 7;
// student %= 7;

// Calculate the square of the student's number
// student = student ** 2;
// student **= 2;
console.log(`Student's numbers: ${student}`);

/*
    Operator precedence:
    - Parentheses ( )
    - Exponentiation ( ** )
    - Multiplication and Division (*, /)
    - Addition and Subtraction (+, -)
*/
let result = 1 + 2 * 3 + 4 ** 2;

console.log(`Result: ${result}`);