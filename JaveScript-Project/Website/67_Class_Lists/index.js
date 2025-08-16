// ClassList = Element property in JavaScript used to interact with an element's list of classes (CSS classes).
// Allows you to make reusable classes for many elements across your webpage.

// Add() - Adds a class to the element's class list.
// Remove() - Removes a class from the element's class list.
// Toggle() - Toggles a class on or off. If the class is present, it removes it; if not, it adds it.
// Replace() - Replaces an existing class with a new class.
// Contains() - Checks if a class is present in the element's class list.

const myH1 = document.getElementById("myH1");
const myBtn = document.getElementById("myBtn");

myBtn.classList.add("enabled");
myH1.classList.add("enabled");
// myBtn.classList.remove("enabled");

myBtn.addEventListener("mouseover", event => {
    event.target.classList.add("hovered");
})
myBtn.addEventListener("mouseout", event => {
    event.target.classList.remove("hovered");
})

myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "🤬";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

myBtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent = "🤬";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

let buttons = document.querySelectorAll(".myBtns");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hovered");
    });
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hovered");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent = "🤬";
        } else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});