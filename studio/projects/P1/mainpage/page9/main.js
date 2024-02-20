// Function to switch between texts
function switchText() {
    var texts = document.querySelectorAll('.text');
    
    // Fade out the first text after 2 seconds
    setTimeout(function() {
        texts[0].classList.add('fade-out');
        
        // After the fade out animation completes
        setTimeout(function() {
            texts[0].classList.add('fade-out-hide'); // Hide the first text
            texts[0].classList.remove('fade-out'); // Remove the fade-out class
            
            // Show the next text
            texts[1].style.display = 'block';
            texts[1].classList.add('fade-in'); // Add fade-in animation
            
            // After a certain duration, reset the animation
            setTimeout(function() {
                texts[1].classList.remove('fade-in');
            }, 1000); // Change this value to match the duration of your fade-in animation
        }, 1000); // Change this value to match the duration of your fade-out animation
    }, 1800); // 2-second delay before fading out the first text
}

// Call the switchText function when the page loads
window.addEventListener('load', switchText);
