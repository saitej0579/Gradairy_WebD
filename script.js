const userId = document.querySelector("input[data-allow1]"); // Select the input field
const userPass = document.querySelector("input[data-allow2]")
const button = document.querySelector("button[data-button]"); // Select the button
const text = document.querySelector("p[data-text]"); // Select the paragraph text
const section = document.querySelector(".allowSection"); // Select the section with class 'allowSection'

// Check sessionStorage for saved state when the page loads
window.addEventListener("DOMContentLoaded", function() {
    const isHidden = sessionStorage.getItem("hiddenSection"); // Get the value from sessionStorage
    if (isHidden === "true") { // If the section was hidden during the session, remove the active class
        section.classList.remove("active");
    }
});

function change() {
    if (userId.value === "0579" && userPass.value ==="tej") { // Check if input value is "tej"
        section.classList.remove("active"); // Remove 'active' class to hide the section
        sessionStorage.setItem("hiddenSection", "true"); // Save the hidden state in sessionStorage
    }
}
button.addEventListener("click", change); // Add event listener to button

