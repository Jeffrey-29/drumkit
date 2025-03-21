// Detecting button click
let drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
    // Mouse Click Event
    button.addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(this);
    });

    // Touch Event for Smartphones/Tablets
    button.addEventListener("touchstart", function (event) {
        event.preventDefault(); // Prevents unwanted double-tap zoom issues
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(this);
    });
});

// Detecting keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    let activeButton = document.querySelector("." + event.key);
    if (activeButton) buttonAnimation(activeButton);
});

// Play sounds
function makeSound(key) {
    let sound;
    switch (key) {
        case "w": sound = "sounds/tom-1.mp3"; break;
        case "a": sound = "sounds/tom-2.mp3"; break;
        case "s": sound = "sounds/tom-3.mp3"; break;
        case "d": sound = "sounds/tom-4.mp3"; break;
        case "j": sound = "sounds/snare.mp3"; break;
        case "k": sound = "sounds/crash.mp3"; break;
        case "l": sound = "sounds/kick-bass.mp3"; break;
        default: return;
    }
    let audio = new Audio(sound);
    audio.play();
}

// Button animation
function buttonAnimation(currentButton) {
    currentButton.classList.add("pressed");

    // Glow effect
    currentButton.style.animation = "buttonGlow 1s infinite alternate";

    setTimeout(() => {
        currentButton.classList.remove("pressed");
        currentButton.style.animation = "";
    }, 200);
}

// Subtle Background Animation
let colors = ["#303030", "#404040", "#1a1a1a"];
let i = 0;

// Set the background immediately on page load
document.body.style.background = `linear-gradient(135deg, ${colors[i]}, #1A1A1D, #3B1C32)`;

// Start the interval for animation
setInterval(() => {
    i = (i + 1) % colors.length;
    document.body.style.background = `linear-gradient(135deg, ${colors[i]}, #1A1A1D, #3B1C32)`;
}, 5000);
