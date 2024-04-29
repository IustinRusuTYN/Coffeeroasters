document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const navsLi = document.querySelectorAll(".navs li");
  const button = document.getElementById("create");

  function verificaConditii() {
    const dropdownsCompleted = Array.from(dropdowns).every(function (dropdown) {
      return dropdown.nextElementSibling.style.display === "block";
    });

    if (dropdownsCompleted) {
      const alteConditiiIndeplinite = true;

      if (alteConditiiIndeplinite) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    } else {
      button.disabled = true;
    }
  }

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
      this.children[1].classList.toggle("rotate");

      verificaConditii();
    });
  });

  navsLi.forEach(function (li) {
    li.addEventListener("click", function () {
      navsLi.forEach(function (siblingLi) {
        siblingLi.classList.remove("active");
      });
      this.classList.add("active");

      dropdowns.forEach(function (dropdown) {
        dropdown.nextElementSibling.style.display = "none";
        dropdown.children[1].classList.remove("rotate");
      });

      const activeNum = this.dataset.n;
      const acc = document.querySelector(`.acc[data-n="${activeNum}"]`);
      acc.children[1].style.display = "block";
      acc.children[1].previousElementSibling.children[1].classList.add(
        "rotate"
      );
    });
  });

  for (let i = 1; i <= 5; i++) {
    const selector = `#choise_${i} .card`;
    const cards = document.querySelectorAll(selector);
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        cards.forEach(function (c) {
          c.classList.remove("green");
        });
        this.classList.add("green");
        document.querySelector(`#a${i}`).textContent =
          this.children[0].textContent;
        document.querySelector(`#m${i}`).textContent =
          this.children[0].textContent;
      });
    });
  }
});
