/*
    File: common.js
    Project: Readin
    Description: Common JavaScript functionality shared across all pages of the Readin website.
                 Includes:
                 - Book search functionality with local and redirected search
                 - Scroll-to-top button behavior
    Author: Layan Bajandooh
*/

/* ================================
   Book Search Functionality
================================= */

// Select all search forms on the page
const searchForms = document.querySelectorAll(".search-form");

searchForms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputValue = form.querySelector("input").value.trim();
    if(inputValue === "") return;

    const booksContainer = document.querySelector("#booksContainer");
    const currentPage = window.location.pathname.split("/").pop();

    // If the page does not contain a books container (not BrowseBook.html)
    if(!booksContainer) {
      // Redirect to BrowseBook.html with the search query as URL parameter
      window.location.href = "BrowseBook.html?title=" + encodeURIComponent(inputValue);
      return;
    }

    // Local search on BrowseBook.html
    const books = document.querySelectorAll(".bookCard");
    let found = false;

    books.forEach(book => {
      const title = book.textContent.toLowerCase();
      if(title.includes(inputValue.toLowerCase())) {
        book.style.display = "block";
        found = true;
      } else {
        book.style.display = "none";
      }
    });

    if(!found) alert("No book found with that name");
  });
});

/* ================================
   Scroll-to-Top Button Functionality
================================= */

const topBtn = document.getElementById("topBtn");

if(topBtn){
  // Show or hide the button based on scroll position
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  // Smooth scroll to top on button click
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
