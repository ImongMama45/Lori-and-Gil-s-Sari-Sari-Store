document.addEventListener("DOMContentLoaded", function () {
    const samples = document.querySelector(".products-samples");
    const productss = document.querySelectorAll(".produkto_obj");
    const leftButton = document.querySelector(".left-btn");
    const rightButton = document.querySelector(".right-btn");

    let currentIndex = 0;

    // Function to update the visible products
    function updateSlider(index) {
        const translateXValue = -index * 132; // Move by 100% of the container width
        samples.style.transform = `translateX(${translateXValue}%)`;
        samples.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    }

    // Event listeners for buttons
    leftButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + productss.length) % productss.length; // Loop to the last if moving left from the first
        updateSlider(currentIndex);
    });

    rightButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % productss.length; // Loop to the first if moving right from the last
        updateSlider(currentIndex);
    });

    // Initialize slider
    updateSlider(currentIndex);
});
