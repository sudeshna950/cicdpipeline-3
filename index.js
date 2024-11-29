// Function to display a message when the button is clicked
function displayAlert() {
    alert("Button has been clicked Welcome to the webpage.");
}

// Change the content of an element dynamically
function changeContent() {
    const heading = document.getElementById("dynamic-heading");
    heading.innerText = "You just clicked the button!";
    heading.style.color = "blue";
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("action-button");
    button.addEventListener("click", () => {
        displayAlert();
        changeContent();
    });
});
