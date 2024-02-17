document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const orderStatus = urlParams.get("order");

  if (orderStatus === "success") {
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const orderStatus = urlParams.get("order");

  if (orderStatus === "success") {
    const confirmationOverlay = document.getElementById("confirmation-overlay");
    const confirmationMessage = document.getElementById("confirmation-message");

    function closeConfirmation() {
      confirmationOverlay.remove();
    }

    confirmationOverlay.addEventListener("click", function (event) {
      if (event.target === confirmationOverlay) {
        closeConfirmation();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeConfirmation();
      }
    });

    confirmationOverlay.style.display = "block";
  }
});
