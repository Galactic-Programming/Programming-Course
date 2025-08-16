// Error = An object that is created to represent an problem that occurs
//         Occur often with user input or establishing a connection
//         Can be handled with try/catch blocks
//         Can be thrown with the throw keyword

// try { } = Encloses code that might potentially cause an error
// catch { } = Catches the error and allows you to handle it from the try block
// throw = Used to create a custom error message or object
//         Can be used to throw an error when a condition is not met
// finally { } = Optional block that runs after try/catch, regardless of whether an error occurred

try {
  console.log("Trying to fetch data...");
  // Network Errors
  // Promises Errors
  // Security Errors
} catch (error) {
  console.error("An error occurred:", error.message);
  // Handle the error, e.g., show a user-friendly message
} finally {
  // Close Files
  // Close Connections
  // Cleanup Resources
  console.log("This will always run, regardless of an error.");
}
console.log("This code runs after the try/catch block.");

// Example of throwing a custom error
function validateInput(input) {
  if (input === "") {
    throw new Error("Input cannot be empty");
  }
  return true;
}

try {
  validateInput("10"); // This will throw an error
} catch (error) {
  console.error("Validation error:", error.message);
  // Handle the validation error, e.g., prompt the user to enter valid input
}

// Example of using try/catch with promises
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    // Handle the fetch error, e.g., show a user-friendly message
  } finally {
    console.log("Fetch attempt finished.");
  }
}
// fetchData("https://api.example.com/data")
//   .then((data) => {
//     if (data) {
//       console.log("Data fetched successfully:", data);
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error.message);
//   });

try {
  const dividend = window.prompt("Enter a dividend: ");
  const divisor = window.prompt("Enter a divisor: ");

  if (divisor === "0") {
    throw new Error("Division by zero is not allowed.");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Both inputs must be numbers.");
  }

  const result = dividend / divisor;
  console.log(`The result of ${dividend} divided by ${divisor} is: ${result}`);
} 
catch (error) {
  console.error(error);
} 
finally {
  console.log("Cleanup actions can be performed here.");
}
