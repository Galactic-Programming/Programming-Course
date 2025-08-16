// synchronous = Executed line by line consecutively in a sequential manner.
//               Code that watis for an operation to complete before moving on to the next line.

// asynchronous = Allows multiple operations to be performed concurrently without waiting for each operation to complete.
//                Does not block the execution flow and allows the program to continue
//                (I/O operations, network requests, timers, fetching data, etc.)
//                Handled with: Callbacks, Promises, Async/Await

// Example of synchronous code
function synchronousExample() {
    console.log("Start");
    console.log("Middle");
    console.log("End");
}
// synchronousExample();

// Example of asynchronous code using setTimeout
function asynchronousExample() {
    console.log("Start");
    setTimeout(() => {
        console.log("Middle");
    }, 1000);
    console.log("End");
}
// asynchronousExample();

// Example of asynchronous code using a Promise
function promiseExample() {
    console.log("Start");
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Middle");
        }, 1000);
    });

    promise.then((result) => {
        console.log(result);
    });
    console.log("End");
}
// promiseExample();

// Example of asynchronous code using async/await
async function asyncAwaitExample() {
    console.log("Start");
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Middle");
        }, 1000);
    });
    console.log(result);
    console.log("End");
}
asyncAwaitExample();

