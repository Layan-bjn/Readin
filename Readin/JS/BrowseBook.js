const params = new URLSearchParams(window.location.search);
const titleFromURL = params.get("title"); 

if(titleFromURL) {
  const allCards = document.querySelectorAll(".bookCard");
  let found = false;

  allCards.forEach(card => {
    const bookName = card.textContent.trim().toLowerCase();
    if(bookName.includes(titleFromURL.toLowerCase())) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  if(!found) alert("No book found with that name");
}