// Callback = a function that is passed as an argument to another function.
//            use to handle asynchronous operations.
//            1. Reading a file
//            2. Requesting data from a server
//            3. Network requests


function hello(Callback) {
    console.log('Hello');
    Callback();
}

function wait() {
    console.log('Waiting...');
}

hello(wait); // Output: Hello, Waiting...

function sum(Callback, x, y) {
    let result = x + y;
    Callback(result);
}
function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1,2); // Output: 3
sum(displayConsole, 1,2); // Output: 3

// Callback functions can also be used to handle errors in asynchronous operations.
function fetchData(url, Callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        if (url === "valid-url") {
            Callback(null, { data: "Fetched data successfully!" });
        } else {
            Callback("Error: Invalid URL", null);
        }
    }, 1000);
}
fetchData("valid-url", (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});