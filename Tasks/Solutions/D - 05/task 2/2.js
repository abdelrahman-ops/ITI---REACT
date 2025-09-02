
// Function to prompt user for color and apply it
function applyColor() {
    // Define valid color options
    const validColors = ['red', 'green', 'blue'];
    let userColor;
    
    // Keep asking until we get a valid color or user cancels
    do {
        userColor = prompt("Please choose a color: red, green, or blue.");
        
        // If user cancels, exit the function
        if (userColor === null) {
            return;
        }
        
        // Convert to lowercase and trim whitespace
        userColor = userColor.toLowerCase().trim();
        
        // Check if the color is valid
        if (!validColors.includes(userColor)) {
            alert("Please enter only red, green, or blue.");
        }
    } while (!validColors.includes(userColor));
    
    // Apply the selected color to all elements with class 'colored-text'
    const coloredElements = document.querySelectorAll('.colored-text');
    coloredElements.forEach(element => {
        element.style.color = userColor;
        element.style.fontWeight = '600';
    });
}

// Run the function when the page loads
window.onload = applyColor;