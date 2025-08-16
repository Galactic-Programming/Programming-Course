// NodeList = Static collection of HTML elements by (id, class, tag, etc...)
//            Can be created by using quertSelectorAll() method
//            Similar to an array, but no (map, filter, reduce, etc...)
//            NodeList won't update to automatically reflect changes in the DOM

let buttons = document.querySelectorAll(".myBtns");

// Add HTML/CSS Properties to all buttons
buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += "😎";
});

// Add event listener to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
});

// Add Mouseover + Mouseout event listener
buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "hsl(195, 53%, 79%)";
  });
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "green";
  });
});

// Add an element to the NodeList
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myBtns";
document.body.appendChild(newButton);

// Remove an element from the NodeList
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myBtns");
    console.log(buttons); // Updated NodeList after removal of button
  });
});

// Note: The NodeList will not automatically update to reflect the new button,
// so we need to re-query the buttons after adding or removing elements.
// This is why we reassign `buttons` after the removal event listener.