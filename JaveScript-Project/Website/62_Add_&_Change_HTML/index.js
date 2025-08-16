// ========================================
// 🚀 Interactive DOM Manipulation Examples
// ========================================

// Global variables to track current state
let currentH1 = null;
let h1Location = "none";
let fruitCounter = 0;

// Code examples for display
const codeExamples = {
  createH1: `// Step 1: Create a new H1 element
const newH1 = document.createElement("h1");

// Step 2: Add attributes and properties
newH1.textContent = "🎉 Welcome to My Website!";
newH1.id = "main-title";
newH1.className = "dynamic-title";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
newH1.style.fontSize = "2.5rem";

// Step 3: Append to DOM
document.getElementById("h1-container").appendChild(newH1);`,

  modifyH1: `// Modify existing H1 element
const h1 = document.getElementById("main-title");
h1.textContent = "✨ Modified Title!";
h1.style.color = "purple";
h1.style.transform = "rotate(2deg)";`,

  moveH1: `// Move H1 to different locations
const h1 = document.getElementById("main-title");
const targetBox = document.getElementById("box1");
targetBox.appendChild(h1);`,

  removeH1: `// Remove H1 element
const h1 = document.getElementById("main-title");
h1.parentNode.removeChild(h1);`,

  addFruit: `// Add new list item
const newLi = document.createElement("li");
newLi.textContent = "🍍 Pineapple";
newLi.className = "fruit-item";
newLi.style.backgroundColor = "#fff3cd";
document.getElementById("fruits").appendChild(newLi);`,

  insertFruit: `// Insert before specific element
const newLi = document.createElement("li");
newLi.textContent = "🥝 Kiwi";
newLi.className = "fruit-item";
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newLi, orange);`,

  replaceFruit: `// Replace existing element
const newLi = document.createElement("li");
newLi.textContent = "🥭 Mango";
newLi.className = "fruit-item";
const banana = document.getElementById("banana");
document.getElementById("fruits").replaceChild(newLi, banana);`,

  removeFruit: `// Remove last fruit item
const fruitsList = document.getElementById("fruits");
const lastFruit = fruitsList.lastElementChild;
if (lastFruit) {
  fruitsList.removeChild(lastFruit);
}`,
};

// ========================================
// 🎯 H1 Element Management Functions
// ========================================

function createH1() {
  if (currentH1) {
    alert("H1 element already exists! Remove it first or modify it.");
    return;
  }

  // Create new H1 element
  const newH1 = document.createElement("h1");

  // Add attributes and properties
  newH1.textContent = "🎉 Welcome to My Website!";
  newH1.id = "main-title";
  newH1.className = "dynamic-title fade-in";
  newH1.style.color = "tomato";
  newH1.style.textAlign = "center";
  newH1.style.fontSize = "2.5rem";
  newH1.style.margin = "20px 0";
  newH1.style.textShadow = "2px 2px 4px rgba(0,0,0,0.3)";

  // Append to container
  const container = document.getElementById("h1-container");
  container.innerHTML = ""; // Clear placeholder
  container.appendChild(newH1);
  container.classList.add("has-content");

  // Update state
  currentH1 = newH1;
  h1Location = "container";
  updateH1Buttons();

  // Show code
  displayCode("createH1");
}

function modifyH1() {
  if (!currentH1) return;

  const colors = ["purple", "navy", "darkgreen", "darkred", "indigo"];
  const texts = [
    "✨ Modified Title!",
    "🚀 Updated Content!",
    "🎨 Styled Header!",
    "⭐ Amazing Title!",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  currentH1.textContent = randomText;
  currentH1.style.color = randomColor;
  currentH1.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
  currentH1.classList.add("bounce-in");

  setTimeout(() => {
    currentH1.classList.remove("bounce-in");
  }, 600);

  displayCode("modifyH1");
}

function moveH1() {
  if (!currentH1) return;

  const boxes = ["box1", "box2", "box3"];
  let targetBox;

  if (h1Location === "container") {
    targetBox = document.getElementById("box1");
    h1Location = "box1";
  } else {
    const currentBoxIndex = boxes.indexOf(h1Location);
    const nextBoxIndex = (currentBoxIndex + 1) % boxes.length;

    if (nextBoxIndex === 0) {
      targetBox = document.getElementById("h1-container");
      h1Location = "container";
      targetBox.classList.add("has-content");
    } else {
      targetBox = document.getElementById(boxes[nextBoxIndex]);
      h1Location = boxes[nextBoxIndex];
    }
  }

  targetBox.appendChild(currentH1);
  currentH1.classList.add("fade-in");

  setTimeout(() => {
    currentH1.classList.remove("fade-in");
  }, 500);

  displayCode("moveH1");
}

function removeH1() {
  if (!currentH1) return;

  currentH1.style.animation = "fadeOut 0.5s ease-out";

  setTimeout(() => {
    currentH1.parentNode.removeChild(currentH1);

    // Reset container if H1 was there
    if (h1Location === "container") {
      const container = document.getElementById("h1-container");
      container.innerHTML =
        '<p class="placeholder">H1 element will appear here...</p>';
      container.classList.remove("has-content");
    }

    // Reset state
    currentH1 = null;
    h1Location = "none";
    updateH1Buttons();

    displayCode("removeH1");
  }, 500);
}

function updateH1Buttons() {
  const createBtn = document.getElementById("create-h1");
  const modifyBtn = document.getElementById("modify-h1");
  const moveBtn = document.getElementById("move-h1");
  const removeBtn = document.getElementById("remove-h1");

  if (currentH1) {
    createBtn.disabled = true;
    modifyBtn.disabled = false;
    moveBtn.disabled = false;
    removeBtn.disabled = false;
  } else {
    createBtn.disabled = false;
    modifyBtn.disabled = true;
    moveBtn.disabled = true;
    removeBtn.disabled = true;
  }
}

// ========================================
// 🍎 List Item Management Functions
// ========================================

function addFruit() {
  fruitCounter++;
  const newLi = document.createElement("li");

  const fruits = [
    "🍍 Pineapple",
    "🥝 Kiwi",
    "🥭 Mango",
    "🍓 Strawberry",
    "🫐 Blueberry",
    "🍑 Cherry",
  ];
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

  newLi.textContent = randomFruit;
  newLi.className = "fruit-item bounce-in";
  newLi.id = `fruit-${fruitCounter}`;
  newLi.style.backgroundColor = "#fff3cd";

  document.getElementById("fruits").appendChild(newLi);

  setTimeout(() => {
    newLi.classList.remove("bounce-in");
  }, 600);

  displayCode("addFruit");
}

function insertFruit() {
  fruitCounter++;
  const newLi = document.createElement("li");

  newLi.textContent = "🥝 Kiwi (Inserted)";
  newLi.className = "fruit-item fade-in";
  newLi.id = `fruit-${fruitCounter}`;
  newLi.style.backgroundColor = "#d4edda";

  const orange = document.getElementById("orange");
  if (orange) {
    document.getElementById("fruits").insertBefore(newLi, orange);
  } else {
    document.getElementById("fruits").appendChild(newLi);
  }

  setTimeout(() => {
    newLi.classList.remove("fade-in");
  }, 500);

  displayCode("insertFruit");
}

function replaceFruit() {
  fruitCounter++;
  const banana = document.getElementById("banana");

  if (banana) {
    const newLi = document.createElement("li");
    newLi.textContent = "🥭 Mango (Replaced)";
    newLi.className = "fruit-item bounce-in";
    newLi.id = `fruit-${fruitCounter}`;
    newLi.style.backgroundColor = "#ffeaa7";

    document.getElementById("fruits").replaceChild(newLi, banana);

    setTimeout(() => {
      newLi.classList.remove("bounce-in");
    }, 600);
  } else {
    alert("Banana not found to replace!");
  }

  displayCode("replaceFruit");
}

function removeFruit() {
  const fruitsList = document.getElementById("fruits");
  const lastFruit = fruitsList.lastElementChild;

  if (lastFruit) {
    lastFruit.style.animation = "fadeOut 0.5s ease-out";

    setTimeout(() => {
      fruitsList.removeChild(lastFruit);
    }, 500);
  } else {
    alert("No fruits to remove!");
  }

  displayCode("removeFruit");
}

// ========================================
// 💻 Code Display Function
// ========================================

function displayCode(exampleKey) {
  const codeDisplay = document.getElementById("code-display");
  const code = codeExamples[exampleKey];

  if (code) {
    codeDisplay.innerHTML = `
      <pre><code>${formatCode(code)}</code></pre>
    `;
  }
}

function formatCode(code) {
  return code
    .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>')
    .replace(
      /\b(const|let|var|function|document|if|else|return)\b/g,
      '<span class="keyword">$1</span>'
    )
    .replace(
      /\b(createElement|getElementById|appendChild|removeChild|insertBefore|replaceChild|querySelector|querySelectorAll)\b/g,
      '<span class="method">$1</span>'
    )
    .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
    .replace(/`([^`]*)`/g, '<span class="string">`$1`</span>');
}

// ========================================
// 🎮 Event Listeners Setup
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // H1 management buttons
  document.getElementById("create-h1").addEventListener("click", createH1);
  document.getElementById("modify-h1").addEventListener("click", modifyH1);
  document.getElementById("move-h1").addEventListener("click", moveH1);
  document.getElementById("remove-h1").addEventListener("click", removeH1);

  // List management buttons
  document.getElementById("add-fruit").addEventListener("click", addFruit);
  document
    .getElementById("insert-fruit")
    .addEventListener("click", insertFruit);
  document
    .getElementById("replace-fruit")
    .addEventListener("click", replaceFruit);
  document
    .getElementById("remove-fruit")
    .addEventListener("click", removeFruit);

  // Initialize button states
  updateH1Buttons();

  // Show welcome message
  displayCode("createH1");
});

// Add CSS animation for fadeOut
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
document.head.appendChild(style);
