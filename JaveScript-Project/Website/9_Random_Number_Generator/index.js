// Enhanced Random Number Generator
class RandomNumberGenerator {
  constructor() {
    this.generationCount = 0;
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.getElementById("generateButton").addEventListener("click", () => {
      this.generateNumbers();
    });

    // Allow Enter key to generate numbers
    ["minInput", "maxInput", "countInput"].forEach((id) => {
      document.getElementById(id).addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.generateNumbers();
        }
      });
    });

    // Validate inputs on change
    document.getElementById("minInput").addEventListener("change", () => {
      this.validateInputs();
    });

    document.getElementById("maxInput").addEventListener("change", () => {
      this.validateInputs();
    });
  }

  validateInputs() {
    const minInput = document.getElementById("minInput");
    const maxInput = document.getElementById("maxInput");
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (min >= max) {
      maxInput.value = min + 1;
    }
  }

  generateNumbers() {
    const min = parseInt(document.getElementById("minInput").value);
    const max = parseInt(document.getElementById("maxInput").value);
    const count = parseInt(document.getElementById("countInput").value);

    // Validate inputs
    if (isNaN(min) || isNaN(max) || isNaN(count)) {
      alert("Please enter valid numbers");
      return;
    }

    if (min >= max) {
      alert("Maximum must be greater than minimum");
      return;
    }

    if (count < 1 || count > 10) {
      alert("Count must be between 1 and 10");
      return;
    }

    // Generate random numbers
    const numbers = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNumber);
    }

    this.displayNumbers(numbers);
    this.updateStats(numbers);
    this.generationCount++;
    document.getElementById("genCount").textContent = this.generationCount;

    // Add animation to the generate button
    const button = document.getElementById("generateButton");
    button.style.animation = "pulse 0.3s ease";
    setTimeout(() => {
      button.style.animation = "";
    }, 300);
  }

  displayNumbers(numbers) {
    const container = document.getElementById("numbersDisplay");
    container.innerHTML = "";

    numbers.forEach((number, index) => {
      const numberElement = document.createElement("div");
      numberElement.className = "number-item";
      numberElement.textContent = number;
      numberElement.style.animationDelay = `${index * 0.1}s`;
      container.appendChild(numberElement);
    });
  }

  updateStats(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = (sum / numbers.length).toFixed(1);

    document.getElementById("sumValue").textContent = sum;
    document.getElementById("avgValue").textContent = average;
  }
}

// Global functions for HTML onclick events
let generator;

function copyNumbers() {
  const numberItems = document.querySelectorAll(".number-item");
  if (numberItems.length === 0) {
    alert("No numbers to copy!");
    return;
  }

  const numbers = Array.from(numberItems).map((item) => item.textContent);
  const text = numbers.join(", ");

  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Show temporary feedback
      const button = event.target.closest(".action-button");
      const originalText = button.innerHTML;
      button.innerHTML = "<span>✓</span>Copied!";

      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Numbers copied to clipboard!");
    });
}

function clearResults() {
  const container = document.getElementById("numbersDisplay");
  container.innerHTML =
    '<div class="placeholder">Click "Generate Numbers" to start!</div>';

  document.getElementById("sumValue").textContent = "-";
  document.getElementById("avgValue").textContent = "-";
}

// Initialize generator when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  generator = new RandomNumberGenerator();
});
