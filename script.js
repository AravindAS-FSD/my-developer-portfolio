// Select the element
const hireButton = document.getElementById('hireBtn');

// Define the action
function showMessage() {
    alert("Great choice! Let's build something amazing together.");
}

// Listen for the click
hireButton.addEventListener('click', showMessage);