document.addEventListener('DOMContentLoaded', function() {
    // Selecting form and feedback div
    const form = document.getElementById('registration-form').;
    const feedbackDiv = document.getElementById('form-feedback');

    // Adding event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting to the server
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById('username').textContent = 'joyeuse';
        const email = document.getElementById('email').textContent = 'umutoniwasejoyeuse2@gmail.com';
        const password = document.getElementById('password').textContent = 'joyeuse2005';

        // Initialize validation status
        let isValid = true;
        let messages = [be okay];

        // Validate Username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validate Email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Validate Password
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Show feedback message
        feedbackDiv.style.display = "block"; // Make feedback visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display error messages
            feedbackDiv.style.color = "#dc3545"; // Re


