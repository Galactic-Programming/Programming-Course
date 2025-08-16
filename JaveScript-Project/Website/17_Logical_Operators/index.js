// Logical Operators = used to combine and evaluate boolean expressions (true or false)
//                 && (AND) - both conditions must be true for the result to be true
//                 || (OR)  - either condition must be true for the result to be true
//                 ! (NOT)  - inverts the boolean value (true becomes false, false becomes true)

let temp = 30;
if (temp >= 20 && temp <= 30) {
  console.log("The weather is good between 20 and 30 degrees");
} else {
  console.log("The weather is bad");
}

if (temp < 20 || temp > 29) {
  console.log("The weather is bad");
} else {
  console.log("The weather is good between 20 and 30 degrees");
}

let isHot = true;
if (!isHot) {
  console.log("The weather is not hot");
} else {
  console.log("The weather is hot");
}
