// Constants = a variable that holds a fixed value and cannot be changed.

const PI = 3.14159;  // Pi value
let radius;
let circumference;

// radius = window.prompt("Enter the radius of the circle:");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(`The circumference of the circle is ${circumference.toFixed(2)} units.`);

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm.";
}