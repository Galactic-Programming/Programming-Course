// Enhanced Calculator Program

const display = document.getElementById("display");
const history = document.getElementById("history");
let currentInput = "";
let operator = "";
let previousInput = "";
let shouldResetDisplay = false;

// Initialize calculator
document.addEventListener("DOMContentLoaded", () => {
  display.value = "0";
  setupKeyboardSupport();
});

// Append input to display
function appendToDisplay(input) {
  if (shouldResetDisplay) {
    display.value = "";
    shouldResetDisplay = false;
  }

  // Handle special cases
  if (display.value === "0" && input !== ".") {
    display.value = input;
  } else {
    // Prevent multiple decimal points
    if (input === "." && display.value.includes(".")) {
      return;
    }

    // Prevent multiple operators in a row
    if (isOperator(input) && isOperator(display.value.slice(-1))) {
      display.value = display.value.slice(0, -1) + input;
    } else {
      display.value += input;
    }
  }

  // Auto-scroll to show the latest input
  display.scrollLeft = display.scrollWidth;
}

// Check if character is an operator
function isOperator(char) {
  return ["+", "-", "*", "/", "×", "÷"].includes(char);
}

// Clear display
function clearDisplay() {
  display.value = "0";
  history.textContent = "";
  currentInput = "";
  operator = "";
  previousInput = "";
  shouldResetDisplay = false;
}

// Delete last character
function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

// Calculate result
function calculate() {
  try {
    let expression = display.value;

    // Replace display symbols with JavaScript operators
    expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

    // Validate expression
    if (!isValidExpression(expression)) {
      throw new Error("Invalid expression");
    }

    // Store current expression in history
    history.textContent = display.value + " =";

    // Calculate result
    const result = Function('"use strict"; return (' + expression + ")")();

    // Handle division by zero
    if (!isFinite(result)) {
      throw new Error("Cannot divide by zero");
    }

    // Format result
    const formattedResult = formatResult(result);
    display.value = formattedResult;
    shouldResetDisplay = true;
  } catch (error) {
    console.error("Calculation error:", error);
    display.value = "Error";
    history.textContent = "Invalid operation";
    shouldResetDisplay = true;

    // Clear error after 2 seconds
    setTimeout(() => {
      if (display.value === "Error") {
        clearDisplay();
      }
    }, 2000);
  }
}

// Validate mathematical expression
function isValidExpression(expression) {
  // Check for invalid patterns
  const invalidPatterns = [
    /[+\-*/]{2,}/, // Multiple operators in a row
    /^[+*/]/, // Starting with operator (except minus)
    /[+\-*/]$/, // Ending with operator
    /\(\)/, // Empty parentheses
    /[+\-*/]\)/, // Operator before closing parenthesis
    /\([+*/]/, // Opening parenthesis followed by operator (except minus)
  ];

  return !invalidPatterns.some((pattern) => pattern.test(expression));
}

// Format calculation result
function formatResult(result) {
  // Handle very small numbers
  if (Math.abs(result) < 0.000001 && result !== 0) {
    return result.toExponential(6);
  }

  // Handle very large numbers
  if (Math.abs(result) > 999999999999) {
    return result.toExponential(6);
  }

  // Round to avoid floating point errors
  const rounded = Math.round(result * 100000000) / 100000000;

  // Remove unnecessary decimal places
  return rounded.toString();
}

// Keyboard support
function setupKeyboardSupport() {
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Prevent default for calculator keys
    if (
      "0123456789+-*/.=()".includes(key) ||
      key === "Enter" ||
      key === "Escape" ||
      key === "Backspace"
    ) {
      event.preventDefault();
    }

    // Handle different key presses
    switch (key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        appendToDisplay(key);
        break;
      case "+":
        appendToDisplay("+");
        break;
      case "-":
        appendToDisplay("-");
        break;
      case "*":
        appendToDisplay("×");
        break;
      case "/":
        appendToDisplay("÷");
        break;
      case "(":
      case ")":
        appendToDisplay(key);
        break;
      case "Enter":
      case "=":
        calculate();
        break;
      case "Escape":
      case "c":
      case "C":
        clearDisplay();
        break;
      case "Backspace":
        deleteLast();
        break;
    }
  });
}

// Add visual feedback for button presses
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 100);
    });
  });
});
