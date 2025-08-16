/*
    File: BookDetails.js
    Project: Readin
    Description: Handles user interactions on the Book Details page.
                 Currently implements navigation logic to return
                 the user to the previous page.
    Author: Layan Bajandooh
*/

// Get the "Back to Book List" button element by its ID
const backBtn = document.getElementById("backBtn");

// Add a click event listener to the back button
backBtn.addEventListener("click", () => {
  // Navigate back to the previous page in browser history
  window.history.back();
});
