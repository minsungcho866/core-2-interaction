// Function to toggle between text elements
function toggleText(buttonId, textId) {
    var text = document.getElementById(textId);
    var buttons = document.querySelectorAll('button');
    
    // Toggle visibility of text elements
    document.querySelectorAll('.typing-animation').forEach(element => {
        if (element.id === textId) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    });

    // Toggle button classes
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    });
}

// Event listener for button 1 click
document.getElementById("toggleButton").addEventListener("click", function() {
    toggleText("toggleButton2", "text2");
});

// Event listener for button 2 click
document.getElementById("toggleButton2").addEventListener("click", function() {
    toggleText("toggleButton3", "text3");
});

// Event listener for button 3 click
document.getElementById("toggleButton3").addEventListener("click", function() {
    toggleText("toggleButton", "text1");
});

// Trigger typing animation for each element with 'typing-animation' class
document.querySelectorAll('.typing-animation').forEach(element => {
    var text = element.textContent;
    element.innerHTML = '';

    // For each character in the text, create a span with the character
    for (let i = 0; i < text.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.textContent = text.charAt(i);
        charSpan.style.animation = `typing 3s steps(30, end) forwards ${i * 0.1}s`;
        element.appendChild(charSpan);
    }
});
