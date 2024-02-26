document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value.trim().toLowerCase();
      window.location.href = `productlist.html?search=${encodeURIComponent(
        searchTerm
      )}`;
    }
  });
});
