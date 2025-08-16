// Digital Clock Program

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  // Format hours in 12-hour format
  const formattedHours =
    hours > 12 ? String(hours - 12).padStart(2, "0") : hours;
  const ampm = hours >= 12 ? "PM" : "AM";
  // Update the clock display
  const clock = document.getElementById("clock");
  clock.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

  // Update date display
  updateDate();

  // Add pulse animation
  clock.classList.add("pulse");
  setTimeout(() => clock.classList.remove("pulse"), 1000);
}

function updateDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateElement = document.getElementById("date");
  if (dateElement) {
    dateElement.textContent = now.toLocaleDateString("en-US", options);
  }
}

updateClock(); // Initial call to set the clock immediately
setInterval(updateClock, 1000); // Update the clock every second

// Optional: Update the status message
function updateStatus(message) {
  const status = document.getElementById("status");
  status.textContent = message;
}
document.addEventListener("DOMContentLoaded", () => {
  updateStatus("Digital Clock Program Loaded");
});

// Optional: Add a button to reset the clock
document.getElementById("resetButton").addEventListener("click", () => {
  updateClock(); // Reset the clock display
  updateStatus("Clock reset to current time");
});
// Optional: Add a button to toggle 12/24 hour format
document.getElementById("toggleFormatButton").addEventListener("click", () => {
  const clock = document.getElementById("clock");
  const currentText = clock.textContent;
  const is12HourFormat =
    currentText.includes("AM") || currentText.includes("PM");
  if (is12HourFormat) {
    // Convert to 24-hour format
    const [time, period] = currentText.split(" ");
    let [hours, minutes, seconds] = time.split(":");
    if (period === "PM" && hours !== "12") {
      hours = String(parseInt(hours, 10) + 12).padStart(2, "0");
    }
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    updateStatus("Switched to 24-hour format");
  } else {
    // Convert to 12-hour format
    const [hours, minutes, seconds] = currentText.split(":");
    const period = parseInt(hours, 10) >= 12 ? "PM" : "AM";
    const formattedHours = String(parseInt(hours, 10) % 12 || 12).padStart(
      2,
      "0"
    );
    clock.textContent = `${formattedHours}:${minutes}:${seconds} ${period}`;
    updateStatus("Switched to 12-hour format");
  }
});

// Optional: Add a button to change the clock's background color
document.getElementById("changeColorButton").addEventListener("click", () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#FF69B4"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  updateStatus(`Background color changed to ${randomColor}`);
});

// Optional: Add a button to toggle the clock's visibility
document.getElementById("toggleClockButton").addEventListener("click", () => {
  const clock = document.getElementById("clock");
  clock.style.display = clock.style.display === "none" ? "block" : "none";
  updateStatus(
    `Clock ${clock.style.display === "none" ? "hidden" : "visible"}`
  );
});
