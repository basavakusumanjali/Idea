//Navbar Starts
// JavaScript function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

//navbar ends


//Disability Awarness Starts

document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordian');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');

            // Toggle the accordion body visibility
            const accordionBody = this.querySelector('.accordion-body');
            if (this.classList.contains('active')) {
                accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            } else {
                accordionBody.style.maxHeight = 0;
            }
        });
    });
});

//Disability Awarness Ends