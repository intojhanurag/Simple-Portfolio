//Toggling Menu
window.onload = function () {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.getElementById('main-content');
    const changingText = document.getElementById('changing-text');
    
    const messages = ["नमस्ते", "Ji" ]; // Array of messages to cycle through
    let index = 0;

    // Function to change the text
    function changeText() {
        changingText.textContent = messages[index];
        index = (index + 1) % messages.length; // Cycle through the array
    }

    // Change the text every 1 second (1000ms)
    setInterval(changeText, 1000);

    // Set a timer for how long you want the splash screen to show before fading out
    setTimeout(() => {
        // Fade out the splash screen
        splashScreen.classList.add('fade-out');

        // After fade-out, show the main content
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000); // Match the fade-out time
    }, 3000); // Duration for splash screen (3 seconds in this case)
};



const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {} )
sr.reveal('.button', {delay: 200} )
sr.reveal('.home-img', {delay: 400} )
sr.reveal('.home-social', {delay: 400,} )

sr.reveal('.about-img', {} )
sr.reveal('.about-subtitle', {delay: 200} )
sr.reveal('.about-text', {delay: 400} )

sr.reveal('.skills-subtitle', {delay: 100} )
sr.reveal('.skills-text', {delay: 150} )
sr.reveal('.skills-data', {interval: 200} )
sr.reveal('.skills-img', {delay: 400} )

sr.reveal('.work-img', {interval: 200} )

sr.reveal('.contact-input', {interval: 200} )