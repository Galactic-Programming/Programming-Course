// Promises = An object that manages asynchronous operations.
//            Wrap a Promise Object around { asynchronous code } to handle the result of the operation when it completes.
//            "I promise to return a value"
//            Pending -> resolved or rejected
//            new Promise((resolve, reject) => { asynchronous code })

// Do these chores in order:
// 1. walk the dog
// 2. wash the dishes
// 3. do the laundry

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isDogWalked = true; // Simulating a condition

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

walkTheDog()
  .then((value) => {
    console.log(value);
    return washTheDishes();
  })
  .then((value) => {
    console.log(value);
    return doTheLaundry();
  })
  .then((value) => {
    console.log(value);
    console.log("All chores done!");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
