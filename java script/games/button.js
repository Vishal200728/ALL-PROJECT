// button.js

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggle-btn");

    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
