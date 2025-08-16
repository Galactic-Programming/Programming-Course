// ES6 Module = An external file that contains reusalbe code that can be imported into other JavaScript files.

// Write reusable code for many different apps.
// Can contain variables, classes, functions, etc... and more.
// Introduced as part of ES6 (ECMAScript 6) in 2015.

import {PI, getCircumference, getArea} from './mathUtil.js';

console.log(PI); // 3.14159

const circumference = getCircumference(10);
const area = getArea(10);

console.log(`${circumference.toFixed(2)} cm`); // 62.8318
console.log(`${area.toFixed(2)} cm`); // 314.159