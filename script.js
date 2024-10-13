// JavaScript function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Background image array
const backgrounds = [
    'old.jpg', // Replace with your image URLs
    'img.webp',     // Replace with your image URLs
    'rain.jpg'      // Replace with your image URLs
];

let currentBackground = 0;

// Function to change background images
function changeBackground() {
    const heroSection = document.querySelector('.hero');
    
    // Fade out
    heroSection.classList.remove('visible');
    
    setTimeout(() => {
        // Set the next background image
        currentBackground = (currentBackground + 1) % backgrounds.length;
        heroSection.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
        
        // Fade in
        heroSection.classList.add('visible');
    }, 1000); // Match this with the fade out duration
}

// Change background every 1 seconds
setInterval(changeBackground, 1000);

// Set the initial background image
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero').style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
    document.querySelector('.hero').classList.add('visible'); // Make it visible on load
});

