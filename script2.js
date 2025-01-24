// Wait until the page is fully loaded
// Wait until the page is fully loaded
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
