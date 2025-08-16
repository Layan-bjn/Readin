/* 
  FAQ.js
  Project: Readin
  Description: Handles the interactive FAQ section on the Readin platform.
               Clicking a question expands/collapses the corresponding answer
               while collapsing other open answers for a clean UI.
  Author: twammate
*/

document.addEventListener("DOMContentLoaded", function () {
  // Select all FAQ question buttons
  const questions = document.querySelectorAll(".faq-question");

  // Add click event listener to each question
  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling; // The corresponding answer div
      const isOpen = answer.style.maxHeight; // Check if answer is already open

      // Close all answers first
      document.querySelectorAll(".faq-answer").forEach((a) => {
        a.style.maxHeight = null;
        a.style.padding = "0 20px";
      });

      // If the clicked answer was closed, open it
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "15px 20px";
      }
    });
  });

  console.log("FAQ script loaded ✅");
});
