document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTermFromURL = urlParams.get("search");

  const searchInput = document.querySelector(".search-input");
  searchInput.value = decodeURIComponent(searchTermFromURL);

  searchInput.addEventListener("input", function () {
    performSearchInterfaceUpdate();
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  performSearch();

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".card");

    if (searchTerm === "") {
      cards.forEach(function (card) {
        card.classList.remove("highlight");
      });
      return;
    }

    let foundCard = null;
    let found = false;

    cards.forEach(function (card) {
      const productName = card.textContent.trim().toLowerCase();

      if (productName.includes(searchTerm)) {
        card.classList.add("highlight");
        found = true;
        if (!foundCard) {
          foundCard = card;
        }
      } else {
        card.classList.remove("highlight");
      }
    });

    if (!found) {
      alert("Nu a fost găsit niciun produs cu acest nume.");
    } else {
      if (foundCard) {
        foundCard.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function performSearchInterfaceUpdate() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".card");

    if (searchTerm === "") {
      cards.forEach(function (card) {
        card.classList.remove("highlight");
      });
    }
  }
});
