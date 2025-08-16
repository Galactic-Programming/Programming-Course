// Async/Await
// Async = makes a function return a promise
// Await = makes an async function wait for a promise to resolve or reject

// Allows you write asynchronous code in a synchronous manner
// Async does not have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDogWalked = false; // Simulating a condition

      if (isDogWalked) {
        resolve("Walked the dog");
      } else {
        reject("Failed to walk the dog");
      }
    }, 3000);
  });
}

function washTheDishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDishesWashed = true; // Simulating a condition

      if (isDishesWashed) {
        resolve("Washed the dishes");
      } else {
        reject("Failed to wash the dishes");
      }
    }, 3000);
  });
}

function doTheLaundry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isLaundryDone = true; // Simulating a condition

      if (isLaundryDone) {
        resolve("Done the laundry");
      } else {
        reject("Failed to do the laundry");
      }
    }, 3000);
  });
}

// walkTheDog()
//   .then((value) => {
//     console.log(value);
//     return washTheDishes();
//   })
//   .then((value) => {
//     console.log(value);
//     return doTheLaundry();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("All chores done!");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

async function doChores() {
  try {
    const dogWalkResult = await walkTheDog();
    console.log(dogWalkResult);

    const dishesWashResult = await washTheDishes();
    console.log(dishesWashResult);

    const laundryResult = await doTheLaundry();
    console.log(laundryResult);

    console.log("All chores done!");
  } catch (error) {
    console.error(error);
  }
}

doChores();
