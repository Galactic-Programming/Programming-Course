// Date Objects = Objects that contain values that represent dates and times.
//                These date objects can be changes and formatted in many ways.
//                They are used to work with dates and times in JavaScript.


// Date(year, month, day, hours, minutes, seconds, milliseconds) 
const date = new Date();
console.log(date);

const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const day = date.getDate();
console.log(day);
// ... and so on for hours, minutes, seconds, milliseconds