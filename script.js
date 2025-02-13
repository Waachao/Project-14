document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const gif = document.querySelector(".first.image");
    const textDiv = document.querySelector(".text");

    // Function to move the "No" button randomly
    function moveNoButton() {
        const maxX = window.innerWidth - noButton.offsetWidth - 20; // Prevent overflow
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Event for desktop (mouseover)
    noButton.addEventListener("mouseover", moveNoButton);

    // Event for mobile (touchstart)
    noButton.addEventListener("touchstart", (e) => {
        e.preventDefault(); // Prevent default button click
        moveNoButton();
    });

     // Yes button changes image, text, and hides buttons
     yesButton.addEventListener("click", () => {
        gif.src = "2.gif"; // Change the GIF
        textDiv.innerHTML = `<h1 class="h2">Yay! You're my Valentine ❤️</h1>`;

        // Hide the buttons
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });
});
