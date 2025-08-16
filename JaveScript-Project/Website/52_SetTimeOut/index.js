// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (in milliseconds).

// Time are approximate (varies based on the workload of the JavaScript runtime environment).

// 1.Syntax: setTimeout(function, milliseconds, param1, param2, ...);

// clearTimeout() = function in JavaScript that allows you to cancel a timeout that was previously established by calling setTimeout().

// 2.Syntax: clearTimeout(timeoutID);

let timeoutID; // Variable to store the timeout ID
let countdownInterval; // Variable for countdown timer
let countdownValue = 10; // Initial countdown value
let multipleTimers = []; // Array to store multiple timer IDs

// Function to update status display
function updateStatus(message) {
  const statusDisplay = document.getElementById("statusDisplay");
  if (statusDisplay) {
    statusDisplay.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
  }
  console.log(message);
}

// ========== BASIC TIMER FUNCTIONS ==========
function startTimer() {
  // Clear any existing timer first
  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  timeoutID = setTimeout(() => {
    window.alert("Hello! Your 3-second timer has finished! 🎉");
    updateStatus("Basic timer completed - Alert shown!");
  }, 3000);

  updateStatus("Basic timer started - will alert in 3 seconds...");
}

function clearTimer() {
  if (timeoutID) {
    clearTimeout(timeoutID);
    timeoutID = null;
    updateStatus("Basic timer cleared - no alert will be shown.");
  } else {
    updateStatus("No active timer to clear.");
  }
}

// ========== COUNTDOWN TIMER FUNCTIONS ==========
function startCountdown() {
  // Reset countdown value
  countdownValue = 10;

  // Clear any existing countdown
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  const display = document.getElementById("countdownDisplay");

  // Update display immediately
  display.textContent = countdownValue;
  display.className = "countdown-display";

  updateStatus("Countdown started from 10...");

  countdownInterval = setInterval(() => {
    countdownValue--;
    display.textContent = countdownValue;

    // Add visual effects based on countdown value
    if (countdownValue <= 3 && countdownValue > 0) {
      display.className = "countdown-display danger";
    } else if (countdownValue <= 5 && countdownValue > 3) {
      display.className = "countdown-display warning";
    }

    updateStatus(`Countdown: ${countdownValue}`);

    if (countdownValue <= 0) {
      clearInterval(countdownInterval);
      display.textContent = "🎉 DONE! 🎉";
      display.className = "countdown-display";
      updateStatus("Countdown finished!");

      // Reset after 2 seconds
      setTimeout(() => {
        display.textContent = "10";
        countdownValue = 10;
      }, 2000);
    }
  }, 1000);
}

function stopCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    updateStatus(`Countdown stopped at ${countdownValue}`);

    // Reset display
    const display = document.getElementById("countdownDisplay");
    display.className = "countdown-display";
  } else {
    updateStatus("No active countdown to stop.");
  }
}

// ========== MULTIPLE TIMER FUNCTIONS ==========
function quickAlert() {
  updateStatus("Quick timer started (1 second)...");

  const timerId = setTimeout(() => {
    alert("⚡ Quick Alert! This was the 1-second timer!");
    updateStatus("Quick timer completed!");
    // Remove this timer from the array
    multipleTimers = multipleTimers.filter((id) => id !== timerId);
  }, 1000);

  multipleTimers.push(timerId);
}

function mediumAlert() {
  updateStatus("Medium timer started (5 seconds)...");

  const timerId = setTimeout(() => {
    alert("⏰ Medium Alert! This was the 5-second timer!");
    updateStatus("Medium timer completed!");
    // Remove this timer from the array
    multipleTimers = multipleTimers.filter((id) => id !== timerId);
  }, 5000);

  multipleTimers.push(timerId);
}

function slowAlert() {
  updateStatus("Slow timer started (10 seconds)...");

  const timerId = setTimeout(() => {
    alert("🐌 Slow Alert! This was the 10-second timer!");
    updateStatus("Slow timer completed!");
    // Remove this timer from the array
    multipleTimers = multipleTimers.filter((id) => id !== timerId);
  }, 10000);

  multipleTimers.push(timerId);
}

// ========== ADVANCED EXAMPLES ==========

// Example 1: Timer with parameters
function timerWithParameters(name, delay) {
  return setTimeout(
    (userName) => {
      console.log(`Hello ${userName}! This timer had a ${delay}ms delay.`);
      updateStatus(`Parametered timer for ${userName} completed!`);
    },
    delay,
    name
  );
}

// Example 2: Recursive timer (like setInterval but with setTimeout)
function recursiveTimer(count = 0) {
  if (count < 5) {
    updateStatus(`Recursive timer: ${count + 1}/5`);
    setTimeout(() => recursiveTimer(count + 1), 1000);
  } else {
    updateStatus("Recursive timer sequence completed!");
  }
}

// Example 3: Timer chain (one after another)
function chainedTimers() {
  updateStatus("Starting chained timers...");

  setTimeout(() => {
    updateStatus("First timer in chain completed (1s)");

    setTimeout(() => {
      updateStatus("Second timer in chain completed (2s)");

      setTimeout(() => {
        updateStatus("All chained timers completed! (3s)");
      }, 1000);
    }, 1000);
  }, 1000);
}

// Example 4: Promise-based timer
function promiseTimer(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise timer completed after ${delay}ms`);
    }, delay);
  });
}

// Example 5: Debounce function using setTimeout
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// ========== UTILITY FUNCTIONS ==========

// Function to clear all active timers
function clearAllTimers() {
  // Clear basic timer
  if (timeoutID) {
    clearTimeout(timeoutID);
    timeoutID = null;
  }

  // Clear countdown
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  // Clear all multiple timers
  multipleTimers.forEach((timerId) => clearTimeout(timerId));
  multipleTimers = [];

  updateStatus("All timers cleared!");
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  updateStatus("Page loaded - Ready to start timers!");

  // Example of using the advanced functions
  console.log("=== Advanced Timer Examples ===");

  // Example with parameters
  // timerWithParameters("John", 2000);

  // Example with promises
  // promiseTimer(1500).then(result => console.log(result));

  // Example debounced function
  const debouncedLog = debounce((message) => {
    console.log(`Debounced: ${message}`);
  }, 300);

  console.log(
    "Try calling: recursiveTimer(), chainedTimers(), or clearAllTimers()"
  );
});

// Add keyboard shortcuts
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    switch (event.key) {
      case "1":
        event.preventDefault();
        startTimer();
        break;
      case "2":
        event.preventDefault();
        startCountdown();
        break;
      case "c":
        event.preventDefault();
        clearAllTimers();
        break;
    }
  }
});

console.log("🚀 SetTimeout Examples Loaded!");
console.log(
  "Keyboard shortcuts: Ctrl+1 (Basic Timer), Ctrl+2 (Countdown), Ctrl+C (Clear All)"
);
