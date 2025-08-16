// Switch statement = can be used to test multiple conditions at once
//                    and replace multiple if-else statements.

// Example with multiple conditions
let dayOfWeek = 1;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day of the week");
}

// Example with fall-through behavior
let grade = 85;

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}

// Example with string values

let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;
  case "apple":
    console.log("Apple is red");
    break;
  case "grape":
    console.log("Grape is purple");
    break;
  default:
    console.log("Unknown fruit");
}

// Example with no break statement (fall-through)
let number = 4;
switch (number) {
  case 1:
    console.log("Number is 1");
  case 2:
    console.log("Number is 2");
  case 3:
    console.log("Number is 3");
  default:
    console.log("Number is not 1, 2, or 3");
}

let testScore = 92;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}
console.log(`Your letter grade is: ${letterGrade}`);