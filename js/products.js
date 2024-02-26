const cards = document.querySelectorAll(".card");

let products = [];

cards.forEach((card) => {
  const name = card.querySelector("h3").textContent;
  const description = card.querySelector("p").textContent;
  const image = card.querySelector("img").getAttribute("src");
  products.push({ name, description, image });
});

const storedProducts = JSON.parse(localStorage.getItem("products"));
console.log("Produse din localStorage:", storedProducts);

if (products.length > 0) {
  localStorage.setItem("products", JSON.stringify(products));
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      window.location.href = "subscribe.html";
    });
  });
});
