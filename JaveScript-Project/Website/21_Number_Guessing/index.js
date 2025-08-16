// Number Guessing Game - Modern UI Version
class NumberGuessingGame {
  constructor() {
    this.minNum = 1;
    this.maxNum = 100;
    this.answer = 0;
    this.attempts = 0;
    this.gameHistory = [];
    this.gamesWon = parseInt(localStorage.getItem("gamesWon")) || 0;
    this.bestScore = parseInt(localStorage.getItem("bestScore")) || null;
    this.hintsUsed = 0;
    this.maxHints = 2;

    this.initGame();
    this.updateStats();
    this.setupEventListeners();
  }

  initGame() {
    this.answer =
      Math.floor(Math.random() * (this.maxNum - this.minNum + 1)) + this.minNum;
    this.attempts = 0;
    this.gameHistory = [];
    this.hintsUsed = 0;

    this.updateDisplay();
    this.clearFeedback();
    this.clearHistory();
    this.enableInput();

    document.getElementById(
      "rangeDisplay"
    ).textContent = `${this.minNum} - ${this.maxNum}`;
    document.getElementById("hintButton").disabled = false;
  }

  setupEventListeners() {
    const input = document.getElementById("guessInput");
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.makeGuess();
      }
    });

    input.addEventListener("input", (e) => {
      const value = parseInt(e.target.value);
      if (value < this.minNum || value > this.maxNum) {
        e.target.style.borderColor = "#e74c3c";
      } else {
        e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
      }
    });
  }

  makeGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
      this.showFeedback("Please enter a valid number.", "error");
      return;
    }

    if (guess < this.minNum || guess > this.maxNum) {
      this.showFeedback(
        `Please enter a number between ${this.minNum} and ${this.maxNum}.`,
        "error"
      );
      return;
    }

    this.attempts++;
    this.updateDisplay();

    // Add to history
    let historyClass = "";
    if (guess < this.answer) {
      historyClass = "too-low";
    } else if (guess > this.answer) {
      historyClass = "too-high";
    }

    this.gameHistory.push({ guess, class: historyClass });
    this.updateHistory();

    if (guess < this.answer) {
      this.showFeedback(
        `🔺 Too low! The number is higher than ${guess}.`,
        "warning"
      );
    } else if (guess > this.answer) {
      this.showFeedback(
        `🔻 Too high! The number is lower than ${guess}.`,
        "warning"
      );
    } else {
      this.winGame();
    }

    guessInput.value = "";
    guessInput.focus();
  }

  winGame() {
    this.showFeedback(
      `🎉 Congratulations! You guessed ${this.answer} correctly in ${this.attempts} attempts!`,
      "success"
    );

    this.gamesWon++;
    if (this.bestScore === null || this.attempts < this.bestScore) {
      this.bestScore = this.attempts;
      localStorage.setItem("bestScore", this.bestScore);
    }
    localStorage.setItem("gamesWon", this.gamesWon);

    this.updateStats();
    this.disableInput();
  }

  showHint() {
    if (this.hintsUsed >= this.maxHints) {
      this.showFeedback("No more hints available!", "error");
      return;
    }

    this.hintsUsed++;
    let hintMessage = "";

    if (this.hintsUsed === 1) {
      // First hint: odd or even
      hintMessage = `💡 Hint ${this.hintsUsed}: The number is ${
        this.answer % 2 === 0 ? "even" : "odd"
      }.`;
    } else if (this.hintsUsed === 2) {
      // Second hint: range narrowing
      const mid = Math.floor((this.minNum + this.maxNum) / 2);
      hintMessage = `💡 Hint ${this.hintsUsed}: The number is ${
        this.answer > mid ? "greater" : "less than or equal to"
      } ${mid}.`;
    }

    this.showFeedback(hintMessage, "warning");

    if (this.hintsUsed >= this.maxHints) {
      document.getElementById("hintButton").disabled = true;
    }
  }

  showFeedback(message, type = "") {
    const feedback = document.getElementById("feedback");
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
  }

  clearFeedback() {
    const feedback = document.getElementById("feedback");
    feedback.textContent = "Enter your first guess to start!";
    feedback.className = "feedback";
  }

  updateHistory() {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = this.gameHistory
      .map(
        (item) =>
          `<span class="history-item ${item.class}">${item.guess}</span>`
      )
      .join("");
  }

  clearHistory() {
    document.getElementById("history").innerHTML = "";
  }

  updateDisplay() {
    document.getElementById("attemptsDisplay").textContent = this.attempts;
  }

  updateStats() {
    document.getElementById("gamesWon").textContent = this.gamesWon;
    document.getElementById("bestScore").textContent = this.bestScore || "-";
  }

  disableInput() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
    document.getElementById("hintButton").disabled = true;
  }

  enableInput() {
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessButton").disabled = false;
    document.getElementById("guessInput").focus();
  }

  newGame() {
    this.initGame();
    this.showFeedback("🎯 New game started! Good luck!", "");
  }
}

// Global functions for HTML onclick events
let game;

function makeGuess() {
  game.makeGuess();
}

function newGame() {
  game.newGame();
}

function showHint() {
  game.showHint();
}

// Initialize game when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  game = new NumberGuessingGame();
});
