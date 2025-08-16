const myBtn = document.getElementById("myBtn");
const myImage = document.getElementById("myImage");
const placeholder = document.querySelector(".image-placeholder");
const btnText = document.querySelector(".text");
const btnIcon = document.querySelector(".icon");

// Initialize the state - image is visible by default
let isImageVisible = true;

myBtn.addEventListener("click", (event) => {
  if (isImageVisible) {
    // Hide image
    myImage.style.visibility = "hidden";
    placeholder.classList.add("show");
    btnText.textContent = "Show";
    btnIcon.textContent = "👁️";
    isImageVisible = false;
  } else {
    // Show image
    myImage.style.visibility = "visible";
    placeholder.classList.remove("show");
    btnText.textContent = "Hide";
    btnIcon.textContent = "🙈";
    isImageVisible = true;
  }
});
