document.addEventListener("DOMContentLoaded", () => {
  const checkoutButton = document.querySelector(".checkout");
  const modal = document.querySelector(".modal");
  let modalOpacity = 0;

  function fadeInModal() {
    modalOpacity += 0.05;
    modal.style.opacity = modalOpacity;
    if (modalOpacity < 1) {
      requestAnimationFrame(fadeInModal);
    }
  }

  function fadeOutModal() {
    modalOpacity -= 0.05;
    modal.style.opacity = modalOpacity;
    if (modalOpacity > 0) {
      requestAnimationFrame(fadeOutModal);
    } else {
      modal.style.display = "none";
    }
  }

  const redirectButtons = document.querySelectorAll(".sub-action");
  redirectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "subscribe.html";
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("action")) {
      modal.style.display = "block";
      fadeInModal();
    }
    if (
      event.target.classList.contains("modal") &&
      event.target.classList.contains("inner-container")
    ) {
      fadeOutModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      fadeOutModal();
    }
  });

  checkoutButton.addEventListener("click", () => {
    window.location.href = "./checkout.html";
  });
});
