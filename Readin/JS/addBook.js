/* 
    File: addBook.js
    Project: Readin
    Description: Handles the form submission for adding a new book.
                 Prevents default form submission, displays a confirmation message,
                 and resets the form fields.
    Author: Layan Bajandooh
*/

// Get references to the form and the confirmation message element
const form = document.getElementById("bookForm");
const message = document.getElementById("confirmationMessage");

// Listen for the form submission event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default page reload on form submit
  
  // Show the confirmation message by removing the "hidden" class
  message.classList.remove("hidden");
  
  // Reset all form fields to their default values
  form.reset();
});
