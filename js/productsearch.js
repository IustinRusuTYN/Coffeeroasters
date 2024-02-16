document.addEventListener("DOMContentLoaded", function () {
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get("search");

  if (searchTerm) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      const productName = card.textContent.trim().toLowerCase();

      if (productName.includes(searchTerm)) {
        card.classList.add("highlight");

        card.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        card.classList.remove("highlight");
      }
    });
  }
});
