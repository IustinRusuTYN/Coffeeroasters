document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");

  searchInput.addEventListener("input", function () {
    performSearch();
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value.trim().toLowerCase();

      window.location.href = `productlist.html?search=${encodeURIComponent(
        searchTerm
      )}`;
    }
  });

  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      const productName = card.textContent.trim().toLowerCase();

      if (productName.includes(searchTerm)) {
        card.classList.add("highlight");
      } else {
        card.classList.remove("highlight");
      }
    });
  }
});
