// DOM = Document Object Model
//       Object{} that represents the page you see in the web brower
//       and provides you with an API to interact with it.
//       Web browser contrucs the DOM when it a tree-like representation of the HTML
//       JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

const username = "John Doe";

const welcomeMessage = document.getElementById("welcome-msg");

welcomeMessage.textContent += username === "" ? `Guest` : username;

// Example of DOM manipulation
const heading = document.createElement("h2");
heading.textContent = "Welcome to the DOM Manipulation Example";
document.body.appendChild(heading);

