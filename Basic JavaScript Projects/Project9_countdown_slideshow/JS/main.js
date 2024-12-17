// Countdown function
let countdownInterval;
let countdownTime = 10; // Countdown time in seconds

// Function to start the countdown
function startCountdown() {
    const countdownDisplay = document.getElementById("countdownDisplay");
    
    // Update countdown every second
    countdownInterval = setInterval(function() {
        countdownDisplay.textContent = countdownTime;
        countdownTime--;
        
        // Stop the countdown at 0
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

// Slideshow logic
let currentSlide = 0;
const slides = document.querySelectorAll("#slideshow img");

// Function to show the next slide
function showNextSlide() {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // Show the next slide
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    }
    slides[currentSlide].style.display = "block";
}

// Show the first slide immediately
showNextSlide();

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);