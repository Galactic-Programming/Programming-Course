// 🎯 COMPREHENSIVE EVENT LISTENERS DEMO
// Demonstrating various types of event listeners with interactive examples

// ===== MAIN INTERACTIVE BOX =====
const interactiveBox = document.getElementById("interactiveBox");
const boxText = document.getElementById("boxText");

// Mouse Events for Interactive Box
interactiveBox.addEventListener("mouseover", (event) => {
  boxText.textContent = "Looking good! 😍";
  interactiveBox.style.background = "linear-gradient(45deg, #ff9a9e, #fecfef)";
  interactiveBox.classList.add("animate-pulse");
});

interactiveBox.addEventListener("mouseout", (event) => {
  boxText.textContent = "Come back! 👋";
  interactiveBox.style.background = "linear-gradient(45deg, #a8edea, #fed6e3)";
  interactiveBox.classList.remove("animate-pulse");
});

interactiveBox.addEventListener("mousedown", (event) => {
  boxText.textContent = "Pressed! 😮";
  interactiveBox.style.background = "linear-gradient(45deg, #667eea, #764ba2)";
});

interactiveBox.addEventListener("mouseup", (event) => {
  boxText.textContent = "Released! 😌";
  interactiveBox.style.background = "linear-gradient(45deg, #f093fb, #f5576c)";
});

// ===== BUTTON EVENT LISTENERS =====
const clickBtn = document.getElementById("clickBtn");
const doubleClickBtn = document.getElementById("doubleClickBtn");
const resetBtn = document.getElementById("resetBtn");

// Click Event
clickBtn.addEventListener("click", (event) => {
  boxText.textContent = "Button Clicked! 🎉";
  interactiveBox.style.background = "linear-gradient(45deg, #4facfe, #00f2fe)";
  interactiveBox.classList.add("animate-bounce");

  // Add sparkle effect
  createSparkles(interactiveBox);

  setTimeout(() => {
    interactiveBox.classList.remove("animate-bounce");
  }, 1000);
});

// Double Click Event
doubleClickBtn.addEventListener("dblclick", (event) => {
  boxText.textContent = "Double Clicked! ⚡⚡";
  interactiveBox.style.background = "linear-gradient(45deg, #fa709a, #fee140)";
  interactiveBox.style.transform = "rotate(360deg) scale(1.1)";

  setTimeout(() => {
    interactiveBox.style.transform = "rotate(0deg) scale(1)";
  }, 500);
});

// Reset Button
resetBtn.addEventListener("click", (event) => {
  boxText.textContent = "Reset! 🔄";
  interactiveBox.style.background = "linear-gradient(45deg, #ff6b6b, #feca57)";
  interactiveBox.style.transform = "rotate(0deg) scale(1)";
  interactiveBox.classList.remove("animate-pulse", "animate-bounce");

  // Clear all active cards
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });
});

// ===== CARD EVENT LISTENERS =====
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  // Click Event for Cards
  card.addEventListener("click", (event) => {
    // Remove active class from all cards
    cards.forEach((c) => c.classList.remove("active"));

    // Add active class to clicked card
    card.classList.add("active");

    const color = card.dataset.color;
    const colorMap = {
      blue: "linear-gradient(45deg, #4facfe, #00f2fe)",
      red: "linear-gradient(45deg, #ff758c, #ff7eb3)",
      green: "linear-gradient(45deg, #42e695, #3bb2b8)",
    };

    boxText.textContent = `${color.toUpperCase()} Card Selected! 🎨`;
    interactiveBox.style.background = colorMap[color];
  });

  // Hover Effect for Cards
  card.addEventListener("mouseenter", (event) => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", (event) => {
    if (!card.classList.contains("active")) {
      card.style.transform = "translateY(0) scale(1)";
    }
  });
});

// ===== MOUSE POSITION TRACKER =====
const mouseTracker = document.getElementById("mouseTracker");
const mouseInfo = document.getElementById("mouseInfo");

mouseTracker.addEventListener("mousemove", (event) => {
  const rect = mouseTracker.getBoundingClientRect();
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);

  mouseInfo.textContent = `X: ${x}px, Y: ${y}px`;

  // Create trailing effect
  createTrailDot(event.clientX, event.clientY);
});

mouseTracker.addEventListener("mouseenter", (event) => {
  mouseTracker.style.background = "rgba(79, 172, 254, 0.1)";
  mouseInfo.style.color = "#ff6b6b";
});

mouseTracker.addEventListener("mouseleave", (event) => {
  mouseTracker.style.background = "rgba(255,255,255,0.9)";
  mouseInfo.style.color = "#4facfe";
  mouseInfo.textContent = "Mouse left the area! 😌";
});

// ===== KEYBOARD EVENT LISTENERS =====
const textInput = document.getElementById("textInput");
const keyInfo = document.getElementById("keyInfo");

textInput.addEventListener("keydown", (event) => {
  keyInfo.innerHTML = `
        <strong>Key Down:</strong> ${event.key}<br>
        <strong>Key Code:</strong> ${event.keyCode}<br>
        <strong>Ctrl:</strong> ${event.ctrlKey ? "Yes" : "No"}<br>
        <strong>Shift:</strong> ${event.shiftKey ? "Yes" : "No"}
    `;
});

textInput.addEventListener("keyup", (event) => {
  keyInfo.innerHTML = `
        <strong>Key Released:</strong> ${event.key}<br>
        <strong>Input Value:</strong> "${event.target.value}"<br>
        <strong>Length:</strong> ${event.target.value.length} characters
    `;
});

textInput.addEventListener("focus", (event) => {
  keyInfo.textContent = "Input focused! Start typing...";
  textInput.style.borderColor = "#42e695";
});

textInput.addEventListener("blur", (event) => {
  keyInfo.textContent = "Input lost focus!";
  textInput.style.borderColor = "#ddd";
});

// ===== UTILITY FUNCTIONS =====

// Create sparkle animation
function createSparkles(element) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: #ffd700;
                border-radius: 50%;
                pointer-events: none;
                animation: sparkle 1s ease-out forwards;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
            `;

      element.style.position = "relative";
      element.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 1000);
    }, i * 100);
  }
}

// Create mouse trail effect
function createTrailDot(x, y) {
  const dot = document.createElement("div");
  dot.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: #4facfe;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        left: ${x - 3}px;
        top: ${y - 3}px;
        animation: fadeOut 0.5s ease-out forwards;
    `;

  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 500);
}

// Add sparkle animation to CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);

// ===== WINDOW EVENT LISTENERS =====
window.addEventListener("load", () => {
  console.log("🎉 Page loaded successfully!");
  boxText.textContent = "Page Loaded! Ready to interact! 🚀";
});

window.addEventListener("resize", () => {
  console.log("📱 Window resized!");
  boxText.textContent = "Window Resized! 📱";
});

// ===== DOCUMENT EVENT LISTENERS =====
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("👋 Tab is hidden");
  } else {
    console.log("👀 Tab is visible");
    boxText.textContent = "Welcome back! 👀";
  }
});

console.log("🎯 All Event Listeners have been set up successfully!");
