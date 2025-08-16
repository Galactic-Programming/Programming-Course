// Closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance.
// Used frequently in JavaScript libraries and frameworks: React, Vue, Angular, etc.

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing outer function's variable
  }

  innerFunction(); // Calling inner function
}

outerFunction(); // Output: I am from outer function

// Example of closure with a counter
function createCounter() {
  let count = 0; // Private variable

  function increment() {
    count++;
    console.log(count);
  }

  function getCount() {
    return count;
  }

  function reset() {
    count = 0;
    console.log("Counter reset");
  }

  return {
    increment,
    getCount,
    reset,
  };
}

const counter = createCounter(); // Creating a counter instance
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.getCount(); // Output: 2
counter.reset(); // Output: Counter reset

function createGameScoreManager() {
  let score = 0;

  function increaseScore(points) {
    score += points; // Accessing and modifying the outer variable
    console.log(`Score increased by ${points}. Current score: ${score}`);
  }

  function decreaseScore(points) {
    score -= points; // Accessing and modifying the outer variable
    console.log(`Score decreased by ${points}. Current score: ${score}`);
  }

  function getScore() {
    return score; // Accessing the outer variable
  }

  return {
    increaseScore,
    decreaseScore,
    getScore,
  };
}

const game = createGameScoreManager(); // Creating a game score manager instance
game.increaseScore(10); // Output: Score increased by 10. Current score: 10
game.increaseScore(5); // Output: Score increased by 5. Current score: 15
console.log(game.getScore()); // Output: 15
game.decreaseScore(3); // Output: Score decreased by 3. Current score: 12
console.log(game.getScore()); // Output: 12