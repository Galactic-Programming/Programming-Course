// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// Old pattern to handle asynchronous functions.
// Use promises + async/await to avoid callback hell.

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 3000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 3000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 3000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed");
        });
    });
});

