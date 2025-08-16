/* 
    File: Home.js
    Project: Readin
    Description: Handles the login button functionality on the Home page.
                 Validates the input fields and redirects the user to the profile page if both fields are filled.
    Author: teammate
*/

// Select the login button
const logButton = document.querySelector(".login-btn");

if (logButton) { 
  // Add click event listener to the login button
  logButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the name and password input fields
    const nameInput = document.querySelector(".login-form input[type='text']");
    const passwordInput = document.querySelector(".login-form input[type='password']");

    // Check if both fields are not empty
    if (nameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
      // Redirect to the profile page if validation passes
      window.location.href = "profile.html";
    } else {
      // Alert the user if any field is empty
      alert("Please fill in both name and password.");
    }
  });
}
