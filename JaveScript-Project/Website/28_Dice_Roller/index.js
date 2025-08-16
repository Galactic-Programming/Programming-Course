// Dice Roller with statistics
let totalRolls = 0;
let highestSum = 0;

function rollDice() {
  const numOfDice = parseInt(document.getElementById("numOfDice").value);
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  // Validate input
  if (numOfDice < 1 || numOfDice > 10) {
    diceResult.textContent = "Please enter a number between 1 and 10";
    return;
  }

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
  }

  const sum = values.reduce((a, b) => a + b, 0);

  diceResult.textContent = `🎲 Dice: ${values.join(", ")} | Sum: ${sum}`;
  diceImages.innerHTML = images.join("");

  // Update statistics
  totalRolls++;
  if (sum > highestSum) {
    highestSum = sum;
  }

  updateStats();

  // Add animation to button
  const button = document.querySelector(".roll-button");
  button.style.animation = "none";
  setTimeout(() => {
    button.style.animation = "shake 0.5s ease-in-out";
  }, 10);
}

function updateStats() {
  document.getElementById("totalRolls").textContent = totalRolls;
  document.getElementById("highestSum").textContent = highestSum;
}
