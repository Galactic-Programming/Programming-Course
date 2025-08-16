// EventListner = Listen for specific events to create interactive web pages
//                Events: Keydown, Keyup, Keypress
//                document.addEventListener("keydown", function(event) { ... })

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    myBox.textContent = "🫨";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
    myBox.textContent = "😁";
    myBox.style.backgroundColor = "lightgreen";
});

document.addEventListener("keydown", (event) => {

    event.preventDefault(); // Prevent default action for arrow keys

    if (event.key.startsWith("Arrow")) {

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.transform = `translate(${x}px, ${y}px)`;
    }
});
