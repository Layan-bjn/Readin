/*
    File: requestBorrow.js
    Project: Readin
    Description: Handles the form submission for requesting to borrow a book.
                 Prevents default form submission, resets the form fields,
                 and shows a confirmation message for 3 seconds.
    Author: teammate
*/

// Get the form element by its ID
const borrowForm = document.getElementById('borrowForm');

// Get the confirmation message element
const message = document.getElementById('confirmationMessage');

// Add event listener to handle form submission
borrowForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission (page reload)

  borrowForm.reset(); // Clear all form fields

  message.style.display = 'block'; // Show the confirmation message

  // Hide the confirmation message after 3 seconds
  setTimeout(() => (message.style.display = 'none'), 3000);
});
